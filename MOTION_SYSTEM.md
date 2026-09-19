# Motion system

## Scroll model

Native document scrolling drives one GSAP ScrollTrigger timeline. An enhanced desktop stage sticks at the top; its enclosing document space maps normal scroll position to chapter progress. No wheel interception, scroll smoothing library, snapping, or scroll lock. Scrolling back reverses the exact same timeline. Direct chapter links use the same progress mapping.

Progressive enhancement: semantic content is server rendered in normal flow. Only after the desktop motion controller is ready does the stage become sticky and the chapters overlap. A visible reading-mode control returns to normal flow. Mobile, coarse pointers, short viewports, and reduced-motion preference use natural flow. All content remains available without JavaScript.

## Chapters

01 Introduction → 02 Belief → 03 Web → 04 Automation → 05 Customer experience → 06 Work (one chapter position per completed featured project, or an honest empty state) → 07 Founders → 08 Contact.

Each interval holds a composition for most of its length, then moves the outgoing type upward about 32px while the incoming composition enters from below. Modest stagger only within the opening display. The final contact composition remains readable at the end of document scrolling. An active chapter label and progress rule keep visitors oriented.

## Living line

One persistent SVG path uses matching cubic command structures so its control points can interpolate between meaningful poses. It loops around the opening statement, becomes a link for belief, outlines the web concept, connects labelled automation nodes, encircles customer touchpoints, frames work and pairs the founders before ending at contact. SVG dash length progressively reveals the line; a terminal dot tracks its tip. SVG is decorative/aria-hidden; corresponding information exists in semantic text.

## Pointer

Fine pointers only. Small, proximity-weighted translation on the line (maximum 5px). GSAP quickTo handles inertia and returns to rest after inactivity/leave. No React state updates per pointer event, no new cursor, no moving controls. Disable in reading mode and reduced motion.

## Timing

Scroll timeline uses scrub ~0.35 seconds, linear progress, and power2.inOut for chapter transitions. Chapters hold ~65% and transition ~35% of an interval. Hover/focus feedback ~180ms. Navigation scroll is immediate so links are predictable and never force a long animated journey.

## Accessibility and lifecycle

Inactive desktop chapters are inert and aria-hidden, with attributes updated only at chapter boundaries. Chapter navigation remains keyboard accessible; deliberate navigation transfers focus to the chapter heading. Reading mode exposes all chapters. GSAP matchMedia handles breakpoint and live motion-preference changes; context cleanup removes triggers and inline styles. Native anchors work in reading mode and without JavaScript.

## Performance

One timeline, one SVG path, transform/opacity for text. Path morphing is the deliberate exception to transform-only animation. No frame-rate React updates, no perpetual particle/canvas loops, no WebGL. Layout measurements occur at setup/refresh, not every pointer frame. Local fonts eliminate runtime font-provider requests. Project images use next/image with explicit dimensions and lazy loading after the first visual.

## Reference

Official GSAP ScrollTrigger and gsap.matchMedia documentation checked during implementation: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ and https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/.
