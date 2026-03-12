import styles from '../../styles/Sections.module.css';

export default function Plans() {
  return (
    <>
      <p className="sec-lead">
        All users receive 5 free scans per day. The full analysis pipeline — all seven methods — runs identically for both free and premium. The only difference is how credits are deducted.
      </p>
      <div className={styles.plansGrid}>
        <div className={`${styles.plan} ${styles.planFree}`}>
          <div className={styles.planTier}>Free</div>
          <div className={styles.planPrice}>5 Scans<span className={styles.planPer}> / day</span></div>
          <p className={styles.planNote}>Every account, every day. No payment. Resets at midnight IST.</p>
          <ul className={styles.planList}>
            <li className="yes">5 scans per day — resets at 12:00 AM IST</li>
            <li className="yes">Complete 7-layer analysis pipeline</li>
            <li className="yes">VirusTotal + Hybrid Analysis cross-reference</li>
            <li className="yes">Sandbox dynamic behavioral analysis</li>
            <li className="yes">Full AI verdict engine (4 models + arbiter)</li>
            <li className="yes">Complete risk score and detailed report</li>
            <li className="no">Deducted on both new and duplicate scans</li>
          </ul>
        </div>
        <div className={`${styles.plan} ${styles.planPremium}`}>
          <div className={`${styles.planTier} ${styles.premium}`}>Premium</div>
          <div className={styles.planPrice}>Scans<span className={styles.planPer}> never expire</span></div>
          <p className={styles.planNote}>Smart deduction — pay only for genuinely new files.</p>
          <ul className={styles.planList}>
            <li className="yes">Everything in Free — identical pipeline</li>
            <li className="yes">Credits <strong>never expire</strong> — no daily reset</li>
            <li className="yes"><strong>Zero cost</strong> on files already in the database</li>
            <li className="yes">1 scan only on genuinely new files</li>
            <li className="yes">Auto-used after daily free scans exhaust</li>
            <li className="yes">Stack seamlessly with daily free allocation</li>
            <li className="yes">Ideal for bulk scanning sessions</li>
          </ul>
        </div>
      </div>
    </>
  );
}