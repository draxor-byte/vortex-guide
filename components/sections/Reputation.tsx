import styles from '../../styles/Sections.module.css';

export default function Reputation() {
  return (
    <>
      <p className="sec-lead">
        Three stats define your community standing. All tracked automatically — you never input them manually.
      </p>
      <div className={styles.cards3}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 3l2.5 7.5H21l-6.5 4.5 2.5 7.5L11 18l-6 4.5 2.5-7.5L1 10.5h7.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <h3>Reputation</h3>
          <p>The primary progression metric. Grows as you contribute completed scans to the global database. Determines your rank on the main leaderboard and drives the Analyst badge track.</p>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="11" cy="11" r="1" fill="currentColor" />
              <path d="M11 3v2.5M11 16.5V19M3 11h2.5M16.5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Grabber Detections</h3>
          <p>Counts confirmed Discord token stealers you've found. Tracked independently from reputation. Determines your rank on the threat-hunter leaderboard and drives the Hunter badge track.</p>
        </div>
        <div className={`${styles.card} ${styles.cardAmber}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciAmber}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M8 9.5L6 14l4-2 4 2-2-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <h3>Total Badges</h3>
          <p>Your cumulative count of earned milestone badges. Reflects overall achievement across both the Analyst and Hunter tracks. Shown on your profile and the Total Badges leaderboard.</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <table className={styles.dataTable}>
        <thead><tr><th>Stat</th><th>What It Tracks</th><th>Visible to Others</th></tr></thead>
        <tbody>
          <tr><td><code>reputation</code></td><td>Scan contributions to the global database</td><td><span className={styles.okText}>Yes — profile &amp; leaderboard</span></td></tr>
          <tr><td><code>grabberDetections</code></td><td>Confirmed Discord threats discovered</td><td><span className={styles.okText}>Yes — profile &amp; leaderboard</span></td></tr>
          <tr><td><code>badges</code> (count)</td><td>Total earned milestone badges</td><td><span className={styles.okText}>Yes — profile &amp; leaderboard</span></td></tr>
          <tr><td><code>freeScansLeft</code></td><td>Remaining free scans for today</td><td><span className={styles.mutedText}>Only you</span></td></tr>
          <tr><td><code>premiumScans</code></td><td>Remaining premium credit balance</td><td><span className={styles.mutedText}>Only you</span></td></tr>
        </tbody>
      </table>
    </>
  );
}