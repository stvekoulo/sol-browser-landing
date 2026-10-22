// Everyday polish, built-in notes, wallpapers, and upcoming roadmap for Sol.
export function FeaturesWorkspaceAndRoadmap() {
  return (
    <>
      {/* Section: Everyday Polish & Notes */}
      <div id="everyday-polish-and-notes" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Everyday Polish &amp; Notes</h2>
        <p>
          Moving to Sol does not force you to relearn how to browse. You keep standard keyboard
          shortcuts, familiar navigation habits, and full support for Chrome Web Store extensions.
        </p>
        <p>
          On first launch, Sol detects browsers already installed on your PC and imports your
          bookmarks, browsing history, and saved passwords in one click.
        </p>

        <p>
          <strong className="font-bold text-black">Built-in Quick Notes</strong>
          <br />
          Sol includes a built-in notes workspace (start.sol/#notes) and sidebar drawer where you can
          jot down thoughts, links, to-do items, or code snippets while you browse. Notes are saved
          locally with your profile, stay accessible offline, and export cleanly to markdown.
        </p>

        <p>
          <strong className="font-bold text-black">Distraction-free Reader Mode &amp; Translation</strong>
          <br />
          Click the Reader icon on noisy blogs or documentation to strip away cookie banners, ads,
          and distracting layouts in favor of clean typography. Sol also includes native in-page
          translation and uses Windows&apos; system spell-check engine directly.
        </p>

        <p>
          <strong className="font-bold text-black">Everyday details and comfort</strong>
        </p>
        <ul>
          <li>
            Dynamic color adaptation: in Default theme mode, Sol samples the background and accent
            color of the website you are visiting and tints the floating top bar, vertical sidebar,
            and rounded corners so the interface blends into the page
          </li>
          <li>
            Start page wallpapers and typography: curated Unsplash photography with daily rotation,
            personal image upload, and 11 interface typography choices
          </li>
          <li>
            Progressive Web App (PWA) detection: Sol recognizes installable web apps and offers
            one-click desktop app creation with standalone window framing
          </li>
          <li>
            Graduated memory management: inactive tabs sleep after 30 seconds, 1 minute, or 5
            minutes, while safe unloading protects active forms, media playback, and active downloads
          </li>
          <li>
            Collapsible Tab Groups with custom colors and icons: collapse a group when switching tasks
            to free memory immediately
          </li>
          <li>
            Floating interface: every menu, download card, and popup floats with rounded geometry, and
            the vertical sidebar hides anytime for edge-to-edge reading
          </li>
          <li>
            Automatic Picture-in-Picture: video continues playing in a floating mini-player the moment
            you switch tabs
          </li>
        </ul>
      </div>

      <section id="for-web-developers" className="scroll-mt-[100px]">
        <h2 className="dia-h2">For Web Developers</h2>
        <p>Build, compare and debug directly in Sol. Open the device menu, Network panel or command palette to get started.</p>
        <ul>
          <li>
            Synchronized interactions across Device Mockups: scroll, click, type in forms, or toggle
            dark mode on one frame in Compare Screens and watch phone, tablet, and desktop mockups
            mirror your actions simultaneously
          </li>
          <li>
            API Request Replay &amp; Response Mocking: edit JSON payloads or force 401/500 status codes
            in the Network panel to test error handling without touching your backend
          </li>
          <li>
            Localhost LAN QR Preview: generate a quick QR code from the address bar to test your local
            development server on a physical phone over Wi-Fi in seconds
          </li>
          <li>
            Workspace Snapshots: save a named set of open tabs, split views, and device mockups and
            restore the entire layout in a single click, alongside your current tabs
          </li>
        </ul>
      </section>

      {/* Section: Coming Soon (practical tools, zero AI mentions) */}
      <div id="coming-soon" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Coming Soon</h2>
        <p>
          Sol is actively evolving. We are building practical native tools for everyday browsing and
          web development, designed with the same rule as the rest of the browser: zero memory cost
          when idle.
        </p>

        <p>
          <strong className="font-bold text-black">For Everyday Browsing</strong>
        </p>
        <ul>
          <li>
            Smart Price &amp; Restock Watcher: select a price on any store page and receive a quiet
            notification when it drops or returns to stock
          </li>
          <li>
            Local File Converter &amp; OCR in Downloads: convert WebP images to PNG, compress PDFs, or
            copy text from screenshots locally without uploading files to third-party converter sites
          </li>
          <li>
            Audio Read-Aloud for Reader Mode: listen to long articles, documentation, or recipes read
            aloud in the background while working on other tasks
          </li>
          <li>
            Tab Archive &amp; Auto-Tidy: automatically organize older tabs by project or topic into
            sleeping archives that consume zero memory
          </li>
        </ul>



        <h3 className="dia-h3">Follow the Roadmap</h3>
        <p>
          New builds ship regularly. You can inspect latest updates or suggest improvements on our{' '}
          <a
            href="https://gitlab.com/stevencrdkoulo/sol-browser/-/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLab Releases page.
          </a>
        </p>
      </div>
    </>
  );
}
