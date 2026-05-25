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
    if (!exam || typeof exam !== "object" || Array.isArray(exam)) throw new Error("模試履歴データの形式が正しくありません。");
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
      merged[qid] = {
        ...base,
        flagged: Boolean(currentRecord.flagged || incomingRecord.flagged),
        tags: tags.length ? tags : base.tags
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
      // 模試タイマーは端末差で壊れやすいため、マージ時は現在端末の状態を優先する。
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
      tag: hashParams.get("tag") || params.get("tag") || ""
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
    const rows = lines.map((line, i) => `
      <div class="code-line">
        <span class="line-no" aria-hidden="true">${i + 1}</span>
        <code>${line ? escapeHtml(line) : "&nbsp;"}</code>
      </div>`).join("");
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
    if (extra.q) params.set("q", extra.q);
    if (extra.tag) params.set("tag", extra.tag);
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

  function saveAnswer(q, selected) {
    const progress = readProgress();
    const previous = progress[q.id] || {};
    progress[q.id] = {
      ...previous,
      selected: [...selected],
      isCorrect: arraysEqual(selected, q.answer),
      answeredAt: new Date().toISOString(),
      chapterId,
      tags: getQuestionTags(q)
    };
    writeProgress(progress);
  }

  function clearAnswer(q) {
    const progress = readProgress();
    const previous = progress[q.id];
    if (!previous) return;
    if (previous.flagged) {
      progress[q.id] = { flagged: true, chapterId, tags: getQuestionTags(q) };
    } else {
      delete progress[q.id];
    }
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
    const record = progress[q.id] || { chapterId, tags: getQuestionTags(q) };
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
    const body = opt.code
      ? numberedCodeHtml(opt.code, "option-code")
      : `<span class="option-text">${escapeHtml(opt.text)}</span>`;
    return `<label class="option" data-key="${escapeHtml(opt.key)}">
      <input type="${inputType}" name="${escapeHtml(q.id)}" value="${escapeHtml(opt.key)}" data-option>
      <div><span class="option-key">${escapeHtml(opt.key)}.</span>${body}</div>
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

  function optionAnalysisHtml(q) {
    const analyses = q.explanation && Array.isArray(q.explanation.optionAnalysis)
      ? q.explanation.optionAnalysis
      : [];
    if (analyses.length) {
      return `<div class="option-analysis-list">${analyses.map(item => `<div class="option-analysis ${item.isCorrect ? "is-correct" : "is-wrong"}">
        <div class="option-analysis-head"><span class="option-key">${escapeHtml(item.key)}.</span></div>
        ${readableTextHtml(item.detail || "")}
      </div>`).join("")}</div>`;
    }

    const points = q.explanation && Array.isArray(q.explanation.points) && q.explanation.points.length
      ? q.explanation.points
      : [];
    return points.length ? listHtml(points) : `<p class="muted">選択肢別の解説は未入力です。</p>`;
  }

  function explanationHtml(q, isCorrect, selected) {
    const rawExp = q.explanation || {};
    const exp = typeof rawExp === "string" ? { summary: rawExp, correctReason: rawExp } : rawExp;
    const answerText = (q.answer || []).join("・");
    const selectedText = selected.length ? selected.join("・") : "未選択";
    const summary = exp.summary || exp.correctReason || "解説未入力。";
    const mainParts = [];
    [exp.pdfExplanation, exp.correctReason, exp.additionalExplanation].forEach(text => {
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
        <p><strong>あなたの解答:</strong> ${escapeHtml(selectedText)}</p>
        <p><strong>正解:</strong> ${escapeHtml(answerText)}</p>
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
    const wrong = questions.filter(q => isAnswered(progress[q.id]) && !progress[q.id].isCorrect).length;
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
        if (!isAnswered(record)) continue;
        const tags = record.tags && record.tags.length ? record.tags : getQuestionTags(q);
        tags.forEach(tag => {
          const key = normalizeTag(tag);
          if (!key) return;
          const item = map.get(key) || { tag: key, answered: 0, wrong: 0 };
          item.answered += 1;
          if (!record.isCorrect) item.wrong += 1;
          map.set(key, item);
        });
      }
    }
    return Array.from(map.values())
      .filter(item => item.wrong > 0)
      .sort((a, b) => (b.wrong - a.wrong) || ((b.wrong / b.answered) - (a.wrong / a.answered)))
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
        const t = Date.parse(record && record.answeredAt || "") || 0;
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
        if (mode === "wrong") return isAnswered(record) && !record.isCorrect;
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
        <a class="btn primary" href="${escapeHtml(wrongTarget ? chapterHref(wrongTarget.chapter, "wrong", { q: wrongTarget.question.id }) : "#chapterGrid")}">間違い ${stats.wrong}問</a>
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
        ${quickActionHtml("間違い復習", wrong ? `${stats.wrong}問を復習` : "対象なし", wrong, "wrong")}
        ${quickActionHtml("見直し復習", flagged ? `${stats.flagged}問を復習` : "対象なし", flagged, "flagged")}
        <a class="quick-card" href="${escapeHtml(exam1 ? chapterHref(exam1, "all") : "#chapterGrid")}"><span>模試を開始</span><strong>模試① / 模試②</strong></a>
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
    const chapterLinks = DATA.chapters.map(ch => {
      const count = (DATA.questions[ch.id] || []).length;
      const active = ch.id === chapterId ? " active" : "";
      const status = ch.status === "ready" ? `${count}問` : "準備中";
      return `<a class="nav-link${active}" href="${escapeHtml(chapterHref(ch))}">
        ${escapeHtml(ch.title)}
        <span class="small">${escapeHtml(status)}</span>
      </a>`;
    }).join("");
    const path = (location.pathname || "").split("/").pop();
    const knowledgeActive = ["reference.html", "glossary.html", "syntax-basics.html", "decision-flow.html", "datatypes.html", "numeric-rules.html", "var-scope.html", "strings.html", "equality.html", "collections-arrays.html", "operators-control.html", "loop-control.html", "methods-constructors.html", "object-oriented.html", "modifiers-access.html", "inheritance-interface.html", "polymorphism-cast.html", "exceptions.html", "compile-runtime.html", "error-catalog.html", "method-list.html", "cheatsheet.html", "exam-traps.html", "fine-points.html", "mini-drills.html"].includes(path);
    const knowledgeLinks = `<div class="nav-divider"></div>
      <a class="nav-link${knowledgeActive && path === "reference.html" ? " active" : ""}" href="reference.html">学習記事トップ<span class="small">入口</span></a>
      <a class="nav-link${knowledgeActive && path === "glossary.html" ? " active" : ""}" href="glossary.html">単語集<span class="small">頻出用語</span></a>
      <a class="nav-link${knowledgeActive && path === "syntax-basics.html" ? " active" : ""}" href="syntax-basics.html">実行・package/import<span class="small">基礎</span></a>
      <a class="nav-link${knowledgeActive && path === "datatypes.html" ? " active" : ""}" href="datatypes.html">データ型・型変換<span class="small">primitive</span></a>
      <a class="nav-link${knowledgeActive && path === "strings.html" ? " active" : ""}" href="strings.html">String/StringBuilder<span class="small">文字列</span></a>
      <a class="nav-link${knowledgeActive && path === "equality.html" ? " active" : ""}" href="equality.html">同一性・同値性比較<span class="small">==/equals</span></a>
      <a class="nav-link${knowledgeActive && path === "collections-arrays.html" ? " active" : ""}" href="collections-arrays.html">配列・ArrayList<span class="small">List</span></a>
      <a class="nav-link${knowledgeActive && path === "operators-control.html" ? " active" : ""}" href="operators-control.html">演算子・制御構造<span class="small">switch/loop</span></a>
      <a class="nav-link${knowledgeActive && path === "loop-control.html" ? " active" : ""}" href="loop-control.html">ループ・do-while<span class="small">break/continue</span></a>
      <a class="nav-link${knowledgeActive && path === "methods-constructors.html" ? " active" : ""}" href="methods-constructors.html">メソッド・コンストラクタ<span class="small">overload</span></a>
      <a class="nav-link${knowledgeActive && path === "object-oriented.html" ? " active" : ""}" href="object-oriented.html">クラス・static・参照<span class="small">OOP</span></a>
      <a class="nav-link${knowledgeActive && path === "inheritance-interface.html" ? " active" : ""}" href="inheritance-interface.html">継承・interface<span class="small">override/sealed</span></a>
      <a class="nav-link${knowledgeActive && path === "exceptions.html" ? " active" : ""}" href="exceptions.html">例外処理<span class="small">try/catch</span></a>
      <a class="nav-link${knowledgeActive && path === "compile-runtime.html" ? " active" : ""}" href="compile-runtime.html">コンパイル/例外判定<span class="small">判定フロー</span></a>
      <a class="nav-link${knowledgeActive && path === "cheatsheet.html" ? " active" : ""}" href="cheatsheet.html">頻出ルール早見表<span class="small">直前確認</span></a>
      <a class="nav-link${knowledgeActive && path === "exam-traps.html" ? " active" : ""}" href="exam-traps.html">試験ひっかけ集<span class="small">落とし穴</span></a>
      <a class="nav-link${knowledgeActive && path === "fine-points.html" ? " active" : ""}" href="fine-points.html">細かい挙動集<span class="small">yield/境界</span></a>`;
    nav.innerHTML = chapterLinks + knowledgeLinks;
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
    renderDashboard();
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
    if (currentMode === "wrong") return questions.filter(q => isAnswered(progress[q.id]) && !progress[q.id].isCorrect);
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
    if (options.focus) scrollToQuestionFocus();
  }

  function moveQuestion(delta) {
    const list = filteredQuestions();
    if (!list.length) return;
    const index = Math.max(0, list.findIndex(q => q.id === currentQuestionId));
    const nextIndex = Math.min(Math.max(index + delta, 0), list.length - 1);
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
        <h2>模試モード</h2>
        ${examSummaryHtml(state, s)}
      </div>
      <div class="exam-actions">
        <span class="timer" id="examTimer">${active ? formatSeconds(remainingSeconds(state)) : "90:00"}</span>
        <span class="exam-count">解答済み ${s.answered} / 未回答 ${unanswered} / 見直し ${s.flagged}</span>
        ${active ? `<button class="btn primary" id="finishExam">模試を終了して採点</button>` : `<button class="btn primary" id="startExam">模試開始</button>`}
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
      renderDashboard();
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

  function renderAll() {
    setSingleFileVisibility();
    renderNav();
    renderIndex();
    renderChapter();
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
