'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SECURITY_SIDEBAR_LINKS } from './securityData';
import { SecurityFaq } from './SecurityFaq';

// Two-column editorial Security view matching Dia's exact Security page layout.
export function SecurityContent() {
  const [activeId, setActiveId] = useState<string>('keeping-sol-secure');

  useEffect(() => {
    const sectionIds = SECURITY_SIDEBAR_LINKS.filter(s => !s.externalHref).map(s => s.id);
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
        {/* Editorial page header with Sol mark and large light Security title */}
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
            <h1 className="dia-h1 leading-[1]">Security</h1>
          </div>
        </header>

        {/* Two-column layout: sticky anchor sidebar on left, 580px editorial body on right */}
        <div className="mb-[120px] grid w-full grid-cols-1 gap-x-[120px] gap-y-[64px] min-[1000px]:grid-cols-[1fr_580px]">
          <div className="relative col-start-1">
            <ul className="sticky top-[100px] text-[16px] leading-[20px] font-normal">
              {SECURITY_SIDEBAR_LINKS.map(item => {
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
              {/* Section 1: Keeping Sol Secure */}
              <div id="keeping-sol-secure" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Keeping Sol Secure</h2>
                <p>
                  A browser handles your credentials, private sessions, and daily work. Sol is
                  designed around a simple rule: minimize what leaves your computer, strip out
                  background tracking services, and verify every package or command that crosses the
                  boundary between a web page and the native host.
                </p>
                <p>
                  Because Sol runs without a user account or a central cloud server, we cannot read,
                  lose, or sell your browsing history, bookmarks, or passwords.
                </p>

                <p>
                  <strong className="font-bold text-black">Browser engine &amp; upstream patches</strong>
                  <br />
                  Sol renders web content through the Microsoft Edge WebView2 (Chromium) runtime on
                  Windows. This gives every tab Chromium process sandboxing, Site Isolation, and
                  continuous upstream security patches delivered automatically through Windows
                  Update.
                </p>

                <p>
                  <strong className="font-bold text-black">Strict host-UI bridge validation</strong>
                  <br />
                  The browser interface communicates with the native C# host through a typed JSON
                  message channel (CommandParser). Every incoming command is validated against an
                  explicit allowlist of actions and parameter bounds before the host executes it.
                </p>

                <p>
                  <strong className="font-bold text-black">List of Built-In Privacy Protections</strong>
                </p>
                <ul>
                  <li>
                    uBlock Origin Lite enabled by default (GPLv3, updated automatically)
                    <ul>
                      <li>
                        Blocks third-party ad networks, popups, and cross-site tracking scripts
                        before they run
                      </li>
                      <li>
                        Includes full access to filter lists and per-site exceptions in Settings &gt;
                        Security
                      </li>
                    </ul>
                  </li>
                  <li>Zero telemetry, usage analytics, or crash-reporting daemons</li>
                  <li>
                    No mandatory cloud account: bookmarks, history, and passwords stay in your local
                    profile folder
                  </li>
                  <li>
                    Toggleable online search suggestions so address bar typing stays local until you
                    press Enter
                  </li>
                  <li>
                    Isolated Private browsing windows with extensions disabled and session data
                    wiped on close
                  </li>
                </ul>
              </div>

              {/* Section 2: Permissions, Extensions & Backups */}
              <div id="permissions-extensions-and-backups" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Permissions, Extensions &amp; Backups</h2>
                <p>
                  <strong className="font-bold text-black">Cryptographically verified extensions (CRX3)</strong>
                  <br />
                  Sol only downloads extensions from the official Chrome Web Store endpoint, never
                  from arbitrary URLs. Before unpacking an extension, Sol parses the CRX3 binary
                  header, verifies the SHA-256 cryptographic signature against the package public
                  key, and confirms that the key derives to the exact 16-byte extension ID.
                </p>
                <p>
                  Before any extension is enabled, Sol displays the exact permissions it requests. If
                  a new version of an installed extension asks for additional permissions, Sol pauses
                  the update and prompts you to review the new access first.
                </p>

                <p>
                  <strong className="font-bold text-black">AES-256-GCM encrypted local backups</strong>
                  <br />
                  Instead of syncing your profile to a third-party cloud, Sol lets you export an
                  encrypted backup file in Settings &gt; Data. Your profile files are compressed and
                  encrypted locally with AES-256-GCM using a 256-bit key derived from your
                  passphrase via PBKDF2-SHA256 (600,000 iterations, 16-byte random salt). The file
                  header is authenticated with the ciphertext, so any tampered file is rejected. On
                  restore, Sol only extracts known profile filenames into a staging folder and
                  applies them on the next startup.
                </p>

                <p>
                  <strong className="font-bold text-black">Granular site permissions &amp; one-click reset</strong>
                  <br />
                  No website receives camera, microphone, location, or notification access without
                  asking first. In Settings &gt; Security, you can review every origin that holds a
                  saved permission, forget a single site in one click, or clear all site permissions
                  and browsing data at once.
                </p>
              </div>

              {/* Section 3: Reporting & Open Source */}
              <div id="reporting-and-open-source" className="scroll-mt-[100px]">
                <h2 className="dia-h2">Reporting &amp; Open Source</h2>
                <p>
                  Security claims are easier to trust when you can read the code yourself. Sol&apos;s
                  native host, extension verifier, backup encryption, and UI bridge are open source
                  and available to inspect on{' '}
                  <a
                    href="https://gitlab.com/stevencrdkoulo/sol-browser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitLab.
                  </a>
                </p>

                <h3 className="dia-h3">How to Report a Vulnerability</h3>
                <p>
                  If you identify a security or privacy vulnerability in Sol Browser, please report
                  it by opening a confidential issue on our{' '}
                  <a
                    href="https://gitlab.com/stevencrdkoulo/sol-browser/-/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitLab issue tracker
                  </a>{' '}
                  with steps to reproduce so we can ship a fix promptly.
                </p>
              </div>

              {/* Section 4: FAQ Accordion */}
              <SecurityFaq />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
