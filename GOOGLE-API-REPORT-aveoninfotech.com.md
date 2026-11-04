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

## 6. Pending (needs the service-account key)

- Search Console: 28-day queries, quick-win detection (positions 4–10 with impressions), per-page clicks.
- URL Inspection batch of the 59 sitemap URLs (indexation truth).
- GA4 organic landing pages and the new AI Assistants channel.

Service account: `claude-seo@aveon-seo.iam.gserviceaccount.com` (already added to Search Console with Full permission). Save its JSON key at `C:\Users\Aveon\.config\claude-seo\service_account.json`, then run `/seo google audit all` again.
