(function () {
  const DATA = window.JAVA_STUDY_DATA;
  if (!DATA) return;

  const isSingleFile = Boolean(window.OFFLINE_SINGLE_FILE);
  let chapterId = window.CHAPTER_ID || getChapterIdFromHash();
  let currentMode = getInitialMode();
  let currentQuestionId = getInitialQuestionId();
  let currentTagFilter = getInitialTagFilter();
  let currentExamReviewFilter = "";
  let currentRound = 1;
  let materializedRoundKey = "";
  let timerHandle = null;

  const storageKey = "java-study-progress-v1";
  const examStorageKey = "java-study-exam-v1";
  const examModeStorageKey = "java-study-exam-mode-v1";
  const roundStateStorageKey = "java-study-round-state-v1";
  const cloudConfigStorageKey = "java-study-cloud-sync-config-v1";
  const cloudStateStorageKey = "java-study-cloud-sync-state-v1";
  const CLOUD_STORAGE_FORMAT = "chunked-json-v1";
  const CLOUD_SCHEMA_VERSION = 2;
  const CLOUD_CHUNK_COLLECTION = "historyChunks";
  const CLOUD_CHUNK_MAX_BYTES = 700 * 1024;
  const CLOUD_BATCH_MAX_OPERATIONS = 400;
  const CLOUD_READ_MAX_PARALLEL = 20;
  const DEFAULT_FIREBASE_CONFIG = Object.freeze({
    apiKey: "AIzaSyBm_OMaIUyO15Sri5GR_fQ2g8iTXjlj_mo",
    authDomain: "javasilver-study.firebaseapp.com",
    projectId: "javasilver-study",
    storageBucket: "javasilver-study.firebasestorage.app",
    messagingSenderId: "948152294720",
    appId: "1:948152294720:web:f6dfd6fbf14fed5a8c6ea5",
    measurementId: "G-R8M646RW54"
  });
  const memoryStore = {};
  let cloud = {
    initialized: false,
    initializing: false,
    app: null,
    auth: null,
    db: null,
    user: null,
    modules: null,
    lastError: ""
  };
  let cloudUploadTimer = null;

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
    scheduleCloudUpload();
  }

  function readExamStore() {
    const store = readJson(examStorageKey, {});
    return store && typeof store === "object" ? store : {};
  }

  function writeExamStore(store) {
    writeJson(examStorageKey, store);
    scheduleCloudUpload();
  }


  function makeHistoryPayload() {
    return {
      app: "java-silver-study",
      schemaVersion: 1,
      dataVersion: DATA.version || "",
      exportedAt: new Date().toISOString(),
      storage: {
        [storageKey]: readJson(storageKey, {}),
        [examStorageKey]: readJson(examStorageKey, {}),
        [roundStateStorageKey]: readRoundState()
      }
    };
  }

  function parseHistoryPayload(text) {
    const payload = JSON.parse(String(text || ""));
    if (!payload || typeof payload !== "object") throw new Error("JSON形式が正しくありません。");
    const storage = payload.storage && typeof payload.storage === "object" ? payload.storage : payload;
    const progress = storage[storageKey] || payload.progress || {};
    const exam = storage[examStorageKey] || payload.exam || {};
    const rounds = storage[roundStateStorageKey] || payload.roundState || {};
    if (!progress || typeof progress !== "object" || Array.isArray(progress)) throw new Error("学習履歴データが見つかりません。");
    if (!exam || typeof exam !== "object" || Array.isArray(exam)) throw new Error("模擬試験履歴データの形式が正しくありません。");
    if (!rounds || typeof rounds !== "object" || Array.isArray(rounds)) throw new Error("周回履歴データの形式が正しくありません。");
    return { progress, exam, rounds, meta: payload };
  }

  function mergeRoundWrongHistoryRecords(left, right) {
    const merged = {};
    [left, right].forEach(record => {
      const history = record && record.roundWrongHistory && typeof record.roundWrongHistory === "object" && !Array.isArray(record.roundWrongHistory)
        ? record.roundWrongHistory
        : {};
      Object.entries(history).forEach(([key, value]) => {
        if (!value || typeof value !== "object") return;
        const round = normalizeRound(value.round || key);
        const normalizedKey = String(round);
        const previous = merged[normalizedKey];
        const count = Math.max(1, Math.floor(Number(value.wrongCount || value.count || 1)));
        const firstWrongAt = value.firstWrongAt || value.lastWrongAt || "";
        const lastWrongAt = value.lastWrongAt || value.firstWrongAt || "";
        merged[normalizedKey] = {
          round,
          firstWrongAt: [previous && previous.firstWrongAt, firstWrongAt].filter(Boolean).sort()[0] || "",
          lastWrongAt: [previous && previous.lastWrongAt, lastWrongAt].filter(Boolean).sort().slice(-1)[0] || "",
          wrongCount: Math.max(previous ? previous.wrongCount || 1 : 1, count)
        };
      });
    });
    return merged;
  }

  function mergeProgress(current, incoming) {
    const merged = { ...(current || {}) };
    Object.entries(incoming || {}).forEach(([qid, incomingRecord]) => {
      if (!incomingRecord || typeof incomingRecord !== "object") return;
      const currentRecord = merged[qid];
      if (!currentRecord) {
        merged[qid] = incomingRecord;
        return;
      }
      const incomingAnswered = isAnswered(incomingRecord);
      const currentAnswered = isAnswered(currentRecord);
      let base;
      if (incomingAnswered && currentAnswered) {
        const incomingTime = Date.parse(incomingRecord.answeredAt || "") || 0;
        const currentTime = Date.parse(currentRecord.answeredAt || "") || 0;
        base = incomingTime >= currentTime ? incomingRecord : currentRecord;
      } else if (incomingAnswered) {
        base = incomingRecord;
      } else if (currentAnswered) {
        base = currentRecord;
      } else {
        base = { ...currentRecord, ...incomingRecord };
      }
      const tags = Array.from(new Set([...(currentRecord.tags || []), ...(incomingRecord.tags || [])])).filter(Boolean);
      const attempts = [...attemptsOf(currentRecord), ...attemptsOf(incomingRecord)]
        .filter(attempt => attempt && attempt.answeredAt)
        .sort((a, b) => (Date.parse(a.answeredAt || "") || 0) - (Date.parse(b.answeredAt || "") || 0));
      const resolvedCandidates = [currentRecord.wrongResolvedAt, incomingRecord.wrongResolvedAt]
        .filter(Boolean)
        .sort((a, b) => (Date.parse(a || "") || 0) - (Date.parse(b || "") || 0));
      const wrongResolvedAt = resolvedCandidates.length ? resolvedCandidates[resolvedCandidates.length - 1] : base.wrongResolvedAt;
      const roundWrongHistory = mergeRoundWrongHistoryRecords(currentRecord, incomingRecord);
      merged[qid] = {
        ...base,
        flagged: Boolean(currentRecord.flagged || incomingRecord.flagged),
        tags: tags.length ? tags : base.tags,
        attempts,
        ...(Object.keys(roundWrongHistory).length ? { roundWrongHistory } : {}),
        ...(wrongResolvedAt ? { wrongResolvedAt } : {})
      };
    });
    return merged;
  }

  function mergeRoundState(current, incoming) {
    const currentState = current && typeof current === "object" ? current : {};
    const incomingState = incoming && typeof incoming === "object" ? incoming : {};
    return {
      ...currentState,
      ...incomingState,
      active: {
        ...(currentState.active && typeof currentState.active === "object" ? currentState.active : {}),
        ...(incomingState.active && typeof incomingState.active === "object" ? incomingState.active : {})
      }
    };
  }

  function mergeExamStore(current, incoming) {
    const merged = { ...(current && typeof current === "object" ? current : {}) };
    Object.entries(incoming && typeof incoming === "object" ? incoming : {}).forEach(([id, raw]) => {
      const currentChapter = normalizeExamChapterStore(merged[id], id);
      const incomingChapter = normalizeExamChapterStore(raw, id);
      const map = new Map();
      currentChapter.attempts.forEach(attempt => map.set(attempt.attemptId, attempt));
      incomingChapter.attempts.forEach(attempt => {
        const existing = map.get(attempt.attemptId);
        if (!existing) {
          map.set(attempt.attemptId, attempt);
          return;
        }
        const incomingTime = Date.parse(attempt.finishedAt || attempt.startedAt || "") || 0;
        const existingTime = Date.parse(existing.finishedAt || existing.startedAt || "") || 0;
        map.set(attempt.attemptId, incomingTime >= existingTime ? attempt : existing);
      });
      const attempts = Array.from(map.values()).sort((a, b) => (Date.parse(b.finishedAt || b.startedAt || "") || 0) - (Date.parse(a.finishedAt || a.startedAt || "") || 0));
      const activeAttempt = attempts.find(attempt => attempt.active);
      merged[id] = {
        attempts,
        activeAttemptId: activeAttempt ? activeAttempt.attemptId : "",
        selectedAttemptId: incomingChapter.selectedAttemptId || currentChapter.selectedAttemptId || ""
      };
    });
    return merged;
  }

  function importHistoryFromText(text, mode) {
    const parsed = parseHistoryPayload(text);
    if (mode === "replace") {
      writeProgress(parsed.progress);
      writeExamStore(parsed.exam);
      writeRoundState(parsed.rounds);
    } else {
      writeProgress(mergeProgress(readProgress(), parsed.progress));
      writeExamStore(mergeExamStore(readExamStore(), parsed.exam));
      writeRoundState(mergeRoundState(readRoundState(), parsed.rounds));
    }
    return true;
  }

  function historyFilename() {
    const d = new Date();
    const pad = n => String(n).padStart(2, "0");
    return `java-study-history-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
  }

  function exportHistoryText() {
    return JSON.stringify(makeHistoryPayload(), null, 2);
  }


  function readCloudConfig() {
    const cfg = readJson(cloudConfigStorageKey, {});
    const savedConfig = cfg && typeof cfg === "object" && cfg.firebaseConfig && typeof cfg.firebaseConfig === "object" ? cfg.firebaseConfig : null;
    return {
      ...(cfg && typeof cfg === "object" ? cfg : {}),
      enabled: true,
      firebaseConfig: savedConfig || DEFAULT_FIREBASE_CONFIG
    };
  }

  function writeCloudConfig(cfg) {
    writeJson(cloudConfigStorageKey, cfg && typeof cfg === "object" ? cfg : {});
  }

  function readCloudState() {
    const state = readJson(cloudStateStorageKey, {});
    if (state && typeof state === "object") {
      return { ...state, autoSync: false };
    }
    return { autoSync: false };
  }

  function writeCloudState(state) {
    writeJson(cloudStateStorageKey, state && typeof state === "object" ? state : {});
  }

  function cloudEnabled() {
    const cfg = readCloudConfig();
    return Boolean(cfg.firebaseConfig && typeof cfg.firebaseConfig === "object" && cfg.firebaseConfig.apiKey && cfg.firebaseConfig.projectId);
  }

  function cloudAutoSyncEnabled() {
    return false;
  }

  let cloudToastTimer = null;

  function ensureToastHost() {
    let host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      host.setAttribute("aria-live", "polite");
      host.setAttribute("aria-atomic", "true");
      document.body.appendChild(host);
    }
    return host;
  }

  function showToast(text, isError) {
    if (!text) return;
    const host = ensureToastHost();
    host.innerHTML = `<div class="toast ${isError ? "error" : "success"}">${escapeHtml(text)}</div>`;
    if (cloudToastTimer) clearTimeout(cloudToastTimer);
    cloudToastTimer = setTimeout(() => {
      const toast = host.querySelector(".toast");
      if (toast) toast.classList.add("hide");
      setTimeout(() => { if (host.parentNode) host.innerHTML = ""; }, 220);
    }, isError ? 5200 : 2600);
  }

  function setCloudMessage(text, isError, options = {}) {
    document.querySelectorAll("[data-cloud-message]").forEach(el => {
      el.textContent = text || "";
      el.classList.toggle("error", Boolean(isError));
    });
    if (text && !options.silentToast) showToast(text, isError);
  }

  async function runCloudAction(button, workingText, action) {
    const originalText = button ? button.textContent : "";
    try {
      if (button) {
        button.disabled = true;
        button.classList.add("is-loading");
        button.setAttribute("aria-busy", "true");
        button.textContent = workingText;
      }
      setCloudMessage(workingText, false);
      return await action();
    } finally {
      if (button) {
        button.classList.remove("is-loading");
        button.removeAttribute("aria-busy");
        button.textContent = originalText;
        updateCloudUi();
      }
    }
  }

  function currentCloudEmail() {
    return cloud.user && (cloud.user.email || cloud.user.displayName || cloud.user.uid) || "未ログイン";
  }

  function updateCloudUi() {
    const cfg = readCloudConfig();
    const state = readCloudState();
    document.querySelectorAll("#cloudSyncPanel").forEach(panel => {
      const enabledInput = panel.querySelector("[data-cloud-enabled]");
      if (enabledInput) enabledInput.checked = true;
      const account = panel.querySelector("[data-cloud-account]");
      if (account) account.textContent = currentCloudEmail();
      panel.querySelectorAll("[data-cloud-needs-auth]").forEach(btn => {
        btn.disabled = !cloud.user || !cloud.db;
      });
    });
  }

  async function ensureCloudReady() {
    if (!cloudEnabled()) throw new Error("クラウド同期の初期設定を読み込めません。");
    if (cloud.initialized && cloud.auth && cloud.db) return cloud;
    if (cloud.initializing) {
      while (cloud.initializing) await new Promise(resolve => setTimeout(resolve, 120));
      if (cloud.initialized && cloud.auth && cloud.db) return cloud;
    }
    cloud.initializing = true;
    try {
      const cfg = readCloudConfig().firebaseConfig;
      const [appMod, authMod, firestoreMod] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
        import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
      ]);
      const app = appMod.getApps().length ? appMod.getApps()[0] : appMod.initializeApp(cfg);
      const auth = authMod.getAuth(app);
      if (authMod.browserLocalPersistence && authMod.setPersistence) {
        await authMod.setPersistence(auth, authMod.browserLocalPersistence);
      }
      const db = firestoreMod.getFirestore(app);
      cloud = {
        ...cloud,
        initialized: true,
        initializing: false,
        app,
        auth,
        db,
        modules: { appMod, authMod, firestoreMod }
      };
      authMod.onAuthStateChanged(auth, user => {
        cloud.user = user || null;
        updateCloudUi();
        // 自動同期は使わない。保存・読み込みはボタン操作時のみ。
      });
      updateCloudUi();
      return cloud;
    } catch (e) {
      cloud.initializing = false;
      cloud.lastError = e.message || String(e);
      throw e;
    }
  }

  async function cloudSignIn() {
    await ensureCloudReady();
    const provider = new cloud.modules.authMod.GoogleAuthProvider();
    try {
      await cloud.modules.authMod.signInWithPopup(cloud.auth, provider);
    } catch (e) {
      throw new Error("Googleログインに失敗しました。Firebase AuthenticationでGoogleログインが有効か、承認済みドメインにGitHub Pagesのドメインが入っているか確認してください。" + (e.message ? ` (${e.message})` : ""));
    }
    updateCloudUi();
  }

  async function cloudSignOut() {
    await ensureCloudReady();
    await cloud.modules.authMod.signOut(cloud.auth);
    updateCloudUi();
  }

  function cloudDocRef() {
    if (!cloud.user) throw new Error("Googleログインが必要です。");
    return cloud.modules.firestoreMod.doc(cloud.db, "javaStudyProgress", cloud.user.uid);
  }

  function cloudChunkCollectionRef() {
    if (!cloud.user) throw new Error("Googleログインが必要です。");
    return cloud.modules.firestoreMod.collection(cloudDocRef(), CLOUD_CHUNK_COLLECTION);
  }

  function cloudChunkDocId(uploadId, index) {
    return `${uploadId}-${String(index).padStart(6, "0")}`;
  }

  function utf8ByteLength(value) {
    return new TextEncoder().encode(String(value || "")).length;
  }

  function splitUtf8Text(value, maxBytes = CLOUD_CHUNK_MAX_BYTES) {
    const text = String(value || "");
    if (!text) return [""];
    if (!Number.isFinite(maxBytes) || maxBytes < 1024) throw new Error("クラウド分割サイズの設定が正しくありません。");
    const encoder = new TextEncoder();
    const chunks = [];
    const safeBoundary = end => {
      if (end <= 0 || end >= text.length) return end;
      const previousCode = text.charCodeAt(end - 1);
      const nextCode = text.charCodeAt(end);
      return previousCode >= 0xD800 && previousCode <= 0xDBFF && nextCode >= 0xDC00 && nextCode <= 0xDFFF ? end - 1 : end;
    };
    let start = 0;
    while (start < text.length) {
      let end = safeBoundary(Math.min(text.length, start + maxBytes));
      if (end <= start) end = Math.min(text.length, start + 1);
      let content = text.slice(start, end);
      let byteLength = encoder.encode(content).length;
      while (byteLength > maxBytes) {
        const width = end - start;
        const scaledWidth = Math.max(1, Math.floor(width * maxBytes / byteLength));
        let nextEnd = safeBoundary(start + scaledWidth);
        if (nextEnd <= start) nextEnd = Math.min(text.length, start + 1);
        if (nextEnd >= end) nextEnd = safeBoundary(end - 1);
        if (nextEnd <= start) throw new Error("クラウド履歴を安全なサイズへ分割できませんでした。");
        end = nextEnd;
        content = text.slice(start, end);
        byteLength = encoder.encode(content).length;
      }
      chunks.push(content);
      start = end;
    }
    return chunks;
  }

  async function writeCloudChunks(uploadId, chunks) {
    const firestore = cloud.modules.firestoreMod;
    const collectionRef = cloudChunkCollectionRef();
    for (let start = 0; start < chunks.length; start += CLOUD_BATCH_MAX_OPERATIONS) {
      const batch = firestore.writeBatch(cloud.db);
      const batchChunks = chunks.slice(start, start + CLOUD_BATCH_MAX_OPERATIONS);
      batchChunks.forEach((content, offset) => {
        const index = start + offset;
        const ref = firestore.doc(collectionRef, cloudChunkDocId(uploadId, index));
        batch.set(ref, {
          uploadId,
          index,
          content,
          byteLength: utf8ByteLength(content),
          createdAt: firestore.serverTimestamp()
        });
      });
      await batch.commit();
    }
  }

  async function deleteCloudChunkDocs(docs) {
    const firestore = cloud.modules.firestoreMod;
    for (let start = 0; start < docs.length; start += CLOUD_BATCH_MAX_OPERATIONS) {
      const batch = firestore.writeBatch(cloud.db);
      docs.slice(start, start + CLOUD_BATCH_MAX_OPERATIONS).forEach(docSnap => batch.delete(docSnap.ref));
      await batch.commit();
    }
  }

  async function cleanupInactiveCloudChunks(activeUploadId) {
    const firestore = cloud.modules.firestoreMod;
    const snapshot = await firestore.getDocs(cloudChunkCollectionRef());
    const staleDocs = snapshot.docs.filter(docSnap => {
      const data = docSnap.data();
      return !data || data.uploadId !== activeUploadId;
    });
    if (staleDocs.length) await deleteCloudChunkDocs(staleDocs);
  }

  async function readCloudChunkedPayload(metadata) {
    const uploadId = String(metadata.activeUploadId || "");
    const chunkCount = Math.floor(Number(metadata.chunkCount));
    if (!uploadId || !Number.isFinite(chunkCount) || chunkCount < 1 || chunkCount > 2000) {
      throw new Error("クラウド上の分割履歴メタデータが正しくありません。");
    }
    const firestore = cloud.modules.firestoreMod;
    const collectionRef = cloudChunkCollectionRef();
    const snapshots = [];
    for (let start = 0; start < chunkCount; start += CLOUD_READ_MAX_PARALLEL) {
      const count = Math.min(CLOUD_READ_MAX_PARALLEL, chunkCount - start);
      const batchSnapshots = await Promise.all(Array.from({ length: count }, (_, offset) => {
        const index = start + offset;
        return firestore.getDoc(firestore.doc(collectionRef, cloudChunkDocId(uploadId, index)));
      }));
      snapshots.push(...batchSnapshots);
    }
    const chunks = snapshots.map((snapshot, index) => {
      if (!snapshot.exists()) throw new Error(`クラウド履歴の分割データが不足しています（${index + 1}/${chunkCount}）。`);
      const data = snapshot.data();
      if (!data || data.uploadId !== uploadId || Number(data.index) !== index || typeof data.content !== "string") {
        throw new Error(`クラウド履歴の分割データが破損しています（${index + 1}/${chunkCount}）。`);
      }
      return data.content;
    });
    const text = chunks.join("");
    const expectedBytes = Number(metadata.totalBytes);
    if (Number.isFinite(expectedBytes) && expectedBytes >= 0 && utf8ByteLength(text) !== expectedBytes) {
      throw new Error("クラウド履歴のサイズ検証に失敗しました。再度保存してください。");
    }
    return text;
  }

  async function pushCloudHistory(silent) {
    if (!cloudEnabled()) return;
    await ensureCloudReady();
    if (!cloud.user) {
      if (!silent) throw new Error("Googleログインが必要です。");
      return;
    }
    const payload = makeHistoryPayload();
    const payloadText = JSON.stringify(payload);
    const chunks = splitUtf8Text(payloadText);
    const uploadId = `history-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    await writeCloudChunks(uploadId, chunks);
    const firestore = cloud.modules.firestoreMod;
    await firestore.setDoc(cloudDocRef(), {
      storageFormat: CLOUD_STORAGE_FORMAT,
      schemaVersion: CLOUD_SCHEMA_VERSION,
      payloadSchemaVersion: payload.schemaVersion || 1,
      activeUploadId: uploadId,
      chunkCount: chunks.length,
      totalBytes: utf8ByteLength(payloadText),
      updatedAt: firestore.serverTimestamp(),
      dataVersion: payload.dataVersion || "",
      payload: firestore.deleteField()
    }, { merge: true });
    try {
      await cleanupInactiveCloudChunks(uploadId);
    } catch (cleanupError) {
      console.warn("古いクラウド履歴チャンクを削除できませんでした。次回保存時に再試行します。", cleanupError);
    }
    writeCloudState({ ...readCloudState(), lastPushedAt: new Date().toISOString() });
    const detail = chunks.length > 1 ? `（${chunks.length}分割）` : "";
    setCloudMessage(`クラウドへ保存しました${detail}。`, false, { silentToast: Boolean(silent) });
    updateCloudUi();
  }

  async function pullCloudHistory(mode, silent) {
    await ensureCloudReady();
    if (!cloud.user) throw new Error("Googleログインが必要です。");
    const snap = await cloud.modules.firestoreMod.getDoc(cloudDocRef());
    if (!snap.exists()) {
      if (!silent) setCloudMessage("クラウド上に履歴がありません。先に別端末から保存してください。", true);
      return false;
    }
    const data = snap.data() || {};
    let payloadText = "";
    if (data.storageFormat === CLOUD_STORAGE_FORMAT) {
      payloadText = await readCloudChunkedPayload(data);
    } else if (data.payload) {
      payloadText = JSON.stringify(data.payload);
    } else {
      throw new Error("クラウド上の履歴形式が正しくありません。");
    }
    const imported = importHistoryFromText(payloadText, mode || "merge");
    if (imported) {
      writeCloudState({ ...readCloudState(), lastPulledAt: new Date().toISOString() });
      renderAll();
      setCloudMessage(mode === "replace" ? "クラウド履歴で上書きしました。" : "クラウド履歴をマージしました。", false);
      updateCloudUi();
    }
    return imported;
  }

  function scheduleCloudUpload() {
    if (cloudUploadTimer) {
      clearTimeout(cloudUploadTimer);
      cloudUploadTimer = null;
    }
  }

  function firebaseRulesText() {
    return `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /javaStudyProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      match /{document=**} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}`;
  }

  function cloudPanelHtml() {
    return `<div class="cloud-panel cloud-panel-compact" id="cloudSyncPanel">
      <div class="cloud-panel-header">
        <h2>クラウド同期</h2>
        <div class="cloud-login-actions">
          <button class="btn" data-cloud-signin>Googleでログイン</button>
          <button class="btn ghost" data-cloud-signout>ログアウト</button>
        </div>
      </div>
      <div class="cloud-panel-body">
        <span class="cloud-account-line">アカウント: <strong data-cloud-account>未ログイン</strong></span>
        <div class="cloud-main-actions">
          <button class="btn primary" data-cloud-push data-cloud-needs-auth>この端末の履歴を保存</button>
          <button class="btn" data-cloud-pull-merge data-cloud-needs-auth>クラウドからマージ</button>
          <button class="btn ghost" data-cloud-pull-replace data-cloud-needs-auth>クラウドで完全上書き</button>
        </div>
        <span class="inline-note cloud-message" data-cloud-message></span>
      </div>
    </div>`;
  }

  function cloudSaveMiniHtml() {
    return `<div class="cloud-mini-panel" id="cloudSyncPanel" aria-label="クラウド保存">
      <button class="btn primary" data-cloud-push data-cloud-needs-auth>クラウドへ保存</button>
      <span class="inline-note" data-cloud-message></span>
    </div>`;
  }

  function bindCloudPanel(scope = document) {
    const panel = scope.querySelector ? scope.querySelector("#cloudSyncPanel") : null;
    if (!panel || panel.dataset.bound === "1") return;
    panel.dataset.bound = "1";
    panel.querySelector("[data-cloud-signin]")?.addEventListener("click", async event => {
      try {
        await runCloudAction(event.currentTarget, "Googleログイン中...", async () => cloudSignIn());
        setCloudMessage("ログインしました。", false);
      }
      catch (e) { setCloudMessage(e.message || "ログインに失敗しました。", true); }
    });
    panel.querySelector("[data-cloud-signout]")?.addEventListener("click", async event => {
      try {
        await runCloudAction(event.currentTarget, "ログアウト中...", async () => cloudSignOut());
        setCloudMessage("ログアウトしました。", false);
      }
      catch (e) { setCloudMessage(e.message || "ログアウトに失敗しました。", true); }
    });
    panel.querySelector("[data-cloud-push]")?.addEventListener("click", async event => {
      try { await runCloudAction(event.currentTarget, "クラウドへ保存中...", async () => pushCloudHistory(false)); }
      catch (e) { setCloudMessage(e.message || "クラウド保存に失敗しました。", true); }
    });
    panel.querySelector("[data-cloud-pull-merge]")?.addEventListener("click", async event => {
      try { await runCloudAction(event.currentTarget, "クラウドから読み込み中...", async () => pullCloudHistory("merge", false)); }
      catch (e) { setCloudMessage(e.message || "クラウド読み込みに失敗しました。", true); }
    });
    panel.querySelector("[data-cloud-pull-replace]")?.addEventListener("click", async event => {
      try { await runCloudAction(event.currentTarget, "クラウド履歴で上書き中...", async () => pullCloudHistory("replace", false)); }
      catch (e) { setCloudMessage(e.message || "クラウド読み込みに失敗しました。", true); }
    });
    updateCloudUi();
    if (cloudEnabled()) ensureCloudReady().catch(err => setCloudMessage(err.message || "Firebase初期化に失敗しました。", true));
  }

  function downloadHistory() {
    const blob = new Blob([exportHistoryText()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = historyFilename();
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function syncPanelHtml() {
    return "";
  }

  function bindSyncPanel(scope = document) {
    const panel = scope.querySelector ? scope.querySelector("#historySyncPanel") : null;
    if (!panel || panel.dataset.bound === "1") return;
    panel.dataset.bound = "1";
    const textarea = panel.querySelector("[data-history-text]");
    const message = panel.querySelector("[data-history-message]");
    const setMessage = text => { if (message) message.textContent = text; };

    panel.querySelector("[data-history-download]")?.addEventListener("click", () => {
      downloadHistory();
      setMessage("履歴JSONを書き出しました。");
    });
    panel.querySelector("[data-history-to-text]")?.addEventListener("click", () => {
      if (textarea) {
        textarea.value = exportHistoryText();
        textarea.focus();
        textarea.select();
      }
      setMessage("履歴JSONを表示しました。");
    });
    panel.querySelector("[data-history-copy]")?.addEventListener("click", async () => {
      if (!textarea) return;
      if (!textarea.value.trim()) textarea.value = exportHistoryText();
      try {
        await navigator.clipboard.writeText(textarea.value);
        setMessage("コピーしました。");
      } catch (_) {
        textarea.focus();
        textarea.select();
        setMessage("自動コピーできない環境です。選択されたJSONを手動でコピーしてください。");
      }
    });
    panel.querySelector("[data-history-merge]")?.addEventListener("click", () => {
      try {
        if (importHistoryFromText(textarea?.value || "", "merge")) {
          renderAll();
          alert("履歴をマージしました。");
        }
      } catch (e) {
        setMessage(e.message || "読み込みに失敗しました。");
      }
    });
    panel.querySelector("[data-history-replace]")?.addEventListener("click", () => {
      try {
        if (importHistoryFromText(textarea?.value || "", "replace")) {
          renderAll();
          alert("履歴を上書きしました。");
        }
      } catch (e) {
        setMessage(e.message || "読み込みに失敗しました。");
      }
    });
    panel.querySelector("[data-history-file]")?.addEventListener("change", event => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (textarea) textarea.value = String(reader.result || "");
        setMessage("ファイルを読み込みました。マージ読み込み、または完全上書きを押してください。");
      };
      reader.onerror = () => setMessage("ファイルを読めませんでした。");
      reader.readAsText(file, "utf-8");
    });
  }

  function normalizeRound(value) {
    const n = Math.floor(Number(value));
    return Number.isFinite(n) && n >= 1 ? n : 1;
  }

  function readRoundState() {
    const state = readJson(roundStateStorageKey, {});
    return state && typeof state === "object" ? state : {};
  }

  function writeRoundState(state) {
    writeJson(roundStateStorageKey, state && typeof state === "object" ? state : {});
    scheduleCloudUpload();
  }

  function getRouteRound() {
    const params = getRouteParams();
    return params.round ? normalizeRound(params.round) : 0;
  }

  function getActiveRound(id = chapterId) {
    const state = readRoundState();
    const active = state.active && typeof state.active === "object" ? state.active : {};
    return normalizeRound(active[id] || 1);
  }

  function setActiveRound(id, round) {
    if (!id) return;
    const state = readRoundState();
    const r = normalizeRound(round);
    state.active = state.active && typeof state.active === "object" ? state.active : {};
    if (normalizeRound(state.active[id] || 1) === r) return;
    state.active[id] = r;
    writeRoundState(state);
  }

  function newExamAttemptId() {
    return `exam-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function normalizeExamAttempt(attempt, id) {
    const raw = attempt && typeof attempt === "object" ? attempt : {};
    const answers = raw.answers && typeof raw.answers === "object" && !Array.isArray(raw.answers) ? raw.answers : {};
    const flags = raw.flags && typeof raw.flags === "object" && !Array.isArray(raw.flags) ? raw.flags : {};
    const answerEvents = Array.isArray(raw.answerEvents) ? raw.answerEvents : [];
    const startedAt = raw.startedAt || new Date().toISOString();
    return {
      attemptId: raw.attemptId || newExamAttemptId(),
      chapterId: raw.chapterId || id,
      round: normalizeRound(raw.round || 1),
      startedAt,
      finishedAt: raw.finishedAt || "",
      durationSec: Number.isFinite(Number(raw.durationSec)) ? Number(raw.durationSec) : 90 * 60,
      active: Boolean(raw.active && !raw.finishedAt),
      autoFinished: Boolean(raw.autoFinished),
      answers,
      flags,
      answerEvents,
      score: raw.score && typeof raw.score === "object" ? raw.score : null,
      reviewNotes: raw.reviewNotes && typeof raw.reviewNotes === "object" ? raw.reviewNotes : {}
    };
  }

  function computeExamAttemptScore(attempt, id = chapterId) {
    const questions = DATA.questions[id] || [];
    const answers = attempt && attempt.answers && typeof attempt.answers === "object" ? attempt.answers : {};
    const flags = attempt && attempt.flags && typeof attempt.flags === "object" ? attempt.flags : {};
    let answered = 0;
    let correct = 0;
    let wrong = 0;
    let flagged = 0;
    const wrongQuestionIds = [];
    const unansweredQuestionIds = [];
    const flaggedQuestionIds = [];
    const flaggedWrongQuestionIds = [];
    const flaggedCorrectQuestionIds = [];
    const tagMap = new Map();
    questions.forEach(q => {
      const answer = answers[q.id];
      const isAns = answer && Array.isArray(answer.selected) && answer.selected.length > 0;
      const isFlag = Boolean(flags[q.id]);
      if (isFlag) {
        flagged += 1;
        flaggedQuestionIds.push(q.id);
      }
      if (!isAns) {
        unansweredQuestionIds.push(q.id);
        return;
      }
      answered += 1;
      const ok = arraysEqual(answer.selected || [], q.answer || []);
      if (ok) {
        correct += 1;
        if (isFlag) flaggedCorrectQuestionIds.push(q.id);
      } else {
        wrong += 1;
        wrongQuestionIds.push(q.id);
        if (isFlag) flaggedWrongQuestionIds.push(q.id);
        getQuestionTags(q).forEach(tag => {
          const key = normalizeTag(tag);
          if (!key) return;
          tagMap.set(key, (tagMap.get(key) || 0) + 1);
        });
      }
    });
    const total = questions.length;
    const rate = total ? Math.round(correct / total * 100) : 0;
    const weakTags = Array.from(tagMap.entries()).map(([tag, wrongCount]) => ({ tag, wrong: wrongCount }))
      .sort((a, b) => b.wrong - a.wrong)
      .slice(0, 8);
    return { total, answered, correct, wrong, unanswered: Math.max(total - answered, 0), flagged, rate, wrongQuestionIds, unansweredQuestionIds, flaggedQuestionIds, flaggedWrongQuestionIds, flaggedCorrectQuestionIds, weakTags };
  }

  function normalizeExamChapterStore(raw, id) {
    if (raw && typeof raw === "object" && Array.isArray(raw.attempts)) {
      const attempts = raw.attempts.map(item => normalizeExamAttempt(item, id));
      const activeAttempt = attempts.find(item => item.active);
      return {
        activeAttemptId: activeAttempt ? activeAttempt.attemptId : raw.activeAttemptId || "",
        attempts,
        selectedAttemptId: raw.selectedAttemptId || ""
      };
    }
    if (raw && typeof raw === "object" && (raw.startedAt || raw.finishedAt || raw.active)) {
      const legacy = normalizeExamAttempt({ ...raw, chapterId: id, attemptId: raw.attemptId || `legacy-${id}` }, id);
      return { activeAttemptId: legacy.active ? legacy.attemptId : "", attempts: [legacy], selectedAttemptId: legacy.attemptId };
    }
    return { activeAttemptId: "", attempts: [], selectedAttemptId: "" };
  }

  function getExamChapterStore(id = chapterId) {
    const store = readExamStore();
    return normalizeExamChapterStore(store[id], id);
  }

  function setExamChapterStore(id, chapterStore) {
    const store = readExamStore();
    const normalized = normalizeExamChapterStore(chapterStore, id);
    store[id] = normalized;
    Object.keys(store).forEach(key => {
      if (key.startsWith(`${id}::`)) delete store[key];
    });
    writeExamStore(store);
  }

  function getActiveExamAttempt(id = chapterId) {
    const chapterStore = getExamChapterStore(id);
    return chapterStore.attempts.find(item => item.active) || (chapterStore.activeAttemptId ? chapterStore.attempts.find(item => item.attemptId === chapterStore.activeAttemptId) : null) || null;
  }

  function sortedExamAttempts(id = chapterId) {
    return getExamChapterStore(id).attempts.slice().sort((a, b) => {
      const at = Date.parse(a.finishedAt || a.startedAt || "") || 0;
      const bt = Date.parse(b.finishedAt || b.startedAt || "") || 0;
      return bt - at;
    });
  }

  function getLatestFinishedExamAttempt(id = chapterId) {
    return sortedExamAttempts(id).find(item => item.finishedAt) || null;
  }

  function getSelectedExamAttempt(id = chapterId) {
    const chapterStore = getExamChapterStore(id);
    if (chapterStore.selectedAttemptId) {
      const selected = chapterStore.attempts.find(item => item.attemptId === chapterStore.selectedAttemptId);
      if (selected) return selected;
    }
    return getActiveExamAttempt(id) || getLatestFinishedExamAttempt(id) || sortedExamAttempts(id)[0] || null;
  }

  function getExamState(id = chapterId) {
    return getSelectedExamAttempt(id);
  }

  function updateExamAttempt(id, attempt) {
    const chapterStore = getExamChapterStore(id);
    const normalized = normalizeExamAttempt(attempt, id);
    const index = chapterStore.attempts.findIndex(item => item.attemptId === normalized.attemptId);
    if (index >= 0) chapterStore.attempts[index] = normalized;
    else chapterStore.attempts.push(normalized);
    chapterStore.activeAttemptId = normalized.active ? normalized.attemptId : (chapterStore.activeAttemptId === normalized.attemptId ? "" : chapterStore.activeAttemptId);
    chapterStore.selectedAttemptId = normalized.attemptId;
    setExamChapterStore(id, chapterStore);
    return normalized;
  }

  function clearSelectedExamAttempt(id = chapterId) {
    const chapterStore = getExamChapterStore(id);
    chapterStore.selectedAttemptId = "";
    setExamChapterStore(id, chapterStore);
  }

  function examAnswerRecord(q, id = chapterId) {
    const state = getExamState(id);
    const answer = state && state.answers ? state.answers[q.id] : null;
    if (!answer) return null;
    return { ...answer, isCorrect: arraysEqual(answer.selected || [], q.answer || []), round: normalizeRound(state.round || 1) };
  }

  function saveExamAnswer(q, selected) {
    const state = getActiveExamAttempt(chapterId);
    if (!state) return;
    const answeredAt = new Date().toISOString();
    const record = {
      selected: [...selected],
      isCorrect: arraysEqual(selected, q.answer || []),
      answeredAt,
      chapterId,
      tags: getQuestionTags(q),
      round: normalizeRound(state.round || 1)
    };
    const next = {
      ...state,
      answers: { ...(state.answers || {}), [q.id]: record },
      answerEvents: [
        ...(Array.isArray(state.answerEvents) ? state.answerEvents : []),
        { questionId: q.id, selected: [...selected], isCorrect: record.isCorrect, at: answeredAt }
      ]
    };
    updateExamAttempt(chapterId, next);
  }

  function clearExamAnswer(q) {
    const state = getActiveExamAttempt(chapterId);
    if (!state) return;
    const answers = { ...(state.answers || {}) };
    delete answers[q.id];
    const answerEvents = [
      ...(Array.isArray(state.answerEvents) ? state.answerEvents : []),
      { questionId: q.id, selected: [], cleared: true, at: new Date().toISOString() }
    ];
    updateExamAttempt(chapterId, { ...state, answers, answerEvents });
  }

  function isExamFlagged(q, id = chapterId) {
    const state = getExamState(id);
    return Boolean(state && state.flags && state.flags[q.id]);
  }

  function toggleExamFlag(q) {
    const state = getActiveExamAttempt(chapterId) || getExamState(chapterId);
    if (!state) return;
    const flags = { ...(state.flags || {}) };
    if (flags[q.id]) delete flags[q.id];
    else flags[q.id] = true;
    updateExamAttempt(chapterId, { ...state, flags });
    renderActiveQuestion({ focus: false });
  }

  function readExamModeStore() {
    const store = readJson(examModeStorageKey, {});
    return store && typeof store === "object" ? store : {};
  }

  function writeExamModeStore(store) {
    writeJson(examModeStorageKey, store && typeof store === "object" ? store : {});
  }

  function getExamMode(id = chapterId) {
    if (!isExamChapter(id)) return "practice";
    const state = getActiveExamAttempt(id);
    if (state && state.active) return "exam";
    const mode = readExamModeStore()[id];
    return mode === "exam" ? "exam" : "practice";
  }

  function setExamMode(id, mode) {
    if (!isExamChapter(id)) return;
    const normalized = mode === "exam" ? "exam" : "practice";
    const store = readExamModeStore();
    if (store[id] === normalized) return;
    store[id] = normalized;
    writeExamModeStore(store);
  }

  function isMockExamMode(id = chapterId) {
    return isExamChapter(id) && getExamMode(id) === "exam";
  }

  function isExamChapter(id = chapterId) {
    return id === "ch07" || id === "ch08";
  }

  function isExamActive(id = chapterId) {
    const state = getActiveExamAttempt(id);
    return Boolean(state && state.active);
  }

  function isExamReviewing(id = chapterId) {
    const state = getExamState(id);
    return Boolean(isMockExamMode(id) && state && state.finishedAt && !state.active);
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
    return ["all", "unanswered", "wrong", "flagged", "tag"].includes(mode) ? mode : "all";
  }

  function getRouteParams() {
    const params = new URLSearchParams(location.search || "");
    const hashQuery = (location.hash || "").split("?")[1] || "";
    const hashParams = new URLSearchParams(hashQuery);
    return {
      q: hashParams.get("q") || params.get("q") || "",
      tag: hashParams.get("tag") || params.get("tag") || "",
      retry: hashParams.get("retry") || params.get("retry") || "",
      round: hashParams.get("round") || params.get("round") || "",
      exam: hashParams.get("exam") || params.get("exam") || ""
    };
  }

  function getInitialQuestionId() {
    return getRouteParams().q || null;
  }

  function getInitialTagFilter() {
    return normalizeTag(getRouteParams().tag || "");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function numberedCodeHtml(code, className = "") {
    const source = String(code ?? "");
    const normalized = source.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const lines = normalized.length ? normalized.split("\n") : [""];
    const classAttr = className ? ` ${className}` : "";
    // Keep each logical source line as exactly one visual row.
    // Do not insert indentation/newline text nodes inside .code-line: CSS grid treats
    // preserved whitespace as anonymous grid items and the code block becomes tall.
    const rows = lines.map((line, i) => `<div class="code-line"><span class="line-no" aria-hidden="true">${i + 1}</span><code>${line ? escapeHtml(line) : "&nbsp;"}</code></div>`).join("");
    return `<div class="numbered-code${classAttr}">${rows}</div>`;
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

  function chapterHref(ch, mode, extra = {}) {
    const params = new URLSearchParams();
    if (mode) params.set("mode", mode);
    Object.entries(extra || {}).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;
      params.set(key, value);
    });
    const query = params.toString();
    if (isSingleFile) return query ? `#${ch.id}?${query}` : `#${ch.id}`;
    return query ? `${ch.page}?${query}` : ch.page;
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

  function attemptsOf(record) {
    return Array.isArray(record && record.attempts) ? record.attempts : [];
  }

  function attemptRound(attempt) {
    return normalizeRound(attempt && attempt.round || 1);
  }

  function roundClearTime(record, round = currentRound) {
    const clears = record && record.roundClears && typeof record.roundClears === "object" ? record.roundClears : {};
    return Date.parse(clears[String(normalizeRound(round))] || "") || 0;
  }

  function attemptsOfRound(record, round = currentRound) {
    if (!record) return [];
    const r = normalizeRound(round);
    const clearedAt = roundClearTime(record, r);
    return attemptsOf(record)
      .filter(attempt => attemptRound(attempt) === r)
      .filter(attempt => {
        const attemptAt = Date.parse(attempt && attempt.answeredAt || "") || 0;
        return !clearedAt || !attemptAt || attemptAt > clearedAt;
      })
      .sort((a, b) => (Date.parse(a.answeredAt || "") || 0) - (Date.parse(b.answeredAt || "") || 0));
  }

  function latestAttemptOfRound(record, round = currentRound) {
    const attempts = attemptsOfRound(record, round);
    return attempts.length ? attempts[attempts.length - 1] : null;
  }

  function roundAnswerRecord(record, round = currentRound) {
    if (!record) return null;
    const r = normalizeRound(round);
    const latest = latestAttemptOfRound(record, r);
    if (latest) {
      return {
        ...record,
        selected: Array.isArray(latest.selected) ? [...latest.selected] : [],
        isCorrect: Boolean(latest.isCorrect),
        answeredAt: latest.answeredAt,
        chapterId: latest.chapterId || record.chapterId,
        tags: latest.tags && latest.tags.length ? latest.tags : record.tags,
        round: r
      };
    }
    if (r === 1 && isAnswered(record) && normalizeRound(record.round || 1) === 1 && !roundClearTime(record, 1)) {
      return record;
    }
    return { ...record, selected: [], isCorrect: false, answeredAt: "", round: r };
  }

  function isAnsweredInRound(record, round = currentRound) {
    return isAnswered(roundAnswerRecord(record, round));
  }

  function isCorrectInRound(record, round = currentRound) {
    const roundRecord = roundAnswerRecord(record, round);
    return isAnswered(roundRecord) && Boolean(roundRecord.isCorrect);
  }

  function roundWrongHistoryOf(record) {
    const history = record && record.roundWrongHistory && typeof record.roundWrongHistory === "object" && !Array.isArray(record.roundWrongHistory)
      ? record.roundWrongHistory
      : {};
    return history;
  }

  function wrongAttemptsOfRound(record, round = currentRound) {
    const r = normalizeRound(round);
    return attemptsOf(record).filter(attempt => attemptRound(attempt) === r && attempt && attempt.isCorrect === false);
  }

  function roundWrongEntry(record, round = currentRound) {
    if (!record) return null;
    const r = normalizeRound(round);
    const history = roundWrongHistoryOf(record);
    const stored = history[String(r)];
    if (stored && typeof stored === "object") {
      const count = Math.max(1, Math.floor(Number(stored.wrongCount || stored.count || 1)));
      return {
        ...stored,
        round: r,
        wrongCount: count,
        firstWrongAt: stored.firstWrongAt || stored.lastWrongAt || "",
        lastWrongAt: stored.lastWrongAt || stored.firstWrongAt || ""
      };
    }
    const attempts = wrongAttemptsOfRound(record, r);
    if (attempts.length) {
      return {
        round: r,
        wrongCount: attempts.length,
        firstWrongAt: attempts[0].answeredAt || "",
        lastWrongAt: attempts[attempts.length - 1].answeredAt || ""
      };
    }
    if (isAnswered(record) && record.isCorrect === false && normalizeRound(record.round || 1) === r) {
      return {
        round: r,
        wrongCount: 1,
        firstWrongAt: record.answeredAt || "",
        lastWrongAt: record.answeredAt || ""
      };
    }
    return null;
  }

  function addRoundWrongHistory(record, attempt) {
    const r = normalizeRound(attempt && attempt.round || currentRound);
    const key = String(r);
    const history = { ...roundWrongHistoryOf(record) };
    const previous = history[key] && typeof history[key] === "object" ? history[key] : null;
    history[key] = {
      round: r,
      firstWrongAt: previous && previous.firstWrongAt ? previous.firstWrongAt : attempt.answeredAt,
      lastWrongAt: attempt.answeredAt,
      wrongCount: Math.max(0, Math.floor(Number(previous && (previous.wrongCount || previous.count) || 0))) + 1
    };
    return history;
  }

  function hasWrongInRound(record, round = currentRound) {
    return Boolean(roundWrongEntry(record, round));
  }

  function isRoundWrongPracticeMode() {
    return !isWrongPracticePage() && !isMockExamMode(chapterId) && currentMode === "wrong";
  }

  function roundLabel(round) {
    return `${normalizeRound(round)}週目`;
  }

  function materializeChapterRound(id, round = currentRound) {
    if (!id) return;
    const r = normalizeRound(round);
    const progress = readProgress();
    const questions = DATA.questions[id] || [];
    questions.forEach(q => {
      const record = progress[q.id];
      if (!record) return;
      const roundRecord = roundAnswerRecord(record, r);
      const next = {
        ...record,
        round: r,
        chapterId: record.chapterId || id,
        tags: record.tags && record.tags.length ? record.tags : getQuestionTags(q)
      };
      if (isAnswered(roundRecord)) {
        next.selected = [...roundRecord.selected];
        next.isCorrect = Boolean(roundRecord.isCorrect);
        next.answeredAt = roundRecord.answeredAt;
      } else {
        delete next.selected;
        delete next.isCorrect;
        delete next.answeredAt;
      }
      progress[q.id] = next;
    });
    writeProgress(progress);
    materializedRoundKey = `${id}:${r}`;
  }

  function ensureChapterRound(force = false) {
    if (!chapterId) return;
    const route = getRouteParams();
    if (isExamChapter(chapterId) && route.exam === "1") setExamMode(chapterId, "exam");
    const routeRound = getRouteRound();
    currentRound = routeRound || getActiveRound(chapterId);
    currentRound = normalizeRound(currentRound);
    setActiveRound(chapterId, currentRound);
    const key = `${chapterId}:${currentRound}`;
    if (force || materializedRoundKey !== key) materializeChapterRound(chapterId, currentRound);
  }

  function switchChapterRound(round) {
    if (!chapterId) return;
    currentRound = normalizeRound(round);
    setActiveRound(chapterId, currentRound);
    currentMode = "all";
    currentQuestionId = null;
    materializeChapterRound(chapterId, currentRound);
    renderChapter();
  }

  function chapterRoundNumbers(id) {
    const rounds = new Set([1, getActiveRound(id)]);
    const progress = readProgress();
    const questions = DATA.questions[id] || [];
    questions.forEach(q => {
      const record = progress[q.id];
      if (record && record.round) rounds.add(normalizeRound(record.round));
      attemptsOf(record).forEach(attempt => rounds.add(attemptRound(attempt)));
      const clears = record && record.roundClears && typeof record.roundClears === "object" ? record.roundClears : {};
      Object.keys(clears).forEach(key => rounds.add(normalizeRound(key)));
      Object.keys(roundWrongHistoryOf(record)).forEach(key => rounds.add(normalizeRound(key)));
    });
    return Array.from(rounds).filter(n => n >= 1).sort((a, b) => a - b);
  }

  function roundStats(id, round) {
    const r = normalizeRound(round);
    const questions = DATA.questions[id] || [];
    const progress = readProgress();
    const answered = questions.filter(q => isAnsweredInRound(progress[q.id], r)).length;
    const correct = questions.filter(q => isCorrectInRound(progress[q.id], r)).length;
    const wrong = questions.filter(q => hasWrongInRound(progress[q.id], r)).length;
    const flagged = questions.filter(q => isFlagged(progress[q.id])).length;
    const rate = answered ? Math.round(correct / answered * 100) : 0;
    return { total: questions.length, answered, correct, wrong, flagged, rate, round: r };
  }

  function wrongAttemptCount(record, round = 0) {
    if (!record) return 0;
    const r = Math.floor(Number(round || 0));
    if (Number.isFinite(r) && r >= 1) {
      const attempts = attemptsOf(record).filter(attempt => attempt && attempt.isCorrect === false && attemptRound(attempt) === r).length;
      const entry = roundWrongEntry(record, r);
      const history = entry ? Math.max(1, Math.floor(Number(entry.wrongCount || entry.count || 1))) : 0;
      if (attempts || history) return Math.max(attempts, history);
      return isAnswered(record) && record.isCorrect === false && normalizeRound(record.round || 1) === r ? 1 : 0;
    }
    const attemptCount = attemptsOf(record).filter(attempt => attempt && attempt.isCorrect === false).length;
    const historyCount = Object.values(roundWrongHistoryOf(record)).reduce((sum, item) => {
      if (!item || typeof item !== "object") return sum;
      const count = Math.max(1, Math.floor(Number(item.wrongCount || item.count || 1)));
      return sum + count;
    }, 0);
    if (attemptCount || historyCount) return Math.max(attemptCount, historyCount);
    return isAnswered(record) && record.isCorrect === false ? 1 : 0;
  }

  function totalAttemptCount(record, round = 0) {
    if (!record) return 0;
    const r = Math.floor(Number(round || 0));
    const attempts = Number.isFinite(r) && r >= 1
      ? attemptsOf(record).filter(attempt => attemptRound(attempt) === r)
      : attemptsOf(record);
    if (attempts.length) return attempts.length;
    if (Number.isFinite(r) && r >= 1) return isAnswered(record) && normalizeRound(record.round || 1) === r ? 1 : 0;
    return isAnswered(record) ? 1 : 0;
  }

  function hasWrongHistory(record) {
    return wrongAttemptCount(record) > 0;
  }


  function latestWrongAttempt(record, round = 0) {
    const r = Math.floor(Number(round || 0));
    const wrongAttempts = attemptsOf(record).filter(attempt => {
      if (!(attempt && attempt.isCorrect === false)) return false;
      return !(Number.isFinite(r) && r >= 1) || attemptRound(attempt) === r;
    });
    if (!wrongAttempts.length) return null;
    return wrongAttempts[wrongAttempts.length - 1];
  }

  function latestProgressTime(record) {
    if (!record) return 0;
    const attempts = attemptsOf(record);
    const lastAttempt = attempts.length ? attempts[attempts.length - 1] : null;
    return Date.parse(record.answeredAt || record.resetAt || lastAttempt && lastAttempt.answeredAt || "") || 0;
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

  function owningChapterId(q) {
    const chapter = DATA.chapters.find(ch => (DATA.questions[ch.id] || []).some(item => item.id === q.id));
    return chapter ? chapter.id : chapterId;
  }

  function isWrongPracticePage() {
    return Boolean(document.getElementById("wrongPracticeRoot"));
  }

  function isWrongReviewMode() {
    return isWrongPracticePage() || currentMode === "wrong";
  }

  function shouldResolveWrongHistory(previous, isCorrect) {
    // 間違い履歴は復習対象の根拠として残す。間違い演習で正解しても自動解決扱いにしない。
    return false;
  }

  function saveAnswer(q, selected) {
    const progress = readProgress();
    const previous = progress[q.id] || {};
    const answeredAt = new Date().toISOString();
    const isCorrect = arraysEqual(selected, q.answer);
    const ownerId = owningChapterId(q);
    const attempt = {
      selected: [...selected],
      isCorrect,
      answeredAt,
      chapterId: ownerId,
      tags: getQuestionTags(q),
      round: currentRound
    };
    const nextRecord = {
      ...previous,
      selected: [...selected],
      isCorrect,
      answeredAt,
      chapterId: ownerId,
      tags: getQuestionTags(q),
      round: currentRound,
      attempts: [...attemptsOf(previous), attempt]
    };
    if (!isCorrect) {
      nextRecord.roundWrongHistory = addRoundWrongHistory(previous, attempt);
    } else if (previous.roundWrongHistory) {
      nextRecord.roundWrongHistory = roundWrongHistoryOf(previous);
    }
    progress[q.id] = nextRecord;
    writeProgress(progress);
  }

  function clearAnswer(q) {
    const progress = readProgress();
    const previous = progress[q.id];
    if (!previous) return;
    const resetAt = new Date().toISOString();
    const next = {
      ...previous,
      chapterId: previous.chapterId || owningChapterId(q),
      tags: previous.tags && previous.tags.length ? previous.tags : getQuestionTags(q),
      round: currentRound,
      resetAt,
      roundClears: {
        ...(previous.roundClears && typeof previous.roundClears === "object" ? previous.roundClears : {}),
        [String(currentRound)]: resetAt
      }
    };
    delete next.selected;
    delete next.isCorrect;
    delete next.answeredAt;
    if (next.flagged || attemptsOf(next).length) {
      progress[q.id] = next;
    } else {
      delete progress[q.id];
    }
    writeProgress(progress);
  }

  function deleteQuestionProgress(q) {
    const progress = readProgress();
    delete progress[q.id];
    writeProgress(progress);
  }

  function clearChapterProgress(id, keepFlags) {
    const questions = DATA.questions[id] || [];
    const progress = readProgress();
    const resetAt = new Date().toISOString();
    questions.forEach(q => {
      const record = progress[q.id] || { chapterId: id, tags: getQuestionTags(q) };
      const next = {
        ...record,
        chapterId: record.chapterId || id,
        tags: record.tags && record.tags.length ? record.tags : getQuestionTags(q),
        round: currentRound,
        resetAt,
        roundClears: {
          ...(record.roundClears && typeof record.roundClears === "object" ? record.roundClears : {}),
          [String(currentRound)]: resetAt
        }
      };
      delete next.selected;
      delete next.isCorrect;
      delete next.answeredAt;
      if (keepFlags && record.flagged) next.flagged = true;
      if (!keepFlags) delete next.flagged;
      if (next.flagged || attemptsOf(next).length || next.roundClears) progress[q.id] = next;
      else delete progress[q.id];
    });
    writeProgress(progress);
  }

  function toggleFlag(q) {
    const progress = readProgress();
    const record = progress[q.id] || { chapterId: owningChapterId(q), tags: getQuestionTags(q) };
    record.flagged = !record.flagged;
    if (!record.flagged && !isAnswered(record)) {
      delete progress[q.id];
    } else {
      progress[q.id] = record;
    }
    writeProgress(progress);
    renderActiveQuestion({ focus: true });
    updateProgressUi();
  }

  function selectedKeys(card) {
    return Array.from(card.querySelectorAll("input[data-option]:checked")).map(input => input.value);
  }

  function optionHtml(q, opt) {
    const inputType = questionType(q) === "multi" ? "checkbox" : "radio";
    const optionText = opt.text || opt.code || "";
    const body = opt.code
      ? numberedCodeHtml(opt.code, "option-code")
      : `<span class="option-text">${escapeHtml(optionText)}</span>`;
    return `<label class="option" data-key="${escapeHtml(opt.key)}">
      <input type="${inputType}" name="${escapeHtml(q.id)}" value="${escapeHtml(opt.key)}" data-option>
      <div class="option-body"><span class="option-key">${escapeHtml(opt.key)}.</span><div class="option-content">${body}</div></div>
    </label>`;
  }

  function questionHtml(q) {
    const codeBlocks = (q.codeBlocks || []).map(block => `<div class="code-block">
      ${block.title ? `<span class="code-title">${escapeHtml(block.title)}</span>` : ""}
      ${numberedCodeHtml(block.code)}
    </div>`).join("");
    const command = q.command ? `<div class="command">${escapeHtml(q.command)}</div>` : "";
    const images = (q.images || []).map(img => `<figure class="q-image-figure">
      <img class="q-image" src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || q.title)}" loading="lazy">
      ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
    </figure>`).join("");
    const tags = getQuestionTags(q).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");
    return `<article class="question-card" id="${escapeHtml(q.id)}" data-question-id="${escapeHtml(q.id)}">
      <div class="q-head">
        <h2 class="q-title">問${q.number}</h2>
        <div class="q-meta"><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>
      </div>
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${command}
      ${codeBlocks}
      ${images ? `<div class="q-image-list">${images}</div>` : ""}
      ${tags ? `<div class="tag-list" aria-label="関連タグ">${tags}</div>` : ""}
      <div class="options">${(q.options || []).map(opt => optionHtml(q, opt)).join("")}</div>
      <div class="answer-actions">
        <button class="btn primary" data-submit>${isExamActive(chapterId) ? "解答を保存" : isExamReviewing(chapterId) ? "採点済み" : "解答する"}</button>
        <button class="btn ghost" data-clear>${isExamActive(chapterId) ? "保存した解答をリセット" : "この問題の解答をリセット"}</button>
        <button class="btn" data-card-next>次の問題へ</button>
        <span class="inline-note" data-message></span>
      </div>
      <div class="result" data-result></div>
    </article>`;
  }

  function readableChunks(text) {
    const value = String(text || "").trim();
    if (!value) return [];

    const explicitLines = value.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    if (explicitLines.length > 1) return explicitLines;

    const normalized = value.replace(/\s+/g, " ");
    const chunks = normalized.match(/[^。！？!?]+[。！？!?]?/g) || [normalized];
    return chunks.map(chunk => chunk.trim()).filter(Boolean);
  }

  function readableTextHtml(text) {
    const value = String(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
    if (!value) return "";

    const parts = [];
    const lines = value.split("\n");
    let paragraph = [];
    let code = [];
    let inCode = false;
    let codeLang = "";

    function flushParagraph() {
      const body = paragraph.join(" ").replace(/\s+/g, " ").trim();
      if (body) parts.push(`<p>${escapeHtml(body)}</p>`);
      paragraph = [];
    }

    function flushCode() {
      const className = codeLang ? ` language-${escapeHtml(codeLang)}` : "";
      parts.push(`<pre class="code-block explanation-code"><code class="${className}">${escapeHtml(code.join("\n"))}</code></pre>`);
      code = [];
      codeLang = "";
    }

    lines.forEach(line => {
      const fence = line.match(/^```\s*([A-Za-z0-9_-]*)\s*$/);
      if (fence) {
        if (inCode) {
          flushCode();
          inCode = false;
        } else {
          flushParagraph();
          inCode = true;
          codeLang = fence[1] || "";
        }
        return;
      }
      if (inCode) {
        code.push(line);
        return;
      }
      if (!line.trim()) {
        flushParagraph();
        return;
      }
      const trimmed = line.trim();
      if (/^(正解：|例\s|構文$|試験対策$|参考$|【.+】$)/.test(trimmed) || /^・/.test(trimmed) || /^\d+\.\s/.test(trimmed) || /^[A-I](?:[、,，]|\s|　)/.test(trimmed)) {
        flushParagraph();
        parts.push(`<p>${escapeHtml(trimmed)}</p>`);
        return;
      }
      paragraph.push(trimmed);
    });

    if (inCode) flushCode();
    flushParagraph();
    return parts.length ? `<div class="readable-text">${parts.join("")}</div>` : "";
  }

  function readableInlineHtml(text) {
    const chunks = readableChunks(text);
    return chunks.length ? chunks.map(chunk => escapeHtml(chunk)).join("<br>") : "";
  }

  function listHtml(items) {
    return Array.isArray(items) && items.length
      ? `<ul class="readable-list">${items.map(item => `<li>${readableInlineHtml(item)}</li>`).join("")}</ul>`
      : "";
  }

  function optionTextByKey(q, key) {
    const option = (q.options || []).find(opt => opt.key === key);
    if (!option) return "";
    return String(option.text || option.code || "").trim();
  }

  function optionTextPreviewHtml(q, key) {
    const text = optionTextByKey(q, key);
    if (!text) return "";
    return `<div class="option-analysis-choice-text">${readableInlineHtml(text)}</div>`;
  }

  function optionAnalysisHtml(q) {
    const rawAnalyses = q.explanation && Array.isArray(q.explanation.optionAnalysis)
      ? q.explanation.optionAnalysis
      : [];
    const analyses = rawAnalyses
      .map(item => {
        const detail = String(item.detail || item.text || "").trim();
        const verdict = String(item.verdict || "").trim().toLowerCase();
        const isCorrect = typeof item.isCorrect === "boolean" ? item.isCorrect : verdict === "correct";
        return { ...item, detail, isCorrect };
      })
      .filter(item => item.key && item.detail);
    if (analyses.length) {
      return `<div class="option-analysis-list">${analyses.map(item => `<div class="option-analysis ${item.isCorrect ? "is-correct" : "is-wrong"}">
        <div class="option-analysis-head"><span class="option-key">${escapeHtml(item.key)}.</span>${optionTextPreviewHtml(q, item.key)}</div>
        ${readableTextHtml(item.detail)}
      </div>`).join("")}</div>`;
    }

    const points = q.explanation && Array.isArray(q.explanation.points) && q.explanation.points.length
      ? q.explanation.points
      : [];
    return points.length ? listHtml(points) : `<p class="muted">選択肢別の解説は未入力です。</p>`;
  }


  function answerKeysHtml(keys, q = null) {
    const values = Array.isArray(keys) ? keys : [];
    if (!values.length) return `<span class="answer-empty">未選択</span>`;
    return `<ul class="answer-key-list">${values.map(key => {
      const text = q ? optionTextByKey(q, key) : "";
      return `<li><span class="answer-key-chip">${escapeHtml(key)}</span>${text ? `<span class="answer-choice-text">${readableInlineHtml(text)}</span>` : ""}</li>`;
    }).join("")}</ul>`;
  }

  function answerSummaryHtml(label, keys, className = "", q = null) {
    return `<div class="answer-summary-item ${className}">
      <strong>${escapeHtml(label)}</strong>
      ${answerKeysHtml(keys, q)}
    </div>`;
  }

  function explanationHtml(q, isCorrect, selected) {
    const rawExp = q.explanation || {};
    const exp = typeof rawExp === "string" ? { summary: rawExp, correctReason: rawExp } : rawExp;
    const summary = exp.summary || exp.correctReason || "解説未入力。";
    const sectionParts = [];
    function addExplanationSection(title, text) {
      if (!text) return;
      const cleaned = String(text).replace(/【追加解説】/g, "").replace(/【間違えやすい点】/g, "").trim();
      if (!cleaned) return;
      const heading = title ? `<h5>${escapeHtml(title)}</h5>` : "";
      sectionParts.push(`<section class="explanation-subsection">${heading}${readableTextHtml(cleaned)}</section>`);
    }
    addExplanationSection("", exp.pdfExplanation);
    if (!sectionParts.length) addExplanationSection("", exp.correctReason || summary);
    const mainExplanation = sectionParts.join("");
    const pdfExplanationOnly = exp.pdfExplanationOnly === true;
    const related = pdfExplanationOnly ? "" : listHtml(exp.relatedKnowledge);
    const tips = pdfExplanationOnly ? "" : listHtml(exp.examTips);
    const steps = pdfExplanationOnly ? "" : listHtml(exp.judgeSteps);
    const choiceDetail = pdfExplanationOnly ? "" : optionAnalysisHtml(q);

    const detail = (title, body, open = false, className = "") => body ? `<details class="explanation-detail ${className}" ${open ? "open" : ""}>
        <summary>${escapeHtml(title)}</summary>
        <div class="explanation-body">${body}</div>
      </details>` : "";

    return `<div class="result-headline">
        <h4>${isCorrect ? "正解" : "不正解"}</h4>
        <span class="result-badge ${isCorrect ? "ok" : "bad"}">${isCorrect ? "OK" : "REVIEW"}</span>
      </div>
      <div class="answer-summary">
        ${answerSummaryHtml("あなたの解答", selected, "user-answer", q)}
        ${answerSummaryHtml("正解", q.answer || [], "correct-answer", q)}
      </div>
      ${detail("解説", mainExplanation, true, "main-explanation")}
      ${detail("選択肢別解説", choiceDetail, true)}
      ${detail("関連知識", related)}
      ${detail("試験での注意点", tips)}
      ${detail("解き方の手順", steps)}`;
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
      renderRoundPanel();
      updateResetCurrentButton(q);
      if (isCorrect && isWrongPracticePage()) {
        setWrongPracticeMessage("正解です。間違えた履歴は残したまま、次の問題へ進めます。");
      }
    }
  }

  function applyExamSavedState(card, q, selected, persist) {
    const result = card.querySelector("[data-result]");
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    result.className = "result visible neutral";
    result.innerHTML = `<h4>解答を保存しました</h4><p>模擬試験中のため、正誤と解説は採点後に表示します。</p>`;
    if (persist) {
      saveExamAnswer(q, selected);
      updateProgressUi();
      renderQuestionPalette();
      renderChapterStats();
      renderRoundPanel();
      renderExamPanel();
      updateResetCurrentButton(q);
    }
  }

  function resetQuestion(card, q) {
    if (isExamReviewing(chapterId)) return;
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]");
    result.className = "result";
    result.innerHTML = "";
    const message = card.querySelector("[data-message]");
    if (message) message.textContent = "";
    if (isExamActive(chapterId)) clearExamAnswer(q);
    else clearAnswer(q);
    updateSelectionStatus(card, q);
    updateProgressUi();
    renderQuestionPalette();
    renderChapterStats();
    renderRoundPanel();
    renderExamPanel();
    updateResetCurrentButton(q);
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

    if (isExamReviewing(chapterId)) {
      submit.disabled = true;
      clear.disabled = true;
    }
    submit.addEventListener("click", () => {
      if (isExamReviewing(chapterId)) return;
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
    if (isMockExamMode(chapterId) && getExamState(chapterId)) {
      const saved = examAnswerRecord(q);
      if (!saved) {
        updateSelectionStatus(card, q);
        return;
      }
      if (Array.isArray(saved.selected)) {
        saved.selected.forEach(key => {
          const input = card.querySelector(`input[value="${cssEscape(key)}"]`);
          if (input) input.checked = true;
        });
        if (isExamActive(chapterId)) applyExamSavedState(card, q, saved.selected, false);
        else applyResult(card, q, saved.selected, false);
      }
      updateSelectionStatus(card, q);
      return;
    }
    const progress = readProgress();
    const saved = progress[q.id];
    if (!saved) return;
    if (isRoundWrongPracticeMode() && hasWrongInRound(saved, currentRound)) {
      updateSelectionStatus(card, q);
      return;
    }
    if (getRouteParams().retry === "1" && hasWrongHistory(saved)) {
      clearAnswer(q);
      updateSelectionStatus(card, q);
      return;
    }
    if (Array.isArray(saved.selected)) {
      saved.selected.forEach(key => {
        const input = card.querySelector(`input[value="${cssEscape(key)}"]`);
        if (input) input.checked = true;
      });
      applyResult(card, q, saved.selected, false);
    }
    updateSelectionStatus(card, q);
  }

  function chapterStats(id) {
    return roundStats(id, getActiveRound(id));
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
        if (!record) continue;
        const tags = record.tags && record.tags.length ? record.tags : getQuestionTags(q);
        const attempts = attemptsOf(record);
        const answeredCount = attempts.length || (isAnswered(record) ? 1 : 0);
        const wrongCount = wrongAttemptCount(record);
        if (!answeredCount && !wrongCount) continue;
        tags.forEach(tag => {
          const key = normalizeTag(tag);
          if (!key) return;
          const item = map.get(key) || { tag: key, answered: 0, wrong: 0 };
          item.answered += answeredCount;
          item.wrong += wrongCount;
          map.set(key, item);
        });
      }
    }
    return Array.from(map.values())
      .filter(item => item.wrong > 0)
      .sort((a, b) => (b.wrong - a.wrong) || ((b.wrong / Math.max(b.answered, 1)) - (a.wrong / Math.max(a.answered, 1))))
      .slice(0, 12);
  }

  function findQuestionById(id) {
    for (const ch of DATA.chapters) {
      const q = (DATA.questions[ch.id] || []).find(item => item.id === id);
      if (q) return { chapter: ch, question: q };
    }
    return null;
  }

  function findResumeTarget() {
    const progress = readProgress();
    let latest = null;
    for (const ch of DATA.chapters) {
      const questions = DATA.questions[ch.id] || [];
      const round = getActiveRound(ch.id);
      questions.forEach((q, index) => {
        const attempt = latestAttemptOfRound(progress[q.id], round);
        const t = Date.parse(attempt && attempt.answeredAt || "") || 0;
        if (t && (!latest || t > latest.time)) latest = { chapter: ch, question: q, index, time: t, round };
      });
    }
    if (latest) {
      const list = DATA.questions[latest.chapter.id] || [];
      const round = latest.round || getActiveRound(latest.chapter.id);
      const next = list.slice(latest.index + 1).find(q => !isAnsweredInRound(progress[q.id], round)) || list.find(q => !isAnsweredInRound(progress[q.id], round)) || latest.question;
      return { chapter: latest.chapter, question: next };
    }
    for (const ch of DATA.chapters) {
      const round = getActiveRound(ch.id);
      const q = (DATA.questions[ch.id] || []).find(item => !isAnsweredInRound(progress[item.id], round));
      if (q) return { chapter: ch, question: q };
    }
    const first = DATA.chapters[0];
    return first ? { chapter: first, question: (DATA.questions[first.id] || [])[0] } : null;
  }

  function findFirstChapterForMode(mode, tag) {
    const progress = readProgress();
    for (const ch of DATA.chapters) {
      const list = DATA.questions[ch.id] || [];
      const round = getActiveRound(ch.id);
      const q = list.find(item => {
        const record = progress[item.id];
        const activeRecord = roundAnswerRecord(record, round);
        if (mode === "wrong") return hasWrongInRound(record, round);
        if (mode === "flagged") return isFlagged(record);
        if (mode === "unanswered") return !isAnswered(activeRecord);
        if (mode === "tag") {
          const tags = record && record.tags && record.tags.length ? record.tags : getQuestionTags(item);
          return tags.map(normalizeTag).includes(normalizeTag(tag)) && (!isCorrectInRound(record, round) || isFlagged(record));
        }
        return true;
      });
      if (q) return { chapter: ch, question: q };
    }
    return null;
  }

  function quickActionHtml(label, detail, target, kind) {
    const href = target ? chapterHref(target.chapter, kind === "resume" ? "all" : kind, { q: target.question && target.question.id, tag: target.tag }) : "#chapterGrid";
    const disabled = target ? "" : " is-disabled";
    return `<a class="quick-card${disabled}" href="${escapeHtml(href)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(detail)}</strong>
    </a>`;
  }

  function todayReviewHtml(stats) {
    const wrongTarget = findFirstChapterForMode("wrong");
    const flaggedTarget = findFirstChapterForMode("flagged");
    const unansweredTarget = findFirstChapterForMode("unanswered");
    return `<div class="today-panel">
      <div>
        <h2>今日の復習</h2>
      </div>
      <div class="today-actions">
        <a class="btn primary" href="${stats.wrong ? "wrong-practice.html" : "#chapterGrid"}">間違い ${stats.wrong}問</a>
        <a class="btn" href="wrong-summary.html">間違いまとめ</a>
        <a class="btn" href="${escapeHtml(flaggedTarget ? chapterHref(flaggedTarget.chapter, "flagged", { q: flaggedTarget.question.id }) : "#chapterGrid")}">見直し ${stats.flagged}問</a>
        <a class="btn ghost" href="${escapeHtml(unansweredTarget ? chapterHref(unansweredTarget.chapter, "unanswered", { q: unansweredTarget.question.id }) : "#chapterGrid")}">未回答 ${Math.max(stats.total - stats.answered, 0)}問</a>
      </div>
    </div>`;
  }

  function renderDashboard() {
    const main = document.querySelector(".main");
    const isIndexPage = Boolean(document.getElementById("chapterGrid"));
    if (!main || chapterId || !isIndexPage) return;
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
    const resume = findResumeTarget();
    const wrong = findFirstChapterForMode("wrong");
    const flagged = findFirstChapterForMode("flagged");
    const exam1 = chapterById("ch07");
    const exam2 = chapterById("ch08");
    root.innerHTML = `<div class="quick-actions">
        ${quickActionHtml("前回の続き", resume ? `${resume.chapter.title} / 問${resume.question.number}` : "第1章から開始", resume, "resume")}
        ${stats.wrong ? `<a class="quick-card" href="wrong-practice.html"><span>間違い復習</span><strong>${stats.wrong}問をランダム復習</strong></a>` : quickActionHtml("間違い復習", "対象なし", null, "wrong")}
        ${quickActionHtml("見直し復習", flagged ? `${stats.flagged}問を復習` : "対象なし", flagged, "flagged")}
        <a class="quick-card" href="${escapeHtml(exam1 ? chapterHref(exam1, "all", { exam: "1" }) : "#chapterGrid")}"><span>模擬試験①</span><strong>60問 / 90分</strong></a>
        <a class="quick-card" href="${escapeHtml(exam2 ? chapterHref(exam2, "all", { exam: "1" }) : "#chapterGrid")}"><span>模擬試験②</span><strong>60問 / 90分</strong></a>
      </div>
      ${todayReviewHtml(stats)}
      <div class="stat-grid">
        <div class="stat-card"><span>総問題数</span><strong>${stats.total}</strong></div>
        <div class="stat-card"><span>解答済み</span><strong>${stats.answered}</strong></div>
        <div class="stat-card"><span>正解率</span><strong>${rate}%</strong></div>
        <div class="stat-card"><span>要復習</span><strong>${stats.wrong + stats.flagged}</strong></div>
      </div>
      ${cloudPanelHtml()}
      <div class="weak-panel">
        <div class="panel-title-row"><h2>苦手タグ</h2><span class="inline-note">押すとタグ復習へ移動</span></div>
        ${weak.length ? `<div class="weak-tags">${weak.map(item => {
          const target = findFirstChapterForMode("tag", item.tag);
          const href = target ? chapterHref(target.chapter, "tag", { q: target.question.id, tag: item.tag }) : "#chapterGrid";
          return `<a class="weak-tag" href="${escapeHtml(href)}">${escapeHtml(item.tag)} <b>${item.wrong}</b>/<small>${item.answered}</small></a>`;
        }).join("")}</div>` : `<p class="inline-note">まだ間違いデータがありません。まず各章を解いてください。</p>`}
      </div>`;
    bindCloudPanel(root);
  }

  function renderNav() {
    const nav = document.getElementById("chapterNav");
    if (!nav) return;
    const path = (location.pathname || "").split("/").pop() || "index.html";
    const navStateKey = "java-study-nav-groups-v15";
    const navState = readJson(navStateKey, {});

    const learningItems = [
      ["reference.html", "学習記事トップ", "全体索引"],
      ["decision-flow.html", "判定フロー", "深掘り済み"],
      ["syntax-basics.html", "Java実行・宣言", "main/import"],
      ["compile-runtime.html", "コンパイル/例外", "判定順"],
      ["datatypes.html", "型・変数", "primitive/null"],
      ["numeric-rules.html", "数値・型昇格", "byte/short"],
      ["var-scope.html", "var・スコープ", "初期化"],
      ["strings.html", "文字列・StringBuilder", "不変/可変"],
      ["text-blocks.html", "テキストブロック", "改行/空白"],
      ["equality.html", "同一性・同値性", "==/equals"],
      ["collections-arrays.html", "配列・List", "ArrayList"],
      ["operators-control.html", "演算子・制御", "評価順"],
      ["switch-expressions.html", "switch式", "yield/網羅性"],
      ["loop-control.html", "ループ制御", "break/continue"],
      ["output-tracing.html", "出力追跡", "表で追う"],
      ["methods-constructors.html", "メソッド・コンストラクタ", "overload"],
      ["object-oriented.html", "クラス・static・初期化", "参照/static"],
      ["record-classes.html", "レコードクラス", "コンポーネント"],
      ["modifiers-access.html", "修飾子・アクセス", "abstract/final"],
      ["sealed-types.html", "sealed型", "permits"],
      ["oop-relations.html", "継承・interface", "override"],
      ["inheritance-interface.html", "継承/interface詳細", "default"],
      ["polymorphism-cast.html", "ポリモーフィズム・キャスト", "cast"],
      ["instanceof-patterns.html", "instanceofパターン", "フロースコープ"],
      ["exceptions.html", "例外処理", "try/catch"]
    ];

    const otherItems = [
      ["index.html", "トップページ", "演習・記事一覧"],
      ["cheatsheet.html", "直前確認", "総仕上げ"],
      ["method-list.html", "頻出メソッド", "戻り値/副作用"],
      ["error-catalog.html", "エラー・例外カタログ", "逆引き"],
      ["fine-points.html", "細かい仕様", "境界"],
      ["exam-traps.html", "ひっかけ集", "模擬問題前"],
      ["weakness-map.html", "弱点マップ", "復習順"],
      ["mini-drills.html", "ミニ演習", "短問"],
      ["glossary.html", "単語集", "用語"],
      ["java-qa-review.html", "質問整理", "最近の弱点"]
    ];

    function linkHtml(href, label, hint, active) {
      return `<a class="nav-link${active ? " active" : ""}" href="${escapeHtml(href)}">${escapeHtml(label)}<span class="small">${escapeHtml(hint || "")}</span></a>`;
    }

    function groupHtml(id, title, hint, itemsHtml, active, defaultOpen) {
      const saved = Object.prototype.hasOwnProperty.call(navState, id) ? Boolean(navState[id]) : null;
      const open = saved === null ? Boolean(defaultOpen || active) : saved;
      return `<details class="nav-group${active ? " active" : ""}" data-nav-group="${escapeHtml(id)}"${open ? " open" : ""}>
        <summary class="nav-group-summary" aria-label="${escapeHtml(title)}を開閉"><span>${escapeHtml(title)}</span><small>${escapeHtml(hint || "")}</small></summary>
        <div class="nav-group-body">${itemsHtml}</div>
      </details>`;
    }

    const chapterItems = DATA.chapters.map(ch => {
      const count = (DATA.questions[ch.id] || []).length;
      const active = ch.id === chapterId;
      const status = ch.status === "ready" ? `${count}問` : "準備中";
      return linkHtml(chapterHref(ch), ch.title, status, active);
    }).join("");
    const practiceActive = Boolean(chapterId);

    const learningActive = learningItems.some(([href]) => href === path);
    const learningHtml = learningItems.map(([href, label, hint]) => linkHtml(href, label, hint, href === path)).join("");

    const otherActive = otherItems.some(([href]) => href === path);
    const otherHtml = otherItems.map(([href, label, hint]) => linkHtml(href, label, hint, href === path)).join("");

    nav.innerHTML =
      groupHtml("nav-practice", "演習", "1〜8章・模擬問題", chapterItems, practiceActive, practiceActive || path === "index.html") +
      groupHtml("nav-learning", "学習記事", "基礎〜Java 17", learningHtml, learningActive, learningActive) +
      groupHtml("nav-other", "その他", "直前確認・補助", otherHtml, otherActive, otherActive || path === "index.html");

    setupMobileNav(nav);

    nav.querySelectorAll("details.nav-group").forEach(details => {
      details.addEventListener("toggle", () => {
        const state = readJson(navStateKey, {});
        state[details.dataset.navGroup] = details.open;
        writeJson(navStateKey, state);
      });
    });
  }


  function setupMobileNav(nav) {
    const sidebar = nav.closest(".sidebar");
    if (!sidebar) return;
    const brand = sidebar.querySelector(".brand");
    let btn = sidebar.querySelector(".mobile-nav-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mobile-nav-toggle";
      btn.setAttribute("aria-controls", nav.id || "chapterNav");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = '<span class="mobile-nav-toggle-icon" aria-hidden="true">☰</span><span class="mobile-nav-toggle-label">メニュー</span>';
      if (brand) brand.insertAdjacentElement("afterend", btn);
      else sidebar.insertBefore(btn, nav);
    }

    const setOpen = open => {
      sidebar.classList.toggle("nav-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      const label = btn.querySelector(".mobile-nav-toggle-label");
      if (label) label.textContent = open ? "閉じる" : "メニュー";
    };

    if (!btn.dataset.bound) {
      btn.addEventListener("click", () => setOpen(!sidebar.classList.contains("nav-open")));
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") setOpen(false);
      });
      btn.dataset.bound = "1";
    }

    nav.querySelectorAll("a.nav-link").forEach(link => {
      if (link.dataset.mobileCloseBound) return;
      link.addEventListener("click", () => setOpen(false));
      link.dataset.mobileCloseBound = "1";
    });

    setOpen(false);
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
        <span class="chapter-progress-line">${roundLabel(s.round)}・${s.answered}/${s.total} 解答済み・正解率 ${s.rate}%・復習 ${s.wrong + s.flagged}</span>
      </a>`;
    }).join("");
    // ダッシュボードは renderDashboard() 側でヘッダー直下に挿入する。
  }

  function setSingleFileVisibility() {
    if (!isSingleFile) return;
    document.querySelectorAll("[data-index-view]").forEach(el => { el.hidden = Boolean(chapterId); });
    document.querySelectorAll("[data-chapter-view]").forEach(el => { el.hidden = !chapterId; });
  }

  function filteredQuestions() {
    const questions = DATA.questions[chapterId] || [];
    if (isMockExamMode(chapterId)) {
      const state = getExamState(chapterId);
      if (state && state.active) return questions;
      if (state && state.finishedAt) {
        if (currentMode === "unanswered") return questions.filter(q => !examAnswerRecord(q));
        if (currentMode === "wrong") return questions.filter(q => {
          const record = examAnswerRecord(q);
          return record && record.isCorrect === false;
        });
        if (currentMode === "flagged") return questions.filter(q => {
          if (!isExamFlagged(q)) return false;
          const record = examAnswerRecord(q);
          if (currentExamReviewFilter === "flagged-wrong") return record && record.isCorrect === false;
          if (currentExamReviewFilter === "flagged-correct") return record && record.isCorrect === true;
          return true;
        });
        return questions;
      }
    }
    const progress = readProgress();
    if (currentMode === "unanswered") return questions.filter(q => !isAnsweredInRound(progress[q.id], currentRound));
    if (currentMode === "wrong") return questions.filter(q => hasWrongInRound(progress[q.id], currentRound));
    if (currentMode === "flagged") return questions.filter(q => isFlagged(progress[q.id]));
    if (currentMode === "tag" && currentTagFilter) {
      return questions.filter(q => {
        const record = progress[q.id];
        const tags = record && record.tags && record.tags.length ? record.tags : getQuestionTags(q);
        return tags.map(normalizeTag).includes(currentTagFilter);
      });
    }
    return questions;
  }

  function modeLabel(mode) {
    if (mode === "flagged" && currentExamReviewFilter === "flagged-wrong") return "見直し不正解";
    if (mode === "flagged" && currentExamReviewFilter === "flagged-correct") return "見直し正解";
    if (mode === "wrong" && isMockExamMode(chapterId)) return "不正解だけ";
    return {
      all: "全問",
      unanswered: "未回答",
      wrong: "この周回のミス",
      flagged: "見直し",
      tag: currentTagFilter ? `タグ: ${currentTagFilter}` : "タグ復習"
    }[mode] || "全問";
  }

  function renderModeButtons() {
    const root = document.getElementById("modeButtons");
    if (!root) return;
    const examState = isExamChapter(chapterId) ? getExamState(chapterId) : null;
    if (isMockExamMode(chapterId) && examState && examState.active) {
      currentMode = "all";
      currentTagFilter = "";
      root.innerHTML = `<div class="mode-disabled-note">模擬試験中は絞り込みを使いません。全60問を番号順に解きます。</div>`;
      return;
    }
    const modes = ["all", "unanswered", "wrong", "flagged"];
    const base = modes.map(mode => `<button class="mode-btn ${mode === currentMode ? "active" : ""}" data-mode="${mode}">${modeLabel(mode)}</button>`).join("");
    const tagButton = (!isMockExamMode(chapterId) && currentTagFilter) ? `<button class="mode-btn ${currentMode === "tag" ? "active" : ""}" data-mode="tag">${escapeHtml(modeLabel("tag"))}</button>` : "";
    root.innerHTML = base + tagButton;
    root.querySelectorAll("[data-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentMode = btn.dataset.mode;
        if (currentMode !== "tag") currentTagFilter = "";
        currentExamReviewFilter = "";
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion({ focus: true });
      });
    });
  }

  function renderRoundPanel() {
    const root = document.getElementById("roundPanel");
    if (!root || !chapterId) return;
    if (isMockExamMode(chapterId)) {
      const state = getExamState(chapterId);
      if (state && (state.active || state.finishedAt)) {
        root.innerHTML = `<div class="round-panel exam-locked"><strong>模擬試験モード</strong><span>演習の周回履歴とは分離して保存しています。</span></div>`;
        return;
      }
    }
    const rounds = chapterRoundNumbers(chapterId);
    const maxRound = Math.max(...rounds, currentRound, 1);
    const statsHtml = rounds.map(round => {
      const s = roundStats(chapterId, round);
      const active = round === currentRound;
      return `<button class="round-tab ${active ? "active" : ""}" data-round="${round}" aria-pressed="${active ? "true" : "false"}">
        <strong>${roundLabel(round)}</strong>
        <span>${s.answered}/${s.total}・${s.rate}%</span>
      </button>`;
    }).join("");
    const current = roundStats(chapterId, currentRound);
    root.innerHTML = `<div class="round-panel">
      <div class="round-panel-head">
        <div>
          <h2>周回</h2>
          <p>${roundLabel(currentRound)}の解答とミス履歴を分けて保存します。「この周回のミス」では一度間違えた問題だけを解けます。</p>
        </div>
        <button class="btn primary" id="startNextRound">次の周回を開始</button>
      </div>
      <div class="round-tabs" aria-label="周回選択">${statsHtml}</div>
      <div class="round-current-summary">
        <span>現在: <strong>${roundLabel(currentRound)}</strong></span>
        <span>解答済み ${current.answered}/${current.total}</span>
        <span>正解 ${current.correct}</span>
        <span>ミス履歴 ${current.wrong}</span>
      </div>
    </div>`;
    root.querySelectorAll("[data-round]").forEach(btn => {
      btn.addEventListener("click", () => switchChapterRound(btn.dataset.round));
    });
    root.querySelector("#startNextRound")?.addEventListener("click", () => switchChapterRound(maxRound + 1));
  }

  function renderChapterStats() {
    const root = document.getElementById("chapterStatsRoot");
    if (!root || !chapterId) return;
    if (isMockExamMode(chapterId)) {
      const state = getExamState(chapterId);
      const s = state ? computeExamAttemptScore(state, chapterId) : { total: (DATA.questions[chapterId] || []).length, answered: 0, correct: 0, wrong: 0, flagged: 0, rate: 0 };
      root.innerHTML = `<div class="stat-grid compact exam-stat-grid">
        <div class="stat-card"><span>モード</span><strong>模擬試験</strong></div>
        <div class="stat-card"><span>解答済み</span><strong>${s.answered}/${s.total}</strong></div>
        <div class="stat-card"><span>正解数</span><strong>${state && state.finishedAt ? `${s.correct}/${s.total}` : "採点前"}</strong></div>
        <div class="stat-card"><span>見直し</span><strong>${s.flagged}</strong></div>
      </div>
      <div class="palette-legend" aria-label="問題番号の状態">
        <span><i class="legend-dot unanswered"></i>未回答</span>
        <span><i class="legend-dot correct"></i>正解</span>
        <span><i class="legend-dot wrong"></i>不正解</span>
        <span><i class="legend-dot flagged"></i>見直し</span>
      </div>`;
      return;
    }
    const s = chapterStats(chapterId);
    root.innerHTML = `<div class="stat-grid compact">
      <div class="stat-card"><span>周回</span><strong>${roundLabel(s.round)}</strong></div>
      <div class="stat-card"><span>解答済み</span><strong>${s.answered}/${s.total}</strong></div>
      <div class="stat-card"><span>正解率</span><strong>${s.rate}%</strong></div>
      <div class="stat-card"><span>ミス履歴+見直し</span><strong>${s.wrong + s.flagged}</strong></div>
    </div>
    <div class="palette-legend" aria-label="問題番号の状態">
      <span><i class="legend-dot unanswered"></i>未回答</span>
      <span><i class="legend-dot correct"></i>正解</span>
      <span><i class="legend-dot wrong"></i>不正解</span>
      <span><i class="legend-dot flagged"></i>見直し</span>
    </div>`;
  }

  function renderQuestionPalette() {
    const root = document.getElementById("questionPalette");
    if (!root || !chapterId) return;
    const all = DATA.questions[chapterId] || [];
    const progress = readProgress();
    const examMode = isMockExamMode(chapterId);
    const examState = examMode ? getExamState(chapterId) : null;
    root.innerHTML = all.map(q => {
      const classes = ["q-dot"];
      if (q.id === currentQuestionId) classes.push("active");
      if (examMode && examState) {
        const r = examAnswerRecord(q);
        if (isAnswered(r)) {
          classes.push("answered");
          if (examState.finishedAt) classes.push(r.isCorrect ? "correct" : "wrong");
        }
        if (isExamFlagged(q)) classes.push("flagged");
      } else {
        const raw = progress[q.id];
        const r = roundAnswerRecord(raw, currentRound);
        if (isAnswered(r)) classes.push(r.isCorrect ? "answered correct" : "answered wrong");
        else if (hasWrongHistory(raw)) classes.push("wrong-history");
        if (isFlagged(raw)) classes.push("flagged");
      }
      return `<button class="${classes.join(" ")}" data-qid="${escapeHtml(q.id)}" title="問${q.number}">${q.number}</button>`;
    }).join("");
    root.querySelectorAll("[data-qid]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentQuestionId = btn.dataset.qid;
        if (!(isMockExamMode(chapterId) && isExamActive(chapterId))) currentMode = "all";
        renderModeButtons();
        renderActiveQuestion({ focus: true });
      });
    });
  }

  function renderJump(list) {
    const jump = document.getElementById("questionJump");
    if (!jump) return;
    jump.innerHTML = list.map(q => `<option value="${escapeHtml(q.id)}">問${q.number}</option>`).join("");
    if (currentQuestionId) jump.value = currentQuestionId;
    jump.onchange = () => {
      currentQuestionId = jump.value;
      renderActiveQuestion({ focus: true });
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
    const examMode = isMockExamMode(chapterId) && getExamState(chapterId);
    const flagged = examMode ? isExamFlagged(q) : isFlagged(readProgress()[q.id]);
    btn.textContent = flagged ? "見直し解除" : "後で見直す";
    btn.classList.toggle("active", flagged);
    btn.onclick = () => examMode ? toggleExamFlag(q) : toggleFlag(q);
  }

  function updateResetCurrentButton(q) {
    const btn = document.getElementById("resetCurrentQuestion");
    if (!btn) return;
    const examMode = isMockExamMode(chapterId) && getExamState(chapterId);
    const saved = examMode ? examAnswerRecord(q) : roundAnswerRecord(readProgress()[q.id], currentRound);
    const answered = isAnswered(saved);
    const locked = examMode && !isExamActive(chapterId);
    btn.disabled = !answered || locked;
    btn.textContent = locked ? "採点済み" : answered ? "解答をリセット" : "未回答";
    btn.onclick = () => {
      const card = document.querySelector(`[data-question-id="${cssEscape(q.id)}"]`);
      if (card) {
        resetQuestion(card, q);
        updateResetCurrentButton(q);
      }
    };
  }

  function scrollToQuestionFocus() {
    const target = document.querySelector("#questionShell .question-card")
      || document.querySelector("#wrongPracticeShell .question-card")
      || document.getElementById("questionShell")
      || document.getElementById("wrongPracticeShell");
    if (!target) return;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (target.classList) {
        target.classList.add("focus-pulse");
        window.setTimeout(() => target.classList.remove("focus-pulse"), 520);
      }
    });
  }

  function renderActiveQuestion(options = {}) {
    const shell = document.getElementById("questionShell");
    if (!shell || !chapterId) return;
    const list = filteredQuestions();
    renderChapterStats();
    renderRoundPanel();
    renderExamPanel();

    const examState = isExamChapter(chapterId) ? getExamState(chapterId) : null;
    if (isMockExamMode(chapterId) && !(examState && (examState.active || examState.finishedAt))) {
      shell.innerHTML = `<div class="empty-state exam-start-state">
        <h2>模擬試験モードは開始前です</h2>
        <p>「模擬試験を開始」を押すと、演習履歴とは別に新しい答案履歴を作成します。演習として解く場合は、上の切替で演習モードを選んでください。</p>
      </div>`;
      renderJump([]);
      renderQuestionPalette();
      updateNavButtons(0, 0);
      return;
    }

    if (!list.length) {
      shell.innerHTML = `<div class="empty-state">
        <h2>${escapeHtml(modeLabel(currentMode))}の問題はありません</h2>
        <button class="btn primary" id="backToAll">全問に戻る</button>
      </div>`;
      document.getElementById("backToAll")?.addEventListener("click", () => {
        currentMode = "all";
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion({ focus: true });
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
    const bottomSubmit = document.querySelector("[data-bottom-submit]");
    if (bottomSubmit) {
      const examMode = isMockExamMode(chapterId) && getExamState(chapterId);
      const saved = examMode ? examAnswerRecord(q) : roundAnswerRecord(readProgress()[q.id], currentRound);
      if (isExamActive(chapterId)) bottomSubmit.textContent = isAnswered(saved) ? "保存し直す" : "解答を保存";
      else if (isExamReviewing(chapterId)) bottomSubmit.textContent = "採点済み";
      else if (isRoundWrongPracticeMode()) bottomSubmit.textContent = "解答する";
      else bottomSubmit.textContent = isAnswered(saved) ? "もう一度解く" : "解答する";
      bottomSubmit.disabled = isExamReviewing(chapterId);
      bottomSubmit.onclick = () => {
        if (isAnswered(saved) && !isRoundWrongPracticeMode() && !isExamActive(chapterId) && !isExamReviewing(chapterId)) resetQuestion(card, q);
        else card.querySelector("[data-submit]")?.click();
      };
    }
    renderJump(list);
    renderQuestionPalette();
    updateNavButtons(index, list.length);
    updateFlagButton(q);
    updateResetCurrentButton(q);
    if (options.focus) scrollToQuestionFocus();
  }

  function moveQuestion(delta) {
    const list = filteredQuestions();
    if (!list.length) {
      renderActiveQuestion({ focus: true });
      return;
    }

    const currentId = currentQuestionId;
    let nextIndex;
    const index = list.findIndex(q => q.id === currentId);

    if (index >= 0) {
      nextIndex = Math.min(Math.max(index + delta, 0), list.length - 1);
    } else if (currentMode === "wrong" && currentId) {
      const all = DATA.questions[chapterId] || [];
      const currentOriginalIndex = all.findIndex(q => q.id === currentId);
      const originalIndexOf = q => all.findIndex(item => item.id === q.id);
      if (delta >= 0) {
        const forward = list.findIndex(q => originalIndexOf(q) > currentOriginalIndex);
        nextIndex = forward >= 0 ? forward : 0;
      } else {
        let backward = -1;
        list.forEach((q, i) => {
          const originalIndex = originalIndexOf(q);
          if (originalIndex >= 0 && originalIndex < currentOriginalIndex) backward = i;
        });
        nextIndex = backward >= 0 ? backward : list.length - 1;
      }
    } else {
      nextIndex = delta >= 0 ? 0 : list.length - 1;
    }

    currentQuestionId = list[nextIndex].id;
    renderActiveQuestion({ focus: true });
  }

  function firstUnanswered() {
    if (isMockExamMode(chapterId)) {
      const state = getExamState(chapterId);
      if (!state || state.active) return;
      const q = (DATA.questions[chapterId] || []).find(item => !examAnswerRecord(item));
      if (!q) return;
      currentMode = "unanswered";
      currentQuestionId = q.id;
      renderModeButtons();
      renderActiveQuestion({ focus: true });
      return;
    }
    const progress = readProgress();
    const q = (DATA.questions[chapterId] || []).find(item => !isAnsweredInRound(progress[item.id], currentRound));
    if (!q) return;
    currentMode = "all";
    currentQuestionId = q.id;
    renderModeButtons();
    renderActiveQuestion({ focus: true });
  }

  function examElapsedSeconds(state) {
    if (!state || !state.startedAt) return 0;
    const started = Date.parse(state.startedAt) || 0;
    const end = Date.parse(state.finishedAt || "") || Date.now();
    if (!started || !end) return 0;
    return Math.max(0, Math.floor((end - started) / 1000));
  }

  function examSummaryHtml(state, stats) {
    if (!state || state.active || !state.finishedAt) return "";
    const score = `${stats.correct}/${stats.total}`;
    return `<div class="exam-summary compact-result">
      <strong>前回結果 ${score}・正解率 ${stats.rate}%</strong>
      <span>未回答 ${stats.unanswered}・所要時間 ${formatSeconds(examElapsedSeconds(state))}</span>
      ${stats.weakTags && stats.weakTags.length ? `<span>弱点: ${stats.weakTags.map(item => escapeHtml(item.tag)).join(" / ")}</span>` : `<span>弱点タグはまだありません。</span>`}
    </div>`;
  }

  function examResultHtml(state, stats) {
    if (!state || !state.finishedAt) return "";
    const attempts = sortedExamAttempts(chapterId).filter(item => item.finishedAt);
    const attemptOptions = attempts.length > 1 ? `<label class="exam-history-select">結果履歴
      <select id="examAttemptSelect">${attempts.map((attempt, index) => {
        const score = computeExamAttemptScore(attempt, chapterId);
        const date = formatDateTime(attempt.finishedAt || attempt.startedAt);
        return `<option value="${escapeHtml(attempt.attemptId)}" ${attempt.attemptId === state.attemptId ? "selected" : ""}>${index + 1}. ${date} / ${score.correct}/${score.total}</option>`;
      }).join("")}</select>
    </label>` : "";
    const weakTags = stats.weakTags && stats.weakTags.length
      ? `<div class="weak-tags">${stats.weakTags.map(item => `<span class="weak-tag">${escapeHtml(item.tag)} <b>${item.wrong}</b></span>`).join("")}</div>`
      : `<p class="inline-note">不正解タグはありません。</p>`;
    return `<section class="exam-result-card" id="examResultCard">
      <div class="exam-result-head">
        <div>
          <h2>模擬試験結果</h2>
          <p>${escapeHtml(formatDateTime(state.finishedAt))} 採点</p>
        </div>
        <strong class="exam-score">${stats.correct}/${stats.total}</strong>
      </div>
      <div class="stat-grid compact">
        <div class="stat-card"><span>正解率</span><strong>${stats.rate}%</strong></div>
        <div class="stat-card"><span>未回答</span><strong>${stats.unanswered}</strong></div>
        <div class="stat-card"><span>所要時間</span><strong>${formatSeconds(examElapsedSeconds(state))}</strong></div>
        <div class="stat-card"><span>見直し</span><strong>${stats.flagged}</strong></div>
      </div>
      ${attemptOptions}
      <div class="exam-result-actions">
        <button class="btn" data-exam-review="wrong">不正解だけ確認</button>
        <button class="btn" data-exam-review="unanswered">未回答だけ確認</button>
        <button class="btn" data-exam-review="flagged">見直しフラグ付き確認</button>
        <button class="btn" data-exam-review="flagged-wrong">見直しフラグ付き不正解</button>
        <button class="btn" data-exam-review="flagged-correct">見直しフラグ付き正解</button>
        <button class="btn" data-exam-review="all">全問を確認</button>
        <button class="btn primary" id="startExamAgain">同じ模擬試験をもう一度</button>
      </div>
      <div class="exam-weak-block">
        <h3>苦手タグ</h3>
        ${weakTags}
      </div>
    </section>`;
  }

  function formatDateTime(value) {
    const date = new Date(value || "");
    if (Number.isNaN(date.getTime())) return "日時不明";
    const pad = n => String(n).padStart(2, "0");
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function examModeButtonHtml(mode, active) {
    const practiceActive = mode === "practice";
    const examActive = mode === "exam";
    return `<div class="exam-mode-switch" role="group" aria-label="模擬演習のモード切替">
      <button class="mode-btn ${practiceActive ? "active" : ""}" data-exam-mode="practice" ${active ? "disabled" : ""}>演習モード</button>
      <button class="mode-btn ${examActive ? "active" : ""}" data-exam-mode="exam">模擬試験モード</button>
    </div>`;
  }

  function examTimerText(state) {
    if (state && state.active) return formatSeconds(remainingSeconds(state));
    if (state && state.finishedAt) return "採点済み";
    return "90:00";
  }

  function fixedExamTimerHtml(state, stats) {
    const total = stats && stats.total ? stats.total : 0;
    const answered = stats && typeof stats.answered === "number" ? stats.answered : 0;
    const active = Boolean(state && state.active);
    const finished = Boolean(state && state.finishedAt && !state.active);
    const status = active ? "実施中" : finished ? "採点済み" : "開始前";
    const remain = active ? remainingSeconds(state) : 90 * 60;
    const level = active && remain <= 60 ? "danger" : active && remain <= 5 * 60 ? "urgent" : active && remain <= 10 * 60 ? "warning" : "";
    return `<div class="exam-fixed-timer ${active ? "active" : ""} ${escapeHtml(level)}" id="fixedExamTimer" aria-live="polite">
      <span class="exam-fixed-label">模擬試験</span>
      <strong data-exam-timer>${examTimerText(state)}</strong>
      <span class="exam-fixed-sub">${escapeHtml(status)}・${answered}/${total}</span>
    </div>`;
  }

  function updateExamTimers() {
    if (!chapterId || !isExamChapter(chapterId)) return;
    const state = getExamState(chapterId);
    const text = examTimerText(state);
    document.querySelectorAll("[data-exam-timer], #examTimer").forEach(timer => {
      timer.textContent = text;
    });
    const fixed = document.getElementById("fixedExamTimer");
    if (fixed) {
      const active = Boolean(state && state.active);
      const remain = active ? remainingSeconds(state) : 90 * 60;
      fixed.classList.toggle("active", active);
      fixed.classList.toggle("warning", active && remain <= 10 * 60 && remain > 5 * 60);
      fixed.classList.toggle("urgent", active && remain <= 5 * 60 && remain > 60);
      fixed.classList.toggle("danger", active && remain <= 60);
      const sub = fixed.querySelector(".exam-fixed-sub");
      const s = state ? computeExamAttemptScore(state, chapterId) : { answered: 0, total: (DATA.questions[chapterId] || []).length };
      if (sub) sub.textContent = `${state && state.active ? "実施中" : state && state.finishedAt ? "採点済み" : "開始前"}・${s.answered}/${s.total}`;
    }
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
    const mode = getExamMode(chapterId);
    const state = getExamState(chapterId);
    const active = Boolean(state && state.active);
    const s = state ? computeExamAttemptScore(state, chapterId) : { total: (DATA.questions[chapterId] || []).length, answered: 0, correct: 0, wrong: 0, unanswered: (DATA.questions[chapterId] || []).length, flagged: 0, rate: 0, weakTags: [] };

    if (mode === "practice") {
      panel.innerHTML = `<div class="exam-box practice-mode">
        <div>
          <h2>演習モード</h2>
          <p>1問ずつ解答し、解答後すぐに正解・解説を確認します。周回、未回答、間違いのみ、見直しの復習に使います。</p>
          ${examModeButtonHtml(mode, active)}
        </div>
        <div class="exam-actions">
          <span class="exam-count">演習履歴と模擬試験履歴は分離しています。</span>
        </div>
      </div>`;
      stopTimer();
    } else {
      panel.innerHTML = `${fixedExamTimerHtml(state, s)}
      <div class="exam-box ${active ? "active" : ""}">
        <div>
          <h2>模擬試験モード</h2>
          <p>90分で60問を解きます。実施中は解答を保存するだけで、採点後に正解・解説を確認します。</p>
          ${examSummaryHtml(state, s)}
          ${examModeButtonHtml(mode, active)}
        </div>
        <div class="exam-actions">
          <span class="timer" id="examTimer" data-exam-timer>${examTimerText(state)}</span>
          <span class="exam-count">解答済み ${s.answered} / 未回答 ${s.unanswered} / 見直し ${s.flagged}</span>
          ${active ? `<button class="btn primary" id="finishExam">模擬試験を終了して採点</button>` : `<button class="btn primary" id="startExam">模擬試験を開始</button>`}
        </div>
      </div>
      ${examResultHtml(state, s)}`;
      if (active) startTimer();
      else stopTimer();
    }

    panel.querySelectorAll("[data-exam-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (active && btn.dataset.examMode === "practice") return;
        setExamMode(chapterId, btn.dataset.examMode);
        currentMode = "all";
        currentExamReviewFilter = "";
        currentQuestionId = null;
        clearSelectedExamAttempt(chapterId);
        renderModeButtons();
        renderActiveQuestion({ focus: false });
      });
    });
    document.getElementById("startExam")?.addEventListener("click", startExam);
    document.getElementById("startExamAgain")?.addEventListener("click", startExam);
    document.getElementById("finishExam")?.addEventListener("click", () => finishExam(false));
    document.getElementById("examAttemptSelect")?.addEventListener("change", event => {
      const chapterStore = getExamChapterStore(chapterId);
      chapterStore.selectedAttemptId = event.target.value;
      setExamChapterStore(chapterId, chapterStore);
      currentMode = "all";
      currentQuestionId = null;
      renderModeButtons();
      renderActiveQuestion({ focus: true });
    });
    panel.querySelectorAll("[data-exam-review]").forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.examReview || "all";
        currentExamReviewFilter = ["flagged-wrong", "flagged-correct"].includes(mode) ? mode : "";
        currentMode = ["wrong", "unanswered", "flagged", "flagged-wrong", "flagged-correct"].includes(mode) ? (mode.startsWith("flagged") ? "flagged" : mode) : "all";
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion({ focus: true });
      });
    });
  }

  function startExam() {
    if (!chapterId) return;
    const active = getActiveExamAttempt(chapterId);
    if (active && active.active) return;
    const ok = window.confirm("新しい模擬試験を開始します。演習モードの周回履歴は変更しません。前回までの模擬試験結果は履歴に残ります。開始しますか？");
    if (!ok) return;
    setExamMode(chapterId, "exam");
    const attempt = normalizeExamAttempt({
      attemptId: newExamAttemptId(),
      chapterId,
      round: currentRound,
      active: true,
      startedAt: new Date().toISOString(),
      durationSec: 90 * 60,
      answers: {},
      flags: {},
      answerEvents: []
    }, chapterId);
    updateExamAttempt(chapterId, attempt);
    currentMode = "all";
    currentExamReviewFilter = "";
    currentQuestionId = (DATA.questions[chapterId] || [])[0]?.id || null;
    renderModeButtons();
    renderActiveQuestion({ focus: true });
  }

  function finishExam(autoFinished) {
    const state = getActiveExamAttempt(chapterId);
    if (!state) return;
    const stats = computeExamAttemptScore(state, chapterId);
    if (!autoFinished && stats.unanswered > 0) {
      const ok = window.confirm(`未回答が ${stats.unanswered} 問あります。このまま採点しますか？`);
      if (!ok) return;
    }
    const finished = {
      ...state,
      active: false,
      finishedAt: new Date().toISOString(),
      autoFinished: Boolean(autoFinished),
      score: computeExamAttemptScore(state, chapterId)
    };
    updateExamAttempt(chapterId, finished);
    stopTimer();
    currentMode = "all";
    currentExamReviewFilter = "";
    currentQuestionId = null;
    renderModeButtons();
    renderActiveQuestion({ focus: true });
  }

  function remainingSeconds(state) {
    if (!state) return 0;
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
      updateExamTimers();
      if (remain <= 0) finishExam(true);
    }, 1000);
  }

  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }

  function updateProgressUi() {
    if (!chapterId) {
      // トップページは「ヘッダー → 演習一覧 → 学習記事一覧」に固定するため、
    // ダッシュボードの自動挿入は行わない。
      return;
    }
    let s = chapterStats(chapterId);
    let label = `${roundLabel(s.round)}・${s.answered}/${s.total} 解答済み・正解 ${s.correct}・見直し ${s.flagged}`;
    if (isMockExamMode(chapterId)) {
      const state = getExamState(chapterId);
      if (state) {
        s = computeExamAttemptScore(state, chapterId);
        label = state.finishedAt
          ? `模擬試験・${s.correct}/${s.total} 正解・未回答 ${s.unanswered}・見直し ${s.flagged}`
          : `模擬試験・${s.answered}/${s.total} 解答済み・見直し ${s.flagged}`;
      }
    }
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = s.total ? `${Math.round(s.answered / s.total * 100)}%` : "0%";
    if (text) text.textContent = s.total ? label : "0/0";
  }

  function renderChapter() {
    const root = document.getElementById("questionRoot");
    if (!root || !chapterId) return;
    ensureChapterRound();
    const chapter = chapterById(chapterId);
    const title = document.getElementById("chapterTitle");
    const desc = document.getElementById("chapterDesc");
    if (title) title.textContent = chapter ? chapter.title : "章が見つかりません";
    const questions = DATA.questions[chapterId] || [];
    if (desc) desc.textContent = "";

    if (!questions.length) {
      root.innerHTML = `<div class="empty-state"><h2>この章は未実装です</h2></div>`;
      updateProgressUi();
      return;
    }

    root.innerHTML = `<div class="study-panel">
      <div id="roundPanel" class="round-panel-root"></div>
      <div id="chapterStatsRoot" class="chapter-stats"></div>
      <div id="examPanel" class="exam-panel"></div>
      ${syncPanelHtml()}
      ${cloudSaveMiniHtml()}
      <div class="mode-row" id="modeButtons"></div>
      <div class="question-toolbar">
        <div class="question-toolbar-main">
          <button class="btn" data-prev-question>前の問題</button>
          <span id="questionPosition" class="question-position">0 / 0</span>
          <button class="btn" data-next-question>次の問題</button>
        </div>
        <div class="question-toolbar-sub">
          <select id="questionJump" class="question-jump" aria-label="問題番号を選択"></select>
          <button id="resetCurrentQuestion" class="btn ghost reset-current-btn" disabled>解答をリセット</button>
          <button id="toggleFlag" class="btn flag-btn">後で見直す</button>
        </div>
      </div>
      <div id="questionPalette" class="question-palette" aria-label="問題一覧"></div>
      <div id="questionShell"></div>
      <div class="viewer-footer">
        <button class="btn" data-prev-question>前へ</button>
        <button class="btn primary" data-bottom-submit>解答する</button>
        <button class="btn" data-next-question>次へ</button>
      </div>
    </div>`;

    bindSyncPanel(root);
    bindCloudPanel(root);
    renderRoundPanel();
    renderModeButtons();
    renderActiveQuestion({ focus: true });
    updateProgressUi();
    root.querySelectorAll("[data-prev-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(-1)));
    root.querySelectorAll("[data-next-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(1)));
  }

  function bindChapterToolbar() {
    const reset = document.getElementById("resetChapter");
    if (reset) {
      const locked = isMockExamMode(chapterId) && Boolean(getExamState(chapterId));
      reset.disabled = locked;
      reset.textContent = locked ? "模擬試験中はリセット不可" : "この周回をリセット";
      reset.onclick = () => {
        if (isMockExamMode(chapterId) && getExamState(chapterId)) return;
        clearChapterProgress(chapterId, false);
        currentMode = "all";
        currentQuestionId = null;
        renderChapter();
      };
    }
    const unanswered = document.getElementById("firstUnanswered");
    if (unanswered) {
      unanswered.disabled = isMockExamMode(chapterId) && isExamActive(chapterId);
      unanswered.onclick = firstUnanswered;
    }
  }


  function wrongRoundNumbersOf(record) {
    if (!record) return [];
    const rounds = new Set();
    Object.keys(roundWrongHistoryOf(record)).forEach(key => rounds.add(normalizeRound(key)));
    attemptsOf(record).forEach(attempt => {
      if (attempt && attempt.isCorrect === false) rounds.add(attemptRound(attempt));
    });
    if (isAnswered(record) && record.isCorrect === false) rounds.add(normalizeRound(record.round || 1));
    return Array.from(rounds).filter(n => n >= 1).sort((a, b) => a - b);
  }

  function wrongEntryTime(entry, record) {
    return Date.parse(entry && (entry.lastWrongAt || entry.firstWrongAt) || "") || latestProgressTime(record);
  }

  function wrongQuestionItems(options = {}) {
    const targetRound = Math.floor(Number(options.round || 0));
    const progress = readProgress();
    const items = [];
    for (const ch of DATA.chapters) {
      for (const q of DATA.questions[ch.id] || []) {
        const record = progress[q.id];
        if (!record) continue;
        const rounds = targetRound >= 1 ? [targetRound] : wrongRoundNumbersOf(record);
        rounds.forEach(round => {
          const entry = roundWrongEntry(record, round);
          if (!entry) return;
          items.push({
            chapter: ch,
            question: q,
            record,
            round: normalizeRound(round),
            wrongEntry: entry,
            sortTime: wrongEntryTime(entry, record)
          });
        });
      }
    }
    return items.sort((a, b) => {
      if (b.sortTime !== a.sortTime) return b.sortTime - a.sortTime;
      if (a.round !== b.round) return b.round - a.round;
      const ca = DATA.chapters.findIndex(ch => ch.id === a.chapter.id);
      const cb = DATA.chapters.findIndex(ch => ch.id === b.chapter.id);
      if (ca !== cb) return ca - cb;
      return Number(a.question.number || 0) - Number(b.question.number || 0);
    });
  }

  function shuffleItems(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function wrongPracticeIds(options = {}) {
    return shuffleItems(wrongQuestionItems(options)).map(item => item.question.id);
  }

  function wrongRoundGroups() {
    const map = new Map();
    wrongQuestionItems().forEach(item => {
      const round = normalizeRound(item.round);
      const group = map.get(round) || { round, items: [], questionCount: 0, latestTime: 0, chapterIds: new Set() };
      group.items.push(item);
      group.questionCount += 1;
      group.latestTime = Math.max(group.latestTime, item.sortTime || 0);
      group.chapterIds.add(item.chapter.id);
      map.set(round, group);
    });
    return Array.from(map.values()).sort((a, b) => b.round - a.round).map(group => ({
      ...group,
      chapterCount: group.chapterIds.size
    }));
  }

  function wrongPracticeHref(round = 0, questionId = "") {
    const params = new URLSearchParams();
    const r = Math.floor(Number(round || 0));
    if (Number.isFinite(r) && r >= 1) params.set("round", String(r));
    if (questionId) params.set("q", questionId);
    const query = params.toString();
    return query ? `wrong-practice.html?${query}` : "wrong-practice.html";
  }

  function wrongPracticeTargetLabel(round) {
    const r = Math.floor(Number(round || 0));
    return Number.isFinite(r) && r >= 1 ? `${roundLabel(r)}のミス` : "全周回のミス";
  }

  function renderWrongSummary() {
    const root = document.getElementById("wrongSummaryRoot");
    if (!root) return;
    const items = wrongQuestionItems();
    const groups = wrongRoundGroups();
    const stats = globalStats();
    const weak = weakTagStats().slice(0, 10);
    if (!items.length) {
      root.innerHTML = `<section class="empty-state">
        <h2>間違えた問題はありません</h2>
        <a class="btn primary" href="index.html">トップへ戻る</a>
      </section>`;
      return;
    }
    const tagHtml = weak.length ? `<div class="weak-tags">${weak.map(item => `<span class="weak-tag">${escapeHtml(item.tag)} <b>${item.wrong}</b>/<small>${item.answered}</small></span>`).join("")}</div>` : "";
    const roundSelectorHtml = `<section class="wrong-chapter-card wrong-round-selector-card">
      <div class="wrong-chapter-head">
        <h2>周回別の間違い演習</h2>
        <span class="badge todo">${groups.length}周回</span>
      </div>
      <p class="inline-note">周回ごとに「一度でも間違えた問題」を固定して選べます。ここで正解しても、その周回のミス履歴は残ります。</p>
      <div class="wrong-round-card-grid">
        <a class="wrong-round-card" href="${wrongPracticeHref()}">
          <span>全周回ランダム</span>
          <strong>${items.length}問</strong>
          <small>周回をまたいで復習</small>
        </a>
        ${groups.map(group => `<a class="wrong-round-card" href="${wrongPracticeHref(group.round)}">
          <span>${escapeHtml(roundLabel(group.round))}のミス</span>
          <strong>${group.questionCount}問</strong>
          <small>${group.chapterCount}章にまたがる復習</small>
        </a>`).join("")}
      </div>
    </section>`;
    const listHtml = `<section class="wrong-chapter-card wrong-random-card">
      <div class="wrong-chapter-head">
        <h2>全周回の間違い一覧</h2>
        <span class="badge todo">${items.length}問</span>
      </div>
      <div class="wrong-item-list">
        ${items.map(({ chapter, question, record, round, wrongEntry }) => {
          const latestWrong = latestWrongAttempt(record, round);
          const selected = answerKeysHtml(latestWrong && Array.isArray(latestWrong.selected) ? latestWrong.selected : record.selected || [], question);
          const answer = answerKeysHtml(question.answer || [], question);
          const wrongCount = wrongAttemptCount(record, round);
          const totalCount = totalAttemptCount(record, round);
          const tags = getQuestionTags(question).slice(0, 4).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");
          const lastWrong = wrongEntry && wrongEntry.lastWrongAt ? new Date(wrongEntry.lastWrongAt).toLocaleString("ja-JP") : "";
          return `<article class="wrong-item">
            <div class="wrong-item-main">
              <h3>${escapeHtml(roundLabel(round))} / 元の問題: ${escapeHtml(chapter.title)} 問${question.number}</h3>
              <p><span>直近のミス解答</span><strong class="bad-text answer-key-compact">${selected}</strong></p>
              <p><span>正解</span><strong class="ok-text answer-key-compact">${answer}</strong></p>
              <p><span>この周回</span><strong>${wrongCount}回ミス / ${totalCount}回解答</strong></p>
              ${lastWrong ? `<p><span>最終ミス</span><strong>${escapeHtml(lastWrong)}</strong></p>` : ""}
              ${tags ? `<div class="tag-list">${tags}</div>` : ""}
            </div>
            <div class="wrong-item-actions">
              <a class="btn primary" href="${wrongPracticeHref(round, question.id)}">この周回で解く</a>
              <button class="btn ghost" data-wrong-reset="${escapeHtml(question.id)}">履歴を消す</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>`;
    root.innerHTML = `<section class="summary-panel">
        <div>
          <h2>間違いまとめ</h2>
          <p class="inline-note">周回別のミス履歴を残したまま、対象周回を選んで復習できます。</p>
        </div>
        <div class="summary-stats">
          <div class="stat-card"><span>周回別ミス</span><strong>${items.length}</strong></div>
          <div class="stat-card"><span>対象周回</span><strong>${groups.length}</strong></div>
          <div class="stat-card"><span>解答済み</span><strong>${stats.answered}</strong></div>
        </div>
        <div class="summary-actions"><a class="btn primary" href="${wrongPracticeHref()}">全周回ランダム演習</a></div>
        ${tagHtml}
      </section>
      ${roundSelectorHtml}
      ${listHtml}`;
    root.querySelectorAll("[data-wrong-reset]").forEach(btn => {
      btn.addEventListener("click", () => {
        const found = findQuestionById(btn.dataset.wrongReset);
        if (!found) return;
        deleteQuestionProgress(found.question);
        renderWrongSummary();
        // トップページは「ヘッダー → 演習一覧 → 学習記事一覧」に固定するため、
    // ダッシュボードの自動挿入は行わない。
      });
    });
  }

  let wrongPracticeList = [];
  let wrongPracticeIndex = 0;
  let wrongPracticeRemovalTimer = null;

  function getWrongPracticeTargetRound() {
    const params = new URLSearchParams(location.search || "");
    const raw = params.get("round");
    if (raw === null || raw === "") return 0;
    const n = Math.floor(Number(raw));
    return Number.isFinite(n) && n >= 1 ? n : 0;
  }

  function wrongPracticeRoundSelectorHtml(selectedRound, groups) {
    if (!groups.length) return "";
    const allCount = wrongQuestionItems().length;
    const activeAll = !selectedRound;
    return `<section class="wrong-round-selector-panel">
      <div class="wrong-round-selector-head">
        <div>
          <h2>周回を選択</h2>
          <p>周回ごとに保存されたミスだけを対象にできます。正解してもミス履歴は消えません。</p>
        </div>
      </div>
      <div class="wrong-round-card-grid">
        <a class="wrong-round-card ${activeAll ? "active" : ""}" href="${wrongPracticeHref()}">
          <span>全周回</span>
          <strong>${allCount}問</strong>
          <small>すべての周回ミス</small>
        </a>
        ${groups.map(group => `<a class="wrong-round-card ${selectedRound === group.round ? "active" : ""}" href="${wrongPracticeHref(group.round)}">
          <span>${escapeHtml(roundLabel(group.round))}</span>
          <strong>${group.questionCount}問</strong>
          <small>${group.chapterCount}章</small>
        </a>`).join("")}
      </div>
    </section>`;
  }

  function removeSolvedFromWrongPractice(q) {
    if (!isWrongPracticePage() || !q) return;
    setWrongPracticeMessage("正解です。ミス履歴は残るため、この周回の間違い演習には残ります。");
  }

  function scheduleWrongPracticeRemoval(q) {
    if (!isWrongPracticePage() || !q) return;
    setWrongPracticeMessage("正解です。ミス履歴は残るため、この周回の間違い演習には残ります。");
  }

  function setWrongPracticeMessage(text) {
    const el = document.getElementById("wrongPracticeMessage");
    if (el) el.textContent = text || "";
  }

  function ensureWrongPracticeList() {
    const params = new URLSearchParams(location.search || "");
    const requested = params.get("q");
    const targetRound = getWrongPracticeTargetRound();
    const all = wrongQuestionItems({ round: targetRound });
    if (!all.length) return [];
    const shuffled = shuffleItems(all);
    const ordered = requested
      ? [...shuffled.filter(item => item.question.id === requested), ...shuffled.filter(item => item.question.id !== requested)]
      : shuffled;
    const progress = readProgress();
    return ordered.map(item => ({
      ...item,
      record: progress[item.question.id] || item.record
    })).filter(item => item && item.question && hasWrongInRound(item.record, item.round));
  }

  function originalQuestionLabel(chapter, question) {
    const chapterText = chapter && chapter.title ? chapter.title : `第${question.chapter || ""}章`;
    return `${chapterText} 問${question.number}`;
  }

  function wrongPracticeQuestionHtml(item) {
    const q = item.question;
    const sourceLabel = `${roundLabel(item.round)} / ${originalQuestionLabel(item.chapter, q)}`;
    const html = questionHtml(q)
      .replace(`<h2 class="q-title">問${q.number}</h2>`, `<h2 class="q-title">問${q.number}</h2>`)
      .replace(`<div class="q-meta"><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>`, `<div class="q-meta"><span class="source-question-label">対象: ${escapeHtml(sourceLabel)}</span><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>`);
    return html;
  }

  function renderWrongPracticeQuestion(options = {}) {
    const shell = document.getElementById("wrongPracticeShell");
    if (!shell) return;
    if (!wrongPracticeList.length) wrongPracticeList = ensureWrongPracticeList();
    if (!wrongPracticeList.length) {
      shell.innerHTML = `<div class="empty-state"><h2>${escapeHtml(wrongPracticeTargetLabel(getWrongPracticeTargetRound()))}はありません</h2><a class="btn primary" href="wrong-summary.html">間違いまとめへ戻る</a></div>`;
      const pos = document.getElementById("wrongPracticePosition");
      if (pos) pos.textContent = "0 / 0";
      document.querySelectorAll("[data-wrong-practice-prev], [data-wrong-practice-next], [data-wrong-practice-submit]").forEach(btn => { btn.disabled = true; });
      return;
    }
    wrongPracticeIndex = Math.min(Math.max(wrongPracticeIndex, 0), wrongPracticeList.length - 1);
    const item = wrongPracticeList[wrongPracticeIndex];
    currentRound = normalizeRound(item.round || item.record && item.record.round || getActiveRound(item.chapter && item.chapter.id) || 1);
    const q = item.question;
    shell.innerHTML = wrongPracticeQuestionHtml(item);
    const card = shell.querySelector(`[data-question-id="${cssEscape(q.id)}"]`);
    bindQuestion(card, q);
    const cardNext = card.querySelector("[data-card-next]");
    if (cardNext) {
      const clone = cardNext.cloneNode(true);
      cardNext.replaceWith(clone);
      clone.addEventListener("click", () => moveWrongPractice(1));
    }
    const saved = readProgress()[q.id];
    const roundRecord = roundAnswerRecord(saved, currentRound);
    if (saved && hasWrongInRound(saved, currentRound) && isAnswered(roundRecord)) {
      clearAnswer(q);
    }
    restoreQuestion(card, q);
    const pos = document.getElementById("wrongPracticePosition");
    if (pos) pos.textContent = `${wrongPracticeIndex + 1} / ${wrongPracticeList.length}`;
    document.querySelectorAll("[data-wrong-practice-prev]").forEach(btn => { btn.disabled = wrongPracticeIndex <= 0; });
    document.querySelectorAll("[data-wrong-practice-next]").forEach(btn => { btn.disabled = wrongPracticeIndex >= wrongPracticeList.length - 1; });
    document.querySelectorAll("[data-wrong-practice-submit]").forEach(btn => { btn.disabled = false; });
    if (options.focus) scrollToQuestionFocus();
  }

  function flushSolvedWrongPracticeCurrent(delta) {
    return false;
  }

  function moveWrongPractice(delta) {
    if (!wrongPracticeList.length) return;
    if (wrongPracticeRemovalTimer) {
      window.clearTimeout(wrongPracticeRemovalTimer);
      wrongPracticeRemovalTimer = null;
    }
    wrongPracticeIndex = Math.min(Math.max(wrongPracticeIndex + delta, 0), wrongPracticeList.length - 1);
    renderWrongPracticeQuestion({ focus: true });
  }

  function renderWrongPractice() {
    const root = document.getElementById("wrongPracticeRoot");
    if (!root) return;
    const targetRound = getWrongPracticeTargetRound();
    const groups = wrongRoundGroups();
    wrongPracticeList = ensureWrongPracticeList();
    wrongPracticeIndex = 0;
    root.innerHTML = `<div class="study-panel wrong-practice-panel">
      ${wrongPracticeRoundSelectorHtml(targetRound, groups)}
      <div class="wrong-practice-target-line">
        <span>対象: <strong>${escapeHtml(wrongPracticeTargetLabel(targetRound))}</strong></span>
        <span>${wrongPracticeList.length}問</span>
      </div>
      <div class="question-toolbar wrong-practice-toolbar">
        <div class="question-toolbar-main">
          <button class="btn" data-wrong-practice-prev>前の問題</button>
          <span id="wrongPracticePosition" class="question-position">0 / 0</span>
          <button class="btn" data-wrong-practice-next>次の問題</button>
        </div>
        <div class="question-toolbar-sub">
          <button class="btn" id="shuffleWrongPractice">並び替え</button>
          <a class="btn ghost" href="wrong-summary.html">一覧へ戻る</a>
        </div>
      </div>
      <p id="wrongPracticeMessage" class="inline-note"></p>
      <div id="wrongPracticeShell"></div>
      <div class="viewer-footer">
        <button class="btn" data-wrong-practice-prev>前へ</button>
        <button class="btn primary" data-wrong-practice-submit>解答する</button>
        <button class="btn" data-wrong-practice-next>次へ</button>
      </div>
    </div>`;
    root.querySelectorAll("[data-wrong-practice-prev]").forEach(btn => btn.addEventListener("click", () => moveWrongPractice(-1)));
    root.querySelectorAll("[data-wrong-practice-next]").forEach(btn => btn.addEventListener("click", () => moveWrongPractice(1)));
    document.getElementById("shuffleWrongPractice")?.addEventListener("click", () => {
      if (wrongPracticeRemovalTimer) {
        window.clearTimeout(wrongPracticeRemovalTimer);
        wrongPracticeRemovalTimer = null;
      }
      wrongPracticeList = ensureWrongPracticeList();
      wrongPracticeIndex = 0;
      renderWrongPracticeQuestion({ focus: true });
      setWrongPracticeMessage(`${wrongPracticeTargetLabel(targetRound)}のランダム順を更新しました。`);
    });
    root.querySelector("[data-wrong-practice-submit]")?.addEventListener("click", () => {
      const card = document.querySelector("#wrongPracticeShell .question-card");
      card?.querySelector("[data-submit]")?.click();
    });
    renderWrongPracticeQuestion({ focus: true });
  }


  function articleSectionId(index) {
    return `section-${index + 1}`;
  }

  function enhanceArticlePage() {
    const main = document.querySelector(".reference-main.article-main");
    if (!main) return;

    const sections = Array.from(main.querySelectorAll(".article-section"));
    sections.forEach((section, index) => {
      if (!section.id) section.id = articleSectionId(index);
    });

    // Make reference tables readable on narrow screens without requiring each HTML file to wrap them manually.
    main.querySelectorAll("table.ref-table, table.compact-table").forEach(table => {
      if (table.closest(".table-scroll") || table.closest(".table-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "table-scroll";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });

    if (sections.length > 1 && !main.querySelector(".article-local-toc")) {
      const links = sections.map((section, index) => {
        const h2 = section.querySelector("h2");
        const title = h2 ? h2.textContent.trim() : `項目${index + 1}`;
        return `<a href="#${escapeHtml(section.id)}">${escapeHtml(title)}</a>`;
      }).join("");
      const toc = document.createElement("section");
      toc.className = "article-local-toc";
      toc.innerHTML = `<h2>このページの内容</h2><div class="toc-links">${links}</div>`;
      const hero = main.querySelector(".article-hero, .hero");
      if (hero && hero.nextSibling) hero.parentNode.insertBefore(toc, hero.nextSibling);
      else main.insertBefore(toc, main.firstChild);
    }

    const nav = document.getElementById("chapterNav");
    if (nav && sections.length > 1 && !nav.querySelector(".nav-subtoc")) {
      const active = nav.querySelector(".nav-link.active");
      if (active) {
        const sub = document.createElement("div");
        sub.className = "nav-subtoc";
        sub.innerHTML = sections.slice(0, 8).map((section, index) => {
          const h2 = section.querySelector("h2");
          const title = h2 ? h2.textContent.trim() : `項目${index + 1}`;
          return `<a href="#${escapeHtml(section.id)}">${escapeHtml(title)}</a>`;
        }).join("");
        active.insertAdjacentElement("afterend", sub);
      }
    }
  }

  function renderAll() {
    setSingleFileVisibility();
    renderNav();
    enhanceArticlePage();
    renderIndex();
    renderDashboard();
    renderChapter();
    renderWrongSummary();
    renderWrongPractice();
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
        currentTagFilter = getInitialTagFilter();
        currentQuestionId = getInitialQuestionId();
        renderAll();
      });
    }
  });
})();
