import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!panel1Ref.current || !panel2Ref.current || !panel3Ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      panel1Ref.current.style.transform = `perspective(1200px) rotateY(${-12 + x * 8}deg) rotateX(${5 + y * -5}deg)`;
      panel2Ref.current.style.transform = `perspective(1200px) rotateY(${-6 + x * 12}deg) rotateX(${-3 + y * -6}deg) translateZ(-40px)`;
      panel3Ref.current.style.transform = `perspective(1200px) rotateY(${8 + x * 6}deg) rotateX(${7 + y * -4}deg) translateZ(-70px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroKicker}
          >
            <span className={styles.kickerDot}></span>
            Advanced Threat Analysis Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className={styles.heroH1}
          >
            The complete guide<br />to <span className="gradient-text">Vortex</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className={styles.heroDesc}
          >
            Vortex is a multi-layer behavioral threat analysis platform that detects Discord-targeting malware, token stealers, and credential grabbers — before they do damage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className={styles.heroTags}
          >
            <span className={`${styles.tag} ${styles.tagPurple}`}>Discord Threat Detection</span>
            <span className={`${styles.tag} ${styles.tagPurple}`}>Static + YARA + CAPA</span>
            <span className={`${styles.tag} ${styles.tagPink}`}>AI Verdict Engine</span>
            <span className={`${styles.tag} ${styles.tagTeal}`}>Sandbox Analysis</span>
            <span className={styles.tag}>Risk Scoring</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className={styles.heroActions}
          >
            <a href="#account" className={styles.btnPrimary}>
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4.5L12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#download" className={styles.btnGhost}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M5.5 8L8 10.5 10.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 13h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Download Vortex
            </a>
          </motion.div>
        </div>

        <div className={styles.heroPanels}>
          <div className={`${styles.heroPanel} ${styles.hp1}`} ref={panel1Ref}>
            <div className={styles.hpBar}>
              <div className={styles.hpDots}>
                <span className={styles.hpdRed}></span>
                <span className={styles.hpdYellow}></span>
                <span className={styles.hpdGreen}></span>
              </div>
              <div className={styles.hpTitle}>SCAN PROGRESS</div>
            </div>
            <div className={styles.hpBody}>
              <div className={styles.hpRow}><span className={styles.hl}>Static ........</span><span className={styles.hv}> DONE</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>YARA  ........</span><span className={styles.hv}> DONE</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>CAPA  ........</span><span className={styles.hv}> DONE</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>VT    ........</span><span className={styles.hv}> DONE</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>HA    ........</span><span className={styles.hv}> DONE</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>Sandbox ......</span><span className={styles.ho}> RUNNING</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>AI Models ....</span><span className={styles.hl}> WAITING</span></div>
            </div>
            <div className={styles.hpBarScan}><div className={styles.hpFill}></div></div>
          </div>

          <div className={`${styles.heroPanel} ${styles.hp2}`} ref={panel2Ref}>
            <div className={styles.hpBar}>
              <div className={styles.hpDots}>
                <span className={styles.hpdRed}></span>
                <span className={styles.hpdYellow}></span>
                <span className={styles.hpdGreen}></span>
              </div>
              <div className={styles.hpTitle}>DETECTION</div>
            </div>
            <div className={styles.hpBody}>
              <div className={styles.hpRow}><span className={styles.hl}>Verdict:</span><span className={styles.hw}> MALICIOUS</span></div>
              <div className={styles.hpRow}><span className={styles.hl}>Score: </span><span className={styles.hw}> 94/100</span></div>
              <div className={`${styles.hpRow} ${styles.mt}`}><span className={styles.hk}>discord_db_access</span></div>
              <div className={styles.hpRow}><span className={styles.hk}>token_exfiltration</span></div>
              <div className={styles.hpRow}><span className={styles.hv}>AI: 4/4 agree</span></div>
            </div>
          </div>

          <div className={`${styles.heroPanel} ${styles.hp3}`} ref={panel3Ref}>
            <div className={styles.hpBar}>
              <div className={styles.hpDots}>
                <span className={styles.hpdRed}></span>
                <span className={styles.hpdYellow}></span>
                <span className={styles.hpdGreen}></span>
              </div>
              <div className={styles.hpTitle}>RISK SCORE</div>
            </div>
            <div className={`${styles.hpBody} ${styles.center}`}>
              <div className={styles.riskBig}>94</div>
              <div className={styles.riskLbl}>THREAT DETECTED</div>
              <div className={styles.riskBar}><div className={styles.riskBarFill}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}