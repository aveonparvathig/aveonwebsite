import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, type Product } from "@/lib/data/products";
import { productJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";
import UniversityERPContent, { universityErpFaqs } from "@/components/sections/UniversityERPContent";
import CollegeERPContent, { collegeErpFaqs } from "@/components/sections/CollegeERPContent";
import SchoolERPContent, { schoolErpFaqs } from "@/components/sections/SchoolERPContent";
import HrmPayrollContent, { hrmPayrollFaqs } from "@/components/sections/HrmPayrollContent";
import CoeContent, { coeFaqs } from "@/components/sections/CoeContent";
import LibraryContent, { libraryFaqs } from "@/components/sections/LibraryContent";
import HostelContent, { hostelFaqs } from "@/components/sections/HostelContent";
import InventoryContent, { inventoryFaqs } from "@/components/sections/InventoryContent";
import CollegeDashboardMockup from "@/components/sections/CollegeDashboardMockup";
import HeroDashboard from "@/components/sections/HeroDashboards";
import { fetchOrFallback } from "@/lib/sanity";
import { productBySlugQuery } from "@/lib/queries";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

async function loadProduct(slug: string): Promise<Product | undefined> {
  return fetchOrFallback<Product | undefined>(
    productBySlugQuery,
    getProduct(slug),
    { slug },
  );
}

/** Per-slug SEO overrides (title/description/keywords) for high-value pages. */
const seoOverrides: Record<string, Metadata> = {
  "inventory-management": {
    title: "Inventory Management System | Inventory ERP Software",
    description:
      "Aveon Inventory Management System helps educational institutions organize items, suppliers, stores, purchases, stock receipts, issues, transfers, returns and inventory reports through an integrated ERP platform.",
    keywords: [
      "Inventory Management System",
      "Inventory Management Software",
      "Inventory ERP Software",
      "Stock Management System",
      "School Inventory Management Software",
      "College Inventory Management System",
      "University Inventory Management Software",
      "Store Management Software",
      "Inventory Control System",
      "Digital Inventory Management",
    ],
  },
  "hostel-mess": {
    title: "Hostel & Mess Management System | Hostel ERP Software",
    description:
      "Aveon Hostel & Mess Management System helps colleges and universities manage hostel applications, rooms, beds, attendance, leave, permissions, gate passes, mess, billing, menus, stock and purchases.",
    keywords: [
      "Hostel Management System",
      "Hostel & Mess Management Software",
      "College Hostel Management System",
      "University Hostel Management Software",
      "Hostel ERP Software",
      "Hostel Room Allocation Software",
      "Hostel Attendance Management System",
      "Hostel Mess Management System",
      "Mess Billing Software",
      "College Mess Management Software",
    ],
  },
  "library-management": {
    title: "Library Management System | Library Management Software",
    description:
      "Aveon Library Management System helps schools, colleges and universities manage catalogues, books, accession, patrons, circulation rules, subscriptions, stock verification and OPAC online book search.",
    keywords: [
      "Library Management System",
      "Library Management Software",
      "Digital Library Management System",
      "College Library Management Software",
      "University Library Management System",
      "School Library Management Software",
      "Library ERP Software",
      "OPAC Library Software",
      "Library Catalogue Management",
      "Library Circulation Management",
    ],
  },
  "coe": {
    title: "Controller of Examination Software | COE Management System",
    description:
      "Aveon COE Software helps colleges and universities manage examinations, fees, question papers, timetables, hall seating, evaluation, results, revaluation and mark sheets on one platform.",
    keywords: [
      "Controller of Examination Software",
      "COE Software",
      "Examination Management System",
      "University Examination Software",
      "College Examination Management System",
      "COE Management System",
      "Online Examination Software",
      "University Result Management System",
      "Examination Scheduling Software",
      "Question Paper Management System",
      "Exam Hall Management Software",
    ],
  },
  "hrm-payroll": {
    title: "HR Management & Payroll Software | Employee Management System",
    description:
      "Aveon HR Management & Payroll Software helps educational institutions manage employee profiles, recruitment, leave, attendance (biometric & face reader), overtime, salary calculation, payroll, appraisal and payslips through one integrated ERP platform.",
    keywords: [
      "HR Management & Payroll Software",
      "Human Resource Management Software",
      "Payroll Software for Colleges",
      "Payroll Software for Universities",
      "Employee Management System",
      "Staff Management Software",
      "HRMS for Educational Institutions",
      "Employee Attendance Software",
      "Face Recognition Attendance Software",
      "Leave Management System",
      "Payroll Processing Software",
      "Staff Appraisal Software",
    ],
  },
  "school-erp": {
    title: "School ERP Software | School Management System",
    description:
      "Aveon School ERP is an integrated school management system for admissions, student records, academics, attendance, fees, examinations, transport, communication, staff and parent services.",
    keywords: [
      "School ERP Software",
      "School Management Software",
      "School ERP System",
      "School Management System",
      "School Administration Software",
      "Student Management System",
      "School Fee Management Software",
      "School Attendance Management Software",
      "School Examination Management System",
      "School Transport Management Software",
      "Education ERP Software",
      "Digital School Management System",
    ],
  },
  "university-erp": {
    title: "University ERP Software | University Management System",
    description:
      "Aveon University Management System connects admissions, academics, students, examinations, fees, library, hostel, HR, research, placement and administration on one digital platform.",
    keywords: [
      "University Management System",
      "University ERP Software",
      "University ERP",
      "University Management Software",
      "Higher Education ERP",
      "University Academic Management System",
      "University Examination Management System",
      "University Student Management System",
      "University Fee Management Software",
      "University HR & Payroll Software",
      "University Hostel Management System",
      "University Library Management System",
    ],
  },
  "college-erp": {
    title: "College ERP Software | Complete Campus Management System",
    description:
      "Manage your complete college digitally with Aveon College ERP. Admissions, academics, OBE, CBCS, COE, fees, library, hostel, HR, placement, NAAC, communication and analytics.",
    keywords: [
      "College ERP Software",
      "College Management Software",
      "Campus Management System",
      "Higher Education ERP",
      "Academic Management System",
      "Student Management System",
      "COE Management System",
      "College Fee Management Software",
      "College Hostel Management Software",
      "College Library Management Software",
      "College HR & Payroll Software",
      "College Placement Management Software",
    ],
  },
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await loadProduct(slug);
  if (!product) return {};
  const override = seoOverrides[slug];
  return {
    title: override?.title ?? product.title,
    description: override?.description ?? product.description,
    ...(override?.keywords ? { keywords: override.keywords } : {}),
  };
}

/** Per-product hero image (place PNGs/JPGs in /public/products/) */
const heroImages: Record<string, string> = {
  "university-erp": "/products/university.png",
  "college-erp": "/products/cms.png",
  "school-erp": "/products/school.png",
  "lms-ai-chatbot": "/products/lms.png",
  "hrm-payroll": "/products/hrm.png",
  "library-management": "/products/lib.png",
  "hostel-mess": "/products/hostel.png",
  "coe": "/products/co.png",
  "inventory-management": "/products/invent.png",
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await loadProduct(slug);
  if (!product) notFound();

  const heroImg = heroImages[product.slug] ?? "/images/university.png";

  /** Products with a bespoke content component — the generic Key Features
   *  grid (sourced from CMS data) is redundant and hidden for these. */
  const richContentSlugs = new Set([
    "university-erp",
    "college-erp",
    "school-erp",
    "hrm-payroll",
    "coe",
    "library-management",
    "hostel-mess",
    "inventory-management",
  ]);
  const hasRichContent = richContentSlugs.has(product.slug);

  const jsonLd = [
    productJsonLd(product),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: product.title, href: `/products/${product.slug}` },
    ]),
    ...(product.slug === "college-erp" ? [faqJsonLd(collegeErpFaqs)] : []),
    ...(product.slug === "university-erp" ? [faqJsonLd(universityErpFaqs)] : []),
    ...(product.slug === "school-erp" ? [faqJsonLd(schoolErpFaqs)] : []),
    ...(product.slug === "hrm-payroll" ? [faqJsonLd(hrmPayrollFaqs)] : []),
    ...(product.slug === "coe" ? [faqJsonLd(coeFaqs)] : []),
    ...(product.slug === "library-management" ? [faqJsonLd(libraryFaqs)] : []),
    ...(product.slug === "hostel-mess" ? [faqJsonLd(hostelFaqs)] : []),
    ...(product.slug === "inventory-management" ? [faqJsonLd(inventoryFaqs)] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: 2-column split ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white border-b border-navy-100">
        {/* ambient glows */}
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-primary-200/30 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-200/20 blur-[80px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:py-20">

          {/* Left: text */}
          <div>
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              {product.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl xl:text-6xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-600">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700"
              >
                Get a DEMO →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right: product image (College ERP uses a bespoke dashboard mockup) */}
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-100/40 via-transparent to-accent-100/30 blur-2xl" />
            <div className="relative w-full overflow-hidden rounded-2xl border border-navy-100 shadow-2xl">
              {product.slug === "college-erp" || product.slug === "university-erp" || product.slug === "school-erp" ? (
                <CollegeDashboardMockup />
              ) : product.slug === "hrm-payroll" ? (
                <HeroDashboard variant="payroll" />
              ) : product.slug === "coe" ? (
                <HeroDashboard variant="exam" />
              ) : product.slug === "hostel-mess" ? (
                <HeroDashboard variant="hostel" />
              ) : (
                <Image
                  src={heroImg}
                  alt={`${product.title} dashboard`}
                  width={680}
                  height={430}
                  priority
                  className="w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {product.slug === "university-erp" && <UniversityERPContent />}
      {product.slug === "college-erp" && <CollegeERPContent />}
      {product.slug === "school-erp" && <SchoolERPContent />}
      {product.slug === "hrm-payroll" && <HrmPayrollContent />}
      {product.slug === "coe" && <CoeContent />}
      {product.slug === "library-management" && <LibraryContent />}
      {product.slug === "hostel-mess" && <HostelContent />}
      {product.slug === "inventory-management" && <InventoryContent />}

      {/* ── Key Features (only for products without a bespoke content page) ── */}
      {!hasRichContent && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Key Features</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-5 shadow-card"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-sm font-medium text-navy-800">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Products ── */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy-900">Related Products</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {products
            .filter((p) => p.slug !== product.slug)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-full border border-navy-200 px-5 py-2.5 text-sm font-medium text-navy-800 hover:border-primary-400 hover:text-primary-600"
              >
                {p.title}
              </Link>
            ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
