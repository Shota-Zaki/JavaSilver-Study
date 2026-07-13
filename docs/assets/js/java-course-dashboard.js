(() => {
  const COURSE_MATCHERS = {
    basic: (id) => id.startsWith('basic-'),
    bronze: (id) => id.startsWith('bronze-'),
    silver: (id) => id.startsWith('java11-') || id.startsWith('silver17-'),
    silver11: (id) => id.startsWith('java11-'),
    silver17: (id) => id.startsWith('silver17-'),
    gold: (id) => id.startsWith('gold11-') || id.startsWith('gold17-'),
    gold11: (id) => id.startsWith('gold11-'),
    gold17: (id) => id.startsWith('gold17-')
  };
  const DIFFICULTIES = [
    { key: 'basic', label: '基礎' },
    { key: 'standard', label: '標準' },
    { key: 'hard', label: '応用' }
  ];
  function escapeHtml(value) {
    return String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  }
  function boot() {
    const root = document.getElementById('courseProgressDashboard');
    const bridge = window.JavaBridge;
    if (!root || !bridge?.allQuestions || !bridge?.commonStorage) return;
    const course = root.dataset.course || document.body.dataset.course || 'basic';
    const matches = COURSE_MATCHERS[course] || (() => true);
    const storage = bridge.syncFromLegacy?.() || bridge.commonStorage();
    if (!storage) return;
    const all = bridge.allQuestions();
    const unitCards = [...document.querySelectorAll('.exercise-index-item[data-static-unit]:not(.exercise-index-item-exam)')];
    const visibleUnits = new Set(unitCards.map((card) => card.dataset.staticUnit).filter(Boolean));
    const courseQuestions = all.filter((q) => matches(q.unitId || '') && (!visibleUnits.size || visibleUnits.has(q.unitId)));
    const byUnit = new Map();
    courseQuestions.forEach((q) => {
      if (!byUnit.has(q.unitId)) byUnit.set(q.unitId, []);
      byUnit.get(q.unitId).push(q);
    });

    let total = 0, answered = 0, correct = 0;
    let continueHref = '';
    let continueTitle = '';
    unitCards.forEach((card) => {
      const unitId = card.dataset.staticUnit;
      const questions = byUnit.get(unitId) || [];
      if (!questions.length) return;
      const ids = questions.map((q) => q.id);
      const summary = storage.getRoundSummary?.(unitId, ids) || { round: 1, total: ids.length, answered: 0, correct: 0, rate: 0 };
      total += summary.total;
      answered += summary.answered;
      correct += summary.correct;
      const count = card.querySelector('.exercise-index-count');
      const rate = card.querySelector('.exercise-index-rate');
      if (count) count.textContent = `第${summary.round}周 ${summary.answered} / ${summary.total}`;
      if (rate) rate.textContent = `正答率 ${summary.rate}%`;
      const firstUnanswered = questions.find((q) => !storage.getRoundQuestionRecord?.(unitId, q.id)?.answered);
      if (firstUnanswered) {
        const base = card.getAttribute('href')?.split('?')[0] || '';
        card.setAttribute('href', `${base}?q=${encodeURIComponent(firstUnanswered.id)}`);
        if (!continueHref) {
          continueHref = card.getAttribute('href');
          continueTitle = card.querySelector('.exercise-index-title')?.textContent?.trim() || '演習';
        }
      }
    });

    const history = storage.loadHistory?.() || { questions: {} };
    const courseQuestionIds = new Set(courseQuestions.map((q) => q.id));
    const wrongCounts = { basic: 0, standard: 0, hard: 0 };
    courseQuestions.forEach((q) => {
      if (!courseQuestionIds.has(q.id) || history.questions?.[q.id]?.lastResult !== 'wrong') return;
      const difficulty = ['basic','standard','hard'].includes(q.difficulty) ? q.difficulty : 'standard';
      wrongCounts[difficulty] += 1;
    });
    const rate = answered ? Math.round((correct / answered) * 100) : 0;
    const reviewLinks = DIFFICULTIES.map(({key,label}) => `<a href="../../app/review/wrong.html?course=${encodeURIComponent(course)}&difficulty=${key}"><span>${label}</span><strong>${wrongCounts[key]}問</strong></a>`).join('');
    root.innerHTML = `
      <div class="course-dashboard-summary">
        <div><span>現在の周回</span><strong>${answered} / ${total}</strong></div>
        <div><span>正答率</span><strong>${rate}%</strong></div>
        <div><span>演習数</span><strong>${unitCards.length}</strong></div>
        ${continueHref ? `<a class="course-dashboard-continue" href="${escapeHtml(continueHref)}"><span>続きから</span><strong>${escapeHtml(continueTitle)}</strong></a>` : `<div><span>周回状況</span><strong>完了</strong></div>`}
      </div>
      <div class="course-dashboard-review"><span class="course-dashboard-label">不正解の復習</span>${reviewLinks}</div>`;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
