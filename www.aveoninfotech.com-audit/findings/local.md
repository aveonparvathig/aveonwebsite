# Local SEO findings (16 Nov 2026; baseline 6 Nov = 82/100 local part)

Business type: hybrid (Coimbatore office, serves institutions across India). Vertical: B2B software / education ERP (no vertical-specific LocalBusiness subtype applies; see schema).

## Score: 74/100
| Dimension | Weight | Score | Note |
|---|---|---|---|
| GBP signals | 25 | 19/25 | GBP exists and is linked via a Maps search URL (hasMap) plus Maps links on /contact and /solutions/coimbatore. No place-ID/CID link, no embed, no on-site posts/photos evidence. |
| Reviews and reputation | 20 | 11/20 | 4.2 stars / 54 reviews (project records, not verified on-page). No aggregateRating, no review widget, no on-site testimonials tied to GBP. 4.2 is below the 4.5 trust band. |
| Local on-page | 20 | 15/20 | Address, phone, hours in footer and pages; dedicated Coimbatore, Tamil Nadu and Karnataka pages with unique titles. Pages are templated. |
| NAP and citations | 15 | 9/15 | Site NAP is fully consistent. Off-site citation coverage mostly unverifiable or unconfirmed (see below). |
| Local schema | 10 | 7/10 | Valid LocalBusiness with address, hours, phone, hasMap, @id, parentOrganization. Missing geo, url, priceRange; generic type; no aggregateRating. |
| Local links/authority | 10 | 5/10 | sameAs only LinkedIn, Instagram, X, Facebook. No Justdial, IndiaMART, Clutch or GoodFirms linkage. Memory notes zero or weak backlinks. |

## What works
- NAP matches the canonical record on every source checked (home, /contact, /solutions/coimbatore, footer text, JSON-LD): "33, Kathir Avenue, Andal Veedi 3rd Street, Hope College", Coimbatore, Tamil Nadu 641004, IN; +91 87540 06483; tel: links all +918754006483; hours 08:30-18:30 Mon-Sat.
- Sitewide LocalBusiness JSON-LD with stable @id (#localbusiness), linked to the Organization (#organization).
- State pages exist (college-erp-tamil-nadu, college-erp-karnataka) with unique titles ("College ERP Software in Tamil Nadu | Aveon Infotech"); the Coimbatore title is "College ERP Coimbatore | Higher Education | Aveon Infotech".
- IndiaMART listing exists (title "Software Services and Development Service Provider | Aveon Infotech Pvt. Ltd., Coimbatore") with addressLocality Coimbatore and pincode 641004 present. Facebook page reachable (200).

## NAP consistency table
| Source | Street | Pincode | Phone | Hours |
|---|---|---|---|---|
| Home / contact / coimbatore HTML | match | match | match | 08:30-18:30 |
| JSON-LD (LocalBusiness) | match | match | "+91 87540 06483" | Mon-Sat 08:30-18:30 |
| GBP (canonical, per brief) | match | match | match | match |
| IndiaMART | street line not found in fetched HTML | 641004 | not verified | n/a |
| Justdial | URL guess returned a page but no Aveon NAP could be confirmed | - | - | - |
| LinkedIn, Clutch, GoodFirms | blocked (HTTP 403) | - | - | - |
| Facebook | reachable, content is login-gated | - | - | - |
| Sulekha | not located | - | - | - |

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| High | No review signals on site or in schema | 0 matches for aggregateRating/ratingValue on all 3 pages | Add a testimonials/review section that shows real GBP reviews with a link to the GBP; add AggregateRating only if it matches visible, genuine reviews. Do not mark up self-served reviews of the business on its own pages if guidelines disallow; use Review markup on case studies instead if unsure. |
| High | Review velocity and response rate unknown, rating 4.2 | Only the project-records figure | Run a steady review request flow (post go-live, WhatsApp link to review URL); reply to every review. Export GBP Insights to confirm cadence. |
| Medium | LocalBusiness has no geo, url or priceRange | JSON-LD lacks "geo" (0 matches) | Add geo with 5-decimal lat/long taken from the GBP pin, plus url, and hasMap with the real place URL (maps.app or cid) instead of a search query. |
| Medium | Generic LocalBusiness type and thin description | "@type":"LocalBusiness" only | Use an array such as ["LocalBusiness","ProfessionalService"] (or keep Organization as SoftwareCompany-like via the Organization node); extend description to name Coimbatore and ERP. |
| Medium | Citations not linked in sameAs and not confirmed | sameAs has 4 social URLs only; Justdial, Sulekha, Clutch, GoodFirms unverified | Claim or create Justdial, IndiaMART, Sulekha, Clutch, GoodFirms, plus edtech directories (Shiksha, EdTechReview, G2, Capterra). Use identical NAP string. Add them to sameAs. |
| Medium | IndiaMART listing NAP not fully verified | Pincode and city present; street line and phone not seen | Open the listing logged in, make street, phone and name identical to the canonical form. |
| Medium | Location pages templated and thin | Baseline 6 Nov: Coimbatore 351 words; state pages share one template (same Kathir/ld counts) | Add named local institutions, local case studies, local testimonials, state-specific compliance (TN/Karnataka university affiliation, e.g. Anna University, VTU), FAQ. |
| Low | State pages repeat the Coimbatore office address in the footer only | Expected for hybrid, fine | Keep address on state pages as a "serviced from Coimbatore" statement rather than implying branch offices. |
| Low | Maps link is search-based, not an embed | hasMap uses maps/search query | Add an embed or the GBP place link on /contact for stronger GBP association. |
| Info | Proximity (about 55 percent of ranking variance) is outside our control; B2B queries are mostly non-local | - | Focus on service pages and off-site authority. |

## Limitations
No paid GBP/DataForSEO data. GBP category, photos, posts, Q&A, review velocity and response rate not assessed. LinkedIn, Clutch and GoodFirms returned 403 to automated fetch; Justdial and Facebook content was not verifiable. Citation profile URLs were guessed except sameAs ones, so absence of data does not prove absence of listings.
