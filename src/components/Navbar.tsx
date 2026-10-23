'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Floating top capsule navigation bar matching Dia's design with the Sol logo.
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-navbar fixed top-[14px] min-[800px]:top-[28px] left-[10px] right-[10px] z-30 flex flex-col items-center pointer-events-none transition-all duration-200">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto flex items-center justify-center"
      >
        <div className="bg-white/95 backdrop-blur-md border border-black/[0.08] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_20px_-6px_rgba(0,0,0,0.08)] flex items-center h-[52px] pl-[8px] pr-[24px] gap-[14px] text-[#111111]">
          <Link
            href="/"
            aria-label="Sol Home"
            className="flex items-center justify-center size-[38px] transition-transform duration-200 hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Sol"
              width={26}
              height={26}
              className="size-[26px] object-contain select-none invert"
              draggable={false}
            />
          </Link>

          <ul className="flex items-center gap-[18px] text-[15px] leading-none font-normal tracking-[-0.01em]">
            <li>
              <a
                href="https://gitlab.com/stevencrdkoulo/sol-browser/-/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 opacity-60 hover:opacity-100 whitespace-nowrap"
              >
                What&apos;s New
              </a>
            </li>
            <li>
              <Link
                href="/features"
                className={`transition-opacity duration-200 whitespace-nowrap ${
                  pathname === '/features' ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-100'
                }`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/security"
                className={`transition-opacity duration-200 whitespace-nowrap ${
                  pathname === '/security' ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-100'
                }`}
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
