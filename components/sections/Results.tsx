import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Sections.module.css';

export default function Results() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(65);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const angle = (score / 100) * 180 - 90;

  return (
    <>
      <p className="sec-lead">
        Every completed scan produces a Risk Score from 0 to 100 and a detection label. These are the primary verdict — everything else is supporting evidence.
      </p>

      <div className={styles.riskVisual}>
        <div className={styles.riskGaugeArea}>
          <svg width="200" height="130" viewBox="0 0 200 130">
            <path d="M 18 118 A 86 86 0 0 1 182 118" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 18 118 A 86 86 0 0 1 75 36"  fill="none" stroke="rgba(52,211,153,0.45)"  strokeWidth="12" strokeLinecap="round" />
            <path d="M 75 36 A 86 86 0 0 1 145 36"  fill="none" stroke="rgba(245,158,11,0.45)"  strokeWidth="12" strokeLinecap="round" />
            <path d="M 145 36 A 86 86 0 0 1 182 118" fill="none" stroke="rgba(248,113,113,0.5)" strokeWidth="12" strokeLinecap="round" />

            <motion.g
              initial={{ rotate: -90 }}
              animate={{ rotate: angle }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originX: "100px", originY: "118px" }}
            >
              <line x1="100" y1="118" x2="62" y2="55" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="118" r="5" fill="#7dd3fc" style={{ filter: 'drop-shadow(0 0 8px #7dd3fc)' }} />
            </motion.g>
          </svg>

          <div className={styles.gaugeInfo}>
            <motion.div
              className={styles.gaugeVal}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {score}
            </motion.div>
            <div className={styles.gaugeSub}>Example Score</div>
          </div>
        </div>

        <div className={styles.riskZones}>
          <div className={styles.rz}>
            <span className={`${styles.rzR} green`}>0–19</span>
            <div className={styles.rzBar}><div className={styles.rzf} style={{ width: '20%', background: 'rgb(52,211,153)' }}></div></div>
            <span className={styles.rzLbl}>Clean</span>
          </div>
          <div className={styles.rz}>
            <span className={`${styles.rzR} yellow`}>20–39</span>
            <div className={styles.rzBar}><div className={styles.rzf} style={{ width: '40%', background: 'rgb(253,224,71)' }}></div></div>
            <span className={styles.rzLbl}>Low Risk</span>
          </div>
          <div className={styles.rz}>
            <span className={`${styles.rzR} yellow`}>40–59</span>
            <div className={styles.rzBar}><div className={styles.rzf} style={{ width: '60%', background: 'rgb(251,146,60)' }}></div></div>
            <span className={styles.rzLbl}>Moderate — Caution</span>
          </div>
          <div className={styles.rz}>
            <span className={`${styles.rzR} red`}>60–79</span>
            <div className={styles.rzBar}><div className={styles.rzf} style={{ width: '80%', background: 'rgb(248,113,113)' }}></div></div>
            <span className={styles.rzLbl}>Suspicious</span>
          </div>
          <div className={styles.rz}>
            <span className={`${styles.rzR} red`}>80–100</span>
            <div className={styles.rzBar}><div className={styles.rzf} style={{ width: '100%', background: 'rgb(239,68,68)' }}></div></div>
            <span className={styles.rzLbl}>Threat Detected</span>
          </div>
        </div>
      </div>

      {/* Dark card wrapper for table and callout */}
      <div className={styles.dataTableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Detection Label</th>
              <th>Score</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className={`${styles.badgePill} ${styles.bpGreen}`}>Clean</span></td>
              <td><code>0–59</code></td>
              <td>No significant indicators. File is considered safe.</td>
            </tr>
            <tr>
              <td><span className={`${styles.badgePill} ${styles.bpYellow}`}>Suspicious</span></td>
              <td><code>60–79</code></td>
              <td>Enough indicators to flag concern. Treat with caution.</td>
            </tr>
            <tr>
              <td><span className={`${styles.badgePill} ${styles.bpRed}`}>Highly Suspicious</span></td>
              <td><code>80–99</code></td>
              <td>Strong malicious evidence. Do not open or execute.</td>
            </tr>
            <tr>
              <td><span className={`${styles.badgePill} ${styles.bpRed}`}>Discord Token Stealer</span></td>
              <td><code>100 / Rule</code></td>
              <td>Confirmed threat. Delete and report immediately.</td>
            </tr>
            <tr>
              <td><span className={`${styles.badgePill} ${styles.bpGray}`}>Error</span></td>
              <td><code>N/A</code></td>
              <td>A method encountered an error and the scan was aborted. Re-scan the file. No credit is saved for aborted scans.</td>
            </tr>
          </tbody>
        </table>

        <div className={`${styles.callout} ${styles.calloutInfo} ${styles.calloutInsideCard}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          A score of <strong>60+</strong> triggers the suspicious flag. A score of <strong>80+</strong> is high‑confidence detection. The AI verdict may override the numeric score in edge cases.
        </div>
      </div>
    </>
  );
}