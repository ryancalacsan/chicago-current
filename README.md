# Chicago Current

A scroll-driven photo essay documenting a nine-mile kayak journey down the Chicago River — from the tree-lined North Branch to the urban canyon of the Riverwalk. Photography by Ryan Calacsan, words by Erica Zazo, originally published in Mountain Gazette.

**[View Live](https://chicago-current.ryancalacsan.dev)**

![Chicago Current Preview](./preview.png)

## Tech Stack

- **Framework** — Next.js 16 (App Router, static generation)
- **Language** — TypeScript
- **Animation** — [GSAP](https://gsap.com) (ScrollTrigger, containerAnimation, scrub)
- **Smooth Scroll** — [Lenis](https://lenis.darkroom.engineering)
- **Styling** — Tailwind CSS v4 (CSS-first config)
- **Fonts** — Instrument Serif (headlines), Inter (body)
- **Deployment** — Vercel

## Features

- **Scroll-driven narrative** — Seven thematic sections with mile markers guide the reader downstream, pacing the story with scroll progress
- **Horizontal scroll gallery** — The "Into the Green" section pins and scrolls horizontally with nested scale/opacity animations on each image panel via `containerAnimation`
- **Word-by-word text highlighting** — `ScrollHighlight` component illuminates text word-by-word as the reader scrolls, pacing atmospheric passages like the rhythm of paddling
- **Split text reveals** — Character-by-character and word-by-word entrance animations for headlines and pull quotes
- **Parallax photography** — `ParallaxImage` adds depth with scroll-speed-adjusted vertical movement
- **Image reveal animations** — Directional clip-path reveals (left, right, top, bottom) for editorial-style image entrances
- **Section color theming** — CSS custom properties shift per section via `data-theme` attributes, with GSAP-animated color transitions between palettes
- **Pinned scroll timeline** — River Story section pins and scrubs through a multi-paragraph narrative
- **Custom cursor** — Lerp-smoothed cursor with event-delegated hover states for interactive and image elements
- **Preloader** — Animated entrance with font and hero image readiness detection
- **Film grain overlay** — SVG feTurbulence noise texture for analog photo quality
- **Scroll progress bar** — Fixed 2px indicator tracking page scroll position
- **Gradient section bridges** — Smooth color transitions between sections eliminate hard cuts
- **Reduced motion support** — All animations gracefully degrade, images remain visible
- **Accessibility** — WCAG 2.2 AA text contrast, screen-reader text for split/animated headings, skip link and keyboard focus handling, and a no-JS fallback so content is never left hidden
- **Mobile-optimized** — Responsive layouts with touch-aware animation adjustments

## Getting Started

Requires Node.js 22+ and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build (also type-checks) |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

CI runs lint, type-check, and build on every pull request and push to `main`.

## Project Structure

```
app/
  globals.css               # Tailwind v4 config, section color palettes, film grain
  layout.tsx                # Root layout with fonts, providers, cursor, overlays
  page.tsx                  # Single-page section composition
components/
  Hero.tsx                  # Full-bleed hero with parallax, split text, scroll indicator
  SectionLaunch.tsx         # Mile 0 — kayak launch with scale image + scroll highlight
  SectionRiverStory.tsx     # Pinned scroll timeline with character-split headline
  SectionGreen.tsx          # Mile 2 — horizontal scroll gallery with nested animations
  SectionTransition.tsx     # Mile 4 — GSAP-animated color shift between palettes
  SectionCity.tsx           # Mile 7 — urban canyon photo grid
  SectionSummit.tsx         # Mile 9 — journey's end with full-bleed hero
  Footer.tsx                # Credits, links, attribution
  Preloader.tsx             # Animated page entrance with loading bar
  ScrollProgress.tsx        # Fixed scroll progress indicator
  CustomCursor.tsx          # Lerp-smoothed cursor with event delegation
  ui/
    TextReveal.tsx          # Scroll-triggered fade/slide entrance
    SplitTextReveal.tsx     # Character or word split with staggered reveal
    ScrollHighlight.tsx     # Word-by-word opacity scrub on scroll
    ImageReveal.tsx         # Directional clip-path image reveal
    ParallaxImage.tsx       # Scroll-driven parallax with speed control
    ScaleImage.tsx          # Scale-on-scroll image with parallax
providers/
  SmoothScrollProvider.tsx  # Lenis + GSAP ticker integration
  PreloaderProvider.tsx     # Font and image readiness context
lib/
  gsap-config.ts            # GSAP + ScrollTrigger plugin registration
  utils.ts                  # Reduced motion and mobile detection helpers
```

## Deployment

Deployed on [Vercel](https://vercel.com) at [chicago-current.ryancalacsan.dev](https://chicago-current.ryancalacsan.dev) (Node.js 24). Every pull request gets a preview deployment; merging to `main` deploys to production. No environment variables required.

## Maintenance

- **Dependabot** opens weekly PRs for npm updates (minor/patch grouped into one PR) and monthly PRs for GitHub Actions. Security fixes are opened immediately.
- Merge once CI passes and the Vercel preview looks right.
- Upgrades that are deliberately held back are tracked in [TODO.md](./TODO.md).
