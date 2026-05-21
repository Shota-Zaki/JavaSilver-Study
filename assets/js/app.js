(function () {
  const DATA = window.JAVA_STUDY_DATA;
  const chapterId = window.CHAPTER_ID || null;
  const storageKey = "java-study-progress-v1";

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
    catch (_) { return {}; }
  }

  function writeProgress(progress) {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function arraysEqual(a, b) {
    const aa = [...a].sort();
    const bb = [...b].sort();
    return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
  }

  function chapterById(id) {
    return DATA.chapters.find(ch => ch.id === id);
  }

  function renderNav() {
    const nav = document.getElementById("chapterNav");
    if (!nav) return;
    nav.innerHTML = DATA.chapters.map(ch => {
      const count = (DATA.questions[ch.id] || []).length;
      const active = ch.id === chapterId ? " active" : "";
      const status = ch.status === "ready" ? `${count}問` : "準備中";
      return `<a class="nav-link${active}" href="${escapeHtml(ch.page)}">
        ${escapeHtml(ch.title.replace(/^第/, "第"))}
        <span class="small">${escapeHtml(status)}</span>
      </a>`;
    }).join("");
  }

  function renderIndex() {
    const grid = document.getElementById("chapterGrid");
    if (!grid) return;
    grid.innerHTML = DATA.chapters.map(ch => {
      const count = (DATA.questions[ch.id] || []).length;
      const badge = ch.status === "ready" ? `${count}問 実装済み` : "ページのみ作成済み";
      return `<a class="chapter-card" href="${escapeHtml(ch.page)}">
        <span class="badge ${escapeHtml(ch.status)}">${escapeHtml(badge)}</span>
        <strong>${escapeHtml(ch.title)}</strong>
        <span class="inline-note">${ch.status === "ready" ? "問題表示 → 解答選択 → 正解・解説表示に対応" : "次工程で問題データを投入"}</span>
      </a>`;
    }).join("");
  }

  function selectedKeys(card) {
    return Array.from(card.querySelectorAll("input[data-option]:checked")).map(input => input.value);
  }

  function optionHtml(q, opt) {
    const inputType = q.type === "multi" ? "checkbox" : "radio";
    const body = opt.code
      ? `<pre><code>${escapeHtml(opt.code)}</code></pre>`
      : `<span>${escapeHtml(opt.text)}</span>`;
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
    const selectText = q.type === "multi" ? `${q.selectCount}つ選択` : "1つ選択";
    return `<article class="question-card" id="${escapeHtml(q.id)}" data-question-id="${escapeHtml(q.id)}">
      <div class="q-head">
        <h2 class="q-title">問${q.number}. ${escapeHtml(q.title)}</h2>
        <div class="q-meta">${escapeHtml(selectText)}</div>
      </div>
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${command}
      ${codeBlocks}
      ${images ? `<div class="q-image-list">${images}</div>` : ""}
      <div class="options">${q.options.map(opt => optionHtml(q, opt)).join("")}</div>
      <div class="answer-actions">
        <button class="btn primary" data-submit>解答する</button>
        <button class="btn ghost" data-clear>この問題をリセット</button>
        <span class="inline-note" data-message></span>
      </div>
      <div class="result" data-result></div>
    </article>`;
  }

  function applyResult(card, q, selected, persist) {
    const isCorrect = arraysEqual(selected, q.answer);
    const result = card.querySelector("[data-result]");
    const answerText = q.answer.join("・");
    card.querySelectorAll(".option").forEach(label => {
      const key = label.dataset.key;
      label.classList.remove("correct", "incorrect", "missed");
      if (q.answer.includes(key)) label.classList.add("correct");
      if (selected.includes(key) && !q.answer.includes(key)) label.classList.add("incorrect");
      if (!selected.includes(key) && q.answer.includes(key) && !isCorrect) label.classList.add("missed");
    });
    result.className = `result visible ${isCorrect ? "ok" : "bad"}`;
    result.innerHTML = `<h4>${isCorrect ? "正解" : "不正解"}</h4>
      <p><strong>正解:</strong> ${escapeHtml(answerText)}</p>
      <p>${escapeHtml(q.explanation.summary)}</p>
      ${q.explanation.points ? `<ul>${q.explanation.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>` : ""}
      <div class="source-note">出典メモ: ${escapeHtml(q.source)}</div>`;

    if (persist) {
      const progress = readProgress();
      progress[q.id] = { selected, isCorrect, answeredAt: new Date().toISOString() };
      writeProgress(progress);
      updateProgressUi();
    }
  }

  function resetQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]");
    result.className = "result";
    result.innerHTML = "";
    card.querySelector("[data-message]").textContent = "";
    const progress = readProgress();
    delete progress[q.id];
    writeProgress(progress);
    updateProgressUi();
  }

  function updateProgressUi() {
    if (!chapterId) return;
    const questions = DATA.questions[chapterId] || [];
    const progress = readProgress();
    const answered = questions.filter(q => progress[q.id]).length;
    const correct = questions.filter(q => progress[q.id]?.isCorrect).length;
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = questions.length ? `${Math.round(answered / questions.length * 100)}%` : "0%";
    if (text) text.textContent = questions.length ? `${answered}/${questions.length} 解答済み・正解 ${correct}` : "0/0";
  }

  function bindQuestion(card, q) {
    const submit = card.querySelector("[data-submit]");
    const clear = card.querySelector("[data-clear]");
    const message = card.querySelector("[data-message]");
    submit.addEventListener("click", () => {
      const selected = selectedKeys(card);
      if (q.type === "multi" && selected.length !== q.selectCount) {
        message.textContent = `${q.selectCount}つ選択してください。現在 ${selected.length}つです。`;
        return;
      }
      if (q.type === "single" && selected.length !== 1) {
        message.textContent = "1つ選択してください。";
        return;
      }
      message.textContent = "";
      applyResult(card, q, selected, true);
    });
    clear.addEventListener("click", () => resetQuestion(card, q));
  }

  function restoreProgress() {
    const progress = readProgress();
    const questions = DATA.questions[chapterId] || [];
    questions.forEach(q => {
      const saved = progress[q.id];
      if (!saved) return;
      const card = document.querySelector(`[data-question-id="${q.id}"]`);
      if (!card) return;
      saved.selected.forEach(key => {
        const input = card.querySelector(`input[value="${CSS.escape(key)}"]`);
        if (input) input.checked = true;
      });
      applyResult(card, q, saved.selected, false);
    });
    updateProgressUi();
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
      ? "問題を読み、選択肢を選んでから「解答する」を押すと、正解と解説が表示されます。"
      : "この章はページ枠のみ作成済みです。次工程で問題・解答・解説データを投入します。";

    if (!questions.length) {
      root.innerHTML = `<div class="empty-state">
        <h2>この章は未実装です</h2>
        <p>1章でUIとデータ形式を確定させた後、OCR補正済みデータをこの形式に合わせて追加します。</p>
        <p><a class="btn" href="ch01.html">1章のプロトタイプを見る</a></p>
      </div>`;
      updateProgressUi();
      return;
    }
    root.innerHTML = questions.map(questionHtml).join("");
    questions.forEach(q => {
      const card = document.querySelector(`[data-question-id="${q.id}"]`);
      bindQuestion(card, q);
    });
    restoreProgress();
  }

  function bindChapterToolbar() {
    const reset = document.getElementById("resetChapter");
    if (reset) {
      reset.addEventListener("click", () => {
        const questions = DATA.questions[chapterId] || [];
        const progress = readProgress();
        questions.forEach(q => delete progress[q.id]);
        writeProgress(progress);
        location.reload();
      });
    }
    const firstUnanswered = document.getElementById("firstUnanswered");
    if (firstUnanswered) {
      firstUnanswered.addEventListener("click", () => {
        const progress = readProgress();
        const questions = DATA.questions[chapterId] || [];
        const target = questions.find(q => !progress[q.id]);
        if (target) document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderIndex();
    renderChapter();
    bindChapterToolbar();
  });
})();
