// Secondary workspace polish, 1-click migration, and upcoming roadmap sections for Sol.
export function FeaturesWorkspaceAndRoadmap() {
  return (
    <>
      {/* Section 3: Everyday Polish & Easy Migration */}
      <div id="everyday-polish-and-migration" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Everyday Polish &amp; Migration</h2>
        <p>
          Moving to Sol does not force you to relearn how to browse. You keep the same everyday
          features and habits you rely on in Chrome, Edge, or Brave, while cutting memory consumption
          down to a fraction.
        </p>
        <p>
          On first launch, Sol detects the browsers already installed on your PC and imports your
          bookmarks, browsing history, and saved passwords in one click (or from a CSV export). You
          can also install extensions directly from the Chrome Web Store whenever you need one.
        </p>

        <p>
          <strong className="font-bold text-black">Dynamic color adaptation</strong>
          <br />
          In Default theme mode, Sol samples the background and accent color of the page you are
          visiting and tints the floating top bar, vertical sidebar, and rounded corners so the
          browser frame blends into the site. In Settings &gt; Appearance, you can toggle color
          tinting separately for the top bar, sidebar, menus, and background, or lock the interface
          to Light, Dark, or Windows System mode.
        </p>

        <p>
          <strong className="font-bold text-black">Tab groups, profiles &amp; daily comfort</strong>
        </p>
        <ul>
          <li>
            Collapsible Tab Groups with custom colors and icons
            <ul>
              <li>
                Organize tabs by project or topic, and collapse a group when you switch tasks to
                automatically put those tabs to sleep and free RAM
              </li>
              <li>
                Pin your most-used web apps as compact icon shortcuts at the top of the sidebar
              </li>
            </ul>
          </li>
          <li>
            Multiple Browser Profiles (Work, Personal, Client) with isolated cookies, sessions,
            bookmarks, and per-profile page zoom, plus instant Private windows
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
            Safari-style Start Page with your pinned favorites, recent history, and an optional
            framed wallpaper that adapts whether the sidebar is open or hidden
          </li>
          <li>
            Interface scaling (100%, 90%, 80%) and custom UI font choices (System, Inter, SF Pro)
            independent of website page zoom
          </li>
        </ul>
      </div>

      {/* Section 4: Coming Soon (for everyday users & web developers) */}
      <div id="coming-soon" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Coming Soon</h2>
        <p>
          Sol is actively evolving. We are building native tools for both everyday users and web
          developers that no mainstream browser ships out of the box today, all following the same
          rule: zero memory cost when idle.
        </p>

        <p>
          <strong className="font-bold text-black">For Everyday Browsing</strong>
        </p>
        <ul>
          <li>
            Built-in AI assistant right in the sidebar
            <ul>
              <li>
                Summarize long articles, news, or terms of service in three bullet points without
                leaving your tab
              </li>
              <li>
                Ask questions about the page you are reading, translate a paragraph in place, or
                draft a quick reply
              </li>
            </ul>
          </li>
          <li>
            Integrated Quick Notepad (Scratchpad) in the sidebar to jot down phone numbers,
            shopping lists, links, or quick thoughts while browsing without opening another app
          </li>
          <li>
            Instant File Converter &amp; OCR in Downloads to convert a WebP image to PNG, compress
            a PDF, or copy text from an image locally without uploading your files to ad-filled
            converter websites
          </li>
          <li>
            One-click Clean Reader &amp; Audio Mode to strip noisy recipe blogs or articles down to
            clean text, or listen to them read aloud in the background
          </li>
          <li>
            Smart Price &amp; Restock Watcher: highlight a price on any store page and get notified
            when it drops
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
                Debug responsive states across three viewports in one pass instead of testing them
                one by one
              </li>
            </ul>
          </li>
          <li>
            API Replay &amp; Response Mocking inside the Network panel: click any Fetch or XHR
            request, edit its JSON payload or force a 500/401 status code, and test how your UI
            handles errors without touching your backend or opening Postman
          </li>
          <li>
            AI Error &amp; DOM Debugger: click a failed network request or console error and let the
            built-in AI explain the root cause using the live request headers and DOM state
          </li>
          <li>
            Hover Design Inspector: hold a shortcut key over any element on a page to see its exact
            font, size, spacing, hex color, and contrast ratio in a floating pill, and copy the CSS
            in one click
          </li>
          <li>
            Per-Tab Account Switcher to test the same localhost or staging URL as Admin, Standard
            User, and Logged Out in three tabs side by side without clearing cookies
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
