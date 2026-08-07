(() => {
  "use strict";
  const filename = (location.pathname.split("/").pop() || "").toLowerCase();
  const root = document.getElementById("qaArticleRoot");

  function render(article) {
    if (!root) return;
    if (!article) {
      document.title = "記事が見つかりません - Java Silver Study";
      root.innerHTML = `<section class="empty-state"><h1>記事が見つかりません</h1><p>学習記事トップから記事を選び直してください。</p><a class="btn primary" href="reference.html#past-questions">質問別記事一覧へ戻る</a></section>`;
      return;
    }
    document.title = article.title;
    root.innerHTML = article.html;
  }

  async function readArchive() {
    if (!Array.isArray(window.JAVA_QA_ARCHIVE_PARTS) || window.JAVA_QA_ARCHIVE_PARTS.length !== 3 || typeof DecompressionStream !== "function") {
      throw new Error("記事データを展開できません。");
    }
    const binary = atob(window.JAVA_QA_ARCHIVE_PARTS.join(""));
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream).json();
  }

  if (!/^qa-[a-z0-9-]+\.html$/.test(filename)) {
    render(null);
    return;
  }

  readArchive()
    .then(articles => render(articles[filename]))
    .catch(error => {
      console.warn("Question article load failed", error);
      render(null);
    });
})();
