export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: "news" | "insights" | "updates";
  /** Fallback body as plain paragraphs; Sanity posts use Portable Text. */
  paragraphs: string[];
};

/** Fallback content mirroring the Sanity `post` schema. */
export const posts: Post[] = [
  {
    title: "Why Integrated ERP Beats Point Solutions for Campuses",
    slug: "integrated-erp-vs-point-solutions",
    excerpt:
      "Most institutions run five to ten disconnected tools. Here's what that really costs — and what changes when everything shares one database.",
    author: "Aveon Team",
    publishedAt: "2026-07-21",
    category: "insights",
    paragraphs: [
      "Walk into a typical college office and count the software: one tool for admissions, another for fees, a third for attendance, spreadsheets for exams, and a WhatsApp group holding it all together. Each tool works — but none of them talk to each other.",
      "The cost shows up as re-entry: the same student's data typed into four systems, with four chances for error. It shows up at reporting time, when NAAC or AICTE asks for numbers that live in three places. And it shows up for parents and students, who juggle multiple logins for one campus.",
      "An integrated ERP changes the economics. Admission data flows to accounts, attendance flows to exam eligibility, payroll reads the same leave records the HR office maintains. One login, one database, one source of truth.",
      "That is the platform we build at Aveon — nine products that behave like one, because they are one.",
    ],
  },
  {
    title: "An AI Chatbot That Actually Helps Students",
    slug: "ai-chatbot-for-students",
    excerpt:
      "Our LMS ships with an AI chatbot trained on your institution's own content. Here's how campuses are using it.",
    author: "Aveon Team",
    publishedAt: "2026-06-10",
    category: "updates",
    paragraphs: [
      "\"When is my fee due?\" \"What's my attendance percentage?\" \"Where do I get a bonafide certificate?\" — the same questions arrive at the campus office every day, hundreds of times.",
      "The AI chatbot built into Aveon's LMS answers these instantly, because it's connected to the same ERP data the office uses. Students ask in plain language; the bot answers from their actual records.",
      "Institutions using the chatbot report a measurable drop in routine office queries — freeing staff for the conversations that actually need a human.",
    ],
  },
  {
    title: "Going Live in 30 Days: How Implementation Works",
    slug: "erp-implementation-30-days",
    excerpt:
      "ERP has a reputation for year-long rollouts. Our playbook gets campuses live in weeks — here's the process.",
    author: "Aveon Team",
    publishedAt: "2026-05-02",
    category: "news",
    paragraphs: [
      "The biggest fear institutions have about ERP isn't price — it's the rollout. Everyone knows a campus where 'the new system' was two years of pain.",
      "Our implementation follows a fixed playbook: week one is data migration from your existing records; week two is configuration of your academic structure and workflows; week three is role-by-role training through Aveon Academy; week four is a supervised go-live with our team on campus.",
      "The playbook works because the product is opinionated about education. We're not configuring a generic ERP to pretend it understands semesters, arrears and revaluation — it's built for them.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
