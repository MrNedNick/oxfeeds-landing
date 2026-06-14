# OXFeeds Landing — Project Instructions for Claude

> ⚠️ **READ THIS FIRST every session.** This file is the entry point. It tells you what the project is, its current state, and where to go next. After any meaningful change, update this file + `docs/roadmap.md` + `docs/decisions.md` **in the same commit**. Stale docs break the next chat's context.

---

## What this is

A modern (2026) marketing site for **OXFeeds** — a **search-traffic monetization** partner.
**Feeds:** Google RSOC / Type-in · Bing N2S / Type-in · Yahoo N2S / Type-in.

- **Stack:** Vue 3 + Vite 5 + Vue Router 4. (Pinned to Vite 5 — Node is 20.17, Vite 8/rolldown needs 20.19+.)
- **Original / source site (content was taken from here):** https://oxfeeds.com/
- **Repo:** https://github.com/MrNedNick/oxfeeds-landing (branch `main`)
- **Live (GitHub Pages):** https://mrnednick.github.io/oxfeeds-landing/
- **Contact email everywhere:** `office@oxfeeds.com`

## Current state

**Status:** ✅ Redesign shipped · multi-page routing · animations · GDPR · deployed to Pages.

Commits on `main`:
- `a87a997` — Build OXFeeds landing: redesign, multi-page routing, animations
- `9212061` — Configure GitHub Pages deployment
- `f864476` — Fix GitHub Pages deployment (remove auto-enablement flag)

What exists today:
- Sticky glassmorphism `NavBar` + `ScrollProgress` bar
- Hero with parallax orbs, particles, count-up stats, animated gradient border
- `MarqueeStrip` ticker
- `ServicesSection` (the search feeds) — 3D tilt cards
- `HowItWorks` · `WhyUs` · interactive `QuizSection`
- `AboutUs` · `ContactUs` (form is **front-end only**, see roadmap P-Backend)
- `FooterSection` + GDPR cookie banner (`GdprBanner`, per-category consent in `localStorage`)
- Legal pages: `/privacy`, `/terms`, `/cookies`, `/gdpr` (shared `LegalLayout`), plus `404`

## How to run it

```bash
cd /Users/test/Documents/Work/AIProjects/oxfeeds-landing
npm install      # first time only
npm run dev -- --port 5175
```
Open http://localhost:5175 . (Also registered as `oxfeeds`, port 5175, in the project-root `.claude/launch.json`.)
See the `dev-server` skill for details.

## How to deploy

`gh` **is authenticated** as `MrNedNick` (SSH) in this environment. Just commit + push to `main` — GitHub Actions builds and deploys to Pages automatically. See the `deploy` skill.

## Where to look

| Need | File |
|------|------|
| What's planned / current sprint tasks | `docs/roadmap.md` |
| How the app is built (routing, composables, build) | `docs/architecture.md` |
| Colors, fonts, spacing, animation rules | `docs/design-system.md` |
| Canonical copy, stats, email, feeds | `docs/content.md` |
| Why we did things the way we did | `docs/decisions.md` |
| Reusable playbooks (run / deploy / edit / animations) | `.claude/skills/` |

## Hard rules (from the user)

1. **This is a separate project from VibeOS.** Never touch VibeOS. VibeOS rules (auto-commit, version-bump) do not transfer here except where stated below.
2. **Commit + push after every completed task** so the Pages site rebuilds and the change is verifiable live. (User's explicit rule for this project.)
3. **Keep docs current in the same commit** — `roadmap.md` (mark task done + commit hash), `CLAUDE.md` (current state), `decisions.md` (any non-obvious call).
4. **Email is `office@oxfeeds.com`** everywhere.
5. **Purple/pink dark theme.** Use the CSS tokens in `src/style.css` / `docs/design-system.md` — don't hardcode new hexes.
6. **Content must match the live site** (https://oxfeeds.com/). Don't invent claims/numbers — see roadmap content-audit task.
7. **Stay on Vite 5** until Node is upgraded to ≥20.19.
