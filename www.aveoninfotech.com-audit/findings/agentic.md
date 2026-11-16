# Agent-readiness findings: https://www.aveoninfotech.com (2026-11-16)

Agent-UX heuristic (separate from Lighthouse): / = 100, /get-started = 100, /contact = 77 (complete). Blended ~92/100.

## Lighthouse Agentic Browsing
- 3/3 mobile and 3/3 desktop (Lighthouse 13.6.0; notes verified against 13.5.0). Passed: agent-accessibility-tree, cumulative-layout-shift (0), llms-txt.
- Not applicable (uncounted): webmcp-form-coverage, webmcp-registered-tools, webmcp-schema-validity, ard-schema.
- Path to add a counted audit: publish a valid /.well-known/ai-catalog.json (only if there are agent resources to list). An invalid one adds a failure.

## What works
- Server-rendered: 2019 words without JS. Real 404s (no soft-404).
- robots.txt: explicit allow groups for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, Amazonbot, meta-externalagent, CCBot. Only /api/ and /studio/ disallowed. Sitemap declared.
- llms.txt valid (200, text/plain, 7.7 KB, H1 + links). llms-full.txt 404 (optional).
- Home page a11y tree: 1321 nodes, 82 interactive, 0 unnamed.

## Access policy (robots.txt, not enforcement)
- Training (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, anthropic-ai): allowed.
- Search (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot): allowed.
- User-triggered (ChatGPT-User, Claude-User, Perplexity-User): allowed. Vendor docs: Claude-User honours robots; Perplexity-User and Google-Agent generally ignore it; ChatGPT-User may not apply.

## Findings
- P2 /contact demo form: 5 inputs lack label[for] association, 1 interactive node has no accessible name (heuristic -23). 12 inputs lack aria attributes. Evidence: agent_ux_check on /contact. Fix: add id + <label for> (or aria-label) to each field, name the unlabeled control (likely an icon button or link). Note Lighthouse axe audit passed on / only; run Lighthouse on /contact to confirm.
- P3 /get-started: scores 100 but 6 inputs have no aria attributes; fine if native labels exist. Optional: add autocomplete tokens.
- P3 Content-Signal absent (draft/proposal, checked 2026-09-23; Google does not act on it). Optional: add e.g. `Content-Signal: search=yes, ai-input=yes, ai-train=<your choice>` per group. Current policy allows training; decide deliberately.
- Opportunity: Markdown delivery absent (Accept: text/markdown returns HTML, no Vary: Accept, /index.md 404). No consumer agent confirmed to request it.
- Opportunity: WebMCP (W3C CG draft, Chrome only, checked 2026-09-23): 1 form on /, 0 annotated, no tools. Annotate toolname/tooldescription on the lead form only if safe for agents to submit.
- Opportunity: ai-catalog.json (ARD draft) 404, API catalog, OAuth, A2A, UCP 404: all N/A, nothing to publish.
- Info: CSP is Report-Only (not agent-relevant). Content-Disposition: inline fine.

## WAF / Vercel
- Default curl (non-browser UA) got 200 on /, robots.txt, llms.txt, so no blanket bot block. A per-agent UA matrix (--ua-matrix) was NOT run: user authorization not given. Recommend the owner check Vercel Firewall / Bot Protection rules do not challenge GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, and verify with authorized testing.

## Score: ~92/100 agent readiness (Lighthouse 3/3; Agent-UX 100/77/100).
