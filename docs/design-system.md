# Design System

Modern 2026, **purple/pink on a deep near-black** dark theme: glassmorphism, gradient text, soft glows, generous spacing. Use the tokens below — **do not invent new hexes inline.** All tokens live in `src/style.css` `:root`.

## Color tokens (CSS custom properties)

| Token | Hex / value | Role |
|-------|-------------|------|
| `--purple` | `#7C3AED` | Core brand purple (primary actions) |
| `--purple-light` | `#A78BFA` | Light purple (tags, accents) |
| `--purple-dark` | `#5B21B6` | Deep purple (gradients, depth) |
| `--pink` | `#EC4899` | Brand pink (gradient end, accents) |
| `--pink-light` | `#F9A8D4` | Light pink (soft accents) |
| `--gradient` | `linear-gradient(135deg,#7C3AED,#EC4899)` | The signature purple→pink gradient |
| `--gradient-subtle` | same at 12% alpha | Tag/section-tag backgrounds |
| `--bg` | `#080B16` | Page background (near-black) |
| `--bg-secondary` | `#0D1022` | Alternate section background |
| `--card-bg` | `rgba(255,255,255,.04)` | Glass card fill |
| `--card-border` | `rgba(255,255,255,.08)` | Glass card border |
| `--text` | `#F1EFFF` | Primary text |
| `--text-muted` | `rgba(241,239,255,.55)` | Secondary text |
| `--text-faint` | `rgba(241,239,255,.3)` | Placeholders, faint labels |

## Typography

- **Body:** `Inter` (system fallback stack), `line-height: 1.6`, antialiased.
- **Headings / display:** also Inter, heavier weights; `.section-title` uses `clamp(1.9rem, 4vw, 3rem)` for fluid scaling.
- `.gradient-text` clips `--gradient` to text for accent words.

## Layout primitives (utilities in `style.css`)

- `.container` — `max-width: 1200px`, centered, 24px gutters.
- `section` — `110px 0` vertical rhythm.
- `.section-header` — centered, 64px bottom margin.
- `.section-tag` — pill: subtle gradient bg + purple border + uppercase label.
- `.glass-card` — translucent fill + border + `backdrop-filter: blur()`.
- `.btn-primary` — gradient button.

## Animations (all opt-out under `prefers-reduced-motion`)

Driven by the three composables + CSS keyframes in `style.css`.

| Effect | Where | How |
|--------|-------|-----|
| Scroll reveal | whole page | `useScrollReveal` toggles `.visible` on `.reveal*` |
| Count-up stats | Hero | `useCountUp` eases `[data-count]` 0→target |
| 3D card tilt | Services, WhyUs | `useTilt` perspective + rotateX/Y on mousemove |
| Parallax orbs | Hero | mousemove offsets blurred orbs via rAF |
| Particles | Hero | pre-generated absolutely-positioned dots, floating |
| Marquee | MarqueeStrip | CSS `marquee` keyframe; pause on hover |
| Gradient border | Hero badge | `@property --angle` + `conic-gradient` rotation (`rotate-border` keyframe) |
| Scroll progress | top of page | `scaleX` tied to scroll position |
| Page transition | route change | fade + translateY in `App.vue` |

Keyframes defined: `float1` / `float2`, `drift`, `gradient-shift`, `rotate-border`, `marquee`, `scroll-move`.

## Animation principles

- **Tasteful, premium, not noisy.** Motion should feel designed, not gimmicky.
- **Always honor `prefers-reduced-motion`** — `useTilt` already early-returns; keep new motion behind the same guard.
- Easing: smooth `cubic-bezier` / `ease-in-out` for loops; `easeOutExpo` for count-up.

## Do / don't

- ✅ Use tokens (`var(--purple)`, `var(--gradient)`) — never raw hexes in components.
- ✅ Reuse `.glass-card`, `.section-tag`, `.btn-primary`, `.reveal*`.
- ❌ Don't introduce a second accent palette — purple/pink only.
- ❌ Don't ship motion that ignores reduced-motion.
