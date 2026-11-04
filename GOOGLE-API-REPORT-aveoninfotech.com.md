# Google API report — www.aveoninfotech.com (4 Nov 2026)

Source: PageSpeed Insights v5 (Lighthouse 13.6.0) + Chrome UX Report field data, pulled through the claude-seo plugin with the new "Aveon SEO" Cloud project (ID `aveon-seo`). Credential tier at run time: **0 (API key only)**. Search Console, URL Inspection and GA4 sections will be added once the service-account key is in place.

Field data = real Chrome users, 28-day window, p75. Lab = single Lighthouse run on a simulated mid-range phone / desktop.

## 1. Lighthouse lab scores

| Page | Mobile perf | Mobile LCP | Mobile TBT | Desktop perf | A11y | SEO |
|---|---|---|---|---|---|---|
| / | 91 | 3.3 s | 100 ms | 100 | 96 | 100 |
| /products/college-erp | 100 | 1.1 s | 80 ms | 100 | 96 | 100 |
| /solutions/college-erp-tamil-nadu | 100 | 1.0 s | 80 ms | 100 | 100 | 100 |
| /blog/naac-accreditation-checklist | 99 | 1.0 s | 120 ms | 100 | 100 | 100 |
| /contact | 95 | 2.6 s | 130 ms | 100 | 91 | 100 |

CLS is 0 on every page in the lab. Best Practices 100 everywhere.

## 2. Core Web Vitals, field (CrUX, origin level, all form factors)

| Metric | p75 | Rating | Good share |
|---|---|---|---|
| LCP | 2.14 s | Good | 81 % |
| INP | 226 ms | Needs improvement | 73 % |
| CLS | 0.03 | Good | 98 % |
| FCP | 2.06 s | Needs improvement | 66 % |
| TTFB | 755 ms | Good (borderline) | 79 % |

Mobile vs desktop (PSI origin split): INP mobile 261 ms vs desktop 70 ms; FCP mobile 2.1 s vs desktop 1.5 s; TTFB mobile 755 ms vs desktop 527 ms. The two "needs improvement" metrics are mobile problems.

## 3. 25-week trend (CrUX History)

| Metric | 25 weeks ago | Latest | Direction |
|---|---|---|---|
| LCP | 2.42 s | 2.12 s | Improving (−5 %) |
| CLS | 0.03 | 0.02 | Improving |
| FCP | 1.55 s | 2.02 s | **Degrading (+17 %)** |
| TTFB | 861 ms | 720 ms | Stable, hovering 720–1035 ms |
| INP | 95 ms | 211 ms | Only two data points; latest is over the 200 ms line |

## 4. What this means

1. **INP on mobile is the one CWV that fails.** Lab TBT is low (80–130 ms), so the slow interactions are coming from real-user input on the live site: most likely the chat widget, the mobile menu, or the hero carousel handlers. Next step: wire `web-vitals` attribution (INP target element) into GA4 for two weeks to see which element users are hitting, then move that handler off the main thread or defer its hydration.
2. **FCP is drifting up while LCP improves.** First paint is being delayed by something that loads before the hero: the gtag loader, fonts, or the render-blocking CSS budget. Check that `next/font` preloads only the two weights actually used above the fold and that gtag stays `lazyOnload`.
3. **TTFB sits at 720–1000 ms on mobile.** Pages are static on Vercel, so this is mostly network distance for Indian users plus the first-byte cost of the edge. Confirm every marketing page is served as static HTML (no `ƒ` in the build output) and that the Vercel region/edge cache is warm; a 300 ms gain here lifts FCP and LCP together.
4. Homepage mobile lab LCP of 3.3 s is the hero image; field LCP is fine (2.3 s), so this is a lab-only artefact of the throttled run. Not a priority.
5. Contact page accessibility 91: the lowest on the site; worth a quick pass on form label contrast.

## 5. Brand entity check

Knowledge Graph Search for "Aveon Infotech" returns **no entity**. Google does not yet hold a knowledge-graph node for the company. This is the Wikidata + Crunchbase + consistent sameAs task from the Phase 3 off-site plan; the Organization schema with `sameAs` is already live and the GBP now matches the site NAP, so the remaining lever is third-party profiles.

## 6. Search Console, 7 Oct – 1 Nov 2026 (Search Analytics API, web, 521 query×page rows, totals complete)

| Total | Value |
|---|---|
| Clicks | 672 |
| Impressions | 6,023 |
| CTR | 11.2 % |
| Avg position | 16.2 |

**Branded vs non-branded (by query text containing "aveon" / common misspellings):**

| Segment | Clicks | Impressions |
|---|---|---|
| Branded | 467 | 7,420 |
| Non-branded | 11 | 1,890 |

Almost all search traffic is people already looking for Aveon or its client portals. Non-brand commercial queries generate impressions but no clicks because the pages rank on page 5–8.

**Legacy URLs still carrying traffic.** 46 of the 672 clicks and ~3,600 impressions landed on old PHP URLs (`/college-erp.php` 33 clicks / 1,034 impressions, `/our-solutions.php` 730 impressions, `/contact.php` 512, `/our-company.php` 444, `/our-team.php` 232). All now 308 to the matching new pages (commits ff03a6d, a6278cc, 3776888); expect these rows to migrate to the new URLs over the next 2–4 weeks. `/our-team.php` and `/Learning-management-and-ai-chatbot.php` were going to the homepage until commit 3776888 pointed them at `/about/team` and `/products/lms-ai-chatbot`.

**Non-brand queries with real impressions but a page that ranks far down:**

| Query | Impr. | Pos. | Page that should win | Action |
|---|---|---|---|---|
| higher education inventory management | 698 | 73.8 | /products/inventory-management | Rewrite the page around "inventory management for colleges and universities"; it currently reads as generic stores software. Biggest single opportunity in the account. |
| canteen management system / software | 77 | 50 | /products/canteen-management | Add a 600-word section: cashless canteen for colleges, RFID/ID card, parent top-up, GST billing. |
| ai learning management system / ai lms | 26 | 71 | /products/lms-ai-chatbot | Title and H1 should carry "AI LMS"; add an FAQ on how the chatbot is trained. |
| campus management system 3.0 | 95 | 7.7 | / | Already page 1; a line on the homepage naming the current version would lift CTR. |
| higher education erp migration services | 13 | 15 | /blog/erp-migration-best-practices | Internal-link from the services hub with that anchor. |
| unified campus management solution | 9 | 11.6 | /blog/benefits-unified-campus-management | Fine; monitor. |

**Client-portal login queries** (ciet cms login, snmv erp login, sankara erp login, egs erp attendance, erp rajasthan university, aveon student erp login) total roughly 700 impressions a month. These are students and staff looking for their institution's portal, not buyers. A single `/login` page that explains "your portal is hosted by your institution" and links to each client portal would answer the demand, stop the homepage absorbing it, and is a natural place for the Powered-by-Aveon reciprocal links once the portals are clean.

**Quick wins the API flagged** (position 4–10, high impressions): all branded ("aveon student erp", "aveon erp", "aveon student erp login") landing on `/college-erp.php`, `/products/school-erp`, `/about`, `/solutions`. The redirects plus the title fixes already made should consolidate these onto `/products/college-erp` and `/`.

Data caveat: Google's own logging error made impressions, CTR and position unreliable between 13 May 2025 and 27 Apr 2026; this window is after the fix, so the numbers are sound. Search Analytics lags 2–3 days.

## 7. Indexation truth (URL Inspection API, all 59 sitemap URLs, 4 Nov 2026)

| Verdict | Count |
|---|---|
| PASS, submitted and indexed | 55 |
| NEUTRAL | 4 |

The four not indexed:

| URL | State | Why |
|---|---|---|
| /products | Not found (404) | Google last crawled it on 2 Aug 2026, before the page existed. Indexing requested on 4 Nov; the live page is 200. |
| /privacy | Discovered, not crawled | Low priority page, no inbound links. Fine. |
| /services/offshore-team | Discovered, not crawled | Add an internal link from the services hub body text. |
| /services/warehouse-management-system | Discovered, not crawled | Same. |

Canonical check: Google and user canonicals agree on all 55 indexed pages (the homepage differs only by trailing slash). Robots: allowed everywhere. Sitemap: 59 submitted, 0 errors, 0 warnings, last read 3 Nov.

Rich results detected: Breadcrumbs on 27 pages; "Review snippets" named "Aveon Infotech" on 41 pages with no issues. The site no longer emits any Review or AggregateRating markup (removed 3 Nov), so this is Google's stored copy from an earlier crawl; re-run the inspection in two weeks to confirm it clears.

## 8. GA4 (resolved 4 Nov 2026)

The legacy property (G-LGVGNJ0SGN, `properties/375544871`) lives in an Analytics account that nobody at Aveon administers (two years of change history show only the Editor-level gmail account), so API access could not be granted there. Resolution: a new Analytics account **Aveon Infotech** and property **Aveon Infotech Website** (`properties/562311676`, tag **G-BCYJTG1JHE**) owned by ranjith1089@gmail.com, with the service account as Viewer. The site now sends every hit to both tags (commit e66c643, verified live), so the legacy reports continue while the new property builds history. GA4 API access works (tier 2); the organic-traffic and landing-page reports will have meaningful data from early December.

## 9. Priority list from this report

1. Rewrite `/products/inventory-management` for "higher education inventory management" (698 impressions/month at position 74).
2. Fix mobile INP (261 ms): instrument with web-vitals attribution, then defer the offending handler.
3. Build `/login` (client portal directory) to absorb ~700 monthly portal-login searches.
4. Deepen the canteen and AI-LMS product pages (sections above).
5. Create the Knowledge Graph entity: Wikidata item + Crunchbase profile with the same NAP and sameAs links.
6. Re-inspect `/products` and the two services pages in two weeks.
