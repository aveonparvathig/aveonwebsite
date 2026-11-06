# Office 365 Lead Management — Setup Guide

**Created:** 6 Nov 2026 · **For:** Aveon (Office 365 **Business Basic**)
**Goal:** every website lead lands in a **Microsoft List** you can assign & track, pings a **Teams**
channel instantly, and still emails **Outlook** — plus a **Bookings** link so prospects self-schedule demos.

**How it connects:** the site already POSTs each lead to a Power Automate flow (code shipped). You build the
flow + list + Bookings in your tenant, then set three env vars on Vercel. Everything here uses connectors
included in Business Basic — no Azure app registration, no premium Power Automate, no Dataverse.

```
Website lead → (POST + secret header) → Power Automate flow → Microsoft List + Teams + Outlook
```

---

## Step 1 — Create the "Leads" Microsoft List

Microsoft Lists (lists.microsoft.com) or inside a SharePoint team site → **New → List → Blank**. Name it
**Website Leads**. Add these columns (the `Title` column holds the name):

| Column | Type |
|---|---|
| Title (rename to *Name*) | Single line |
| Email | Single line |
| Phone | Single line |
| Interest | Single line |
| Institution | Single line |
| City | Single line |
| Message | Multiple lines |
| Source | Choice (demo_form, contact_form, chatbot, magnet, newsletter, other) |
| Score | Number |
| Status | Choice (New, Contacted, Qualified, Proposal, Won, Lost) — default **New** |
| Owner | Person |
| Received | Date and time |

Add a **Board view** grouped by **Status** → that's your Kanban lead board.

---

## Step 2 — Build the Power Automate flow

make.powerautomate.com → **Create → Instant cloud flow** → trigger **"When an HTTP request is received"**.

1. **Request body JSON schema** — paste:
   ```json
   {
     "type": "object",
     "properties": {
       "name": { "type": "string" },
       "email": { "type": "string" },
       "phone": { "type": "string" },
       "interest": { "type": "string" },
       "institution": { "type": "string" },
       "city": { "type": "string" },
       "message": { "type": "string" },
       "source": { "type": "string" },
       "leadScore": { "type": "integer" },
       "receivedAt": { "type": "string" }
     }
   }
   ```
2. **Verify the shared secret** — add a **Condition**: `triggerOutputs()?['headers']?['x-lead-secret']`
   **is equal to** your secret value (pick any long random string — you'll reuse it as the env var).
   - **If no** → add **Response** action, Status **401**. (Stops anyone who guesses the URL.)
   - **If yes** → everything below goes in the *Yes* branch.
3. **Create item** → SharePoint *Create item* into **Website Leads**, mapping each field from the trigger body
   (Name ← name, Email ← email, … Score ← leadScore, Received ← receivedAt, Status = `New`).
4. **Post to Teams** → *Post card in a chat or channel* (or *Post message*) to your sales channel, e.g.:
   `🆕 Lead ({source}, score {leadScore}): {name} — {institution}. {email} / {phone}. Interest: {interest}.`
5. **Email Outlook** → *Send an email (V2)* to your shared/sales mailbox with the same details.
6. **Response 200** at the end (optional but tidy).
7. **Save**, then open the trigger card and **copy the HTTP POST URL**.

---

## Step 3 — Microsoft Bookings (self-serve demo scheduling)

Bookings (outlook.office.com/bookwithme or the Bookings app) → **Create a booking page** → add a service
**"Campus ERP Demo"** (e.g. 30 min), add staff, set availability → **Publish** → copy the **public booking
page URL**.

---

## Step 4 — Set the env vars on Vercel

Vercel → project → **Settings → Environment Variables** (Production) → add, then **redeploy**:

| Var | Value |
|---|---|
| `POWER_AUTOMATE_LEAD_URL` | the flow's HTTP POST URL (Step 2.7) |
| `POWER_AUTOMATE_LEAD_SECRET` | the random string you used in Step 2.2 |
| `NEXT_PUBLIC_BOOKINGS_URL` | the Bookings page URL (Step 3) |

All three are optional at the code level — the site works unchanged until they're set. The first two are
server-only; only the Bookings URL is public.

---

## Step 5 — Verify

- [ ] Submit the demo form on the live site → a new row appears in **Website Leads**, a **Teams** card posts,
      and the **Outlook** email arrives.
- [ ] Do the same from the chatbot and the contact form → rows with the right **Source**.
- [ ] Temporarily change the secret on Vercel (don't match the flow) → submit → flow returns **401** and no row
      is created (the site still shows success; the lead is kept in email + the server log).
- [ ] The **"Schedule a demo"** link now appears on `/get-started`, `/contact` and `/pricing` and opens Bookings.

---

## Notes
- **Email stays on** as a parallel fallback (Resend). If the flow is ever down, leads still arrive by email +
  the `[LEAD:FALLBACK]` server log, so nothing is lost.
- To add fields later, add the List column + map it in the flow — **no site redeploy needed**.
- Keep the flow owned by a shared/service account (not one person) so it survives staff changes.
