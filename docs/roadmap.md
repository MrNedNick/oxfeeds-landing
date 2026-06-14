# Roadmap

> ⚠️ **Keep this current.** Mark items done the moment they ship (add the commit hash + date). Add new ideas to the Backlog. A roadmap that lags the code is useless.
> Product context: `../CLAUDE.md` · build details: `architecture.md` · why-decisions: `decisions.md`.

**Workflow:** the user tells you what to do next → you break it into tasks here → you implement → commit + push (Pages redeploys) → mark the task done with its commit hash → keep docs current. One task, one (or few) commit(s).

---

## Phase overview

| Phase | Goal | Status |
|-------|------|--------|
| P1 — Redesign | Modern 2026 site, purple/pink theme, all sections | ✅ complete (`a87a997`) |
| P2 — Multi-page + GDPR | Vue Router, legal pages, 404, cookie banner | ✅ complete (`a87a997`) |
| P3 — Animations | Scroll-reveal, count-up, tilt, parallax, particles, marquee, gradient border | ✅ complete (`a87a997`) |
| P4 — Deploy | GitHub repo + Actions → Pages | ✅ complete (`f864476`) |
| P5 — Project docs & skills | Internal docs + reusable skills so any chat can continue | 🔄 active (this commit) |
| P6 — Content audit vs live site | Make copy/structure match https://oxfeeds.com/ exactly | 🔜 planned |
| P7 — Contact backend | Make the contact form actually send | 🔜 planned |
| P8 — Polish & launch | Perf, SEO/meta, favicon, OG image, custom domain | 🔜 planned |

---

## P5 — Project docs & skills 🔄 (current)

- [x] `CLAUDE.md` context starter
- [x] `docs/roadmap.md` (this file)
- [x] `docs/architecture.md`
- [x] `docs/design-system.md`
- [x] `docs/content.md`
- [x] `docs/decisions.md`
- [x] Core skills in `.claude/skills/` (dev-server, deploy, edit-content, animations)
- [ ] User review of structure — adjust depth if needed

## P6 — Content audit vs live site 🔜 (next, per user)

> Goal: our copy and structure should mirror the real site — nothing invented, nothing extra. The user owns https://oxfeeds.com/.

- [ ] **Scrape the live site via Claude in Chrome** — open https://oxfeeds.com/, read **all** text top to bottom (hero, sections, services/feeds, footer, any legal text) and copy it verbatim into `docs/content.md`.
- [ ] **Compare structure** — note the section order, navigation, and overall layout of the live site; flag where our Vue version differs so we can align.
- [ ] **Reconcile copy** — update our components to match the canonical copy where it diverges; remove anything we invented that isn't on the real site.
- [ ] **Audit the contact form on the live site** — via Claude in Chrome inspect the `<form>`: its `action` URL, `method`, field names, and where the submission goes (own endpoint? Formspree/third-party? mailto?). Record findings in `docs/content.md` → "Live form behaviour" so the user can replicate the same backend. **Do not submit** the real form during the audit.
- [ ] **Full functional test via Claude in Chrome** — walk our deployed site (https://mrnednick.github.io/oxfeeds-landing/): nav links, anchors, quiz, GDPR banner, legal pages, 404, responsive/mobile. Log any issues here.

## P7 — Contact backend 🔜

The form (`ContactUs.vue` → `handleSubmit`) is front-end only — it fakes a 1.4s delay then shows success; **sends nothing**.
- [ ] Decide backend based on P6 form audit (match what the live site uses, or Formspree/Web3Forms → `office@oxfeeds.com`).
- [ ] Wire `handleSubmit` to a real POST; show real error states.
- [ ] Add spam protection (honeypot field).

## P8 — Polish & launch 🔜

- [ ] SEO meta per route (title is wired; add description/OG tags).
- [ ] Favicon + OG share image.
- [ ] Lighthouse pass (perf/a11y).
- [ ] Decide on custom domain vs `mrnednick.github.io/oxfeeds-landing/`.

---

## Backlog (unscheduled ideas)

- More micro-interactions / hover states.
- Dark/light toggle (currently dark-only).
- Blog or case-studies section.

---

## Done log

- `f864476` (2026-06-14) — Fixed Pages deploy (removed `enablement: true`; enabled Pages via API). Site live.
- `9212061` — GitHub Pages workflow + SPA 404 fallback config.
- `a87a997` — Initial build: redesign, routing, animations, GDPR.
