# Reviews & Referrals Playbook — Aveon

**Created:** 5 Nov 2026 · **Owner:** [U]ser runs the outreach; [C]laude shipped the site plumbing
**Goal:** Turn 200+ existing clients into new-sales leverage — more Google reviews (social proof for ads
+ local SEO) and warm referrals, at near-zero cost.
**Why now:** GBP sits at 4.2★ / 54 reviews. Lifting review count and recency is the single cheapest trust
boost for both the map pack and paid-ad conversion rate.

---

## What already ships on the site
- **`/review`** → one-tap redirect to the Google review form.
  Set `NEXT_PUBLIC_GBP_REVIEW_URL` on Vercel to the exact "write a review" link from the Business Profile
  (Google Business Profile → Ask for reviews → copy link). Until then it points to the Maps listing.
- Every lead (incl. newsletter + lead-magnet signups) now persists, so you have a clean contact list to work from.

## Target
- **54 → 75+ reviews** in 8 weeks (≈ 3 reviews/week). Reply to **every** review within 48h (templates below).

---

## 1. Review drive ([U])

**Who to ask:** the champions at institutions where rollout went well — the principal/director, IQAC
coordinator or the office staff who use the system daily. Ask the person, not the "institution."

**How:** personal message (WhatsApp or email), one at a time, 5 clients/week. The `/review` link does the rest.

**WhatsApp ask (copy/paste):**
```
Hi <name>, it's <you> from Aveon. It's been great supporting <institution> on the campus ERP.
If the system's been useful for your team, a short Google review would mean a lot and helps other
colleges find us: https://www.aveoninfotech.com/review
Thank you! Happy to help with anything on the system anytime.
```

**Email ask (copy/paste):**
```
Subject: A quick favour, <name>?

Hi <name>,

Thank you for trusting Aveon to run <institution>'s campus operations. If the ERP has made a
difference for your team, would you share a short Google review? It genuinely helps other colleges
decide, and takes under a minute:

https://www.aveoninfotech.com/review

Whatever you write is appreciated — even a line or two. And as always, reach out anytime you need
anything on the system.

Warm regards,
<you> · Aveon Infotech · +91 87540 06483
```

**Review reply templates ([U] — reply to all, within 48h):**
```
5★: Thank you, <name>! It's a privilege to support <institution>. We're always a call away.
4★: Thanks for the honest feedback, <name>. We'd love to hear what would make it a 5 — the team will reach out.
Critical: Thank you for flagging this, <name>. This isn't the experience we want — <contact> will call you today to put it right.
```

---

## 2. Referral ask ([U])

Happy clients know peers at other institutions. Make the ask explicit and easy.

```
Hi <name>, a quick one — do you know another college or principal who's struggling with
manual admissions, exam processing or NAAC reporting? A warm intro to Aveon would be hugely
appreciated, and we'll make sure they're well looked after. Happy to send a one-line blurb you
can forward.
```
Forwardable blurb:
```
Aveon runs admissions, examinations, fees and accreditation for 200+ institutions on one platform.
If you want a look, book a quick demo here: https://www.aveoninfotech.com/get-started
```

---

## 3. Case studies ([U] consent required → then [C] builds)

Case-study pages are strong sales assets and SEO content, but **we will not publish a client's name,
logo or quote without explicit consent.** To turn one on:

1. **[U]** confirm the institution agrees to be named + approves the quote (written OK).
2. **[U]** provide: contact name & title, 2–3 sentence quote, which modules they use, and one concrete
   outcome (e.g. "admissions cycle cut from X to Y", "first NAAC submission pulled straight from the system").
3. **[C]** build `/customers/<slug>` from a shared template and link it from the homepage proof strip.

**Priority candidates** (from the client list — confirm consent first): CIET (Dr. K. A. Chinnaraju, Director),
PSG College of Arts & Science, Dr. Mahalingam College (MCET), Kristu Jayanti College (Bengaluru).

> Note: the CIET quote currently on the site predates this work and should be re-confirmed with
> Dr. Chinnaraju before it's reused in a case study.

---

## Weekly cadence ([U])
- [ ] 5 personalised review asks sent.
- [ ] All new reviews replied to within 48h.
- [ ] 2 referral asks to the happiest clients.
- [ ] Log any "yes" to a case study → hand the details to [C] to build.
