# Off-Site Authority & Backlinks - findings (refreshed 16 Nov 2026)

**Status: INSUFFICIENT DATA for a numeric Backlink Health Score (Tier 0: only Common Crawl domain metrics available; fewer than 4 scoring factors have data). Previous 35/100 was a judgement, not a computed score.**
Sources: Common Crawl web graph cc-main-2026-jan-feb-mar (domain-level, confidence 0.50, quarterly). Moz, Bing Webmaster and Keywords Everywhere keys not configured. No referring-link list was supplied, so the verify crawler was not run.

## What changed since 6 Nov 2026
- Nothing in the data. Same CC release (Jan-Mar 2026 graph), cached values identical: n_hosts 2, PageRank 4.02e-09, PR rank 51,994,670, harmonic centrality rank 10,939,246. No newer web graph exists yet, so CC cannot show links won in Nov. Any new links will only appear in the next release.
- New in this report: competitor comparison and a realistic shortlist. Anchor-text mix, toxic-link ratio and a true referring-domain list remain unmeasurable without Moz/Bing/DataForSEO.

## Competitor comparison (Common Crawl, confidence 0.50)
| Domain | In rankings | Hosts | PageRank rank | Harmonic rank |
|---|---|---|---|---|
| aveoninfotech.com | yes | 2 | 51,994,670 | 10,939,246 |
| iitms.co.in (MasterSoft) | yes | 3 | 524,076 | 249,641 |
| academiaerp.com | yes | 28 | 547,077 | 150,231 |
| camudigitalcampus.com | in crawl, not ranked | n/a | n/a | n/a |
| proctur.com | not in crawl | n/a | n/a | n/a |
Prior 10 Nov cache (other domains): camu.in rank 3,127,217 / 9 hosts; mastersofterp.com rank 4,445,201 / 8 hosts. Caveat: n_hosts is a graph-derived host count, not a full referring-domain count. camudigitalcampus.com and proctur.com results likely mean the brand lives on another domain (camu.in) or the host is outside the graph; do not read them as zero links.

## Findings
1. **Critical - authority gap is ~100x in rank.** Aveon PR rank ~52M vs ~0.5M for IITMS and Academia. Evidence: table above. Fix: build referring domains (shortlist below).
2. **High - only 2 referring hosts in the graph.** Evidence: n_hosts 2 (likely incl. own subdomains/portal). Fix: target 20-30 quality referring domains in 3 months; recheck at next CC release and with Moz free key.
3. **High - measurement blind spot.** Anchor text, spam score, follow ratio, velocity and geo are all unmeasured. Fix: add free Moz key (2,500 rows/month) and verify the site in Bing Webmaster Tools (own-site backlinks); then rerun.
4. **Medium - toxic links: none observed, but unverifiable.** No spam data at Tier 0. Fix: re-check once Moz/Bing is live.
5. **Medium - hidden Powered-by link in client ERP portals** (per project memory) is an untapped, on-brand source if the vendor-info config is enabled on live client portals; use a descriptive anchor, not exact-match keywords, and avoid sitewide footer spam patterns.
6. **Context:** GSC shows 98% of clicks branded; non-branded terms sit on page 2+. Authority is the lever, as are AI engines needing third-party corroboration (Perplexity invisible).

## Realistic link-building shortlist (Indian education-ERP vendor)
1. Review/listing profiles with reviews from existing clients: G2, Capterra, GetApp, SoftwareSuggest, TrustRadius, SoftwareWorld (most are nofollow/ugc but feed AI citation and buyer intent).
2. Client links: ask 5-10 live institutions for a "Our ERP partner" or case-study mention on their site (needs client consent, already a known blocker).
3. Education bodies and events: AICTE/UGC-affiliated college association pages, state private-college associations, EdTech conference exhibitor/sponsor pages (Coimbatore/Tamil Nadu first).
4. Indian edtech media: guest articles/expert quotes in EdTechReview India, ETEducation, Indian education blogs, plus Qwoted/Featured/Source of Sources for press requests (HARO equivalent).
5. Local/business directories with NAP identical to GBP (641004): Justdial, IndiaMART, Sulekha, Coimbatore chamber/CODISSIA listings, Clutch/GoodFirms/TopDevelopers.
6. Data-led content link bait: NEP 2020 / NAAC-NBA compliance checklist, fee-collection benchmarks; pitch to college HR/admin blogs.
7. Partner/technology ecosystem: payment gateways, SMS/WhatsApp API vendors, hardware (biometric) partners' "integrations/partners" pages.
8. Competitor-gap: use Moz Link Intersect on academiaerp.com (28 hosts) to copy its sources once Moz is configured.
Avoid: paid link packages, PBNs, exact-match anchor blasts.

## KPIs
Referring domains (target 20-30 by Feb 2027), branded vs descriptive anchor mix (<10% exact-match), non-branded clicks in GSC. Re-run after the next Common Crawl release.
