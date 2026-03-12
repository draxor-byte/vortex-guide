import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2L2 5.5v6c0 4 3.5 5.5 7 7 3.5-1.5 7-3 7-7v-6L9 2z" fill="url(#grad)" />
            <path d="M6 9l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="grad" x1="2" y1="2" x2="16" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.name}>Vortex</span>
          <span className={styles.sep}>·</span>
          <span className={styles.sub}>Discord Threat Analysis Platform</span>
        </div>
        <div className={styles.copy}>Documentation · All rights reserved</div>
      </div>
    </footer>
  );
}