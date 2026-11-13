/**
 * Copy for the paid-ad landing pages. One layout (LandingPage.tsx), one entry
 * per ad theme, so each ad lands on a page that repeats what the ad promised
 * and carries the enquiry form.
 *
 * Product claims here are taken from lib/data/products.ts. Do not add a
 * feature, a timeline or a price that is not already stated on the site.
 */
export type LandingVariant = {
  /** URL segment under /get-started; empty for the default (college) page. */
  path: string;
  /** Product slug preselected in the demo form. */
  product: string;
  /** Name sent to analytics for the page view. */
  trackingName: string;
  metaTitle: string;
  metaDescription: string;
  headlineLead: string;
  headlineHighlight: string;
  intro: string;
  heroPoints: string[];
  reasonsTitle: string;
  /** Exactly four — the layout pairs them with four icons. */
  reasons: { title: string; text: string }[];
  modulesEyebrow: string;
  modulesTitle: string;
  modulesText: string;
  modules: string[];
  /** Third "what happens next" step; the first two are the same everywhere. */
  goLiveStep: { title: string; text: string };
  faqs: { q: string; a: string }[];
  /** The one published testimonial is from a college, so it is not shown on every page. */
  showTestimonial: boolean;
  closingTitle: string;
  whatsappMessage: string;
};

const FAQ_COST = {
  q: "What does the demo cost?",
  a: "Nothing. The demo is free and carries no obligation.",
};

const FAQ_NEXT = {
  q: "What happens after I book?",
  a: "Our team responds within one business day to fix a time for a 30-minute walkthrough.",
};

const GO_LIVE_GENERIC = {
  title: "Go live with your team trained",
  text: "Data migration, configuration, staff training and a supervised go-live.",
};

export const collegeVariant: LandingVariant = {
  path: "",
  product: "college-erp",
  trackingName: "get_started",
  metaTitle: "Book a Free College ERP Demo | Aveon Infotech",
  metaDescription:
    "See Aveon's campus ERP in action. Trusted by 200+ institutions and 1M+ students. Book a free, personalized demo — our team responds within one business day.",
  headlineLead: "The campus ERP built for",
  headlineHighlight: "Indian colleges & universities",
  intro:
    "See exactly how Aveon runs admissions, academics, examinations, fees and accreditation on one platform, tailored to your institution in a 30-minute walkthrough.",
  heroPoints: [
    "One database, one login, fourteen modules",
    "Live in about 30 days for a single campus",
    "NAAC, NBA and AICTE reporting built in",
  ],
  reasonsTitle: "Built around how an Indian campus actually runs",
  reasons: [
    {
      title: "One platform, fourteen modules",
      text: "Admissions, academics, examinations, fees, hostel, library, HR and payroll on one database with one login.",
    },
    {
      title: "Live in about 30 days",
      text: "Data migration, configuration, role-based training and a supervised go-live for a single campus.",
    },
    {
      title: "NAAC, NBA and AICTE ready",
      text: "Accreditation reports and outcome-based education built in, not bolted on at audit time.",
    },
    {
      title: "Affiliated or autonomous",
      text: "Configured for your university's exam and academic workflow, from Anna University to Bharathiar.",
    },
  ],
  modulesEyebrow: "One system, every office",
  modulesTitle: "Enter a student once. Every office sees the same record.",
  modulesText:
    "Replace disconnected tools with one campus ERP. Start with a single module and add others later without migrating data between them.",
  modules: [
    "Admissions",
    "Academics",
    "Examinations",
    "Fees",
    "Hostel",
    "Library",
    "HR & payroll",
    "Accreditation reports",
  ],
  goLiveStep: {
    title: "Go live in about 30 days",
    text: "Data migration, configuration, staff training and a supervised go-live for a single campus.",
  },
  faqs: [
    FAQ_COST,
    {
      q: "How long does implementation take?",
      a: "About 30 days for a single campus, including data migration, configuration and staff training.",
    },
    {
      q: "Can we start with one module?",
      a: "Yes. Begin with one module and add others later without migrating data between them.",
    },
    {
      q: "Does it suit affiliated and autonomous colleges?",
      a: "Yes. Aveon is configured for your university's exam and academic workflow, from Anna University to Bharathiar.",
    },
  ],
  showTestimonial: true,
  closingTitle: "Ready to see it on your campus?",
  whatsappMessage: "Hi Aveon, I'd like to know more about your campus ERP.",
};

const schoolVariant: LandingVariant = {
  path: "school-erp",
  product: "school-erp",
  trackingName: "get_started_school",
  metaTitle: "Book a Free School ERP Demo | Aveon Infotech",
  metaDescription:
    "See Aveon's school management system in action: admissions, attendance, examinations, report cards, fees and a parent portal on one platform. Book a free demo.",
  headlineLead: "One school management system for",
  headlineHighlight: "admissions, academics, fees & parents",
  intro:
    "See how Aveon runs admissions, attendance, examinations, report cards, fees, transport and parent communication on one platform, in a 30-minute walkthrough tailored to your school.",
  heroPoints: [
    "One student record, from admission to the next year",
    "Attendance, marks, report cards and fees in one login",
    "Parent portal and communication built in",
  ],
  reasonsTitle: "Built around how a school actually runs",
  reasons: [
    {
      title: "One student record",
      text: "Admission, attendance, marks and fees sit on one record that carries into the next academic year.",
    },
    {
      title: "Academics and attendance",
      text: "Academics, timetables and attendance managed in one place.",
    },
    {
      title: "Examinations and report cards",
      text: "Examinations, marks and report cards produced from the same data.",
    },
    {
      title: "Parents kept informed",
      text: "A parent portal and built-in communication, with dashboards for the management.",
    },
  ],
  modulesEyebrow: "One system, the whole school",
  modulesTitle: "One system for the office, the teachers and the parents.",
  modulesText:
    "Replace registers and disconnected tools with one school ERP. Start with a single module and add others later without migrating data between them.",
  modules: [
    "Admissions",
    "Academics & timetable",
    "Attendance",
    "Examinations & report cards",
    "Fees",
    "Staff, HR & payroll",
    "Library & transport",
    "Parent portal",
  ],
  goLiveStep: GO_LIVE_GENERIC,
  faqs: [
    FAQ_COST,
    {
      q: "Is this the college ERP with a new name?",
      a: "No. School ERP is its own product, built for schools: admissions, attendance, examinations, report cards, fees, transport and a parent portal.",
    },
    {
      q: "Can we start with one module?",
      a: "Yes. Begin with one module and add others later without migrating data between them.",
    },
    FAQ_NEXT,
  ],
  showTestimonial: false,
  closingTitle: "Ready to see it for your school?",
  whatsappMessage: "Hi Aveon, I'd like a demo of your School ERP.",
};

const hostelVariant: LandingVariant = {
  path: "hostel-mess",
  product: "hostel-mess",
  trackingName: "get_started_hostel",
  metaTitle: "Book a Free Hostel Management System Demo | Aveon Infotech",
  metaDescription:
    "See Aveon's hostel and mess management system in action: room and bed allocation, biometric attendance, gate passes, complaints and mess billing. Book a free demo.",
  headlineLead: "Hostel and mess management for",
  headlineHighlight: "rooms, attendance, gate passes & mess billing",
  intro:
    "See how Aveon handles hostel applications, room and bed allocation, biometric attendance, leave and gate passes, complaints and full mess operations on one platform.",
  heroPoints: [
    "Room and bed allocation by building and wing",
    "Biometric attendance, leave and gate passes",
    "Mess menus, billing, stock and purchases",
  ],
  reasonsTitle: "Built around how a hostel actually runs",
  reasons: [
    {
      title: "Rooms and beds",
      text: "Buildings, wings, rooms and beds allocated and tracked, starting from the hostel application.",
    },
    {
      title: "Biometric attendance",
      text: "Hostel attendance captured biometrically, alongside leave, permission, outing and gate pass records.",
    },
    {
      title: "Complaints in one place",
      text: "Complaint management for residents and the warden's office.",
    },
    {
      title: "Complete mess operations",
      text: "Mess members, menus, attendance, billing, stock, recipes and purchases.",
    },
  ],
  modulesEyebrow: "One system for residential life",
  modulesTitle: "From the hostel application to the mess bill, on one record.",
  modulesText:
    "Replace registers and spreadsheets with one hostel and mess system. Start with this module and add others later without migrating data between them.",
  modules: [
    "Hostel applications",
    "Room & bed allocation",
    "Biometric attendance",
    "Leave & gate pass",
    "Complaints",
    "Mess menus & attendance",
    "Mess billing",
    "Stock & purchases",
  ],
  goLiveStep: GO_LIVE_GENERIC,
  faqs: [
    FAQ_COST,
    {
      q: "Does it cover the mess as well?",
      a: "Yes. Mess members, menus, attendance, billing, stock, recipes and purchases are part of the same product.",
    },
    {
      q: "Can we use only the hostel module?",
      a: "Yes. Begin with one module and add others later without migrating data between them.",
    },
    FAQ_NEXT,
  ],
  showTestimonial: true,
  closingTitle: "Ready to see it for your hostel?",
  whatsappMessage: "Hi Aveon, I'd like a demo of your Hostel & Mess management system.",
};

const feesVariant: LandingVariant = {
  path: "fees-management",
  product: "fees-management",
  trackingName: "get_started_fees",
  metaTitle: "Book a Free Fee Management Software Demo | Aveon Infotech",
  metaDescription:
    "See Aveon's fee management software in action: fee structures, online payments, digital receipts, dues tracking, scholarships and financial reports. Book a free demo.",
  headlineLead: "Fee management software for",
  headlineHighlight: "online collection, receipts & dues",
  intro:
    "See how Aveon handles fee structures, online payments, digital receipts, dues tracking, scholarships and financial reports, connected to your campus ERP.",
  heroPoints: [
    "Fee structures and installment plans",
    "Online payments with digital receipts",
    "Dues, scholarships, concessions and refunds tracked",
  ],
  reasonsTitle: "Built around how a fee office actually runs",
  reasons: [
    {
      title: "Fee structures and installments",
      text: "Fee structures and installment plans set up in one place.",
    },
    {
      title: "Online collection",
      text: "Online payment gateway integration, with digital receipts.",
    },
    {
      title: "Dues and concessions",
      text: "Dues, scholarships, concessions, waivers, refunds and fee adjustments tracked together.",
    },
    {
      title: "Reports for management",
      text: "Financial reports and dashboards, connected to your campus ERP.",
    },
  ],
  modulesEyebrow: "One system for the fee office",
  modulesTitle: "From the fee structure to the receipt, on one record.",
  modulesText:
    "Replace manual receipts and spreadsheets with one fee system. Start with this module and add others later without migrating data between them.",
  modules: [
    "Fee structures",
    "Installment plans",
    "Online payments",
    "Digital receipts",
    "Dues tracking",
    "Scholarships & concessions",
    "Refunds & adjustments",
    "Financial reports",
  ],
  goLiveStep: GO_LIVE_GENERIC,
  faqs: [
    FAQ_COST,
    {
      q: "Does it take online payments?",
      a: "Yes. It integrates with an online payment gateway and issues digital receipts.",
    },
    {
      q: "Can we use only the fees module?",
      a: "Yes. Begin with one module and add others later without migrating data between them.",
    },
    FAQ_NEXT,
  ],
  showTestimonial: true,
  closingTitle: "Ready to see it in action?",
  whatsappMessage: "Hi Aveon, I'd like a demo of your Fees Management software.",
};

/** Variants served at /get-started/<path>. The college page is /get-started itself. */
export const productVariants: LandingVariant[] = [schoolVariant, hostelVariant, feesVariant];

export function getProductVariant(path: string): LandingVariant | undefined {
  return productVariants.find((v) => v.path === path);
}
