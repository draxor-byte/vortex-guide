import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const sections = [
  { id: 'hero', label: 'Overview', section: 'Introduction' },
  { id: 'what', label: 'What is Vortex', section: 'Introduction' },
  { id: 'account', label: 'Create Account', section: 'Getting Started' },
  { id: 'apikeys', label: 'API Keys', section: 'Getting Started' },
  { id: 'setup', label: 'VM Setup', section: 'Getting Started' },
  { id: 'profile', label: 'Profile Setup', section: 'Getting Started' },
  { id: 'scanning', label: 'How to Scan', section: 'Scanning' },
  { id: 'rules', label: 'Scan Rules', section: 'Scanning' },
  { id: 'results', label: 'Reading Results', section: 'Scanning' },
  { id: 'methods', label: 'Analysis Methods', section: 'Scanning' },
  { id: 'plans', label: 'Free vs Premium', section: 'Plans' },
  { id: 'history', label: 'Scan History', section: 'Plans' },
  { id: 'badges', label: 'Badge System', section: 'Community' },
  { id: 'rep', label: 'Reputation', section: 'Community' },
  { id: 'leaderboard', label: 'Leaderboard', section: 'Community' },
  { id: 'conduct', label: 'Rules & Conduct', section: 'Reference' },
  { id: 'faq', label: 'FAQ', section: 'Reference' },
  { id: 'download', label: 'Download', section: 'Reference' },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;
      let current = 'hero';
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      if (window.innerWidth < 1060) onToggle();
    }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          className={styles.menuToggle}
          onClick={onToggle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMenu size={24} />
        </motion.button>
      )}

      <motion.aside
        className={styles.sidebar}
        initial={false}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logoArea}>
            <div className={styles.logoIcon}>
              <img src="/vortex.ico" alt="Vortex" style={{ width: '32px', height: '32px' }} />
            </div>
            <span className={styles.logoText}>Vortex</span>
          </div>
          <motion.button
            className={styles.closeButton}
            onClick={onToggle}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <FiX size={20} />
          </motion.button>
        </div>

        <nav className={styles.nav}>
          {Object.entries(
            sections.reduce((acc, item) => {
              if (!acc[item.section]) acc[item.section] = [];
              acc[item.section].push(item);
              return acc;
            }, {} as Record<string, typeof sections>)
          ).map(([sectionName, items]) => (
            <div key={sectionName} className={styles.navGroup}>
              <div className={styles.navGroupLabel}>{sectionName}</div>
              {items.map(({ id, label }) => (
                <motion.button
                  key={id}
                  className={`${styles.navItem} ${activeId === id ? styles.active : ''}`}
                  onClick={() => scrollToSection(id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiChevronRight className={styles.navIcon} />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            <span>All systems operational</span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}