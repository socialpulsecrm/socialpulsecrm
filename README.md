# Social Pulse — marketing site

The public landing page for **[Social Pulse](https://socialpulsecrm.com)** — the all-in-one AI social media management platform for creators, brands and agencies.

> Plan, publish, engage and grow across 12 platforms — with 16 AI agents that write, schedule, reply and report for you.

It's a fast, dependency-free **static site** (HTML + modular CSS + a little vanilla JS) served by **GitHub Pages** on the custom domain `socialpulsecrm.com`. No build step.

## Structure

```
.
├── index.html            # Landing page (single file for SEO)
├── 404.html              # Branded not-found page
├── contact/index.html    # Contact & help page (mailto form)
├── privacy/index.html    # Privacy Policy
├── terms/index.html      # Terms of Service
├── css/                  # Modular stylesheets, linked in order
│   ├── tokens.css        #   design tokens + dark mode
│   ├── base.css          #   reset, typography, layout helpers
│   ├── buttons.css       #   button variants (incl. the Log in button)
│   ├── nav.css           #   sticky nav + mobile menu
│   ├── hero.css          #   hero, product mock, stats band
│   ├── features.css      #   pillars, how-it-works, feature rows + visuals
│   ├── ai.css            #   AI agents grid
│   ├── audience.css      #   audience cards + differentiators
│   ├── pricing.css       #   pricing toggle + plan cards
│   ├── faq.css           #   FAQ accordion + contact prompt
│   ├── footer.css        #   CTA banner, footer, reveal-on-scroll
│   └── legal.css         #   legal pages + contact page
├── js/                   # ES modules
│   ├── main.js           #   landing entry (imports the modules below)
│   ├── nav.js            #   sticky nav + mobile menu
│   ├── pricing.js        #   monthly/yearly toggle
│   ├── faq.js            #   accordion
│   ├── reveal.js         #   reveal-on-scroll
│   └── contact.js        #   contact-form → mailto handler
├── assets/
│   ├── favicon.svg       # brand mark / favicon
│   └── og-image.svg      # social share image (1200×630)
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── CNAME                 # socialpulsecrm.com
```

### Why HTML stays a single file

The page markup lives in `index.html` (not split into partials) on purpose: this is a no-build static SEO site, and splitting the body into client-side includes would hide content from crawlers. The **CSS and JS are split** into the `css/` and `js/` folders for readability — each file owns one concern and is linked in dependency order.

## Develop locally

No build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

Edit any file under `css/`, `js/`, or the HTML pages and refresh.

## Deploy

Pushing to the default branch publishes automatically via GitHub Pages. The `CNAME` file keeps the custom domain `socialpulsecrm.com`.

All "Get started" / "Log in" CTAs point to the app at `https://app.socialpulsecrm.com`.

## Notes

- **SEO:** canonical, Open Graph and Twitter meta, plus JSON-LD (`Organization` with `contactPoint`, `SoftwareApplication`, `FAQPage`), a sitemap and robots.txt.
- **Accessibility:** semantic HTML, skip link, focus styles, `prefers-reduced-motion` and `prefers-color-scheme` (dark mode) support.
- **Contact form:** static-host friendly — it builds a pre-filled `mailto:` to `support@socialpulsecrm.com` (no backend). Swap in a form service (e.g. Formspree) later if you want server-side capture.
- **OG image:** `assets/og-image.svg` is used for link previews. For maximum compatibility with every social scraper, you can export a 1200×630 **PNG** from it and point the `og:image` / `twitter:image` tags at the PNG.
