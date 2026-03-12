import styles from '../../styles/Sections.module.css';

export default function Scanning() {
  return (
    <>
      <p className="sec-lead">
        Three methods to load a file into Vortex. All three lead to the identical analysis pipeline and produce the same results.
      </p>

      <div className={styles.cards3}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M20 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" fill="none" />
            </svg>
          </div>
          <h3>File Browser</h3>
          <p>Click the upload zone in the Scanner tab. A standard file picker opens — navigate to the target file and click Open to begin analysis.</p>
          <ol className={styles.numList}>
            <li>Click the upload zone on the Scanner tab</li>
            <li>Navigate to the file in the dialog</li>
            <li>Click Open — scan begins automatically</li>
          </ol>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPink}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Drag &amp; Drop</h3>
          <p>Drag any file from Windows File Explorer and drop it directly onto the Vortex window. Fastest method — zero navigation required.</p>
          <ol className={styles.numList}>
            <li>Open File Explorer alongside Vortex</li>
            <li>Drag the target file</li>
            <li>Drop onto the Vortex window — instant load</li>
          </ol>
        </div>
        <div className={`${styles.card} ${styles.cardAmber}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciAmber}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M20 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <path d="M11 10v6M8.5 13.5L11 16l2.5-2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Folder or RAR Archive</h3>
          <p>Select an entire folder or a RAR archive. Each file inside is scanned through its own pipeline. See Scan Rules for credit deduction details.</p>
          <ol className={styles.numList}>
            <li>Browse to the folder or .rar file</li>
            <li>Each file is analyzed individually</li>
            <li>Credits deducted per scan rules below</li>
          </ol>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">What happens during a scan</div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNum}>1</div>
          <div className={styles.stepBody}>
            <h4>File is hashed — database checked</h4>
            <p>Vortex computes a SHA-256 hash of the file. If this exact file has been scanned before by any user, the cached result is returned immediately. Your credit is still used — but the result is instant.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>2</div>
          <div className={styles.stepBody}>
            <h4>Static Analysis + YARA + CAPA run simultaneously</h4>
            <p>The file is inspected without execution. PE structure, byte patterns, embedded strings, import tables, entropy levels, overlay data, packer detection, and PyInstaller payload extraction are all analyzed.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>3</div>
          <div className={styles.stepBody}>
            <h4>VirusTotal and Hybrid Analysis are queried</h4>
            <p>VT and HA are queried by hash for their database results. For known files, both services typically respond in <strong>under 10 seconds</strong>. If a file is unknown to VT or HA, an upload is performed — you can choose to allow or cancel this upload.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>4</div>
          <div className={styles.stepBody}>
            <h4>Sandbox runs dynamic behavioral analysis</h4>
            <p>For supported executable formats, the file is executed in an instrumented environment (requires Discord running + BlueStacks installed in the VM). Sandbox Method 1 monitors GrabberDetector signals and network connections. Method 2 performs deep scans.</p>
            <div className={styles.stepBadge}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.3"/><path d="M6.5 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              New exe/dll: typically 3–20 min depending on file size
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>5</div>
          <div className={styles.stepBody}>
            <h4>AI models produce independent verdicts</h4>
            <p>Four AI models analyze all gathered evidence independently, each producing a verdict with confidence score and reasoning. A final synthesis pass reviews all prior judgments and produces the definitive classification.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutWarn}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2L1 14h14L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M8 7v3.5M8 12.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <strong>Expected scan time for a new executable:</strong> approximately 3 to 20 minutes depending on file size (up to 40 MB). Files larger than 40 MB can exceed 30 minutes. There is no enforced maximum — never close Vortex mid-scan.
      </div>
    </>
  );
}