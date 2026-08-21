export type Product = {
  title: string;
  slug: string;
  category: "erp" | "lms" | "management";
  tagline: string;
  description: string;
  features: string[];
  order: number;
};

/**
 * Local fallback content, mirroring the Sanity `product` schema.
 * Once the Sanity project is provisioned and populated, pages read from
 * Sanity first and fall back to this data when unconfigured.
 */
export const products: Product[] = [
  {
    title: "University ERP",
    slug: "university-erp",
    category: "erp",
    tagline: "Education ERP",
    description:
      "End-to-end ERP for universities covering admissions, accounts, examinations, and departmental analytics in one integrated platform.",
    features: [
      "Academics & curriculum management",
      "Admissions & enrollment workflows",
      "Examination & results processing",
      "Fees & accounts management",
      "Attendance & arrear analysis",
      "Departmental analytics dashboards",
    ],
    order: 1,
  },
  {
    title: "College ERP",
    slug: "college-erp",
    category: "erp",
    tagline: "Education ERP",
    description:
      "A complete college management system covering student lifecycle from admission to graduation with powerful reporting.",
    features: [
      "Student information system",
      "Course & timetable management",
      "Internal assessments & exams",
      "Fee collection & receipts",
      "Staff & faculty management",
      "Parent & student portals",
    ],
    order: 2,
  },
  {
    title: "School ERP",
    slug: "school-erp",
    category: "erp",
    tagline: "Education ERP",
    description:
      "Simple, reliable school management attendance, communication, fees, transport and academics for K-12 institutions.",
    features: [
      "Attendance & leave tracking",
      "Parent communication & alerts",
      "Fee management",
      "Transport & route management",
      "Report cards & gradebooks",
      "Timetable & substitution management",
    ],
    order: 3,
  },
  {
    title: "LMS & AI Chatbot",
    slug: "lms-ai-chatbot",
    category: "lms",
    tagline: "Learning Management",
    description:
      "A modern learning management system with an AI chatbot that answers student queries, delivers courses and tracks learning outcomes.",
    features: [
      "Course authoring & delivery",
      "AI chatbot for student support",
      "Assignments & online assessments",
      "Progress tracking & analytics",
      "Discussion forums",
      "Certificates & gamification",
    ],
    order: 4,
  },
  {
    title: "HRM & Payroll",
    slug: "hrm-payroll",
    category: "management",
    tagline: "HR Management",
    description:
      "Human resource management and payroll processing built for educational institutions  from recruitment to retirement.",
    features: [
      "Employee records & self-service",
      "Payroll processing & payslips",
      "Leave & attendance integration",
      "Statutory compliance (PF, ESI, TDS)",
      "Appraisals & increments",
      "Recruitment & onboarding",
    ],
    order: 5,
  },
  {
    title: "Library Management",
    slug: "library-management",
    category: "management",
    tagline: "Campus Management",
    description:
      "Digital library management with cataloguing, circulation, OPAC search, and barcode/RFID support.",
    features: [
      "Cataloguing & classification",
      "Issue, return & renewals",
      "OPAC search for students",
      "Barcode & RFID support",
      "Fine calculation",
      "Stock verification & reports",
    ],
    order: 6,
  },
  {
    title: "Hostel & Mess",
    slug: "hostel-mess",
    category: "management",
    tagline: "Campus Management",
    description:
      "Hostel room allotment, mess planning, attendance and billing  manage residential campuses without spreadsheets.",
    features: [
      "Room allotment & transfers",
      "Mess menu planning & food category tracking",
      "Hostel attendance & gate pass",
      "Present count & expected arrivals",
      "Mess billing",
      "Visitor management",
    ],
    order: 7,
  },
  {
    title: "Controller of Examination (COE)",
    slug: "coe",
    category: "erp",
    tagline: "Examination Management",
    description:
      "Complete examination lifecycle management question banks, hall tickets, valuation, moderation and result publication.",
    features: [
      "Exam scheduling & hall tickets",
      "Question bank management",
      "Digital valuation & moderation",
      "Result processing & publication",
      "Revaluation workflows",
      "Transcripts & certificates",
    ],
    order: 8,
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    category: "management",
    tagline: "Campus Management",
    description:
      "Track assets, stores, and purchases across departments with indent workflows, stock registers and audit-ready reports.",
    features: [
      "Asset & stock registers",
      "Purchase & indent workflows",
      "Department-wise issue & returns",
      "Vendor management",
      "Depreciation tracking",
      "Audit reports",
    ],
    order: 9,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
