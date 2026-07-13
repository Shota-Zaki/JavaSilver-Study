(() => {
  const LAB_ID = 'java';
  const LEGACY_PROGRESS_KEY = 'java-practice-lab-progress-v2';
  const LEGACY_REVIEW_KEY = 'java-practice-lab-review-v1';
  const LEGACY_MISSED_UNITS_KEY = 'java-practice-lab-missed-units-v1';
  const LEGACY_EXAM_HISTORY_KEY = 'java-practice-lab-exam-history-v1';
  const LEGACY_SETTINGS_KEY = 'java-practice-lab-settings-v1';
  const COMMON_HISTORY_KEY = 'java:history:v1';
  const COMMON_MOCK_HISTORY_KEY = 'java:mockHistory:v1';

  function createRecord() {
    return Object.create(null);
  }

  function isRecordObject(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  function ensureWrongUnitRecord(history, unit) {
    const key = String(unit || '未分類');
    const current = history.wrongUnits[key];
    if (!isRecordObject(current)) history.wrongUnits[key] = { count: 0, lastWrongAt: null };
    history.wrongUnits[key].count = Number(history.wrongUnits[key].count) || 0;
    return history.wrongUnits[key];
  }

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

  function readJson(key, fallback) {
    try {
      const raw = window.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) { return fallback; }
  }
  function writeJson(key, value) {
    try { window.localStorage?.setItem(key, JSON.stringify(value)); } catch (_) {}
  }
  function data() { return window.JAVA_STUDY_DATA || { units: [], questions: {}, tagDefinitions: {} }; }

  function applySavedJavaTheme() {
    document.body?.classList.remove('theme-dark');
    const current = readJson(LEGACY_SETTINGS_KEY, { theme: 'light' });
    if (current.theme !== 'light') writeJson(LEGACY_SETTINGS_KEY, { ...current, theme: 'light' });
  }
  const RETIRED_UNIT_IDS = new Set();
  function unitMap() { return new Map((data().units || []).map((u) => [u.id, u])); }
  function allQuestions() {
    const units = unitMap();
    const questions = [];
    Object.entries(data().questions || {}).forEach(([unitId, list]) => {
      if (RETIRED_UNIT_IDS.has(unitId)) return;
      (list || []).forEach((q) => {
        const u = units.get(unitId) || {};
        questions.push({ ...q, unitId, unitTitle: u.title || unitId, unitPage: u.page || 'index.html' });
      });
    });
    return questions;
  }
  const JAVA_TAG_TITLE_OVERRIDES = {
    loop: '繰り返し',
    scope: 'スコープ',
    switch: 'switch',
    static: 'static',
    var: 'var',
    stringbuilder: 'StringBuilder',
    interface: 'interface',
    general: '共通',
    variable: '型・変数',
    boolean: 'boolean',
    'control-flow': '制御の流れ',
    'compile-error': 'コンパイルエラー',
    'runtime-exception': '実行時例外'
  };

  function tagTitle(tag) {
    const value = String(tag || '');
    return data().tagDefinitions?.[value]?.title || data().tagDefinitions?.[value]?.label || JAVA_TAG_TITLE_OVERRIDES[value] || value || '未分類';
  }

  const JAVA_SCOPE_TAGS = new Set(['bronze', 'silver', 'gold', 'java11', 'java17', 'gold11', 'gold17', 'basic']);

  function isJavaInternalTag(tag, unitId = '') {
    const value = String(tag || '').trim();
    if (!value) return true;
    const lower = value.toLowerCase();
    if (unitId && lower === String(unitId).toLowerCase()) return true;
    if (JAVA_SCOPE_TAGS.has(lower)) return true;
    if (/^(?:bronze|java11|silver17|gold11|gold17|gold)-p\d+$/i.test(value)) return true;
    if (/^(?:bronze|java11|gold11|gold17)-exam-[a-z]$/i.test(value)) return true;
    if (/^silver17-(?:record|sealed|switch-yield|pattern)$/i.test(value)) return true;
    if (/^(?:quality|refined|dedup(?:ed)?|wording|curated)-v\d+(?:[-a-z0-9]*)?$/i.test(value)) return true;
    if (/^short-choice-[a-z0-9-]*$/i.test(value)) return true;
    if (/^v\d+(?:[-a-z0-9]*)?$/i.test(value)) return true;
    return false;
  }

  function learningTopicTags(q) {
    return (q.tags || []).filter((tag) => !isJavaInternalTag(tag, q.unitId));
  }

  function learningUnitTitle(q) {
    const topicTags = learningTopicTags(q);
    const category = q.qaCategory && !isJavaInternalTag(q.qaCategory, q.unitId) ? q.qaCategory : '';
    const tag = category || topicTags[0] || '';
    return tag ? tagTitle(tag) : (q.unitTitle || q.unitId || 'Java');
  }

  function questionTitle(q) {
    const mockQuestionOnlyUnits = new Set(['unit07', 'unit08', 'unit10', 'unit11']);
    if (mockQuestionOnlyUnits.has(String(q.unitId || ''))) {
      const n = String(q.number || '').padStart(2, '0');
      return `問${n}`;
    }
    const title = q.title ? ` ${q.title}` : '';
    return `問${q.number || ''}.${title}`.trim();
  }
  function questionText(q) {
    return [questionTitle(q), q.prompt, q.command].filter(Boolean).join('\n');
  }
  function questionCode(q) {
    return (q.codeBlocks || []).map((b) => [b.title, b.code].filter(Boolean).join('\n')).filter(Boolean).join('\n\n');
  }
  function explanationText(q) {
    const markdown = String(q?.explanationMarkdown || '').trim();
    if (markdown) return markdown;
    const content = String(q?.contentExplanation || '').trim();
    if (content) return content;
    const exp = q?.explanation;
    if (!exp) return '';
    if (typeof exp === 'string') return exp;
    const parts = [];
    if (exp.summary) parts.push(exp.summary);
    if (Array.isArray(exp.points)) parts.push(...exp.points);
    if (exp.correct) parts.push(`正解：${exp.correct}`);
    if (exp.why) parts.push(`理由：${exp.why}`);
    if (exp.related) parts.push(`関連知識：${exp.related}`);
    if (exp.examTip) parts.push(`試験での見方：${exp.examTip}`);
    return parts.filter(Boolean).join('\n');
  }

  function escapeRegExp(value) {
    return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function displayChoiceKey(index) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (index >= 0 && index < letters.length) return letters[index];
    return `選択肢${index + 1}`;
  }

  function normalizeChoiceText(value, fromKey, toKey) {
    const text = String(value || '');
    if (!fromKey || !toKey || fromKey === toKey) return text;
    const prefixPattern = new RegExp(`^${escapeRegExp(String(fromKey))}([：:])`);
    return text.replace(prefixPattern, `${toKey}$1`);
  }

  function optionDetailKey(detail) {
    if (!detail || typeof detail !== 'object') return '';
    return String(detail.key ?? detail.choice ?? detail.option ?? '').trim();
  }

  function optionDetailExplanation(detail, originalKey, displayKey) {
    if (!detail || typeof detail !== 'object') return '';
    const raw = detail.explanation ?? detail.reason ?? detail.text ?? '';
    const text = String(raw || '').trim();
    if (!text) return '';
    return normalizeChoiceText(text, originalKey, displayKey);
  }

  function normalizeQuestion(q) {
    const sourceOptions = Array.isArray(q.options) ? q.options : [];
    const keyMap = new Map(sourceOptions.map((option, index) => [String(option.key), displayChoiceKey(index)]));
    const detailLines = Array.isArray(q.optionDetails) ? q.optionDetails : (Array.isArray(q.explanation?.optionDetails) ? q.explanation.optionDetails : []);
    const choiceExplanations = {};
    const choices = sourceOptions.map((option, index) => {
      const originalKey = String(option.key);
      const displayKey = displayChoiceKey(index);
      const detail = detailLines.find((item) => optionDetailKey(item) === originalKey);
      const explanation = q.explanation?.choices?.[originalKey] || optionDetailExplanation(detail, originalKey, displayKey) || '';
      choiceExplanations[displayKey] = normalizeChoiceText(explanation, originalKey, displayKey);
      return { key: displayKey, sourceKey: originalKey, text: [option.text, option.code].filter(Boolean).join(' ') };
    });
    const answer = (Array.isArray(q.answer) ? q.answer : (q.answer ? [q.answer] : []))
      .map((value) => keyMap.get(String(value)) || String(value))
      .filter(Boolean);
    return {
      id: q.id,
      question: questionText(q),
      code: questionCode(q),
      unit: learningUnitTitle(q),
      tags: learningTopicTags(q),
      difficulty: q.difficulty || 'standard',
      certifications: [q.unitTitle, q.unitId].filter(Boolean),
      choices,
      answer,
      explanation: explanationText(q),
      explanationMarkdown: q.explanationMarkdown || '',
      explanationVisualHtml: q.explanation?.visualHtml || '',
      choiceExplanations,
      original: q
    };
  }
  function originalHref(q) {
    const root = window.APP_ROOT || './';
    const page = q.unitPage || 'index.html';
    return `${root}${page}?q=${encodeURIComponent(q.id)}`;
  }
  function isBookmarked(id) {
    const review = readJson(LEGACY_REVIEW_KEY, {});
    return Object.values(review || {}).some((map) => !!(map && map[id]));
  }
  function commonStorage() {
    if (!window.JavaStorage?.createLabStorage) return null;
    return decorateJavaStorage(window.JavaStorage.createLabStorage({
      labId: LAB_ID,
      historyKey: COMMON_HISTORY_KEY,
      legacyHistoryKeys: [],
      mockHistoryKey: COMMON_MOCK_HISTORY_KEY
    }));
  }
  function normalizeMockHistoryEntry(entry) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return null;
    const total = Number(entry.total || 0);
    const correct = Number(entry.correct ?? entry.score ?? 0);
    const elapsedSec = Number(entry.elapsedSec ?? entry.usedSec ?? 0);
    const finishedAt = entry.finishedAt || entry.startedAt || new Date().toISOString();
    const rate = Number.isFinite(Number(entry.rate)) ? Number(entry.rate) : (total ? Math.round((correct / total) * 100) : 0);
    return {
      ...entry,
      mockId: entry.mockId || entry.unitId || '',
      finishedAt,
      correct: Number.isFinite(correct) ? correct : 0,
      total: Number.isFinite(total) ? total : 0,
      rate,
      elapsedSec: Number.isFinite(elapsedSec) ? elapsedSec : 0,
      wrongUnits: entry.wrongUnits && typeof entry.wrongUnits === 'object' ? entry.wrongUnits : {},
      title: entry.title || entry.unitId || entry.mockId || 'Java模試'
    };
  }

  function mockHistoryIdentity(entry) {
    const item = normalizeMockHistoryEntry(entry);
    if (!item) return '';
    return [item.mockId || item.title || '', item.finishedAt || '', item.correct, item.total].join('|');
  }

  function mergeMockHistory(existing, legacy) {
    const merged = new Map();
    [...(Array.isArray(existing) ? existing : []), ...(Array.isArray(legacy) ? legacy : [])].forEach((entry) => {
      const item = normalizeMockHistoryEntry(entry);
      const key = mockHistoryIdentity(item);
      if (item && key && !merged.has(key)) merged.set(key, item);
    });
    return [...merged.values()]
      .sort((a, b) => String(b.finishedAt || '').localeCompare(String(a.finishedAt || '')))
      .slice(0, 30);
  }

  function newerDate(a, b) {
    return String(a || '') >= String(b || '') ? String(a || '') : String(b || '');
  }

  function preserveCommonQuestionCounts(commonRecord = {}, legacyRecord = {}) {
    const commonDate = commonRecord.lastAnsweredAt || '';
    const legacyDate = legacyRecord.lastAnsweredAt || '';
    const legacyIsNewer = String(legacyDate) >= String(commonDate);
    return {
      ...commonRecord,
      ...legacyRecord,
      attempts: Math.max(Number(commonRecord.attempts || 0), Number(legacyRecord.attempts || 0)),
      correct: Math.max(Number(commonRecord.correct || 0), Number(legacyRecord.correct || 0)),
      wrong: Math.max(Number(commonRecord.wrong || 0), Number(legacyRecord.wrong || 0)),
      bookmarked: Boolean(commonRecord.bookmarked || legacyRecord.bookmarked),
      lastAnsweredAt: newerDate(commonDate, legacyDate),
      lastResult: legacyIsNewer
        ? (legacyRecord.lastResult ?? commonRecord.lastResult ?? null)
        : (commonRecord.lastResult ?? legacyRecord.lastResult ?? null),
      unit: legacyRecord.unit || commonRecord.unit || ''
    };
  }

  function hydrateLegacyProgressFromCommon(commonHistory) {
    const records = commonHistory?.questions || {};
    if (!records || !Object.keys(records).length) return;
    const questions = new Map(allQuestions().map((q) => [q.id, q]));
    const progress = readJson(LEGACY_PROGRESS_KEY, {});
    const missed = readJson(LEGACY_MISSED_UNITS_KEY, { questions: {} });
    missed.questions ||= {};
    let progressChanged = false;
    let missedChanged = false;
    Object.entries(records).forEach(([id, record]) => {
      if (!record || !record.lastResult) return;
      const q = questions.get(id);
      const existing = progress[id] || {};
      const commonDate = record.lastAnsweredAt || '';
      const existingDate = existing.answeredAt || existing.savedAt || '';
      const existingIsNewer = existingDate && String(existingDate) >= String(commonDate || '');
      if (!existingDate || String(commonDate) > String(existingDate)) {
        progress[id] = {
          ...existing,
          selected: Array.isArray(existing.selected) ? existing.selected : [],
          isCorrect: record.lastResult === 'correct' ? true : record.lastResult === 'wrong' ? false : existing.isCorrect ?? null,
          answeredAt: commonDate || new Date().toISOString(),
          unitId: q?.unitId || existing.unitId || '',
          tags: Array.isArray(q?.tags) ? q.tags : Array.isArray(existing.tags) ? existing.tags : []
        };
        progressChanged = true;
      }
      if (existingIsNewer && existing.isCorrect === true) {
        if (missed.questions[id] && !missed.questions[id].resolvedAt) {
          missed.questions[id] = { ...missed.questions[id], resolvedAt: existingDate, lastAnswerAt: existingDate };
          missedChanged = true;
        }
        return;
      }
      if (record.lastResult === 'wrong') {
        const existingMiss = missed.questions[id] || {};
        missed.questions[id] = {
          ...existingMiss,
          qid: id,
          unitId: q?.unitId || existingMiss.unitId || '',
          number: q?.number || existingMiss.number || '',
          title: q?.title || existingMiss.title || '',
          tags: learningTopicTags(q || {}).length ? learningTopicTags(q || {}) : (Array.isArray(q?.tags) ? q.tags : existingMiss.tags || []),
          wrongAt: existingMiss.wrongAt || commonDate || new Date().toISOString(),
          lastWrongAt: commonDate || existingMiss.lastWrongAt || existingMiss.wrongAt || new Date().toISOString(),
          resolvedAt: null
        };
        missedChanged = true;
      } else if (record.lastResult === 'correct' && missed.questions[id] && !missed.questions[id].resolvedAt) {
        missed.questions[id] = { ...missed.questions[id], resolvedAt: commonDate || new Date().toISOString(), lastAnswerAt: commonDate || new Date().toISOString() };
        missedChanged = true;
      }
    });
    if (progressChanged) writeJson(LEGACY_PROGRESS_KEY, progress);
    if (missedChanged) writeJson(LEGACY_MISSED_UNITS_KEY, missed);
  }

  function mirrorQuestionResultToLegacy(question, isCorrect) {
    const q = question?.original || question || {};
    const id = question?.id || q.id || '';
    if (!id) return;
    const now = new Date().toISOString();
    const unitId = q.unitId || question?.unitId || '';
    const tags = Array.isArray(q.tags) ? q.tags : Array.isArray(question?.tags) ? question.tags : [];
    const progress = readJson(LEGACY_PROGRESS_KEY, {});
    progress[id] = {
      ...(progress[id] || {}),
      selected: Array.isArray(progress[id]?.selected) ? progress[id].selected : [],
      isCorrect: isCorrect === true,
      answeredAt: now,
      unitId,
      tags
    };
    writeJson(LEGACY_PROGRESS_KEY, progress);

    const missed = readJson(LEGACY_MISSED_UNITS_KEY, { questions: {} });
    missed.questions ||= {};
    const existing = missed.questions[id] || {};
    if (isCorrect) {
      if (existing.wrongAt && !existing.resolvedAt) {
        missed.questions[id] = { ...existing, resolvedAt: now, lastAnswerAt: now };
        writeJson(LEGACY_MISSED_UNITS_KEY, missed);
      }
      return;
    }
    const topicTags = learningTopicTags({ tags, unitId });
    missed.questions[id] = {
      ...existing,
      qid: id,
      unitId,
      number: q.number || question?.number || '',
      title: q.title || question?.title || '',
      tags: topicTags.length ? topicTags : tags,
      wrongAt: existing.wrongAt || now,
      lastWrongAt: now,
      resolvedAt: null
    };
    writeJson(LEGACY_MISSED_UNITS_KEY, missed);
  }

  function decorateJavaStorage(storage) {
    if (!storage || storage.__javaDecorated) return storage;
    const originalUpdateQuestionResult = typeof storage.updateQuestionResult === 'function' ? storage.updateQuestionResult.bind(storage) : null;
    if (originalUpdateQuestionResult) {
      storage.updateQuestionResult = (question, isCorrect, context = {}) => {
        const record = originalUpdateQuestionResult(question, isCorrect, context);
        mirrorQuestionResultToLegacy(question, isCorrect);
        return record;
      };
    }
    Object.defineProperty(storage, '__javaDecorated', { value: true, enumerable: false });
    return storage;
  }

  function syncFromLegacy() {
    const storage = commonStorage();
    if (!storage) return null;
    const existingHistory = storage.loadHistory?.() || { questions: {}, wrongUnits: {} };
    hydrateLegacyProgressFromCommon(existingHistory);
    const questions = new Map(allQuestions().map((q) => [q.id, q]));
    const progress = readJson(LEGACY_PROGRESS_KEY, {});
    const missed = readJson(LEGACY_MISSED_UNITS_KEY, { questions: {} });
    const history = { questions: createRecord(), wrongUnits: createRecord() };
    Object.entries(progress || {}).forEach(([id, p]) => {
      const q = questions.get(id);
      const isCorrect = p?.isCorrect === true;
      const isWrong = p?.isCorrect === false;
      const legacyRecord = {
        attempts: p?.selected?.length || p?.isCorrect !== undefined ? 1 : 0,
        correct: isCorrect ? 1 : 0,
        wrong: isWrong ? 1 : 0,
        bookmarked: isBookmarked(id),
        lastResult: isCorrect ? 'correct' : isWrong ? 'wrong' : null,
        lastAnsweredAt: p?.answeredAt || p?.savedAt || '',
        unit: q?.unitTitle || p?.unitId || ''
      };
      history.questions[id] = preserveCommonQuestionCounts(existingHistory.questions?.[id], legacyRecord);
    });
    Object.entries(missed.questions || {}).forEach(([id, item]) => {
      if (!item || item.resolvedAt) return;
      (item.tags || [item.unitId || '未分類']).forEach((tag) => {
        const title = tagTitle(tag);
        const wrongUnit = ensureWrongUnitRecord(history, title);
        wrongUnit.count += 1;
        const at = item.lastWrongAt || item.wrongAt || '';
        if (!wrongUnit.lastWrongAt || at > wrongUnit.lastWrongAt) wrongUnit.lastWrongAt = at;
      });
    });
    Object.keys(history.questions).forEach((id) => {
      const item = missed.questions?.[id];
      if (item && !item.resolvedAt) history.questions[id].lastResult = 'wrong';
    });
    Object.entries(existingHistory.questions || {}).forEach(([id, record]) => {
      if (!history.questions[id] && record) history.questions[id] = record;
    });
    storage.saveHistory(history);

    const legacyExamHistory = readJson(LEGACY_EXAM_HISTORY_KEY, []);
    const legacyMockHistory = (legacyExamHistory || []).map((h) => normalizeMockHistoryEntry({
      mockId: h.unitId || '',
      finishedAt: h.finishedAt || h.startedAt || new Date().toISOString(),
      correct: h.score || 0,
      total: h.total || 0,
      rate: h.total ? Math.round((h.score || 0) / h.total * 100) : 0,
      elapsedSec: h.usedSec || 0,
      wrongUnits: {},
      title: h.title || h.unitId || 'Java模試'
    })).filter(Boolean);
    const existingMockHistory = readJson(COMMON_MOCK_HISTORY_KEY, []);
    writeJson(COMMON_MOCK_HISTORY_KEY, mergeMockHistory(existingMockHistory, legacyMockHistory));
    return storage;
  }

  function renderCommonDashboard() {
    const root = document.getElementById('dashboardRoot');
    if (!root) return;
    const storage = syncFromLegacy();
    const questions = allQuestions().map(normalizeQuestion);
    if (!storage) return;
    const history = storage.loadHistory();
    const records = history.questions || {};
    const stats = storage.getStats();
    const answeredCount = questions.filter((q) => records[q.id]).length;
    const totalCount = questions.length;
    const reviewCount = Number(stats.wrongLast || 0) + Number(stats.bookmarked || 0);
    const gradedAttempts = Number(stats.correct || 0) + Number(stats.wrong || 0);
    const rate = gradedAttempts ? Math.round((Number(stats.correct || 0) / gradedAttempts) * 100) : 0;
    const latestAnswered = Object.entries(records)
      .map(([id, record]) => ({ q: questions.find((item) => item.id === id), record }))
      .filter((item) => item.q && item.record)
      .sort((a, b) => String(b.record.lastAnsweredAt || '').localeCompare(String(a.record.lastAnsweredAt || '')))[0] || null;
    const firstWrong = Object.entries(records)
      .map(([id, record]) => ({ q: questions.find((item) => item.id === id), record }))
      .filter((item) => item.q && item.record?.lastResult === 'wrong')
      .sort((a, b) => String(b.record.lastAnsweredAt || '').localeCompare(String(a.record.lastAnsweredAt || '')))[0] || null;
    const firstBookmarked = Object.entries(records)
      .map(([id, record]) => ({ q: questions.find((item) => item.id === id), record }))
      .find((item) => item.q && item.record?.bookmarked) || null;
    const dashboardHref = (base, params = {}) => hrefWithParams(base, params);
    const randomHref = '../app/random.html?size=20';
    const questionHref = (item, fallback) => {
      const q = item?.q;
      const page = q?.original?.unitPage || '';
      if (!q || !page) return fallback;
      return `../${page}?q=${encodeURIComponent(q.id)}`;
    };
    const quickCard = (label, detail, href, disabled = false) => `<a class="quick-card${disabled ? ' is-disabled' : ''}" href="${escapeHtml(disabled ? '#dashboardRoot' : href)}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(detail)}</strong></a>`;
    const tagStats = Object.create(null);
    questions.forEach((q) => {
      publicTags(q.tags || ['未分類']).forEach((tag) => {
        tagStats[tag] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
        tagStats[tag].total += 1;
        const record = records[q.id];
        if (record) tagStats[tag].answered += 1;
        if (record?.lastResult === 'correct') tagStats[tag].correct += 1;
        if (record?.lastResult === 'wrong' || Number(record?.wrong || 0) > 0) tagStats[tag].wrong += Number(record?.wrong || 1);
      });
    });
    const weak = Object.entries(tagStats)
      .filter(([, value]) => value.answered > 0 || value.wrong > 0)
      .sort((a, b) => b[1].wrong - a[1].wrong || b[1].answered - a[1].answered || tagTitle(a[0]).localeCompare(tagTitle(b[0]), 'ja'))
      .slice(0, 14);
    const weakHtml = weak.length
      ? `<div class="weak-tags">${weak.map(([tag, value]) => {
          const label = tagTitle(tag);
          return `<span class="weak-tag">${escapeHtml(label)} <b>${value.wrong}</b>/<small>${value.answered}</small></span>`;
        }).join('')}</div>`
      : '<p class="inline-note">まだ間違いデータがありません。まず演習を解いてください。</p>';
    root.classList.add('dashboard', 'java-reference-dashboard');
    root.innerHTML = `
      <div class="quick-actions">
        ${quickCard('前回の続き', latestAnswered ? `${latestAnswered.q.unit} / 問${questions.indexOf(latestAnswered.q) + 1}` : 'ランダム演習から開始', latestAnswered ? questionHref(latestAnswered, randomHref) : randomHref)}
        ${quickCard('間違い復習', stats.wrongLast ? `${stats.wrongLast}問を復習` : '対象なし', firstWrong ? questionHref(firstWrong, '../app/review/wrong.html') : '../app/review/wrong.html', !stats.wrongLast)}
        ${quickCard('見直し復習', stats.bookmarked ? `${stats.bookmarked}問を復習` : '対象なし', firstBookmarked ? questionHref(firstBookmarked, '../app/review/marked.html') : '../app/review/marked.html', !stats.bookmarked)}
        ${quickCard('ランダム演習', '20問で確認', randomHref)}
      </div>
      <div class="today-panel">
        <div>
          <h2>今日の復習</h2>
          <p>不正解、見直し、未回答を短時間で処理します。</p>
        </div>
        <div class="today-actions">
          <a class="btn primary" href="../app/review/wrong.html">間違い ${Number(stats.wrongLast || 0)}問</a>
          <a class="btn" href="../app/review/due.html">復習対象</a>
          <a class="btn" href="../app/review/marked.html">見直し ${Number(stats.bookmarked || 0)}問</a>
        </div>
      </div>
      <div class="stat-grid dashboard-main-stats">
        <div class="stat-card"><span>総問題数</span><strong>${totalCount}</strong></div>
        <div class="stat-card"><span>解答済み</span><strong>${answeredCount}</strong></div>
        <div class="stat-card"><span>正解率</span><strong>${rate}%</strong></div>
        <div class="stat-card"><span>要復習</span><strong>${reviewCount}</strong></div>
      </div>
      <div class="weak-panel">
        <div class="panel-title-row"><h2>苦手タグ</h2><span class="inline-note">不正解数 / 解答数</span></div>
        ${weakHtml}
      </div>`;
  }

  function renderCommonSettings() {
    const root = document.getElementById('settingsRoot');
    if (!root || root.dataset.finalSettings === 'true') return;
    const current = readJson(LEGACY_SETTINGS_KEY, { theme: 'light', autoNext: false, dailyGoal: 20 });
    root.innerHTML = `<div class="compare-grid common-settings-grid">
      <div class="compare-card"><h2>表示</h2><label>テーマ<select id="ellSettingTheme" class="search-input"><option value="light">明るいテーマ</option></select></label></div>
      <div class="compare-card"><h2>演習</h2><label class="toggle-inline"><input type="checkbox" id="ellSettingAutoNext"> 通常演習で解答後に自動で次へ</label><label>1日の目標回答数<input id="ellSettingDailyGoal" class="search-input" type="number" min="1" max="200"></label></div>
      <div class="compare-card"><h2>データ</h2><button class="btn" id="javaSyncNow" type="button">学習履歴へ反映</button><p class="inline-note">Java Practice Labの履歴をJava Practice Labの共通履歴形式にも反映します。</p></div>
    </div><div id="javaSettingsStatus" class="notice">設定は変更すると保存されます。</div>`;
    document.getElementById('ellSettingTheme').value = 'light';
    document.getElementById('ellSettingAutoNext').checked = !!current.autoNext;
    document.getElementById('ellSettingDailyGoal').value = Number(current.dailyGoal || 20);
    function save() {
      const next = { theme: document.getElementById('ellSettingTheme').value, autoNext: document.getElementById('ellSettingAutoNext').checked, dailyGoal: Number(document.getElementById('ellSettingDailyGoal').value || 20) };
      writeJson(LEGACY_SETTINGS_KEY, next);
      document.body.classList.remove('theme-dark');
      document.getElementById('javaSettingsStatus').textContent = '設定を保存しました。';
    }
    ['ellSettingTheme','ellSettingAutoNext','ellSettingDailyGoal'].forEach((id)=>document.getElementById(id)?.addEventListener('change', save));
    document.getElementById('javaSyncNow')?.addEventListener('click', () => { syncFromLegacy(); document.getElementById('javaSettingsStatus').textContent = '学習履歴へ反映しました。'; });
  }

  function boot() {
    applySavedJavaTheme();
    syncFromLegacy();
    renderCommonDashboard();
    renderCommonSettings();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.JavaBridge = { syncFromLegacy, allQuestions, normalizeQuestion, commonStorage };
})();
