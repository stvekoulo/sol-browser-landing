'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FEATURES_SIDEBAR_LINKS } from './featuresData';
import { FeaturesFaq } from './FeaturesFaq';
import { FeaturesWorkspaceAndRoadmap } from './FeaturesWorkspaceAndRoadmap';
import { FeaturesSolAi } from './FeaturesSolAi';

// Two-column editorial Features view in Dia's layout, written in direct developer voice.
export function FeaturesContent() {
  const [activeId, setActiveId] = useState<string>('why-i-built-sol');

  useEffect(() => {
    const sectionIds = FEATURES_SIDEBAR_LINKS.filter(s => !s.externalHref).map(s => s.id);
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-90px 0px -60% 0px', threshold: 0 },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f8f8] text-[#111111]">
      <section className="mx-auto w-full max-w-[1040px] px-[20px] pt-[100px] pb-[80px] min-[800px]:pt-[150px] min-[1000px]:pt-[200px]">
        {/* Editorial page header with Sol mark and large light title */}
        <header className="mb-[80px] flex flex-col gap-y-[24px] min-[800px]:mb-[120px]">
          <Link
            href="/"
            aria-label="Sol Home"
            className="inline-flex w-fit items-center gap-[8px] text-[#111111] transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src="/logo.png"
              alt=""
              width={30}
              height={30}
              className="size-[30px] object-contain select-none"
              draggable={false}
            />
            <span className="font-serif text-[32px] leading-none font-medium tracking-[-0.03em]">
              Sol
            </span>
          </Link>

          <div className="flex flex-col items-start justify-between min-[800px]:flex-row min-[800px]:items-end">
            <h1 className="dia-h1 leading-[1]">Features</h1>
          </div>
        </header>

        {/* Two-column layout: sticky anchor sidebar on left, 580px editorial body on right */}
        <div className="mb-[120px] grid w-full grid-cols-1 gap-x-[120px] gap-y-[64px] min-[1000px]:grid-cols-[1fr_580px]">
          <div className="relative col-start-1">
            <ul className="sticky top-[100px] text-[16px] leading-[20px] font-normal">
              {FEATURES_SIDEBAR_LINKS.map(item => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="mb-[8px]">
                    {item.externalHref ? (
                      <a
                        href={item.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 transition-colors duration-200 hover:text-[#5863ea]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        href={`#${item.id}`}
                        onClick={() => setActiveId(item.id)}
                        className={`transition-colors duration-200 hover:text-[#5863ea] ${
                          isActive ? 'text-[#5863ea]' : 'text-black/60'
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-[1000px]:col-start-2">
            <div className="dia-rich-text flex flex-col gap-[64px] text-[16px] leading-[1.5] font-normal">
              {/* Section 1: Why I Built Sol + Task Manager Memory Comparison */}
              <div id="why-i-built-sol" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Why I Built Sol</h2>
                <p>
                  Sol is built for normal, everyday browsing just like any other browser, without
                  draining your computer&apos;s resources, and with a clean, carefully crafted
                  interface that feels good to use all day.
                </p>
                <p>
                  It started as a personal tool I built for myself. Because I work on the web all
                  day, I kept wondering why other browsers eat so much RAM, stutter on pages with
                  heavy animations, and eventually freeze or crash when you have multiple tabs open.
                  I built Sol to cut that memory usage down to a fraction while keeping a polished,
                  modern look.
                </p>

                {/* Real Windows Task Manager comparison capture */}
                <figure className="my-[24px] overflow-hidden rounded-[12px] border border-black/10 bg-[#0d1520] shadow-lg">
                  <img
                    src="/captures/memory-benchmark.png"
                    alt="Windows Task Manager showing Sol browser using 25.8 MB of RAM compared to Comet using 428.9 MB across 22 processes"
                    className="block h-auto w-full object-contain"
                    draggable={false}
                  />
                  <figcaption className="border-t border-white/10 bg-[#111926] px-[16px] py-[10px] text-[13px] leading-[1.4] text-white/75">
                    Windows Task Manager: <strong className="font-medium text-white">Sol browser</strong> at{' '}
                    <strong className="font-medium text-white">25.8 MB RAM</strong> (0.4% CPU) vs.{' '}
                    <strong className="font-medium text-white">Comet (22 processes)</strong> at{' '}
                    <strong className="font-medium text-white">428.9 MB RAM</strong>. Sol uses less
                    memory than Windows Explorer (64.0 MB).
                  </figcaption>
                </figure>

                <p>
                  <strong className="font-bold text-black">How Sol stays this light</strong>
                </p>
                <p>
                  Instead of bundling a redundant 300 MB Chromium binary and spawning twenty
                  background helper processes, Sol pairs a lean native host with Windows&apos; shared
                  WebView2 engine. Inactive tabs inside collapsed groups or pinned shortcuts go to
                  sleep and release their memory completely until you click them again.
                </p>

                <p>
                  <strong className="font-bold text-black">Built-in ad blocking with uBlock Origin Lite</strong>
                  <br />
                  Ads and tracking scripts are one of the biggest reasons web pages lag and eat RAM.
                  Sol ships with uBlock Origin Lite enabled by default, blocking third-party ad
                  payloads before they execute.
                </p>
              </div>

              {/* Section 2: Sol AI with ChatGPT */}
              <FeaturesSolAi />

              {/* Section 3: Isolated Site Sessions (Multi-User & Multi-Account) */}
              <div id="isolated-sessions" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Isolated Site Sessions</h2>
                <p>
                  Most browsers share the same cookies and login tokens across every tab. If you need
                  to test your app as an administrator and as a standard user at the same time, you
                  usually have to open private windows, use secondary browsers, or constantly log out
                  and log back in.
                </p>
                <p>
                  Sol includes native session isolation built directly into tabs and domains. You can
                  assign distinct session identities (Admin, User, Guest, or custom names) to any tab
                  or site.
                </p>

                <p>
                  <strong className="font-bold text-black">What session isolation gives you</strong>
                </p>
                <ul>
                  <li>
                    Multiple accounts on the same site simultaneously
                    <ul>
                      <li>
                        Stay signed into two or three different accounts on GitHub, AWS, Google, or
                        your local web app in the same window
                      </li>
                      <li>
                        Each session runs with completely isolated cookies, local storage, and
                        authentication tokens
                      </li>
                    </ul>
                  </li>
                  <li>
                    Persistent site rules: bind specific domains to a dedicated session identity so
                    they always open with the right account
                  </li>
                  <li>
                    Zero friction: OAuth and SAML sign-in flows resolve smoothly within their
                    assigned session without leaking state to other tabs
                  </li>
                </ul>
              </div>

              {/* Section 4: Device Mockups & Inspection */}
              <div id="device-mockups-and-inspection" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Device Mockups &amp; Inspection</h2>
                <p>
                  In standard browsers, responsive inspection only resizes the page into a flat
                  rectangular box of pixels. If you want realistic mobile frames or side-by-side
                  device previews, you have to install third-party extensions that eat even more memory.
                </p>
                <p>
                  Sol builds real device frames and developer inspection tools directly into the
                  browser, with zero extensions required:
                </p>

                <p>
                  <strong className="font-bold text-black">Native Developer &amp; Inspection Tools</strong>
                </p>
                <ul>
                  <li>
                    Real device mockups and multi-screen comparison
                    <ul>
                      <li>
                        Preview any site inside actual phone (iPhone), tablet (iPad), laptop
                        (MacBook), or desktop (iMac) frames and rotate between portrait and
                        landscape in one click
                      </li>
                      <li>
                        Open Compare Screens to inspect your site on phone, tablet, and desktop
                        mockups side by side in the same view
                      </li>
                    </ul>
                  </li>
                  <li>
                    In-page Design &amp; CSS Inspector: press Alt or Shift and hover any element to
                    see its font family, size, weight, line-height, letter-spacing, padding, margin,
                    colors, and WCAG contrast ratio in a floating pill, with one-click CSS copying
                  </li>
                  <li>
                    Lightweight Network Panel that filters live requests by All, API (XHR and
                    Fetch), or Errors, with formatted JSON request and response bodies
                  </li>
                  <li>
                    Built-in Screen Capture for a selected region, the visible viewport, or the full
                    scrolling page, with an option to include the browser frame and mockups
                  </li>
                  <li>
                    Split View for placing two tabs side by side (50/50, 1/3, 2/3, or free drag) to
                    test a local build right next to your docs
                  </li>
                </ul>
              </div>

              {/* Sections 5 & 6: Everyday Polish & Notes + Coming Soon */}
              <FeaturesWorkspaceAndRoadmap />

              {/* Section 7: FAQ Accordion */}
              <FeaturesFaq />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
