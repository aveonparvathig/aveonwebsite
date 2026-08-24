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
    tagline: "University Management System",
    description:
      "One platform for the entire university — admissions, academics, OBE, CBCS, COE, fees, library, hostel, HR, research, placement, NAAC and analytics, all connected.",
    features: [
      "Admission to alumni, one student record",
      "Controller of Examination (COE) end-to-end",
      "OBE, CBCS & outcome mapping",
      "Fees, library, hostel & mess management",
      "HR, payroll, research & placement",
      "NAAC data, dashboards & role-based access",
    ],
    order: 1,
  },
  {
    title: "College ERP",
    slug: "college-erp",
    category: "erp",
    tagline: "Campus Management System",
    description:
      "One platform for your entire college — admissions, academics, OBE, CBCS, COE, fees, library, hostel, HR, placement, NAAC and analytics on a single connected campus.",
    features: [
      "Admission to graduation, one digital record",
      "Controller of Examination (COE) end-to-end",
      "OBE, CBCS & outcome mapping",
      "Fees, library, hostel & mess management",
      "HR, payroll, transport & placement",
      "NAAC data, dashboards & role-based access",
    ],
    order: 2,
  },
  {
    title: "School ERP",
    slug: "school-erp",
    category: "erp",
    tagline: "School Management System",
    description:
      "One platform for the whole school — admissions, students, academics, attendance, examinations, fees, transport, communication, staff and parent services, all connected.",
    features: [
      "Admission to next year, one student record",
      "Academics, timetable & attendance",
      "Examinations, marks & report cards",
      "Fees, staff, HR & payroll",
      "Library & transport management",
      "Parent portal, communication & dashboards",
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
    tagline: "HR & Payroll System",
    description:
      "One HRMS for the whole employee lifecycle — recruitment, records, attendance, leave, payroll, statutory compliance, payslips and self-service, all connected.",
    features: [
      "Recruitment & onboarding",
      "Employee records & self-service",
      "Attendance, leave & overtime",
      "Payroll processing & payslips",
      "Statutory compliance (PF, ESI, TDS)",
      "Appraisals, increments & reports",
    ],
    order: 5,
  },
  {
    title: "Library Management",
    slug: "library-management",
    category: "management",
    tagline: "Library Management System",
    description:
      "One digital library — catalogue, accession, patrons, circulation rules, subscriptions, stock verification and OPAC online search, connected to the campus ERP.",
    features: [
      "Catalogue, accession & author management",
      "Supplier management & catalogue import",
      "Patron categories & circulation rules",
      "Journals, newspapers & magazines",
      "Stock verification & gate register",
      "OPAC & online book search",
    ],
    order: 6,
  },
  {
    title: "Hostel & Mess",
    slug: "hostel-mess",
    category: "management",
    tagline: "Hostel & Mess Management",
    description:
      "One platform for residential life — hostel applications, rooms, beds, allocation, biometric attendance, leave, gate passes, complaints and full mess operations.",
    features: [
      "Building, wing, room & bed allocation",
      "Biometric hostel attendance",
      "Leave, permission, gate pass & outing",
      "Complaint management",
      "Mess members, menus & attendance",
      "Mess billing, stock, recipes & purchases",
    ],
    order: 7,
  },
  {
    title: "Controller of Examination (COE)",
    slug: "coe",
    category: "erp",
    tagline: "Examination Management System",
    description:
      "One connected COE platform for the whole examination lifecycle — fees, question papers, scheduling, hall seating, evaluation, results, revaluation and mark sheets.",
    features: [
      "Exam scheduling & question papers",
      "Examination fees & fines",
      "Hall & automatic seating (row/column/zig-zag)",
      "Internal, external marks & moderation",
      "Result processing, revaluation & supplementary",
      "Mark sheets & completion certificates",
    ],
    order: 8,
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    category: "management",
    tagline: "Inventory Management System",
    description:
      "One digital inventory — items, categories, suppliers, stores, purchases, stock receipts, issues, transfers, returns and reports, connected to the campus ERP.",
    features: [
      "Item, category & store management",
      "Supplier & purchase records",
      "Stock receipt, issue & transfer",
      "Returns, adjustment & verification",
      "Department-wise stock visibility",
      "Inventory reports & analytics",
    ],
    order: 9,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
