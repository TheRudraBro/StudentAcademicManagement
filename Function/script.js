  
/* =========================================================================
   CORE — icons, storage, utilities, toast, modal, shared state
   ========================================================================= */

/* ---------- Icon library (hand-drawn, dependency-free) ---------- */

const ICON_PATHS = {
  x: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  home: '<path d="M4 11L12 4l8 7"/><path d="M6 10v10h5v-6h2v6h5V10"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="8" y1="19" x2="13" y2="19"/>',
  examfile: '<path d="M6 2h9l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><polyline points="15 2 15 7 20 7"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
  checkcircle: '<circle cx="12" cy="12" r="9"/><polyline points="8 12 11 15 16 9"/>',
  barchart: '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
  sliders: '<line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="2"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="9" cy="18" r="2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="20" y2="12"/><line x1="5" y1="5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19" y2="19"/><line x1="19" y1="5" x2="17.5" y2="6.5"/><line x1="6.5" y1="17.5" x2="5" y2="19"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
  edit: '<path d="M17 3a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  chevronleft: '<polyline points="15 18 9 12 15 6"/>',
  chevronright: '<polyline points="9 18 15 12 9 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>',
  mappin: '<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
  alerttriangle: '<path d="M12 3l9.5 17H2.5z"/><line x1="12" y1="9.5" x2="12" y2="14"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/>',
  xcircle: '<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>',
  externallink: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  download: '<path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><path d="M5 19h14"/>',
  upload: '<path d="M12 21V9"/><polyline points="7 13 12 8 17 13"/><path d="M5 19h14"/>',
  star: '<polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5"/>',
  filter: '<polygon points="4 4 20 4 14 12 14 19 10 21 10 12"/>',
  info: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none"/>',
  video: '<rect x="2" y="5" width="15" height="14" rx="2"/><polygon points="17 9 22 6 22 18 17 15"/>',
  monitor: '<rect x="3" y="4" width="18" height="14" rx="1"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/>',
  link: '<path d="M9 15l6-6"/><path d="M13 5l1.5-1.5a3.5 3.5 0 0 1 5 5L18 10"/><path d="M11 19l-1.5 1.5a3.5 3.5 0 0 1-5-5L6 14"/>',
  award: '<circle cx="12" cy="8" r="6"/><polyline points="8.5 13.5 7 22 12 19 17 22 15.5 13.5"/>',
  folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"/>',
  check: '<polyline points="4 12 9 17 20 6"/>',
  inbox: '<path d="M4 12h4l2 3h4l2-3h4"/><path d="M4 12 6 4h12l2 8"/><path d="M4 12v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6"/>',
};

function icon(name, cls) {
  const inner = ICON_PATHS[name] || '';
  return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
}

/* ---------- Basic helpers ---------- */
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}
function pad2(n) { return String(n).padStart(2, '0'); }
function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }

/* ---------- Date & time utilities (local-time safe, no timezone drift) ---------- */
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parseISODate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function nowTimeStr() {
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
function formatDateLong(dateStr) {
  return parseISODate(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}
function formatDateMed(dateStr) {
  return parseISODate(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function formatDateFull(dateStr) {
  return parseISODate(dateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}
function formatTime12(timeStr) {
  if (!timeStr) return '';
  let [h, m] = timeStr.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  return `${h}:${pad2(m)} ${ampm}`;
}
function weekdayName(dateStr) { return WEEKDAYS[parseISODate(dateStr).getDay()]; }
function daysBetween(dateStr1, dateStr2) {
  const a = parseISODate(dateStr1), b = parseISODate(dateStr2);
  return Math.round((b - a) / 86400000);
}
function timeToMinutes(t) {
  if (!t) return 0;
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
function relativeDayLabel(dateStr) {
  const diff = daysBetween(todayISO(), dateStr);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  if (diff === -1) return 'Yesterday';
  if (diff > 1 && diff <= 6) return `In ${diff} days`;
  if (diff < -1 && diff >= -6) return `${Math.abs(diff)} days ago`;
  return formatDateMed(dateStr);
}
function relativeDueLabel(dateStr) {
  const diff = daysBetween(todayISO(), dateStr);
  if (diff === 0) return { text: 'Due today', tone: 'warning' };
  if (diff === 1) return { text: 'Due tomorrow', tone: 'warning' };
  if (diff > 1) return { text: `Due in ${diff} days`, tone: diff <= 3 ? 'warning' : 'neutral' };
  if (diff === -1) return { text: 'Overdue by 1 day', tone: 'danger' };
  return { text: `Overdue by ${Math.abs(diff)} days`, tone: 'danger' };
}

/* ---------- Subject color coding (deterministic hash → palette index) ---------- */
function subjectColorVar(name) {
  const str = (name || '').trim().toLowerCase();
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  return `var(--subj-${hash % 10})`;
}

/* ---------- Persistent storage layer ----------
   Uses window.storage (persists across sessions in this environment) when
   available, and transparently falls back to an in-memory store so the app
   still works fully within a single session if opened outside that context. */
const _memoryFallback = {};
const DB = {
  async get(key, fallback) {
    try {
      if (window.storage && window.storage.get) {
        const res = await window.storage.get(key, false);
        if (res && res.value != null) {
          const parsed = JSON.parse(res.value);
          _memoryFallback[key] = parsed;
          return parsed;
        }
      }
    } catch (err) { /* key not present yet, or storage unavailable here */ }
    return Object.prototype.hasOwnProperty.call(_memoryFallback, key) ? _memoryFallback[key] : fallback;
  },
  async set(key, value) {
    _memoryFallback[key] = value;
    try {
      if (window.storage && window.storage.set) {
        await window.storage.set(key, JSON.stringify(value), false);
      }
    } catch (err) { console.warn('Persistent save unavailable for', key, err); }
  },
};

/* ---------- Default data shapes ---------- */
function defaultSettings() {
  return { name: '', institution: '', department: '', theme: 'light', attendanceThreshold: 75 };
}
function defaultGradeScale() {
  return [
    { grade: 'A+', point: 4.00 }, { grade: 'A', point: 3.75 }, { grade: 'A-', point: 3.50 },
    { grade: 'B+', point: 3.25 }, { grade: 'B', point: 3.00 }, { grade: 'B-', point: 2.75 },
    { grade: 'C+', point: 2.50 }, { grade: 'C', point: 2.25 }, { grade: 'D', point: 2.00 },
    { grade: 'F', point: 0.00 },
  ];
}

/* ---------- Global in-memory application state ---------- */
const state = {
  settings: defaultSettings(),
  routine: [],
  assignments: [],
  exams: [],
  attendance: { subjects: [], records: [] },
  cgpa: { gradeScale: defaultGradeScale(), semesters: [] },
  materials: [],
};

function getAllKnownSubjects() {
  const set = new Set();
  state.routine.forEach((r) => r.subject && set.add(r.subject));
  state.attendance.subjects.forEach((s) => s.name && set.add(s.name));
  state.assignments.forEach((a) => a.subject && set.add(a.subject));
  state.exams.forEach((e) => e.subject && set.add(e.subject));
  state.materials.forEach((m) => m.subject && set.add(m.subject));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
function refreshSubjectsDatalist() {
  const dl = document.getElementById('subjectsDatalist');
  if (!dl) return;
  dl.innerHTML = getAllKnownSubjects().map((s) => `<option value="${esc(s)}">`).join('');
}

/* ---------- Shared empty-state renderer ---------- */
function emptyStateHtml(iconName, title, desc, actionHtml) {
  return `
    <div class="empty-state">
      ${icon(iconName, 'icon-lg')}
      <h3>${esc(title)}</h3>
      <p>${esc(desc)}</p>
      ${actionHtml || ''}
    </div>
  `;
}

/* ---------- Toast notifications ---------- */
function showToast(message, type) {
  type = type || 'success';
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  const iconName = type === 'success' ? 'check' : type === 'error' ? 'xcircle' : 'info';
  t.innerHTML = icon(iconName) + `<span>${esc(message)}</span>`;
  container.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 250);
  }, 3200);
}

/* ---------- Modal system ---------- */
let _modalClearTimer = null;
function openModal(title, bodyHtml, opts) {
  opts = opts || {};
  if (_modalClearTimer) { clearTimeout(_modalClearTimer); _modalClearTimer = null; }
  document.getElementById('modalTitle').textContent = title;
  const body = document.getElementById('modalBody');
  body.innerHTML = bodyHtml;
  document.getElementById('modal').classList.toggle('modal-wide', !!opts.wide);
  document.getElementById('modalOverlay').classList.add('open');
  refreshSubjectsDatalist();
  if (!opts.noFocus) {
    const firstInput = body.querySelector('input, select, textarea');
    if (firstInput) setTimeout(() => firstInput.focus(), 60);
  }
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  if (_modalClearTimer) clearTimeout(_modalClearTimer);
  _modalClearTimer = setTimeout(() => {
    document.getElementById('modalBody').innerHTML = '';
    _modalClearTimer = null;
  }, 200);
}
function confirmDialog(message, onConfirm, confirmLabel) {
  openModal('Please confirm', `
    <p class="confirm-message">${esc(message)}</p>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" id="confirmCancelBtn">Cancel</button>
      <button type="button" class="btn btn-danger" id="confirmOkBtn">${esc(confirmLabel || 'Delete')}</button>
    </div>
  `, { noFocus: true });
  document.getElementById('confirmCancelBtn').addEventListener('click', closeModal);
  document.getElementById('confirmOkBtn').addEventListener('click', () => { closeModal(); onConfirm(); });
}
/* =========================================================================
   NAVIGATION — section routing, sidebar, theme
   ========================================================================= */

const SECTION_TITLES = {
  dashboard: 'Dashboard',
  routine: 'Class routine',
  assignments: 'Assignments',
  exams: 'Exam schedule',
  attendance: 'Attendance',
  cgpa: 'CGPA calculator',
  materials: 'Course materials',
};

/* Each feature module registers its render function here, e.g.
   RENDER_FNS.routine = renderRoutine; */
const RENDER_FNS = {};

function getCurrentSection() {
  const active = document.querySelector('.page.active');
  return active ? active.id.replace('section-', '') : 'dashboard';
}
function renderCurrentSection() {
  const sec = getCurrentSection();
  if (typeof RENDER_FNS[sec] === 'function') RENDER_FNS[sec]();
}

function navigateTo(section) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-section]').forEach((n) => n.classList.remove('active'));
  const target = document.getElementById(`section-${section}`);
  if (target) target.classList.add('active');
  const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (navItem) navItem.classList.add('active');
  document.getElementById('pageTitle').textContent = SECTION_TITLES[section] || 'Coursebook';
  closeSidebar();
  if (typeof RENDER_FNS[section] === 'function') RENDER_FNS[section]();
  const contentEl = document.querySelector('.content');
  if (contentEl) contentEl.scrollTop = 0;
  window.scrollTo(0, 0);
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
}

/* ---------- Theme ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  const iconHtml = icon(isDark ? 'sun' : 'moon');
  const topBtn = document.getElementById('themeToggleTop');
  if (topBtn) topBtn.innerHTML = iconHtml;
  const sideBtn = document.getElementById('themeToggleBtn');
  if (sideBtn) sideBtn.innerHTML = iconHtml + `<span id="themeToggleLabel">${isDark ? 'Light mode' : 'Dark mode'}</span>`;
}

async function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  state.settings.theme = next;
  await DB.set('settings', state.settings);
}
/* =========================================================================
   CLASS ROUTINE — weekly timetable grid (desktop) + day agenda (mobile)
   ========================================================================= */

let selectedDayIndex = new Date().getDay();

function getRoutineTimeRange() {
  let minMin = 8 * 60, maxMin = 17 * 60;
  state.routine.forEach((r) => {
    minMin = Math.min(minMin, timeToMinutes(r.startTime));
    maxMin = Math.max(maxMin, timeToMinutes(r.endTime));
  });
  minMin = Math.floor(minMin / 60) * 60;
  maxMin = Math.ceil(maxMin / 60) * 60;
  if (maxMin - minMin < 8 * 60) maxMin = minMin + 8 * 60;
  return { minMin, maxMin };
}

function renderRoutine() {
  renderRoutineGridDesktop();
  renderRoutineMobile();
}

function renderRoutineGridDesktop() {
  const { minMin, maxMin } = getRoutineTimeRange();
  const totalHeight = maxMin - minMin;
  const today = WEEKDAYS[new Date().getDay()];

  let html = '<div class="routine-corner"></div>';
  WEEKDAYS.forEach((day) => {
    html += `<div class="routine-day-head ${day === today ? 'is-today' : ''}">${WEEKDAYS_SHORT[WEEKDAYS.indexOf(day)]}</div>`;
  });

  let timeLabelsHtml = '';
  for (let m = minMin; m <= maxMin; m += 60) {
    const hour = Math.floor(m / 60);
    const label = hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;
    timeLabelsHtml += `<span class="routine-time-label" style="top:${m - minMin}px">${label}</span>`;
  }
  html += `<div class="routine-time-col" style="height:${totalHeight}px">${timeLabelsHtml}</div>`;

  WEEKDAYS.forEach((day) => {
    const dayEvents = state.routine.filter((r) => r.day === day);
    const eventsHtml = dayEvents.map((ev) => {
      const top = clamp(timeToMinutes(ev.startTime) - minMin, 0, totalHeight);
      const height = Math.max(timeToMinutes(ev.endTime) - timeToMinutes(ev.startTime), 26);
      return `<div class="routine-event" style="top:${top}px;height:${height}px;border-left-color:${subjectColorVar(ev.subject)}" data-id="${ev.id}">
        <div class="ev-title">${esc(ev.subject)}</div>
        <div class="ev-meta">${formatTime12(ev.startTime)}–${formatTime12(ev.endTime)}</div>
      </div>`;
    }).join('');
    html += `<div class="routine-day-col ${day === today ? 'is-today' : ''}" style="height:${totalHeight}px">${eventsHtml}</div>`;
  });

  const grid = document.getElementById('routineGrid');
  grid.innerHTML = html;
  grid.querySelectorAll('.routine-event').forEach((el) => {
    el.addEventListener('click', () => openRoutineForm(el.dataset.id));
  });
}

function renderRoutineMobile() {
  const tabsContainer = document.getElementById('dayTabs');
  const todayIdx = new Date().getDay();
  tabsContainer.innerHTML = WEEKDAYS.map((day, i) => `
    <button class="day-tab ${i === selectedDayIndex ? 'active' : ''} ${i === todayIdx ? 'is-today' : ''}" data-day="${i}">${WEEKDAYS_SHORT[i]}</button>
  `).join('');
  tabsContainer.querySelectorAll('.day-tab').forEach((btn) => {
    btn.addEventListener('click', () => { selectedDayIndex = Number(btn.dataset.day); renderRoutineMobile(); });
  });

  const day = WEEKDAYS[selectedDayIndex];
  const dayEvents = state.routine.filter((r) => r.day === day).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  const listContainer = document.getElementById('routineDayList');
  if (!dayEvents.length) {
    listContainer.innerHTML = emptyStateHtml('calendar', 'No classes', `Nothing scheduled for ${day}. Add a class to fill this in.`, `<button class="btn btn-primary" onclick="openRoutineForm()">${icon('plus')}<span>Add class</span></button>`);
    return;
  }
  listContainer.innerHTML = dayEvents.map((ev) => `
    <div class="routine-list-item">
      <div class="routine-list-time">${formatTime12(ev.startTime)}<br>${formatTime12(ev.endTime)}</div>
      <div class="routine-list-bar" style="background:${subjectColorVar(ev.subject)}"></div>
      <div class="routine-list-body">
        <div class="rt-title">${esc(ev.subject)}</div>
        <div class="rt-meta">
          ${ev.room ? `<span>${icon('mappin', 'icon-sm')}${esc(ev.room)}</span>` : ''}
          ${ev.teacher ? `<span>${icon('user', 'icon-sm')}${esc(ev.teacher)}</span>` : ''}
        </div>
      </div>
      <div class="ledger-row-actions">
        <button class="icon-btn" data-edit="${ev.id}" aria-label="Edit class">${icon('edit', 'icon-sm')}</button>
        <button class="icon-btn" data-del="${ev.id}" aria-label="Delete class">${icon('trash', 'icon-sm')}</button>
      </div>
    </div>
  `).join('');
  listContainer.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => openRoutineForm(b.dataset.edit)));
  listContainer.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => handleDeleteRoutine(b.dataset.del)));
}

function openRoutineForm(id) {
  const entry = id ? state.routine.find((r) => r.id === id) : null;
  const isEdit = !!entry;
  openModal(isEdit ? 'Edit class' : 'Add class', `
    <form id="routineForm">
      <div class="form-group">
        <label>Subject</label>
        <input class="input" name="subject" list="subjectsDatalist" required placeholder="e.g. Data Structures" value="${entry ? esc(entry.subject) : ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Day</label>
          <select class="select" name="day">
            ${WEEKDAYS.map((d) => `<option value="${d}" ${entry && entry.day === d ? 'selected' : ''}>${d}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Room (optional)</label>
          <input class="input" name="room" placeholder="e.g. Room 304" value="${entry ? esc(entry.room || '') : ''}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Starts at</label>
          <input class="input" type="time" name="startTime" required value="${entry ? entry.startTime : '09:00'}">
        </div>
        <div class="form-group">
          <label>Ends at</label>
          <input class="input" type="time" name="endTime" required value="${entry ? entry.endTime : '10:20'}">
        </div>
      </div>
      <div class="form-group">
        <label>Teacher (optional)</label>
        <input class="input" name="teacher" placeholder="e.g. Dr. Rahman" value="${entry ? esc(entry.teacher || '') : ''}">
      </div>
      <div class="modal-actions ${isEdit ? 'spread' : ''}">
        ${isEdit ? `<button type="button" class="btn btn-danger" id="routineDeleteBtn">Delete</button>` : '<span></span>'}
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save changes' : 'Add class'}</button>
      </div>
    </form>
  `);
  document.getElementById('routineForm').addEventListener('submit', (e) => { e.preventDefault(); saveRoutineFromForm(e.target, id); });
  if (isEdit) document.getElementById('routineDeleteBtn').addEventListener('click', () => handleDeleteRoutine(id));
}

async function saveRoutineFromForm(form, id) {
  const fd = new FormData(form);
  const startTime = fd.get('startTime');
  const endTime = fd.get('endTime');
  if (timeToMinutes(endTime) <= timeToMinutes(startTime)) {
    showToast('End time must be after the start time', 'error');
    return;
  }
  const data = {
    subject: fd.get('subject').trim(),
    day: fd.get('day'),
    room: fd.get('room').trim(),
    teacher: fd.get('teacher').trim(),
    startTime, endTime,
  };
  if (id) {
    const idx = state.routine.findIndex((r) => r.id === id);
    state.routine[idx] = { ...state.routine[idx], ...data };
  } else {
    state.routine.push({ id: uid(), ...data });
  }
  await DB.set('routine-entries', state.routine);
  closeModal();
  renderRoutine();
  showToast(id ? 'Class updated' : 'Class added');
}

function handleDeleteRoutine(id) {
  confirmDialog("Delete this class from your routine? This can't be undone.", async () => {
    state.routine = state.routine.filter((r) => r.id !== id);
    await DB.set('routine-entries', state.routine);
    renderRoutine();
    showToast('Class deleted');
  });
}

RENDER_FNS.routine = renderRoutine;
/* =========================================================================
   ASSIGNMENT TRACKING — urgency-grouped ledger with filters
   ========================================================================= */

const assignmentFilters = { status: 'all', subject: 'all' };

function getFilteredAssignments() {
  return state.assignments.filter((a) => {
    if (assignmentFilters.status !== 'all' && a.status !== assignmentFilters.status) return false;
    if (assignmentFilters.subject !== 'all' && a.subject !== assignmentFilters.subject) return false;
    return true;
  });
}

function populateAssignmentSubjectFilter() {
  const sel = document.getElementById('assignmentSubjectFilter');
  const current = sel.value;
  const subjects = Array.from(new Set(state.assignments.map((a) => a.subject))).sort((a, b) => a.localeCompare(b));
  sel.innerHTML = '<option value="all">All subjects</option>' + subjects.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join('');
  if (subjects.includes(current)) sel.value = current;
}

function renderAssignments() {
  populateAssignmentSubjectFilter();
  const container = document.getElementById('assignmentsContainer');

  if (!state.assignments.length) {
    container.innerHTML = emptyStateHtml('clipboard', 'No assignments yet', 'Add your first assignment to start tracking deadlines.', `<button class="btn btn-primary" onclick="openAssignmentForm()">${icon('plus')}<span>Add assignment</span></button>`);
    return;
  }

  const list = getFilteredAssignments();
  if (!list.length) {
    container.innerHTML = emptyStateHtml('filter', 'No matches', 'No assignments match the current filters.');
    return;
  }

  const overdue = [], dueSoon = [], upcoming = [], completed = [];
  list.forEach((a) => {
    if (a.status === 'completed') { completed.push(a); return; }
    const diff = daysBetween(todayISO(), a.dueDate);
    if (diff < 0) overdue.push(a);
    else if (diff <= 3) dueSoon.push(a);
    else upcoming.push(a);
  });
  [overdue, dueSoon, upcoming].forEach((arr) => arr.sort((a, b) => a.dueDate.localeCompare(b.dueDate)));
  completed.sort((a, b) => b.dueDate.localeCompare(a.dueDate));

  let html = '';
  if (overdue.length) html += assignmentSectionHtml('Overdue', overdue);
  if (dueSoon.length) html += assignmentSectionHtml('Due soon', dueSoon);
  if (upcoming.length) html += assignmentSectionHtml('Upcoming', upcoming);
  if (completed.length) html += assignmentSectionHtml('Completed', completed);
  container.innerHTML = html;
  attachAssignmentHandlers(container);
}

function assignmentSectionHtml(label, items) {
  return `<div class="ledger-section-label">${esc(label)}</div><div class="ledger">${items.map(assignmentRowHtml).join('')}</div>`;
}

function assignmentRowHtml(a) {
  const isDone = a.status === 'completed';
  const due = relativeDueLabel(a.dueDate);
  const dueColor = due.tone === 'danger' ? 'var(--clay)' : due.tone === 'warning' ? 'var(--brass)' : 'var(--text-tertiary)';
  const priorityBadge = { high: 'badge-danger', medium: 'badge-warning', low: 'badge-neutral' }[a.priority] || 'badge-neutral';
  return `
  <div class="ledger-row ${isDone ? 'is-done' : ''}" style="border-left-color:${subjectColorVar(a.subject)}">
    <button class="check-toggle ${isDone ? 'checked' : ''}" data-toggle="${a.id}" aria-label="Mark complete">${icon('check')}</button>
    <div class="ledger-row-main">
      <div class="ledger-row-title ${isDone ? 'done-text' : ''}">
        ${esc(a.title)}
        <span class="badge ${priorityBadge}">${esc(a.priority)}</span>
      </div>
      <div class="ledger-row-meta">
        <span>${icon('book', 'icon-sm')}${esc(a.subject)}</span>
        ${!isDone
          ? `<span style="color:${dueColor}">${icon('clock', 'icon-sm')}${due.text}</span>`
          : `<span>${icon('clock', 'icon-sm')}Due ${formatDateMed(a.dueDate)}</span>`}
      </div>
      ${a.description ? `<div class="ledger-row-desc">${esc(a.description)}</div>` : ''}
    </div>
    <div class="ledger-row-actions">
      <button class="icon-btn" data-edit="${a.id}" aria-label="Edit assignment">${icon('edit', 'icon-sm')}</button>
      <button class="icon-btn" data-del="${a.id}" aria-label="Delete assignment">${icon('trash', 'icon-sm')}</button>
    </div>
  </div>`;
}

function attachAssignmentHandlers(container) {
  container.querySelectorAll('[data-toggle]').forEach((b) => b.addEventListener('click', () => toggleAssignmentComplete(b.dataset.toggle)));
  container.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => openAssignmentForm(b.dataset.edit)));
  container.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => handleDeleteAssignment(b.dataset.del)));
}

async function toggleAssignmentComplete(id) {
  const a = state.assignments.find((x) => x.id === id);
  if (!a) return;
  a.status = a.status === 'completed' ? 'pending' : 'completed';
  await DB.set('assignments-list', state.assignments);
  renderAssignments();
  showToast(a.status === 'completed' ? 'Assignment completed' : 'Marked as pending');
}

function openAssignmentForm(id) {
  const a = id ? state.assignments.find((x) => x.id === id) : null;
  const isEdit = !!a;
  openModal(isEdit ? 'Edit assignment' : 'Add assignment', `
    <form id="assignmentForm">
      <div class="form-group">
        <label>Title</label>
        <input class="input" name="title" required placeholder="e.g. Lab report 3" value="${a ? esc(a.title) : ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Subject</label>
          <input class="input" name="subject" list="subjectsDatalist" required placeholder="e.g. Physics II" value="${a ? esc(a.subject) : ''}">
        </div>
        <div class="form-group">
          <label>Due date</label>
          <input class="input" type="date" name="dueDate" required value="${a ? a.dueDate : todayISO()}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Priority</label>
          <select class="select" name="priority">
            ${['low', 'medium', 'high'].map((p) => `<option value="${p}" ${a && a.priority === p ? 'selected' : ''}>${p[0].toUpperCase() + p.slice(1)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Status</label>
          <select class="select" name="status">
            ${[['pending', 'Pending'], ['in-progress', 'In progress'], ['completed', 'Completed']].map(([v, l]) => `<option value="${v}" ${a && a.status === v ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Notes (optional)</label>
        <textarea class="textarea" name="description" placeholder="Details, requirements, or links">${a ? esc(a.description || '') : ''}</textarea>
      </div>
      <div class="modal-actions ${isEdit ? 'spread' : ''}">
        ${isEdit ? `<button type="button" class="btn btn-danger" id="assignmentDeleteBtn">Delete</button>` : '<span></span>'}
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save changes' : 'Add assignment'}</button>
      </div>
    </form>
  `);
  document.getElementById('assignmentForm').addEventListener('submit', (e) => { e.preventDefault(); saveAssignmentFromForm(e.target, id); });
  if (isEdit) document.getElementById('assignmentDeleteBtn').addEventListener('click', () => handleDeleteAssignment(id));
}

async function saveAssignmentFromForm(form, id) {
  const fd = new FormData(form);
  const data = {
    title: fd.get('title').trim(),
    subject: fd.get('subject').trim(),
    dueDate: fd.get('dueDate'),
    priority: fd.get('priority'),
    status: fd.get('status'),
    description: fd.get('description').trim(),
  };
  if (id) {
    const idx = state.assignments.findIndex((x) => x.id === id);
    state.assignments[idx] = { ...state.assignments[idx], ...data };
  } else {
    state.assignments.push({ id: uid(), ...data, createdAt: new Date().toISOString() });
  }
  await DB.set('assignments-list', state.assignments);
  closeModal();
  renderAssignments();
  showToast(id ? 'Assignment updated' : 'Assignment added');
}

function handleDeleteAssignment(id) {
  confirmDialog("Delete this assignment? This can't be undone.", async () => {
    state.assignments = state.assignments.filter((x) => x.id !== id);
    await DB.set('assignments-list', state.assignments);
    renderAssignments();
    showToast('Assignment deleted');
  });
}

RENDER_FNS.assignments = renderAssignments;
/* =========================================================================
   EXAM SCHEDULE — countdown banner + chronological ledger
   ========================================================================= */

const EXAM_TYPES = ['Quiz', 'Class Test', 'Midterm', 'Final', 'Presentation', 'Viva', 'Other'];

function getUpcomingExams() {
  return state.exams
    .filter((e) => daysBetween(todayISO(), e.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date) || timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
}
function getPastExams() {
  return state.exams.filter((e) => daysBetween(todayISO(), e.date) < 0).sort((a, b) => b.date.localeCompare(a.date));
}

function renderExams() {
  renderNextExamBanner();
  renderExamsList();
}

function renderNextExamBanner() {
  const banner = document.getElementById('nextExamBanner');
  const upcoming = getUpcomingExams();
  if (!upcoming.length) { banner.innerHTML = ''; return; }
  const next = upcoming[0];
  const d = daysBetween(todayISO(), next.date);
  const countdown = d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : `${d} days`;
  banner.innerHTML = `
    <div class="stat-strip" style="margin-bottom: var(--space-6); grid-template-columns: auto 1fr;">
      <div class="cgpa-seal" style="border-color:var(--pine)">
        <div class="num" style="color:var(--pine); font-size:19px;">${countdown}</div>
        <div class="lbl">until next exam</div>
      </div>
      <div>
        <div class="stat-label">Coming up</div>
        <div class="stat-value" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          ${esc(next.subject)} <span class="badge badge-neutral">${esc(next.examType)}</span>
        </div>
        <p style="margin-top:8px; font-size:13px;">
          ${formatDateFull(next.date)}${next.startTime ? ', ' + formatTime12(next.startTime) : ''}${next.room ? ' in ' + esc(next.room) : ''}
        </p>
      </div>
    </div>
  `;
}

function renderExamsList() {
  const container = document.getElementById('examsContainer');
  const upcoming = getUpcomingExams();
  const past = getPastExams();
  if (!upcoming.length && !past.length) {
    container.innerHTML = emptyStateHtml('examfile', 'No exams scheduled', 'Add your first exam to start tracking dates and see the countdown here.', `<button class="btn btn-primary" onclick="openExamForm()">${icon('plus')}<span>Add exam</span></button>`);
    return;
  }
  let html = '';
  if (upcoming.length) {
    html += `<div class="ledger-section-label">Upcoming</div><div class="ledger">${upcoming.map((ex) => examRowHtml(ex)).join('')}</div>`;
  }
  if (past.length) {
    html += `<div class="ledger-section-label">Past</div><div class="ledger">${past.map((ex) => examRowHtml(ex)).join('')}</div>`;
  }
  container.innerHTML = html;
  attachExamRowHandlers(container);
}

function examRowHtml(ex) {
  return `
  <div class="ledger-row" style="border-left-color:${subjectColorVar(ex.subject)}">
    <div class="ledger-row-main">
      <div class="ledger-row-title">
        <span class="subject-dot" style="background:${subjectColorVar(ex.subject)}"></span>
        ${esc(ex.subject)}
        <span class="badge badge-neutral">${esc(ex.examType)}</span>
      </div>
      <div class="ledger-row-meta">
        <span>${icon('calendar', 'icon-sm')}${formatDateLong(ex.date)}</span>
        ${ex.startTime ? `<span>${icon('clock', 'icon-sm')}${formatTime12(ex.startTime)}${ex.endTime ? '–' + formatTime12(ex.endTime) : ''}</span>` : ''}
        ${ex.room ? `<span>${icon('mappin', 'icon-sm')}${esc(ex.room)}</span>` : ''}
      </div>
      ${ex.syllabus ? `<div class="ledger-row-desc">${esc(ex.syllabus)}</div>` : ''}
    </div>
    <div class="ledger-row-actions">
      <button class="icon-btn" data-edit="${ex.id}" aria-label="Edit exam">${icon('edit', 'icon-sm')}</button>
      <button class="icon-btn" data-del="${ex.id}" aria-label="Delete exam">${icon('trash', 'icon-sm')}</button>
    </div>
  </div>`;
}

function attachExamRowHandlers(container) {
  container.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => openExamForm(b.dataset.edit)));
  container.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => handleDeleteExam(b.dataset.del)));
}

function openExamForm(id) {
  const exam = id ? state.exams.find((e) => e.id === id) : null;
  const isEdit = !!exam;
  openModal(isEdit ? 'Edit exam' : 'Add exam', `
    <form id="examForm">
      <div class="form-group">
        <label>Subject</label>
        <input class="input" name="subject" list="subjectsDatalist" required placeholder="e.g. Database Systems" value="${exam ? esc(exam.subject) : ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Exam type</label>
          <select class="select" name="examType">
            ${EXAM_TYPES.map((t) => `<option ${exam && exam.examType === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Date</label>
          <input class="input" type="date" name="date" required value="${exam ? exam.date : todayISO()}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Start time (optional)</label>
          <input class="input" type="time" name="startTime" value="${exam ? exam.startTime || '' : ''}">
        </div>
        <div class="form-group">
          <label>End time (optional)</label>
          <input class="input" type="time" name="endTime" value="${exam ? exam.endTime || '' : ''}">
        </div>
      </div>
      <div class="form-group">
        <label>Room (optional)</label>
        <input class="input" name="room" placeholder="e.g. Exam Hall 2" value="${exam ? esc(exam.room || '') : ''}">
      </div>
      <div class="form-group">
        <label>What to study (optional)</label>
        <textarea class="textarea" name="syllabus" placeholder="Chapters, topics, or notes to revise">${exam ? esc(exam.syllabus || '') : ''}</textarea>
      </div>
      <div class="modal-actions ${isEdit ? 'spread' : ''}">
        ${isEdit ? `<button type="button" class="btn btn-danger" id="examDeleteBtn">Delete</button>` : '<span></span>'}
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save changes' : 'Add exam'}</button>
      </div>
    </form>
  `);
  document.getElementById('examForm').addEventListener('submit', (e) => { e.preventDefault(); saveExamFromForm(e.target, id); });
  if (isEdit) document.getElementById('examDeleteBtn').addEventListener('click', () => handleDeleteExam(id));
}

async function saveExamFromForm(form, id) {
  const fd = new FormData(form);
  const startTime = fd.get('startTime');
  const endTime = fd.get('endTime');
  if (startTime && endTime && timeToMinutes(endTime) <= timeToMinutes(startTime)) {
    showToast('End time must be after the start time', 'error');
    return;
  }
  const data = {
    subject: fd.get('subject').trim(),
    examType: fd.get('examType'),
    date: fd.get('date'),
    startTime, endTime,
    room: fd.get('room').trim(),
    syllabus: fd.get('syllabus').trim(),
  };
  if (id) {
    const idx = state.exams.findIndex((e) => e.id === id);
    state.exams[idx] = { ...state.exams[idx], ...data };
  } else {
    state.exams.push({ id: uid(), ...data });
  }
  await DB.set('exams-list', state.exams);
  closeModal();
  renderExams();
  showToast(id ? 'Exam updated' : 'Exam added');
}

function handleDeleteExam(id) {
  confirmDialog("Delete this exam? This can't be undone.", async () => {
    state.exams = state.exams.filter((e) => e.id !== id);
    await DB.set('exams-list', state.exams);
    renderExams();
    showToast('Exam deleted');
  });
}

RENDER_FNS.exams = renderExams;
/* =========================================================================
   ATTENDANCE — quick-mark from today's routine + per-subject percentages
   ========================================================================= */

function computeSubjectAttendance(subjectId) {
  const records = state.attendance.records.filter((r) => r.subjectId === subjectId);
  let present = 0, total = 0;
  records.forEach((r) => {
    if (r.status === 'excused') return;
    total++;
    if (r.status === 'present' || r.status === 'late') present++;
  });
  const pct = total ? Math.round((present / total) * 1000) / 10 : null;
  return { present, total, pct, records };
}

function attendanceStatusClass(pct) {
  if (pct == null) return '';
  if (pct >= state.settings.attendanceThreshold) return 'safe';
  if (pct >= state.settings.attendanceThreshold - 10) return 'warn';
  return 'danger';
}

function findOrCreateAttendanceSubject(name) {
  let subj = state.attendance.subjects.find((s) => s.name.toLowerCase() === name.toLowerCase());
  if (!subj) {
    subj = { id: uid(), name };
    state.attendance.subjects.push(subj);
  }
  return subj;
}

function renderAttendance() {
  renderQuickMark();
  renderAttendanceSubjects();
}

function renderQuickMark() {
  const panel = document.getElementById('quickMarkPanel');
  const today = WEEKDAYS[new Date().getDay()];
  const todaysClasses = state.routine.filter((r) => r.day === today);
  if (!todaysClasses.length) { panel.classList.add('hidden'); return; }
  panel.classList.remove('hidden');
  const todayDate = todayISO();
  const list = document.getElementById('quickMarkList');
  list.innerHTML = todaysClasses.map((cls) => {
    const subj = state.attendance.subjects.find((s) => s.name.toLowerCase() === cls.subject.toLowerCase());
    const existingRecord = subj ? state.attendance.records.find((r) => r.subjectId === subj.id && r.date === todayDate) : null;
    const currentStatus = existingRecord ? existingRecord.status : null;
    return `
    <div class="quick-mark-row">
      <div class="qm-info">
        <div class="qm-title">${esc(cls.subject)}</div>
        <div class="qm-time">${formatTime12(cls.startTime)}–${formatTime12(cls.endTime)}</div>
      </div>
      <div class="qm-actions">
        <button class="qm-btn present-style ${currentStatus === 'present' ? 'active' : ''}" data-subject="${esc(cls.subject)}" data-status="present" aria-label="Present">${icon('check', 'icon-sm')}</button>
        <button class="qm-btn late-style ${currentStatus === 'late' ? 'active' : ''}" data-subject="${esc(cls.subject)}" data-status="late" aria-label="Late">${icon('clock', 'icon-sm')}</button>
        <button class="qm-btn absent-style ${currentStatus === 'absent' ? 'active' : ''}" data-subject="${esc(cls.subject)}" data-status="absent" aria-label="Absent">${icon('x', 'icon-sm')}</button>
      </div>
    </div>`;
  }).join('');
  list.querySelectorAll('.qm-btn').forEach((btn) => {
    btn.addEventListener('click', () => quickMarkAttendance(btn.dataset.subject, btn.dataset.status));
  });
}

async function quickMarkAttendance(subjectName, status) {
  const subj = findOrCreateAttendanceSubject(subjectName);
  const todayDate = todayISO();
  const record = state.attendance.records.find((r) => r.subjectId === subj.id && r.date === todayDate);
  if (record) {
    if (record.status === status) {
      state.attendance.records = state.attendance.records.filter((r) => r !== record);
    } else {
      record.status = status;
    }
  } else {
    state.attendance.records.push({ id: uid(), subjectId: subj.id, date: todayDate, status });
  }
  await DB.set('attendance-data', state.attendance);
  renderAttendance();
  showToast('Attendance updated');
}

function renderAttendanceSubjects() {
  const grid = document.getElementById('attendanceSubjectsGrid');
  if (!state.attendance.subjects.length) {
    grid.innerHTML = emptyStateHtml('checkcircle', 'No subjects yet', "Add a subject to start logging attendance — or use quick-mark above once your routine has classes.", `<button class="btn btn-primary" onclick="openAttendanceSubjectForm()">${icon('plus')}<span>Add subject</span></button>`);
    return;
  }
  grid.innerHTML = state.attendance.subjects.map((s) => {
    const { present, total, pct } = computeSubjectAttendance(s.id);
    const cls = attendanceStatusClass(pct);
    return `
    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-tag"><span class="subject-dot" style="background:${subjectColorVar(s.name)}"></span>${esc(s.name)}</div>
        <div class="ledger-row-actions">
          <button class="icon-btn" data-log="${s.id}" aria-label="Log attendance">${icon('plus', 'icon-sm')}</button>
          <button class="icon-btn" data-del="${s.id}" aria-label="Delete subject">${icon('trash', 'icon-sm')}</button>
        </div>
      </div>
      <div class="subject-card-pct ${cls}">${pct != null ? pct + '%' : '—'}</div>
      <div class="subject-card-sub">${total ? `${present} of ${total} classes attended` : 'No records yet'}</div>
      ${pct != null && pct < state.settings.attendanceThreshold ? `<div class="badge badge-danger" style="margin-top:8px;">${icon('alerttriangle', 'icon-sm')}Below ${state.settings.attendanceThreshold}% target</div>` : ''}
      <button class="link-btn" data-history="${s.id}" style="margin-top:10px;">View history</button>
      <div class="attendance-history hidden" id="history-${s.id}"></div>
    </div>`;
  }).join('');

  grid.querySelectorAll('[data-log]').forEach((b) => b.addEventListener('click', () => openAttendanceLogForm(b.dataset.log)));
  grid.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => handleDeleteAttendanceSubject(b.dataset.del)));
  grid.querySelectorAll('[data-history]').forEach((b) => b.addEventListener('click', () => toggleHistory(b.dataset.history)));
}

function toggleHistory(subjectId) {
  const el = document.getElementById(`history-${subjectId}`);
  if (el.classList.contains('hidden')) {
    const { records } = computeSubjectAttendance(subjectId);
    const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date));
    const statusColor = { present: 'var(--pine)', late: 'var(--brass)', absent: 'var(--clay)', excused: 'var(--text-tertiary)' };
    el.innerHTML = sorted.length
      ? sorted.map((r) => `<div class="history-row"><span>${formatDateMed(r.date)}</span><span class="hr-status" style="color:${statusColor[r.status] || 'var(--text-tertiary)'}">${esc(r.status)}</span></div>`).join('')
      : '<p style="font-size:12.5px;">No records logged yet.</p>';
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

function openAttendanceSubjectForm() {
  openModal('Add subject', `
    <form id="attSubjectForm">
      <div class="form-group">
        <label>Subject name</label>
        <input class="input" name="name" list="subjectsDatalist" required placeholder="e.g. Database Systems">
      </div>
      <div class="modal-actions">
        <button type="submit" class="btn btn-primary">Add subject</button>
      </div>
    </form>
  `);
  document.getElementById('attSubjectForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = new FormData(e.target).get('name').trim();
    if (!name) return;
    if (state.attendance.subjects.some((s) => s.name.toLowerCase() === name.toLowerCase())) {
      showToast('That subject is already being tracked', 'error');
      return;
    }
    state.attendance.subjects.push({ id: uid(), name });
    await DB.set('attendance-data', state.attendance);
    closeModal();
    renderAttendance();
    showToast('Subject added');
  });
}

function handleDeleteAttendanceSubject(id) {
  confirmDialog("Delete this subject and all of its attendance history? This can't be undone.", async () => {
    state.attendance.subjects = state.attendance.subjects.filter((s) => s.id !== id);
    state.attendance.records = state.attendance.records.filter((r) => r.subjectId !== id);
    await DB.set('attendance-data', state.attendance);
    renderAttendance();
    showToast('Subject deleted');
  });
}

function openAttendanceLogForm(subjectId) {
  const subj = state.attendance.subjects.find((s) => s.id === subjectId);
  if (!subj) return;
  openModal(`Log attendance for ${subj.name}`, `
    <form id="attLogForm">
      <div class="form-group">
        <label>Date</label>
        <input class="input" type="date" name="date" required value="${todayISO()}" max="${todayISO()}">
      </div>
      <div class="form-group">
        <label>Status</label>
        <div class="mark-btn-row">
          <label class="mark-btn present-style selected"><input class="visually-hidden-input" type="radio" name="status" value="present" checked>Present</label>
          <label class="mark-btn late-style"><input class="visually-hidden-input" type="radio" name="status" value="late">Late</label>
          <label class="mark-btn absent-style"><input class="visually-hidden-input" type="radio" name="status" value="absent">Absent</label>
          <label class="mark-btn"><input class="visually-hidden-input" type="radio" name="status" value="excused">Excused</label>
        </div>
      </div>
      <div class="modal-actions">
        <button type="submit" class="btn btn-primary">Save record</button>
      </div>
    </form>
  `);
  document.querySelectorAll('#attLogForm input[name="status"]').forEach((r) => {
    r.addEventListener('change', () => {
      document.querySelectorAll('#attLogForm .mark-btn').forEach((l) => l.classList.remove('selected'));
      r.closest('.mark-btn').classList.add('selected');
    });
  });
  document.getElementById('attLogForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const date = fd.get('date');
    const status = fd.get('status');
    const record = state.attendance.records.find((r) => r.subjectId === subjectId && r.date === date);
    if (record) { record.status = status; } else { state.attendance.records.push({ id: uid(), subjectId, date, status }); }
    await DB.set('attendance-data', state.attendance);
    closeModal();
    renderAttendance();
    showToast('Attendance recorded');
  });
}

RENDER_FNS.attendance = renderAttendance;
/* =========================================================================
   RESULT / CGPA CALCULATOR — editable grade scale, semesters, SGPA/CGPA
   ========================================================================= */

function computeSemesterSGPA(sem) {
  let totalPoints = 0, totalCredits = 0;
  sem.courses.forEach((c) => {
    const g = state.cgpa.gradeScale.find((gr) => gr.grade === c.grade);
    if (g && c.credit) { totalPoints += g.point * Number(c.credit); totalCredits += Number(c.credit); }
  });
  return totalCredits ? Math.round((totalPoints / totalCredits) * 100) / 100 : null;
}

function computeOverallCGPA() {
  let totalPoints = 0, totalCredits = 0;
  state.cgpa.semesters.forEach((sem) => {
    sem.courses.forEach((c) => {
      const g = state.cgpa.gradeScale.find((gr) => gr.grade === c.grade);
      if (g && c.credit) { totalPoints += g.point * Number(c.credit); totalCredits += Number(c.credit); }
    });
  });
  return totalCredits ? Math.round((totalPoints / totalCredits) * 100) / 100 : null;
}

function renderCGPA() {
  renderCGPASummary();
  renderCGPAChart();
  renderSemesters();
}

function renderCGPASummary() {
  const cgpa = computeOverallCGPA();
  const totalCredits = state.cgpa.semesters.reduce((sum, sem) => sum + sem.courses.reduce((s, c) => s + Number(c.credit || 0), 0), 0);
  const totalCourses = state.cgpa.semesters.reduce((sum, sem) => sum + sem.courses.length, 0);
  document.getElementById('cgpaSummary').innerHTML = `
    <div class="cgpa-seal">
      <div class="num">${cgpa != null ? cgpa.toFixed(2) : '—'}</div>
      <div class="lbl">CGPA</div>
    </div>
    <div class="cgpa-summary-stats">
      <div class="stat-block">
        <div class="stat-label">Semesters recorded</div>
        <div class="stat-value">${state.cgpa.semesters.length}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">Courses completed</div>
        <div class="stat-value">${totalCourses}</div>
      </div>
      <div class="stat-block">
        <div class="stat-label">Total credits</div>
        <div class="stat-value">${totalCredits}</div>
      </div>
    </div>
  `;
}

function renderCGPAChart() {
  const wrap = document.getElementById('cgpaChartWrap');
  const semsWithData = state.cgpa.semesters.filter((s) => computeSemesterSGPA(s) != null);
  if (semsWithData.length < 2) { wrap.classList.add('hidden'); return; }
  wrap.classList.remove('hidden');
  const maxScale = Math.max(...state.cgpa.gradeScale.map((g) => g.point), 4);
  const w = 640, h = 190, padL = 10, padB = 28, padT = 20;
  const barSlot = (w - padL - 16) / semsWithData.length;
  let bars = '';
  semsWithData.forEach((sem, i) => {
    const val = computeSemesterSGPA(sem);
    const barH = (val / maxScale) * (h - padB - padT);
    const bw = Math.min(barSlot * 0.55, 46);
    const x = padL + i * barSlot + (barSlot - bw) / 2;
    const y = h - padB - barH;
    const label = sem.name.length > 12 ? sem.name.slice(0, 11) + '…' : sem.name;
    bars += `<rect x="${x}" y="${y}" width="${bw}" height="${Math.max(barH, 2)}" rx="5" fill="var(--pine)"></rect>`;
    bars += `<text x="${x + bw / 2}" y="${y - 8}" text-anchor="middle" font-size="12" fill="var(--text-primary)" font-family="Georgia, serif">${val.toFixed(2)}</text>`;
    bars += `<text x="${x + bw / 2}" y="${h - 10}" text-anchor="middle" font-size="10.5" fill="var(--text-tertiary)" font-family="sans-serif">${esc(label)}</text>`;
  });
  document.getElementById('cgpaChart').innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" style="width:100%; height:auto; max-height:210px; display:block;">
      <line x1="${padL}" y1="${h - padB}" x2="${w - 8}" y2="${h - padB}" stroke="var(--rule-strong)" stroke-width="1"/>
      ${bars}
    </svg>`;
}

function renderSemesters() {
  const container = document.getElementById('semestersContainer');
  if (!state.cgpa.semesters.length) {
    container.innerHTML = emptyStateHtml('barchart', 'No semesters yet', 'Add a semester, then log your courses and grades to calculate your CGPA.', `<button class="btn btn-primary" onclick="openSemesterForm()">${icon('plus')}<span>Add semester</span></button>`);
    return;
  }
  container.innerHTML = state.cgpa.semesters.map((sem) => {
    const sgpa = computeSemesterSGPA(sem);
    return `
    <div class="semester-block">
      <div class="semester-head">
        <div class="semester-head-left">
          <h3>${esc(sem.name)}</h3>
          <span class="semester-sgpa">SGPA <b>${sgpa != null ? sgpa.toFixed(2) : '—'}</b></span>
        </div>
        <div class="toolbar-btns">
          <button class="btn btn-secondary btn-sm" data-addcourse="${sem.id}">${icon('plus', 'icon-sm')}<span>Add course</span></button>
          <button class="icon-btn" data-editsem="${sem.id}" aria-label="Rename semester">${icon('edit', 'icon-sm')}</button>
          <button class="icon-btn" data-delsem="${sem.id}" aria-label="Delete semester">${icon('trash', 'icon-sm')}</button>
        </div>
      </div>
      ${sem.courses.length ? `
      <div class="scroll-x">
      <table class="course-table">
        <thead><tr><th>Course</th><th>Credits</th><th>Grade</th><th>Points</th><th></th></tr></thead>
        <tbody>
          ${sem.courses.map((c) => {
            const g = state.cgpa.gradeScale.find((gr) => gr.grade === c.grade);
            return `<tr>
              <td>${esc(c.name)}</td>
              <td class="num-cell">${c.credit}</td>
              <td>${esc(c.grade)}</td>
              <td class="num-cell">${g ? (g.point * c.credit).toFixed(2) : '—'}</td>
              <td>
                <div class="ledger-row-actions">
                  <button class="icon-btn" data-editcourse="${sem.id}:${c.id}" aria-label="Edit course">${icon('edit', 'icon-sm')}</button>
                  <button class="icon-btn" data-delcourse="${sem.id}:${c.id}" aria-label="Delete course">${icon('trash', 'icon-sm')}</button>
                </div>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      </div>` : `<div class="empty-state" style="padding: var(--space-6);"><p>No courses added to this semester yet.</p></div>`}
    </div>`;
  }).join('');

  container.querySelectorAll('[data-addcourse]').forEach((b) => b.addEventListener('click', () => openCourseForm(b.dataset.addcourse)));
  container.querySelectorAll('[data-editsem]').forEach((b) => b.addEventListener('click', () => openSemesterForm(b.dataset.editsem)));
  container.querySelectorAll('[data-delsem]').forEach((b) => b.addEventListener('click', () => handleDeleteSemester(b.dataset.delsem)));
  container.querySelectorAll('[data-editcourse]').forEach((b) => {
    const [semId, courseId] = b.dataset.editcourse.split(':');
    b.addEventListener('click', () => openCourseForm(semId, courseId));
  });
  container.querySelectorAll('[data-delcourse]').forEach((b) => {
    const [semId, courseId] = b.dataset.delcourse.split(':');
    b.addEventListener('click', () => handleDeleteCourse(semId, courseId));
  });
}

function openSemesterForm(id) {
  const sem = id ? state.cgpa.semesters.find((s) => s.id === id) : null;
  openModal(sem ? 'Rename semester' : 'Add semester', `
    <form id="semesterForm">
      <div class="form-group">
        <label>Semester name</label>
        <input class="input" name="name" required placeholder="e.g. 1st Year 2nd Semester" value="${sem ? esc(sem.name) : ''}">
      </div>
      <div class="modal-actions">
        <button type="submit" class="btn btn-primary">${sem ? 'Save changes' : 'Add semester'}</button>
      </div>
    </form>
  `);
  document.getElementById('semesterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = new FormData(e.target).get('name').trim();
    if (!name) return;
    if (sem) { sem.name = name; } else { state.cgpa.semesters.push({ id: uid(), name, courses: [] }); }
    await DB.set('cgpa-data', state.cgpa);
    closeModal();
    renderCGPA();
    showToast(sem ? 'Semester updated' : 'Semester added');
  });
}

function handleDeleteSemester(id) {
  confirmDialog("Delete this semester and all of its courses? This can't be undone.", async () => {
    state.cgpa.semesters = state.cgpa.semesters.filter((s) => s.id !== id);
    await DB.set('cgpa-data', state.cgpa);
    renderCGPA();
    showToast('Semester deleted');
  });
}

function openCourseForm(semId, courseId) {
  const sem = state.cgpa.semesters.find((s) => s.id === semId);
  if (!sem) return;
  const course = courseId ? sem.courses.find((c) => c.id === courseId) : null;
  openModal(course ? 'Edit course' : 'Add course', `
    <form id="courseForm">
      <div class="form-group">
        <label>Course name</label>
        <input class="input" name="name" required placeholder="e.g. Data Structures" value="${course ? esc(course.name) : ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Credit hours</label>
          <input class="input" type="number" name="credit" step="0.5" min="0.5" max="10" required value="${course ? course.credit : '3'}">
        </div>
        <div class="form-group">
          <label>Grade</label>
          <select class="select" name="grade">
            ${state.cgpa.gradeScale.map((g) => `<option value="${esc(g.grade)}" ${course && course.grade === g.grade ? 'selected' : ''}>${esc(g.grade)} (${g.point.toFixed(2)})</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="modal-actions ${course ? 'spread' : ''}">
        ${course ? `<button type="button" class="btn btn-danger" id="courseDeleteBtn">Delete</button>` : '<span></span>'}
        <button type="submit" class="btn btn-primary">${course ? 'Save changes' : 'Add course'}</button>
      </div>
    </form>
  `);
  document.getElementById('courseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = { name: fd.get('name').trim(), credit: Number(fd.get('credit')), grade: fd.get('grade') };
    if (course) { Object.assign(course, data); } else { sem.courses.push({ id: uid(), ...data }); }
    await DB.set('cgpa-data', state.cgpa);
    closeModal();
    renderCGPA();
    showToast(course ? 'Course updated' : 'Course added');
  });
  if (course) document.getElementById('courseDeleteBtn').addEventListener('click', () => { closeModal(); handleDeleteCourse(semId, courseId); });
}

function handleDeleteCourse(semId, courseId) {
  confirmDialog('Delete this course from the semester?', async () => {
    const sem = state.cgpa.semesters.find((s) => s.id === semId);
    if (sem) sem.courses = sem.courses.filter((c) => c.id !== courseId);
    await DB.set('cgpa-data', state.cgpa);
    renderCGPA();
    showToast('Course deleted');
  });
}

function openGradeScaleModal() {
  renderGradeScaleModalBody();
}

function renderGradeScaleModalBody() {
  const rowsHtml = state.cgpa.gradeScale.map((g, i) => `
    <div class="grade-scale-row">
      <input class="input" data-gs-grade="${i}" value="${esc(g.grade)}" placeholder="Grade label">
      <input class="input" type="number" step="0.01" min="0" max="10" data-gs-point="${i}" value="${g.point}" placeholder="Points">
      <button type="button" class="icon-btn" data-gs-del="${i}" aria-label="Remove row">${icon('trash', 'icon-sm')}</button>
    </div>
  `).join('');
  openModal('Grade scale', `
    <p style="font-size:12.5px; color:var(--text-tertiary); margin-bottom:14px;">Set the letter grades and grade points used across your CGPA calculations. Changing a value here updates every course using that grade.</p>
    <div id="gradeScaleRows">${rowsHtml}</div>
    <button type="button" class="btn btn-secondary btn-sm" id="gsAddRowBtn" style="margin-top:6px;">${icon('plus', 'icon-sm')}<span>Add row</span></button>
    <div class="modal-actions">
      <button type="button" class="btn btn-primary" id="gsSaveBtn">Save grade scale</button>
    </div>
  `);

  document.getElementById('gsAddRowBtn').addEventListener('click', () => {
    state.cgpa.gradeScale.push({ grade: '', point: 0 });
    renderGradeScaleModalBody();
  });
  document.querySelectorAll('[data-gs-del]').forEach((b) => b.addEventListener('click', () => {
    state.cgpa.gradeScale.splice(Number(b.dataset.gsDel), 1);
    renderGradeScaleModalBody();
  }));
  document.getElementById('gsSaveBtn').addEventListener('click', async () => {
    const grades = document.querySelectorAll('[data-gs-grade]');
    const points = document.querySelectorAll('[data-gs-point]');
    const newScale = [];
    grades.forEach((input, i) => {
      const grade = input.value.trim();
      const point = parseFloat(points[i].value);
      if (grade && !isNaN(point)) newScale.push({ grade, point });
    });
    if (!newScale.length) { showToast('Add at least one grade', 'error'); return; }
    state.cgpa.gradeScale = newScale;
    await DB.set('cgpa-data', state.cgpa);
    closeModal();
    renderCGPA();
    showToast('Grade scale updated');
  });
}

RENDER_FNS.cgpa = renderCGPA;
/* =========================================================================
   COURSE MATERIALS — links & notes organized by subject
   ========================================================================= */

const materialsFilters = { search: '', subject: 'all' };
const MATERIAL_TYPES = ['Note', 'Slide', 'Book', 'Video', 'Article', 'Other'];
const MATERIAL_TYPE_ICONS = { Note: 'edit', Slide: 'monitor', Book: 'book', Video: 'video', Article: 'link', Other: 'folder' };

function getFilteredMaterials() {
  return state.materials.filter((m) => {
    if (materialsFilters.subject !== 'all' && m.subject !== materialsFilters.subject) return false;
    if (materialsFilters.search) {
      const q = materialsFilters.search.toLowerCase();
      if (!m.title.toLowerCase().includes(q) && !m.subject.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function populateMaterialsSubjectFilter() {
  const sel = document.getElementById('materialsSubjectFilter');
  const current = sel.value;
  const subjects = Array.from(new Set(state.materials.map((m) => m.subject))).sort((a, b) => a.localeCompare(b));
  sel.innerHTML = '<option value="all">All subjects</option>' + subjects.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join('');
  if (subjects.includes(current)) sel.value = current;
}

function renderMaterials() {
  populateMaterialsSubjectFilter();
  const container = document.getElementById('materialsContainer');
  if (!state.materials.length) {
    container.innerHTML = emptyStateHtml('book', 'No materials yet', 'Save links, notes, or references for your courses so they are easy to find later.', `<button class="btn btn-primary" onclick="openMaterialForm()">${icon('plus')}<span>Add material</span></button>`);
    return;
  }
  const list = getFilteredMaterials();
  if (!list.length) {
    container.innerHTML = emptyStateHtml('search', 'No matches', 'Try a different search term or subject filter.');
    return;
  }
  container.innerHTML = list.map(materialCardHtml).join('');
  attachMaterialHandlers(container);
}

function materialCardHtml(m) {
  return `
  <div class="material-card" style="border-top-color:${subjectColorVar(m.subject)}">
    <div class="material-card-top">
      <div class="material-type-icon">${icon(MATERIAL_TYPE_ICONS[m.type] || 'folder')}</div>
      <div class="ledger-row-actions">
        <button class="icon-btn" data-edit="${m.id}" aria-label="Edit material">${icon('edit', 'icon-sm')}</button>
        <button class="icon-btn" data-del="${m.id}" aria-label="Delete material">${icon('trash', 'icon-sm')}</button>
      </div>
    </div>
    <h4>${esc(m.title)}</h4>
    <div class="subject-tag"><span class="subject-dot" style="background:${subjectColorVar(m.subject)}"></span>${esc(m.subject)}</div>
    ${m.description ? `<p class="material-desc">${esc(m.description.length > 110 ? m.description.slice(0, 108) + '…' : m.description)}</p>` : ''}
    <div class="material-card-foot">
      <span class="badge badge-neutral">${esc(m.type)}</span>
      ${m.url
        ? `<a href="${esc(m.url)}" target="_blank" rel="noopener noreferrer" class="link-btn">${icon('externallink', 'icon-sm')}<span>Open</span></a>`
        : (m.type === 'Note' && m.description ? `<button class="link-btn" data-view="${m.id}">Read note</button>` : '')}
    </div>
  </div>`;
}

function attachMaterialHandlers(container) {
  container.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => openMaterialForm(b.dataset.edit)));
  container.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => handleDeleteMaterial(b.dataset.del)));
  container.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => viewNoteMaterial(b.dataset.view)));
}

function viewNoteMaterial(id) {
  const m = state.materials.find((x) => x.id === id);
  if (!m) return;
  openModal(m.title, `
    <div class="subject-tag" style="margin-bottom:14px;"><span class="subject-dot" style="background:${subjectColorVar(m.subject)}"></span>${esc(m.subject)}</div>
    <p style="white-space:pre-wrap; font-size:14px; line-height:1.7; color:var(--text-primary);">${esc(m.description || 'No content written yet.')}</p>
  `, { wide: true, noFocus: true });
}

function openMaterialForm(id) {
  const m = id ? state.materials.find((x) => x.id === id) : null;
  const isEdit = !!m;
  openModal(isEdit ? 'Edit material' : 'Add material', `
    <form id="materialForm">
      <div class="form-group">
        <label>Title</label>
        <input class="input" name="title" required placeholder="e.g. Chapter 4 summary" value="${m ? esc(m.title) : ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Subject</label>
          <input class="input" name="subject" list="subjectsDatalist" required placeholder="e.g. Database Systems" value="${m ? esc(m.subject) : ''}">
        </div>
        <div class="form-group">
          <label>Type</label>
          <select class="select" name="type">
            ${MATERIAL_TYPES.map((t) => `<option ${m && m.type === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Link (optional)</label>
        <input class="input" type="text" name="url" placeholder="https://…" value="${m ? esc(m.url || '') : ''}">
      </div>
      <div class="form-group">
        <label>Description or note content</label>
        <textarea class="textarea" name="description" placeholder="Write a note here, or add a short description of the linked resource" style="min-height:110px;">${m ? esc(m.description || '') : ''}</textarea>
      </div>
      <div class="modal-actions ${isEdit ? 'spread' : ''}">
        ${isEdit ? `<button type="button" class="btn btn-danger" id="materialDeleteBtn">Delete</button>` : '<span></span>'}
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save changes' : 'Add material'}</button>
      </div>
    </form>
  `, { wide: true });
  document.getElementById('materialForm').addEventListener('submit', (e) => { e.preventDefault(); saveMaterialFromForm(e.target, id); });
  if (isEdit) document.getElementById('materialDeleteBtn').addEventListener('click', () => handleDeleteMaterial(id));
}

async function saveMaterialFromForm(form, id) {
  const fd = new FormData(form);
  let url = fd.get('url').trim();
  if (url && !/^https?:\/\//i.test(url)) url = 'https://' + url;
  const data = {
    title: fd.get('title').trim(),
    subject: fd.get('subject').trim(),
    type: fd.get('type'),
    url,
    description: fd.get('description').trim(),
  };
  if (id) {
    const idx = state.materials.findIndex((x) => x.id === id);
    state.materials[idx] = { ...state.materials[idx], ...data };
  } else {
    state.materials.push({ id: uid(), ...data, createdAt: new Date().toISOString() });
  }
  await DB.set('materials-list', state.materials);
  closeModal();
  renderMaterials();
  showToast(id ? 'Material updated' : 'Material added');
}

function handleDeleteMaterial(id) {
  confirmDialog("Delete this material? This can't be undone.", async () => {
    state.materials = state.materials.filter((x) => x.id !== id);
    await DB.set('materials-list', state.materials);
    renderMaterials();
    showToast('Material deleted');
  });
}

RENDER_FNS.materials = renderMaterials;
/* =========================================================================
   DASHBOARD — daily overview pulling from every other module
   ========================================================================= */

function renderDashboard() {
  renderGreeting();
  renderStatStrip();
  renderTodayClasses();
  renderUpcomingAssignmentsPanel();
  renderUpcomingExamsPanel();
  renderAttendanceWatch();
}

function renderGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const name = state.settings.name ? `, ${state.settings.name}` : '';
  document.getElementById('greetingText').textContent = `${greeting}${name}`;
  document.getElementById('greetingDate').textContent = formatDateFull(todayISO());
}

function computeOverallAttendance() {
  const records = state.attendance.records;
  if (!records.length) return null;
  let attended = 0, total = 0;
  records.forEach((r) => {
    if (r.status === 'excused') return;
    total++;
    if (r.status === 'present' || r.status === 'late') attended++;
  });
  if (total === 0) return null;
  return Math.round((attended / total) * 1000) / 10;
}

function renderStatStrip() {
  const cgpa = computeOverallCGPA();
  const attendance = computeOverallAttendance();
  const pendingCount = state.assignments.filter((a) => a.status !== 'completed').length;
  const upcomingExam = getUpcomingExams()[0];

  let examLabel = 'None scheduled';
  if (upcomingExam) {
    const d = daysBetween(todayISO(), upcomingExam.date);
    examLabel = d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : `In ${d} days`;
  }

  const attClass = attendance == null ? '' : attendanceStatusClass(attendance);

  document.getElementById('statStrip').innerHTML = `
    <div class="cgpa-seal">
      <div class="num">${cgpa != null ? cgpa.toFixed(2) : '—'}</div>
      <div class="lbl">CGPA</div>
    </div>
    <div class="stat-block clickable" data-goto="attendance">
      <div class="stat-label">Overall attendance</div>
      <div class="stat-value">${attendance != null ? attendance + '%' : 'No records yet'}</div>
      <div class="stat-fill-track"><div class="stat-fill-bar ${attClass}" style="width:${attendance || 0}%"></div></div>
    </div>
    <div class="stat-block clickable" data-goto="assignments">
      <div class="stat-label">Pending assignments</div>
      <div class="stat-value">${pendingCount}</div>
    </div>
    <div class="stat-block clickable" data-goto="exams">
      <div class="stat-label">Next exam</div>
      <div class="stat-value">${examLabel}</div>
    </div>
  `;
}

function renderTodayClasses() {
  const today = WEEKDAYS[new Date().getDay()];
  const classes = state.routine.filter((r) => r.day === today).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  const container = document.getElementById('todayClassesList');
  if (!classes.length) {
    container.innerHTML = emptyStateHtml('calendar', 'No classes today', 'Enjoy the free time, or add a class to your routine.');
    return;
  }
  container.innerHTML = classes.map((c) => `
    <div class="dash-mini-row">
      <span class="time-chip">${formatTime12(c.startTime)}</span>
      <span class="subject-dot" style="background:${subjectColorVar(c.subject)}"></span>
      <span class="mini-title">${esc(c.subject)}</span>
      <span class="mini-sub">${esc(c.room || '')}</span>
    </div>
  `).join('');
}

function renderUpcomingAssignmentsPanel() {
  const list = state.assignments.filter((a) => a.status !== 'completed').sort((a, b) => a.dueDate.localeCompare(b.dueDate)).slice(0, 5);
  const container = document.getElementById('upcomingAssignmentsList');
  if (!list.length) {
    container.innerHTML = emptyStateHtml('clipboard', 'All caught up', 'No pending assignments right now.');
    return;
  }
  container.innerHTML = list.map((a) => {
    const due = relativeDueLabel(a.dueDate);
    const color = due.tone === 'danger' ? 'var(--clay)' : due.tone === 'warning' ? 'var(--brass)' : 'var(--text-tertiary)';
    return `
    <div class="dash-mini-row">
      <span class="subject-dot" style="background:${subjectColorVar(a.subject)}"></span>
      <span class="mini-title">${esc(a.title)}</span>
      <span class="mini-sub" style="color:${color}">${due.text}</span>
    </div>`;
  }).join('');
}

function renderUpcomingExamsPanel() {
  const list = getUpcomingExams().slice(0, 3);
  const container = document.getElementById('upcomingExamsList');
  if (!list.length) {
    container.innerHTML = emptyStateHtml('examfile', 'Nothing on the horizon', 'No upcoming exams scheduled.');
    return;
  }
  container.innerHTML = list.map((ex) => {
    const d = daysBetween(todayISO(), ex.date);
    const label = d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : `In ${d} days`;
    return `
    <div class="dash-mini-row">
      <span class="subject-dot" style="background:${subjectColorVar(ex.subject)}"></span>
      <span class="mini-title">${esc(ex.subject)}</span>
      <span class="badge badge-neutral">${esc(ex.examType)}</span>
      <span class="mini-sub">${label}</span>
    </div>`;
  }).join('');
}

function renderAttendanceWatch() {
  const container = document.getElementById('attendanceWatchList');
  if (!state.attendance.subjects.length) {
    container.innerHTML = emptyStateHtml('checkcircle', 'Not tracking yet', 'Add a subject on the Attendance page to start.');
    return;
  }
  const subjects = state.attendance.subjects.map((s) => ({ ...s, ...computeSubjectAttendance(s.id) }));
  const below = subjects.filter((s) => s.total > 0 && s.pct < state.settings.attendanceThreshold);
  if (!below.length) {
    container.innerHTML = `<div class="dash-mini-row"><span style="color:var(--pine); display:flex;">${icon('checkcircle', 'icon-sm')}</span><span class="mini-title">All subjects are within a healthy range</span></div>`;
    return;
  }
  container.innerHTML = below.map((s) => `
    <div class="dash-mini-row">
      <span class="subject-dot" style="background:${subjectColorVar(s.name)}"></span>
      <span class="mini-title">${esc(s.name)}</span>
      <span class="mini-sub" style="color:var(--clay); font-weight:600;">${s.pct}%</span>
    </div>
  `).join('');
}

RENDER_FNS.dashboard = renderDashboard;
/* =========================================================================
   SETTINGS — profile, attendance target, backup export/import, reset
   ========================================================================= */

function openSettingsModal() {
  const s = state.settings;
  openModal('Settings', `
    <form id="settingsForm">
      <div class="form-group">
        <label>Your name (optional)</label>
        <input class="input" name="name" placeholder="e.g. Fahim" value="${esc(s.name)}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Institution (optional)</label>
          <input class="input" name="institution" placeholder="e.g. University of Dhaka" value="${esc(s.institution)}">
        </div>
        <div class="form-group">
          <label>Department (optional)</label>
          <input class="input" name="department" placeholder="e.g. CSE" value="${esc(s.department)}">
        </div>
      </div>
      <div class="form-group">
        <label>Attendance target (%)</label>
        <input class="input" type="number" name="attendanceThreshold" min="0" max="100" value="${s.attendanceThreshold}">
        <p class="field-hint">Subjects below this percentage are flagged as a risk.</p>
      </div>
      <div class="modal-actions">
        <button type="submit" class="btn btn-primary">Save settings</button>
      </div>
    </form>
    <div style="border-top:1px solid var(--rule); margin-top:var(--space-5); padding-top:var(--space-5);">
      <label class="field-label">Your data</label>
      <p class="field-hint" style="margin-bottom:10px;">Everything you enter is saved automatically. You can also back it up to a file, or restore from a previous backup.</p>
      <div class="toolbar-btns" style="margin-bottom:14px; flex-wrap:wrap;">
        <button type="button" class="btn btn-secondary btn-sm" id="exportDataBtn">${icon('download', 'icon-sm')}<span>Export backup</span></button>
        <button type="button" class="btn btn-secondary btn-sm" id="importDataBtn">${icon('upload', 'icon-sm')}<span>Import backup</span></button>
        <input type="file" id="importDataInput" accept="application/json" class="hidden">
      </div>
      <button type="button" class="btn btn-danger btn-sm" id="clearDataBtn">${icon('trash', 'icon-sm')}<span>Clear all data</span></button>
    </div>
  `, { wide: true });

  document.getElementById('settingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.settings.name = fd.get('name').trim();
    state.settings.institution = fd.get('institution').trim();
    state.settings.department = fd.get('department').trim();
    state.settings.attendanceThreshold = clamp(Number(fd.get('attendanceThreshold')) || 75, 0, 100);
    await DB.set('settings', state.settings);
    closeModal();
    renderCurrentSection();
    showToast('Settings saved');
  });

  document.getElementById('exportDataBtn').addEventListener('click', exportAllData);
  document.getElementById('importDataBtn').addEventListener('click', () => document.getElementById('importDataInput').click());
  document.getElementById('importDataInput').addEventListener('change', handleImportFile);
  document.getElementById('clearDataBtn').addEventListener('click', () => {
    confirmDialog("This deletes every class, assignment, exam, attendance record, grade, and material you have saved. This can't be undone.", clearAllData, 'Clear everything');
  });
}

function exportAllData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    settings: state.settings,
    routine: state.routine,
    assignments: state.assignments,
    exams: state.exams,
    attendance: state.attendance,
    cgpa: state.cgpa,
    materials: state.materials,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `coursebook-backup-${todayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Backup downloaded');
}

function handleImportFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (err) {
      showToast('That file could not be read as a backup', 'error');
      return;
    }
    confirmDialog('Importing will replace all current data with the contents of this backup. Continue?', async () => {
      state.settings = { ...defaultSettings(), ...(data.settings || {}) };
      state.routine = data.routine || [];
      state.assignments = data.assignments || [];
      state.exams = data.exams || [];
      state.attendance = data.attendance || { subjects: [], records: [] };
      state.cgpa = data.cgpa || { gradeScale: defaultGradeScale(), semesters: [] };
      state.materials = data.materials || [];
      await persistEverything();
      applyTheme(state.settings.theme || 'light');
      closeModal();
      navigateTo('dashboard');
      showToast('Backup restored');
    }, 'Import & replace');
  };
  reader.readAsText(file);
  e.target.value = '';
}

async function persistEverything() {
  await Promise.all([
    DB.set('settings', state.settings),
    DB.set('routine-entries', state.routine),
    DB.set('assignments-list', state.assignments),
    DB.set('exams-list', state.exams),
    DB.set('attendance-data', state.attendance),
    DB.set('cgpa-data', state.cgpa),
    DB.set('materials-list', state.materials),
  ]);
}

async function clearAllData() {
  state.settings = defaultSettings();
  state.routine = [];
  state.assignments = [];
  state.exams = [];
  state.attendance = { subjects: [], records: [] };
  state.cgpa = { gradeScale: defaultGradeScale(), semesters: [] };
  state.materials = [];
  await persistEverything();
  applyTheme('light');
  closeModal();
  navigateTo('dashboard');
  showToast('All data cleared');
}
/* =========================================================================
   INIT — load persisted data, wire static listeners, boot the app
   ========================================================================= */

async function loadState() {
  const [settings, routine, assignments, exams, attendance, cgpa, materials] = await Promise.all([
    DB.get('settings', defaultSettings()),
    DB.get('routine-entries', []),
    DB.get('assignments-list', []),
    DB.get('exams-list', []),
    DB.get('attendance-data', { subjects: [], records: [] }),
    DB.get('cgpa-data', { gradeScale: defaultGradeScale(), semesters: [] }),
    DB.get('materials-list', []),
  ]);
  state.settings = { ...defaultSettings(), ...settings };
  state.routine = Array.isArray(routine) ? routine : [];
  state.assignments = Array.isArray(assignments) ? assignments : [];
  state.exams = Array.isArray(exams) ? exams : [];
  state.attendance = attendance && attendance.subjects ? attendance : { subjects: [], records: [] };
  state.cgpa = cgpa && cgpa.gradeScale ? cgpa : { gradeScale: defaultGradeScale(), semesters: [] };
  state.materials = Array.isArray(materials) ? materials : [];
}

function attachStaticListeners() {
  /* Sidebar navigation */
  document.querySelectorAll('.nav-item[data-section]').forEach((btn) => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
  });

  /* Any element anywhere (static or dynamically rendered) that wants to
     jump to a section — handled once via delegation so new dashboard/
     panel content never needs its own listener wiring. */
  document.addEventListener('click', (e) => {
    const gotoEl = e.target.closest('[data-goto]');
    if (gotoEl) navigateTo(gotoEl.dataset.goto);
  });

  document.getElementById('menuBtn').addEventListener('click', openSidebar);
  document.getElementById('sidebarCloseBtn').addEventListener('click', closeSidebar);
  document.getElementById('sidebarBackdrop').addEventListener('click', closeSidebar);
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  document.getElementById('themeToggleTop').addEventListener('click', toggleTheme);

  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('modalOverlay').classList.contains('open')) closeModal();
  });

  /* Feature toolbars */
  document.getElementById('addRoutineBtn').addEventListener('click', () => openRoutineForm());

  document.getElementById('addAssignmentBtn').addEventListener('click', () => openAssignmentForm());
  document.getElementById('assignmentStatusFilter').addEventListener('change', (e) => { assignmentFilters.status = e.target.value; renderAssignments(); });
  document.getElementById('assignmentSubjectFilter').addEventListener('change', (e) => { assignmentFilters.subject = e.target.value; renderAssignments(); });

  document.getElementById('addExamBtn').addEventListener('click', () => openExamForm());

  document.getElementById('addAttendanceSubjectBtn').addEventListener('click', () => openAttendanceSubjectForm());

  document.getElementById('gradeScaleBtn').addEventListener('click', () => openGradeScaleModal());
  document.getElementById('addSemesterBtn').addEventListener('click', () => openSemesterForm());

  document.getElementById('addMaterialBtn').addEventListener('click', () => openMaterialForm());
  document.getElementById('materialsSearch').addEventListener('input', (e) => { materialsFilters.search = e.target.value; renderMaterials(); });
  document.getElementById('materialsSubjectFilter').addEventListener('change', (e) => { materialsFilters.subject = e.target.value; renderMaterials(); });

  document.getElementById('settingsBtn').addEventListener('click', () => openSettingsModal());

  /* Resize: re-render routine so the desktop/mobile view swap gets fresh data */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (getCurrentSection() === 'routine') renderRoutine(); }, 200);
  });
}

async function init() {
  try {
    await loadState();
  } catch (err) {
    console.error('Failed to load saved data, starting fresh.', err);
  }
  applyTheme(state.settings.theme || 'light');
  attachStaticListeners();
  navigateTo('dashboard');
  refreshSubjectsDatalist();

  const loader = document.getElementById('appLoader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 350);
  }
}

document.addEventListener('DOMContentLoaded', init);
