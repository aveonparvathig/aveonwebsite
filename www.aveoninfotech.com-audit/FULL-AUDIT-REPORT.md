# Full SEO Audit — www.aveoninfotech.com

**Date:** 16 Nov 2026 · **Previous audit:** 6 Nov 2026 (84/100)
**Business type:** B2B SaaS, education / campus ERP; office in Coimbatore, sells across India (hybrid local)
**Scope:** all 66 sitemap URLs (6 Nov sampled 59), plus redirects, landing pages and drift baselines
**Data sources:** live crawl and render, Google Search Console, GA4, PageSpeed Insights, CrUX, Lighthouse 13.6, Common Crawl web graph, competitor and directory sites
**Specialist findings:** `findings/` (technical, content, schema, performance, google, geo-ai, agentic, local, sxo, backlinks)

---

## Executive summary

### SEO Health Score: **81 / 100** (6 Nov: 84)

| Category | Weight | Score | 6 Nov |
|---|---|---|---|
| Technical SEO | 22% | 93 | 90 |
| Content quality | 23% | 70 | 72 |
| On-page SEO | 20% | 78 | 85 |
| Schema / structured data | 10% | 84 | 95 |
| Performance (Core Web Vitals) | 10% | 86 | 88 |
| AI search readiness (GEO 71, agent readiness 92) | 10% | 77 | 80 |
| Images | 5% | 82 | 88 |

**The three-point drop is mostly method, not regression.** This audit read every one of the 66 pages instead of a sample, and scored schema coverage, AI-search authority and on-page titles more strictly. On a like-for-like basis the site is level or slightly better: the technical score rose, the homepage lab LCP fell from 4.3 s to 1.1 s, and five new high-quality comparison pages went live. What the full crawl did surface is a set of **old pages carrying claims that contradict the confirmed facts** — the most important on-site finding of this audit.

Separate from the health score: **Search Experience (SXO) 54/100** and **Local 74/100**. Backlinks: **insufficient data for a score** (free tier only), but the profile is unchanged at 2 referring hosts.

### What the real Google data says (GSC, 17 Oct – 13 Nov vs the 28 days before)
- Clicks **703** (+68%), impressions **7,043** (+58%), CTR 10%. Growth is almost all brand: branded clicks 454 (from 225); **non-branded clicks 12** (from 14), on 2,403 impressions.
- Average position fell from 9.6 to 17.7 because Google now shows the site for **335 non-brand queries** (190 before), mostly on page 2–8 — e.g. "higher education inventory management" (759 impressions, position 74). That is a widening footprint, not a loss.
- The five comparison pages are **not yet known to Google**: GSC's copy of the sitemap has 61 URLs (last read 10 Nov) against 66 live.
- GA4 (data from 4 Nov): organic 208 sessions, paid 109, AI assistants 13 (all ChatGPT). **GA4 has no key events configured**, so every channel shows 0 conversions there. (Google Ads' own conversion tag does work; it recorded its first lead on 13 Nov.)
- Paid sessions dropped to **1 on Saturday 15 Nov** — consistent with the Google Ads prepay balance running out. Check billing.

### Top 5 issues
1. **Critical — off-site authority.** 2 referring hosts (unchanged since 6 Nov); academiaerp.com has 28 and a PageRank rank ~100× better. This is why non-brand clicks stay near zero. *(backlinks, geo)*
2. **High — pages contradict the confirmed facts.** `/solutions/by-state` ("16+ years", "12 modules", "24/7 support", "regional teams"), `/solutions/coimbatore` ("12+ years", "50,000+ students"), a guide saying "nine products", an unverified "ISO 9001" claim, and three stale `public/ai-*.json/txt` files with "50,000+ students" and "since 2014". *(content, geo)*
3. **High — trust claims that may not be real.** "How Symbiosis unified 5 campuses" on `/solutions/multi-campus-management` (Pune; conflicts with the client list and the 4-week plan), and five guides dated "1 March 2024" though the files first appear in Sep 2026. If not real, these are a reputational and E-E-A-T risk. *(content)*
4. **High — new pages not discovered; internal linking gaps.** Comparison pages are unknown to Google and linked only from `/comparisons`; `/resources/college-erp-buyers-guide`, `/solutions/coimbatore` and `/about/team` have no internal links; the Coimbatore hero image 404s. *(google, content)*
5. **High — buyers see no proof.** No product page shows client logos, testimonials, case studies or product screenshots in its main content (SXO trust 5/15, media 4/15). The School and Hostel ad landing pages show an all-college logo wall. *(sxo)*

### Top 5 quick wins
1. Resubmit the sitemap in GSC and request indexing for the five `/comparisons/aveon-vs-*` pages; add them to `llms.txt`.
2. Correct the contradictory stats on `/solutions/by-state`, `/solutions/coimbatore` and the guide; delete `public/ai-search.json`, `ai-search-instructions.txt`, `ai-crawl-metadata.json`.
3. Mark `demo_request`, `form_submit`, `phone_click`, `whatsapp_click` as GA4 key events.
4. Fix the Coimbatore hero image path; link the buyer's guide, Coimbatore page, team page and comparison pages from nav/footer/product pages.
5. Shorten the comparison and other >60-char titles with `title.absolute` (drops the " | Aveon Infotech" suffix).

---

## Technical SEO — 93/100
**Works:** all 66 sitemap URLs 200, self-canonical, indexable, one H1, JSON-LD on every page; sitemap valid and declared in robots.txt; legacy `.php`, http, apex and trailing-slash variants 308 in one hop; server-rendered HTML; IndexNow key live; `/get-started*` landing pages are `noindex` and outside the sitemap (consistent, deliberate).
**Findings:**
- *Medium* — three guessed state slugs (`college-erp-kerala`, `-andhra-pradesh`, `-uttar-pradesh`) return 404 rather than 308; the eight slugs that were real 308 correctly. Only matters if those three were ever linked or indexed.
- *Medium* — drift: `/products/college-erp` H1/title and `/services` title changed since baseline. Both were deliberate keyword retargeting (4–5 Nov); watch GSC for two weeks, then re-baseline.
- *Low* — CSP is Report-Only and allows `unsafe-inline`/`unsafe-eval`; `messtoken.aveoninfotech.com` is indexable; 404 page has a `/_not-found` canonical and two robots metas; sitemap lastmod has 39 URLs on the same date.

## Content quality — 70/100 · On-page — 78/100 · Images — 82/100
**Works:** `/partners` expanded (124 → 593 words); comparison pages are distinct (62–68% unique text each) with a strong "How we compared" disclosure; guides have bylines and author boxes; no duplicate titles or descriptions; 100% image alt coverage; AVIF with dimensions.
**Findings:** the contradictions and doubtful trust claims above (High); three blog posts of 132–196 words and three product pages of ~240–257 words on one template (Medium); 20 of 66 titles over 60 characters (Medium); meta keywords tag still on all pages (Low); client-logo alt text is abbreviations; filenames with spaces/parentheses; hero images lazy-loaded on four pages; only two OG images; `/about` says "exclusively for educational institutions" while selling warehouse and offshore services. E-E-A-T 62/100 — the organisation byline (owner decision) caps Expertise.

## Schema — 84/100
**Works:** valid JSON-LD everywhere; Organization/LocalBusiness/WebSite with shared `@id`s; NAP matches GBP; comparison pages carry WebPage + BreadcrumbList + FAQPage and mark competitors only as plain SoftwareApplication stubs.
**Findings:** product pages other than college-erp lack BreadcrumbList and SoftwareApplication (Medium); `/solutions/coimbatore` has no page entity (Medium); LocalBusiness lacks `geo`, `sameAs` to GBP and a place-link `hasMap` (needs the real coordinates and GBP URL from the owner); comparison pages lack `datePublished`. Google retired FAQ rich results in May 2026 — keep FAQPage, but don't add it for SERP reasons.

## Performance — 86/100
| | LCP | INP | CLS |
|---|---|---|---|
| CrUX origin (field) | 2,326 ms ✅ | **261 ms ⚠️** | 0.03 ✅ |
| CrUX homepage (field) | 2,251 ms ✅ | 222 ms ⚠️ | 0.03 ✅ |

Lab (mobile): `/` 96, `/products/college-erp` 89 (TBT 400 ms), `/comparisons/aveon-vs-camu` 95, `/get-started/school-erp` 93; lab LCP ~1.1 s everywhere. **INP over 200 ms is the one Core Web Vitals miss**; homepage TBT rose 70 → 230 ms. Cut client JS and defer third-party scripts.

## AI search readiness — 77/100 (GEO 71, agent readiness 92)
**Works:** all 15 major AI crawlers allowed and served full HTML; `llms.txt` live (the 6 Nov "no llms.txt" finding was wrong); Lighthouse Agentic Browsing 3/3; comparison pages and the campus-ERP guide are highly citable. Platform estimates: Bing Copilot 72, Google AI Overviews 62, ChatGPT 45, Perplexity 35.
**Findings:** no Wikidata, YouTube, or review-site presence (High, authority); stale `public/ai-*` files (Medium); homepage lacks a plain "who is Aveon" sentence (Medium); comparison pages missing from `llms.txt` (Medium); go-live time stated three ways — "30 days", "30 working days", "four weeks" (Low); `/contact` demo form has five inputs without label association (Medium, agent and accessibility).

## Search experience (separate score) — 54/100
Page types mostly match the SERPs; "campus management system" lands on `/products` ("Our Products", phrase absent) — High mismatch. "College ERP" and "school management software" SERPs are ~50–60% "best of" lists where Aveon is absent. Paid landing pages are structurally sound but: School/Hostel variants show college proof, the only offer is a 30-minute demo, no price signal, no product visual, no NAAC variant.

## Local (separate score) — 74/100
NAP consistent everywhere on-site and in schema. Gaps: no reviews shown on-site, citations mostly unverified (Justdial, Sulekha, Clutch, GoodFirms unconfirmed; IndiaMART lacks street line and phone), location pages templated and thin, no Maps place link on `/contact`.

## Backlinks — insufficient data (Tier 0)
2 referring hosts; Common Crawl data still Jan–Mar 2026, so November work won't show yet. Competitors: academiaerp.com 28 hosts, iitms.co.in 3 hosts but PageRank rank ~0.5M vs Aveon ~52M. Add a free Moz key and verify Bing Webmaster to measure properly. Target 20–30 referring domains by Feb 2027. **Do not enable the hidden "Powered by Aveon" client-portal links until each host passes `scripts/portal-check.mjs`** (two portals were found infected on 3 Nov).

---

## Fixed since 6 Nov
- Homepage lab performance 85 → 96; lab LCP 4.3 s → 1.1 s.
- Five comparison pages live with full schema; `/partners` no longer thin; breadcrumbs added on most key pages; CSP header added (report-only).
- Sitemap 59 → 66 URLs; GSC clicks +68%.

## Unchanged since 6 Nov
- 2 referring hosts; ~98% branded clicks; organisation-only authorship; `messtoken` subdomain indexable; meta keywords tag; `/solutions/coimbatore` thin.

See `ACTION-PLAN.md` for the prioritised fix list.
