import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Capability nodes orbiting the hub in the intro graphic. */
const CSD_NODES = ["Web", "Mobile", "SaaS", "Cloud", "AI", "APIs", "Database", "DevOps"];

/** Solutions we build. */
const SOLUTIONS: { name: string; text: string }[] = [
  { name: "Business Management Systems", text: "Systems built around how your business actually operates." },
  { name: "Enterprise Applications", text: "Scalable applications for larger, connected operations." },
  { name: "SaaS Products", text: "Multi-tenant products from MVP to production." },
  { name: "Web Applications", text: "Fast, modern web apps for any workflow." },
  { name: "Mobile Applications", text: "Android, iOS and cross-platform experiences." },
  { name: "Customer Portals", text: "Self-service portals for your customers and partners." },
  { name: "Workflow & Process Automation", text: "Turn manual processes into structured digital workflows." },
  { name: "AI-Powered Applications", text: "Intelligent features where they add real value." },
  { name: "Industry-Specific Software", text: "Solutions shaped to your sector's requirements." },
  { name: "API & Third-Party Integrations", text: "Connect the systems your business already uses." },
];

/** Technology stack — chosen per project. */
const TECH_STACK: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { title: "Backend", items: ["Node.js", ".NET", "PHP", "Python", "Laravel"] },
  { title: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Git", "CI/CD"] },
  { title: "AI & Automation", items: ["Python", "AI/ML APIs", "LLM Integration", "Intelligent Automation", "Workflow Automation"] },
  { title: "API & Integration", items: ["REST API", "JSON", "Third-Party APIs", "Payment Gateways", "ERP / CRM Integration"] },
];

/** Development process — 6 stages across 4 phases, rendered as a staircase. */
const CSD_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Plan", range: "01–02", steps: ["Discover", "Design"] },
  { label: "Build", range: "03–04", steps: ["Develop", "Integrate"] },
  { label: "Verify", range: "05", steps: ["Test"] },
  { label: "Ship", range: "06", steps: ["Launch & Support"] },
];
const JOURNEY_OFFSETS = CSD_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + CSD_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = CSD_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

/** Why choose Aveon. */
const WHY: { title: string; text: string }[] = [
  { title: "Business-First Approach", text: "We understand your process before choosing the technology." },
  { title: "Custom Architecture", text: "Software designed around your requirements — not a generic template." },
  { title: "Modern Technology", text: "Appropriate web, mobile, cloud, AI and integration technologies." },
  { title: "Scalable Solutions", text: "A foundation that can grow with your business." },
  { title: "End-to-End Development", text: "From concept and design to deployment and ongoing support." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const customSoftwareFaqs: { question: string; answer: string }[] = [
  {
    question: "What is Custom Software Development?",
    answer: "Custom software development is the process of building software specifically around an organization's unique requirements, workflows and business objectives.",
  },
  {
    question: "Can Aveon build software from scratch?",
    answer: "Yes. Aveon can transform a business idea, workflow or requirement into a complete custom software solution.",
  },
  {
    question: "Can you modernize existing software?",
    answer: "Yes. Existing applications can be redesigned, upgraded, migrated or extended based on their architecture and requirements.",
  },
  {
    question: "Can custom software integrate with existing systems?",
    answer: "Yes. Aveon can integrate suitable APIs, databases, ERP, CRM, payment gateways and third-party applications.",
  },
  {
    question: "Can AI be integrated into custom software?",
    answer: "Yes. AI assistants, document processing, intelligent search, automation, recommendations and other AI capabilities can be integrated based on the use case.",
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

/** Hub-and-spoke graphic: the hub connecting every build capability. */
function ConnectedSoftwareGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 118;
  const pillH = 38;
  const nodes = CSD_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes csd-spin { to { transform: rotate(360deg); } }
        @keyframes csd-flow { to { stroke-dashoffset: -16; } }
        @keyframes csd-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes csd-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .csd-ring { transform-box: fill-box; transform-origin: center; animation: csd-spin 90s linear infinite; }
        .csd-glow { transform-box: fill-box; transform-origin: center; animation: csd-breathe 5s ease-in-out infinite; }
        .csd-flow { stroke-dasharray: 4 12; animation: csd-flow 1.5s linear infinite; }
        .csd-node { transform-box: fill-box; transform-origin: center; animation: csd-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .csd-ring, .csd-glow, .csd-flow, .csd-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon builds across every technology — Web, Mobile, SaaS, Cloud, AI, APIs, Database and DevOps — around one business.">
        <defs>
          <radialGradient id="csd-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="csd-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="csd-glow" cx={c} cy={c} r={158} fill="url(#csd-glow)" />
        <circle className="csd-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="csd-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="csd-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#csd-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8" fontWeight="700" letterSpacing="1.2" fill="#d9e8ff">SOFTWARE</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function CustomSoftwareContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedSoftwareGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Custom Software Development
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Software Built Around Your Business.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Every business has unique processes, customers and operational requirements. When off-the-shelf software
                isn&apos;t enough, Aveon builds custom software designed around the way your business actually works.
              </p>
              <p>
                From business analysis and UI/UX design to development, integration, testing and deployment, we deliver
                scalable digital solutions for startups, SMEs and enterprises across industries.
              </p>
              <p className="font-semibold text-navy-800">Build new. Modernize existing. Integrate everything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Build Software That Fits Your Business</h2>
          <p className="mt-3 text-lg text-navy-600">From idea to scalable digital product — across web, mobile, cloud and AI.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div key={s.name} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
              <h3 className="text-base font-bold text-navy-900">{s.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technology stack ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Modern Technology Stack</h2>
            <p className="mt-3 text-lg text-navy-600">
              Technology chosen for the solution — based on scalability, performance, security and long-term
              maintainability.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((t) => (
              <div key={t.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{t.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.items.map((i) => (
                    <span key={i} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-500">Technology selection depends on the specific project architecture and requirements.</p>
        </div>
      </section>

      {/* ── Development process staircase ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
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
                From Idea.
                <br />
                To Scalable Product.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                A clear, connected path — discover, design, develop, integrate, test, launch and support.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                process
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {CSD_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Discover</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Launch &amp; grow</span>
          </div>
        </div>
      </section>

      {/* ── Why Aveon ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Why Build with Aveon?</h2>
          <p className="mt-3 text-lg text-navy-600">Your business shouldn&apos;t have to change to fit your software.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-primary-700">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {customSoftwareFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Build Software That Works the Way You Work.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Your business shouldn&apos;t have to change to fit your software. Let&apos;s build the solution that fits
              yours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Start Your Project →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
