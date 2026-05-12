/* =============================================
   HOW COOKED AM I? — script.js
   Full logic, chaos, and meme energy
   ============================================= */

// ── MEME QUOTES ──────────────────────────────
const MEME_QUOTES = [
  "\"Bro started revision 3 hours before the exam. Respect.\" 💀",
  "\"The syllabus has 12 chapters. You know 1. It's fine.\" 😭",
  "\"My strategy: hope the examiner is also unprepared.\" 🙏",
  "\"Every passing minute is a minute less for miracles.\" ⏳",
  "\"Sleep is for people who finished their syllabus.\" 😤",
  "\"I'll start studying after this YouTube video. (3 hours later)\" 📱",
  "\"The night before exam hits different... so does the regret.\" 🌙",
  "\"Dear God, please make the exam multiple choice.\" 🤝",
  "\"Confidence = 100. Knowledge = 12. It's giving main character.\" 😎",
  "\"My pen is ready. My brain? On vacation.\" ✏️",
  "\"At this point I'm just farming the attendance marks.\" 💅",
  "\"One-shots at 3AM are now my personality.\" 🌃",
  "\"Bhai tera syllabus nahi, teri himmat khatam ho gayi.\" 💪",
  "\"The exam is tomorrow. This is fine. Everything is fine. 🔥🐶🔥\"",
  "\"Plot twist: the question paper was from last year only.\" 😤",
];

const FOOTER_QUOTES = [
  "Remember: even Einstein failed. Probably. We don't know.",
  "If you fail, blame Mercury retrograde. Works every time.",
  "Your future self is disappointed but still rooting for you.",
  "Toppers also stress. They're just better at hiding it.",
];

// ── STATUS LEVELS ──────────────────────────────
const STATUSES = [
  { max: 15,  emoji: "😎", label: "Locked In Beast Mode",   color: "#4CAF50" },
  { max: 30,  emoji: "🙂", label: "Slightly Cooked",        color: "#8BC34A" },
  { max: 45,  emoji: "😬", label: "Nervous Energy",         color: "#FFD600" },
  { max: 60,  emoji: "😰", label: "Barely Alive",           color: "#FF9800" },
  { max: 75,  emoji: "😱", label: "Medium Cooked 🍳",       color: "#FF6B35" },
  { max: 88,  emoji: "🥵", label: "Deep Fried 💀",          color: "#FF3B30" },
  { max: 100, emoji: "☠️", label: "Academic Casualty ☠️",  color: "#8B0000" },
];

const ROASTS = {
  safe: [
    "Keep going! You're literally built different. Don't stop now.",
    "Actually prepared? In THIS economy?? Legend.",
    "Look at you — studying AND living. The CEO arc is real.",
    "You might actually survive. Tell us your secrets.",
  ],
  mild: [
    "A little cooked but nothing a strong coffee and a YouTube one-shot can't fix.",
    "It's giving 'last-minute clutch' vibes. We've seen worse.",
    "You're the protagonist. The universe won't let you fail. Probably.",
    "Panic is just excitement without breathing. You got this.",
  ],
  medium: [
    "Brother, start watching one-shots immediately. Like, now. Close this tab.",
    "You are one bad nap away from academic disaster.",
    "The syllabus sent a 'miss me?' text. You should reply.",
    "This is the part where the movie gets interesting. Grind arc time.",
    "Miracles are now part of the strategy. Activate faith mode. 🙏",
  ],
  cooked: [
    "Even SpongeBob couldn't save this. And he's an optimist.",
    "At this point, negotiating with the examiner is a valid plan.",
    "You are so cooked, Gordon Ramsay just texted asking for the recipe.",
    "The exam is not the problem anymore. The problem is you, bro.",
    "Your future self is somewhere crying in advance. Send them strength.",
    "We regret to inform you that vibes alone won't pass this exam.",
  ],
  dead: [
    "This is not an exam preparation. This is a burial arrangement.",
    "The examiner has your seat pre-marked. It says 'F'.",
    "Even the answer sheet is scared to face you.",
    "Your syllabus has been declared a missing person. Last seen: Day 1.",
    "Bro is playing the final boss of academic self-destruction.",
    "You have achieved a new milestone: making everyone around you nervous.",
  ],
};

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  spawnBgEmojis();
  spawnBubbles();
  setMemeQuote();
  setFooterQuote();
  initSliders();
  initDatePicker();
  setInterval(setMemeQuote, 8000);
});

function setMemeQuote() {
  const el = document.getElementById('memeQuote');
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = MEME_QUOTES[Math.floor(Math.random() * MEME_QUOTES.length)];
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = 1;
  }, 300);
}

function setFooterQuote() {
  const el = document.getElementById('footerQuote');
  if (el) el.textContent = FOOTER_QUOTES[Math.floor(Math.random() * FOOTER_QUOTES.length)];
}

// ── FLOATING BG EMOJIS ────────────────────────
function spawnBgEmojis() {
  const container = document.getElementById('bgEmojis');
  const emojis = ['📚','📖','✏️','🔥','😭','☕','⏰','📝','💀','😰','🎯','🧠'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('span');
    el.className = 'bg-emoji-item';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (10 + Math.random() * 14) + 's';
    el.style.animationDelay = (-Math.random() * 14) + 's';
    el.style.fontSize = (1.2 + Math.random() * 1.6) + 'rem';
    container.appendChild(el);
  }
}

// ── BUBBLES ────────────────────────────────────
function spawnBubbles() {
  const container = document.getElementById('bubbles');
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'bubble';
    const size = 18 + Math.random() * 50;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (8 + Math.random() * 12) + 's';
    el.style.animationDelay = (-Math.random() * 12) + 's';
    container.appendChild(el);
  }
}

// ── SLIDERS ────────────────────────────────────
function initSliders() {
  document.querySelectorAll('.card-slider').forEach(slider => {
    updateSliderVisual(slider);
    slider.addEventListener('input', () => updateSliderVisual(slider));
  });
}

function updateSlider(id, valId) {
  const slider = document.getElementById(id);
  const valEl  = document.getElementById(valId);
  if (slider && valEl) {
    valEl.textContent = slider.value;
    updateSliderVisual(slider);
  }
}

function updateSliderVisual(slider) {
  const min = parseFloat(slider.min) || 0;
  const max = parseFloat(slider.max) || 100;
  const val = parseFloat(slider.value);
  const pct = ((val - min) / (max - min)) * 100;
  slider.style.setProperty('--val', pct + '%');
  slider.style.background = `linear-gradient(90deg, var(--card-color, #FFD600) ${pct}%, #eee ${pct}%)`;
}

// ── DATE PICKER ────────────────────────────────
function initDatePicker() {
  const input = document.getElementById('examDate');
  if (!input) return;
  const today = new Date();
  input.min = today.toISOString().split('T')[0];
  input.addEventListener('change', updateDaysPreview);
}

function updateDaysPreview() {
  const input = document.getElementById('examDate');
  const preview = document.getElementById('daysPreview');
  if (!input.value) { preview.textContent = '?? days left'; return; }
  const days = getDaysLeft(input.value);
  let msg = '';
  if (days < 0)  msg = 'Exam passed bro 😭';
  else if (days === 0) msg = 'IT\'S TODAY 🚨';
  else if (days === 1) msg = '1 day left 💀';
  else msg = `${days} days left ${days < 3 ? '☠️' : days < 7 ? '😰' : '📅'}`;
  preview.textContent = msg;
  preview.style.color = days < 3 ? '#FF3B30' : days < 7 ? '#FF6B35' : '#FF9800';
}

function getDaysLeft(dateStr) {
  const exam = new Date(dateStr);
  const now  = new Date();
  now.setHours(0,0,0,0); exam.setHours(0,0,0,0);
  return Math.round((exam - now) / 86400000);
}

// ── MAIN CALCULATION ──────────────────────────
function calculateFate() {
  const btn = document.getElementById('calcBtn');
  btn.classList.add('loading');

  // Fake loading drama
  setTimeout(() => {
    btn.classList.remove('loading');
    doCalculate();
  }, 1200);
}

function doCalculate() {
  // Gather inputs
  const examDate    = document.getElementById('examDate').value;
  const syllabus    = parseFloat(document.getElementById('syllabus').value)    || 0;
  const studyHours  = parseFloat(document.getElementById('studyHours').value)  || 0;
  const sleep       = parseFloat(document.getElementById('sleep').value)       || 8;
  const confidence  = parseFloat(document.getElementById('confidence').value)  || 50;
  const chapters    = parseFloat(document.getElementById('chapters').value)    || 0;
  const hrsPerCh    = parseFloat(document.getElementById('hrsPerCh').value)    || 2;

  // Derived values
  const daysLeft         = examDate ? Math.max(0, getDaysLeft(examDate)) : 5;
  const availableDaily   = Math.max(0, Math.min(studyHours, 24 - sleep));
  const totalStudyHrs    = daysLeft * availableDaily;
  const requiredHrs      = chapters * hrsPerCh;
  const syllabusRemain   = 100 - syllabus;

  // Cooked score (0-100, higher = more cooked)
  let cookedScore = 0;

  // Syllabus deficit: if lots remaining, very cooked
  const syllabusDeficit = syllabusRemain;
  cookedScore += syllabusDeficit * 0.35;

  // Hours deficit
  const hrDeficit = requiredHrs > 0 ? Math.min(100, (Math.max(0, requiredHrs - totalStudyHrs) / Math.max(1, requiredHrs)) * 100) : 0;
  cookedScore += hrDeficit * 0.30;

  // Days pressure
  const dayPressure = daysLeft < 3 ? 40 : daysLeft < 7 ? 25 : daysLeft < 14 ? 10 : 0;
  cookedScore += dayPressure;

  // Sleep penalty (too little sleep = more cooked)
  const sleepPenalty = sleep < 4 ? 15 : sleep < 6 ? 8 : 0;
  cookedScore += sleepPenalty;

  // Confidence bonus (overconfidence is also a penalty lol)
  const confBonus = confidence > 80 ? -5 : confidence < 20 ? 10 : 0;
  cookedScore += confBonus;

  cookedScore = Math.max(0, Math.min(100, Math.round(cookedScore)));

  // Survival probability
  const survival = Math.max(0, Math.min(100, Math.round(100 - cookedScore * 0.8 + Math.random() * 8 - 4)));

  // Status
  const status = STATUSES.find(s => cookedScore <= s.max) || STATUSES[STATUSES.length - 1];

  // Roast
  let roastPool;
  if      (cookedScore <= 20) roastPool = ROASTS.safe;
  else if (cookedScore <= 40) roastPool = ROASTS.mild;
  else if (cookedScore <= 60) roastPool = ROASTS.medium;
  else if (cookedScore <= 80) roastPool = ROASTS.cooked;
  else                        roastPool = ROASTS.dead;
  const roast = roastPool[Math.floor(Math.random() * roastPool.length)];

  // Stats
  const stats = [
    { icon: '📅', label: `${daysLeft} days left` },
    { icon: '⏱️', label: `${totalStudyHrs.toFixed(1)}h available` },
    { icon: '📚', label: `${requiredHrs.toFixed(1)}h required` },
    { icon: '📖', label: `${syllabusRemain}% syllabus left` },
    { icon: '😴', label: `${sleep}h sleep/night` },
    { icon: hrDeficit > 50 ? '🚨' : '✅', label: hrDeficit > 50 ? 'Time deficit!' : 'Time OK' },
  ];

  renderResult({ cookedScore, survival, status, roast, stats });
}

// ── RENDER RESULT ─────────────────────────────
function renderResult({ cookedScore, survival, status, roast, stats }) {
  const section = document.getElementById('resultSection');
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Emoji + status
  document.getElementById('resultEmoji').textContent = status.emoji;
  const statusEl = document.getElementById('resultStatus');
  statusEl.textContent = status.label;
  statusEl.style.color = status.color;

  // Bar
  const fill = document.getElementById('cookedBarFill');
  const barText = document.getElementById('cookedBarText');
  setTimeout(() => {
    fill.style.width = cookedScore + '%';
    barText.textContent = cookedScore + '% COOKED';
  }, 100);

  // Stats
  const statsRow = document.getElementById('statsRow');
  statsRow.innerHTML = '';
  stats.forEach((s, i) => {
    const pill = document.createElement('div');
    pill.className = 'stat-pill';
    pill.style.animationDelay = (i * 0.08) + 's';
    pill.innerHTML = `<span class="pill-icon">${s.icon}</span>${s.label}`;
    statsRow.appendChild(pill);
  });

  // Roast
  document.getElementById('roastText').textContent = roast;

  // Survival
  const sc = document.getElementById('survivalChance');
  sc.textContent = survival + '%';
  sc.style.color = survival > 60 ? '#4CAF50' : survival > 35 ? '#FF9800' : '#FF3B30';

  // Effects
  triggerEffects(cookedScore);
}

// ── OVERLAY EFFECTS ───────────────────────────
function triggerEffects(cookedScore) {
  const overlay = document.getElementById('overlayEffects');
  overlay.innerHTML = '';

  if (cookedScore < 40) {
    // Confetti!
    const colors = ['#FFD600','#00C6FF','#FF6B35','#4CAF50','#FF9FF3','#fff'];
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (8 + Math.random() * 10) + 'px';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      piece.style.animationDuration = (1.2 + Math.random() * 1.5) + 's';
      piece.style.animationDelay = Math.random() * 0.6 + 's';
      overlay.appendChild(piece);
    }
  } else if (cookedScore >= 70) {
    // Siren flash
    const siren = document.createElement('div');
    siren.className = 'siren-flash';
    overlay.appendChild(siren);
  }
}

// ── RETRY ─────────────────────────────────────
function retryComeback() {
  document.getElementById('resultSection').style.display = 'none';
  document.getElementById('inputSection').scrollIntoView({ behavior: 'smooth' });

  // Reset sliders to hopeful values with tiny animation
  ['syllabus','studyHours','sleep','confidence','chapters','hrsPerCh'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    // don't reset, just wiggle the card
  });

  // Wiggle the cards
  document.querySelectorAll('.input-card').forEach((card, i) => {
    setTimeout(() => {
      card.style.animation = 'panicking 0.4s ease-in-out';
      setTimeout(() => card.style.animation = '', 400);
    }, i * 60);
  });
}

// ── SHARE ─────────────────────────────────────
function shareResult() {
  const status = document.getElementById('resultStatus').textContent;
  const bar    = document.getElementById('cookedBarText').textContent;
  const text   = `I am ${bar} — Status: "${status}" 🍳💀\nCheck how cooked YOU are: How Cooked Am I? (by Nawal 😤)`;
  if (navigator.share) {
    navigator.share({ title: 'How Cooked Am I?', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.querySelector('.share-btn');
      const orig = btn.textContent;
      btn.textContent = '✅ Copied!';
      setTimeout(() => btn.textContent = orig, 2000);
    });
  }
}

// ── PANIC SOUND ───────────────────────────────
function playPanicSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Quick ascending alarm beeps
    const times = [0, 0.18, 0.36, 0.54, 0.72];
    const freqs = [440, 554, 660, 880, 1046];

    times.forEach((t, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.setValueAtTime(freqs[i], ctx.currentTime + t);
      gain.gain.setValueAtTime(0.15, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.15);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.15);
    });

    // Shake the button
    const btn = document.getElementById('soundBtn');
    btn.style.animation = 'panicking 0.5s ease-in-out 3';
    setTimeout(() => btn.style.animation = '', 1600);
  } catch (e) {
    console.warn('Audio not supported:', e);
  }
}
