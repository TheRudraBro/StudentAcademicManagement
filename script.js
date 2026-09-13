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
function openModal(title, bodyHtml, opts) {
  opts = opts || {};
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
  setTimeout(() => { document.getElementById('modalBody').innerHTML = ''; }, 200);
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
   RENDERING & NAVIGATION
   ========================================================================= */

function replaceIcons(html) {
  return html.replace(/__ICON_(\w+)__/g, (m, name) => icon(name));
}

function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('section-' + sectionId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(ni => ni.classList.remove('active'));
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  document.getElementById('pageTitle').textContent = ({
    dashboard: 'Dashboard', routine: 'Class routine', assignments: 'Assignments',
    exams: 'Exam schedule', attendance: 'Attendance', cgpa: 'CGPA Calculator',
    materials: 'Course materials'
  })[sectionId] || 'Dashboard';
  if (window.innerWidth < 769) {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebarBackdrop').classList.remove('active');
  }
}

/* =========================================================================
   DASHBOARD
   ========================================================================= */

function renderDashboard() {
  // Greeting
  const greetHour = new Date().getHours();
  const greetText = greetHour < 12 ? 'Good morning' : greetHour < 18 ? 'Good afternoon' : 'Good evening';
  document.getElementById('greetingText').textContent = greetText + ', ' + (state.settings.name || 'Student');
  document.getElementById('greetingDate').textContent = formatDateFull(todayISO());

  // Stats
  const today = todayISO();
  const todayClasses = state.routine.filter(r => r.day === new Date().toLocaleDateString('en-US', { weekday: 'long' })).length;
  const pendingAssignments = state.assignments.filter(a => a.status === 'pending').length;
  const pendingExams = state.exams.filter(e => daysBetween(today, e.date) >= 0).length;

  const avgAttendance = (() => {
    if (state.attendance.subjects.length === 0) return 0;
    const total = state.attendance.subjects.reduce((sum, s) => sum + (s.percentage || 0), 0);
    return Math.round(total / state.attendance.subjects.length);
  })();

  document.getElementById('statStrip').innerHTML = replaceIcons(`
    <div class="stat-card">
      <div class="stat-label">Today's Classes</div>
      <div class="stat-value">${todayClasses}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Pending Work</div>
      <div class="stat-value">${pendingAssignments}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Upcoming Exams</div>
      <div class="stat-value">${pendingExams}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Avg Attendance</div>
      <div class="stat-value">${avgAttendance}%</div>
    </div>
  `);

  // Today's classes
  const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todaysSchedule = state.routine.filter(r => r.day === dayName).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  const todaysList = todaysSchedule.length ? todaysSchedule.map(c => `
    <div class="item">
      <div class="item-title">${esc(c.subject)}</div>
      <div class="item-meta">${formatTime12(c.startTime)} – ${formatTime12(c.endTime)} • ${esc(c.room || 'TBA')}</div>
    </div>
  `).join('') : '<div class="empty-state">No classes today</div>';
  document.getElementById('todayClassesList').innerHTML = todaysList;

  // Upcoming assignments
  const upcomingAssign = state.assignments
    .filter(a => daysBetween(today, a.dueDate) >= 0)
    .sort((a, b) => daysBetween(today, a.dueDate) - daysBetween(today, b.dueDate))
    .slice(0, 3);
  const assignList = upcomingAssign.length ? upcomingAssign.map(a => {
    const due = relativeDueLabel(a.dueDate);
    return `
      <div class="item">
        <div class="item-title">${esc(a.title)}</div>
        <div class="item-meta">${esc(a.subject)} • ${due.text}</div>
      </div>
    `;
  }).join('') : '<div class="empty-state">All caught up!</div>';
  document.getElementById('upcomingAssignmentsList').innerHTML = assignList;

  // Upcoming exams
  const upcomingExams = state.exams
    .filter(e => daysBetween(today, e.date) >= 0)
    .sort((a, b) => daysBetween(today, a.date) - daysBetween(today, b.date))
    .slice(0, 3);
  const examList = upcomingExams.length ? upcomingExams.map(e => `
    <div class="item">
      <div class="item-title">${esc(e.subject)}</div>
      <div class="item-meta">${formatDateMed(e.date)} at ${formatTime12(e.startTime || '10:00')}</div>
    </div>
  `).join('') : '<div class="empty-state">No upcoming exams</div>';
  document.getElementById('upcomingExamsList').innerHTML = examList;

  // Attendance watch
  const lowAttendance = state.attendance.subjects.filter(s => (s.percentage || 0) < (state.settings.attendanceThreshold || 75));
  const watchList = lowAttendance.length ? lowAttendance.map(s => `
    <div class="item">
      <div class="item-title">${esc(s.name)}</div>
      <div class="item-meta">${s.percentage || 0}% • Below threshold</div>
    </div>
  `).join('') : '<div class="empty-state">Great attendance!</div>';
  document.getElementById('attendanceWatchList').innerHTML = watchList;
}

/* =========================================================================
   ROUTINE
   ========================================================================= */

function renderRoutine() {
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Desktop grid view
  let gridHtml = DAYS.map(day => `<div class="day-header">${day}</div>`).join('');
  DAYS.forEach(day => {
    const dayClasses = state.routine.filter(r => r.day === day).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
    dayClasses.forEach(c => {
      gridHtml += `<div class="class-slot" data-id="${esc(c.id)}">
        <strong>${esc(c.subject)}</strong>
        <div style="font-size:0.75rem; margin-top:0.25rem;">${formatTime12(c.startTime)}</div>
        <div style="font-size:0.75rem;">${esc(c.room || 'TBA')}</div>
      </div>`;
    });
  });
  document.getElementById('routineGrid').innerHTML = gridHtml || '<div style="grid-column:1/-1;text-align:center;padding:2rem;">No classes scheduled</div>';

  // Mobile tab view
  document.getElementById('dayTabs').innerHTML = DAYS.map((d, i) => `
    <button class="day-tab ${i === 0 ? 'active' : ''}" data-day="${d}">${d.slice(0, 3)}</button>
  `).join('');
  
  const updateMobileList = (day = DAYS[0]) => {
    const dayClasses = state.routine.filter(r => r.day === day).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
    const html = dayClasses.length ? dayClasses.map(c => `
      <div class="item">
        <div class="item-title">${esc(c.subject)}</div>
        <div class="item-meta">${formatTime12(c.startTime)} – ${formatTime12(c.endTime)}</div>
        <div class="item-meta">${esc(c.room || 'Room TBA')} ${c.instructor ? '• ' + esc(c.instructor) : ''}</div>
      </div>
    `).join('') : '<div class="empty-state">No classes on ' + day + '</div>';
    document.getElementById('routineDayList').innerHTML = html;
  };
  updateMobileList();

  document.getElementById('dayTabs').querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      updateMobileList(e.target.dataset.day);
    });
  });
}

/* =========================================================================
   ASSIGNMENTS
   ========================================================================= */

function renderAssignments() {
  const statusFilter = document.getElementById('assignmentStatusFilter')?.value || 'all';
  const subjectFilter = document.getElementById('assignmentSubjectFilter')?.value || 'all';

  let filtered = state.assignments;
  if (statusFilter !== 'all') filtered = filtered.filter(a => a.status === statusFilter);
  if (subjectFilter !== 'all') filtered = filtered.filter(a => a.subject === subjectFilter);

  const grouped = {};
  filtered.forEach(a => {
    const key = a.status || 'pending';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(a);
  });

  const statusLabels = { pending: 'Pending', 'in-progress': 'In Progress', completed: 'Completed' };
  let html = '';
  Object.keys(grouped).forEach(status => {
    html += `<h3 style="margin-top:2rem;margin-bottom:1rem;">${statusLabels[status] || status}</h3>`;
    grouped[status].sort((a, b) => daysBetween(todayISO(), a.dueDate) - daysBetween(todayISO(), b.dueDate)).forEach(a => {
      const due = relativeDueLabel(a.dueDate);
      html += `
        <div class="item" style="margin-bottom:1rem;">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
            <div class="item-title">${esc(a.title)}</div>
            <button class="link-btn" style="margin:0;">Edit</button>
          </div>
          <div class="item-meta">${esc(a.subject)} • ${due.text}</div>
          ${a.description ? '<div style="margin-top:0.5rem;font-size:0.9rem;">' + esc(a.description) + '</div>' : ''}
        </div>
      `;
    });
  });

  document.getElementById('assignmentsContainer').innerHTML = html || '<div class="empty-state">No assignments</div>';
}

/* =========================================================================
   EXAMS
   ========================================================================= */

function renderExams() {
  const today = todayISO();
  const upcoming = state.exams.filter(e => daysBetween(today, e.date) >= 0).sort((a, b) => daysBetween(today, a.date) - daysBetween(today, b.date));

  if (upcoming.length > 0) {
    const next = upcoming[0];
    const daysUntil = daysBetween(today, next.date);
    document.getElementById('nextExamBanner').innerHTML = `
      <div style="background:linear-gradient(135deg, #667eea, #764ba2);color:white;padding:1.5rem;border-radius:12px;margin-bottom:2rem;">
        <div style="font-size:0.9rem;opacity:0.9;">Next Exam</div>
        <div style="font-size:1.5rem;font-weight:600;margin:0.5rem 0;">${esc(next.subject)}</div>
        <div>${formatDateFull(next.date)} • ${daysUntil === 0 ? 'Today' : daysUntil + ' days away'}</div>
      </div>
    `;
  }

  const grouped = {};
  state.exams.forEach(e => {
    const month = parseISODate(e.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    if (!grouped[month]) grouped[month] = [];
    grouped[month].push(e);
  });

  let html = '';
  Object.keys(grouped).sort().forEach(month => {
    html += `<h3 style="margin-top:1.5rem;margin-bottom:1rem;">${month}</h3>`;
    grouped[month].sort((a, b) => parseISODate(a.date) - parseISODate(b.date)).forEach(e => {
      html += `
        <div class="item">
          <div class="item-title">${esc(e.subject)}</div>
          <div class="item-meta">${formatDateMed(e.date)} • ${formatTime12(e.startTime || '10:00')} ${e.duration ? '(' + e.duration + ' hours)' : ''}</div>
          ${e.room ? '<div class="item-meta">' + esc(e.room) + '</div>' : ''}
        </div>
      `;
    });
  });

  document.getElementById('examsContainer').innerHTML = html || '<div class="empty-state">No exams scheduled</div>';
}

/* =========================================================================
   ATTENDANCE
   ========================================================================= */

function renderAttendance() {
  const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayClasses = state.routine.filter(r => r.day === dayName);

  if (todayClasses.length > 0) {
    const quickMarkHtml = todayClasses.map(c => `
      <div style="display:flex;align-items:center;gap:1rem;padding:0.75rem;background:#f8f9fa;border-radius:8px;margin-bottom:0.75rem;">
        <input type="checkbox" id="mark-${esc(c.id)}" style="width:20px;height:20px;cursor:pointer;">
        <label for="mark-${esc(c.id)}" style="flex:1;cursor:pointer;margin:0;font-weight:600;">${esc(c.subject)}</label>
        <span style="font-size:0.85rem;color:#7f8c8d;">${formatTime12(c.startTime)}</span>
      </div>
    `).join('');
    document.getElementById('quickMarkPanel').innerHTML = '<div class="dash-panel-header"><h3>Quick mark — today\'s classes</h3></div><div id="quickMarkList">' + quickMarkHtml + '</div>';
  }

  const gridHtml = state.attendance.subjects.map(s => {
    const pct = s.percentage || 0;
    const total = s.total || 0;
    const attended = s.attended || 0;
    return `
      <div class="dash-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
          <h3 style="margin:0;">${esc(s.name)}</h3>
          <button class="link-btn" style="margin:0;">Edit</button>
        </div>
        <div style="margin-bottom:1rem;">
          <div style="font-size:2rem;font-weight:700;color:#667eea;">${pct}%</div>
          <div style="font-size:0.85rem;color:#7f8c8d;">${attended} / ${total} classes</div>
        </div>
        <div style="background:#e0e6ed;height:8px;border-radius:4px;overflow:hidden;">
          <div style="background:linear-gradient(90deg,#667eea,#764ba2);height:100%;width:${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('attendanceSubjectsGrid').innerHTML = gridHtml || '<div style="grid-column:1/-1;"><div class="empty-state">No subjects added</div></div>';
}

/* =========================================================================
   CGPA
   ========================================================================= */

function renderCGPA() {
  const allGrades = [];
  let totalCredits = 0;
  let totalPoints = 0;

  state.cgpa.semesters.forEach(sem => {
    sem.courses = sem.courses || [];
    sem.courses.forEach(course => {
      const gradeData = state.cgpa.gradeScale.find(g => g.grade === course.grade);
      if (gradeData) {
        const credits = parseFloat(course.credits) || 0;
        allGrades.push({ semester: sem.name, course: course.name, grade: course.grade, point: gradeData.point });
        totalCredits += credits;
        totalPoints += gradeData.point * credits;
      }
    });
  });

  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  const summaryHtml = `
    <div class="stat-card">
      <div class="stat-label">Cumulative GPA</div>
      <div class="stat-value">${cgpa}</div>
      <div style="font-size:0.9rem;color:#7f8c8d;margin-top:0.5rem;">${state.cgpa.semesters.length} semesters • ${totalCredits} total credits</div>
    </div>
  `;
  document.getElementById('cgpaSummary').innerHTML = summaryHtml;

  const semestersHtml = state.cgpa.semesters.map(sem => {
    const semCredits = (sem.courses || []).reduce((sum, c) => sum + (parseFloat(c.credits) || 0), 0);
    const semPoints = (sem.courses || []).reduce((sum, c) => {
      const g = state.cgpa.gradeScale.find(gr => gr.grade === c.grade);
      return sum + (g ? g.point * (parseFloat(c.credits) || 0) : 0);
    }, 0);
    const sgpa = semCredits > 0 ? (semPoints / semCredits).toFixed(2) : 0;

    const coursesHtml = (sem.courses || []).map(c => `
      <div style="display:grid;grid-template-columns:1fr auto auto;gap:1rem;padding:0.75rem;background:#f8f9fa;border-radius:8px;align-items:center;">
        <div>
          <div style="font-weight:600;">${esc(c.name)}</div>
          <div style="font-size:0.85rem;color:#7f8c8d;">${c.credits} credits</div>
        </div>
        <div style="text-align:center;">
          <div style="font-weight:600;font-size:1.1rem;">${c.grade}</div>
        </div>
        <button class="link-btn" style="margin:0;">×</button>
      </div>
    `).join('');

    return `
      <div class="dash-panel" style="margin-top:1.5rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
          <div>
            <h3 style="margin:0;">${esc(sem.name)}</h3>
            <div style="font-size:0.9rem;color:#7f8c8d;">SGPA: <strong>${sgpa}</strong></div>
          </div>
          <button class="link-btn" style="margin:0;">Edit</button>
        </div>
        ${coursesHtml}
      </div>
    `;
  }).join('');

  document.getElementById('semestersContainer').innerHTML = semestersHtml || '<div class="empty-state">No semesters added</div>';
}

/* =========================================================================
   MATERIALS
   ========================================================================= */

function renderMaterials() {
  const searchQuery = (document.getElementById('materialsSearch')?.value || '').toLowerCase();
  const subjectFilter = document.getElementById('materialsSubjectFilter')?.value || 'all';

  let filtered = state.materials;
  if (searchQuery) {
    filtered = filtered.filter(m =>
      m.title.toLowerCase().includes(searchQuery) ||
      m.subject.toLowerCase().includes(searchQuery)
    );
  }
  if (subjectFilter !== 'all') filtered = filtered.filter(m => m.subject === subjectFilter);

  const html = filtered.map(m => `
    <div class="dash-panel" style="display:flex;flex-direction:column;">
      <h4 style="margin:0 0 0.5rem 0;">${esc(m.title)}</h4>
      <div style="font-size:0.85rem;color:#7f8c8d;margin-bottom:0.75rem;">${esc(m.subject)}</div>
      ${m.description ? '<p style="margin:0 0 1rem 0;font-size:0.95rem;">' + esc(m.description) + '</p>' : ''}
      ${m.url ? '<a href="' + esc(m.url) + '" target="_blank" rel="noopener" style="color:#3498db;text-decoration:none;font-weight:600;">Open Resource →</a>' : ''}
    </div>
  `).join('');

  document.getElementById('materialsContainer').innerHTML = html || '<div class="empty-state">No materials found</div>';
}

/* =========================================================================
   SETTINGS & THEME
   ========================================================================= */

function applyTheme() {
  if (state.settings.theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function renderSettings() {
  openModal('Settings', `
    <form id="settingsForm">
      <div class="form-group">
        <label for="settingsName">Your Name</label>
        <input type="text" id="settingsName" value="${esc(state.settings.name)}">
      </div>
      <div class="form-group">
        <label for="settingsInstitution">Institution</label>
        <input type="text" id="settingsInstitution" value="${esc(state.settings.institution)}">
      </div>
      <div class="form-group">
        <label for="settingsDepartment">Department</label>
        <input type="text" id="settingsDepartment" value="${esc(state.settings.department)}">
      </div>
      <div class="form-group">
        <label for="settingsThreshold">Attendance Threshold (%)</label>
        <input type="number" id="settingsThreshold" min="0" max="100" value="${state.settings.attendanceThreshold}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="settingsCancelBtn">Cancel</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  `, { noFocus: true });

  const form = document.getElementById('settingsForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    state.settings.name = document.getElementById('settingsName').value.trim();
    state.settings.institution = document.getElementById('settingsInstitution').value.trim();
    state.settings.department = document.getElementById('settingsDepartment').value.trim();
    state.settings.attendanceThreshold = parseInt(document.getElementById('settingsThreshold').value) || 75;
    await DB.set('settings', state.settings);
    closeModal();
    renderDashboard();
    showToast('Settings saved');
  });
  document.getElementById('settingsCancelBtn').addEventListener('click', closeModal);
}

/* =========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================= */

async function initApp() {
  // Load persisted state
  state.settings = await DB.get('settings', defaultSettings());
  state.routine = await DB.get('routine', []);
  state.assignments = await DB.get('assignments', []);
  state.exams = await DB.get('exams', []);
  state.attendance = await DB.get('attendance', { subjects: [], records: [] });
  state.cgpa = await DB.get('cgpa', { gradeScale: defaultGradeScale(), semesters: [] });
  state.materials = await DB.get('materials', []);

  applyTheme();
  refreshSubjectsDatalist();

  // Update subjects filters
  const subjects = getAllKnownSubjects();
  ['assignmentSubjectFilter', 'materialsSubjectFilter'].forEach(id => {
    const select = document.getElementById(id);
    if (select) {
      select.innerHTML = '<option value="all">All subjects</option>' + subjects.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join('');
    }
  });

  renderDashboard();
  renderRoutine();
  renderAssignments();
  renderExams();
  renderAttendance();
  renderCGPA();
  renderMaterials();

  // Navigation
  document.querySelectorAll('[data-section]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
  });

  // Sidebar toggle
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebarBackdrop').classList.toggle('active');
  });
  document.getElementById('sidebarCloseBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebarBackdrop').classList.remove('active');
  });
  document.getElementById('sidebarBackdrop').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebarBackdrop').classList.remove('active');
  });

  // Theme toggle
  const toggleTheme = () => {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    DB.set('settings', state.settings);
    applyTheme();
    document.getElementById('themeToggleLabel').textContent = state.settings.theme === 'dark' ? 'Light mode' : 'Dark mode';
  };
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  document.getElementById('themeToggleTop').addEventListener('click', toggleTheme);

  // Settings
  document.getElementById('settingsBtn').addEventListener('click', renderSettings);

  // Modal close
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Sample data buttons (for demo)
  document.getElementById('addRoutineBtn').addEventListener('click', () => {
    openModal('Add Class', `
      <form id="routineForm">
        <div class="form-group">
          <label for="routineSubject">Subject</label>
          <input type="text" id="routineSubject" list="subjectsDatalist" required>
        </div>
        <div class="form-group">
          <label for="routineDay">Day</label>
          <select id="routineDay" required>
            <option>Monday</option><option>Tuesday</option><option>Wednesday</option>
            <option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
          </select>
        </div>
        <div class="form-group">
          <label for="routineStart">Start Time</label>
          <input type="time" id="routineStart" required>
        </div>
        <div class="form-group">
          <label for="routineEnd">End Time</label>
          <input type="time" id="routineEnd" required>
        </div>
        <div class="form-group">
          <label for="routineRoom">Room/Location</label>
          <input type="text" id="routineRoom">
        </div>
        <div class="form-group">
          <label for="routineInstructor">Instructor</label>
          <input type="text" id="routineInstructor">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Class</button>
        </div>
      </form>
    `);
    document.getElementById('routineForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      state.routine.push({
        id: uid(), subject: document.getElementById('routineSubject').value,
        day: document.getElementById('routineDay').value,
        startTime: document.getElementById('routineStart').value,
        endTime: document.getElementById('routineEnd').value,
        room: document.getElementById('routineRoom').value,
        instructor: document.getElementById('routineInstructor').value,
      });
      await DB.set('routine', state.routine);
      closeModal();
      renderRoutine();
      renderDashboard();
      refreshSubjectsDatalist();
      showToast('Class added');
    });
  });

  document.getElementById('addAssignmentBtn').addEventListener('click', () => {
    openModal('Add Assignment', `
      <form id="assignmentForm">
        <div class="form-group">
          <label for="assignTitle">Title</label>
          <input type="text" id="assignTitle" required>
        </div>
        <div class="form-group">
          <label for="assignSubject">Subject</label>
          <input type="text" id="assignSubject" list="subjectsDatalist" required>
        </div>
        <div class="form-group">
          <label for="assignDue">Due Date</label>
          <input type="date" id="assignDue" required>
        </div>
        <div class="form-group">
          <label for="assignStatus">Status</label>
          <select id="assignStatus">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div class="form-group">
          <label for="assignDescription">Description</label>
          <textarea id="assignDescription" rows="3"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Assignment</button>
        </div>
      </form>
    `);
    document.getElementById('assignmentForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      state.assignments.push({
        id: uid(), title: document.getElementById('assignTitle').value,
        subject: document.getElementById('assignSubject').value,
        dueDate: document.getElementById('assignDue').value,
        status: document.getElementById('assignStatus').value,
        description: document.getElementById('assignDescription').value,
      });
      await DB.set('assignments', state.assignments);
      closeModal();
      renderAssignments();
      renderDashboard();
      refreshSubjectsDatalist();
      showToast('Assignment added');
    });
  });

  document.getElementById('addExamBtn').addEventListener('click', () => {
    openModal('Add Exam', `
      <form id="examForm">
        <div class="form-group">
          <label for="examSubject">Subject</label>
          <input type="text" id="examSubject" list="subjectsDatalist" required>
        </div>
        <div class="form-group">
          <label for="examDate">Date</label>
          <input type="date" id="examDate" required>
        </div>
        <div class="form-group">
          <label for="examStart">Start Time</label>
          <input type="time" id="examStart">
        </div>
        <div class="form-group">
          <label for="examDuration">Duration (hours)</label>
          <input type="number" id="examDuration" min="1" step="0.5">
        </div>
        <div class="form-group">
          <label for="examRoom">Room/Location</label>
          <input type="text" id="examRoom">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Exam</button>
        </div>
      </form>
    `);
    document.getElementById('examForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      state.exams.push({
        id: uid(), subject: document.getElementById('examSubject').value,
        date: document.getElementById('examDate').value,
        startTime: document.getElementById('examStart').value,
        duration: document.getElementById('examDuration').value,
        room: document.getElementById('examRoom').value,
      });
      await DB.set('exams', state.exams);
      closeModal();
      renderExams();
      renderDashboard();
      refreshSubjectsDatalist();
      showToast('Exam added');
    });
  });

  document.getElementById('addAttendanceSubjectBtn').addEventListener('click', () => {
    openModal('Add Subject', `
      <form id="attendanceForm">
        <div class="form-group">
          <label for="attendSubject">Subject</label>
          <input type="text" id="attendSubject" list="subjectsDatalist" required>
        </div>
        <div class="form-group">
          <label for="attendTotal">Total Classes</label>
          <input type="number" id="attendTotal" min="1" required>
        </div>
        <div class="form-group">
          <label for="attendAttended">Classes Attended</label>
          <input type="number" id="attendAttended" min="0" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Subject</button>
        </div>
      </form>
    `);
    document.getElementById('attendanceForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const total = parseInt(document.getElementById('attendTotal').value) || 0;
      const attended = parseInt(document.getElementById('attendAttended').value) || 0;
      state.attendance.subjects.push({
        id: uid(), name: document.getElementById('attendSubject').value,
        total, attended, percentage: total > 0 ? Math.round((attended / total) * 100) : 0,
      });
      await DB.set('attendance', state.attendance);
      closeModal();
      renderAttendance();
      renderDashboard();
      refreshSubjectsDatalist();
      showToast('Subject added');
    });
  });

  document.getElementById('addSemesterBtn').addEventListener('click', () => {
    openModal('Add Semester', `
      <form id="semesterForm">
        <div class="form-group">
          <label for="semName">Semester Name</label>
          <input type="text" id="semName" placeholder="e.g., Fall 2024" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Semester</button>
        </div>
      </form>
    `);
    document.getElementById('semesterForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      state.cgpa.semesters.push({ id: uid(), name: document.getElementById('semName').value, courses: [] });
      await DB.set('cgpa', state.cgpa);
      closeModal();
      renderCGPA();
      showToast('Semester added');
    });
  });

  document.getElementById('addMaterialBtn').addEventListener('click', () => {
    openModal('Add Material', `
      <form id="materialForm">
        <div class="form-group">
          <label for="matTitle">Title</label>
          <input type="text" id="matTitle" required>
        </div>
        <div class="form-group">
          <label for="matSubject">Subject</label>
          <input type="text" id="matSubject" list="subjectsDatalist" required>
        </div>
        <div class="form-group">
          <label for="matDescription">Description</label>
          <textarea id="matDescription" rows="2"></textarea>
        </div>
        <div class="form-group">
          <label for="matUrl">URL (optional)</label>
          <input type="url" id="matUrl">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Material</button>
        </div>
      </form>
    `);
    document.getElementById('materialForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      state.materials.push({
        id: uid(), title: document.getElementById('matTitle').value,
        subject: document.getElementById('matSubject').value,
        description: document.getElementById('matDescription').value,
        url: document.getElementById('matUrl').value,
      });
      await DB.set('materials', state.materials);
      closeModal();
      renderMaterials();
      refreshSubjectsDatalist();
      showToast('Material added');
    });
  });

  // Search & filter handlers
  document.getElementById('materialsSearch')?.addEventListener('input', renderMaterials);
  document.getElementById('materialsSubjectFilter')?.addEventListener('change', renderMaterials);
  document.getElementById('assignmentStatusFilter')?.addEventListener('change', renderAssignments);
  document.getElementById('assignmentSubjectFilter')?.addEventListener('change', renderAssignments);

  // Hide loader
  document.getElementById('appLoader').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', initApp);
