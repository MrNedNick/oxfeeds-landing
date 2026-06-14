# Content (canonical copy)

Single source of truth for the site's wording and numbers. If copy changes here, change the Vue components to match (and vice-versa).

## Source

- **Original / live site:** https://oxfeeds.com/ — **this is the user's own site and the canonical content source.**
- ⚠️ **NOT yet verbatim-verified.** The copy currently in the components was derived from an earlier analysis, not a line-by-line scrape. **Roadmap P6** is the task to open https://oxfeeds.com/ via Claude in Chrome, read every line, and reconcile this file + the components so nothing is invented and nothing is missing. Until that's done, treat the live site as authoritative over anything below.

## Identity

- **Company:** OXFeeds
- **Live domain:** oxfeeds.com
- **Contact email:** `office@oxfeeds.com` (nav/contact/footer — see `ContactUs.vue`)
- **What they do:** search-traffic monetization partner.

## Search feeds (the core offering)

- **Google** — RSOC, Type-in
- **Bing** — N2S, Type-in
- **Yahoo** — N2S, Type-in

> Verify exact feed names/labels against the live site during P6.

## Headline stats (Hero count-up)

The Hero shows animated `[data-count]` stats. **Exact numbers are TBD-verified** — confirm them against the live site in P6 and record the final values here so they're never "rounded up" by accident.

| Stat | Value | Status |
|------|-------|--------|
| (stat 1) | TODO confirm | from `HeroSection.vue` / live site |
| (stat 2) | TODO confirm | |
| (stat 3) | TODO confirm | |

## Section copy (current site structure)

Order on `/`: Hero → Marquee → Services (feeds) → How It Works → Why Us → Quiz → About Us → Contact Us. Headings/body to be reconciled with the live site in P6.

## Contact / form

- **Display email:** `office@oxfeeds.com`
- **Contact info cards (in `ContactUs.vue`):** Response Time "Within 24 hours", Support "24/7 Available".
- **Form fields:** `name`, `email`, `trafficType` (select), `message`.
- **Current behaviour:** `handleSubmit` fakes a 1.4s delay, shows success, resets the form — **it sends nothing** (front-end stub). See roadmap P7.

### Live form behaviour (to fill during P6 audit)

> Inspect the `<form>` on https://oxfeeds.com/ via Claude in Chrome and record here so the real backend can be replicated. **Do not submit the live form.**

- `action` URL: _TODO_
- `method`: _TODO_
- Field names: _TODO_
- Submission target (own endpoint / Formspree / other / mailto): _TODO_
- Success/redirect behaviour: _TODO_

## Legal pages

`/privacy`, `/terms`, `/cookies`, `/gdpr` — current copy is a **template placeholder**. Review/replace with real jurisdiction- and company-specific text before launch.
