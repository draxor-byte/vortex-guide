import styles from '../../styles/Sections.module.css';

export default function WhatIsVortex() {
  return (
    <>
      <p className="sec-lead">
        Vortex is a desktop threat analysis tool built specifically to identify Discord token stealers, credential grabbers, and malware targeting the Discord ecosystem. It combines seven independent analysis layers into a single scored verdict.
      </p>
      <div className={styles.cards2}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={`${styles.cardIconWrap} ${styles.ciPurple}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 3l8 4.5v7L11 19l-8-4.5v-7L11 3z" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <h3>Multi-Layer Analysis</h3>
          <p>
            Every scan runs Static, YARA, CAPA, VirusTotal, Hybrid Analysis, Sandbox (dynamic), and AI verdict in sequence. All layers contribute to a composite 0–100 risk score — no single method determines the outcome alone.
          </p>
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
          <h3>Discord-Focused Intelligence</h3>
          <p>
            Vortex looks specifically for Discord token access, credential exfiltration, Discord API abuse, and webhook callbacks. It distinguishes genuine threats from false-positive cheat injectors and game trainers using behavioral signatures.
          </p>
        </div>
      </div>
    </>
  );
}