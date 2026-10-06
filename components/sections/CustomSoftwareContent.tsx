"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { customSoftwareFaqs } from "@/lib/data/custom-software-faqs";
export { customSoftwareFaqs };

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

/** Offshore team collaboration tools and development practices */
const OFFSHORE_TEAM = {
  collaboration: [
    { name: "Microsoft Teams", icon: "MicrosoftTeams" },
    { name: "Slack", icon: "Slack" },
    { name: "Google Meet", icon: "GoogleMeet" },
    { name: "Zoom", icon: "Zoom" },
    { name: "GitHub", icon: "GitHub" },
    { name: "GitLab", icon: "GitLab" },
    { name: "Jira", icon: "Jira" },
    { name: "Trello", icon: "Trello" },
  ],
  practices: [
    { name: "Agile", icon: "Agile" },
    { name: "Scrum", icon: "Scrum" },
    { name: "Sprint Planning", icon: "SprintPlanning" },
    { name: "Daily Stand-ups", icon: "StandUp" },
    { name: "Code Reviews", icon: "CodeReview" },
    { name: "Version Control", icon: "Git" },
    { name: "QA Processes", icon: "QA" },
    { name: "CI/CD", icon: "CICD" },
  ],
};

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
  { title: "Custom Architecture", text: "Software designed around your requirements, not a generic template." },
  { title: "Modern Technology", text: "Appropriate web, mobile, cloud, AI and integration technologies." },
  { title: "Scalable Solutions", text: "A foundation that can grow with your business." },
  { title: "End-to-End Development", text: "From concept and design to deployment and ongoing support." },
];

/** Development phases with detailed steps. */
const DEVELOPMENT_PHASES: { phase: string; duration: string; steps: { title: string; description: string }[] }[] = [
  {
    phase: "Discovery & Analysis",
    duration: "2-3 weeks",
    steps: [
      { title: "Requirement Gathering", description: "In-depth discussions to understand your exact needs and challenges" },
      { title: "System Assessment", description: "Evaluate existing systems and integration points" },
      { title: "Compliance Review", description: "Identify regulatory and compliance requirements" },
      { title: "ROI Planning", description: "Estimate timeline, resources, and expected returns" },
    ],
  },
  {
    phase: "Design & Architecture",
    duration: "2-4 weeks",
    steps: [
      { title: "System Design", description: "Detailed technical architecture and data model" },
      { title: "UI/UX Wireframing", description: "User flows and interface design" },
      { title: "Tech Stack Selection", description: "Choose technologies based on requirements" },
      { title: "Security Planning", description: "Build security into the foundation" },
    ],
  },
  {
    phase: "Development",
    duration: "8-16 weeks",
    steps: [
      { title: "Agile Sprints", description: "2-week sprints with daily standups" },
      { title: "Feature Development", description: "Build and deliver features incrementally" },
      { title: "Code Reviews", description: "Quality assurance at every commit" },
      { title: "Integration Testing", description: "Continuous testing with existing systems" },
    ],
  },
  {
    phase: "Testing & Optimization",
    duration: "2-4 weeks",
    steps: [
      { title: "QA Testing", description: "Comprehensive quality assurance" },
      { title: "Performance Tuning", description: "Optimize speed and resource usage" },
      { title: "Security Audit", description: "Penetration testing and vulnerability assessment" },
      { title: "User Acceptance", description: "Test with end users and gather feedback" },
    ],
  },
  {
    phase: "Deployment & Launch",
    duration: "1-2 weeks",
    steps: [
      { title: "Production Setup", description: "Configure cloud/server infrastructure" },
      { title: "Data Migration", description: "Transfer data from legacy systems" },
      { title: "Team Training", description: "Comprehensive user and admin training" },
      { title: "Go-Live Support", description: "24/7 support during launch phase" },
    ],
  },
  {
    phase: "Post-Launch Support",
    duration: "Ongoing",
    steps: [
      { title: "90-Day Guarantee", description: "Free bug fixes and optimizations" },
      { title: "Performance Monitoring", description: "Track system health and usage" },
      { title: "User Support", description: "Help desk and documentation support" },
      { title: "Enhancement Planning", description: "Roadmap for future improvements" },
    ],
  },
];

/** Case studies with actual metrics. */
const CASE_STUDIES: { title: string; client: string; role: string; challenge: string; solution: string; results: { metric: string; value: string }[]; testimonial: string; author: string }[] = [
  {
    title: "Multi-Campus ERP Integration",
    client: "Prominent South Indian University",
    role: "Custom ERP Development + Integration",
    challenge: "8 campuses using different systems with no unified data access or reporting",
    solution: "Built custom ERP with multi-campus module, integrated all legacy systems, migrated 20 years of data",
    results: [
      { metric: "Unified Data", value: "8 campuses → single source of truth" },
      { metric: "Manual Work Reduction", value: "60% reduction in manual data entry" },
      { metric: "Annual Savings", value: "₹45 lakhs in operational costs" },
      { metric: "Implementation Time", value: "14 weeks" },
      { metric: "User Adoption", value: "95% within 30 days" },
    ],
    testimonial: "Aveon built exactly what we needed. Not an off-the-shelf system, but our system. The offshore team was responsive, professional, and delivered on time.",
    author: "Dr. Rajesh Kumar, Registrar",
  },
  {
    title: "Legacy System Modernization",
    client: "50+ Year Old Engineering College",
    role: "Complete System Rebuild",
    challenge: "Running ancient green-screen system, hard to maintain, no mobile access, staff frustrated",
    solution: "Built modern web application from scratch, migrated 20 years of historical data with validation",
    results: [
      { metric: "System Speed", value: "40% faster processes" },
      { metric: "Mobile Access", value: "Students can now use from anywhere" },
      { metric: "Data Security", value: "Modern encryption and compliance" },
      { metric: "Staff Productivity", value: "3 hours → 30 mins per day saved" },
      { metric: "Implementation Time", value: "3 months" },
    ],
    testimonial: "Our college was stuck in the past. Now we have a modern system that feels like it was built for us, because it was.",
    author: "Dr. Priya Sharma, Principal",
  },
  {
    title: "AI-Powered NAAC Automation",
    client: "Multi-Disciplinary University",
    role: "Custom AI Automation Solution",
    challenge: "Manual NAAC data collection across 15 departments, error-prone, staff burnout from compliance work",
    solution: "Built AI system that auto-collects data from various modules, validates, and generates reports automatically",
    results: [
      { metric: "Data Accuracy", value: "100% compliance rate (vs 85% manual)" },
      { metric: "Staff Time", value: "80% reduction in compliance work" },
      { metric: "Audit Trail", value: "Automatic timestamped record" },
      { metric: "Report Generation", value: "2 weeks → 2 days" },
      { metric: "ROI Payback", value: "Paid for itself in year 1" },
    ],
    testimonial: "The AI automation transformed our NAAC process. What used to take our team weeks now happens automatically.",
    author: "Dr. Vikram Singh, Compliance Officer",
  },
];

/** Pricing models. */
const PRICING_MODELS: { model: string; description: string; when: string; examples: string[] }[] = [
  {
    model: "Hourly Rate",
    description: "Pay for actual time spent. Most transparent model with flexible scope.",
    when: "Best for exploratory or evolving projects",
    examples: ["₹800-1200/hour for offshore team", "Transparent hourly tracking", "Flexible duration"],
  },
  {
    model: "Fixed Price",
    description: "Project cost and timeline fixed upfront. Clear expectations for both parties.",
    when: "Best for well-defined scope",
    examples: ["Complete cost known upfront", "Timeline included", "Detailed scope required"],
  },
  {
    model: "Time & Materials",
    description: "Estimated hours + contingency. Flexible scope with regular reviews.",
    when: "Best for agile/evolving projects",
    examples: ["Estimated hours planned", "Contingency built in", "Scope adjustments during project"],
  },
];

/** Investment examples. */
const PROJECT_INVESTMENTS: { size: string; investment: string; team: string; timeline: string; examples: string[] }[] = [
  {
    size: "Small Project",
    investment: "₹15-25 lakhs",
    team: "4-6 people",
    timeline: "2-3 months",
    examples: ["Custom reporting module", "API integration", "Mobile app", "Data migration"],
  },
  {
    size: "Medium Project",
    investment: "₹25-50 lakhs",
    team: "6-10 people",
    timeline: "3-6 months",
    examples: ["Departmental system", "Advanced features", "Multi-module integration", "Legacy system modernization"],
  },
  {
    size: "Large Project",
    investment: "₹50-150+ lakhs",
    team: "10-20 people",
    timeline: "6-12 months",
    examples: ["Complete ERP system", "Multi-campus platform", "Complex integrations", "Enterprise solution"],
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

/** Team tool logo component */
function TeamToolLogo({ name, icon }: { name: string; icon: string }) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`h-16 w-16 flex items-center justify-center rounded-xl border transition ${hasError ? 'bg-primary-50 border-primary-200' : 'bg-white border-navy-100 hover:border-primary-300 hover:shadow-md'}`}>
        {!hasError ? (
          <Image
            src={`/team-tools/${icon}.svg`}
            alt={name}
            width={48}
            height={48}
            className="h-10 w-10 object-contain"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-primary-700 text-center">{name.split(' ')[0].substring(0, 2)}</span>
        )}
      </div>
      <p className="text-xs font-semibold text-navy-700 text-center max-w-[70px]">{name}</p>
    </div>
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
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon builds across every technology: Web, Mobile, SaaS, Cloud, AI, APIs, Database and DevOps around one business.">
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
          <p className="mt-3 text-lg text-navy-600">From idea to scalable digital product across web, mobile, cloud and AI.</p>
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
              Technology chosen for the solution based on scalability, performance, security and long-term
              maintainability.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((t) => (
              <div key={t.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{t.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((i) => (
                    <span key={i} className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700">
                      {i}
                    </span>
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
                A clear, connected path: discover, design, develop, integrate, test, launch and support.
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

      {/* ── Development Phases ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Our Development Process</h2>
            <p className="mt-3 text-lg text-navy-600">
              Structured phases with clear milestones and regular communication at every step.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {DEVELOPMENT_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-navy-100">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{phase.phase}</h3>
                  </div>
                  <span className="inline-block rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 whitespace-nowrap">
                    {phase.duration}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {phase.steps.map((step) => (
                    <div key={step.title} className="flex gap-3">
                      <CheckIcon />
                      <div>
                        <p className="font-semibold text-navy-900">{step.title}</p>
                        <p className="text-sm text-navy-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Custom Development Case Studies</h2>
            <p className="mt-3 text-lg text-navy-600">
              See how we&apos;ve helped institutions build solutions that transformed their operations.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {CASE_STUDIES.map((study) => (
              <div key={study.title} className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 sm:p-8">
                <div className="grid sm:grid-cols-3 gap-6 mb-6 pb-6 border-b border-navy-100">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Client</p>
                    <p className="mt-2 font-semibold text-navy-900">{study.client}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Project Type</p>
                    <p className="mt-2 font-semibold text-navy-900">{study.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Challenge</p>
                    <p className="mt-2 font-semibold text-navy-900 text-sm">{study.challenge}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400 mb-2">Solution</p>
                  <p className="text-navy-700 leading-relaxed">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-600 mb-3">Key Results</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {study.results.map((result) => (
                      <div key={result.metric} className="flex gap-3">
                        <CheckIcon />
                        <div className="text-sm">
                          <p className="font-semibold text-navy-900">{result.value}</p>
                          <p className="text-navy-600">{result.metric}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-primary-200 bg-primary-50 p-4">
                  <p className="italic text-navy-700">&quot;{study.testimonial}&quot;</p>
                  <p className="mt-2 text-sm font-semibold text-navy-900">— {study.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Phases Staircase (Updated) ── */}
      <section className="border-t border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Project Investment & Timeline</h2>
            <p className="mt-3 text-lg text-navy-600">
              Clear pricing models based on your project scope and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECT_INVESTMENTS.map((proj) => (
              <div key={proj.size} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900">{proj.size}</h3>

                <div className="mt-6 space-y-3 pb-6 border-b border-navy-100">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Investment</p>
                    <p className="mt-1 text-xl font-bold text-primary-600">{proj.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Team</p>
                    <p className="mt-1 text-sm text-navy-900 font-semibold">{proj.team}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400">Timeline</p>
                    <p className="mt-1 text-sm text-navy-900 font-semibold">{proj.timeline}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-600 mb-3">Typical Projects</p>
                  <ul className="space-y-2">
                    {proj.examples.map((example) => (
                      <li key={example} className="flex gap-2 text-sm text-navy-700">
                        <span className="text-primary-600 font-bold">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-primary-200 bg-primary-50 p-6 sm:p-8">
            <p className="font-semibold text-navy-900">💡 ROI Example:</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-navy-900">Staff Time Automation</p>
                <p className="text-navy-600 mt-1">Investment: ₹20 L | Annual Savings: ₹25 L | Payback: 9-12 months</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Integration Project</p>
                <p className="text-navy-600 mt-1">Investment: ₹15 L | Annual Savings: ₹18 L | Payback: 10 months</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Custom ERP</p>
                <p className="text-navy-600 mt-1">Investment: ₹75 L | Annual Savings: ₹50+ L | Payback: 18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offshore Team ── */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Your Offshore Team Should Feel Like Your Own</h2>
            <p className="mt-3 text-lg text-navy-600">
              Distance shouldn&apos;t create barriers: teams collaborate with your preferred tools and processes.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600 mb-6">Collaboration Tools</h3>
              <div className="flex flex-wrap gap-3">
                {OFFSHORE_TEAM.collaboration.map((tool) => (
                  <span key={tool.name} className="inline-block rounded-full border border-primary-300 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 hover:border-primary-400 hover:bg-primary-100 transition">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600 mb-6">Development Practices</h3>
              <div className="flex flex-wrap gap-3">
                {OFFSHORE_TEAM.practices.map((practice) => (
                  <span key={practice.name} className="inline-block rounded-full border border-primary-300 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 hover:border-primary-400 hover:bg-primary-100 transition">
                    {practice.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-8">
            <h3 className="text-lg font-bold text-navy-900">Coimbatore-Based Team, 24/7 Coverage</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-navy-900">Team Expertise</p>
                <ul className="mt-3 space-y-2 text-sm text-navy-700">
                  <li>✓ 15+ years average experience per developer</li>
                  <li>✓ Full-stack capabilities (web, mobile, cloud, AI)</li>
                  <li>✓ ISO 9001 certified process</li>
                  <li>✓ Former product team members</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Your Project Structure</p>
                <ul className="mt-3 space-y-2 text-sm text-navy-700">
                  <li>✓ Dedicated Project Manager</li>
                  <li>✓ Tech Lead/Architect</li>
                  <li>✓ 3-5 Backend Developers</li>
                  <li>✓ 2-3 Frontend Developers</li>
                  <li>✓ 1-2 QA Engineers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ── */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Security & Compliance Built In</h2>
            <p className="mt-3 text-lg text-navy-600">
              Enterprise-grade security standards on every custom project.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:p-8">
              <h3 className="font-bold text-navy-900">Data Security Standards</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">ISO 27001 Information Security Management</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">SOC 2 Type II compliant</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">End-to-end encryption</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Regular security audits</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Penetration testing</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">99.9% uptime SLA</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:p-8">
              <h3 className="font-bold text-navy-900">Intellectual Property & Ownership</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">You own all code and IP</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Complete source code provided</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Full documentation included</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Knowledge transfer included</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Source code escrow available</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-navy-700">Open source compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Models ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Flexible Pricing Models</h2>
            <p className="mt-3 text-lg text-navy-600">
              Choose the model that works best for your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PRICING_MODELS.map((model) => (
              <div key={model.model} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900">{model.model}</h3>
                <p className="mt-2 text-sm text-navy-600">{model.description}</p>

                <div className="mt-6 pt-6 border-t border-navy-100">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-600">Best For</p>
                  <p className="mt-2 text-sm font-semibold text-navy-900">{model.when}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-400 mb-3">Characteristics</p>
                  <ul className="space-y-2">
                    {model.examples.map((example) => (
                      <li key={example} className="flex gap-2 text-sm text-navy-700">
                        <span className="text-primary-600 font-bold">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
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
            {customSoftwareFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_20px_44px_-22px_rgb(29_111_242_/_0.35)] open:border-primary-200 open:shadow-[0_20px_44px_-24px_rgb(29_111_242_/_0.28)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{faq.question}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-180 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="border-t border-navy-100 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Build Your Solution?</h2>
          <p className="mt-4 text-lg text-primary-100">
            Start with a free 30-minute discovery call. No commitment required.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-navy-50 px-8 py-4 text-base font-bold text-primary-600 shadow-lg transition-all hover:-translate-y-0.5"
          >
            Schedule Discovery Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
