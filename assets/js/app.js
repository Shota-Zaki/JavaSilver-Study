(function () {
  const DATA = window.JAVA_STUDY_DATA;
  if (!DATA) return;

  const isSingleFile = Boolean(window.OFFLINE_SINGLE_FILE);
  let chapterId = window.CHAPTER_ID || getChapterIdFromHash();
  let currentMode = getInitialMode();
  let currentQuestionId = null;
  let timerHandle = null;

  const storageKey = "java-study-progress-v1";
  const examStorageKey = "java-study-exam-v1";
  const memoryStore = {};

  function storageGet(key) {
    try { return localStorage.getItem(key); }
    catch (_) { return memoryStore[key] || null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); }
    catch (_) { memoryStore[key] = value; }
  }

  function readJson(key, fallback) {
    try {
      const raw = storageGet(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    storageSet(key, JSON.stringify(value));
  }

  function readProgress() {
    const progress = readJson(storageKey, {});
    return progress && typeof progress === "object" ? progress : {};
  }

  function writeProgress(progress) {
    writeJson(storageKey, progress);
  }

  function readExamStore() {
    const store = readJson(examStorageKey, {});
    return store && typeof store === "object" ? store : {};
  }

  function writeExamStore(store) {
    writeJson(examStorageKey, store);
  }

  function getExamState(id = chapterId) {
    return readExamStore()[id] || null;
  }

  function setExamState(id, state) {
    const store = readExamStore();
    if (state) store[id] = state;
    else delete store[id];
    writeExamStore(store);
  }

  function isExamChapter(id = chapterId) {
    return id === "ch07" || id === "ch08";
  }

  function isExamActive(id = chapterId) {
    const state = getExamState(id);
    return Boolean(state && state.active);
  }

  function getChapterIdFromHash() {
    if (!isSingleFile) return null;
    const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    const id = raw.split("?")[0];
    return DATA.chapters.some(ch => ch.id === id) ? id : null;
  }

  function getInitialMode() {
    const params = new URLSearchParams(location.search || "");
    const hashQuery = (location.hash || "").split("?")[1] || "";
    const hashParams = new URLSearchParams(hashQuery);
    const mode = hashParams.get("mode") || params.get("mode") || "all";
    return ["all", "unanswered", "wrong", "flagged"].includes(mode) ? mode : "all";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
    return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function arraysEqual(a, b) {
    const aa = [...(a || [])].sort();
    const bb = [...(b || [])].sort();
    return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
  }

  function chapterById(id) {
    return DATA.chapters.find(ch => ch.id === id);
  }

  function chapterHref(ch, mode) {
    if (isSingleFile) return mode ? `#${ch.id}?mode=${mode}` : `#${ch.id}`;
    return mode ? `${ch.page}?mode=${encodeURIComponent(mode)}` : ch.page;
  }

  function questionType(q) {
    return q.type === "multi" || q.type === "multiple" || (q.answer || []).length > 1 || q.selectCount > 1
      ? "multi"
      : "single";
  }

  function requiredSelectCount(q) {
    return q.selectCount || (q.answer || []).length || 1;
  }

  function selectInstruction(q) {
    const count = requiredSelectCount(q);
    if (questionType(q) === "single") return "1つ選択";
    if ((q.options || []).length === count) return `すべて選択（${count}個）`;
    return `${count}つ選択`;
  }

  function isAnswered(record) {
    return Boolean(record && Array.isArray(record.selected) && record.selected.length > 0);
  }

  function isFlagged(record) {
    return Boolean(record && record.flagged);
  }

  function normalizeTag(value) {
    return String(value || "").trim().replace(/\s+/g, "-").toLowerCase();
  }

  function inferTags(q, chapter) {
    if (Array.isArray(q.tags) && q.tags.length) return q.tags.map(normalizeTag).filter(Boolean);

    const text = [
      q.title,
      q.prompt,
      ...(q.codeBlocks || []).map(block => block.code),
      ...(q.options || []).map(opt => opt.text || opt.code || ""),
      q.explanation && q.explanation.summary
    ].join("\n").toLowerCase();

    const rules = [
      ["package", /package|import|パッケージ|インポート/],
      ["main-method", /main\s*\(|mainメソッド|起動パラメータ|string\[\]|string\.\.\./],
      ["literal", /リテラル|0b|0x|underscore|アンダースコア|_\d|\d_/],
      ["var", /\bvar\b|型推論/],
      ["string", /string|文字列|equals|intern|substring|charat|indexof/],
      ["stringbuilder", /stringbuilder/],
      ["array", /\[\]|配列|array/],
      ["arraylist", /arraylist|list\.of|remove\(|add\(|set\(/],
      ["operator", /演算子|\+\+|--|&&|\|\||==|!=|<=|>=|instanceof/],
      ["control-flow", /if\s*\(|switch|for\s*\(|while\s*\(|break|continue|分岐|繰り返し/],
      ["object-reference", /参照|同一|同値|==|equals|new\s+string|null|ガベージ/],
      ["constructor", /コンストラクタ|this\(|super\(/],
      ["static", /static|クラス変数|クラスメソッド/],
      ["access-modifier", /private|protected|public|アクセス修飾子/],
      ["inheritance", /extends|継承|スーパークラス|サブクラス|override|オーバーライド/],
      ["interface", /interface|implements|default\s+|インタフェース|デフォルトメソッド/],
      ["sealed", /sealed|non-sealed|permits/],
      ["exception", /exception|try|catch|finally|throw|throws|例外|autocloseable/],
      ["compile-error", /コンパイルエラー/],
      ["runtime-exception", /実行時|runtimeexception|nullpointer|classcast|arrayindex|numberformat/]
    ];

    const inferred = rules.filter(([, re]) => re.test(text)).map(([tag]) => tag);
    if (inferred.length) return Array.from(new Set(inferred)).slice(0, 5);
    return [normalizeTag(chapter ? chapter.title : "general") || "general"];
  }

  function getQuestionTags(q) {
    const chapter = DATA.chapters.find(ch => (DATA.questions[ch.id] || []).some(item => item.id === q.id));
    return inferTags(q, chapter);
  }

  function saveAnswer(q, selected) {
    const progress = readProgress();
    const previous = progress[q.id] || {};
    progress[q.id] = {
      ...previous,
      selected: [...selected],
      isCorrect: arraysEqual(selected, q.answer),
      answeredAt: new Date().toISOString(),
      chapterId,
      tags: getQuestionTags(q)
    };
    writeProgress(progress);
  }

  function clearAnswer(q) {
    const progress = readProgress();
    const previous = progress[q.id];
    if (!previous) return;
    if (previous.flagged) {
      progress[q.id] = { flagged: true, chapterId, tags: getQuestionTags(q) };
    } else {
      delete progress[q.id];
    }
    writeProgress(progress);
  }

  function clearChapterProgress(id, keepFlags) {
    const questions = DATA.questions[id] || [];
    const progress = readProgress();
    questions.forEach(q => {
      const record = progress[q.id];
      if (!record) return;
      if (keepFlags && record.flagged) {
        progress[q.id] = { flagged: true, chapterId: id, tags: getQuestionTags(q) };
      } else {
        delete progress[q.id];
      }
    });
    writeProgress(progress);
  }

  function toggleFlag(q) {
    const progress = readProgress();
    const record = progress[q.id] || { chapterId, tags: getQuestionTags(q) };
    record.flagged = !record.flagged;
    if (!record.flagged && !isAnswered(record)) {
      delete progress[q.id];
    } else {
      progress[q.id] = record;
    }
    writeProgress(progress);
    renderActiveQuestion();
    updateProgressUi();
  }

  function selectedKeys(card) {
    return Array.from(card.querySelectorAll("input[data-option]:checked")).map(input => input.value);
  }

  function optionHtml(q, opt) {
    const inputType = questionType(q) === "multi" ? "checkbox" : "radio";
    const body = opt.code
      ? `<pre><code>${escapeHtml(opt.code)}</code></pre>`
      : `<span class="option-text">${escapeHtml(opt.text)}</span>`;
    return `<label class="option" data-key="${escapeHtml(opt.key)}">
      <input type="${inputType}" name="${escapeHtml(q.id)}" value="${escapeHtml(opt.key)}" data-option>
      <div><span class="option-key">${escapeHtml(opt.key)}.</span>${body}</div>
    </label>`;
  }

  function questionHtml(q) {
    const codeBlocks = (q.codeBlocks || []).map(block => `<div class="code-block">
      ${block.title ? `<span class="code-title">${escapeHtml(block.title)}</span>` : ""}
      <pre><code>${escapeHtml(block.code)}</code></pre>
    </div>`).join("");
    const command = q.command ? `<div class="command">${escapeHtml(q.command)}</div>` : "";
    const images = (q.images || []).map(img => `<figure class="q-image-figure">
      <img class="q-image" src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || q.title)}" loading="lazy">
      ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
    </figure>`).join("");
    const tags = getQuestionTags(q).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");
    return `<article class="question-card" id="${escapeHtml(q.id)}" data-question-id="${escapeHtml(q.id)}">
      <div class="q-head">
        <h2 class="q-title">問${q.number}. ${escapeHtml(q.title)}</h2>
        <div class="q-meta"><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>
      </div>
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${command}
      ${codeBlocks}
      ${images ? `<div class="q-image-list">${images}</div>` : ""}
      ${tags ? `<div class="tag-list" aria-label="関連タグ">${tags}</div>` : ""}
      <div class="options">${(q.options || []).map(opt => optionHtml(q, opt)).join("")}</div>
      <div class="answer-actions">
        <button class="btn primary" data-submit>解答する</button>
        <button class="btn ghost" data-clear>この問題の解答をリセット</button>
        <button class="btn" data-card-next>次の問題へ</button>
        <span class="inline-note" data-message></span>
      </div>
      <div class="result" data-result></div>
    </article>`;
  }

  function listHtml(items) {
    return Array.isArray(items) && items.length
      ? `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : "";
  }

  function optionAnalysisHtml(q) {
    const analyses = q.explanation && Array.isArray(q.explanation.optionAnalysis)
      ? q.explanation.optionAnalysis
      : [];
    if (analyses.length) {
      return `<div class="option-analysis-list">${analyses.map(item => `<div class="option-analysis ${item.isCorrect ? "is-correct" : "is-wrong"}">
        <div class="option-analysis-head"><span class="option-key">${escapeHtml(item.key)}.</span><span>${item.isCorrect ? "正しい選択肢" : "誤りの選択肢"}</span></div>
        <p>${escapeHtml(item.detail || "")}</p>
      </div>`).join("")}</div>`;
    }

    const points = q.explanation && Array.isArray(q.explanation.points) && q.explanation.points.length
      ? q.explanation.points
      : [];
    return points.length ? listHtml(points) : `<p class="muted">選択肢別の解説は未入力です。</p>`;
  }

  function explanationHtml(q, isCorrect, selected) {
    const exp = q.explanation || {};
    const answerText = (q.answer || []).join("・");
    const selectedText = selected.length ? selected.join("・") : "未選択";
    const summary = exp.summary || "解説未入力。";
    const correctReason = exp.correctReason || summary;
    const related = listHtml(exp.relatedKnowledge);
    const tips = listHtml(exp.examTips);
    const steps = listHtml(exp.judgeSteps);

    return `<h4>${isCorrect ? "正解" : "不正解"}</h4>
      <div class="answer-summary">
        <p><strong>あなたの解答:</strong> ${escapeHtml(selectedText)}</p>
        <p><strong>正解:</strong> ${escapeHtml(answerText)}</p>
      </div>
      <section class="explanation-section">
        <h5>正解になる理由</h5>
        <p>${escapeHtml(correctReason)}</p>
      </section>
      <section class="explanation-section">
        <h5>選択肢ごとの判定</h5>
        ${optionAnalysisHtml(q)}
      </section>
      ${related ? `<section class="explanation-section"><h5>関連知識</h5>${related}</section>` : ""}
      ${tips ? `<section class="explanation-section"><h5>試験での注意点</h5>${tips}</section>` : ""}
      ${steps ? `<section class="explanation-section"><h5>解き方の手順</h5>${steps}</section>` : ""}`;
  }

  function applyResult(card, q, selected, persist) {
    const isCorrect = arraysEqual(selected, q.answer);
    const result = card.querySelector("[data-result]");
    card.querySelectorAll(".option").forEach(label => {
      const key = label.dataset.key;
      label.classList.remove("correct", "incorrect", "missed");
      if ((q.answer || []).includes(key)) label.classList.add("correct");
      if (selected.includes(key) && !(q.answer || []).includes(key)) label.classList.add("incorrect");
      if (!selected.includes(key) && (q.answer || []).includes(key) && !isCorrect) label.classList.add("missed");
    });
    result.className = `result visible ${isCorrect ? "ok" : "bad"}`;
    result.innerHTML = explanationHtml(q, isCorrect, selected);

    if (persist) {
      saveAnswer(q, selected);
      updateProgressUi();
      renderQuestionPalette();
      renderChapterStats();
    }
  }

  function applyExamSavedState(card, q, selected, persist) {
    const result = card.querySelector("[data-result]");
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    result.className = "result visible neutral";
    result.innerHTML = `<h4>解答を保存しました</h4>
      <p>模試モード中は正解・解説を表示しません。終了後に採点結果を確認してください。</p>`;
    if (persist) {
      saveAnswer(q, selected);
      updateProgressUi();
      renderQuestionPalette();
      renderChapterStats();
      renderExamPanel();
    }
  }

  function resetQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]");
    result.className = "result";
    result.innerHTML = "";
    const message = card.querySelector("[data-message]");
    if (message) message.textContent = "";
    clearAnswer(q);
    updateSelectionStatus(card, q);
    updateProgressUi();
    renderQuestionPalette();
    renderChapterStats();
    renderExamPanel();
  }

  function updateSelectionStatus(card, q) {
    const selected = selectedKeys(card);
    const status = card.querySelector("[data-select-status]");
    if (!status) return;
    const required = requiredSelectCount(q);
    const base = selectInstruction(q);
    status.textContent = questionType(q) === "multi" ? `${base} / 現在${selected.length}` : base;
    status.classList.toggle("select-ok", selected.length === required);
  }

  function bindQuestion(card, q) {
    const submit = card.querySelector("[data-submit]");
    const clear = card.querySelector("[data-clear]");
    const next = card.querySelector("[data-card-next]");
    const message = card.querySelector("[data-message]");
    const required = requiredSelectCount(q);

    card.querySelectorAll("input[data-option]").forEach(input => {
      input.addEventListener("change", () => {
        updateSelectionStatus(card, q);
        const selected = selectedKeys(card);
        if (questionType(q) === "multi" && selected.length > required) {
          message.textContent = `選びすぎです。${required}つに絞ってください。`;
        } else {
          message.textContent = "";
        }
      });
    });

    submit.addEventListener("click", () => {
      const selected = selectedKeys(card);
      if (questionType(q) === "multi" && selected.length !== required) {
        message.textContent = `${required}つ選択してください。現在 ${selected.length}つです。`;
        return;
      }
      if (questionType(q) === "single" && selected.length !== 1) {
        message.textContent = "1つ選択してください。";
        return;
      }
      message.textContent = "";
      if (isExamActive(chapterId)) {
        applyExamSavedState(card, q, selected, true);
      } else {
        applyResult(card, q, selected, true);
      }
    });
    clear.addEventListener("click", () => resetQuestion(card, q));
    next.addEventListener("click", () => moveQuestion(1));
    updateSelectionStatus(card, q);
  }

  function restoreQuestion(card, q) {
    const progress = readProgress();
    const saved = progress[q.id];
    if (!saved) return;
    if (Array.isArray(saved.selected)) {
      saved.selected.forEach(key => {
        const input = card.querySelector(`input[value="${cssEscape(key)}"]`);
        if (input) input.checked = true;
      });
      if (isExamActive(chapterId)) {
        applyExamSavedState(card, q, saved.selected, false);
      } else {
        applyResult(card, q, saved.selected, false);
      }
    }
    updateSelectionStatus(card, q);
  }

  function chapterStats(id) {
    const questions = DATA.questions[id] || [];
    const progress = readProgress();
    const answered = questions.filter(q => isAnswered(progress[q.id])).length;
    const correct = questions.filter(q => isAnswered(progress[q.id]) && progress[q.id].isCorrect).length;
    const wrong = questions.filter(q => isAnswered(progress[q.id]) && !progress[q.id].isCorrect).length;
    const flagged = questions.filter(q => isFlagged(progress[q.id])).length;
    const rate = answered ? Math.round(correct / answered * 100) : 0;
    return { total: questions.length, answered, correct, wrong, flagged, rate };
  }

  function globalStats() {
    return DATA.chapters.reduce((acc, ch) => {
      const s = chapterStats(ch.id);
      acc.total += s.total;
      acc.answered += s.answered;
      acc.correct += s.correct;
      acc.wrong += s.wrong;
      acc.flagged += s.flagged;
      return acc;
    }, { total: 0, answered: 0, correct: 0, wrong: 0, flagged: 0 });
  }

  function weakTagStats() {
    const progress = readProgress();
    const map = new Map();
    for (const ch of DATA.chapters) {
      for (const q of DATA.questions[ch.id] || []) {
        const record = progress[q.id];
        if (!isAnswered(record)) continue;
        const tags = record.tags && record.tags.length ? record.tags : getQuestionTags(q);
        tags.forEach(tag => {
          const key = normalizeTag(tag);
          if (!key) return;
          const item = map.get(key) || { tag: key, answered: 0, wrong: 0 };
          item.answered += 1;
          if (!record.isCorrect) item.wrong += 1;
          map.set(key, item);
        });
      }
    }
    return Array.from(map.values())
      .filter(item => item.wrong > 0)
      .sort((a, b) => (b.wrong - a.wrong) || ((b.wrong / b.answered) - (a.wrong / a.answered)))
      .slice(0, 12);
  }

  function renderDashboard() {
    const main = document.querySelector(".main");
    if (!main || chapterId) return;
    let root = document.getElementById("dashboardRoot");
    if (!root) {
      const hero = main.querySelector(".hero");
      root = document.createElement("section");
      root.id = "dashboardRoot";
      root.className = "dashboard";
      if (hero) hero.insertAdjacentElement("afterend", root);
      else main.prepend(root);
    }
    const stats = globalStats();
    const rate = stats.answered ? Math.round(stats.correct / stats.answered * 100) : 0;
    const weak = weakTagStats();
    root.innerHTML = `<div class="stat-grid">
        <div class="stat-card"><span>総問題数</span><strong>${stats.total}</strong></div>
        <div class="stat-card"><span>解答済み</span><strong>${stats.answered}</strong></div>
        <div class="stat-card"><span>正解率</span><strong>${rate}%</strong></div>
        <div class="stat-card"><span>要復習</span><strong>${stats.wrong + stats.flagged}</strong></div>
      </div>
      <div class="weak-panel">
        <h2>苦手タグ</h2>
        ${weak.length ? `<div class="weak-tags">${weak.map(item => `<span class="weak-tag">${escapeHtml(item.tag)} <b>${item.wrong}</b>/<small>${item.answered}</small></span>`).join("")}</div>` : `<p class="inline-note">まだ間違いデータがありません。まず各章を解いてください。</p>`}
      </div>`;
  }

  function renderNav() {
    const nav = document.getElementById("chapterNav");
    if (!nav) return;
    nav.innerHTML = DATA.chapters.map(ch => {
      const count = (DATA.questions[ch.id] || []).length;
      const active = ch.id === chapterId ? " active" : "";
      const status = ch.status === "ready" ? `${count}問` : "準備中";
      return `<a class="nav-link${active}" href="${escapeHtml(chapterHref(ch))}">
        ${escapeHtml(ch.title)}
        <span class="small">${escapeHtml(status)}</span>
      </a>`;
    }).join("");
  }

  function renderIndex() {
    const grid = document.getElementById("chapterGrid");
    if (!grid) return;
    if (chapterId && isSingleFile) return;
    grid.innerHTML = DATA.chapters.map(ch => {
      const s = chapterStats(ch.id);
      const badge = ch.status === "ready" ? `${s.total}問` : "準備中";
      return `<a class="chapter-card" href="${escapeHtml(chapterHref(ch))}">
        <span class="badge ${escapeHtml(ch.status)}">${escapeHtml(badge)}</span>
        <strong>${escapeHtml(ch.title)}</strong>
        <span class="chapter-progress-line">${s.answered}/${s.total} 解答済み・正解率 ${s.rate}%・復習 ${s.wrong + s.flagged}</span>
        <span class="inline-note">1問ずつ解答・復習モード・学習履歴保存に対応</span>
      </a>`;
    }).join("");
    renderDashboard();
  }

  function setSingleFileVisibility() {
    if (!isSingleFile) return;
    document.querySelectorAll("[data-index-view]").forEach(el => { el.hidden = Boolean(chapterId); });
    document.querySelectorAll("[data-chapter-view]").forEach(el => { el.hidden = !chapterId; });
  }

  function filteredQuestions() {
    const questions = DATA.questions[chapterId] || [];
    const progress = readProgress();
    if (currentMode === "unanswered") return questions.filter(q => !isAnswered(progress[q.id]));
    if (currentMode === "wrong") return questions.filter(q => isAnswered(progress[q.id]) && !progress[q.id].isCorrect);
    if (currentMode === "flagged") return questions.filter(q => isFlagged(progress[q.id]));
    return questions;
  }

  function modeLabel(mode) {
    return {
      all: "全問",
      unanswered: "未回答",
      wrong: "間違いのみ",
      flagged: "見直し"
    }[mode] || "全問";
  }

  function renderModeButtons() {
    const root = document.getElementById("modeButtons");
    if (!root) return;
    const modes = ["all", "unanswered", "wrong", "flagged"];
    root.innerHTML = modes.map(mode => `<button class="mode-btn ${mode === currentMode ? "active" : ""}" data-mode="${mode}">${modeLabel(mode)}</button>`).join("");
    root.querySelectorAll("[data-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentMode = btn.dataset.mode;
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion();
      });
    });
  }

  function renderChapterStats() {
    const root = document.getElementById("chapterStatsRoot");
    if (!root || !chapterId) return;
    const s = chapterStats(chapterId);
    root.innerHTML = `<div class="stat-grid compact">
      <div class="stat-card"><span>全体</span><strong>${s.total}</strong></div>
      <div class="stat-card"><span>解答済み</span><strong>${s.answered}</strong></div>
      <div class="stat-card"><span>正解率</span><strong>${s.rate}%</strong></div>
      <div class="stat-card"><span>復習対象</span><strong>${s.wrong + s.flagged}</strong></div>
    </div>`;
  }

  function renderQuestionPalette() {
    const root = document.getElementById("questionPalette");
    if (!root || !chapterId) return;
    const all = DATA.questions[chapterId] || [];
    const progress = readProgress();
    root.innerHTML = all.map(q => {
      const r = progress[q.id];
      const classes = ["q-dot"];
      if (q.id === currentQuestionId) classes.push("active");
      if (isAnswered(r)) classes.push(r.isCorrect ? "answered correct" : "answered wrong");
      if (isFlagged(r)) classes.push("flagged");
      return `<button class="${classes.join(" ")}" data-qid="${escapeHtml(q.id)}" title="問${q.number}">${q.number}</button>`;
    }).join("");
    root.querySelectorAll("[data-qid]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentQuestionId = btn.dataset.qid;
        currentMode = "all";
        renderModeButtons();
        renderActiveQuestion();
      });
    });
  }

  function renderJump(list) {
    const jump = document.getElementById("questionJump");
    if (!jump) return;
    jump.innerHTML = list.map(q => `<option value="${escapeHtml(q.id)}">問${q.number}. ${escapeHtml(q.title)}</option>`).join("");
    if (currentQuestionId) jump.value = currentQuestionId;
    jump.onchange = () => {
      currentQuestionId = jump.value;
      renderActiveQuestion();
    };
  }

  function updateNavButtons(index, total) {
    document.querySelectorAll("[data-prev-question]").forEach(btn => { btn.disabled = index <= 0; });
    document.querySelectorAll("[data-next-question]").forEach(btn => { btn.disabled = index >= total - 1; });
    const label = total ? `${index + 1} / ${total}` : "0 / 0";
    const status = document.getElementById("questionPosition");
    const bottom = document.getElementById("bottomPosition");
    if (status) status.textContent = label;
    if (bottom) bottom.textContent = label;
  }

  function updateFlagButton(q) {
    const btn = document.getElementById("toggleFlag");
    if (!btn) return;
    const flagged = isFlagged(readProgress()[q.id]);
    btn.textContent = flagged ? "見直し解除" : "後で見直す";
    btn.classList.toggle("active", flagged);
    btn.onclick = () => toggleFlag(q);
  }

  function renderActiveQuestion() {
    const shell = document.getElementById("questionShell");
    if (!shell || !chapterId) return;
    const list = filteredQuestions();
    renderChapterStats();
    renderExamPanel();

    if (!list.length) {
      shell.innerHTML = `<div class="empty-state">
        <h2>${escapeHtml(modeLabel(currentMode))}の問題はありません</h2>
        <p>条件に一致する問題がないため、全問表示に戻してください。</p>
        <button class="btn primary" id="backToAll">全問に戻る</button>
      </div>`;
      document.getElementById("backToAll")?.addEventListener("click", () => {
        currentMode = "all";
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion();
      });
      renderJump([]);
      renderQuestionPalette();
      updateNavButtons(0, 0);
      return;
    }

    let index = 0;
    if (currentQuestionId) {
      const found = list.findIndex(q => q.id === currentQuestionId);
      index = found >= 0 ? found : 0;
    }
    const q = list[index];
    currentQuestionId = q.id;
    shell.innerHTML = questionHtml(q);
    const card = shell.querySelector(`[data-question-id="${cssEscape(q.id)}"]`);
    bindQuestion(card, q);
    restoreQuestion(card, q);
    renderJump(list);
    renderQuestionPalette();
    updateNavButtons(index, list.length);
    updateFlagButton(q);
  }

  function moveQuestion(delta) {
    const list = filteredQuestions();
    if (!list.length) return;
    const index = Math.max(0, list.findIndex(q => q.id === currentQuestionId));
    const nextIndex = Math.min(Math.max(index + delta, 0), list.length - 1);
    currentQuestionId = list[nextIndex].id;
    renderActiveQuestion();
    document.getElementById("questionShell")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function firstUnanswered() {
    const progress = readProgress();
    const q = (DATA.questions[chapterId] || []).find(item => !isAnswered(progress[item.id]));
    if (!q) return;
    currentMode = "all";
    currentQuestionId = q.id;
    renderModeButtons();
    renderActiveQuestion();
  }

  function renderExamPanel() {
    const panel = document.getElementById("examPanel");
    if (!panel || !chapterId) return;
    if (!isExamChapter(chapterId)) {
      panel.innerHTML = "";
      panel.hidden = true;
      stopTimer();
      return;
    }
    panel.hidden = false;
    const state = getExamState(chapterId);
    const active = Boolean(state && state.active);
    const s = chapterStats(chapterId);
    panel.innerHTML = `<div class="exam-box ${active ? "active" : ""}">
      <div>
        <h2>模試モード</h2>
        <p>${active ? "採点結果と解説を隠して解答を保存します。" : "90分で60問を解く想定のモードです。開始時にこの章の解答履歴はリセットされます。見直しフラグは残します。"}</p>
      </div>
      <div class="exam-actions">
        <span class="timer" id="examTimer">${active ? formatSeconds(remainingSeconds(state)) : "90:00"}</span>
        ${active ? `<button class="btn primary" id="finishExam">模試を終了して採点</button>` : `<button class="btn primary" id="startExam">模試開始</button>`}
        <span class="inline-note">解答済み ${s.answered}/${s.total}</span>
      </div>
    </div>`;
    document.getElementById("startExam")?.addEventListener("click", startExam);
    document.getElementById("finishExam")?.addEventListener("click", () => finishExam(false));
    if (active) startTimer();
    else stopTimer();
  }

  function startExam() {
    if (!chapterId) return;
    const ok = confirm("模試モードを開始します。この章の解答履歴はリセットされます。見直しフラグは残します。続行しますか？");
    if (!ok) return;
    clearChapterProgress(chapterId, true);
    setExamState(chapterId, {
      active: true,
      startedAt: new Date().toISOString(),
      durationSec: 90 * 60
    });
    currentMode = "all";
    currentQuestionId = (DATA.questions[chapterId] || [])[0]?.id || null;
    renderModeButtons();
    renderActiveQuestion();
  }

  function finishExam(autoFinished) {
    const state = getExamState(chapterId);
    if (!state) return;
    setExamState(chapterId, {
      ...state,
      active: false,
      finishedAt: new Date().toISOString(),
      autoFinished: Boolean(autoFinished)
    });
    stopTimer();
    renderActiveQuestion();
  }

  function remainingSeconds(state) {
    const started = Date.parse(state.startedAt);
    if (!Number.isFinite(started)) return state.durationSec || 0;
    const elapsed = Math.floor((Date.now() - started) / 1000);
    return Math.max(0, (state.durationSec || 0) - elapsed);
  }

  function formatSeconds(total) {
    const min = Math.floor(total / 60);
    const sec = total % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function startTimer() {
    stopTimer();
    timerHandle = setInterval(() => {
      const state = getExamState(chapterId);
      if (!state || !state.active) {
        stopTimer();
        return;
      }
      const remain = remainingSeconds(state);
      const timer = document.getElementById("examTimer");
      if (timer) timer.textContent = formatSeconds(remain);
      if (remain <= 0) finishExam(true);
    }, 1000);
  }

  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }

  function updateProgressUi() {
    if (!chapterId) {
      renderDashboard();
      return;
    }
    const s = chapterStats(chapterId);
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = s.total ? `${Math.round(s.answered / s.total * 100)}%` : "0%";
    if (text) text.textContent = s.total ? `${s.answered}/${s.total} 解答済み・正解 ${s.correct}・見直し ${s.flagged}` : "0/0";
  }

  function renderChapter() {
    const root = document.getElementById("questionRoot");
    if (!root || !chapterId) return;
    const chapter = chapterById(chapterId);
    const title = document.getElementById("chapterTitle");
    const desc = document.getElementById("chapterDesc");
    if (title) title.textContent = chapter ? chapter.title : "章が見つかりません";
    const questions = DATA.questions[chapterId] || [];
    if (desc) desc.textContent = questions.length
      ? "1問ずつ表示します。解答後に正解・解説を表示し、履歴は端末内に保存します。"
      : "この章はページ枠のみ作成済みです。";

    if (!questions.length) {
      root.innerHTML = `<div class="empty-state"><h2>この章は未実装です</h2></div>`;
      updateProgressUi();
      return;
    }

    root.innerHTML = `<div class="study-panel">
      <div id="chapterStatsRoot" class="chapter-stats"></div>
      <div id="examPanel" class="exam-panel"></div>
      <div class="mode-row" id="modeButtons"></div>
      <div class="question-toolbar">
        <button class="btn" data-prev-question>前の問題</button>
        <span id="questionPosition" class="question-position">0 / 0</span>
        <button class="btn" data-next-question>次の問題</button>
        <select id="questionJump" class="question-jump" aria-label="問題番号を選択"></select>
        <button id="toggleFlag" class="btn flag-btn">後で見直す</button>
      </div>
      <div id="questionPalette" class="question-palette" aria-label="問題一覧"></div>
      <div id="questionShell"></div>
      <div class="viewer-footer">
        <button class="btn" data-prev-question>前へ</button>
        <span id="bottomPosition" class="inline-note">問題移動</span>
        <button class="btn primary" data-next-question>次へ</button>
      </div>
    </div>`;

    renderModeButtons();
    renderActiveQuestion();
    updateProgressUi();
    root.querySelectorAll("[data-prev-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(-1)));
    root.querySelectorAll("[data-next-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(1)));
  }

  function bindChapterToolbar() {
    const reset = document.getElementById("resetChapter");
    if (reset) {
      reset.onclick = () => {
        const ok = confirm("この章の解答履歴と見直しフラグをすべて削除します。続行しますか？");
        if (!ok) return;
        clearChapterProgress(chapterId, false);
        setExamState(chapterId, null);
        currentMode = "all";
        currentQuestionId = null;
        renderChapter();
      };
    }
    const unanswered = document.getElementById("firstUnanswered");
    if (unanswered) unanswered.onclick = firstUnanswered;
  }

  function renderAll() {
    setSingleFileVisibility();
    renderNav();
    renderIndex();
    renderChapter();
    bindChapterToolbar();
    updateProgressUi();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    if (isSingleFile) {
      window.addEventListener("hashchange", () => {
        stopTimer();
        chapterId = getChapterIdFromHash();
        currentMode = getInitialMode();
        currentQuestionId = null;
        renderAll();
      });
    }
  });
})();
