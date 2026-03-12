import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload, FiMenu } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

export default function Navbar({ onMenuClick, sidebarOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const backdropFilter = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      style={{ opacity, backdropFilter }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          {!sidebarOpen && (
            <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Open menu">
              <FiMenu size={24} />
            </button>
          )}
          <div className={styles.logo} onClick={scrollToTop}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6v8c0 4 3 6.5 8 8 5-1.5 8-4 8-8V6l-8-4z" fill="url(#gradNav)" />
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="gradNav" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <span>Vortex</span>
          </div>
        </div>

        <div className={styles.right}>
          <a href="#download" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Download
          </a>
          <a href="#faq" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>
            FAQ
          </a>
          <a href="#download" className={styles.ctaBtn}>
            <FiDownload size={18} />
            <span>Get Vortex</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}