# Phase 1 audit — wrinkle-creams.com (full treatment)

Audit date: 22 September 2026. Repository (static HTML, no framework) and
live site (fetched homepage).

## Business/site profile

Static hand-written HTML content site — ingredient guides, comparisons,
routines for wrinkle creams. No affiliate links live yet; explicit future-
monetisation disclosure with an editorial-independence statement. Only
two commits ever (initial upload) — genuinely untouched since creation,
the only site in this batch with zero prior SEO work.

## Competitor landscape

This is a brutally competitive, well-resourced field: U.S. News
(dermatologist-ranked), established affiliate authorities like
theconsumers.guide and dermatologist-reviews.com, and retail giants
(Walmart's own category pages) all rank for the core terms. None of these
can be out-authored by volume. The realistic path is the same one the
site's own structure already points at: narrow, specific long-tail
("wrinkle creams for sensitive skin", "neck wrinkle creams", "wrinkle
creams over 60") where a smaller, honestly-written site can compete
against generic best-of lists that don't segment by skin type or age
group the way this one already does.

## AI-question map (sample)

"What ingredient actually works for deep wrinkles?", "Is retinol safe for
sensitive skin?", "Do neck creams work differently from face creams?" —
the page structure (ingredient pages, age/skin-type-segmented guides)
already matches this well; it's the machine-readability that's missing,
not the content strategy.

## Findings

**Finding:** No JSON-LD structured data anywhere in the site.
**Status:** Verified fact (repo-wide, not just homepage — hand-written
HTML, no schema found). **Impact:** Highest-leverage single addition
since it's a one-time markup job on a site with no build pipeline to
complicate it. **Recommendation:** Add `Organization`/`WebSite` site-wide
and `FAQPage` on pages with existing FAQ content
(`wrinkle-cream-ingredients.html`, `wrinkle-cream-myths.html`, and the
age/skin-type guide pages already have the underlying content).
**Priority:** P0.

**Finding:** No author or medical-reviewer attribution despite covering
skincare/ingredient claims. **Status:** Verified fact. **Impact:**
E-E-A-T, and directly relevant once affiliate links go live and the site
starts making purchase recommendations — that's the moment this stops
being optional. **Recommendation:** Add an author/editorial-team bio
page before affiliate links go live. **Priority:** P0 — sequence this
*before* monetisation, not after.

**Finding:** `robots.txt` and `sitemap.xml` are already correctly
configured, including an explicit disallow on the internal template page.
**Status:** Verified fact, positive. No action needed.

**Finding:** `robots.txt` doesn't yet have the explicit AI-crawler
allow-list (GPTBot, PerplexityBot, ClaudeBot, etc.) that several other
portfolio sites already carry. **Status:** Verified fact.
**Recommendation:** Add the same allow-list pattern for consistency —
trivial one-file change on a static site. **Priority:** P2.

## Prioritised list

P0: Schema batch; author/reviewer page (sequenced before affiliate links
go live).
P2: AI-crawler robots.txt entries.

## 30/60/90

30 days: schema batch, robots.txt AI-crawler entries, author/reviewer
page.
60 days: expand FAQ schema across the remaining guide pages not yet
fetched/reviewed in this pass.
90 days: once affiliate links go live, revisit trust signals with real
disclosure language reflecting actual (not future-tense) monetisation.

## Proposed implementation batch (pending your approval — no edits made)

**Batch 1 — schema + robots.txt.** Add `Organization`/`WebSite`/`FAQPage`
JSON-LD across the guide pages, and the AI-crawler allow-list entries to
`robots.txt`. Reversible, no existing content changed.

**Batch 2 — author/reviewer page** (needs a real name/credentials from
you — I won't invent one). Holding until you provide that.

Say the word on Batch 1 and I'll implement it; Batch 2 needs your input
first regardless.
