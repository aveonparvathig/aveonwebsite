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

Start with **A and D only** if budget is at the ₹25k end (highest intent, best CPL); add B and C as budget allows.

**Settings:** Search Network only (no Display/Search Partners at launch) · Location: India (Tamil Nadu + Karnataka boosted, or start TN-only) · Language: English + Tamil · Bidding: **Maximise Conversions** once ~15–20 conversions exist; until then **Manual CPC** with a ₹40–70 cap to control spend · Ad schedule: Mon–Sat 8:30–18:30 IST weighted (office hours = faster callback).

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

### Negative keywords (campaign-level — add before launch)
```
free            download        crack           github
open source     project         mini project    final year
login           result          student login    sign in
job             jobs            salary          internship
pdf             ppt             notes           syllabus
school fees     mba             course          admission 2026
```
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
