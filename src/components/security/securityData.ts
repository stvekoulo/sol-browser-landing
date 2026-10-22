import type { FaqItem, SidebarSection } from '../features/featuresData';

// Sticky sidebar links for the Sol Security page, matching Dia's Security layout.
export const SECURITY_SIDEBAR_LINKS: SidebarSection[] = [
  { id: 'keeping-sol-secure', label: 'Keeping Sol Secure' },
  { id: 'permissions-extensions-and-backups', label: 'Permissions, Extensions & Backups' },
  { id: 'reporting-and-open-source', label: 'Reporting & Open Source' },
  { id: 'faq', label: 'FAQ' },
  {
    id: 'source-code',
    label: 'Source Code',
    externalHref: 'https://gitlab.com/stevencrdkoulo/sol-browser',
  },
];

// Concrete, factual security and privacy FAQ items for Sol Browser.
export const SECURITY_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'where-does-data-live',
    question: 'Where does my data live?',
    answer: [
      'Your bookmarks, browsing history, open tabs, settings, and saved passwords live locally on your Windows PC inside an SQLite database (browser.db) and local profile files. Sol does not run a cloud sync server, so your personal browsing data never passes through its infrastructure.',
    ],
  },
  {
    id: 'built-in-ad-blocker',
    question: 'Does Sol come with a built-in ad blocker?',
    answer: [
      'Yes. Sol includes uBlock Origin Lite (free GPLv3 software) enabled by default, with filter lists updated automatically. Ads and cross-site trackers are blocked before they execute. You can open full uBlock filter settings or disable filtering for specific sites in Settings > Security.',
    ],
  },
  {
    id: 'do-you-sell-data',
    question: 'Do you collect or sell my browsing data?',
    answer: [
      'No. Sol collects zero telemetry, builds no advertising profiles, and never sells or shares user data. What you browse stays on your machine.',
    ],
  },
  {
    id: 'why-no-account',
    question: 'Why does Sol work without an account or sign-in?',
    answer: [
      'Many browsers ask you to sign into a cloud account so they can tie your browsing sessions to an identity. Sol requires no account at all. If you want to move your data to another computer, you can export a local encrypted backup file protected by a key you choose.',
    ],
  },
  {
    id: 'encrypted-backup',
    question: 'How is the backup file encrypted?',
    answer: [
      'In Settings > Data > Backup, Sol packs your profile files (settings, session, permissions, bookmarks, history, and passwords) and encrypts them locally with AES-256-GCM. The 256-bit encryption key is derived from your passphrase using PBKDF2-SHA256 with 600,000 iterations and a 16-byte random salt. Sol never stores your passphrase, and any modified byte causes authentication to fail.',
    ],
  },
  {
    id: 'chrome-extension-security',
    question: 'How does Sol verify and update Chrome extensions?',
    answer: [
      'Sol only fetches extensions from the official Chrome Web Store and verifies the CRX3 cryptographic signature (SHA-256 over the signed payload and 16-byte extension ID) before extracting a single file. Before installation, Sol shows every permission the extension asks for. If a later update requests new permissions, Sol holds the update until you review and approve the new access.',
    ],
  },
  {
    id: 'extensions-in-private-mode',
    question: 'Do extensions run in Private browsing windows?',
    answer: [
      'No. All extensions remain disabled inside Private browsing windows so third-party extension scripts cannot read or record your private sessions.',
    ],
  },
  {
    id: 'site-permissions',
    question: 'How does Sol handle camera, microphone, and location permissions?',
    answer: [
      'By default, no site is granted access silently: every website must ask before using your microphone, camera, location, or notifications. In Settings > Security > Site permissions, you can see every domain that has saved permissions and revoke them per site or click Forget all.',
    ],
  },
  {
    id: 'address-bar-privacy',
    question: 'Does Sol send what I type in the address bar to search engines?',
    answer: [
      'You control this setting. In Settings > Security, you can turn off online search suggestions so characters typed into the address bar are only matched against your local bookmarks and history until you press Enter.',
    ],
  },
  {
    id: 'saved-passwords-protection',
    question: 'How are my saved passwords protected on Windows?',
    answer: [
      'Saved credentials are encrypted locally on your device using Windows Data Protection APIs (DPAPI) tied to your Windows user account. You can also turn off password saving anytime in Settings > Security.',
    ],
  },
  {
    id: 'chromium-patches',
    question: 'How does Sol receive Chromium security patches?',
    answer: [
      'Sol renders web pages through the Microsoft Edge WebView2 runtime built into Windows. Because Microsoft updates the system WebView2 engine continuously through Windows Update, Sol receives upstream Chromium security fixes automatically.',
    ],
  },
  {
    id: 'report-vulnerability',
    question: 'How can I report a security issue?',
    answer: [
      'If you discover a security or privacy bug in Sol, please open a confidential issue on our GitLab repository so we can investigate and ship a fix.',
    ],
  },
];
