// Demos in Action section showcasing real Sol screen captures and video recordings.
export function FeaturesDemos() {
  return (
    <div id="demos" className="scroll-mt-[100px]">
      <h2 className="dia-h2">Demos in Action</h2>
      <p>
        Real captures of Sol Browser running on Windows: inspecting responsive layouts side by side
        inside native device mockups, and detecting video streams on the fly with the built-in
        downloader.
      </p>

      {/* Demo 1: Multi-Device Compare Screens */}
      <div className="mt-[32px] flex flex-col gap-[12px]">
        <p>
          <strong className="font-bold text-black">1. Multi-Device Compare Screens</strong>
        </p>
        <p>
          Previewing a web application across mobile and desktop breakpoints in a single view. Sol
          renders the page live inside phone (iPhone) and laptop (MacBook) frames side by side, and
          automatically samples the site&apos;s background color to tint the browser chrome.
        </p>

        <figure className="my-[12px] overflow-hidden rounded-[12px] border border-black/10 bg-[#e8ede4] shadow-lg">
          <img
            src="/captures/demo-1.PNG"
            alt="Sol Browser Compare Screens mode previewing devbenin.bj inside iPhone and MacBook frames side by side"
            className="block h-auto w-full object-contain"
            draggable={false}
          />
          <figcaption className="border-t border-black/10 bg-[#f1f4ee] px-[16px] py-[10px] text-[13px] leading-[1.4] text-black/75">
            Compare Screens mode: <strong className="font-medium text-black">devbenin.bj</strong>{' '}
            rendered simultaneously inside iPhone and MacBook frames with dynamic sage-green chrome
            tinting.
          </figcaption>
        </figure>
      </div>

      {/* Demo 2: Native Video Downloader on YouTube */}
      <div className="mt-[40px] flex flex-col gap-[12px]">
        <p>
          <strong className="font-bold text-black">2. Native Video Downloader</strong>
        </p>
        <p>
          Capturing a video stream directly from YouTube without third-party extensions or converter
          websites. Sol detects active media streams, opens a quality selector from 1080p down to
          144p and audio, and downloads the file through a floating progress card with pause and resume.
        </p>

        <figure className="my-[12px] overflow-hidden rounded-[12px] border border-black/10 bg-[#0d1520] shadow-lg">
          <video
            src="/captures/demo-2.mp4"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="block h-auto w-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
          <figcaption className="border-t border-white/10 bg-[#111926] px-[16px] py-[10px] text-[13px] leading-[1.4] text-white/75">
            Live stream detection on YouTube: quality selector menu (1080p, 720p, 480p, audio),
            one-click download start, and native floating progress card.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
