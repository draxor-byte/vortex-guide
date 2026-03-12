// ============================================================================
// VORTEX GUIDE – SECTION CONTENT (preserved from original HTML)
// ============================================================================

export const overviewContent = ``; // Not used; hero is separate.

export const whatIsVortexContent = `
  <p class="sec-lead">Vortex is a desktop threat analysis tool built specifically to identify Discord token stealers, credential grabbers, and malware targeting the Discord ecosystem. It combines seven independent analysis layers into a single scored verdict.</p>
  <div class="cards-2">
    <div class="card card-purple">
      <div class="card-icon-wrap ci-purple">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l8 4.5v7L11 19l-8-4.5v-7L11 3z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="11" cy="11" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
      </div>
      <h3>Multi-Layer Analysis</h3>
      <p>Every scan runs Static, YARA, CAPA, VirusTotal, Hybrid Analysis, Sandbox (dynamic), and AI verdict in sequence. All layers contribute to a composite 0–100 risk score — no single method determines the outcome alone.</p>
    </div>
    <div class="card card-pink">
      <div class="card-icon-wrap ci-pink">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="11" cy="11" r="3.5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="11" cy="11" r="1" fill="currentColor"/><path d="M11 3v2.5M11 16.5V19M3 11h2.5M16.5 11H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <h3>Discord-Focused Intelligence</h3>
      <p>Vortex looks specifically for Discord token access, credential exfiltration, Discord API abuse, and webhook callbacks. It distinguishes genuine threats from false-positive cheat injectors and game trainers using behavioral signatures.</p>
    </div>
  </div>
`;

export const accountContent = `
  <p class="sec-lead">Registration takes under a minute. Your account is tied to your hardware on first login to prevent sharing.</p>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-body">
        <h4>Register with email, password, and username</h4>
        <p>Usernames must be 3–24 characters and can only contain letters, numbers, underscores, and dots. VPN use is blocked during registration — disable it before registering. You can change your username later from Profile Settings.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-body">
        <h4>Choose your username thoughtfully — but it's not permanent</h4>
        <p>Your username is editable at any time from your profile settings page. Your display name, bio, avatar, and pronouns are also freely editable. The only fields that cannot be changed are your email and hardware binding.</p>
        <div class="callout info" style="margin-top:14px">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          Username changes are available under <strong>Profile → Edit Profile → Username</strong> inside the Vortex tool at any time.
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-body">
        <h4>Account is bound to your hardware on first login</h4>
        <p>Your account is permanently linked to the hardware ID of the first device you log in from. This prevents account sharing. Contact the Vortex team to transfer to a new device.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-body">
        <h4>Configure your API keys and VM setup next</h4>
        <p>After registration, your account is active. Before scanning, add your API keys and ensure your VM environment is correctly configured. See the API Keys and VM Setup sections of this guide.</p>
      </div>
    </div>
  </div>
  <div class="callout danger">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    One person, one account. Creating multiple accounts is permanently bannable — the system tracks duplicate hardware IDs and registration IPs automatically.
  </div>
`;

export const apiKeysContent = `
  <p class="sec-lead">Vortex requires three external API keys. You can add them either through the <strong>Settings page inside the tool</strong>, or by editing <code>config.json</code> directly. Keys are stored locally and only leave your machine to query their services during a scan.</p>
  <div class="cards-3">
    <div class="card card-purple">
      <div class="card-tag tag-green">Free Key</div>
      <h3>VirusTotal</h3>
      <p>Queries VirusTotal's 70+ engine database for exe/dll file cross-referencing. Results return in under 10 seconds for known files.</p>
      <div class="key-steps">
        <div class="ks">1. Create a free account at virustotal.com</div>
        <div class="ks">2. Go to your profile → API Key</div>
        <div class="ks">3. Copy the 64-character key</div>
        <div class="ks">4. Paste in Settings → API Keys → VirusTotal, or add to <code>virustotal_keys</code> array in config.json</div>
      </div>
      <div class="key-limit">500 requests/day · Free tier</div>
    </div>
    <div class="card card-pink">
      <div class="card-tag tag-green">Free Key</div>
      <h3>Hybrid Analysis</h3>
      <p>Queries the Hybrid Analysis sandbox database for behavioral reports. Results return in under 10 seconds for known files.</p>
      <div class="key-steps">
        <div class="ks">1. Register at hybrid-analysis.com</div>
        <div class="ks">2. Go to profile → API Key</div>
        <div class="ks">3. Copy your key</div>
        <div class="ks">4. Paste in Settings → API Keys → Hybrid Analysis, or add to <code>hybridanalysis_keys</code> array in config.json</div>
      </div>
      <div class="key-limit">200 requests/day · Free tier</div>
    </div>
    <div class="card card-amber">
      <div class="card-tag tag-amber">Free key</div>
      <h3>OpenRouter</h3>
      <p>Powers the AI verdict engine. Multiple AI models analyze evidence independently, followed by a final synthesis pass.</p>
      <div class="key-steps">
        <div class="ks">1. Create an account at openrouter.ai</div>
        <div class="ks">2. No need to add credit balance</div>
        <div class="ks">3. Generate an API key in settings</div>
        <div class="ks">4. Paste in Settings → API Keys → OpenRouter, or add to <code>openrouter_keys</code> array in config.json</div>
      </div>
      <div class="key-limit">50-per-key-per-day · 0 cost per scan</div>
    </div>
  </div>
  <div class="callout success">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M5 8l2.5 2.5 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <strong>Preferred method: Settings page.</strong> Open Vortex → Settings → API Keys. Enter your keys and click Save. No file editing required — the tool writes directly to config.json for you.
  </div>
  <div class="code-block" style="margin-top:28px">
    <div class="cb-header">
      <div class="cb-dots"><span></span><span></span><span></span></div>
      <span class="cb-title">config.json — actual field names</span>
    </div>
    <div class="cb-body">
      <div class="cb-line"><span class="cb-key">{</span></div>
      <div class="cb-line cb-indent"><span class="cb-string">"virustotal_keys"</span><span class="cb-key">:   </span><span class="cb-arr">["YOUR_VIRUSTOTAL_KEY_HERE"]</span><span class="cb-key">,</span></div>
      <div class="cb-line cb-indent"><span class="cb-string">"hybridanalysis_keys"</span><span class="cb-key">: </span><span class="cb-arr">["YOUR_HYBRID_ANALYSIS_KEY_HERE"]</span><span class="cb-key">,</span></div>
      <div class="cb-line cb-indent"><span class="cb-string">"openrouter_keys"</span><span class="cb-key">:    </span><span class="cb-arr">["YOUR_OPENROUTER_KEY_HERE"]</span></div>
      <div class="cb-line"><span class="cb-key">}</span></div>
    </div>
  </div>
  <div class="callout danger">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <strong>Never share your config.json.</strong> Anyone with your API keys can consume your quota and scan files under your identity. Never screenshot it or include it in support requests.
  </div>
`;

export const vmSetupContent = `
  <p class="sec-lead">Vortex's Sandbox (dynamic analysis) requires a specific environment to operate. Without this setup, your original token will at risk  — scans still run all other methods with dynamic behavioral detection.</p>
  <div class="callout danger">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <strong>Always run Vortex inside a dedicated Virtual Machine.</strong> The Sandbox layer executes suspicious files to observe their behavior. Running this on your main machine risks infecting your real system.
  </div>
  <div class="steps" style="margin-top:40px">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-body">
        <h4>Create a dedicated Virtual Machine</h4>
        <p>Set up a Windows 10/11 VM using VMware, VirtualBox, or similar software. This VM should be considered expendable — it can be restored from a snapshot at any time. Never use your main machine for Sandbox scanning.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-body">
        <h4>Install Discord with a throwaway account</h4>
        <p>Install Discord inside the VM. Log in with a <strong>fake, dedicated throwaway account</strong> — never use your real account. Sandbox Method 1 (GrabberDetector) requires Discord to be actively running when a scan starts. If Discord is not running, scan will be stopped</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-body">
        <h4>Install BlueStacks MSI App Player</h4>
        <p>Download and install <strong>BlueStacks MSI App Player</strong> (the MSI edition — HD-Player.exe) inside the VM. Vortex's Sandbox uses BlueStacks as an Android emulator during dynamic analysis. Without it, complete scan is stopped.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-body">
        <h4>Run Vortex inside the VM for Sandbox scans</h4>
        <p>Launch Vortex inside the VM with Discord open and logged in. The Sandbox layer will then be able to execute and monitor suspicious files in a safe, contained environment.</p>
        <div class="callout info" style="margin-top:12px">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          If Discord is not running when a scan starts, you will see: <em>"Discord is not running. Please open Discord before starting a scan."</em> — this stops full scan.
        </div>
      </div>
    </div>
  </div>
  <div class="cards-2" style="margin-top:40px">
    <div class="card card-purple">
      <div class="card-icon-wrap ci-purple">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M6 19h10M11 17v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <h3>Required Software</h3>
      <ul class="tick-list">
        <li>A Windows VM (VMware, VirtualBox, etc.)</li>
        <li>Discord — installed and logged into a fake account</li>
        <li>BlueStacks MSI App Player (HD-Player.exe)</li>
        <li>Vortex installed inside the VM</li>
      </ul>
    </div>
    <div class="card card-pink">
      <div class="card-icon-wrap ci-pink">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M14.5 7.5l-7 7M7.5 7.5l7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <h3>What Happens Without Setup</h3>
      <ul class="tick-list red">
        <li>Without Discord running → Scan never runs</li>
        <li>Without BlueStacks → Scan stops</li>
        <li>All other methods (Static, YARA, CAPA, VT, HA, AI) stops</li>
        <li>Your original token can be grabbed</li>
      </ul>
    </div>
  </div>
`;

export const profileContent = `
  <p class="sec-lead">Your profile is visible to other users — it shows your stats, equipped badges, and the display name attached to all scan records you've submitted.</p>
  <div class="cards-2">
    <div class="card card-purple">
      <div class="card-icon-wrap ci-purple">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 4H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M17.5 2.5a2 2 0 0 1 2.8 2.8L11 14l-4 1 1-4z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <h3>Editable Fields</h3>
      <ul class="tick-list">
        <li><strong>Username</strong> — changeable from Profile → Edit Profile</li>
        <li><strong>Display Name</strong> — shown on scan records and your profile</li>
        <li><strong>Avatar URL</strong> — direct image link for your profile picture</li>
        <li><strong>Bio</strong> — short description visible to others</li>
        <li><strong>Pronouns</strong> — displayed alongside your name</li>
        <li><strong>Equipped Badges</strong> — choose which earned badges to show</li>
        <li><strong>Display Badge</strong> — single badge shown on scan record cards</li>
      </ul>
    </div>
    <div class="card card-pink">
      <div class="card-icon-wrap ci-pink">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M7 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <h3>Fixed / Auto-Tracked Fields</h3>
      <ul class="tick-list lock">
        <li><strong>Email</strong> — used for login authentication only, cannot change</li>
        <li><strong>Hardware Binding</strong> — device locked on first login</li>
        <li><strong>Reputation</strong> — earned through scanning, never set manually</li>
        <li><strong>Grabber Detections</strong> — auto-tracked confirmed threat count</li>
        <li><strong>Total Badges</strong> — auto-counted from earned milestones</li>
      </ul>
    </div>
  </div>
`;

export const scanningContent = `
  <p class="sec-lead">Three methods to load a file into Vortex. All three lead to the identical analysis pipeline and produce the same results.</p>
  <div class="cards-3">
    <div class="card card-purple">
      <div class="card-icon-wrap ci-purple">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M20 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
      </div>
      <h3>File Browser</h3>
      <p>Click the upload zone in the Scanner tab. A standard file picker opens — navigate to the target file and click Open to begin analysis.</p>
      <ol class="num-list">
        <li>Click the upload zone on the Scanner tab</li>
        <li>Navigate to the file in the dialog</li>
        <li>Click Open — scan begins automatically</li>
      </ol>
    </div>
    <div class="card card-pink">
      <div class="card-icon-wrap ci-pink">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <h3>Drag &amp; Drop</h3>
      <p>Drag any file from Windows File Explorer and drop it directly onto the Vortex window. Fastest method — zero navigation required.</p>
      <ol class="num-list">
        <li>Open File Explorer alongside Vortex</li>
        <li>Drag the target file</li>
        <li>Drop onto the Vortex window — instant load</li>
      </ol>
    </div>
    <div class="card card-amber">
      <div class="card-icon-wrap ci-amber">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M20 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M11 10v6M8.5 13.5L11 16l2.5-2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h3>Folder or RAR Archive</h3>
      <p>Select an entire folder or a RAR archive. Each file inside is scanned through its own pipeline. See Scan Rules for credit deduction details.</p>
      <ol class="num-list">
        <li>Browse to the folder or .rar file</li>
        <li>Each file is analyzed individually</li>
        <li>Credits deducted per scan rules below</li>
      </ol>
    </div>
  </div>
  <div class="divider"></div>
  <div class="sec-eyebrow">What happens during a scan</div>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-body">
        <h4>File is hashed — database checked</h4>
        <p>Vortex computes a SHA-256 hash of the file. If this exact file has been scanned before by any user, the cached result is returned immediately. Your credit is still used — but the result is instant.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-body">
        <h4>Static Analysis + YARA + CAPA run simultaneously</h4>
        <p>The file is inspected without execution. PE structure, byte patterns, embedded strings, import tables, entropy levels, overlay data, packer detection, and PyInstaller payload extraction are all analyzed.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-body">
        <h4>VirusTotal and Hybrid Analysis are queried</h4>
        <p>VT and HA are queried by hash for their database results. For known files, both services typically respond in <strong>under 10 seconds</strong>. If a file is unknown to VT or HA, an upload is performed — you can choose to allow or cancel this upload.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-body">
        <h4>Sandbox runs dynamic behavioral analysis</h4>
        <p>For supported executable formats, the file is executed in an instrumented environment (requires Discord running + BlueStacks installed in the VM). Sandbox Method 1 monitors GrabberDetector signals and network connections. Method 2 performs deep scans.</p>
        <div class="step-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.3"/><path d="M6.5 4v3.5l2 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>New exe/dll: typically 3–20 min depending on file size</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">5</div>
      <div class="step-body">
        <h4>AI models produce independent verdicts</h4>
        <p>Four AI models analyze all gathered evidence independently, each producing a verdict with confidence score and reasoning. A final synthesis pass reviews all prior judgments and produces the definitive classification.</p>
      </div>
    </div>
  </div>
  <div class="callout warn">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L1 14h14L8 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 7v3.5M8 12.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <strong>Expected scan time for a new executable:</strong> approximately 3 to 20 minutes depending on file size (up to 40 MB). Files larger than 40 MB can exceed 30 minutes. There is no enforced maximum — never close Vortex mid-scan.
  </div>
`;

export const rulesContent = `
  <p class="sec-lead">Understanding when scan credits are deducted prevents unexpected losses and helps you use your daily allocation efficiently.</p>
  <div class="cards-2">
    <div class="card card-purple">
      <div class="card-badge-label">FREE</div>
      <h3>Free Scan Rules</h3>
      <ul class="tick-list">
        <li>Deducted on <strong>every scan</strong> — new or duplicate</li>
        <li>Deducted on hash matches too</li>
        <li>Not deducted if scan fails to start</li>
        <li><strong>5 free scans per day</strong> per account</li>
        <li>Resets at <strong>12:00 AM IST</strong> daily</li>
        <li>Free scans are used before premium credits</li>
      </ul>
    </div>
    <div class="card card-pink">
      <div class="card-badge-label premium">PREMIUM</div>
      <h3>Premium Scan Rules</h3>
      <ul class="tick-list">
        <li>Only deducted on files <strong>not yet in the database</strong></li>
        <li><strong>Zero cost</strong> to scan files already in the database</li>
        <li>Credits <strong>never expire</strong> and never reset</li>
        <li>Automatically used after free scans run out</li>
        <li>Stack seamlessly with daily free scans</li>
        <li>Contact the team for pricing or earn by milestone perks and leaderboard ranks</li>
      </ul>
    </div>
  </div>
  <div class="divider"></div>
  <div class="sec-eyebrow">RAR Archive Scan Deduction</div>
  <div class="steps">
    <div class="step">
      <div class="step-num">A</div>
      <div class="step-body">
        <h4>RAR container itself is scanned first</h4>
        <p>Vortex first scans the RAR file as a whole (Static, YARA, VirusTotal, Hybrid Analysis, AI). If the RAR container is flagged as <strong>malicious</strong>, one scan credit is deducted and the process stops — the files inside are not extracted or scanned.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">B</div>
      <div class="step-body">
        <h4>If the RAR is clean, inner files are extracted and scanned individually</h4>
        <p>No credit is deducted for the Phase A check on a clean RAR. Each extracted inner file then goes through its own complete analysis pipeline. Each inner file that meets its type's completion criteria costs Zero credit.</p>
      </div>
    </div>
  </div>
  <div class="callout info">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <strong>Summary:</strong> If the RAR itself is malicious → 1 credit total. If the RAR is clean → 0 credits for the RAR, then 0 credit per inner file scanned.
  </div>
  <div class="divider"></div>
  <div class="sec-eyebrow">What happens when a scan fails</div>
  <div class="callout warn" style="margin-top:0">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L1 14h14L8 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 7v3.5M8 12.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    If any analysis method encounters a critical error — including a cancelled VT/HA upload, an API key issue, or a Sandbox failure — the entire scan is <strong>immediately aborted</strong>. An aborted scan is never saved to the database and never shown in your history. There is no "incomplete" scan state — every scan either completes fully, or is aborted entirely and discarded.
  </div>
`;

export const resultsContent = `
  <p class="sec-lead">Every completed scan produces a Risk Score from 0 to 100 and a detection label. These are the primary verdict — everything else is supporting evidence.</p>
  <div class="risk-visual">
    <div class="risk-gauge-area">
      <svg width="200" height="130" viewBox="0 0 200 130">
        <path d="M 18 118 A 86 86 0 0 1 182 118" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="12" stroke-linecap="round"/>
        <path d="M 18 118 A 86 86 0 0 1 75 36"  fill="none" stroke="rgba(52,211,153,0.45)"  stroke-width="12" stroke-linecap="round"/>
        <path d="M 75 36 A 86 86 0 0 1 145 36"  fill="none" stroke="rgba(245,158,11,0.45)"  stroke-width="12" stroke-linecap="round"/>
        <path d="M 145 36 A 86 86 0 0 1 182 118" fill="none" stroke="rgba(248,113,113,0.5)" stroke-width="12" stroke-linecap="round"/>
        <line x1="100" y1="118" x2="62" y2="55" stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="100" cy="118" r="5" fill="#7dd3fc" style="filter:drop-shadow(0 0 8px #7dd3fc)"/>
      </svg>
      <div class="gauge-info"><div class="gauge-val">65</div><div class="gauge-sub">Example Score</div></div>
    </div>
    <div class="risk-zones">
      <div class="rz"><span class="rz-r green">0–19</span><div class="rz-bar"><div class="rzf" style="width:20%;background:rgb(52,211,153)"></div></div><span class="rz-lbl">Clean</span></div>
      <div class="rz"><span class="rz-r yellow">20–39</span><div class="rz-bar"><div class="rzf" style="width:40%;background:rgb(253,224,71)"></div></div><span class="rz-lbl">Low Risk</span></div>
      <div class="rz"><span class="rz-r yellow">40–59</span><div class="rz-bar"><div class="rzf" style="width:60%;background:rgb(251,146,60)"></div></div><span class="rz-lbl">Moderate — Caution</span></div>
      <div class="rz"><span class="rz-r red">60–79</span><div class="rz-bar"><div class="rzf" style="width:80%;background:rgb(248,113,113)"></div></div><span class="rz-lbl">Suspicious</span></div>
      <div class="rz"><span class="rz-r red">80–100</span><div class="rz-bar"><div class="rzf" style="width:100%;background:rgb(239,68,68)"></div></div><span class="rz-lbl">Threat Detected</span></div>
    </div>
  </div>
  <table class="data-table" style="margin-top:32px">
    <thead><tr><th>Detection Label</th><th>Score</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td><span class="badge-pill bp-green">Clean</span></td><td><code>0–59</code></td><td>No significant indicators. File is considered safe.</td></tr>
      <tr><td><span class="badge-pill bp-yellow">Suspicious</span></td><td><code>60–79</code></td><td>Enough indicators to flag concern. Treat with caution.</td></tr>
      <tr><td><span class="badge-pill bp-red">Highly Suspicious</span></td><td><code>80–99</code></td><td>Strong malicious evidence. Do not open or execute.</td></tr>
      <tr><td><span class="badge-pill bp-red">Discord Token Stealer</span></td><td><code>100 / Rule</code></td><td>Confirmed threat. Delete and report immediately.</td></tr>
      <tr><td><span class="badge-pill bp-gray">Error</span></td><td><code>N/A</code></td><td>A method encountered an error and the scan was aborted. Re-scan the file. No credit is saved for aborted scans.</td></tr>
    </tbody>
  </table>
  <div class="callout info"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>A score of <strong>60+</strong> triggers the suspicious flag. A score of <strong>80+</strong> is high-confidence detection. The AI verdict may override the numeric score in edge cases.</div>
`;

export const methodsContent = `
  <p class="sec-lead">Seven independent analysis layers run in sequence and combine into a weighted composite risk score. Every layer targets a different class of evidence — no single method is more important than the others.</p>
  <div class="method-list">
    <div class="method-item">
      <div class="method-n">1</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">Static Analysis</span><span class="method-tag green">Always runs · no key required</span></div>
        <p>The file is inspected without execution. PE structure, byte patterns, embedded strings, import tables, entropy levels, TLS callbacks, overlay data, packer detection, and PyInstaller payload extraction are all analyzed.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">2</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">YARA Scanning</span><span class="method-tag green">Always runs · no key required</span></div>
        <p>A custom YARA ruleset scans the file's binary content for known Discord stealer behavioral patterns, payload signatures, and obfuscation techniques. YARA matches are weighted in the risk score and passed to the AI models as evidence.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">3</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">CAPA Capability Analysis</span><span class="method-tag green">Always runs on PE files · no key required</span></div>
        <p>CAPA identifies what capabilities the file has — network access, file system operations, process injection, encryption usage, and more — by matching against a library of known behavioral signatures. Outputs labeled capability categories.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">4</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">VirusTotal Cross-Reference</span><span class="method-tag amber">Requires your VT API key</span></div>
        <p>Queries VirusTotal's database using the file's SHA-256 hash to retrieve results from 70+ antivirus engines. For known files, results return in under 10 seconds. Unknown files trigger an upload prompt — you can allow or cancel.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">5</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">Hybrid Analysis Intelligence</span><span class="method-tag amber">Requires your HA API key</span></div>
        <p>Queries Hybrid Analysis's sandbox database by file hash for existing behavioral reports — threat tags, network behavior, verdicts, and classification labels. For known files, results return in under 10 seconds.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">6</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">Sandbox (Dynamic Analysis)</span><span class="method-tag purple">Requires Discord running + BlueStacks installed</span></div>
        <p>The file is executed inside an instrumented environment. <strong>Method 1</strong> (GrabberDetector) monitors Discord process interactions, file system access patterns, and network connections in real time. <strong>Method 2</strong> (Blaze Detector) performs deep scan to catch advanced evasion techniques.</p>
      </div>
    </div>
    <div class="method-item">
      <div class="method-n">7</div>
      <div class="method-body">
        <div class="method-top"><span class="method-name">AI Verdict Engine</span><span class="method-tag purple">Requires your OpenRouter key</span></div>
        <p>Four AI models independently analyze all gathered evidence from every prior method and each produces a verdict with confidence score and written reasoning. A final synthesis pass reviews all prior model judgments and produces the definitive classification label.</p>
      </div>
    </div>
  </div>
`;

export const plansContent = `
  <p class="sec-lead">All users receive 5 free scans per day. The full analysis pipeline — all seven methods — runs identically for both free and premium. The only difference is how credits are deducted.</p>
  <div class="plans-grid">
    <div class="plan plan-free">
      <div class="plan-tier">Free</div>
      <div class="plan-price">5 Scans<span class="plan-per"> / day</span></div>
      <p class="plan-note">Every account, every day. No payment. Resets at midnight IST.</p>
      <ul class="plan-list">
        <li class="yes">5 scans per day — resets at 12:00 AM IST</li>
        <li class="yes">Complete 7-layer analysis pipeline</li>
        <li class="yes">VirusTotal + Hybrid Analysis cross-reference</li>
        <li class="yes">Sandbox dynamic behavioral analysis</li>
        <li class="yes">Full AI verdict engine (4 models + arbiter)</li>
        <li class="yes">Complete risk score and detailed report</li>
        <li class="no">Deducted on both new and duplicate scans</li>
      </ul>
    </div>
    <div class="plan plan-premium">
      <div class="plan-tier premium">Premium</div>
      <div class="plan-price">Scans<span class="plan-per"> never expire</span></div>
      <p class="plan-note">Smart deduction — pay only for genuinely new files.</p>
      <ul class="plan-list">
        <li class="yes">Everything in Free — identical pipeline</li>
        <li class="yes">Credits <strong>never expire</strong> — no daily reset</li>
        <li class="yes"><strong>Zero cost</strong> on files already in the database</li>
        <li class="yes">1 scan only on genuinely new files</li>
        <li class="yes">Auto-used after daily free scans exhaust</li>
        <li class="yes">Stack seamlessly with daily free allocation</li>
        <li class="yes">Ideal for bulk scanning sessions</li>
      </ul>
    </div>
  </div>
`;

export const historyContent = `
  <p class="sec-lead">Every completed scan is stored in the global database and permanently linked to your account. View your full history from the History tab inside Vortex.</p>
  <div class="cards-2">
    <div class="card card-purple"><div class="card-icon-wrap ci-purple"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M9 11l3 3L21 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 11v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="1.8" fill="none"/></svg></div><h3>Your History</h3><p>The History tab shows every scan you've submitted — file name, hash, risk score, detection label, and timestamp. Click any entry to open the full detailed report.</p></div>
    <div class="card card-pink"><div class="card-icon-wrap ci-pink"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M2 11h4M16 11h4M11 2v4M11 16v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div><h3>Global Database</h3><p>Once a scan completes successfully, the file enters the shared global database. Any user scanning the same file gets the cached result instantly. The first submitter is permanently credited as the original discoverer.</p></div>
  </div>
  <div class="callout info"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>Only <strong>fully completed scans</strong> are saved to the database. If a scan is aborted for any reason — API error, cancelled upload, or method failure — it is not saved and does not appear in your history.</div>
`;

export const badgesContent = `
  <p class="sec-lead">Badges are milestone awards earned automatically as you scan files and detect threats. Eleven badges across two independent progression tracks.</p>
  <div class="track-header"><span class="track-label">Analyst Track</span><span class="track-sub">Earned by Reputation</span><span class="track-pill purple">REP</span></div>
  <p class="track-desc">Reputation grows each time you contribute completed scans to the global database.</p>
  <div class="badge-row">
    <div class="badge-card bc-purple"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="16" r="9" stroke="currentColor" stroke-width="2"/><path d="M13 24l-2 10 9-5 9 5-2-10" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="20" cy="16" r="4" fill="currentColor" opacity=".25"/></svg></div><div class="bc-name">Novice Archivist</div><div class="bc-req">50 Rep</div></div>
    <div class="badge-card bc-purple"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="16" r="9" stroke="currentColor" stroke-width="2"/><path d="M13 24l-2 10 9-5 9 5-2-10" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><path d="M15 16l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="bc-name">Data Collector</div><div class="bc-req">100 Rep</div></div>
    <div class="badge-card bc-purple"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 4L6 11v12c0 7 5 11 14 14 9-3 14-7 14-14V11L20 4z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M14 20l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="bc-name">Digital Hoarder</div><div class="bc-req">250 Rep</div></div>
    <div class="badge-card bc-purple"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 4L6 11v12c0 7 5 11 14 14 9-3 14-7 14-14V11L20 4z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="5" fill="currentColor" opacity=".3"/><path d="M16 20l2.5 2.5 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="bc-name">Archive Guardian</div><div class="bc-req">350 Rep</div></div>
    <div class="badge-card bc-purple"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 5l3 9h9l-7.5 6 3 9-7.5-6-7.5 6 3-9L7 14h9z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/></svg></div><div class="bc-name">Vault Keeper</div><div class="bc-req">500 Rep</div></div>
    <div class="badge-card bc-gold"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 4l4.5 10H34l-8 7 3.5 10L20 25l-9.5 6 3.5-10-8-7h9.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="20" cy="18" r="4" fill="currentColor" opacity=".35"/></svg></div><div class="bc-name">Master of Archives</div><div class="bc-req">1000 Rep</div></div>
  </div>
  <div class="track-header" style="margin-top:48px"><span class="track-label">Hunter Track</span><span class="track-sub">Earned by Grabber Detections</span><span class="track-pill pink">GRAB</span></div>
  <p class="track-desc">Increases each time one of your scans confirms a Discord token stealer.</p>
  <div class="badge-row">
    <div class="badge-card bc-pink"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="7" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="20" cy="20" r="2" fill="currentColor"/><path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div><div class="bc-name">Threat Spotter</div><div class="bc-req">10 Grabs</div></div>
    <div class="badge-card bc-pink"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="7" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="20" cy="20" r="2" fill="currentColor"/><path d="M20 7v4M20 29v4M7 20h4M29 20h4M10.1 10.1l2.8 2.8M27.1 27.1l2.8 2.8M27.1 10.1l-2.8 2.8M10.1 27.1l2.8 2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div><div class="bc-name">Stealer Hunter</div><div class="bc-req">50 Grabs</div></div>
    <div class="badge-card bc-pink"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="17" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M13 24l-2 10h18l-2-10" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><path d="M15 15.5l1.5 1.5M24.5 15.5l-1.5 1.5M16 21a4 4 0 0 0 8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg></div><div class="bc-name">Malware Slayer</div><div class="bc-req">100 Grabs</div></div>
    <div class="badge-card bc-pink"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="17" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M13 24l-2 10h18l-2-10" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><path d="M14 14l2 2M26 14l-2 2M14 21h3M23 21h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div><div class="bc-name">Grabber Exterminator</div><div class="bc-req">300 Grabs</div></div>
    <div class="badge-card bc-gold"><div class="bc-icon"><svg viewBox="0 0 40 40" fill="none"><path d="M20 5l3.5 7.5 7.5 1-5.5 5.5 1.5 7.5L20 23l-7 3.5 1.5-7.5L9 13.5l7.5-1z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="20" cy="16" r="3" fill="currentColor" opacity=".35"/></svg></div><div class="bc-name">Discord Purifier</div><div class="bc-req">500 Grabs</div></div>
  </div>
  <div class="divider"></div>
  <div class="sec-eyebrow">Badge Perks</div>
  <p style="color:var(--t2);margin-bottom:20px;font-size:.9rem;">Badges are milestone awards with real visibility benefits. Here's what earning badges gives you:</p>
  <div class="badge-perks">
    <div class="bp-item"><div class="bp-item-icon">🏅</div><div class="bp-item-title">Profile Display</div><div class="bp-item-desc">Your earned and equipped badges are visible on your public profile page, showcasing your progression to other community members.</div></div>
    <div class="bp-item"><div class="bp-item-icon">🎴</div><div class="bp-item-title">Premium scans</div><div class="bp-item-desc">Get free premium scans as per badges perks.</div></div>
    <div class="bp-item"><div class="bp-item-icon">🏆</div><div class="bp-item-title">Leaderboard Ranking</div><div class="bp-item-desc">Your total badge count determines your position on the Total Badges leaderboard — a measure of overall milestone achievement.</div></div>
  </div>
  <div class="callout success" style="margin-top:28px"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3.5" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M5 10.5L4 14l4-2 4 2-1-3.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/></svg><strong>Badges are fully automatic.</strong> The moment you hit a threshold, the badge is queued. A congratulations notification appears on your screen. You can claim the badge by clicking Claim.</div>
`;

export const repContent = `
  <p class="sec-lead">Three stats define your community standing. All tracked automatically — you never input them manually.</p>
  <div class="cards-3">
    <div class="card card-purple"><div class="card-icon-wrap ci-purple"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l2.5 7.5H21l-6.5 4.5 2.5 7.5L11 18l-6 4.5 2.5-7.5L1 10.5h7.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" fill="none"/></svg></div><h3>Reputation</h3><p>The primary progression metric. Grows as you contribute completed scans to the global database. Determines your rank on the main leaderboard and drives the Analyst badge track.</p></div>
    <div class="card card-pink"><div class="card-icon-wrap ci-pink"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="11" cy="11" r="3.5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="11" cy="11" r="1" fill="currentColor"/><path d="M11 3v2.5M11 16.5V19M3 11h2.5M16.5 11H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h3>Grabber Detections</h3><p>Counts confirmed Discord token stealers you've found. Tracked independently from reputation. Determines your rank on the threat-hunter leaderboard and drives the Hunter badge track.</p></div>
    <div class="card card-amber"><div class="card-icon-wrap ci-amber"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="6" r="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M8 9.5L6 14l4-2 4 2-2-4.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" fill="none"/></svg></div><h3>Total Badges</h3><p>Your cumulative count of earned milestone badges. Reflects overall achievement across both the Analyst and Hunter tracks. Shown on your profile and the Total Badges leaderboard.</p></div>
  </div>
  <div class="divider"></div>
  <table class="data-table">
    <thead><tr><th>Stat</th><th>What It Tracks</th><th>Visible to Others</th></tr></thead>
    <tbody>
      <tr><td><code>reputation</code></td><td>Scan contributions to the global database</td><td><span class="ok-text">Yes — profile &amp; leaderboard</span></td></tr>
      <tr><td><code>grabberDetections</code></td><td>Confirmed Discord threats discovered</td><td><span class="ok-text">Yes — profile &amp; leaderboard</span></td></tr>
      <tr><td><code>badges</code> (count)</td><td>Total earned milestone badges</td><td><span class="ok-text">Yes — profile &amp; leaderboard</span></td></tr>
      <tr><td><code>freeScansLeft</code></td><td>Remaining free scans for today</td><td><span class="muted-text">Only you</span></td></tr>
      <tr><td><code>premiumScans</code></td><td>Remaining premium credit balance</td><td><span class="muted-text">Only you</span></td></tr>
    </tbody>
  </table>
`;

export const leaderboardContent = `
  <p class="sec-lead">Three separate rankings measure different dimensions of contribution. You can access them from the Leaderboard tab inside Vortex.

Earn free scans by achieving Rank 1 by the end of the week (Monday, 12 AM IST). The users who top the Reputation, Grabber Detector, or Total Badges leaderboards will receive premium scans, which will be added directly to their accounts.</p>
  <div class="cards-3">
    <div class="card card-purple"><div class="card-icon-wrap ci-purple"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="10" width="5" height="10" rx="1" stroke="currentColor" stroke-width="1.8" fill="none"/><rect x="8.5" y="6" width="5" height="14" rx="1" stroke="currentColor" stroke-width="1.8" fill="none"/><rect x="15" y="3" width="5" height="17" rx="1" stroke="currentColor" stroke-width="1.8" fill="none"/></svg></div><h3>Reputation Rank</h3><p>Rankings by scan contribution to the global database. The most comprehensive measure of community activity and quality.</p></div>
    <div class="card card-pink"><div class="card-icon-wrap ci-pink"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="11" cy="11" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="11" cy="11" r="1" fill="currentColor"/></svg></div><h3>Grabber Rank</h3><p>Ranks users by confirmed Discord threat discoveries. A high position means you've been a significant force in identifying real malware in the wild.</p></div>
    <div class="card card-amber"><div class="card-icon-wrap ci-amber"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="6" r="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M8 9.5L6 14l4-2 4 2-2-4.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" fill="none"/></svg></div><h3>Total Badges Rank</h3><p>Rankings by total number of earned milestone badges. Reflects overall achievement across both Analyst and Hunter badge tracks combined.</p></div>
  </div>
`;

export const conductContent = `
  <p class="sec-lead">Vortex enforces strict policies to maintain integrity. Violations are detected automatically and result in permanent bans with no appeal process.</p>
  <div class="cards-2">
    <div class="card card-pink">
      <div class="card-icon-wrap ci-pink"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M14.5 7.5l-7 7M7.5 7.5l7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
      <h3>Prohibited</h3>
      <ul class="tick-list red">
        <li>Creating more than one account per person or device</li>
        <li>Using VPNs or proxies during account registration</li>
        <li>Sharing your account, session, or credentials</li>
        <li>Attaching debugging tools to the Vortex process</li>
        <li>Intercepting or tampering with Vortex network traffic</li>
        <li>Attempting to reverse-engineer security measures</li>
        <li>Submitting false or fabricated scan data</li>
      </ul>
    </div>
    <div class="card card-purple">
      <div class="card-icon-wrap ci-purple"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M7 11l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Permitted</h3>
      <ul class="tick-list green">
        <li>Scanning any file you have a legitimate reason to analyze</li>
        <li>Using a VPN after registration — login and scanning are fine</li>
        <li>Sharing scan result summaries in communities</li>
        <li>Using all 5 of your free daily scans every day</li>
        <li>Discussing Vortex findings publicly</li>
        <li>Reporting bugs or suspected false positives to the team</li>
      </ul>
    </div>
  </div>
  <div class="callout danger">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <div><strong>Automatic ban system — no appeal, no exceptions.</strong><br>Attaching a debugger to the Vortex process triggers an <strong>immediate, silent, permanent ban</strong> — no warning is given. The ban covers your account, your current IP address, and your original registration IP. All three are blocked simultaneously. IP bans prevent new accounts from being registered from the same IP. There is no manual review process and no appeal path. Any account found violating these rules is permanently banned and cannot be reinstated.</div>
  </div>
  <div class="divider"></div>
  <div class="sec-eyebrow">Best Practices</div>
  <div class="steps">
    <div class="step step-good"><div class="step-num good"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="step-body"><h4>Configure all three API keys before your first scan</h4><p>Without VirusTotal and Hybrid Analysis keys, those cross-reference layers are skipped. Without your OpenRouter key, the AI verdict engine is disabled. Set up all three before scanning for the most accurate results.</p></div></div>
    <div class="step step-good"><div class="step-num good"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="step-body"><h4>Never close Vortex or disconnect mid-scan</h4><p>Closing the app or losing internet during a scan aborts the entire scan — which is discarded and not saved. The credit may still be deducted. Always let scans run to full completion.</p></div></div>
    <div class="step step-good"><div class="step-num good"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="step-body"><h4>Protect your config.json file</h4><p>Your API keys live in config.json. Never share it, include it in screenshots, or upload it anywhere. Anyone with your keys can consume your API quota.</p></div></div>
    <div class="step step-good"><div class="step-num good"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="step-body"><h4>Always run Sandbox scans inside a VM</h4><p>The Sandbox executes suspicious files. Running this on your real machine is dangerous. Maintain a dedicated VM snapshot you can restore after each scanning session.</p></div></div>
  </div>
`;

export const faqContent = `
  <p class="sec-lead">Everything users commonly ask — answered directly.</p>
  <div class="faqs">
    <div class="faq"><button class="fq"><span>My scan seems to have failed silently — what happened?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">If any analysis method encounters a critical error — cancelled upload, API key issue, network timeout, or Sandbox failure — the <strong>entire scan is aborted immediately and discarded</strong>. It will not appear in your history and no result is saved. Simply re-upload and try again. There is no "incomplete" scan state — a scan either fully completes and is saved, or is fully aborted and discarded.</div></div></div>
    <div class="faq"><button class="fq"><span>Exactly when do my free scans reset?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">Free scans reset at <strong>12:00 AM Indian Standard Time (IST)</strong> — which is 18:30 UTC the previous day. This applies to all accounts simultaneously.</div></div></div>
    <div class="faq"><button class="fq"><span>I scanned the same file twice — did I use two free scans?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in"><strong>Yes.</strong> Free scans are deducted on every submission, including duplicates. Premium credits work differently — scanning a file already in the database costs 0 premium credits.</div></div></div>
    <div class="faq"><button class="fq"><span>Can I use a VPN with Vortex?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">VPN use is <strong>blocked during account registration only</strong>. After your account is created, using a VPN for login and scanning is permitted.</div></div></div>
    <div class="faq"><button class="fq"><span>Why is my account locked to one device?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">Your account is bound to the hardware ID of the first device you log in from. This prevents account sharing. If you need to transfer to a new machine, contact the Vortex team directly.</div></div></div>
    <div class="faq"><button class="fq"><span>How do badges get awarded?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in"><strong>Badges are fully automatic.</strong> The instant you hit a milestone threshold, the badge is queued in the system. You'll see a congratulations popup on your next login. Nothing is required on your part.</div></div></div>
    <div class="faq"><button class="fq"><span>What's the difference between reputation and grabber detections?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in"><strong>Reputation</strong> increases with every completed scan contribution — it measures activity volume. <strong>Grabber detections</strong> count only scans where a confirmed Discord token stealer was found — it measures threat discovery quality.</div></div></div>
    <div class="faq"><button class="fq"><span>My scan is taking a very long time — is something wrong?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">New executable files typically take <strong>3 to 20 minutes</strong> to fully analyze, depending on file size. Files already in the global database return results instantly. Files larger than 40 MB can take 30 minutes or more — this is normal and expected. There is no preset maximum scan time. Do not close Vortex during a scan.</div></div></div>
    <div class="faq"><button class="fq"><span>Can I change my username after registration?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in"><strong>Yes.</strong> Your username is not permanent. You can change it at any time from <strong>Profile → Edit Profile → Username</strong> inside the Vortex tool. Username changes take effect immediately.</div></div></div>
    <div class="faq"><button class="fq"><span>What happens if Scan is stopped because Discord isn't running?</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><div class="fa"><div class="fa-in">If Discord is not connected when you upload a file for scanning, you will not be allowed to proceed.</div></div></div>
  </div>
`;

export const downloadContent = `
  <p class="sec-lead">Always use the latest version to ensure current detection signatures and server compatibility.</p>
  <div id="latestRelease"></div>
  <div class="divider"></div>
  <div class="sec-eyebrow">Version History</div>
  <div id="versionsList"></div>
`;