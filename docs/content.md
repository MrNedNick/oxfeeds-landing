# Content (canonical copy)

Every word on the page comes from the live site, https://oxfeeds.com/ (read in full on 2026-09-26).
Change copy there first, then here, then in the components. `src/tests/content.test.js` fails if a
line below disappears from the page.

## Meta

- **Title:** Search Traffic Monetization | Google, Bing & Yahoo Partners
- **Description:** Monetize your search traffic with our exclusive partnerships. We help you grow revenue through Google, Bing & Yahoo search feeds. Easy integration, high RPM, and 24/7 support.
- **Share (OG / Twitter):** same title; "Monetize your search traffic with our exclusive partnerships. We help you grow revenue through Google, Bing & Yahoo search feeds."; `public/img/og-image.jpg` (1200×630)
- **Favicons:** `public/favicon/` — svg, 96px png, ico, apple-touch-icon

## Navigation

How it Works (`#how`) · Why choose us (`#choose`) · Quiz (`#quiz`) · Monetize Now (`#contact`)

## Hero

- Monetize Your Search Traffic / **Like Never Before**
- Grow your revenue with our exclusive partnerships and advanced search monetization strategies.
- CTA: **Monetize Now** → contact form

## We help to monetize your:

Native to search · Browsers and Extensions · Add-ons · Start pages and Websites · Apps and Launchers · Social to search · Search to search

## How It Works

1. **Choose Your Feed** — Yahoo N2S/Type-in; Google RSOC/Type-in; Bing N2S/Type-in.
2. **Integrate Seamlessly** — Our API and search feed solutions make it easy to monetize your traffic.
3. **Earn More** — Get access to high-RPM feeds and large traffic caps.

## Why Choose Us?

- **Exclusive Partnerships** — We collaborate with top search providers like Bing, Google and Yahoo.
- **High Revenue Potential** — Maximize earnings with our premium search feed solutions.
- **Seamless Integration** — Quick and easy implementation for all digital platforms.
- **24/7 Support** — Our dedicated team ensures your success at every step.
- CTA: **Monetize Now**

## Quiz — "Don't know what to deal with? Take a quick quiz"

1. What search activity are you interested in? — Extensions and Add-ons · Website Search · Apps and Launchers · Native to Search · Display to Search · Search to Search
2. Your daily traffic volume — Under 10 000 searches · 10 000 searches - 100 000 searches · More than 100 000 searches
3. How can we reach you? — Your Name · Your Email · Provide your traffic source (https://www...)

Buttons: Return · Next · Send.

## Contact

- Interested in growing your revenue with search monetization?
- Reach out to our team **today.**
- Fields: Your Name · Your Email · Provide your traffic source (https://www...) → **Send**
- **office@oxfeeds.com**

After sending (the live site's `/thank-you/` page): **Thank you for your request!** We have received your submission and will contact you shortly.

## Figures

The live site publishes no figures, so the page shows none. The only numbers are the quiz's traffic
thresholds.

## Forms

The live forms `POST` to the site's own WordPress endpoint (`admin-post.php`, with a nonce), which a
static page cannot reuse. Here both forms go through `src/lib/leadDelivery.js` (Web3Forms) with the
same fields; without `VITE_WEB3FORMS_KEY` they run in demo mode and say so.

## Not on this page, on purpose

- Legal pages and a cookie banner — the live site has neither, and this page sets no cookies.
- "Made and developed by vau.agency" — credits the agency behind the live site's theme, not this page.
