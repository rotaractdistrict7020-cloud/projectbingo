/* ═══════════════════════════════════════════════════════════════
   Electric Boogaloo Project Bingo 2025 — District 7020
   Application Script
   ═══════════════════════════════════════════════════════════════ */

// ── TRANSLATIONS ───────────────────────────────────────────────────────────
const T = {
  en: {
    date: "As of April 15, 2026",
    clubsCompeting: n => `${n} clubs competing`,
    leaderboard: "🏆 Leaderboard",
    gridBtn: "🎯 Bingo Grid",
    progressBtn: "📋 Task Progress",
    gridTasksComplete: n => `${n} / 25 Grid Tasks`,
    submissions: n => `${n} Submissions`,
    bingoBadge: n => `🎉 ${n} BINGO${n > 1 ? "S" : ""}`,
    bingoHeader: n => `🎉 BINGO${n > 1 ? "S" : ""} ACHIEVED — ${n} winning line${n > 1 ? "s" : ""}!`,
    bingoLineLabel: type => BINGO_LINE_LABELS.en[type] || type,
    doneTitle: n => `✅ Completed Grid Tasks (${n}/25)`,
    outTitle: n => `⏳ Outstanding Grid Tasks (${n}/25)`,
    noTasksYet: "No grid tasks completed yet.",
    allDone: "🎉 All grid tasks complete!",
    extraLabel: "Additional Submissions (not on grid)",
    legendLine: "Completed (Bingo Line)",
    legendDone: "Completed",
    legendPending: "Not Yet Completed",
  },
  fr: {
    date: "Au 15 avril 2026",
    clubsCompeting: n => `${n} clubs en compétition`,
    leaderboard: "🏆 Classement",
    gridBtn: "🎯 Grille Bingo",
    progressBtn: "📋 Avancement des Tâches",
    gridTasksComplete: n => `${n} / 25 Tâches`,
    submissions: n => `${n} Soumissions`,
    bingoBadge: n => `🎉 ${n} BINGO${n > 1 ? "S" : ""}`,
    bingoHeader: n => `🎉 BINGO${n > 1 ? "S" : ""} OBTENUS — ${n} ligne${n > 1 ? "s" : ""} gagnante${n > 1 ? "s" : ""}!`,
    bingoLineLabel: type => BINGO_LINE_LABELS.fr[type] || type,
    doneTitle: n => `✅ Tâches Complétées (${n}/25)`,
    outTitle: n => `⏳ Tâches en Attente (${n}/25)`,
    noTasksYet: "Aucune tâche de grille complétée pour l'instant.",
    allDone: "🎉 Toutes les tâches de grille sont complètes !",
    extraLabel: "Soumissions Supplémentaires (hors grille)",
    legendLine: "Complétée (Ligne Bingo)",
    legendDone: "Complétée",
    legendPending: "Pas encore complétée",
  }
};

const BINGO_LINE_LABELS = {
  en: {
    "row-0": "Row 1",    "row-1": "Row 2",    "row-2": "Row 3",    "row-3": "Row 4",    "row-4": "Row 5",
    "col-0": "Column B", "col-1": "Column I", "col-2": "Column N", "col-3": "Column G", "col-4": "Column O",
    "diag-tl": "Diagonal ↘", "diag-tr": "Diagonal ↙"
  },
  fr: {
    "row-0": "Ligne 1",    "row-1": "Ligne 2",    "row-2": "Ligne 3",    "row-3": "Ligne 4",    "row-4": "Ligne 5",
    "col-0": "Colonne B",  "col-1": "Colonne I",  "col-2": "Colonne N",  "col-3": "Colonne G",  "col-4": "Colonne O",
    "diag-tl": "Diagonale ↘", "diag-tr": "Diagonale ↙"
  }
};

// ── BINGO GRID DEFINITION ──────────────────────────────────────────────────
const BINGO_GRID = [
  // Row 1
  [
    { col: "B", row: 1, category: { en: "International Service",            fr: "Service International" },           task: { en: "#MyIslandCampaign",              fr: "#MyIslandCampaign" } },
    { col: "I", row: 1, category: { en: "Wellness",                         fr: "Bien-être" },                       task: { en: "Step It Up Challenge",           fr: "Défi Step It Up" } },
    { col: "N", row: 1, category: { en: "Environmental Sustainability",     fr: "Durabilité Environnementale" },     task: { en: "Environmental Clean Up",         fr: "Nettoyage Environnemental" } },
    { col: "G", row: 1, category: { en: "Public Image",                     fr: "Image Publique" },                  task: { en: "Rotary Zones 33/34 EPIC Award",  fr: "Prix EPIC Zones Rotary 33/34" } },
    { col: "O", row: 1, category: { en: "Membership",                       fr: "Adhésion" },                        task: { en: "MAP Attendance",                 fr: "Participation au MAP" } },
  ],
  // Row 2
  [
    { col: "B", row: 2, category: { en: "Diversity, Equity, and Inclusion", fr: "Diversité, Équité et Inclusion" },  task: { en: "DEI Campaign",                   fr: "Campagne DEI" } },
    { col: "I", row: 2, category: { en: "Learning and Development",         fr: "Apprentissage et Développement" },  task: { en: "Course? Correct!",               fr: "Cours ? Correct !" } },
    { col: "N", row: 2, category: { en: "International Service",            fr: "Service International" },           task: { en: "Friends in Service Initiative",  fr: "Initiative d'Amis en Service" } },
    { col: "G", row: 2, category: { en: "Conference",                       fr: "Conférence" },                      task: { en: "Conference Registration",        fr: "Inscription à la Conférence" } },
    { col: "O", row: 2, category: { en: "Wellness",                         fr: "Bien-être" },                       task: { en: "Corporate Wellness Partnership", fr: "Partenariat Bien-être Entreprise" } },
  ],
  // Row 3
  [
    { col: "B", row: 3, category: { en: "Environmental Sustainability",     fr: "Durabilité Environnementale" },     task: { en: "Take Back Tuesday",              fr: "Mardi Reprise" } },
    { col: "I", row: 3, category: { en: "Public Image",                     fr: "Image Publique" },                  task: { en: "Public Image Webinars",          fr: "Webinaires d'Image Publique" } },
    { col: "N", row: 3, category: { en: "Membership",                       fr: "Adhésion" },                        task: { en: "neXus Membership Amplifier",     fr: "Amplificateur d'Adhésion neXus" } },
    { col: "G", row: 3, category: { en: "Club Administration",              fr: "Administration du Club" },          task: { en: "Service Project Center",         fr: "Centre de Projets de Service" } },
    { col: "O", row: 3, category: { en: "International Service",            fr: "Service International" },           task: { en: "12 Days of Kindness",            fr: "12 Jours de Gentillesse" } },
  ],
  // Row 4
  [
    { col: "B", row: 4, category: { en: "Fundraising",                      fr: "Collecte de Fonds" },               task: { en: "District Fundraising",           fr: "Collecte de Fonds du District" } },
    { col: "I", row: 4, category: { en: "Membership",                       fr: "Adhésion" },                        task: { en: "Camaraderie!",                   fr: "Camaraderie !" } },
    { col: "N", row: 4, category: { en: "Club Administration",              fr: "Administration du Club" },          task: { en: "Planning Meetings",              fr: "Réunions de Planification" } },
    { col: "G", row: 4, category: { en: "Wellness",                         fr: "Bien-être" },                       task: { en: "Club Self-Care",                 fr: "Bien-être au sein du Club" } },
    { col: "O", row: 4, category: { en: "Disaster Response",                fr: "Réponse aux Catastrophes" },        task: { en: "Sustainability Week",            fr: "Semaine de Durabilité" } },
  ],
  // Row 5
  [
    { col: "B", row: 5, category: { en: "Rotary Foundation",                fr: "Fondation Rotary" },                task: { en: "Grant Application",              fr: "Demande de Subvention" } },
    { col: "I", row: 5, category: { en: "Foundation and Disaster Risk Management", fr: "Fondation et Gestion des Risques" }, task: { en: "The #TRF Donation",       fr: "Le Don #TRF" } },
    { col: "N", row: 5, category: { en: "Disaster Risk Management",         fr: "Gestion des Risques de Catastrophe" }, task: { en: "Emergency Response Training", fr: "Formation à la Réponse d'Urgence" } },
    { col: "G", row: 5, category: { en: "Public Image",                     fr: "Image Publique" },                  task: { en: "ROAR",                           fr: "RUGIR" } },
    { col: "O", row: 5, category: { en: "Membership",                       fr: "Adhésion" },                        task: { en: "Family of Rotary",               fr: "Famille du Rotary" } },
  ],
];

const ALL_CELLS = BINGO_GRID.flat();

// ── SUBMISSION DATA (April 15, 2026) ───────────────────────────────────────
const SUBMISSION_DATA = {
  "Rotaract Club of Grand Turk":                         ["#MyIslandCampaign","12 Days of Kindness","Camaraderie!","Club Self-Care","Conference Registration","Corporate Wellness Partnership","Course? Correct!","DEI Campaign","District Fundraising","Emergency Response Training","Environmental Clean Up","Family of Rotary","Friends in Service Initiative","Grant Application","MAP Attendance","Planning Meetings","Public Image Webinars","ROAR","Rotary Zones 33/34 EPIC Award","Service Project Center","Step It Up Challenge","Sustainability Week","Take Back Tuesday","The #TRF Donation","neXus Membership Amplifier"],
  "South East Nassau Centennial":                        ["#MyIslandCampaign","12 Days of Kindness","Camaraderie!","Club Self-Care","Conference Registration","Corporate Wellness Partnership","Course? Correct!","DEI Campaign","District Fundraising","Environmental Clean Up","Family of Rotary","Friends in Service Initiative","Grant Application","MAP Attendance","Planning Meetings","Public Image Webinars","Rotary Zones 33/34 EPIC Award","Service Project Center","Step It Up Challenge","Sustainability Week","Take Back Tuesday","The #TRF Donation"],
  "Rotaract Club of Mandeville":                         ["#MyIslandCampaign","12 Days of Kindness","Camaraderie!","Club Self-Care","Conference Registration","Corporate Wellness Partnership","Course? Correct!","DEI Campaign","Environmental Clean Up","Family of Rotary","Friends in Service Initiative","Grant Application","MAP Attendance","ROAR","Rotary Zones 33/34 EPIC Award","Step It Up Challenge","Take Back Tuesday","The #TRF Donation","neXus Membership Amplifier"],
  "Rotaract Club of New Kingston":                       ["#MyIslandCampaign","12 Days of Kindness","Camaraderie!","DEI Campaign","District Fundraising","Emergency Response Training","Environmental Clean Up","Family of Rotary","Friends in Service Initiative","Grant Application","Planning Meetings","Rotary Zones 33/34 EPIC Award","Service Project Center","Step It Up Challenge","Take Back Tuesday","The #TRF Donation"],
  "Rotaract Club of Nassau Sunset":                      ["#MyIslandCampaign","12 Days of Kindness","Club Self-Care","Conference Registration","Corporate Wellness Partnership","District Fundraising","Environmental Clean Up","Family of Rotary","Friends in Service Initiative","Grant Application","MAP Attendance","Rotary Zones 33/34 EPIC Award","Service Project Center","Step It Up Challenge","Sustainability Week","Take Back Tuesday","The #TRF Donation"],
  "Rotaract Club Port-au-Prince Champ de Mars":          ["#MyIslandCampaign","12 Days of Kindness","Club Self-Care","DEI Campaign","Environmental Clean Up","Friends in Service Initiative","Grant Application","MAP Attendance","Take Back Tuesday"],
  "Rotaract Club of Kingston":                           ["#MyIslandCampaign","12 Days of Kindness","Environmental Clean Up","Friends in Service Initiative","The #TRF Donation"],
  "Rotaract Club du Cap-Haïtien":                        ["Club Self-Care","Corporate Wellness Partnership","Friends in Service Initiative","Step It Up Challenge"],
  "Rotaract Club de Delmas":                             ["Friends in Service Initiative","MAP Attendance","Public Image Webinars"],
  "Rotaract Club Mémorial des Gonaïves":                 ["Family of Rotary","Friends in Service Initiative"],
  "Rotaract Club of East Nassau":                        ["Club Self-Care","Environmental Clean Up"],
  "Rotaract Club de Pignon":                             ["Club Self-Care"],
  "Rotaract Club of Liguanea Plains":                    ["Grant Application"],
  "Rotaract Club Providenciales":                        ["Grant Application"],
  "Rotaract E-Club Haiti Global":                        ["Friends in Service Initiative"],
  "Rotaract Club of Church Teachers' College Mandeville": ["Step It Up Challenge"],
};

// ── CATEGORY COLOURS ───────────────────────────────────────────────────────
const CAT_COLORS = {
  "International Service":                  "#e8425a",
  "Wellness":                               "#4CAF8C",
  "Environmental Sustainability":           "#56A060",
  "Public Image":                           "#3B82F6",
  "Membership":                             "#8B5CF6",
  "Diversity, Equity, and Inclusion":       "#F59E0B",
  "Learning and Development":               "#06B6D4",
  "Conference":                             "#6366F1",
  "Fundraising":                            "#EC4899",
  "Club Administration":                    "#64748B",
  "Disaster Response":                      "#EF4444",
  "Rotary Foundation":                      "#0EA5E9",
  "Foundation and Disaster Risk Management":"#0EA5E9",
  "Disaster Risk Management":               "#EF4444",
};

// ── STATE ──────────────────────────────────────────────────────────────────
let lang         = "en";
let selectedClub = Object.keys(SUBMISSION_DATA)[0];
let currentView  = "grid";

// ── HELPERS ────────────────────────────────────────────────────────────────
function tFn(key)             { return T[lang][key]; }
function getCatColor(enCat)   { return CAT_COLORS[enCat] || "#9CA3AF"; }
function cellTaskEn(cell)     { return cell.task.en; }
function cellTaskDisplay(cell){ return cell.task[lang]; }
function cellCatDisplay(cell) { return cell.category[lang]; }

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function shortName(name) {
  return name
    .replace("Rotaract Club of ", "RC ")
    .replace("Rotaract Club ",    "RC ")
    .replace("Rotaract ",         "")
    .replace("South East Nassau Centennial", "SE Nassau Centennial");
}

function getCompleted(club) {
  return new Set(SUBMISSION_DATA[club] || []);
}

function checkBingo(completedSet) {
  const ok    = cell => completedSet.has(cellTaskEn(cell));
  const lines = [];
  for (let r = 0; r < 5; r++) if (BINGO_GRID[r].every(ok))              lines.push(`row-${r}`);
  for (let c = 0; c < 5; c++) if (BINGO_GRID.every(row => ok(row[c])))  lines.push(`col-${c}`);
  if ([0,1,2,3,4].every(i => ok(BINGO_GRID[i][i])))                     lines.push("diag-tl");
  if ([0,1,2,3,4].every(i => ok(BINGO_GRID[i][4-i])))                   lines.push("diag-tr");
  return lines;
}

function isBingoCell(cell, bingoLines) {
  const colIdx = ["B","I","N","G","O"].indexOf(cell.col);
  const r      = cell.row - 1;
  if (bingoLines.includes(`row-${r}`))                          return true;
  if (bingoLines.includes(`col-${colIdx}`))                     return true;
  if (bingoLines.includes("diag-tl") && colIdx === r)           return true;
  if (bingoLines.includes("diag-tr") && colIdx === 4 - r)       return true;
  return false;
}

function getLeaderboard() {
  return Object.entries(SUBMISSION_DATA)
    .map(([club, tasks]) => {
      const completed  = new Set(tasks);
      const bingoLines = checkBingo(completed);
      const gridMatches = ALL_CELLS.filter(c => completed.has(cellTaskEn(c))).length;
      return { club, gridMatches, bingoLines };
    })
    .sort((a, b) => b.gridMatches - a.gridMatches || b.bingoLines.length - a.bingoLines.length);
}

// ── RENDER FUNCTIONS ───────────────────────────────────────────────────────
function renderStatic() {
  document.getElementById("txt-date").textContent        = tFn("date");
  document.getElementById("txt-leaderboard").textContent = tFn("leaderboard");
  document.getElementById("btn-grid").textContent        = tFn("gridBtn");
  document.getElementById("btn-progress").textContent    = tFn("progressBtn");
  document.getElementById("club-count").textContent      = T[lang].clubsCompeting(Object.keys(SUBMISSION_DATA).length);
  renderLegend();
}

function renderLegend() {
  document.getElementById("bingo-legend").innerHTML = `
    <div class="legend-item"><div class="legend-swatch" style="background:#FFD700;border:2px solid #FFD700;"></div>${tFn("legendLine")}</div>
    <div class="legend-item"><div class="legend-swatch" style="background:#4CAF8C;border:2px solid #4CAF8C;"></div>${tFn("legendDone")}</div>
    <div class="legend-item"><div class="legend-swatch" style="background:transparent;border:2px solid #334155;"></div>${tFn("legendPending")}</div>
  `;
}

function renderLeaderboard() {
  const lb   = getLeaderboard();
  const list = document.getElementById("leaderboard-list");
  list.innerHTML = "";

  lb.forEach(({ club, gridMatches, bingoLines }, idx) => {
    const div       = document.createElement("div");
    div.className   = "club-item" + (club === selectedClub ? " active" : "");
    div.onclick     = () => selectClub(club);
    const rankClass = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "rank-other";
    const pct       = (gridMatches / 25) * 100;
    const bingoPill = bingoLines.length > 0
      ? `<div class="bingo-pills"><div class="bingo-pill">🎉 ${bingoLines.length} BINGO${bingoLines.length > 1 ? "S" : ""}</div></div>`
      : "";

    div.innerHTML = `
      <div class="rank-badge ${rankClass}">${idx + 1}</div>
      <div class="club-info">
        <div class="club-name-row">
          <div class="club-name-text">${shortName(club)}</div>
        </div>
        ${bingoPill}
        <div class="progress-bar-wrap">
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
          <div class="progress-count">${gridMatches}/25</div>
        </div>
      </div>`;
    list.appendChild(div);
  });
}

function renderClubHeader() {
  const completed   = getCompleted(selectedClub);
  const bingoLines  = checkBingo(completed);
  const gridMatches = ALL_CELLS.filter(c => completed.has(cellTaskEn(c))).length;

  document.getElementById("selected-club-name").textContent = selectedClub;

  const bingoChip = bingoLines.length > 0
    ? `<div class="chip" style="background:rgba(255,215,0,0.13);border:1px solid rgba(255,215,0,0.4);color:#FFD700;font-weight:700;">${T[lang].bingoBadge(bingoLines.length)}</div>`
    : "";

  document.getElementById("club-chips").innerHTML = `
    <div class="chip" style="background:rgba(232,66,90,0.13);border:1px solid rgba(232,66,90,0.33);">${T[lang].gridTasksComplete(gridMatches)}</div>
    <div class="chip" style="background:rgba(76,175,140,0.13);border:1px solid rgba(76,175,140,0.33);">${T[lang].submissions(completed.size)}</div>
    ${bingoChip}
  `;

  const banner = document.getElementById("bingo-banner");
  if (bingoLines.length > 0) {
    const lineTags = bingoLines
      .map(l => `<span class="bingo-line-tag">${T[lang].bingoLineLabel(l)}</span>`)
      .join("");
    banner.style.display = "block";
    banner.innerHTML = `
      <div style="font-size:15px;">${T[lang].bingoHeader(bingoLines.length)}</div>
      <div class="bingo-lines-detail">${lineTags}</div>
    `;
  } else {
    banner.style.display = "none";
  }
}

function renderGrid() {
  const completed  = getCompleted(selectedClub);
  const bingoLines = checkBingo(completed);
  const grid       = document.getElementById("bingo-grid");
  grid.innerHTML   = "";

  ALL_CELLS.forEach(cell => {
    const isDone  = completed.has(cellTaskEn(cell));
    const isLine  = isDone && isBingoCell(cell, bingoLines);
    const catColor = getCatColor(cell.category.en);
    const dispCat  = cellCatDisplay(cell);
    const shortCat = dispCat.length > 20 ? dispCat.substring(0, 19) + "…" : dispCat;

    const div       = document.createElement("div");
    div.className   = "bingo-cell" + (isLine ? " bingo-line-cell" : "");

    let bg, border, shadow;
    if (isLine) {
      bg     = "linear-gradient(135deg, rgba(255,215,0,0.18), rgba(255,140,0,0.1))";
      border = "2px solid rgba(255,215,0,0.7)";
      shadow = "0 0 20px rgba(255,215,0,0.35)";
    } else if (isDone) {
      bg     = hexToRgba(catColor, 0.1);
      border = `2px solid ${hexToRgba(catColor, 0.45)}`;
      shadow = `0 0 8px ${hexToRgba(catColor, 0.15)}`;
    } else {
      bg     = "rgba(255,255,255,0.03)";
      border = "2px solid rgba(255,255,255,0.07)";
      shadow = "none";
    }
    div.style.cssText = `background:${bg};border:${border};box-shadow:${shadow};`;

    const checkColor     = isLine  ? "#FFD700" : isDone ? catColor : "rgba(255,255,255,0.08)";
    const checkText      = isLine  ? "★"       : isDone ? "✓"      : "";
    const checkTextColor = isLine  ? "#000"    : isDone ? "#fff"   : "transparent";

    div.innerHTML = `
      <div class="cell-check" style="background:${checkColor};color:${checkTextColor};font-size:${isLine ? "8px" : "9px"};">${checkText}</div>
      <div class="cell-category" style="color:${isLine ? "#FFD700" : catColor};">${shortCat}</div>
      <div class="cell-task" style="color:${isDone ? "#f0f4f8" : "#94a3b8"};font-weight:${isDone ? "600" : "normal"};">${cellTaskDisplay(cell)}</div>
    `;
    grid.appendChild(div);
  });
}

function renderProgress() {
  const completed      = getCompleted(selectedClub);
  const bingoLines     = checkBingo(completed);
  const allTasks       = ALL_CELLS.map(c => ({
    ...c,
    done:   completed.has(cellTaskEn(c)),
    isLine: completed.has(cellTaskEn(c)) && isBingoCell(c, bingoLines),
  }));
  const doneTasks      = allTasks.filter(t => t.done);
  const outstanding    = allTasks.filter(t => !t.done);
  const gridTaskNamesEn = new Set(ALL_CELLS.map(c => cellTaskEn(c)));
  const extraTasks     = (SUBMISSION_DATA[selectedClub] || []).filter(t => !gridTaskNamesEn.has(t));

  document.getElementById("prog-done-title").textContent = T[lang].doneTitle(doneTasks.length);
  document.getElementById("prog-out-title").textContent  = T[lang].outTitle(outstanding.length);

  const doneEl        = document.getElementById("done-tasks");
  doneEl.innerHTML    = "";
  if (doneTasks.length === 0) {
    doneEl.innerHTML = `<div class="empty-state">${tFn("noTasksYet")}</div>`;
  } else {
    doneTasks.forEach(cell => doneEl.appendChild(makeTaskCard(cell, true)));
  }
  if (extraTasks.length > 0) {
    const lbl       = document.createElement("div");
    lbl.className   = "extra-label";
    lbl.textContent = tFn("extraLabel");
    doneEl.appendChild(lbl);
    extraTasks.forEach(t => {
      const d       = document.createElement("div");
      d.className   = "extra-task";
      d.textContent = t;
      doneEl.appendChild(d);
    });
  }

  const outEl      = document.getElementById("outstanding-tasks");
  outEl.innerHTML  = "";
  if (outstanding.length === 0) {
    outEl.innerHTML = `<div class="empty-state">${tFn("allDone")}</div>`;
  } else {
    outstanding.forEach(cell => outEl.appendChild(makeTaskCard(cell, false)));
  }
}

function makeTaskCard(cell, done) {
  const catColor = getCatColor(cell.category.en);
  const isLine   = done && cell.isLine;
  const div      = document.createElement("div");
  div.className  = "task-card";

  if (isLine) {
    div.style.background  = "rgba(255,215,0,0.07)";
    div.style.borderColor = "rgba(255,215,0,0.3)";
  } else if (done) {
    div.style.background  = hexToRgba(catColor, 0.07);
    div.style.borderColor = hexToRgba(catColor, 0.27);
  }

  const starBadge = isLine ? `<span class="task-bingo-star" title="Part of a BINGO line!">⭐</span>` : "";
  div.innerHTML = `
    <div class="task-bar" style="background:${isLine ? "#FFD700" : catColor};"></div>
    <div style="flex:1;overflow:hidden;">
      <div class="task-name" style="color:${done ? "#f0f4f8" : "#94a3b8"};">${cellTaskDisplay(cell)}${starBadge}</div>
      <div class="task-meta" style="color:${isLine ? "#FFD700" : catColor};">${cellCatDisplay(cell)} · ${cell.col}${cell.row}</div>
    </div>`;
  return div;
}

// ── ACTIONS ────────────────────────────────────────────────────────────────
function selectClub(club) {
  selectedClub = club;
  renderAll();
}

function switchView(v) {
  currentView = v;
  document.getElementById("grid-view").style.display     = v === "grid"     ? "block" : "none";
  document.getElementById("progress-view").style.display = v === "progress" ? "flex"  : "none";
  document.getElementById("btn-grid").classList.toggle("active",     v === "grid");
  document.getElementById("btn-progress").classList.toggle("active", v === "progress");
  if (v === "progress") renderProgress();
}

function setLang(l) {
  lang = l;
  document.getElementById("lang-en").classList.toggle("active", l === "en");
  document.getElementById("lang-fr").classList.toggle("active", l === "fr");
  renderAll();
}

function renderAll() {
  renderStatic();
  renderLeaderboard();
  renderClubHeader();
  renderGrid();
  if (currentView === "progress") renderProgress();
}

// ── INIT ───────────────────────────────────────────────────────────────────
renderAll();
