---
name: deploy
description: Commit and push the OXFeeds landing page to GitHub, which auto-deploys to GitHub Pages. Use when a task is done or the user asks to save/upload/deploy/push.
---

# Deploy (commit + push → GitHub Pages)

Repo: https://github.com/MrNedNick/oxfeeds-landing · branch `main`.
Live: https://mrnednick.github.io/oxfeeds-landing/

`gh` **is authenticated** as `MrNedNick` (SSH) in this environment. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to Pages. **No token needed.**

## Standard flow

```bash
cd /Users/test/Documents/Work/AIProjects/oxfeeds-landing
git add -A
git commit -m "<message>

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push
```

Then confirm the deploy succeeded:

```bash
gh run list --repo MrNedNick/oxfeeds-landing --limit 1
# wait for "completed success", then the change is live on Pages
```

## When to deploy

- ✅ After every **completed, verified** task (user's rule — keeps Pages current and verifiable).
- In the **same commit**, update docs if the change is meaningful: `docs/roadmap.md` (mark task done + this commit hash), `CLAUDE.md` (current state), `docs/decisions.md` (any non-obvious call).

## Rules

- ❗ **Never** enter the user's PAT/tokens into any command or file — that's prohibited. Auth is already done via SSH; if it ever breaks, ask the user to re-run `gh auth login --git-protocol ssh --web` themselves.
- If a Pages run fails at `configure-pages` with "Resource not accessible", Pages may need re-enabling once: `gh api repos/MrNedNick/oxfeeds-landing/pages -X POST -f build_type=workflow`.
- Only commit/push when a task is genuinely done (or the user asks).
