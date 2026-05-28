# Marin &amp; West — Luxury Real Estate (Design Preview)

A high-end, fully responsive realtor website built as an **outreach preview**.
It is a **fictional brand** (Marin &amp; West, Victoria BC) created to show a
real agent what a best-in-class site can look and feel like.

Built with **plain HTML, CSS and vanilla JavaScript** — no framework, no build
step. Just open it or drop the folder on any host.

## What's inside

| Page | File | Highlights |
|------|------|-----------|
| Home | `index.html` | Cinematic hero, animated headline, animated stat counters, featured listings, communities, process, testimonials |
| Listings | `listings.html` | Filterable property grid (area / type / price / status) |
| Listing detail | `listing.html?id=<slug>` | Gallery + lightbox, key facts, features, agent card, similar homes |
| Communities | `communities.html` | Neighbourhood guides with hover-reveal |
| About | `about.html` | Agent story, stats, philosophy, awards marquee, testimonials |
| Sell | `sell.html` | Multi-step home-valuation form (mock) + selling process |
| Contact | `contact.html` | Validated contact form (mock) + details |

### Premium touches
- Smooth inertia scrolling (Lenis, loaded from CDN, with graceful fallback)
- Scroll-reveal animations, staggered grids, Ken-Burns hero, parallax
- Animated number counters, hover micro-interactions, sticky shrinking header
- Animated mobile menu, image lightbox with keyboard nav
- Respects `prefers-reduced-motion`, accessible landmarks & focus states
- SEO metadata + `RealEstateAgent` JSON-LD + inline SVG favicon

## How to run locally

No build needed. Any static server works, e.g.:

```bash
# Python
python3 -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve .
```

> Open via a server (not `file://`) so the `listing.html?id=…` query params and
> fonts behave exactly as in production.

## How to deploy

Drag the folder into **Netlify Drop**, push to **GitHub Pages**, or upload to
**Vercel** / any static host. It's just files.

## How to rebrand (one file)

Everything — agent name, phone, email, social links, stats, listings,
communities, testimonials, awards — lives in **`assets/js/data.js`**.
Edit the `SITE`, `LISTINGS`, `COMMUNITIES`, `TESTIMONIALS` and `AWARDS`
objects and the whole site updates.

## Images

Photos are free **Unsplash** placeholders referenced by URL. Swap the `hero`
/ `gallery` / `portrait` / community `image` URLs in `data.js` (and the hero
images hard-coded in each page's `<head>`/hero markup) with real photography.
If an image ever fails to load, it falls back to a brand-coloured tint.

---

*Fictional brand. All names, addresses, prices and contact details are
placeholders for demonstration only.*
