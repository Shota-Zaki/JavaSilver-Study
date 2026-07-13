(() => {
  const DIFFICULTIES = [
    { key: 'basic', label: '基礎', detail: '基本ルールと用語' },
    { key: 'standard', label: '標準', detail: '通常レベルの読解' },
    { key: 'hard', label: '応用', detail: '複合条件と発展問題' }
  ];
  const COURSE_LABELS = { basic: 'Java基礎', bronze: 'Bronze', silver: 'Silver', silver11: 'Java 11 Silver', silver17: 'Java 17 Silver', gold: 'Gold', gold11: 'Java 11 Gold', gold17: 'Java 17 Gold' };
  function matchesCourse(unitId, course) {
    if (!course) return true;
    if (course === 'basic') return unitId.startsWith('basic-');
    if (course === 'bronze') return unitId.startsWith('bronze-');
    if (course === 'silver') return unitId.startsWith('java11-') || unitId.startsWith('silver17-');
    if (course === 'silver11') return unitId.startsWith('java11-');
    if (course === 'silver17') return unitId.startsWith('silver17-') || ['unit07','unit08','unit10','unit11'].includes(unitId);
    if (course === 'gold') return unitId.startsWith('gold11-') || unitId.startsWith('gold17-');
    if (course === 'gold11') return unitId.startsWith('gold11-');
    if (course === 'gold17') return unitId.startsWith('gold17-');
    return true;
  }
  function boot() {
    const root = document.getElementById('wrongDifficultyRoot');
    const bridge = window.JavaBridge;
    if (!root || !bridge?.allQuestions) return;
    const params = new URLSearchParams(location.search || '');
    const selected = params.get('difficulty') || '';
    const course = params.get('course') || '';
    const storage = bridge.syncFromLegacy?.() || bridge.commonStorage?.();
    const history = storage?.loadHistory?.() || { questions: {} };
    const questions = bridge.allQuestions().filter((q) => matchesCourse(q.unitId || '', course));
    const counts = { basic: 0, standard: 0, hard: 0 };
    questions.forEach((q) => {
      if (history.questions?.[q.id]?.lastResult !== 'wrong') return;
      const difficulty = ['basic','standard','hard'].includes(q.difficulty) ? q.difficulty : 'standard';
      counts[difficulty] += 1;
    });
    const courseQuery = course ? `&course=${encodeURIComponent(course)}` : '';
    const cards = DIFFICULTIES.map(({key,label,detail}) => `<a class="wrong-difficulty-card${selected === key ? ' is-active' : ''}" href="wrong.html?difficulty=${key}${courseQuery}"><span>${label}</span><strong>${counts[key]}問</strong><small>${detail}</small></a>`).join('');
    root.innerHTML = `<div class="wrong-difficulty-head"><h2>${course ? `${COURSE_LABELS[course] || course}の不正解` : '難易度を選択'}</h2>${course ? '<a href="wrong.html">全コース</a>' : ''}</div><div class="wrong-difficulty-grid">${cards}</div>`;
    const questionRoot = document.getElementById('questionRoot');
    const hero = document.querySelector('main > .hero');
    if (!selected) {
      if (questionRoot) questionRoot.hidden = true;
      hero?.querySelector('.toolbar')?.setAttribute('hidden','');
      const title = document.getElementById('unitTitle');
      const desc = document.getElementById('unitDesc');
      if (title) title.textContent = course ? `${COURSE_LABELS[course] || course}の不正解を復習` : '不正解の復習';
      if (desc) desc.textContent = '復習する難易度を選択してください。';
    } else {
      if (questionRoot) questionRoot.hidden = false;
      hero?.querySelector('.toolbar')?.removeAttribute('hidden');
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
