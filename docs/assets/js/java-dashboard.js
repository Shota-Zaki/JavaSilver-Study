(() => {
  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }


  function isPublicLearningTag(tag) {
    const value = String(tag || '').trim();
    if (!value) return false;
    return !(
      /^quality-v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      /^refined-v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      /^dedup(?:ed)?-v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      /^wording-v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      /^curated-v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      /^short-choice-[a-z0-9-]*$/i.test(value) ||
      /^v\d+(?:[-a-z0-9]*)?$/i.test(value) ||
      value === 'case' ||
      value === 'scenario' ||
      value === 'similarity-audit'
    );
  }

  function publicTags(tags) {
    return (tags || []).filter(isPublicLearningTag);
  }

  function hrefWithParams(baseHref, params) {
    const [path, query = ''] = String(baseHref || '').split('?');
    const search = new URLSearchParams(query);
    Object.entries(params || {}).forEach(([key, value]) => {
      if (value !== null && value !== undefined && String(value) !== '') search.set(key, String(value));
    });
    const queryText = search.toString();
    return queryText ? `${path}?${queryText}` : path;
  }

  function formatResultDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '記録日時なし' : date.toLocaleString('ja-JP');
  }

  function toNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function inferDbSqlMajor(value) {
    const text = String(value || '');
    if (text.startsWith('common-')) return 'common';
    if (text.startsWith('dbsp-')) return 'ipa';
    if (text.startsWith('oss-')) return 'oss';
    if (text.startsWith('oracle-')) return 'oracle';
    if (text.startsWith('mysql-')) return 'mysql';
    if (text.startsWith('azure-')) return 'azure';
    if (text.startsWith('practical-')) return 'practical';
    return '';
  }

  function renderReviewDashboard(options) {
    const questions = options.questions || [];
    const storage = options.storage;
    const practiceHref = options.practiceHref || '../practice/quiz.html';
    const wrongHref = options.wrongHref || practiceHref;
    const dueHref = options.dueHref || practiceHref;
    const bookmarkedHref = options.bookmarkedHref || practiceHref;
    const wrongUnitHref = options.wrongUnitHref || practiceHref;
    const unitParamForQuestion = typeof options.unitParamForQuestion === 'function' ? options.unitParamForQuestion : (q) => q.unit || '';
    const $ = (selector) => document.querySelector(selector);
    if (!storage) return;
    const history = storage.loadHistory();
    const rawMockHistory = storage.loadMockHistory();
    const mockHistory = Array.isArray(rawMockHistory) ? rawMockHistory : [];
    const records = history.questions || {};
    const questionRecords = Object.entries(records);
    const stats = storage.getStats();
    const summary = $('#review-summary');
    if (summary) {
      summary.innerHTML = `
        <article><strong>${stats.attempts}</strong><span>回答数</span></article>
        <article><strong>${stats.correct}</strong><span>正解</span></article>
        <article><strong>${stats.wrong}</strong><span>不正解</span></article>
        <article><strong>${stats.rate}%</strong><span>正答率</span></article>
        <article><strong>${stats.bookmarked}</strong><span>見直し</span></article>
        <article><strong>${stats.wrongLast}</strong><span>前回不正解</span></article>
      `;
    }

    const wrongUnitTable = $('#wrong-unit-table');
    if (wrongUnitTable) {
      const rows = storage.getWrongUnits().map(({ unit, count }) => {
        const href = hrefWithParams(wrongUnitHref, { unit, mode: 'wrong-units' });
        return `<tr><td>${escapeHtml(unit)}</td><td>${count}</td><td><a class="text-link" href="${escapeHtml(href)}">この単元を解く</a></td></tr>`;
      }).join('');
      wrongUnitTable.innerHTML = rows || '<tr><td colspan="3">まだ不正解単元はありません。</td></tr>';
    }

    const questionMap = new Map(questions.map((q) => [q.id, q]));
    const questionIdParamName = options.questionIdParamName || 'id';
    const questionHref = (q, mode) => {
      const baseHref = mode === 'wrong' ? wrongHref : mode === 'due' ? dueHref : mode === 'bookmarked' ? bookmarkedHref : practiceHref;
      const params = {
        major: q.major || '',
        unit: unitParamForQuestion(q),
        mode
      };
      params[questionIdParamName] = q.id || '';
      return hrefWithParams(baseHref, params);
    };
    const cardHtml = (q, r, modeLabel, mode) => `
      <article class="review-question-card">
        <h3>${escapeHtml(q.question)}</h3>
        <p>${escapeHtml(q.unit)}${publicTags(q.tags || []).length ? ` / ${escapeHtml(publicTags(q.tags || []).join(', '))}` : ''}</p>
        <p>回答回数: ${r.attempts || 0} / 不正解: ${r.wrong || 0}回</p>
        <a class="text-link" href="${escapeHtml(questionHref(q, mode))}">${modeLabel}</a>
      </article>`;

    const lastWrong = $('#last-wrong-list');
    if (lastWrong) {
      const rows = questionRecords.filter(([, r]) => r.lastResult === 'wrong')
        .map(([id, r]) => ({ q: questionMap.get(id), r })).filter((item) => item.q)
        .sort((a, b) => String(b.r.lastAnsweredAt || '').localeCompare(String(a.r.lastAnsweredAt || '')))
        .slice(0, 12).map(({ q, r }) => cardHtml(q, r, '前回不正解モードで解く', 'wrong')).join('');
      lastWrong.innerHTML = rows || '<p>前回不正解の問題はありません。</p>';
    }

    const dueReview = $('#due-review-list');
    if (dueReview) {
      const rows = questionRecords.filter(([, r]) => Boolean(r.bookmarked || r.lastResult === 'wrong' || Number(r.wrong || 0) > 0))
        .map(([id, r]) => ({ q: questionMap.get(id), r })).filter((item) => item.q)
        .sort((a, b) => {
          const wrongDelta = Number(b.r.wrong || 0) - Number(a.r.wrong || 0);
          if (wrongDelta) return wrongDelta;
          return String(b.r.lastAnsweredAt || '').localeCompare(String(a.r.lastAnsweredAt || ''));
        })
        .slice(0, 12).map(({ q, r }) => cardHtml(q, r, '復習対象として解く', 'due')).join('');
      dueReview.innerHTML = rows || '<p>復習対象は、見直し登録済み・前回不正解・過去に不正解がある問題です。まだ対象がない場合は、通常演習で回答履歴を作成してください。</p>';
    }

    const bookmarked = $('#bookmarked-list');
    if (bookmarked) {
      const rows = questionRecords.filter(([, r]) => r.bookmarked)
        .map(([id, r]) => ({ q: questionMap.get(id), r })).filter((item) => item.q)
        .slice(0, 12).map(({ q, r }) => cardHtml(q, r, '見直しモードで解く', 'bookmarked')).join('');
      bookmarked.innerHTML = rows || '<p>見直し問題はありません。</p>';
    }

    const mockHistoryElement = $('#mock-history-list');
    if (mockHistoryElement) {
      const rows = (mockHistory || []).slice(0, 10).map((result) => {
        const mockMajor = inferDbSqlMajor(result.mockId || result.id || result.title || '');
        const wrongUnits = Object.entries(result.wrongUnits || {}).sort((a,b) => b[1]-a[1]).map(([unit,count]) => {
          const href = hrefWithParams(wrongUnitHref, { major: mockMajor, unit, mode: 'wrong-units' });
          return `<a class="weak-unit-chip" href="${escapeHtml(href)}">${escapeHtml(unit)}: ${count}</a>`;
        }).join('') || '<span class="search-filter-muted">なし</span>';
        const correct = toNumber(result.correct);
        const total = toNumber(result.total);
        const rate = Number.isFinite(Number(result.rate)) ? Number(result.rate) : (total ? Math.round((correct / total) * 100) : 0);
        const elapsedSec = toNumber(result.elapsedSec);
        return `<article class="review-question-card"><h3>${escapeHtml(formatResultDate(result.finishedAt))} / ${correct}/${total}問 (${rate}%)</h3><div class="weak-unit-list mock-history-unit-links"><span class="mock-history-label">不正解単元</span>${wrongUnits}</div><p>所要時間: ${Math.floor(elapsedSec / 60)}分${elapsedSec % 60}秒</p></article>`;
      }).join('');
      mockHistoryElement.innerHTML = rows || '<p>模擬テスト履歴はありません。</p>';
    }
  }

  window.JavaDashboard = { renderReviewDashboard };
})();
