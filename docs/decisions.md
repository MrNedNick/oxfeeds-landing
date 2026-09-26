# Decision log

Why things are the way they are. Newest at top. Keep entries short: **decision → reason**. When you make a non-obvious call in a future session, add it here.

---

### 2026-09-26 · Content is oxfeeds.com's, word for word
- **Decision:** Every heading, text, list, quiz question and form field now comes from the live site (inventory in `content.md`). Removed what the live site does not have: the About section and its figures (3 / 7+ / 100+), the hero stats and "Official partner" badge, the quiz's feed recommendations, "What to expect" promises, the legal pages and the cookie banner. The quiz became what it is on the live site — a three-step lead form.
- **Reason:** This is the landing of a real service; a figure or promise the company does not make is worse than a plain section. Legal pages were generic templates for a site that has none, and the cookie banner described analytics and marketing cookies this page never sets. The design (animations, glass, tilt) is unchanged — only content moved.
- **Not carried over:** "Made and developed by vau.agency" credits the agency behind the live WordPress theme, which did not build this page.

### 2026-08-29 · Contact form: Web3Forms adapter, honeypot, demo mode
- **Decision:** Replaced the fake `setTimeout` success in `ContactUs.vue` with a real adapter (`src/lib/leadDelivery.js`) that POSTs to Web3Forms when `VITE_WEB3FORMS_KEY` is set, and honestly runs in demo mode (no delivery, says so in the UI) when it isn't. Added a honeypot field (`botcheck`) and a proper `idle/sending/success/error` state machine with a retry button on error.
- **Reason:** The site is static (GitHub Pages) — no `api/` routes are ever invoked despite `vercel.json` existing, so a client-callable third-party endpoint was the only real option without adding a separate deploy target. No access key is configured yet, so it stays honest about demo mode rather than claiming to send mail it can't.

### 2026-06-14 · Project docs (modeled on mobilynx-landing)
- **Decision:** Keep `docs/` (roadmap, architecture, design system, content, decisions) current alongside the code.
- **Reason:** Anyone picking the project up can see what exists, what is next and why, without re-deriving it. Mirrors the mobilynx-landing structure.

### 2026-06-14 · Commit + push after every completed task
- **Decision:** For this project, auto-commit and push to `main` once a task is done and verified.
- **Reason:** User's explicit rule — pushing redeploys GitHub Pages so each change is verifiable live. (This is project-specific; it does not change the VibeOS-only auto-commit rule.)

### 2026-06-14 · `gh` authenticated as MrNedNick via SSH
- **Decision:** User ran `gh auth login --git-protocol ssh --web` themselves; `gh` is now logged in as `MrNedNick`. Deploy = plain `git push`.
- **Reason:** Repo creation needs `gh`/account access. The assistant must **never** enter the user's tokens into commands — that's prohibited. The user did the credential step; the SSH key was already on the account, so no token is needed going forward.

### 2026-06-14 · GitHub Pages enabled via API, `enablement: true` removed
- **Decision:** First deploy failed at `actions/configure-pages@v5` ("Resource not accessible by integration"). Enabled Pages once with `gh api repos/MrNedNick/oxfeeds-landing/pages -X POST -f build_type=workflow`, then removed `with: enablement: true` from the workflow.
- **Reason:** The default workflow `GITHUB_TOKEN` lacks permission to create the Pages site; once Pages exists, `configure-pages` works without the flag.

### 2026-06-14 · Repo: public, `oxfeeds-landing`, account MrNedNick
- **Decision:** `https://github.com/MrNedNick/oxfeeds-landing`, branch `main`; live at `https://mrnednick.github.io/oxfeeds-landing/`.

### (earlier) · SPA deep links on Pages via 404.html copy
- **Decision:** Workflow copies `dist/index.html` → `dist/404.html`; also `public/_redirects` + `vercel.json` for those hosts.
- **Reason:** GitHub Pages has no server-side rewrite; the 404 fallback boots the SPA so a deep link survives a hard refresh.

### (earlier) · Base path switch in vite.config
- **Decision:** `base: command === 'build' ? '/oxfeeds-landing/' : '/'`; router uses `createWebHistory(import.meta.env.BASE_URL)`.
- **Reason:** Project pages are served from a subpath in production, but local dev should stay at `/`.

### (earlier) · Pinned to Vite 5
- **Decision:** `vite@5` + `@vitejs/plugin-vue@5`.
- **Reason:** Node is 20.17; Vite 8/rolldown needs Node ≥20.19 (native binding failed). Stay on 5 until Node is upgraded.

### (earlier) · Vue 3 + Vue Router, purple/pink dark theme
- **Decision:** Vue 3 SPA with Vue Router, purple/pink glassmorphism dark theme, full animation set.
- **Reason:** User brief — modern 2026 "designer-built" feel, fast to build and run locally.
