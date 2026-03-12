import styles from '../../styles/Sections.module.css';

export default function Methods() {
  return (
    <>
      <p className="sec-lead">
        Seven independent analysis layers run in sequence and combine into a weighted composite risk score. Every layer targets a different class of evidence — no single method is more important than the others.
      </p>
      <div className={styles['method-list']}>
        <div className={styles['method-item']}>
          <div className={styles['method-n']}>1</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>Static Analysis</span>
              <span className={`${styles['method-tag']} ${styles.green}`}>Always runs · no key required</span>
            </div>
            <p>The file is inspected without execution. PE structure, byte patterns, embedded strings, import tables, entropy levels, TLS callbacks, overlay data, packer detection, and PyInstaller payload extraction are all analyzed.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>2</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>YARA Scanning</span>
              <span className={`${styles['method-tag']} ${styles.green}`}>Always runs · no key required</span>
            </div>
            <p>A custom YARA ruleset scans the file's binary content for known Discord stealer behavioral patterns, payload signatures, and obfuscation techniques. YARA matches are weighted in the risk score and passed to the AI models as evidence.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>3</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>CAPA Capability Analysis</span>
              <span className={`${styles['method-tag']} ${styles.green}`}>Always runs on PE files · no key required</span>
            </div>
            <p>CAPA identifies what capabilities the file has — network access, file system operations, process injection, encryption usage, and more — by matching against a library of known behavioral signatures. Outputs labeled capability categories.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>4</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>VirusTotal Cross-Reference</span>
              <span className={`${styles['method-tag']} ${styles.amber}`}>Requires your VT API key</span>
            </div>
            <p>Queries VirusTotal's database using the file's SHA-256 hash to retrieve results from 70+ antivirus engines. For known files, results return in under 10 seconds. Unknown files trigger an upload prompt — you can allow or cancel.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>5</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>Hybrid Analysis Intelligence</span>
              <span className={`${styles['method-tag']} ${styles.amber}`}>Requires your HA API key</span>
            </div>
            <p>Queries Hybrid Analysis's sandbox database by file hash for existing behavioral reports — threat tags, network behavior, verdicts, and classification labels. For known files, results return in under 10 seconds.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>6</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>Sandbox (Dynamic Analysis)</span>
              <span className={`${styles['method-tag']} ${styles.purple}`}>Requires Discord running + BlueStacks installed</span>
            </div>
            <p>The file is executed inside an instrumented environment. <strong>Method 1</strong> (GrabberDetector) monitors Discord process interactions, file system access patterns, and network connections in real time. <strong>Method 2</strong> (Blaze Detector) performs deep scan to catch advanced evasion techniques.</p>
          </div>
        </div>

        <div className={styles['method-item']}>
          <div className={styles['method-n']}>7</div>
          <div className={styles['method-body']}>
            <div className={styles['method-top']}>
              <span className={styles['method-name']}>AI Verdict Engine</span>
              <span className={`${styles['method-tag']} ${styles.purple}`}>Requires your OpenRouter key</span>
            </div>
            <p>Four AI models independently analyze all gathered evidence from every prior method and each produces a verdict with confidence score and written reasoning. A final synthesis pass reviews all prior model judgments and produces the definitive classification label.</p>
          </div>
        </div>
      </div>
    </>
  );
}