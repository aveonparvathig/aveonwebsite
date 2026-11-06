# Local SEO, On-Page & Images — findings

## Local SEO — 82/100
- Sitewide `LocalBusiness` schema: exact NAP (33 Kathir Avenue, Hope College, Coimbatore, Tamil Nadu 641004), hours Mon–Sat 08:30–18:30, geo map link, areaServed India.
- Google Business Profile exists: **4.2★ / 54 reviews** (per project records).
- Dedicated local pages: `/solutions/coimbatore`, `/solutions/college-erp-tamil-nadu`, `/solutions/college-erp-karnataka`, `/solutions/by-state`.

| Severity | Finding | Fix |
|---|---|---|
| Medium | 54 reviews not surfaced on-site or in schema | Testimonials section + legitimate AggregateRating |
| Medium | Local pages thin/templated (coimbatore 351w) | Add named institutions, local case studies; build India edtech citations |

## On-Page — 85/100
- Unique titles/meta per page; homepage title 60 chars; meta description within limits.
- Correct canonical, og:/twitter: tags, theme-color.
| Severity | Finding | Fix |
|---|---|---|
| Medium | Non-branded intent under-reinforced by internal anchors | Topic-cluster internal links on money terms |
| Low | Deprecated meta keywords tag present | Remove |

## Images — 88/100
- **100% alt coverage** (homepage 81/81 images have alt; product page 4/4).
- Next.js WebP + responsive srcset + fetchpriority on LCP image.
| Severity | Finding | Fix |
|---|---|---|
| Low | Alt descriptiveness not audited at scale | Spot-check; ensure OG images page-specific |
