# Go-Live Checklist — Switch On the Growth Program

**Created:** 5 Nov 2026 · **For:** Ranjith / Aveon
Everything in Phases 1–3 is already on `main` and deploys safely **without** these set — each feature
just stays dormant until its env var exists. Work top-down: Tier 0 first (it's the one that loses leads).

> **Where env vars go:** Vercel → your project → **Settings → Environment Variables** → add to **Production**
> (and Preview if you want it on previews) → then **redeploy** (Deployments → ⋯ → Redeploy) so they take effect.
> All names below already exist in `.env.example`.

---

## Tier 0 — Stop losing leads (do this first) 🔴

> Updated 10 Nov 2026: the Sanity lead inbox was removed (leads are email-only), so the old
> "Sanity Editor token" step is gone. Lead email was verified delivering on 6 Nov 2026.

- [x] **Turn on lead emails (Resend).** resend.com → create an API key.
  - [ ] Set `RESEND_API_KEY=<key>`.
  - [ ] Add & verify your domain in Resend (Domains → Add → add the DNS records), then set
        `RESEND_FROM="Aveon <hello@aveoninfotech.com>"`. Until the domain is verified, email only reaches the
        Resend account owner.
  - [ ] Optional: `CONTACT_NOTIFY_EMAIL=<inbox>` to route notifications somewhere other than contact@.
  - [ ] **Verify:** submit a form → notification email arrives **and** the visitor gets the auto-reply.

---

## Tier 1 — Turn on the paid channel 🟠

- [x] **Create the Google Ads conversion action.** Done 6 Nov 2026 in account 206-043-2215: action
      **Demo/Lead** (*Submit lead form*, Primary, count *One*). Conversion ID `AW-457432174`; copy the label
      from Goals → Conversions → Demo/Lead → *See event snippet* (the part after the `/` in `send_to`).
  - [x] Set `NEXT_PUBLIC_GOOGLE_ADS_ID=AW-457432174` and `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=<label>` → redeploy.
        Both added to Vercel (Production) on 11 Nov 2026; the label was copied from the Demo/Lead event
        snippet. A redeploy from the Vercel dashboard asks for an emailed code, so a push to `main` is the
        easy way to rebuild. Check in PowerShell (prints `True` once the tag is live):
        `(Invoke-WebRequest https://www.aveoninfotech.com/get-started).Content -match 'AW-457432174'`
  - [ ] **Campaign goal:** every campaign uses *campaign-specific goals → Submit lead form* only. The account
        defaults include Page view / Engagement / Get directions as primary actions.
  - [ ] **Verify:** submit a test lead → Google Ads → Conversions → **Diagnostics** shows it within ~24h.
  - [ ] **Calls & WhatsApp (optional but recommended).** Create a second conversion action *Contact* (category
        *Contact*, count *One*, mark it **Secondary**) → set `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=<label>` → redeploy.
        Every tap on a phone number or WhatsApp button then reports to it. Promote it to Primary only once
        you've confirmed those calls are real buyers.
  - [ ] **Check the lead email shows the ad click.** Open the site with `?gclid=TEST123&utm_source=google` on the
        end of the URL, submit the demo form → the notification email lists `Ad: gclid`, `Ad: utm_source` and
        `Ad: landing_page`. Keep these with the lead: they let you tell Google which keywords produced customers.
- [ ] **Meta Pixel (retargeting).** business.facebook.com → Events Manager → create a Pixel → copy the ID.
  - [ ] Set `NEXT_PUBLIC_META_PIXEL_ID=<id>` → redeploy.
  - [ ] **Verify:** Meta's *Pixel Helper* browser extension shows PageView + a Lead event on form submit.
- [ ] **Mark GA4 conversions.** GA4 (both properties) → Admin → **Events** → toggle `demo_request`,
      `form_submit`, `chatbot_lead_capture`, `qualified_lead` as **key events/conversions**.
- [x] **Build the campaign.** Done 10 Nov 2026: *Search - Campus ERP - India* (ID 24457638856), **Paused**,
      five ad groups (A, B, E, F, N), 33 keywords, 50 negatives, ₹1,000/day, ₹70 max CPC, starts 11 Nov.
      Details and the differences from the kit copy are in `GOOGLE_ADS_STARTER_KIT.md` → "As built in the account".
  - [x] **Enable it.** Enabled 11 Nov 2026 at the owner's request: campaign status *Eligible (Learning)*, all
        five ads *Eligible*. The three old Smart campaigns stay paused.
        It ran for its first minutes without the Google Ads tag on the site; the tag env vars were added
        the same morning (first item of this tier). Every lead email also carries `Ad: gclid`, so the
        inbox is the cross-check for the conversion count.
  - [x] **Add funds.** The account is **Prepay**; ads do not serve at a ₹0.00 balance even though every
        status reads "Eligible" (this cost the first two hours on 11 Nov 2026). ₹5,000 was added by UPI on
        11 Nov and credited in full within about 20 minutes; Google's *Ad preview and diagnosis* then
        reported "Your ad is showing" for [college erp software].
  - [ ] **Keep the balance topped up.** GST (18%) is deducted from the balance on top of ad spend, so
        ₹1,000 of ads costs ₹1,180, and Google may spend up to double the daily budget on a busy day
        (day one: ₹1,286 of ads = ₹1,517.50 off the balance). Owner's decision, 11 Nov 2026: **₹1,000 a day
        plus GST is acceptable**; the budget stays at ₹1,000. Plan on roughly ₹36,000 a month including GST,
        and add funds before the balance runs out (Billing → Summary → *Add funds*) — ads stop without any
        warning in the campaign view.
  - [x] **Old Smart campaigns paused again** (11 Nov 2026, owner's decision). *College ERP System*,
        *Simplify Hostel Management* and *Online Examination software* became active when the funds
        arrived, which raised the account to ₹1,526 a day. Check they are still paused after every top-up.
  - [x] **Every clicked ad lands on a page with the enquiry form** (13 Nov 2026). School, Hostel and Fees
        ads now go to `/get-started/school-erp`, `/get-started/hostel-mess` and
        `/get-started/fees-management`. The landing form needs only name, contact number and institute
        (email and city optional), and phones get a fixed Call / WhatsApp / Book demo bar. First lead was
        recorded in Google Ads the same day. Details in the kit → "Changes made 13 Nov 2026".
  - [ ] **Leads without an email:** the short form allows it, so those visitors get no auto-reply. Call
        them back on the number in the notification email.
  - [ ] **Split the campaign** so College ERP has its own budget (owner's priority, 12 Nov 2026). Needs a
        pasted copy of the campaign in Google Ads; the EU political ads question in that dialog is the
        owner's to answer.
  - [ ] **Saturday schedule** (analysis 13 Nov 2026, kit → "Day and hour analysis"). Saturday has about
        half the search demand of a weekday. Proposed: Saturday 08:30–13:30 on both campaigns, Mon–Fri
        unchanged, Sunday off. Not saved yet. Note that Google paces a campaign to 30.4 × its daily
        budget per month whatever days are switched off, so a shorter week moves money to the other days;
        it does not reduce the monthly bill. Only a lower daily budget does that.
  - [ ] **Review days and hours on Mon 30 Nov 2026** (after Saturdays 14, 21 and 28 Nov, and two full
        Mon–Fri weeks): Campaigns → Segment → Time → *Day of the week* and *Hour of the day*.
  - [ ] Complete Google's **"Confirm that it's you"** prompt (it can be skipped only until 24 Nov 2026) and the
        *Protect your account* notice.
  - [ ] Set the **business name** on the ads (Ads → edit → Business name). The verified advertiser name on the
        account is a personal name, so ads currently run with a placeholder name taken from the URL.
  - [x] Add sitelinks and callouts — six of each added at campaign level on 11 Nov 2026 (listed in the kit).
  - [ ] Add structured snippets and the call asset from the kit.

### Ads launch sequence (do in this order)
1. **Tracking first** (above) — Google Ads conversion + Meta Pixel env vars set & verified. Ads are blind without it.
2. **Google Search** — primary, ~70–80% of budget, from `GOOGLE_ADS_STARTER_KIT.md`. Runs day 1.
3. **Meta retargeting** — ~20–30% of budget, from `META_RETARGETING_KIT.md`. **Start ~1–2 weeks after Google**, once the Pixel audience is >1,000. The site already fires PageView + ViewContent (`/pricing`, `/get-started`) + Lead for the audiences.
   - Shift budget weekly toward whichever channel has the lower cost-per-lead.

---

## Tier 2 — Reviews & referrals 🟡

- [ ] **Set the review link.** Google Business Profile → **Ask for reviews** → copy the link.
  - [ ] Set `NEXT_PUBLIC_GBP_REVIEW_URL=<link>` → redeploy. (Until then `/review` points at the Maps listing.)
  - [ ] **Verify:** open `/review` on the live site → lands on the Google "write a review" form.
- [ ] **Run the review drive** from `REVIEWS_AND_REFERRALS_PLAYBOOK.md` — 5 personalised asks/week, reply to
      all within 48h. Target **54 → 75+** reviews in 8 weeks.

---

## Tier 3 — Case studies (needs your go-ahead) 🟢

- [ ] Pick 1–2 happy clients and get **written consent** to use their name + a short quote.
- [ ] Send me: contact name & title, 2–3 sentence quote, modules used, one concrete outcome.
- [ ] I build `/customers/<slug>` from a template and link it from the homepage proof strip.
      Priority candidates (confirm consent first): CIET, PSG CAS, MCET, Kristu Jayanti.

---

## Set-and-forget verification (after Tier 0–1)

- [ ] Submit each form once on the live site; confirm: notification email, auto-reply,
      GA4 DebugView shows the event, Google Ads/Meta register the conversion.
- [ ] Watch the first week of GA4 + Google Ads; use the kit's weekly optimisation checklist.

---

### Quick reference — every env var

| Var | Unlocks | Tier |
|---|---|---|
| `RESEND_API_KEY` + `RESEND_FROM` | Lead emails + auto-reply | 0 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` + `_LEAD_LABEL` | Google Ads conversions | 1 |
| `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL` | Phone / WhatsApp click conversions | 1 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta retargeting | 1 |
| `NEXT_PUBLIC_GBP_REVIEW_URL` | `/review` → review form | 2 |

All are optional at the code level and read with safe fallbacks — the site never breaks if one is missing.
