export type StaticPost = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  dateModified: string;
  readingTime: string;
  category: "insights";
};

export const EDITORIAL_AUTHOR = "Aveon Editorial Team";

/** Long-form guides that live as their own routes under app/(site)/blog/. */
export const staticPosts: StaticPost[] = [
  {
    title: "What Is a Campus ERP? A Complete Guide for Indian Institutions",
    slug: "what-is-campus-erp",
    excerpt:
      "What a campus ERP does, how it differs from an SIS or LMS, the modules it includes, how it is priced in India, and ten questions to ask before choosing one.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2026-11-03",
    dateModified: "2026-11-03",
    readingTime: "12 min read",
    category: "insights",
  },
  {
    title: "AI in Higher Education: Transforming Campus Management",
    slug: "ai-in-higher-education",
    excerpt:
      "How AI is transforming higher education through predictive analytics, personalized learning and automated campus operations.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2024-03-01",
    readingTime: "10 min read",
    category: "insights",
  },
  {
    title: "The Benefits of Unified Campus Management",
    slug: "benefits-unified-campus-management",
    excerpt:
      "How unified campus management improves efficiency, data consistency, decision-making and institutional effectiveness.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2024-03-01",
    readingTime: "8 min read",
    category: "insights",
  },
  {
    title: "ERP Migration Best Practices for Universities and Colleges",
    slug: "erp-migration-best-practices",
    excerpt:
      "Planning, data migration, change management and implementation best practices for a successful campus ERP migration.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2024-03-01",
    readingTime: "10 min read",
    category: "insights",
  },
  {
    title: "NAAC Accreditation Checklist: All 7 Criteria",
    slug: "naac-accreditation-checklist",
    excerpt:
      "Step-by-step NAAC accreditation checklist covering all seven criteria, the SSR and DVV process, and the documentation your institution needs.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2026-11-03",
    readingTime: "12 min read",
    category: "insights",
  },
  {
    title: "OBE Implementation Guide: Outcome-Based Education",
    slug: "obe-implementation-guide",
    excerpt:
      "How to map learning outcomes, assess student performance and align Outcome-Based Education with NAAC and NBA accreditation.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2026-11-03",
    readingTime: "11 min read",
    category: "insights",
  },
];

export function getStaticPost(slug: string): StaticPost | undefined {
  return staticPosts.find((p) => p.slug === slug);
}
