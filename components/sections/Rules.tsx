import styles from '../../styles/Sections.module.css';

export default function Rules() {
  return (
    <>
      <p className="sec-lead">
        Understanding when scan credits are deducted prevents unexpected losses and helps you use your daily allocation efficiently.
      </p>
      <div className={styles.cards2}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={styles.cardBadgeLabel}>FREE</div>
          <h3>Free Scan Rules</h3>
          <ul className={styles.tickList}>
            <li>Deducted on <strong>every scan</strong> — new or duplicate</li>
            <li>Deducted on hash matches too</li>
            <li>Not deducted if scan fails to start</li>
            <li><strong>5 free scans per day</strong> per account</li>
            <li>Resets at <strong>12:00 AM IST</strong> daily</li>
            <li>Free scans are used before premium credits</li>
          </ul>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardBadgeLabel} ${styles.cardBadgeLabelPremium}`}>PREMIUM</div>
          <h3>Premium Scan Rules</h3>
          <ul className={styles.tickList}>
            <li>Only deducted on files <strong>not yet in the database</strong></li>
            <li><strong>Zero cost</strong> to scan files already in the database</li>
            <li>Credits <strong>never expire</strong> and never reset</li>
            <li>Automatically used after free scans run out</li>
            <li>Stack seamlessly with daily free scans</li>
            <li>Contact the team for pricing or earn by milestone perks and leaderboard ranks</li>
          </ul>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">RAR Archive Scan Deduction</div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNum}>A</div>
          <div className={styles.stepBody}>
            <h4>RAR container itself is scanned first</h4>
            <p>Vortex first scans the RAR file as a whole (Static, YARA, VirusTotal, Hybrid Analysis, AI). If the RAR container is flagged as <strong>malicious</strong>, one scan credit is deducted and the process stops — the files inside are not extracted or scanned.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>B</div>
          <div className={styles.stepBody}>
            <h4>If the RAR is clean, inner files are extracted and scanned individually</h4>
            <p>No credit is deducted for the Phase A check on a clean RAR. Each extracted inner file then goes through its own complete analysis pipeline. Each inner file that meets its type's completion criteria costs Zero credit.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.callout} ${styles.calloutInfo}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <strong>Summary:</strong> If the RAR itself is malicious → 1 credit total. If the RAR is clean → 0 credits for the RAR, then 0 credit per inner file scanned.
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">What happens when a scan fails</div>
      <div className={`${styles.callout} ${styles.calloutWarn}`} style={{ marginTop: 0 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2L1 14h14L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M8 7v3.5M8 12.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        If any analysis method encounters a critical error — including a cancelled VT/HA upload, an API key issue, or a Sandbox failure — the entire scan is <strong>immediately aborted</strong>. An aborted scan is never saved to the database and never shown in your history. There is no "incomplete" scan state — every scan either completes fully, or is aborted entirely and discarded.
      </div>
    </>
  );
}