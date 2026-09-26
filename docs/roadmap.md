# Roadmap

> ⚠️ **Keep this current.** Mark items done the moment they ship (add the commit hash + date). Add new ideas to the Backlog. A roadmap that lags the code is useless.
> Build details: `architecture.md` · why-decisions: `decisions.md` · canonical copy: `content.md`.

**Workflow:** the user tells you what to do next → you break it into tasks here → you implement → commit + push (Pages redeploys) → mark the task done with its commit hash → keep docs current. One task, one (or few) commit(s).

---

## Phase overview

| Phase | Goal | Status |
|-------|------|--------|
| P1 — Redesign | Modern 2026 site, purple/pink theme, all sections | ✅ complete (`a87a997`) |
| P2 — Routing | Vue Router, 404 (legal pages and cookie banner removed in P6) | ✅ complete (`a87a997`) |
| P3 — Animations | Scroll-reveal, tilt, parallax, particles, marquee | ✅ complete (`a87a997`) |
| P4 — Deploy | GitHub repo + Actions → Pages | ✅ complete (`f864476`) |
| P5 — Project docs | Roadmap, architecture, design system, content, decisions | ✅ complete |
| P6 — Content audit vs live site | Make copy/structure match https://oxfeeds.com/ exactly | ✅ complete (2026-09-26) |
| P7 — Contact backend | Make the forms actually send | 🔄 key pending |
| P8 — Polish & launch | Perf, SEO/meta, favicon, OG image, custom domain | 🔄 meta, favicon, OG done |

---

## P6 — Content audit vs live site ✅ (2026-09-26)

- [x] Read https://oxfeeds.com/ top to bottom and record every text, list, form and image in `content.md`.
- [x] Match section order and anchors (`#how`, `#choose`, `#quiz`) and the navigation.
- [x] Replace our copy with the live copy; remove everything invented (see `decisions.md`, 2026-09-26).
- [x] Live forms: `POST` to the site's own WordPress `admin-post.php` with a nonce — not reusable from a static page, so both forms here go through `leadDelivery.js` with the same fields (name, email, traffic source; the quiz adds its two answers).
- [x] Use the site's logo, illustrations, icons, favicons and share image (re-encoded: the icon SVGs carried multi-megabyte embedded PNGs).
- [x] Content guard test: `src/tests/content.test.js`.

## P7 — Contact backend 🔄 (mostly done)

- [x] Wire `handleSubmit` to a real POST via `src/lib/leadDelivery.js` (Web3Forms) with real `idle/sending/success/error` states and a retry button.
- [x] Add spam protection (honeypot field, `botcheck`).
- [x] Integration test for the delivery adapter (`src/lib/leadDelivery.test.js`, Vitest).
- [x] Quiz and contact form both use the adapter, with the live site's fields.
- [ ] Set `VITE_WEB3FORMS_KEY` (get a key at web3forms.com for `office@oxfeeds.com`) — until then the forms honestly run in demo mode and say so in the UI.

## P8 — Polish & launch 🔜

- [x] Title, description, keywords, Open Graph and Twitter tags from the live site.
- [x] Favicon set + OG share image from the live site.
- [ ] Lighthouse pass (perf/a11y).
- [ ] Decide on custom domain vs `mrnednick.github.io/oxfeeds-landing/`.

---

## Backlog (unscheduled ideas)

- More micro-interactions / hover states.
- Blog or case-studies section.

---

## Done log

- (2026-09-26) — P6: content, images and meta moved from oxfeeds.com; invented sections, legal pages and cookie banner removed; mobile menu covers the screen; content guard test in CI.
- `162cbc4` / `fa4c190` (2026-09-12) — Hero stat counters (`.count-up`) could get stuck showing "0" if the `IntersectionObserver` never fired (JS error, crawler, no-JS view). Markup now holds the real final value as a static fallback; the composable resets to "0" only once it actually starts animating, and skips animating entirely under `prefers-reduced-motion`.
- `f864476` (2026-06-14) — Fixed Pages deploy (removed `enablement: true`; enabled Pages via API). Site live.
- `9212061` — GitHub Pages workflow + SPA 404 fallback config.
- `a87a997` — Initial build: redesign, routing, animations, GDPR.
