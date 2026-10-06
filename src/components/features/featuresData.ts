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

// Sticky sidebar links for the Sol Features page, mirroring Dia's editorial layout.
export const FEATURES_SIDEBAR_LINKS: SidebarSection[] = [
  { id: 'why-i-built-sol', label: 'Why I Built Sol' },
  { id: 'device-mockups-and-inspection', label: 'Device Mockups & Inspection' },
  { id: 'everyday-polish-and-migration', label: 'Everyday Polish & Migration' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'faq', label: 'FAQ' },
  {
    id: 'release-notes',
    label: 'Release Notes',
    externalHref: 'https://gitlab.com/stevencrdkoulo/sol-browser/-/releases',
  },
];

// Direct, concrete FAQ items written without AI filler.
export const FEATURES_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'why-does-sol-use-so-little-ram',
    question: 'How does Sol use 25.8 MB of RAM when other browsers use hundreds?',
    answer: [
      'Most browsers bundle an entire copy of Chromium along with background updaters, sync daemons, telemetry services, and dozens of helper processes. Sol uses a lightweight native C# host on top of the Windows system WebView2 runtime, keeps its own UI tiny, and puts inactive tabs in collapsed groups to sleep so they release their memory.',
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
    id: 'profiles-and-tab-groups',
    question: 'How do Profiles and Tab Groups work?',
    answer: [
      'You can create separate browser profiles (for example, Work, Personal, or a specific client) with isolated cookies, history, and zoom settings. Inside any window, you can organize tabs into named groups with custom colors and icons. Collapsing a group unloads its background tabs from RAM until you click them again.',
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
    id: 'screen-capture-modes',
    question: 'What can I capture with the built-in screenshot tool?',
    answer: [
      'You can capture a selected area, the visible part of the page, or the full scrolling page. A checkbox lets you include the browser interface itself (top bar, sidebar, and active device mockups) when you want a clean product shot.',
    ],
  },
  {
    id: 'split-view-and-pip',
    question: 'How do Split View and the floating video player work?',
    answer: [
      'Split View lets you place two tabs side by side (50/50, 1/3, 2/3, or drag the divider freely). And if a video is playing when you switch to another tab, Sol automatically pops it into a floating Picture-in-Picture window.',
    ],
  },
  {
    id: 'upcoming-ai-and-notes',
    question: 'When are built-in AI and quick notes coming?',
    answer: [
      'Integrated sidebar Notes and optional local/cloud AI assistance (page summaries, instant translation, and code/error explanations) are in active development and will ship in upcoming releases without adding background memory bloat when idle.',
    ],
  },
  {
    id: 'where-is-data-stored',
    question: 'Where is my browsing data stored?',
    answer: [
      'All bookmarks, history, settings, and passwords stay locally on your computer. Sol requires no account to use and collects zero telemetry.',
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
