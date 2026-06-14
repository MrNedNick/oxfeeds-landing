# Architecture

How the app is built: a **Vue 3 + Vite 5 SPA** with **Vue Router 4** (HTML5 history). Multi-page, lazy-loaded legal pages, deployed as a GitHub Pages project site.

## File layout

```
oxfeeds-landing/
├─ index.html              ← Vite entry, mounts #app
├─ vite.config.js          ← base path switch (dev '/' vs build '/oxfeeds-landing/')
├─ package.json            ← Vue 3.5, vue-router 4, vite 5, @vitejs/plugin-vue 5
├─ public/_redirects       ← Netlify SPA fallback
├─ vercel.json             ← Vercel SPA fallback
├─ .github/workflows/deploy.yml  ← build → copy 404.html → deploy to Pages
├─ CLAUDE.md               ← session entry point
├─ docs/                   ← this folder
├─ .claude/skills/         ← reusable playbooks
└─ src/
   ├─ main.js              ← createApp + router + import style.css
   ├─ App.vue              ← ScrollProgress + NavBar + <router-view> (page transition) + FooterSection + GdprBanner
   ├─ style.css            ← global tokens, utilities (.glass-card, .btn-primary, .reveal*), @property --angle, keyframes
   ├─ router/index.js      ← routes + scrollBehavior + document.title
   ├─ views/               ← routed pages
   ├─ components/          ← UI building blocks
   └─ composables/         ← shared reactive behaviours
```

## Routing (`src/router/index.js`)

`createWebHistory(import.meta.env.BASE_URL)` — base comes from Vite so it works under `/oxfeeds-landing/` on Pages.

| Route | Component | Loading |
|-------|-----------|---------|
| `/` | `views/HomeView.vue` | eager |
| `/privacy` | `views/PrivacyPage.vue` | lazy |
| `/terms` | `views/TermsPage.vue` | lazy |
| `/cookies` | `views/CookiePage.vue` | lazy |
| `/gdpr` | `views/GdprPage.vue` | lazy |
| `/:pathMatch(.*)*` | `views/NotFound.vue` | lazy |

`scrollBehavior` restores saved position, smooth-scrolls to `#hash` (offset 80px for the sticky nav), else top. `router.afterEach` sets `document.title` from `meta.title` (`"<title> — OXFeeds"`).

## Home page sections (`views/HomeView.vue`, in order)

`HeroSection` → `MarqueeStrip` → `ServicesSection` → `HowItWorks` → `WhyUs` → `QuizSection` → `AboutUs` → `ContactUs`.
`HomeView` calls `useScrollReveal()` once to wire reveal animations for the whole page.

## Components (`src/components/`)

| Component | Role |
|-----------|------|
| `NavBar.vue` | Sticky glass nav; cross-page anchor nav via `goSection()` (navigates home first if not on `/`, then scrolls) |
| `ScrollProgress.vue` | Fixed top bar, `scaleX(progress)` tied to `window.scrollY` |
| `HeroSection.vue` | Parallax orbs (mousemove + rAF), pre-generated particles, count-up stats, animated gradient-border badge |
| `MarqueeStrip.vue` | Scrolling ticker; pauses on hover; reduced-motion aware |
| `ServicesSection.vue` | The search feeds; 3D tilt cards (`useTilt('.service-card')`) |
| `HowItWorks.vue` | Step-by-step process |
| `WhyUs.vue` | Benefit grid; `useTilt('.why-card')` |
| `QuizSection.vue` | Interactive quiz |
| `AboutUs.vue` | Company section |
| `ContactUs.vue` | Contact form (front-end only) + contact info cards |
| `FooterSection.vue` | Footer + legal links + anchor nav |
| `GdprBanner.vue` | Slide-up cookie consent; 3 categories (Essential/Analytics/Marketing); `localStorage` persistence |
| `LegalLayout.vue` | Shared layout for the 4 legal pages: breadcrumb, hero orbs, sticky sidebar |

## Composables (`src/composables/`) — the reusable engine

These are **portable** (used to seed mobilynx too). Keep them framework-pure and selector-driven.

- **`useScrollReveal.js`** — `IntersectionObserver` adds `.visible` to `.reveal` / `.reveal-*` elements when they enter the viewport.
- **`useCountUp.js`** — animates elements with `[data-count]` from 0 to target (easeOutExpo) when they scroll into view; supports a suffix.
- **`useTilt.js`** — 3D mouse tilt (`perspective` + `rotateX/Y`) on a CSS selector; cleans up listeners on unmount; **skips when `prefers-reduced-motion`**.

## Build & base path (`vite.config.js`)

```js
base: command === 'build' ? '/oxfeeds-landing/' : '/'
```
Dev stays at `/` for a clean local URL; production is served from the project-page subpath.

## SPA deep-link handling (GitHub Pages)

Pages has no server rewrite, so the workflow copies `dist/index.html` → `dist/404.html`. A hard refresh on `/privacy` hits `404.html`, which boots the SPA and the router resolves the path. `public/_redirects` (Netlify) and `vercel.json` cover those hosts too.

## Deploy pipeline (`.github/workflows/deploy.yml`)

On push to `main`: checkout → setup-node 20 (npm cache) → `npm ci` → `npm run build` → `cp dist/index.html dist/404.html` → `configure-pages` → `upload-pages-artifact` → `deploy-pages`.
> Pages was enabled once via API (`gh api repos/.../pages -X POST -f build_type=workflow`). The `enablement: true` flag was removed from the workflow because the workflow token can't create the Pages site itself — see `decisions.md`.

## Verifying with the preview/Chrome tools

- Count-up: a headless screenshot may catch a mid-count frame. Verify **final** values via the DOM, not a screenshot.
- Synthetic `preview_click` may not trigger Vue reactivity for some controls (quiz, hamburger). Use `el.click()` via `preview_eval` to confirm — that's a tooling quirk, not a bug.
