(function () {

  const PAGE_PATHS = {"index.html":"index.html","about.html":"site/about.html","contact.html":"site/contact.html","privacy.html":"site/privacy.html","terms.html":"site/terms.html","java-basic.html":"courses/java-basic/index.html","java-basic-01.html":"courses/java-basic/lessons/01.html","java-basic-02.html":"courses/java-basic/lessons/02.html","java-basic-03.html":"courses/java-basic/lessons/03.html","java-basic-04.html":"courses/java-basic/lessons/04.html","java-basic-05.html":"courses/java-basic/lessons/05.html","java-basic-06.html":"courses/java-basic/lessons/06.html","java-basic-07.html":"courses/java-basic/lessons/07.html","java-basic-08.html":"courses/java-basic/lessons/08.html","java-basic-09.html":"courses/java-basic/lessons/09.html","java-basic-10.html":"courses/java-basic/lessons/10.html","java-basic-11.html":"courses/java-basic/lessons/11.html","java-basic-12.html":"courses/java-basic/lessons/12.html","java-basic-13.html":"courses/java-basic/lessons/13.html","java-basic-14.html":"courses/java-basic/lessons/14.html","java-basic-15.html":"courses/java-basic/lessons/15.html","java-basic-16.html":"courses/java-basic/lessons/16.html","java-basic-17.html":"courses/java-basic/lessons/17.html","java-basic-18.html":"courses/java-basic/lessons/18.html","java-basic-19.html":"courses/java-basic/lessons/19.html","java-basic-20.html":"courses/java-basic/lessons/20.html","bronze.html":"courses/bronze/index.html","bronze-01.html":"courses/java-basic/lessons/01.html","bronze-02.html":"courses/java-basic/lessons/02.html","bronze-03.html":"courses/java-basic/lessons/03.html","bronze-04.html":"courses/java-basic/lessons/04.html","bronze-05.html":"courses/java-basic/lessons/05.html","bronze-06.html":"courses/java-basic/lessons/06.html","bronze-practice-1.html":"courses/bronze/practice/basic-syntax.html","bronze-practice-2.html":"courses/bronze/practice/oop-basic.html","bronze-exam-a.html":"courses/bronze/exams/a.html","java11silver.html":"courses/java11-silver/index.html","java11silver-01.html":"courses/java11-silver/index.html","java11silver-02.html":"courses/java11-silver/index.html","java11silver-03.html":"courses/java11-silver/index.html","java11silver-04.html":"courses/java11-silver/index.html","java11silver-05.html":"courses/java11-silver/index.html","java11silver-06.html":"courses/java11-silver/index.html","java11silver-07.html":"courses/java11-silver/index.html","java11silver-08.html":"courses/java11-silver/index.html","java11-practice-1.html":"courses/java11-silver/practice/basic-syntax.html","java11-practice-2.html":"courses/java11-silver/practice/oop.html","java11-practice-3.html":"courses/java11-silver/practice/final-check.html","java11-exam-a.html":"courses/java11-silver/exams/a.html","java11-exam-b.html":"courses/java11-silver/exams/b.html","java17silver.html":"courses/java17-silver/index.html","practice-a.html":"courses/java17-silver/index.html","practice-b.html":"courses/java17-silver/index.html","practice-l.html":"courses/java17-silver/index.html","practice-c.html":"courses/java17-silver/index.html","practice-d.html":"courses/java17-silver/index.html","practice-e.html":"courses/java17-silver/index.html","practice-f.html":"courses/java17-silver/index.html","practice-m.html":"courses/java17-silver/index.html","practice-i.html":"app/random.html","practice-g.html":"courses/java17-silver/exams/a.html","practice-h.html":"courses/java17-silver/exams/b.html","practice-j.html":"courses/java17-silver/exams/c.html","practice-k.html":"courses/java17-silver/exams/d.html","exam.html":"courses/java17-silver/index.html","exam-aftercare.html":"app/dashboard.html","exam-quality.html":"courses/java17-silver/index.html","gold.html":"courses/gold/index.html","gold-01.html":"courses/gold/index.html","gold-02.html":"courses/gold/index.html","gold-03.html":"courses/gold/index.html","gold-04.html":"courses/gold/index.html","gold-05.html":"courses/gold/index.html","gold-06.html":"courses/gold/index.html","gold-07.html":"courses/gold/index.html","gold-08.html":"courses/gold/index.html","gold-practice-1.html":"courses/gold17/practice/record-sealed-final.html","gold-practice-2.html":"courses/gold17/practice/switch-pattern-final.html","gold-practice-3.html":"courses/gold17/practice/stream-api-final.html","gold-practice-4.html":"courses/gold/index.html","gold-exam-a.html":"courses/gold17/exams/a.html","gold-exam-b.html":"courses/gold17/exams/b.html","articles.html":"articles/index.html","article-types.html":"articles/types/index.html","article-string.html":"articles/string/index.html","article-reference.html":"articles/reference/index.html","article-pitfalls.html":"articles/pitfalls/index.html","article-operators-control.html":"articles/operators-control/index.html","article-class-design.html":"articles/class-design/index.html","article-inheritance.html":"articles/inheritance/index.html","article-exception.html":"articles/exception/index.html","article-compile-errors.html":"articles/compile-errors/index.html","methods.html":"articles/methods/index.html","glossary.html":"articles/glossary/index.html","cheatsheet.html":"articles/cheatsheet/index.html","before-exam.html":"articles/before-exam/index.html","mistake-patterns.html":"articles/mistake-patterns/index.html","dashboard.html":"app/dashboard.html","mode.html":"app/random.html","quality-map.html":"app/dashboard.html","search.html":"app/dashboard.html","random.html":"app/random.html","notes.html":"app/dashboard.html","review-wrong.html":"app/review/wrong.html","review-marked.html":"app/review/marked.html","review-weak.html":"app/review/weak.html","review-due.html":"app/review/due.html","tag-index.html":"app/dashboard.html","tag-array.html":"app/dashboard.html","tag-basic.html":"app/dashboard.html","tag-class.html":"app/dashboard.html","tag-compile.html":"app/dashboard.html","tag-control.html":"app/dashboard.html","tag-exception.html":"app/dashboard.html","tag-inheritance.html":"app/dashboard.html","tag-operator.html":"app/dashboard.html","tag-output.html":"app/dashboard.html","tag-reference.html":"app/dashboard.html","tag-runtime.html":"app/dashboard.html","tag-string.html":"app/dashboard.html","tag-type.html":"app/dashboard.html","java-basic-21.html":"courses/java-basic/lessons/21.html","java-basic-22.html":"courses/java-basic/lessons/22.html","java-basic-23.html":"courses/java-basic/lessons/23.html","java-basic-24.html":"courses/java-basic/lessons/24.html","foundation.html":"courses/java-basic/practice/foundation.html","syntax.html":"courses/java-basic/practice/syntax.html","control-array.html":"courses/bronze/practice/control-array.html","final-check.html":"courses/bronze/index.html","class-method.html":"courses/bronze/practice/class-method.html","pitfall-check.html":"courses/bronze/index.html","api-string.html":"courses/java11-silver/practice/api-string.html","exception-inheritance.html":"courses/java11-silver/practice/exception-inheritance.html","package-command.html":"courses/java11-silver/practice/package-command.html","compile-check.html":"courses/java11-silver/practice/compile-check.html","output-mix.html":"courses/java11-silver/practice/output-runtime-extra.html","java11-practice-9.html":"courses/java11-silver/practice/api-boundary-extra.html","java11-practice-10.html":"courses/java11-silver/practice/inheritance-exception-extra.html","java11-practice-11.html":"courses/java11-silver/practice/compile-command-extra.html","java11-practice-12.html":"courses/java11-silver/practice/output-runtime-extra.html"};
  const EXTRA_PAGE_PATHS_HEADER_CARDS = {"control-array.html": "courses/bronze/practice/control-array.html", "final-check.html": "courses/bronze/index.html", "class-method.html": "courses/bronze/practice/class-method.html", "pitfall-check.html": "courses/bronze/index.html", "api-string.html": "courses/java11-silver/practice/api-string.html", "exception-inheritance.html": "courses/java11-silver/practice/exception-inheritance.html", "package-command.html": "courses/java11-silver/practice/package-command.html", "compile-check.html": "courses/java11-silver/practice/compile-check.html", "output-mix.html": "courses/java11-silver/practice/output-runtime-extra.html", "stream-advanced.html": "courses/gold17/practice/stream-api-final.html", "concurrency-nio.html": "courses/gold11/practice/concurrency-nio.html", "lambda-optional.html": "courses/gold11/practice/lambda-optional.html", "stream-collectors.html": "courses/gold17/practice/stream-api-final.html", "nio-datetime.html": "courses/gold11/practice/nio-datetime.html", "gold-api-mix.html": "courses/gold11/practice/module-final.html", "foundation.html": "courses/java-basic/practice/foundation.html", "syntax.html": "courses/java-basic/practice/syntax.html"};
  Object.assign(PAGE_PATHS, EXTRA_PAGE_PATHS_HEADER_CARDS);
  const JAVA11_GOLD_MORE_PAGE_PATHS = {"java11-practice-9.html": "courses/java11-silver/practice/api-boundary-extra.html", "java11-practice-10.html": "courses/java11-silver/practice/inheritance-exception-extra.html", "java11-practice-11.html": "courses/java11-silver/practice/compile-command-extra.html", "java11-practice-12.html": "courses/java11-silver/practice/output-runtime-extra.html", "gold-practice-11.html": "courses/gold17/practice/stream-api-final.html", "gold-practice-12.html": "courses/gold17/practice/stream-api-final.html", "gold-practice-13.html": "courses/gold11/practice/generics-functional-extra.html", "gold-practice-14.html": "courses/gold11/practice/nio-concurrency-module-extra.html"};
  Object.assign(PAGE_PATHS, JAVA11_GOLD_MORE_PAGE_PATHS);
  const EXTRA_ADDED_PAGE_PATHS = {"java11-practice-13.html":"courses/java11-silver/practice/api-boundary-extra.html","java11-exam-c.html":"courses/java11-silver/exams/c.html","gold11-practice-15.html":"courses/gold11/practice/stream-collectors.html","gold11-exam-c.html":"courses/gold11/exams/c.html","gold17-practice-15.html":"courses/gold17/practice/record-sealed-final.html","gold17-exam-c.html":"courses/gold17/exams/c.html"};
  Object.assign(PAGE_PATHS, EXTRA_ADDED_PAGE_PATHS);
  const GOLD_SPLIT_PAGE_PATHS = {"gold11.html":"courses/gold11/index.html","gold17.html":"courses/gold17/index.html","gold-hub.html":"courses/gold/index.html"};
  Object.assign(PAGE_PATHS, GOLD_SPLIT_PAGE_PATHS);
  const ADDED_MOCK_PAGE_PATHS = {"bronze-exam-b.html":"courses/bronze/exams/b.html","java11-exam-d.html":"courses/java11-silver/exams/d.html","gold11-exam-d.html":"courses/gold11/exams/d.html","gold17-exam-d.html":"courses/gold17/exams/d.html"};
  Object.assign(PAGE_PATHS, ADDED_MOCK_PAGE_PATHS);
  const EVEN_UNITS_PAGE_PATHS = {"java17-practice-language-additions.html":"courses/java17-silver/index.html","java17-record.html":"courses/java17-silver/units/record.html","java17-sealed.html":"courses/java17-silver/units/sealed.html","java17-switch-yield.html":"courses/java17-silver/units/switch-yield.html","java17-pattern-matching.html":"courses/java17-silver/units/pattern-matching.html","java17-comprehensive.html":"courses/java17-silver/index.html","java11-practice-14.html":"courses/java11-silver/practice/inheritance-exception-extra.html","gold11-practice-16.html":"courses/gold11/practice/nio-concurrency-module-extra.html","gold17-practice-16.html":"courses/gold17/index.html"};
  Object.assign(PAGE_PATHS, EVEN_UNITS_PAGE_PATHS);
  Object.assign(PAGE_PATHS, {"silver.html":"courses/silver/index.html","java11silver.html":"courses/java11-silver/index.html","java17silver.html":"courses/java17-silver/index.html","exam.html":"courses/java17-silver/index.html","review-missed-units.html":"app/review/missed-units.html"});

  function pageHref(page) {
    if (!page) return (window.APP_ROOT || "") + "index.html";
    if (/^(https?:|mailto:|#|\/\/)/.test(page)) return page;
    const mapped = PAGE_PATHS[page] || page;
    return (window.APP_ROOT || "") + mapped;
  }
  function normalizeCertificationKey(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    const compact = raw.toLowerCase().replace(/[\s_\-]/g, "");
    if (["javabasic", "basic", "foundation"].includes(compact)) return "javaBasic";
    if (["bronze", "javabronze"].includes(compact)) return "bronze";
    if (["java11", "silver11", "java11silver", "silverse11", "11", "11silver"].includes(compact)) return "silver11";
    if (["java17", "silver17", "java17silver", "silverse17", "17", "17silver"].includes(compact)) return "silver17";
    if (["gold11", "java11gold", "goldse11", "11gold"].includes(compact)) return "gold11";
    if (["gold17", "java17gold", "goldse17", "17gold"].includes(compact)) return "gold17";
    if (compact === "silver" || compact === "javasilver") return "silver";
    if (compact === "gold" || compact === "javagold") return "gold";
    return raw;
  }
  function certificationKey(q) {
    const id = String(q?.id || "");
    const uid = String(unitOfQuestion(id) || "");
    const unit = unitById(uid) || {};
    const level = normalizeCertificationKey(q?.level || q?.course || unit.course || "");
    if (!id && !uid && !level) return "javaBasic";
    if (level === "bronze" || id.startsWith("bronze-") || uid.startsWith("bronze-")) return "bronze";
    if (level === "silver11" || id.startsWith("java11-") || uid.startsWith("java11-")) return "silver11";
    if (level === "silver17" || id.startsWith("silver17-") || uid.startsWith("silver17-") || uid.startsWith("unit")) return "silver17";
    if (level === "gold17" || id.startsWith("gold17-") || uid.startsWith("gold17-")) return "gold17";
    if (level === "gold11" || id.startsWith("gold11-") || uid.startsWith("gold11-")) return "gold11";
    if (level === "javaBasic" || level === "basic" || id.startsWith("basic-") || uid.startsWith("basic-")) return "javaBasic";
    return "javaBasic";
  }
  function certificationMatches(q, filterValue) {
    const filter = normalizeCertificationKey(filterValue);
    if (!filter) return true;
    const key = certificationKey(q);
    if (filter === "silver") return key === "silver11" || key === "silver17";
    if (filter === "gold") return key === "gold11" || key === "gold17";
    return key === filter;
  }
  function certificationLabel(value) {
    const key = normalizeCertificationKey(value) || value;
    return ({
      javaBasic: "Java基礎",
      bronze: "Java Bronze",
      silver: "Java Silver",
      silver11: "Java Silver 11",
      silver17: "Java Silver 17",
      gold: "Java Gold",
      gold11: "Java Gold 11",
      gold17: "Java Gold 17"
    })[key] || value || "未分類";
  }
  function certificationSearchHref(value) {
    return pageHref('search.html') + '?level=' + encodeURIComponent(normalizeCertificationKey(value) || value);
  }
  function certificationRandomHref(value) {
    return pageHref('random.html') + '?level=' + encodeURIComponent(normalizeCertificationKey(value) || value) + '&start=1#quiz-card';
  }
  function tagHref(tag) { return (window.APP_ROOT || "") + "app/dashboard.html"; }
  function startHref(href) {
    if (!href || /^(https?:|mailto:|#|\/\/)/.test(href)) return href;
    const [baseAndQuery, hashPart] = String(href).split('#');
    const [base, query = ''] = baseAndQuery.split('?');
    const params = new URLSearchParams(query);
    params.set('start', '1');
    return `${base}?${params.toString()}#quiz-card`;
  }
  function missedUnitHref(tag) { return pageHref("review-missed-units.html") + (tag ? "?tag=" + encodeURIComponent(tag) : ""); }
  const DATA = window.JAVA_STUDY_DATA;
  // CSS.escape fallback for older/local browsers.
  if (!window.CSS) window.CSS = {};
  if (typeof window.CSS.escape !== "function") {
    window.CSS.escape = function(value) { return String(value).replace(/[^a-zA-Z0-9_\-]/g, "\\$&"); };
  }
  const unitId = window.UNIT_ID || null;
  const storageKey = "java-practice-lab-progress-v2";
  const examStorageKey = "java-practice-lab-exam-v1";
  const viewStorageKey = "java-practice-lab-view-v1";
  const reviewStorageKey = "java-practice-lab-review-v1";
  const examHistoryStorageKey = "java-practice-lab-exam-history-v1";
  const settingsStorageKey = "java-practice-lab-settings-v1";
  const notesStorageKey = "java-practice-lab-notes-v1";
  const mistakeReasonStorageKey = "java-practice-lab-mistake-reasons-v1";
  const missedUnitStorageKey = "java-practice-lab-missed-units-v1";
  let examTimerId = null;
  const tagFilter = window.TAG_FILTER || null;
  const reviewMode = window.REVIEW_MODE || null;
  const randomMode = !!window.RANDOM_MODE;
  const urlParams = new URLSearchParams(location.search);
  const reviewUnitFilter = urlParams.get("unit") || null;
  const reviewDifficultyFilter = urlParams.get("difficulty") || null;
  const reviewCourseFilter = urlParams.get("course") || null;
  const randomSize = Math.min(Math.max(Number(urlParams.get("size") || 20), 5), 60);
  const randomDifficulty = urlParams.get("difficulty") || null;
  const randomLevel = normalizeCertificationKey(urlParams.get("level") || urlParams.get("cert") || "") || null;
  const focusQuestionId = urlParams.get("q") || null;
  const viewKey = unitId || (tagFilter ? `tag:${tagFilter}` : reviewMode ? `review:${reviewMode}:${reviewUnitFilter || "all"}` : randomMode ? `random:${randomLevel || randomDifficulty || "all"}:${randomSize}` : "global");

  const RETIRED_UNIT_IDS = new Set();
  function allQuestions() {
    return Object.entries(DATA?.questions || {}).filter(([uid]) => !RETIRED_UNIT_IDS.has(uid)).flatMap(([, questions]) => questions || []);
  }
  function isExamUnitId(id) {
    return (DATA?.units || []).some(u => u.id === id && u.mode === "exam");
  }
  function practiceQuestions() {
    return Object.entries(DATA?.questions || {})
      .filter(([uid]) => !isExamUnitId(uid) && !RETIRED_UNIT_IDS.has(uid))
      .flatMap(([, qs]) => qs || []);
  }
  function markedQuestionIdsFor(questions) {
    const allow = new Set((questions || []).map(q => q.id));
    return Array.from(markedQuestionIds()).filter(id => allow.has(id));
  }
  function unitOfQuestion(qid) {
    return Object.keys(DATA.questions || {}).find(uid => (DATA.questions[uid] || []).some(q => q.id === qid));
  }
  function tagTitle(tag) {
    return DATA.tagDefinitions?.[tag]?.title || tag;
  }
  function tagDescription(tag) {
    return DATA.tagDefinitions?.[tag]?.description || "指定タグの問題だけを集めます。";
  }
  function scrollToPracticeCard(target) {
    const element = target || document.querySelector("[data-question-id]") || document.getElementById("questionRoot") || document.getElementById("quiz-card");
    if (!element) return;
    const run = () => {
      const header = document.querySelector(".site-header");
      const offset = (header?.getBoundingClientRect?.().height || 0) + 16;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => requestAnimationFrame(run));
    else setTimeout(run, 0);
  }
  function shouldScrollToPracticeOnLoad() {
    return Boolean(focusQuestionId) || urlParams.has("start") || ["#quiz-card", "#practiceStart"].includes(location.hash);
  }
  function consumeStartParamIfNeeded() {
    if (!urlParams.has("start")) return false;
    urlParams.delete("start");
    if (history?.replaceState) {
      const query = urlParams.toString();
      const nextUrl = `${location.pathname}${query ? `?${query}` : ""}${location.hash || ""}`;
      history.replaceState(null, "", nextUrl);
    }
    return true;
  }

  const UNIT_ARTICLE_LINKS = {
  "basic-p1": [
    "java-command",
    "memory-model-beginner",
    "java-learning-debug-checklist"
  ],
  "basic-p2": [
    "types",
    "string",
    "java-silver-null"
  ],
  "bronze-p1": [
    "bronze-precision-training",
    "java-bronze-study-map",
    "bronze-mistakes-deep"
  ],
  "bronze-p2": [
    "java-bronze-object-basic",
    "bronze-array-string-basic",
    "bronze-mistakes-deep"
  ],
  "bronze-p3": [
    "bronze-if-loop-reading",
    "bronze-array-string-basic",
    "operators-control"
  ],
  "bronze-p5": [
    "java-bronze-object-basic",
    "class-design"
  ],
  "bronze-exam-a": [
    "exam-strategy",
    "java-exam-review-method",
    "exam-review-deep"
  ],
  "java11-p1": [
    "types",
    "java-silver-type-promotion"
  ],
  "java11-p2": [
    "inheritance",
    "inheritance",
    "class-design"
  ],
  "java11-p4": [
    "string",
    "api-reading",
    "string"
  ],
  "java11-p5": [
    "exception",
    "java-silver-access-modifier",
    "java-silver-default-method"
  ],
  "java11-p6": [
    "java-command",
  ],
  "java11-p7": [
    "compile-errors",
    "java-silver-compile-vs-runtime",
    "types"
  ],
  "java11-p9": [
    "string",
    "api-reading",
    "string"
  ],
  "java11-p10": [
    "inheritance",
    "exception",
    "class-design-order-cases"
  ],
  "java11-p11": [
    "java-command",
    "compile-errors",
    "compile-errors"
  ],
  "java11-p12": [
    "silver-output-problems",
    "java-silver-type-promotion",
    "string"
  ],
  "java11-exam-a": [
    "exam-strategy",
    "java-exam-review-method",
  ],
  "java11-exam-b": [
    "exam-strategy",
    "exam-review-deep",
    "before-exam"
  ],
  "unit01": [
    "java-command",
    "java-silver-code-reading",
    "cheatsheet"
  ],
  "unit02": [
    "types",
    "java-silver-type-promotion",
    "java-silver-array-default"
  ],
  "unit12": [
    "reference",
    "string",
    "java-api-traps"
  ],
  "unit03": [
    "operators-control",
    "java-silver-switch",
    "java17-silver-switch-expression-yield"
  ],
  "unit04": [
    "class-design",
    "java17-silver-record-details",
    "class-design"
  ],
  "unit05": [
    "inheritance",
    "java17-silver-sealed-permits",
    "java-silver-default-method"
  ],
  "unit06": [
    "exception",
    "runtime-errors",
    "java-silver-compile-vs-runtime"
  ],
  "unit13": [
    "compile-errors",
    "java17-specific-precision"
  ],
  "unit09": [
    "pitfalls",
    "cheatsheet",
    "mistake-patterns"
  ],
  "unit07": [
    "exam-strategy",
    "java-exam-review-method",
    "before-exam"
  ],
  "unit08": [
    "exam-strategy",
    "exam-review-deep",
    "before-exam"
  ],
  "unit10": [
    "exam-strategy",
    "exam-review-deep",
    "weak-guides"
  ],
  "unit11": [
    "exam-strategy",
    "exam-review-deep",
    "study-plan"
  ],
  "gold-p1": [
    "java-gold-lambda-first",
    "java-gold-stream-deep",
    "types"
  ],
  "gold-p2": [
    "java-gold-generics-deep",
    "java-gold-generics-deep",
    "types"
  ],
  "gold-p3": [
    "java-gold-concurrency-basic",
    "java-gold-nio-path-files",
    "exception"
  ],
  "gold-p4": [
    "java-gold-module-info-check",
    "api-reading",
    "types"
  ],
  "gold-p5": [
    "java-gold-stream-deep",
    "java-gold-stream-deep",
    "java-gold-collector-first"
  ],
  "gold-p6": [
    "java-gold-concurrency-basic",
    "java-gold-nio-path-files",
    "java-gold-concurrency-basic"
  ],
  "gold-p7": [
    "java-gold-lambda-first",
    "java-gold-optional-first",
    "java-gold-optional-first"
  ],
  "gold-p8": [
    "java-gold-stream-deep",
    "java-gold-stream-deep",
    "java-gold-collector-first"
  ],
  "gold-p9": [
    "java-gold-nio-path-files",
    "java-gold-concurrency-basic"
  ],
  "gold-p10": [
    "api-reading",
    "types",
    "java-gold-module-info-check"
  ],
  "gold-p11": [
    "java-gold-stream-deep",
    "java-gold-optional-first",
    "java-gold-optional-first"
  ],
  "gold-p12": [
    "java-gold-collector-first",
    "java-gold-stream-deep",
    "api-reading"
  ],
  "gold-p13": [
    "java-gold-generics-deep",
    "java-gold-generics-deep",
    "java-gold-lambda-first"
  ],
  "gold-p14": [
    "java-gold-nio-path-files",
    "java-gold-concurrency-basic",
    "java-gold-module-info-check"
  ],
  "gold-exam-a": [
    "exam-strategy",
    "exam-review-deep",
    "api-reading"
  ],
  "gold-exam-b": [
    "exam-strategy",
    "exam-review-deep",
    "types"
  ]
};
  // Gold split linked article aliases
  Object.keys(UNIT_ARTICLE_LINKS).filter(k => k.startsWith("gold-")).forEach(k => {
    UNIT_ARTICLE_LINKS[k.replace("gold-", "gold11-")] = UNIT_ARTICLE_LINKS[k];
    UNIT_ARTICLE_LINKS[k.replace("gold-", "gold17-")] = UNIT_ARTICLE_LINKS[k];
  });
  const ARTICLE_TITLE_MAP = {
  "api-reading": "Java API仕様の読み方",
  "before-exam": "直前チェックモード",
  "bronze-array-string-basic": "配列とString基礎",
  "bronze-if-loop-reading": "if文とループを読む",
  "bronze-mistakes-deep": "失点しやすい基礎ミス",
  "bronze-precision-training": "基本問題を大まかに解かない",
  "cheatsheet": "解き方チートシート",
  "class-design": "クラス設計・static・recordの要点",
  "compile-errors": "コンパイルエラーになる原因まとめ",
  "course-selection-bronze-silver-gold": "Bronze・Silver・Goldの違い",
  "exam-review-deep": "模試後レビューの精度を上げる方法",
  "exam-strategy": "実践模試の解き方",
  "exception": "try-catch-finallyと例外処理完全整理",
  "glossary": "単語集 詳細版",
  "inheritance": "継承・オーバーライド・フィールド隠蔽",
  "java-api-traps": "Java Silver頻出APIの注意点まとめ",
  "java-bronze-object-basic": "オブジェクト基礎",
  "java-bronze-study-map": "学習順序",
  "java-command": "javac・javaコマンドで詰まる原因",
  "java-debug-printing-tips": "Javaのデバッグ出力で判定するポイント",
  "java-exam-review-method": "模試後の復習方法",
  "api-reading": "API判定ツリー：型・実行タイミング・戻り値で読む",
  "java-gold-collector-first": "Collectors完全整理",
  "java-gold-concurrency-basic": "並行処理 / Executor / Future完全整理",
  "exception": "try-with-resourcesと抑制された例外",
  "java-gold-generics-deep": "ジェネリクスとワイルドカード",
  "java-gold-generics-deep": "ジェネリクス完全整理",
  "java-gold-generics-deep": "ワイルドカード",
  "java-gold-lambda-first": "ラムダ式と関数型インタフェース完全整理",
  "java-gold-module-info-check": "module-info.java / Javaモジュール完全整理",
  "java-gold-nio-path-files": "PathとFiles",
  "java-gold-optional-first": "Optional完全整理",
  "java-gold-optional-first": "OptionalとflatMap",
  "java-gold-stream-deep": "Stream APIを丁寧に読む",
  "java-gold-stream-deep": "Stream API完全整理",
  "java-gold-stream-deep": "Collectors.groupingBy",
  "java-gold-stream-deep": "Streamパイプライン",
  "java-gold-concurrency-basic": "ExecutorService注意点",
  "types": "型の流れを読む",
  "java-learning-debug-checklist": "Javaエラー調査チェックリスト",
  "java-learning-roadmap-after-silver": "Silver合格後に何を学ぶべきか",
  "java-silver-access-modifier": "アクセス修飾子まとめ",
  "java-silver-array-covariance": "配列の共変とArrayStoreException",
  "java-silver-array-default": "配列デフォルト値とnull",
  "string": "配列とArrayListの違いを整理",
  "string": "ArrayList.removeで間違える理由",
  "java-silver-cast-instanceof": "キャストとinstanceofの読み方",
  "java-silver-code-reading": "コード読解で落ちない読み方",
  "java-silver-compile-vs-runtime": "コンパイルエラーと実行時例外の分け方",
  "class-design": "コンストラクタで落ちるパターン",
  "class-design-order-cases": "コンストラクタ呼び出し順の頻出パターン",
  "java-silver-default-method": "defaultメソッド競合の整理",
  "compile-errors": "エラーメッセージの読み方",
  "inheritance": "finalの頻出ルール",
  "inheritance": "interfaceの変数が暗黙にpublic static finalになる理由",
  "inheritance": "interface defaultメソッドの衝突パターン",
  "types": "ローカル変数で間違える理由",
  "java-silver-method-resolution": "メソッド呼び出し解決まとめ",
  "java-silver-null": "nullとNullPointerException",
  "java-silver-object-equality-cases": "同一性・同値性で落ちるパターン",
  "inheritance": "オーバーロード解決",
  "java-silver-sealed": "sealedクラス・interfaceの頻出ルール",
  "java-silver-sealed-record-review": "sealedとrecordのJava17 Silver頻出整理",
  "class-design": "staticで間違えるポイント",
  "string": "String不変性で落ちるパターン",
  "java-silver-switch": "switch文とswitch式",
  "java-silver-switch-yield-cases": "switch文・switch式・yieldの見分け方",
  "java-silver-type-promotion": "数値昇格で間違える理由",
  "api-reading": "頻出APIチェック",
  "exception": "例外処理とfinally",
  "inheritance": "ポリモーフィズムとフィールド隠蔽",
  "types": "頻出差分と注意点",
  "string": "StringBuilderとArrayList",
  "types": "varとString",
  "java17-silver-pattern-matching-instanceof": "instanceofパターン変数",
  "java17-silver-record-details": "recordを丁寧に整理",
  "java17-silver-sealed-permits": "sealedとpermits",
  "java17-silver-switch-expression-yield": "switch式とyield",
  "java17-specific-precision": "record・sealed・switch式の整理",
  "memory-model-beginner": "参照・メモリ・代入の基本",
  "methods": "頻出メソッドリスト 詳細版",
  "mistake-patterns": "誤答パターン集",
  "oop-compile-errors": "オブジェクト指向で起こるコンパイルエラー",
  "operators-control": "Javaの++iとi++、短絡評価、switch問題の解き方",
  "pitfalls": "頻出ひっかけパターン総まとめ",
  "reference": "参照の同一性と同値比較",
  "runtime-errors": "実行時例外まとめ",
  "silver-output-problems": "出力結果問題の読み方",
  "string": "StringとStringBuilder",
  "study-order": "Java学習のおすすめ順序",
  "study-plan": "復習ロードマップ",
  "types": "型変換・var・配列でコンパイルエラーになる例",
  "weak-guides": "弱点タグ別ミニ解説"
};
  function renderLinkedArticlesPanel(unit) {
    return;
  }


  const EXAM_REVIEW_ROUTES = [
    { keys: ["stream"], label: "Stream", article: "articles/java-gold-stream-deep/index.html", practice: "courses/gold11/practice/stream-advanced.html" },
    { keys: ["collector", "collectors"], label: "Collectors", article: "articles/java-gold-collector-first/index.html", practice: "courses/gold11/practice/stream-collectors.html" },
    { keys: ["optional"], label: "Optional", article: "articles/java-gold-optional-first/index.html", practice: "courses/gold11/practice/lambda-optional.html" },
    { keys: ["generics", "generic"], label: "ジェネリクス", article: "articles/java-gold-generics-deep/index.html", practice: "courses/gold11/practice/generics-collections.html" },
    { keys: ["lambda", "functional"], label: "ラムダ式", article: "articles/java-gold-lambda-first/index.html", practice: "courses/gold11/practice/lambda-stream.html" },
    { keys: ["nio", "path", "files"], label: "NIO / Files", article: "articles/java-gold-nio-path-files/index.html", practice: "courses/gold11/practice/nio-datetime.html" },
    { keys: ["concurrency", "thread", "future", "executor"], label: "並行処理", article: "articles/java-gold-concurrency-basic/index.html", practice: "courses/gold11/practice/concurrency-nio.html" },
    { keys: ["module"], label: "module-info", article: "articles/java-gold-module-info-check/index.html", practice: "courses/gold11/practice/module-final.html" },
    { keys: ["type", "var", "literal"], label: "型・変数", article: "articles/types/index.html", practice: "courses/java11-silver/practice/basic-syntax.html" },
    { keys: ["operator", "control"], label: "演算子・制御", article: "articles/operators-control/index.html", practice: "courses/java11-silver/practice/basic-syntax.html" },
    { keys: ["string", "array", "arraylist", "list"], label: "String / 配列", article: "articles/string/index.html", practice: "courses/java11-silver/practice/api-string.html" },
    { keys: ["class", "static", "constructor", "record"], label: "クラス・static", article: "articles/class-design/index.html", practice: "courses/java11-silver/practice/oop.html" },
    { keys: ["inheritance", "interface", "override", "sealed"], label: "継承・interface", article: "articles/inheritance/index.html", practice: "courses/java11-silver/practice/exception-inheritance.html" },
    { keys: ["exception", "runtime", "compile"], label: "例外・エラー", article: "articles/exception/index.html", practice: "courses/java11-silver/practice/compile-check.html" }
  ];
  function rootHref(path) {
    return (window.APP_ROOT || "") + path;
  }
  function examCategoryForQuestion(q) {
    const tags = (q.tags || []).map(t => String(t).toLowerCase());
    const titleText = `${q.title || ""} ${q.prompt || ""}`.toLowerCase();
    const route = EXAM_REVIEW_ROUTES.find(r => r.keys.some(k => tags.includes(k) || titleText.includes(k)));
    if (route) return route.label;
    if (tags.includes("output")) return "出力判定";
    if (tags.includes("api")) return "API仕様";
    return "総合読解";
  }
  function routeForExamCategory(label) {
    return EXAM_REVIEW_ROUTES.find(r => r.label === label) || null;
  }


  const GOLD_ROADMAP_ROUTES = [
    {
      stage: 1,
      label: "段階1 Generics / Collections",
      shortLabel: "段階1",
      keys: ["generics", "generic", "wildcard", "collection", "collections", "list", "set", "queue", "map", "pecs", "bounded", "type erasure", "型境界", "ワイルドカード", "コレクション"],
      article: "articles/java-gold-generics-deep/index.html",
      practice: "courses/gold11/practice/generics-collections.html",
      fallbackPractice: "courses/gold11/practice/generics-functional-extra.html",
      advice: "型境界、ワイルドカード、Collection/Mapの代入可否へ戻る"
    },
    {
      stage: 2,
      label: "段階2 Lambda / Optional",
      shortLabel: "段階2",
      keys: ["lambda", "functional", "predicate", "supplier", "consumer", "function", "method reference", "optional", "effectively final", "ラムダ", "関数型", "メソッド参照"],
      article: "articles/java-gold-lambda-first/index.html",
      practice: "courses/gold11/practice/lambda-stream.html",
      fallbackPractice: "courses/gold11/practice/lambda-optional.html",
      advice: "ターゲット型、メソッド参照、Optionalの戻り値へ戻る"
    },
    {
      stage: 3,
      label: "段階3 Stream / Collectors / Map",
      shortLabel: "段階3",
      keys: ["stream", "collector", "collectors", "flatmap", "reduce", "terminal", "intermediate", "groupingby", "partitioningby", "tomap", "merge", "compute", "mapmulti", "teeing", "ストリーム"],
      article: "articles/java-gold-stream-deep/index.html",
      practice: "courses/gold11/practice/stream-advanced.html",
      fallbackPractice: "courses/gold11/practice/stream-collectors.html",
      advice: "遅延評価、終端操作、Collectorの戻り値型へ戻る"
    },
    {
      stage: 4,
      label: "段階4 NIO / DateTime / I/O",
      shortLabel: "段階4",
      keys: ["nio", "path", "paths", "files", "file", "io", "reader", "writer", "serial", "datetime", "date", "time", "localdate", "localtime", "localdatetime", "period", "duration", "formatter", "locale", "resourcebundle"],
      article: "articles/java-gold-nio-path-files/index.html",
      practice: "courses/gold11/practice/nio-datetime.html",
      fallbackPractice: "courses/gold11/practice/io-concurrency.html",
      advice: "Path、Files、日時API、リソース管理へ戻る"
    },
    {
      stage: 5,
      label: "段階5 Concurrency / Module / JDBC / Migration",
      shortLabel: "段階5",
      keys: ["concurrency", "thread", "executor", "future", "callable", "runnable", "synchronized", "parallel", "module", "requires", "exports", "opens", "module-info", "modulepath", "module-path", "classpath", "jdbc", "sql", "resultset", "preparedstatement", "migration", "移行", "並行", "モジュール"],
      article: "articles/java-gold-concurrency-basic/index.html",
      practice: "courses/gold11/practice/nio-concurrency-module-extra.html",
      fallbackPractice: "courses/gold11/practice/nio-concurrency-module-extra.html",
      advice: "実行順、Future、module-info.java、移行時の境界へ戻る"
    },
    {
      stage: 6,
      label: "Gold共通の関連論点",
      shortLabel: "段階6",
      keys: ["api", "gold", "comprehensive", "mix", "reading", "output", "compile", "runtime", "総合", "複合"],
      article: "articles/java-gold-study-roadmap/index.html",
      practice: "courses/gold11/practice/module-final.html",
      fallbackPractice: "courses/gold11/practice/stream-collectors.html",
      advice: "複合問題を解き、弱点タグを3つ以内に絞る"
    },
    {
      stage: 7,
      label: "17追加 record / sealed / switch / instanceof / API更新",
      shortLabel: "17追加",
      keys: ["record", "sealed", "non-sealed", "permits", "switch", "yield", "instanceof", "pattern", "text block", "textblock", "tolist", "mapmulti", "teeing", "compact constructor", "レコード", "シール", "パターン"],
      article: "articles/java17-specific-precision/index.html",
      practice: "courses/gold17/practice/record-sealed-final.html",
      fallbackPractice: "courses/gold17/practice/record-sealed-final.html",
      advice: "record、sealed、switch式、instanceof、API更新へ戻る"
    }
  ];
  function isGoldExamContext() {
    const u = currentUnit();
    const id = u?.id || unitId || "";
    const course = u?.course || "";
    return !!u && u.mode === "exam" && (course.startsWith("gold") || id.startsWith("gold"));
  }
  function goldRoadmapRouteForQuestion(q) {
    const tags = (q.tags || []).map(t => String(t).toLowerCase()).join(" ");
    const text = `${tags} ${q.title || ""} ${q.prompt || ""} ${q.explanation || ""}`.toLowerCase().replace(/[_.-]/g, " ");
    const route = GOLD_ROADMAP_ROUTES.find(r => r.keys.some(k => text.includes(String(k).toLowerCase().replace(/[_.-]/g, " "))));
    if (route) return route;
    return GOLD_ROADMAP_ROUTES.find(r => r.stage === 6);
  }
  function goldRoadmapStats(questions, progress) {
    const stats = GOLD_ROADMAP_ROUTES.map(route => ({ route, total: 0, correct: 0, wrong: 0, unanswered: 0 }));
    const byStage = Object.fromEntries(stats.map(s => [s.route.stage, s]));
    questions.forEach(q => {
      const route = goldRoadmapRouteForQuestion(q);
      if (!route || !byStage[route.stage]) return;
      const s = byStage[route.stage];
      const saved = progress[q.id];
      s.total++;
      if (saved?.isCorrect === true) s.correct++;
      else {
        s.wrong++;
        if (!(saved?.selected || []).length) s.unanswered++;
      }
    });
    return stats.filter(s => s.total > 0);
  }
  function goldPriorityRoute(questions, progress) {
    const stats = goldRoadmapStats(questions, progress)
      .filter(s => s.wrong > 0)
      .sort((a,b) => (a.correct/a.total) - (b.correct/b.total) || b.wrong - a.wrong || a.route.stage - b.route.stage);
    return stats[0] || null;
  }
  function goldRoadmapResultHtml(questions, progress) {
    if (!isGoldExamContext()) return "";
    const stats = goldRoadmapStats(questions, progress);
    if (!stats.length) return "";
    const priority = goldPriorityRoute(questions, progress);
    const routeRows = stats.map(s => {
      const rate = pct(s.correct, s.total);
      const status = s.wrong === 0 ? "通過" : (rate >= 80 ? "軽く戻る" : "戻る");
      return `<tr><td>${escapeHtml(s.route.shortLabel)}</td><td>${escapeHtml(s.route.label.replace(/^段階\d\s*/, ""))}</td><td>${s.correct}/${s.total}</td><td>${rate}%</td><td>${s.wrong}${s.unanswered ? `（未回答${s.unanswered}）` : ""}</td><td>${escapeHtml(status)}</td><td><a href="${rootHref(s.route.practice)}">演習</a> / <a href="${rootHref(s.route.article)}">記事</a></td></tr>`;
    }).join("");
    const priorityHtml = priority
      ? `<p><strong>${escapeHtml(priority.route.label)}</strong>へ戻るのが最優先です。${escapeHtml(priority.route.advice)}。</p><div class="exam-review-advice"><a class="mini-chip" href="${rootHref(priority.route.practice)}">優先演習へ戻る</a><a class="mini-chip" href="${rootHref(priority.route.fallbackPractice || priority.route.practice)}">追加演習へ進む</a><a class="mini-chip" href="${rootHref(priority.route.article)}">対応記事を読む</a></div>`
      : `<p>段階別の大きな穴は見えていません。見直し問題と不正解問題だけを再判定し、次の模試へ進んでください。</p>`;
    return `<section class="exam-analysis-panel gold-roadmap-result"><h4>Goldロードマップ復帰</h4>${priorityHtml}<table class="mini-table exam-analysis-table gold-roadmap-table"><thead><tr><th>段階</th><th>範囲</th><th>正解</th><th>正答率</th><th>失点</th><th>判定</th><th>戻る場所</th></tr></thead><tbody>${routeRows}</tbody></table><p class="inline-note">模試の同じ問題だけを暗記しても伸びません。失点した段階の通常演習へ戻ってから、もう一度この模試の不正解だけを解き直してください。</p></section>`;
  }


  const SILVER_ROADMAP_ROUTES = [
    {
      stage: 1,
      label: "段階1 Java実行・宣言ルール",
      shortLabel: "段階1",
      keys: ["package", "import", "main", "args", "argument", "javac", "classpath", "class path", "file name", "filename", "command", "compile command", "起動引数", "パッケージ", "インポート", "コマンド"],
      article: "articles/java-command/index.html",
      practice: "courses/java11-silver/practice/package-command.html",
      fallbackPractice: "courses/java11-silver/practice/compile-command-extra.html",
      advice: "package、import、main、起動引数、ファイル名の順へ戻る"
    },
    {
      stage: 2,
      label: "段階2 型・変数・リテラル",
      shortLabel: "段階2",
      keys: ["type", "var", "literal", "byte", "short", "int", "long", "float", "double", "char", "boolean", "promotion", "cast", "casting", "wrapper", "boxing", "unboxing", "null", "scope", "initialization", "初期化", "型変換", "数値昇格", "リテラル"],
      article: "articles/types/index.html",
      practice: "courses/java11-silver/practice/basic-syntax.html",
      fallbackPractice: "courses/java11-silver/practice/compile-check.html",
      advice: "var、数値リテラル、型変換、初期化、nullへ戻る"
    },
    {
      stage: 3,
      label: "段階3 演算子・制御構文",
      shortLabel: "段階3",
      keys: ["operator", "control", "switch", "case", "yield", "if", "else", "for", "while", "do while", "loop", "break", "continue", "ternary", "increment", "decrement", "short circuit", "output", "演算子", "制御", "短絡", "出力"],
      article: "articles/operators-control/index.html",
      practice: "courses/java11-silver/practice/output-runtime-extra.html",
      fallbackPractice: "courses/java11-silver/practice/final-check.html",
      advice: "評価順、短絡評価、switch、ループ、出力判定へ戻る"
    },
    {
      stage: 4,
      label: "段階4 String / 配列 / ArrayList",
      shortLabel: "段階4",
      keys: ["string", "stringbuilder", "array", "arraylist", "list", "list.of", "api", "reference", "equals", "indexof", "substring", "charat", "append", "replace", "intern", "length", "配列", "文字列", "参照"],
      article: "articles/string/index.html",
      practice: "courses/java11-silver/practice/api-string.html",
      fallbackPractice: "courses/java11-silver/practice/api-boundary-extra.html",
      advice: "Stringの不変性、StringBuilder、配列、ArrayList、参照比較へ戻る"
    },
    {
      stage: 5,
      label: "段階5 クラス・static・コンストラクタ",
      shortLabel: "段階5",
      keys: ["class", "object", "instance", "static", "constructor", "method", "overload", "field", "access", "private", "protected", "default access", "this", "super", "encapsulation", "record", "クラス", "インスタンス", "コンストラクタ"],
      article: "articles/class-design/index.html",
      practice: "courses/java11-silver/practice/oop.html",
      fallbackPractice: "courses/java11-silver/practice/compile-check.html",
      advice: "インスタンス、static文脈、コンストラクタ、オーバーロードへ戻る"
    },
    {
      stage: 6,
      label: "段階6 継承・interface・キャスト",
      shortLabel: "段階6",
      keys: ["inheritance", "interface", "implements", "extends", "override", "overriding", "polymorphism", "cast", "instanceof", "abstract", "default method", "sealed", "permits", "non-sealed", "継承", "ポリモーフィズム", "オーバーライド"],
      article: "articles/inheritance/index.html",
      practice: "courses/java11-silver/practice/inheritance-exception-extra.html",
      fallbackPractice: "courses/java11-silver/practice/exception-inheritance.html",
      advice: "参照型で呼べるメンバー、実行時のオーバーライド、キャストへ戻る"
    },
    {
      stage: 7,
      label: "段階7 例外処理",
      shortLabel: "段階7",
      keys: ["exception", "runtime", "checked", "unchecked", "try", "catch", "finally", "throw", "throws", "autocloseable", "close", "nullpointer", "arrayindex", "numberformat", "例外", "実行時例外"],
      article: "articles/exception/index.html",
      practice: "courses/java11-silver/practice/exception-inheritance.html",
      fallbackPractice: "courses/java11-silver/practice/inheritance-exception-extra.html",
      advice: "checked例外、catch順序、finally、try-with-resourcesへ戻る"
    },
    {
      stage: 8,
      label: "17追加 record / sealed / switch式 / instanceof",
      shortLabel: "17追加",
      keys: ["record", "sealed", "non-sealed", "permits", "switch expression", "yield", "instanceof pattern", "pattern matching", "pattern", "compact constructor", "レコード", "シール", "パターン変数"],
      article: "articles/java17-specific-precision/index.html",
      practice: "courses/java17-silver/index.html",
      fallbackPractice: "courses/java17-silver/units/record.html",
      advice: "record、sealed、switch式、instanceofパターン変数へ戻る"
    }
  ];
  function isSilverExamContext() {
    const u = currentUnit();
    const id = u?.id || unitId || "";
    const course = u?.course || "";
    if (!u || u.mode !== "exam") return false;
    if (course === "java11" || course === "java17" || course === "silver") return true;
    if (["unit07", "unit08", "unit10", "unit11"].includes(id)) return true;
    return false;
  }
  function silverRoadmapRouteForQuestion(q) {
    const tags = (q.tags || []).map(t => String(t).toLowerCase()).join(" ");
    const text = `${tags} ${q.title || ""} ${q.prompt || ""} ${q.explanation?.summary || ""}`.toLowerCase().replace(/[_.-]/g, " ");
    const route = SILVER_ROADMAP_ROUTES.find(r => r.keys.some(k => text.includes(String(k).toLowerCase().replace(/[_.-]/g, " "))));
    if (route) return route;
    return SILVER_ROADMAP_ROUTES.find(r => r.stage === 3);
  }
  function silverRoadmapStats(questions, progress) {
    const stats = SILVER_ROADMAP_ROUTES.map(route => ({ route, total: 0, correct: 0, wrong: 0, unanswered: 0 }));
    const byStage = Object.fromEntries(stats.map(s => [s.route.stage, s]));
    questions.forEach(q => {
      const route = silverRoadmapRouteForQuestion(q);
      if (!route || !byStage[route.stage]) return;
      const s = byStage[route.stage];
      const saved = progress[q.id];
      s.total++;
      if (saved?.isCorrect === true) s.correct++;
      else {
        s.wrong++;
        if (!(saved?.selected || []).length) s.unanswered++;
      }
    });
    return stats.filter(s => s.total > 0);
  }
  function silverPriorityRoute(questions, progress) {
    const stats = silverRoadmapStats(questions, progress)
      .filter(s => s.wrong > 0)
      .sort((a,b) => (a.correct/a.total) - (b.correct/b.total) || b.wrong - a.wrong || a.route.stage - b.route.stage);
    return stats[0] || null;
  }
  function silverRoadmapResultHtml(questions, progress) {
    if (!isSilverExamContext()) return "";
    const stats = silverRoadmapStats(questions, progress);
    if (!stats.length) return "";
    const priority = silverPriorityRoute(questions, progress);
    const routeRows = stats.map(s => {
      const rate = pct(s.correct, s.total);
      const status = s.wrong === 0 ? "通過" : (rate >= 80 ? "軽く戻る" : "戻る");
      return `<tr><td>${escapeHtml(s.route.shortLabel)}</td><td>${escapeHtml(s.route.label.replace(/^段階\d\s*/, ""))}</td><td>${s.correct}/${s.total}</td><td>${rate}%</td><td>${s.wrong}${s.unanswered ? `（未回答${s.unanswered}）` : ""}</td><td>${escapeHtml(status)}</td><td><a href="${rootHref(s.route.practice)}">演習</a> / <a href="${rootHref(s.route.article)}">記事</a></td></tr>`;
    }).join("");
    const priorityHtml = priority
      ? `<p><strong>${escapeHtml(priority.route.label)}</strong>へ戻るのが最優先です。${escapeHtml(priority.route.advice)}。</p><div class="exam-review-advice"><a class="mini-chip" href="${rootHref(priority.route.practice)}">優先演習へ戻る</a><a class="mini-chip" href="${rootHref(priority.route.fallbackPractice || priority.route.practice)}">追加演習へ進む</a><a class="mini-chip" href="${rootHref(priority.route.article)}">対応記事を読む</a></div>`
      : `<p>段階別の大きな穴は見えていません。見直し問題と不正解問題だけを再判定し、別の模試で再現性を見てください。</p>`;
    return `<section class="exam-analysis-panel silver-roadmap-result"><h4>Silverロードマップ復帰</h4>${priorityHtml}<table class="mini-table exam-analysis-table silver-roadmap-table"><thead><tr><th>段階</th><th>範囲</th><th>正解</th><th>正答率</th><th>失点</th><th>判定</th><th>戻る場所</th></tr></thead><tbody>${routeRows}</tbody></table><p class="inline-note">模試の同じ問題を先に暗記すると、別パターンのコードで崩れます。失点した段階の通常演習へ戻ってから、この模試の不正解だけを解き直してください。</p></section>`;
  }

  function pct(n, d) {
    return d ? Math.round(n / d * 100) : 0;
  }
  function resultRank(rate) {
    if (rate >= 85) return "安定";
    if (rate >= 70) return "要判定";
    return "優先復習";
  }

  const tagMiniGuides = {
    reference: ["== は参照の同一性、equals は実装次第。", "String はリテラル・new・intern の参照先を分けて考える。", "record はコンポーネント値で equals が自動生成される。"],
    string: ["String は不変。replace / substring / concat は戻り値を受け取る。", "StringBuilder は破壊的変更が多いが、equals は内容比較しない。", "indexOf と substring の範囲は境界値を判定する。"],
    array: ["配列要素のデフォルト値、length、ジャグ配列を判定する。", "clone は1次元目だけコピーする点に注意。", "配列共変はコンパイルできても実行時例外があり得る。"],
    type: ["byte/short/char は演算時に int へ昇格する。", "+= は暗黙キャストを含むが、通常代入は不可の場合がある。", "var はローカル変数だけ。フィールド・引数・戻り値には使えない。"],
    control: ["switch文のフォールスルーと switch式の yield を分ける。", "continue / break がどのループ・switchに効くかを見る。", "到達不能コードはコンパイルエラーになる。"],
    inheritance: ["フィールドは隠蔽、メソッドはオーバーライド。", "参照型で呼べるメンバーと実体型で動的束縛されるメソッドを分ける。", "default メソッド競合や sealed の継承制限を判定する。"],
    exception: ["checked 例外は throws/catch が必要。", "catch は狭い型から広い型へ並べる。", "try-with-resources は finally より前に close される。"],
    compile: ["出力を追う前に、宣言・初期化・アクセス修飾子・到達不能を判定する。"],
    runtime: ["null、配列範囲外、キャスト、NumberFormat を疑う。"],
    output: ["副作用のある式、コンストラクタ順、finally、文字列不変性を追う。"] }; function firstLookPoint(q) { const tags = q.tags || []; if (q.examFocus) return q.examFocus; if (tags.includes("reference")) return "参照比較では、変数の値ではなく、同じインスタンスを指しているか"; if (tags.includes("string")) return "Stringは不変なので、メソッド呼び出し後の戻り値を受け取っているか"; if (tags.includes("compile")) return "出力候補を追う前に、宣言、初期化、アクセス修飾子、戻り値型が成立しているか"; if (tags.includes("exception") || tags.includes("runtime")) return "例外問題では、catch順序、checked例外、null参照、close順";
    if (tags.includes("inheritance")) return "継承問題では、参照型で呼べるメンバーと、実行時に選ばれるオーバーライドメソッドを分けます。";
    if (tags.includes("operator")) return "演算子問題では、副作用がいつ反映されるかと、型変換が許されるかを分けます。";
    return "問題文が求めているものが、出力結果・コンパイル可否・実行時例外のどれかをまず切り分けます。";
  }
  function relatedLinksHtml(q) {
    const tags = [...new Set(q.tags || [])].slice(0, 4);
    if (!tags.length) return "";
    return `<div class="related-links"><strong>関連演習:</strong> ${tags.map(t => `<a href="${tagHref(t)}">${escapeHtml(tagTitle(t))}</a>`).join(" ")}</div>`;
  }
  function mistakeReasonPickerHtml(qid) { return ""; }
  function bindMistakeReasonBox(card, qid) { return; }
  function weakGuideHtml(tag) {
    const lines = tagMiniGuides[tag] || tagMiniGuides[tag?.replace(/^tag-/, "")] || [tagDescription(tag)];
    return `<ul>${lines.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
  }

  const memoryStore = {};
  function readJson(key, fallback) {
    try {
      const raw = window.localStorage ? window.localStorage.getItem(key) : null;
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return Object.prototype.hasOwnProperty.call(memoryStore, key) ? memoryStore[key] : fallback;
    }
  }
  function writeJson(key, value) {
    try {
      if (window.localStorage) window.localStorage.setItem(key, JSON.stringify(value));
      memoryStore[key] = value;
    } catch (_) {
      memoryStore[key] = value;
    }
  }
  function removeJson(key) {
    try { if (window.localStorage) window.localStorage.removeItem(key); } catch (_) {}
    delete memoryStore[key];
  }
  function readProgress() { return readJson(storageKey, {}); }
  function writeProgress(progress) { writeJson(storageKey, progress); window.JavaBridge?.syncFromLegacy?.(); }
  function readExamAll() { return readJson(examStorageKey, {}); }
  function writeExamAll(value) { writeJson(examStorageKey, value); }
  function readViewAll() { return readJson(viewStorageKey, {}); }
  function writeViewAll(value) { writeJson(viewStorageKey, value); }
  function readReviewAll() { return readJson(reviewStorageKey, {}); }
  function writeReviewAll(value) { writeJson(reviewStorageKey, value); }
  function readExamHistory() { return readJson(examHistoryStorageKey, []); }
  function writeExamHistory(value) { writeJson(examHistoryStorageKey, value); window.JavaBridge?.syncFromLegacy?.(); }
  function readSettings() { return { autoNext: false, theme: "light", dailyGoal: 20, ...readJson(settingsStorageKey, {}) }; }
  function writeSettings(value) { writeJson(settingsStorageKey, { ...readSettings(), ...value }); }
  function readNotes() { return readJson(notesStorageKey, {}); }
  function writeNotes(value) { writeJson(notesStorageKey, value); }
  function readMistakeReasons() { return {}; }
  function writeMistakeReasons(value) { return; }
  function readMissedUnits() { return readJson(missedUnitStorageKey, { questions: {} }); }
  function writeMissedUnits(value) { writeJson(missedUnitStorageKey, value); window.JavaBridge?.syncFromLegacy?.(); }
  const missedUnitTagMap = {
    "String": "string", "StringBuilder": "string", "ArrayList": "array", "List": "array",
    "Stream API": "stream", "Collectors・Map": "collectors", "Optional": "optional",
    "I/O・NIO": "nio", "JDBC": "jdbc", "日時・ローカライズ": "datetime", "ラムダ・関数型": "lambda",
    "compile-error": "compile", "runtime-exception": "runtime", "checked-exception": "exception",
    "method-reference": "lambda", "try-with-resources": "exception", "default-method": "interface",
    "switch-expression": "switch", "pattern-matching": "instanceof", "flatMap": "stream", "groupingBy": "collectors",
    "toList": "stream", "mapMulti": "stream", "primitive-stream": "stream", "parallel-stream": "concurrency",
    "module-info": "module", "text-block": "string", "stripIndent": "string", "formatted": "string"
  };
  function normalizeMissedUnitTag(tag) {
    const t = String(tag || "");
    if (!t) return "";
    if (/^(gold11|gold17|java11|bronze|unit)($|-|\d)/.test(t) || /^(gold|gold11|gold17|java11|bronze|silver|gold17-addition)$/.test(t)) return "";
    const mapped = missedUnitTagMap[t] || t;
    return DATA.tagDefinitions?.[mapped] ? mapped : "";
  }
  function learningTagsForMissedUnit(q, uid) {
    const raw = q?.tags && q.tags.length ? q.tags : [uid || "basic"];
    const tags = [...new Set(raw.map(normalizeMissedUnitTag).filter(Boolean))];
    return tags.length ? tags : [uid || "basic"];
  }
  function recordMissedUnitResult(q, isCorrect) {
    if (!q || !q.id) return;
    const store = readMissedUnits();
    store.questions ||= {};
    const now = new Date().toISOString();
    const uid = unitOfQuestion(q.id);
    const tagList = learningTagsForMissedUnit(q, uid);
    const existing = store.questions[q.id] || {};
    if (isCorrect) {
      if (existing.wrongAt && !existing.resolvedAt) {
        store.questions[q.id] = { ...existing, resolvedAt: now, lastAnswerAt: now };
        writeMissedUnits(store);
      }
      return;
    }
    store.questions[q.id] = {
      ...existing,
      qid: q.id,
      unitId: uid,
      number: q.number,
      title: q.title || "",
      tags: tagList,
      wrongAt: existing.wrongAt || now,
      lastWrongAt: now,
      resolvedAt: null
    };
    writeMissedUnits(store);
  }
  function missedUnitStats() {
    const store = readMissedUnits();
    const stats = Object.create(null);
    Object.values(store.questions || {}).forEach(item => {
      if (!item || item.resolvedAt) return;
      learningTagsForMissedUnit({ tags: item.tags || [] }, item.unitId).forEach(tag => {
        stats[tag] ||= { tag, title: tagTitle(tag), count: 0, questionIds: [], lastWrongAt: "" };
        stats[tag].count++;
        stats[tag].questionIds.push(item.qid);
        if (!stats[tag].lastWrongAt || String(item.lastWrongAt || item.wrongAt || "") > stats[tag].lastWrongAt) {
          stats[tag].lastWrongAt = item.lastWrongAt || item.wrongAt || "";
        }
      });
    });
    return Object.values(stats).sort((a,b) => b.count - a.count || String(b.lastWrongAt).localeCompare(String(a.lastWrongAt)));
  }
  function applySettings() {
    document.body.classList.remove("theme-dark");
  }
  function progressTime(p) { return Date.parse(p?.answeredAt || p?.savedAt || 0) || 0; }
  function unitById(id) { return (DATA?.units || []).find(u => u.id === id); }
  function isGloballyMarked(qid) {
    return Object.values(readReviewAll()).some(map => !!map?.[qid]);
  }
  function markedQuestionIds() {
    const ids = new Set();
    Object.values(readReviewAll()).forEach(map => Object.keys(map || {}).forEach(id => ids.add(id)));
    return ids;
  }
  function shuffled(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function randomQuestions() {
    let all = allQuestions();
    if (randomLevel) all = all.filter(q => certificationMatches(q, randomLevel));
    else if (randomDifficulty) all = all.filter(q => (q.difficulty || "standard") === randomDifficulty);
    const view = readViewAll();
    const stored = view[viewKey]?.randomIds || [];
    const size = Math.min(randomSize, all.length);
    let ids = stored.filter(id => all.some(q => q.id === id));
    if (ids.length !== size) {
      ids = shuffled(all).slice(0, size).map(q => q.id);
      view[viewKey] = { ...(view[viewKey] || {}), randomIds: ids, currentIndex: 0, generatedAt: new Date().toISOString() };
      writeViewAll(view);
    }
    return ids.map(id => all.find(q => q.id === id)).filter(Boolean);
  }
  function matchesMissedUnitScope(item) {
    if (!item) return false;
    const itemTags = Array.isArray(item.tags) ? item.tags : [];
    if (tagFilter && !itemTags.includes(tagFilter)) return false;
    if (!reviewUnitFilter) return true;
    const scope = String(reviewUnitFilter);
    if (item.unitId === scope) return true;
    if (itemTags.includes(scope)) return true;
    return itemTags.some(t => tagTitle(t) === scope);
  }

  function questionsForCurrentUnit() {
    if (reviewMode === "missed-units") {
      const store = readMissedUnits();
      const missed = Object.values(store.questions || {}).filter(item => item && !item.resolvedAt);
      const missedIds = new Set(missed.filter(matchesMissedUnitScope).map(item => item.qid));
      return allQuestions().filter(q => missedIds.has(q.id));
    }
    if (tagFilter) return allQuestions().filter(q => (q.tags || []).includes(tagFilter));
    if (randomMode) return randomQuestions();
    if (reviewMode === "wrong") {
      const progress = readProgress();
      if (!reviewDifficultyFilter) return [];
      const matchesCourse = (q) => {
        if (!reviewCourseFilter) return true;
        const uid = unitOfQuestion(q.id) || '';
        if (reviewCourseFilter === 'basic') return uid.startsWith('basic-');
        if (reviewCourseFilter === 'bronze') return uid.startsWith('bronze-');
        if (reviewCourseFilter === 'silver') return uid.startsWith('java11-') || uid.startsWith('silver17-');
        if (reviewCourseFilter === 'silver11') return uid.startsWith('java11-');
        if (reviewCourseFilter === 'silver17') return uid.startsWith('silver17-') || ['unit07','unit08','unit10','unit11'].includes(uid);
        if (reviewCourseFilter === 'gold') return uid.startsWith('gold11-') || uid.startsWith('gold17-');
        if (reviewCourseFilter === 'gold11') return uid.startsWith('gold11-');
        if (reviewCourseFilter === 'gold17') return uid.startsWith('gold17-');
        return true;
      };
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        if (!matchesCourse(q)) return false;
        const difficulty = ['basic','standard','hard'].includes(q.difficulty) ? q.difficulty : 'standard';
        return difficulty === reviewDifficultyFilter && progress[q.id]?.isCorrect === false;
      });
    }
    if (reviewMode === "marked") {
      const ids = markedQuestionIds();
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        return ids.has(q.id);
      });
    }
    if (reviewMode === "due") {
      const progress = readProgress();
      const now = Date.now();
      const day = 24 * 60 * 60 * 1000;
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        const p = progress[q.id];
        if (!p) return false;
        if (p.isCorrect === false) return true;
        return now - progressTime(p) >= 3 * day;
      }).sort((a, b) => {
        const pa = progress[a.id] || {};
        const pb = progress[b.id] || {};
        const score = p => (p.isCorrect === false ? 0 : 1);
        return score(pa) - score(pb) || progressTime(pa) - progressTime(pb);
      });
    }
    if (reviewMode === "weak") {
      const progress = readProgress();
      const tagStats = Object.create(null);
      allQuestions().forEach(q => (q.tags || ["untagged"]).forEach(t => {
        tagStats[t] ||= { answered: 0, correct: 0 };
        if (progress[q.id]) tagStats[t].answered++;
        if (progress[q.id]?.isCorrect === true) tagStats[t].correct++;
      }));
      const weakScore = q => Math.min(...(q.tags || ["untagged"]).map(t => {
        const v = tagStats[t] || { answered: 0, correct: 0 };
        return v.answered ? v.correct / v.answered : 1;
      }));
      return allQuestions().filter(q => progress[q.id]?.isCorrect === false).sort((a,b) => weakScore(a) - weakScore(b));
    }
    return DATA.questions[unitId] || [];
  }
  function filteredReviewUnitTitle() {
    if (!reviewUnitFilter) return "";
    return unitById(reviewUnitFilter)?.title || reviewUnitFilter;
  }
  function currentUnit() {
    if (tagFilter) return { id: `tag:${tagFilter}`, title: tagTitle(tagFilter), description: tagDescription(tagFilter), page: location.pathname.split('/').pop() };
    if (randomMode) {
      const scopeLabel = randomLevel ? certificationLabel(randomLevel) : randomDifficulty ? difficultyLabel(randomDifficulty) : "全問題";
      const scopeText = randomLevel || randomDifficulty ? `${scopeLabel}・` : "";
      return { id: `random:${randomLevel || randomDifficulty || "all"}:${randomSize}`, title: `${scopeText}ランダム演習 ${randomSize}問`, description: randomLevel || randomDifficulty ? `${scopeLabel}の問題からランダムに抽出します。` : "全問題からランダムに抽出します。", page: location.pathname.split('/').pop() };
    }
    const scopeTitle = filteredReviewUnitTitle();
    const scopeText = scopeTitle ? `対象: ${scopeTitle}` : "通常演習・模試の全履歴が対象です。";
    if (reviewMode === "wrong") {
      const diffLabel = reviewDifficultyFilter === 'basic' ? '基礎' : reviewDifficultyFilter === 'hard' ? '応用' : reviewDifficultyFilter === 'standard' ? '標準' : '';
      const courseLabelText = reviewCourseFilter === 'basic' ? 'Java基礎' : reviewCourseFilter === 'bronze' ? 'Bronze' : reviewCourseFilter === 'silver' ? 'Silver' : reviewCourseFilter === 'gold' ? 'Gold' : '';
      const prefix = [courseLabelText, diffLabel].filter(Boolean).join('・');
      return { id: "review-wrong", title: prefix ? `${prefix}の不正解を復習` : "難易度を選んで不正解を復習", description: reviewDifficultyFilter ? '前回不正解だった問題だけを解き直します。' : '基礎・標準・応用から復習する難易度を選択します。', page: location.pathname.split('/').pop() };
    }
    if (reviewMode === "marked") return { id: "review-marked", title: scopeTitle ? `${scopeTitle}の見直し問題` : "後で見直す問題", description: `${scopeText} 見直しマークを付けた問題だけを集めます。`, page: location.pathname.split('/').pop() };
    if (reviewMode === "due") return { id: "review-due", title: scopeTitle ? `${scopeTitle}の今日の復習` : "今日の復習", description: `${scopeText} 不正解と一定期間経過した問題を優先して出します。`, page: location.pathname.split('/').pop() };
    if (reviewMode === "weak") return { id: "review-weak", title: scopeTitle ? `${scopeTitle}の弱点優先復習` : "弱点優先復習", description: `${scopeText} 不正解だった問題を、弱いタグから優先して並べます。`, page: location.pathname.split('/').pop() };
    if (reviewMode === "missed-units") return { id: "review-missed-units", title: tagFilter ? `${tagTitle(tagFilter)}の復習` : "間違えた単元の復習", description: tagFilter ? `${tagTitle(tagFilter)}で未克服の問題だけを出します。` : "不正解時に自動保存された単元から、未克服の問題だけを出します。", page: location.pathname.split('/').pop() };
    return unitById(unitId);
  }
  function isExamUnit() { return !!unitId && currentUnit()?.mode === "exam"; }
  function examDurationSec() { return (currentUnit()?.timeLimitMinutes || 90) * 60; }
  function getExamState() { return readExamAll()[unitId] || null; }
  function setExamState(next) {
    const all = readExamAll();
    if (next) all[unitId] = next; else delete all[unitId];
    writeExamAll(all);
  }
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }


  function stripExplanationDisplaySections(value) {
    const lines = String(value ?? "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
    const output = [];
    let skippingChoiceSection = false;
    const isContentHeading = line => /^(?:#{1,6}\s*)?内容解説\s*$/u.test(String(line || "").trim());
    const isChoiceHeading = line => /^(?:#{1,6}\s*)?選択肢(?:別解説|判断|の判断)\s*$/u.test(String(line || "").trim());
    const isRememberHeading = line => /^(?:#{1,6}\s*)?覚えるポイント\s*$/u.test(String(line || "").trim());
    const isNextMajorHeading = line => /^(?:#{1,2})\s+(?![A-ZＡ-Ｚ]\.|[A-ZＡ-Ｚ]\s)/u.test(String(line || "").trim());
    lines.forEach(line => {
      if (isContentHeading(line)) return;
      if (isChoiceHeading(line)) {
        skippingChoiceSection = true;
        return;
      }
      if (skippingChoiceSection) {
        if (isRememberHeading(line) || isNextMajorHeading(line)) {
          skippingChoiceSection = false;
          output.push(line);
        }
        return;
      }
      output.push(line);
    });
    return output.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }

  function cleanExplanationText(value) {
    return stripExplanationDisplaySections(value)
      .replace(/見るポイント：/g, "")
      .replace(/見るポイント/g, "見るポイント")
      .replace(/分類別の確認ポイント：/g, "")
      .replace(/判定順：/g, "確認順：")
      .replace(/大まかに読まずに/g, "")
      .replace(/出力を先に暗算しないでください。/g, "出力だけで決めず、")
      .replace(/コンパイルできないコードは実行も出力もしません。/g, "コンパイル可否、実行時例外、出力の順に見ます。")
      .replace(/実行時例外が起きるコードは、例外発生後の通常出力へ進みません。/g, "");
  }

  function formatReadableText(value) {
    const escaped = escapeHtml(cleanExplanationText(value));
    if (escaped.length < 90) return escaped;
    const sentences = escaped.split(/(?<=。)/);
    const groups = [];
    let buf = "";
    sentences.forEach(sentence => {
      if (!sentence) return;
      if (buf && (buf + sentence).length > 74) {
        groups.push(buf);
        buf = sentence;
      } else {
        buf += sentence;
      }
    });
    if (buf) groups.push(buf);
    return groups.join("<br>");
  }



  function inlineMarkdown(value) {
    return String(value ?? "").split(/(`[^`]*`)/g).map(part => {
      if (/^`[^`]*`$/.test(part)) return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
    }).join("");
  }

  function flushParagraph(buffer, output) {
    if (!buffer.length) return;
    output.push(`<p>${inlineMarkdown(buffer.join(" ").trim())}</p>`);
    buffer.length = 0;
  }

  function markdownTableHtml(lines) {
    if (lines.length < 2) return "";
    const split = line => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());
    const header = split(lines[0]);
    const rows = lines.slice(2).map(split);
    if (!header.length || !/^\s*\|?\s*:?-{3,}:?/.test(lines[1])) return "";
    return `<div class="markdown-table-wrap"><table><thead><tr>${header.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function markdownToHtml(value) {
    const text = cleanExplanationText(value).replace(/\r\n/g, "\n");
    const lines = text.split("\n");
    const output = [];
    const paragraph = [];
    let inCode = false;
    let codeLang = "";
    let codeLines = [];
    let tableLines = [];
    const flushTable = () => {
      if (!tableLines.length) return;
      const html = markdownTableHtml(tableLines);
      if (html) output.push(html);
      else paragraph.push(...tableLines);
      tableLines = [];
    };
    lines.forEach(line => {
      const fence = line.match(/^```\s*([\w+-]*)\s*$/);
      if (fence) {
        flushTable();
        flushParagraph(paragraph, output);
        if (!inCode) {
          inCode = true;
          codeLang = fence[1] || "";
          codeLines = [];
        } else {
          output.push(`<pre class="markdown-code"><code${codeLang ? ` class="language-${escapeHtml(codeLang)}"` : ""}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
          inCode = false;
          codeLang = "";
          codeLines = [];
        }
        return;
      }
      if (inCode) {
        codeLines.push(line);
        return;
      }
      if (!line.trim()) {
        flushTable();
        flushParagraph(paragraph, output);
        return;
      }
      if (line.includes("|") && /^\s*\|?.+\|.+/.test(line)) {
        flushParagraph(paragraph, output);
        tableLines.push(line);
        return;
      }
      flushTable();
      const heading = line.match(/^(#{2,4})\s+(.+)$/);
      if (heading) {
        flushParagraph(paragraph, output);
        const level = Math.min(6, heading[1].length + 1);
        output.push(`<h${level}>${inlineMarkdown(heading[2].trim())}</h${level}>`);
        return;
      }
      const bullet = line.match(/^\s*[-*]\s+(.+)$/);
      if (bullet) {
        flushParagraph(paragraph, output);
        output.push(`<ul><li>${inlineMarkdown(bullet[1].trim())}</li></ul>`);
        return;
      }
      paragraph.push(line.trim());
    });
    if (inCode) output.push(`<pre class="markdown-code"><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    flushTable();
    flushParagraph(paragraph, output);
    return output.join("") || '<p>解説は未作成です。</p>';
  }

  function explanationBodyText(q) {
    const exp = q?.explanation;
    return q?.explanationMarkdown ?? q?.contentExplanation ?? (typeof exp === "string" ? exp : (exp?.summary ?? ""));
  }

  function renderExplanationBody(q) {
    return `<div class="readable-text markdown-explanation">${markdownToHtml(explanationBodyText(q))}</div>`;
  }

  function renderCodeLines(code) {
    const lines = String(code ?? "").replace(/\r\n/g, "\n").split("\n");
    return `<pre class="code-lines"><code>${lines.map((line, index) => {
      const body = escapeHtml(line) || " ";
      return `<span class="code-line"><span class="line-no">${index + 1}</span><span class="line-code">${body}</span></span>`;
    }).join("")}</code></pre>`;
  }
  function renderCodeBlock(block) {
    return `<div class="code-block">
      ${block.title ? `<span class="code-title">${escapeHtml(block.title)}</span>` : ""}
      ${renderCodeLines(block.code)}
    </div>`;
  }
  function arraysEqual(a, b) {
    const aa = [...(a || [])].sort();
    const bb = [...(b || [])].sort();
    return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
  }
  function formatTime(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  function currentIndex() {
    const questions = questionsForCurrentUnit();
    const all = readViewAll();
    if (consumeStartParamIfNeeded()) {
      all[viewKey] = { ...(all[viewKey] || {}), currentIndex: 0, focusedFromUrl: "" };
      writeViewAll(all);
      return 0;
    }
    if (focusQuestionId && all[viewKey]?.focusedFromUrl !== focusQuestionId) {
      const focusedIndex = questions.findIndex(q => q.id === focusQuestionId);
      if (focusedIndex >= 0) {
        all[viewKey] = { ...(all[viewKey] || {}), currentIndex: focusedIndex, focusedFromUrl: focusQuestionId };
        writeViewAll(all);
        return focusedIndex;
      }
    }
    const value = Number(all[viewKey]?.currentIndex || 0);
    if (!questions.length) return 0;
    return Math.min(Math.max(0, value), questions.length - 1);
  }
  function setCurrentIndex(index) {
    const questions = questionsForCurrentUnit();
    const next = Math.min(Math.max(0, index), Math.max(0, questions.length - 1));
    const all = readViewAll();
    all[viewKey] = { ...(all[viewKey] || {}), currentIndex: next };
    writeViewAll(all);
  }
  function reviewMap() { return readReviewAll()[unitId || viewKey] || {}; }
  function setReviewMap(map) {
    const all = readReviewAll();
    all[unitId || viewKey] = map;
    writeReviewAll(all);
  }
  function isMarkedReview(qid) { return !!reviewMap()[qid] || isGloballyMarked(qid); }
  function toggleReview(qid) {
    const all = readReviewAll();
    if (Object.values(all).some(map => !!map?.[qid])) {
      Object.keys(all).forEach(scope => { if (all[scope]?.[qid]) delete all[scope][qid]; });
      writeReviewAll(all);
      return;
    }
    const scope = unitId || viewKey;
    all[scope] ||= {};
    all[scope][qid] = { markedAt: new Date().toISOString(), unitId: unitOfQuestion(qid) };
    writeReviewAll(all);
  }

  function renderNav() {
    const nav = document.getElementById("unitNav");
    if (!nav) return;
    const activePath = window.CURRENT_PAGE || location.pathname.split('/').pop() || "index.html";
    const path = location.pathname;
    const countFor = u => (DATA.questions[u.id] || []).length || u.fixedCount || 0;
    const link = (href, label, active, meta="") => `<a class="nav-link${active ? " active" : ""}" href="${escapeHtml(pageHref(href))}"><span>${escapeHtml(label)}</span>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</a>`;
    const direct = (href, label, active=false, meta="") => `<a class="nav-link${active ? " active" : ""}" href="${escapeHtml((window.APP_ROOT || "") + href)}"><span>${escapeHtml(label)}</span>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</a>`;
    const lessonLinks = (base, prefix, titles) => titles.map((item, i) => {
      const n = String(typeof item === "object" ? item.n : i + 1).padStart(2, "0");
      const t = typeof item === "object" ? item.title : item;
      return direct(`${base}/lessons/${n}.html`, t, path.includes(`${base}/lessons/${n}.html`));
    }).join("");
    const javaBasicTitles = [
      { n: 1, title: "コンピュータと機械語" },
      { n: 2, title: "OS・JDK・JVM" },
      { n: 3, title: "ソースから実行まで" },
      { n: 4, title: "mainメソッド" },
      { n: 5, title: "変数・値・型" },
      { n: 6, title: "数値型と型変換" },
      { n: 7, title: "Stringの基本" },
      { n: 8, title: "if文と条件式" },
      { n: 9, title: "for・while" },
      { n: 10, title: "配列" },
      { n: 11, title: "メソッドと引数" },
      { n: 12, title: "クラスとオブジェクト" },
      { n: 13, title: "static" },
      { n: 14, title: "コンストラクタ" },
      { n: 15, title: "継承の入口" },
      { n: 16, title: "interfaceの入口" },
      { n: 17, title: "例外処理の入口" },
      { n: 18, title: "コンパイルエラーと実行時例外" },
      { n: 19, title: "Javaファイルとクラス名" },
      { n: 20, title: "コードを読む順番" },
      { n: 21, title: "ビット・バイト・2進数" },
      { n: 22, title: "文字コードとUnicode" },
      { n: 23, title: "メモリ・スタック・ヒープ" },
      { n: 24, title: "ターミナル・Javaコマンド" }
    ];
    const bronzeTitles = ["全体像", "データ型", "条件分岐・ループ", "クラスとオブジェクト", "配列", "直前判定"];
    const java11Titles = ["全体像", "型と演算子", "String", "配列とList", "クラス", "継承", "例外", "Java17との差分"];
    const goldTitles = ["全体像", "ラムダ式", "Stream API", "ジェネリクス", "I/O", "モジュール", "並行処理", "仕上げ"];
    const courseUnits = (course, exam=false) => DATA.units.filter(u => (u.course || "java17") === course && (exam ? u.mode === "exam" : u.mode !== "exam"));
    const unitLinks = (course, exam=false) => courseUnits(course, exam).map(u => link(u.page, u.title, u.id === unitId, exam ? `${u.timeLimitMinutes || 90}分` : `${countFor(u)}問`)).join("");
    const activeCourse = (() => {
      if (path.includes('/courses/java-basic/') || activePath.startsWith('java-basic')) return 'basic';
      if (path.includes('/courses/bronze/') || activePath.startsWith('bronze')) return 'bronze';
      if (path.includes('/courses/java11-silver/') || activePath.startsWith('java11')) return 'silver11';
      if (path.includes('/courses/java17-silver/') || activePath.startsWith('practice') || activePath === 'exam.html') return 'silver17';
      if (path.includes('/courses/silver/')) return 'silver';
      if (path.includes('/courses/gold11/') || activePath.startsWith('gold11')) return 'gold11';
      if (path.includes('/courses/gold17/') || activePath.startsWith('gold17')) return 'gold17';
      if (path.includes('/courses/gold/')) return 'gold';
      if (path.includes('/articles/') || activePath.startsWith('article') || ["methods.html","glossary.html","cheatsheet.html","before-exam.html"].includes(activePath)) return 'articles';
      if (path.includes('/app/') || ["dashboard.html","mode.html","search.html","random.html","notes.html","mistake-reasons.html"].includes(activePath)) return 'app';
      return 'portal';
    })();
    const courseHome = {
      basic: direct('courses/java-basic/index.html', 'Java基礎トップ', activePath === 'java-basic.html'),
      bronze: direct('courses/bronze/index.html', 'Bronzeトップ', activePath === 'bronze.html'),
      silver: direct('courses/silver/index.html', 'Java Silverバージョン選択', activePath === 'silver.html'),
      silver11: direct('courses/java11-silver/index.html', 'Java 11 Silverトップ', activePath === 'java11silver.html'),
      silver17: direct('courses/java17-silver/index.html', 'Java 17 Silverトップ', activePath === 'java17silver.html'),
      gold: direct('courses/gold/index.html', 'Java Goldバージョン選択', activePath === 'gold.html'),
      gold11: direct('courses/gold11/index.html', 'Java 11 Goldトップ', activePath === 'gold11.html'),
      gold17: direct('courses/gold17/index.html', 'Java 17 Goldトップ', activePath === 'gold17.html')
    };
    const commonCourseLinks = `<details class="nav-section"><summary>他のコース</summary><div>
      ${direct('courses/java-basic/index.html','1からわかるJava基礎')}
      ${direct('courses/bronze/index.html','Java Bronze')}
      ${direct('courses/java11-silver/index.html','Java 11 Silver')}
      ${direct('courses/java17-silver/index.html','Java 17 Silver')}
      ${direct('courses/gold11/index.html','Java 11 Gold')}
      ${direct('courses/gold17/index.html','Java 17 Gold')}
    </div></details>`;

    const silverCourseLinks = `<details class="nav-section"><summary>関連コース</summary><div>
      ${direct('courses/java-basic/index.html','1からわかるJava基礎')}
      ${direct('courses/bronze/index.html','Java Bronze')}
      ${direct('courses/java11-silver/index.html','Java 11 Silver')}${direct('courses/java17-silver/index.html','Java 17 Silver')}
    </div></details>`;
    const reviewLinks = [
      link("review-wrong.html", "間違えた問題", reviewMode === "wrong"),
      link("review-marked.html", "見直し問題", reviewMode === "marked"),
      link("review-due.html", "今日の復習", reviewMode === "due"),
      link("dashboard.html", "弱点分析", activePath === "dashboard.html"),
    ].join("");
    const toolLinks = [link("random.html", "ランダム出題", randomMode)].join("");
    const articleLinks = [
      direct('articles/index.html','記事一覧', activePath === 'articles.html'),
      direct('articles/compile-errors/index.html','コンパイルエラー原因', activePath === 'article-compile-errors.html'),
      direct('articles/reference/index.html','参照比較', activePath === 'article-reference.html'),
      direct('articles/string/index.html','String', activePath === 'article-string.html'),
      direct('articles/methods/index.html','メソッド表', activePath === 'methods.html'),
      direct('articles/before-exam/index.html','直前チェック', activePath === 'before-exam.html')
    ].join("");
    const settingsLinks = "";
    const section = (title, body, open=true) => `<details class="nav-section"${open ? " open" : ""}><summary>${escapeHtml(title)}</summary><div>${body}</div></details>`;
    let html = '';
    if (activeCourse === 'basic') {
      html += section('Java基礎', courseHome.basic + lessonLinks('courses/java-basic','java-basic',javaBasicTitles), true) + commonCourseLinks + section('単元別解説', articleLinks, false);
    } else if (activeCourse === 'bronze') {
      html += section('Bronze', courseHome.bronze + lessonLinks('courses/bronze','bronze',bronzeTitles), true)
        + section('Bronze演習', unitLinks('bronze', false), !!unitId && unitById(unitId)?.course === 'bronze')
        + section('Bronze模試', unitLinks('bronze', true), isExamUnit() && unitById(unitId)?.course === 'bronze')
        + commonCourseLinks;
    } else if (activeCourse === 'silver11') {
      html += section('Java 11 Silver', courseHome.silver11 + section('通常演習', unitLinks('silver-common', false), true) + section('模試', unitLinks('silver11-exam', true), true), true) + commonCourseLinks;
    } else if (activeCourse === 'silver17') {
      html += section('Java 17 Silver', courseHome.silver17 + section('通常演習', unitLinks('silver17', false), true) + section('模試', unitLinks('silver17-exam', true), true), true) + commonCourseLinks;
    } else if (activeCourse === 'silver') {
      html += section('Java Silver', courseHome.silver + section('通常演習', section('共通部分', unitLinks('silver-common', false), true) + section('17追加分', unitLinks('silver17', false), true), true) + section('模試', section('11模試', unitLinks('silver11-exam', true), true) + section('17模試', unitLinks('silver17-exam', true), true), true), true)
        + commonCourseLinks;
    } else if (activeCourse === 'gold11') {
      html += section('Java 11 Gold', courseHome.gold11 + section('通常演習', unitLinks('gold-common', false), true) + section('模試', unitLinks('gold11-exam', true), true), true) + commonCourseLinks;
    } else if (activeCourse === 'gold17') {
      html += section('Java 17 Gold', courseHome.gold17 + section('通常演習', unitLinks('gold17-addition', false), true) + section('模試', unitLinks('gold17-exam', true), true), true) + commonCourseLinks;
    } else if (activeCourse === 'gold') {
      html += section('Java Gold', courseHome.gold + section('通常演習', section('共通部分', unitLinks('gold-common', false), true) + section('17追加分', unitLinks('gold17-addition', false), true), true) + section('模試', section('SE 11模試', unitLinks('gold11-exam', true), true) + section('SE 17模試', unitLinks('gold17-exam', true), true), true), true)
        + commonCourseLinks;
    } else if (activeCourse === 'articles') {
      html += section('単元別解説', articleLinks, true) + commonCourseLinks + section('復習・分析', reviewLinks, false);
    } else if (activeCourse === 'app') {
      html += section('復習・分析', reviewLinks, true) + section('演習ツール', toolLinks, true) + commonCourseLinks;
    } else {
      html += section('コース選択', `${direct('courses/java-basic/index.html','1からわかるJava基礎')}${direct('courses/bronze/index.html','Java Bronze')}${direct('courses/java11-silver/index.html','Java 11 Silver')}${direct('courses/java17-silver/index.html','Java 17 Silver')}${direct('courses/gold/index.html','Java Gold')}`, true)
        + section('単元別解説', articleLinks, false);
    }
    nav.innerHTML = html;
  }

  function unitCardHtml(u, labelOverride) {
    const count = (DATA.questions[u.id] || []).length;
    const label = labelOverride || u.title;
    const shortTags = {
      unit01: "main / コンパイル / 実行",
      unit02: "型変換 / String / 配列",
      unit12: "参照比較 / API / ArrayList",
      unit03: "演算子 / switch / loop",
      unit04: "this / static / record",
      unit05: "継承 / interface / sealed",
      unit06: "try-catch / finally / close",
      unit13: "var / static / 到達不能",
      unit09: "全範囲 / ランダム",
      "silver17-record": "record / コンストラクタ",
      "silver17-sealed": "sealed / permits",
      "silver17-switch-yield": "switch式 / yield",
      "silver17-pattern": "instanceof / パターン変数",
      "gold17-add-record-sealed": "record / sealed",
      "gold17-add-switch-pattern": "switch式 / instanceof",
      "gold17-add-stream-api": "Stream.toList / mapMulti",
    };
    if (u.mode === "exam") {
      const level = ({ unit07: "標準", unit08: "標準〜難", unit10: "複合問題多め", unit11: "仕上げ" })[u.id] || "実践";
      return `<a class="unit-card exam-unit-card" href="${escapeHtml(pageHref(u.page))}">
        <strong>${escapeHtml(label)}</strong>
        <span class="badge ready">${u.timeLimitMinutes || 90}分</span>
        <span class="btn primary fake-start">開始する</span>
      </a>`;
    }
    return `<a class="unit-card" href="${escapeHtml(pageHref(u.page))}">
      <strong>${escapeHtml(label)}</strong>
      <span class="badge ready">${count}問</span>
      <span class="unit-tags">${escapeHtml(shortTags[u.id] || u.description || "Javaの重要論点")}</span>
    </a>`;
  }



  function courseUnits(course, includeExam = false) {
    const units = DATA.units || [];
    const java17ExamIds = new Set(["unit07", "unit08", "unit10", "unit11"]);
    const matches = (u) => {
      const id = u.id || "";
      if (course === "bronze") return /^bronze-/.test(id);
      if (course === "java11" || course === "silver11") return /^java11-/.test(id);
      if (course === "java17") return /^unit/.test(id);
      if (course === "silver") return /^java11-/.test(id) || /^silver17-/.test(id) || java17ExamIds.has(id);
      if (course === "silver-common") return /^java11-/.test(id) && u.mode !== "exam";
      if (course === "silver17") return /^silver17-/.test(id);
      if (course === "silver11-exam") return /^java11-/.test(id) && u.mode === "exam";
      if (course === "silver17-exam") return java17ExamIds.has(id);
      if (course === "gold-common") return (/^gold11-/.test(id) || u.course === "gold11") && u.mode !== "exam";
      if (course === "gold17-addition") return (/^gold17-/.test(id) || u.course === "gold17") && u.mode !== "exam";
      if (course === "gold11-exam") return (/^gold11-/.test(id) || u.course === "gold11") && u.mode === "exam";
      if (course === "gold17-exam") return (/^gold17-/.test(id) || u.course === "gold17") && u.mode === "exam";
      if (course === "gold11") return /^gold11-/.test(id) || u.course === "gold11";
      if (course === "gold17") return /^gold17-/.test(id) || u.course === "gold17";
      if (course === "gold") return /^gold(11|17)-/.test(id) || u.course === "gold11" || u.course === "gold17";
      if (course === "basic") return /^basic-/.test(id);
      return true;
    };
    return units.filter(u => !u.hidden && matches(u) && (includeExam || u.mode !== "exam"));
  }
  function courseQuestions(course, includeExam = false) {
    return courseUnits(course, includeExam).flatMap(u => DATA.questions?.[u.id] || []);
  }
  function renderCourseStats() {
    const root = document.getElementById("courseStatsRoot");
    if (!root) return;
    const course = root.dataset.course || document.body.dataset.course || "all";
    const questions = courseQuestions(course, false);
    const examQuestions = courseUnits(course, true).filter(u => u.mode === "exam").flatMap(u => DATA.questions?.[u.id] || []);
    const progress = readProgress();
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const marked = markedQuestionIdsFor(questions).length;
    const due = questionsForDueCount(questions);
    const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
    const examAnswered = examQuestions.filter(q => progress[q.id]).length;
    root.innerHTML = `<div class="stat-grid">
      <div class="stat-card"><strong>${answered.length}/${questions.length}</strong><span>解答済み</span></div>
      <div class="stat-card"><strong>${rate}%</strong><span>正答率</span></div>
      <div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div>
      <div class="stat-card"><strong>${marked}</strong><span>見直し</span></div>
      <div class="stat-card"><strong>${due}</strong><span>今日の復習候補</span></div>
      <div class="stat-card"><strong>${examAnswered}</strong><span>模試回答記録</span></div>
    </div>`;
  }


  function courseLabel(course) {
    return ({ bronze: "Java Bronze", silver: "Java Silver", java11: "Java 11 Silver", silver11: "Java 11 Silver", java17: "Java 17 Silver", silver17: "Java 17 Silver", gold: "Java Gold", gold11: "Java 11 Gold", gold17: "Java 17 Gold", basic: "Java基礎" })[course] || "このコース";
  }
  function courseMainHref(course) {
    const units = courseUnits(course, false).filter(u => u.mode !== "exam");
    return pageHref(units[0]?.page || "index.html");
  }
  function courseExamHref(course) {
    const exams = courseUnits(course, true).filter(u => u.mode === "exam");
    return pageHref(exams[0]?.page || "dashboard.html");
  }
  function courseWeakTags(questions) {
    const progress = readProgress();
    const stats = Object.create(null);
    questions.forEach(q => (q.tags || ["untagged"]).forEach(t => {
      stats[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
      stats[t].total++;
      if (progress[q.id]) stats[t].answered++;
      if (progress[q.id]?.isCorrect === true) stats[t].correct++;
      if (progress[q.id]?.isCorrect === false) stats[t].wrong++;
    }));
    return Object.entries(stats)
      .filter(([,v]) => v.wrong > 0 || v.answered >= 3)
      .sort((a,b) => b[1].wrong - a[1].wrong || ((a[1].correct / Math.max(a[1].answered, 1)) - (b[1].correct / Math.max(b[1].answered, 1))))
      .slice(0, 5);
  }
  function unitProgressSummary(unit) {
    const progress = readProgress();
    const questions = DATA.questions?.[unit.id] || [];
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const due = questionsForDueCount(questions);
    const firstUnanswered = questions.find(q => !progress[q.id]);
    const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
    return { questions, answered, correct, wrong, due, firstUnanswered, rate };
  }

  function renderStaticDashboardProgress(root) {
    const progress = readProgress();
    root.querySelectorAll('.exercise-index-item[data-static-unit]').forEach(card => {
      const id = card.dataset.staticUnit;
      const unit = (DATA.units || []).find(u => u.id === id);
      if (!unit || unit.mode === 'exam') return;
      const questions = DATA.questions?.[id] || [];
      const answered = questions.filter(q => progress[q.id]);
      const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
      const total = questions.length || unit.questionCount || unit.fixedCount || 0;
      const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
      const firstUnanswered = questions.find(q => !progress[q.id]);
      const countEl = card.querySelector('.exercise-index-count');
      const rateEl = card.querySelector('.exercise-index-rate');
      if (countEl) countEl.textContent = `解答 ${answered.length} / ${total}`;
      if (rateEl) rateEl.textContent = `正答率 ${rate}%`;
      const continueHref = firstUnanswered ? `${pageHref(unit.page)}?q=${encodeURIComponent(firstUnanswered.id)}` : pageHref(unit.page);
      card.setAttribute('href', continueHref);
      card.setAttribute('aria-label', `${unit.title || card.querySelector('.exercise-index-title')?.textContent || '演習'}を開く`);
    });
  }

  function renderCourseDashboard() {
    const root = document.getElementById("courseDashboardRoot");
    if (!root) return;
    const fallbackHtml = root.innerHTML;
    if (!DATA || !Array.isArray(DATA.units) || !DATA.questions) return;
    if (root.dataset.staticLayout === "true") { renderStaticDashboardProgress(root); renderStaticExamProgressCards(); return; }
    const course = root.dataset.course || document.body.dataset.course || "java17";
    const label = courseLabel(course);
    const units = courseUnits(course, false).filter(u => u.mode !== "exam");
    const questions = units.flatMap(u => DATA.questions?.[u.id] || []);
    const progress = readProgress();
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const marked = markedQuestionIdsFor(questions).length;
    const due = questionsForDueCount(questions);
    const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
    const nextUnit = units.find(u => unitProgressSummary(u).answered.length < unitProgressSummary(u).questions.length) || units[0];
    const nextSummary = nextUnit ? unitProgressSummary(nextUnit) : null;
    const nextHref = nextUnit ? `${pageHref(nextUnit.page)}${nextSummary?.firstUnanswered ? `?q=${encodeURIComponent(nextSummary.firstUnanswered.id)}` : ""}` : courseMainHref(course);
    const unitCards = units.map(u => {
      const s = unitProgressSummary(u);
      const total = s.questions.length || u.fixedCount || 0;
      const continueHref = s.firstUnanswered ? `${pageHref(u.page)}?q=${encodeURIComponent(s.firstUnanswered.id)}` : pageHref(u.page);
      return `<a class="exercise-index-item" data-static-unit="${escapeHtml(u.id)}" href="${escapeHtml(continueHref)}" aria-label="${escapeHtml(u.title)}を開く"><strong class="exercise-index-title">${escapeHtml(u.title)}</strong><span class="exercise-index-metrics"><span class="exercise-index-count">解答 ${s.answered.length} / ${total}</span><span class="exercise-index-rate">正答率 ${s.rate}%</span></span>${u.description ? `<span class="exercise-index-description">${escapeHtml(u.description)}</span>` : ""}</a>`;
    }).join("");
    const html = `<div class="exercise-index-grid">${unitCards}</div>`;
    if (!unitCards.trim() && fallbackHtml.trim()) return;
    root.innerHTML = html;
    renderStaticExamProgressCards();
  }

  function renderStaticExamProgressCards() {
    if (!DATA || !Array.isArray(DATA.units) || !DATA.questions) return;
    const progress = readProgress();
    const examHistory = readExamHistory();
    document.querySelectorAll('.exercise-index-item-exam[data-static-unit]').forEach(card => {
      const id = card.dataset.staticUnit;
      const unit = (DATA.units || []).find(u => u.id === id && u.mode === 'exam');
      if (!unit) return;
      const questions = DATA.questions?.[id] || [];
      const total = questions.length || unit.fixedCount || 0;
      const answeredInProgress = questions.filter(q => progress[q.id]).length;
      const latest = examHistory.find(item => item?.unitId === id && Number(item?.total) > 0);
      const latestRate = latest ? Math.round((Number(latest.score) || 0) / Number(latest.total) * 100) : null;
      const countEl = card.querySelector('.exercise-index-count');
      const rateEl = card.querySelector('.exercise-index-rate');
      const descriptionEl = card.querySelector('.exercise-index-description');
      if (countEl) countEl.textContent = `解答 ${answeredInProgress} / ${total}`;
      if (rateEl) rateEl.textContent = latestRate === null ? '正答率 --' : `正答率 ${latestRate}%`;
      if (descriptionEl) descriptionEl.textContent = `制限時間 ${unit.timeLimitMinutes || 90}分`;
    });
  }

  function renderIndex() {
    const grid = document.getElementById("unitGrid");
    if (grid) {
      const course = grid.dataset.course || document.body.dataset.course || null;
      const units = course ? courseUnits(course, false) : DATA.units.filter(u => u.mode !== "exam");
      grid.innerHTML = units.filter(u => u.mode !== "exam").map(u => unitCardHtml(u)).join("");
    }
    renderExamGrid();
  }

  function renderExamGrid() {
    const grids = [document.getElementById("examGrid"), document.getElementById("examHubGrid")].filter(Boolean);
    if (!grids.length) return;
    grids.forEach(grid => {
      const course = grid.dataset.course || document.body.dataset.course || null;
      const exams = (course ? courseUnits(course, true) : DATA.units).filter(u => u.mode === "exam");
      grid.innerHTML = exams.map(u => unitCardHtml(u)).join("");
    });
    const summary = document.getElementById("examSummaryRoot");
    if (summary) {
      const course = summary.dataset.course || document.body.dataset.course || null;
      const exams = (course ? courseUnits(course, true) : DATA.units).filter(u => u.mode === "exam");
      const questionCounts = [...new Set(exams.map(u => `${u.fixedCount || (DATA.questions?.[u.id]?.length || 0)}問`))].join(" / ") || "-";
      const timeLimits = [...new Set(exams.map(u => `${u.timeLimitMinutes || 90}分`))].join(" / ") || "-";
      summary.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${exams.length}</strong><span>模試数</span></div><div class="stat-card"><strong>${questionCounts}</strong><span>模試問題数</span></div><div class="stat-card"><strong>${timeLimits}</strong><span>制限時間</span></div></div>`;
    }
  }

  function answerKeys(q) {
    const raw = q?.answer;
    if (Array.isArray(raw)) return raw.map(value => String(value)).filter(Boolean);
    return raw ? [String(raw)] : [];
  }
  function selectCount(q) {
    const explicit = Number(q?.selectCount || 0);
    if (explicit > 0) return explicit;
    return Math.max(1, answerKeys(q).length || 1);
  }
  function isMultiQuestion(q) {
    return q?.type === "multi" || selectCount(q) > 1;
  }

  function displayChoiceKey(index) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (index >= 0 && index < letters.length) return letters[index];
    return `選択肢${index + 1}`;
  }
  function sourceChoiceIndex(q, sourceKey) {
    return (q.options || []).findIndex(opt => String(opt.key) === String(sourceKey));
  }
  function sourceToDisplayChoiceKey(q, sourceKey) {
    const idx = sourceChoiceIndex(q, sourceKey);
    return idx >= 0 ? displayChoiceKey(idx) : String(sourceKey || "");
  }
  function displayChoiceKeys(q, keys) {
    return (keys || []).map(key => sourceToDisplayChoiceKey(q, key)).filter(Boolean);
  }
  function optionDisplayKey(q, opt) {
    return sourceToDisplayChoiceKey(q, opt?.key);
  }
  function displayOptionDetail(q, text) {
    if (text && typeof text === "object") {
      const key = sourceToDisplayChoiceKey(q, text.key || "");
      const label = text.label ? `：${text.label}` : "";
      const explanation = text.explanation ? ` ${text.explanation}` : "";
      return `${key}${label}${explanation}`.trim();
    }
    const raw = String(text || "");
    const match = raw.match(/^([^：:]+)([：:])(.*)$/);
    if (!match) return raw;
    return `${sourceToDisplayChoiceKey(q, match[1])}${match[2]}${match[3]}`;
  }

  function optionDetailListHtml(q, selected = [], answer = []) {
    const details = Array.isArray(q.optionDetails) ? q.optionDetails : (Array.isArray(q.explanation?.optionDetails) ? q.explanation.optionDetails : []);
    if (!details.length) return "";
    const selectedSet = new Set(selected || []);
    const answerSet = new Set(answer || []);
    const cards = details.map(detail => {
      const sourceKey = String(detail?.key || detail?.choice || detail?.option || "");
      const displayKey = sourceToDisplayChoiceKey(q, sourceKey);
      const opt = (q.options || []).find(item => String(item.key) === sourceKey) || {};
      const label = detail?.label || opt.text || opt.code || "";
      const explanation = detail?.explanation || detail?.reason || detail?.text || "";
      const isAnswer = answerSet.has(sourceKey) || detail?.judgement === "correct";
      const picked = selectedSet.has(sourceKey);
      const cls = isAnswer ? "correct-choice" : picked ? "wrong-choice" : "";
      const badge = isAnswer ? "正解" : picked ? "選択" : "未選択";
      return `<div class="choice-explanation ${cls}"><p><strong>${escapeHtml(displayKey)}. ${escapeHtml(label)}</strong> <span>${escapeHtml(badge)}</span></p><p>${formatReadableText(explanation)}</p></div>`;
    }).join("");
    return `<section class="quiz-explanation-section" aria-label="選択肢別解説"><h4>選択肢別解説</h4><div class="choice-explanation-list">${cards}</div></section>`;
  }
  function normalizeSelection(q, selected) {
    const values = [...new Set((selected || []).map(value => String(value)).filter(Boolean))];
    if (isMultiQuestion(q)) return values.sort();
    return values.length ? [values[values.length - 1]] : [];
  }
  function selectedKeys(card) {
    return Array.from(card.querySelectorAll("input[data-option]:checked")).map(input => input.value);
  }
  function optionHtml(q, opt) {
    const inputType = isMultiQuestion(q) ? "checkbox" : "radio";
    const body = opt.code ? renderCodeLines(opt.code) : `<span>${escapeHtml(opt.text)}</span>`;
    const displayKey = optionDisplayKey(q, opt);
    return `<label class="option" data-key="${escapeHtml(opt.key)}" data-display-key="${escapeHtml(displayKey)}">
      <input type="${inputType}" name="${escapeHtml(q.id)}" value="${escapeHtml(opt.key)}" data-option>
      <div><span class="option-key">${escapeHtml(displayKey)}.</span>${body}</div>
    </label>`;
  }
  function questionHtml(q) {
    const codeBlocks = (q.codeBlocks || []).map(block => renderCodeBlock(block)).join("");
    const command = q.command ? `<div class="command">${escapeHtml(q.command)}</div>` : "";
    const selectText = isMultiQuestion(q) ? `${selectCount(q)}つ選択` : "1つ選択";
    const difficultyText = q.difficulty ? `・${q.difficulty === "hard" ? "応用" : q.difficulty === "basic" ? "基礎" : "標準"}` : "";
    const tagText = q.tags && q.tags.length ? `・${q.tags.slice(0, 3).join(" / ")}` : "";
    const submitLabel = isExamUnit() ? "回答を保存" : "解答する";
    const note = isExamUnit() ? `<span class="exam-save-state" data-save-state>未保存</span>` : "";
    const idx = currentIndex();
    const totalQuestions = questionsForCurrentUnit().length;
    const prevDisabled = idx <= 0 ? "disabled" : "";
    const nextDisabled = idx >= totalQuestions - 1 ? "disabled" : "";
    const reviewActive = isMarkedReview(q.id) ? " active" : "";
    const reviewLabel = isMarkedReview(q.id) ? "見直し解除" : "見直しに追加";
    const qMeta = selectText;
    return `<article class="question-card" id="${escapeHtml(q.id)}" data-question-id="${escapeHtml(q.id)}">
      <div class="q-head"><h2 class="q-title">問${q.number}. ${escapeHtml(q.title)}</h2><div class="q-meta">${escapeHtml(qMeta)}</div></div>
      ${isExamUnit() ? "" : `<div class="tag-row">${tagBadges(q.tags)}</div>`}
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${command}${codeBlocks}
      <div class="options">${q.options.map(opt => optionHtml(q, opt)).join("")}</div>
      <div class="result" data-result></div>
      <div class="answer-actions" aria-label="解答操作">
        <button class="btn" data-prev type="button" ${prevDisabled}>前の問題</button>
        <button class="btn primary" data-submit>${escapeHtml(submitLabel)}</button>
        <button class="btn" data-next type="button" ${nextDisabled}>次の問題</button>
        <button class="btn review-btn${reviewActive}" data-review-toggle type="button">${escapeHtml(reviewLabel)}</button>
        ${note}<span class="inline-note" data-message></span>
      </div>
    </article>`;
  }

  function renderQuestionControls() {
    const questions = questionsForCurrentUnit();
    const idx = currentIndex();
    const current = questions[idx];
    const progress = readProgress();
    const reviews = reviewMap();
    const finished = isExamUnit() && !!getExamState()?.finishedAt;
    const palette = questions.map((q, i) => {
      const p = progress[q.id];
      const classes = ["qnum"];
      if (i === idx) classes.push("current");
      if (p) classes.push("answered");
      if (reviews[q.id] || isGloballyMarked(q.id)) classes.push("review");
      if (finished && p?.isCorrect === true) classes.push("correct");
      if (finished && p?.isCorrect === false) classes.push("wrong");
      return `<button class="${classes.join(" ")}" type="button" data-goto="${i}" data-palette-current="${i === idx ? 'true' : 'false'}" ${i === idx ? 'aria-current="true"' : ''} title="問${q.number}">${q.number}</button>`;
    }).join("");
    const reviewButton = current ? `<button class="btn review-btn ${isMarkedReview(current.id) ? "active" : ""}" data-review-toggle>${isMarkedReview(current.id) ? "見直し解除" : "後で見直す"}</button>` : "";
    return `<section class="single-nav-panel" aria-label="問題移動">
      <div class="single-nav-main">
        <button class="btn" data-prev ${idx === 0 ? "disabled" : ""}>前の問題</button>
        <strong>問${questions[idx]?.number || 0} / ${questions.length}</strong>
        <button class="btn" data-next ${idx >= questions.length - 1 ? "disabled" : ""}>次の問題</button>
        ${reviewButton}
      </div>
      <details class="question-palette" ${isExamUnit() ? "open" : ""}>
        <summary>問題番号一覧</summary>
        <div class="qnum-grid">${palette}</div>
      </details>
    </section>`;
  }

  function examQuestionExplanationListHtml(questions, progress) {
    if (!isExamUnit() || !getExamState()?.finishedAt || !questions.length) return "";
    const items = questions.map((q, index) => {
      const saved = progress[q.id] || {};
      const selected = normalizeSelection(q, saved.selected || []);
      const answer = answerKeys(q);
      const isCorrect = saved.isCorrect === true;
      const status = isCorrect ? "正解" : (selected.length ? "不正解" : "未回答");
      const statusClass = isCorrect ? "correct" : "wrong";
      const optionDetails = q.explanation?.optionDetails
        ? `<details class="option-detail-box"><summary>選択肢別の理由</summary><ul>${q.explanation.optionDetails.map(p => `<li>${formatReadableText(displayOptionDetail(q, p))}</li>`).join("")}</ul></details>`
        : "";
      const pointList = q.explanation?.points?.length
        ? `<ul class="readable-list">${q.explanation.points.map(p => `<li>${formatReadableText(p)}</li>`).join("")}</ul>`
        : "";
      const codeBlocks = (q.codeBlocks || []).map(block => renderCodeBlock(block)).join("");
      return `<details class="exam-explanation-item" id="exam-explanation-${escapeHtml(q.id)}" ${index === 0 ? "open" : ""}>
        <summary><span>問${escapeHtml(q.number)}</span><strong>${escapeHtml(q.title)}</strong><em class="exam-explanation-status ${statusClass}">${escapeHtml(status)}</em></summary>
        <div class="exam-explanation-body">
          <p class="prompt">${escapeHtml(q.prompt)}</p>
          ${q.command ? `<div class="command">${escapeHtml(q.command)}</div>` : ""}
          ${codeBlocks}
          <div class="exam-answer-line"><span>あなたの回答: ${selected.length ? escapeHtml(displayChoiceKeys(q, selected).join("・")) : "未回答"}</span><span>正解: ${escapeHtml(displayChoiceKeys(q, answer).join("・"))}</span></div>
          ${renderExplanationBody(q)}
          ${optionDetailListHtml(q, selected, answer)}
          <div class="chip-row"><button class="mini-chip" type="button" data-goto="${index}">この問題へ移動</button></div>
        </div>
      </details>`;
    }).join("");
    return `<section class="exam-analysis-panel exam-explanation-list" aria-label="問題解説一覧">
      <div class="section-head-row"><div><h4>問題解説一覧</h4><p class="inline-note">採点後に、各問の回答・正解・解説をまとめて確認できます。</p></div></div>
      ${items}
    </section>`;
  }

  function setQuestionDisabled(disabled) {
    document.querySelectorAll("input[data-option], button[data-submit]").forEach(el => { el.disabled = disabled; });
  }
  function validateSelection(q, selected) {
    const required = selectCount(q);
    if (isMultiQuestion(q) && selected.length !== required) return `${required}つ選択が必要です。現在 ${selected.length}つです。`;
    if (!isMultiQuestion(q) && selected.length !== 1) return "1つ選択が必要です。";
    return "";
  }

  function renderResult(card, q, selected, persist) {
    selected = normalizeSelection(q, selected);
    const answer = answerKeys(q);
    const isCorrect = arraysEqual(selected, answer);
    const result = card.querySelector("[data-result]");
    const answerText = displayChoiceKeys(q, answer).join("・");
    const selectedText = displayChoiceKeys(q, selected).join("・");
    card.querySelectorAll(".option").forEach(label => {
      const key = label.dataset.key;
      label.classList.remove("correct", "incorrect", "missed");
      if (answer.includes(key)) label.classList.add("correct");
      if (selected.includes(key) && !answer.includes(key)) label.classList.add("incorrect");
      if (!selected.includes(key) && answer.includes(key) && !isCorrect) label.classList.add("missed");
    });
    result.className = `result visible ${isCorrect ? "ok" : "bad"}`;
    card.classList.add("answered");
    result.innerHTML = `<h4>${isCorrect ? "正解" : "不正解"}</h4>
      <p><strong>あなたの回答:</strong> ${selected.length ? escapeHtml(selectedText) : "未回答"}</p>
      <p><strong>正解:</strong> ${escapeHtml(answerText)}</p>
      ${renderExplanationBody(q)}
      ${optionDetailListHtml(q, selected, answer)}
      ${!isCorrect ? mistakeReasonPickerHtml(q.id) : ""}
      ${relatedLinksHtml(q)}`;
    bindMistakeReasonBox(card, q.id);
    if (persist) {
      const progress = readProgress();
      progress[q.id] = { selected, isCorrect, answeredAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
      writeProgress(progress);
      recordMissedUnitResult(q, isCorrect);
      updateProgressUi();
    }
    if (persist && result) result.scrollIntoView({ behavior: "smooth", block: "start" });
    return isCorrect;
  }

  function saveExamAnswer(card, q, selected) {
    selected = normalizeSelection(q, selected);
    const progress = readProgress();
    progress[q.id] = { selected, isCorrect: null, savedAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
    writeProgress(progress);
    const saveState = card.querySelector("[data-save-state]");
    if (saveState) saveState.textContent = "保存済み";
    updateProgressUi();
  }

  function resetQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]"); result.className = "result"; result.innerHTML = "";
    card.classList.remove("answered");
    const msg = card.querySelector("[data-message]"); if (msg) msg.textContent = "";
    const saveState = card.querySelector("[data-save-state]"); if (saveState) saveState.textContent = "未保存";
    const progress = readProgress(); delete progress[q.id]; writeProgress(progress);
    updateProgressUi();
    renderQuestionView(false);
  }

  function updateProgressUi() {
    if (!unitId && !tagFilter && !reviewMode && !randomMode) return;
    const questions = questionsForCurrentUnit();
    const progress = readProgress();
    const reviewed = Object.keys(reviewMap()).length;
    const answered = questions.filter(q => progress[q.id]).length;
    const correct = questions.filter(q => progress[q.id]?.isCorrect === true).length;
    const fill = document.getElementById("progressFill") || document.querySelector(".progress-bar");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = questions.length ? `${Math.round(answered / questions.length * 100)}%` : "0%";
    if (text) {
      text.textContent = isExamUnit()
        ? `${answered}/${questions.length} 保存済み・見直し ${reviewed}${getExamState()?.finishedAt ? `・正解 ${correct}` : ""}`
        : `${answered}/${questions.length} 解答済み・正解 ${correct}`;
    }
  }

  function goToQuestion(index, scrollTop) {
    setCurrentIndex(index);
    renderQuestionView(scrollTop !== false);
  }
  function goRelative(delta) { goToQuestion(currentIndex() + delta, true); }

  function bindQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => {
      input.addEventListener("change", () => {
        if (!isExamUnit()) return;
        const state = getExamState();
        if (!state?.startedAt || state?.finishedAt) return;
        const selected = normalizeSelection(q, selectedKeys(card));
        if (!validateSelection(q, selected)) saveExamAnswer(card, q, selected);
      });
    });
    card.querySelector("[data-submit]").addEventListener("click", () => {
      const selected = normalizeSelection(q, selectedKeys(card));
      const msg = card.querySelector("[data-message]");
      const err = validateSelection(q, selected);
      if (err) { msg.textContent = err; return; }
      msg.textContent = "";
      if (isExamUnit()) {
        const state = getExamState();
        if (!state?.startedAt) { msg.textContent = "先に模試を開始する必要があります。"; return; }
        if (state?.finishedAt) { msg.textContent = "採点済みです。やり直す場合は模試をリセットしてください。"; return; }
        saveExamAnswer(card, q, selected);
        if (currentIndex() < questionsForCurrentUnit().length - 1) goRelative(1);
      } else {
        renderResult(card, q, selected, true);
        if (readSettings().autoNext && currentIndex() < questionsForCurrentUnit().length - 1) {
          setTimeout(() => goRelative(1), 650);
        }
      }
    });
    card.querySelector("[data-clear]")?.addEventListener("click", () => {
      if (isExamUnit() && getExamState()?.finishedAt) return;
      resetQuestion(card, q);
    });
    card.querySelector("[data-copy-link]")?.addEventListener("click", async () => {
      const u = unitById(unitOfQuestion(q.id));
      const url = new URL(u?.page || location.pathname.split('/').pop(), location.href);
      url.searchParams.set("q", q.id);
      try { await navigator.clipboard.writeText(url.href); card.querySelector("[data-message]").textContent = "問題リンクをコピーしました。"; }
      catch (_) { card.querySelector("[data-message]").textContent = url.href; }
    });
  }

  function restoreCurrentProgress(q) {
    const progress = readProgress();
    const saved = progress[q.id];
    const card = document.querySelector(`[data-question-id="${q.id}"]`);
    if (!card) { updateProgressUi(); return; }
    if (!saved) { updateProgressUi(); return; }
    const restoredSelected = normalizeSelection(q, saved.selected || []);
    if (!arraysEqual(saved.selected || [], restoredSelected)) {
      progress[q.id] = { ...saved, selected: restoredSelected };
      writeProgress(progress);
    }
    restoredSelected.forEach(key => {
      const input = card.querySelector(`input[value="${CSS.escape(key)}"]`);
      if (input) input.checked = true;
    });
    const saveState = card.querySelector("[data-save-state]");
    if (saveState) saveState.textContent = "保存済み";
    if (isExamUnit()) {
      if (getExamState()?.finishedAt) renderResult(card, q, restoredSelected, false);
    } else {
      renderResult(card, q, restoredSelected, false);
    }
    updateProgressUi();
  }

  function examRemainingSeconds(state) {
    if (!state?.startedAt) return examDurationSec();
    if (state.finishedAt) return Math.max(0, state.remainingAtFinish ?? 0);
    const elapsed = Math.floor((Date.now() - Date.parse(state.startedAt)) / 1000);
    return examDurationSec() - elapsed;
  }
  function examCourseName(unit) {
    const id = unit?.id || "";
    const course = unit?.course || "";
    if (course === "bronze" || id.startsWith("bronze-")) return "Bronze";
    if (course === "java11" || id.startsWith("java11-") || id.startsWith("unit")) return "Silver";
    if (course.startsWith("gold") || id.startsWith("gold")) return "Gold";
    return "Java";
  }
  function setExamResultHash() {
    const nextUrl = `${location.pathname}${location.search || ""}#examResult`;
    if (window.history?.replaceState) window.history.replaceState(null, "", nextUrl);
    else if (location.hash !== "#examResult") location.hash = "examResult";
  }
  function scrollToExamResult() {
    const findTarget = () => document.querySelector("#examResult .exam-result-box") || document.getElementById("examResult") || document.getElementById("examPanel");
    const run = (behavior = "smooth") => {
      const target = findTarget();
      if (!target) return;
      const header = document.querySelector(".site-header");
      const offset = (header?.getBoundingClientRect?.().height || 0) + 16;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior });
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      try { target.focus({ preventScroll: true }); } catch (_) { /* focus is optional */ }
    };
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const behavior = reduced ? "auto" : "smooth";
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => requestAnimationFrame(() => run(behavior)));
    else setTimeout(() => run(behavior), 0);
    setTimeout(() => run("auto"), 120);
    setTimeout(() => run("auto"), 360);
  }

  function unansweredQuestionNumbers() {
    const progress = readProgress();
    return questionsForCurrentUnit().filter(q => !(progress[q.id]?.selected || []).length).map(q => q.number);
  }
  function renderExamPanel() {
    if (!isExamUnit()) return;
    const hero = document.querySelector(".hero");
    if (!hero || document.getElementById("examPanel")) return;
    const unit = currentUnit();
    const panel = document.createElement("div");
    panel.id = "examPanel";
    panel.className = "exam-panel";
    panel.innerHTML = `<div class="exam-status exam-official-status">
        <div><strong>${escapeHtml(examCourseName(unit))} 模試</strong><span> ${unit.fixedCount || 60}問 / ${unit.timeLimitMinutes || 90}分</span></div>
        <span class="timer" id="examTimer">${formatTime(examDurationSec())}</span>
      </div>
      <div class="exam-live-summary" id="examLiveSummary" aria-live="polite"></div>
      <div class="exam-actions exam-official-actions">
        <button id="startExam" class="btn primary">開始</button>
        <button id="finishExam" class="btn">採点</button>
        <button id="jumpExamResult" class="btn ghost" type="button" hidden>模試結果へ移動</button>
        <button id="jumpReview" class="btn ghost">見直し</button>
        <button id="resetExam" class="btn ghost">リセット</button>
      </div>
      <p class="inline-note" id="examMessage">採点するまで正解・解説は表示されません。</p><div id="examResult"></div>`;
    hero.appendChild(panel);
    document.getElementById("startExam")?.addEventListener("click", startExam);
    document.getElementById("finishExam")?.addEventListener("click", () => finishExam(false));
    document.getElementById("jumpExamResult")?.addEventListener("click", scrollToExamResult);
    document.getElementById("resetExam")?.addEventListener("click", resetExam);
    document.getElementById("jumpReview")?.addEventListener("click", jumpToFirstReview);
    refreshExamUi();
  }
  function startExam() {
    const state = getExamState();
    if (state?.startedAt && !state.finishedAt) return;
    setExamState({ startedAt: new Date().toISOString(), durationSec: examDurationSec(), finishedAt: null });
    refreshExamUi();
    renderQuestionView(false);
  }
  function resetExam() {
    if (!confirm("この模試のタイマー・回答・採点結果・見直しマークをすべて削除します。よろしいですか？")) return;
    setExamState(null);
    setReviewMap({});
    const progress = readProgress();
    questionsForCurrentUnit().forEach(q => delete progress[q.id]);
    writeProgress(progress);
    setCurrentIndex(0);
    location.reload();
  }
  function finishExam(timeUp) {
    if (!isExamUnit()) return;
    const state = getExamState();
    if (!state?.startedAt || state.finishedAt) return;
    const remaining = Math.max(0, examRemainingSeconds(state));
    const progress = readProgress();
    const unansweredNumbers = unansweredQuestionNumbers();
    const unansweredBeforeFinish = unansweredNumbers.length;
    if (!timeUp && unansweredBeforeFinish > 0) {
      const shown = unansweredNumbers.slice(0, 12).join("、");
      const more = unansweredBeforeFinish > 12 ? ` ほか${unansweredBeforeFinish - 12}問` : "";
      if (!confirm(`${unansweredBeforeFinish}問が未回答です。未回答: ${shown}${more}
このまま採点しますか？`)) return;
    }
    let correct = 0;
    questionsForCurrentUnit().forEach(q => {
      const selected = normalizeSelection(q, progress[q.id]?.selected || []);
      const isCorrect = arraysEqual(selected, answerKeys(q));
      progress[q.id] = { ...(progress[q.id] || {}), selected, isCorrect, answeredAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
      recordMissedUnitResult(q, isCorrect);
      if (isCorrect) correct++;
    });
    writeProgress(progress);
    const finishedAt = new Date().toISOString();
    setExamState({ ...state, finishedAt, remainingAtFinish: remaining, timeUp: !!timeUp, score: correct });
    const examHistory = readExamHistory();
    examHistory.unshift({ unitId, title: currentUnit()?.title || unitId, startedAt: state.startedAt, finishedAt, score: correct, total: questionsForCurrentUnit().length, usedSec: Math.max(0, (state.durationSec || examDurationSec()) - remaining), timeUp: !!timeUp });
    writeExamHistory(examHistory.slice(0, 30));
    refreshExamUi();
    renderQuestionView(false);
    updateProgressUi();
    setExamResultHash();
    scrollToExamResult();
  }

  function examResultHtml() {
    const state = getExamState();
    if (!state?.finishedAt) return "";
    const questions = questionsForCurrentUnit();
    const progress = readProgress();
    const reviews = reviewMap();
    const total = questions.length || 1;
    const correct = questions.filter(q => progress[q.id]?.isCorrect === true).length;
    const wrong = questions.filter(q => progress[q.id]?.isCorrect === false).length;
    const unanswered = questions.filter(q => !(progress[q.id]?.selected || []).length).length;
    const usedSec = Math.max(0, (state.durationSec || examDurationSec()) - (state.remainingAtFinish || 0));
    const answered = questions.filter(q => progress[q.id]);
    const byTag = Object.create(null);
    const byCategory = Object.create(null);
    const markedStats = { total: 0, correct: 0 };
    questions.forEach(q => {
      const ok = progress[q.id]?.isCorrect === true;
      if (reviews[q.id]) { markedStats.total++; if (ok) markedStats.correct++; }
      (q.tags || ["untagged"]).forEach(t => {
        byTag[t] ||= { total: 0, correct: 0, wrong: 0 };
        byTag[t].total++;
        if (ok) byTag[t].correct++; else byTag[t].wrong++;
      });
      const category = examCategoryForQuestion(q);
      byCategory[category] ||= { total: 0, correct: 0, wrong: 0 };
      byCategory[category].total++;
      if (ok) byCategory[category].correct++; else byCategory[category].wrong++;
    });
    const weakTags = Object.entries(byTag)
      .filter(([,v]) => v.total >= 2)
      .sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total) || b[1].wrong - a[1].wrong)
      .slice(0,5);
    const tagRows = weakTags.map(([tag,v]) => `<tr><td>${escapeHtml(tagTitle(tag))}</td><td>${v.correct}/${v.total}</td><td>${pct(v.correct,v.total)}%</td><td><a href="${tagHref(tag)}">練習</a></td></tr>`).join("") || `<tr><td colspan="4">弱点タグを出すには、もう少し回答データが必要です。</td></tr>`;
    const categoryEntries = Object.entries(byCategory).sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total) || b[1].wrong - a[1].wrong);
    const categoryRows = categoryEntries.map(([cat,v]) => { const rate = pct(v.correct, v.total); const route = routeForExamCategory(cat); const links = route ? `<a href="${rootHref(route.article)}">記事</a> / <a href="${rootHref(route.practice)}">演習</a>` : `<a href="${pageHref('review-wrong.html')}?unit=${encodeURIComponent(unitId)}">復習</a>`; return `<tr><td>${escapeHtml(cat)}</td><td>${v.correct}/${v.total}</td><td>${rate}%</td><td>${escapeHtml(resultRank(rate))}</td><td>${links}</td></tr>`; }).join("");
    const weakCategories = categoryEntries.filter(([,v]) => v.total >= 2 && pct(v.correct, v.total) < 80).slice(0, 4);
    const reviewAdvice = weakCategories.length
      ? weakCategories.map(([cat]) => { const route = routeForExamCategory(cat); return route ? `<a class="mini-chip" href="${rootHref(route.article)}">${escapeHtml(cat)}の記事</a><a class="mini-chip" href="${rootHref(route.practice)}">${escapeHtml(cat)}の演習</a>` : `<span class="mini-chip">${escapeHtml(cat)}を復習</span>`; }).join("")
      : (weakTags.length ? weakTags.map(([tag]) => `<a class="mini-chip" href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))}を復習</a>`).join("") : `<span class="inline-note">弱点が大きく偏っていません。間違えた問題だけをもう一度見直してください。</span>`);
    const markedRate = markedStats.total ? `${markedStats.correct}/${markedStats.total} (${pct(markedStats.correct, markedStats.total)}%)` : "0問";
    const unansweredList = questions.filter(q => !(progress[q.id]?.selected || []).length).slice(0, 12).map(q => `問${q.number}`).join("、");
    const goldPriority = goldPriorityRoute(questions, progress);
    const silverPriority = silverPriorityRoute(questions, progress);
    const nextActionLead = isGoldExamContext() && goldPriority ? `Goldロードマップの${escapeHtml(goldPriority.route.label)}へ戻るのが最優先です。` : (isSilverExamContext() && silverPriority ? `Silverロードマップの${escapeHtml(silverPriority.route.label)}へ戻るのが最優先です。` : (weakCategories.length ? `${escapeHtml(weakCategories[0][0])}から戻るのが最優先です。` : (wrong ? "間違えた問題だけを復習してください。" : "大きな穴は見えていません。時間を空けてもう一度解いてください。")));
    const targetRate = isGoldExamContext() ? 70 : 80;
    const rateNow = Math.round(correct/total*100);
    const targetCorrect = Math.ceil(total * targetRate / 100);
    const targetGap = correct - targetCorrect;
    const targetText = targetGap >= 0 ? `目標ラインを${targetGap}問上回っています。` : `目標ラインまであと${Math.abs(targetGap)}問です。`;
    const weakestCategory = categoryEntries[0]?.[0] || "";
    const weakestTag = weakTags[0]?.[0] || "";
    const reviewSummary = `<section class="exam-analysis-panel exam-after-review"><h4>模試後レビュー</h4><div class="exam-after-grid"><div><strong>${targetRate}%</strong><span>目標正答率</span></div><div><strong>${targetGap >= 0 ? "+" + targetGap : targetGap}</strong><span>目標との差</span></div><div><strong>${weakestCategory ? escapeHtml(weakestCategory) : "なし"}</strong><span>最優先分類</span></div><div><strong>${weakestTag ? escapeHtml(tagTitle(weakestTag)) : "なし"}</strong><span>最優先タグ</span></div></div><p>${escapeHtml(targetText)} ${unanswered ? `未回答が${unanswered}問あります。` : "未回答はありません。"}</p></section>`;
    const goldRoadmapHtml = goldRoadmapResultHtml(questions, progress);
    const silverRoadmapHtml = silverRoadmapResultHtml(questions, progress);
    const explanationListHtml = examQuestionExplanationListHtml(questions, progress);
    return `<div class="exam-result-box">
      <h3>模試結果</h3>
      <div class="result-summary-grid">
        <div><strong>${correct}/${total}</strong><span>正解数</span></div>
        <div><strong>${rateNow}%</strong><span>正答率</span></div>
        <div><strong>${formatTime(usedSec)}</strong><span>使用時間</span></div>
        <div><strong>${unanswered}</strong><span>未回答</span></div>
        <div><strong>${Object.keys(reviews).length}</strong><span>見直し</span></div>
        <div><strong>${wrong}</strong><span>不正解</span></div>
        <div><strong>${markedRate}</strong><span>見直し正答率</span></div>
      </div>
      ${unanswered ? `<p class="exam-analysis-note">未回答: ${escapeHtml(unansweredList)}${unanswered > 12 ? " ほか" + (unanswered - 12) + "問" : ""}</p>` : ""}
      ${reviewSummary}
      <section class="exam-analysis-panel"><h4>次にやること</h4><p>${nextActionLead}</p><div class="exam-review-advice">${reviewAdvice}</div></section>
      ${goldRoadmapHtml}
      ${silverRoadmapHtml}
      ${explanationListHtml}
      <h4>カテゴリ別</h4>
      <table class="mini-table exam-analysis-table"><thead><tr><th>分類</th><th>正解</th><th>正答率</th><th>判定</th><th>戻る場所</th></tr></thead><tbody>${categoryRows}</tbody></table>
      <h4>弱点タグ</h4>
      <table class="mini-table"><thead><tr><th>タグ</th><th>正解</th><th>正答率</th><th>練習</th></tr></thead><tbody>${tagRows}</tbody></table>
      <div class="exam-result-actions retry-route-actions">
        <a class="btn primary" href="${pageHref('review-wrong.html')}?unit=${encodeURIComponent(unitId)}">この模試の不正解だけ解き直す</a>
        <a class="btn" href="${pageHref('review-missed-units.html')}">間違えた単元を復習する</a>
        <a class="btn" href="${pageHref('review-marked.html')}?unit=${encodeURIComponent(unitId)}">この模試の見直し問題だけ解く</a>
        <a class="btn" href="${pageHref('review-weak.html')}?unit=${encodeURIComponent(unitId)}">この模試の弱点順に解く</a>
        <button class="btn ghost" type="button" id="jumpWrongExam">最初の不正解へ戻る</button>
        <button class="btn ghost" type="button" id="jumpMarkedExam">見直し問題へ戻る</button>
      </div>
    </div>`;
  }
  function bindExamResultButtons() {
    document.getElementById("jumpWrongExam")?.addEventListener("click", () => {
      const p = readProgress();
      const idx = questionsForCurrentUnit().findIndex(q => p[q.id]?.isCorrect === false);
      if (idx >= 0) goToQuestion(idx, true); else alert("不正解の問題はありません。");
    });
    document.getElementById("jumpMarkedExam")?.addEventListener("click", jumpToFirstReview);
    document.querySelectorAll("#examResult [data-goto]").forEach(btn => btn.addEventListener("click", () => goToQuestion(Number(btn.dataset.goto), true)));
  }

  function refreshExamUi() {
    if (!isExamUnit()) return;
    const state = getExamState();
    const timer = document.getElementById("examTimer");
    const msg = document.getElementById("examMessage");
    const startBtn = document.getElementById("startExam");
    const finishBtn = document.getElementById("finishExam");
    const resultBtn = document.getElementById("jumpExamResult");
    document.body.classList.toggle("exam-running", !!state?.startedAt && !state?.finishedAt);
    document.body.classList.toggle("exam-finished", !!state?.finishedAt);
    if (examTimerId) clearInterval(examTimerId);
    const tick = () => {
      const current = getExamState();
      const remaining = examRemainingSeconds(current);
      if (timer) {
        timer.textContent = formatTime(remaining);
        timer.classList.toggle("danger", remaining <= 300 && !!current?.startedAt && !current?.finishedAt);
      }
      let floatingTimer = document.getElementById("examFloatingTimer");
      if (current?.startedAt && !current?.finishedAt) {
        if (!floatingTimer) {
          floatingTimer = document.createElement("div");
          floatingTimer.id = "examFloatingTimer";
          floatingTimer.className = "exam-floating-timer";
          floatingTimer.setAttribute("aria-live", "polite");
          document.body.appendChild(floatingTimer);
        }
        floatingTimer.textContent = `残り時間 ${formatTime(remaining)}`;
        floatingTimer.classList.toggle("danger", remaining <= 300);
      } else if (floatingTimer) {
        floatingTimer.remove();
      }
      if (current?.startedAt && !current?.finishedAt && remaining <= 0) finishExam(true);
    };
    tick();
    if (state?.startedAt && !state.finishedAt) examTimerId = setInterval(tick, 1000);
    if (startBtn) startBtn.disabled = !!state?.startedAt && !state?.finishedAt;
    if (finishBtn) finishBtn.disabled = !state?.startedAt || !!state?.finishedAt;
    if (resultBtn) resultBtn.hidden = !state?.finishedAt;
    setQuestionDisabled(!state?.startedAt || !!state?.finishedAt);
    const live = document.getElementById("examLiveSummary");
    if (live) {
      const qs = questionsForCurrentUnit();
      const progress = readProgress();
      const reviewCount = Object.keys(reviewMap()).length;
      const answeredCount = qs.filter(q => (progress[q.id]?.selected || []).length).length;
      const unansweredCount = Math.max(0, qs.length - answeredCount);
      live.innerHTML = `<span><strong>${answeredCount}</strong><small>回答済み</small></span><span><strong>${unansweredCount}</strong><small>未回答</small></span><span><strong>${reviewCount}</strong><small>見直し</small></span>`;
    }
    const resultSlot = document.getElementById("examResult");
    if (resultSlot) { resultSlot.innerHTML = examResultHtml(); bindExamResultButtons(); }
    if (state?.finishedAt && location.hash === "#examResult") setTimeout(scrollToExamResult, 0);
    if (msg) {
      const remainingNow = examRemainingSeconds(state);
      if (!state?.startedAt) msg.textContent = "開始するとタイマーが動きます。採点まで正解・解説は表示されません。";
      else if (state.finishedAt) msg.textContent = `${state.timeUp ? "時間切れで採点しました。" : "採点済みです。"} スコア: ${state.score ?? 0}/${questionsForCurrentUnit().length}`;
      else if (remainingNow <= 300) msg.textContent = "残り5分以内です。未回答と見直しマークがある問題を優先できます。";
      else msg.textContent = "選択内容は保存されます。最後に採点すると結果と解説が表示されます。";
    }
  }
  function jumpToFirstReview() {
    const map = reviewMap();
    const questions = questionsForCurrentUnit();
    const idx = questions.findIndex(q => map[q.id]);
    if (idx >= 0) goToQuestion(idx, true);
    else alert("見直しマーク付きの問題はありません。");
  }
  function jumpToFirstUnanswered() {
    const p = readProgress();
    const targetIndex = questionsForCurrentUnit().findIndex(q => !p[q.id]);
    if (targetIndex >= 0) goToQuestion(targetIndex, true);
  }

  function renderQuestionView(scrollTop) {
    const root = document.getElementById("questionRoot");
    if (!root || (!unitId && !tagFilter && !reviewMode && !randomMode)) return;
    const questions = questionsForCurrentUnit();
    if (!questions.length) {
      const scope = filteredReviewUnitTitle();
      const isReview = !!reviewMode;
      const reviewLinks = isReview ? `<div class="practice-tools retry-empty-actions"><a class="btn primary" href="${pageHref('dashboard.html')}">ダッシュボードへ戻る</a><a class="btn" href="${pageHref('random.html')}">ランダム演習へ</a><a class="btn ghost" href="${pageHref('review-wrong.html')}${scope && reviewUnitFilter ? `?unit=${encodeURIComponent(reviewUnitFilter)}` : ""}">不正解復習を再判定</a></div>` : "";
      root.innerHTML = isReview
        ? `<section class="notice retry-empty"><h2>復習対象はありません</h2><p>${scope ? escapeHtml(scope) + " は" : "この条件では"}現在の復習対象がありません。模試・演習で不正解や見直しマークが増えると、ここに表示されます。</p>${reviewLinks}</section>`
        : `<p class="notice">問題が見つかりません。データ読み込み、またはこのページのUNIT_IDを見直してください。</p>`;
      updateProgressUi();
      return;
    }
    const idx = currentIndex();
    const q = questions[idx];
    root.classList.add("single-question-root");
    root.innerHTML = `${questionHtml(q)}<div class="bottom-nav">${renderQuestionControls()}</div>`;
    const card = root.querySelector(`[data-question-id="${q.id}"]`);
    if (card) bindQuestion(card, q);
    root.querySelectorAll("[data-prev]").forEach(btn => btn.addEventListener("click", () => goRelative(-1)));
    root.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => goRelative(1)));
    root.querySelectorAll("[data-goto]").forEach(btn => btn.addEventListener("click", () => goToQuestion(Number(btn.dataset.goto), true)));
    root.querySelectorAll("[data-review-toggle]").forEach(btn => btn.addEventListener("click", () => {
      toggleReview(q.id);
      renderQuestionView(false);
    }));
    restoreCurrentProgress(q);
    refreshExamUi();
    if (scrollTop) scrollToPracticeCard(card || root);
  }


  function practiceQualityGuideHtml(unit) { return ""; }
  function renderPracticeQualityGuide(unit) {
    const slot = document.querySelector("[data-quality-guide]");
    if (slot) { slot.innerHTML = ""; slot.classList.add("is-hidden"); }
  }

  function renderUnit() {
    const root = document.getElementById("questionRoot");
    if (!root || (!unitId && !tagFilter && !reviewMode && !randomMode)) return;
    const unit = currentUnit();
    const title = document.getElementById("unitTitle");
    const desc = document.getElementById("unitDesc");
    if (title) title.textContent = unit ? unit.title : "セットが見つかりません";
    if (desc) desc.textContent = unit ? unit.description : "";
    renderPracticeQualityGuide(unit);
    renderLinkedArticlesPanel(unit);
    renderExamPanel();
    renderPracticeTools();
    renderQuestionView(shouldScrollToPracticeOnLoad());
    updateProgressUi();
    refreshExamUi();
  }

  function renderPracticeTools() {
    const hero = document.querySelector(".hero");
    if (!hero || document.getElementById("practiceTools")) return;
    if (isExamUnit()) return;
    const box = document.createElement("div");
    box.id = "practiceTools";
    box.className = "practice-tools";
    const unitParam = unitId ? `?unit=${encodeURIComponent(unitId)}` : "";
    const settings = readSettings();
    box.innerHTML = `<a class="btn" href="${pageHref('review-wrong.html')}${unitParam}">この範囲の間違えた問題だけ解く</a>
      <a class="btn" href="${pageHref('review-marked.html')}${unitParam}">見直し問題だけ解く</a>
      <a class="btn" href="${pageHref('review-due.html')}${unitParam}">今日の復習</a>
      <a class="btn ghost" href="${pageHref('dashboard.html')}">弱点分析を見る</a>
      <a class="btn ghost" href="${pageHref('tag-index.html')}">タグ別演習へ</a>
      ${randomMode ? `<button class="btn primary" id="newRandomSet" type="button">新しいランダムセット</button>` : ""}
      <label class="toggle-inline"><input type="checkbox" id="autoNextToggle" ${settings.autoNext ? "checked" : ""}> 解答後に自動で次の問題へ</label>`;
    hero.appendChild(box);
    document.getElementById("newRandomSet")?.addEventListener("click", () => {
      const all = readViewAll();
      delete all[viewKey];
      writeViewAll(all);
      location.reload();
    });
    document.getElementById("autoNextToggle")?.addEventListener("change", e => {
      writeSettings({ ...readSettings(), autoNext: !!e.target.checked });
    });
  }

  function tagBadges(tags) {
    return (tags || []).map(t => `<a class="tag-badge" href="${tagHref(t)}">${escapeHtml(tagTitle(t))}</a>`).join("");
  }

  function bindToolbar() {
    document.body.classList.toggle("is-practice-page", !!unitId);
    document.body.classList.toggle("is-exam-page", isExamUnit() || (window.CURRENT_PAGE || location.pathname.split("/").pop()) === "exam.html");
    const reset = document.getElementById("resetUnit");
    if (reset) reset.addEventListener("click", () => {
      const p = readProgress();
      questionsForCurrentUnit().forEach(q => delete p[q.id]);
      writeProgress(p);
      if (isExamUnit()) { setExamState(null); setReviewMap({}); }
      setCurrentIndex(0);
      location.reload();
    });
    const first = document.getElementById("firstUnanswered");
    if (first) first.addEventListener("click", jumpToFirstUnanswered);
  }

  function renderDashboard() {
    const root = document.getElementById("dashboardRoot");
    if (!root) return;
    const progress = readProgress();
    const questions = allQuestions();
    const answered = questions.filter(q => progress[q.id]);
    const graded = answered.filter(q => progress[q.id]?.isCorrect === true || progress[q.id]?.isCorrect === false);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const savedOnly = answered.length - graded.length;
    const settings = readSettings();
    const today = new Date().toISOString().slice(0, 10);
    const todayAnswered = answered.filter(q => String(progress[q.id]?.answeredAt || progress[q.id]?.savedAt || "").slice(0, 10) === today);
    const byTag = Object.create(null);
    const byCertification = Object.create(null);
    const certificationOrder = ["javaBasic", "bronze", "silver11", "silver17", "gold11", "gold17"];
    const ensureCertification = value => {
      const key = value || "javaBasic";
      byCertification[key] ||= { total: 0, answered: 0, graded: 0, correct: 0, wrong: 0, savedOnly: 0, due: 0, tags: Object.create(null) };
      return byCertification[key];
    };
    questions.forEach(q => {
      const p = progress[q.id];
      const cert = certificationKey(q);
      const bucket = ensureCertification(cert);
      bucket.total++;
      if (p) bucket.answered++;
      if (p?.isCorrect === true || p?.isCorrect === false) bucket.graded++;
      if (p?.isCorrect === true) bucket.correct++;
      if (p?.isCorrect === false) bucket.wrong++;
      if (p && p.isCorrect !== true && p.isCorrect !== false) bucket.savedOnly++;
      if (questionsForDueCount([q])) bucket.due++;
      (q.tags || ["未分類"]).forEach(t => {
        byTag[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
        byTag[t].total++;
        if (p) byTag[t].answered++;
        if (p?.isCorrect === true) byTag[t].correct++;
        if (p?.isCorrect === false) byTag[t].wrong++;
        bucket.tags[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
        bucket.tags[t].total++;
        if (p) bucket.tags[t].answered++;
        if (p?.isCorrect === true) bucket.tags[t].correct++;
        if (p?.isCorrect === false) bucket.tags[t].wrong++;
      });
    });
    const rows = Object.entries(byTag)
      .filter(([,v]) => v.answered > 0 || v.wrong > 0)
      .sort((a,b) => b[1].wrong - a[1].wrong || b[1].answered - a[1].answered || tagTitle(a[0]).localeCompare(tagTitle(b[0]), 'ja'))
      .slice(0, 12)
      .map(([tag,v]) => {
        const rate = v.answered ? Math.round(v.correct/v.answered*100) + "%" : "-";
        return `<tr><td>${escapeHtml(tagTitle(tag))}</td><td>${v.answered}</td><td>${v.correct}</td><td>${v.wrong}</td><td>${rate}</td></tr>`;
      }).join("") || `<tr><td colspan="5">まだ解答履歴がありません。</td></tr>`;
    const certificationCards = certificationOrder.map(d => {
      const v = byCertification[d] || { total: 0, answered: 0, graded: 0, correct: 0, wrong: 0, savedOnly: 0, due: 0, tags: {} };
      const rate = v.graded ? Math.round(v.correct / v.graded * 100) : 0;
      const weakTags = Object.entries(v.tags || {})
        .filter(([,s]) => s.answered > 0 || s.wrong > 0)
        .sort((a,b) => b[1].wrong - a[1].wrong || (a[1].correct / Math.max(a[1].answered, 1)) - (b[1].correct / Math.max(b[1].answered, 1)))
        .slice(0, 3)
        .map(([tag,s]) => `<a class="mini-chip" href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))} ${s.answered ? Math.round(s.correct / s.answered * 100) : 0}%</a>`)
        .join("") || `<span class="inline-note">この区分の回答履歴はまだ少なめです。</span>`;
      return `<article class="dashboard-difficulty-card certification-${escapeHtml(d)}">
        <div class="course-dashboard-card-head"><strong>${escapeHtml(certificationLabel(d))}</strong><span>${v.answered}/${v.total}問</span></div>
        <div class="progress-track"><span style="width:${v.total ? Math.min(100, Math.round(v.answered / v.total * 100)) : 0}%"></span></div>
        <div class="mini-stat-row"><span>正答率 ${rate}%</span><span>不正解 ${v.wrong}</span><span>復習 ${v.due}</span></div>
        ${v.savedOnly ? `<p class="inline-note">採点前の保存回答が${v.savedOnly}問あります。</p>` : ""}
        <div class="chip-row">${weakTags}</div>
        <div class="chip-row"><a class="mini-chip" href="${certificationSearchHref(d)}">${escapeHtml(certificationLabel(d))}を検索</a><a class="mini-chip" href="${certificationRandomHref(d)}">${escapeHtml(certificationLabel(d))}を解く</a></div>
      </article>`;
    }).join("");
    const certificationRows = certificationOrder.map(d => {
      const v = byCertification[d] || { total: 0, answered: 0, graded: 0, correct: 0, wrong: 0, savedOnly: 0, due: 0 };
      const rate = v.graded ? Math.round(v.correct / v.graded * 100) + "%" : "-";
      return `<tr><td>${escapeHtml(certificationLabel(d))}</td><td>${v.total}</td><td>${v.answered}</td><td>${v.correct}</td><td>${v.wrong}</td><td>${v.due}</td><td>${rate}</td></tr>`;
    }).join("");
    root.innerHTML = `<section class="common-dashboard-panel dashboard-status-panel">
      <h2>学習状況</h2>
      <div class="result-summary-grid dashboard-summary">
        <div><strong>${questions.length}</strong><span>総問題数</span></div>
        <div><strong>${answered.length}</strong><span>解答済み</span></div>
        <div><strong>${correct.length}</strong><span>正解</span></div>
        <div><strong>${wrong.length}</strong><span>不正解</span></div>
        <div><strong>${graded.length ? Math.round(correct.length/graded.length*100) : 0}%</strong><span>採点済み正答率</span></div>
        <div><strong>${todayAnswered.length}/${settings.dailyGoal || 20}</strong><span>今日の目標</span></div>
      </div>
      ${savedOnly ? `<p class="inline-note">採点前の保存回答が${savedOnly}問あります。模試の正答率には、採点済みの回答だけを使います。</p>` : ""}
    </section>
    <section class="common-dashboard-panel dashboard-status-panel dashboard-difficulty-panel">
      <div class="section-head-row"><div><h2>試験区分別の学習状況</h2><p class="inline-note">Java基礎、Bronze、Silver 11、Silver 17、Gold 11、Gold 17ごとに、回答量、不正解、復習候補を分けて確認できます。</p></div></div>
      <div class="dashboard-difficulty-grid">${certificationCards}</div>
      <div class="table-scroll"><table class="study-table"><thead><tr><th>区分</th><th>総数</th><th>解答済み</th><th>正解</th><th>不正解</th><th>復習候補</th><th>正答率</th></tr></thead><tbody>${certificationRows}</tbody></table></div>
    </section>
    <section class="common-dashboard-panel dashboard-status-panel">
      <h2>タグ別の学習状況</h2>
      <p class="inline-note">解答履歴からタグ別の正答率を集計します。</p>
      <div class="table-scroll"><table class="study-table"><thead><tr><th>タグ</th><th>解答済み</th><th>正解</th><th>不正解</th><th>正答率</th></tr></thead><tbody>${rows}</tbody></table></div>
    </section>`;
  }


  function renderSyncPage() {
    const root = document.getElementById("syncRoot");
    if (!root) return;
    const keys = [storageKey, examStorageKey, viewStorageKey, reviewStorageKey, examHistoryStorageKey, settingsStorageKey, notesStorageKey, mistakeReasonStorageKey, missedUnitStorageKey];
    function buildPayload() {
      const payload = {
        app: "Java Practice Lab",
        version: 1,
        exportedAt: new Date().toISOString(),
        storage: {}
      };
      keys.forEach(key => payload.storage[key] = readJson(key, {}));
      return payload;
    }
    function setStatus(text, isError) {
      const status = document.getElementById("syncStatus");
      if (!status) return;
      status.textContent = text;
      status.className = isError ? "notice sync-error" : "notice sync-ok";
    }
    root.innerHTML = `<div class="compare-grid">
      <div class="compare-card">
        <h2>1. この端末の履歴を書き出す</h2>
        <p>解答履歴、模試の状態、現在位置、見直しマークをJSONで保存します。別端末へ移すときは、このファイルを保存し、移行先でインポートします。</p>
        <button class="btn primary" id="exportProgress" type="button">履歴JSONをダウンロード</button>
      </div>
      <div class="compare-card">
        <h2>2. 別端末で読み込む</h2>
        <p>書き出したJSONを選択すると、この端末の履歴に上書きします。既存履歴は置き換わるので注意してください。</p>
        <input class="file-input" id="importProgressFile" type="file" accept="application/json,.json">
        <button class="btn" id="importProgress" type="button">選択したJSONを読み込む</button>
      </div>
    </div>
    <div class="warning-box"><strong>注意：</strong>ログイン同期ではありません。端末間共有は、JSONを書き出して別端末で読み込む方式です。公開サイトに置く場合でも、履歴は利用者のブラウザ内に保存されます。</div>
    <div id="syncStatus" class="notice">まだ操作していません。</div>`;

    document.getElementById("exportProgress")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(buildPayload(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
      a.href = url;
      a.download = `java-practice-lab-progress-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("履歴JSONを書き出しました。", false);
    });
    document.getElementById("importProgress")?.addEventListener("click", async () => {
      const file = document.getElementById("importProgressFile")?.files?.[0];
      if (!file) { setStatus("読み込むJSONファイルを選択してください。", true); return; }
      try {
        const text = await file.text();
        const payload = JSON.parse(text);
        if (!payload || typeof payload !== "object" || !payload.storage) throw new Error("invalid payload");
        if (!confirm("この端末の学習履歴を、選択したJSONの内容で上書きします。よろしいですか？")) return;
        keys.forEach(key => writeJson(key, payload.storage[key] || {}));
        setStatus("履歴を読み込みました。ページを再読み込みします。", false);
        setTimeout(() => location.reload(), 800);
      } catch (_) {
        setStatus("JSONの読み込みに失敗しました。Java Practice Labから書き出したファイルか見直してください。", true);
      }
    });
  }



  function renderNotesPage() { }

  function renderSettingsPage() { /* settings page removed from public Java standalone build. */ }

  function difficultyLabel(value) {
    return ({ basic: "基礎", standard: "標準", hard: "応用" })[value] || value || "標準";
  }

  function tagStatsFromProgress(sourceQuestions = allQuestions()) {
    const progress = readProgress();
    const stats = Object.create(null);
    sourceQuestions.forEach(q => (q.tags || ["untagged"]).forEach(t => {
      stats[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
      stats[t].total++;
      if (progress[q.id]) stats[t].answered++;
      if (progress[q.id]?.isCorrect === true) stats[t].correct++;
      if (progress[q.id]?.isCorrect === false) stats[t].wrong++;
    }));
    return stats;
  }

  function renderHomeStats() {
    const root = document.getElementById("homeStatsRoot");
    if (!root) return;
    const questions = practiceQuestions();
    const progress = readProgress();
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const marked = markedQuestionIdsFor(questions).length;
    const due = questionsForDueCount(questions);
    const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
    const stats = tagStatsFromProgress(questions);
    const weak = Object.entries(stats).filter(([,v]) => v.answered >= 3).sort((a,b) => (a[1].correct/a[1].answered) - (b[1].correct/b[1].answered)).slice(0,3);
    const directHome = root.dataset.homeDirect === "true";
    const weakHtml = weak.length
      ? weak.map(([tag,v]) => directHome
          ? `<span class="home-learning-weak-item">${escapeHtml(tagTitle(tag))} ${Math.round(v.correct/v.answered*100)}%</span>`
          : `<a class="mini-chip" href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))} ${Math.round(v.correct/v.answered*100)}%</a>`).join("")
      : `<span class="inline-note">まだ集計に十分な回答がありません。</span>`;
    if (directHome) {
      root.innerHTML = `<div class="stat-grid home-learning-stat-grid">
        <div class="stat-card"><strong>${answered.length}/${questions.length}</strong><span>解答済み</span></div>
        <div class="stat-card"><strong>${rate}%</strong><span>正答率</span></div>
        <div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div>
        <div class="stat-card"><strong>${marked}</strong><span>見直し</span></div>
        <div class="stat-card"><strong>${due}</strong><span>復習候補</span></div>
      </div><div class="home-learning-status-meta"><span>通常演習の履歴を集計</span><div class="home-learning-weak-summary"><strong>苦手傾向</strong>${weakHtml}</div></div>`;
      return;
    }
    root.innerHTML = `<div class="stat-grid">
      <div class="stat-card"><strong>${answered.length}/${questions.length}</strong><span>解答済み</span></div>
      <div class="stat-card"><strong>${rate}%</strong><span>正答率</span></div>
      <div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div>
      <div class="stat-card"><strong>${marked}</strong><span>見直し</span></div>
      <div class="stat-card"><strong>${due}</strong><span>今日の復習候補</span></div>
    </div><p class="inline-note">※この進捗は通常演習のみです。模試A〜Dや各コース模試は、各模試の採点結果で扱います。</p><div class="practice-tools"><a class="btn primary" href="${pageHref('dashboard.html')}">全体ダッシュボード</a><a class="btn" href="${pageHref('review-due.html')}">今日の復習</a><a class="btn" href="${pageHref('review-wrong.html')}">不正解復習</a><a class="btn" href="${pageHref('exam.html')}">模試</a></div><div class="chip-row">${weakHtml}</div>`;
  }

  function questionsForDueCount(sourceQuestions = allQuestions()) {
    const progress = readProgress();
    const now = Date.now();
    const day = 86400000;
    return sourceQuestions.filter(q => {
      const p = progress[q.id];
      if (!p) return false;
      if (p.isCorrect === false) return true;
      return now - progressTime(p) >= 3 * day;
    }).length;
  }

  function renderQualityMapPage() {
    const root = document.getElementById("qualityMapRoot");
    if (!root) return;
    const progress = readProgress();
    const rows = DATA.units.map(u => {
      const qs = DATA.questions[u.id] || [];
      const diff = { basic: 0, standard: 0, hard: 0 };
      const tags = Object.create(null);
      let multi = 0, detailed = 0, code = 0;
      qs.forEach(q => {
        diff[q.difficulty || "standard"] = (diff[q.difficulty || "standard"] || 0) + 1;
        if (isMultiQuestion(q)) multi++;
        if ((q.explanation?.points || []).length >= 4 && q.explanation?.summary) detailed++;
        if ((q.codeBlocks || []).length || q.command) code++;
        (q.tags || []).forEach(t => tags[t] = (tags[t] || 0) + 1);
      });
      const topTags = Object.entries(tags).sort((a,b) => b[1]-a[1]).slice(0,4).map(([t,c]) => `${tagTitle(t)}(${c})`).join(" / ");
      const answered = qs.filter(q => progress[q.id]).length;
      return `<tr><td><a href="${escapeHtml(pageHref(u.page))}">${escapeHtml(u.title)}</a></td><td>${qs.length}</td><td>${code}</td><td>${multi}</td><td>${diff.basic}/${diff.standard}/${diff.hard}</td><td>${detailed}/${qs.length}</td><td>${answered}/${qs.length}</td><td>${escapeHtml(topTags)}</td></tr>`;
    }).join("");
    const all = allQuestions();
    const missingTags = all.filter(q => !(q.tags || []).length).length;
    const missingExplanation = all.filter(q => !q.explanation?.summary || !(q.explanation?.points || []).length).length;
    const duplicateTitles = Object.entries(all.reduce((m,q)=>{m[q.title]=(m[q.title]||0)+1; return m;},{})).filter(([,c])=>c>8).length;
    root.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${all.length}</strong><span>総問題数</span></div><div class="stat-card"><strong>${DATA.units.filter(u=>u.mode==='exam').length}</strong><span>模試数</span></div><div class="stat-card"><strong>${missingTags}</strong><span>タグ未設定</span></div><div class="stat-card"><strong>${missingExplanation}</strong><span>解説不足</span></div><div class="stat-card"><strong>${duplicateTitles}</strong><span>重複傾向タイトル</span></div></div>
    <h2>セット別分布</h2><table class="mini-table wide-table"><thead><tr><th>セット</th><th>問数</th><th>コード系</th><th>複数選択</th><th>基本/標準/応用</th><th>詳説</th><th>進捗</th><th>主要タグ</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="notice">ここで「解説不足」「タグ未設定」が0なら、問題データの基本構造は整っています。気になる単元は実際に解いて見てください。</p>`;
  }

  function renderLearningPathPage() {
    const root = document.getElementById("learningPathRoot");
    if (!root) return;
    const progress = readProgress();
    const all = allQuestions();
    const answered = all.filter(q => progress[q.id]);
    const wrong = all.filter(q => progress[q.id]?.isCorrect === false);
    const stats = tagStatsFromProgress();
    const weak = Object.entries(stats).filter(([,v]) => v.answered >= 3).sort((a,b) => (a[1].correct/a[1].answered) - (b[1].correct/b[1].answered)).slice(0,5);
    const stage = answered.length < 50 ? "基礎データ作成" : wrong.length > 20 ? "弱点処理" : answered.length < 240 ? "模試準備" : "仕上げ";
    const weakRows = weak.map(([tag,v]) => `<tr><td><a href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))}</a></td><td>${v.correct}/${v.answered}</td><td>${Math.round(v.correct/v.answered*100)}%</td><td>${v.wrong}</td></tr>`).join("") || `<tr><td colspan="4">まだ弱点判定に十分な回答数がありません。</td></tr>`;
    root.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${stage}</strong><span>現在の段階</span></div><div class="stat-card"><strong>${answered.length}</strong><span>解答済み</span></div><div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div><div class="stat-card"><strong>${questionsForDueCount()}</strong><span>復習候補</span></div><div class="stat-card"><strong>${questionsForDueCount()}</strong><span>復習候補</span></div></div>
    <div class="compare-grid"><article class="compare-card"><h2>今日やるべきこと</h2><ol><li>${wrong.length ? "間違えた問題だけ復習を10〜20問処理する" : "通常演習かランダム演習を20問解く"}</li><li>参照比較・String・例外の記事を読む</li><li>${answered.length >= 120 ? "模試を1セット、本番形式の制限時間で解く" : "タグ別演習で苦手タグを作る"}</li></ol><div class="practice-tools"><a class="btn primary" href="${pageHref('review-due.html')}">今日の復習</a><a class="btn" href="${pageHref('random.html')}">ランダム演習</a><a class="btn" href="${pageHref('practice-g.html')}">模試A</a></div></article><article class="compare-card"><h2>弱点タグ</h2><table class="mini-table"><thead><tr><th>タグ</th><th>正解</th><th>率</th><th>不正解</th></tr></thead><tbody>${weakRows}</tbody></table></article></div>`;
  }

  function bindKeyboardShortcuts() {
    document.addEventListener("keydown", e => {
      const root = document.getElementById("questionRoot");
      if (!root) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
      const key = e.key.toLowerCase();
      const card = root.querySelector(".question-card");
      if (!card) return;
      const letters = "abcdefgh";
      const idx = letters.indexOf(key);
      if (idx >= 0) {
        const option = card.querySelectorAll("input[data-option]")[idx];
        if (option && !option.disabled) {
          e.preventDefault();
          option.checked = option.type === "checkbox" ? !option.checked : true;
          option.dispatchEvent(new Event("change", { bubbles: true }));
        }
      } else if (key === "enter") {
        const btn = card.querySelector("[data-submit]");
        if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
      } else if (key === "n" || e.key === "ArrowRight") {
        e.preventDefault(); goRelative(1);
      } else if (key === "p" || e.key === "ArrowLeft") {
        e.preventDefault(); goRelative(-1);
      } else if (key === "m") {
        const qid = card.dataset.questionId;
        if (qid) { e.preventDefault(); toggleReview(qid); renderQuestionView(false); }
      }
    });
  }



  function renderModePage() {
    const root = document.getElementById("modeRoot");
    if (!root) return;
    root.innerHTML = `<div class="mode-grid">
      <a class="mode-card" href="${pageHref('articles.html')}"><strong>初めて学ぶ</strong><span>記事で理解してから通常演習へ進みます。</span><em>記事 → 通常演習</em></a>
      <a class="mode-card" href="${pageHref('dashboard.html')}"><strong>苦手を整理する</strong><span>弱点タグと不正解単元を判定し、タグ別演習で補強します。</span><em>弱点分析 → タグ別</em></a>
      <a class="mode-card" href="${pageHref('exam.html')}"><strong>本番練習する</strong><span>各模試の問題数・制限時間に合わせて、時間配分と判定力を鍛えます。</span><em>模試A〜D</em></a>
      <a class="mode-card" href="${pageHref('review-due.html')}"><strong>昨日のミスを復習する</strong><span>不正解と間隔が空いた問題を優先します。</span><em>今日の復習</em></a>
      <a class="mode-card" href="${pageHref('before-exam.html')}"><strong>直前チェックする</strong><span>頻出メソッド、例外、参照比較、コンパイルエラーを一気に見直す。</span><em>直前チェック</em></a>
    </div>`;
  }

  function renderMistakeReasonsPage() {
    const root = document.getElementById("mistakeReasonsRoot");
    if (!root) return;
    const reasons = readMistakeReasons();
    const progress = readProgress();
    const grouped = Object.create(null);
    Object.entries(reasons).forEach(([qid, v]) => (v.reasons || []).forEach(r => {
      grouped[r] ||= [];
      grouped[r].push(qid);
    }));
    const sections = Object.entries(mistakeReasonLabels).map(([key, label]) => {
      const ids = grouped[key] || [];
      const cards = ids.slice(0, 30).map(qid => {
        const q = allQuestions().find(x => x.id === qid);
        if (!q) return "";
        const u = unitById(unitOfQuestion(qid));
        const p = progress[qid];
        return `<a class="search-result-card" href="${escapeHtml(pageHref(u?.page || 'index.html'))}?q=${encodeURIComponent(qid)}"><strong>${escapeHtml(u?.title || '演習')} / 問${q.number}. ${escapeHtml(q.title)}</strong><span>${escapeHtml(q.prompt).slice(0,110)}${q.prompt.length>110?'...':''}</span><small>${p?.isCorrect===false?'不正解':'記録あり'} ・ ${(q.tags || []).map(tagTitle).join(' / ')}</small></a>`;
      }).join("");
      return `<details class="reason-section" ${ids.length ? "open" : ""}><summary>${escapeHtml(label)} <span>${ids.length}件</span></summary>${cards || `<p class="inline-note">まだ記録がありません。</p>`}</details>`;
    }).join("");
    root.innerHTML = `<p class="notice">正誤だけではなく、なぜ間違えたかを分類します。ここで、次に整理するべき癖が見えます。</p>${sections}`;
  }

  function renderWeakGuidePage() {
    const root = document.getElementById("weakGuideRoot");
    if (!root) return;
    const stats = tagStatsFromProgress();
    const rows = Object.keys(DATA.tagDefinitions || {}).map(tag => {
      const s = stats[tag] || { answered: 0, correct: 0, wrong: 0 };
      const rate = s.answered ? `${Math.round(s.correct/s.answered*100)}%` : "未回答";
      return `<article class="weak-guide-card"><h2>${escapeHtml(tagTitle(tag))}</h2><p>${escapeHtml(tagDescription(tag))}</p>${weakGuideHtml(tag)}<p><strong>成績:</strong> ${s.correct || 0}/${s.answered || 0}（${rate}）</p><div class="practice-tools"><a class="btn" href="${tagHref(tag)}">このタグを練習</a><a class="btn ghost" href="search.html?tag=${encodeURIComponent(tag)}">検索</a></div></article>`;
    }).join("");
    root.innerHTML = rows;
  }

  function renderBeforeExamPage() {
    const root = document.getElementById("beforeExamRoot");
    if (!root) return;
    root.innerHTML = `<div class="before-exam-grid">
      <section class="panel"><h2>参照比較</h2><ul><li>== は同じオブジェクトかを見る。</li><li>equals はクラスの実装次第。</li><li>String リテラル、new、intern を分ける。</li><li>配列の equals は参照比較。内容比較は Arrays.equals。</li></ul></section>
      <section class="panel"><h2>コンパイルエラー頻出</h2><ul><li>ローカル変数未初期化。</li><li>var をフィールド・引数・戻り値で使う。</li><li>catch の順序が広い型から狭い型。</li><li>this()/super() がコンストラクタ先頭でない。</li><li>interface 定数を書き換える。</li></ul></section>
      <section class="panel"><h2>実行時例外頻出</h2><ul><li>null に対するメソッド呼び出し。</li><li>配列範囲外。</li><li>不正なキャスト。</li><li>parseInt の不正文字列。</li><li>List.of の変更操作。</li></ul></section>
      <section class="panel"><h2>String / StringBuilder</h2><ul><li>String は不変。戻り値を受け取る。</li><li>StringBuilder は append/delete/insert が自身を変更。</li><li>StringBuilder.equals は内容比較しない。</li><li>substring の第2引数は含まない。</li></ul></section>
      <section class="panel"><h2>演算・制御</h2><ul><li>++i は増やしてから値、i++ は値を使ってから増える。</li><li>&& / || は短絡評価、& / | は両辺評価。</li><li>switch文はフォールスルー、switch式は値を返す。</li><li>+= は暗黙キャストを含む。</li></ul></section>
      <section class="panel"><h2>継承・例外</h2><ul><li>フィールドは隠蔽、メソッドはオーバーライド。</li><li>private メソッドはオーバーライドではない。</li><li>checked 例外は処理または宣言が必要。</li><li>try-with-resources は close 後に finally。</li></ul></section>
    </div><div class="practice-tools"><a class="btn primary" href="${pageHref('exam.html')}">模試センターへ</a><a class="btn" href="${pageHref('methods.html')}">メソッド表</a><a class="btn" href="${pageHref('mistake-patterns.html')}">誤答パターン集</a></div>`;
  }


  function renderMissedUnitsPage() {
    const root = document.getElementById("missedUnitsRoot");
    if (!root) return;
    const stats = missedUnitStats();
    const rows = stats.map(v => `<tr><td><a href="${missedUnitHref(v.tag)}">${escapeHtml(v.title || v.tag)}</a></td><td>${v.count}</td><td>${escapeHtml(v.lastWrongAt ? new Date(v.lastWrongAt).toLocaleDateString() : "-")}</td><td><a class="mini-chip" href="${missedUnitHref(v.tag)}">未克服だけ解く</a><a class="mini-chip" href="${tagHref(v.tag)}">タグ全体を解く</a></td></tr>`).join("") || `<tr><td colspan="4">現在、未克服の間違えた単元はありません。</td></tr>`;
    const topCards = stats.slice(0, 6).map(v => `<a class="review-mode-card" href="${missedUnitHref(v.tag)}"><strong>${escapeHtml(v.title || v.tag)}</strong><span>未克服 ${v.count}問</span><em>最終ミス ${escapeHtml(v.lastWrongAt ? new Date(v.lastWrongAt).toLocaleDateString() : "-")}</em></a>`).join("");
    root.innerHTML = `<section class="review-mode-hero"><h2>間違えた単元</h2><p>不正解時に保存された単元です。正解できた問題は未克服から外れます。</p><div class="review-mode-grid">${topCards || `<article class="review-mode-card"><strong>未克服なし</strong><span>不正解履歴が増えると表示されます。</span></article>`}</div></section><table class="study-table missed-unit-table"><thead><tr><th>単元</th><th>未克服問題</th><th>最終ミス</th><th>復習</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function renderMobileReviewPage() {
    const root = document.getElementById("mobileReviewRoot");
    if (!root) return;
    const progress = readProgress();
    const wrong = Object.values(progress).filter(p => p && p.isCorrect === false).length;
    const marked = markedQuestionIds().length;
    const missed = missedUnitStats().reduce((sum, v) => sum + v.count, 0);
    const due = questionsForReviewCount("due");
    root.innerHTML = `<section class="mobile-review-panel"><h2>短時間復習</h2><p>スマホでは、復習だけをすぐ始められる入口を優先しています。</p><div class="mobile-review-grid"><a class="review-mode-card primary" href="${pageHref('review-due.html')}"><strong>今日の復習</strong><span>${due}問</span><em>不正解と間隔が空いた問題</em></a><a class="review-mode-card" href="${pageHref('review-missed-units.html')}"><strong>間違えた単元</strong><span>${missed}問</span><em>未克服タグから復習</em></a><a class="review-mode-card" href="${pageHref('review-wrong.html')}"><strong>不正解だけ</strong><span>${wrong}問</span><em>直近の不正解を処理</em></a><a class="review-mode-card" href="${pageHref('review-marked.html')}"><strong>見直し問題</strong><span>${marked}問</span><em>後で見直すにした問題</em></a><a class="review-mode-card" href="${pageHref('review-weak.html')}"><strong>弱点優先</strong><span>自動</span><em>弱いタグから並べ替え</em></a><a class="review-mode-card" href="${pageHref('random.html')}"><strong>ランダム演習</strong><span>20問</span><em>短時間の判定</em></a></div></section>`;
  }
  function questionsForReviewCount(mode) {
    const prev = window.REVIEW_MODE;
    if (mode !== "due") return 0;
    const progress = readProgress();
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    return allQuestions().filter(q => { const p = progress[q.id]; if (!p) return false; if (p.isCorrect === false) return true; return now - progressTime(p) >= 3 * day; }).length;
  }

  function renderAdsGuidePage() {
    const root = document.getElementById("adsGuideRoot");
    if (!root) return;
    root.innerHTML = `<p class="notice">広告設定ページは現在使っていません。</p>`;
  }


  function activateSiteHeader() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;
    const path = location.pathname.replace(/\\/g, "/");
    const map = [
      ["/courses/java-basic/", "courses/java-basic/index.html"],
      ["/courses/bronze/", "courses/bronze/index.html"],
      ["/courses/silver/", "courses/silver/index.html"],
      ["/courses/java11-silver/", "courses/java11-silver/index.html"],
      ["/courses/java17-silver/", "courses/java17-silver/index.html"],
      ["/courses/gold11/", "courses/gold11/index.html"],
      ["/courses/gold17/", "courses/gold17/index.html"],
      ["/courses/gold/", "courses/gold/index.html"],
      ["/articles/", "articles/index.html"],
      ["/app/dashboard", "app/dashboard.html"],
    ];
    let key = "index.html";
    for (const [needle, target] of map) {
      if (path.includes(needle)) { key = target; break; }
    }
    if (/\/docs\/$|\/docs\/index\.html$|\/index\.html$/.test(path) && !path.includes("/courses/") && !path.includes("/articles/") && !path.includes("/app/")) key = "index.html";
    nav.querySelectorAll("a").forEach(a => {
      const href = a.getAttribute("href") || "";
      let hrefPath = href;
      try { hrefPath = new URL(href, location.href).pathname.replace(/\\/g, "/"); } catch (_) { hrefPath = href.replace(/^\.\.\//g, "").replace(/^\.\//, ""); }
      const active = key === "index.html"
        ? (a.classList.contains("nav-home-button") || /\/java-practice-lab\/index\.html$/.test(hrefPath))
        : hrefPath.endsWith("/" + key) || hrefPath.endsWith(key);
      a.classList.toggle("is-active", active);
      if (active) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }



  function initMobileSiteMenu() {
    const header = document.querySelector('.site-header');
    const inner = document.querySelector('.site-header-inner');
    const nav = document.querySelector('.site-nav');
    if (!header || !inner || !nav || inner.querySelector('.mobile-nav-toggle')) return;
    document.body.classList.add('has-mobile-nav');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mobile-nav-toggle';
    button.textContent = 'メニュー';
    const navId = nav.id || 'siteNav-' + Math.random().toString(36).slice(2, 8);
    nav.id = navId;
    button.setAttribute('aria-controls', navId);
    button.setAttribute('aria-expanded', 'false');
    const brand = inner.querySelector('.site-brand');
    if (brand && brand.nextSibling) {
      inner.insertBefore(button, brand.nextSibling);
    } else {
      inner.insertBefore(button, nav);
    }
    const close = () => {
      header.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    };
    button.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
    document.addEventListener('click', event => {
      if (!header.classList.contains('is-open')) return;
      if (header.contains(event.target)) return;
      close();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) close();
    }, { passive: true });
  }


  function initMobileReadabilityEnhancements() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    const candidates = Array.from(main.querySelectorAll('.lesson-section, .article-section, .memorize-section'))
      .filter(section => {
        if (section.classList.contains('lesson-nav-bottom')) return false;
        if (section.closest('#questionRoot')) return false;
        const h2 = section.querySelector(':scope > h2');
        return !!h2 && !section.dataset.mobileCollapseReady;
      });
    candidates.forEach((section, index) => {
      section.dataset.mobileCollapseReady = 'true';
      section.classList.add('mobile-collapsible-section');
      const heading = section.querySelector(':scope > h2');
      const body = document.createElement('div');
      body.className = 'mobile-collapsible-body';
      const nodes = Array.from(section.childNodes).filter(node => node !== heading);
      nodes.forEach(node => body.appendChild(node));
      section.appendChild(body);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mobile-section-toggle';
      button.textContent = '開閉';
      const bodyId = 'mobileSectionBody-' + index + '-' + Math.random().toString(36).slice(2, 8);
      body.id = bodyId;
      button.setAttribute('aria-controls', bodyId);
      button.setAttribute('aria-expanded', 'true');
      heading.appendChild(button);
      const shouldCollapse = index > 1 && !section.classList.contains('basic-term-intro') && !section.classList.contains('basic-term-check');
      if (shouldCollapse) {
        section.classList.add('is-collapsed');
        button.setAttribute('aria-expanded', 'false');
      }
      button.addEventListener('click', () => {
        const collapsed = section.classList.toggle('is-collapsed');
        button.setAttribute('aria-expanded', String(!collapsed));
      });
    });

    if (!document.querySelector('.back-to-top-floating')) {
      const topButton = document.createElement('button');
      topButton.type = 'button';
      topButton.className = 'back-to-top-floating';
      topButton.textContent = '上へ';
      topButton.setAttribute('aria-label', 'ページ上部へ戻る');
      document.body.appendChild(topButton);
      const updateVisibility = () => {
        topButton.classList.toggle('is-visible', window.scrollY > 500);
      };
      topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      window.addEventListener('scroll', updateVisibility, { passive: true });
      updateVisibility();
    }
  }
  function safeRun(name, fn) {
    try { if (typeof fn === "function") fn(); }
    catch (error) {
      console.error(`[Java Practice Lab] ${name} failed`, error);
      const root = document.getElementById("questionRoot");
      if (root && !root.innerHTML.trim() && (window.UNIT_ID || window.TAG_FILTER || window.REVIEW_MODE || window.RANDOM_MODE)) {
        root.innerHTML = `<p class="notice">演習の表示中にエラーが発生しました。ページを再読み込みしてください。</p>`;
      }
    }
  }
  
  function makePracticeToolbarCollapsible() {
    if (!document.body.classList.contains("is-practice-page") && !document.body.classList.contains("is-exam-page")) return;
    const hero = document.querySelector(".hero");
    const toolbar = hero?.querySelector(":scope > .toolbar");
    if (!hero || !toolbar || toolbar.closest(".mobile-practice-tools")) return;
    const details = document.createElement("details");
    details.className = "mobile-practice-tools";
    if (!window.matchMedia("(max-width: 860px)").matches) details.open = !window.matchMedia("(max-width: 860px)").matches;
    const summary = document.createElement("summary");
    summary.textContent = "演習メニュー";
    details.appendChild(summary);
    toolbar.parentNode.insertBefore(details, toolbar);
    details.appendChild(toolbar);
  }

  function enhanceTablesForMobileCards() {
    document.querySelectorAll('.article-body table, .content-page table, .lesson-body table').forEach(table => {
      if (table.dataset.noMobileCard === 'true') return;
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
      if (!headers.length) return;
      table.classList.add('responsive-card-table');
      table.querySelectorAll('tbody tr').forEach(row => {
        Array.from(row.children).forEach((cell, index) => {
          if (!cell.dataset.label && headers[index]) cell.dataset.label = headers[index];
        });
      });
    });
  }
document.addEventListener("DOMContentLoaded", () => {
    makePracticeToolbarCollapsible();
    safeRun("applySettings", applySettings);
    safeRun("activateSiteHeader", activateSiteHeader);
    safeRun("initMobileSiteMenu", initMobileSiteMenu);
    safeRun("renderNav", renderNav);
    safeRun("bindToolbar", bindToolbar);
    safeRun("renderUnit", renderUnit);
    safeRun("renderIndex", renderIndex);
    safeRun("renderHomeStats", renderHomeStats);
    safeRun("renderCourseStats", renderCourseStats);
    safeRun("renderCourseDashboard", renderCourseDashboard);
    safeRun("renderDashboard", renderDashboard);
    safeRun("renderQualityMapPage", renderQualityMapPage);
    safeRun("renderLearningPathPage", renderLearningPathPage);
    safeRun("renderNotesPage", renderNotesPage);
    safeRun("renderModePage", renderModePage);
    safeRun("renderMistakeReasonsPage", renderMistakeReasonsPage);
    safeRun("renderWeakGuidePage", renderWeakGuidePage);
    safeRun("renderBeforeExamPage", renderBeforeExamPage);
    safeRun("renderMissedUnitsPage", renderMissedUnitsPage);
    safeRun("renderMobileReviewPage", renderMobileReviewPage);
    safeRun("renderAdsGuidePage", renderAdsGuidePage);
    safeRun("renderSyncPage", renderSyncPage);
    safeRun("bindKeyboardShortcuts", bindKeyboardShortcuts);
    safeRun("initMobileReadabilityEnhancements", initMobileReadabilityEnhancements);
    safeRun("enhanceTablesForMobileCards", enhanceTablesForMobileCards);
  });
})();

