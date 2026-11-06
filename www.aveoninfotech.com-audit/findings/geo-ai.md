# AI Search Readiness (GEO) & Agentic — findings

**Score: 80/100**

## Agentic check (agentic_check.py)
| Check | Priority | Status |
|---|---|---|
| Primary content present without JS (2,019 words) | P0 | ✅ Pass |
| robots.txt reachable | P0 | ✅ Pass |
| Deliberate robots groups for AI agents (11 named) | P0 | ✅ Pass |
| Content-Signal preference declared | P1 | ℹ️ Not set (optional) |
| Markdown version of page | P1 | ℹ️ Not offered (optional) |

- Search crawlers blocked at root: **none**.
- AI user agents explicitly grouped: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot.

## Citability
- Server-rendered content + rich entity schema (Organization/SoftwareApplication/FAQ) make the site **technically easy to extract and cite**.
- FAQ/Q&A structure supports passage-level answers.

## The gap
| Severity | Finding | Fix |
|---|---|---|
| High | No off-site corroboration for AI engines to cite | Same lever as backlinks: review sites, directories, press, client references |
| Low | No llms.txt / Content-Signal / Markdown delivery | Publish /llms.txt; optionally add Content-Signal lines (none are ranking factors today) |

**Bottom line:** the *mechanics* of AI readiness are strong; the *authority* AI engines look for before citing a vendor for non-branded queries is missing — identical root cause to the backlink deficit.
