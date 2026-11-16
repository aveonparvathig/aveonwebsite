# Google SEO Data - findings (16 Nov 2026)

Credential tier: **2 (Full)** - API key, service account (GSC Full) and GA4 all available. GSC property sc-domain:aveoninfotech.com; GA4 property 562311676.
Freshness: GSC 28d ending 13 Nov (2-3 day lag); CrUX 28d to 14 Nov; GA4 to 15 Nov.

## Google updates check (seo_updates.py --since 2026-10)
Five entries, all **documentation changes** (1 Oct gen-AI content guidance, 6 Oct Retry-After, 8 Oct UGC Fresh Data, 16 Oct Indexing API quota, 21 Oct Control what you share). **No confirmed core or spam ranking update since Oct 2026.** Caveat: the dataset was last verified 22 Oct (25 days old), so it cannot rule out an update between 22 Oct and today. Changes below are not attributed to a Google update.

## 1. GSC: last 28d (17 Oct-13 Nov) vs previous 28d (19 Sep-16 Oct)
Totals (totals_complete: true):
| Metric | Current | Previous | Change |
|---|---|---|---|
| Clicks | 703 | 418 | +68% |
| Impressions | 7,043 | 4,454 | +58% |
| CTR | 9.98% | 9.38% | +0.6 pt |
| Avg position | 17.7 | 9.6 | worse (mix effect, see below) |

The position drop is a mix effect, not a ranking loss: 335 non-brand queries now appear (190 before), led by "higher education inventory management" (759 impressions at avg position 74). Brand positions are 1-4.

Branded vs non-branded (query rows containing "aveon"; the query list is not a complete total, so the split covers listed rows only):
| Segment | Clicks cur (prev) | Impressions cur (prev) |
|---|---|---|
| Branded (25 queries) | 454 (225) | 1,889 (1,519) |
| Non-branded (335 queries; prev 190) | 12 (14) | 2,403 (927) |
Non-brand is about 2% of clicks. Brand clicks doubled. Non-brand impressions are up 2.6x with no click gain.

Top queries (clicks/impressions/position): aveon infotech 222/476/1.0; aveon 71/726/3.8; aveon infotech private limited 59/176/1.2; aveon erp 38/144/2.2; aveon student erp 31/129/3.9; aveon cms 7; aveon staff erp 7; aveon cms login 5.
Non-brand with impressions: higher education inventory management 759 (pos 74); erp rajasthan university 138 (pos 5.5, 0 clicks); canteen management system 80 (pos 51); payroll evon 57 (pos 3.9); campus one erp 47 (pos 8.8); campus management system 38 (pos 8.3).
Quick wins: "erp rajasthan university" (pos 5.5, 138 impressions, 0 clicks); "aveon student erp login" (pos 4.2, 53 impressions, 7.5% CTR).

Top pages (clicks cur vs prev): / 538 vs 308 (3,385 impr); /careers 78 vs 0 (513 impr, new); /college-erp.php 29 vs 60 (legacy URL, 1,072 impr); /products/college-erp 13 vs 7 (586 impr); /?utm_source=google&utm_medium=organic&utm_campaign=gbp 11 vs 0 (GBP-tagged URL appears as a separate page, 461 impr); /products/school-erp 7 vs 4 (513 impr); /solutions/college-erp-tamil-nadu 6 vs 0; /about 5 (1,194 impr); /solutions/coimbatore 5 vs 0.

**Comparison pages and /get-started:** the only comparisons data is /comparisons (13 impressions, 0 clicks, pos 5.8) plus three query hits ("aveon erp", "aveon staff erp", "4.0.0", 1 impression each). **No impressions or queries for any aveon-vs-* page, and none for any /get-started page** (expected: get-started is noindex; aveon-vs-mastersoft is not yet known to Google).

## 2. URL Inspection
| URL | Verdict | State | Last crawl |
|---|---|---|---|
| / | PASS | Submitted and indexed, canonical match | 11 Nov |
| /comparisons | PASS | Submitted and indexed, canonical match | 5 Nov |
| /comparisons/aveon-vs-mastersoft | NEUTRAL | **URL is unknown to Google** (live page returns 200 and is in sitemap.xml) | never |
| /products/college-erp | PASS | Submitted and indexed | 6 Nov |
| /products/school-erp | PASS | Submitted and indexed | 6 Nov |
| /get-started | NEUTRAL | Excluded by noindex tag (crawled 10 Nov, fetch OK) | 10 Nov |

The /get-started noindex is correct if the ads landing pages should stay out of search; confirm it is deliberate. For mastersoft: request indexing and resubmit the sitemap. The other four comparison pages were not inspected.

## 3. Sitemaps
https://www.aveoninfotech.com/sitemap.xml: last submitted 10 Nov, not pending, 0 errors, 0 warnings, **61 URLs submitted**. The live sitemap now lists **66 URLs** (includes all 5 aveon-vs-* pages), so GSC is behind. Resubmit.

## 4. Core Web Vitals
See performance.md. Origin field: LCP 2,326 ms good, INP 261 ms needs improvement, CLS 0.03 good. Homepage field: LCP 2,251, INP 222, CLS 0.03. PSI mobile performance: / 96, college-erp 89, aveon-vs-camu 95, get-started/school-erp 93; TBT 230/400/250/330 ms.

## 5. GA4 (property 562311676, 19 Oct-15 Nov)
**Data only starts 4 Nov** (no sessions by channel before then), so there is no previous-period baseline and no pre-Ads trend. Tracking was likely installed or fixed around 4 Nov.
Sessions by channel (19 Oct-15 Nov, effectively 4-15 Nov): Direct 304; Organic Search 208 (159 users); Paid Search 109; Referral 30 (many are IP or internal hosts such as 61.1.186.67 and localhost:4200); AI Assistant 13 (chatgpt.com); Organic Social 5; Unassigned 16; Cross-network 4.
Organic daily sessions: 4 Nov 11, 5 Nov 32, 6 Nov 17, 7 Nov 3, 8 Nov 5, 9 Nov 5, 10 Nov 30, 11 Nov 33, 12 Nov 24, 13 Nov 21, 14 Nov 17, 15 Nov 10. Weekly sums: 103 (4-10 Nov) vs 105 (11-15 Nov, 5 days), so organic is flat to slightly up. Organic landing pages: / 120, /careers 21, /about 7, /solutions 6, /contact 5, /products/college-erp 5.
Paid (google / cpc) since 11 Nov: **102 sessions, 96 users, 47 engaged (46%)**; by day: 11 Nov 19, 12 Nov 36, 13 Nov 32, 14 Nov 14, 15 Nov 1 (Saturday window 08:30-13:30 only). Campaign names: "Search - College & University ERP - India" 34, "Search - School, Hostel & Fees - India" 10, "(organic)" 54 (campaign attribution missing on 53% of cpc sessions), (not set) 4. Landing pages: /products/school-erp 44, /get-started 28, /get-started/hostel-mess 8, /products/hostel-mess 8, /get-started/school-erp 5, / 3.
Events from cpc since 11 Nov: form_start 14, pricing_view 14, form_submit 2, demo_request 1, whatsapp_click 1, chatbot_open 1. All traffic 11-15 Nov: form_submit 19, demo_request 14, form_start 57, phone_click 3, contact_click 4, cta_click 4, whatsapp_click 1.
**GA4 key events count is 0 for every channel: no events are marked as key events**, so GA4 and any Ads import report no conversions. GA4 has no spend data, so cost per lead is not computed here.

## Findings
| Priority | Finding | Action |
|---|---|---|
| High | No GA4 key events defined (0 across channels) | Mark demo_request, form_submit, phone_click, whatsapp_click, contact_click as key events; import to Google Ads |
| High | /comparisons/aveon-vs-mastersoft unknown to Google; GSC sitemap shows 61 of 66 URLs | Resubmit sitemap, request indexing for all 5 comparison pages |
| Medium | 53% of cpc sessions carry campaign "(organic)"; GBP utm URL appears as its own page (461 impr) | Fix auto-tagging or UTM on ads; confirm utm variants canonicalise to /; consider a clean GBP link |
| Medium | Non-brand: 2,403 impressions, 12 clicks. Legacy .php URLs (/college-erp.php 1,072 impr, /our-solutions.php 836, /contact.php, /our-team.php) still show in search | Verify 301s from legacy URLs to the new pages |
| Medium | "erp rajasthan university" pos 5.5, 138 impr, 0 clicks | Title/snippet rewrite or dedicated page, if relevant |
| Low | GA4 referral noise from IPs and localhost | Add internal traffic filter |
| Low | Google updates dataset last verified 22 Oct | Refresh the dataset |
