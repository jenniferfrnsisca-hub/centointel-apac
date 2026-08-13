# CentoIntel APAC v2 — daily-updating architecture

This version is no longer designed around permanently static intelligence.

## How it works

1. `index.html` reads `data/live.json` with a cache-busting request.
2. GitHub Actions runs `scripts/daily_update.py` every day.
3. The updater uses the OpenAI Responses API with web search to research the competitor list.
4. It keeps only new/materially changed signals, deduplicates them by source URL, and writes the result to `data/live.json`.
5. GitHub commits the refreshed JSON.
6. GitHub Pages serves the updated dashboard.

## One-time setup

1. Create a private or public GitHub repository and upload this folder.
2. Enable GitHub Pages using the Actions deployment source.
3. Add a repository secret named `OPENAI_API_KEY`.
4. Run **Daily CentoIntel update** once manually to test it.
5. The scheduled job then runs daily at 06:30 Asia/Taipei (22:30 UTC).
6. Open the GitHub Pages URL.

## Important

- The browser never receives the OpenAI API key.
- The API key is used only inside GitHub Actions.
- The site is not "continuous" minute-by-minute; it is refreshed once per day, plus manual on-demand runs.
- LinkedIn and some sites may block automated access. The updater treats social sources as signals and should prefer primary sources for important product claims.
- Before using intelligence externally, verify high-impact claims against the linked primary source.
- The current `data/live.json` is a seed dataset; the first successful workflow run replaces/extends the update history with fresh research.

## Recommended production upgrades

- Add a database instead of a JSON file once volume grows.
- Add a review/approval status for sales-facing intelligence.
- Add source snapshots/evidence excerpts.
- Add a second weekly deep-dive job for product comparisons.
- Add email/Slack alerts for High-impact Taiwan/APAC signals.
