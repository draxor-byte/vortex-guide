import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  content: string | React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
}

export default function Section({ id, title, content, className = '', align = 'left' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect: background layer moves slower than foreground
  const yBg = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const slideX     = align === 'right' ? 24 : -24;
  const innerClass = `${styles.inner} ${align === 'right' ? styles.innerRight : styles.innerLeft}`;

  return (
    <section id={id} ref={ref} className={`${styles.section} ${className}`}>
      {/* Parallax background layer */}
      <motion.div
        className={styles.parallaxBg}
        style={{
          y: yBg,
          opacity: opacityBg,
          background: `radial-gradient(circle at 30% 50%, rgba(34,211,238,0.1) 0%, transparent 70%)`,
        }}
      />
      <div className={innerClass}>

        <motion.div
          initial={{ opacity: 0, x: slideX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className={styles.eyebrow}
        >
          {id === 'what'        && '01 — Introduction'}
          {id === 'account'     && '02 — Getting Started'}
          {id === 'apikeys'     && '03 — Getting Started'}
          {id === 'setup'       && '04 — Getting Started'}
          {id === 'profile'     && '05 — Getting Started'}
          {id === 'scanning'    && '06 — Scanning'}
          {id === 'rules'       && '07 — Scanning'}
          {id === 'results'     && '08 — Scanning'}
          {id === 'methods'     && '09 — Scanning'}
          {id === 'plans'       && '10 — Plans'}
          {id === 'history'     && '11 — Plans'}
          {id === 'badges'      && '12 — Community'}
          {id === 'rep'         && '13 — Community'}
          {id === 'leaderboard' && '14 — Community'}
          {id === 'conduct'     && '15 — Reference'}
          {id === 'faq'         && '16 — Reference'}
          {id === 'download'    && '17 — Download'}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: slideX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className={styles.title}
        >
          {title.split(' ').map((word, i) =>
            word.toLowerCase() === 'vortex'
              ? <span key={i} className="gradient-text">{word} </span>
              : word + ' '
          )}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: slideX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className={styles.content}
        >
          {typeof content === 'string'
            ? <div dangerouslySetInnerHTML={{ __html: content }} />
            : content}
        </motion.div>

      </div>
    </section>
  );
}