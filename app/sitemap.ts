import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { products } from "@/lib/data/products";
import { posts } from "@/lib/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/team",
    "/products",
    "/solutions",
    "/blog",
    "/careers",
    "/partners",
    "/academy",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
