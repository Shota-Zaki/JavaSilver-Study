(() => {
  function createRecord() { return Object.create(null); }
  const DEFAULT_HISTORY = { questions: createRecord(), wrongUnits: createRecord() };
  const DEFAULT_ROUNDS = { units: createRecord() };

  function structuredCloneSafe(value) { return JSON.parse(JSON.stringify(value)); }
  function safeParse(raw, fallback) {
    if (!raw) return structuredCloneSafe(fallback);
    try { return JSON.parse(raw) || structuredCloneSafe(fallback); }
    catch (_) { return structuredCloneSafe(fallback); }
  }
  function readJson(key, fallback) {
    try { return safeParse(window.localStorage?.getItem(key), fallback); }
    catch (_) { return structuredCloneSafe(fallback); }
  }
  function writeJson(key, value) {
    try { window.localStorage?.setItem(key, JSON.stringify(value)); }
    catch (_) {}
  }
  function firstStored(keys) {
    for (const key of keys) {
      try {
        const raw = window.localStorage?.getItem(key);
        if (raw) return { key, raw };
      } catch (_) {}
    }
    return null;
  }
  function isRecordObject(value) { return Boolean(value) && typeof value === 'object' && !Array.isArray(value); }
  function toRecordObject(value) {
    const record = createRecord();
    if (!isRecordObject(value)) return record;
    Object.entries(value).forEach(([key, item]) => { record[String(key)] = item; });
    return record;
  }
  function ensureWrongUnitRecord(history, unit) {
    const key = String(unit || '未分類');
    const current = history.wrongUnits[key];
    if (!isRecordObject(current)) history.wrongUnits[key] = { count: 0, lastWrongAt: null };
    history.wrongUnits[key].count = Number(history.wrongUnits[key].count) || 0;
    return { key, record: history.wrongUnits[key] };
  }
  function normalizeHistory(value) {
    const history = isRecordObject(value) ? value : {};
    history.questions = toRecordObject(history.questions);
    history.wrongUnits = toRecordObject(history.wrongUnits);
    return history;
  }
  function normalizeRounds(value) {
    const rounds = isRecordObject(value) ? value : {};
    rounds.units = toRecordObject(rounds.units);
    Object.entries(rounds.units).forEach(([unitId, unit]) => {
      const normalizedUnit = isRecordObject(unit) ? unit : {};
      normalizedUnit.currentRound = Math.max(1, Number(normalizedUnit.currentRound || 1));
      normalizedUnit.rounds = toRecordObject(normalizedUnit.rounds);
      Object.entries(normalizedUnit.rounds).forEach(([roundNo, round]) => {
        const normalizedRound = isRecordObject(round) ? round : {};
        normalizedRound.answers = toRecordObject(normalizedRound.answers);
        normalizedRound.startedAt = normalizedRound.startedAt || null;
        normalizedRound.completedAt = normalizedRound.completedAt || null;
        normalizedUnit.rounds[String(roundNo)] = normalizedRound;
      });
      rounds.units[String(unitId)] = normalizedUnit;
    });
    return rounds;
  }

  function createLabStorage(options = {}) {
    const labId = options.labId || 'lab';
    const historyKey = options.historyKey || `java:${labId}:history:v1`;
    const legacyHistoryKeys = options.legacyHistoryKeys || [];
    const mockHistoryKey = options.mockHistoryKey || `java:${labId}:mockHistory:v1`;
    const roundsKey = options.roundsKey || `java:${labId}:rounds:v1`;
    const questionIdAlias = typeof options.questionIdAlias === 'function' ? options.questionIdAlias : null;

    function resolveQuestionId(id) {
      const raw = String(id || '');
      if (!raw || !questionIdAlias) return raw;
      try { return String(questionIdAlias(raw) || raw); }
      catch (_) { return raw; }
    }
    function newerValue(current, next, field) {
      const a = current?.[field] || '';
      const b = next?.[field] || '';
      return String(b) > String(a) ? b : a;
    }
    function mergeQuestionRecord(current = {}, next = {}) {
      const merged = { ...current, ...next };
      merged.attempts = (current.attempts || 0) + (next.attempts || 0);
      merged.correct = (current.correct || 0) + (next.correct || 0);
      merged.wrong = (current.wrong || 0) + (next.wrong || 0);
      merged.bookmarked = Boolean(current.bookmarked || next.bookmarked);
      merged.lastAnsweredAt = newerValue(current, next, 'lastAnsweredAt');
      const currentDate = current.lastAnsweredAt || '';
      const nextDate = next.lastAnsweredAt || '';
      merged.lastResult = String(nextDate) >= String(currentDate) ? (next.lastResult ?? current.lastResult ?? null) : (current.lastResult ?? next.lastResult ?? null);
      return merged;
    }
    function migrateQuestionIds(history) {
      const normalized = normalizeHistory(history);
      if (!questionIdAlias) return { history: normalized, changed: false };
      const migrated = {};
      let changed = false;
      Object.entries(normalized.questions || {}).forEach(([id, record]) => {
        const nextId = resolveQuestionId(id);
        if (nextId !== id) changed = true;
        migrated[nextId] = migrated[nextId] ? mergeQuestionRecord(migrated[nextId], record || {}) : { ...(record || {}) };
      });
      normalized.questions = migrated;
      return { history: normalized, changed };
    }
    function loadHistory() {
      const stored = firstStored([historyKey, ...legacyHistoryKeys]);
      const parsed = safeParse(stored?.raw, DEFAULT_HISTORY);
      const migrated = migrateQuestionIds(parsed);
      if (stored && (stored.key !== historyKey || migrated.changed)) saveHistory(migrated.history);
      return migrated.history;
    }
    function saveHistory(history) { writeJson(historyKey, normalizeHistory(history)); }
    function getQuestionRecord(id) {
      const history = loadHistory();
      const nextId = resolveQuestionId(id);
      return history.questions?.[nextId] || { attempts: 0, correct: 0, wrong: 0, bookmarked: false, lastResult: null };
    }
    function saveQuestionRecord(id, record) {
      const history = loadHistory();
      history.questions[resolveQuestionId(id)] = record;
      saveHistory(history);
      return record;
    }
    function addWrongUnit(unit, count = 1) {
      const history = loadHistory();
      const { record } = ensureWrongUnitRecord(history, unit);
      record.count += Number(count) || 0;
      record.lastWrongAt = new Date().toISOString();
      saveHistory(history);
    }

    function loadRounds() { return normalizeRounds(readJson(roundsKey, DEFAULT_ROUNDS)); }
    function saveRounds(rounds) { writeJson(roundsKey, normalizeRounds(rounds)); }
    function ensureUnitRound(rounds, unitId) {
      const key = String(unitId || '');
      if (!key) return null;
      if (!isRecordObject(rounds.units[key])) rounds.units[key] = { currentRound: 1, rounds: createRecord() };
      const unit = rounds.units[key];
      unit.currentRound = Math.max(1, Number(unit.currentRound || 1));
      unit.rounds = toRecordObject(unit.rounds);
      const roundKey = String(unit.currentRound);
      if (!isRecordObject(unit.rounds[roundKey])) {
        unit.rounds[roundKey] = { startedAt: new Date().toISOString(), completedAt: null, answers: createRecord() };
      }
      unit.rounds[roundKey].answers = toRecordObject(unit.rounds[roundKey].answers);
      return { unit, round: unit.rounds[roundKey], roundNo: unit.currentRound };
    }
    function getCurrentRound(unitId) {
      const rounds = loadRounds();
      const state = ensureUnitRound(rounds, unitId);
      if (!state) return 1;
      saveRounds(rounds);
      return state.roundNo;
    }
    function getRoundQuestionRecord(unitId, questionId) {
      const rounds = loadRounds();
      const state = ensureUnitRound(rounds, unitId);
      if (!state) return { answered: false, isCorrect: null, answeredAt: null };
      return state.round.answers?.[resolveQuestionId(questionId)] || { answered: false, isCorrect: null, answeredAt: null };
    }
    function getRoundSummary(unitId, questionIds = []) {
      const rounds = loadRounds();
      const state = ensureUnitRound(rounds, unitId);
      if (!state) return { round: 1, total: questionIds.length, answered: 0, correct: 0, wrong: 0, rate: 0, complete: false };
      const ids = (questionIds || []).map(resolveQuestionId);
      const answers = state.round.answers || {};
      const answered = ids.filter((id) => answers[id]?.answered === true).length;
      const correct = ids.filter((id) => answers[id]?.answered === true && answers[id]?.isCorrect === true).length;
      const wrong = ids.filter((id) => answers[id]?.answered === true && answers[id]?.isCorrect === false).length;
      const total = ids.length;
      const complete = total > 0 && answered >= total;
      if (complete && !state.round.completedAt) {
        state.round.completedAt = new Date().toISOString();
        saveRounds(rounds);
      }
      return { round: state.roundNo, total, answered, correct, wrong, rate: answered ? Math.round((correct / answered) * 100) : 0, complete };
    }
    function startNextRound(unitId) {
      const rounds = loadRounds();
      const state = ensureUnitRound(rounds, unitId);
      if (!state) return 1;
      state.unit.currentRound = state.roundNo + 1;
      state.unit.rounds[String(state.unit.currentRound)] = { startedAt: new Date().toISOString(), completedAt: null, answers: createRecord() };
      saveRounds(rounds);
      return state.unit.currentRound;
    }
    function updateRoundResult(unitId, questionId, isCorrect) {
      const rounds = loadRounds();
      const state = ensureUnitRound(rounds, unitId);
      if (!state) return null;
      const now = new Date().toISOString();
      state.round.answers[resolveQuestionId(questionId)] = { answered: true, isCorrect: Boolean(isCorrect), answeredAt: now };
      saveRounds(rounds);
      return state.round.answers[resolveQuestionId(questionId)];
    }

    function updateQuestionResult(question, isCorrect, context = {}) {
      const history = loadHistory();
      const id = resolveQuestionId(question.id);
      const record = history.questions[id] || { attempts: 0, correct: 0, wrong: 0, bookmarked: false, lastResult: null };
      record.attempts = (record.attempts || 0) + 1;
      record.lastAnsweredAt = new Date().toISOString();
      if (isCorrect) {
        record.correct = (record.correct || 0) + 1;
        record.lastResult = 'correct';
      } else {
        record.wrong = (record.wrong || 0) + 1;
        record.lastResult = 'wrong';
        const { record: unitRecord } = ensureWrongUnitRecord(history, question.unit);
        unitRecord.count += 1;
        unitRecord.lastWrongAt = record.lastAnsweredAt;
      }
      history.questions[id] = record;
      saveHistory(history);
      if (context.roundUnitId) updateRoundResult(context.roundUnitId, id, isCorrect);
      return record;
    }
    function toggleBookmark(id) {
      const history = loadHistory();
      const nextId = resolveQuestionId(id);
      const record = history.questions[nextId] || { attempts: 0, correct: 0, wrong: 0, bookmarked: false, lastResult: null };
      record.bookmarked = !record.bookmarked;
      history.questions[nextId] = record;
      saveHistory(history);
      return record.bookmarked;
    }
    function getStats() {
      const history = loadHistory();
      const records = Object.values(history.questions || {});
      const attempts = records.reduce((sum, r) => sum + (r.attempts || 0), 0);
      const correct = records.reduce((sum, r) => sum + (r.correct || 0), 0);
      const wrong = records.reduce((sum, r) => sum + (r.wrong || 0), 0);
      const bookmarked = records.filter((r) => r.bookmarked).length;
      const wrongLast = records.filter((r) => r.lastResult === 'wrong').length;
      const rate = attempts ? Math.round((correct / attempts) * 100) : 0;
      return { attempts, correct, wrong, bookmarked, wrongLast, rate };
    }
    function getWrongUnits() {
      const history = loadHistory();
      return Object.entries(history.wrongUnits || {})
        .map(([unit, data]) => ({ unit, count: Number(data?.count || 0), lastWrongAt: data?.lastWrongAt || '' }))
        .filter((item) => item.count > 0)
        .sort((a, b) => b.count - a.count || String(b.lastWrongAt).localeCompare(String(a.lastWrongAt)));
    }
    function resetHistory() { try { window.localStorage?.removeItem(historyKey); } catch (_) {} }
    function loadMockHistory() { const history = readJson(mockHistoryKey, []); return Array.isArray(history) ? history : []; }
    function saveMockResult(result, limit = 30) {
      const history = loadMockHistory();
      history.unshift(result);
      writeJson(mockHistoryKey, history.slice(0, limit));
      return history;
    }

    return {
      labId, historyKey, mockHistoryKey, roundsKey,
      loadHistory, saveHistory, getQuestionRecord, saveQuestionRecord, updateQuestionResult,
      addWrongUnit, toggleBookmark, getStats, getWrongUnits, resetHistory, loadMockHistory, saveMockResult,
      loadRounds, saveRounds, getCurrentRound, getRoundQuestionRecord, getRoundSummary, startNextRound, updateRoundResult
    };
  }

  window.JavaStorage = { createLabStorage, readJson, writeJson };
})();
