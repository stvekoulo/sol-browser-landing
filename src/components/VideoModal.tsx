'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
};

// Fullscreen video modal rendered in document.body that hides the top navbar while open.
export function VideoModal({ open, onClose, src, poster }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) {
      delete document.documentElement.dataset.modalOpen;
      return;
    }
    document.documentElement.dataset.modalOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      delete document.documentElement.dataset.modalOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sol Browser demo video"
      className="animate-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xl min-[800px]:p-10"
      onClick={onClose}
    >
      <div
        className="animate-modal-card relative w-full max-w-[1160px] overflow-hidden rounded-[20px] bg-[#0c0c0e] shadow-[0_32px_96px_-16px_rgba(0,0,0,0.8)] ring-1 ring-white/15 min-[800px]:rounded-[24px]"
        onClick={e => e.stopPropagation()}
      >
        {/* Floating top bar with subtle title and close button */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/65 via-black/25 to-transparent px-5 py-4">
          <div className="flex items-center gap-2.5 text-white/90">
            <img src="/logo.png" alt="" className="size-5 object-contain" />
            <span className="text-[14px] font-medium tracking-[-0.01em]">Sol in action</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            title="Close (Esc)"
            className="pointer-events-auto flex size-[38px] cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/90 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80 hover:text-white active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* High-definition video player */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="block h-auto max-h-[82svh] w-full bg-black object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}
