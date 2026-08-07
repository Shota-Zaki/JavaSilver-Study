const CACHE_PREFIX = "java-study-pwa-";
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const CORE_URLS = [
  "./index.html",
  "./reference.html",
  "./assets/css/styles.css",
  "./assets/css/pwa-articles.css",
  "./assets/js/app.js",
  "./assets/js/pwa.js",
  "./data/questions.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

function normalizeUrl(value) {
  return new URL(value, self.registration.scope).href;
}

function allowedUrl(value) {
  try {
    const url = new URL(value, self.registration.scope);
    if (url.origin === self.location.origin) return true;
    return url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/");
  } catch (_) {
    return false;
  }
}

async function cacheOne(cache, value) {
  const url = normalizeUrl(value);
  if (!allowedUrl(url)) return false;
  try {
    const response = await fetch(url, { cache: "reload", credentials: "same-origin" });
    if (!response || (!response.ok && response.type !== "opaque")) return false;
    await cache.put(url, response.clone());
    return true;
  } catch (_) {
    return false;
  }
}

async function cacheUrls(values) {
  const cache = await caches.open(CACHE_NAME);
  const urls = Array.from(new Set((values || []).filter(allowedUrl)));
  let cached = 0;
  let failed = 0;
  const concurrency = 6;
  let cursor = 0;

  async function worker() {
    while (cursor < urls.length) {
      const index = cursor++;
      if (await cacheOne(cache, urls[index])) cached += 1;
      else failed += 1;
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, urls.length || 1) }, worker));
  return { cached, failed, total: urls.length };
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    await cacheUrls(CORE_URLS);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names
        .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map(name => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (!event.data || event.data.type !== "CACHE_URLS") return;
  event.waitUntil((async () => {
    const result = await cacheUrls(event.data.urls || []);
    if (event.ports && event.ports[0]) event.ports[0].postMessage(result);
  })());
});

async function cached(request) {
  return caches.match(request, { ignoreSearch: true });
}

async function networkWithTimeout(request, timeoutMs = 4500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(request, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function navigationResponse(request) {
  try {
    const response = await networkWithTimeout(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await cached(request))
      || (await caches.match(normalizeUrl("./index.html"), { ignoreSearch: true }))
      || Response.error();
  }
}

async function sameOriginResponse(request) {
  const hit = await cached(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

async function firebaseStaticResponse(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await cached(request)) || Response.error();
  }
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (request.mode === "navigate") {
    event.respondWith(navigationResponse(request));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(sameOriginResponse(request));
    return;
  }

  if (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) {
    event.respondWith(firebaseStaticResponse(request));
  }
});
