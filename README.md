# OXFeeds — Search Traffic Monetization Landing

Modern, animated marketing site for OXFeeds, a search-traffic monetization partner
(Google RSOC/Type-in, Bing N2S/Type-in, Yahoo N2S/Type-in).

Built with **Vue 3** + **Vite** + **Vue Router**. Purple/pink dark theme, glassmorphism,
scroll-reveal, 3D card tilt, animated gradients, count-up stats, and a marquee strip.

## Pages

| Route | Page |
|-------|------|
| `/` | Landing — hero, services, how it works, why us, interactive quiz, about, contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |
| `/gdpr` | GDPR Compliance |
| `*` | 404 Not Found |

A GDPR cookie-consent banner (with per-category preferences, stored in `localStorage`)
appears on first visit.

## Project structure

```
src/
  components/      Reusable UI (NavBar, HeroSection, GdprBanner, LegalLayout, …)
  views/           Routed pages (HomeView + legal pages + NotFound)
  composables/     useScrollReveal, useCountUp, useTilt
  router/          Vue Router config (lazy-loaded legal pages)
  style.css        Global design tokens, utilities, keyframes
```

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

This is a SPA using HTML5 history routing, so the host must rewrite unknown paths to
`index.html`. Config is included for the two most common hosts:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

For other hosts, add an equivalent catch-all rewrite to `index.html`.

## Notes

- The contact form currently simulates submission on the client. Wire it to a real
  endpoint/service (e.g. Formspree or your own API) before going live.
- Legal page copy is a solid starting template — review with counsel and replace
  jurisdiction/company-specific details.

Contact: office@oxfeeds.com
