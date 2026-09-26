import Image from "next/image";

// Real clients. Confirm each person has approved their quote before this goes live.
type ClientTestimonial = {
  college: string;
  location: string;
  name: string;
  role?: string;
  degree?: string;
  quote?: string;
  photo?: string;
};

const clientTestimonials: ClientTestimonial[] = [
  {
    college: "Dr. Mahalingam College of Engineering & Technology",
    location: "Pollachi, Tamil Nadu",
    name: "Dr. P. Govindasamy",
    role: "Principal & Joint Secretary",
    photo: "/testimonials/dr-govindasamy.jpg",
    quote:
      "Examination work is the most demanding part of our academic year. With Aveon, scheduling, hall arrangements and result processing follow one clear workflow, and our records are accurate and easy to find.",
  },
  {
    college: "Coimbatore Institute of Engineering and Technology (CIET)",
    location: "Coimbatore, Tamil Nadu",
    name: "Dr. K. Manikanda Subramanian",
    role: "Principal",
    photo: "/testimonials/dr-manikanda-subramanian.jpg",
    quote:
      "Admissions, attendance and fee collection now sit on a single platform. My office team spends less time on paperwork, and I can see how the whole institution is doing whenever I need to.",
  },
  {
    college: "Dhanalakshmi Srinivasan Engineering College (Autonomous)",
    location: "Perambalur, Tamil Nadu",
    name: "Prof. Dr. D. Shanmugasundaram",
    role: "Principal",
    photo: "/testimonials/prof-dr-shanmugasundaram.jpg",
    quote:
      "Outcome-based education and accreditation reporting used to mean collecting data from many places. Aveon keeps course outcomes and student performance organised, so our review preparation is much smoother.",
  },
  {
    college: "Vanavarayar Institute of Agriculture",
    location: "Pollachi, Tamil Nadu",
    name: "Dr. K. Prabakar",
    role: "Principal",
    degree: "Ph.D. (Plant Pathology)",
    photo: "/testimonials/dr-prabakar.jpg",
    quote:
      "Managing hostel allotment, mess billing and student fees together was always a challenge for us. Aveon brings these into one system that our wardens, accounts staff and students all find easy to use.",
  },
  {
    college: "E.G.S. Pillay Engineering College",
    location: "Nagapattinam, Tamil Nadu",
    name: "Dr. M. Chinnadurai",
    role: "Principal",
    photo: "/testimonials/dr-chinnadurai.jpg",
    quote:
      "Our faculty record attendance, lesson plans and internal marks in the same place, and they picked it up quickly. It has made day-to-day academic work far more consistent across departments.",
  },
  {
    college: "PSG iTech",
    location: "Coimbatore, Tamil Nadu",
    name: "Dr. N. Saravanakumar",
    role: "Principal",
    photo: "/testimonials/dr-saravanakumar.jpg",
    quote:
      "The dashboards give me a clear view of admissions, attendance and academic progress without asking for separate reports. Decisions that once needed a long wait can now be made with current information.",
  },
  {
    college: "PSGCAS",
    location: "Coimbatore, Tamil Nadu",
    name: "Dr. M. Jayanthi",
    role: "Principal",
    photo: "/testimonials/dr-jayanthi.jpg",
    quote:
      "Students and parents receive timely updates on attendance and fees, and our staff answer far fewer routine questions. Communication across the college has become simpler and more transparent.",
  },
  {
    college: "Shri Nehru Maha Vidyalaya College",
    location: "Coimbatore, Tamil Nadu",
    name: "Dr. B. Subramani",
    degree: "M.Sc., PGDCA., B.Ed., MCA., M.Phil., Ph.D.",
    photo: "/testimonials/dr-subramani.jpg",
    quote:
      "Fee collection and accounts are now well organised, with receipts and reports available whenever we need them. The Aveon team has also been quick and helpful whenever we needed support.",
  },
];


function TestimonialCard({ t }: { t: ClientTestimonial }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-[24px] border border-navy-900/8 bg-white shadow-[0_26px_60px_-30px_rgb(29_111_242_/_0.35)] sm:flex-row">
      {/* Profile panel */}
      <figcaption className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 px-4 py-5 text-center sm:w-[195px]">
        <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/80" />
        <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-white/10" />
        {t.photo ? (
          <Image
            src={t.photo}
            alt={t.name}
            width={160}
            height={160}
            loading="eager"
            className="h-20 w-20 rounded-full object-cover object-top ring-4 ring-white/80 shadow-[0_12px_28px_-10px_rgb(0_0_0_/_0.45)]"
          />
        ) : (
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-primary-600" aria-hidden>
            <svg className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z" />
            </svg>
          </span>
        )}
        <span className="mt-3 block text-[16px] font-extrabold leading-tight text-white">{t.name}</span>
        {t.role && <span className="mt-0.5 block text-[13px] font-semibold text-primary-50">{t.role}</span>}
        {t.degree && <span className="mt-0.5 block text-[11px] font-medium text-primary-100">{t.degree}</span>}
        <span className="mt-1 block text-[12px] font-semibold leading-snug text-white/90">{t.college}</span>
        <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-primary-100">
          <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {t.location}
        </span>
      </figcaption>

      {/* Testimonial panel */}
      <blockquote className="relative flex flex-1 flex-col justify-center bg-white px-5 py-4">
        <span aria-hidden className="text-[44px] font-extrabold leading-none text-accent-500">
          &ldquo;
        </span>
        {t.quote ? (
          <p className="-mt-1 text-[14px] leading-[1.65] text-navy-700">{t.quote}</p>
        ) : (
          <p className="-mt-2 text-[14.5px] italic leading-[1.7] text-navy-400">Testimonial coming soon.</p>
        )}
      </blockquote>
    </figure>
  );
}

function MarqueeRow({ items }: { items: ClientTestimonial[] }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto">
      <div
        className="ct-marquee-left flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {loop.map((t, i) => (
          <div key={`${t.name}-${i}`} className="mr-5 w-[290px] shrink-0 sm:w-[500px]" aria-hidden={i >= items.length ? true : undefined}>
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-navy-50">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            Testimonials
          </span>
          <h2 className="mt-4 text-[clamp(28px,3.8vw,44px)] font-extrabold leading-tight text-navy-900">
            What Our Institutions Say
          </h2>
          <p className="mt-3.5 text-[17px] leading-relaxed text-navy-700">
            Principals, directors and administrators share how Aveon simplified their campus.
          </p>
        </div>

        <div className="mt-11">
          <MarqueeRow items={clientTestimonials} />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 sm:text-3xl">250+</div>
            <p className="mt-2 text-sm font-medium text-navy-700">Institutions Served</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-accent-500 sm:text-3xl">5000+</div>
            <p className="mt-2 text-sm font-medium text-navy-700">Active Users</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 sm:text-3xl">4.8★</div>
            <p className="mt-2 text-sm font-medium text-navy-700">Average Rating</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ct-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ct-marquee-left { animation: ct-left 90s linear infinite; }
      `}</style>
    </section>
  );
}
