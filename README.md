# AZER × WASSEF

A creative digital studio portfolio built with Next.js, React, TypeScript and GSAP. The current design uses natural editorial scrolling, a large work showcase, responsive typography, magnetic interactions, an interactive service index and optional monthly support. The original pinned timeline and living-line implementation have been removed. The initial planning documents describe the earlier iteration.

## Run

Node.js 20.9+ is required; development and verification used Node 24.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production:

```sh
npm run build
npm run start
```

## Edit content

- `src/data/site.ts`: studio name, founders, emails, social links and studio metadata. Change `name` once to replace the temporary identity throughout the site and social preview.
- `src/data/services.ts`: all 13 independent services, starting prices, scope and all three optional monthly packages.
- `src/data/projects.ts`: real project records, publication status and homepage selection.
- `src/experience/StudioPage.tsx`: page composition and editorial copy.
- `src/styles/tokens.css`: palette, typography roles and spacing tokens.
- `src/motion/studioMotion.ts`: magnetic strength, pointer settling and the three scroll effects. No wheel interception or whole-page pinning.

Project services are independent. Monthly Care, Grow and Partner are optional. Enquiry buttons open the visitor’s email application; they do not process payments or automatically send messages.

## Add a project and case study

1. Add actual images under `public/projects/<slug>/`. Prefer WebP/AVIF and use descriptive filenames.
2. Add a record to `projects` in `src/data/projects.ts`, following the exported `Project` type.
3. Supply unique `id` and URL-safe `slug`; real `title`, `client`, `industry`, `year`, `summary` and `services`; plus `challenge`, `solution`, `coverImage` and `gallery`.
4. Every image needs `src`, meaningful `alt`, and its actual `width`/`height`. Use local URLs such as `/projects/<slug>/desktop.webp`. Optional gallery `kind: "mobile"` creates a narrower screenshot composition; optional captions explain the image.
5. Add `approach`, `website` and `results` only when available. Results use `{ label, value, context? }` and must be substantiated.
6. Keep `status: "draft"` or `"in-progress"` while preparing. Set `status: "completed"` to publish `/work/<slug>`. Set `featured: true` to add it to the homepage showcase.
7. Rebuild and deploy. Multiple completed projects automatically receive next-project navigation.

Completed featured projects appear one at a time as large editorial media compositions. Non-featured completed projects still have case-study routes and sitemap entries. Unpublished work returns 404. No fabricated client records or results ship with the site.

## Components

`StudioShell` loads motion as a client enhancement around server-rendered content. `StudioPage`, `WorkShowcase` and `MonthlySupport` render the editorial composition. `ServiceCatalogue` uses native expandable details, so prices and service descriptions remain usable with a keyboard, touch, reduced motion or JavaScript disabled. Its desktop preview responds to hover/focus; pointer movement itself never sets React state.

The case-study route supports large introductions and media, project facts, challenge, approach, solution, mobile screenshots, optional results and live-site links, next-project navigation and direct contact. Fonts are self-hosted Instrument Sans, including real italics, and IBM Plex Mono. No external font requests, tracking or UI framework are needed.

## Verification

```sh
npm run lint
npm run typecheck
npx playwright install chromium
npm run build
npm run test:e2e
```

Stop an existing development server first to test the production build. Playwright starts a production server when port 3000 is free. Tests cover five viewport sizes, individual service pricing, keyboard expansion, optional plans, boundaries, pointer settling, native scrolling, reduced motion, no JavaScript, axe accessibility checks, contact links, unpublished routes and SEO endpoints. Screenshots are saved to ignored `qa-artifacts/`.

ESLint 9.39.5 is pinned for compatibility with the React plugin bundled with the installed Next config. Application dependencies are pinned and the included lockfile makes installations reproducible.

## Deployment

Use this directory as the app root on a Next.js-compatible Node host. Install with `npm ci`, build with `npm run build`, and start with `npm run start` (or the host’s Next.js adapter). `PORT` can override port 3000.

Set `SITE_URL` to the real HTTPS origin **before the production build**. It enables canonical URLs, a public sitemap and Organization structured data. Without it, the sitemap intentionally has no invented domain; local social URLs resolve against localhost. See `.env.example`.

No database, secrets or backend service is needed. Remaining owner-supplied content is the real deployment domain, future completed projects/media, and any final studio identity or business details. Supplied skill repositories and `Jari_website` remain reference material, separate from application code.
