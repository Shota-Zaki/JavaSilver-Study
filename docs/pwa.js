(function () {
  const scriptUrl = document.currentScript && document.currentScript.src ? document.currentScript.src : '';

  function ensureDefaultIcon() {
    if (document.querySelector('link[rel="icon"], link[rel="shortcut icon"], link[rel~="icon"]')) return;
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%228%22 fill=%22%232563eb%22/%3E%3Cpath d=%22M9 21h14v3H9zM11 8h10v10H11z%22 fill=%22white%22/%3E%3C/svg%3E';
    document.head.appendChild(link);
  }

  ensureDefaultIcon();

  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  window.addEventListener('load', () => {
    const baseUrl = scriptUrl || new URL('pwa.js', location.href).href;
    const swUrl = new URL('sw.js', baseUrl).href;
    navigator.serviceWorker.register(swUrl).catch(() => {});
  });
})();
