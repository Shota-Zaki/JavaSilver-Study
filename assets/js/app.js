(() => {
  'use strict';

  const UNSAFE_PATTERNS = [
    /黒本/g,
    /\bPDF\b/gi,
    /[0-9０-９]+章[-ー－]?[12]?\s*[^\s/\\]*\.pdf/gi,
    /模擬試験\.pdf/gi,
    /模擬問題2?\.pdf/gi,
    /解説\.pdf/gi,
    /問題\.pdf/gi,
    /Z0[-ー－]?8\d{2}[-ー－]?JPN/gi
  ];

  const state = {
    data: null,
    chapterId: null,
    questions: [],
    currentIndex: 0,
    selected: new Set(),
    answered: false,
    filter: 'all',
    keyword: ''
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function sanitizeUnsafe(value) {
    if (value == null) return '';
    let text = String(value);
    for (const pattern of UNSAFE_PATTERNS) text = text.replace(pattern, '');
    return text;
  }

  function safeText(value) {
    return sanitizeUnsafe(value).replace(/\s{2,}/g, ' ').trim();
  }

  function safeCodeText(value) {
    return sanitizeUnsafe(value)
      .replace(/\r\n?/g, '\n')
      .replace(/[ \t]+$/gm, '')
      .replace(/^\n+|\n+$/g, '');
  }

  function getSelectCount(q) {
    return Number(q.selectCount || (q.answer || []).length || 1);
  }

  function selectInstruction(q) {
    const count = getSelectCount(q);
    const optionCount = (q.options || []).length;
    if (optionCount > 0 && count === optionCount) return `すべて選択（${count}個）`;
    if (count > 1) return `${count}つ選択`;
    return '1つ選択';
  }

  function selectAlertText(q) {
    const count = getSelectCount(q);
    const optionCount = (q.options || []).length;
    if (optionCount > 0 && count === optionCount) return 'この問題はすべての選択肢を選択してください。';
    return `${count}個選択してください。`;
  }

  function normalizeChapterTitle(title, id) {
    const cleaned = safeText(title || '');
    if (!cleaned) return `セクション ${String(id || '').replace(/\D/g, '')}`;
    return cleaned
      .replace(/^第\s*([0-9０-９]+)\s*章[：:　\s-]*/u, 'セクション$1：')
      .replace(/模擬試験/g, '総合演習')
      .replace(/模擬問題/g, '総合演習');
  }

  function getStorageKey() {
    return `java-study-state:${state.chapterId}`;
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(getStorageKey()) || '{}');
    } catch (_) {
      return {};
    }
  }

  function saveProgressEntry(q, entry) {
    const progress = loadProgress();
    progress[q.id] = { ...(progress[q.id] || {}), ...entry, updatedAt: new Date().toISOString() };
    localStorage.setItem(getStorageKey(), JSON.stringify(progress));
  }

  function setCurrentIndex(index) {
    const max = state.questions.length - 1;
    state.currentIndex = Math.max(0, Math.min(index, max));
    state.selected = new Set();
    state.answered = false;
    renderQuestion();
  }

  function getChapterMeta(id) {
    return (state.data.chapters || []).find(ch => ch.id === id) || { id, title: id };
  }

  function getCurrentQuestion() {
    return state.questions[state.currentIndex];
  }

  function answerLabel(q) {
    return (q.answer || []).join(', ');
  }

  function selectedLabel() {
    return Array.from(state.selected).sort().join(', ');
  }

  function isCorrect(q) {
    const selected = Array.from(state.selected).sort().join(',');
    const answer = (q.answer || []).slice().sort().join(',');
    return selected === answer;
  }

  function optionBody(option) {
    if (option.code) return `<pre class="inline-code"><code>${escapeHtml(safeCodeText(option.code))}</code></pre>`;
    return `<span>${escapeHtml(safeText(option.text || option.label || ''))}</span>`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }

  function createLayout() {
    const main = $('main') || document.body.appendChild(document.createElement('main'));
    main.className = 'dojo-page';
    main.innerHTML = `
      <header class="dojo-header">
        <div>
          <p class="eyebrow">Java Practice</p>
          <h1 id="chapterTitle"></h1>
          <p id="chapterMeta" class="chapter-meta"></p>
        </div>
        <a class="home-link" href="index.html">一覧へ戻る</a>
      </header>
      <section class="dojo-toolbar" aria-label="問題操作">
        <div class="toolbar-group">
          <label class="select-label">表示
            <select id="filterSelect">
              <option value="all">全問</option>
              <option value="wrong">間違えた問題</option>
              <option value="marked">見直し</option>
              <option value="unanswered">未回答</option>
            </select>
          </label>
          <input id="keywordInput" type="search" placeholder="キーワード検索" autocomplete="off" />
        </div>
        <div class="toolbar-group right">
          <span id="scoreBadge" class="score-badge">0 / 0</span>
          <button id="resetBtn" class="plain-btn" type="button">章の履歴をリセット</button>
        </div>
      </section>
      <div class="dojo-grid">
        <aside class="question-nav-panel">
          <div class="nav-title">問題一覧</div>
          <div id="questionNav" class="question-nav"></div>
        </aside>
        <section class="question-panel">
          <div id="questionMount"></div>
        </section>
      </div>
    `;

    $('#filterSelect').addEventListener('change', e => {
      state.filter = e.target.value;
      applyFilter();
    });
    $('#keywordInput').addEventListener('input', e => {
      state.keyword = e.target.value.trim().toLowerCase();
      applyFilter();
    });
    $('#resetBtn').addEventListener('click', () => {
      if (!confirm('この章の回答履歴を削除します。よろしいですか？')) return;
      localStorage.removeItem(getStorageKey());
      renderAll();
    });
  }

  function questionMatches(q, progress) {
    const entry = progress[q.id] || {};
    if (state.filter === 'wrong' && entry.correct !== false) return false;
    if (state.filter === 'marked' && !entry.marked) return false;
    if (state.filter === 'unanswered' && entry.answered) return false;
    if (!state.keyword) return true;
    const text = [q.title, q.prompt, ...(q.codeBlocks || []).map(b => b.code), ...(q.options || []).map(o => o.text || o.code || '')].join(' ').toLowerCase();
    return text.includes(state.keyword);
  }

  function applyFilter() {
    const all = state.data.questions[state.chapterId] || [];
    const progress = loadProgress();
    state.questions = all.filter(q => questionMatches(q, progress));
    state.currentIndex = 0;
    state.selected = new Set();
    state.answered = false;
    renderAll();
  }

  function renderAll() {
    const meta = getChapterMeta(state.chapterId);
    $('#chapterTitle').textContent = normalizeChapterTitle(meta.title, meta.id);
    $('#chapterMeta').textContent = `${state.questions.length}問 / 1問ずつ演習`;
    renderQuestionNav();
    renderQuestion();
    renderScore();
  }

  function renderQuestionNav() {
    const nav = $('#questionNav');
    const progress = loadProgress();
    nav.innerHTML = state.questions.map((q, idx) => {
      const entry = progress[q.id] || {};
      const cls = ['qnum'];
      if (idx === state.currentIndex) cls.push('current');
      if (entry.answered) cls.push(entry.correct ? 'ok' : 'ng');
      if (entry.marked) cls.push('marked');
      return `<button type="button" class="${cls.join(' ')}" data-index="${idx}" title="問${q.number}">${q.number}</button>`;
    }).join('');
    $$('.qnum', nav).forEach(btn => btn.addEventListener('click', () => setCurrentIndex(Number(btn.dataset.index))));
  }

  function renderScore() {
    const progress = loadProgress();
    const all = state.data.questions[state.chapterId] || [];
    const answered = all.filter(q => progress[q.id]?.answered).length;
    const correct = all.filter(q => progress[q.id]?.correct).length;
    $('#scoreBadge').textContent = `${correct} / ${answered} 正解`;
  }

  function renderQuestion() {
    const mount = $('#questionMount');
    const q = getCurrentQuestion();
    if (!q) {
      mount.innerHTML = `<div class="empty-card">条件に合う問題がありません。</div>`;
      $('#questionNav').innerHTML = '';
      renderScore();
      return;
    }
    const progress = loadProgress();
    const entry = progress[q.id] || {};
    const selectCount = getSelectCount(q);
    const qTypeText = selectInstruction(q);
    const codeBlocks = (q.codeBlocks || []).map(block => `
      <div class="code-block">
        ${block.title ? `<div class="code-title">${escapeHtml(safeText(block.title))}</div>` : ''}
        <pre><code>${escapeHtml(safeCodeText(block.code || ''))}</code></pre>
      </div>
    `).join('');
    const command = q.command ? `<div class="command-line"><span>実行条件</span><code>${escapeHtml(safeText(q.command))}</code></div>` : '';
    const options = (q.options || []).map(option => {
      const checked = state.selected.has(option.key) ? 'checked' : '';
      const correct = state.answered && (q.answer || []).includes(option.key) ? 'correct-option' : '';
      const wrong = state.answered && state.selected.has(option.key) && !(q.answer || []).includes(option.key) ? 'wrong-option' : '';
      return `
        <label class="choice ${correct} ${wrong}">
          <input type="${selectCount > 1 ? 'checkbox' : 'radio'}" name="answer" value="${option.key}" ${checked} ${state.answered ? 'disabled' : ''}>
          <span class="choice-key">${option.key}</span>
          <span class="choice-body">${optionBody(option)}</span>
        </label>
      `;
    }).join('');
    const marked = entry.marked ? 'marked' : '';

    mount.innerHTML = `
      <article class="question-card">
        <div class="question-top">
          <div>
            <div class="question-count">問 ${q.number} / ${state.questions.length}</div>
            <h2>${escapeHtml(safeText(q.title || `問${q.number}`))}</h2>
          </div>
          <button id="markBtn" type="button" class="mark-btn ${marked}">${entry.marked ? '見直し中' : '見直しに追加'}</button>
        </div>
        <div class="question-type" aria-label="選択数"><span>選択数</span><strong>${qTypeText}</strong></div>
        <p class="prompt">${escapeHtml(safeText(q.prompt || '次の問題に答えなさい。'))}</p>
        ${command}
        ${codeBlocks}
        <form id="answerForm" class="choices">${options}</form>
        <div class="action-row">
          <button id="prevBtn" type="button" class="secondary">前の問題</button>
          <button id="answerBtn" type="button" class="primary">回答する</button>
          <button id="nextBtn" type="button" class="secondary">次の問題</button>
        </div>
        <div id="resultMount"></div>
      </article>
    `;

    $$('#answerForm input').forEach(input => {
      input.addEventListener('change', () => {
        if (selectCount === 1) state.selected = new Set([input.value]);
        else {
          if (input.checked) state.selected.add(input.value);
          else state.selected.delete(input.value);
        }
      });
    });
    $('#prevBtn').addEventListener('click', () => setCurrentIndex(state.currentIndex - 1));
    $('#nextBtn').addEventListener('click', () => setCurrentIndex(state.currentIndex + 1));
    $('#answerBtn').addEventListener('click', () => submitAnswer());
    $('#markBtn').addEventListener('click', () => {
      const now = !loadProgress()[q.id]?.marked;
      saveProgressEntry(q, { marked: now });
      renderQuestion();
      renderQuestionNav();
    });
    if (state.answered) renderResult(q);
  }

  function submitAnswer() {
    const q = getCurrentQuestion();
    const selectCount = getSelectCount(q);
    if (state.selected.size !== selectCount) {
      alert(selectAlertText(q));
      return;
    }
    state.answered = true;
    const correct = isCorrect(q);
    saveProgressEntry(q, { answered: true, selected: selectedLabel(), correct });
    renderQuestion();
    renderScore();
    renderQuestionNav();
  }

  function buildExplanation(q) {
    const ex = q.explanation || {};
    const points = Array.isArray(ex.points) ? ex.points.map(safeText).filter(Boolean) : [];
    const answerKeys = new Set(q.answer || []);
    const selectedKeys = new Set(state.selected);
    const choicesReview = (q.options || []).map(o => {
      const isAns = answerKeys.has(o.key);
      const picked = selectedKeys.has(o.key);
      const label = isAns ? '正解選択肢' : (picked ? '選んだが誤り' : '誤り選択肢');
      const text = o.code ? safeCodeText(o.code) : safeText(o.text || o.label || '');
      let reason = '';
      if (isAns) reason = 'この選択肢が、問題条件を満たす。上の判定手順と解説本文を合わせて確認する。';
      else reason = 'この選択肢は、コンパイル可否・実行時の制御・出力結果のいずれかが条件と一致しない。';
      return `<li class="${isAns ? 'choice-ok' : picked ? 'choice-ng' : ''}"><b>${o.key}. ${label}</b><br><span>${escapeHtml(text)}</span><p>${reason}</p></li>`;
    }).join('');

    return `
      <section class="explanation-box">
        <h3>解説</h3>
        <div class="answer-line"><span>正解</span><strong>${escapeHtml(answerLabel(q))}</strong></div>
        <div class="explain-section">
          <h4>判定手順</h4>
          <ol>
            <li>まずコンパイル可否を確認する。</li>
            <li>コンパイルできる場合だけ、実行時例外の有無を確認する。</li>
            <li>最後に出力結果、戻り値、参照先、スコープ、型変換を確認する。</li>
          </ol>
        </div>
        <div class="explain-section">
          <h4>正解になる理由</h4>
          <p>${escapeHtml(safeText(ex.summary || 'この問題は、コードの実行順とJavaの仕様を正確に追う必要がある。'))}</p>
          ${points.length ? `<ul>${points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>` : ''}
        </div>
        <div class="explain-section">
          <h4>選択肢別チェック</h4>
          <ul class="choice-review">${choicesReview}</ul>
        </div>
        <div class="explain-section exam-tip">
          <h4>試験での注意点</h4>
          <p>出力問題は暗算で飛ばさず、スコープ、参照型、static、例外、break/continue、オーバーロード/オーバーライドの順に機械的に見る。感覚で選ぶと落とされる。</p>
        </div>
      </section>
    `;
  }

  function renderResult(q) {
    const correct = isCorrect(q);
    const mount = $('#resultMount');
    mount.innerHTML = `
      <div class="result ${correct ? 'correct' : 'incorrect'}">
        <div class="result-title">${correct ? '正解' : '不正解'}</div>
        <div>あなたの回答：<strong>${escapeHtml(selectedLabel())}</strong></div>
        <div>正解：<strong>${escapeHtml(answerLabel(q))}</strong></div>
      </div>
      ${buildExplanation(q)}
    `;
  }

  function renderIndex() {
    const data = window.JAVA_STUDY_DATA;
    const main = $('main') || document.body.appendChild(document.createElement('main'));
    const chapters = data.chapters || Object.keys(data.questions || {}).map(id => ({ id, title: id, page: `${id}.html` }));
    main.className = 'index-page';
    main.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Java Practice</p>
        <h1>Java 学習ドリル</h1>
        <p>1問ずつ解いて、回答後に正解・解説を確認する形式です。</p>
      </section>
      <section class="chapter-list">
        ${chapters.map(ch => {
          const count = (data.questions?.[ch.id] || []).length;
          return `<a class="chapter-card" href="${escapeHtml(ch.page || `${ch.id}.html`)}">
            <span>${escapeHtml(normalizeChapterTitle(ch.title, ch.id))}</span>
            <strong>${count}問</strong>
          </a>`;
        }).join('')}
      </section>
    `;
  }

  function init() {
    if (!window.JAVA_STUDY_DATA) {
      document.body.innerHTML = '<main class="empty-card">data/questions.js が読み込めませんでした。</main>';
      return;
    }
    state.data = window.JAVA_STUDY_DATA;
    const chapterId = document.body.dataset.chapter;
    if (!chapterId) {
      renderIndex();
      return;
    }
    state.chapterId = chapterId;
    state.questions = state.data.questions[chapterId] || [];
    createLayout();
    renderAll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
