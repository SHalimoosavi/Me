# Syed Ali Hasan Moosavi — Portfolio

Award-tier interactive portfolio for **Syed Ali Hasan Moosavi** — AI Engineer, Full-Stack Developer,
Blockchain Developer, and Founder of **SAYANJALI NEXUS PRIVATE LIMITED**.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP + ScrollTrigger, React Three Fiber, and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build        # production build
```

## What's implemented

- Full design-token system (dark "ledger" luxury theme — obsidian/brass/violet) in `tailwind.config.ts` + `app/globals.css`
- Root layout with complete metadata API: Open Graph, Twitter Cards, canonical URL, keywords, `robots.txt`
  (`app/robots.ts`), `sitemap.xml` (`app/sitemap.ts`), `manifest.json` (`app/manifest.ts`), and JSON-LD
  (`Person`, `Organization`, `WebSite`, `ProfilePage`) in `app/layout.tsx`
- Loading screen, magnetic custom cursor, Lenis smooth scroll — all reduced-motion aware
- Hero with animated name reveal, 3D floating "ledger network" scene (React Three Fiber), mouse-reactive glow
- About, Experience/roadmap timeline, Projects (filterable/searchable grid + tilt cards + modal), Skills,
  Ecosystem, and Contact sections
- All copy and project data in `lib/data/*.ts` is sourced from the real, live SYJ product sites and repos —
  no lorem ipsum, no placeholder projects

Every `.ts`/`.tsx` file has been passed through the TypeScript compiler in isolation (syntax + JSX structure)
to catch structural errors before you ever run `npm install`. The only errors that surfaced were expected
"cannot find module" / "cannot find namespace React" notices caused by dependencies not being installed yet
in this sandbox — those resolve as soon as you run `npm install` locally, since `next`, `@types/react`, etc.
provide the missing types and the global JSX/CSS-module ambient declarations.

## Fixed since last pass

- **React 19 crash in the Hero 3D scene** (`Cannot read properties of undefined (reading 'ReactCurrentOwner')`):
  `@react-three/fiber` v8 reaches into React internals that were restructured in React 19. Bumped to
  `@react-three/fiber@^9`, `@react-three/drei@^10`, and `three@^0.171` — all React-19-compatible majors.
  **If you already ran `npm install` once, delete `node_modules` and `package-lock.json` and reinstall**
  so the new majors actually get pulled in.
- Added real icon/OG assets (`/public/favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`,
  `og-image.png`) — no more 404s for those.
- Resume buttons now point at the LinkedIn profile (`SITE.resumeUrl` in `lib/data/site.ts`) instead of a
  PDF path that didn't exist. Drop a real PDF at `/public/resume.pdf` and change that one constant once
  you have one — every "Resume" button reads from it.

## Still to build (next pass)

- Update `SITE.url` in `lib/data/site.ts` to your final deployment domain before shipping
- A real resume PDF at `/public/resume.pdf` (see the note in `lib/data/site.ts`)
- Loading/hover states for the About and Ecosystem sections could use the same GSAP scroll-reveal treatment
  as Experience/Skills if you want full consistency

## This batch added

- **Certificates & Recognition** — 7 real certificates/awards, built directly from the images you uploaded:
  AI for Data Analysis (Google/Coursera), Prompt Engineering for ChatGPT (Vanderbilt/Coursera), Artificial
  Intelligence Fundamentals (IBM SkillsBuild), AI Fluency: Framework & Foundations (Anthropic), Claude 101
  (Anthropic), plus two recognition awards (Saudi Aramco, Mowasalat/FIFA World Cup Qatar 2022). Dates and
  verify links are included **only** where they were actually printed on the certificate — nothing invented.
  The certificate images themselves live in `/public/certificates/` (auto-cropped from your uploads to drop
  the surrounding app UI).
- The Person JSON-LD schema in `app/layout.tsx` now includes real `hasCredential` entries for the
  Coursera/IBM certifications, with their actual verify URLs — this is what search engines and AI answer
  engines (Google AI Overview, Perplexity, etc.) will read.
- Milestones section unchanged (still real shipped-code metrics) — Certificates is now a separate, dedicated
  section since you supplied real credentials.

- **Tech Stack** — infinite marquee, grouped by role, pauses on hover, respects `prefers-reduced-motion`
- **GitHub Activity** — client-fetched live from the public GitHub REST API (repo count, followers, top
  repos by stars) with real loading and error states — no fabricated numbers
- **Milestones** — real, checkable metrics (test counts, repo counts) instead of fabricated third-party
  certifications, since none were supplied
- **Testimonials** — real quotes already published on the SYJ Educate site
- **Updates** (stands in for "Blog") — a real release/build-log feed drawn from actual shipped versions
  across the ecosystem, deliberately without fabricated dates (see the note in `lib/data/updates.ts`)
- **FAQ** — real Q&A content from the existing site, plus `FAQPage` JSON-LD for AEO
- **RSS feed** at `/rss.xml`, generated from the same Updates data
- Nav now includes Updates and FAQ; the nav pill switches to a hamburger below `lg` instead of `md` so
  there's no dead zone at tablet widths

## Deploying

Push to GitHub, then import the repo in Vercel — zero extra configuration needed. Update `SITE.url` first
so canonical URLs, sitemap, and Open Graph tags point at the live domain.
