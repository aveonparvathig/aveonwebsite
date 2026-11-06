# Full SEO Audit — www.aveoninfotech.com

**Date:** 2026-11-06
**Business type:** B2B SaaS — Education / Campus ERP & LMS (brick-and-mortar HQ in Coimbatore, India)
**Pages in sitemap:** 59
**Data sources:** Google Search Console (full access), GA4, PageSpeed Insights v5, CrUX field data, Common Crawl web graph, live crawl

---

## Executive Summary

### Overall SEO Health Score: **84 / 100**

> **Read this score carefully.** It is high because the site is genuinely well-built — clean technical SEO, comprehensive schema, and Core Web Vitals that *pass in the field*. But the score is weighted toward on-page/technical health, and it **understates the one problem that actually caps growth: the site has almost no off-site authority.** Aveon ranks for its own name and little else.

**The core story in one line:** *A technically excellent site that is commercially invisible for non-branded demand because nobody links to it.*

### Evidence from real Google data (last 28 days)
- **98% of all clicks are branded** — "aveon infotech", "aveon", "aveon erp", "aveon student erp".
- Non-branded queries generate ~51% of impressions but **zero clicks** — because they rank page 2+ or match the wrong intent (many are *competitors' client-portal logins*, e.g. "snmv erp login", "ciet cms login").
- Only **2 referring hosts** link to the domain in Common Crawl; domain PageRank rank is ~52 millionth.
- GA4 organic: ~43 sessions / 28 days — tiny, and almost entirely brand-driven.

### Top 5 critical issues
1. **Near-zero backlink profile** (2 referring hosts) — the dominant growth blocker. *[Critical]*
2. **Traffic is 98% branded**; non-branded commercial terms don't convert impressions to clicks. *[High]*
3. **No off-site authority for AI answer engines to cite** — same root cause as #1. *[High]*
4. **E-E-A-T gaps** — blog authored by Organization (no named experts), thin pages. *[Medium]*
5. **54 real Google reviews not surfaced** in content or schema. *[Medium]*

### Top 5 quick wins
1. Claim software-review profiles (G2, Capterra, SoftwareSuggest, TrustRadius) — instant citations + authority.
2. Add named **Person** authors with bios to blog Article schema.
3. Expand thin pages (`/partners` 124w, `/academy` 232w, `/solutions/by-state` 225w).
4. Add legitimate **AggregateRating** reflecting the 54 Google reviews.
5. Add a **Content-Security-Policy** header (every other security header is already in place).

---

## Technical SEO — 90/100

**What works**
- `robots.txt` is clean: `Allow: /`, blocks only `/api/` and `/studio/`, and declares deliberate groups for every major AI crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot…).
- `sitemap.xml`: 59 URLs, submitted to GSC, **0 warnings / 0 errors**.
- Legacy PHP URLs **308-redirect** to new routes (`/college-erp.php → /products/college-erp`, `/our-team.php → /about/team`, etc.).
- Security headers present: HSTS (2-year), `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy`.
- Content is **server-rendered** (2,000+ words without JS); canonicals are self-referential and match Google's chosen canonical.
- Key pages confirmed **"Submitted and indexed"** via the URL Inspection API; breadcrumb rich results PASS.

**Findings**
- **[Medium] Legacy `.php` URLs still out-rank their new targets.** `/college-erp.php` pulls 1,479 impressions at position 4.7, while its redirect target `/products/college-erp` gets only 427 impressions at position 6.9. The 308s are correct — Google just hasn't finished consolidating equity. Keep the redirects, resubmit new URLs via the Indexing API, and audit internal links to ensure they point to the new paths.
- **[Low] No Content-Security-Policy header** — the one missing security header. Add it report-only first.
- **[Low] App subdomains in search** (`messtoken.aveoninfotech.com`) surface for client-portal queries. Confirm app subdomains are `noindex` where appropriate.

---

## Content Quality — 72/100

**What works**
- Money pages are substantial: `/products/college-erp` ~2,593 words, `/products/university-erp` ~1,973 words, `/comparisons` ~1,500 words.
- 12 topical blog guides covering real buyer questions (NAAC, NBA, AICTE, NIRF, OBE, ERP migration, multi-campus).
- FAQ content present and marked up on product, contact and accreditation pages.

**Findings**
- **[Medium] Blog authorship is `Organization`, not a credentialed `Person`.** In a B2B/compliance-adjacent niche, named experts with bios and `sameAs` (LinkedIn) are far stronger E-E-A-T signals.
- **[Medium → partially fixed] Thin pages.** `/partners` was genuinely thin (~124w) and has been **expanded (2026-11-06)** with per-model detail, a why-partner section, a how-it-works process and an FAQ (plus FAQ + breadcrumb schema). *Correction:* the automated counts for `/academy`, `/solutions/by-state` and `/solutions/coimbatore` were understated by the renderer — on review `/academy` and `/solutions/by-state` are substantial hub/landing pages, not thin; `/solutions/coimbatore` is short but acceptable.
- **[Low] Guides batch-published on the same date** (`datePublished = dateModified = 2026-11-03` across several). Stagger updates and add original data/screenshots so the pages read as genuinely maintained.

---

## On-Page SEO — 85/100

**What works**
- Unique, keyword-aligned titles and meta descriptions per page.
- Clear heading hierarchy; descriptive internal links between related products.
- `og:`/`twitter:` tags, `theme-color`, and correct canonicals.

**Findings**
- **[Medium] Non-branded intent under-served by internal anchors.** Head terms (college erp software, campus management system) rank page 2+; internal anchor text and hub structure under-reinforce them. Build a topic-cluster model with exact/partial-match anchors pointing to money pages.
- **[Low] Legacy `meta keywords` tag present** — deprecated and ignored by Google. Harmless but worth removing.

---

## Schema & Structured Data — 95/100

**What works**
- Sitewide **Organization + LocalBusiness + WebSite** JSON-LD, valid and consistent.
- Product pages carry **SoftwareApplication + FAQPage + BreadcrumbList**.
- Blog carries **Article + WebPage + BreadcrumbList** with dates.
- GSC rich-results verdict **PASS** (breadcrumbs detected).

**Findings**
- **[Medium] No `AggregateRating`/`Review` schema** despite 4.2★ / 54 Google reviews. Add legitimate rating markup to earn review rich results.
- **[Low] Schema uneven across page types.** `/solutions/*` lack FAQ/SoftwareApplication; `/products/iqac-naac-nba/naac` has FAQ but no BreadcrumbList. Standardise.

---

## Performance (Core Web Vitals) — 88/100

**Field data (CrUX, real users — what Google ranks on):**

| Metric | Origin p75 | Rating |
|---|---|---|
| LCP | 2,181 ms | ✅ Fast |
| CLS | 0.03 | ✅ Fast |
| INP | 266 ms | ⚠️ Needs improvement |
| TTFB | 750 ms | ✅ Fast |

**Lab (Lighthouse mobile):** Performance 85 · Accessibility 96 · Best-Practices 100 · SEO 100 · page weight 942 KiB.

**Findings**
- **[Medium] INP borderline (266 ms; good < 200 ms).** Reduce unused JavaScript (~450 ms flagged) and defer non-critical scripts.
- **[Low] Lab LCP 4.3s vs field 2.18s** — lab is stricter; field passes, so no urgent action. LCP image is already preloaded with `fetchpriority`.

---

## AI Search Readiness (GEO) — 80/100

**What works**
- `robots.txt` explicitly welcomes AI crawlers; content is server-rendered and extractable.
- Rich entity schema + FAQ/Q&A structure supports passage-level citation.

**Findings**
- **[High] No off-site brand authority for AI engines to cite.** Answer engines favour entities with third-party corroboration. With ~2 referring hosts and a branded-only footprint, the brand lacks what's needed for non-branded AI citations. *Same lever as the backlink problem.*
- **[Low] No `llms.txt` / Content-Signal / Markdown delivery** — optional hygiene, not ranking factors today.

---

## Off-Site Authority & Backlinks — 35/100 ⚠️ *The decisive category*

**Findings**
- **[Critical] Near-zero backlink profile.** Common Crawl shows only **2 referring hosts**; domain PageRank rank ~51,994,670 (harmonic-centrality rank ~10.9M). This is *the* reason non-branded commercial terms don't rank and traffic is 98% branded.
- **[High] No measurable authority flow to new URLs.** Historical equity isn't translating into non-branded rankings.

**Recommendation:** A sustained link/citation program is the highest-ROI work available to this site — software review sites, Indian edtech directories, client case-study links, HARO/press, partner co-marketing. Target **20–30 quality referring domains over 2–3 months**, paired with the internal topic-cluster model so new authority lands on money pages.

---

## Local SEO — 82/100

**What works**
- `LocalBusiness` schema sitewide with exact NAP (Coimbatore 641004), hours, geo and map link.
- Google Business Profile exists (**4.2★ / 54 reviews**); dedicated `/solutions/coimbatore` and state pages.

**Findings**
- **[Medium] Review equity not surfaced on-site.** Add a testimonials section + legitimate `AggregateRating`.
- **[Medium] Local landing pages thin/templated.** Add locally specific proof (named institutions, local case studies) and build India edtech citations.

---

## Images — 88/100

- **100% alt-text coverage** on sampled pages (0 of 81 homepage images missing alt).
- Next.js image pipeline serves **WebP** with responsive `srcset` and `fetchpriority` on the LCP image.
- **[Low]** Spot-check alt descriptiveness and ensure OG images are page-specific.

---

## Scoring Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 90 | 19.8 |
| Content Quality | 23% | 72 | 16.6 |
| On-Page SEO | 20% | 85 | 17.0 |
| Schema / Structured Data | 10% | 95 | 9.5 |
| Performance (CWV) | 10% | 88 | 8.8 |
| AI Search Readiness | 10% | 80 | 8.0 |
| Images | 5% | 88 | 4.4 |
| **Overall** | | | **≈ 84** |

> Off-site authority (score 35) sits *outside* these on-page weights by design. If authority were folded in, the effective "will this site grow non-branded traffic?" score would be far lower. **Treat backlinks as Priority #1 regardless of the 84.**

See `ACTION-PLAN.md` for the prioritised roadmap and `findings/` for per-category detail.
