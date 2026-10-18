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
  { id: 'sol-ai', label: 'Sol AI with ChatGPT' },
  { id: 'isolated-sessions', label: 'Isolated Site Sessions' },
  { id: 'device-mockups-and-inspection', label: 'Device Mockups & Inspection' },
  { id: 'everyday-polish-and-notes', label: 'Everyday Polish & Notes' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'faq', label: 'FAQ' },
  {
    id: 'release-notes',
    label: 'Release Notes',
    externalHref: 'https://gitlab.com/stevencrdkoulo/sol-browser/-/releases',
  },
];

// Direct, concrete FAQ items without corporate filler; Sol AI answers describe only what ships today.
export const FEATURES_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'why-does-sol-use-so-little-ram',
    question: 'How does Sol use 25.8 MB of RAM when other browsers use hundreds?',
    answer: [
      'Most browsers bundle an entire copy of Chromium along with background updaters, sync daemons, telemetry services, and dozens of helper processes. Sol uses a lightweight native C# host on top of the Windows system WebView2 runtime, keeps its own UI tiny, and puts inactive tabs in collapsed groups to sleep so they release their memory.',
    ],
  },
  {
    id: 'what-is-sol-ai',
    question: 'What is Sol AI, and do I need to pay for it?',
    answer: [
      'Sol AI is an optional assistant that uses your own ChatGPT Plus or Pro subscription through Sign in with ChatGPT. There is no API key to create and no separate bill; requests count toward your ChatGPT plan usage, which you can review from the Manage usage button in Settings > Sol.',
      'Once connected, it can summarize, explain, translate or fix text, answer questions about the open site by reading it live and following its links, chat in a side panel, and search, summarize or create your notes.',
    ],
  },
  {
    id: 'what-does-sol-ai-send',
    question: 'What does Sol AI send to OpenAI?',
    answer: [
      'Only what you act on: your question, the text you selected, and the page content Sol AI reads to answer it. Clicking, typing or navigating on a site always asks for your approval first, and password, card and one-time-code fields are never read.',
      'Daily topic sorting of bookmarks and history is off by default; when you turn it on, it sends page titles and domains only. Sol AI does not run in private windows.',
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
    id: 'screen-capture-modes',
    question: 'What can I capture with the built-in screenshot tool?',
    answer: [
      'You can capture a selected area, the visible part of the page, or the full scrolling page. A checkbox lets you include the browser interface itself (top bar, sidebar, and active device mockups) when you want a clean product shot.',
    ],
  },
  {
    id: 'where-is-data-stored',
    question: 'Where is my browsing data stored?',
    answer: [
      'All bookmarks, history, settings, sessions, notes, and passwords stay locally on your computer. Sol requires no account to use and collects zero telemetry. The only exception is Sol AI, when you connect ChatGPT and ask it something: see the question above.',
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
