/* ═══════════════════════════════════════════════════════
   VORTEX GUIDE — main script
   - Version management (edit VERSIONS array to update)
   - Canvas background
   - Parallax & cursor
   - Sidebar active tracking
   - FAQ accordion
   - Scroll reveal
═══════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════
//  VERSION HISTORY — EDIT THIS TO ADD NEW RELEASES
//  Each entry renders in the Download section.
//  The FIRST entry is shown as "Latest Release."
//
//  Fields:
//    version     — semantic version string, e.g. "1.2.0"
//    title       — short release title
//    date        — formatted date string, e.g. "January 2025"
//    notes       — array of change strings
//    downloadUrl — direct link to the download file
//    isLatest    — set true on the newest entry ONLY
// ══════════════════════════════════════════════════════
const VERSIONS = [
  {
    version: "1.0.0",
    title: "Initial Public Release",
    date: "January 2025",
    isLatest: true,
    downloadUrl: "#",   // ← REPLACE with your actual download link
    notes: [
      "Multi-layer threat analysis: Static, Behavioral, VirusTotal, Hybrid Analysis, and AI verdict engine",
      "Full account system with hardware binding and per-account scan history",
      "Badge system across two tracks — Analyst (reputation) and Hunter (grabber detections)",
      "Three-tier leaderboard: Reputation, Grabber, and Volume rankings",
      "Free tier: 5 scans per day with midnight IST reset",
      "Premium credits with zero-cost duplicate scan feature",
      "Global threat database with first-discovery attribution",
    ],
  },
  // ── Add future releases above this comment ──────────
  // {
  //   version: "1.1.0",
  //   title: "Performance & Detection Update",
  //   date: "February 2025",
  //   isLatest: true,   // <-- set this to true, set old latest to false
  //   downloadUrl: "https://your-link-here.com/vortex-1.1.0.exe",
  //   notes: [
  //     "Improved AI verdict accuracy for PyInstaller-packed files",
  //     "Faster static analysis pipeline — ~30% speed improvement",
  //     "New YARA ruleset for emerging Discord stealer patterns",
  //   ],
  // },
];

// ══════════════════════════════════════════════════════
//  BUILD DOWNLOAD SECTION
// ══════════════════════════════════════════════════════
function buildDownloadSection() {
  const latest = VERSIONS.find(v => v.isLatest) || VERSIONS[0];

  // Latest release hero card
  const latestEl = document.getElementById('latestRelease');
  if (latestEl && latest) {
    latestEl.innerHTML = `
      <div class="dl-hero-top">
        <div>
          <div class="dl-version-badge">
            <span></span>
            Latest Release · v${latest.version}
          </div>
          <div class="dl-title">${latest.title}</div>
          <div class="dl-date">Released ${latest.date}</div>
          <ul class="dl-notes">
            ${latest.notes.map(n => `<li>${n}</li>`).join('')}
          </ul>
        </div>
        <a href="${latest.downloadUrl}" class="dl-btn" ${latest.downloadUrl === '#' ? 'onclick="return false;"' : ''}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v10M6 9l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.5 13.5v1a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
          Download v${latest.version}
        </a>
      </div>
    `;
  }

  // Version history list (all versions)
  const listEl = document.getElementById('versionsList');
  if (listEl) {
    listEl.innerHTML = VERSIONS.map(v => `
      <div class="version-item rv">
        <div>
          <div class="vi-tag">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1.2"/><path d="M5 2.5v3l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            v${v.version}${v.isLatest ? ' · Latest' : ''}
          </div>
          <div class="vi-title">${v.title}</div>
          <div class="vi-date">${v.date}</div>
          <ul class="vi-notes">
            ${v.notes.slice(0, 4).map(n => `<li>${n}</li>`).join('')}
            ${v.notes.length > 4 ? `<li style="color:var(--t4)">+ ${v.notes.length - 4} more changes</li>` : ''}
          </ul>
        </div>
        <a href="${v.downloadUrl}" class="vi-dl" ${v.downloadUrl === '#' ? 'onclick="return false;"' : ''}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4.5 6.5L7 9l2.5-2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 11v.5A1.5 1.5 0 0 0 3 13h8a1.5 1.5 0 0 0 1.5-1.5V11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
          Download
        </a>
      </div>
    `).join('');

    // Observe newly added .rv elements
    listEl.querySelectorAll('.rv').forEach(el => revObs.observe(el));
  }
}

// ══════════════════════════════════════════════════════
//  CURSOR
// ══════════════════════════════════════════════════════
(function () {
  const ring = document.getElementById('cursor-ring');
  const dot  = document.getElementById('cursor-dot');
  if (!ring || !dot) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function tickRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tickRing);
  })();
})();

// ══════════════════════════════════════════════════════
//  CANVAS — STARS, NEBULAS, METEORS
// ══════════════════════════════════════════════════════
(function () {
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const cx = canvas.getContext('2d');
  let W, H, stars = [], nebulas = [], meteors = [], frame = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initStars();
    initNebulas();
  }

  function initStars() {
    stars = [];
    const count = Math.floor((W * H) / 4800);
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: r < 0.7 ? 0.5 + Math.random() * 0.7 : 1 + Math.random() * 1.2,
        alpha: 0.25 + Math.random() * 0.65,
        twinkle: Math.random() * Math.PI * 2,
        tspd: 0.006 + Math.random() * 0.018,
        driftX: (Math.random() - 0.5) * 0.04,
        driftY: 0.02 + Math.random() * 0.05,
        color: r < 0.15
          ? 'rgba(0,212,184,'
          : r < 0.25
            ? 'rgba(123,97,255,'
            : 'rgba(255,255,255,',
      });
    }
  }

  function initNebulas() {
    nebulas = [
      { x: 0.8 * W, y: 0.15 * H, r: Math.min(W,H)*0.38, c: [0,212,184],  phase: 0,   spd: 0.0007 },
      { x: 0.2 * W, y: 0.72 * H, r: Math.min(W,H)*0.32, c: [123,97,255], phase: 2,   spd: 0.0009 },
      { x: 0.55* W, y: 0.5 * H,  r: Math.min(W,H)*0.48, c: [0,30,60],    phase: 1.2, spd: 0.0004 },
    ];
  }

  function spawnMeteor() {
    if (meteors.length < 2 && Math.random() < 0.002) {
      meteors.push({
        x: Math.random() * W, y: 0,
        vx: (Math.random() - 0.5) * 3.5 - 2,
        vy: Math.random() * 4 + 2.5,
        len: Math.random() * 70 + 30,
        alpha: 1, fade: 0.016 + Math.random() * 0.012,
      });
    }
  }

  function draw() {
    frame++;
    cx.clearRect(0, 0, W, H);

    nebulas.forEach(n => {
      n.phase += n.spd;
      const a = 0.02 + 0.01 * Math.sin(n.phase);
      const g = cx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      g.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},${a})`);
      g.addColorStop(1, 'transparent');
      cx.fillStyle = g;
      cx.fillRect(0, 0, W, H);
    });

    stars.forEach(s => {
      s.twinkle += s.tspd;
      s.x += s.driftX;
      s.y += s.driftY;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
      const a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinkle));
      cx.beginPath();
      cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      cx.fillStyle = s.color + a + ')';
      cx.fill();
      if (s.r > 0.9) {
        cx.beginPath();
        cx.arc(s.x, s.y, s.r * 2.4, 0, Math.PI * 2);
        cx.fillStyle = s.color + (a * 0.12) + ')';
        cx.fill();
      }
    });

    spawnMeteor();
    meteors = meteors.filter(m => {
      m.x += m.vx; m.y += m.vy; m.alpha -= m.fade;
      if (m.alpha <= 0) return false;
      const g = cx.createLinearGradient(m.x, m.y, m.x - m.vx * 8, m.y - m.vy * 8);
      g.addColorStop(0, `rgba(255,255,255,${m.alpha})`);
      g.addColorStop(1, 'transparent');
      cx.strokeStyle = g;
      cx.lineWidth = 1.1;
      cx.beginPath();
      cx.moveTo(m.x, m.y);
      cx.lineTo(m.x - m.vx * (m.len/10), m.y - m.vy * (m.len/10));
      cx.stroke();
      return m.y < H + 50;
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();

// ══════════════════════════════════════════════════════
//  3D PARALLAX HERO PANELS
// ══════════════════════════════════════════════════════
(function () {
  const p1 = document.getElementById('panel1');
  const p2 = document.getElementById('panel2');
  const p3 = document.getElementById('panel3');
  if (!p1 || !p2 || !p3) return;
  let tmx=0, tmy=0, cmx=0, cmy=0;

  document.addEventListener('mousemove', e => {
    tmx = (e.clientX / window.innerWidth  - 0.5) * 2;
    tmy = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  (function tick() {
    cmx += (tmx - cmx) * 0.055;
    cmy += (tmy - cmy) * 0.055;
    p1.style.transform = `perspective(1200px) rotateY(${-16 + cmx * 8}deg) rotateX(${6 + cmy * -5}deg)`;
    p2.style.transform = `perspective(1200px) rotateY(${-8 + cmx * 13}deg) rotateX(${-4 + cmy * -6}deg) translateZ(-40px)`;
    p3.style.transform = `perspective(1200px) rotateY(${10 + cmx * 6}deg) rotateX(${8 + cmy * -4}deg) translateZ(-70px)`;
    requestAnimationFrame(tick);
  })();
})();

// ══════════════════════════════════════════════════════
//  SCROLL PARALLAX ORBITS
// ══════════════════════════════════════════════════════
(function () {
  const orb1 = document.getElementById('orb1');
  const orb2 = document.getElementById('orb2');
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (orb1) orb1.style.transform = `translateY(-50%) rotate(${sy * 0.04}deg)`;
    if (orb2) orb2.style.transform = `translateY(-50%) rotate(${-sy * 0.07}deg)`;
  }, { passive: true });
})();

// ══════════════════════════════════════════════════════
//  SCROLL PROGRESS BAR
// ══════════════════════════════════════════════════════
const progBar = document.getElementById('prog-bar');
if (progBar) {
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    if (max > 0) progBar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

// ══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════════════════
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.rv').forEach(el => revObs.observe(el));

// Stagger grids
document.querySelectorAll('.grid').forEach(grid => {
  grid.querySelectorAll('.card').forEach((c, i) => { c.style.transitionDelay = (i * 0.07) + 's'; });
});
document.querySelectorAll('.badges').forEach(bg => {
  bg.querySelectorAll('.badge').forEach((b, i) => { b.style.transitionDelay = (i * 0.05) + 's'; });
});

// ══════════════════════════════════════════════════════
//  SIDEBAR ACTIVE STATE
// ══════════════════════════════════════════════════════
const SEC_IDS = ['hero','what','account','apikeys','profile','scanning','rules','results','methods','plans','history','badges','rep','leaderboard','conduct','faq','download'];
const NB_NAMES = {
  hero:'Overview', what:'What is Vortex', account:'Create Account',
  apikeys:'API Keys', profile:'Profile Setup', scanning:'How to Scan',
  rules:'Scan Rules', results:'Reading Results', methods:'Analysis Methods',
  plans:'Free vs Premium', history:'Scan History', badges:'Badge System',
  rep:'Reputation', leaderboard:'Leaderboard', conduct:'Rules & Conduct',
  faq:'FAQ', download:'Download'
};
const nbCurr = document.getElementById('nbCurr');

function updateNav() {
  const sy = window.scrollY + window.innerHeight * 0.3;
  let active = SEC_IDS[0];
  SEC_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= sy) active = id;
  });
  document.querySelectorAll('.sb-item').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-s') === active);
  });
  if (nbCurr) nbCurr.textContent = NB_NAMES[active] || active;
}

const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
  updateNav();
  if (btt) btt.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
updateNav();

// ══════════════════════════════════════════════════════
//  SMOOTH SCROLL FOR SIDEBAR LINKS
// ══════════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const off = el.getBoundingClientRect().top + window.scrollY - 66;
      window.scrollTo({ top: off, behavior: 'smooth' });
      if (window.innerWidth <= 1100) closeSB();
    }
  });
});

// ══════════════════════════════════════════════════════
//  SIDEBAR MOBILE TOGGLE
// ══════════════════════════════════════════════════════
function toggleSB() {
  const sb   = document.getElementById('sidebar');
  const mask = document.getElementById('sbMask');
  const btn  = document.getElementById('sbBtn');
  sb.classList.toggle('open');
  mask.classList.toggle('show');
  if (btn) {
    if (sb.classList.contains('open')) {
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    } else {
      btn.innerHTML = '<svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="12" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg>';
    }
  }
}
function closeSB() {
  const sb   = document.getElementById('sidebar');
  const mask = document.getElementById('sbMask');
  const btn  = document.getElementById('sbBtn');
  sb.classList.remove('open');
  mask.classList.remove('show');
  if (btn) btn.innerHTML = '<svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="12" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg>';
}

// ══════════════════════════════════════════════════════
//  FAQ ACCORDION
// ══════════════════════════════════════════════════════
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item    = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq').forEach(f => f.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ══════════════════════════════════════════════════════
//  3D CARD TILT
// ══════════════════════════════════════════════════════
document.querySelectorAll('.card, .plan, .method-card, .badge').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    const mag = card.classList.contains('badge') ? 10 : card.classList.contains('method-card') ? 3 : 5;
    card.style.transform = `perspective(900px) rotateX(${y * -mag}deg) rotateY(${x * mag}deg) translateY(-5px)`;
    card.style.setProperty('--mx', (50 + x * 90) + '%');
    card.style.setProperty('--my', (50 + y * 90) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
buildDownloadSection();
