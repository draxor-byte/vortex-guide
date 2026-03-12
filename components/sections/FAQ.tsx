import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/Sections.module.css';

const faqData = [
  { q: "My scan seems to have failed silently — what happened?", a: "If any analysis method encounters a critical error — cancelled upload, API key issue, network timeout, or Sandbox failure — the entire scan is aborted immediately and discarded. It will not appear in your history and no result is saved. Simply re-upload and try again. There is no 'incomplete' scan state — a scan either fully completes and is saved, or is fully aborted and discarded." },
  { q: "Exactly when do my free scans reset?", a: "Free scans reset at 12:00 AM Indian Standard Time (IST) — which is 18:30 UTC the previous day. This applies to all accounts simultaneously." },
  { q: "I scanned the same file twice — did I use two free scans?", a: "Yes. Free scans are deducted on every submission, including duplicates. Premium credits work differently — scanning a file already in the database costs 0 premium credits." },
  { q: "Can I use a VPN with Vortex?", a: "VPN use is blocked during account registration only. After your account is created, using a VPN for login and scanning is permitted." },
  { q: "Why is my account locked to one device?", a: "Your account is bound to the hardware ID of the first device you log in from. This prevents account sharing. If you need to transfer to a new machine, contact the Vortex team directly." },
  { q: "How do badges get awarded?", a: "Badges are fully automatic. The instant you hit a milestone threshold, the badge is queued in the system. You'll see a congratulations popup on your next login. Nothing is required on your part." },
  { q: "What's the difference between reputation and grabber detections?", a: "Reputation increases with every completed scan contribution — it measures activity volume. Grabber detections count only scans where a confirmed Discord token stealer was found — it measures threat discovery quality." },
  { q: "My scan is taking a very long time — is something wrong?", a: "New executable files typically take 3 to 20 minutes to fully analyze, depending on file size. Files already in the global database return results instantly. Files larger than 40 MB can take 30 minutes or more — this is normal and expected. There is no preset maximum scan time. Do not close Vortex during a scan." },
  { q: "Can I change my username after registration?", a: "Yes. Your username is not permanent. You can change it at any time from Profile → Edit Profile → Username inside the Vortex tool. Username changes take effect immediately." },
  { q: "What happens if Scan is stopped because Discord isn't running?", a: "If Discord is not connected when you upload a file for scanning, you will not be allowed to proceed." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqs}>
      {faqData.map((item, index) => (
        <div key={index} className={`${styles.faq} ${openIndex === index ? styles.open : ''}`}>
          <button
            className={styles.fq}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{item.q}</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className={styles.fa}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.faIn}>{item.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}