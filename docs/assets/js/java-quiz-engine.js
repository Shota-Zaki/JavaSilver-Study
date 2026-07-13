(() => {
  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function cleanDisplayText(value) {
    return String(value ?? '')
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => line
        .replace(/^判定軸[：:]\s*/u, '')
        .replace(/^判定順[：:]\s*/u, '')
        .replace(/^試験での見方[：:]\s*/u, '')
        .replace(/^関連知識[：:]\s*/u, '')
      )
      .filter((line) => !/^1\.\s*コンパイルできるか.*出力.*順に判定します。?/u.test(line))
      .filter((line) => !/^先にコンパイル可否を判定します。?$/u.test(line))
      .filter((line) => !/^次に実行時例外の有無を判定します。?$/u.test(line))
      .filter((line) => !/^最後に出力・戻り値・参照先を追います。?$/u.test(line))
      .join('\n');
  }

  function formatText(value) {
    return escapeHtml(cleanDisplayText(value)).replace(/\n/g, '<br>');
  }


  function stripExplanationDisplaySections(value) {
    const lines = String(value ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const output = [];
    let skippingChoiceSection = false;
    const isContentHeading = (line) => /^(?:#{1,6}\s*)?内容解説\s*$/u.test(String(line || '').trim());
    const isChoiceHeading = (line) => /^(?:#{1,6}\s*)?選択肢(?:別解説|判断|の判断)\s*$/u.test(String(line || '').trim());
    const isRememberHeading = (line) => /^(?:#{1,6}\s*)?覚えるポイント\s*$/u.test(String(line || '').trim());
    const isNextMajorHeading = (line) => /^(?:#{1,2})\s+(?![A-ZＡ-Ｚ]\.|[A-ZＡ-Ｚ]\s)/u.test(String(line || '').trim());
    lines.forEach((line) => {
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
    return output.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  function inlineMarkdown(value) {
    return String(value ?? '').split(/(`[^`]*`)/g).map((part) => {
      if (/^`[^`]*`$/.test(part)) return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
    }).join('');
  }

  function markdownTableHtml(lines) {
    if (lines.length < 2) return '';
    const split = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
    const header = split(lines[0]);
    const rows = lines.slice(2).map(split);
    if (!header.length || !/^\s*\|?\s*:?-{3,}:?/.test(lines[1])) return '';
    return `<div class="markdown-table-wrap"><table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function explanationHtml(value) {
    const text = cleanDisplayText(stripExplanationDisplaySections(value)).replace(/\r\n/g, '\n');
    const lines = text.split('\n');
    const output = [];
    const paragraph = [];
    let inCode = false;
    let codeLang = '';
    let codeLines = [];
    let tableLines = [];
    const flushParagraph = () => {
      if (!paragraph.length) return;
      output.push(`<p>${inlineMarkdown(paragraph.join(' ').trim())}</p>`);
      paragraph.length = 0;
    };
    const flushTable = () => {
      if (!tableLines.length) return;
      const html = markdownTableHtml(tableLines);
      if (html) output.push(html);
      else paragraph.push(...tableLines);
      tableLines = [];
    };
    lines.forEach((line) => {
      const fence = line.match(/^```\s*([\w+-]*)\s*$/);
      if (fence) {
        flushTable();
        flushParagraph();
        if (!inCode) {
          inCode = true;
          codeLang = fence[1] || '';
          codeLines = [];
        } else {
          output.push(`<pre class="markdown-code"><code${codeLang ? ` class="language-${escapeHtml(codeLang)}"` : ''}>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
          inCode = false;
          codeLang = '';
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
        flushParagraph();
        return;
      }
      if (line.includes('|') && /^\s*\|?.+\|.+/.test(line)) {
        flushParagraph();
        tableLines.push(line);
        return;
      }
      flushTable();
      const heading = line.match(/^(#{2,4})\s+(.+)$/);
      if (heading) {
        flushParagraph();
        const level = Math.min(6, heading[1].length + 1);
        output.push(`<h${level}>${inlineMarkdown(heading[2].trim())}</h${level}>`);
        return;
      }
      const bullet = line.match(/^\s*[-*]\s+(.+)$/);
      if (bullet) {
        flushParagraph();
        output.push(`<ul><li>${inlineMarkdown(bullet[1].trim())}</li></ul>`);
        return;
      }
      paragraph.push(line.trim());
    });
    if (inCode) output.push(`<pre class="markdown-code"><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
    flushTable();
    flushParagraph();
    return `<div class="quiz-explanation-body markdown-explanation">${output.join('') || '<p>解説は未作成です。</p>'}</div>`;
  }

  function renderVisualHtml(question) {
    return question?.visualHtml ? String(question.visualHtml) : '';
  }

  function explanationVisualHtml(question) {
    const html = question?.explanationVisualHtml || question?.original?.explanation?.visualHtml || '';
    return html ? `<div class="quiz-explanation-visual">${String(html)}</div>` : '';
  }

  function codeBlockHtml(code) {
    const lines = String(code ?? '').split('\n');
    const body = lines.map((line, index) => `<span class="code-line"><span class="code-line-number" aria-hidden="true">${index + 1}</span><span class="code-line-text">${escapeHtml(line || ' ')}</span></span>`).join('');
    return `<pre class="code-with-lines"><code>${body}</code></pre>`;
  }

  function arraysEqualAsSet(a, b) {
    if (a.length !== b.length) return false;
    const set = new Set(a);
    return b.every((value) => set.has(value));
  }

  function unique(values) {
    return [...new Set(values)].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b), 'ja'));
  }


  function hrefWithParams(href, params = {}) {
    const raw = String(href || '');
    if (!raw || /^(https?:|mailto:|#|\/\/)/.test(raw)) return raw;
    const [baseAndQuery, hash = ''] = raw.split('#');
    const [base, query = ''] = baseAndQuery.split('?');
    const search = new URLSearchParams(query);
    Object.entries(params || {}).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      search.set(key, String(value));
    });
    const queryText = search.toString();
    return `${base}${queryText ? `?${queryText}` : ''}${hash ? `#${hash}` : ''}`;
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

  function answerKeys(question) {
    const raw = question?.answer;
    if (Array.isArray(raw)) return raw.map((value) => String(value)).filter(Boolean);
    return raw ? [String(raw)] : [];
  }

  function selectCount(question) {
    const explicit = Number(question?.selectCount || 0);
    if (explicit > 0) return explicit;
    return Math.max(1, answerKeys(question).length || 1);
  }

  function isMultiQuestion(question) {
    return question?.type === 'multi' || selectCount(question) > 1;
  }

  function normalizeSelection(question, values) {
    const selected = [...new Set((values || []).map((value) => String(value)).filter(Boolean))];
    if (isMultiQuestion(question)) return selected.sort();
    return selected.length ? [selected[selected.length - 1]] : [];
  }

  function setSelectionValues(targetSet, values) {
    targetSet.clear();
    (values || []).forEach((value) => targetSet.add(value));
  }

  function normalizeSelectionSet(question, selected) {
    return new Set(normalizeSelection(question, [...(selected || new Set())]));
  }

  function enforceSingleChoiceDom(container, input) {
    if (!container || !input || input.type !== 'radio' || !input.name || !input.checked) return;
    container.querySelectorAll("input[type='radio']").forEach((radio) => {
      if (radio !== input && radio.name === input.name) radio.checked = false;
    });
  }

  function renderChoices(question, selected, answered = false) {
    const multi = isMultiQuestion(question);
    const normalizedSelected = normalizeSelectionSet(question, selected);
    const inputType = multi ? 'checkbox' : 'radio';
    const groupName = `choice-${String(question?.id || 'question').replace(/[^A-Za-z0-9_-]/g, '-')}`;
    return (question.choices || []).map((choice) => {
      const checked = normalizedSelected.has(String(choice.key)) ? 'checked' : '';
      const disabled = answered ? 'disabled' : '';
      return `<label class="quiz-choice"><input type="${inputType}" name="${escapeHtml(groupName)}" value="${escapeHtml(choice.key)}" ${checked} ${disabled}><span><strong>${escapeHtml(choice.key)}.</strong> ${escapeHtml(choice.text)}</span></label>`;
    }).join('');
  }

  function bindChoiceInputs(container, state, question) {
    container.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach((input) => {
      input.addEventListener('change', () => {
        if (input.type === 'radio') {
          enforceSingleChoiceDom(container, input);
          setSelectionValues(state.selected, normalizeSelection(question, input.checked ? [input.value] : []));
          return;
        }
        if (input.checked) state.selected.add(input.value);
        else state.selected.delete(input.value);
        setSelectionValues(state.selected, normalizeSelection(question, [...state.selected]));
      });
    });
  }

  function choiceDetailHtml(question, selected, answer) {
    return (question.choices || []).map((choice) => {
      const isAnswer = answer.includes(choice.key);
      const picked = selected.includes(choice.key);
      const cls = isAnswer ? 'correct-choice' : picked ? 'wrong-choice' : '';
      const badge = isAnswer ? '正解' : picked ? '選択' : '未選択';
      const explanation = question.choiceExplanations?.[choice.key] || '';
      return `<div class="choice-explanation ${cls}"><p><strong>${escapeHtml(choice.key)}. ${escapeHtml(choice.text)}</strong> <span>${badge}</span></p><p>${formatText(explanation)}</p></div>`;
    }).join('');
  }

  function questionBodyParts(question) {
    const original = question?.original || {};
    let prompt = String(original.prompt || '').trim();
    const command = String(original.command || '').trim();
    if (!prompt) {
      const lines = cleanDisplayText(question?.question || '').split(/\n+/).map((line) => line.trim()).filter(Boolean);
      if (lines.length && /^問\d+(?:\.|\s|$)/.test(lines[0])) lines.shift();
      prompt = lines.join('\n');
    }
    return { prompt, command };
  }

  function questionBodyHtml(question) {
    const parts = questionBodyParts(question);
    return [
      parts.prompt ? `<div class="quiz-question-text">${explanationHtml(parts.prompt)}</div>` : '',
      parts.command ? `<div class="quiz-question-command">${explanationHtml(parts.command)}</div>` : ''
    ].filter(Boolean).join('');
  }

  function mountPractice(options) {
    const questions = options.questions || [];
    const storage = options.storage;
    const $ = (selector) => document.querySelector(selector);
    const els = {
      certification: $('#certification-filter'),
      unit: $('#unit-filter'),
      tag: $('#tag-filter'),
      difficulty: $('#difficulty-filter'),
      mode: $('#mode-filter'),
      shuffle: $('#shuffle-button'),
      reset: $('#reset-button'),
      card: $('#quiz-card'),
      count: $('#question-count'),
      progress: $('#quiz-progress'),
      result: $('#quiz-result'),
      submit: $('#submit-answer'),
      prev: $('#prev-question'),
      next: $('#next-question'),
      bookmark: $('#toggle-bookmark'),
      stats: $('#quiz-stats'),
      weakUnits: $('#wrong-units'),
      activeFilters: $('#quiz-active-filters'),
      dashboardPanel: null,
      inlinePosition: null,
      inlinePrev: null,
      inlineNext: null,
      inlineBookmark: null,
      inlineJump: null,
      inlinePalette: null,
      footerPrev: null,
      footerNext: null,
      footerSubmit: null,
      roundPanel: null
    };
    if (!els.card || !els.submit || !storage) return;

    function scrollToElement(element) {
      if (!element) return;
      const run = () => {
        const header = document.querySelector('.site-header');
        const offset = (header?.getBoundingClientRect?.().height || 0) + 18;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      };
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(run));
      else setTimeout(run, 0);
    }


    const state = { index: 0, filtered: [], selected: new Set(), answered: false, initialQuestionId: options.initialQuestionId || '', majorGroup: null, majorParam: '' };
    const practiceHref = options.practiceHref || 'quiz.html';
    const searchHref = options.searchHref || 'search.html';
    const roundUnitId = String(options.roundUnitId || '');
    const roundQuestionIds = (options.roundQuestionIds || questions.map((q) => q.id)).filter(Boolean);

    function ensurePracticeDashboardPanel(panel) {
      if (!panel || !els.stats) return;
      const dashboardPanel = els.stats.closest('.common-dashboard-panel');
      if (!dashboardPanel) return;
      dashboardPanel.classList.add('practice-dashboard-panel');
      const title = dashboardPanel.querySelector('h2');
      if (title) title.textContent = '演習状況';
      const insertTarget = panel.querySelector('.practice-question-toolbar') || panel.querySelector('.quiz-card') || panel.firstChild;
      if (dashboardPanel.parentElement !== panel) panel.insertBefore(dashboardPanel, insertTarget);
      els.dashboardPanel = dashboardPanel;
    }

    function currentPracticeStats() {
      const history = storage.loadHistory?.() || { questions: {} };
      const list = state.filtered || [];
      const total = list.length;
      let answered = 0;
      let correct = 0;
      let wrong = 0;
      let flagged = 0;
      list.forEach((q) => {
        const cumulative = history.questions?.[q.id] || {};
        const record = roundUnitId && storage.getRoundQuestionRecord ? storage.getRoundQuestionRecord(roundUnitId, q.id) : cumulative;
        const wasAnswered = roundUnitId ? record.answered === true : Number(record.attempts || 0) > 0;
        const result = roundUnitId ? (record.answered ? (record.isCorrect ? 'correct' : 'wrong') : null) : record.lastResult;
        if (wasAnswered) answered += 1;
        if (result === 'correct') correct += 1;
        if (result === 'wrong') wrong += 1;
        if (cumulative.bookmarked) flagged += 1;
      });
      const rate = answered ? Math.round((correct / answered) * 100) : 0;
      return { total, answered, correct, wrong, flagged, review: wrong + flagged, rate };
    }

    function renderRoundStatus() {
      if (!roundUnitId || !els.roundPanel || !storage.getRoundSummary) return;
      const summary = storage.getRoundSummary(roundUnitId, roundQuestionIds);
      els.roundPanel.innerHTML = `<div class="round-status-main"><strong>第${summary.round}周</strong><span>解答 ${summary.answered} / ${summary.total}</span><span>正答率 ${summary.rate}%</span></div><button class="btn ghost" type="button" data-start-next-round>次の周回を開始</button>`;
      els.roundPanel.querySelector('[data-start-next-round]')?.addEventListener('click', () => {
        const message = summary.complete ? `第${summary.round + 1}周を開始します。` : `未解答が${Math.max(0, summary.total - summary.answered)}問あります。第${summary.round + 1}周を開始しますか？`;
        if (!window.confirm(message)) return;
        storage.startNextRound?.(roundUnitId);
        location.reload();
      });
    }


    function ensurePracticeToolbar() {
      const panel = els.card?.closest('.common-practice-panel');
      if (!panel) return;
      ensurePracticeDashboardPanel(panel);
      panel.querySelector('.practice-tools.compact')?.classList.add('practice-tools-hidden');
      panel.querySelector('.practice-tools:not(.compact):not(.bottom-only)')?.classList.add('practice-tools-hidden');
      panel.querySelector('.bottom-only')?.classList.add('practice-tools-hidden');

      if (roundUnitId && !els.roundPanel) {
        let roundPanel = panel.querySelector('.practice-round-status');
        if (!roundPanel) {
          roundPanel = document.createElement('div');
          roundPanel.className = 'practice-round-status';
          panel.insertBefore(roundPanel, els.card);
        }
        els.roundPanel = roundPanel;
        renderRoundStatus();
      }

      let toolbar = panel.querySelector('.question-toolbar.practice-question-toolbar');
      if (!toolbar) {
        toolbar = document.createElement('div');
        toolbar.className = 'question-toolbar practice-question-toolbar';
        toolbar.innerHTML = `
          <div class="question-toolbar-main">
            <button class="btn" type="button" data-inline-prev>前の問題</button>
            <span id="question-position-inline" class="question-position">0 / 0</span>
            <button class="btn" type="button" data-inline-next>次の問題</button>
          </div>
          <div class="question-toolbar-sub">
            <select id="question-jump" class="question-jump" aria-label="問題番号を選択"></select>
            <button class="btn ghost" id="inline-toggle-bookmark" type="button">後で見直す</button>
          </div>`;
        panel.insertBefore(toolbar, els.card);
      }

      let palette = panel.querySelector('#practice-question-palette');
      if (!palette) {
        palette = document.createElement('div');
        palette.id = 'practice-question-palette';
        palette.className = 'question-palette practice-question-palette';
        palette.setAttribute('aria-label', '問題番号から移動');
        palette.setAttribute('role', 'navigation');
        panel.insertBefore(palette, els.card);
      }

      let footer = panel.querySelector('.viewer-footer.practice-viewer-footer');
      if (!footer) {
        footer = document.createElement('div');
        footer.className = 'viewer-footer practice-viewer-footer';
        footer.innerHTML = `
          <button class="btn" type="button" data-footer-prev>前の問題</button>
          <button class="btn primary" type="button" data-footer-submit>解答する</button>
          <button class="btn" type="button" data-footer-next>次の問題</button>`;
        if (els.result) panel.insertBefore(footer, els.result);
        else panel.appendChild(footer);
      }

      els.inlinePrev = toolbar.querySelector('[data-inline-prev]');
      els.inlineNext = toolbar.querySelector('[data-inline-next]');
      els.inlinePosition = toolbar.querySelector('#question-position-inline');
      els.inlineJump = toolbar.querySelector('#question-jump');
      els.inlineBookmark = toolbar.querySelector('#inline-toggle-bookmark');
      els.inlinePalette = palette;
      els.footerPrev = footer.querySelector('[data-footer-prev]');
      els.footerNext = footer.querySelector('[data-footer-next]');
      els.footerSubmit = footer.querySelector('[data-footer-submit]');

      const bindMove = (button, delta) => {
        if (button && !button.dataset.bound) {
          button.dataset.bound = 'true';
          button.addEventListener('click', () => move(delta));
        }
      };
      bindMove(els.inlinePrev, -1);
      bindMove(els.inlineNext, 1);
      bindMove(els.footerPrev, -1);
      bindMove(els.footerNext, 1);

      if (els.inlineJump && !els.inlineJump.dataset.bound) {
        els.inlineJump.dataset.bound = 'true';
        els.inlineJump.addEventListener('change', (event) => {
          const nextIndex = Number(event.target.value || 0);
          if (!Number.isFinite(nextIndex) || nextIndex < 0 || nextIndex >= state.filtered.length) return;
          state.index = nextIndex;
          state.selected.clear();
          state.answered = false;
          if (els.result) els.result.innerHTML = '';
          render();
          scrollToElement(els.card);
        });
      }
      if (els.inlineBookmark && !els.inlineBookmark.dataset.bound) {
        els.inlineBookmark.dataset.bound = 'true';
        els.inlineBookmark.addEventListener('click', () => {
          if (!state.filtered.length) return;
          storage.toggleBookmark(state.filtered[state.index].id);
          render();
          renderStats();
        });
      }
      if (els.footerSubmit && !els.footerSubmit.dataset.bound) {
        els.footerSubmit.dataset.bound = 'true';
        els.footerSubmit.addEventListener('click', submitAnswer);
      }
    }

    function renderPracticePalette() {
      ensurePracticeToolbar();
      if (!els.inlinePalette) return;
      if (!state.filtered.length) {
        els.inlinePalette.innerHTML = '';
        return;
      }
      const numberButtons = state.filtered.map((item, index) => {
        const cumulative = storage.getQuestionRecord(item.id);
        const roundRecord = roundUnitId && storage.getRoundQuestionRecord ? storage.getRoundQuestionRecord(roundUnitId, item.id) : null;
        const current = index === state.index;
        const answered = roundRecord ? roundRecord.answered === true : Number(cumulative.attempts || 0) > 0;
        const result = roundRecord ? (roundRecord.answered ? (roundRecord.isCorrect ? 'correct' : 'wrong') : null) : cumulative.lastResult;
        const resultClass = result === 'correct' ? 'correct' : (result === 'wrong' ? 'wrong' : '');
        const flagged = cumulative.bookmarked ? 'flagged' : '';
        const currentClass = current ? 'active current' : '';
        const answeredClass = answered ? 'answered' : '';
        const status = result === 'correct' ? '正解' : (result === 'wrong' ? '不正解' : (answered ? '回答済み' : '未回答'));
        return `<button type="button" class="q-dot ${answeredClass} ${currentClass} ${resultClass} ${flagged}" data-practice-palette-index="${index}" data-palette-current="${current ? 'true' : 'false'}" ${current ? 'aria-current="true"' : ''} aria-label="問${index + 1} ${status}">${index + 1}</button>`;
      }).join('');
      els.inlinePalette.innerHTML = `
        <div class="practice-palette-head"><strong>問題番号</strong><span>${state.index + 1} / ${state.filtered.length}</span></div>
        <div class="practice-palette-grid">${numberButtons}</div>`;
      els.inlinePalette.querySelectorAll('[data-practice-palette-index]').forEach((button) => {
        button.addEventListener('click', () => {
          state.index = Number(button.dataset.practicePaletteIndex || 0);
          state.selected.clear();
          state.answered = false;
          if (els.result) els.result.innerHTML = '';
          render();
          scrollToElement(els.card);
        });
      });
    }

    const defaultFilters = (window.DBSQL_DEFAULT_FILTER && typeof window.DBSQL_DEFAULT_FILTER === 'object') ? window.DBSQL_DEFAULT_FILTER : {};
    const hasDefaultFilters = Object.values(defaultFilters).some((value) => Boolean(value));
    const resetFilterLabel = hasDefaultFilters ? '初期条件に戻す' : '絞り込み解除';
    const majorGroups = Array.isArray(window.DBSQL_GROUPS) ? window.DBSQL_GROUPS : [];

    function optionHasValue(el, value) {
      return Boolean(el && value && [...el.options].some((opt) => opt.value === value));
    }

    function setIfValid(el, value) {
      if (!el) return;
      el.value = optionHasValue(el, value) ? value : '';
    }

    function ensureModeOption(value, label) {
      if (!els.mode || optionHasValue(els.mode, value)) return;
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      els.mode.appendChild(option);
    }

    function ensureModeOptions() {
      ensureModeOption('due', '復習対象');
    }

    function setMajorFromValue(value) {
      const majorSelect = document.getElementById('major-filter');
      const matchedGroup = majorGroups.find((group) => group.id === value || group.name === value) || null;
      const nextValue = matchedGroup ? String(value || '') : '';
      if (majorSelect) majorSelect.value = optionHasValue(majorSelect, nextValue) ? nextValue : '';
      state.majorParam = nextValue;
      state.majorGroup = matchedGroup;
    }

    function applyBaseFilters() {
      ensureModeOptions();
      setMajorFromValue(defaultFilters.major || '');
      setIfValid(els.certification, defaultFilters.certification || '');
      setIfValid(els.unit, defaultFilters.unit || '');
      setIfValid(els.tag, defaultFilters.tag || '');
      setIfValid(els.difficulty, defaultFilters.difficulty || '');
      setIfValid(els.mode, defaultFilters.mode || '');
    }

    function setupFilters() {
      ensureModeOptions();
      const certifications = unique(questions.flatMap((q) => q.certifications || []));
      const units = unique(questions.map((q) => q.unit));
      const tags = unique(questions.flatMap((q) => publicTags(q.tags || [])));
      if (els.certification) els.certification.innerHTML = '<option value="">全資格・全目的</option>' + certifications.map((cert) => `<option value="${escapeHtml(cert)}">${escapeHtml(cert)}</option>`).join('');
      if (els.unit) els.unit.innerHTML = '<option value="">全単元</option>' + units.map((unit) => `<option value="${escapeHtml(unit)}">${escapeHtml(unit)}</option>`).join('');
      if (els.tag) els.tag.innerHTML = '<option value="">全タグ</option>' + tags.map((tag) => `<option value="${escapeHtml(tag)}">${escapeHtml(tag)}</option>`).join('');

      const params = new URLSearchParams(location.search);
      if (!state.initialQuestionId && params.get('id')) state.initialQuestionId = params.get('id');
      setMajorFromValue(params.get('major') || defaultFilters.major || '');
      setIfValid(els.certification, params.get('certification') || defaultFilters.certification || '');
      setIfValid(els.unit, params.get('unit') || defaultFilters.unit || '');
      setIfValid(els.tag, params.get('tag') || defaultFilters.tag || '');
      setIfValid(els.difficulty, params.get('difficulty') || defaultFilters.difficulty || '');
      setIfValid(els.mode, params.get('mode') || defaultFilters.mode || '');
    }

    function applyFilters() {
      const shouldScrollToQuestion = Boolean(state.initialQuestionId) || new URLSearchParams(location.search || '').has('start') || ['#quiz-card', '#practiceStart'].includes(location.hash);
      const certification = els.certification?.value || '';
      const unit = els.unit?.value || '';
      const tag = els.tag?.value || '';
      const difficulty = els.difficulty?.value || '';
      const mode = els.mode?.value || '';
      const history = storage.loadHistory();
      state.filtered = questions.filter((q) => {
        const record = history.questions?.[q.id];
        if (state.majorGroup) {
          const majorUnits = state.majorGroup.units || [];
          const majorCerts = state.majorGroup.certs || [];
          const primaryMajorMatched = q.major ? q.major === state.majorGroup.id : false;
          const unitMatched = !q.major && majorUnits.includes(q.unit);
          const certMatched = !q.major && (q.certifications || []).some((cert) => majorCerts.includes(cert));
          if (!primaryMajorMatched && !unitMatched && !certMatched) return false;
        }
        if (certification && !(q.certifications || []).includes(certification)) return false;
        if (unit && q.unit !== unit) return false;
        if (tag && !publicTags(q.tags || []).includes(tag)) return false;
        if (difficulty && q.difficulty !== difficulty) return false;
        if (mode === 'due') {
          const needsReview = Boolean(record?.bookmarked || record?.lastResult === 'wrong' || Number(record?.wrong || 0) > 0);
          if (!needsReview) return false;
        }
        if (mode === 'wrong-units') {
          const wrongUnits = history.wrongUnits || {};
          const unitKey = String(q.unit || '未分類');
          const unitRecord = Object.prototype.hasOwnProperty.call(wrongUnits, unitKey) ? wrongUnits[unitKey] : null;
          if (!unitRecord || Number(unitRecord.count || 0) <= 0) return false;
        }
        if (mode === 'wrong' && record?.lastResult !== 'wrong') return false;
        if (mode === 'bookmarked' && !record?.bookmarked) return false;
        if (mode === 'unanswered' && record?.attempts > 0) return false;
        return true;
      });
      state.index = state.initialQuestionId ? Math.max(0, state.filtered.findIndex((q) => q.id === state.initialQuestionId)) : 0;
      if (state.index < 0) state.index = 0;
      state.initialQuestionId = '';
      state.selected.clear();
      state.answered = false;
      if (els.result) els.result.innerHTML = '';
      renderActiveFilters();
      render();
      renderStats();
      if (shouldScrollToQuestion) scrollToElement(els.card);
    }

    function updateQueryParams() {
      const params = new URLSearchParams();
      if (state.majorParam) params.set('major', state.majorParam);
      if (els.certification?.value) params.set('certification', els.certification.value);
      if (els.unit?.value) params.set('unit', els.unit.value);
      if (els.tag?.value) params.set('tag', els.tag.value);
      if (els.difficulty?.value) params.set('difficulty', els.difficulty.value);
      if (els.mode?.value) params.set('mode', els.mode.value);
      const nextUrl = params.toString() ? `${location.pathname}?${params.toString()}` : location.pathname;
      history.replaceState(null, '', nextUrl);
    }

    function onFilterChange() { updateQueryParams(); applyFilters(); }

    function selectLabel(el) {
      return el?.selectedOptions?.[0]?.textContent || el?.value || '';
    }

    function clearActiveFilter(key) {
      const majorSelect = document.getElementById('major-filter');
      if (key === 'major') setMajorFromValue('');
      if (key === 'certification' && els.certification) els.certification.value = '';
      if (key === 'unit' && els.unit) els.unit.value = '';
      if (key === 'tag' && els.tag) els.tag.value = '';
      if (key === 'difficulty' && els.difficulty) els.difficulty.value = '';
      if (key === 'mode' && els.mode) els.mode.value = '';
      state.initialQuestionId = '';
      updateQueryParams();
      applyFilters();
      if (majorSelect && key === 'major') majorSelect.focus();
    }

    function renderPracticeGuide() {
      if (!els.activeFilters || document.querySelector('[data-quiz-mode-guide]')) return;
      const isDbsqlPage = document.body?.classList?.contains('dbsql-page') || document.body?.classList?.contains('subject-db-page');
      if (!isDbsqlPage) return;
      const guide = document.createElement('div');
      const modeOptions = new Set(Array.from(els.mode?.options || []).map((option) => option.value));
      const resetMessage = hasDefaultFilters
        ? `${resetFilterLabel}は、このページ本来の分野・単元・モードへ戻します。`
        : `${resetFilterLabel}は、選択中の条件を空にしてDB/SQL全体へ戻します。`;
      const modeNotes = [];
      if (modeOptions.has('due')) modeNotes.push('復習対象は、見直し登録・前回不正解・過去の不正解回数がある問題へ戻る入口です。');
      if (modeOptions.has('wrong')) modeNotes.push('前回不正解は、最後に解いた結果が不正解だった問題を集めます。');
      if (modeOptions.has('wrong-units')) modeNotes.push('不正解単元は、過去に不正解が記録された単元を広めに解き直します。');
      guide.className = 'inline-note quiz-mode-guide';
      guide.setAttribute('data-quiz-mode-guide', 'true');
      guide.setAttribute('role', 'note');
      guide.innerHTML = [
        `<span>${escapeHtml(resetMessage)}条件チップの×は、その条件だけを外します。</span>`,
        modeNotes.length ? `<span>${modeNotes.map(escapeHtml).join('')}</span>` : ''
      ].filter(Boolean).join('<br>');
      els.activeFilters.insertAdjacentElement('afterend', guide);
    }

    function renderActiveFilters() {
      if (!els.activeFilters) return;
      renderPracticeGuide();
      const majorSelect = document.getElementById('major-filter');
      const items = [];
      if (majorSelect?.value) items.push(['major', '分野', selectLabel(majorSelect)]);
      if (els.certification?.value) items.push(['certification', '資格・目的', selectLabel(els.certification)]);
      if (els.unit?.value) items.push(['unit', '単元', selectLabel(els.unit)]);
      if (els.tag?.value) items.push(['tag', 'タグ', selectLabel(els.tag)]);
      if (els.difficulty?.value) items.push(['difficulty', '難易度', selectLabel(els.difficulty)]);
      if (els.mode?.value) items.push(['mode', 'モード', selectLabel(els.mode)]);
      els.activeFilters.innerHTML = items.length
        ? items.map(([key, name, value]) => `<button class="search-filter-chip search-filter-clear" type="button" data-quiz-clear-filter="${escapeHtml(key)}" aria-label="${escapeHtml(name)}の条件を解除"><strong>${escapeHtml(name)}</strong>${escapeHtml(value)}<span aria-hidden="true">×</span></button>`).join('')
        : '<span class="search-filter-muted">条件を指定すると、ここに現在の絞り込み内容が表示されます。</span>';
      els.activeFilters.querySelectorAll('[data-quiz-clear-filter]').forEach((button) => {
        button.addEventListener('click', () => clearActiveFilter(button.dataset.quizClearFilter));
      });
    }

    function renderStats() {
      const s = currentPracticeStats();
      if (els.stats) {
        els.stats.classList.add('stat-grid', 'compact', 'practice-dashboard-stats');
        els.stats.classList.remove('quiz-dashboard');
        els.stats.innerHTML = `
          <article class="stat-card"><span>表示中</span><strong>${s.total}</strong></article>
          <article class="stat-card"><span>解答済み</span><strong>${s.answered}/${s.total}</strong></article>
          <article class="stat-card"><span>正解率</span><strong>${s.rate}%</strong></article>
          <article class="stat-card"><span>復習対象</span><strong>${s.review}</strong></article>
        `;
      }
      if (els.dashboardPanel && !els.dashboardPanel.querySelector('.practice-dashboard-legend')) {
        els.dashboardPanel.insertAdjacentHTML('beforeend', `
          <div class="palette-legend practice-dashboard-legend" aria-label="問題番号の状態">
            <span><i class="legend-dot unanswered"></i>未回答</span>
            <span><i class="legend-dot correct"></i>正解</span>
            <span><i class="legend-dot wrong"></i>不正解</span>
            <span><i class="legend-dot flagged"></i>見直し</span>
          </div>
        `);
      }
      if (els.weakUnits) {
        const wrongUnits = storage.getWrongUnits();
        const weakUnitHref = (unit) => {
          const params = new URLSearchParams();
          if (state.majorParam) params.set('major', state.majorParam);
          params.set('unit', unit);
          params.set('mode', 'wrong-units');
          return `${practiceHref}?${params.toString()}`;
        };
        els.weakUnits.innerHTML = wrongUnits.length
          ? wrongUnits.map(({ unit, count }) => `<a class="weak-unit-chip" href="${escapeHtml(weakUnitHref(unit))}">${escapeHtml(unit)}: ${count}回</a>`).join('')
          : '<p>まだ不正解単元はありません。</p>';
      }
    }

    function emptyHelpTextForMode(mode) {
      if (mode === 'due') {
        return '復習対象は、見直し登録済み、前回不正解、または過去に不正解がある問題です。まだ該当問題がない場合は、通常演習で回答履歴を作成してください。';
      }
      if (mode === 'wrong') {
        return '前回不正解の問題だけを表示しています。該当問題がない場合は、通常演習で回答してから再度開いてください。';
      }
      if (mode === 'bookmarked') {
        return '見直しに登録した問題だけを表示しています。演習画面で「後で見直す」を押すと、ここに表示されます。';
      }
      if (mode === 'wrong-units') {
        return '不正解単元に含まれる問題だけを表示しています。該当問題がない場合は、通常演習で不正解履歴を作成してください。';
      }
      if (mode === 'unanswered') {
        return '未回答の問題だけを表示しています。現在の条件では、未回答の問題が残っていません。';
      }
      return '';
    }

    function renderQuestionJump(total) {
      ensurePracticeToolbar();
      if (!els.inlineJump) return;
      const options = state.filtered.map((_, index) => `<option value="${index}">問${index + 1}</option>`).join('');
      if (els.inlineJump.innerHTML !== options) els.inlineJump.innerHTML = options;
      els.inlineJump.value = String(Math.min(state.index, Math.max(total - 1, 0)));
    }

    function render() {
      const total = state.filtered.length;
      ensurePracticeToolbar();
      if (!total) {
        const modeHelpText = emptyHelpTextForMode(els.mode?.value || '');
        const emptyHelpText = modeHelpText || (hasDefaultFilters
          ? '条件を追加で絞っている場合は、初期条件に戻してください。初期条件でも0件になる場合は、検索から近い単元を探してください。'
          : '分野、単元、タグ、モードを減らすか、絞り込みを解除してください。');
        const practiceLinkLabel = '通常ランダム演習へ進む';
        els.card.innerHTML = `
          <div class="quiz-empty search-empty-state">
            <h2>条件に合う問題がありません</h2>
            <p>${escapeHtml(emptyHelpText)}</p>
            <div class="dashboard-action-grid">
              <button class="button secondary" data-quiz-reset-filters type="button">${escapeHtml(resetFilterLabel)}</button>
              <a class="button primary" href="${escapeHtml(practiceHref)}">${escapeHtml(practiceLinkLabel)}</a>
            </div>
          </div>`;
        els.card.querySelector('[data-quiz-reset-filters]')?.addEventListener('click', resetFilters);
        if (els.count) els.count.textContent = '0 / 0';
        if (els.progress) els.progress.style.width = '0%';
        if (els.result) els.result.innerHTML = '';
        if (els.submit) els.submit.disabled = true;
        if (els.prev) els.prev.disabled = true;
        if (els.next) els.next.disabled = true;
        if (els.bookmark) els.bookmark.disabled = true;
        if (els.inlinePrev) els.inlinePrev.disabled = true;
        if (els.inlineNext) els.inlineNext.disabled = true;
        if (els.inlineBookmark) els.inlineBookmark.disabled = true;
        if (els.inlinePosition) els.inlinePosition.textContent = '0 / 0';
        if (els.inlineJump) els.inlineJump.innerHTML = '';
        if (els.footerPrev) els.footerPrev.disabled = true;
        if (els.footerNext) els.footerNext.disabled = true;
        if (els.footerSubmit) {
          els.footerSubmit.disabled = true;
          els.footerSubmit.textContent = '解答する';
        }
        renderPracticePalette();
        return;
      }
      const q = state.filtered[state.index];
      const record = storage.getQuestionRecord(q.id);
      const isBookmarked = Boolean(record.bookmarked);
      const positionText = `${state.index + 1} / ${total}`;
      if (els.count) els.count.textContent = positionText;
      if (els.progress) els.progress.style.width = `${((state.index + 1) / total) * 100}%`;
      if (els.submit) els.submit.disabled = state.answered;
      if (els.prev) els.prev.disabled = total <= 1;
      if (els.next) els.next.disabled = total <= 1;
      if (els.bookmark) {
        els.bookmark.disabled = false;
        els.bookmark.textContent = isBookmarked ? '見直し解除' : '後で見直す';
      }
      renderQuestionJump(total);
      if (els.inlinePosition) els.inlinePosition.textContent = positionText;
      if (els.inlinePrev) els.inlinePrev.disabled = total <= 1;
      if (els.inlineNext) els.inlineNext.disabled = total <= 1;
      if (els.inlineBookmark) {
        els.inlineBookmark.disabled = false;
        els.inlineBookmark.textContent = isBookmarked ? '見直し解除' : '後で見直す';
      }
      if (els.footerPrev) els.footerPrev.disabled = total <= 1;
      if (els.footerNext) els.footerNext.disabled = total <= 1;
      if (els.footerSubmit) {
        els.footerSubmit.disabled = state.answered;
        els.footerSubmit.textContent = state.answered ? '採点済み' : '解答する';
      }
      renderPracticePalette();

      const publicTagText = publicTags(q.tags || []).join(', ');
      const metaItems = [q.certifications?.[0] || 'Java', q.unit, q.difficulty, publicTagText].filter(Boolean);
      els.card.innerHTML = `
        <div class="quiz-meta">${metaItems.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        <div class="quiz-question-head"><p class="quiz-question-number">問${state.index + 1}</p></div>
        ${questionBodyHtml(q)}
        ${renderVisualHtml(q)}
        ${q.code ? codeBlockHtml(q.code) : ''}
        <p class="inline-note">${isMultiQuestion(q) ? `${selectCount(q)}つ選択` : '1つ選択'}</p>
        <div class="quiz-choices">${renderChoices(q, state.selected, state.answered)}</div>
        <p class="quiz-history">回答回数: ${record.attempts || 0} / 正解: ${record.correct || 0} / 不正解: ${record.wrong || 0}</p>
      `;
      setSelectionValues(state.selected, normalizeSelection(q, [...state.selected]));
      bindChoiceInputs(els.card, state, q);
    }

    function submitAnswer() {
      if (!state.filtered.length || state.answered) return;
      const q = state.filtered[state.index];
      const selected = normalizeSelection(q, [...state.selected]);
      const answer = answerKeys(q).sort();
      const required = selectCount(q);
      if (selected.length !== required) {
        if (els.result) {
          els.result.innerHTML = `<div class="quiz-result warning"><h3>選択数を確認してください</h3><p>${required}つ選択してください。現在 ${selected.length}つです。</p></div>`;
          scrollToElement(els.result);
        }
        return;
      }
      const isCorrect = arraysEqualAsSet(selected, answer);
      const explanationHeading = '解説';
      storage.updateQuestionResult(q, isCorrect, { roundUnitId });
      state.answered = true;
      if (els.result) {
        els.result.innerHTML = `
          <div class="quiz-result ${isCorrect ? 'correct' : 'wrong'} readable-quiz-result">
            <h3>${isCorrect ? '正解' : '不正解'}</h3>
            <section class="quiz-answer-summary" aria-label="回答結果">
              <p><strong>あなたの回答:</strong> ${selected.length ? selected.join(', ') : '未選択'}</p>
              <p><strong>正解:</strong> ${answer.join(', ')}</p>
            </section>
            <section class="quiz-explanation-section" aria-label="解説">
              <h4>${escapeHtml(explanationHeading)}</h4>
              ${explanationHtml(q.explanation)}
              ${explanationVisualHtml(q)}
            </section>
            ${q.exercisePoint ? `<section class="quiz-explanation-section" aria-label="演習ポイント"><h4>演習ポイント</h4>${explanationHtml(q.exercisePoint)}</section>` : ''}
            <section class="quiz-explanation-section" aria-label="選択肢別解説">
              <h4>選択肢別解説</h4>
              <div class="choice-explanation-list">${choiceDetailHtml(q, selected, answer)}</div>
            </section>
          </div>
        `;
      }
      render();
      renderStats();
      renderRoundStatus();
      scrollToElement(els.result);
    }

    function move(delta) {
      if (!state.filtered.length) return;
      const total = state.filtered.length;
      state.index = (state.index + delta + total) % total;
      state.selected.clear();
      state.answered = false;
      if (els.result) els.result.innerHTML = '';
      render();
      scrollToElement(els.card);
    }

    function shuffleQuestions() {
      for (let i = state.filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.filtered[i], state.filtered[j]] = [state.filtered[j], state.filtered[i]];
      }
      state.index = state.initialQuestionId ? Math.max(0, state.filtered.findIndex((q) => q.id === state.initialQuestionId)) : 0;
      if (state.index < 0) state.index = 0;
      state.initialQuestionId = '';
      state.selected.clear();
      state.answered = false;
      if (els.result) els.result.innerHTML = '';
      render();
    }

    function resetFilters() {
      applyBaseFilters();
      state.selected.clear();
      state.answered = false;
      if (els.result) els.result.innerHTML = '';
      updateQueryParams();
      applyFilters();
    }

    setupFilters();
    ensurePracticeToolbar();
    if (els.reset) els.reset.textContent = resetFilterLabel;
    applyFilters();
    [els.certification, els.unit, els.tag, els.difficulty, els.mode].filter(Boolean).forEach((el) => el.addEventListener('change', onFilterChange));
    els.shuffle?.addEventListener('click', shuffleQuestions);
    els.reset?.addEventListener('click', resetFilters);
    els.submit?.addEventListener('click', submitAnswer);
    els.prev?.addEventListener('click', () => move(-1));
    els.next?.addEventListener('click', () => move(1));
    els.bookmark?.addEventListener('click', () => {
      if (!state.filtered.length) return;
      storage.toggleBookmark(state.filtered[state.index].id);
      render();
      renderStats();
    });
    document.querySelectorAll('[data-duplicate-control="prev"]').forEach((button) => button.addEventListener('click', () => move(-1)));
    document.querySelectorAll('[data-duplicate-control="next"]').forEach((button) => button.addEventListener('click', () => move(1)));
  }

  function mountFixedMock(options) {
    const questions = options.questions || [];
    const mocks = options.mocks || [];
    const storage = options.storage;
    const config = options.config || {};
    const resultContractContainer = document.querySelector('#fixed-mock-result');
    const resultContractDataset = resultContractContainer?.dataset || {};
    const parseResultContract = (value) => String(value || '').split(/[\s,]+/).map((item) => item.trim()).filter(Boolean);
    const fixedMockResultLayout = options.resultLayout || config.resultLayout || resultContractDataset.resultLayout || 'unified-gold-equivalent';
    const fixedMockResultContract = Array.isArray(options.resultContract) && options.resultContract.length
      ? options.resultContract
      : (parseResultContract(config.resultContract).length
        ? parseResultContract(config.resultContract)
        : (parseResultContract(resultContractDataset.resultContract).length
          ? parseResultContract(resultContractDataset.resultContract)
          : ['summary', 'analysis', 'review', 'question-list']));
    const fixedMockResultTemplate = options.resultTemplate || config.resultTemplate || resultContractDataset.resultTemplate || 'gold-current';
    const mock = mocks.find((item) => item.id === config.mockId) || mocks[0];
    const questionMap = new Map(questions.map((q) => [q.id, q]));
    const selectedQuestions = (mock?.questionIds || []).map((id) => questionMap.get(id)).filter(Boolean);
    const state = { current: 0, answers: {}, started: false, startedAt: null, finished: false, timerId: null, mode: 'exam', reviewed: {}, practiceMessages: {}, resultAutoScrollLocked: false, resultJumpNavBound: false, resultReviewNavBound: false, resultHashCurrentBound: false };
    const $ = (selector) => document.querySelector(selector);
    const els = {
      title: $('#fixed-mock-title'), description: $('#fixed-mock-description'), timer: $('#fixed-mock-timer'),
      number: $('#fixed-mock-number'), progress: $('#fixed-mock-progress'), card: $('#fixed-mock-card'),
      palette: $('#fixed-mock-palette'), prev: $('#fixed-mock-prev'), next: $('#fixed-mock-next'), finish: $('#fixed-mock-finish'),
      result: $('#fixed-mock-result'), restart: $('#fixed-mock-restart'), answered: $('#fixed-mock-answered'), unanswered: $('#fixed-mock-unanswered'),
      toolbarPrev: null, toolbarNext: null, toolbarPosition: null, toolbarJump: null, toolbarRestart: null,
      footerPrev: null, footerNext: null, footerPrimary: null
    };
    if (!els.card || !storage) return;

    function scrollToElement(element) {
      if (!element) return;
      const run = () => {
        const header = document.querySelector('.site-header');
        const offset = (header?.getBoundingClientRect?.().height || 0) + 18;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      };
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(run));
      else setTimeout(run, 0);
    }

    function ensureMockChrome() {
      const panel = els.card?.closest('.mock-panel');
      if (!panel) return;
      const bottomActions = panel.querySelector('.quiz-actions.bottom-actions');
      if (bottomActions) bottomActions.classList.add('practice-tools-hidden');

      let toolbar = panel.querySelector('.question-toolbar.mock-question-toolbar');
      if (!toolbar) {
        toolbar = document.createElement('div');
        toolbar.className = 'question-toolbar mock-question-toolbar';
        toolbar.innerHTML = `
          <div class="question-toolbar-main">
            <button class="btn" type="button" data-mock-toolbar-prev>前の問題</button>
            <span class="question-position" id="fixed-mock-position-inline">0 / 0</span>
            <button class="btn" type="button" data-mock-toolbar-next>次の問題</button>
          </div>
          <div class="question-toolbar-sub">
            <select id="fixed-mock-jump" class="question-jump" aria-label="問題番号を選択"></select>
            <button class="btn ghost" type="button" data-mock-toolbar-restart>最初からやり直す</button>
          </div>`;
        panel.insertBefore(toolbar, els.card);
      }
      if (els.palette && toolbar.nextSibling !== els.palette) panel.insertBefore(els.palette, els.card);
      let footer = panel.querySelector('.viewer-footer.mock-viewer-footer');
      if (!footer) {
        footer = document.createElement('div');
        footer.className = 'viewer-footer mock-viewer-footer';
        footer.innerHTML = `
          <button class="btn" type="button" data-mock-footer-prev>前の問題</button>
          <button class="btn primary" type="button" data-mock-footer-primary>終了して採点</button>
          <button class="btn" type="button" data-mock-footer-next>次の問題</button>`;
        panel.insertBefore(footer, els.result);
      }
      els.toolbarPrev = toolbar.querySelector('[data-mock-toolbar-prev]');
      els.toolbarNext = toolbar.querySelector('[data-mock-toolbar-next]');
      els.toolbarPosition = toolbar.querySelector('#fixed-mock-position-inline');
      els.toolbarJump = toolbar.querySelector('#fixed-mock-jump');
      els.toolbarRestart = toolbar.querySelector('[data-mock-toolbar-restart]');
      els.footerPrev = footer.querySelector('[data-mock-footer-prev]');
      els.footerNext = footer.querySelector('[data-mock-footer-next]');
      els.footerPrimary = footer.querySelector('[data-mock-footer-primary]');

      const bindButton = (button, handler) => {
        if (button && !button.dataset.bound) {
          button.dataset.bound = 'true';
          button.addEventListener('click', handler);
        }
      };
      bindButton(els.toolbarPrev, () => navigateMock(-1));
      bindButton(els.toolbarNext, () => navigateMock(1));
      bindButton(els.footerPrev, () => navigateMock(-1));
      bindButton(els.footerNext, () => navigateMock(1));
      bindButton(els.toolbarRestart, restart);
      bindButton(els.footerPrimary, () => {
        if (!state.started) return;
        if (state.finished) {
          restart();
          return;
        }
        if (state.mode === 'practice') {
          const q = selectedQuestions[state.current];
          const reviewed = Boolean(state.reviewed?.[q?.id]);
          if (reviewed) finish(false);
          else checkCurrentPracticeAnswer();
          return;
        }
        finish(true);
      });
      if (els.toolbarJump && !els.toolbarJump.dataset.bound) {
        els.toolbarJump.dataset.bound = 'true';
        els.toolbarJump.addEventListener('change', (event) => {
          const nextIndex = Number(event.target.value || 0);
          if (!Number.isFinite(nextIndex) || nextIndex < 0 || nextIndex >= selectedQuestions.length) return;
          state.current = nextIndex;
          if (state.finished) renderFinishedQuestion(state.current, true);
          else { render(); scrollToElement(els.card); }
        });
      }
    }

    function renderMockJump() {
      ensureMockChrome();
      if (!els.toolbarJump) return;
      const options = selectedQuestions.map((_, index) => `<option value="${index}">問${index + 1}</option>`).join('');
      if (els.toolbarJump.innerHTML !== options) els.toolbarJump.innerHTML = options;
      els.toolbarJump.value = String(Math.min(state.current, Math.max(selectedQuestions.length - 1, 0)));
    }

    function updateMockChrome() {
      ensureMockChrome();
      const started = Boolean(state.started);
      const total = selectedQuestions.length;
      const hidden = !started || !total;
      [els.palette, els.footerPrev, els.footerNext, els.footerPrimary, els.toolbarPrev, els.toolbarNext, els.toolbarPosition, els.toolbarJump, els.toolbarRestart].forEach((element) => {
        if (element && element.parentElement?.classList?.contains('viewer-footer')) element.parentElement.hidden = hidden;
      });
      const toolbar = els.toolbarPrev?.closest('.question-toolbar');
      const footer = els.footerPrev?.closest('.viewer-footer');
      if (toolbar) toolbar.hidden = hidden;
      if (footer) footer.hidden = hidden;
      if (els.palette) els.palette.hidden = hidden;
      if (hidden) return;
      const positionText = `${state.current + 1} / ${total}`;
      if (els.toolbarPosition) els.toolbarPosition.textContent = positionText;
      renderMockJump();
      const navDisabled = total <= 1;
      [els.toolbarPrev, els.toolbarNext, els.footerPrev, els.footerNext].forEach((button) => {
        if (button) button.disabled = navDisabled;
      });
      if (els.toolbarRestart) els.toolbarRestart.disabled = false;
      if (els.footerPrimary) {
        if (state.finished) {
          els.footerPrimary.textContent = '最初からやり直す';
          els.footerPrimary.disabled = false;
        } else if (state.mode === 'practice') {
          const q = selectedQuestions[state.current];
          const reviewed = Boolean(state.reviewed?.[q?.id]);
          els.footerPrimary.textContent = reviewed ? '結果を見る' : '解答する';
          els.footerPrimary.disabled = false;
        } else {
          els.footerPrimary.textContent = '終了して採点';
          els.footerPrimary.disabled = false;
        }
      }
    }

    function navigateMock(delta) {
      if (!selectedQuestions.length || !state.started) return;
      if (state.finished) {
        state.current = (state.current + delta + selectedQuestions.length) % selectedQuestions.length;
        renderFinishedQuestion(state.current, true);
        return;
      }
      move(delta);
    }

    function checkCurrentPracticeAnswer() {
      if (!state.started || state.finished || state.mode !== 'practice') return;
      const q = selectedQuestions[state.current];
      if (!q) return;
      const latest = normalizeSelection(q, state.answers[q.id] || []);
      if (!latest.length) {
        state.practiceMessages[q.id] = '回答を選んでから採点します。';
        render();
        return;
      }
      state.reviewed[q.id] = true;
      delete state.practiceMessages[q.id];
      render();
      const feedback = els.card.querySelector('.mock-practice-feedback');
      if (feedback) scrollToElement(feedback);
    }

    function fixedMockResultSectionHash(hash = location.hash) {
      const value = String(hash || '').trim();
      const resultSections = new Set(['#mock-result-summary', '#mock-analysis-section', '#mock-review-section', '#mock-result-question-list']);
      return resultSections.has(value) ? value : '#mock-result-summary';
    }

    function fixedMockResultFocusTarget() {
      if (!els.result) return null;
      const sectionHash = fixedMockResultSectionHash();
      const shouldFocusSection = sectionHash !== '#mock-result-summary' || location.hash === '#mock-result-summary';
      return shouldFocusSection ? (els.result.querySelector(sectionHash) || els.result) : els.result;
    }

    function focusResult() {
      if (!els.result || state.resultAutoScrollLocked) return;
      const target = fixedMockResultFocusTarget() || els.result;
      target.setAttribute('tabindex', '-1');
      scrollToElement(target);
      if (typeof target.focus === 'function') {
        const runFocus = () => {
          if (state.resultAutoScrollLocked) return;
          target.focus({ preventScroll: true });
        };
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(runFocus);
        else setTimeout(runFocus, 0);
      }
    }

    function fixedMockResultScreen() {
      return els.result?.querySelector('#mock-result-screen, .mock-result-screen') || null;
    }

    function isFixedMockResultHash(hash = location.hash) {
      return ['#fixed-mock-result', '#mock-result-screen', '#mock-result-summary', '#mock-analysis-section', '#mock-review-section', '#mock-result-question-list'].includes(hash || '');
    }

    function replaceFixedMockHash(hash = '') {
      const cleanHash = String(hash || '');
      const nextUrl = `${location.pathname}${location.search || ''}${cleanHash}`;
      if (window.history?.replaceState) {
        try {
          window.history.replaceState(null, '', nextUrl);
          return;
        } catch (_) {
          // Opaque-origin preview environments can reject replaceState; hash fallback keeps navigation usable.
        }
      }
      if (cleanHash) location.hash = cleanHash.replace(/^#/, '');
      else if (location.hash) location.hash = '';
    }

    function setFixedMockResultHash() {
      if (isFixedMockResultHash()) return;
      replaceFixedMockHash('#fixed-mock-result');
    }

    function clearFixedMockResultHash() {
      if (!isFixedMockResultHash()) return;
      replaceFixedMockHash('');
    }

    function resetFixedMockResultArea(shouldHide = true) {
      if (!els.result) return;
      els.result.innerHTML = '';
      els.result.classList.remove('is-active-mock-result', 'is-complete-mock-result');
      els.result.removeAttribute('tabindex');
      els.result.removeAttribute('data-result-current-index');
      els.result.removeAttribute('data-result-review-current-index');
      els.result.removeAttribute('data-result-section-current');
      els.result.removeAttribute('data-result-section-current-sync');
      els.result.removeAttribute('data-result-section-current-sync-missing');
      els.result.removeAttribute('data-result-section-nav-expected-count');
      els.result.removeAttribute('data-result-section-nav-current-count');
      els.result.removeAttribute('data-result-analysis-current-index');
      els.result.removeAttribute('data-result-current-sync');
      els.result.removeAttribute('data-result-current-sync-missing');
      els.result.removeAttribute('data-result-palette-current-sync');
      els.result.removeAttribute('data-result-palette-current-sync-missing');
      els.result.removeAttribute('data-result-analysis-current-sync');
      els.result.removeAttribute('data-result-analysis-current-sync-missing');
      els.result.removeAttribute('data-result-review-current-sync');
      els.result.removeAttribute('data-result-review-current-sync-missing');
      els.result.removeAttribute('data-result-analysis-expected-count');
      els.result.removeAttribute('data-result-analysis-current-count');
      els.result.removeAttribute('data-result-palette-expected-count');
      els.result.removeAttribute('data-result-palette-current-count');
      els.result.removeAttribute('data-result-review-expected-count');
      els.result.removeAttribute('data-result-review-current-count');
      els.result.removeAttribute('data-result-dom');
      els.result.removeAttribute('data-result-order');
      els.result.removeAttribute('data-result-layout');
      els.result.removeAttribute('data-result-contract');
      els.result.removeAttribute('data-result-template');
      els.result.removeAttribute('data-result-sections');
      els.result.removeAttribute('data-mock-id');
      els.result.removeAttribute('data-certification');
      els.result.removeAttribute('aria-live');
      els.result.removeAttribute('data-result-ready');
      els.result.removeAttribute('data-missing-sections');
      els.result.removeAttribute('data-result-hash-sync');
      els.result.removeAttribute('data-result-jump-nav');
      els.result.removeAttribute('data-result-review-nav');
      els.result.removeAttribute('data-has-summary');
      els.result.removeAttribute('data-has-analysis');
      els.result.removeAttribute('data-has-review');
      els.result.removeAttribute('data-has-question-list');
      els.result.removeAttribute('data-has-gold-equivalent-order');
      if (shouldHide) els.result.hidden = true;
    }

    function resultScreenIsVisible() {
      return Boolean(els.result && !els.result.hidden && fixedMockResultScreen());
    }

    function lockResultAutoScrollOnManualInput(event) {
      if (!state.finished || !resultScreenIsVisible()) return;
      if (event?.type === 'keydown') {
        const scrollKeys = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar']);
        if (!scrollKeys.has(event.key)) return;
      }
      state.resultAutoScrollLocked = true;
    }

    function bindResultAutoScrollGuard() {
      document.addEventListener('wheel', lockResultAutoScrollOnManualInput, { passive: true });
      document.addEventListener('touchstart', lockResultAutoScrollOnManualInput, { passive: true });
      document.addEventListener('pointerdown', lockResultAutoScrollOnManualInput, { passive: true });
      document.addEventListener('keydown', lockResultAutoScrollOnManualInput);
    }

    function setResultJumpNavCurrent(sectionId = '#mock-result-summary') {
      if (!els.result) return;
      const id = String(sectionId || '#mock-result-summary').startsWith('#') ? String(sectionId || '#mock-result-summary') : `#${sectionId}`;
      const cleanId = id.replace(/^#/, '');
      const navLinks = Array.from(els.result.querySelectorAll('.mock-result-jump-nav a[href^="#"]'));
      let targetFound = false;
      let currentCount = 0;
      navLinks.forEach((navLink) => {
        const current = navLink.getAttribute('href') === id;
        targetFound = targetFound || current;
        if (current) currentCount += 1;
        navLink.classList.toggle('current', current);
        if (current) navLink.setAttribute('aria-current', 'location');
        else navLink.removeAttribute('aria-current');
      });
      const sectionCurrentSyncMissing = [
        targetFound ? '' : 'section-nav-target',
        currentCount === 1 ? '' : 'section-nav-current-count'
      ].filter(Boolean).join(' ');
      const sectionCurrentSync = sectionCurrentSyncMissing ? 'partial' : 'synced';
      els.result.dataset.resultSectionCurrent = cleanId;
      els.result.dataset.resultSectionCurrentSync = sectionCurrentSync;
      els.result.dataset.resultSectionCurrentSyncMissing = sectionCurrentSyncMissing;
      els.result.dataset.resultSectionNavExpectedCount = targetFound ? '1' : '0';
      els.result.dataset.resultSectionNavCurrentCount = String(currentCount);
      const screen = fixedMockResultScreen();
      if (screen) {
        screen.dataset.resultSectionCurrent = cleanId;
        screen.dataset.resultSectionCurrentSync = sectionCurrentSync;
        screen.dataset.resultSectionCurrentSyncMissing = sectionCurrentSyncMissing;
        screen.dataset.resultSectionNavExpectedCount = targetFound ? '1' : '0';
        screen.dataset.resultSectionNavCurrentCount = String(currentCount);
      }
    }

    function bindResultJumpNav() {
      if (!els.result || state.resultJumpNavBound) return;
      state.resultJumpNavBound = true;
      els.result.dataset.resultJumpNav = 'delegated';
      els.result.addEventListener('click', (event) => {
        const link = event.target?.closest?.('.mock-result-jump-nav a[href^="#"]');
        if (!link || !els.result.contains(link)) return;
        const id = link.getAttribute('href');
        const target = id ? els.result.querySelector(id) || document.querySelector(id) : null;
        if (!target) return;
        state.resultAutoScrollLocked = true;
        event.preventDefault();
        setResultJumpNavCurrent(id);
        replaceFixedMockHash(id);
        scrollToElement(target);
        if (typeof target.focus === 'function') {
          target.setAttribute('tabindex', '-1');
          const runFocus = () => target.focus({ preventScroll: true });
          if (typeof requestAnimationFrame === 'function') requestAnimationFrame(runFocus);
          else setTimeout(runFocus, 0);
        }
      });
    }

    function syncResultJumpNavCurrentFromHash() {
      if (!state.finished || !resultScreenIsVisible() || !isFixedMockResultHash()) return;
      setResultJumpNavCurrent(fixedMockResultSectionHash());
    }


    function setResultCurrentIndex(idx) {
      if (!els.result || !Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return;
      state.current = idx;
      els.result.dataset.resultCurrentIndex = String(idx);
      const screen = fixedMockResultScreen();
      if (screen) screen.dataset.resultCurrentIndex = String(idx);
    }

    function setResultAnalysisReviewCurrent(idx) {
      if (!els.result || !Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return;
      els.result.dataset.resultAnalysisCurrentIndex = String(idx);
      const screen = fixedMockResultScreen();
      if (screen) screen.dataset.resultAnalysisCurrentIndex = String(idx);
      els.result.querySelectorAll('[data-analysis-review-index]').forEach((button) => {
        const current = Number(button.dataset.analysisReviewIndex) === idx;
        button.classList.toggle('current', current);
        if (current) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      });
    }

    function markResultCurrentIndexSync(idx = state.current) {
      if (!els.result || !state.finished || !resultScreenIsVisible() || !Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return false;
      if (idx !== state.current) return false;
      const screen = fixedMockResultScreen();
      const indexText = String(idx);
      const paletteButtons = Array.from(els.result.querySelectorAll('[data-result-index]'));
      const analysisButtons = Array.from(els.result.querySelectorAll('[data-analysis-review-index]'));
      const paletteCurrent = paletteButtons.filter((button) =>
        button.classList.contains('current') || button.getAttribute('aria-current') === 'true'
      );
      const analysisExpected = analysisButtons.filter((button) => Number(button.dataset.analysisReviewIndex) === idx);
      const analysisCurrent = analysisButtons.filter((button) =>
        button.classList.contains('current') || button.getAttribute('aria-current') === 'true'
      );
      const reviewItems = Array.from(els.result.querySelectorAll('[data-result-review-index]'));
      const reviewCurrentItems = Array.from(els.result.querySelectorAll('.mock-review-item[data-result-review-current="true"], .mock-review-item.current, .mock-review-item[aria-current="true"]'))
        .filter((item, index, list) => list.indexOf(item) === index);
      const reviewItem = els.result.querySelector(`#mock-review-${idx}`);
      const resultIndexOk = els.result.dataset.resultCurrentIndex === indexText && (!screen || screen.dataset.resultCurrentIndex === indexText);
      const reviewIndexOk = els.result.dataset.resultReviewCurrentIndex === indexText && (!screen || screen.dataset.resultReviewCurrentIndex === indexText);
      const analysisIndexOk = els.result.dataset.resultAnalysisCurrentIndex === indexText && (!screen || screen.dataset.resultAnalysisCurrentIndex === indexText);
      const paletteOk = paletteCurrent.length === 1 && Number(paletteCurrent[0].dataset.resultIndex) === idx;
      const analysisOk = analysisExpected.length
        ? analysisExpected.every((button) => button.classList.contains('current') || button.getAttribute('aria-current') === 'true')
          && analysisCurrent.length >= analysisExpected.length
          && analysisCurrent.every((button) => Number(button.dataset.analysisReviewIndex) === idx)
        : analysisCurrent.length === 0;
      const reviewCurrentForIndex = reviewCurrentItems.filter((item) => Number(item.dataset.resultReviewIndex) === idx);
      const reviewOk = Boolean(reviewItem
        && reviewItem.dataset.resultReviewCurrent === 'true'
        && reviewItem.classList.contains('current')
        && reviewItem.getAttribute('aria-current') === 'true'
        && reviewCurrentItems.length === 1
        && reviewCurrentForIndex.length === 1);
      const paletteMissing = paletteOk ? '' : 'question-palette-current';
      const analysisMissing = analysisOk ? '' : 'analysis-current';
      const reviewMissing = reviewOk ? '' : 'review-current';
      const missing = [
        resultIndexOk ? '' : 'result-current-index',
        reviewIndexOk ? '' : 'result-review-current-index',
        analysisIndexOk ? '' : 'result-analysis-current-index',
        paletteMissing,
        analysisMissing,
        reviewMissing
      ].filter(Boolean);
      const status = missing.length ? 'partial' : 'synced';
      const paletteSync = paletteMissing ? 'partial' : 'synced';
      const analysisSync = analysisMissing ? 'partial' : 'synced';
      const reviewSync = reviewMissing ? 'partial' : 'synced';
      const analysisExpectedCount = String(analysisExpected.length);
      const analysisCurrentCount = String(analysisCurrent.length);
      const paletteExpectedCount = '1';
      const paletteCurrentCount = String(paletteCurrent.length);
      const reviewExpectedCount = reviewItems.length ? '1' : '0';
      const reviewCurrentCount = String(reviewCurrentItems.length);
      els.result.dataset.resultCurrentSync = status;
      els.result.dataset.resultCurrentSyncMissing = missing.join(' ');
      els.result.dataset.resultPaletteCurrentSync = paletteSync;
      els.result.dataset.resultPaletteCurrentSyncMissing = paletteMissing;
      els.result.dataset.resultAnalysisCurrentSync = analysisSync;
      els.result.dataset.resultAnalysisCurrentSyncMissing = analysisMissing;
      els.result.dataset.resultReviewCurrentSync = reviewSync;
      els.result.dataset.resultReviewCurrentSyncMissing = reviewMissing;
      els.result.dataset.resultAnalysisExpectedCount = analysisExpectedCount;
      els.result.dataset.resultAnalysisCurrentCount = analysisCurrentCount;
      els.result.dataset.resultPaletteExpectedCount = paletteExpectedCount;
      els.result.dataset.resultPaletteCurrentCount = paletteCurrentCount;
      els.result.dataset.resultReviewExpectedCount = reviewExpectedCount;
      els.result.dataset.resultReviewCurrentCount = reviewCurrentCount;
      if (screen) {
        screen.dataset.resultCurrentSync = status;
        screen.dataset.resultCurrentSyncMissing = missing.join(' ');
        screen.dataset.resultPaletteCurrentSync = paletteSync;
        screen.dataset.resultPaletteCurrentSyncMissing = paletteMissing;
        screen.dataset.resultAnalysisCurrentSync = analysisSync;
        screen.dataset.resultAnalysisCurrentSyncMissing = analysisMissing;
        screen.dataset.resultReviewCurrentSync = reviewSync;
        screen.dataset.resultReviewCurrentSyncMissing = reviewMissing;
        screen.dataset.resultAnalysisExpectedCount = analysisExpectedCount;
        screen.dataset.resultAnalysisCurrentCount = analysisCurrentCount;
        screen.dataset.resultPaletteExpectedCount = paletteExpectedCount;
        screen.dataset.resultPaletteCurrentCount = paletteCurrentCount;
        screen.dataset.resultReviewExpectedCount = reviewExpectedCount;
        screen.dataset.resultReviewCurrentCount = reviewCurrentCount;
      }
      return !missing.length;
    }

    function scheduleResultCurrentIndexSync(idx = state.current) {
      if (!Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return;
      const sync = () => {
        if (idx !== state.current) return;
        markResultCurrentIndexSync(idx);
      };
      sync();
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(sync));
      else setTimeout(sync, 0);
      setTimeout(sync, 120);
      setTimeout(sync, 360);
    }

    function bindResultHashCurrentSync() {
      if (state.resultHashCurrentBound) return;
      state.resultHashCurrentBound = true;
      if (els.result) els.result.dataset.resultHashSync = 'bound';
      const screen = fixedMockResultScreen();
      if (screen) screen.dataset.resultHashSync = 'bound';
      window.addEventListener('hashchange', syncResultJumpNavCurrentFromHash);
      window.addEventListener('popstate', syncResultJumpNavCurrentFromHash);
    }

    function openFixedMockResultReview(idx, sourceButton) {
      if (!els.result || !Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return;
      state.resultAutoScrollLocked = true;
      setResultCurrentIndex(idx);
      els.result.dataset.resultReviewCurrentIndex = String(idx);
      const screen = fixedMockResultScreen();
      if (screen) screen.dataset.resultReviewCurrentIndex = String(idx);
      const item = els.result.querySelector(`#mock-review-${idx}`);
      if (item) {
        item.open = true;
        els.result.querySelectorAll('.mock-review-item[data-result-review-current="true"], .mock-review-item.current, .mock-review-item[aria-current="true"]').forEach((other) => {
          other.removeAttribute('data-result-review-current');
          other.removeAttribute('aria-current');
          other.classList.remove('current');
        });
        item.dataset.resultReviewCurrent = 'true';
        item.setAttribute('aria-current', 'true');
        item.classList.add('current');
        els.result.querySelectorAll('[data-result-index]').forEach((other) => {
          const current = Number(other.dataset.resultIndex) === idx;
          other.classList.toggle('current', current);
          if (current) other.setAttribute('aria-current', 'true');
          else other.removeAttribute('aria-current');
        });
        setResultAnalysisReviewCurrent(idx);
        scheduleResultCurrentIndexSync(idx);
        scrollToElement(item);
        if (typeof item.focus === 'function') {
          item.setAttribute('tabindex', '-1');
          const runFocus = () => item.focus({ preventScroll: true });
          if (typeof requestAnimationFrame === 'function') requestAnimationFrame(runFocus);
          else setTimeout(runFocus, 0);
        }
        sourceButton?.classList?.add('visited');
      } else if (idx >= 0 && idx < selectedQuestions.length) {
        renderFinishedQuestion(idx, true);
      }
    }

    function bindResultReviewNav() {
      if (!els.result || state.resultReviewNavBound) return;
      state.resultReviewNavBound = true;
      els.result.dataset.resultReviewNav = 'delegated';
      els.result.addEventListener('click', (event) => {
        const button = event.target?.closest?.('[data-result-index], [data-analysis-review-index]');
        if (!button || !els.result.contains(button)) return;
        const rawIndex = button.dataset.resultIndex ?? button.dataset.analysisReviewIndex;
        const idx = Number(rawIndex);
        if (!Number.isInteger(idx) || idx < 0 || idx >= selectedQuestions.length) return;
        event.preventDefault();
        openFixedMockResultReview(idx, button);
      });
    }

    function setFixedMockResultActive(active) {
      document.body?.classList?.toggle('java-mock-result-active', Boolean(active));
      els.result?.classList?.toggle('is-active-mock-result', Boolean(active));
    }

    function scrollToFixedMockResultScreen(screen = fixedMockResultScreen(), behavior = 'smooth') {
      if (!screen) return;
      const run = (nextBehavior = behavior) => {
        if (state.resultAutoScrollLocked) return;
        const header = document.querySelector('.site-header');
        const offset = (header?.getBoundingClientRect?.().height || 0) + 18;
        const target = isFixedMockResultHash() && location.hash && !['#fixed-mock-result', '#mock-result-screen'].includes(location.hash)
          ? (screen.querySelector(location.hash) || screen)
          : screen;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: nextBehavior });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        try { target.focus({ preventScroll: true }); } catch (_) { /* focus is optional */ }
      };
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      const firstBehavior = reduced ? 'auto' : behavior;
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(() => run(firstBehavior)));
      else setTimeout(() => run(firstBehavior), 0);
      setTimeout(() => run('auto'), 120);
      setTimeout(() => run('auto'), 360);
    }

    function activateFixedMockResultScreen() {
      const screen = fixedMockResultScreen();
      if (!screen) return false;
      setFixedMockResultActive(true);
      markFixedMockResultReady();
      setFixedMockResultHash();
      scrollToFixedMockResultScreen(screen);
      return true;
    }

    function scheduleFixedMockResultActivation() {
      [0, 80, 180, 360, 700].forEach((ms) => setTimeout(activateFixedMockResultScreen, ms));
    }

    function ensureFixedMockGoldEquivalentResultDom(screen) {
      if (!screen) return false;
      const navHtml = [
        '<a href="#mock-result-summary">結果</a>',
        '<a href="#mock-analysis-section">採点解析</a>',
        '<a href="#mock-review-section">解説一覧</a>',
        '<a href="#mock-result-question-list">問題別結果</a>'
      ].join('');
      const navs = Array.from(screen.querySelectorAll('.mock-result-jump-nav'));
      let nav = navs[0];
      navs.slice(1).forEach((extraNav) => extraNav.remove?.());
      if (!nav) {
        nav = document.createElement('nav');
        nav.className = 'mock-result-jump-nav';
      }
      nav.className = 'mock-result-jump-nav';
      nav.setAttribute('aria-label', '模試結果内メニュー');
      nav.dataset.resultNav = 'gold-current';
      if (nav.innerHTML.trim() !== navHtml) nav.innerHTML = navHtml;
      const title = screen.querySelector('h2');
      if (title?.insertAdjacentElement) title.insertAdjacentElement('afterend', nav);
      else if (nav.parentElement !== screen) screen.insertBefore(nav, screen.firstChild || null);
      const sectionSpecs = [
        { key: 'summary', id: 'mock-result-summary', label: '結果', selector: '#mock-result-summary, .mock-result-summary-panel' },
        { key: 'analysis', id: 'mock-analysis-section', label: '採点解析', selector: '#mock-analysis-section, [aria-label="採点解析"], .mock-analysis-panel' },
        { key: 'review', id: 'mock-review-section', label: '解説一覧', selector: '#mock-review-section, [aria-label="解説一覧"], .mock-review-panel' },
        { key: 'question-list', id: 'mock-result-question-list', label: '問題別結果', selector: '#mock-result-question-list, [aria-label="問題別結果"]' }
      ];
      let cursor = nav;
      const normalizedOrder = [];
      sectionSpecs.forEach((spec) => {
        const section = screen.querySelector(spec.selector);
        if (!section || section === nav) return;
        section.id = spec.id;
        section.setAttribute('aria-label', spec.label);
        section.dataset.resultSection = spec.key;
        if (cursor?.insertAdjacentElement) {
          cursor.insertAdjacentElement('afterend', section);
          cursor = section;
          normalizedOrder.push(spec.key);
        }
      });
      const expectedOrder = sectionSpecs.map((spec) => spec.key).join(' ');
      const actualOrder = normalizedOrder.join(' ');
      screen.dataset.resultDom = actualOrder === expectedOrder ? 'gold-equivalent-normalized' : 'gold-equivalent-partial';
      screen.dataset.resultOrder = actualOrder || 'none';
      nav.dataset.resultOrder = expectedOrder;
      if (els.result) {
        els.result.dataset.resultDom = screen.dataset.resultDom;
        els.result.dataset.resultOrder = screen.dataset.resultOrder;
      }
      return true;
    }

    function applyFixedMockUnifiedResultContract(screen) {
      if (!screen) return false;
      const contractText = fixedMockResultContract.join(' ');
      screen.classList.add('mock-result-screen--unified', 'mock-result-screen--gold-equivalent');
      screen.dataset.resultLayout = fixedMockResultLayout;
      screen.dataset.resultContract = contractText;
      screen.dataset.resultTemplate = fixedMockResultTemplate;
      screen.dataset.resultSections = contractText;
      screen.dataset.mockId = mock?.id || '';
      screen.dataset.certification = mock?.certification || '';
      if (els.result) {
        els.result.dataset.resultLayout = fixedMockResultLayout;
        els.result.dataset.resultContract = contractText;
        els.result.dataset.resultTemplate = fixedMockResultTemplate;
        els.result.dataset.resultSections = contractText;
        els.result.dataset.mockId = mock?.id || '';
        els.result.dataset.certification = mock?.certification || '';
      }
      ensureFixedMockGoldEquivalentResultDom(screen);
      return true;
    }

    function resultSectionState() {
      const screen = fixedMockResultScreen();
      applyFixedMockUnifiedResultContract(screen);
      return {
        screen,
        hasSummary: Boolean(screen?.querySelector?.('#mock-result-summary, .mock-score')),
        hasAnalysis: Boolean(screen?.querySelector?.('#mock-analysis-section[aria-label="採点解析"]')),
        hasReview: Boolean(screen?.querySelector?.('#mock-review-section[aria-label="解説一覧"]')),
        hasQuestionList: Boolean(screen?.querySelector?.('#mock-result-question-list[aria-label="問題別結果"]'))
      };
    }

    function markFixedMockResultReady() {
      const sectionState = resultSectionState();
      if (!sectionState.screen) return false;
      const hasGoldEquivalentOrder = sectionState.screen.dataset.resultDom === 'gold-equivalent-normalized';
      const ready = sectionState.hasSummary && sectionState.hasAnalysis && sectionState.hasReview && sectionState.hasQuestionList && hasGoldEquivalentOrder;
      sectionState.screen.dataset.resultReady = ready ? 'true' : 'partial';
      sectionState.screen.dataset.hasSummary = String(sectionState.hasSummary);
      sectionState.screen.dataset.hasAnalysis = String(sectionState.hasAnalysis);
      sectionState.screen.dataset.hasReview = String(sectionState.hasReview);
      sectionState.screen.dataset.hasQuestionList = String(sectionState.hasQuestionList);
      sectionState.screen.dataset.hasGoldEquivalentOrder = String(hasGoldEquivalentOrder);
      sectionState.screen.dataset.resultJumpNav = state.resultJumpNavBound ? 'delegated' : 'pending';
      sectionState.screen.dataset.resultReviewNav = state.resultReviewNavBound ? 'delegated' : 'pending';
      sectionState.screen.dataset.resultHashSync = state.resultHashCurrentBound ? 'bound' : 'pending';
      if (els.result) {
        els.result.dataset.resultReady = ready ? 'true' : 'partial';
        els.result.dataset.hasSummary = String(sectionState.hasSummary);
        els.result.dataset.hasAnalysis = String(sectionState.hasAnalysis);
        els.result.dataset.hasReview = String(sectionState.hasReview);
        els.result.dataset.hasQuestionList = String(sectionState.hasQuestionList);
        els.result.dataset.hasGoldEquivalentOrder = String(hasGoldEquivalentOrder);
        els.result.dataset.resultJumpNav = state.resultJumpNavBound ? 'delegated' : 'pending';
        els.result.dataset.resultReviewNav = state.resultReviewNavBound ? 'delegated' : 'pending';
        els.result.dataset.resultHashSync = state.resultHashCurrentBound ? 'bound' : 'pending';
      }
      const missingSections = [
        sectionState.hasSummary ? '' : 'summary',
        sectionState.hasAnalysis ? '' : 'analysis',
        sectionState.hasReview ? '' : 'review',
        sectionState.hasQuestionList ? '' : 'question-list',
        hasGoldEquivalentOrder ? '' : 'gold-equivalent-order',
        state.resultJumpNavBound ? '' : 'result-jump-nav',
        state.resultReviewNavBound ? '' : 'result-review-nav',
        state.resultHashCurrentBound ? '' : 'result-hash-sync'
      ].filter(Boolean).join(' ');
      sectionState.screen.dataset.missingSections = missingSections;
      if (els.result) els.result.dataset.missingSections = missingSections;
      els.result?.classList?.toggle('is-complete-mock-result', ready);
      if (ready) {
        setResultJumpNavCurrent(fixedMockResultSectionHash());
      }
      return ready;
    }

    function modeLabel() {
      return state.mode === 'practice' ? '演習モード' : '模試モード';
    }

    function questionNumberLabel(question, index) {
      const originalNumber = question?.original?.number ?? '';
      const n = String(originalNumber || index + 1);
      return `問${n}`;
    }

    function titlelessQuestionBody(question) {
      const original = question?.original || {};
      const parts = [original.prompt, original.command].filter((value) => String(value || '').trim());
      if (parts.length) return parts.join('\n');
      const text = String(question?.question || '');
      const lines = text.split(/\r?\n/);
      if (/^問\d+[.．、:\s]?/.test(lines[0] || '')) {
        const body = lines.slice(1).join('\n').trim();
        if (body) return body;
      }
      return text;
    }

    function questionHeadHtml(question, index, isPractice, selectNote) {
      return `<div class="quiz-question-head mock-titleless-question-head ${isPractice ? 'mock-practice-titleless-question-head' : ''}"><div class="mock-question-main"><h2>${escapeHtml(questionNumberLabel(question, index))}</h2><p class="quiz-question-prompt">${formatText(titlelessQuestionBody(question))}</p></div><span class="quiz-select-note">${escapeHtml(selectNote)}</span></div>`;
    }

    function reviewQuestionTextHtml(question, index, isPractice) {
      if (isPractice) return `<p>${formatText(question.question)}</p>`;
      return `<p><strong>${escapeHtml(questionNumberLabel(question, index))}</strong></p><p>${formatText(titlelessQuestionBody(question))}</p>`;
    }

    function setModeUi() {
      document.body.classList.toggle('mock-practice-mode', state.mode === 'practice');
      document.body.classList.toggle('mock-exam-mode', state.mode !== 'practice');
      if (els.finish) els.finish.textContent = state.mode === 'practice' ? '結果を見る' : '終了して採点';
    }

    function setExamControls(enabled) {
      if (els.prev) els.prev.disabled = !enabled;
      if (els.next) els.next.disabled = !enabled;
      if (els.finish) els.finish.disabled = !enabled;
      if (els.restart) els.restart.disabled = !enabled;
      if (els.palette) els.palette.hidden = !enabled;
      setModeUi();
      updateMockChrome();
    }

    function renderHeader() {
      if (els.title) els.title.textContent = mock?.title || '模試';
      if (els.description) els.description.textContent = mock?.description || '開始ボタンを押すと、タイマーが動きます。';
    }

    function renderTimer() {
      const limitSec = (mock?.timeLimitMinutes || 20) * 60;
      if (!state.started || !state.startedAt) {
        if (els.timer) els.timer.textContent = `${String(Math.floor(limitSec / 60)).padStart(2, '0')}:00`;
        return;
      }
      if (state.mode === 'practice') {
        if (els.timer) els.timer.textContent = state.finished ? '完了' : '演習中';
        return;
      }
      if (state.finished) return;
      const elapsedSec = Math.floor((Date.now() - state.startedAt) / 1000);
      const remaining = Math.max(0, limitSec - elapsedSec);
      if (els.timer) els.timer.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
      if (remaining === 0) finish(false);
    }

    function renderAnswerStats() {
      const answered = selectedQuestions.filter((q) => (state.answers[q.id] || []).length > 0).length;
      const unanswered = Math.max(0, selectedQuestions.length - answered);
      if (els.answered) els.answered.textContent = String(answered);
      if (els.unanswered) els.unanswered.textContent = String(unanswered);
    }

    function renderPalette() {
      renderAnswerStats();
      if (!els.palette) return;
      if (!state.started && !state.finished) {
        els.palette.hidden = true;
        return;
      }
      els.palette.hidden = false;
      els.palette.setAttribute('aria-label', state.finished ? '採点後の問題番号一覧' : '問題番号一覧');
      els.palette.innerHTML = selectedQuestions.map((q, idx) => {
        const answered = (state.answers[q.id] || []).length > 0;
        const current = idx === state.current;
        const detail = state.details?.[idx];
        const reviewed = state.mode === 'practice' && state.reviewed?.[q.id];
        const practiceSelected = normalizeSelection(q, state.answers[q.id] || []).sort();
        const practiceOk = reviewed ? arraysEqualAsSet(practiceSelected, answerKeys(q).sort()) : false;
        const resultClass = state.finished ? (detail?.ok ? 'correct' : 'wrong') : (reviewed ? (practiceOk ? 'correct' : 'wrong') : '');
        const resultLabel = state.finished ? (detail?.ok ? '正解' : '不正解') : (reviewed ? (practiceOk ? '正解' : '不正解') : (answered ? '回答済み' : '未回答'));
        return `<button type="button" class="${answered ? 'answered' : ''} ${current ? 'current' : ''} ${resultClass}" data-index="${idx}" data-palette-current="${current ? 'true' : 'false'}" ${current ? 'aria-current="true"' : ''} aria-label="問${idx + 1} ${resultLabel}">${idx + 1}</button>`;
      }).join('');
      els.palette.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
        if (!state.started && !state.finished) return;
        state.current = Number(button.dataset.index);
        if (state.finished) renderFinishedQuestion(state.current, true);
        else { render(); scrollToElement(els.card); }
      }));
    }

    function renderStartPanel() {
      const total = selectedQuestions.length;
      const minutes = mock?.timeLimitMinutes || 20;
      state.mode = 'exam';
      if (els.number) els.number.textContent = `0 / ${total}`;
      if (els.progress) els.progress.style.width = '0%';
      renderTimer();
      renderAnswerStats();
      setExamControls(false);
      els.card.hidden = false;
      els.card.innerHTML = `
        <div class="mock-start-panel">
          <p class="eyebrow">Start</p>
          <h2>${escapeHtml(mock?.title || '模試')}</h2>
          <div class="mock-start-grid">
            <article><strong>${total}</strong><span>問題数</span></article>
            <article><strong>${minutes}分</strong><span>制限時間</span></article>
            <article><strong>${escapeHtml(mock?.certification || 'Practice')}</strong><span>対象</span></article>
          </div>
          <div class="mock-mode-select" aria-label="開始モード">
            <button class="mock-mode-card primary-mode" id="fixed-mock-start" type="button">
              <strong>模試モード</strong>
              <span>制限時間つきで通し演習します。採点まで正解と解説を表示しません。</span>
            </button>
            <button class="mock-mode-card" id="fixed-mock-start-practice" type="button">
              <strong>演習モード</strong>
              <span>同じ模試問題を1問ずつ採点し、解説を読みながら進めます。</span>
            </button>
          </div>
        </div>`;
      $('#fixed-mock-start')?.addEventListener('click', () => startExam('exam'));
      $('#fixed-mock-start-practice')?.addEventListener('click', () => startExam('practice'));
      updateMockChrome();
    }

    function startExam(mode = 'exam') {
      if (!selectedQuestions.length) return;
      setFixedMockResultActive(false);
      clearFixedMockResultHash();
      state.mode = mode === 'practice' ? 'practice' : 'exam';
      state.started = true;
      state.startedAt = Date.now();
      state.finished = false;
      state.current = 0;
      state.answers = {};
      state.reviewed = {};
      state.practiceMessages = {};
      resetFixedMockResultArea(true);
      setExamControls(true);
      if (state.timerId) clearInterval(state.timerId);
      state.timerId = state.mode === 'practice' ? null : setInterval(renderTimer, 1000);
      render();
      renderTimer();
      renderAnswerStats();
    }

    function practiceFeedbackHtml(q, selected) {
      const normalizedSelected = normalizeSelection(q, selected || []).sort();
      const answer = answerKeys(q).sort();
      const ok = arraysEqualAsSet(normalizedSelected, answer);
      return `
        <div class="quiz-result ${ok ? 'correct' : 'wrong'} mock-practice-feedback" aria-label="この問題の採点結果">
          <h3>${ok ? '正解' : '不正解'}</h3>
          <p><strong>あなたの回答:</strong> ${normalizedSelected.length ? normalizedSelected.map(escapeHtml).join(', ') : '未回答'}</p>
          <p><strong>正解:</strong> ${answer.map(escapeHtml).join(', ')}</p>
          <section class="quiz-explanation-section" aria-label="解説">
            <h4>解説</h4>
            ${explanationHtml(q.explanation)}
            ${explanationVisualHtml(q)}
          </section>
          <section class="quiz-explanation-section" aria-label="選択肢別解説">
            <h4>選択肢別解説</h4>
            <div class="choice-explanation-list">${choiceDetailHtml(q, normalizedSelected, answer)}</div>
          </section>
        </div>`;
    }

    function render() {
      if (!selectedQuestions.length) {
        els.card.innerHTML = '<div class="quiz-empty"><h2>模試の問題がありません</h2><p>模試データに問題IDが登録されていません。</p></div>';
        updateMockChrome();
        return;
      }
      if (!state.started) {
        renderStartPanel();
        updateMockChrome();
        return;
      }
      setModeUi();
      const q = selectedQuestions[state.current];
      const selected = new Set(normalizeSelection(q, state.answers[q.id] || []));
      state.answers[q.id] = [...selected];
      const total = selectedQuestions.length;
      if (els.number) els.number.textContent = `${state.current + 1} / ${total}`;
      if (els.progress) els.progress.style.width = `${((state.current + 1) / total) * 100}%`;
      const publicTagText = publicTags(q.tags || []).join(', ');
      const metaItems = [modeLabel(), mock?.certification || 'Practice', q.unit, q.difficulty, publicTagText].filter(Boolean);
      const isPractice = state.mode === 'practice';
      const reviewed = Boolean(isPractice && state.reviewed?.[q.id]);
      const practiceMessage = state.practiceMessages?.[q.id] || '';
      els.card.innerHTML = `
        <div class="quiz-meta">${metaItems.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        ${questionHeadHtml(q, state.current, isPractice, isMultiQuestion(q) ? `${selectCount(q)}つ選択` : '1つ選択')}
        ${renderVisualHtml(q)}
        ${q.code ? codeBlockHtml(q.code) : ''}
        <div class="quiz-choices">${renderChoices(q, selected, reviewed)}</div>
        ${isPractice && practiceMessage ? `<div class="mock-practice-message-line"><span class="mock-practice-message">${escapeHtml(practiceMessage)}</span></div>` : ''}
        ${reviewed ? practiceFeedbackHtml(q, [...selected]) : ''}
      `;
      els.card.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach((input) => input.addEventListener('change', () => {
        if (input.type === 'radio') {
          enforceSingleChoiceDom(els.card, input);
          state.answers[q.id] = normalizeSelection(q, input.checked ? [input.value] : []);
        } else {
          const set = new Set(state.answers[q.id] || []);
          if (input.checked) set.add(input.value);
          else set.delete(input.value);
          state.answers[q.id] = normalizeSelection(q, [...set]);
        }
        if (state.practiceMessages) delete state.practiceMessages[q.id];
        renderPalette();
      }));
      renderPalette();
      updateMockChrome();
    }

    function move(delta) {
      if (!state.started || state.finished || !selectedQuestions.length) return;
      state.current = (state.current + delta + selectedQuestions.length) % selectedQuestions.length;
      render();
      scrollToElement(els.card);
    }

    function renderFinishedQuestion(index, scrollIntoView) {
      const detail = state.details?.[index];
      const q = detail?.q || selectedQuestions[index];
      if (!q || !els.card) return;
      const selected = detail?.selected || normalizeSelection(q, state.answers[q.id] || []);
      const answer = detail?.answer || answerKeys(q).sort();
      const ok = detail ? detail.ok : arraysEqualAsSet(selected, answer);
      state.current = index;
      const metaItems = [mock?.certification || 'Practice', q.unit, q.difficulty, publicTags(q.tags || []).join(', ')].filter(Boolean);
      els.card.hidden = false;
      els.card.innerHTML = `
        <div class="quiz-meta">${metaItems.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        ${questionHeadHtml(q, index, state.mode === 'practice', isMultiQuestion(q) ? `${selectCount(q)}つ選択` : '1つ選択')}
        ${renderVisualHtml(q)}
        ${q.code ? codeBlockHtml(q.code) : ''}
        <div class="quiz-result ${ok ? 'correct' : 'wrong'} mock-question-review-result">
          <h3>${ok ? '正解' : '不正解'}</h3>
          <p><strong>あなたの回答:</strong> ${selected.length ? selected.map(escapeHtml).join(', ') : '未回答'}</p>
          <p><strong>正解:</strong> ${answer.map(escapeHtml).join(', ')}</p>
          <section class="quiz-explanation-section" aria-label="解説">
            <h4>解説</h4>
            ${explanationHtml(q.explanation)}
            ${explanationVisualHtml(q)}
          </section>
          <section class="quiz-explanation-section" aria-label="選択肢別解説">
            <h4>選択肢別解説</h4>
            <div class="choice-explanation-list">${choiceDetailHtml(q, selected, answer)}</div>
          </section>
        </div>`;
      renderPalette();
      updateMockChrome();
      if (scrollIntoView) scrollToElement(els.card);
    }

    function finish(confirmBeforeFinish = true) {
      if (!state.started || state.finished) return;
      const unanswered = selectedQuestions.filter((q) => !(state.answers[q.id] || []).length).length;
      if (confirmBeforeFinish && unanswered > 0 && !confirm(`未回答が${unanswered}問あります。終了しますか？`)) return;
      state.finished = true;
      state.resultAutoScrollLocked = false;
      if (state.timerId) clearInterval(state.timerId);
      renderTimer();
      let correct = 0;
      const wrongUnits = Object.create(null);
      const details = selectedQuestions.map((q, idx) => {
        const selected = normalizeSelection(q, state.answers[q.id] || []).sort();
        state.answers[q.id] = selected;
        const answer = answerKeys(q).sort();
        const ok = arraysEqualAsSet(selected, answer);
        if (ok) correct += 1;
        else {
          const unitKey = String(q.unit || '未分類');
          wrongUnits[unitKey] = (Number(wrongUnits[unitKey]) || 0) + 1;
        }
        storage.updateQuestionResult?.(q, ok);
        return { q, idx, selected, answer, ok };
      });
      state.details = details;
      const total = selectedQuestions.length;
      const wrong = total - correct;
      const rate = total ? Math.round((correct / total) * 100) : 0;
      const elapsedSec = Math.floor((Date.now() - state.startedAt) / 1000);
      const result = { id: `${mock?.id || 'mock'}-${Date.now()}`, mockId: mock?.id, title: mock?.title, certification: mock?.certification, mode: state.mode, total, correct, wrong, rate, elapsedSec, wrongUnits, finishedAt: new Date().toISOString() };
      storage.saveMockResult(result);
      setExamControls(false);
      if (els.restart) els.restart.disabled = false;
      els.card.hidden = true;
      if (els.palette) els.palette.hidden = true;
      const mockPracticeHref = options.practiceHref || '../quiz.html';
      const mockPracticeMajor = options.practiceMajor || '';
      const mockWrongUnitBaseHref = options.wrongUnitHref || mockPracticeHref;
      const mockDueHref = options.dueHref || hrefWithParams(mockPracticeHref, { mode: 'due' });
      const mockWrongHref = options.wrongHref || hrefWithParams(mockPracticeHref, { mode: 'wrong' });
      const mockReviewHref = options.reviewHref || '../../review/dashboard.html';
      const mockWrongUnitHref = (unit) => {
        const params = new URLSearchParams();
        if (mockPracticeMajor) params.set('major', mockPracticeMajor);
        params.set('unit', unit);
        params.set('mode', 'wrong-units');
        const separator = String(mockWrongUnitBaseHref).includes('?') ? '&' : '?';
        return `${mockWrongUnitBaseHref}${separator}${params.toString()}`;
      };
      const wrongUnitEntries = Object.entries(wrongUnits)
        .map(([unit, count]) => [unit, Number(count)])
        .filter(([, count]) => Number.isFinite(count) && count > 0)
        .sort((a, b) => b[1] - a[1]);
      const wrongUnitHtml = wrongUnitEntries.length
        ? wrongUnitEntries.map(([unit,count]) => `<a class="weak-unit-chip" href="${escapeHtml(mockWrongUnitHref(unit))}">${escapeHtml(unit)}: ${count}問</a>`).join('')
        : '<p>不正解単元はありません。</p>';
      const wrongUnitLead = wrongUnitEntries.length
        ? '<p class="section-lead">不正解単元のチップを押すと、その単元を不正解単元モードで解き直せます。</p>'
        : '<p class="section-lead">全問正解の場合は、不正解単元リンクは表示されません。復習対象や見直し登録を使って追加確認できます。</p>';
      const resultModeLabel = modeLabel();
      const percent = (num, den) => den ? Math.round((num / den) * 100) : 0;
      const passRateMatch = String(mock?.passLine || '').match(/\d+/);
      const passRate = passRateMatch ? Number(passRateMatch[0]) : 60;
      const unansweredDetails = details.filter(({ selected }) => !selected.length);
      const answeredCount = Math.max(0, total - unansweredDetails.length);
      const avgSec = answeredCount ? Math.round(elapsedSec / answeredCount) : 0;
      const requiredCorrect = total ? Math.ceil((passRate / 100) * total) : 0;
      const scoreGap = correct - requiredCorrect;
      const scoreGapText = total
        ? (scoreGap > 0
          ? `目安より${scoreGap}問多く正解`
          : scoreGap === 0
            ? '目安ちょうど'
            : `あと${Math.abs(scoreGap)}問で目安`)
        : '未算出';
      const rateMessage = rate >= passRate + 10
        ? '目安ラインを安定して上回っています。間違えた問題だけを確認し、解説の根拠を再現できるか見直してください。'
        : rate >= passRate
          ? '目安ラインには届いています。取りこぼした単元を優先して確認すると安定しやすくなります。'
          : rate >= passRate - 10
            ? '目安ラインまであと少しです。不正解単元と未回答を先に減らしてください。'
            : '基礎論点の取りこぼしが多い状態です。不正解が多い単元から短く解き直してください。';
      function buildStats(keyGetter) {
        const map = Object.create(null);
        details.forEach((detail) => {
          const keys = keyGetter(detail).filter(Boolean);
          const values = keys.length ? keys : ['未分類'];
          values.forEach((key) => {
            map[key] ||= { key, total: 0, correct: 0, wrong: 0, unanswered: 0, indexes: [], wrongIndexes: [], unansweredIndexes: [] };
            map[key].total += 1;
            map[key].indexes.push(detail.idx + 1);
            if (detail.ok) map[key].correct += 1;
            else {
              map[key].wrong += 1;
              map[key].wrongIndexes.push(detail.idx + 1);
            }
            if (!detail.selected.length) {
              map[key].unanswered += 1;
              map[key].unansweredIndexes.push(detail.idx + 1);
            }
          });
        });
        return Object.values(map).sort((a, b) => (b.wrong - a.wrong) || (percent(a.correct, a.total) - percent(b.correct, b.total)) || String(a.key).localeCompare(String(b.key), 'ja'));
      }
      const unitStats = buildStats(({ q }) => [q.unit || '未分類']);
      const tagStats = buildStats(({ q }) => publicTags(q.tags || []).slice(0, 4)).filter((item) => item.key !== '未分類');
      const weakStats = unitStats.filter((item) => item.wrong > 0).slice(0, 4);
      const firstWeak = weakStats[0];
      const firstAction = firstWeak ? `${firstWeak.key}を${firstWeak.wrong}問復習` : '解説一覧で根拠を確認';
      const reviewButtonsHtml = (indexes, emptyText = '確認済み') => {
        const uniqueIndexes = Array.from(new Set(indexes || [])).filter((idx) => Number.isFinite(Number(idx))).map(Number).sort((a, b) => a - b).slice(0, 8);
        if (!uniqueIndexes.length) return `<span class="mock-analysis-muted">${escapeHtml(emptyText)}</span>`;
        return `<span class="mock-analysis-inline-buttons">${uniqueIndexes.map((idx) => `<button type="button" class="text-button mock-analysis-inline-review" data-analysis-review-index="${idx - 1}">問${idx}</button>`).join('')}</span>`;
      };
      const unitRowsHtml = unitStats.length
        ? unitStats.map((item) => `<tr><th scope="row">${escapeHtml(item.key)}</th><td>${item.total}</td><td>${item.correct}</td><td>${item.wrong}</td><td>${percent(item.correct, item.total)}%</td><td>${item.wrong > 0 ? `<div class="mock-analysis-review-actions"><a href="${escapeHtml(mockWrongUnitHref(item.key))}">解き直す</a>${reviewButtonsHtml(item.wrongIndexes, '不正解なし')}</div>` : '<span class="mock-analysis-muted">維持</span>'}</td></tr>`).join('')
        : '<tr><td colspan="6">解析対象の単元がありません。</td></tr>';
      const tagRowsHtml = tagStats.length
        ? tagStats.slice(0, 8).map((item) => `<tr><th scope="row">${escapeHtml(item.key)}</th><td>${item.total}</td><td>${item.wrong}</td><td>${percent(item.correct, item.total)}%</td><td>${reviewButtonsHtml(item.indexes, '該当なし')}</td></tr>`).join('')
        : '<tr><td colspan="5">公開用のタグ別解析はありません。</td></tr>';
      const unansweredText = unansweredDetails.length
        ? unansweredDetails.map(({ idx }) => `問${idx + 1}`).join('、')
        : 'なし';
      const weakCardsHtml = weakStats.length
        ? weakStats.map((item) => `<a class="mock-analysis-action-card" href="${escapeHtml(mockWrongUnitHref(item.key))}"><strong>${escapeHtml(item.key)}</strong><span>不正解 ${item.wrong} / ${item.total}問。正答率 ${percent(item.correct, item.total)}%。</span></a>`).join('')
        : `<a class="mock-analysis-action-card" href="${escapeHtml(mockDueHref)}"><strong>復習予定を確認</strong><span>全問正解の場合も、時間を置いて同じ形式で解けるか確認します。</span></a>`;
      const priorityDetails = details.filter((detail) => !detail.ok || !detail.selected.length).slice(0, 8);
      const priorityRowsHtml = priorityDetails.length
        ? priorityDetails.map((detail) => {
          const tags = publicTags(detail.q.tags || []).slice(0, 2).join('、') || 'タグなし';
          const reason = !detail.selected.length ? '未回答' : '不正解';
          return `<tr><th scope="row">問${detail.idx + 1}</th><td>${escapeHtml(reason)}</td><td>${escapeHtml(detail.q.unit || '未分類')}</td><td>${escapeHtml(tags)}</td><td><button type="button" class="text-button mock-analysis-review-button" data-analysis-review-index="${detail.idx}">解説を開く</button></td></tr>`;
        }).join('')
        : '<tr><td colspan="5">優先確認が必要な問題はありません。時間を置いて同じ模試を再確認してください。</td></tr>';
      const analysisHtml = `
        <section class="mock-result-panel mock-analysis-panel" id="mock-analysis-section" aria-label="採点解析">
          <h3>採点解析</h3>
          <p class="section-lead">正答率、未回答、単元別の不正解数から、次に復習する範囲を整理します。表内の問題番号を押すと、続く解説一覧で該当問題を開きます。</p>
          <div class="mock-analysis-summary">
            <article><span>評価</span><strong>${escapeHtml(rateMessage)}</strong></article>
            <article><span>目安ライン</span><strong>${passRate}% / 今回 ${rate}%</strong></article>
            <article><span>目安まで</span><strong>${escapeHtml(scoreGapText)}</strong><small>必要正解数 ${requiredCorrect} / ${total}問</small></article>
            <article><span>未回答</span><strong>${unansweredDetails.length}問</strong><small>${escapeHtml(unansweredText)}</small></article>
            <article><span>1問平均</span><strong>${avgSec ? `${avgSec}秒` : '未算出'}</strong></article>
          </div>
          <div class="mock-analysis-next">
            <h4>次に優先する復習</h4>
            <p>${escapeHtml(firstAction)}を起点に、解説一覧で誤答理由を確認してください。</p>
            <div class="mock-analysis-actions">${weakCardsHtml}</div>
          </div>
          <div class="table-scroll mock-analysis-table-wrap">
            <table class="study-table mock-analysis-table"><thead><tr><th scope="col">単元</th><th scope="col">出題</th><th scope="col">正解</th><th scope="col">不正解</th><th scope="col">正答率</th><th scope="col">復習</th></tr></thead><tbody>${unitRowsHtml}</tbody></table>
          </div>
          <section class="mock-analysis-tag-section">
            <h4>タグ別</h4>
            <div class="table-scroll"><table class="study-table mock-analysis-table"><thead><tr><th scope="col">タグ</th><th scope="col">出題</th><th scope="col">不正解</th><th scope="col">正答率</th><th scope="col">該当問題</th></tr></thead><tbody>${tagRowsHtml}</tbody></table></div>
          </section>
          <section class="mock-analysis-priority" aria-label="優先確認問題">
            <h4>優先確認問題</h4>
            <p>未回答と不正解を先に開き、正答理由と誤答理由を確認します。</p>
            <div class="table-scroll"><table class="study-table mock-analysis-table"><thead><tr><th scope="col">問題</th><th scope="col">状態</th><th scope="col">単元</th><th scope="col">タグ</th><th scope="col">解説</th></tr></thead><tbody>${priorityRowsHtml}</tbody></table></div>
          </section>
        </section>`;
      const firstReviewIndex = (priorityDetails[0] || details.find((detail) => !detail.ok) || details[0])?.idx ?? 0;
      const resultPaletteHtml = `<div class="mock-result-palette" aria-label="採点後の問題番号一覧">${details.map(({ idx, ok }) => {
        const isCurrent = idx === firstReviewIndex;
        const classes = [ok ? 'correct' : 'wrong', isCurrent ? 'current' : ''].filter(Boolean).join(' ');
        return `<button type="button" class="${classes}" data-result-index="${idx}"${isCurrent ? ' aria-current="true"' : ''} aria-label="問${idx + 1} ${ok ? '正解' : '不正解'}">${idx + 1}</button>`;
      }).join('')}</div>`;
      const resultNavHtml = `
        <nav class="mock-result-jump-nav" aria-label="模試結果内メニュー">
          <a href="#mock-result-summary">結果</a>
          <a href="#mock-analysis-section">採点解析</a>
          <a href="#mock-review-section">解説一覧</a>
          <a href="#mock-result-question-list">問題別結果</a>
        </nav>`;
      const detailHtml = details.map(({ q, idx, selected, answer, ok }) => `
        <details class="mock-review-item${idx === firstReviewIndex ? ' current' : ''}" id="mock-review-${idx}" data-result-review-index="${idx}" data-result-review-default="${idx === firstReviewIndex ? 'true' : 'false'}" ${idx === firstReviewIndex ? 'data-result-review-current="true" aria-current="true" open' : ''}>
          <summary>問${idx + 1}: ${ok ? '正解' : '不正解'} / ${escapeHtml(q.unit)}${idx === firstReviewIndex ? '（最初に確認）' : ''}</summary>
          ${reviewQuestionTextHtml(q, idx, state.mode === 'practice')}
          ${renderVisualHtml(q)}
        ${q.code ? codeBlockHtml(q.code) : ''}
          <p><strong>あなたの回答:</strong> ${selected.length ? selected.map(escapeHtml).join(', ') : '未回答'}</p>
          <p><strong>正解:</strong> ${answer.map(escapeHtml).join(', ')}</p>
          <section class="quiz-explanation-section" aria-label="解説">
            <h4>解説</h4>
            ${explanationHtml(q.explanation)}
            ${explanationVisualHtml(q)}
          </section>
          <section class="quiz-explanation-section" aria-label="選択肢別解説">
            <h4>選択肢別解説</h4>
            <div class="choice-explanation-list">${choiceDetailHtml(q, selected, answer)}</div>
          </section>
        </details>`).join('');
      if (els.result) els.result.innerHTML = `
        <section class="quiz-result ${rate >= passRate ? 'correct' : 'wrong'} mock-result-screen mock-result-screen--unified mock-result-screen--gold-equivalent" id="mock-result-screen" aria-label="模試結果" data-result-layout="${escapeHtml(fixedMockResultLayout)}" data-result-contract="${escapeHtml(fixedMockResultContract.join(' '))}" data-result-template="${escapeHtml(fixedMockResultTemplate)}" data-mock-id="${escapeHtml(mock?.id || '')}" data-certification="${escapeHtml(mock?.certification || '')}">
          <p class="eyebrow">模試結果 / ${escapeHtml(resultModeLabel)}</p>
          <h2>${escapeHtml(mock?.title || '模試')} の結果</h2>
          ${resultNavHtml}
          <section class="mock-result-panel mock-result-summary-panel" id="mock-result-summary" aria-label="結果">
            <h3>結果</h3>
            <div class="mock-score"><article><strong>${correct}</strong><span>正解</span></article><article><strong>${wrong}</strong><span>不正解</span></article><article><strong>${rate}%</strong><span>正答率</span></article><article><strong>${Math.floor(elapsedSec/60)}分${elapsedSec%60}秒</strong><span>所要時間</span></article></div>
          </section>
          ${analysisHtml}
          <section class="mock-result-panel mock-review-panel" id="mock-review-section" aria-label="解説一覧"><h3>解説一覧</h3><p class="section-lead">最初に確認する問題は展開済みです。各行を開くと、正答理由と選択肢別解説を確認できます。</p><div class="mock-review-list">${detailHtml}</div></section>
          <section class="mock-result-panel" id="mock-result-question-list" aria-label="問題別結果">
            <h3>問題別結果</h3>
            <p class="section-lead">番号を押すと、その問題へ移動して解説を表示します。</p>
            ${resultPaletteHtml}
          </section>
          <section class="mock-result-panel" aria-label="復習導線">
            <h3>復習導線</h3>
            ${wrongUnitLead}
            <div class="weak-unit-list mock-weak-unit-list">${wrongUnitHtml}</div>
            <div class="mock-result-actions"><a class="button secondary inline-button" href="${escapeHtml(mockWrongHref)}">前回不正解を解く</a><a class="button secondary inline-button" href="${escapeHtml(mockDueHref)}">復習予定を見る</a><a class="button ghost inline-button" href="${escapeHtml(mockReviewHref)}">ダッシュボードで確認</a></div>
          </section>
          <div class="mock-result-actions"><button class="button secondary inline-button" id="fixed-mock-result-restart" type="button">もう一度解く</button></div>
        </section>`;
      if (els.result) {
        els.result.hidden = false;
        els.result.setAttribute('aria-live', 'polite');
        setResultCurrentIndex(firstReviewIndex);
        els.result.dataset.resultReviewCurrentIndex = String(firstReviewIndex);
        const resultScreen = fixedMockResultScreen();
        if (resultScreen) resultScreen.dataset.resultReviewCurrentIndex = String(firstReviewIndex);
        setResultAnalysisReviewCurrent(firstReviewIndex);
        setFixedMockResultActive(true);
        applyFixedMockUnifiedResultContract(resultScreen);
        bindResultJumpNav();
        bindResultReviewNav();
        bindResultHashCurrentSync();
        els.result.querySelector('#fixed-mock-result-restart')?.addEventListener('click', restart);
        markFixedMockResultReady();
        scheduleResultCurrentIndexSync(firstReviewIndex);
        setFixedMockResultHash();
        focusResult();
        scheduleFixedMockResultActivation();
      }
    }

    function restart() {
      if (state.started && !state.finished && !confirm('模試を最初からやり直しますか？')) return;
      setFixedMockResultActive(false);
      clearFixedMockResultHash();
      state.current = 0;
      state.answers = {};
      state.started = false;
      state.startedAt = null;
      state.finished = false;
      state.mode = 'exam';
      state.reviewed = {};
      state.practiceMessages = {};
      state.details = null;
      state.resultAutoScrollLocked = false;
      if (state.timerId) clearInterval(state.timerId);
      resetFixedMockResultArea(true);
      renderHeader();
      renderStartPanel();
      updateMockChrome();
    }

    bindResultAutoScrollGuard();
    ensureMockChrome();

    els.prev?.addEventListener('click', () => move(-1));
    els.next?.addEventListener('click', () => move(1));
    els.finish?.addEventListener('click', () => finish(state.mode !== 'practice'));
    els.restart?.addEventListener('click', restart);
    renderHeader();
    renderStartPanel();
  }

  window.JavaQuizEngine = { mountPractice, mountFixedMock, escapeHtml, arraysEqualAsSet };
})();
