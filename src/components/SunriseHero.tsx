'use client';

import { useState } from 'react';
import { SolWordmark } from './SolWordmark';
import { VideoModal } from './VideoModal';

// Fullscreen fixed Hero section reproducing Dia's Sunrise stage adapted for Sol.
export function SunriseHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="sunrise-boundary relative isolate h-[100svh] w-full overflow-hidden select-none">
      <section className="sunrise-stage relative z-10 h-full w-full overflow-hidden">
        {/* Composition d’origine conservée ; seul le fond utilise la nouvelle identité. */}
        <div aria-hidden="true" className="isolate overflow-hidden bg-black absolute inset-0">
          <img
            src="/wallpaper.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent" />
        </div>

        {/* Editorial headline in Exposure serif */}
        <h1 className="sunrise-headline animate-sunrise-fade absolute inset-x-6 text-balance text-center font-serif text-white">
          More than a browser. Your web workspace.
        </h1>

        {/* Large calligraphic SOL wordmark positioned behind the browser frame */}
        <div
          data-sunrise-wordmark="true"
          className="sunrise-wordmark animate-sunrise-wordmark absolute left-1/2 -translate-x-1/2 text-white pointer-events-none"
        >
          <div className="origin-bottom will-change-transform">
            <SolWordmark />
          </div>
        </div>

        {/* Static PNG capture of Sol Browser with hover Play button */}
        <div
          data-sunrise-video="true"
          className="sunrise-video animate-sunrise-video relative z-10 mx-auto"
        >
          <div className="origin-bottom will-change-transform">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Watch the Sol introduction video"
              className="sunrise-video-frame group/preview relative block w-full cursor-pointer overflow-hidden bg-white/10 text-left shadow-[0_24px_64px_-16px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <img
                src="/captures/sol-browser.png"
                alt="Sol Browser preview"
                draggable={false}
                className="block h-auto w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/preview:scale-[1.01]"
              />

              {/* Subtle veil and Play button appearing on cursor hover */}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[14%] bg-black/0 transition-colors duration-300 group-hover/preview:bg-black/15">
                <span className="flex items-center gap-3 rounded-full border border-white/25 bg-black/80 px-6 py-3.5 text-white shadow-[0_18px_44px_-8px_rgba(0,0,0,0.45)] backdrop-blur-xl opacity-0 scale-90 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/preview:opacity-100 group-hover/preview:scale-100 group-hover/preview:translate-y-0 group-focus-visible/preview:opacity-100 group-focus-visible/preview:scale-100">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white text-black">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="translate-x-[1px]"
                    >
                      <path
                        d="M1.5 1.35C1.5 0.76 2.15 0.4 2.65 0.72L10.85 5.87C11.32 6.16 11.32 6.84 10.85 7.13L2.65 12.28C2.15 12.6 1.5 12.24 1.5 11.65V1.35Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="pr-1 text-[16px] font-medium tracking-[-0.01em]">
                    Watch the video
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Curved off-white dome ("Sunrise Dock") anchored at the bottom */}
      <div data-sunrise-download="true" className="sunrise-dock absolute inset-x-0 bottom-0 z-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-[200px] bottom-0 origin-bottom overflow-hidden min-[800px]:-bottom-[100px]"
        >
          <div className="sunrise-dome-ellipse absolute left-1/2 top-[200px] -translate-x-1/2">
            <div className="relative h-full w-full will-change-transform">
              {/* Warm golden glow beneath the arch */}
              <div className="absolute left-1/2 top-[-50px] aspect-[5/1] w-[70%] -translate-x-1/2">
                <div className="h-full w-full translate-y-[80px]">
                  <div className="h-full w-full rounded-[50%] bg-white blur-[40px] opacity-20" />
                </div>
              </div>

              {/* Soft elevation shadow of the dome */}
              <div className="absolute inset-0 rounded-[50%] shadow-[0_-1px_2px_-1px_rgba(45,35,24,0.09),0_-7px_18px_-8px_rgba(73,54,34,0.09),0_-20px_44px_-20px_rgba(101,76,47,0.10)]" />

              {/* Off-white surface (#f8f8f8) of the arch */}
              <div className="absolute inset-0 rounded-[50%] bg-[#f8f8f8]" />
            </div>
          </div>
        </div>

        {/* Black pill CTA button + availability subtitle */}
        <div className="sunrise-cta-wrap animate-sunrise-cta absolute inset-x-4 flex flex-col items-center gap-4">
          <a
            href="https://gitlab.com/stevencrdkoulo/sol-browser/-/releases"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Sol for free"
            className="pointer-events-auto w-full max-w-[443px] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="group flex h-[48px] min-[800px]:h-[56px] w-full items-center justify-center gap-[10px] rounded-full bg-black pl-[24px] pr-[22px] font-sans text-[18px] min-[800px]:text-[20px] font-normal leading-[1.2] text-[#f8f8f8] transition-all duration-200 hover:scale-[1.02] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_2px_4px_0_rgba(0,0,0,0.16),0_18px_40px_-10px_rgba(0,0,0,0.34)] active:scale-[0.98]">
              <span>Download Sol for free</span>
              <svg
                aria-hidden="true"
                width="17"
                height="14"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90 opacity-80 transition-transform duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0.5"
              >
                <path
                  d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
          <p className="pointer-events-auto text-center font-sans text-[12px] min-[800px]:text-[14px] leading-[1.2] text-black/50">
            Available for Windows (x64, ARM64, and x86)
          </p>
        </div>
      </div>

      {/* Fullscreen video modal */}
      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="/captures/sol-browser.mp4"
        poster="/captures/sol-browser.png"
      />
    </div>
  );
}
