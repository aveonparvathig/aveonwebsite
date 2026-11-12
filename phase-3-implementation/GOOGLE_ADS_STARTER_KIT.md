# Google Ads Starter Kit — Aveon Campus ERP

**Created:** 5 Nov 2026 · **Owner:** [U]ser runs the account; [C]laude supplied this pack
**Goal:** Buy high-intent "college ERP software" demand *now*, while organic/backlink work (3–6 mo) matures.
**Budget:** ₹25,000–50,000 / month (≈ ₹800–1,600 / day)
**Primary conversion:** Demo / chatbot lead (already instrumented — see "Conversion setup" below)
**Where leads land:** `/get-started` (distraction-free LP, no nav) for most ad groups.

> This is the near-term revenue track from the growth plan. It pairs with the Phase 1 site work
> (lead persistence, conversion tags) that shipped on `main` (commit ec01460).

---

## 1. Why paid, why now

Search Console shows ~7 non-brand buyer clicks/month — new-customer demand barely reaches the site,
and the SEO fix is months out and gated on backlinks. Google Search ads put Aveon in front of people
who are *searching to buy* a college ERP today. Keep spend tight and intent-locked; this is lead-gen,
not awareness.

---

## 2. Account structure

One **Search** campaign, India geo, four ad groups by intent:

| Ad group | Intent | Landing page |
|---|---|---|
| A — College ERP (core) | "college erp software", "college management software" | `/get-started` |
| B — University / Campus | "university erp", "campus management system" | `/get-started` |
| C — Regional (TN / Coimbatore / KA) | localized buyer searches | `/solutions/college-erp-tamil-nadu`, `/solutions/coimbatore`, `/solutions/college-erp-karnataka` |
| D — Pricing intent | "college erp price/cost" | `/pricing` |
| E — Admissions | "admission management software" | `/products/college-erp` |
| F — Fees | "fee management software", "online fee collection software" | `/products/fees-management` |
| N — NAAC | "naac software", "iqac software" | `/products/iqac-naac-nba/naac` |

Start with **A and D only** if budget is at the ₹25k end (highest intent, best CPL); add B and C as budget allows.

> **11 Nov 2026 launch set (user's keyword themes):** A (college ERP + college management), B (campus
> management), E (admissions), F (fees), N (NAAC) in one Search campaign at ~₹1,000/day. Five ad groups on
> that budget is thin: if clicks are scarce in week 1, pause E first (the most student-heavy theme).
> **Never add the bare themes as broad match** — "admission", "fee collection" and "NAAC" on their own match
> students checking admission dates, paying fees and looking up a college's grade. Always use the buyer
> wording below ("…software", "…system") in phrase or exact match.
>
> **Campaign goal:** set the campaign to **campaign-specific goals → Submit lead form only**. The account
> defaults also include Page view, Engagement and Get directions as primary actions; left on "account
> goals", bidding would treat a page view as a conversion.
>
> **Do not reuse the three old Smart campaigns** in the account ("College ERP System", "Online Examination
> software", "Simplify Hostel Management"). Smart campaigns have no match types or proper negatives.

### As built in the account — 10 Nov 2026

Campaign **"Search - Campus ERP - India"** (ID 24457638856) exists in account 206-043-2215 and is **Paused**.

| Setting | Value in the account |
|---|---|
| Type / goal | Search · Leads · campaign-specific goal *Submit lead forms* only |
| Networks | Google Search only (Search partners and Display off) |
| Location | India, *Presence* only |
| Languages | All languages (the new campaign flow has no language picker; keywords are English) |
| Budget / bidding | ₹1,000/day · Maximise clicks with a **₹70 max CPC limit** |
| Dates / schedule | Starts 11 Nov 2026 · Mon–Sat 08:30–18:30 |
| AI Max, broad match, auto-created assets | All off |
| Ad groups | A - College ERP (8 kw) · B - Campus Management (8) · E - Admissions (6) · F - Fees (5) · N - NAAC (6) — 33 keywords, exact/phrase only, one RSA each |
| Negatives | The 50 terms in section 3, campaign level |

Differences from the copy in this kit, and why:
- **Bidding is Maximise clicks + ₹70 cap, not Manual CPC.** The campaign wizard no longer offers Manual CPC; the
  cap gives the same spend control. Switch to Manual CPC under Settings → Bidding if you prefer.
- **"NBA" is not in any ad text** (e.g. "NAAC & NBA Ready ERP" became "NAAC Ready College ERP"). The wizard
  flagged the first ad with no reason given; "NBA" is also a heavily protected sports trademark, so it was
  removed as a precaution. This was not proven to be the cause — re-add it to one ad later and watch the status.
- **"~30 days" became "about 30 days" and the "—" dash was removed** (non-standard symbols are a common
  reason for ad disapproval).
- **The three unconfirmed feature headlines are not live**: "Auto Receipts & Reminders", "Merit Lists in One
  Click", "Criterion-Wise Data Capture" (and "merit lists" in the admissions description). Add them once
  confirmed the product does them.
- Ad group B also carries the phrase keywords "campus management system" and "campus management software".

**Ad group H - Hostel, added 11 Nov 2026 at the owner's request** (lands on `/products/hostel-mess`):
```
[hostel management system]    "hostel management system"
[hostel management]           [hostel management software]
"hostel management software"
```
Headlines: Hostel Management System · Hostel Management Software · Hostel & Mess Management · Room & Bed
Allocation · Biometric Hostel Attendance · Leave & Gate Pass Tracking · Mess Billing & Menus · Built for
College Hostels · Trusted by 200+ Institutions · Book a Free Demo · Aveon Campus ERP.
Descriptions: "Rooms, beds, attendance, leave, gate passes and complaints on one platform. Free demo." ·
"Hostel applications, allocation and biometric attendance, plus full mess operations." · "Part of Aveon
Campus ERP, trusted by 200+ institutions. Book a walkthrough." (Features taken from the site's Hostel & Mess
product entry.)

**School searches are kept, by the owner's decision (11 Nov 2026)** — and since 12 Nov they have their own
ad group. Do **not** add `school` as a campaign-level negative.

### Changes made 12 Nov 2026, after the day-one analysis

Day one (11 Nov, ~12:00–16:10): 207 impressions, 23 clicks, ₹56 average CPC, ₹1,286 spend, 0 leads. Of the
click spend with a visible search term, 55% went to college/campus buyers, 28% to likely students and
fee-payers ("student erp" ×3 on `[college erp software]`, "coffee app for fee collection"), 17% to school
searches landing on a college page. Best keywords by intent and cost: `[college erp]` and
`[college management system]`. NAAC and Admissions keywords had no impressions yet.

1. **Twelve more campaign-level negatives** (62 in total): `[student erp]`, `portal`, `payer`, `coffee`,
   `means`, and the vendor/institution names `edumitra`, `edusys`, `genesis`, `tachy`, `mudu`, `vidyalaya`,
   `alameen`.
2. **Max CPC limit lowered from ₹70 to ₹50.** Clicks were available at ₹44–46 while the average was ₹56.
   Raise it again if impressions fall sharply.
3. **Ad group S - School ERP** (lands on `/products/school-erp`):
   ```
   [school erp software]          "school erp software"
   [school management software]   "school management software"
   [school management system]     "school management system"
   [school erp]
   ```
   Headlines: School ERP Software · School Management Software · School Management System · One Platform for
   Your School · Admissions, Fees & Exams · Attendance & Report Cards · Parent Portal & Communication ·
   Transport & Library Modules · Trusted by 200+ Institutions · Book a Free Demo · Aveon School ERP.
   Descriptions: "Admissions, academics, attendance, exams, fees and transport on one platform. Free demo." ·
   "One student record from admission to next year. Report cards, fees and parent portal." · "Part of Aveon
   Campus ERP, trusted by 200+ institutions. Book a walkthrough."
4. **`school` and `schools` added as ad-group negatives on A - College ERP and B - Campus Management**, so
   school searches are served by the school ad instead of a college ad.

Still open from the analysis: tighten the Fees keywords, add headlines to the NAAC ad (strength "Poor"),
count calls and WhatsApp taps as conversions, and review mobile vs computer after about 100 clicks.

**Assets added 11 Nov 2026 (campaign level):**

| Sitelink | Description lines | Lands on |
|---|---|---|
| All ERP Products | Admissions, exams, fees and more · Fourteen modules on one platform | `/products` |
| How ERP Pricing Works | Per-student or per-module pricing · Get a transparent, itemised quote | `/pricing` |
| Compare College ERPs | See how Aveon compares · Side-by-side ERP comparisons | `/comparisons` |
| Coimbatore ERP Team | Coimbatore based since 2012 · Trusted by 200+ institutions | `/solutions/coimbatore` |
| ERP Buyer's Guide | 7 questions to ask every vendor · Free checklist and cost guide | `/resources/college-erp-buyers-guide` |
| Tamil Nadu College ERP | Built for Tamil Nadu colleges · Affiliated or autonomous | `/solutions/college-erp-tamil-nadu` |

Callouts: 200+ Institutions · 1M+ Students · NAAC Reporting Built In · Go Live in About 30 Days ·
One Login, 14 Modules · Coimbatore Based. ("NAAC & NBA Ready", "~30-Day Go-Live" and "Cloud or On-Premise"
from section 4 were reworded or left out for the same reasons as the ad copy above.)

**Not done yet:** structured snippets and the call asset (section 4); the bid cap has not been checked against
Keyword Planner's top-of-page range; ad group C (regional), D (pricing) and the brand campaign are not built.

**Settings:** Search Network only (no Display/Search Partners at launch) · Location: India (Tamil Nadu + Karnataka boosted, or start TN-only) — under *Location options* choose **"Presence: people in or regularly in your targeted locations"**, not the default "Presence or interest" (the default also shows ads to people outside India who merely search about India) · Language: English + Tamil · Bidding: **Maximise Conversions** once ~15–20 conversions exist; until then **Manual CPC** with a ₹40–70 cap to control spend · Ad schedule: Mon–Sat 8:30–18:30 IST weighted (office hours = faster callback).

---

## 3. Keywords (start tight — phrase & exact only, no broad)

**Ad group A — College ERP (core)**
```
[college erp software]        "college erp software"
[college erp]                 "college management software"
[college management system]   "erp for colleges"
[best college erp software]   "college erp india"
```
**Ad group B — University / Campus**
```
[university erp]              "university management software"
[campus management system]    "campus erp software"
"education erp software"      "higher education erp"
```
**Ad group C — Regional**
```
"college erp tamil nadu"      "college erp coimbatore"
"college management software coimbatore"   "erp for colleges in tamil nadu"
"college erp karnataka"       "college erp bangalore"
```
**Ad group D — Pricing**
```
"college erp price"           "college erp cost"
"college management software price"        "campus erp pricing"
```
**Ad group E — Admissions**
```
[admission management software]            "admission management software"
"college admission software"               "online admission system for colleges"
"admission automation software"            "college admission management system"
```
**Ad group F — Fees**
```
[fee management software]                  "college fee management software"
"online fee collection software"           "fee collection system for colleges"
"fees management system for colleges"
```
**Ad group N — NAAC**
```
[naac software]                            "naac accreditation software"
[iqac software]                            "naac ssr software"
"aqar software"                            "naac documentation software"
```

### Negative keywords (campaign-level — add before launch)
```
free            download        crack           github
open source     project         mini project    final year
login           result          student login    sign in
job             jobs            salary          internship
pdf             ppt             notes           syllabus
school fees     mba             course          admission 2026
full form       meaning         what is         definition
training        tutorial        certification   class
tally           sap             odoo            oracle
apply           last date       counselling     cutoff
"admission form"  "fee structure"  "fees structure"  "pay fees"
grade           ranking         "accredited colleges"  "list of"
"peer team"     2027
```
The last four rows (added 10 Nov 2026 with ad groups E, F and N) remove students applying for admission
or paying fees and people looking up a college's NAAC grade. Deliberately **not** negative: `receipt`,
`fee payment`, `criteria`, `form` on its own — buyers search "fee receipt software", "online fee payment
software for colleges" and "naac criteria wise software". Watch the search-terms report in week 1 and add
what actually shows up.
The last three rows (added 10 Nov 2026) cut definition-seekers ("erp full form"), people looking for ERP
*training*, and searches for general-business ERP brands that are not college software.

> **Bid cap:** the ₹40–70 Manual CPC cap below is a planning guess. Before launch, check each keyword's
> "top of page bid (low/high range)" in Keyword Planner and set the cap inside that range — a cap below the
> low range means the ads simply won't show.

### Brand campaign (separate, ~₹50–100/day)
A second small Search campaign on exact/phrase `aveon infotech`, `aveon erp`, `aveon campus erp`, landing on
the homepage. It is cheap, stops competitors bidding on the name, and keeps brand clicks out of the main
campaign's numbers so the cost-per-lead there reflects new demand only.
These kill the student / portal-login / project-download traffic that dominates current impressions.

---

## 4. Responsive Search Ads

Google limits: **headlines ≤ 30 chars, descriptions ≤ 90 chars.** Give each ad group 10–12 headlines
+ 4 descriptions. Pin "College ERP Software" / the brand to Headline position 1 where relevant.

### Ad group A — College ERP (core)
**Headlines**
```
College ERP Software          (20)
Run Your College on One App   (27)
Trusted by 200+ Institutions  (28)
Admissions to Accreditation   (28)
NAAC & NBA Ready ERP          (20)
Book a Free College ERP Demo  (28)
One Login, Fourteen Modules   (28)
Go Live in About 30 Days      (24)
Built for Indian Colleges     (25)
Aveon Campus ERP              (16)
Cloud or On-Premise ERP       (23)
See a Live Demo Today         (21)
```
**Descriptions**
```
Admissions, exams, fees, hostel, library & payroll on one platform. Book a free demo.   (88)
Trusted by 200+ institutions and 1M+ students across India. See it on your campus.      (84)
NAAC, NBA & AICTE reporting built in. Go live in ~30 days. Get a transparent quote.      (85)
One database, one login, fourteen modules. Start small and add more — no migration.      (86)
```

### Ad group B — University / Campus
**Headlines**
```
University ERP Software       (23)
Campus Management System      (24)
One Platform for Your Campus  (28)
Multi-Campus Ready            (17)
NAAC/NBA/NIRF Reporting        (23)
Book a Free Demo              (15)
Trusted by 1M+ Students       (23)
Automate Your Whole Campus    (26)
Affiliated or Autonomous      (24)
Aveon Campus ERP              (16)
```
**Descriptions**
```
Admissions, academics, exams, fees & HR on one platform for universities. Free demo.     (85)
Multi-campus, OBE and accreditation reporting built in. Trusted across India.             (77)
Configured for your exam & academic workflow. Go live fast. Get an itemised quote.        (83)
Replace disconnected tools with one system. 200+ institutions already run on Aveon.       (85)
```

### Ad group C — Regional (swap {City} per ad group: Coimbatore / Tamil Nadu / Karnataka)
**Headlines**
```
College ERP in {City}         (≤30)
{City}'s Campus ERP Partner   (≤30)
Trusted by {City} Colleges    (≤30)
Book a Free Demo              (15)
Anna University Ready ERP     (24)
200+ Institutions Trust Us    (26)
Local Team, Fast Rollout      (24)
Aveon — Coimbatore Based      (24)
```
**Descriptions**
```
Campus ERP built for {City} colleges. Local team, on-site rollout. Book a free demo.      (≤90)
Admissions to accreditation on one platform. Trusted across Tamil Nadu. Free demo.        (82)
Coimbatore-based since 2012. 200+ institutions, 1M+ students. Get a quote today.          (80)
```

### Ad group D — Pricing
**Headlines**
```
College ERP Pricing           (21)
Transparent, Itemised Quotes  (28)
See How ERP Pricing Works     (25)
Per-Student or Per-Module     (25)
Get Your Custom Quote         (21)
No Hidden Fees                (13)
```
**Descriptions**
```
See exactly what drives college ERP cost and get a transparent, itemised quote.          (80)
Per-student or per-module pricing. Start small, scale later. Get a quote in a day.        (82)
```
> Lands on `/pricing`, which explains the model, the 5-year cost checklist and captures the lead.

### Ad group E — Admissions
**Headlines**
```
Admission Management Software (29)
Online Admission System       (23)
Automate College Admissions   (27)
Enquiry to Enrolment, Online  (28)
Online Forms & Fee Payment    (26)
Merit Lists in One Click      (24)
Trusted by 200+ Institutions  (28)
Go Live in About 30 Days      (24)
Book a Free Demo              (16)
Aveon Campus ERP              (16)
```
**Descriptions**
```
Online applications, merit lists, fee payment and enrolment on one platform. Free demo.   (87)
Replace paper admission registers. Track every enquiry to enrolment. Book a demo.         (81)
Part of Aveon College ERP: admissions flow into academics, exams and fees. No re-entry.   (87)
```

### Ad group F — Fees
**Headlines**
```
Fee Management Software       (23)
College Fee Collection System (29)
Online Fee Collection         (21)
Auto Receipts & Reminders     (25)
Track Dues in Real Time       (23)
Fee Reports in One Click      (24)
Built for Indian Colleges     (25)
Trusted by 200+ Institutions  (28)
Book a Free Demo              (16)
Aveon Campus ERP              (16)
```
**Descriptions**
```
Collect, track and reconcile college fees on one platform. Book a free demo.              (76)
Fee heads, concessions, dues and receipts in one system. Linked to student records.       (83)
Trusted by 200+ institutions and 1M+ students across India. Get a transparent quote.      (84)
```

### Ad group N — NAAC
**Headlines**
```
NAAC Accreditation Software   (27)
IQAC & NAAC Software          (20)
SSR & AQAR Data in One Place  (28)
NAAC Reports From Live Data   (27)
Criterion-Wise Data Capture   (27)
NAAC, NBA & NIRF Reporting    (26)
Stop Compiling NAAC by Hand   (27)
Trusted by 200+ Institutions  (28)
Book a Free Demo              (16)
Aveon Campus ERP              (16)
```
**Descriptions**
```
Capture NAAC data all year, not just before the audit. SSR and AQAR ready. Free demo.     (85)
IQAC, NAAC, NBA and NIRF reporting from the same campus data. Book a walkthrough.         (81)
Part of Aveon Campus ERP, trusted by 200+ institutions. See it on your own data.          (80)
```
> **Confirm before these run:** "Auto Receipts & Reminders", "Merit Lists in One Click" and
> "Criterion-Wise Data Capture" describe product features I have not seen demonstrated. Remove any headline
> the product does not actually do — an ad promise the demo cannot keep costs the lead.

### Assets / extensions (add all — they lift CTR for free)
- **Sitelinks:** Products · Pricing · Comparisons · Coimbatore / Tamil Nadu
- **Callouts:** 200+ Institutions · 1M+ Students · NAAC & NBA Ready · ~30-Day Go-Live · Cloud or On-Premise · Coimbatore Based
- **Structured snippets:** *Services* → Admissions, Examinations, Fees, Hostel, Library, HR & Payroll
- **Call extension:** +91 87540 06483 (Mon–Sat 8:30–18:30 IST)
- **Lead-form extension** (optional): mirrors the demo form for mobile.

---

## 5. Conversion setup (the site is already wired)

1. In Google Ads → **Goals → Conversions**, create a conversion action **"Demo/Lead"** (category *Submit lead form*, count *One*, value e.g. ₹50).
2. Copy its **Conversion ID** (`AW-XXXXXXXXX`) and **Conversion label**.
3. Set these on Vercel (Production env):
   ```
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=<label>
   ```
4. Redeploy. `components/analytics/Pixels.tsx` registers the tag and `lib/analytics-conversions.ts`
   fires the conversion on every demo/contact/chatbot lead — no extra tag manager needed.
5. (Optional retargeting) set `NEXT_PUBLIC_META_PIXEL_ID` to also build a Meta audience from the same leads.
6. **Calls & WhatsApp:** create a second conversion action *Contact* (mark it **Secondary**) and set
   `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=<label>`. Every tap on a phone number or WhatsApp button reports to it.
7. **Which keyword produced the customer:** every lead email now lists the ad click id (`Ad: gclid`) and
   campaign tags the visitor arrived with. When a lead becomes a customer, upload that gclid under
   Google Ads → Conversions → **Uploads** (an "offline conversion") so bidding learns from real sales, not
   just form fills. Turn on **auto-tagging** in the account (Admin → Account settings) so the gclid is added.

What each lead type sends: demo ₹50 · chatbot ₹30 · contact ₹20 · buyer's-guide download ₹10 (all to the lead
label). A plain newsletter signup sends nothing.

Verify in Google Ads → Conversions → "Diagnostics" within 24h of the first test lead.

---

## 6. Budget & CPL math

| Budget/mo | ~Daily | Illustrative CPC | ~Clicks/mo | At 5% LP conv. | At 8% |
|---|---|---|---|---|---|
| ₹25,000 | ₹830 | ₹50 | ~500 | ~25 leads | ~40 leads |
| ₹50,000 | ₹1,660 | ₹55 | ~900 | ~45 leads | ~72 leads |

CPCs/conv. rates are planning placeholders — **replace with real data after week 2.** Target CPL to watch:
a demo lead that closes at ~15% into a ₹10–50 L deal justifies a healthy CPL; start by capping at
**≤ ₹2,000 per lead** and tighten from there.

---

## 7. Weekly optimisation checklist ([U])

- [ ] **Search terms report** → add junk terms to negatives (expect student/project queries early).
- [ ] Pause keywords with spend but 0 conversions after ~₹1,500 spent.
- [ ] Shift budget toward the ad group with the lowest CPL.
- [ ] Keep each RSA's "Ad strength" ≥ Good; swap the weakest headlines.
- [ ] Check landing-page conv. rate in GA4 (events already fire); fix the step that leaks.
- [ ] Confirm conversions are importing from the site tag (not double-counting).
- [ ] Once ≥15 conversions: switch bidding to **Maximise Conversions**, then **Target CPA**.

## 8. Launch checklist ([U])

- [ ] Conversion action created + env vars set on Vercel + redeployed + test lead verified.
- [ ] Negative keyword list added at campaign level.
- [ ] Geo = India (TN/KA weighted), Search-only, Search Partners OFF, Display OFF.
- [ ] All extensions added.
- [ ] Budget set to the chosen tier; bidding = Manual CPC cap at launch.
- [ ] Ad groups A + D live first; add B + C when CPL is proven.
