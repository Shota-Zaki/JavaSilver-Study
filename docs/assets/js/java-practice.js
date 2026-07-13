(() => {
  function shuffle(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function tagTitle(tag) {
    const data = window.JAVA_STUDY_DATA || {};
    return data.tagDefinitions?.[tag]?.title || data.tagDefinitions?.[tag]?.label || tag || '未分類';
  }
  function questionUnitTitles(q) {
    const original = q.original || {};
    const titles = new Set([q.unit].filter(Boolean));
    (original.tags || q.tags || []).forEach((tag) => titles.add(tagTitle(tag)));
    if (original.unitTitle) titles.add(original.unitTitle);
    return titles;
  }
  function allNormalizedQuestions() {
    const bridge = window.JavaBridge;
    if (!bridge?.allQuestions || !bridge?.normalizeQuestion) return [];
    return bridge.allQuestions().map((q) => bridge.normalizeQuestion(q));
  }
  function commonStorage() {
    return window.JavaBridge?.syncFromLegacy?.() || window.JavaBridge?.commonStorage?.();
  }
  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
  function buildQuestionSet(mode, storage) {
    const params = new URLSearchParams(location.search || '');
    const all = allNormalizedQuestions();
    if (mode === 'random') {
      const size = Math.min(Math.max(Number(params.get('size') || 20), 5), 60);
      return shuffle(all).slice(0, size);
    }
    if (mode === 'unit') {
      const unitId = window.UNIT_ID || params.get('unit') || '';
      return all.filter((q) => q.original?.unitId === unitId);
    }
    if (mode === 'missed-units') {
      const history = storage?.loadHistory?.() || { questions: {} };
      const unitParam = params.get('unit') || '';
      const wrongUnits = new Set((storage?.getWrongUnits?.() || []).map((item) => item.unit));
      return all.filter((q) => {
        const record = history.questions?.[q.id];
        if (record?.lastResult !== 'wrong') return false;
        const titles = questionUnitTitles(q);
        if (unitParam) return titles.has(unitParam) || (q.tags || []).includes(unitParam);
        if (!wrongUnits.size) return true;
        return [...titles].some((title) => wrongUnits.has(title));
      });
    }
    return all;
  }
  function renderWrongUnitLinks(storage) {
    const root = document.getElementById('wrong-units-overview');
    if (!root || !storage?.getWrongUnits) return;
    const rows = storage.getWrongUnits().slice(0, 24);
    root.innerHTML = rows.length
      ? rows.map((item) => `<a class="weak-unit-chip" href="missed-units.html?unit=${encodeURIComponent(item.unit)}">${item.unit}: ${item.count}回</a>`).join('')
      : '<p class="inline-note">現在、未克服の間違えた単元はありません。</p>';
  }
  function boot() {
    const mount = document.querySelector('[data-java-practice]');
    if (!mount || !window.JavaQuizEngine?.mountPractice) return;
    const mode = mount.dataset.javaPractice || mount.dataset.ellJavaPractice || 'all';
    const storage = commonStorage();
    const questions = buildQuestionSet(mode, storage);
    renderWrongUnitLinks(storage);
    window.JavaQuizEngine.mountPractice({ questions, storage, initialQuestionId: new URLSearchParams(location.search || '').get('q') || '', roundUnitId: mode === 'unit' ? (window.UNIT_ID || '') : '', roundQuestionIds: mode === 'unit' ? questions.map((q) => q.id) : [] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
