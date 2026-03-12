import styles from '../../styles/Sections.module.css';
import { useState } from 'react';

const analystBadges = [
  { key: 'files_50', name: 'Novice Archivist', desc: 'Reach 50 reputation' },
  { key: 'files_100', name: 'Data Collector', desc: 'Reach 100 reputation' },
  { key: 'files_250', name: 'Digital Hoarder', desc: 'Reach 250 reputation' },
  { key: 'files_350', name: 'Archive Guardian', desc: 'Reach 350 reputation' },
  { key: 'files_500', name: 'Vault Keeper', desc: 'Reach 500 reputation' },
  { key: 'files_1000', name: 'Master of Archives', desc: 'Reach 1000 reputation' },
];

const hunterBadges = [
  { key: 'grabbers_10', name: 'Threat Spotter', desc: 'Detect 10 grabbers' },
  { key: 'grabbers_50', name: 'Stealer Hunter', desc: 'Detect 50 grabbers' },
  { key: 'grabbers_100', name: 'Malware Slayer', desc: 'Detect 100 grabbers' },
  { key: 'grabbers_300', name: 'Grabber Exterminator', desc: 'Detect 300 grabbers' },
  { key: 'grabbers_500', name: 'Discord Purifier', desc: 'Detect 500 grabbers' },
];

const fallbackIcons = {
  files: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="16" r="9" stroke="currentColor" stroke-width="2"/><path d="M13 24l-2 10 9-5 9 5-2-10" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="20" cy="16" r="4" fill="currentColor" opacity=".25"/></svg>`,
  grabbers: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="7" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="20" cy="20" r="2" fill="currentColor"/><path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
};

export default function Badges() {
  return (
    <>
      <p className="sec-lead">
        Badges are milestone awards earned automatically as you scan files and detect threats. Eleven badges across two independent progression tracks.
      </p>

      <div className={styles.trackHeader}>
        <span className={styles.trackLabel}>Analyst Track</span>
        <span className={styles.trackSub}>Earned by Reputation</span>
        <span className={`${styles.trackPill} ${styles.purple}`}>REP</span>
      </div>
      <p className={styles.trackDesc}>Reputation grows each time you contribute completed scans to the global database.</p>
      <div className={styles.badgeRow}>
        {analystBadges.map((badge) => (
          <BadgeCard key={badge.key} badge={badge} type="files" />
        ))}
      </div>

      <div className={styles.trackHeader} style={{ marginTop: '48px' }}>
        <span className={styles.trackLabel}>Hunter Track</span>
        <span className={styles.trackSub}>Earned by Grabber Detections</span>
        <span className={`${styles.trackPill} ${styles.pink}`}>GRAB</span>
      </div>
      <p className={styles.trackDesc}>Increases each time one of your scans confirms a Discord token stealer.</p>
      <div className={styles.badgeRow}>
        {hunterBadges.map((badge) => (
          <BadgeCard key={badge.key} badge={badge} type="grabbers" />
        ))}
      </div>

      <div className={styles.divider}></div>
      <div className="sec-eyebrow">Badge Perks</div>
      <p style={{ color: '#94a3b8', marginBottom: '20px', fontSize: '0.9rem' }}>Badges are milestone awards with real visibility benefits. Here's what earning badges gives you:</p>
      <div className={styles.badgePerks}>
        <div className={styles.bpItem}>
          <div className={styles.bpItemIcon}>🏅</div>
          <div className={styles.bpItemTitle}>Profile Display</div>
          <div className={styles.bpItemDesc}>Your earned and equipped badges are visible on your public profile page, showcasing your progression to other community members.</div>
        </div>
        <div className={styles.bpItem}>
          <div className={styles.bpItemIcon}>🎴</div>
          <div className={styles.bpItemTitle}>Premium scans</div>
          <div className={styles.bpItemDesc}>Get free premium scans as per badges perks.</div>
        </div>
        <div className={styles.bpItem}>
          <div className={styles.bpItemIcon}>🏆</div>
          <div className={styles.bpItemTitle}>Leaderboard Ranking</div>
          <div className={styles.bpItemDesc}>Your total badge count determines your position on the Total Badges leaderboard — a measure of overall milestone achievement.</div>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutSuccess}`} style={{ marginTop: '28px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M5 10.5L4 14l4-2 4 2-1-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        </svg>
        <strong>Badges are fully automatic.</strong> The moment you hit a threshold, the badge is queued. A congratulations notification appears on your screen. You can claim the badge by clicking Claim.
      </div>
    </>
  );
}

function BadgeCard({ badge, type }: { badge: { key: string; name: string; desc: string }; type: 'files' | 'grabbers' }) {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    console.error(`Image failed to load: /badges/${badge.key}.png`);
    setImgError(true);
  };

  const handleLoad = () => {
    console.log(`Image loaded successfully: /badges/${badge.key}.png`);
  };

  return (
    <div className={`${styles.badgeCard} ${type === 'files' ? styles.bcPurple : styles.bcPink}`}>
      <div className={styles.bcIcon} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {!imgError ? (
          <img
            src={`/badges/${badge.key}.png`}
            alt={badge.name}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%' }} dangerouslySetInnerHTML={{ __html: fallbackIcons[type] }} />
        )}
      </div>
      <div className={styles.bcName}>{badge.name}</div>
      <div className={styles.bcReq}>{badge.desc}</div>
    </div>
  );
}