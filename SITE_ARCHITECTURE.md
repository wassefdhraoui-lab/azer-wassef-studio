# Site architecture

## Routes

- `/`: eight-chapter studio experience; server-rendered content with a client motion boundary.
- `/work/[slug]`: reusable case study for completed projects only. Unknown and unpublished projects return 404.
- `/sitemap.xml`, `/robots.txt`: metadata routes; public canonical URLs enabled only when SITE_URL is supplied.
- `/opengraph-image`: generated social image using centralized studio identity.

## Organization

- `src/data/site.ts`: identity, founders, emails, services, description and contact settings.
- `src/data/projects.ts`: typed portfolio records, completion/feature filtering and slug lookup.
- `src/components`: shared identity, arrows, contact links and project presentation.
- `src/experience`: stage, chapter compositions, chapter navigation, living-line SVG.
- `src/motion`: responsive controller, timeline tuning and line poses.
- `src/styles`: design tokens and intentional global/component styling.
- `src/lib`: site URL validation and reusable metadata helpers.
- `public/projects/<slug>`: actual project media, with descriptive filenames.
- `src/app`: App Router layouts, pages, metadata and not-found state.
- `tests`: browser QA focused on the narrative, navigation, responsive and accessibility behavior.

## Portfolio contract

Project fields: id, slug, title, client, industry, year, summary, services, coverImage, gallery, challenge, approach, solution, optional results, optional website, status and featured. Image records include src, alt, width, height and optional caption/kind (desktop/mobile/detail). Only completed records produce public case-study routes and only completed + featured records enter the home stage. Results are omitted when unavailable. There are no invented sample client records in production data.

Adding completed featured work automatically inserts additional stage positions, preserving a single-project presentation, chapter navigation and scroll timing. Draft and in-progress records stay unpublished. Case studies are readable server components with optimized media and per-project metadata.

## Motion boundary

The Experience client shell accepts server-rendered chapter children and a small serializable chapter index. GSAP loads as a client-only enhancement. Motion controller owns all scroll, path and pointer effects. It does not own business data. Static CSS is the fallback; enhanced desktop selectors apply only once the controller is ready.

## Contact and deployment

Direct email links work without backend infrastructure. Contact links are a reusable component that can later be replaced by a contact route/form with a server handler. No secrets, tracking, cookies, invented address or domain. Deploy with a Next.js-compatible Node host; set SITE_URL to the real HTTPS origin for canonical metadata and sitemap. Add real legal/business details separately when supplied.

## Dependencies

Next.js + React + TypeScript for routing, server rendering, static project pages and metadata; GSAP/ScrollTrigger for a single reversible timeline; self-hosted Instrument Sans and IBM Plex Mono font packages; ESLint for source checks; Playwright and axe for development-only browser and accessibility verification. No UI framework, icon pack, motion duplication or WebGL.
