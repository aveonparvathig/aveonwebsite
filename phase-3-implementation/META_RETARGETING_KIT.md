# Meta Retargeting Kit — Aveon Campus ERP

**Created:** 6 Nov 2026 · **Owner:** [U]ser runs Meta Ads Manager; [C]laude supplied this pack
**Goal:** cheaply re-engage people who already visited the site (mostly from Google Search + organic) and bring them back to book a demo.
**Budget:** ~₹5,000–10,000 / month (20–30% of the ad budget; Google Search takes the rest).
**Objective:** **Leads / Conversions**, optimised for the Pixel's **`Lead`** event.
**Where they land:** `/get-started`.

> Pairs with `GOOGLE_ADS_STARTER_KIT.md` (the primary channel). Retargeting works only *after* Google/organic traffic has filled the Pixel audience — **start this ~1–2 weeks after Google Search goes live.**

---

## 0. Prerequisites (one-time)

- `NEXT_PUBLIC_META_PIXEL_ID` set on Vercel + redeployed (see `GO_LIVE_CHECKLIST.md`). The site then fires:
  - **`PageView`** on every page (builds the "all visitors" audience)
  - **`ViewContent`** on `/pricing` and `/get-started` (builds the "hot" audience)
  - **`Lead`** on every demo/contact/chatbot submit and buyer's-guide download (optimisation + lookalike seed + exclusion)
  - **`Contact`** on every tap on a phone number or WhatsApp button
- **Verify the domain** in Meta Business Settings → Brand safety → Domains (DNS TXT record at GoDaddy) before
  running conversion campaigns; without it Meta limits which events you can optimise for.
- Verify with the **Meta Pixel Helper** extension: load the site → see `PageView`; open `/pricing` → see `ViewContent`; submit the demo form → see `Lead`.

---

## 1. Audiences (Ads Manager → Audiences → Create)

**Custom audiences (from the Pixel):**
1. **All visitors – 30 days** — *Website → All website visitors → last 30 days.*
2. **Hot viewers – 30 days** — *Website → People who visited specific web pages →* URL contains `pricing` **OR** `get-started`, last 30 days. (These fired `ViewContent` — highest intent.)
3. **Leads – 180 days** — *Website → `Lead` event → last 180 days.* Used only as an **exclusion** (and later the lookalike seed).

**Lookalike (only once "Leads – 180 days" has ≥ ~100 people):**
4. **Lookalike 1% – India** — from the **Lead** source audience, India, 1%.

> Audiences need ~1,000+ people to serve well — another reason to launch Google first and wait.
>
> **Revised 10 Nov 2026 — use 180 days, not 30, to start.** At current traffic a 30-day visitor audience is
> unlikely to reach 1,000 people, so Meta will under-deliver or not serve at all. Build audiences 1 and 2 with
> a **180-day** window (the maximum), check the estimated size in Ads Manager, and only tighten to 30 days once
> the 180-day audience is comfortably above ~5,000.

---

## 2. Campaign structure

**Campaign:** `Retargeting – Demo` · Objective **Leads** · Advantage campaign budget OFF (set budget at ad-set).

**Ad set 1 — Warm retargeting** (launch this first)
- **Audience:** *All visitors – 30 days*, **Exclude:** *Leads – 180 days* (don't pay to chase people who already converted).
- **Optimise for:** **Landing Page Views** to begin with. Meta needs roughly 50 optimisation events per ad set per week to leave its learning phase, and this site will not produce 50 `Lead` events a week from retargeting alone. Switch to `Lead` only once weekly leads from Meta get near that number; until then `Lead` is still recorded and reported, it just isn't the optimisation target.
- **Placements:** Advantage+ (automatic).
- **Budget:** ₹150–250/day.

**Ad set 2 — Hot viewers** (add after week 2 if budget allows)
- **Audience:** *Hot viewers – 30 days*, **Exclude:** *Leads – 180 days*. Higher bid/priority.

**Ad set 3 — Lookalike (prospecting)** (only once the lookalike exists)
- **Audience:** *Lookalike 1% – India* + narrow with interests like "Higher education / Educational technology / School management"; **Exclude:** all visitors + leads.

---

## 3. Creatives (3 concepts — each links to `/get-started`, CTA "Book Now" / "Learn More")

Meta limits: Primary text shown ~125 chars before "…", Headline ~40 chars.

**A — "Still comparing" (single image)**
- **Headline:** See your college ERP in 30 min
- **Primary text:** Still comparing campus ERPs? See exactly how Aveon runs admissions, exams, fees & NAAC on one platform — trusted by 200+ institutions. Book a free demo.
- **Description:** Cloud or on-premise · NAAC/NBA ready

**B — "Social proof" (single image — client logos / 4.2★)**
- **Headline:** Trusted by 200+ institutions
- **Primary text:** 200+ colleges and 1M+ students run on Aveon. One login, fourteen modules, one database. See a walkthrough tailored to your campus.
- **Description:** 4.2★ on Google · Coimbatore-based since 2012

**C — "Pain → outcome" (carousel, 3 cards: Admissions / Examinations / NAAC)**
- **Primary text:** Manual admissions? Exam processing headaches? NAAC data assembled by hand? Put them on one platform. Book a free 30-minute demo.
- **Card headlines:** Automate admissions · One-click exam results · NAAC reports from live data
- Each card → `/get-started`.

> Images: reuse the site's product screenshots / client-logo strip / the OG image. Keep on-image text short and readable on a phone (Meta dropped its old "under 20% text" rule in 2020, so there is no hard limit).

---

## 4. Budget & expectations
- Start **₹150–250/day** on Ad set 1. Retargeting CPMs are low and CTR high because the audience already knows you; expect a **lower cost-per-lead than cold ads** but **limited volume** (capped by how many people visit).
- As Google drives more traffic, the retargeting pool grows — raise budget then, not before.

## 5. Weekly checklist ([U])
- [ ] Frequency < ~3–4 / week (raise exclusions or refresh creative if higher).
- [ ] Pause any creative with high spend + 0 leads.
- [ ] Confirm **Leads – 180 days** is excluded everywhere (no wasted spend).
- [ ] Check `Lead` events are attributed in Ads Manager (columns → Results = Leads).
- [ ] Once "Leads" ≥ 100 → build the lookalike and open Ad set 3.

## 6. Launch checklist ([U])
- [ ] Pixel verified firing PageView + ViewContent + Lead (Pixel Helper).
- [ ] 3 custom audiences created and populating (>1,000).
- [ ] Campaign (Leads) + Ad set 1 (All visitors − Leads) built, optimising for `Lead`.
- [ ] 2–3 creatives uploaded, all → `/get-started`.
- [ ] Budget ₹150–250/day; launched **after** Google Search has run ~1–2 weeks.
