import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the platform hub in the intro graphic. */
const LIB_NODES = ["Catalogue", "Accession", "Authors", "Suppliers", "Patrons", "Circulation", "Subscriptions", "OPAC"];

/** Module ecosystem — four functional groups. */
const LIB_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Library Resources",
    items: ["Catalogue Management", "Accession Management", "Author Management", "Book Quantity", "Supplier Management", "Catalogue Import", "Stock Verification"],
  },
  {
    title: "Periodicals & Academic",
    items: ["Subscription Management", "Journals", "Newspapers", "Magazines", "Question Papers", "Project Materials"],
  },
  {
    title: "Patron Management",
    items: ["Patron Categories", "Circulation Rules", "Gate Register"],
  },
  {
    title: "Digital Search",
    items: ["OPAC", "Online Book Search"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const LIB_DEEP: DeepModule[] = [
  {
    title: "Catalogue Management",
    summary: "An organised catalogue makes knowledge easier to find.",
    groups: [
      {
        items: ["Library catalogue", "Book information", "Authors", "Book quantities", "Resource records", "Catalogue imports"],
      },
    ],
  },
  {
    title: "Accession Management",
    summary: "Know what your library has — and where it belongs.",
    groups: [
      {
        items: ["Accession records", "Book information", "Collection records", "Resource quantities", "Library inventory information"],
      },
    ],
  },
  {
    title: "Author & Book Management",
    summary: "Keep your collection properly organised across authors and categories.",
    groups: [
      {
        items: ["Author management", "Book details", "Book quantity", "Catalogue information", "Resource records"],
      },
    ],
  },
  {
    title: "Supplier Management",
    summary: "Organise library procurement and acquisition information.",
    groups: [
      {
        items: ["Supplier information", "Resource-related supplier records", "Library acquisition information"],
      },
    ],
  },
  {
    title: "Catalogue Import",
    summary: "Move existing library data into a structured digital environment.",
    groups: [
      {
        items: ["Bulk catalogue import", "Existing record migration", "Structured data organisation"],
      },
    ],
  },
  {
    title: "Stock Verification",
    summary: "Maintain better visibility of your collection with structured verification.",
    groups: [
      {
        items: ["Collection verification", "Resource availability", "Stock records"],
      },
    ],
  },
  {
    title: "Subscription Management",
    summary: "Manage recurring periodicals alongside books.",
    groups: [
      {
        items: ["Journals", "Newspapers", "Magazines", "Subscription records"],
      },
    ],
  },
  {
    title: "Academic Resource Management",
    summary: "Bring academic materials beyond books into one library environment.",
    groups: [
      {
        items: ["Question papers", "Project materials", "Journals", "Newspapers", "Magazines"],
      },
    ],
  },
  {
    title: "Patron Management",
    summary: "Different users, structured access — better library administration.",
    groups: [
      {
        label: "Patron categories organised by",
        items: ["Role", "Activities", "Department", "Type", "Student"],
      },
    ],
  },
  {
    title: "Circulation Rules",
    summary: "Configure library policies around your institution's requirements.",
    groups: [
      {
        items: [
          "Patron category-wise rules",
          "Library-wise rules",
          "Institute-wise rules",
          "Community-wise rules",
          "Special-category rules",
        ],
      },
    ],
  },
  {
    title: "Gate Register",
    summary: "Maintain library entry information and patron registration.",
    groups: [
      {
        items: ["Patron registration", "Library entry records"],
      },
    ],
  },
  {
    title: "OPAC & Online Book Search",
    summary: "Search less, discover more — find resources through the online catalogue.",
    groups: [
      {
        items: ["Online Public Access Catalogue (OPAC)", "Online book search", "Digital resource discovery"],
      },
    ],
  },
];

/** Library workflow — 13 stages across 4 phases, rendered as a staircase. */
const LIB_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Resources", range: "01–04", steps: ["Catalogue", "Accession", "Author & Book", "Supplier"] },
  { label: "Collection", range: "05–08", steps: ["Catalogue Import", "Stock Verification", "Subscriptions", "Academic Materials"] },
  { label: "Users", range: "09–11", steps: ["Patron Categories", "Circulation Rules", "Gate Register"] },
  { label: "Discovery", range: "12–13", steps: ["OPAC", "Online Book Search"] },
];
const JOURNEY_OFFSETS = LIB_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + LIB_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = LIB_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const LIB_STAKEHOLDERS = [
  { role: "Librarians", line: "Manage with control.", text: "Organise books, catalogues, patrons, subscriptions, stock and library activity through one system." },
  { role: "Students", line: "Find what you need.", text: "Use online book search and access relevant library information in one place." },
  { role: "Faculty", line: "Support teaching & research.", text: "Access information about books and academic resources through a connected library environment." },
  { role: "Researchers", line: "Locate resources fast.", text: "Discover journals, project materials and question papers through OPAC and online search." },
  { role: "Management", line: "Institutional visibility.", text: "Maintain structured library information as part of the wider campus management system." },
  { role: "Administration", line: "One connected campus.", text: "Library operations connect with students, academics, fees and the rest of the ERP." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const libraryFaqs: { question: string; answer: string }[] = [
  {
    question: "What is Library Management Software?",
    answer:
      "Library Management Software is a digital system that helps educational institutions manage library resources, catalogues, patrons, circulation, subscriptions, stock and online resource discovery.",
  },
  {
    question: "What is Aveon Library Management System?",
    answer:
      "Aveon Library Management System is a component of the Aveon Campus Management System that helps institutions manage library resources, patrons, circulation rules, subscriptions, stock verification and online book search.",
  },
  {
    question: "What features are available in Aveon Library Management?",
    answer:
      "Aveon includes catalogue management, accession, author management, book quantities, supplier management, catalogue import, stock verification, subscription management, journals, newspapers, magazines, question papers, project materials, patron categories, circulation rules, gate register and OPAC.",
  },
  {
    question: "Does Aveon support OPAC?",
    answer: "Yes. Aveon's library module includes OPAC (Online Public Access Catalogue) functionality with online book search.",
  },
  {
    question: "Can libraries categorize patrons?",
    answer: "Yes. Patron categories can be organized by role, activities, department, type and student.",
  },
  {
    question: "Can circulation rules be configured?",
    answer: "Yes. Aveon supports circulation rules based on patron category, library, institute, community and special categories.",
  },
  {
    question: "Does the system support journals and newspapers?",
    answer: "Yes. The library module includes subscription management along with journals, newspapers and magazines.",
  },
  {
    question: "Can the library manage academic resources beyond books?",
    answer: "Yes. Aveon includes question papers and project materials in addition to books and periodicals.",
  },
];

/* ──────────────────────────────────────────────────────────────
   Presentational helpers
   ────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/** Hub-and-spoke graphic: the platform hub connecting every library function. */
function ConnectedLibraryGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 122;
  const pillH = 38;
  const nodes = LIB_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes lib-spin { to { transform: rotate(360deg); } }
        @keyframes lib-flow { to { stroke-dashoffset: -16; } }
        @keyframes lib-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes lib-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .lib-ring { transform-box: fill-box; transform-origin: center; animation: lib-spin 90s linear infinite; }
        .lib-glow { transform-box: fill-box; transform-origin: center; animation: lib-breathe 5s ease-in-out infinite; }
        .lib-flow { stroke-dasharray: 4 12; animation: lib-flow 1.5s linear infinite; }
        .lib-node { transform-box: fill-box; transform-origin: center; animation: lib-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .lib-ring, .lib-glow, .lib-flow, .lib-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every library function — Catalogue, Accession, Authors, Suppliers, Patrons, Circulation, Subscriptions and OPAC — on one platform.">
        <defs>
          <radialGradient id="lib-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lib-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="lib-glow" cx={c} cy={c} r={158} fill="url(#lib-glow)" />
        <circle className="lib-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="lib-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="lib-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#lib-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8.5" fontWeight="700" letterSpacing="1.5" fill="#d9e8ff">LIBRARY</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function LibraryContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedLibraryGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Digital Library Platform
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Discover. Organize. Circulate. Manage.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A library is more than a collection of books — it&apos;s where students discover knowledge, faculty
                support learning and institutions preserve academic information. Managing it by hand only gets harder as
                the collection grows.
              </p>
              <p>
                Aveon Library Management brings cataloguing, accession, circulation, patron management, stock
                verification, subscriptions and online book search into one connected system — part of the wider Aveon
                Campus ERP.
              </p>
              <p className="font-semibold text-navy-800">Organize your library. Connect your resources. Simplify operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete Library Management Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything you need to run a modern library — grouped into four connected domains, from collection to discovery.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIB_GROUPS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-navy-800">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Deep-dive accordions ── */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore the Modules in Detail</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any module to see what&apos;s inside. Each one works on its own — and shares everything with the rest.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {LIB_DEEP.map((mod) => (
              <details
                key={mod.title}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-20px_rgb(29_111_242_/_0.38)] open:-translate-y-0 open:border-primary-200 open:shadow-[0_24px_50px_-22px_rgb(29_111_242_/_0.3)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{mod.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{mod.summary}</p>
                  </div>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-45 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-navy-100 px-6 py-5">
                  <div className="space-y-5">
                    {mod.groups.map((g, gi) => (
                      <div key={g.label ?? gi}>
                        {g.label && <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">{g.label}</h4>}
                        <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Library workflow ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Library workflow</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Collection.
                <br />
                To Discovery.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Aveon brings the whole library into one structured flow — from cataloguing a resource to a student
                finding it online.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                connected
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {LIB_JOURNEY.map((group, gi) => (
              <div key={group.label} className={STAIR_OFFSET[gi]}>
                <div className="flex items-baseline gap-2 border-b-2 border-primary-600 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">{group.label}</span>
                  <span className="ml-auto text-xs tracking-wide text-navy-400">{group.range}</span>
                </div>
                <ul>
                  {group.steps.map((step, si) => (
                    <li key={step} className="flex items-center gap-4 border-b border-navy-100 py-3 last:border-0">
                      <span className="w-6 text-xs tabular-nums text-navy-400">{String(JOURNEY_OFFSETS[gi] + si + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold text-navy-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
            <span className="shrink-0">Resource entry</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Online discovery</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Every Library Stakeholder</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LIB_STAKEHOLDERS.map((s) => (
              <div key={s.role} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary-700">{s.role}</h3>
                <p className="mt-1 font-semibold text-navy-800">{s.line}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before → After ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Manual Library Management to Digital Library Operations</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Traditional Approach</h3>
            <p className="mt-4 text-navy-700">
              Book registers, accession records, patron records, circulation rules, stock and subscription records — all
              kept separately, searched by hand.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= More registers, more searching</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Manual book & accession registers", "Hard-to-locate resources", "Manual circulation tracking", "Periodic stock headaches", "No online discovery"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">With Aveon Library Management</h3>
            <p className="mt-4 text-navy-700">
              Catalogue, books, accession, stock, patrons, circulation rules, subscriptions and OPAC all connect through
              one system — inside the campus ERP.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected digital library</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Centralized library information", "Organized catalogue & accession", "Configurable circulation rules", "Structured stock verification", "OPAC & online book search"].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {libraryFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_20px_44px_-22px_rgb(29_111_242_/_0.35)] open:border-primary-200 open:shadow-[0_20px_44px_-24px_rgb(29_111_242_/_0.28)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{faq.question}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-45 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 text-center">
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Organize Knowledge. Simplify Management. Enable Discovery.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Bring resources, patrons, rules, stock and discovery together — and build a smarter digital library inside
              the Aveon Campus ERP.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to a Library Management Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
