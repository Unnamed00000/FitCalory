# FitCalory Food Vision Worker

This Cloudflare Worker keeps the AI API key out of the GitHub Pages app.

## Required secrets and variables

Set these in Cloudflare Worker settings:

- `OPENAI_API_KEY` as a secret.
- `ALLOWED_ORIGINS` as a variable, for example `https://unnamed00000.github.io`.
- `OPENAI_MODEL` as an optional variable. Default: `gpt-5.5`.

Recommended Cloudflare protection:

- enable rate limiting for this Worker route;
- keep `ALLOWED_ORIGINS` limited to your GitHub Pages domain;
- never commit `OPENAI_API_KEY` to GitHub.

## App setup

Deploy the Worker, then copy its endpoint URL, for example:

```text
https://fitcalory-food-ai.your-account.workers.dev
```

Open FitCalory, go to Profile, paste the URL into `AI proxy URL`, and save.

The browser sends only the resized food photo and total food weight to this Worker. The photo is not saved in localStorage by the app.
