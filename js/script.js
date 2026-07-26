/* =========================================================================
   GATE CS MISSION CONTROL — APP LOGIC
   Vanilla JS. No frameworks. localStorage for all persistence.
   ========================================================================= */

/* ---------------------------- Storage helpers --------------------------- */
const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage full or blocked */ }
  },
  remove(key) { try { localStorage.removeItem(key); } catch (e) {} },
};

const todayKey = () => new Date().toISOString().slice(0, 10);
const isoWeekKey = (d = new Date()) => {
  const date = new Date(d.getTime());
  date.setHours(0,0,0,0);
  date.setDate(date.getDate() + 3 - ((date.getDay()+6)%7));
  const week1 = new Date(date.getFullYear(),0,4);
  const weekNo = 1 + Math.round(((date - week1) / 86400000 - 3 + ((week1.getDay()+6)%7)) / 7);
  return date.getFullYear() + "-W" + weekNo;
};
const monthKey = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0");
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ------------------------------ Theme ------------------------------------ */
function initTheme() {
  const saved = Store.get("theme", "dark");
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeToggleIcon(saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  Store.set("theme", next);
  updateThemeToggleIcon(next);
}
function updateThemeToggleIcon(mode) {
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = mode === "dark" ? "☾" : "☀";
}

/* ------------------------------ Sidebar ----------------------------------- */
function buildSidebar() {
  const nav = document.getElementById("sidebarNav");
  nav.innerHTML = DATA.nav.map(group => `
    <div class="nav-group">
      <div class="nav-group-label">${escapeHtml(group.group)}</div>
      ${group.items.map(item => `
        <a href="#/${item.id}" class="nav-item" data-id="${item.id}">
          <span class="nav-icon">${item.icon || "•"}</span>
          <span class="nav-text">${escapeHtml(item.label)}</span>
        </a>`).join("")}
    </div>`).join("");
}

function setActiveNav(id) {
  document.querySelectorAll(".nav-item").forEach(a => {
    a.classList.toggle("active", a.dataset.id === id);
  });
}

/* ------------------------------ Router ------------------------------------ */
function currentRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  return hash || "intro";
}

function navigateTo(id) {
  location.hash = "/" + id;
}

window.addEventListener("hashchange", render);

/* ------------------------------ Render dispatch --------------------------- */
function render() {
  const id = currentRoute();
  setActiveNav(id);
  const view = document.getElementById("view");
  document.getElementById("mainScroll").scrollTop = 0;

  if (id === "resources") { view.innerHTML = renderResourcesHub(); }
  else if (DATA.pages[id]) { view.innerHTML = renderStaticPage(id); }
  else if (DATA.subjects[id]) { view.innerHTML = renderSubjectPage(id); wireSubjectPage(id); }
  else if (id === "study-strategy") { view.innerHTML = renderStudyStrategy(); }
  else if (id === "revision-strategy") { view.innerHTML = renderRevisionStrategy(); }
  else if (id === "pyq-strategy") { view.innerHTML = renderPyqStrategy(); }
  else if (id === "mock-strategy") { view.innerHTML = renderMockStrategy(); wireMockStrategy(); }
  else if (id === "faq") { view.innerHTML = renderFaq(); wireFaq(); }
  else if (id === "motivation") { view.innerHTML = renderMotivation(); }
  else if (id === "dashboard") { view.innerHTML = renderDashboard(); wireDashboard(); }
  else { view.innerHTML = `<div class="page"><h1>Not found</h1><p>Pick a section from the sidebar.</p></div>`; }

  closeSidebarOnMobile();
}

/* ------------------------------ Static pages -------------------------------- */
function renderStaticPage(id) {
  const p = DATA.pages[id];
  let extra = "";
  if (id === "score-vs-marks" || id === "rank-vs-marks") extra = renderMarksTable();
  return `
    <div class="page fade-in">
      <div class="page-head">
        <h1>${escapeHtml(p.title)}</h1>
        <button class="icon-btn bookmark-btn" data-bookmark="${id}" title="Bookmark this page">☆</button>
      </div>
      <div class="prose">${p.body}</div>
      ${extra}
    </div>`;
}

function renderMarksTable() {
  return `
    <h3>Marks Analysis (approximate, illustrative only)</h3>
    <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Marks</th><th>Approx. AIR</th><th>Approx. Score</th><th>Possible Colleges</th><th>Opportunities</th></tr></thead>
      <tbody>
        ${DATA.marksTable.map(r => `<tr><td>${r.marks}</td><td>${r.rank}</td><td>${r.score}</td><td>${r.colleges}</td><td>${r.opportunity}</td></tr>`).join("")}
      </tbody>
    </table>
    </div>
    <p class="fine-print">These figures vary every year with paper difficulty, normalization, and candidate pool size. Always confirm against the official GATE result statistics for the current year.</p>`;
}

function renderResourcesHub() {
  const labels = {
    general: "General / Multi-subject", maths: "Mathematics", programming: "Programming (C)",
    ds: "Data Structures", algo: "Algorithms", dbms: "DBMS", os: "Operating Systems",
    cn: "Computer Networks", coa: "Computer Organization", dl: "Digital Logic",
    toc: "Theory of Computation", compiler: "Compiler Design", aptitude: "General Aptitude",
  };
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Free Resources Hub</h1><button class="icon-btn bookmark-btn" data-bookmark="resources">☆</button></div>
    <p class="lead">${DATA.pages["resources"].body}</p>
    <div class="two-col-grid">
      ${Object.keys(DATA.resourceLinks).map(key => `
        <div class="card">
          <h3>${escapeHtml(labels[key] || key)}</h3>
          <ul class="link-list">${DATA.resourceLinks[key].map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a></li>`).join("")}</ul>
        </div>`).join("")}
    </div>
    <div class="callout warn">All resources listed are free at the time of writing. Availability and URLs can change over time — if a link is broken, search the resource name directly.</div>
  </div>`;
}

/* ------------------------------ Subject pages ------------------------------- */
function renderSubjectPage(id) {
  const s = DATA.subjects[id];
  const checklistState = Store.get("checklist:" + id, {});
  const doneCount = s.checklist.filter((_, i) => checklistState[i]).length;
  const pct = Math.round((doneCount / s.checklist.length) * 100);
  const confidence = Store.get("confidence:" + id, 50);
  const notes = Store.get("notes:" + id, "");
  const isBookmarked = (Store.get("bookmarks", [])).includes(id);

  return `
  <div class="page fade-in" data-subject="${id}">
    <div class="page-head">
      <h1>${escapeHtml(s.name)}</h1>
      <button class="icon-btn bookmark-btn" data-bookmark="${id}" title="Bookmark this subject">${isBookmarked ? "★" : "☆"}</button>
    </div>

    <div class="stat-row">
      <div class="stat-chip"><span class="stat-label">Weightage</span><span class="stat-value">${escapeHtml(s.weightage)}</span></div>
      <div class="stat-chip"><span class="stat-label">Difficulty</span><span class="stat-value">${escapeHtml(s.difficulty)}</span></div>
      <div class="stat-chip"><span class="stat-label">Est. Hours</span><span class="stat-value">${s.estimatedHours}h</span></div>
    </div>

    <div class="progress-block">
      <div class="progress-label"><span>Topic completion</span><span>${pct}% (${doneCount}/${s.checklist.length})</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>

    <div class="card">
      <h3>Introduction</h3><p>${s.intro}</p>
      <h3>Why it matters</h3><p>${s.importance}</p>
      <h3>Prerequisites</h3><p>${s.prerequisites}</p>
    </div>

    <div class="card">
      <h3>Complete Syllabus</h3>
      <ul class="bullet-list">${s.syllabus.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>Recommended Study Order</h3>
        <ol class="numbered-list">${s.studyOrder.map(x => `<li>${x}</li>`).join("")}</ol>
      </div>
      <div class="card">
        <h3>Common Mistakes</h3>
        <ul class="bullet-list warn-list">${s.commonMistakes.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>Formula Sheet</h3>
        <ul class="mono-list">${s.formulaSheet.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>Short Notes</h3>
        <ul class="bullet-list">${s.shortNotes.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="card">
      <h3>Memory Tricks</h3>
      <ul class="bullet-list">${s.memoryTricks.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="card">
      <h3>Previous Year Trend</h3>
      <p>${s.pyqTrend}</p>
      <h4>Important PYQ Themes</h4>
      <ul class="bullet-list">${s.importantPYQs.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="card">
      <h3>Free Resources</h3>
      <div class="resource-cols">
        <div><h4>Video Lectures</h4><ul class="link-list">${s.youtube.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a></li>`).join("")}</ul></div>
        <div><h4>Notes</h4><ul class="link-list">${s.notes.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a></li>`).join("")}</ul></div>
        <div><h4>Practice</h4><ul class="link-list">${s.practiceLinks.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)} ↗</a></li>`).join("")}</ul></div>
      </div>
      <h4>Reference Books</h4>
      <ul class="bullet-list">${s.books.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="card">
      <h3>Topic Checklist &amp; Mastery Tracker</h3>
      <ul class="checklist" id="checklist-${id}">
        ${s.checklist.map((t, i) => `
          <li>
            <label class="check-row">
              <input type="checkbox" data-idx="${i}" ${checklistState[i] ? "checked" : ""} class="chk-item">
              <span>${escapeHtml(t)}</span>
            </label>
          </li>`).join("")}
      </ul>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>Confidence Meter</h3>
        <p class="fine-print">How confident do you feel in this subject right now?</p>
        <input type="range" min="0" max="100" value="${confidence}" class="confidence-slider" id="confidence-${id}">
        <div class="confidence-readout" id="confidence-readout-${id}">${confidence}%</div>
      </div>
      <div class="card">
        <h3>Personal Notes</h3>
        <textarea class="notes-area" id="notes-${id}" rows="5" placeholder="Jot down your own memory hooks, doubts, or links here...">${escapeHtml(notes)}</textarea>
        <button class="btn-secondary" id="save-notes-${id}">Save Notes</button>
        <span class="save-indicator" id="save-indicator-${id}"></span>
      </div>
    </div>

    <div class="card">
      <h3>Revision Log</h3>
      <p class="fine-print">Log a revision pass every time you revisit this subject's short notes/formula sheet (Day 3 / Day 10 / Day 30 cycle).</p>
      <button class="btn-primary" id="log-revision-${id}">＋ Log a Revision Pass</button>
      <span class="revision-count" id="revision-count-${id}"></span>
    </div>
  </div>`;
}

function wireSubjectPage(id) {
  const s = DATA.subjects[id];

  document.querySelectorAll(`#checklist-${id} .chk-item`).forEach(cb => {
    cb.addEventListener("change", () => {
      const state = Store.get("checklist:" + id, {});
      state[cb.dataset.idx] = cb.checked;
      Store.set("checklist:" + id, state);
      Store.set("lastStudied:" + id, todayKey());
      updateSubjectProgressBar(id);
    });
  });

  const slider = document.getElementById(`confidence-${id}`);
  if (slider) {
    slider.addEventListener("input", () => {
      document.getElementById(`confidence-readout-${id}`).textContent = slider.value + "%";
      Store.set("confidence:" + id, Number(slider.value));
    });
  }

  const saveBtn = document.getElementById(`save-notes-${id}`);
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const val = document.getElementById(`notes-${id}`).value;
      Store.set("notes:" + id, val);
      const ind = document.getElementById(`save-indicator-${id}`);
      ind.textContent = "Saved ✓";
      setTimeout(() => ind.textContent = "", 1800);
    });
  }

  const revBtn = document.getElementById(`log-revision-${id}`);
  if (revBtn) {
    revBtn.addEventListener("click", () => {
      const count = Store.get("revisionCount:" + id, 0) + 1;
      Store.set("revisionCount:" + id, count);
      Store.set("lastRevised:" + id, todayKey());
      updateRevisionCount(id);
    });
    updateRevisionCount(id);
  }

  const bm = document.querySelector(`.bookmark-btn[data-bookmark="${id}"]`);
  if (bm) bm.addEventListener("click", () => toggleBookmark(id, bm));
}

function updateSubjectProgressBar(id) {
  const s = DATA.subjects[id];
  const state = Store.get("checklist:" + id, {});
  const doneCount = s.checklist.filter((_, i) => state[i]).length;
  const pct = Math.round((doneCount / s.checklist.length) * 100);
  const fill = document.querySelector(`[data-subject="${id}"] .progress-fill`);
  const label = document.querySelector(`[data-subject="${id}"] .progress-label span:last-child`);
  if (fill) fill.style.width = pct + "%";
  if (label) label.textContent = `${pct}% (${doneCount}/${s.checklist.length})`;
}

function updateRevisionCount(id) {
  const count = Store.get("revisionCount:" + id, 0);
  const el = document.getElementById(`revision-count-${id}`);
  if (el) el.textContent = `Revised ${count} time${count === 1 ? "" : "s"} so far.`;
}

/* --------------------------- Bookmarks ------------------------------------- */
function toggleBookmark(id, btnEl) {
  let list = Store.get("bookmarks", []);
  if (list.includes(id)) { list = list.filter(x => x !== id); if (btnEl) btnEl.textContent = "☆"; }
  else { list.push(id); if (btnEl) btnEl.textContent = "★"; }
  Store.set("bookmarks", list);
}

/* --------------------------- Strategy pages -------------------------------- */
function renderStudyStrategy() {
  const r = DATA.roadmap;
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Study Strategy</h1><button class="icon-btn bookmark-btn" data-bookmark="study-strategy">☆</button></div>
    <div class="card"><h3>Weekday Routine</h3><p>${r.weekly}</p></div>
    <div class="two-col">
      <div class="card"><h3>Suggested Daily Split (weekday)</h3><p>${r.daily}</p></div>
      <div class="card"><h3>Suggested Weekend Split</h3><p>${r.weekend}</p></div>
    </div>
    <div class="card">
      <h3>Month-by-Month Roadmap</h3>
      <div class="timeline">
        ${r.months.map((m, i) => `
          <div class="timeline-item">
            <div class="timeline-marker">${i+1}</div>
            <div class="timeline-body">
              <h4>${escapeHtml(m.m)} — ${escapeHtml(m.focus)}</h4>
              <p>${m.detail}</p>
            </div>
          </div>`).join("")}
      </div>
    </div>
    <div class="card">
      <h3>Exam Day Strategy</h3>
      <ol class="numbered-list">${r.examDay.map(x => `<li>${x}</li>`).join("")}</ol>
    </div>
  </div>`;
}

function renderRevisionStrategy() {
  const r = DATA.revisionStrategy;
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Revision Strategy</h1><button class="icon-btn bookmark-btn" data-bookmark="revision-strategy">☆</button></div>
    <div class="card"><p class="lead">${r.intro}</p></div>
    <div class="card"><h3>Spaced Revision Cycle</h3><ol class="numbered-list">${r.cycle.map(x=>`<li>${x}</li>`).join("")}</ol></div>
    <div class="card"><h3>Tips</h3><ul class="bullet-list">${r.tips.map(x=>`<li>${x}</li>`).join("")}</ul></div>
  </div>`;
}

function renderPyqStrategy() {
  const r = DATA.pyqStrategy;
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Previous Year Questions Strategy</h1><button class="icon-btn bookmark-btn" data-bookmark="pyq-strategy">☆</button></div>
    <div class="card"><p class="lead">${r.intro}</p></div>
    <div class="card"><h3>How to use PYQs</h3><ul class="bullet-list">${r.points.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="card"><h3>Question Distribution</h3><p>${r.distribution}</p></div>
  </div>`;
}

function renderMockStrategy() {
  const r = DATA.mockStrategy;
  const scores = Store.get("mockScores", []);
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Mock Test Strategy</h1><button class="icon-btn bookmark-btn" data-bookmark="mock-strategy">☆</button></div>
    <div class="card"><p class="lead">${r.intro}</p></div>
    <div class="two-col">
      <div class="card"><h3>When to Start</h3><p>${r.when}</p></div>
      <div class="card"><h3>How Many Mocks</h3><p>${r.count}</p></div>
    </div>
    <div class="card"><h3>How to Analyse Mistakes</h3><ul class="bullet-list">${r.analysis.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="two-col">
      <div class="card"><h3>Negative Marking Strategy</h3><p>${r.negativeMarking}</p></div>
      <div class="card"><h3>Time Allocation</h3><p>${r.timeAllocation}</p></div>
    </div>
    <div class="card">
      <h3>Log a Mock Score</h3>
      <p class="fine-print">Track every full-length mock here — this feeds your Progress Dashboard.</p>
      <div class="mock-form">
        <input type="date" id="mockDate" value="${todayKey()}">
        <input type="number" id="mockMarks" placeholder="Marks (out of 100)" min="0" max="100">
        <button class="btn-primary" id="addMock">＋ Add</button>
      </div>
      <table class="data-table" id="mockTable">
        <thead><tr><th>Date</th><th>Marks</th><th></th></tr></thead>
        <tbody id="mockTableBody">${renderMockRows(scores)}</tbody>
      </table>
    </div>
  </div>`;
}
function renderMockRows(scores) {
  if (!scores.length) return `<tr><td colspan="3" class="fine-print">No mocks logged yet.</td></tr>`;
  return scores.slice().reverse().map((m, i) => {
    const realIdx = scores.length - 1 - i;
    return `<tr><td>${m.date}</td><td>${m.marks}</td><td><button class="icon-btn del-mock" data-idx="${realIdx}">✕</button></td></tr>`;
  }).join("");
}
function wireMockStrategy() {
  const btn = document.getElementById("addMock");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const date = document.getElementById("mockDate").value || todayKey();
    const marks = Number(document.getElementById("mockMarks").value);
    if (isNaN(marks) || marks < 0 || marks > 100) { alert("Enter marks between 0 and 100."); return; }
    const scores = Store.get("mockScores", []);
    scores.push({ date, marks });
    Store.set("mockScores", scores);
    document.getElementById("mockTableBody").innerHTML = renderMockRows(scores);
    wireMockDeletes();
  });
  wireMockDeletes();
}
function wireMockDeletes() {
  document.querySelectorAll(".del-mock").forEach(b => {
    b.addEventListener("click", () => {
      const scores = Store.get("mockScores", []);
      scores.splice(Number(b.dataset.idx), 1);
      Store.set("mockScores", scores);
      document.getElementById("mockTableBody").innerHTML = renderMockRows(scores);
      wireMockDeletes();
    });
  });
}

/* --------------------------- FAQ -------------------------------------------- */
function renderFaq() {
  const cats = [...new Set(DATA.faq.map(f => f.cat))];
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Frequently Asked Questions</h1></div>
    <input type="text" id="faqSearch" class="faq-search" placeholder="Search ${DATA.faq.length}+ answers... (e.g. 'negative marking', 'burnout', 'python')">
    <div class="faq-filters">
      <button class="chip active" data-cat="all">All</button>
      ${cats.map(c => `<button class="chip" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}
    </div>
    <div class="faq-list" id="faqList">
      ${DATA.faq.map((f, i) => `
        <div class="faq-item" data-cat="${escapeHtml(f.cat)}">
          <button class="faq-q">
            <span class="faq-cat-tag">${escapeHtml(f.cat)}</span>
            <span>${escapeHtml(f.q)}</span>
            <span class="faq-caret">▾</span>
          </button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join("")}
    </div>
    <div id="faqEmpty" class="fine-print" style="display:none;">No matching questions. Try a different keyword.</div>
  </div>`;
}
function wireFaq() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });
  const search = document.getElementById("faqSearch");
  const chips = document.querySelectorAll(".chip");
  let activeCat = "all";
  function applyFilter() {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll(".faq-item").forEach(item => {
      const text = item.textContent.toLowerCase();
      const matchesCat = activeCat === "all" || item.dataset.cat === activeCat;
      const matchesTerm = !term || text.includes(term);
      const show = matchesCat && matchesTerm;
      item.style.display = show ? "" : "none";
      if (show) visible++;
    });
    document.getElementById("faqEmpty").style.display = visible ? "none" : "block";
  }
  search.addEventListener("input", applyFilter);
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeCat = chip.dataset.cat;
    applyFilter();
  }));
}

/* --------------------------- Motivation ------------------------------------- */
function renderMotivation() {
  const m = DATA.motivation;
  const dayIdx = Math.floor(Date.now() / 86400000) % m.quotes.length;
  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Motivation</h1><button class="icon-btn bookmark-btn" data-bookmark="motivation">☆</button></div>
    <div class="quote-card">"${m.quotes[dayIdx]}"</div>
    <div class="card"><p class="lead">${m.intro}</p></div>
    <div class="two-col">
      <div class="card"><h3>Preventing Burnout</h3><ul class="bullet-list">${m.burnout.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="card"><h3>Staying Consistent</h3><ul class="bullet-list">${m.consistency.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    </div>
    <div class="two-col">
      <div class="card"><h3>Recovering After Missed Days</h3><ul class="bullet-list">${m.recovery.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="card"><h3>Managing Office Stress</h3><ul class="bullet-list">${m.officeStress.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    </div>
  </div>`;
}

/* --------------------------- Resources hub in static page ------------------ */
document.addEventListener("DOMContentLoaded", () => { /* placeholder, real init below */ });

/* --------------------------- Dashboard -------------------------------------- */
function computeOverall() {
  const ids = Object.keys(DATA.subjects);
  let totalItems = 0, doneItems = 0;
  const perSubject = [];
  ids.forEach(id => {
    const s = DATA.subjects[id];
    const state = Store.get("checklist:" + id, {});
    const done = s.checklist.filter((_, i) => state[i]).length;
    totalItems += s.checklist.length;
    doneItems += done;
    perSubject.push({ id, name: s.name, pct: Math.round((done / s.checklist.length) * 100), confidence: Store.get("confidence:" + id, 50) });
  });
  return { overallPct: totalItems ? Math.round((doneItems/totalItems)*100) : 0, perSubject };
}

function computeStreak() {
  const log = Store.get("studyLog", []); // [{date, hours}]
  const dates = new Set(log.map(l => l.date));
  let streak = 0;
  let d = new Date();
  // if today not logged yet, start checking from yesterday for an ongoing streak
  if (!dates.has(todayKey())) d.setDate(d.getDate() - 1);
  while (dates.has(d.toISOString().slice(0,10))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function getExamDate() {
  let d = Store.get("examDate", null);
  if (d) return new Date(d);
  // default: next Feb 8th
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 1, 8);
  if (target < now) target = new Date(year + 1, 1, 8);
  return target;
}

function renderDashboard() {
  const { overallPct, perSubject } = computeOverall();
  const log = Store.get("studyLog", []);
  const totalHours = log.reduce((a,b) => a + Number(b.hours || 0), 0);
  const streak = computeStreak();
  const mocks = Store.get("mockScores", []);
  const avgMock = mocks.length ? Math.round(mocks.reduce((a,b)=>a+b.marks,0)/mocks.length) : null;
  const weak = perSubject.filter(s => s.confidence < 50).sort((a,b)=>a.confidence-b.confidence);
  const strong = perSubject.filter(s => s.confidence >= 75).sort((a,b)=>b.confidence-a.confidence);
  const pending = perSubject.filter(s => s.pct < 100).sort((a,b)=>a.pct-b.pct);
  const totalRevisions = Object.keys(DATA.subjects).reduce((sum, id) => sum + Store.get("revisionCount:" + id, 0), 0);
  const examDate = getExamDate();
  const daysLeft = Math.max(0, Math.ceil((examDate - new Date()) / 86400000));
  const bookmarks = Store.get("bookmarks", []);
  const badges = computeBadges({ streak, overallPct, mocks, totalRevisions });

  // smart features
  const subjIds = Object.keys(DATA.subjects);
  const dayIdx = Math.floor(Date.now() / 86400000);
  const randSubj = DATA.subjects[subjIds[dayIdx % subjIds.length]];
  const formulaOfDay = randSubj.formulaSheet[dayIdx % randSubj.formulaSheet.length];
  const pyqSubj = DATA.subjects[subjIds[(dayIdx+3) % subjIds.length]];
  const pyqOfDay = pyqSubj.importantPYQs[(dayIdx+3) % pyqSubj.importantPYQs.length];
  const quoteOfDay = DATA.motivation.quotes[dayIdx % DATA.motivation.quotes.length];
  const weeklyGoal = Store.get("weeklyGoal:" + isoWeekKey(), "");

  return `
  <div class="page fade-in">
    <div class="page-head"><h1>Progress Dashboard</h1></div>

    <div class="dash-hero">
      <div class="hud-panel">
        <div class="hud-label">Countdown to Exam</div>
        <div class="hud-number">${daysLeft}<span class="hud-unit">days</span></div>
        <div class="hud-sub">Target date: <input type="date" id="examDateInput" value="${examDate.toISOString().slice(0,10)}"></div>
      </div>
      <div class="hud-panel">
        <div class="hud-label">Overall Completion</div>
        <div class="hud-number">${overallPct}<span class="hud-unit">%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${overallPct}%"></div></div>
      </div>
      <div class="hud-panel">
        <div class="hud-label">Study Streak</div>
        <div class="hud-number">${streak}<span class="hud-unit">days</span></div>
        <div class="hud-sub">Log today's hours below to keep it alive</div>
      </div>
      <div class="hud-panel">
        <div class="hud-label">Hours Studied</div>
        <div class="hud-number">${totalHours}<span class="hud-unit">hrs</span></div>
        <div class="hud-sub">${log.length} sessions logged</div>
      </div>
    </div>

    <div class="card">
      <h3>Log Today's Study Hours</h3>
      <div class="mock-form">
        <input type="date" id="logDate" value="${todayKey()}">
        <input type="number" id="logHours" placeholder="Hours studied" min="0" max="16" step="0.5">
        <button class="btn-primary" id="addLog">＋ Log Hours</button>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>Subject Progress</h3>
        ${perSubject.map(s => `
          <div class="progress-block small">
            <div class="progress-label"><span>${escapeHtml(s.name)}</span><span>${s.pct}%</span></div>
            <div class="progress-bar"><div class="progress-fill" style="width:${s.pct}%"></div></div>
          </div>`).join("")}
      </div>
      <div class="card">
        <h3>Mock Test Scores</h3>
        ${mocks.length ? `<p>Average: <strong>${avgMock}/100</strong> across ${mocks.length} mock(s)</p>
        <div class="bar-chart">${mocks.slice(-12).map(m => `<div class="bar" style="height:${m.marks}%" title="${m.date}: ${m.marks}"></div>`).join("")}</div>`
        : `<p class="fine-print">No mocks logged yet — head to Mock Tests to add your first one.</p>`}
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>Weak Topics <span class="fine-print">(confidence &lt; 50%)</span></h3>
        ${weak.length ? `<ul class="bullet-list">${weak.map(s=>`<li>${escapeHtml(s.name)} — ${s.confidence}%</li>`).join("")}</ul>` : `<p class="fine-print">None flagged yet — set confidence sliders on subject pages.</p>`}
      </div>
      <div class="card">
        <h3>Strong Topics <span class="fine-print">(confidence ≥ 75%)</span></h3>
        ${strong.length ? `<ul class="bullet-list">${strong.map(s=>`<li>${escapeHtml(s.name)} — ${s.confidence}%</li>`).join("")}</ul>` : `<p class="fine-print">None yet — keep building!</p>`}
      </div>
    </div>

    <div class="card">
      <h3>Pending Chapters</h3>
      ${pending.length ? `<ul class="bullet-list">${pending.map(s=>`<li>${escapeHtml(s.name)} — ${s.pct}% complete</li>`).join("")}</ul>` : `<p class="fine-print">Everything checked off — amazing work.</p>`}
    </div>

    <div class="card">
      <h3>Achievements</h3>
      <div class="badge-row">${badges.length ? badges.map(b => `<span class="badge">${b}</span>`).join("") : `<span class="fine-print">Complete topics, log streaks and mocks to earn badges.</span>`}</div>
    </div>

    <div class="two-col">
      <div class="card">
        <h3>☀ Daily Quote</h3><p class="quote-inline">"${quoteOfDay}"</p>
      </div>
      <div class="card">
        <h3>∑ Formula of the Day <span class="fine-print">(${escapeHtml(randSubj.name)})</span></h3><p class="mono-inline">${formulaOfDay}</p>
      </div>
    </div>
    <div class="card">
      <h3>▤ Random PYQ Reminder <span class="fine-print">(${escapeHtml(pyqSubj.name)})</span></h3><p>${pyqOfDay}</p>
    </div>

    <div class="card">
      <h3>Weekly Goal</h3>
      <p class="fine-print">Set one concrete goal for this week (e.g. "Finish OS scheduling numericals").</p>
      <div class="mock-form">
        <input type="text" id="weeklyGoalInput" placeholder="This week's goal..." value="${escapeHtml(weeklyGoal)}" style="flex:1;">
        <button class="btn-primary" id="saveWeeklyGoal">Save</button>
      </div>
    </div>

    <div class="card">
      <h3>Daily Checklist — ${todayKey()}</h3>
      ${renderGenericChecklist("daily:" + todayKey(), ["Warm-up: revise yesterday's topic (15 min)", "New content / Pomodoro block", "PYQ practice (30 min)", "Log study hours above", "Update subject checklist"])}
    </div>
    <div class="card">
      <h3>Weekly Checklist — ${isoWeekKey()}</h3>
      ${renderGenericChecklist("weekly:" + isoWeekKey(), ["Complete at least 1 full topic per weekday", "One deep-work weekend block on hardest subject", "Attempt topic-wise PYQs for anything finished", "Revise one older subject's short notes", "Log at least one mock or sectional test"])}
    </div>
    <div class="card">
      <h3>Monthly Roadmap Check-in — ${monthKey()}</h3>
      ${renderGenericChecklist("monthly:" + monthKey(), DATA.roadmap.months.map(m => m.m + ": " + m.focus))}
    </div>

    <div class="card">
      <h3>Bookmarks</h3>
      ${bookmarks.length ? `<ul class="bullet-list">${bookmarks.map(id => `<li><a href="#/${id}">${escapeHtml((DATA.subjects[id]||DATA.pages[id]||{name:id,title:id}).name || (DATA.subjects[id]||DATA.pages[id]||{}).title || id)}</a></li>`).join("")}</ul>` : `<p class="fine-print">No bookmarks yet — use the ☆ button on any page.</p>`}
    </div>

    <div class="card">
      <h3>Study Timer (Pomodoro)</h3>
      <div class="timer-widget">
        <div class="timer-display" id="timerDisplay">25:00</div>
        <div class="timer-controls">
          <button class="btn-secondary" id="timerStart">Start</button>
          <button class="btn-secondary" id="timerPause">Pause</button>
          <button class="btn-secondary" id="timerReset">Reset</button>
        </div>
        <div class="fine-print">25 min focus / 5 min break, standard Pomodoro.</div>
      </div>
    </div>

    <div class="card">
      <h3>Data &amp; Printing</h3>
      <div class="btn-row">
        <button class="btn-secondary" id="exportProgress">⤓ Export Progress (JSON)</button>
        <button class="btn-secondary" id="printPage">🖶 Print This Page</button>
        <button class="btn-secondary danger" id="resetProgress">⟲ Reset All Progress</button>
      </div>
      <p class="fine-print">All data is stored only in this browser's LocalStorage — nothing is sent anywhere. Export regularly as a backup, especially before clearing browser data.</p>
    </div>
  </div>`;
}

function renderGenericChecklist(storeKey, items) {
  const state = Store.get(storeKey, {});
  return `<ul class="checklist generic-checklist" data-store="${storeKey}">
    ${items.map((t, i) => `<li><label class="check-row"><input type="checkbox" data-idx="${i}" ${state[i] ? "checked" : ""} class="generic-chk"><span>${escapeHtml(t)}</span></label></li>`).join("")}
  </ul>`;
}

function computeBadges({ streak, overallPct, mocks, totalRevisions }) {
  const badges = [];
  if (streak >= 7) badges.push("🔥 Week Warrior — 7-day streak");
  if (streak >= 30) badges.push("🏆 Month Marathoner — 30-day streak");
  if (overallPct >= 25) badges.push("🚀 Quarter Complete");
  if (overallPct >= 50) badges.push("⭐ Halfway There");
  if (overallPct >= 90) badges.push("👑 Syllabus Master");
  if (mocks.length >= 5) badges.push("📝 5 Mocks Logged");
  if (mocks.length >= 15) badges.push("🎯 Mock Marathoner — 15+ Mocks");
  if (totalRevisions >= 10) badges.push("↻ Revision Regular");
  Object.keys(DATA.subjects).forEach(id => {
    const s = DATA.subjects[id];
    const state = Store.get("checklist:" + id, {});
    const done = s.checklist.filter((_, i) => state[i]).length;
    if (done === s.checklist.length) badges.push(`✅ ${s.name} Mastered`);
  });
  return badges;
}

let pomodoroInterval = null;
function wireDashboard() {
  // subject bookmarks in perSubject list aren't editable here; wire generic
  document.querySelectorAll(".generic-chk").forEach(cb => {
    cb.addEventListener("change", () => {
      const ul = cb.closest(".generic-checklist");
      const key = ul.dataset.store;
      const state = Store.get(key, {});
      state[cb.dataset.idx] = cb.checked;
      Store.set(key, state);
    });
  });

  const addLog = document.getElementById("addLog");
  if (addLog) addLog.addEventListener("click", () => {
    const date = document.getElementById("logDate").value || todayKey();
    const hours = Number(document.getElementById("logHours").value);
    if (isNaN(hours) || hours <= 0) { alert("Enter a positive number of hours."); return; }
    const log = Store.get("studyLog", []);
    const existing = log.find(l => l.date === date);
    if (existing) existing.hours = Number(existing.hours) + hours;
    else log.push({ date, hours });
    Store.set("studyLog", log);
    render();
  });

  const examInput = document.getElementById("examDateInput");
  if (examInput) examInput.addEventListener("change", () => {
    Store.set("examDate", examInput.value);
    render();
  });

  const goalBtn = document.getElementById("saveWeeklyGoal");
  if (goalBtn) goalBtn.addEventListener("click", () => {
    Store.set("weeklyGoal:" + isoWeekKey(), document.getElementById("weeklyGoalInput").value);
    goalBtn.textContent = "Saved ✓";
    setTimeout(() => goalBtn.textContent = "Save", 1500);
  });

  const exportBtn = document.getElementById("exportProgress");
  if (exportBtn) exportBtn.addEventListener("click", exportProgress);

  const printBtn = document.getElementById("printPage");
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  const resetBtn = document.getElementById("resetProgress");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    if (confirm("This will permanently erase ALL locally saved progress (checklists, mocks, notes, streaks). Export a backup first if unsure. Continue?")) {
      localStorage.clear();
      render();
    }
  });

  wireTimer();
}

function exportProgress() {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    data[k] = Store.get(k, null);
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "gate-prep-progress-" + todayKey() + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function wireTimer() {
  const display = document.getElementById("timerDisplay");
  if (!display) return;
  let seconds = Store.get("timerSeconds", 25 * 60);
  let mode = Store.get("timerMode", "focus");
  const update = () => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    display.textContent = `${m}:${s}`;
  };
  update();
  document.getElementById("timerStart").addEventListener("click", () => {
    if (pomodoroInterval) return;
    pomodoroInterval = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        mode = mode === "focus" ? "break" : "focus";
        seconds = mode === "focus" ? 25 * 60 : 5 * 60;
        Store.set("timerMode", mode);
        if (window.Notification && Notification.permission === "granted") {
          new Notification(mode === "focus" ? "Break's over — back to focus!" : "Nice work — take a 5 min break.");
        }
      }
      Store.set("timerSeconds", seconds);
      update();
    }, 1000);
  });
  document.getElementById("timerPause").addEventListener("click", () => { clearInterval(pomodoroInterval); pomodoroInterval = null; });
  document.getElementById("timerReset").addEventListener("click", () => {
    clearInterval(pomodoroInterval); pomodoroInterval = null;
    mode = "focus"; seconds = 25 * 60;
    Store.set("timerMode", mode); Store.set("timerSeconds", seconds);
    update();
  });
}

/* --------------------------- Global search ---------------------------------- */
function buildSearchIndex() {
  const idx = [];
  Object.keys(DATA.pages).forEach(id => idx.push({ id, title: DATA.pages[id].title, type: "Info" }));
  Object.keys(DATA.subjects).forEach(id => idx.push({ id, title: DATA.subjects[id].name, type: "Subject" }));
  idx.push({ id: "study-strategy", title: "Study Strategy", type: "Strategy" });
  idx.push({ id: "revision-strategy", title: "Revision Strategy", type: "Strategy" });
  idx.push({ id: "pyq-strategy", title: "Previous Year Questions", type: "Strategy" });
  idx.push({ id: "mock-strategy", title: "Mock Tests", type: "Strategy" });
  idx.push({ id: "faq", title: "FAQ", type: "Help" });
  idx.push({ id: "motivation", title: "Motivation", type: "Help" });
  idx.push({ id: "dashboard", title: "Progress Dashboard", type: "Tool" });
  return idx;
}

function initGlobalSearch() {
  const input = document.getElementById("globalSearch");
  const results = document.getElementById("searchResults");
  const idx = buildSearchIndex();
  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    if (!term) { results.style.display = "none"; results.innerHTML = ""; return; }
    const matches = idx.filter(x => x.title.toLowerCase().includes(term)).slice(0, 8);
    const faqMatches = DATA.faq.filter(f => f.q.toLowerCase().includes(term)).slice(0, 4);
    if (!matches.length && !faqMatches.length) {
      results.innerHTML = `<div class="search-empty">No matches.</div>`;
    } else {
      results.innerHTML =
        matches.map(m => `<a href="#/${m.id}" class="search-result"><span class="sr-type">${m.type}</span>${escapeHtml(m.title)}</a>`).join("") +
        faqMatches.map(f => `<a href="#/faq" class="search-result"><span class="sr-type">FAQ</span>${escapeHtml(f.q)}</a>`).join("");
    }
    results.style.display = "block";
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) results.style.display = "none";
  });
  results.addEventListener("click", () => { input.value = ""; results.style.display = "none"; });
}

/* --------------------------- Bookmark button delegation --------------------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".bookmark-btn");
  if (btn && !btn.dataset.wired) toggleBookmark(btn.dataset.bookmark, btn);
});

/* --------------------------- Sidebar mobile toggle --------------------------- */
function closeSidebarOnMobile() {
  if (window.innerWidth <= 900) document.body.classList.remove("sidebar-open");
}

/* --------------------------- Init -------------------------------------------- */
function init() {
  initTheme();
  buildSidebar();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("menuToggle").addEventListener("click", () => document.body.classList.toggle("sidebar-open"));
  document.getElementById("sidebarOverlay").addEventListener("click", () => document.body.classList.remove("sidebar-open"));
  initGlobalSearch();
  render();
}

document.addEventListener("DOMContentLoaded", init);
