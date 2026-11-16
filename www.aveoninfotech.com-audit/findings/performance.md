# Performance (Core Web Vitals) - findings (refreshed 16 Nov 2026)

**Score: 86/100** (6 Nov: 88/100). Source: Google API (field data, CrUX 28-day rolling to 14 Nov) + PSI Lighthouse 13.6.0 mobile lab.

## Score evidence
- Field LCP passes (origin 2,326 ms, homepage 2,251 ms; 80% good). No penalty.
- Field CLS passes (0.03 origin and homepage; 98% good). No penalty.
- Field INP is above the "good" limit: origin 261 ms, homepage 222 ms (71% good, 23% needs improvement, 6% poor). Main deduction (-8).
- Lab TBT rose to 230-400 ms on every tested page (6 Nov homepage: 70 ms). Deduction (-4).
- FCP 2.1-2.3 s and TTFB 750-890 ms (field) are "needs improvement". Minor deduction (-2).

## Field data (CrUX)
| Metric | Homepage p75 | Origin p75 (PSI) | Origin latest weekly (CrUX History, wk to 7 Nov) | 6 Nov origin | Rating |
|---|---|---|---|---|---|
| LCP | 2,251 ms | 2,326 ms | 2,181 ms | 2,181 ms | Good |
| INP | 222 ms | 261 ms | 229 ms | 266 ms | Needs improvement (>200) |
| CLS | 0.03 | 0.03 | 0.03 | 0.03 | Good |
| FCP | 2,185 ms | 2,324 ms | 2,120 ms | 2,158 ms | Needs improvement |
| TTFB | 812 ms | 844 ms | 746 ms | 750 ms | Borderline (good <= 800) |

CrUX History trends: LCP improving (-10.5% over the window), CLS improving, TTFB stable, FCP degrading (+13.9%: 1,745 -> 1,988 ms average). INP history is sparse (95 ms Jul, 211 ms 31 Oct, 229 ms 7 Nov): INP moved from good to needs improvement between Jul and Oct. The PSI origin CLS value of "1" is a rounding artifact (CrUX History confirms 0.03).
PSI returns origin-level field data for the three sub-pages (not enough URL-level traffic), so per-URL field values exist only for the homepage.

## Lab (PSI mobile, Lighthouse 13.6.0)
| URL | Perf | A11y | BP | SEO | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|---|
| / | 96 | 100 | 96 | 100 | 1.1 s | 230 ms | 0 | 1.2 s |
| /products/college-erp | 89 | 96 | 96 | 100 | 1.1 s | 400 ms | 0 | 4.0 s |
| /comparisons/aveon-vs-camu | 95 | 96 | 96 | 100 | 1.1 s | 250 ms | 0 | 2.4 s |
| /get-started/school-erp | 93 | 97 | 96 | 69 | 1.0 s | 330 ms | 0 | 1.0 s |

vs 6 Nov homepage: Perf 85 -> 96, LCP 4.3 s -> 1.1 s, TBT 70 -> 230 ms, Best-Practices 100 -> 96, A11y 96 -> 100. Lab INP is not measured; TBT is the proxy.
SEO 69 on /get-started/school-erp is the intentional noindex (Lighthouse "Page is blocked from indexing"); not a defect if the get-started pages are meant to stay out of the index.

## Findings
| Severity | Finding | Fix |
|---|---|---|
| Medium | Field INP 222-261 ms (>200). Lab TBT up to 400 ms on /products/college-erp (also flagged: LCP breakdown, Speed Index 4.0 s) | Cut unused and legacy JS (flagged on all 4 pages), defer third-party, chat widget and tracking scripts, break up long tasks |
| Medium | TBT regression 70 -> 230 ms on homepage since 6 Nov | Check what shipped since (event tracking, chatbot, enquiry popup); load on interaction |
| Low | Render-blocking resources and network dependency tree flagged on all pages | Inline critical CSS or defer non-critical CSS |
| Low | FCP trend degrading and TTFB ~800 ms | Review HTML caching and edge delivery; FCP follows TTFB |
| Low | color-contrast failures on college-erp, camu, get-started pages | Fix text/background contrast |
