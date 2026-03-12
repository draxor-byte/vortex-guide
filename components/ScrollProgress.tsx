import { useEffect, useState } from 'react';
import styles from '../styles/ScrollProgress.module.css';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max > 0) {
        setWidth((window.scrollY / max) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${width}%` }} />
    </div>
  );
}