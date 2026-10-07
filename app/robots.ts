import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const privatePaths = ["/api/", "/studio/"];

// AI search and answer-engine crawlers, allowed explicitly so the site is
// eligible for citations in ChatGPT, Claude, Perplexity, Gemini and Copilot.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      { userAgent: aiCrawlers, allow: "/", disallow: privatePaths },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
