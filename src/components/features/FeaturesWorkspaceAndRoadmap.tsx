// Secondary workspace polish, built-in notes, and upcoming roadmap sections for Sol.
export function FeaturesWorkspaceAndRoadmap() {
  return (
    <>
      {/* Section 4: Everyday Polish & Notes */}
      <div id="everyday-polish-and-notes" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Everyday Polish &amp; Notes</h2>
        <p>
          Moving to Sol does not force you to relearn how to browse. You keep the everyday habits and
          shortcuts you rely on in Chrome, Edge, or Brave, while cutting memory consumption down to a
          fraction.
        </p>
        <p>
          On first launch, Sol detects the browsers already installed on your PC and imports your
          bookmarks, browsing history, and saved passwords in one click (or from a CSV export). You
          can also install extensions directly from the Chrome Web Store whenever you need one.
        </p>

        <p>
          <strong className="font-bold text-black">Built-in Quick Notes</strong>
          <br />
          Sol includes a built-in notes workspace (start.sol/#notes) and sidebar drawer where you can
          jot down thoughts, links, to-do items, or code snippets while you browse. Notes are saved
          locally with your profile, stay accessible offline, and can be exported as markdown or
          included in encrypted backups.
        </p>

        <p>
          <strong className="font-bold text-black">Distraction-free Reader Mode &amp; Translation</strong>
          <br />
          Click the Reader icon on noisy blogs or documentation to strip away cookie banners, ads,
          and distracting layouts in favor of clean typography. Sol also includes native in-page
          translation and uses Windows&apos; system spell-check engine directly.
        </p>

        <p>
          <strong className="font-bold text-black">Dynamic colors, wallpapers &amp; comfort</strong>
        </p>
        <ul>
          <li>
            Dynamic color adaptation: in Default theme mode, Sol samples the background and accent
            color of the website you are visiting and tints the floating top bar, vertical sidebar,
            and rounded corners so the interface blends into the page
          </li>
          <li>
            Curated Unsplash and custom start page wallpapers, framed cleanly whether the vertical
            sidebar is open or collapsed
          </li>
          <li>
            Collapsible Tab Groups with custom colors and icons: collapse a group when you switch
            tasks to put its tabs to sleep and free RAM
          </li>
          <li>
            Floating interface with zero rectangular bars: every menu, download card, and popup
            floats with rounded geometry, and the sidebar hides anytime for edge-to-edge reading
          </li>
          <li>
            Automatic Floating Video Player (Picture-in-Picture) that keeps your video visible on
            screen the moment you switch tabs
          </li>
          <li>
            Interface scaling (100%, 90%, 80%) and custom UI font choices (System, Inter, SF Pro)
            independent of website page zoom
          </li>
        </ul>
      </div>

      {/* Section 5: Coming Soon (for everyday users & web developers) */}
      <div id="coming-soon" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Coming Soon</h2>
        <p>
          Sol is actively evolving. We are building practical native tools for both everyday users
          and web developers, designed with the same rule as the rest of the browser: zero memory
          cost when idle.
        </p>

        <p>
          <strong className="font-bold text-black">For Everyday Browsing</strong>
        </p>
        <ul>
          <li>
            Smart Price &amp; Restock Watcher: highlight a price on any store page and get a quiet
            notification when it drops or comes back in stock
          </li>
          <li>
            Instant File Converter &amp; OCR in Downloads: convert a WebP image to PNG, compress a
            PDF, or copy text from an image locally without uploading files to ad-filled converter
            websites
          </li>
          <li>
            Audio Read-Aloud for Reader Mode: listen to long articles or recipes read aloud in the
            background while working on other tasks
          </li>
          <li>
            More Sol AI tools: compare several pages in a table, extract structured data from a page
            to Markdown or CSV, and explain a screenshot or an error on screen
          </li>
        </ul>

        <p>
          <strong className="font-bold text-black">For Web Developers (Built In, Zero Extensions)</strong>
        </p>
        <ul>
          <li>
            Synchronized interactions across Device Mockups
            <ul>
              <li>
                Scroll, click, type in a form, or toggle dark mode on one mockup in Compare Screens
                and watch phone, tablet, and desktop frames mirror your action at the same time
              </li>
              <li>
                Test responsive states across three viewports simultaneously in one pass instead of
                checking them one by one
              </li>
            </ul>
          </li>
          <li>
            API Request Replay &amp; Response Mocking inside the Network panel: click any Fetch or
            XHR request, edit its JSON payload or force a 500/401 status code, and test how your UI
            handles errors without touching your backend or opening Postman
          </li>
          <li>
            Localhost LAN QR Preview: generate a quick QR code from the address bar to open and test
            your local development build on a physical phone over Wi-Fi in two seconds
          </li>
          <li>
            Workspace Snapshots: save a named set of open tabs, split views, and device mockups (such
            as &ldquo;Morning News&rdquo; or &ldquo;Frontend Debug&rdquo;) and restore the entire
            layout in a single click
          </li>
        </ul>

        <h3 className="dia-h3">Follow the Roadmap</h3>
        <p>
          New builds ship regularly. You can check the latest updates or suggest a feature on our{' '}
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
