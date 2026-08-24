import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Role nodes orbiting the hub in the intro graphic. */
const OFF_NODES = ["Developers", "Designers", "QA", "DevOps", "AI/ML", "Cloud", "PM", "Support"];

/** Roles we provide. */
const ROLES = ["Software Development", "Web", "Mobile", "AI & ML", "Cloud & DevOps", "UI/UX", "QA & Testing", "ERP", "SaaS", "Support", "Maintenance"];

/** Engagement models. */
const MODELS: { name: string; text: string; suits: string[] }[] = [
  {
    name: "Dedicated Resource",
    text: "Hire an individual technology professional dedicated to your requirements.",
    suits: ["Specific technical skills", "Existing development teams", "Long-term requirements", "Individual product modules"],
  },
  {
    name: "Dedicated Development Team",
    text: "Build a complete team managed around your product or project.",
    suits: ["SaaS products", "Enterprise applications", "Startups", "Long-term product development"],
  },
  {
    name: "Extended Development Team",
    text: "Add Aveon professionals to your existing in-house team.",
    suits: ["Temporary skill gaps", "Project expansion", "Faster delivery", "Specialized technology"],
  },
  {
    name: "Project-Based Team",
    text: "Create a team for a defined project and delivery scope.",
    suits: ["New software", "Mobile applications", "Website platforms", "Business automation", "AI projects"],
  },
];

/** Technology stack. */
const TECH_STACK: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { title: "Backend", items: ["Node.js", ".NET", "C#", "Java", "Python", "PHP", "Laravel"] },
  { title: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
  { title: "AI & Machine Learning", items: ["Python", "AI/ML", "LLM Integration", "Generative AI", "Computer Vision", "Intelligent Automation"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux"] },
  { title: "QA & Testing", items: ["Manual Testing", "API Testing", "Automation", "Performance"] },
  { title: "UI/UX", items: ["Figma", "Adobe XD", "Responsive Design", "Design Systems"] },
];

/** Who it's for. */
const AUDIENCES: { name: string; tagline: string; items: string[] }[] = [
  { name: "Startups", tagline: "Build your product without building a large organization.", items: ["MVPs", "SaaS platforms", "Mobile apps", "AI products", "E-commerce", "Business software"] },
  { name: "SMEs", tagline: "Add capability without expanding overhead.", items: ["Development", "Maintenance", "Cloud", "QA", "Automation", "AI", "Support"] },
  { name: "Enterprises", tagline: "Extend your existing engineering capacity.", items: ["Product development", "Modernization", "Legacy migration", "Cloud transformation", "QA & DevOps", "AI implementation"] },
];

/** How it works — 6 stages across 4 phases, rendered as a staircase. */
const OFF_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Discover", range: "01–02", steps: ["Understand", "Define"] },
  { label: "Assemble", range: "03–04", steps: ["Select", "Onboard"] },
  { label: "Deliver", range: "05", steps: ["Develop"] },
  { label: "Grow", range: "06", steps: ["Scale"] },
];
const JOURNEY_OFFSETS = OFF_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + OFF_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = OFF_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const TOOLS = ["Microsoft Teams", "Slack", "Google Meet", "Zoom", "GitHub", "GitLab", "Jira", "Trello"];
const PRACTICES = ["Agile", "Scrum", "Sprint planning", "Daily stand-ups", "Code reviews", "Version control", "QA processes", "CI/CD"];

const WHY: { title: string; text: string }[] = [
  { title: "Competitive Offshore Pricing", text: "Access technology talent with a cost structure designed to stay competitive." },
  { title: "Dedicated Resources", text: "Professionals focused on your project requirements." },
  { title: "Flexible Engagement", text: "Choose the team structure that fits your business." },
  { title: "Modern Technology", text: "Developers across web, mobile, cloud, AI, DevOps and QA." },
  { title: "Direct Communication", text: "Collaborate directly with your development team." },
  { title: "Long-Term Partnership", text: "An ongoing technology relationship, not a one-time transaction." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const offshoreFaqs: { question: string; answer: string }[] = [
  {
    question: "What is an offshore development team?",
    answer: "An offshore development team is a group of technology professionals working remotely from another country as an extension of a company's internal team.",
  },
  {
    question: "Why choose an offshore team from India?",
    answer: "India provides access to a large technology talent ecosystem with competitive development costs and experience across modern software technologies.",
  },
  {
    question: "How much does an Aveon offshore developer cost?",
    answer: "Rates depend on the developer's technology, experience, engagement duration and working model. Aveon offers competitive, nominal offshore rates — contact us for a role-specific quotation.",
  },
  {
    question: "Can I hire just one developer?",
    answer: "Yes. You can start with an individual developer or specialist and expand the team later.",
  },
  {
    question: "Can I build a complete offshore development team?",
    answer: "Yes. Aveon can create teams with developers, designers, QA engineers, project managers, DevOps engineers and other specialists based on your requirements.",
  },
  {
    question: "Can the offshore team work with our existing developers?",
    answer: "Yes. Aveon professionals can operate as an extension of your existing technology team.",
  },
  {
    question: "Can I choose the technology stack?",
    answer: "Yes. Team composition can be aligned with the required technology stack and project requirements.",
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

function ChipGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <span key={i} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">{i}</span>
        ))}
      </div>
    </div>
  );
}

/** Hub-and-spoke graphic: the hub connecting every offshore role. */
function ConnectedTeamGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 118;
  const pillH = 38;
  const nodes = OFF_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes off-spin { to { transform: rotate(360deg); } }
        @keyframes off-flow { to { stroke-dashoffset: -16; } }
        @keyframes off-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes off-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .off-ring { transform-box: fill-box; transform-origin: center; animation: off-spin 90s linear infinite; }
        .off-glow { transform-box: fill-box; transform-origin: center; animation: off-breathe 5s ease-in-out infinite; }
        .off-flow { stroke-dasharray: 4 12; animation: off-flow 1.5s linear infinite; }
        .off-node { transform-box: fill-box; transform-origin: center; animation: off-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .off-ring, .off-glow, .off-flow, .off-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Build a dedicated offshore team with Aveon — Developers, Designers, QA, DevOps, AI/ML, Cloud, Project Managers and Support.">
        <defs>
          <radialGradient id="off-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="off-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="off-glow" cx={c} cy={c} r={158} fill="url(#off-glow)" />
        <circle className="off-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="off-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="off-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#off-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8" fontWeight="700" letterSpacing="1.4" fill="#d9e8ff">OFFSHORE</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function OffshoreContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedTeamGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Global Talent. Indian Advantage.
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Build Your Dedicated Offshore Technology Team.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Hiring and maintaining a complete in-house technology team can be expensive. Aveon gives you access to
                skilled technology professionals from India through a flexible, cost-effective engagement model.
              </p>
              <p>
                From software development and mobile apps to AI, cloud, DevOps, QA and support, Aveon provides
                professionals who work as an extension of your team — without the infrastructure and overhead.
              </p>
              <p className="font-semibold text-navy-800">Your team. Your technology. Your way of working.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engagement models ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Choose Your Engagement Model</h2>
          <p className="mt-3 text-lg text-navy-600">Build a team around your actual requirements — from one developer to a complete product team.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map((m) => (
            <div key={m.name} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
              <h3 className="text-lg font-bold text-navy-900">{m.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{m.text}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary-600">Suitable for</p>
              <ul className="mt-2 space-y-1.5">
                {m.suits.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-navy-700">
                    <CheckIcon />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roles & tech stack ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Build Your Team Around the Technology You Use</h2>
            <p className="mt-3 text-lg text-navy-600">Access developers and specialists across modern technology stacks.</p>
          </div>
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <span key={r} className="rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-primary-700">{r}</span>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((t) => (
              <ChipGroup key={t.title} title={t.title} items={t.items} />
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-500">Technology availability depends on the required skill profile and project scope.</p>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Startups, SMEs and Enterprises</h2>
          <p className="mt-3 text-lg text-navy-600">Build more. Spend smarter. Scale faster.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div key={a.name} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
              <h3 className="text-xl font-extrabold text-navy-900">{a.name}</h3>
              <p className="mt-1.5 text-sm font-medium text-primary-700">{a.tagline}</p>
              <ul className="mt-5 space-y-2">
                {a.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-navy-700">
                    <CheckIcon />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works staircase ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-navy-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>How it works</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                Requirement.
                <br />
                Team. Delivery.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Simple, transparent and collaborative — from understanding your needs to scaling the team as they evolve.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                simple
                <br />
                steps
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {OFF_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Requirement</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Scale</span>
          </div>
        </div>
      </section>

      {/* ── Collaboration ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Your Offshore Team Should Feel Like Your Own</h2>
          <p className="mt-3 text-lg text-navy-600">Distance shouldn&apos;t create barriers — teams collaborate with your preferred tools and processes.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ChipGroup title="Collaboration Tools" items={TOOLS} />
          <ChipGroup title="Development Practices" items={PRACTICES} />
        </div>
      </section>

      {/* ── Aveon vs Large IT ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">A Flexible Alternative to Large IT Organizations</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-navy-200 bg-white p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Large IT Organization</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
                {["Often structured teams", "Multiple management layers", "Contract / process-dependent scaling", "Typically higher overhead", "Often standardized offerings", "Often larger engagements"].map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">Aveon Offshore Team</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
                {["High team flexibility", "Direct team collaboration", "Flexible scaling", "Competitive / nominal pricing", "Business-specific customization", "Suitable for startups to enterprises"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-navy-500">
            Pricing and engagement structures vary by organization and project. This describes Aveon&apos;s intended
            positioning, not a universal claim about every IT company.
          </p>
        </div>
      </section>

      {/* ── Why Aveon ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Why Businesses Choose Aveon</h2>
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
            {offshoreFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Global Talent. Indian Advantage. Competitive Cost.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              You don&apos;t always need a large organization to build great technology — just the right people, skills
              and team structure. Let&apos;s build yours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Build Your Team →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Request Team Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
