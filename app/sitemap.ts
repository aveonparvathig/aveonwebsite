import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { products } from "@/lib/data/products";
import { posts } from "@/lib/data/posts";
import { staticPosts } from "@/lib/data/static-posts";
import { stateSlugs } from "@/lib/data/states";

const buildDate = new Date();

type Entry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
  lastModified: Date = buildDate,
): Entry {
  return { url: `${siteConfig.url}${path}`, lastModified, changeFrequency, priority };
}

const hubRoutes = ["/products", "/services", "/solutions"];

const staticRoutes = [
  "/about",
  "/about/team",
  "/academy",
  "/blog",
  "/careers",
  "/partners",
  "/comparisons",
  "/contact",
];

const legalRoutes = ["/privacy", "/terms"];

const serviceRoutes = [
  "/services/ai-process-automation",
  "/services/custom-software-development",
  "/services/mobile-app-development",
  "/services/offshore-team",
  "/services/order-management-system",
  "/services/warehouse-management-system",
];

const accreditationRoutes = ["aicte", "iqac", "naac", "nba", "nirf", "unsdg"].map(
  (s) => `/products/iqac-naac-nba/${s}`,
);

const solutionRoutes = [
  "/solutions/by-state",
  "/solutions/coimbatore",
  "/solutions/multi-campus-management",
  "/solutions/student-retention-prediction",
  ...stateSlugs.map((s) => `/solutions/college-erp-${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("", 1, "weekly"),
    ...hubRoutes.map((p) => entry(p, 0.9, "weekly")),
    ...staticRoutes.map((p) => entry(p, 0.7)),
    ...legalRoutes.map((p) => entry(p, 0.3, "yearly")),
    ...products.map((p) => entry(`/products/${p.slug}`, 0.8)),
    ...accreditationRoutes.map((p) => entry(p, 0.7)),
    ...serviceRoutes.map((p) => entry(p, 0.8)),
    ...solutionRoutes.map((p) => entry(p, 0.7)),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, "monthly", new Date(p.publishedAt))),
    ...staticPosts.map((p) => entry(`/blog/${p.slug}`, 0.6, "monthly", new Date(p.publishedAt))),
  ];
}
