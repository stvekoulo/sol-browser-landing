<p align="center"><img src="public/logo.png" alt="Sol" width="96"></p>

# Sol Browser — landing page

The website of [Sol](https://gitlab.com/stevencrdkoulo/sol-browser), a light web browser for Windows with tabs in a sidebar, built-in developer tools and Sol AI, an optional assistant that runs on your own ChatGPT plan.

![Sol — monochrome visual identity](public/wallpaper.png)

## Pages

| Route | Content |
|---|---|
| `/` | Original hero composition, supplied background, browser preview, product video and download button |
| `/features` | Why Sol exists, Sol AI with ChatGPT, isolated site sessions, device mockups and inspection, everyday polish and notes, roadmap, FAQ |
| `/security` | Keeping Sol secure, permissions, extensions and backups, reporting and open source, FAQ |

Downloads link to the [GitLab releases](https://gitlab.com/stevencrdkoulo/sol-browser/-/releases) of the browser.

## Run it

You need [Node.js](https://nodejs.org) (current LTS).

```bash
npm ci
npm run dev
```

Then open <http://localhost:3000>. `npm run build` checks and builds the static site; `npm run lint` runs ESLint.

The canonical address used for metadata, `robots.txt` and the sitemap is `https://solbrowser.com`, or `NEXT_PUBLIC_SITE_URL` when it is set.

## Where to edit

- **Features page:** `src/components/features/`. Section text lives in `FeaturesContent.tsx`, `FeaturesSolAi.tsx` and `FeaturesWorkspaceAndRoadmap.tsx`; the sidebar links and FAQ answers in `featuresData.ts`.
- **Security page:** `src/components/security/`, with its FAQ in `securityData.ts`.
- **Home page:** `src/components/SunriseHero.tsx` and `src/components/Navbar.tsx`.
- **Media:** `public/captures/` (screenshot, memory benchmark, product video) and `public/fonts/`.

Describe only what the browser actually ships: the features page is written from the browser's own [feature list](https://gitlab.com/stevencrdkoulo/sol-browser/-/blob/main/docs/sol-ai-features.md) and README.

## Stack

[Next.js](https://nextjs.org) 16 (App Router, statically rendered pages), React 19, Tailwind CSS 4 and TypeScript. This Next.js version differs from older releases: read the guides in `node_modules/next/dist/docs/` before changing framework code (see `AGENTS.md`).
