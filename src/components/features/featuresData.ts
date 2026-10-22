export type SidebarSection = {
  id: string;
  label: string;
  externalHref?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string[];
};

// Sticky sidebar links for the Sol Features page, matching Dia's editorial layout.
export const FEATURES_SIDEBAR_LINKS: SidebarSection[] = [
  { id: 'why-i-built-sol', label: 'Why I Built Sol' },
  { id: 'video-downloader', label: 'Native Video Downloader' },
  { id: 'contextual-action-fan', label: 'Contextual Action Fan' },
  { id: 'isolated-sessions', label: 'Isolated Site Sessions' },
  { id: 'developer-tools', label: 'Developer & Design Tools' },
  { id: 'everyday-polish-and-notes', label: 'Everyday Polish & Notes' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'demos', label: 'Demos in Action' },
  { id: 'faq', label: 'FAQ' },
  {
    id: 'release-notes',
    label: 'Release Notes',
    externalHref: 'https://gitlab.com/stevencrdkoulo/sol-browser/-/releases',
  },
];

// Direct, concrete FAQ items without corporate filler, describing features that ship today.
export const FEATURES_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'why-does-sol-use-so-little-ram',
    question: 'How does Sol use 25.8 MB of RAM when other browsers use hundreds?',
    answer: [
      'Most browsers bundle an entire copy of Chromium along with background updaters, sync daemons, telemetry services, and dozens of helper processes. Sol uses a lightweight native C# host on top of the Windows system WebView2 runtime, keeps its own UI tiny, and puts inactive tabs to sleep so they release their memory.',
    ],
  },
  {
    id: 'how-does-video-downloader-work',
    question: 'How does the built-in Video Downloader work?',
    answer: [
      'Sol detects media streams (MP4, WebM, HLS .m3u8, and DASH .mpd) automatically when videos play on a page. You choose your resolution from 480p up to 4K or 8K. Downloads run through a segmented range engine with pause and resume in native floating cards, backed by an integrated yt-dlp and FFmpeg helper. You do not need third-party downloader extensions or conversion websites.',
    ],
  },
  {
    id: 'what-is-the-action-fan',
    question: 'What is the Contextual Action Fan?',
    answer: [
      'The Action Fan is a radial spring menu that opens on right-click. Instead of scrolling through a long context menu, it presents quick actions adapted to what you clicked: web page, selected text, image, video, or link. You can copy, search, share, translate, inspect, or download in one direct motion.',
    ],
  },
  {
    id: 'how-do-sessions-work',
    question: 'How do isolated site sessions work in Sol?',
    answer: [
      'Sol lets you assign separate session identities (such as Admin, User, Guest, or custom names) to specific tabs or sites. Each session runs with isolated cookies, local storage, and authentication tokens, so you can stay signed into multiple accounts on the same website in the same window without opening private windows or switching browsers.',
    ],
  },
  {
    id: 'is-switching-hard',
    question: 'Is it complicated to switch from Chrome, Edge, or Brave to Sol?',
    answer: [
      'No. Sol keeps the same familiar habits and shortcuts you already use, plus full support for Chrome Web Store extensions. On first launch (or anytime in Settings > Data), Sol detects the other browsers on your PC and imports your bookmarks, browsing history, and saved passwords in one click.',
    ],
  },
  {
    id: 'dynamic-colors',
    question: 'How does dynamic color adaptation work?',
    answer: [
      'In Default theme mode, Sol reads the real background color and accent color of the website you are visiting and tints the floating top bar, vertical sidebar, and rounded corners to blend into the page. In Settings > Appearance, you can toggle this tinting individually for the top bar, sidebar, menus, and background.',
    ],
  },
  {
    id: 'quick-notes-and-reader',
    question: 'How do built-in Quick Notes and Reader Mode work?',
    answer: [
      'Quick Notes is a built-in workspace (start.sol/#notes) and sidebar drawer where you can jot down thoughts, links, or code snippets tied to your browsing sessions and page URLs, stored locally with full export support. Reader Mode strips noisy websites down to clean, readable typography with a single click.',
    ],
  },
  {
    id: 'device-mockups-without-extensions',
    question: 'How do the built-in device mockups work compared to standard DevTools?',
    answer: [
      'Standard browser DevTools only resize a flat rectangular viewport to a pixel width. If you want realistic device frames or side-by-side previews, you normally have to install third-party extensions that consume even more memory.',
      'Sol includes real device mockups (iPhone, iPad, MacBook, iMac) natively. You can switch any tab into a device frame, rotate it, or open Compare Screens to view your site across phone, tablet, and desktop mockups at the same time.',
    ],
  },
  {
    id: 'built-in-design-inspector',
    question: 'What is the built-in Design Inspector?',
    answer: [
      'You can press Alt or Shift and hover any element on a page to see its exact font family, size, weight, line-height, letter-spacing, padding, margin, colors, and WCAG contrast ratio in a floating pill, and copy the clean CSS in one click.',
    ],
  },
  {
    id: 'built-in-network-panel',
    question: 'What is the built-in Network panel?',
    answer: [
      'When you are building a web app, you often only need to check an API call or a failed request without opening the full Chromium DevTools window. Sol includes a bottom Network drawer that filters live requests by All, API (XHR and Fetch), or Errors, and formats JSON request and response bodies automatically.',
    ],
  },
  {
    id: 'built-in-ad-blocker',
    question: 'Does Sol come with a built-in ad blocker?',
    answer: [
      'Yes. Sol ships with uBlock Origin Lite enabled by default. Blocking ads and trackers before they load cuts memory usage and stops third-party scripts from slowing down the page. You can toggle it per site or in Settings > Security.',
    ],
  },
  {
    id: 'where-is-data-stored',
    question: 'Where is my browsing data stored?',
    answer: [
      'All bookmarks, history, settings, sessions, notes, and passwords stay locally on your computer in an SQLite database. Sol requires no account to use and collects zero telemetry.',
    ],
  },
  {
    id: 'windows-support',
    question: 'Which versions of Windows does Sol support?',
    answer: [
      'Sol runs on Windows 10 and Windows 11 across x64, ARM64, and x86 architectures.',
    ],
  },
];
