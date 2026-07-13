(() => {
  function findUnit(unitId) {
    return (window.JAVA_STUDY_DATA?.units || []).find((unit) => unit.id === unitId) || null;
  }
  function displayCourse(unit) {
    const course = unit?.course || '';
    if (course === 'bronze') return 'Java Bronze';
    if (course === 'java11' || course === 'silver11') return 'Java 11 Silver';
    if (course === 'gold11') return 'Java 11 Gold';
    if (course === 'gold17') return 'Java 17 Gold';
    if (course === 'java17' || course === 'silver17') return 'Java 17 Silver';
    return 'Java 17 Silver';
  }
  let resultAutoScrollLocked = false;
  let activeResultScreen = null;

  function scrollToMockResult(screen) {
    if (!screen || resultAutoScrollLocked) return;
    const run = (behavior = 'smooth') => {
      if (resultAutoScrollLocked) return;
      const header = document.querySelector('.site-header');
      const offset = (header?.getBoundingClientRect?.().height || 0) + 18;
      const target = isMockResultHash() && location.hash && !['#fixed-mock-result', '#mock-result-screen'].includes(location.hash)
        ? (screen.querySelector(location.hash) || screen)
        : screen;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior });
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      try { target.focus({ preventScroll: true }); } catch (_) {}
    };
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const behavior = reduced ? 'auto' : 'smooth';
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(() => run(behavior)));
    else setTimeout(() => run(behavior), 0);
    setTimeout(() => run('auto'), 120);
    setTimeout(() => run('auto'), 360);
  }

  function isMockResultHash(hash = location.hash) {
    return ['#fixed-mock-result', '#mock-result-screen', '#mock-result-summary', '#mock-analysis-section', '#mock-review-section', '#mock-result-question-list'].includes(hash || '');
  }

  function replaceMockResultHash(hash = '') {
    const cleanHash = String(hash || '');
    const nextUrl = `${location.pathname}${location.search || ''}${cleanHash}`;
    if (window.history?.replaceState) {
      try {
        window.history.replaceState(null, '', nextUrl);
        return;
      } catch (_) {
        // Opaque-origin preview environments can reject replaceState; hash fallback keeps navigation usable.
      }
    }
    if (cleanHash) location.hash = cleanHash.replace(/^#/, '');
    else if (location.hash) location.hash = '';
  }

  function setMockResultHash() {
    if (isMockResultHash()) return;
    replaceMockResultHash('#fixed-mock-result');
  }

  function clearMockResultHash() {
    if (!isMockResultHash()) return;
    replaceMockResultHash('');
  }

  function ensureGoldEquivalentResultDom(screen) {
    if (!screen) return false;
    const navHtml = [
      '<a href="#mock-result-summary">結果</a>',
      '<a href="#mock-analysis-section">採点解析</a>',
      '<a href="#mock-review-section">解説一覧</a>',
      '<a href="#mock-result-question-list">問題別結果</a>'
    ].join('');
    const navs = Array.from(screen.querySelectorAll('.mock-result-jump-nav'));
    let nav = navs[0];
    navs.slice(1).forEach((extraNav) => extraNav.remove?.());
    if (!nav) {
      nav = document.createElement('nav');
      nav.className = 'mock-result-jump-nav';
    }
    nav.className = 'mock-result-jump-nav';
    nav.setAttribute('aria-label', '模試結果内メニュー');
    nav.dataset.resultNav = 'gold-current';
    if (nav.innerHTML.trim() !== navHtml) nav.innerHTML = navHtml;
    const title = screen.querySelector('h2');
    if (title?.insertAdjacentElement) title.insertAdjacentElement('afterend', nav);
    else if (nav.parentElement !== screen) screen.insertBefore(nav, screen.firstChild || null);
    const sections = [
      { key: 'summary', id: 'mock-result-summary', label: '結果', selector: '#mock-result-summary, .mock-result-summary-panel' },
      { key: 'analysis', id: 'mock-analysis-section', label: '採点解析', selector: '#mock-analysis-section, [aria-label="採点解析"], .mock-analysis-panel' },
      { key: 'review', id: 'mock-review-section', label: '解説一覧', selector: '#mock-review-section, [aria-label="解説一覧"], .mock-review-panel' },
      { key: 'question-list', id: 'mock-result-question-list', label: '問題別結果', selector: '#mock-result-question-list, [aria-label="問題別結果"]' }
    ];
    let cursor = nav;
    const normalizedOrder = [];
    sections.forEach((spec) => {
      const section = screen.querySelector(spec.selector);
      if (!section || section === nav) return;
      section.id = spec.id;
      section.setAttribute('aria-label', spec.label);
      section.dataset.resultSection = spec.key;
      if (cursor?.insertAdjacentElement) {
        cursor.insertAdjacentElement('afterend', section);
        cursor = section;
        normalizedOrder.push(spec.key);
      }
    });
    const expectedOrder = sections.map((spec) => spec.key).join(' ');
    const actualOrder = normalizedOrder.join(' ');
    screen.dataset.resultDom = actualOrder === expectedOrder ? 'gold-equivalent-normalized' : 'gold-equivalent-partial';
    screen.dataset.resultOrder = actualOrder || 'none';
    nav.dataset.resultOrder = expectedOrder;
    return true;
  }

  function activateMockResultScreen() {
    const result = document.getElementById('fixed-mock-result');
    const screen = result?.querySelector('#mock-result-screen, .mock-result-screen');
    if (!result || !screen) return false;
    screen.classList.add('mock-result-screen--unified', 'mock-result-screen--gold-equivalent');
    screen.dataset.resultLayout = screen.dataset.resultLayout || 'unified-gold-equivalent';
    screen.dataset.resultContract = screen.dataset.resultContract || 'summary analysis review question-list';
    screen.dataset.resultTemplate = screen.dataset.resultTemplate || 'gold-current';
    result.dataset.resultLayout = screen.dataset.resultLayout;
    result.dataset.resultContract = screen.dataset.resultContract;
    result.dataset.resultTemplate = screen.dataset.resultTemplate;
    ensureGoldEquivalentResultDom(screen);
    const hasSummary = Boolean(screen.querySelector('#mock-result-summary, .mock-score'));
    const hasAnalysis = Boolean(screen.querySelector('#mock-analysis-section[aria-label="採点解析"]'));
    const hasReview = Boolean(screen.querySelector('#mock-review-section[aria-label="解説一覧"]'));
    const hasQuestionList = Boolean(screen.querySelector('#mock-result-question-list[aria-label="問題別結果"]'));
    const hasGoldEquivalentOrder = screen.dataset.resultDom === 'gold-equivalent-normalized';
    const ready = hasSummary && hasAnalysis && hasReview && hasQuestionList && hasGoldEquivalentOrder;
    screen.dataset.resultReady = ready ? 'true' : 'partial';
    screen.dataset.hasSummary = String(hasSummary);
    screen.dataset.hasAnalysis = String(hasAnalysis);
    screen.dataset.hasReview = String(hasReview);
    screen.dataset.hasQuestionList = String(hasQuestionList);
    screen.dataset.hasGoldEquivalentOrder = String(hasGoldEquivalentOrder);
    screen.dataset.missingSections = [
      hasSummary ? '' : 'summary',
      hasAnalysis ? '' : 'analysis',
      hasReview ? '' : 'review',
      hasQuestionList ? '' : 'question-list',
      hasGoldEquivalentOrder ? '' : 'gold-equivalent-order'
    ].filter(Boolean).join(' ');
    document.body.classList.add('java-mock-result-active');
    result.classList.add('is-active-mock-result');
    result.classList.toggle('is-complete-mock-result', ready);
    setMockResultHash();
    if (!resultAutoScrollLocked) scrollToMockResult(screen);
    return true;
  }

  function mockResultScreenIsVisible() {
    const result = document.getElementById('fixed-mock-result');
    return Boolean(result && !result.hidden && result.querySelector('#mock-result-screen, .mock-result-screen'));
  }

  function lockAutoScrollOnManualInput(event) {
    if (!mockResultScreenIsVisible()) return;
    if (event?.type === 'keydown') {
      const scrollKeys = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar']);
      if (!scrollKeys.has(event.key)) return;
    }
    resultAutoScrollLocked = true;
  }

  function bindManualAutoScrollGuard() {
    document.addEventListener('wheel', lockAutoScrollOnManualInput, { passive: true });
    document.addEventListener('touchstart', lockAutoScrollOnManualInput, { passive: true });
    document.addEventListener('pointerdown', lockAutoScrollOnManualInput, { passive: true });
    document.addEventListener('keydown', lockAutoScrollOnManualInput);
  }

  function bindMockResultScreenSupport() {
    const finish = document.getElementById('fixed-mock-finish');
    const result = document.getElementById('fixed-mock-result');
    if (!result) return;
    bindManualAutoScrollGuard();
    const scheduleActivation = () => {
      [0, 80, 180, 360, 700].forEach((ms) => setTimeout(activateMockResultScreen, ms));
    };
    const lockAutoScrollOnUserAction = (event) => {
      if (event.target?.closest?.('.mock-result-jump-nav a, [data-result-index], [data-analysis-review-index]')) {
        resultAutoScrollLocked = true;
      }
    };
    finish?.addEventListener('click', () => {
      resultAutoScrollLocked = false;
      scheduleActivation();
    });
    result.addEventListener('click', lockAutoScrollOnUserAction);
    result.addEventListener('click', (event) => {
      if (event.target?.closest?.('#fixed-mock-result-restart')) {
        resultAutoScrollLocked = false;
        setTimeout(() => {
          document.body.classList.remove('java-mock-result-active');
          result.classList.remove('is-active-mock-result', 'is-complete-mock-result');
          result.hidden = true;
          clearMockResultHash();
        }, 0);
      }
    });
    if (typeof MutationObserver === 'function') {
      const observer = new MutationObserver(() => {
        const screen = result.querySelector('#mock-result-screen, .mock-result-screen');
        if (screen && screen !== activeResultScreen) {
          activeResultScreen = screen;
          resultAutoScrollLocked = false;
          scheduleActivation();
        }
      });
      observer.observe(result, { childList: true, subtree: true });
    }
    if (isMockResultHash()) scheduleActivation();
  }

  function boot() {
    const unitId = window.JAVA_MOCK_CONFIG?.unitId || window.UNIT_ID || '';
    const bridge = window.JavaBridge;
    if (!unitId || !bridge?.allQuestions || !bridge?.normalizeQuestion || !window.JavaQuizEngine?.mountFixedMock) return;
    const storage = bridge.syncFromLegacy?.() || bridge.commonStorage?.();
    const originals = bridge.allQuestions().filter((q) => q.unitId === unitId);
    const questions = originals.map((q) => bridge.normalizeQuestion(q));
    const unit = findUnit(unitId) || {};
    const official = unit.officialExam || {};
    const course = displayCourse(unit);
    const title = window.JAVA_MOCK_CONFIG?.title || `${course} ${unit.title || '模試'}`;
    const mock = {
      id: unitId,
      title,
      description: '',
      certification: course,
      timeLimitMinutes: unit.timeLimitMinutes || official.timeLimitMinutes || 90,
      questionIds: questions.map((q) => q.id),
      passLine: official.passLine || ''
    };
    window.JavaQuizEngine.mountFixedMock({
      questions,
      mocks: [mock],
      config: { mockId: unitId, resultLayout: 'unified-gold-equivalent', resultTemplate: 'gold-current' },
      resultLayout: 'unified-gold-equivalent',
      resultTemplate: 'gold-current',
      resultContract: ['summary', 'analysis', 'review', 'question-list'],
      storage,
      practiceHref: '../../../app/random.html',
      wrongUnitHref: '../../../app/review/missed-units.html',
      dueHref: '../../../app/review/due.html',
      reviewHref: '../../../app/dashboard.html',
      wrongHref: '../../../app/review/wrong.html'
    });
    bindMockResultScreenSupport();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
