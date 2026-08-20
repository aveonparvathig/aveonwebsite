/**
 * One-time seeder: pushes the site's built-in fallback content into Sanity
 * so the Studio starts with real documents instead of an empty list.
 *
 * Requires SANITY_API_TOKEN in .env.local (Manage → API → Tokens → Editor).
 * Run with: node scripts/seed.mjs
 * Idempotent — uses createOrReplace with stable _ids, safe to re-run.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Minimal .env.local parser (no dotenv dependency).
const env = {};
try {
  for (const line of readFileSync(resolve(".env.local"), "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
} catch {
  console.error("Could not read .env.local");
  process.exit(1);
}

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = env.SANITY_API_TOKEN;
if (!projectId) {
  console.error("NEXT_PUBLIC_SANITY_PROJECT_ID missing in .env.local");
  process.exit(1);
}
if (!token) {
  console.error(
    "SANITY_API_TOKEN missing in .env.local.\n" +
    "Create one at sanity.io/manage → your project → API → Tokens → Add API token (Editor permissions), then add:\n" +
    "SANITY_API_TOKEN=sk...",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-08-01",
  token,
  useCdn: false,
});

const block = (text) => ({
  _type: "block",
  _key: Math.random().toString(36).slice(2, 10),
  style: "normal",
  markDefs: [],
  children: [
    {
      _type: "span",
      _key: Math.random().toString(36).slice(2, 10),
      text,
      marks: [],
    },
  ],
});

const products = [
  {
    title: "University ERP", slug: "university-erp", category: "erp", tagline: "Education ERP", order: 1,
    description: "End-to-end ERP for universities covering admissions, accounts, examinations, and departmental analytics in one integrated platform.",
    features: ["Academics & curriculum management", "Admissions & enrollment workflows", "Examination & results processing", "Fees & accounts management", "Attendance & arrear analysis", "Departmental analytics dashboards"]
  },
  {
    title: "College ERP", slug: "college-erp", category: "erp", tagline: "Education ERP", order: 2,
    description: "A complete college management system covering student lifecycle from admission to graduation with powerful reporting.",
    features: ["Student information system", "Course & timetable management", "Internal assessments & exams", "Fee collection & receipts", "Staff & faculty management", "Parent & student portals"]
  },
  {
    title: "School ERP", slug: "school-erp", category: "erp", tagline: "Education ERP", order: 3,
    description: "Simple, reliable school management attendance, communication, fees, transport, and academics for K-12 institutions.",
    features: ["Attendance & leave tracking", "Parent communication & alerts", "Fee management", "Transport & route management", "Report cards & gradebooks", "Timetable & substitution management"]
  },
  {
    title: "LMS & AI Chatbot", slug: "lms-ai-chatbot", category: "lms", tagline: "Learning Management", order: 4,
    description: "A modern learning management system with an AI chatbot that answers student queries, delivers courses, and tracks learning outcomes.",
    features: ["Course authoring & delivery", "AI chatbot for student support", "Assignments & online assessments", "Progress tracking & analytics", "Discussion forums", "Certificates & gamification"]
  },
  {
    title: "HRM & Payroll", slug: "hrm-payroll", category: "management", tagline: "HR Management", order: 5,
    description: "Human resource management and payroll processing built for educational institutionsfrom recruitment to retirement.",
    features: ["Employee records & self-service", "Payroll processing & payslips", "Leave & attendance integration", "Statutory compliance (PF, ESI, TDS)", "Appraisals & increments", "Recruitment & onboarding"]
  },
  {
    title: "Library Management", slug: "library-management", category: "management", tagline: "Campus Management", order: 6,
    description: "Digital library management with cataloguing, circulation, OPAC search, and barcode/RFID support.",
    features: ["Cataloguing & classification", "Issue, return & renewals", "OPAC search for students", "Barcode & RFID support", "Fine calculation", "Stock verification & reports"]
  },
  {
    title: "Hostel & Mess", slug: "hostel-mess", category: "management", tagline: "Campus Management", order: 7,
    description: "Hostel room allotment, mess planning, attendance and billing manage residential campuses without spreadsheets.",
    features: ["Room allotment & transfers", "Mess menu planning & food category tracking", "Hostel attendance & gate pass", "Present count & expected arrivals", "Mess billing", "Visitor management"]
  },
  {
    title: "Controller of Examination (COE)", slug: "coe", category: "erp", tagline: "Examination Management", order: 8,
    description: "Complete examination lifecycle management question banks, hall tickets, valuation, moderation and result publication.",
    features: ["Exam scheduling & hall tickets", "Question bank management", "Digital valuation & moderation", "Result processing & publication", "Revaluation workflows", "Transcripts & certificates"]
  },
  {
    title: "Inventory Management", slug: "inventory-management", category: "management", tagline: "Campus Management", order: 9,
    description: "Track assets, stores, and purchases across departments with indent workflows, stock registers, and audit-ready reports.",
    features: ["Asset & stock registers", "Purchase & indent workflows", "Department-wise issue & returns", "Vendor management", "Depreciation tracking", "Audit reports"]
  },
];

const testimonials = [
  {
    name: "Dr. R. Subramanian", role: "Registrar", institution: "Leading University, Tamil Nadu", rating: 5, featured: true,
    text: "Aveon's University ERP replaced six disconnected systems on our campus. Examinations that took our COE office three weeks to process now close in four days."
  },
  {
    name: "Prof. Meena Krishnan", role: "Principal", institution: "Autonomous Arts & Science College", rating: 5, featured: true,
    text: "The implementation team understood college workflows out of the box attendance, internals, fee collection. Our staff needed just one week of training to go live."
  },
  {
    name: "S. Anand", role: "Administrator", institution: "CBSE Senior Secondary School", rating: 4, featured: false,
    text: "Parents love the instant alerts and the fee portal. For the office, everything from admissions to transport is finally in one place."
  },
];

const posts = [
  {
    title: "Why Integrated ERP Beats Point Solutions for Campuses", slug: "integrated-erp-vs-point-solutions", category: "insights",
    author: "Aveon Team", publishedAt: "2026-07-21T09:00:00Z",
    excerpt: "Most institutions run five to ten disconnected tools. Here's what that really costs and what changes when everything shares one database.",
    paragraphs: [
      "Walk into a typical college office and count the software: one tool for admissions, another for fees, a third for attendance, spreadsheets for exams, and a WhatsApp group holding it all together. Each tool works — but none of them talk to each other.",
      "The cost shows up as re-entry: the same student's data typed into four systems, with four chances for error. It shows up at reporting time, when NAAC or AICTE asks for numbers that live in three places. And it shows up for parents and students, who juggle multiple logins for one campus.",
      "An integrated ERP changes the economics. Admission data flows to accounts, attendance flows to exam eligibility, payroll reads the same leave records the HR office maintains. One login, one database, one source of truth.",
      "That is the platform we build at Aveon nine products that behave like one, because they are one.",
    ]
  },
  {
    title: "An AI Chatbot That Actually Helps Students", slug: "ai-chatbot-for-students", category: "updates",
    author: "Aveon Team", publishedAt: "2026-06-10T09:00:00Z",
    excerpt: "Our LMS ships with an AI chatbot trained on your institution's own content. Here's how campuses are using it.",
    paragraphs: [
      '"When is my fee due?" "What\'s my attendance percentage?" "Where do I get a bonafide certificate?"  the same questions arrive at the campus office every day, hundreds of times.',
      "The AI chatbot built into Aveon's LMS answers these instantly, because it's connected to the same ERP data the office uses. Students ask in plain language; the bot answers from their actual records.",
      "Institutions using the chatbot report a measurable drop in routine office queries  freeing staff for the conversations that actually need a human.",
    ]
  },
  {
    title: "Going Live in 30 Days: How Implementation Works", slug: "erp-implementation-30-days", category: "news",
    author: "Aveon Team", publishedAt: "2026-05-02T09:00:00Z",
    excerpt: "ERP has a reputation for year-long rollouts. Our playbook gets campuses live in weeks  here's the process.",
    paragraphs: [
      "The biggest fear institutions have about ERP isn't price  it's the rollout. Everyone knows a campus where 'the new system' was two years of pain.",
      "Our implementation follows a fixed playbook: week one is data migration from your existing records; week two is configuration of your academic structure and workflows; week three is role-by-role training through Aveon Academy; week four is a supervised go-live with our team on campus.",
      "The playbook works because the product is opinionated about education. We're not configuring a generic ERP to pretend it understands semesters, arrears and revaluation — it's built for them.",
    ]
  },
];

const docs = [
  ...products.map((p) => ({
    _id: `product-${p.slug}`,
    _type: "product",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    tagline: p.tagline,
    description: p.description,
    features: p.features,
    category: p.category,
    order: p.order,
    status: "active",
  })),
  ...testimonials.map((t, i) => ({
    _id: `testimonial-${i + 1}`,
    _type: "testimonial",
    ...t,
  })),
  ...posts.map((p) => ({
    _id: `post-${p.slug}`,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    excerpt: p.excerpt,
    content: p.paragraphs.map(block),
    author: p.author,
    publishedAt: p.publishedAt,
    category: p.category,
  })),
  {
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Aveon Infotech",
    email: "contact@aveoninfotech.com",
    phone: "+91 87540 06483",
    address: "Coimbatore, Tamil Nadu, India",
    siteDescription:
      "Aveon Infotech builds ERP solutions for education  University ERP, College ERP, School ERP, LMS with AI Chatbot, HRM & Payroll, and more.",
  },
];

let tx = client.transaction();
for (const doc of docs) tx = tx.createOrReplace(doc);

try {
  await tx.commit();
  console.log(`Seeded ${docs.length} documents into ${projectId}/${env.NEXT_PUBLIC_SANITY_DATASET ?? "production"}:`);
  console.log(`- ${products.length} products\n- ${testimonials.length} testimonials\n- ${posts.length} blog posts\n- 1 site settings`);
} catch (err) {
  console.error("Seeding failed:", err.message);
  process.exit(1);
}
