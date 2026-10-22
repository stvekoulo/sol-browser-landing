// Isolated Site Sessions and Developer & Design Tools sections.
export function FeaturesDeveloperSection() {
  return (
    <>
      {/* Section: Isolated Site Sessions */}
      <div id="isolated-sessions" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Isolated Site Sessions</h2>
        <p>
          Most browsers share cookies and login tokens across every tab. When you need to test a web
          application as an administrator and as a standard user at the same time, you have to open
          private windows, launch secondary browsers, or constantly log out and log back in.
        </p>
        <p>
          Sol builds native session isolation directly into tabs and domains. You can assign distinct
          session profiles (Admin, User, Guest, or custom names) to any tab or site.
        </p>

        <p>
          <strong className="font-bold text-black">Multiple accounts in one window</strong>
        </p>
        <ul>
          <li>
            Independent storage: each session profile runs with completely isolated cookies, local
            storage, session storage, and authentication tokens
          </li>
          <li>
            Simultaneous logins: stay signed into two or three different accounts on GitHub, AWS,
            Google, or your local web app in the same window
          </li>
          <li>
            Domain session rules: bind specific URLs or domains to a designated session profile so
            they always launch with the right account automatically
          </li>
          <li>
            Seamless auth flows: OAuth and SAML sign-in redirects resolve cleanly within their
            assigned session without leaking authentication state to other tabs
          </li>
        </ul>
      </div>

      {/* Section: Developer & Design Tools */}
      <div id="developer-tools" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Developer &amp; Design Tools</h2>
        <p>
          In standard browsers, responsive mode only resizes the page into a flat rectangular box of
          pixels. If you want realistic device frames or side-by-side device previews, you have to
          install third-party extensions that add memory overhead.
        </p>
        <p>
          Sol builds device frames, inspection tools, and network diagnostics directly into the host,
          with zero extensions required:
        </p>

        <p>
          <strong className="font-bold text-black">Native developer tools</strong>
        </p>
        <ul>
          <li>
            Real device mockups: preview any site inside actual phone (iPhone), tablet (iPad), laptop
            (MacBook), or desktop (iMac) frames, and rotate between portrait and landscape in one click
          </li>
          <li>
            Compare Screens: inspect your site on phone, tablet, and desktop mockups side by side in
            the same view to evaluate responsive breakpoints in one pass
          </li>
          <li>
            In-page Design &amp; CSS Inspector: press Alt or Shift and hover any element to see its
            font family, size, weight, line-height, letter-spacing, padding, margin, colors, and WCAG
            contrast ratio in a floating pill, with one-click CSS copying
          </li>
          <li>
            Lightweight Network Panel: bottom drawer that filters live requests by All, API (XHR and
            Fetch), or Errors, with formatted JSON request and response bodies
          </li>
          <li>
            Built-in Screen Capture: grab a selected region, the visible viewport, or the full
            scrolling page, with an option to include the browser frame and mockups
          </li>
          <li>
            Split View: place two tabs side by side (50/50, 1/3, 2/3, or free drag) to test your
            local build right next to documentation or API specs
          </li>
        </ul>
      </div>
    </>
  );
}
