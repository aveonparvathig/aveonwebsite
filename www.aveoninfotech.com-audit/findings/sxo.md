# Search Experience (SXO) — findings

**SXO Gap Score: 54/100** (separate from the SEO Health Score)
Audited 16 Nov 2026. 7 money keywords, 10 URLs (7 organic targets + 3 paid landing pages), all fetched with `render_page.py --mode auto` (none detected as SPA; server-rendered HTML = what users see).

## Headline

1. **The SERPs for the two biggest keywords are listicle/comparison SERPs, not vendor SERPs.** "college erp software" and "school management software" are ~50-60% "Top 7 / Top 10 / Best ... in India" roundups (Techjockey, Geekchamp, SourceForge, Senseselec, Jupsoft blog, Nextwhatbusiness). Aveon answers with a single-vendor product page. That page type still ranks (Jupsoft, MasterSoft, Proctur product pages are in the top 10), so this is MEDIUM, not CRITICAL, but half the page-one slots are only reachable by being *listed* on those roundups, which Aveon currently is not.
2. **"campus management system" → /products is the one HIGH mismatch.** The page is a 539-word product catalogue with H1 "Our Products" and title "Education ERP Software: 14 Integrated Products"; the phrase "campus management system" is not in title, H1 or meta description. The SERP is fragmented (directories, listicles, vendor explainers), and GSC already shows "campus management system 3.0" at position 7.9 with 0 clicks.
3. **"mastersoft erp alternative" / "camu alternative" SERPs are aggregator "Alternatives to X" lists** (Capterra, GetApp, Software Advice, G2, AlternativeTo, Gartner Peer Insights, SoftwareSuggest, Krowdbase, Techjockey compare). The new pages are 1:1 "Aveon vs X". The page type matches (Comparison), but the format does not (one option vs a list of options) and the word "alternative" only appears in one FAQ. Aveon has no profile/reviews on the aggregators that own this SERP.
4. **Trust is the weakest dimension on every page, and it is worst exactly where the ads send school and hostel buyers.** The product pages have no client logos, testimonials, case studies or review count in the main content; the 200+ claim appears only near the bottom of /products/college-erp. On /get-started/school-erp and /get-started/hostel-mess the logo wall is all colleges (Kovai Kalaimagal College, CIET, Sankara, Nandha, ... Dhanalakshmi Srinivasan University) and there is no school or hostel testimonial. That is a likely contributor to the ~0.84% lead rate (1 lead / 119 clicks; target 3-5%).
5. **Media gap:** no product screenshots, UI GIFs or demo video on any product page (1-3 images in main content). Competitors in the hostel and NAAC SERPs (SpaceBasic, FretBox, MasterSoft, Linways) lead with product UI.

## SERP vs page — per keyword

SERP data from WebSearch (not a geo-located google.co.in result; see Limitations). Classification uses the claude-seo page-type taxonomy.

| Keyword | SERP dominant type (confidence) | Notable SERP evidence | Aveon page | Aveon type | Mismatch |
|---|---|---|---|---|---|
| college erp software | Comparison listicle ~50%, vendor Hybrid ~40%, directory ~10% | Techjockey "7 Best College ERP Software in India 2026" (several URLs), Geekchamp, Edufox blog, Proctur blog; vendor pages Jupsoft, MasterSoft (iitms), Proctur | /products/college-erp (2,577 words, FAQPage+SoftwareApplication+Breadcrumb) | Hybrid | **MEDIUM**: good vendor page, but it cannot win the listicle half of the SERP |
| school management software | Comparison listicle ~60%, vendor Hybrid ~40% | Jupsoft "Top 10 ... 2025", SourceForge "Compare the Top ... India", Senseselec, Techjockey "15 Best", Nextwhatbusiness "Top 17"; vendors Entab, Schoolites, MDM ("Trusted by 600+ schools") | /products/school-erp (1,678 words) | Hybrid | **MEDIUM**, plus a trust gap: zero school clients shown |
| hostel management system | Vendor Hybrid / product ~85% | OpenEduCat hostel solution pages, SpaceBasic ("India's #1", names Manipal, OP Jindal, PES, REVA), FretBox ("Loved by Wardens", integrates with existing ERPs) | /products/hostel-mess (1,192 words) | Hybrid | **ALIGNED** on type; behind on content and proof (see personas) |
| naac software | Vendor Hybrid ~70%, directory ~15%, blog ~15% | Biyani, MasterSoft NAAC page, Eklavvya "naac accreditation demo", vmedulife, Linways, Camu, HiGrade, Kramah, Capterra | /products/iqac-naac-nba/naac (884 words) | Hybrid | **ALIGNED** on type; H1 "NAAC Seven-Criteria Framework Support" lacks "software"; the thinnest money page |
| campus management system | Fragmented: listicle/blog ~40%, vendor ~35%, directory ~25% | SourceForge, Capterra.in, IndiaMART, Techjockey "Top 10", Academia and SpaceBasic explainer blogs, OpenEduCat, NuRe Campus | /products (539 words, H1 "Our Products") | Category hub / catalogue | **HIGH**: no keyword targeting, no explainer, no proof |
| mastersoft erp alternative | Comparison (alternatives list) ~95% | Capterra/GetApp/Software Advice "school erp alternatives" (MasterSoft's school product), Gartner (Ellucian, Jenzabar), AlternativeTo | /comparisons/aveon-vs-mastersoft (1,516 words, table, FAQ) | Comparison (1:1) | **MEDIUM**: list vs 1:1; college-only framing although much of the SERP is about MasterSoft's *school* ERP |
| camu alternative | Comparison: alternatives lists ~75%, 1:1 "Camu vs X" ~25% | Capterra/GetApp/Software Advice/SoftwareSuggest/Krowdbase alternatives, CB Insights, Techjockey "camu vs ifw / softcampus / kalvisalai" | /comparisons/aveon-vs-camu (1,396 words) | Comparison (1:1) | **MEDIUM**: 1:1 pages do rank (Techjockey), but only on aggregators |

## Paid landing pages vs ad intent

All three: noindex (correct for paid), minimal header (logo, phone, WhatsApp), short form above the fold (name, phone, institute; product preselected; email and city optional), stats band (200+ / 1M+ / 14+ yrs / 30 days), 4.2★ from 54 Google reviews in the hero, logo carousel, three-step "what happens next", 4 FAQs, mobile Call/WhatsApp/Book demo bar, ~520-540 words. Structurally this is a correct Landing Page. The problem is the match between offer, proof and intent.

| Page | Ad intent | What works | Gaps |
|---|---|---|---|
| /get-started (College, Campus mgmt, Admissions, NAAC groups) | Consideration-stage commercial: the organic SERP for these terms is listicles, so clickers are building a shortlist | Hero matches college intent; affiliated/autonomous FAQ; CIET director testimonial | Only one conversion offer (a 30-minute demo = high commitment for a shortlist-builder); no price signal at all although "how much does college ERP cost" is the #1 shortlist question and listicles show prices; no product screenshot; **NAAC/IQAC ad clicks (ad group N) land on a college-ERP hero** if routed here, as there is no `/get-started/naac` variant |
| /get-started/school-erp | School owner/correspondent; price-sensitive, wants board fit | Hero copy is school-specific; FAQ "Is this the college ERP with a new name?" handles the obvious doubt | **Logo wall shows only colleges/universities**; no school testimonial; no board list (CBSE/ICSE/State/Matric) above the fold, though the organic page and SERP both lead with boards; no parent-app visual; "200+ institutions" without saying how many are schools |
| /get-started/hostel-mess | Warden/hostel admin or management buying a hostel module | Hero lists rooms, biometric attendance, gate pass, mess billing | College logo wall, no hostel client or bed count; does not answer "does it work alongside our existing ERP?" (FretBox's lead message); no parent-approval outpass, visitor log or anti-ragging mention (SpaceBasic/OpenEduCat lead with these); no mobile-app screenshot for wardens |

**Diagnosis of 1 lead / 119 clicks:** (a) offer-intent mismatch (demo-only CTA for shortlist-stage traffic), (b) proof mismatch on school and hostel variants, (c) no price anchor, (d) no product visual. Three days of data are too few to be statistically conclusive, and the conversion tag is still missing (memory: Contact conversion action pending), so some leads may be WhatsApp/calls that are not attributed.

## User stories (each tied to a SERP signal)

1. **Awareness**: *As a college principal, I want a ranked list of college ERPs in India with prices, so that I can shortlist 3-4 without calling every vendor.* Signal: 5+ "7 Best College ERP Software in India 2026" listicles; Jupsoft copy "fee structure based on number of students".
2. **Consideration**: *As a school correspondent, I want to see that the software is used by schools like mine (CBSE/State board), so that I know it is not a college product resold.* Signal: SERP vendor titles lead with school counts ("Trusted by 600+ schools", Entab "1300 schools") and board support.
3. **Consideration**: *As a hostel warden, I want gate passes with parent approval, visitor logs and a phone app, so that I stop keeping registers.* Signal: SpaceBasic outpass/visitor features, FretBox "Loved by Wardens", OpenEduCat anti-ragging and quota allotment.
4. **Consideration/Decision**: *As an IQAC coordinator, I want to see an actual SSR/AQAR export and which metrics are auto-filled, so that I can judge if it saves the pre-visit scramble.* Signal: Eklavvya "naac accreditation demo" page ranking; MasterSoft "How can you improve your NAAC ranking" blog; Capterra NAAC Accreditation listing.
5. **Decision**: *As a management member unhappy with MasterSoft/Camu, I want a list of credible alternatives with reviews, so that I can justify switching to the board.* Signal: the "alternatives" SERPs are 90%+ Capterra/GetApp/G2/SoftwareSuggest review-aggregator lists.

## SXO Gap Score breakdown (site-level, across the money pages)

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 8/15 | Hostel and NAAC aligned; college/school MEDIUM (listicle-heavy SERPs); /products HIGH; comparisons MEDIUM (1:1 vs alternatives list) |
| Content Depth | 10/15 | College 2,577 / school 1,678 / comparisons 1,396-1,516 words are competitive; hostel 1,192 and NAAC 884 are thin vs specialists; /products 539; landing pages ~530 (fine for paid) |
| UX Signals | 10/15 | Clear above-fold CTAs everywhere ("Get a DEMO", "Talk to Us"; landing has form + call + WhatsApp + sticky mobile bar); but one high-commitment offer only, no pricing indicator, no jump links on long pages |
| Schema | 10/15 | SoftwareApplication + FAQPage + BreadcrumbList on college/school/hostel/comparison pages; **NAAC page has no SoftwareApplication or BreadcrumbList**; /products has no ItemList/CollectionPage; comparisons have no ItemList |
| Media | 4/15 | No product screenshots, UI walkthrough or demo video on any money page (1-3 images in main content); the 60 images on landing pages are client logos |
| Authority | 5/15 | No logos/testimonials/case studies on product pages; one testimonial site-wide (college, not shown on school/hostel variants); 4.2★/54 Google reviews only on landing pages; no presence on Capterra/GetApp/Techjockey/SoftwareSuggest which own the listicle and alternatives SERPs; "Aveon Editorial Team" organisation author |
| Freshness | 7/10 | Comparisons "Last reviewed 13 November 2026" visible; product pages have no visible update date (htmldate fell back to 2026-01-01); listicle SERPs reward "2026" in title |
| **Total** | **54/100** | |

## Persona scores

Personas: the four requested, each traced to SERP signals, plus two the SERPs surfaced (switching evaluator from the alternatives SERPs; group/campus buyer from the "campus management system" SERP).

| Persona | Page scored | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|---|
| Campus/group buyer ("campus management system") | /products | 11 | 12 | 6 | 14 | **43** | Needs Work |
| Hostel warden | /products/hostel-mess + /get-started/hostel-mess | 15 | 15 | 4 | 14 | **48** | Needs Work |
| IQAC coordinator | /products/iqac-naac-nba/naac | 19 | 15 | 6 | 10 | **50** | Needs Work |
| School owner / correspondent | /products/school-erp + /get-started/school-erp | 18 | 16 | 5 | 14 | **53** | Needs Work |
| College principal / management | /products/college-erp + /get-started | 21 | 18 | 13 | 18 | **70** | Good |
| Switching evaluator (MasterSoft/Camu user) | /comparisons/aveon-vs-* | 15 | 20 | 15 | 19 | **69** | Good |

**Systemic issue:** Trust averages 8/25 across personas; the next weakest is Clarity on the module pages (no visuals, so buyers must read lists of module names).

### Weakest first: fixes per persona

**1. Campus/group buyer (43): /products**
- Retitle and re-head: title "Campus Management System & Education ERP: 14 Products | Aveon", H1 "Campus Management System for Colleges, Universities and Schools". Add a 150-word "What a campus management system covers" intro, a "Which product do I need?" chooser (College / University / School / single module) and a module matrix table.
- Add proof band (200+ institutions, 1M+ students, logo strip, 4.2★ Google), 4-5 FAQs with FAQPage, and CollectionPage/ItemList schema listing the 14 products. Target 1,200+ words.

**2. Hostel warden (48): /products/hostel-mess, /get-started/hostel-mess**
- H1 → "Hostel Management System for Colleges and Universities" (keep "Aveon Hostel & Mess" as eyebrow).
- Add sections the SERP leaders lead with, only where the product genuinely supports them: "Gate passes with parent approval", "Visitor log", "Warden mobile app" (screenshot), "Room allotment rules (gender, year, category quotas)", "Complaint and anti-ragging register".
- Add an FAQ "Can Aveon Hostel run alongside our existing ERP?" (FretBox's main pitch) with the honest answer.
- Proof: name hostel-using clients, number of beds/residents managed; on the landing variant swap the generic college logo wall for hostel-using clients and add a warden or hostel-admin quote.
- Low-friction CTA for wardens: "Get a 2-minute hostel app walkthrough on WhatsApp".

**3. IQAC coordinator (50): /products/iqac-naac-nba/naac**
- H1 → "NAAC Accreditation Software for SSR, AQAR and DVV"; add SoftwareApplication + BreadcrumbList schema (it is the only money page without them).
- Add a criterion → metric table showing which metrics are auto-filled from ERP data vs uploaded manually; add annotated screenshots of the SSR/AQAR export and DVV evidence folder.
- Add an outcome proof block (client grades/cycles achieved while on Aveon, with consent) and an IQAC-coordinator quote.
- CTA: "See a sample AQAR export" or "Book a 20-minute IQAC walkthrough" instead of the generic "Get a DEMO". Grow to ~1,500 words.
- Paid: create a `/get-started/naac` variant in `components/landing/variants.ts` (IQAC hero, criterion bullets, preselect "IQAC / NAAC / NBA") and point ad group N at it.

**4. School owner (53): /products/school-erp, /get-started/school-erp**
- Add a "Schools running Aveon" logo strip and one school testimonial (correspondent or principal); if school clients are few, say so honestly with the real number rather than reusing college logos. Make `ClientLogosCarousel` accept a per-variant list.
- Above the fold on the landing page: board chips "CBSE · ICSE · State Board · Matriculation" and a parent-app phone screenshot.
- Add a "How school ERP pricing works" section like the college page (per-student annual licence, one-time setup) and a FAQ "How much does school management software cost?"
- Secondary CTA "Get a price for your student strength" (lower friction than a demo).

**5. Switching evaluator (69): /comparisons/aveon-vs-mastersoft, /aveon-vs-camu**
- Add "alternative" to title/H1 (e.g. "MasterSoft ERP Alternative: Aveon vs MasterSoft Compared (2026)") and a short "Other MasterSoft alternatives" section linking to the other four vs pages, so the page answers the list intent too.
- Optionally build `/comparisons/mastersoft-alternatives` and `/comparisons/camu-alternatives` as honest multi-vendor lists (needs the owner's approval per the existing "no roundup without approval" decision).
- Add a migration proof block ("Moved from [ERP] to Aveon in N weeks") and a "Switching from MasterSoft: what migrates" checklist.
- Off-site (biggest lever for these SERPs): claim and populate Aveon listings on Capterra/GetApp/Software Advice (one Gartner Digital Markets listing feeds all three), SoftwareSuggest and Techjockey, and ask existing clients for reviews there.

**6. College principal (70): /products/college-erp, /get-started**
- Move proof up: logo strip + "200+ institutions · 4.2★ from 54 Google reviews" directly under the hero (currently only near the bottom); add the CIET director quote mid-page.
- Add 2-3 annotated screenshots (dashboard, fee counter, COE mark entry) and a 60-90 second overview video.
- Add a jump-link table of contents (13 H2s on a 2,577-word page).
- Get listed in the Techjockey/Geekchamp "Best College ERP Software in India 2026" roundups (outreach or paid listing): this is the only way into half of page one.

## Paid landing page fixes (to lift 0.84% toward 3-5%)

1. Per-variant proof: logos and testimonial chosen by variant (school clients on school, hostel clients on hostel); never a college wall on a school page.
2. Second, lower-commitment offer next to "Book My Demo": "Get a price estimate" (student strength + modules → callback) or "Send me the brochure on WhatsApp". Shortlist-stage traffic converts on these.
3. Price anchor: one line such as "Annual licence by student strength; implementation quoted once" (mirrors the college product page) plus an FAQ "What does it cost?" Avoid numbers unless the owner approves them.
4. One product visual above or beside the form (dashboard on college, parent app on school, warden app on hostel).
5. NAAC variant (`/get-started/naac`) for ad group N.
6. Measurement before judging copy: add the Ads conversion action for form submit, call and WhatsApp taps; three days and 119 clicks are too few to call a winner.

## Limitations

- WebSearch is US-located and not Google; Indian SERP composition, ads, local pack, PAA and AI Overview could not be observed directly. Percentages above are from the returned top results and are estimates. Re-check with DataForSEO or a manual google.co.in incognito search before acting on the listicle split.
- No PAA or related-search data was available, so user stories rely on ranking-page titles and content.
- Persona scoring is analyst judgement against the rubric; no user testing, heatmaps or session recordings were reviewed.
- Whether hostel features such as parent-approved outpass, visitor log or warden app exist in the product was not verified; add them to the page only if true.
- Form validation was checked in source (`components/landing/LandingPage.tsx`, `variants.ts`), not by test submission.
- Ad group N's current final URL was not verified in the Ads UI.

## Cross-skill follow-ups

- `/seo schema`: SoftwareApplication + BreadcrumbList on the NAAC page; CollectionPage/ItemList on /products.
- `/seo content`: E-E-A-T (named author, case studies) across product and comparison pages.
- `/seo page` on /products and /products/iqac-naac-nba/naac (thinnest money pages).
- Generate a PDF report? Use `/seo google report`.

## Structured findings (for audit-data.json, category "Search Experience")

```json
{
  "category": "Search Experience",
  "score": 54,
  "score_label": "SXO Gap Score",
  "dimensions": {"page_type": 8, "content_depth": 10, "ux_signals": 10, "schema": 10, "media": 4, "authority": 5, "freshness": 7},
  "mismatches": [
    {"keyword": "campus management system", "url": "/products", "serp_type": "fragmented listicle/vendor/directory", "page_type": "category hub", "severity": "HIGH"},
    {"keyword": "college erp software", "url": "/products/college-erp", "serp_type": "comparison listicle ~50%", "page_type": "hybrid", "severity": "MEDIUM"},
    {"keyword": "school management software", "url": "/products/school-erp", "serp_type": "comparison listicle ~60%", "page_type": "hybrid", "severity": "MEDIUM"},
    {"keyword": "mastersoft erp alternative", "url": "/comparisons/aveon-vs-mastersoft", "serp_type": "aggregator alternatives list", "page_type": "1:1 comparison", "severity": "MEDIUM"},
    {"keyword": "camu alternative", "url": "/comparisons/aveon-vs-camu", "serp_type": "aggregator alternatives list", "page_type": "1:1 comparison", "severity": "MEDIUM"},
    {"keyword": "hostel management system", "url": "/products/hostel-mess", "severity": "ALIGNED"},
    {"keyword": "naac software", "url": "/products/iqac-naac-nba/naac", "severity": "ALIGNED"}
  ],
  "personas": [
    {"name": "Campus/group buyer", "score": 43},
    {"name": "Hostel warden", "score": 48},
    {"name": "IQAC coordinator", "score": 50},
    {"name": "School owner", "score": 53},
    {"name": "Switching evaluator", "score": 69},
    {"name": "College principal / management", "score": 70}
  ],
  "top_actions": [
    "Per-variant client proof on /get-started/school-erp and /get-started/hostel-mess (no college logo wall)",
    "Add a low-commitment offer (price estimate / WhatsApp brochure) and a pricing-model line to all landing pages",
    "Create /get-started/naac and route ad group N to it",
    "Retarget /products to 'campus management system' with explainer, chooser and proof",
    "Rework NAAC page: H1 with 'software', SoftwareApplication+Breadcrumb schema, export screenshots, outcome proof",
    "Add product screenshots/video to every product page",
    "Get listed and reviewed on Capterra/GetApp/SoftwareSuggest/Techjockey to enter listicle and alternatives SERPs"
  ]
}
```
