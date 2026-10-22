// Native Video Downloader and Contextual Action Fan sections.
export function FeaturesMediaAndTools() {
  return (
    <>
      {/* Section: Native Video Downloader */}
      <div id="video-downloader" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Native Video Downloader</h2>
        <p>
          Downloading a video or audio stream normally means using ad-filled converter sites or
          installing third-party extensions that run continuous background scripts.
        </p>
        <p>
          Sol builds media detection and multi-quality downloads directly into the browser. When a
          video plays on any website, Sol detects the media stream automatically and displays a
          download button right in the top bar.
        </p>

        <p>
          <strong className="font-bold text-black">Built-in download engine</strong>
        </p>
        <ul>
          <li>
            Automatic stream detection: captures direct MP4, WebM, HLS (.m3u8), and DASH (.mpd)
            streams as they load in the page
          </li>
          <li>
            Quality selector: pick your resolution from 480p and 720p up to 1080p, 4K, and 8K, with
            options to save video or extract audio directly
          </li>
          <li>
            Segmented HTTP range downloader: downloads files in parallel chunks for maximum transfer
            speed, with full support for pause and resume
          </li>
          <li>
            Integrated helper engine: includes verified yt-dlp and FFmpeg binaries to merge separate
            video and audio streams locally without extra configuration
          </li>
          <li>
            Floating download cards: manage active downloads with pause, resume, cancel, and direct
            file open in Explorer without intrusive dialogs
          </li>
        </ul>
      </div>

      {/* Section: Contextual Action Fan */}
      <div id="contextual-action-fan" className="scroll-mt-[100px]">
        <h2 className="dia-h2">Contextual Action Fan</h2>
        <p>
          Traditional browser context menus are long, rectangular lists with twenty identical rows.
          Finding the action you want requires reading through items you never click.
        </p>
        <p>
          Sol replaces standard right-click menus with a radial Action Fan built with fluid spring
          physics. It fans out around your cursor with only the actions that match what you clicked.
        </p>

        <p>
          <strong className="font-bold text-black">Adaptive radial actions</strong>
        </p>
        <ul>
          <li>
            On empty page areas: quick actions to navigate back, forward, reload, toggle Split View,
            or open the Design Inspector
          </li>
          <li>
            On text selections: one-click copy, web search, in-page translation, or save selection to
            Quick Notes
          </li>
          <li>
            On images and media: copy image, save to disk, inspect dimensions, or open directly in a
            clean tab
          </li>
          <li>
            On links: open in new tab, open in isolated session, copy clean URL without tracking
            parameters, or open in split view
          </li>
          <li>
            Spring-driven interaction: opens with natural momentum and closes cleanly when you release
            or click outside
          </li>
        </ul>
      </div>
    </>
  );
}
