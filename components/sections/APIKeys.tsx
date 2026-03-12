import styles from '../../styles/Sections.module.css';

export default function APIKeys() {
  return (
    <>
      <p className="sec-lead">
        Vortex requires three external API keys. You can add them either through the <strong>Settings page inside the tool</strong>, or by editing <code>config.json</code> directly. Keys are stored locally and only leave your machine to query their services during a scan.
      </p>

      <div className={styles.cards3}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardTag} ${styles.tagGreen}`}>Free Key</div>
          <h3>VirusTotal</h3>
          <p>Queries VirusTotal's 70+ engine database for exe/dll file cross-referencing. Results return in under 10 seconds for known files.</p>
          <div className={styles.keySteps}>
            <div className={styles.ks}>1. Create a free account at virustotal.com</div>
            <div className={styles.ks}>2. Go to your profile → API Key</div>
            <div className={styles.ks}>3. Copy the 64-character key</div>
            <div className={styles.ks}>4. Paste in Settings → API Keys → VirusTotal, or add to <code>virustotal_keys</code> array in config.json</div>
          </div>
          <div className={styles.keyLimit}>500 requests/day · Free tier</div>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={`${styles.cardTag} ${styles.tagGreen}`}>Free Key</div>
          <h3>Hybrid Analysis</h3>
          <p>Queries the Hybrid Analysis sandbox database for behavioral reports. Results return in under 10 seconds for known files.</p>
          <div className={styles.keySteps}>
            <div className={styles.ks}>1. Register at hybrid-analysis.com</div>
            <div className={styles.ks}>2. Go to profile → API Key</div>
            <div className={styles.ks}>3. Copy your key</div>
            <div className={styles.ks}>4. Paste in Settings → API Keys → Hybrid Analysis, or add to <code>hybridanalysis_keys</code> array in config.json</div>
          </div>
          <div className={styles.keyLimit}>200 requests/day · Free tier</div>
        </div>
        <div className={`${styles.card} ${styles.cardAmber}`}>
          <div className={`${styles.cardTag} ${styles.tagAmber}`}>Free key</div>
          <h3>OpenRouter</h3>
          <p>Powers the AI verdict engine. Multiple AI models analyze evidence independently, followed by a final synthesis pass.</p>
          <div className={styles.keySteps}>
            <div className={styles.ks}>1. Create an account at openrouter.ai</div>
            <div className={styles.ks}>2. No need to add credit balance</div>
            <div className={styles.ks}>3. Generate an API key in settings</div>
            <div className={styles.ks}>4. Paste in Settings → API Keys → OpenRouter, or add to <code>openrouter_keys</code> array in config.json</div>
          </div>
          <div className={styles.keyLimit}>50-per-key-per-day · 0 cost per scan</div>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutSuccess}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 8l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <strong>Preferred method: Settings page.</strong> Open Vortex → Settings → API Keys. Enter your keys and click Save. No file editing required — the tool writes directly to config.json for you.
      </div>

      <div className={styles.codeBlock} style={{ marginTop: '28px' }}>
        <div className={styles.cbHeader}>
          <div className={styles.cbDots}><span></span><span></span><span></span></div>
          <span className={styles.cbTitle}>config.json — actual field names</span>
        </div>
        <div className={styles.cbBody}>
          <div className={styles.cbLine}><span className={styles.cbKey}>{`{`}</span></div>
          <div className={`${styles.cbLine} ${styles.cbIndent}`}><span className={styles.cbString}>"virustotal_keys"</span><span className={styles.cbKey}>:   </span><span className={styles.cbArr}>["YOUR_VIRUSTOTAL_KEY_HERE"]</span><span className={styles.cbKey}>,</span></div>
          <div className={`${styles.cbLine} ${styles.cbIndent}`}><span className={styles.cbString}>"hybridanalysis_keys"</span><span className={styles.cbKey}>: </span><span className={styles.cbArr}>["YOUR_HYBRID_ANALYSIS_KEY_HERE"]</span><span className={styles.cbKey}>,</span></div>
          <div className={`${styles.cbLine} ${styles.cbIndent}`}><span className={styles.cbString}>"openrouter_keys"</span><span className={styles.cbKey}>:    </span><span className={styles.cbArr}>["YOUR_OPENROUTER_KEY_HERE"]</span></div>
          <div className={styles.cbLine}><span className={styles.cbKey}>{`}`}</span></div>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutDanger}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <strong>Never share your config.json.</strong> Anyone with your API keys can consume your quota and scan files under your identity. Never screenshot it or include it in support requests.
      </div>
    </>
  );
}