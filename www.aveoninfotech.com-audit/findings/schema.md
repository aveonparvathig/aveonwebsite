# Schema / Structured Data — findings

**Score: 95/100 — a genuine strength.**

## Detected @types by page
| Page | Schema types |
|---|---|
| / | Organization, LocalBusiness, WebSite, PostalAddress, OpeningHoursSpecification, Country, ImageObject |
| /products/college-erp | + SoftwareApplication, FAQPage (Question/Answer), BreadcrumbList (ListItem) |
| /blog/what-is-campus-erp | + Article, WebPage, BreadcrumbList |
| /products/iqac-naac-nba/naac | + FAQPage (Question/Answer) — **no BreadcrumbList** |
| /solutions/college-erp-tamil-nadu | + BreadcrumbList only — **no FAQ / SoftwareApplication** |
| /contact | + FAQPage |
| /about | base sitewide only |

## Validation
- Homepage Organization: `foundingDate 2012`, legalName, email, telephone, full PostalAddress (Coimbatore 641004), 4× `sameAs` (LinkedIn, Instagram, X, Facebook), `knowsAbout` array. Clean.
- LocalBusiness: `parentOrganization` linked, hasMap, openingHoursSpecification (Mon–Sat 08:30–18:30), areaServed India.
- GSC Rich Results: **PASS** (breadcrumbs detected on product page).

## Findings
| Severity | Finding | Fix |
|---|---|---|
| Medium | No AggregateRating/Review despite 4.2★/54 GBP reviews | Add legitimate AggregateRating to Organization/SoftwareApplication |
| Low | Schema uneven: /solutions/* lack FAQ/SoftwareApplication; NAAC page lacks Breadcrumb | Standardise: Breadcrumb on every deep page, FAQ where Q&A exists, SoftwareApplication on all product/solution pages |
