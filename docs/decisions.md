# Decision log

Why things are the way they are. Newest at top. Keep entries short: **decision → reason**. When you make a non-obvious call in a future session, add it here.

---

### 2026-06-14 · Project docs + skills (modeled on mobilynx/VibeOS)
- **Decision:** Add `CLAUDE.md` + `docs/` + `.claude/skills/` so any future chat can pick up context, roadmap and tasks without re-explaining.
- **Reason:** User wants the iOS-style workflow: a roadmap where they say "do X next", we split it into tasks, implement, commit/push, and keep docs current. Mirrors the mobilynx-landing structure.

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
- **Reason:** GitHub Pages has no server-side rewrite; the 404 fallback boots the SPA so `/privacy` etc. survive a hard refresh.

### (earlier) · Base path switch in vite.config
- **Decision:** `base: command === 'build' ? '/oxfeeds-landing/' : '/'`; router uses `createWebHistory(import.meta.env.BASE_URL)`.
- **Reason:** Project pages are served from a subpath in production, but local dev should stay at `/`.

### (earlier) · Pinned to Vite 5
- **Decision:** `vite@5` + `@vitejs/plugin-vue@5`.
- **Reason:** Node is 20.17; Vite 8/rolldown needs Node ≥20.19 (native binding failed). Stay on 5 until Node is upgraded.

### (earlier) · Vue 3 + Vue Router, purple/pink dark theme
- **Decision:** Vue 3 SPA, multi-page via Vue Router, purple/pink glassmorphism dark theme, full animation set, GDPR banner.
- **Reason:** User brief — modern 2026 "designer-built" feel, fast to build and run locally.
