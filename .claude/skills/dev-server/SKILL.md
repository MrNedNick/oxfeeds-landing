---
name: dev-server
description: Run the OXFeeds landing page locally for preview. Use when you need to view or verify the site in a browser.
---

# Run the dev server

Vue 3 + Vite project. Install once, then run on port 5175:

```bash
cd /Users/test/Documents/Work/AIProjects/oxfeeds-landing
npm install            # first time only
npm run dev -- --port 5175
```

Open http://localhost:5175 . Also registered as the `oxfeeds` entry (port 5175) in the **project-root** `.claude/launch.json`.

## Production build / preview

```bash
npm run build          # → dist/  (base path /oxfeeds-landing/)
npm run preview        # serve the built dist/
```

## Rules

- ❌ Do **not** touch the `vibeos` entry (port 5174) in the shared launch.json — different project.
- Stay on **Vite 5** (Node is 20.17; Vite 8 needs ≥20.19). Don't upgrade Vite without upgrading Node first.
- Count-up stats: verify **final** values in the DOM, not a screenshot (headless can catch a mid-count frame):
  ```js
  [...document.querySelectorAll('[data-count]')].map(n => n.textContent)
  ```
- Some controls (quiz, hamburger) may not react to synthetic `preview_click`; confirm via `el.click()` in `preview_eval`. Tooling quirk, not a bug.
- After motion changes, confirm `prefers-reduced-motion` still suppresses tilt/parallax/marquee.
