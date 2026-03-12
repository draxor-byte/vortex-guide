import styles from '../../styles/Sections.module.css';

export default function History() {
  return (
    <>
      <p className="sec-lead">
        Every completed scan is stored in the global database and permanently linked to your account. View your full history from the History tab inside Vortex.
      </p>
      <div className={styles.cards2}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M9 11l3 3L21 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 11v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.8" fill="none" />
            </svg>
          </div>
          <h3>Your History</h3>
          <p>The History tab shows every scan you've submitted — file name, hash, risk score, detection label, and timestamp. Click any entry to open the full detailed report.</p>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M2 11h4M16 11h4M11 2v4M11 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Global Database</h3>
          <p>Once a scan completes successfully, the file enters the shared global database. Any user scanning the same file gets the cached result instantly. The first submitter is permanently credited as the original discoverer.</p>
        </div>
      </div>
      <div className={`${styles.callout} ${styles.calloutInfo}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Only <strong>fully completed scans</strong> are saved to the database. If a scan is aborted for any reason — API error, cancelled upload, or method failure — it is not saved and does not appear in your history.
      </div>
    </>
  );
}