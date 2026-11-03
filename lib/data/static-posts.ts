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
    title: "NIRF Ranking Parameters Explained: Weightages and the Data Behind Them",
    slug: "nirf-ranking-parameters-explained",
    excerpt:
      "How NIRF scores institutions: the five parameters and their weightages by category, the sub-parameters, the data each one needs, and a 12-month plan to improve the inputs you control.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2026-11-03",
    dateModified: "2026-11-03",
    readingTime: "11 min read",
    category: "insights",
  },
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
      "Where AI actually works on an Indian campus today: at-risk prediction, student-query chatbots, exam and admin automation, learning analytics, and the data and governance it depends on.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2026-11-03",
    readingTime: "11 min read",
    category: "insights",
  },
  {
    title: "The Benefits of Unified Campus Management",
    slug: "benefits-unified-campus-management",
    excerpt:
      "The business case for one campus database: where fragmented systems cost money, what changes office by office, how to measure the return, and how to make the case to a governing body.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2026-11-03",
    readingTime: "10 min read",
    category: "insights",
  },
  {
    title: "ERP Migration Best Practices for Universities and Colleges",
    slug: "erp-migration-best-practices",
    excerpt:
      "A phase-by-phase playbook for moving a college or university to a new campus ERP: data audit and cleansing, migration mapping, parallel runs, cut-over timing, training and the first 90 days.",
    author: EDITORIAL_AUTHOR,
    publishedAt: "2024-03-01",
    dateModified: "2026-11-03",
    readingTime: "12 min read",
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
