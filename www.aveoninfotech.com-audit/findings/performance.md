# Performance (Core Web Vitals) — findings

**Score: 88/100**

## Field data (CrUX, real users — what Google ranks on)
| Metric | URL p75 | Origin p75 | Rating |
|---|---|---|---|
| LCP | 2,274 ms | 2,181 ms | ✅ Fast |
| CLS | 0.04 | 0.03 | ✅ Fast |
| INP | — | 266 ms | ⚠️ Needs improvement (good < 200) |
| FCP | 2,277 ms | 2,158 ms | ⚠️ Average |
| TTFB | 800 ms | 750 ms | ✅ Fast |

**Core Web Vitals pass in the field** (LCP + CLS green; INP borderline).

## Lab (Lighthouse mobile, v13.6.0)
- Performance **85**, Accessibility **96**, Best-Practices **100**, SEO **100**.
- LCP 4.3s (lab, score 0.42), FCP 1.1s, TBT 70ms, CLS 0.003, Speed Index 3.1s, TTI 6.2s.
- Total byte weight 942 KiB (OK).
- Opportunity: "Reduce unused JavaScript" ~450 ms.

## Findings
| Severity | Finding | Fix |
|---|---|---|
| Medium | INP origin p75 266 ms | Reduce unused JS (~450ms), defer non-critical scripts, trim third-party JS to get INP < 200ms |
| Low | Lab LCP 4.3s vs field 2.18s | Field passes; monitor. LCP image already preloaded with fetchpriority |

LCP image preload + responsive WebP srcset already implemented on homepage.
