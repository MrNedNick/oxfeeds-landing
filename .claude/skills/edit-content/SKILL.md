---
name: edit-content
description: Edit copy, sections, or pages on the OXFeeds landing site. Use when changing text, adding/removing sections, or touching legal pages.
---

# Edit content & structure

Vue 3 SPA. Map of where things live (full detail in `docs/architecture.md`).

## Where to edit what

| Want to change | File |
|----------------|------|
| Home section order | `src/views/HomeView.vue` |
| Hero copy / stats | `src/components/HeroSection.vue` |
| Search feeds (Google/Bing/Yahoo) | `src/components/ServicesSection.vue` |
| Process steps | `src/components/HowItWorks.vue` |
| Benefits | `src/components/WhyUs.vue` |
| Quiz | `src/components/QuizSection.vue` |
| About copy | `src/components/AboutUs.vue` |
| Contact form / email / info cards | `src/components/ContactUs.vue` |
| Nav links / anchors | `src/components/NavBar.vue` |
| Footer + legal links | `src/components/FooterSection.vue` |
| Cookie banner | `src/components/GdprBanner.vue` |
| Legal page text | `src/views/{Privacy,Terms,Cookie,Gdpr}Page.vue` (shared `LegalLayout.vue`) |
| Add a route | `src/router/index.js` |
| Colors / tokens / utilities | `src/style.css` |

## Rules

- **Copy must match the live site** (https://oxfeeds.com/). It's the user's canonical source — don't invent claims or numbers. Keep `docs/content.md` in sync with any copy change.
- **Email is `office@oxfeeds.com`** everywhere.
- **Use design tokens** (`var(--purple)`, `var(--gradient)`, `.glass-card`, `.section-tag`, `.btn-primary`) — no raw hexes. See `docs/design-system.md`.
- New routes: add to the router **and** ensure the SPA 404 fallback still covers deep links (workflow copies `index.html`→`404.html`).
- After editing, run the dev server (see `dev-server` skill), verify, then commit + push (see `deploy` skill) and update docs.
