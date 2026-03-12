import styles from '../../styles/Sections.module.css';

export default function Profile() {
  return (
    <>
      <p className="sec-lead">
        Your profile is visible to other users — it shows your stats, equipped badges, and the display name attached to all scan records you've submitted.
      </p>
      <div className={styles.cards2}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 4H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M17.5 2.5a2 2 0 0 1 2.8 2.8L11 14l-4 1 1-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Editable Fields</h3>
          <ul className={styles.tickList}>
            <li><strong>Username</strong> — changeable from Profile → Edit Profile</li>
            <li><strong>Display Name</strong> — shown on scan records and your profile</li>
            <li><strong>Avatar URL</strong> — direct image link for your profile picture</li>
            <li><strong>Bio</strong> — short description visible to others</li>
            <li><strong>Pronouns</strong> — displayed alongside your name</li>
            <li><strong>Equipped Badges</strong> — choose which earned badges to show</li>
            <li><strong>Display Badge</strong> — single badge shown on scan record cards</li>
          </ul>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M7 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Fixed / Auto-Tracked Fields</h3>
          <ul className={`${styles.tickList} ${styles.lock}`}>
            <li><strong>Email</strong> — used for login authentication only, cannot change</li>
            <li><strong>Hardware Binding</strong> — device locked on first login</li>
            <li><strong>Reputation</strong> — earned through scanning, never set manually</li>
            <li><strong>Grabber Detections</strong> — auto-tracked confirmed threat count</li>
            <li><strong>Total Badges</strong> — auto-counted from earned milestones</li>
          </ul>
        </div>
      </div>
    </>
  );
}