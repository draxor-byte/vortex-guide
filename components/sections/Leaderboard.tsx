import styles from '../../styles/Sections.module.css';

export default function Leaderboard() {
  return (
    <>
      <p className="sec-lead">
        Three separate rankings measure different dimensions of contribution. You can access them from the Leaderboard tab inside Vortex.
        Earn free scans by achieving Rank 1 by the end of the week (Monday, 12 AM IST). The users who top the Reputation, Grabber Detector, or Total Badges leaderboards will receive premium scans, which will be added directly to their accounts.
      </p>
      <div className={styles.cards3}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="10" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <rect x="8.5" y="6" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <rect x="15" y="3" width="5" height="17" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
            </svg>
          </div>
          <h3>Reputation Rank</h3>
          <p>Rankings by scan contribution to the global database. The most comprehensive measure of community activity and quality.</p>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="11" cy="11" r="1" fill="currentColor" />
            </svg>
          </div>
          <h3>Grabber Rank</h3>
          <p>Ranks users by confirmed Discord threat discoveries. A high position means you've been a significant force in identifying real malware in the wild.</p>
        </div>
        <div className={`${styles.card} ${styles.cardAmber}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciAmber}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M8 9.5L6 14l4-2 4 2-2-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <h3>Total Badges Rank</h3>
          <p>Rankings by total number of earned milestone badges. Reflects overall achievement across both Analyst and Hunter badge tracks combined.</p>
        </div>
      </div>
    </>
  );
}