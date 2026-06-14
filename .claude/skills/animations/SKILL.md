---
name: animations
description: Work with the OXFeeds animation system (scroll-reveal, count-up, 3D tilt, parallax, particles, marquee, gradient border). Use when adding or changing motion.
---

# Animation system

Motion is driven by three portable composables + CSS keyframes. Full table in `docs/design-system.md`.

## Composables (`src/composables/`)

- **`useScrollReveal()`** — call once per page (HomeView does). Adds `.visible` to `.reveal` / `.reveal-*` elements via `IntersectionObserver`. To animate something on scroll: give it a `reveal` class.
- **`useCountUp(selector?)`** — eases `[data-count]` elements 0→target (easeOutExpo) when in view; supports a suffix. Markup: `<span data-count="500" data-suffix="+">0</span>`.
- **`useTilt(selector)`** — 3D mouse tilt on matching elements. Cleans up on unmount. **Early-returns under `prefers-reduced-motion`.** Used by Services + WhyUs cards.

## CSS (in `src/style.css`)

- Keyframes: `float1`/`float2`, `drift`, `gradient-shift`, `rotate-border`, `marquee`, `scroll-move`.
- Rotating gradient border uses `@property --angle` (CSS Houdini) + `conic-gradient` — see `.gradient-border`.
- Parallax orbs + particles are wired in `HeroSection.vue` (mousemove + `requestAnimationFrame`).
- Marquee pauses on hover and respects reduced-motion.

## Rules

- **Always guard new motion behind `prefers-reduced-motion`** (mirror `useTilt`). Verify suppression after any change.
- Keep it **tasteful/premium**, not noisy — the user wants "designer-built", not gimmicky.
- Reuse the existing composables/classes before writing new motion code; these are the same primitives reused across the user's landing projects.
- Verify count-up **final** values via the DOM, not a screenshot (headless can catch a mid-count frame).
