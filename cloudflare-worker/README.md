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

Set this URL once in `script.js`:

```js
const AI_PROXY_URL = "https://fitcalory-food-ai.your-account.workers.dev";
```

End users should not enter any proxy URL. They just take a photo, and the result is added only to their own local FitCalory diary.

The browser sends only the resized food photo and optional total food weight to this Worker. If the user leaves weight empty, the Worker asks AI to read visible package weight such as `220 g` or `1 kg` and return grams. If no weight is visible, the app asks the user to enter it manually.

The photo is not saved in localStorage by the app.
