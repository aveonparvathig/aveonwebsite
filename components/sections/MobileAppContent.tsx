import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Capability nodes orbiting the hub in the intro graphic. */
const MOB_NODES = ["UI/UX", "Android", "iOS", "Cross-Platform", "APIs", "Payments", "AI", "Security"];

/** Platforms — three headline cards. */
const PLATFORMS: { name: string; tagline: string; items: string[] }[] = [
  {
    name: "Android",
    tagline: "Reach the world's largest mobile platform.",
    items: ["Custom UI & authentication", "API integration", "Push notifications", "Payment & location services", "Camera & file management", "Cloud & offline support"],
  },
  {
    name: "iOS",
    tagline: "Premium experiences for iPhone & iPad.",
    items: ["Custom interfaces & authentication", "API integration", "Push notifications", "Payments & location", "Camera & media", "Cloud & secure data handling"],
  },
  {
    name: "Cross-Platform",
    tagline: "One product experience, multiple platforms.",
    items: ["Shared development approach", "Consistent user experience", "Faster development cycles", "Easier maintenance", "Reduced duplication", "Multi-platform deployment"],
  },
];

/** Capability ecosystem — four functional groups. */
const MOB_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Platforms & Design",
    items: ["Android", "iOS", "Cross-Platform", "Mobile UI/UX Design"],
  },
  {
    title: "Integration & Backend",
    items: ["API Integration", "ERP / CRM", "Payment Gateways", "Cloud Services"],
  },
  {
    title: "App Types",
    items: ["E-Commerce", "Business / Enterprise", "Education", "Customer / Service"],
  },
  {
    title: "Intelligence & Quality",
    items: ["AI Integration", "Security", "Testing & QA", "Deployment & Support"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship capabilities rendered as expandable accordions. */
const MOB_DEEP: DeepModule[] = [
  {
    title: "Mobile UI/UX Design",
    summary: "Design apps people want to use — less complexity, better experience.",
    groups: [
      {
        label: "Process",
        items: ["User research", "Information architecture", "User journey", "Wireframes", "UI design", "Prototype"],
      },
      {
        label: "Design focus",
        items: ["Simple navigation", "Clear interfaces", "Responsive layouts", "Consistent design systems", "Mobile-first thinking"],
      },
    ],
  },
  {
    title: "API & Backend Integration",
    summary: "Connect your app to the systems your business already runs on.",
    groups: [
      {
        items: ["ERP & CRM platforms", "Payment gateways", "E-commerce systems", "Databases & cloud platforms", "Third-party APIs", "Authentication systems"],
      },
    ],
  },
  {
    title: "E-Commerce Apps",
    summary: "From product discovery to checkout — a complete mobile commerce experience.",
    groups: [
      {
        items: ["Product catalogue & search", "Categories", "Cart & wishlist", "Customer accounts & addresses", "Payment integration", "Order management & tracking", "Offers & notifications"],
      },
    ],
  },
  {
    title: "Business & Enterprise Apps",
    summary: "Take your business processes wherever your team works.",
    groups: [
      {
        items: ["Employee & field operations", "Sales & service management", "Approval workflows", "Attendance & task management", "Customer management", "Inventory & reporting", "Internal communication"],
      },
    ],
  },
  {
    title: "Education Apps",
    summary: "Connect students, parents, faculty and institutions on mobile.",
    groups: [
      {
        items: ["Student & parent login", "Attendance & timetable", "Marks & examination info", "Assignments & fees", "Notifications & circulars", "Learning resources & communication"],
      },
    ],
  },
  {
    title: "Customer & Service Apps",
    summary: "Give customers a direct mobile channel to your business.",
    groups: [
      {
        items: ["Customer registration", "Service requests & appointments", "Support tickets", "Notifications & payments", "Order tracking", "Feedback & communication"],
      },
    ],
  },
  {
    title: "AI Integration",
    summary: "Mobile + AI = smarter digital experiences.",
    groups: [
      {
        items: ["AI chat assistants", "Intelligent search", "Document processing", "Recommendations", "Automated responses", "Voice & image analysis", "Workflow automation"],
      },
    ],
  },
  {
    title: "Secure Development",
    summary: "Security is not an add-on — it's part of the development process.",
    groups: [
      {
        items: ["Secure authentication", "Role-based access", "API security", "Data protection", "Secure communication", "Session management", "Secure storage & access control"],
      },
    ],
  },
  {
    title: "Testing, Deployment & Support",
    summary: "Test thoroughly, launch confidently, improve continuously.",
    groups: [
      {
        label: "Testing & QA",
        items: ["Functional & UI testing", "API testing", "Device compatibility", "Performance & usability", "Security & regression"],
      },
      {
        label: "Deployment & Support",
        items: ["App deployment", "Version updates", "Bug fixing & enhancements", "Maintenance & technical support"],
      },
    ],
  },
];

/** Development process — 8 stages across 4 phases, rendered as a staircase. */
const MOB_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Plan", range: "01–02", steps: ["Discovery", "Strategy"] },
  { label: "Design & Build", range: "03–04", steps: ["UI/UX Design", "Development"] },
  { label: "Connect & Verify", range: "05–06", steps: ["Integration", "Testing"] },
  { label: "Launch & Grow", range: "07–08", steps: ["Deployment", "Support"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

/** Feature families a mobile app can include. */
const FEATURES: { title: string; items: string[] }[] = [
  { title: "User & Authentication", items: ["Registration", "Login", "OTP", "Password management", "Role-based access", "User profiles"] },
  { title: "Communication", items: ["Push notifications", "In-app notifications", "Email", "SMS integration", "Chat"] },
  { title: "Location", items: ["GPS", "Maps", "Location tracking", "Nearby services"] },
  { title: "Payments", items: ["Payment gateway", "Online payments", "Transaction history", "Receipts"] },
  { title: "Media", items: ["Camera", "Image upload", "Video", "Audio", "Document upload"] },
  { title: "Business Functions", items: ["Dashboards", "Reports", "Search", "Forms", "Approvals", "Workflows"] },
];

/** Why choose Aveon. */
const WHY: { title: string; text: string }[] = [
  { title: "Business-Focused", text: "We focus on the business problem behind the app — not just the technology." },
  { title: "Custom Solutions", text: "Built around your requirements, not forced into a predefined template." },
  { title: "End-to-End", text: "From idea and UI/UX to development, testing and deployment." },
  { title: "Integration Expertise", text: "Connect your app with existing software, APIs and business systems." },
  { title: "Scalable & AI-Ready", text: "Built for growth, with AI and automation where it adds value." },
  { title: "Long-Term Support", text: "We keep improving your application after launch." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const mobileAppFaqs: { question: string; answer: string }[] = [
  {
    question: "What is mobile app development?",
    answer: "Mobile app development is the process of designing, developing, testing and deploying applications for mobile devices such as smartphones and tablets.",
  },
  {
    question: "Does Aveon develop Android applications?",
    answer: "Yes. Aveon provides custom Android application development based on the requirements of the project.",
  },
  {
    question: "Does Aveon develop iOS applications?",
    answer: "Yes. iOS application development can be undertaken based on project requirements and the required Apple platform.",
  },
  {
    question: "Can Aveon build cross-platform mobile applications?",
    answer: "Yes, where appropriate for the project, cross-platform development can support multiple mobile platforms from a shared development approach.",
  },
  {
    question: "Can you convert an existing website into a mobile app?",
    answer: "Yes. An existing website or web-based platform can be evaluated and transformed into a mobile application or experience, depending on the technical architecture and requirements.",
  },
  {
    question: "Can mobile apps connect with ERP or CRM systems?",
    answer: "Yes. Mobile applications can integrate with backend systems, APIs, databases, ERP, CRM and other business platforms where suitable integration interfaces are available.",
  },
  {
    question: "Can AI be integrated into mobile applications?",
    answer: "Yes. Depending on the application, AI capabilities such as intelligent assistants, recommendations, document processing, search and automation can be integrated.",
  },
  {
    question: "How long does mobile app development take?",
    answer: "It depends on complexity, number of platforms, features, integrations, UI/UX and testing scope. A timeline is estimated once the requirements are defined.",
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

/** Hub-and-spoke graphic: the hub connecting every mobile capability. */
function ConnectedMobileGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 124;
  const pillH = 38;
  const nodes = MOB_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes mob-spin { to { transform: rotate(360deg); } }
        @keyframes mob-flow { to { stroke-dashoffset: -16; } }
        @keyframes mob-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes mob-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .mob-ring { transform-box: fill-box; transform-origin: center; animation: mob-spin 90s linear infinite; }
        .mob-glow { transform-box: fill-box; transform-origin: center; animation: mob-breathe 5s ease-in-out infinite; }
        .mob-flow { stroke-dasharray: 4 12; animation: mob-flow 1.5s linear infinite; }
        .mob-node { transform-box: fill-box; transform-origin: center; animation: mob-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .mob-ring, .mob-glow, .mob-flow, .mob-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every mobile capability — UI/UX, Android, iOS, Cross-Platform, APIs, Payments, AI and Security — on one platform.">
        <defs>
          <radialGradient id="mob-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mob-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="mob-glow" cx={c} cy={c} r={158} fill="url(#mob-glow)" />
        <circle className="mob-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="mob-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="mob-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#mob-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8.5" fontWeight="700" letterSpacing="1.5" fill="#d9e8ff">MOBILE</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function MobileAppContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedMobileGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Mobile App Development
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Turn Your Ideas into Powerful Mobile Experiences.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A mobile app is no longer just another channel — it can be a complete platform for customer engagement,
                business operations, service delivery, payments and automation.
              </p>
              <p>
                From concept and UI/UX to development, API integration, testing, deployment and ongoing support, Aveon
                takes your mobile product from idea to app store — for Android, iOS and cross-platform.
              </p>
              <p className="font-semibold text-navy-800">Imagine. Build. Launch. Grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">One Product. Every Platform.</h2>
          <p className="mt-3 text-lg text-navy-600">Native Android and iOS, or a shared cross-platform build — chosen around your requirements.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
              <h3 className="text-xl font-extrabold text-navy-900">{p.name}</h3>
              <p className="mt-1.5 text-sm font-medium text-primary-700">{p.tagline}</p>
              <ul className="mt-5 space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capability ecosystem ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">What We Build</h2>
            <p className="mt-3 text-lg text-navy-600">End-to-end mobile development — grouped into four connected domains.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MOB_GROUPS.map((g) => (
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
        </div>
      </section>

      {/* ── Deep-dive accordions ── */}
      <section className="border-y border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore Our Capabilities in Detail</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any capability to see what&apos;s inside — from design and integration to AI, security and support.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {MOB_DEEP.map((mod) => (
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

      {/* ── Development process staircase ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-navy-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Development process</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Concept.
                <br />
                To Launch.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                A clear, connected path from your idea to the app store — plan, design, develop, test, launch and grow.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">8</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                process
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {MOB_JOURNEY.map((group, gi) => (
              <div key={group.label} className={STAIR_OFFSET[gi]}>
                <div className="flex items-baseline gap-2 border-b-2 border-primary-600 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">{group.label}</span>
                  <span className="ml-auto text-xs tracking-wide text-navy-400">{group.range}</span>
                </div>
                <ul>
                  {group.steps.map((step, si) => (
                    <li key={step} className="flex items-center gap-4 border-b border-navy-100 py-3 last:border-0">
                      <span className="w-6 text-xs tabular-nums text-navy-400">{String(gi * 2 + si + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold text-navy-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
            <span className="shrink-0">Idea</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">App store &amp; beyond</span>
          </div>
        </div>
      </section>

      {/* ── App features ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Build the Features Your Business Needs</h2>
          <p className="mt-3 text-lg text-navy-600">Mix and match the capabilities your project requires.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {f.items.map((i) => (
                  <span key={i} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Aveon ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Why Build with Aveon?</h2>
            <p className="mt-3 text-lg text-navy-600">Ideas into apps. Apps into experiences. Experiences into growth.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary-700">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {mobileAppFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Think It. Build It. Launch It.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Whether you&apos;re launching a new product, digitizing a process or extending your software to mobile,
              Aveon turns your vision into a modern application.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Free Consultation →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Discuss Your App Idea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
