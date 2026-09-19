# A line of thought

## Intent

An independent studio for real businesses, presented as a living working drawing. The audience is a business owner who needs a useful digital presence and fewer repetitive tasks. The single conversion is an email conversation with Azer or Wassef.

## Visual concept

Oversized, tightly set grotesk typography occupies an open paper-like stage. A precise vermilion line begins at an idea, curves around the opening statement, straightens into a business workflow, frames future work, and arrives at contact. Its path has a job in every chapter. Technical annotations and chapter markers provide orientation, not decoration.

The abstract references are a typographic exhibition poster, a designer's tracing paper, and a process drawing. No stock photography, fictional interfaces, ornamental 3D, card grids, fabricated proof, or SaaS vocabulary. The pale surface and red drafting line specifically express the working-drawing concept; this is not a cream-and-serif lifestyle theme.

## Typography

Instrument Sans variable: display and body, 400–650, self-hosted Latin WOFF2. Large lowercase/sentence-case statements feel human; tightly tracked uppercase identity gives the studio a compact signature. IBM Plex Mono regular: small chapter labels and annotations, self-hosted Latin WOFF2. No more than two families. Fluid headings, 16px minimum mobile prose, 12px minimum annotations. Font display swap.

## Tokens

- Paper: #F2F1EB — main surface.
- Ink: #252722 — primary copy.
- Vermilion: #C53D25 — living line, key emphasis and focus.
- Muted ink: #62645B — supporting copy, accessible on paper.
- Rule: #D4D5CC — nonessential separators.
- White paper: #FAF9F5 — selected small surfaces.

Tokens live in src/styles/tokens.css. Primary content always uses accessible ink/paper pairs. Accent text and controls must retain contrast. The artwork's color scheme is deliberate and stable across OS themes.

## Composition

Desktop: a full viewport, open margins, persistent identity and contact, one statement at a time. Text is the image. The intro uses three dominant lines, an offset last line, and a looping line in the negative space at right. A compact chapter rail anchors the bottom and a labeled starting node grounds the line. Later chapters vary between left/right editorial splits, diagrams, an open portfolio frame, and paired founder names. No repeated section template.

Mobile/tablet: an unpinned narrative with generous margins, fluid type, a continuous red guide along the left edge and locally simplified drawings. No hover dependence or compressed desktop stage. Short landscape viewports also use this reading layout.

## Guidance inspected

Local codex-skills-temp frontend-design and ui-ux-pro-max skills and AGENTS.md; ui-ux-pro-max-skill README, main skill and motion data; Claude-Code-Frontend-Design-Toolkit README motion/GSAP and visual-testing guidance. Brief takes precedence over generic layout recommendations.

## QA targets

1440×900, 1920×1080, 1366×768, 768px tablet, 390×844 mobile. Also keyboard traversal, rapid forward/reverse scrolling, resize, reduced motion, no JavaScript, deep links, empty work state, contact destinations, and case-study not-found behavior.
