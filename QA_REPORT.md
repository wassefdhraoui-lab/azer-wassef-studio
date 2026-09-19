# Delivery verification

Verified on 19 September 2026 using Node 24, Next.js 16.3.5 and Playwright Chromium against the production build.

## Checks

- `npm run build`: passed, including TypeScript and prerendered metadata routes.
- `npm run lint`: passed without errors or warnings.
- `npm run test:e2e`: 10 tests passed in the final run.
- Dependency audit: zero reported vulnerabilities.
- Browser console and page errors: none during the five responsive narrative tests.
- Axe WCAG A/AA checks: no violations in the tested intro, interactive customer-experience and contact compositions, and the full reduced-motion document.

## Visual review

Actual screenshots were captured and inspected at 1440×900, 1920×1080, 1366×768, 768×1024 and 390×844. Desktop chapters were captured individually. Mobile/tablet reviews included both full documents and individual viewport captures. Artifacts are in `qa-artifacts/` (intentionally ignored by Git).

The deliberate polish pass corrected line/copy intersections, path-tip alignment at different aspect ratios, the mobile contact heading, short-laptop spacing, and the initial desktop composition before hydration. The reading-mode switch preserves the active chapter on return to the stage.

## Interaction checks

- Native scroll forward, reverse and rapid jumps settle into the correct chapter.
- Chapter shortcuts and direct fragment URLs reach their intended composition.
- Keyboard activation transfers focus to the selected chapter heading.
- Inactive desktop chapters are inert; reading mode, mobile and reduced motion restore all content.
- Live viewport and reduced-motion changes clean up the desktop timeline.
- Customer-experience choices update the explanation, including practical AI and human handover.
- Both founder emails and the joint conversation CTA use real supplied addresses.
- Fine-pointer movement applies a sub-pixel-to-few-pixel line response and returns to the identity transform after inactivity; no pointer-driven React rendering.
- Hover feedback changes link color and arrow position.
- The complete narrative remains available without JavaScript, including static customer-experience explanations.
- `/work/ld-connect` returns an honest 404 because no completed project was supplied.
- Robots, sitemap and generated Open Graph image endpoints respond successfully.

## Local performance observation

One fresh, unthrottled 1440×900 production-browser observation recorded CLS 0, LCP 932ms and zero external resource requests. These are local observations, not deployed performance guarantees. Production performance depends on hosting, network conditions and future project media.

## Remaining inputs and scope

Set `SITE_URL` to the real deployment origin before the public build. Add actual completed projects and media through the documented data contract. No client work or result has been fabricated. The populated project layout and case-study route are implemented; real project content still needs its own editorial and visual review when supplied.

Browser automation was performed in Chromium. Accessibility automation was supplemented by keyboard, motion-preference and visual checks; it is not a substitute for a complete assistive-technology audit.
