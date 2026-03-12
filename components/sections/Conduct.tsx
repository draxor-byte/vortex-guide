import styles from '../../styles/Sections.module.css';

export default function Conduct() {
  return (
    <>
      <p className="sec-lead">
        Vortex enforces strict policies to maintain integrity. Violations are detected automatically and result in permanent bans with no appeal process.
      </p>
      <div className={styles.cards2}>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M14.5 7.5l-7 7M7.5 7.5l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Prohibited</h3>
          <ul className={`${styles.tickList} ${styles.red}`}>
            <li>Creating more than one account per person or device</li>
            <li>Using VPNs or proxies during account registration</li>
            <li>Sharing your account, session, or credentials</li>
            <li>Attaching debugging tools to the Vortex process</li>
            <li>Intercepting or tampering with Vortex network traffic</li>
            <li>Attempting to reverse-engineer security measures</li>
            <li>Submitting false or fabricated scan data</li>
          </ul>
        </div>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Permitted</h3>
          <ul className={`${styles.tickList} ${styles.green}`}>
            <li>Scanning any file you have a legitimate reason to analyze</li>
            <li>Using a VPN after registration — login and scanning are fine</li>
            <li>Sharing scan result summaries in communities</li>
            <li>Using all 5 of your free daily scans every day</li>
            <li>Discussing Vortex findings publicly</li>
            <li>Reporting bugs or suspected false positives to the team</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutDanger}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <div>
          <strong>Automatic ban system — no appeal, no exceptions.</strong><br />
          Attaching a debugger to the Vortex process triggers an <strong>immediate, silent, permanent ban</strong> — no warning is given. The ban covers your account, your current IP address, and your original registration IP. All three are blocked simultaneously. IP bans prevent new accounts from being registered from the same IP. There is no manual review process and no appeal path. Any account found violating these rules is permanently banned and cannot be reinstated.
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">Best Practices</div>
      <div className={styles.steps}>
        <div className={`${styles.step} ${styles.stepGood}`}>
          <div className={`${styles.stepNum} ${styles.stepNumGood}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className={styles.stepBody}>
            <h4>Configure all three API keys before your first scan</h4>
            <p>Without VirusTotal and Hybrid Analysis keys, those cross-reference layers are skipped. Without your OpenRouter key, the AI verdict engine is disabled. Set up all three before scanning for the most accurate results.</p>
          </div>
        </div>
        <div className={`${styles.step} ${styles.stepGood}`}>
          <div className={`${styles.stepNum} ${styles.stepNumGood}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className={styles.stepBody}>
            <h4>Never close Vortex or disconnect mid-scan</h4>
            <p>Closing the app or losing internet during a scan aborts the entire scan — which is discarded and not saved. The credit may still be deducted. Always let scans run to full completion.</p>
          </div>
        </div>
        <div className={`${styles.step} ${styles.stepGood}`}>
          <div className={`${styles.stepNum} ${styles.stepNumGood}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className={styles.stepBody}>
            <h4>Protect your config.json file</h4>
            <p>Your API keys live in config.json. Never share it, include it in screenshots, or upload it anywhere. Anyone with your keys can consume your API quota.</p>
          </div>
        </div>
        <div className={`${styles.step} ${styles.stepGood}`}>
          <div className={`${styles.stepNum} ${styles.stepNumGood}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className={styles.stepBody}>
            <h4>Always run Sandbox scans inside a VM</h4>
            <p>The Sandbox executes suspicious files. Running this on your real machine is dangerous. Maintain a dedicated VM snapshot you can restore after each scanning session.</p>
          </div>
        </div>
      </div>
    </>
  );
}