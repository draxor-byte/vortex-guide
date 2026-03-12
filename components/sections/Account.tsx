import styles from '../../styles/Sections.module.css';

export default function Account() {
  return (
    <>
      <p className="sec-lead">
        Registration takes under a minute. Your account is tied to your hardware on first login to prevent sharing.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNum}>1</div>
          <div className={styles.stepBody}>
            <h4>Register with email, password, and username</h4>
            <p>
              Usernames must be 3–24 characters and can only contain letters, numbers, underscores, and dots. VPN use is blocked during registration — disable it before registering. You can change your username later from Profile Settings.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>2</div>
          <div className={styles.stepBody}>
            <h4>Choose your username thoughtfully — but it's not permanent</h4>
            <p>
              Your username is editable at any time from your profile settings page. Your display name, bio, avatar, and pronouns are also freely editable. The only fields that cannot be changed are your email and hardware binding.
            </p>
            <div className={`${styles.callout} ${styles.calloutInfo}`} style={{ marginTop: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Username changes are available under <strong>Profile → Edit Profile → Username</strong> inside the Vortex tool at any time.
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>3</div>
          <div className={styles.stepBody}>
            <h4>Account is bound to your hardware on first login</h4>
            <p>
              Your account is permanently linked to the hardware ID of the first device you log in from. This prevents account sharing. Contact the Vortex team to transfer to a new device.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNum}>4</div>
          <div className={styles.stepBody}>
            <h4>Configure your API keys and VM setup next</h4>
            <p>
              After registration, your account is active. Before scanning, add your API keys and ensure your VM environment is correctly configured. See the API Keys and VM Setup sections of this guide.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.callout} ${styles.calloutDanger}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        One person, one account. Creating multiple accounts is permanently bannable — the system tracks duplicate hardware IDs and registration IPs automatically.
      </div>
    </>
  );
}