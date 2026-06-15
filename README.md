# wrinkle-creams.com

A professional, SEO-optimised, advice-led skincare website for women looking for honest guidance on wrinkle creams, anti-ageing ingredients, and daily routines. Built as a static HTML/CSS/JS site — no framework required, deployable anywhere.

---

## File structure

```
wrinkle-creams.com/
├── index.html                          # Homepage
├── start-here.html                     # Beginner's guide
├── best-wrinkle-creams.html            # Buying guide + review placeholders
├── wrinkle-cream-ingredients.html      # Ingredient education hub
├── retinol-wrinkle-creams.html         # Retinol deep dive
├── fine-lines.html                     # Fine lines guide
├── eye-wrinkle-creams.html             # Eye area guide
├── wrinkle-creams-over-40.html         # Age guide: 40s
├── wrinkle-creams-over-50.html         # Age guide: 50s
├── wrinkle-creams-over-60.html         # Age guide: 60s
├── neck-wrinkle-creams.html            # Neck care guide
├── forehead-wrinkles.html              # Forehead lines guide
├── wrinkle-prevention-tips.html        # Prevention tips
├── morning-skincare-routine.html       # Morning routine
├── night-skincare-routine.html         # Evening routine
├── sensitive-skin-wrinkle-creams.html  # Sensitive skin guide
├── dry-skin-wrinkle-creams.html        # Dry skin guide
├── oily-combination-skin-wrinkle-creams.html
├── wrinkle-cream-myths.html            # Myths busted
├── review-template.html                # Internal review format (noindex)
├── compare.html                        # Comparison hub
├── about.html                          # About page
├── editorial-policy.html               # Editorial standards
├── affiliate-disclosure.html           # Affiliate disclosure
├── contact.html                        # Contact form
├── sitemap.xml                         # XML sitemap
├── robots.txt                          # Robots file
├── css/
│   └── styles.css                      # Full design system
└── js/
    ├── components.js                   # Nav + footer injection
    └── main.js                         # FAQ accordion, quiz, lazy load
```

---

## Local development

No build step required. Open any `.html` file directly in a browser, or serve with any local server:

```bash
# Python (built into macOS/Linux)
cd wrinkle-creams.com
python3 -m http.server 8080
# Then open http://localhost:8080

# Node (if installed)
npx serve .

# VS Code: use the Live Server extension
```

---

## Deployment

### Netlify (recommended — free tier available)
1. Drag and drop the `wrinkle-creams.com/` folder into app.netlify.com/drop
2. Or connect your GitHub repo and set publish directory to `/` (root)
3. Add your custom domain in Netlify settings

### Vercel
1. `npm i -g vercel` then `vercel` from inside the project folder
2. Or connect your GitHub repo at vercel.com
3. Framework preset: **Other** (static)

### Cloudflare Pages
1. Push to GitHub
2. Connect repo at pages.cloudflare.com
3. Build command: (none — static site)
4. Output directory: `/`

### Standard shared hosting (cPanel, SiteGround, etc.)
1. Upload all files via FTP to `public_html/` or your domain's root folder
2. Ensure `index.html` is in the root

### URL structure note
Pages use `.html` extensions (e.g. `start-here.html`). To serve clean URLs (`/start-here` without `.html`):
- **Netlify:** add a `netlify.toml` with pretty URLs enabled (see below)
- **Apache:** add `.htaccess` rewrite rules
- **Nginx:** configure `try_files` with `.html` extension

**netlify.toml for clean URLs:**
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/:splat.html"
  status = 200
  conditions = {Language = ["en"]}
```

---

## Configuration checklist before launch

### Domain and hosting
- [ ] Domain `wrinkle-creams.com` pointed to hosting
- [ ] HTTPS/SSL certificate active
- [ ] `www` redirect configured (www → non-www or vice versa)

### SEO
- [ ] Update all canonical URLs from `https://wrinkle-creams.com/...` to your actual domain
- [ ] Update `sitemap.xml` URLs to match your domain
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site in Google Search Console
- [ ] Add `og:image` meta tag with a real image URL (currently placeholder)

### Content
- [ ] Replace all `<!-- ADD: ... -->` placeholder comments with real content
- [ ] Add author/team bio to `about.html`
- [ ] Add real contact email to `contact.html`
- [ ] Connect contact form to a real form handler (Formspree, Netlify Forms, etc.)
- [ ] Update editorial policy and affiliate disclosure dates
- [ ] Add attorney/firm details if applicable (not applicable for this site)

### Images
All hero and card images currently use Unsplash CDN URLs. Before launch:
- [ ] Download and host images locally in `/images/` for performance and reliability
- [ ] Compress all images (use Squoosh, TinyPNG, or similar)
- [ ] Confirm all `alt` attributes are descriptive and accurate
- [ ] Add an OG image at `/images/og-default.jpg` (1200×630px recommended)

### Analytics
- [ ] Add Google Analytics 4 tag (or Plausible/Fathom for privacy-first)
- [ ] Add to `<head>` of all pages, or use a tag manager
- [ ] Configure GA4 goals for newsletter signups and contact form submissions

### Newsletter
- [ ] Connect newsletter form in footer to email provider (Mailchimp, ConvertKit, Kit, etc.)
- [ ] Replace `onsubmit="return false;"` with real form action
- [ ] Add privacy/GDPR consent checkbox if required by your jurisdiction

---

## SEO checklist

- [x] Unique `<title>` tag on every page
- [x] Unique meta description on every page
- [x] Canonical tag on every page
- [x] Open Graph tags (og:title, og:description, og:url, og:image)
- [x] Twitter card meta tags
- [x] JSON-LD structured data (WebSite, Organization, Article, FAQPage, BreadcrumbList)
- [x] Semantic HTML5 (header, main, nav, section, article, footer)
- [x] Breadcrumb navigation on all interior pages
- [x] Mobile-first responsive design
- [x] Lazy loading on images (`loading="lazy"`)
- [x] Skip-to-content link for accessibility
- [x] ARIA labels on navigation, forms, and interactive elements
- [x] Alt text on all images
- [x] Internal linking between all major topic clusters
- [x] FAQ sections with FAQPage schema
- [x] sitemap.xml
- [x] robots.txt
- [ ] Page speed optimisation (compress images, serve from CDN)
- [ ] Core Web Vitals check (Google PageSpeed Insights)
- [ ] Google Search Console verification
- [ ] Hreflang tags (if targeting multiple regions/languages in future)

---

## Content update checklist

### When adding product reviews
- [ ] Use `review-template.html` as the base for every review
- [ ] Complete ALL placeholder sections before publishing
- [ ] Verify INCI list against physical product label (not brand website)
- [ ] Confirm current pricing at point of publish
- [ ] State clearly how the product was assessed (hands-on / sourced)
- [ ] Update `best-wrinkle-creams.html` placeholders with reviewed products
- [ ] Update `compare.html` comparison table with reviewed products
- [ ] Update `sitemap.xml` with new review URLs
- [ ] Add affiliate disclosure to any page containing affiliate links

### Regular maintenance
- [ ] Check Unsplash image URLs are still resolving (or migrate to self-hosted)
- [ ] Review and update any ingredient information if new research emerges
- [ ] Update product prices and retailer links in reviews (quarterly minimum)
- [ ] Check for broken links (use a tool like Screaming Frog or Ahrefs)
- [ ] Refresh `sitemap.xml` when new pages are added

---

## Affiliate conversion checklist (for future use)

When ready to monetise with affiliate links:

- [ ] Join affiliate programmes for relevant UK/US retailers (e.g. LookFantastic, Cult Beauty, ASOS, Amazon, Boots, Feel Unique)
- [ ] Or use an affiliate network (Awin, CJ, Rakuten, Impact)
- [ ] Update `affiliate-disclosure.html` to reflect active affiliate relationships
- [ ] Add disclosure block to every page containing affiliate links
- [ ] Replace product placeholders in `best-wrinkle-creams.html` with reviewed + linked products
- [ ] Complete `compare.html` comparison table with real products
- [ ] Ensure each linked product has a complete review on the site
- [ ] Test all affiliate links are tracking correctly
- [ ] Set up monthly checks for broken affiliate links

---

## Where real content still needs to be added

The following are placeholder items that must be completed by the site owner before the site is fully production-ready:

| Location | What's needed |
|---|---|
| `about.html` | Author/team bio and credentials |
| `contact.html` | Real email address |
| `contact.html` | Form handler connection (Formspree etc.) |
| `editorial-policy.html` | Review and update date |
| `affiliate-disclosure.html` | Update when first affiliate link goes live |
| All pages | OG image URL (`og:image`) |
| All pages | Analytics tag |
| `best-wrinkle-creams.html` | 10 product review placeholders → real reviews |
| `compare.html` | Comparison table → real reviewed products |
| `review-template.html` | Use as base; complete all sections per product |
| Footer | Newsletter form connection |
| Images | Download from Unsplash and host locally |
| Sitemap | Update domain when live |
| All canonical tags | Update to real domain when live |

---

## Technology

- **HTML5** — semantic markup, ARIA accessibility
- **CSS** — custom properties, mobile-first, no framework dependency
- **JavaScript** — vanilla JS only; no libraries or frameworks
- **Fonts** — Google Fonts (Playfair Display + Inter) loaded via `@import`
- **Images** — Unsplash CDN (replace with self-hosted before launch)
- **Schema** — JSON-LD structured data (WebSite, Organization, Article, FAQPage)

No build tools, no package managers, no framework dependencies. The site works by opening `index.html` in any browser.
