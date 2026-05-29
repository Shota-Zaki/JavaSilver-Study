(function () {
  const DATA = window.JAVA_STUDY_DATA;
  if (!DATA) return;

  const isSingleFile = Boolean(window.OFFLINE_SINGLE_FILE);
  let chapterId = window.CHAPTER_ID || getChapterIdFromHash();
  let currentMode = getInitialMode();
  let currentQuestionId = getInitialQuestionId();
  let currentTagFilter = getInitialTagFilter();
  let timerHandle = null;

  const storageKey = "java-study-progress-v1";
  const examStorageKey = "java-study-exam-v1";
  const cloudConfigStorageKey = "java-study-cloud-sync-config-v1";
  const cloudStateStorageKey = "java-study-cloud-sync-state-v1";
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
        [examStorageKey]: readJson(examStorageKey, {})
      }
    };
  }

  function parseHistoryPayload(text) {
    const payload = JSON.parse(String(text || ""));
    if (!payload || typeof payload !== "object") throw new Error("JSON形式が正しくありません。");
    const storage = payload.storage && typeof payload.storage === "object" ? payload.storage : payload;
    const progress = storage[storageKey] || payload.progress || {};
    const exam = storage[examStorageKey] || payload.exam || {};
    if (!progress || typeof progress !== "object" || Array.isArray(progress)) throw new Error("学習履歴データが見つかりません。");
    if (!exam || typeof exam !== "object" || Array.isArray(exam)) throw new Error("模擬問題履歴データの形式が正しくありません。");
    return { progress, exam, meta: payload };
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
      merged[qid] = {
        ...base,
        flagged: Boolean(currentRecord.flagged || incomingRecord.flagged),
        tags: tags.length ? tags : base.tags,
        attempts,
        ...(wrongResolvedAt ? { wrongResolvedAt } : {})
      };
    });
    return merged;
  }

  function importHistoryFromText(text, mode) {
    const parsed = parseHistoryPayload(text);
    if (mode === "replace") {
      writeProgress(parsed.progress);
      writeExamStore(parsed.exam);
    } else {
      writeProgress(mergeProgress(readProgress(), parsed.progress));
      // 模擬問題タイマーは端末差で壊れやすいため、マージ時は現在端末の状態を優先する。
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

  async function pushCloudHistory(silent) {
    if (!cloudEnabled()) return;
    await ensureCloudReady();
    if (!cloud.user) {
      if (!silent) throw new Error("Googleログインが必要です。");
      return;
    }
    const payload = makeHistoryPayload();
    await cloud.modules.firestoreMod.setDoc(cloudDocRef(), {
      payload,
      updatedAt: cloud.modules.firestoreMod.serverTimestamp(),
      dataVersion: payload.dataVersion || "",
      schemaVersion: payload.schemaVersion || 1
    }, { merge: true });
    writeCloudState({ ...readCloudState(), lastPushedAt: new Date().toISOString() });
    setCloudMessage("クラウドへ保存しました。", false, { silentToast: Boolean(silent) });
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
    const data = snap.data();
    const payload = data && data.payload;
    if (!payload) throw new Error("クラウド上の履歴形式が正しくありません。");
    const imported = importHistoryFromText(JSON.stringify(payload), mode || "merge");
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

  function getExamState(id = chapterId) {
    return readExamStore()[id] || null;
  }

  function setExamState(id, state) {
    const store = readExamStore();
    if (state) store[id] = state;
    else delete store[id];
    writeExamStore(store);
  }

  function isExamChapter(id = chapterId) {
    return id === "ch07" || id === "ch08";
  }

  function isExamActive(id = chapterId) {
    const state = getExamState(id);
    return Boolean(state && state.active);
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
      retry: hashParams.get("retry") || params.get("retry") || ""
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

  function wrongAttemptCount(record) {
    if (!record) return 0;
    const resolvedAt = Date.parse(record.wrongResolvedAt || "") || 0;
    const attempts = attemptsOf(record).filter(attempt => {
      const attemptAt = Date.parse(attempt && attempt.answeredAt || "") || 0;
      return !resolvedAt || !attemptAt || attemptAt > resolvedAt;
    });
    const count = attempts.filter(attempt => attempt && attempt.isCorrect === false).length;
    if (count > 0) return count;
    const answeredAt = Date.parse(record.answeredAt || "") || 0;
    return isAnswered(record) && record.isCorrect === false && (!resolvedAt || !answeredAt || answeredAt > resolvedAt) ? 1 : 0;
  }

  function totalAttemptCount(record) {
    if (!record) return 0;
    const attempts = attemptsOf(record);
    if (attempts.length) return attempts.length;
    return isAnswered(record) ? 1 : 0;
  }

  function hasWrongHistory(record) {
    return wrongAttemptCount(record) > 0;
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
    return Boolean(isCorrect && previous && hasWrongHistory(previous) && isWrongReviewMode());
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
      tags: getQuestionTags(q)
    };
    progress[q.id] = {
      ...previous,
      selected: [...selected],
      isCorrect,
      answeredAt,
      chapterId: ownerId,
      tags: getQuestionTags(q),
      attempts: [...attemptsOf(previous), attempt],
      ...(shouldResolveWrongHistory(previous, isCorrect) ? { wrongResolvedAt: answeredAt } : {})
    };
    writeProgress(progress);
  }

  function clearAnswer(q) {
    const progress = readProgress();
    const previous = progress[q.id];
    if (!previous) return;
    const next = {
      ...previous,
      chapterId: previous.chapterId || owningChapterId(q),
      tags: previous.tags && previous.tags.length ? previous.tags : getQuestionTags(q),
      resetAt: new Date().toISOString()
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
    questions.forEach(q => {
      const record = progress[q.id];
      if (!record) return;
      if (keepFlags && record.flagged) {
        progress[q.id] = { flagged: true, chapterId: id, tags: getQuestionTags(q) };
      } else {
        delete progress[q.id];
      }
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
        <button class="btn primary" data-submit>解答する</button>
        <button class="btn ghost" data-clear>この問題の解答をリセット</button>
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
    const chunks = readableChunks(text);
    return chunks.length
      ? `<div class="readable-text">${chunks.map(chunk => `<p>${escapeHtml(chunk)}</p>`).join("")}</div>`
      : "";
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
    const analyses = q.explanation && Array.isArray(q.explanation.optionAnalysis)
      ? q.explanation.optionAnalysis
      : [];
    if (analyses.length) {
      return `<div class="option-analysis-list">${analyses.map(item => `<div class="option-analysis ${item.isCorrect ? "is-correct" : "is-wrong"}">
        <div class="option-analysis-head"><span class="option-key">${escapeHtml(item.key)}.</span>${optionTextPreviewHtml(q, item.key)}</div>
        ${readableTextHtml(item.detail || "")}
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
    const mainParts = [];
    [exp.pdfExplanation, exp.additionalExplanation, exp.pdfExplanation ? "" : exp.correctReason].forEach(text => {
      if (!text) return;
      const cleaned = String(text).replace(/【追加解説】/g, "").replace(/【間違えやすい点】/g, "").trim();
      if (cleaned && !mainParts.includes(cleaned)) mainParts.push(cleaned);
    });
    if (!mainParts.length) mainParts.push(summary);
    const mainExplanation = readableTextHtml(mainParts.join("\n\n"));
    const related = listHtml(exp.relatedKnowledge);
    const tips = listHtml(exp.examTips);
    const steps = listHtml(exp.judgeSteps);

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
      ${detail("選択肢別解説", optionAnalysisHtml(q), true)}
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
      updateResetCurrentButton(q);
      if (isCorrect && isWrongReviewMode() && hasWrongHistory(readProgress()[q.id]) === false) {
        setWrongPracticeMessage("正解です。解説を確認してから次の問題へ進むと、この問題は間違い演習から外れます。");
      }
    }
  }

  function applyExamSavedState(card, q, selected, persist) {
    const result = card.querySelector("[data-result]");
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    result.className = "result visible neutral";
    result.innerHTML = `<h4>解答を保存しました</h4>`;
    if (persist) {
      saveAnswer(q, selected);
      updateProgressUi();
      renderQuestionPalette();
      renderChapterStats();
      renderExamPanel();
      updateResetCurrentButton(q);
    }
  }

  function resetQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]");
    result.className = "result";
    result.innerHTML = "";
    const message = card.querySelector("[data-message]");
    if (message) message.textContent = "";
    clearAnswer(q);
    updateSelectionStatus(card, q);
    updateProgressUi();
    renderQuestionPalette();
    renderChapterStats();
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

    submit.addEventListener("click", () => {
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
    const progress = readProgress();
    const saved = progress[q.id];
    if (!saved) return;
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
      if (isExamActive(chapterId)) {
        applyExamSavedState(card, q, saved.selected, false);
      } else {
        applyResult(card, q, saved.selected, false);
      }
    }
    updateSelectionStatus(card, q);
  }

  function chapterStats(id) {
    const questions = DATA.questions[id] || [];
    const progress = readProgress();
    const answered = questions.filter(q => isAnswered(progress[q.id])).length;
    const correct = questions.filter(q => isAnswered(progress[q.id]) && progress[q.id].isCorrect).length;
    const wrong = questions.filter(q => hasWrongHistory(progress[q.id])).length;
    const flagged = questions.filter(q => isFlagged(progress[q.id])).length;
    const rate = answered ? Math.round(correct / answered * 100) : 0;
    return { total: questions.length, answered, correct, wrong, flagged, rate };
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
      questions.forEach((q, index) => {
        const record = progress[q.id];
        const t = latestProgressTime(record);
        if (t && (!latest || t > latest.time)) latest = { chapter: ch, question: q, index, time: t };
      });
    }
    if (latest) {
      const list = DATA.questions[latest.chapter.id] || [];
      const next = list.slice(latest.index + 1).find(q => !isAnswered(progress[q.id])) || list.find(q => !isAnswered(progress[q.id])) || latest.question;
      return { chapter: latest.chapter, question: next };
    }
    for (const ch of DATA.chapters) {
      const q = (DATA.questions[ch.id] || []).find(item => !isAnswered(progress[item.id]));
      if (q) return { chapter: ch, question: q };
    }
    const first = DATA.chapters[0];
    return first ? { chapter: first, question: (DATA.questions[first.id] || [])[0] } : null;
  }

  function findFirstChapterForMode(mode, tag) {
    const progress = readProgress();
    for (const ch of DATA.chapters) {
      const list = DATA.questions[ch.id] || [];
      const q = list.find(item => {
        const record = progress[item.id];
        if (mode === "wrong") return hasWrongHistory(record);
        if (mode === "flagged") return isFlagged(record);
        if (mode === "unanswered") return !isAnswered(record);
        if (mode === "tag") {
          const tags = record && record.tags && record.tags.length ? record.tags : getQuestionTags(item);
          return tags.map(normalizeTag).includes(normalizeTag(tag)) && (!record || !record.isCorrect || isFlagged(record));
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
        <a class="quick-card" href="${escapeHtml(exam1 ? chapterHref(exam1, "all") : "#chapterGrid")}"><span>模擬問題を開始</span><strong>模擬問題① / 模擬問題②</strong></a>
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
      ["equality.html", "同一性・同値性", "==/equals"],
      ["collections-arrays.html", "配列・List", "ArrayList"],
      ["operators-control.html", "演算子・制御", "評価順"],
      ["loop-control.html", "ループ制御", "break/continue"],
      ["output-tracing.html", "出力追跡", "表で追う"],
      ["methods-constructors.html", "メソッド・コンストラクタ", "overload"],
      ["object-oriented.html", "クラス・static・record", "参照/static"],
      ["modifiers-access.html", "修飾子・アクセス", "final/sealed"],
      ["oop-relations.html", "継承・interface", "override"],
      ["inheritance-interface.html", "継承/interface詳細", "default"],
      ["polymorphism-cast.html", "ポリモーフィズム・キャスト", "cast"],
      ["exceptions.html", "例外処理", "try/catch"],
      ["silver17-points.html", "Java 17論点", "record/sealed"]
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
        <span class="chapter-progress-line">${s.answered}/${s.total} 解答済み・正解率 ${s.rate}%・復習 ${s.wrong + s.flagged}</span>
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
    const progress = readProgress();
    if (currentMode === "unanswered") return questions.filter(q => !isAnswered(progress[q.id]));
    if (currentMode === "wrong") return questions.filter(q => hasWrongHistory(progress[q.id]));
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
    return {
      all: "全問",
      unanswered: "未回答",
      wrong: "間違いのみ",
      flagged: "見直し",
      tag: currentTagFilter ? `タグ: ${currentTagFilter}` : "タグ復習"
    }[mode] || "全問";
  }

  function renderModeButtons() {
    const root = document.getElementById("modeButtons");
    if (!root) return;
    const modes = ["all", "unanswered", "wrong", "flagged"];
    const base = modes.map(mode => `<button class="mode-btn ${mode === currentMode ? "active" : ""}" data-mode="${mode}">${modeLabel(mode)}</button>`).join("");
    const tagButton = currentTagFilter ? `<button class="mode-btn ${currentMode === "tag" ? "active" : ""}" data-mode="tag">${escapeHtml(modeLabel("tag"))}</button>` : "";
    root.innerHTML = base + tagButton;
    root.querySelectorAll("[data-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentMode = btn.dataset.mode;
        if (currentMode !== "tag") currentTagFilter = "";
        currentQuestionId = null;
        renderModeButtons();
        renderActiveQuestion({ focus: true });
      });
    });
  }

  function renderChapterStats() {
    const root = document.getElementById("chapterStatsRoot");
    if (!root || !chapterId) return;
    const s = chapterStats(chapterId);
    root.innerHTML = `<div class="stat-grid compact">
      <div class="stat-card"><span>全体</span><strong>${s.total}</strong></div>
      <div class="stat-card"><span>解答済み</span><strong>${s.answered}</strong></div>
      <div class="stat-card"><span>正解率</span><strong>${s.rate}%</strong></div>
      <div class="stat-card"><span>復習対象</span><strong>${s.wrong + s.flagged}</strong></div>
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
    root.innerHTML = all.map(q => {
      const r = progress[q.id];
      const classes = ["q-dot"];
      if (q.id === currentQuestionId) classes.push("active");
      if (isAnswered(r)) classes.push(r.isCorrect ? "answered correct" : "answered wrong");
      else if (hasWrongHistory(r)) classes.push("wrong-history");
      if (isFlagged(r)) classes.push("flagged");
      return `<button class="${classes.join(" ")}" data-qid="${escapeHtml(q.id)}" title="問${q.number}">${q.number}</button>`;
    }).join("");
    root.querySelectorAll("[data-qid]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentQuestionId = btn.dataset.qid;
        currentMode = "all";
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
    const flagged = isFlagged(readProgress()[q.id]);
    btn.textContent = flagged ? "見直し解除" : "後で見直す";
    btn.classList.toggle("active", flagged);
    btn.onclick = () => toggleFlag(q);
  }

  function updateResetCurrentButton(q) {
    const btn = document.getElementById("resetCurrentQuestion");
    if (!btn) return;
    const saved = readProgress()[q.id];
    const answered = isAnswered(saved);
    btn.disabled = !answered;
    btn.textContent = answered ? "解答をリセット" : "未回答";
    btn.onclick = () => {
      const card = document.querySelector(`[data-question-id="${cssEscape(q.id)}"]`);
      if (card) {
        resetQuestion(card, q);
        updateResetCurrentButton(q);
      }
    };
  }

  function scrollToQuestionFocus() {
    const target = document.querySelector("#questionShell .question-card") || document.getElementById("questionShell");
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
    renderExamPanel();

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
      const saved = readProgress()[q.id];
      bottomSubmit.textContent = isAnswered(saved) && !isExamActive(chapterId) ? "もう一度解く" : "解答する";
      bottomSubmit.onclick = () => {
        if (isAnswered(saved) && !isExamActive(chapterId)) resetQuestion(card, q);
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
    const progress = readProgress();
    const q = (DATA.questions[chapterId] || []).find(item => !isAnswered(progress[item.id]));
    if (!q) return;
    currentMode = "all";
    currentQuestionId = q.id;
    renderModeButtons();
    renderActiveQuestion({ focus: true });
  }

  function examSummaryHtml(state, stats) {
    if (!state || state.active || !state.finishedAt) return "";
    const score = `${stats.correct}/${stats.total}`;
    const wrongTags = weakTagStats().slice(0, 6);
    return `<div class="exam-summary">
      <strong>前回結果 ${score}・正解率 ${stats.rate}%</strong>
      ${wrongTags.length ? `<span>弱点: ${wrongTags.map(item => escapeHtml(item.tag)).join(" / ")}</span>` : `<span>不正解タグはまだありません。</span>`}
      <a class="btn" href="${escapeHtml(chapterHref(chapterById(chapterId), "wrong"))}">不正解を復習</a>
    </div>`;
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
    const state = getExamState(chapterId);
    const active = Boolean(state && state.active);
    const s = chapterStats(chapterId);
    const unanswered = Math.max(s.total - s.answered, 0);
    panel.innerHTML = `<div class="exam-box ${active ? "active" : ""}">
      <div>
        <h2>模擬問題モード</h2>
        ${examSummaryHtml(state, s)}
      </div>
      <div class="exam-actions">
        <span class="timer" id="examTimer">${active ? formatSeconds(remainingSeconds(state)) : "90:00"}</span>
        <span class="exam-count">解答済み ${s.answered} / 未回答 ${unanswered} / 見直し ${s.flagged}</span>
        ${active ? `<button class="btn primary" id="finishExam">模擬問題を終了して採点</button>` : `<button class="btn primary" id="startExam">模擬問題開始</button>`}
      </div>
    </div>`;
    document.getElementById("startExam")?.addEventListener("click", startExam);
    document.getElementById("finishExam")?.addEventListener("click", () => finishExam(false));
    if (active) startTimer();
    else stopTimer();
  }

  function startExam() {
    if (!chapterId) return;
    clearChapterProgress(chapterId, true);
    setExamState(chapterId, {
      active: true,
      startedAt: new Date().toISOString(),
      durationSec: 90 * 60
    });
    currentMode = "all";
    currentQuestionId = (DATA.questions[chapterId] || [])[0]?.id || null;
    renderModeButtons();
    renderActiveQuestion({ focus: true });
  }

  function finishExam(autoFinished) {
    const state = getExamState(chapterId);
    if (!state) return;
    setExamState(chapterId, {
      ...state,
      active: false,
      finishedAt: new Date().toISOString(),
      autoFinished: Boolean(autoFinished)
    });
    stopTimer();
    renderActiveQuestion({ focus: true });
  }

  function remainingSeconds(state) {
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
      const timer = document.getElementById("examTimer");
      if (timer) timer.textContent = formatSeconds(remain);
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
    const s = chapterStats(chapterId);
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = s.total ? `${Math.round(s.answered / s.total * 100)}%` : "0%";
    if (text) text.textContent = s.total ? `${s.answered}/${s.total} 解答済み・正解 ${s.correct}・見直し ${s.flagged}` : "0/0";
  }

  function renderChapter() {
    const root = document.getElementById("questionRoot");
    if (!root || !chapterId) return;
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
    renderModeButtons();
    renderActiveQuestion({ focus: true });
    updateProgressUi();
    root.querySelectorAll("[data-prev-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(-1)));
    root.querySelectorAll("[data-next-question]").forEach(btn => btn.addEventListener("click", () => moveQuestion(1)));
  }

  function bindChapterToolbar() {
    const reset = document.getElementById("resetChapter");
    if (reset) {
      reset.onclick = () => {
        clearChapterProgress(chapterId, false);
        setExamState(chapterId, null);
        currentMode = "all";
        currentQuestionId = null;
        renderChapter();
      };
    }
    const unanswered = document.getElementById("firstUnanswered");
    if (unanswered) unanswered.onclick = firstUnanswered;
  }


  function wrongQuestionItems() {
    const progress = readProgress();
    const items = [];
    for (const ch of DATA.chapters) {
      for (const q of DATA.questions[ch.id] || []) {
        const record = progress[q.id];
        if (!hasWrongHistory(record)) continue;
        items.push({ chapter: ch, question: q, record });
      }
    }
    return items.sort((a, b) => {
      const ta = latestProgressTime(a.record);
      const tb = latestProgressTime(b.record);
      return tb - ta;
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

  function wrongPracticeIds() {
    return shuffleItems(wrongQuestionItems()).map(item => item.question.id);
  }

  function renderWrongSummary() {
    const root = document.getElementById("wrongSummaryRoot");
    if (!root) return;
    const items = shuffleItems(wrongQuestionItems());
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
    const listHtml = `<section class="wrong-chapter-card wrong-random-card">
      <div class="wrong-chapter-head">
        <h2>ランダム間違い一覧</h2>
        <span class="badge todo">${items.length}問</span>
      </div>
      <div class="wrong-item-list">
        ${items.map(({ chapter, question, record }) => {
          const selected = answerKeysHtml(record.selected || [], question);
          const answer = answerKeysHtml(question.answer || [], question);
          const wrongCount = wrongAttemptCount(record);
          const totalCount = totalAttemptCount(record);
          const tags = getQuestionTags(question).slice(0, 4).map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");
          return `<article class="wrong-item">
            <div class="wrong-item-main">
              <h3>元の問題: ${escapeHtml(chapter.title)} 問${question.number}</h3>
              <p><span>現在の解答</span><strong class="bad-text answer-key-compact">${selected}</strong></p>
              <p><span>正解</span><strong class="ok-text answer-key-compact">${answer}</strong></p>
              <p><span>履歴</span><strong>${wrongCount}回ミス / ${totalCount}回解答</strong></p>
              ${tags ? `<div class="tag-list">${tags}</div>` : ""}
            </div>
            <div class="wrong-item-actions">
              <a class="btn primary" href="wrong-practice.html?q=${encodeURIComponent(question.id)}">この問題から解く</a>
              <button class="btn ghost" data-wrong-reset="${escapeHtml(question.id)}">履歴を消す</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>`;
    root.innerHTML = `<section class="summary-panel">
        <div>
          <h2>間違いまとめ</h2>
          <p class="inline-note">章で分けず、間違えた問題だけをランダム順にまとめています。</p>
        </div>
        <div class="summary-stats">
          <div class="stat-card"><span>不正解</span><strong>${stats.wrong}</strong></div>
          <div class="stat-card"><span>解答済み</span><strong>${stats.answered}</strong></div>
          <div class="stat-card"><span>正解率</span><strong>${stats.answered ? Math.round(stats.correct / stats.answered * 100) : 0}%</strong></div>
        </div>
        <div class="summary-actions"><a class="btn primary" href="wrong-practice.html">ランダム演習を開始</a></div>
        ${tagHtml}
      </section>
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

  function removeSolvedFromWrongPractice(q) {
    if (!isWrongPracticePage() || !q) return;
    const before = wrongPracticeList.length;
    wrongPracticeList = wrongPracticeList.filter(item => item && item.question && item.question.id !== q.id);
    if (before === wrongPracticeList.length) return;
    if (wrongPracticeIndex >= wrongPracticeList.length) wrongPracticeIndex = Math.max(wrongPracticeList.length - 1, 0);
    renderWrongPracticeQuestion({ focus: wrongPracticeList.length > 0 });
    setWrongPracticeMessage(wrongPracticeList.length
      ? "正解したため、この問題を間違い演習から外しました。"
      : "正解したため、この問題を間違い演習から外しました。間違い演習は完了です。");
    // トップページは「ヘッダー → 演習一覧 → 学習記事一覧」に固定するため、
    // ダッシュボードの自動挿入は行わない。
  }

  function scheduleWrongPracticeRemoval(q) {
    if (!isWrongPracticePage() || !q) return;
    setWrongPracticeMessage("正解です。解説を確認してから次の問題へ進むと、この問題は間違い演習から外れます。");
  }

  function setWrongPracticeMessage(text) {
    const el = document.getElementById("wrongPracticeMessage");
    if (el) el.textContent = text || "";
  }

  function ensureWrongPracticeList() {
    const params = new URLSearchParams(location.search || "");
    const requested = params.get("q");
    const all = wrongQuestionItems();
    if (!all.length) return [];
    let ids = wrongPracticeIds();
    if (requested && ids.includes(requested)) {
      ids = [requested, ...ids.filter(id => id !== requested)];
    }
    return ids.map(id => {
      const found = findQuestionById(id);
      return found ? { chapter: found.chapter, question: found.question, record: readProgress()[id] } : null;
    }).filter(Boolean);
  }

  function originalQuestionLabel(chapter, question) {
    const chapterText = chapter && chapter.title ? chapter.title : `第${question.chapter || ""}章`;
    return `${chapterText} 問${question.number}`;
  }

  function wrongPracticeQuestionHtml(item) {
    const q = item.question;
    const sourceLabel = originalQuestionLabel(item.chapter, q);
    const html = questionHtml(q)
      .replace(`<h2 class="q-title">問${q.number}</h2>`, `<h2 class="q-title">問${q.number}</h2>`)
      .replace(`<div class="q-meta"><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>`, `<div class="q-meta"><span class="source-question-label">元の問題: ${escapeHtml(sourceLabel)}</span><span data-select-status>${escapeHtml(selectInstruction(q))}</span></div>`);
    return html;
  }

  function renderWrongPracticeQuestion(options = {}) {
    const shell = document.getElementById("wrongPracticeShell");
    if (!shell) return;
    if (!wrongPracticeList.length) wrongPracticeList = ensureWrongPracticeList();
    if (!wrongPracticeList.length) {
      shell.innerHTML = `<div class="empty-state"><h2>間違えた問題はありません</h2><a class="btn primary" href="index.html">トップへ戻る</a></div>`;
      const pos = document.getElementById("wrongPracticePosition");
      if (pos) pos.textContent = "0 / 0";
      return;
    }
    wrongPracticeIndex = Math.min(Math.max(wrongPracticeIndex, 0), wrongPracticeList.length - 1);
    const item = wrongPracticeList[wrongPracticeIndex];
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
    if (saved && hasWrongHistory(saved)) {
      clearAnswer(q);
    }
    restoreQuestion(card, q);
    const pos = document.getElementById("wrongPracticePosition");
    if (pos) pos.textContent = `${wrongPracticeIndex + 1} / ${wrongPracticeList.length}`;
    document.querySelectorAll("[data-wrong-practice-prev]").forEach(btn => { btn.disabled = wrongPracticeIndex <= 0; });
    document.querySelectorAll("[data-wrong-practice-next]").forEach(btn => { btn.disabled = wrongPracticeIndex >= wrongPracticeList.length - 1; });
    if (options.focus) scrollToQuestionFocus();
  }

  function flushSolvedWrongPracticeCurrent(delta) {
    const current = wrongPracticeList[wrongPracticeIndex];
    if (!current || !current.question) return false;
    const record = readProgress()[current.question.id];
    if (hasWrongHistory(record)) return false;
    wrongPracticeList = wrongPracticeList.filter(item => item && item.question && item.question.id !== current.question.id);
    if (!wrongPracticeList.length) {
      wrongPracticeIndex = 0;
      return true;
    }
    if (delta < 0) wrongPracticeIndex = Math.max(wrongPracticeIndex - 1, 0);
    else wrongPracticeIndex = Math.min(wrongPracticeIndex, wrongPracticeList.length - 1);
    return true;
  }

  function moveWrongPractice(delta) {
    if (!wrongPracticeList.length) return;
    if (wrongPracticeRemovalTimer) {
      window.clearTimeout(wrongPracticeRemovalTimer);
      wrongPracticeRemovalTimer = null;
    }
    const removed = flushSolvedWrongPracticeCurrent(delta);
    if (!removed) {
      wrongPracticeIndex = Math.min(Math.max(wrongPracticeIndex + delta, 0), wrongPracticeList.length - 1);
    }
    renderWrongPracticeQuestion({ focus: true });
    if (removed) {
      setWrongPracticeMessage(wrongPracticeList.length
        ? "正解済みの問題を間違い演習から外しました。"
        : "正解済みの問題を間違い演習から外しました。間違い演習は完了です。");
    }
  }

  function renderWrongPractice() {
    const root = document.getElementById("wrongPracticeRoot");
    if (!root) return;
    wrongPracticeList = ensureWrongPracticeList();
    wrongPracticeIndex = 0;
    root.innerHTML = `<div class="study-panel wrong-practice-panel">
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
      setWrongPracticeMessage("ランダム順を更新しました。");
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
