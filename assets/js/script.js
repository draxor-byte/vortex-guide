
const VERSIONS = [
  {
    version: "1.0.0",
    title: "Initial Public Release",
    date: "January 2025",
    isLatest: true,
    downloadUrl: "https://github.com/BLAZE-X00001/vortex-releases/releases/download/v1.0.0/Vortex.exe",   // ← REPLACE with your actual download link
    notes: [
      "7-layer threat analysis: Static, YARA, CAPA, VirusTotal, Hybrid Analysis, Sandbox (dynamic), and AI verdict engine",
      "Sandbox analysis with GrabberDetector (Method 1) and deep-dive (Method 2)",
      "Full account system with hardware binding and per-account scan history",
      "Badge system across two tracks — Analyst (reputation) and Hunter (grabber detections)",
      "Three-tier leaderboard: Reputation Rank, Grabber Rank, and Total Badges Rank",
      "Free tier: 5 scans per day with midnight IST reset",
      "Premium credits with zero-cost duplicate scan advantage",
      "Global threat database with first-discovery attribution",
    ],
  },
  // ── Add future releases above this comment ──────────
  // {
  //   version: "1.1.0",
  //   title: "Detection & Performance Update",
  //   date: "February 2025",
  //   isLatest: true,   // set this true, set old entry to false
  //   downloadUrl: "https://your-link-here.com/vortex-1.1.0.exe",
  //   notes: [
  //     "Improved AI verdict accuracy for PyInstaller-packed files",
  //     "Faster static analysis pipeline",
  //     "New YARA ruleset for emerging Discord stealer patterns",
  //   ],
  // },
];

// ══════════════════════════════════════════════════════
//  BUILD DOWNLOAD SECTION
// ══════════════════════════════════════════════════════
function buildDownloadSection() {
  const latest = VERSIONS.find(v => v.isLatest) || VERSIONS[0];

  const latestEl = document.getElementById('latestRelease');
  if (latestEl && latest) {
    latestEl.innerHTML = `
      <div class="download-card rv" style="
        background:rgba(10,16,30,0.7);
        border:1px solid rgba(125,211,252,0.2);
        border-radius:16px;padding:36px;
        border-top:2px solid var(--purple);
        margin-bottom:24px;
      ">
        <div class="dl-hero-top">
          <div>
            <div class="dl-version-badge">
              <span></span>Latest Release · v${latest.version}
            </div>
            <div class="dl-title">${latest.title}</div>
            <div class="dl-date">Released ${latest.date}</div>
            <ul class="dl-notes">
              ${latest.notes.map(n => `<li>${n}</li>`).join('')}
            </ul>
          </div>
          <a href="${latest.downloadUrl}" class="dl-btn"
            ${latest.downloadUrl === '#' ? 'onclick="return false;"' : ''}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v10M6 9l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 13.5v1a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            Download v${latest.version}
          </a>
        </div>
      </div>
    `;
    // observe new .rv elements
    latestEl.querySelectorAll('.rv').forEach(el => revObs.observe(el));
  }

  const listEl = document.getElementById('versionsList');
  if (listEl) {
    listEl.innerHTML = `<div class="versions-list">` + VERSIONS.map(v => `
      <div class="version-item rv">
        <div>
          <div class="vi-tag">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M5 2.5v3l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            v${v.version}${v.isLatest ? ' · Latest' : ''}
          </div>
          <div class="vi-title">${v.title}</div>
          <div class="vi-date">${v.date}</div>
          <ul class="vi-notes">
            ${v.notes.slice(0,4).map(n => `<li>${n}</li>`).join('')}
            ${v.notes.length > 4 ? `<li style="color:var(--t4)">+ ${v.notes.length - 4} more</li>` : ''}
          </ul>
        </div>
        <a href="${v.downloadUrl}" class="vi-dl"
          ${v.downloadUrl === '#' ? 'onclick="return false;"' : ''}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4.5 6.5L7 9l2.5-2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 11v.5A1.5 1.5 0 0 0 3 13h8a1.5 1.5 0 0 0 1.5-1.5V11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
          Download
        </a>
      </div>
    `).join('') + `</div>`;

    listEl.querySelectorAll('.rv').forEach(el => revObs.observe(el));
  }
}

// ══════════════════════════════════════════════════════
//  SCROLL PROGRESS BAR
// ══════════════════════════════════════════════════════
const progBar = document.getElementById('scroll-prog-bar');
if (progBar) {
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    if (max > 0) progBar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

const root = document.documentElement;
let tx = window.innerWidth / 2;
let ty = window.innerHeight / 2;
let cx = tx;
let cy = ty;
let nx = 0;
let ny = 0;
const updatePointer = () => {
  cx += (tx - cx) * 0.08;
  cy += (ty - cy) * 0.08;
  root.style.setProperty('--mx-px', `${cx}px`);
  root.style.setProperty('--my-px', `${cy}px`);
  root.style.setProperty('--mx', nx.toFixed(3));
  root.style.setProperty('--my', ny.toFixed(3));
  requestAnimationFrame(updatePointer);
};
document.addEventListener('mousemove', e => {
  tx = e.clientX;
  ty = e.clientY;
  nx = (e.clientX / window.innerWidth - 0.5) * 2;
  ny = (e.clientY / window.innerHeight - 0.5) * 2;
});
document.addEventListener('touchmove', e => {
  const t = e.touches[0];
  if (!t) return;
  tx = t.clientX;
  ty = t.clientY;
  nx = (t.clientX / window.innerWidth - 0.5) * 2;
  ny = (t.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });
updatePointer();

// ══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════════════════
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.rv').forEach(el => revObs.observe(el));

// ══════════════════════════════════════════════════════
//  SIDEBAR ACTIVE STATE (uses .sb-link)
// ══════════════════════════════════════════════════════
const SEC_IDS = [
  'hero','what','account','apikeys','setup','profile',
  'scanning','rules','results','methods',
  'plans','history','badges','rep','leaderboard',
  'conduct','faq','download'
];
const NB_NAMES = {
  hero:'Overview', what:'What is Vortex', account:'Create Account',
  apikeys:'API Keys', setup:'VM Setup', profile:'Profile Setup',
  scanning:'How to Scan', rules:'Scan Rules', results:'Reading Results',
  methods:'Analysis Methods', plans:'Free vs Premium', history:'Scan History',
  badges:'Badge System', rep:'Reputation', leaderboard:'Leaderboard',
  conduct:'Rules & Conduct', faq:'FAQ', download:'Download'
};
const nbCurr = document.getElementById('nbCurr');
const sbSearchInput = document.getElementById('sbSearchInput');

function updateNav() {
  const sy = window.scrollY + window.innerHeight * 0.3;
  let active = SEC_IDS[0];
  SEC_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= sy) active = id;
  });
  document.querySelectorAll('.sb-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-s') === active);
  });
  if (nbCurr) nbCurr.textContent = NB_NAMES[active] || active;
}

const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
  updateNav();
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
updateNav();

if (sbSearchInput) {
  const links = Array.from(document.querySelectorAll('.sb-link'));
  const sections = Array.from(document.querySelectorAll('.sb-section'));
  const applyFilter = () => {
    const q = sbSearchInput.value.trim().toLowerCase();
    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      const match = !q || text.includes(q);
      link.style.display = match ? '' : 'none';
      link.classList.toggle('match', !!q && match);
    });
    sections.forEach(section => {
      const hasVisible = Array.from(section.querySelectorAll('.sb-link')).some(l => l.style.display !== 'none');
      section.style.display = hasVisible ? '' : 'none';
    });
  };
  sbSearchInput.addEventListener('input', applyFilter);
  sbSearchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      sbSearchInput.value = '';
      applyFilter();
      sbSearchInput.blur();
    }
    if (e.key === 'Enter') {
      const first = links.find(l => l.style.display !== 'none');
      if (first) first.click();
    }
  });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      sbSearchInput.focus();
      sbSearchInput.select();
    }
  });
  applyFilter();
}

// ══════════════════════════════════════════════════════
//  SMOOTH SCROLL FOR SIDEBAR LINKS
// ══════════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const off = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: off, behavior: 'smooth' });
      if (window.innerWidth <= 1060) closeSB();
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
      btn.innerHTML = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="5" width="12" height="2" rx="1" fill="currentColor"/><rect y="10" width="18" height="2" rx="1" fill="currentColor"/></svg>';
    }
  }
}
function closeSB() {
  const sb   = document.getElementById('sidebar');
  const mask = document.getElementById('sbMask');
  const btn  = document.getElementById('sbBtn');
  sb.classList.remove('open');
  mask.classList.remove('show');
  if (btn) btn.innerHTML = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="5" width="12" height="2" rx="1" fill="currentColor"/><rect y="10" width="18" height="2" rx="1" fill="currentColor"/></svg>';
}

// ══════════════════════════════════════════════════════
//  FAQ ACCORDION
// ══════════════════════════════════════════════════════
document.querySelectorAll('.fq').forEach(q => {
  q.addEventListener('click', () => {
    const item    = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq').forEach(f => f.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ══════════════════════════════════════════════════════
//  3D CARD TILT ON HOVER
// ══════════════════════════════════════════════════════
document.querySelectorAll('.card, .plan, .badge-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    const mag = card.classList.contains('badge-card') ? 10 : 5;
    card.style.transform = `perspective(900px) rotateX(${y * -mag}deg) rotateY(${x * mag}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

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
    p1.style.transform = `perspective(1200px) rotateY(${-12 + cmx * 8}deg) rotateX(${5 + cmy * -5}deg)`;
    p2.style.transform = `perspective(1200px) rotateY(${-6 + cmx * 12}deg) rotateX(${-3 + cmy * -6}deg) translateZ(-40px)`;
    p3.style.transform = `perspective(1200px) rotateY(${8 + cmx * 6}deg) rotateX(${7 + cmy * -4}deg) translateZ(-70px)`;
    requestAnimationFrame(tick);
  })();
})();

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
buildDownloadSection();
