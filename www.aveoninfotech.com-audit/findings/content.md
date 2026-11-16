# Content Quality, On-Page & Images: findings (re-audit 16 Nov 2026)

Scope: all 66 sitemap URLs, fetched raw (server-rendered HTML, HTTP 200 on all 66), parsed for `<main>` text, headings, metadata, links, images and JSON-LD. Word counts are main-content words (header/footer excluded; the shared "Ready to Transform" CTA, about 30 words, is included). Previous audit: 6 Nov 2026.

| Area | 6 Nov | 16 Nov |
|---|---|---|
| Content quality | 72 | **70** |
| On-page | 85 | **78** |
| Images | 88 | **82** |

The site gained quality pages since 6 Nov: five comparison pages and the enriched /partners page. The scores still drop because this crawl covered all 66 URLs. The 6 Nov audit sampled a handful. The full crawl found claim contradictions, guide publish dates that the repo history does not support, three orphan pages and a broken hero image.

---

## Status against the 6 Nov audit

| 6 Nov finding | Status | Evidence now |
|---|---|---|
| /partners very thin (124 w) | **Fixed** | 593 words, 6 H2s, FAQ |
| Non-branded intent under-served / needs comparison pages | **Partly fixed** | 5 `/comparisons/aveon-vs-*` pages live (1,217 to 1,414 w, FAQPage, sources, method disclosure). They are linked only from /comparisons and from each other (5 inlinks each). No product page, guide or /pricing links to them |
| Organization-only blog authorship | **Unchanged (owner decision)** | `author: Organization "Aveon Editorial Team"` on 10 guides. Improvement: visible byline and an on-page author box on the guides. New inconsistency: the 3 legacy posts use "Aveon Team" |
| Batch-published guides (same date) | **Changed, new risk** | 5 guides still have `datePublished = dateModified = 2026-11-03`. The other 5 now show **"Published 1 March 2024"** (see C-2) |
| Thin /academy, /solutions/by-state | Resolved on 6 Nov (renderer issue) | 723 w and 275 w respectively. /by-state is a hub, so its length is acceptable, but it now has contradictory claims (C-1) |
| /solutions/coimbatore thin/templated | **Unchanged** | 358 w (was 351). Now also has a broken hero image (I-1) and contradictory stats (C-1) |
| Deprecated meta keywords tag | **Unchanged** | Present on 66/66 pages |
| Unique titles/descriptions | **Still true** | 0 duplicate titles, 0 duplicate descriptions, templated-metadata check `site_risk: low` |
| Homepage title 60 chars | **Regressed slightly** | Now 61 chars |
| 100% image alt coverage | **Still true** | 351 `<img>`, 0 missing alt. The 58 empty alts are the aria-duplicated logo-marquee copy, which is correct |
| Alt descriptiveness not audited | **Now audited** | See I-2, I-3 |

---

## 1. Content: 70/100

### E-E-A-T breakdown (internal model weights)
| Factor | Score | Basis |
|---|---|---|
| Experience (20%) | 13/20 | Named testimonials with photos and titles (e.g. Dr. K. A. Chinnaraju, CIET). Named client logos. Kristu Jayanti College named as a reference deployment. The comparison pages give specific, first-hand demo questions. Weakened by an unverifiable named case study (C-3) and unsourced outcome percentages |
| Expertise (25%) | 16/25 | The NAAC/NBA/AICTE/NIRF/OBE guides are technically specific (RAF, binary accreditation, IIQA, CO-PO attainment) and cite naac.gov.in, nbaind.org, aicte-india.org, nirfindia.org. No named author or reviewer anywhere (owner decision), and /about/team has 107 words and no people |
| Authoritativeness (25%) | 13/25 | No press, awards or third-party citations on-site. The 4.2-star / 54-review GBP rating is not surfaced. Off-site authority is the known gap |
| Trustworthiness (30%) | 20/30 | Full NAP, privacy/terms, a transparent comparison methodology ("How we compared", "not stated" disclaimers, a correction address). Pulled down by contradictory stats (C-1), the backdated publish dates (C-2) and the unverified case study (C-3) |
| **Total** | **62/100** | |

### Word counts (main content)
- **Strong (1,000+):** home 1,858; college-erp 2,577; university-erp 1,729; school-erp 1,678; coe, hostel-mess, hrm-payroll, library, inventory (1,111 to 1,255); all 6 services (953 to 2,239); 10 guides (1,436 to 2,082); 5 comparisons (1,217 to 1,414); /comparisons 1,367; /blog 1,169.
- **Below floor:** see C-4 and C-5.

### Findings

| ID | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| C-1 | **High** | Pages contradict the confirmed company facts (founded 2012 = 14 years; 14 products; 1M+ students) | **/solutions/by-state:** "16+ Years Experience", "12 integrated product modules", "Regional teams", "24/7 technical support". The same page says "our team implements on campus from Coimbatore", and the GBP hours are Mon-Sat 08:30-18:30. **/solutions/coimbatore:** "12+ Years Serving Coimbatore" next to "Serving the region since 2012", and "50,000+ Students on Our Platform" against 1M+ elsewhere. **/blog/integrated-erp-vs-point-solutions:** "nine products that behave like one". **/services/custom-software-development:** "ISO 9001 certified process" (verify it is true) | Change these to 14+ years, 14 products and 1M+ students (or label 50,000+ as Coimbatore-only). Remove "regional teams" and "24/7" unless they are true. Remove the ISO claim unless a certificate exists. Read stats from `siteConfig` instead of hard-coding them |
| C-2 | **High** | Guide publish dates the repo does not support | 5 guides (`ai-in-higher-education`, `benefits-unified-campus-management`, `erp-migration-best-practices`, `naac-accreditation-checklist`, `obe-implementation-guide`) show "Published 1 March 2024" on the page and in `datePublished`. The repo's earliest commit is 2026-08-13. The NAAC guide file first appears in commit 386a054 (2026-09-10). On 6 Nov these same pages showed 2026-11-03 | If these guides were not live in March 2024 (on an older site, for example), set `datePublished` to the real first-publish date. Keep `dateModified` honest. The QRG treats misleading dates as a trust negative |
| C-3 | **High** | Named case study that may not be verifiable | /solutions/multi-campus-management: "How Symbiosis Unified 5 Campuses … 40% admin time reduced … 2 weeks implementation". Symbiosis is in Pune, but /solutions/by-state says detailed pages exist "only for states where we have named client institutions" (TN, Karnataka). "2 weeks" also conflicts with the four-week playbook stated elsewhere | Remove the case study unless Symbiosis is a client and has consented. If it is real, add the source and consent, and align the timeline. Use a real TN/KA client instead |
| C-4 | **Medium** | Three legacy blog posts are thin | integrated-erp-vs-point-solutions 196 w, ai-chatbot-for-students 132 w, erp-implementation-30-days 146 w (blog-post floor 1,500). Byline is "Aveon Team", not "Aveon Editorial Team" | Expand each to 1,200+ words with specifics: the 4-week plan as a table, chatbot query examples and data. Alternatively, merge them into the matching guide with a 301 redirect. Standardise the author name |
| C-5 | **Medium** | Thin, near-template product and sub-pages | lms-ai-chatbot 244 w, online-examination 239 w, fees-management 257 w (feature bullets plus related links). lms vs online-exam 5-gram Jaccard 0.48. IQAC sub-pages: aicte 314, iqac 318, nirf 327, unsdg 328, iqac-naac-nba hub 299. /solutions 156, multi-campus 344, student-retention 301, coimbatore 358, /careers 135, /about/team 107, /about 355 | Bring product pages to 800+ words using the pattern of the strong pages (coe, hostel-mess): workflow, screenshots, FAQ, compliance specifics. Prioritise fees-management, online-examination and lms-ai-chatbot because they target commercial queries |
| C-6 | **Medium** | E-E-A-T: no people anywhere | /about/team lists 4 departments and no names. /about has no founders or leadership and no company registration details. Guides are by "Aveon Editorial Team" (owner decision; this costs Expertise points but is not an error) | Short term: add leadership names and roles to /about, plus CIN/registered entity details. When possible, add a named reviewer ("Reviewed by …") to the accreditation guides |
| C-7 | **Medium** | Positioning conflict | /about: "We build exclusively for educational institutions". The site also has 6 non-education service pages (WMS, OMS, offshore teams for US companies) linked from the main nav | Reword /about ("Education is our core; we also build custom software"). Keep the services cluster clearly separate so topical focus is not diluted |
| C-8 | **Low** | Unsourced outcome statistics | student-retention-prediction "↑15-25% retention, ↑20-30% graduation, ↓40% workload". custom-software case studies "60% reduction", "40% faster" (unnamed clients). Uses US "GPA" wording | Cite a source or a named client, or remove. Use CGPA/Indian terms |
| C-9 | **Low** | Comparison pages: template overlap is acceptable | Pairwise 5-gram Jaccard 0.17 to 0.20. Each page is 62 to 68% unique content. The shared blocks are the methodology disclaimer (103 w), the demo-questions intro, the 5 demo questions, the implementation paragraph and the CTA. The vendor facts, tables, strengths, verdicts, FAQs and sources are all distinct | No action needed for duplication. Optionally tailor 1-2 of the 5 demo questions per competitor (e.g. live-class questions for Proctur, farm/extension modules for UniversityERP). Add `dateModified` visibly ("Checked 13 Nov 2026" is already in the body, which is good) |
| C-10 | **Low** | 5 guides still share one publish date | multi-campus, nba, aicte, nirf, what-is-campus-erp: `datePublished = dateModified = 2026-11-03` | Not an error. When adding original data later, update `dateModified` page by page |

### Readability (Flesch Reading Ease / FK grade, paragraph text)
- Guides: FRE 27 to 53, grade 10.7 to 14.6. That suits a B2B/compliance audience. The NAAC checklist (FRE 27, grade 14.6, 20.8 words per sentence) and the AICTE checklist (24.9 words per sentence) are the densest. Split sentences over 25 words.
- Homepage FRE 26.9 / grade 13.6 and /about 28.2 are heavy for marketing pages. /solutions/college-erp-tamil-nadu 18.9 (21 words per sentence) is the hardest page on the site.
- Comparisons FRE 30 to 52: fine.

### AI citation readiness: 74/100
- **Strengths:** guides open with definitional answers ("What is NAAC accreditation? The National Assessment and Accreditation Council (NAAC) is…"), question-form H2s (6 to 15 per guide), tables (NIRF, NBA, AICTE 4 to 5 each), dated sources to official bodies, and visible "Updated" lines. Comparisons have side-by-side tables, FAQPage schema, explicit "better fit for" verdicts, access-dated sources and a correction policy. These are highly quotable.
- **Gaps:** no FAQPage or Q&A block on the guides. No "key takeaways" summary at the top of any guide. /what-is-campus-erp, /multi-campus guide, /benefits, /ai-in-higher-education, /erp-migration, /pricing and the buyer's guide have **no external sources at all**. Stats such as "6 colleges ranked in NIRF" (nirf page) have no list of named institutions.
- **Fix:** add a 3 to 5 bullet "In short" box under each guide H1. Add 2 to 3 official-source citations to the six unsourced guides. Name the 6 NIRF-ranked client colleges.

---

## 2. On-page: 78/100

| ID | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| O-1 | **High** | Orphan pages (in the sitemap, zero internal links) | `/resources/college-erp-buyers-guide` (0 inlinks; the comparison pages mention a "twelve-criterion scorecard" but do not link to it), `/solutions/coimbatore` (0; not even /solutions/by-state links to it), `/about/team` (0) | Link the buyer's guide from /pricing, /comparisons, each comparison page and the college-erp page. Link /solutions/coimbatore from /solutions/by-state (the TN card), /contact and the footer. Link /about/team from /about |
| O-2 | **Medium** | Weakly linked money pages | Only reachable via a hub (1 to 2 inlinks): all 6 service pages (1 each, from /services); iqac/unsdg (1), aicte/naac/nba/nirf (2); college-erp-karnataka (1), student-retention (1), multi-campus (2), by-state (2). The comparisons cluster (5 each) and /comparisons (10) are not in the nav or footer. Sitewide nav/footer holds 28 links: products and top-level pages only | Add "Compare" to the nav or footer. Link each comparison from college-erp/university-erp ("Comparing vendors?"). Link the accreditation guides to their matching IQAC sub-pages and back. Add a "By state / Coimbatore" footer column |
| O-3 | **Medium** | Titles over 60 chars (with the " \| Aveon Infotech" suffix) | 20 of 66 are over 60. At 65 or more: proctur 70, integrated-erp post 70, offshore-team 68, warehouse-mgmt 68, academia-erp 67, canteen 66, custom-software 66, camu 66, school-erp 65, mastersoft 65. Also 61 to 64: home 61, coe, mobile-app, universityerp, nirf post, what-is-campus-erp post, naac, nba, products, erp-implementation post | For the 5 comparisons, use `title: { absolute: … }`. The title already starts with "Aveon vs", so the suffix is redundant. That removes 17 chars and brings all five under 55. For the rest, shorten the page part to 44 chars or less, e.g. "Offshore Dev Team in India for US Firms", "Warehouse Management Software (WMS) India" |
| O-4 | **Low** | Double brand in titles | /careers "Careers at Aveon \| … \| Aveon Infotech", /contact "Contact Aveon - … \| Aveon Infotech" | Drop "Aveon" from the page part |
| O-5 | **Low** | Short or weak titles | fees-management "Fees Management \| Aveon Infotech" (32), lms-ai-chatbot (33), privacy (31), terms (33) | e.g. "Fee Management Software for Colleges & Schools" |
| O-6 | **Low** | Meta description issues (templated-metadata check: `site_risk: low`, `templated_ratio: 0.0`, no shared CTA phrases) | `description_echoes_title` (medium signal) on 8: /services, online-examination, naac, nba, ai-process-automation, custom-software, mobile-app, naac-accreditation-checklist post. `brand_suffix_in_description` on 6: about, about/team, careers, partners, privacy, terms. Short descriptions (under 110 chars): privacy 64, terms 54, iqac sub-pages 86 to 99, 2 legacy posts 105 to 109 | Rewrite the 8 descriptions so they open with information the title does not carry. Expand the IQAC sub-page descriptions to 140 to 155 chars |
| O-7 | **Low** | Meta keywords tag on all pages | 66/66 | Remove from the layout metadata (unchanged since 6 Nov) |
| O-8 | **Low** | Heading hierarchy | H3 directly under the H1 with no H2: /solutions, /about/team, /careers. Skipped H2 to H4: ai-process-automation, order-management, warehouse-management. Every page has exactly 1 H1 | Promote the card titles to H2 or add a section H2 |
| O-9 | **Low** | Homepage H1 carries no keyword | "The Connected Campus / Starts Here." (two spans and a `<br/>`) | Consider a keyword-bearing H1 or eyebrow line ("Campus ERP & LMS for Universities and Colleges") |
| O-10 | **Low** | One OG image for all pages | Only 2 distinct `og:image` URLs across 66 pages | Generate per-route `opengraph-image` for the comparisons and guides (highest share value) |
| ✓ | Pass | Canonicals self-referencing on 66/66. No `noindex`. No duplicate titles or descriptions. The only internal link target outside the sitemap is `/get-started` (1 link) | | |

---

## 3. Images: 82/100

Inventory: 351 `<img>` tags, 82 unique sources. 216 go through `next/image` and **all are served as AVIF** (77/77 tested with an AVIF Accept header). The rest are SVG (logo, platform icons). 100% have `width`/`height` (no CLS from images). 257 use `loading="lazy"`. The product heroes use `fetchPriority="high"` and responsive `sizes`.

| ID | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| I-1 | **High** | Broken hero image | /solutions/coimbatore: `/products/college-erp-team.webp` returns **404** (raw and every `_next/image` width). It is referenced at `app/(site)/solutions/coimbatore/page.tsx:75`, and the file does not exist in `public/products/` | Point it to an existing asset (e.g. `erp-team.jpg` or `custom-software-team.webp`) or add the file. Ideally use a real Coimbatore office or campus photo |
| I-2 | **Medium** | Client-logo alts are abbreviations | 27 logos with alts like "SNR", "SSR", "GTN", "SAN", "KSG", "SPC", "JSB", "MCET", "VMKVMCH". Some logos appear twice under different files (gtn.png and gtn (2).png; VMKVMCH-logo2 1.png and VMKVMCH-.png) | Use full institution names ("Sri Ramakrishna College of Arts & Science logo"). The names are entity/E-E-A-T signals. De-duplicate the repeated logos |
| I-3 | **Low** | One illustration with the same alt on 36 pages | `/images/illo-delivery.png`, alt "Connected campus operations, end to end", served with a 3840w 2x variant (`srcSet 1x/2x`, no `sizes`) | Make it decorative (`alt=""`) or page-specific. Use the `sizes` prop so the 2x 3840w variant is not used for a ~550px slot |
| I-4 | **Low** | Above-the-fold hero images lazy-loaded | First "hero" image has `loading="lazy"` on /about, /careers, /partners, /products | Add `priority` (Next 16: `preload`/`fetchPriority="high"`) to the LCP image on those templates |
| I-5 | **Low** | Heavy source assets and poor filenames | Source PNGs are large (e.g. `hostel mess erp.png` 3.06 MB raw; served AVIF variants 216 KB at 3840w, 47 KB at 1080w). Filenames contain spaces, double spaces and parentheses, or are meaningless: `client  logos/`, `psg cas.png`, `grievance(1).png`, `la.png`, `li.png`, `c.png`, `SNR.png 1.png` | Rename to kebab-case descriptive names (e.g. `library-management-dashboard.webp`). Pre-convert the large PNGs to WebP/AVIF. Optionally cap `deviceSizes` at 2048 |
| ✓ | Pass | AVIF delivery, explicit dimensions, responsive `sizes` on product heroes, decorative duplicates correctly `alt=""`, named testimonial photos | | |

---

## Priority order
1. I-1: fix the broken Coimbatore hero image (5 minutes).
2. C-1: make every stat match the site facts (14 years, 14 products, 1M+). Remove "16+ years", "12 modules", "nine products", "regional teams", "24/7", and the ISO claim unless verified.
3. C-3: remove or verify the Symbiosis case study.
4. C-2: correct the "Published 1 March 2024" dates if they are not genuine.
5. O-1 / O-2: link the 3 orphans. Add comparisons and the buyer's guide to the nav/footer and the college/university ERP pages.
6. O-3: `title.absolute` for the comparison pages. Shorten the other titles of 65+ chars.
7. C-4 / C-5: expand or merge the 3 legacy posts. Expand fees-management, online-examination and lms-ai-chatbot.

## Structured findings (audit-data.json, Content Quality category)
```json
{
  "category": "Content Quality",
  "audit_date": "2026-11-16",
  "scores": {"content": 70, "onpage": 78, "images": 82, "eeat": 62, "ai_citation_readiness": 74},
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}},
  "findings": [
    {"id": "C-1", "severity": "high", "title": "Stats contradict confirmed facts", "urls": ["/solutions/by-state", "/solutions/coimbatore", "/blog/integrated-erp-vs-point-solutions", "/services/custom-software-development"]},
    {"id": "C-2", "severity": "high", "title": "Guide publish dates 2024-03-01 predate repo history", "urls": ["/blog/ai-in-higher-education", "/blog/benefits-unified-campus-management", "/blog/erp-migration-best-practices", "/blog/naac-accreditation-checklist", "/blog/obe-implementation-guide"]},
    {"id": "C-3", "severity": "high", "title": "Unverified Symbiosis case study", "urls": ["/solutions/multi-campus-management"]},
    {"id": "C-4", "severity": "medium", "title": "Three legacy posts under 200 words", "urls": ["/blog/integrated-erp-vs-point-solutions", "/blog/ai-chatbot-for-students", "/blog/erp-implementation-30-days"]},
    {"id": "C-5", "severity": "medium", "title": "Thin template product/sub-pages", "urls": ["/products/fees-management", "/products/online-examination", "/products/lms-ai-chatbot", "/products/iqac-naac-nba/*", "/solutions"]},
    {"id": "C-6", "severity": "medium", "title": "No named people on team/about pages", "urls": ["/about", "/about/team"]},
    {"id": "C-7", "severity": "medium", "title": "'Exclusively education' vs non-education services", "urls": ["/about", "/services/*"]},
    {"id": "O-1", "severity": "high", "title": "Orphan pages", "urls": ["/resources/college-erp-buyers-guide", "/solutions/coimbatore", "/about/team"]},
    {"id": "O-2", "severity": "medium", "title": "Comparisons and services weakly linked", "urls": ["/comparisons/*", "/services/*", "/products/iqac-naac-nba/*"]},
    {"id": "O-3", "severity": "medium", "title": "20 titles over 60 chars", "count": 20},
    {"id": "O-6", "severity": "low", "title": "Descriptions echo title / brand in description", "count": 14},
    {"id": "O-7", "severity": "low", "title": "Meta keywords tag sitewide", "count": 66},
    {"id": "I-1", "severity": "high", "title": "Broken hero image 404", "urls": ["/solutions/coimbatore"]},
    {"id": "I-2", "severity": "medium", "title": "Client logo alts are abbreviations", "count": 27},
    {"id": "I-4", "severity": "low", "title": "Lazy-loaded hero images", "urls": ["/about", "/careers", "/partners", "/products"]}
  ]
}
```
