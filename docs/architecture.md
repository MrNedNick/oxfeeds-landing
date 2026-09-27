# Architecture

How the app is built: a **Vue 3 + Vite 5 SPA** with **Vue Router 4** (HTML5 history). A single landing page plus a 404, deployed as a GitHub Pages project site.

## File layout

```
oxfeeds-landing/
├─ index.html              ← Vite entry, mounts #app
├─ vite.config.js          ← base path switch (dev '/' vs build '/oxfeeds-landing/')
├─ package.json            ← Vue 3.5, vue-router 4, vite 5, @vitejs/plugin-vue 5
├─ public/_redirects       ← Netlify SPA fallback
├─ public/img/, public/favicon/  ← logo, illustrations, icons and favicons from oxfeeds.com
├─ vercel.json             ← Vercel SPA fallback
├─ .github/workflows/deploy.yml  ← build → copy 404.html → deploy to Pages
├─ docs/                   ← this folder
└─ src/
   ├─ main.js              ← createApp + router + import style.css
   ├─ App.vue              ← ScrollProgress + NavBar + <router-view> (page transition) + FooterSection
   ├─ style.css            ← global tokens, utilities (.glass-card, .btn-primary, .reveal*, .sr-only, .eyebrow), keyframes
   ├─ router/index.js      ← routes + scrollBehavior + document.title
   ├─ views/               ← routed pages
   ├─ components/          ← UI building blocks
   ├─ tests/               ← content guard (the live site's copy must be on the page)
   └─ lib/                 ← lead delivery + form state, asset paths, animation hooks from ui-registry
```

## Routing (`src/router/index.js`)

`createWebHistory(import.meta.env.BASE_URL)` — base comes from Vite so it works under `/oxfeeds-landing/` on Pages.

| Route | Component | Loading |
|-------|-----------|---------|
| `/` | `views/HomeView.vue` | eager |
| `/:pathMatch(.*)*` | `views/NotFound.vue` | lazy |

`scrollBehavior` restores saved position, smooth-scrolls to `#hash` (offset 80px for the sticky nav), else top. `router.afterEach` sets `document.title` from `meta.title` (the home title is the live site's).

## Home page sections (`views/HomeView.vue`, in order)

`HeroSection` → `MarqueeStrip` → `ServicesSection` → `HowItWorks` (`#how`) → `WhyUs` (`#choose`) → `QuizSection` (`#quiz`) → `ContactUs` (`#contact`). Same order and anchors as oxfeeds.com.
`HomeView` calls `useScrollReveal()` once to wire reveal animations for the whole page.

## Components (`src/components/`)

| Component | Role |
|-----------|------|
| `NavBar.vue` | Sticky glass nav: How it Works · Why choose us · Quiz, plus Monetize Now; `goSection()` navigates home first if not on `/` |
| `ScrollProgress.vue` | Fixed top bar, `scaleX(progress)` tied to `window.scrollY` |
| `HeroSection.vue` | Parallax orbs (mousemove + rAF), particles, the site's search-engine and browser chips floating around a search bar |
| `MarqueeStrip.vue` | Scrolling ticker of feed names; pauses on hover; reduced-motion aware |
| `ServicesSection.vue` | "We help to monetize your:" — seven traffic types; 3D tilt cards |
| `HowItWorks.vue` | Three steps with the site's own illustrations |
| `WhyUs.vue` | Four reasons, magnifier illustration, Monetize Now; `useTilt('.why-card')` |
| `QuizSection.vue` | Three-step lead form: search activity → daily volume → contact fields → send |
| `ContactUs.vue` | Contact form (name, email, traffic source) + `office@oxfeeds.com` |
| `LeadFields.vue` | The three contact fields + honeypot, shared by both forms |
| `LeadSuccess.vue` | "Thank you for your request!" — the site's thank-you copy, plus a demo-mode note |
| `FooterSection.vue` | Logo, anchor nav, email |

Form state for both forms lives in `lib/useLeadForm.js`; delivery in `lib/leadDelivery.js`.

## Animation hooks (`src/lib/vue/`) — from ui-registry

These used to be hand-maintained composables under `src/composables/`, duplicated
byte-for-byte in mobilynx-landing. They now live in `ui-registry` (`use-scroll-reveal`,
`use-tilt`) and are copied in via `scripts/add.mjs --framework
vue`; `src/lib/core/*.ts` holds the framework-agnostic logic each one wraps.

- **`use-scroll-reveal.ts`** — `IntersectionObserver` adds `.visible` to `.reveal` / `.reveal-*` elements when they enter the viewport.
- **`use-tilt.ts`** — 3D mouse tilt (`perspective` + `rotateX/Y`) on a CSS selector; cleans up listeners on unmount; **skips when `prefers-reduced-motion`**.

## Build & base path (`vite.config.js`)

```js
base: command === 'build' || isPreview ? '/oxfeeds-landing/' : '/'
```
Dev stays at `/` for a clean local URL; production is served from the project-page subpath.

## SPA deep-link handling (GitHub Pages)

Pages has no server rewrite, so the workflow copies `dist/index.html` → `dist/404.html`. A hard refresh on an unknown path hits `404.html`, which boots the SPA and the router resolves the path. `public/_redirects` (Netlify) and `vercel.json` cover those hosts too.

## Deploy pipeline (`.github/workflows/deploy.yml`)

On push to `main`: checkout → setup-node 22 (npm cache) → `npm ci` → `npm test` → `npm run build` → `cp dist/index.html dist/404.html` → `configure-pages` → `upload-pages-artifact` → `deploy-pages`.
> Pages was enabled once via API (`gh api repos/.../pages -X POST -f build_type=workflow`). The `enablement: true` flag was removed from the workflow because the workflow token can't create the Pages site itself — see `decisions.md`.

## Verifying in a browser

- Scroll-reveal sections fade in as they enter the viewport; a screenshot taken right after a jump can catch them mid-transition.
- In a background tab, CSS transitions are throttled — the mobile menu can look closed for a moment after opening. Check the DOM (`.nav-links.open`) rather than the first frame.
