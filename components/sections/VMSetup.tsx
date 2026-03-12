import styles from '../../styles/Sections.module.css';

export default function VMSetup() {
  return (
    <>
      <p className="sec-lead">
        Vortex's Sandbox (dynamic analysis) requires a specific environment to operate. Without this setup, your original token will at risk — scans still run all other methods with dynamic behavioral detection.
      </p>

      <div className={`${styles.callout} ${styles.calloutDanger}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <strong>Always run Vortex inside a dedicated Virtual Machine.</strong> The Sandbox layer executes suspicious files to observe their behavior. Running this on your main machine risks infecting your real system.
      </div>

      <div className={styles.steps} style={{ marginTop: '40px' }}>
        <div className={styles.step}>
          <div className={styles.stepNum}>1</div>
          <div className={styles.stepBody}>
            <h4>Create a dedicated Virtual Machine</h4>
            <p>
              Set up a Windows 10/11 VM using VMware, VirtualBox, or similar software. This VM should be considered expendable — it can be restored from a snapshot at any time. Never use your main machine for Sandbox scanning.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>2</div>
          <div className={styles.stepBody}>
            <h4>Install Discord with a throwaway account</h4>
            <p>
              Install Discord inside the VM. Log in with a <strong>fake, dedicated throwaway account</strong> — never use your real account. Sandbox Method 1 (GrabberDetector) requires Discord to be actively running when a scan starts. If Discord is not running, scan will be stopped.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>3</div>
          <div className={styles.stepBody}>
            <h4>Install BlueStacks MSI App Player</h4>
            <p>
              Download and install <strong>BlueStacks MSI App Player</strong> (the MSI edition — HD-Player.exe) inside the VM. Vortex's Sandbox uses BlueStacks as an Android emulator during dynamic analysis. Without it, complete scan is stopped.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>4</div>
          <div className={styles.stepBody}>
            <h4>Run Vortex inside the VM for Sandbox scans</h4>
            <p>
              Launch Vortex inside the VM with Discord open and logged in. The Sandbox layer will then be able to execute and monitor suspicious files in a safe, contained environment.
            </p>
            <div className={`${styles.callout} ${styles.calloutInfo}`} style={{ marginTop: '12px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              If Discord is not running when a scan starts, you will see: <em>"Discord is not running. Please open Discord before starting a scan."</em> — this stops full scan.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards2} style={{ marginTop: '40px' }}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M6 19h10M11 17v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Required Software</h3>
          <ul className={styles.tickList}>
            <li>A Windows VM (VMware, VirtualBox, etc.)</li>
            <li>Discord — installed and logged into a fake account</li>
            <li>BlueStacks MSI App Player (HD-Player.exe)</li>
            <li>Vortex installed inside the VM</li>
          </ul>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M14.5 7.5l-7 7M7.5 7.5l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>What Happens Without Setup</h3>
          <ul className={`${styles.tickList} ${styles.red}`}>
            <li>Without Discord running → Scan never runs</li>
            <li>Without BlueStacks → Scan stops</li>
            <li>All other methods (Static, YARA, CAPA, VT, HA, AI) stops</li>
            <li>Your original token can be grabbed</li>
          </ul>
        </div>
      </div>
    </>
  );
}