import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TechLogo, TechBadge } from "@/components/ui/TechLogo";

export const metadata: Metadata = {
  title: "Aveon Academy",
  description:
    "Aveon Academy offers industry-oriented technology programs: full-stack development, AI/ML, digital marketing, software innovation and prompt engineering.",
};

/* ── Icons (24px outline paths) ─────────────────────────────── */
const ICONS = {
  code: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  cpu: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z",
  megaphone:
    "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46",
  cube: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  chat: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  book: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  rocket:
    "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  bulb: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  users:
    "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  check: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  cap: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  briefcase:
    "M20.25 14.25v.108c0 1.006-.634 1.909-1.582 2.253l-3.727 1.244a4.5 4.5 0 01-1.582.282h-2.318a4.5 4.5 0 01-1.582-.282l-3.727-1.244a2.375 2.375 0 01-1.582-2.253v-.108M20.25 14.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25M20.25 14.25v-4.5a2.25 2.25 0 00-2.25-2.25H15M3.75 14.25v-4.5A2.25 2.25 0 016 7.5h3m6 0V6a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 009 6v1.5m6 0H9",
  chart:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
} as const;

type IconName = keyof typeof ICONS;

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[name]} />
    </svg>
  );
}

/* ── Data ───────────────────────────────────────────────────── */
const heroChips: { label: string; className: string }[] = [
  { label: "Real Projects", className: "left-3 top-5 sm:-left-4" },
  { label: "Industry Mentors", className: "right-3 top-12 sm:-right-4" },
  { label: "Practical Learning", className: "bottom-14 left-3 sm:-left-6" },
  { label: "Career Ready", className: "bottom-5 right-3 sm:-right-3" },
];

const chain: { label: string; icon: IconName }[] = [
  { label: "Learn", icon: "book" },
  { label: "Build", icon: "code" },
  { label: "Practice", icon: "cpu" },
  { label: "Solve", icon: "bulb" },
  { label: "Grow", icon: "rocket" },
];

const courses: { no: string; title: string; tech: string[]; months: string; unit: string; note?: string; learn: string[] }[] = [
  { no: "01", title: "Fullstack Web Application (MERN)", tech: ["MongoDB", "Express", "React.js", "Node.js"], months: "6", unit: "Months", learn: ["MERN Stack Development", "Python Programming", "AI Tools", "ML Basics"] },
  { no: "02", title: "Full Stack Web Application (MEAN)", tech: ["MongoDB", "Express", "Angular", "Node.js"], months: "6", unit: "Months", learn: ["MEAN Stack Development", "JavaScript (TypeScript)", "AI Tools", "ML Basics"] },
  { no: "03", title: "AI Full Stack Web Application", tech: ["Python", "React.js", "ChatGPT", "TensorFlow"], months: "6", unit: "Months", learn: ["MERN Stack", "Python", "AI Tools", "ML Basics"] },
  { no: "04", title: "Front-End Development", tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"], months: "3", unit: "Months", learn: ["HTML5, CSS3", "JavaScript", "Responsive Web Design", "UI/UX Principles", "Figma to Web"] },
  { no: "05", title: "Digital Marketing Specialist", tech: ["Meta Ads", "Google Ads", "Google Analytics", "Canva", "ChatGPT"], months: "3", unit: "Months", learn: ["Content Creation", "Lead and Ads", "Social Media", "AI in Marketing"] },
  { no: "06", title: "Software Innovation Development with AI", tech: ["Figma", "Miro", "ChatGPT", "Firebase", "GitHub"], months: "2", unit: "Months", note: "Basic knowledge on software is required", learn: ["Problem Solving", "Innovation Planning", "AI Tools", "MVP Development"] },
  { no: "07", title: "Website Development", tech: ["HTML5", "CSS3", "JavaScript", "WordPress"], months: "2", unit: "Months", learn: ["HTML5 & CSS3", "JavaScript", "Responsive Design", "Website Deployment"] },
  { no: "08", title: "AI Prompting Short Course", tech: ["ChatGPT", "Gemini", "Claude"], months: "10", unit: "Days", learn: ["Prompt Engineering Basics", "ChatGPT & AI Tools", "AI Productivity", "Real-world Prompting"] },
  { no: "09", title: "AI Prompting Professional Course", tech: ["ChatGPT", "Gemini", "Claude"], months: "1", unit: "Month", learn: ["Advanced Prompt Engineering", "AI Tools & Workflows", "Automation with AI", "Real-world Projects"] },
];

const pride: { icon: IconName; value: string; label: string }[] = [
  { icon: "cap", value: "1000+", label: "Students Trained" },
  { icon: "briefcase", value: "50+", label: "Industry Projects" },
  { icon: "users", value: "100%", label: "Internship for Every Student" },
  { icon: "check", value: "Expert", label: "Industry Mentors" },
];

const buildSteps = [
  { no: "01", title: "Learn", text: "Understand the fundamentals." },
  { no: "02", title: "Build", text: "Apply your knowledge." },
  { no: "03", title: "Solve", text: "Work on real-world problems." },
  { no: "04", title: "Showcase", text: "Build your portfolio." },
];

const whyFeatures: { icon: IconName; title: string; text: string }[] = [
  { icon: "book", title: "Industry-Relevant Curriculum", text: "Topics chosen from real software work." },
  { icon: "code", title: "Hands-On Learning", text: "Practice on every concept you study." },
  { icon: "rocket", title: "Real Project Experience", text: "Ship projects, not just assignments." },
  { icon: "users", title: "Expert Guidance", text: "Feedback from people who build software." },
  { icon: "briefcase", title: "Career-Focused Skills", text: "Learn what teams actually look for." },
  { icon: "sparkles", title: "Modern Technology", text: "Current tools, frameworks and AI." },
];


const techStack = ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Python", "SQL", "Git", "Cloud", "AI", "Machine Learning", "Generative AI"];

// Sample testimonials: replace with real student feedback before launch.
const testimonials = [
  {
    quote: "I learned by building real projects, not just watching lessons. My portfolio helped me a lot during interviews.",
    name: "Karthik R.",
    program: "Full-Stack Development",
  },
  {
    quote: "The mentors explained AI in a simple way and gave feedback on every project. I now use it in my daily work.",
    name: "Divya S.",
    program: "AI / ML & Applications",
  },
  {
    quote: "The hands-on campaigns and analytics practice gave me confidence to manage marketing for real businesses.",
    name: "Arun M.",
    program: "Digital Marketing",
  },
];

const ENQUIRY_FORM_URL = "https://forms.gle/QqwPW81XqZFj5xH77";

/* ── Shared styles ──────────────────────────────────────────── */
const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10";
const eyebrow =
  "inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700";
const h2 = "mt-4 text-[clamp(26px,3.4vw,40px)] font-extrabold leading-tight text-navy-900";
const primaryBtn =
  "inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-600";
const secondaryBtn =
  "inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-navy-900/15 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600";

function SectionHead({ label, title, text }: { label?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      {label && <span className={eyebrow}>{label}</span>}
      <h2 className={h2}>{title}</h2>
      {text && <p className="mt-3.5 text-[17px] leading-relaxed text-navy-700">{text}</p>}
    </div>
  );
}

/* ── Project mock-ups (product-style UI, no stock imagery) ──── */
function MockShell({ children, bar }: { children: React.ReactNode; bar: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-[0_10px_30px_-18px_rgb(16_26_51_/_0.45)]">
      <div className="flex items-center gap-1.5 border-b border-navy-900/8 bg-navy-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-navy-200" />
        <span className="h-2 w-2 rounded-full bg-navy-200" />
        <span className="h-2 w-2 rounded-full bg-navy-200" />
        <span className="ml-2 text-[10px] font-bold text-navy-500">{bar}</span>
      </div>
      <div className="h-[150px] p-3">{children}</div>
    </div>
  );
}

function ShopMock() {
  return (
    <MockShell bar="shop.app">
      <div className="grid h-full grid-cols-3 gap-2">
        {[60, 80, 45].map((h, i) => (
          <div key={i} className="flex flex-col rounded-lg border border-navy-900/8 p-1.5">
            <div className="flex-1 rounded-md bg-gradient-to-br from-primary-100 to-primary-50" style={{ minHeight: h / 2 }} />
            <span className="mt-1.5 h-1.5 w-3/4 rounded bg-navy-200" />
            <span className="mt-1 h-1.5 w-1/2 rounded bg-primary-200" />
            <span className="mt-1.5 rounded bg-primary-600 py-0.5 text-center text-[8px] font-bold text-white">Add</span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

function DashMock() {
  return (
    <MockShell bar="dashboard">
      <div className="flex h-full flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {["1.2k", "86%", "24"].map((v) => (
            <div key={v} className="rounded-md bg-primary-50 px-2 py-1.5">
              <span className="block text-[11px] font-extrabold text-primary-700">{v}</span>
              <span className="mt-1 block h-1 w-2/3 rounded bg-primary-200" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-md border border-navy-900/8 px-2 pb-2 pt-3">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary-600 to-primary-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </MockShell>
  );
}

function AiMock() {
  return (
    <MockShell bar="assistant">
      <div className="flex h-full flex-col justify-center gap-2">
        <div className="ml-auto max-w-[75%] rounded-lg rounded-br-sm bg-primary-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">
          Summarise my tasks for today
        </div>
        <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-navy-50 px-2.5 py-1.5 text-[9px] font-semibold text-navy-700">
          You have 3 priorities. Start with the client report.
        </div>
        <div className="mt-1 flex items-center gap-2 rounded-full border border-navy-900/10 px-3 py-1.5">
          <span className="h-1.5 flex-1 rounded bg-navy-100" />
          <span className="h-3 w-3 rounded-full bg-primary-600" />
        </div>
      </div>
    </MockShell>
  );
}

function StudentMock() {
  return (
    <MockShell bar="students">
      <div className="flex h-full flex-col gap-1.5">
        {["A", "B", "C", "D"].map((l, i) => (
          <div key={l} className="flex items-center gap-2 rounded-md border border-navy-900/8 px-2 py-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-[8px] font-extrabold text-primary-700">{l}</span>
            <span className="h-1.5 flex-1 rounded bg-navy-100" />
            <span className={`rounded px-1.5 text-[8px] font-bold ${i === 2 ? "bg-accent-50 text-accent-600" : "bg-primary-50 text-primary-700"}`}>
              {i === 2 ? "Due" : "Paid"}
            </span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

const projects: { title: string; text: string; tags: string[]; Mock: () => React.JSX.Element }[] = [
  { title: "E-Commerce Platform", text: "Product catalogue, cart and checkout flow.", tags: ["React", "Node.js", "SQL"], Mock: ShopMock },
  { title: "Business Dashboard", text: "Live metrics and charts for decisions.", tags: ["JavaScript", "APIs", "Analytics"], Mock: DashMock },
  { title: "AI Productivity Assistant", text: "A chat assistant that automates daily tasks.", tags: ["Python", "Generative AI", "Prompts"], Mock: AiMock },
  { title: "Student Management System", text: "Records, fees and attendance in one place.", tags: ["Full-Stack", "Database", "Auth"], Mock: StudentMock },
];

/* ── Program structure visual for the introduction ─────────── */
const structure: { icon: IconName; phase: string; title: string; text: string }[] = [
  { icon: "book", phase: "Phase 1", title: "Foundations", text: "Core concepts and tools you need from day one." },
  { icon: "code", phase: "Phase 2", title: "Core Skills", text: "Hands-on practice with the technologies used in industry." },
  { icon: "rocket", phase: "Phase 3", title: "Real Project", text: "Design, build and deploy a complete product." },
  { icon: "briefcase", phase: "Phase 4", title: "Portfolio & Career", text: "Showcase your work and prepare for opportunities." },
];

function ProgramSteps() {
  return (
    <div className="grid gap-3.5 sm:grid-cols-2">
      {structure.map((p, i) => (
        <div
          key={p.title}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
        >
          <span aria-hidden className="pointer-events-none absolute -right-1 -top-3 select-none text-[70px] font-extrabold leading-none text-white/10">
            0{i + 1}
          </span>
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 shadow-[0_10px_24px_-12px_rgb(16_26_51_/_0.5)]">
            <Icon name={p.icon} className="h-5 w-5" />
          </span>
          <p className="relative mt-4 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-white/70">{p.phase}</p>
          <p className="relative text-[17px] font-extrabold leading-tight text-white">{p.title}</p>
          <p className="relative mt-1.5 text-[13.5px] leading-snug text-white/80">{p.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function AcademyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
          <div>
            <span className={eyebrow}>Aveon Academy</span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(38px,5.4vw,66px)] font-extrabold leading-[1.02] text-navy-900">
              Skills Today.
              <span className="block text-primary-600">Careers Tomorrow.</span>
            </h1>
            <p className="mt-4 text-[clamp(18px,2vw,22px)] font-bold text-navy-900">Industry-Oriented Technology Programs</p>
            <p className="mt-4 max-w-[560px] text-[17.5px] leading-[1.7] text-navy-700">
              Build practical technology skills through hands-on learning, real projects, expert guidance and industry-focused programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="#programs" className={primaryBtn}>
                Explore Programs
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
                Enquire Now
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/products/acd.jpg"
              alt="Learners collaborating on a technology project at Aveon Academy"
              width={600}
              height={400}
              priority
              className="w-full rounded-2xl object-cover shadow-[0_30px_70px_-30px_rgb(16_26_51_/_0.5)]"
            />
            {heroChips.map((c) => (
              <span
                key={c.label}
                className={`absolute inline-flex items-center gap-1.5 rounded-full border border-navy-900/8 bg-white px-3 py-1.5 text-[11.5px] font-bold text-navy-900 shadow-[0_12px_30px_-14px_rgb(16_26_51_/_0.45)] ${c.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={`${container} py-10 lg:py-14`}>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 px-6 py-10 shadow-[0_40px_90px_-34px_rgb(29_111_242_/_0.7)] sm:px-10 lg:px-14 lg:py-12">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-white/10 blur-[2px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-[280px] w-[280px] rounded-full bg-accent-500/25 blur-[60px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-white">
                Practical Learning
              </span>
              <h2 className="mt-4 text-[clamp(26px,3.4vw,40px)] font-extrabold leading-tight text-white">
                Learn What the Industry Actually Uses
              </h2>
              <p className="mt-4 max-w-[520px] text-[16.5px] leading-relaxed text-primary-50">
                Aveon Academy focuses on practical technology learning that connects knowledge with real-world software development. You are not simply watching lessons.
              </p>
              <div className="relative mt-8 max-w-[520px]">
                <div aria-hidden className="absolute left-6 right-6 top-6 h-0.5 border-t-2 border-dashed border-white/40" />
                <ol className="relative flex items-start justify-between">
                  {chain.map((c, i) => {
                    const last = i === chain.length - 1;
                    return (
                      <li key={c.label} className="flex w-14 flex-col items-center gap-2">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-primary-600/40 transition-transform duration-300 hover:-translate-y-1 ${
                            last
                              ? "bg-accent-500 text-white shadow-[0_14px_30px_-10px_rgb(249_115_22_/_0.8)]"
                              : "bg-white text-primary-700 shadow-[0_10px_24px_-12px_rgb(16_26_51_/_0.6)]"
                          }`}
                        >
                          <Icon name={c.icon} className="h-5 w-5" />
                        </span>
                        <span className="text-[12.5px] font-extrabold text-white">{c.label}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            <ProgramSteps />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-28 bg-gradient-to-b from-navy-50 to-white">
        <div className={`${container} py-14 lg:py-18`}>
          <SectionHead
            label="Our Courses"
            title="Explore Our Technology Programs"
            text="Learn practical skills. Build real projects. Prepare for the future."
          />

          <div className="mx-auto mt-8 flex max-w-[640px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 px-5 py-3.5 text-white shadow-[0_18px_40px_-20px_rgb(29_111_242_/_0.7)]">
            <Icon name="cap" className="h-6 w-6 shrink-0" />
            <p className="text-[14px] font-extrabold uppercase tracking-[0.1em] sm:text-[15px]">All courses include internship</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.no}
                className="group relative flex flex-col overflow-hidden rounded-[22px] border border-navy-900/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-600/30 hover:shadow-card-hover"
              >
                <div className="relative bg-gradient-to-br from-primary-50 to-white px-5 pb-3.5 pt-4">
                  <span aria-hidden className="pointer-events-none absolute right-4 top-0 select-none text-[54px] font-extrabold leading-none text-primary-100/80">
                    {c.no}
                  </span>
                  <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-extrabold text-primary-700 shadow-sm">
                    <Icon name="clock" className="h-4 w-4" />
                    {c.months} {c.unit}
                  </span>
                  <h3 className="relative mt-3 min-h-[2.75rem] pr-10 text-[17px] font-extrabold leading-snug text-navy-900">{c.title}</h3>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-4 pt-3.5">
                  <div className="flex flex-wrap gap-2">
                    {c.tech.map((tk) => (
                      <TechBadge key={tk} name={tk} large />
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy-500">What you will learn</p>
                  <ul className="mt-2.5 space-y-2">
                    {c.learn.map((l) => (
                      <li key={l} className="flex items-start gap-2.5 text-[14px] font-semibold leading-snug text-navy-800">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.6} aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {l}
                      </li>
                    ))}
                  </ul>

                  <div className="flex-1 pb-4" />
                  {c.note && (
                    <p className="mt-4 rounded-lg bg-accent-50 px-3 py-2 text-[12px] font-semibold leading-snug text-accent-700">{c.note}</p>
                  )}

                  <div className="mt-auto flex items-center justify-between border-t border-navy-900/8 pt-3">
                    <span className="text-[12px] font-bold text-navy-500">Includes internship</span>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-primary-600">
                      Enquire Now
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-center text-[13px] font-extrabold uppercase tracking-[0.14em] text-navy-500">Our students. Our pride.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pride.map((p) => (
                <div key={p.label} className="flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-white p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[24px] font-extrabold leading-none text-primary-600">{p.value}</p>
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-navy-700">{p.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARN BY BUILDING */}
      <section className={`${container} py-14 lg:py-18`}>
        <SectionHead title="Don't Just Learn. Build." text="Turn concepts into practical experience through real-world projects." />
        <div className="relative mt-12">
          <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {buildSteps.map((s) => (
              <li key={s.no} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-[16px] font-extrabold text-white shadow-[0_14px_30px_-12px_rgb(29_111_242_/_0.7)] ring-4 ring-white">
                  {s.no}
                </span>
                <h3 className="mt-4 text-[17px] font-extrabold uppercase tracking-wide text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REAL PROJECTS */}
      <section className="bg-navy-50">
        <div className={`${container} py-14 lg:py-18`}>
          <SectionHead label="Projects" title="Build Projects That Feel Like Real Products" />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(({ title, text, tags, Mock }) => (
              <article key={title} className="group flex flex-col rounded-[22px] border border-navy-900/8 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="rounded-xl bg-gradient-to-br from-primary-50 to-white p-3">
                  <Mock />
                </div>
                <h3 className="mt-5 px-1.5 text-[17px] font-extrabold text-navy-900">{title}</h3>
                <p className="mt-1.5 px-1.5 text-[14px] leading-relaxed text-navy-600">{text}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5 px-1.5">
                  {tags.map((t) => (
                    <li key={t} className="rounded-full bg-primary-50 px-2.5 py-1 text-[11.5px] font-bold text-primary-700">
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto inline-flex items-center gap-2 px-1.5 pt-5 text-[14px] font-bold text-primary-600">
                  View Project
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AVEON ACADEMY */}
      <section className={`${container} py-14 lg:py-18`}>
        <SectionHead label="Why Aveon Academy" title="Why Learn With Aveon Academy?" />
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:border-primary-600/30 hover:shadow-[0_20px_60px_-10px_rgb(29_111_242_/_0.15)]">
              <Icon name={f.icon} className="h-8 w-8 text-primary-600 transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-[17px] font-extrabold text-navy-900">{f.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className={`${container} py-14 lg:py-18`}>
        <SectionHead label="Technology" title="Learn With Modern Technology" />
        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
          {techStack.map((t) => (
            <TechLogo key={t} name={t} />
          ))}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className={`${container} py-14 lg:py-18`}>
          <SectionHead label="Student Voices" title="What Our Learners Say" />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card">
                <span aria-hidden className="block h-7 text-[52px] font-extrabold leading-[0.9] text-primary-200">“</span>
                <blockquote className="mt-3 flex-1 text-[15.5px] leading-relaxed text-navy-700">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-900/8 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-[14px] font-extrabold text-white">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-extrabold text-navy-900">{t.name}</span>
                    <span className="block text-[12.5px] font-semibold text-primary-700">{t.program}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1320px] px-4 pb-12 pt-6 sm:px-6 lg:px-10 lg:pb-16">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 px-6 py-12 shadow-[0_40px_90px_-34px_rgb(29_111_242_/_0.7)] sm:px-12 lg:px-15 lg:py-14">
          <div aria-hidden className="absolute -right-20 -top-20 h-65 w-65 rounded-full bg-accent-500/85" />
          <div aria-hidden className="absolute -bottom-28 -left-22 h-70 w-70 rounded-full bg-white/12" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="max-w-[520px] text-[clamp(28px,3.8vw,46px)] font-extrabold leading-tight text-white">
                Ready to Build Your Future?
              </h2>
              <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-primary-50">
                Start learning practical technology skills with Aveon Academy.
              </p>
              <div className="mt-7.5 flex flex-wrap gap-3.5">
                <Link
                  href="#programs"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-8 py-4 text-[15px] font-bold text-primary-700 transition-transform hover:-translate-y-0.5"
                >
                  Explore Programs
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href={ENQUIRY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center whitespace-nowrap rounded-full border border-white/50 px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/15"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-3.5">
              <Image
                src="/images/illo-monitor.avif"
                alt="Learners and mentors connecting on Aveon Academy"
                width={1350}
                height={900}
                className="w-full animate-floaty"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
