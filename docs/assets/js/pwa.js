(() => {
  "use strict";

  const scriptUrl = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src)
    : new URL("assets/js/pwa.js", location.href);
  const rootUrl = new URL("../../", scriptUrl);
  const staticPaths = [
  "./",
  "./index.html",
  "./reference.html",
  "./ch01.html",
  "./ch02.html",
  "./ch03.html",
  "./ch04.html",
  "./ch05.html",
  "./ch06.html",
  "./ch07.html",
  "./ch08.html",
  "./wrong-practice.html",
  "./wrong-summary.html",
  "./weakness-map.html",
  "./decision-flow.html",
  "./syntax-basics.html",
  "./compile-runtime.html",
  "./datatypes.html",
  "./numeric-rules.html",
  "./var-scope.html",
  "./strings.html",
  "./text-blocks.html",
  "./equality.html",
  "./collections-arrays.html",
  "./operators-control.html",
  "./switch-expressions.html",
  "./loop-control.html",
  "./output-tracing.html",
  "./methods-constructors.html",
  "./object-oriented.html",
  "./record-classes.html",
  "./modifiers-access.html",
  "./sealed-types.html",
  "./oop-relations.html",
  "./inheritance-interface.html",
  "./polymorphism-cast.html",
  "./instanceof-patterns.html",
  "./exceptions.html",
  "./cheatsheet.html",
  "./exam-traps.html",
  "./method-list.html",
  "./error-catalog.html",
  "./fine-points.html",
  "./mini-drills.html",
  "./glossary.html",
  "./java-qa-review.html",
  "./qa-switch-statement-expression.html",
  "./qa-java-commands.html",
  "./qa-array-declaration-initialization.html",
  "./qa-variable-shadowing.html",
  "./qa-field-default-values.html",
  "./qa-record-null.html",
  "./qa-interface-vs-inheritance.html",
  "./qa-exception-processing.html",
  "./qa-if-else-scope.html",
  "./qa-null-string-display.html",
  "./qa-record-constructors.html",
  "./qa-inheritance-type-members.html",
  "./qa-overload-generics.html",
  "./qa-set-methods.html",
  "./qa-multidimensional-array-null.html",
  "./qa-string-vs-stringbuilder.html",
  "./qa-array-casting.html",
  "./qa-char-arithmetic.html",
  "./qa-compile-class-source-launch.html",
  "./qa-raw-arraylist-and-var.html",
  "./qa-abstract-final-method.html",
  "./qa-default-method-conflict.html",
  "./qa-try-with-resources-flow.html",
  "./qa-declared-runtime-type-downcast.html",
  "./manifest.webmanifest",
  "./assets/css/styles.css",
  "./assets/css/pwa-articles.css",
  "./assets/js/app.js",
  "./assets/js/pwa.js",
  "./assets/js/qa-articles-archive-1.js",
  "./assets/js/qa-articles-archive-2.js",
  "./assets/js/qa-articles-archive-3.js",
  "./assets/js/qa-article-render.js",
  "./data/questions.js",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

  function absoluteUrl(path) {
    return new URL(path, rootUrl).href;
  }

  function imageUrls() {
    const data = window.JAVA_STUDY_DATA;
    if (!data || !data.questions) return [];
    const urls = [];
    Object.values(data.questions).forEach(questions => {
      (questions || []).forEach(question => {
        (question.images || []).forEach(image => {
          if (!image || !image.src) return;
          try {
            urls.push(new URL(image.src, rootUrl).href);
          } catch (_) {}
        });
      });
    });
    return Array.from(new Set(urls));
  }

  function updateConnectionState() {
    const offline = !navigator.onLine;
    document.documentElement.classList.toggle("is-offline", offline);
    const status = document.getElementById("offlineStatus");
    if (!status) return;
    status.classList.toggle("is-offline", offline);
    if (offline) {
      status.classList.remove("is-ready");
      status.textContent = "オフラインで利用中（クラウド同期は停止）";
    } else if (status.dataset.cacheReady === "1") {
      status.classList.add("is-ready");
      status.textContent = "オフライン利用の準備完了";
    } else {
      status.classList.remove("is-ready");
      status.textContent = "オフライン用データを準備しています";
    }
  }

  function setCacheStatus(result) {
    const status = document.getElementById("offlineStatus");
    if (!status || !navigator.onLine) return;
    const failed = Number(result && result.failed || 0);
    status.dataset.cacheReady = "1";
    status.classList.add("is-ready");
    status.classList.remove("is-offline");
    status.textContent = failed
      ? "主要データの準備完了（一部はオンライン時に取得）"
      : "オフライン利用の準備完了";
  }

  async function requestPersistentStorage() {
    if (!navigator.storage || typeof navigator.storage.persist !== "function") return;
    try {
      const already = typeof navigator.storage.persisted === "function"
        ? await navigator.storage.persisted()
        : false;
      if (!already) await navigator.storage.persist();
    } catch (_) {}
  }

  async function cacheOfflineFiles(registration) {
    const worker = registration.active || registration.waiting || registration.installing;
    if (!worker) return;
    const urls = Array.from(new Set([
      ...staticPaths.map(absoluteUrl),
      ...imageUrls()
    ]));
    const channel = new MessageChannel();
    const reply = new Promise(resolve => {
      const timer = window.setTimeout(() => resolve({ failed: 1 }), 45000);
      channel.port1.onmessage = event => {
        window.clearTimeout(timer);
        resolve(event.data || {});
      };
    });
    worker.postMessage({ type: "CACHE_URLS", urls }, [channel.port2]);
    setCacheStatus(await reply);
  }

  async function registerPwa() {
    const status = document.getElementById("offlineStatus");
    if (!("serviceWorker" in navigator)) {
      if (status) status.textContent = "このブラウザはオフライン保存に対応していません";
      return;
    }
    try {
      const registration = await navigator.serviceWorker.register(
        absoluteUrl("./service-worker.js"),
        { scope: absoluteUrl("./") }
      );
      const ready = await navigator.serviceWorker.ready;
      await Promise.all([
        cacheOfflineFiles(ready || registration),
        requestPersistentStorage()
      ]);
    } catch (error) {
      console.warn("PWA setup failed", error);
      if (status && navigator.onLine) {
        status.textContent = "オフライン用データを準備できませんでした";
      }
    }
  }

  document.addEventListener("click", event => {
    if (navigator.onLine) return;
    const target = event.target.closest(
      "[data-cloud-signin], [data-cloud-push], [data-cloud-pull-merge], [data-cloud-pull-replace]"
    );
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const status = document.getElementById("offlineStatus");
    if (status) status.textContent = "オフライン中はクラウド同期を利用できません";
  }, true);

  window.addEventListener("online", updateConnectionState);
  window.addEventListener("offline", updateConnectionState);
  document.addEventListener("DOMContentLoaded", () => {
    updateConnectionState();
    registerPwa();
  });
})();
