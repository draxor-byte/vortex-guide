import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import styles from '../styles/Topbar.module.css';

const navItems = [
  { id: 'hero',        label: 'Overview' },
  { id: 'what',        label: 'What is Vortex' },
  { id: 'account',     label: 'Account' },
  { id: 'apikeys',     label: 'API Keys' },
  { id: 'setup',       label: 'VM Setup' },
  { id: 'profile',     label: 'Profile' },
  { id: 'scanning',    label: 'How to Scan' },
  { id: 'rules',       label: 'Scan Rules' },
  { id: 'results',     label: 'Results' },
  { id: 'methods',     label: 'Methods' },
  { id: 'plans',       label: 'Plans' },
  { id: 'history',     label: 'History' },
  { id: 'badges',      label: 'Badges' },
  { id: 'rep',         label: 'Reputation' },
  { id: 'leaderboard', label: 'Leaderboard' },
  { id: 'conduct',     label: 'Conduct' },
  { id: 'faq',         label: 'FAQ' },
  { id: 'download',    label: 'Download' },
];

const DOWNLOAD_URL = 'https://github.com/blaze0089/Vortex-discord-token-security-grabber-detector/releases/download/V1.0.2/Vortex.exe';

interface TopbarProps {
  sidebarOpen: boolean;
}

export default function Topbar({ sidebarOpen }: TopbarProps) {
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 150;
      let current = 'hero';
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const idx = navItems.findIndex(item => item.id === activeId);
    if (idx === -1 || !navRef.current || !itemRefs.current[idx]) return;
    const container = navRef.current;
    const item = itemRefs.current[idx]!;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const itemLeft = itemRect.left - containerRect.left + container.scrollLeft;
    const targetScroll = itemLeft - container.clientWidth / 2 + item.offsetWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const leftOffset = sidebarOpen ? 300 : 70;

  return (
    <motion.header
      className={`${styles.topbar} ${scrolled ? styles.scrolled : ''}`}
      style={{ left: leftOffset }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
    >
      <button className={styles.logo} onClick={() => scrollToSection('hero')} aria-label="Back to top">
        <img src="/vortex.ico" alt="Vortex" style={{ width: '22px', height: '22px' }} />
        <span>Vortex</span>
      </button>

      <div className={styles.navStrip} ref={navRef}>
        {navItems.map((item, idx) => (
          <button
            key={item.id}
            ref={el => { itemRefs.current[idx] = el; }}
            className={`${styles.navItem} ${item.id === activeId ? styles.active : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <motion.a
        href={DOWNLOAD_URL}
        className={styles.downloadBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiDownload size={15} />
        <span>Download</span>
      </motion.a>
    </motion.header>
  );
}
