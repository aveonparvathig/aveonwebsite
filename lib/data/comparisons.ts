/**
 * Head-to-head comparison pages: Aveon vs a named vendor.
 *
 * Rules (these pages name competitors, so they are held to a higher bar):
 * - Every competitor fact comes from that vendor's own website and carries a
 *   source URL in `sources`. Attribute claims ("MasterSoft states…"); never
 *   assert a competitor lacks something — write "Not stated on its website".
 * - No ratings, review counts or AggregateRating markup.
 * - Aveon facts must match siteConfig.stats and the product pages.
 * - Re-check every vendor quarterly and bump `reviewed` when you do.
 */

export type MatrixRow = { label: string; aveon: string; them: string };

export type Comparison = {
  slug: string;
  vendor: string; // short display name
  vendorFull: string; // company + product, for the intro
  vendorUrl: string;
  reviewed: string; // ISO date the vendor's site was last read
  title: string; // <title>, without the site suffix
  description: string;
  h1: string;
  keywords: string[];
  summary: string; // two-sentence answer shown above the fold
  bestFor: { aveon: string; them: string };
  about: string[]; // paragraphs on the vendor, attributed
  matrix: MatrixRow[];
  theirStrengths: string[];
  aveonDifferences: string[];
  chooseThem: string[];
  chooseAveon: string[];
  demoQuestions: string[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};

const AVEON = {
  market: "Colleges, universities and schools in India; strongest in Tamil Nadu and Karnataka",
  hq: "Coimbatore, Tamil Nadu",
  since: "2012",
  scale: "200+ institutions, 1M+ students (Aveon figures)",
  deployment: "Cloud; on-premise where an institution or regulator mandates it",
  obe: "Native OBE module: CO-PO-PSO mapping, question-level CO tagging, direct and indirect attainment",
  accreditation: "IQAC / NAAC / NBA module mapping records to metrics, plus AICTE and NIRF formats",
  exams: "Controller of Examination (COE) end-to-end, plus an online examination product",
  hr: "HRM & Payroll on the same database",
  ops: "Hostel & mess, library, inventory, canteen and grievance, all Aveon products",
  portals: "Student and parent portals, online fee payment, and an AI assistant that answers from live ERP data",
  pricing: "Not published; itemised quote after scoping",
  implementation: "Four-week playbook: migration, configuration, role-based training, supervised go-live",
};

export const comparisons: Comparison[] = [
  {
    slug: "aveon-vs-mastersoft",
    vendor: "MasterSoft",
    vendorFull: "MasterSoft ERP Solutions (iitms.co.in)",
    vendorUrl: "https://www.iitms.co.in/",
    reviewed: "2026-11-13",
    title: "Aveon vs MasterSoft: College ERP Compared (2026)",
    description:
      "Aveon vs MasterSoft ERP for Indian colleges and universities: modules, OBE and NAAC support, deployment, pricing model and when each is the better fit.",
    h1: "Aveon vs MasterSoft: Which Campus ERP Fits Your Institution?",
    keywords: [
      "Aveon vs MasterSoft",
      "MasterSoft ERP alternative",
      "MasterSoft ERP review",
      "MasterSoft vs Aveon college ERP",
      "MasterSoft UAIMS alternative",
    ],
    summary:
      "MasterSoft is one of India's longest-running education ERP vendors, with a large product catalogue and a university-scale suite (UAIMS) used by several national institutes. Aveon is a younger, single-database campus ERP built in Coimbatore, with native OBE attainment and a fixed four-week implementation; it suits affiliated and autonomous colleges in South India that want one product rather than a catalogue.",
    bestFor: {
      them: "Large universities and national institutes that want a long-established vendor with affiliation, on-screen evaluation and university-wide e-governance modules.",
      aveon: "Affiliated and autonomous colleges, and single-campus universities, that want every module on one database with OBE and NAAC data computed from day-to-day records.",
    },
    about: [
      "MasterSoft ERP Solutions is headquartered in Nagpur, with offices in Mumbai and Chennai. Its About page dates the company's journey to 1995 and describes the founder's earlier work building examination and accounts software for Nagpur University.",
      "The company sells a family of products rather than a single application: CCMS for colleges, CSMS for schools, UAIMS for universities, an Accreditation Data Management System (ADMS), exam management, digital evaluation, admissions and fees products. Its university page describes 23+ pro modules and 45+ built-in modules; its college page describes 25+ pro modules and 30+ built-in modules.",
      "MasterSoft's institution count differs between its own pages: the homepage shows 1,100+ institutes and 1.5M+ active students, while the About page shows 2,200+ institutions and 10M+ users. Testimonials and logos on its site include Mizoram University, NIT Goa, SVNIT Surat, NIT Srinagar and LNMIIT Jaipur.",
    ],
    matrix: [
      { label: "Primary market", aveon: AVEON.market, them: "Schools, colleges and universities across India, including national institutes" },
      { label: "Headquarters", aveon: AVEON.hq, them: "Nagpur, Maharashtra (offices in Mumbai and Chennai)" },
      { label: "Operating since", aveon: AVEON.since, them: "1995 (company history timeline)" },
      { label: "Stated scale", aveon: AVEON.scale, them: "1,100+ institutes on the homepage; 2,200+ institutions on the About page" },
      { label: "Product structure", aveon: "Fourteen products on one database and one login", them: "Separate named products (CCMS, CSMS, UAIMS, ADMS, exam, fees and others)" },
      { label: "Deployment", aveon: AVEON.deployment, them: "Cloud (MasterSoft Cloud); UAIMS can also be hosted in the university's data centre" },
      { label: "OBE", aveon: AVEON.obe, them: "OBE listed as a college module; homepage states it is compliant with NBA" },
      { label: "NAAC / NBA reporting", aveon: AVEON.accreditation, them: "ADMS product for NAAC / NBA readiness" },
      { label: "Examinations", aveon: AVEON.exams, them: "Exam management, online assessment and a digital evaluation system" },
      { label: "University affiliation management", aveon: "Ask in demo: scope it to your university's process", them: "College affiliation module in UAIMS" },
      { label: "HR and payroll", aveon: AVEON.hr, them: "HRMS and payroll modules" },
      { label: "Hostel, library and stores", aveon: AVEON.ops, them: "Hostel, library automation, purchase and stores modules" },
      { label: "Student / parent access", aveon: AVEON.portals, them: "Student Diary app for students and parents; M-OPAC library app" },
      { label: "Published pricing", aveon: AVEON.pricing, them: "Not stated on its website" },
    ],
    theirStrengths: [
      "Three decades in education software, which matters to boards that weigh vendor longevity heavily.",
      "University-scale references, including several NITs and central and state universities.",
      "A university suite with affiliation management and on-premise hosting in the university's own data centre, which some state universities require.",
      "Digital evaluation and online assessment products for large examination volumes.",
    ],
    aveonDifferences: [
      "One product, one database: fees, attendance, exams, OBE and NAAC data are the same records, not separate products that have to be integrated.",
      "OBE attainment is computed from marks already in the exam module, with CO tagging at question level, so the NBA and NAAC numbers are a by-product of running exams.",
      "A written four-week implementation plan with Aveon's own team in Coimbatore doing migration, configuration and on-campus go-live.",
      "Affiliating-university rules for Anna University, VTU, JNTU and state boards ship as configuration rather than customisation.",
    ],
    chooseThem: [
      "You are a large or multi-faculty university that needs college affiliation management and on-screen evaluation at scale.",
      "Your procurement rules favour a vendor with a long operating history and NIT or central-university references.",
      "You need the system hosted in your own data centre under the university's IT team.",
    ],
    chooseAveon: [
      "You are an affiliated or autonomous college, or a single-campus university, and want one product rather than a set of products.",
      "NBA or NAAC is due within two years and you need CO-PO attainment computed from real marks now.",
      "You want an implementation partner within a few hours of campus in Tamil Nadu or Karnataka.",
    ],
    demoQuestions: [
      "Are admissions, fees, exams and OBE one product on one database, or separate products? Show a student's fee dues from the attendance screen.",
      "Compute CO attainment for one real course from last semester's marks, live.",
      "Generate NAAC Criterion 2 data templates for five years with evidence attached.",
      "Which of the modules in our quote are 'pro' modules priced separately?",
      "Give us the written implementation plan and name who cleans our data.",
    ],
    faqs: [
      {
        q: "Is Aveon a good alternative to MasterSoft ERP?",
        a: "For affiliated and autonomous colleges and single-campus universities in South India, yes: Aveon offers the same core campus modules on one database with native OBE attainment and a four-week implementation. For large universities that need college affiliation management or on-premise hosting under the university's IT team, MasterSoft's UAIMS is built for that scale. Score both on the same demo questions.",
      },
      {
        q: "How many institutions use MasterSoft?",
        a: "MasterSoft's own figures differ by page: its homepage shows 1,100+ institutes and its About page shows 2,200+ institutions (both as of November 2026). Ask the vendor which figure applies to the product you are evaluating.",
      },
      {
        q: "Does MasterSoft publish its prices?",
        a: "No. As of November 2026 MasterSoft's website does not publish pricing; it is quoted per institution. Aveon also quotes per institution. Ask both for a five-year total covering licence, implementation, AMC, training and modules added later.",
      },
      {
        q: "Can we migrate from MasterSoft to Aveon?",
        a: "Yes. Aveon's migration step imports student, staff, fee and examination history from exports of the existing system. Ask MasterSoft for a full export of your data in open formats before you sign anything new.",
      },
    ],
    sources: [
      { label: "MasterSoft — About us", url: "https://iitms.co.in/aboutus.html" },
      { label: "MasterSoft — Homepage", url: "https://www.iitms.co.in/" },
      { label: "MasterSoft — College ERP", url: "https://www.iitms.co.in/college-erp/" },
      {
        label: "MasterSoft — UAIMS (university)",
        url: "https://www.iitms.co.in/products/university-administration-and-information-management-system/",
      },
    ],
  },
  {
    slug: "aveon-vs-camu",
    vendor: "Camu",
    vendorFull: "Camu by Octoze (camudigitalcampus.com)",
    vendorUrl: "https://camudigitalcampus.com/",
    reviewed: "2026-11-13",
    title: "Aveon vs Camu: Campus ERP and SIS Compared (2026)",
    description:
      "Aveon vs Camu for Indian colleges and universities: SIS and LMS scope, OBE, NAAC and NBA support, deployment, implementation and which fits your campus.",
    h1: "Aveon vs Camu: Comparing Two Campus Platforms for Indian Higher Education",
    keywords: ["Aveon vs Camu", "Camu alternative", "Camu ERP review", "Camu vs Aveon college ERP", "Camu SIS alternative India"],
    summary:
      "Camu is a cloud platform that combines a student information system with a learning management system, and its vendor reports a 2026 Gartner Magic Quadrant listing for higher-education SIS. Aveon is a campus ERP that adds HR and payroll, hostel, inventory, canteen and grievance on the same database, with native OBE and NAAC reporting; it suits institutions that want administration and accreditation in one system.",
    bestFor: {
      them: "Institutions that want a unified SIS and LMS in a cloud product, including online and distance-learning programmes.",
      aveon: "Colleges and universities that want academics, accreditation and campus operations, including HR, payroll, hostel and stores, on one database.",
    },
    about: [
      "Camu is built by Octoze. Its marketing site, camudigitalcampus.com, describes a cloud-based campus management platform covering SIS, LMS, a unified SIS and LMS, and an online learning system for distance and online education.",
      "The site lists admissions, fees, attendance (biometric, QR and mobile), an exam management system for online and offline exams with digital evaluation, OBE with attainment analytics, accreditation workflow automation, CBCS course registration, placement, library, cafeteria and hostel, plus mobile apps and AI features (Camu AI and an AI Content Studio).",
      "Camu states it serves 250+ institutions and that it was recognised as a Niche Player in the 2026 Gartner Magic Quadrant for Higher Education SaaS Student Information Systems. It does not publish pricing.",
    ],
    matrix: [
      { label: "Primary market", aveon: AVEON.market, them: "Higher education, including online and distance learning; India and international" },
      { label: "Headquarters", aveon: AVEON.hq, them: "Not stated on its website (Indian phone lines listed)" },
      { label: "Operating since", aveon: AVEON.since, them: "Not stated on the pages reviewed" },
      { label: "Stated scale", aveon: AVEON.scale, them: "250+ institutions" },
      { label: "Core architecture", aveon: "Campus ERP: fourteen products on one database", them: "Unified SIS and LMS platform" },
      { label: "Deployment", aveon: AVEON.deployment, them: "Cloud" },
      { label: "OBE", aveon: AVEON.obe, them: "Automated outcome mapping and attainment analytics" },
      { label: "NAAC / NBA reporting", aveon: AVEON.accreditation, them: "Accreditation workflow automation (ask which NAAC / NBA formats are covered)" },
      { label: "Examinations", aveon: AVEON.exams, them: "Exam management (CoE): online and offline exams, digital evaluation, results" },
      { label: "LMS", aveon: "LMS with AI chatbot (Aveon product)", them: "LMS built into the platform; online learning system for ODL" },
      { label: "HR and payroll", aveon: AVEON.hr, them: "Not listed on the pages reviewed" },
      { label: "Hostel, library, canteen", aveon: AVEON.ops, them: "Hostel, library and cafeteria listed" },
      { label: "Mobile apps", aveon: AVEON.portals, them: "Student and staff mobile apps" },
      { label: "Published pricing", aveon: AVEON.pricing, them: "Not stated on its website" },
    ],
    theirStrengths: [
      "A genuinely unified SIS and LMS, useful where teaching and learning content matters as much as administration.",
      "An online and distance learning offering for institutions running ODL programmes.",
      "Analyst visibility: the vendor reports a 2026 Gartner Magic Quadrant listing in the higher-education SIS category.",
      "Mobile-first design and AI content tools for faculty.",
    ],
    aveonDifferences: [
      "Administration beyond academics is in the same system: HR and payroll, inventory, canteen and grievance are Aveon products on the same database.",
      "NAAC metrics, NBA SAR tables, AICTE and NIRF formats are mapped in the IQAC module, so accreditation data is generated from daily records with evidence attached.",
      "Cloud by default, but on-premise is available where a university or state body mandates it.",
      "Implementation is run by Aveon's own team on campus, with a written four-week plan.",
    ],
    chooseThem: [
      "Teaching and learning (LMS, online programmes, content creation) is your main driver.",
      "You run online or distance-learning programmes alongside regular ones.",
      "Analyst recognition is part of your procurement criteria.",
    ],
    chooseAveon: [
      "You want HR, payroll, hostel and stores in the same system as academics, not in a separate product.",
      "NAAC or NBA is the deadline driving the purchase and you need metric-wise data templates with evidence.",
      "Your institution or affiliating university requires an on-premise option.",
    ],
    demoQuestions: [
      "Is HR and payroll part of the same database, or an integration with another product?",
      "Generate NAAC Criterion 2 and NBA Criterion 3 tables from the demo data, with evidence attached.",
      "Configure our affiliating university's internal-mark and revaluation rules in the demo.",
      "Show the full five-year cost, including LMS seats and modules added in year two.",
      "Export all our data in open formats, now, and show the exit clause.",
    ],
    faqs: [
      {
        q: "Is Aveon a good alternative to Camu?",
        a: "If your priority is a full campus ERP — academics plus HR, payroll, hostel, stores and accreditation reporting on one database — Aveon is a strong alternative. If your priority is a unified SIS and LMS with online and distance-learning programmes, Camu is designed for that. Many institutions decide by which side of the campus is driving the purchase.",
      },
      {
        q: "Does Camu support NAAC and NBA?",
        a: "Camu's website describes OBE with attainment analytics and automated accreditation workflows. It does not list specific NAAC or NBA report formats on the pages we reviewed in November 2026, so ask for NAAC metric-wise templates and NBA SAR tables in the demo.",
      },
      {
        q: "Is Camu cloud-only?",
        a: "Camu describes itself as a cloud solution, and its website does not mention on-premise deployment. Aveon is cloud by default and offers on-premise where an institution mandates it.",
      },
      {
        q: "How much does Camu cost compared with Aveon?",
        a: "Neither vendor publishes prices; both quote per institution. Ask each for a five-year total using the same template: subscription, implementation, training, support, payment-gateway charges and modules added later.",
      },
    ],
    sources: [
      { label: "Camu — Homepage (camudigitalcampus.com)", url: "https://camudigitalcampus.com/" },
      { label: "Camu — Login portal (camu.in)", url: "https://www.camu.in/" },
    ],
  },
  {
    slug: "aveon-vs-academia-erp",
    vendor: "Academia ERP",
    vendorFull: "Academia ERP by Serosoft (academiaerp.com)",
    vendorUrl: "https://www.academiaerp.com/",
    reviewed: "2026-11-13",
    title: "Aveon vs Academia ERP: College ERP Compared (2026)",
    description:
      "Aveon vs Academia ERP by Serosoft: modules, NEP 2020 and OBE support, NAAC and NBA reporting, licensing model and deployment, for Indian colleges.",
    h1: "Aveon vs Academia ERP: Which Fits an Indian College Better?",
    keywords: [
      "Aveon vs Academia ERP",
      "Academia ERP alternative",
      "Serosoft Academia ERP review",
      "Academia ERP vs Aveon",
      "Academia ERP pricing",
    ],
    summary:
      "Academia ERP by Serosoft is a global student information system with 40+ modules, a presence in 32 countries and a listing in Gartner's Magic Quadrant for SIS. Aveon is an India-only campus ERP focused on affiliating-university rules, NAAC and NBA, and campus operations such as HR, payroll, library and canteen on one database.",
    bestFor: {
      them: "Universities with international programmes or campuses that want a globally deployed SIS with formal security certifications.",
      aveon: "Indian affiliated and autonomous colleges that want affiliating-university exam rules, NAAC and NBA data, and campus operations in one system.",
    },
    about: [
      "Academia ERP is sold as 'Academia by Serosoft'. Its About page cites 18 years in the education industry, and the site states 400+ customers in 32 countries across four continents and 1M+ learners and educators.",
      "The student information system page lists 40+ modules, including admissions, fees, timetable, attendance, examinations and marksheets, OBE, placement, hostel, transport, scholarships, grievance, thesis and committee management, with web portals and Android and iOS apps for students, teachers, parents and administrators.",
      "For India, the vendor highlights NEP 2020 alignment (digital credit transfer and multidisciplinary curricula), accreditation and compliance reporting, and AI features including an AI assistant and automated marksheet remarks. It reports listings in the Gartner Magic Quadrant for SIS SaaS (2025 and 2026) and lists ISO 27001, ISO 9001 and SOC 2 among its certifications.",
    ],
    matrix: [
      { label: "Primary market", aveon: AVEON.market, them: "Higher education and K-12 in 32 countries, including India" },
      { label: "Headquarters", aveon: AVEON.hq, them: "Not stated on the pages reviewed (India and US phone lines)" },
      { label: "Operating history", aveon: `Since ${AVEON.since}`, them: "18 years in education (About page)" },
      { label: "Stated scale", aveon: AVEON.scale, them: "400+ customers; 1M+ learners and educators" },
      { label: "Modules", aveon: "Fourteen products on one database", them: "40+ modules in the SIS" },
      { label: "Deployment", aveon: AVEON.deployment, them: "Cloud; 5-year licence or SaaS model" },
      { label: "OBE", aveon: AVEON.obe, them: "Outcome-Based Education module" },
      { label: "NAAC / NBA reporting", aveon: AVEON.accreditation, them: "Accreditation and compliance reporting (ask which NAAC / NBA formats)" },
      { label: "NEP 2020", aveon: "CBCS and credit structures as configuration", them: "Digital credit transfer, multidisciplinary curricula, audit trails" },
      { label: "Examinations", aveon: AVEON.exams, them: "Examinations and marksheet management" },
      { label: "HR and payroll", aveon: AVEON.hr, them: "Faculty management listed; payroll not listed on the module page" },
      { label: "Library, canteen, inventory", aveon: AVEON.ops, them: "Not listed on the module page reviewed (hostel and transport are)" },
      { label: "Security certifications", aveon: "Daily backups, role-based access and audit trails", them: "ISO 27001, ISO 9001, SOC 2, GDPR (licence page)" },
      { label: "Published pricing", aveon: AVEON.pricing, them: "Pricing model published (per-student licence, AMC from year two); no figures" },
    ],
    theirStrengths: [
      "International footprint and multi-country deployments, useful for institutions with overseas campuses or students.",
      "Formal third-party security certifications, including ISO 27001 and SOC 2.",
      "A broad 40+ module SIS, including thesis, elections and committee management.",
      "A transparent description of its licensing model, even though prices are not listed.",
    ],
    aveonDifferences: [
      "Built only for Indian institutions: affiliating-university patterns for Anna University, VTU, JNTU and state boards ship as configuration.",
      "Payroll, library, inventory and canteen are Aveon products on the same database as academics.",
      "NAAC metrics, NBA SAR tables, AICTE and NIRF formats are mapped in a dedicated IQAC module.",
      "On-premise deployment is available where a university or regulator requires it.",
    ],
    chooseThem: [
      "You have campuses or programmes outside India and want one SIS across countries.",
      "Your board requires vendor ISO 27001 or SOC 2 certification.",
      "You prefer a published licensing model with a fixed AMC from year two.",
    ],
    chooseAveon: [
      "You are an Indian college affiliated to a state university and need its exam and revaluation rules handled as configuration.",
      "You want payroll, library and stores on the same database as academics.",
      "You want an implementation team on campus within a few hours' travel in South India.",
    ],
    demoQuestions: [
      "Configure our affiliating university's internal-mark and revaluation rules in the demo.",
      "Is payroll included, and is it on the same database as the SIS?",
      "Generate NAAC Criterion 2 templates for five years with evidence attached.",
      "What is the five-year total for our enrolment under the licence model and under SaaS?",
      "Who from your team is on our campus at go-live, and where are they based?",
    ],
    faqs: [
      {
        q: "Is Aveon a good alternative to Academia ERP?",
        a: "For Indian colleges whose priorities are affiliating-university rules, NAAC and NBA reporting and campus operations including payroll and library, Aveon is a strong alternative. For institutions with international campuses or a requirement for vendor ISO 27001 and SOC 2 certification, Academia ERP is built for that.",
      },
      {
        q: "How is Academia ERP priced?",
        a: "Academia's licence page describes a five-year licence paid upfront per student, with a fixed AMC from year two, and a separate SaaS model; it does not publish figures (as of November 2026). Aveon quotes an itemised figure after scoping. Compare both on a five-year total.",
      },
      {
        q: "Does Academia ERP support NEP 2020?",
        a: "Academia's India page states NEP 2020 alignment, including digital credit transfer and multidisciplinary curriculum management. Aveon handles CBCS and credit structures as configuration. Ask both vendors to show your university's credit framework in the demo.",
      },
      {
        q: "Can Academia ERP and Aveon both be deployed on-premise?",
        a: "Academia's pages describe cloud and SaaS options; on-premise is not stated on the pages we reviewed. Aveon offers on-premise where an institution or regulator mandates it.",
      },
    ],
    sources: [
      { label: "Academia ERP — Homepage", url: "https://www.academiaerp.com/" },
      { label: "Academia ERP — India", url: "https://www.academiaerp.com/india/" },
      { label: "Academia ERP — About us", url: "https://www.academiaerp.com/about-us/" },
      { label: "Academia ERP — Student information system", url: "https://www.academiaerp.com/student-information-system/" },
      { label: "Academia ERP — Licence model", url: "https://www.academiaerp.com/license-model/" },
    ],
  },
  {
    slug: "aveon-vs-universityerp",
    vendor: "UniversityERP",
    vendorFull: "UniversityERP / IUMS by Expedien eSolutions (universityerp.com)",
    vendorUrl: "https://www.universityerp.com/",
    reviewed: "2026-11-13",
    title: "Aveon vs UniversityERP (Expedien IUMS), 2026",
    description:
      "Aveon vs UniversityERP (Expedien's IUMS) for Indian universities and colleges: modules, agricultural and veterinary focus, OBE and NAAC support, deployment.",
    h1: "Aveon vs UniversityERP (Expedien IUMS)",
    keywords: [
      "Aveon vs UniversityERP",
      "UniversityERP alternative",
      "Expedien IUMS alternative",
      "universityerp.com review",
      "university ERP software India comparison",
    ],
    summary:
      "UniversityERP is the brand of Expedien eSolutions, whose Integrated University Management System (IUMS) serves central, state, agricultural and veterinary universities, with deep modules for farms, veterinary hospitals and university administration. Aveon is a campus ERP for colleges and universities with native OBE and NAAC and NBA reporting; it suits institutions where accreditation and outcome attainment drive the purchase.",
    bestFor: {
      them: "Agricultural, veterinary and government universities that need farm, livestock, extension or e-office modules alongside academics.",
      aveon: "Colleges and universities whose purchase is driven by NAAC, NBA and OBE, and that want everything on one database.",
    },
    about: [
      "UniversityERP is the product brand of Expedien eSolutions Ltd., which lists an address in Noida and says it has worked in ERP, data integration and business intelligence since 2003.",
      "Its main product, the Integrated University Management System (IUMS), groups modules into financial management, distance education, the student life cycle (including CBCS, examinations, on-screen evaluation, affiliation and library), operations and administration (including recruitment, pensions, RTI and legal cells, e-procurement and file tracking), and vertical modules for agricultural universities (farm management, extension education) and veterinary universities (veterinary hospital, livestock farm, dairy and meat plants).",
      "The homepage names universities including Kerala Veterinary and Animal Sciences University, Rani Lakshmi Bai Central Agricultural University, Gauhati University and Chaudhary Charan Singh University, and refers to a cloud offering. It does not publish pricing or an institution count.",
    ],
    matrix: [
      { label: "Primary market", aveon: AVEON.market, them: "Central, state, agricultural and veterinary universities" },
      { label: "Headquarters", aveon: AVEON.hq, them: "Noida, Uttar Pradesh (address listed)" },
      { label: "Operating since", aveon: AVEON.since, them: "Active since 2003 (homepage)" },
      { label: "Stated scale", aveon: AVEON.scale, them: "No count stated; named university clients on the homepage" },
      { label: "Deployment", aveon: AVEON.deployment, them: "Cloud offering referenced (SaaS / UnivCloud); on-premise not stated" },
      { label: "OBE", aveon: AVEON.obe, them: "Not stated on the pages reviewed" },
      { label: "NAAC / NBA reporting", aveon: AVEON.accreditation, them: "Not stated on the pages reviewed" },
      { label: "Examinations", aveon: AVEON.exams, them: "Exam pre- and post-conduct, online question paper delivery, on-screen evaluation" },
      { label: "University affiliation", aveon: "Ask in demo: scope it to your university's process", them: "Affiliation management module" },
      { label: "Agriculture / veterinary modules", aveon: "Not offered", them: "Farm, extension education, veterinary hospital, livestock and dairy modules" },
      { label: "Government administration", aveon: "Grievance management", them: "RTI cell, legal cell, pension, GPF, e-procurement, file tracking" },
      { label: "HR and payroll", aveon: AVEON.hr, them: "Payroll, recruitment, leave and pension" },
      { label: "Mobile apps", aveon: AVEON.portals, them: "Not stated on the pages reviewed (self-service portal listed)" },
      { label: "Published pricing", aveon: AVEON.pricing, them: "Not stated on its website" },
    ],
    theirStrengths: [
      "Purpose-built modules for agricultural and veterinary universities that general campus ERPs, including Aveon, do not offer.",
      "Government-university administration: RTI, legal cell, pension, GPF, e-procurement and file tracking.",
      "On-screen evaluation and online question-paper delivery for large examination volumes.",
      "References among central, state, agricultural and veterinary universities.",
    ],
    aveonDifferences: [
      "OBE is native: CO-PO-PSO mapping, question-level CO tagging and attainment computed from exam marks.",
      "A dedicated IQAC / NAAC / NBA module maps records to metrics with evidence, plus AICTE and NIRF formats.",
      "Built for affiliated and autonomous colleges as well as universities, with affiliating-university patterns as configuration.",
      "Student and parent portals with online fee payment and an AI assistant that answers from live ERP data.",
    ],
    chooseThem: [
      "You are an agricultural or veterinary university, or need farm, hospital or extension modules.",
      "You are a government university that needs RTI, pension, GPF and e-procurement in the same system.",
      "You need on-screen evaluation for university-wide examinations.",
    ],
    chooseAveon: [
      "NAAC, NBA or OBE is the deadline driving your purchase.",
      "You are a college (affiliated or autonomous) rather than a large government university.",
      "You want student and parent self-service with online payments and AI-assisted answers.",
    ],
    demoQuestions: [
      "Show CO attainment for a real course computed from last semester's marks.",
      "Generate NAAC Criterion 2 and NBA SAR tables from the demo data.",
      "Is the cloud option hosted by you, and in which region? What is the restore-test history?",
      "Which modules in the quote are already deployed at a university like ours?",
      "Give us a written implementation plan with named responsibilities.",
    ],
    faqs: [
      {
        q: "Is Aveon an alternative to UniversityERP (Expedien IUMS)?",
        a: "For colleges and universities whose priorities are NAAC, NBA and OBE, yes. For agricultural and veterinary universities that need farm, livestock, veterinary-hospital or extension modules, Expedien's IUMS covers areas Aveon does not.",
      },
      {
        q: "Is UniversityERP the same as Aveon's University ERP?",
        a: "No. UniversityERP (universityerp.com) is a brand of Expedien eSolutions in Noida. Aveon's University ERP is a separate product from Aveon Infotech in Coimbatore. The names are similar because 'university ERP' is the generic name for the category.",
      },
      {
        q: "Does UniversityERP support NAAC and OBE?",
        a: "NAAC, NBA and OBE are not mentioned on the UniversityERP pages we reviewed in November 2026. That does not mean they are absent; ask Expedien to demonstrate them on your data.",
      },
      {
        q: "Which is cheaper?",
        a: "Neither vendor publishes prices. Ask both for a five-year total for the same module list and enrolment, including implementation, training, AMC and hosting.",
      },
    ],
    sources: [
      { label: "UniversityERP — Homepage", url: "https://www.universityerp.com/" },
      { label: "UniversityERP — About us", url: "https://universityerp.com/about_us.php" },
      { label: "UniversityERP — IUMS", url: "https://universityerp.com/products/IUMS_ERP.php" },
    ],
  },
  {
    slug: "aveon-vs-proctur",
    vendor: "Proctur",
    vendorFull: "Proctur by Eduspace Technologies (proctur.com)",
    vendorUrl: "https://proctur.com/",
    reviewed: "2026-11-13",
    title: "Aveon vs Proctur: Coaching App or College ERP? (2026)",
    description:
      "Aveon vs Proctur compared: coaching-institute software vs college and university ERP. Live classes, white-label apps, OBE, NAAC and pricing, side by side.",
    h1: "Aveon vs Proctur: Coaching Institute Software or College ERP?",
    keywords: ["Aveon vs Proctur", "Proctur alternative", "Proctur review", "Proctur alternative for colleges", "Proctur ERP pricing"],
    summary:
      "Proctur is built first for coaching institutes and tuition centres, with live classes, course selling, an exam engine and white-label apps, plus school and college solutions. Aveon is a campus ERP for colleges and universities with affiliating-university exam rules, OBE and NAAC reporting. They overlap little: choose by the type of institution you run.",
    bestFor: {
      them: "Coaching institutes, tuition centres and test-prep businesses that want live classes, branded apps and online course sales.",
      aveon: "Colleges and universities that need affiliating-university exams, OBE, NAAC and NBA reporting and campus operations.",
    },
    about: [
      "Proctur is a product of Eduspace Technologies Pvt. Ltd., based in Noida and founded in 2017. Its site focuses on coaching institutes and also offers solutions for schools, colleges, franchises and study centres, plus an IT services arm.",
      "Proctur states 4,000+ schools, institutes and colleges as customers, 1.3M+ students and 50+ integrated modules: admissions, fee collection with payment gateways, biometric attendance, exams with a question bank and AI proctoring, accounting with GST reports, parent communication over SMS and WhatsApp, course selling and a website builder. Proctur Live provides live classes with recordings and breakout rooms.",
      "Proctur offers a 14-day free trial and white-label apps published on the institute's own Play Store and App Store accounts; its white-label page states setup from ₹50,000 plus a monthly subscription. Other pricing depends on students and features and is quoted on request.",
    ],
    matrix: [
      { label: "Primary market", aveon: AVEON.market, them: "Coaching institutes first; also schools, colleges, franchises" },
      { label: "Headquarters", aveon: AVEON.hq, them: "Noida, Uttar Pradesh" },
      { label: "Founded", aveon: AVEON.since, them: "2017" },
      { label: "Stated scale", aveon: AVEON.scale, them: "4,000+ institutions, 1.3M+ students" },
      { label: "Live classes", aveon: "LMS with AI chatbot; no live-class product", them: "Proctur Live (video, whiteboard, recordings, breakout rooms)" },
      { label: "Course selling / website builder", aveon: "Not offered", them: "Yes" },
      { label: "White-label apps", aveon: "Not offered", them: "Branded iOS / Android apps in 7–10 working days" },
      { label: "Affiliating-university exam rules", aveon: "Anna University, VTU, JNTU and state-board patterns as configuration", them: "Not stated on the pages reviewed" },
      { label: "OBE", aveon: AVEON.obe, them: "Not stated on the pages reviewed" },
      { label: "NAAC / NBA reporting", aveon: AVEON.accreditation, them: "Not stated on the pages reviewed" },
      { label: "HR and payroll", aveon: AVEON.hr, them: "Not stated on the pages reviewed" },
      { label: "Hostel, library", aveon: AVEON.ops, them: "Hostel, library, transport and placement (college solution)" },
      { label: "Free trial", aveon: "Demo on your own data", them: "14-day free trial, no credit card" },
      { label: "Published pricing", aveon: AVEON.pricing, them: "White-label setup from ₹50,000 plus monthly fee; otherwise on request" },
    ],
    theirStrengths: [
      "Built for coaching and test-prep businesses: batches, live classes, course sales and a large question bank.",
      "White-label apps under the institute's own brand, launched quickly.",
      "A self-serve 14-day free trial and a partially published price.",
      "Fee collection with Razorpay and PayU, and parent alerts on SMS and WhatsApp.",
    ],
    aveonDifferences: [
      "Designed around Indian higher-education regulation: affiliating-university exams, CBCS, OBE, NAAC, NBA, AICTE and NIRF.",
      "Controller of Examination end-to-end, including arrears and revaluation.",
      "HR and payroll, hostel and mess, inventory, canteen and grievance on the same database.",
      "Implementation by Aveon's own team on campus with a four-week plan.",
    ],
    chooseThem: [
      "You run a coaching institute, tuition centre or test-prep business.",
      "Live classes, online course sales and a branded app are the priority.",
      "You want to start with a self-serve free trial.",
    ],
    chooseAveon: [
      "You run an affiliated or autonomous college, or a university.",
      "NAAC, NBA or OBE reporting is a requirement.",
      "You need examinations under affiliating-university rules, plus payroll and hostel in the same system.",
    ],
    demoQuestions: [
      "Configure our affiliating university's internal-mark and revaluation rules.",
      "Compute CO attainment for one course from real marks.",
      "Generate NAAC metric-wise templates with evidence attached.",
      "Is payroll included, and on the same database?",
      "Export all our data in open formats, now.",
    ],
    faqs: [
      {
        q: "Is Aveon an alternative to Proctur?",
        a: "Only for colleges and universities. Proctur is built first for coaching institutes, with live classes, course selling and white-label apps; Aveon is a campus ERP with affiliating-university exams, OBE and NAAC and NBA reporting. A coaching institute will usually be better served by Proctur, and a college by Aveon.",
      },
      {
        q: "How much does Proctur cost?",
        a: "Proctur's white-label page states setup from ₹50,000 plus a monthly subscription (as of November 2026). Other pricing depends on student numbers and features and is quoted on request, and there is a 14-day free trial.",
      },
      {
        q: "Can Proctur be used by colleges?",
        a: "Yes, Proctur offers a college solution with hostel, library, transport and placement modules. Its site does not describe OBE, NAAC or NBA reporting on the pages we reviewed, so colleges preparing for accreditation should ask to see those in a demo.",
      },
      {
        q: "Does Aveon offer live classes?",
        a: "Aveon's LMS includes an AI chatbot for course content but Aveon does not offer a live-class video product. Institutions that need live classes typically use their existing video platform alongside the ERP.",
      },
    ],
    sources: [
      { label: "Proctur — Homepage", url: "https://proctur.com/" },
      { label: "Proctur — About us", url: "https://proctur.com/about-us.php" },
      { label: "Proctur — Coaching institute solution", url: "https://proctur.com/solution-for-coaching-institute.php" },
      { label: "Proctur — White-label solutions", url: "https://proctur.com/white-label-solutions.php" },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export const aveonImplementation = AVEON.implementation;
