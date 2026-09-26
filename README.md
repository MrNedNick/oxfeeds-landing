# OXFeeds — landing

**[Live demo](https://mrnednick.github.io/oxfeeds-landing/)** · original site: [oxfeeds.com](https://oxfeeds.com/)

A redesign of the landing page for OXFeeds, a search-traffic monetization partner (Google RSOC/Type-in,
Bing N2S/Type-in, Yahoo N2S/Type-in). The content is the real site's, word for word — every heading,
list, quiz step and form field — with a new design: dark glass, scroll reveals, 3D tilt, parallax.

**Vue 3 · Vite 5 · Vue Router · Vitest**

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # delivery adapter + a content guard against the live site's copy
npm run build    # static build in dist/
```

The quiz and the contact form send through [Web3Forms](https://web3forms.com). Set
`VITE_WEB3FORMS_KEY` to deliver for real; without it they run in a clearly labelled demo mode.

Pushes to `main` are tested, built and deployed to GitHub Pages. Canonical copy lives in
[`docs/content.md`](docs/content.md).
