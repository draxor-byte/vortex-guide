import styles from '../../styles/Sections.module.css';

interface Version {
  version: string;
  title: string;
  date: string;
  isLatest: boolean;
  downloadUrl: string;
  notes: string[];
}

const VERSIONS: Version[] = [
  {
    version: "1.0.0",
    title: "Initial Public Release",
    date: "January 2025",
    isLatest: true,
    downloadUrl: "https://github.com/BLAZE-X00008/vortex-discord-security/releases/download/v1.0.1/Vortex.exe",
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
];

export default function Download() {
  const latest = VERSIONS.find(v => v.isLatest) || VERSIONS[0];

  return (
    <>
      <p className="sec-lead">Always use the latest version to ensure current detection signatures and server compatibility.</p>

      <div className={styles.downloadCard} style={{ background: 'rgba(5,10,20,0.85)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '36px', borderTop: '2px solid #22d3ee', marginBottom: '24px' }}>
        <div className={styles.dlHeroTop}>
          <div>
            <div className={styles.dlVersionBadge}>
              <span></span>Latest Release · v{latest.version}
            </div>
            <div className={styles.dlTitle}>{latest.title}</div>
            <div className={styles.dlDate}>Released {latest.date}</div>
            <ul className={styles.dlNotes}>
              {latest.notes.map((note, i) => <li key={i}>{note}</li>)}
            </ul>
          </div>
          <a href={latest.downloadUrl} className={styles.dlBtn}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v10M6 9l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.5 13.5v1a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Download v{latest.version}
          </a>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">Version History</div>
      <div className={styles.versionsList}>
        {VERSIONS.map(v => (
          <div key={v.version} className={styles.versionItem}>
            <div>
              <div className={styles.viTag}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 2.5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                v{v.version}{v.isLatest ? ' · Latest' : ''}
              </div>
              <div className={styles.viTitle}>{v.title}</div>
              <div className={styles.viDate}>{v.date}</div>
              <ul className={styles.viNotes}>
                {v.notes.slice(0, 4).map((note, i) => <li key={i}>{note}</li>)}
                {v.notes.length > 4 && <li style={{ color: '#94a3b8' }}>+ {v.notes.length - 4} more</li>}
              </ul>
            </div>
            <a href={v.downloadUrl} className={styles.viDl}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M4.5 6.5L7 9l2.5-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.5 11v.5A1.5 1.5 0 0 0 3 13h8a1.5 1.5 0 0 0 1.5-1.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Download
            </a>
          </div>
        ))}
      </div>
    </>
  );

}
