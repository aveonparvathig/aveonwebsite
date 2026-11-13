import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparison, aveonImplementation } from "@/lib/data/comparisons";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: `/comparisons/${c.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-navy-700">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const path = `/comparisons/${c.slug}`;
  const reviewed = formatDate(c.reviewed);
  const others = comparisons.filter((o) => o.slug !== c.slug);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: c.h1,
    description: c.description,
    url: `${siteConfig.url}${path}`,
    dateModified: c.reviewed,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Aveon Campus ERP",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${siteConfig.url}/products/college-erp`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: c.vendor,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: c.vendorUrl,
      },
    ],
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Compare campus ERP vendors", href: "/comparisons" },
    { name: `Aveon vs ${c.vendor}`, href: path },
  ]);
  const faqs = faqJsonLd(c.faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="min-h-dvh bg-white py-16 sm:py-20 lg:py-24">
      {[pageJsonLd, breadcrumbs, faqs].map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy-500">
          <Link href="/" className="hover:text-primary-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/comparisons" className="hover:text-primary-600">
            Comparisons
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy-800">Aveon vs {c.vendor}</span>
        </nav>

        <header className="mb-10">
          <h1 className="mb-4 text-[clamp(30px,4.5vw,44px)] font-extrabold leading-tight text-navy-900">{c.h1}</h1>
          <p className="max-w-[820px] text-lg text-navy-700">{c.summary}</p>
          <p className="mt-4 text-sm text-navy-500">
            Last reviewed {reviewed} · Written by the Aveon Editorial Team. Aveon is one of the two products compared
            here; see <a href="#methodology" className="underline">how we compared</a>.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-navy-900/10 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-navy-500">{c.vendor} is a better fit for</p>
            <p className="text-navy-800">{c.bestFor.them}</p>
          </div>
          <div className="rounded-lg border border-primary-600/30 bg-primary-50 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary-700">Aveon is a better fit for</p>
            <p className="text-navy-800">{c.bestFor.aveon}</p>
            <Link href="/contact#demo" className="mt-4 inline-block font-semibold text-primary-600 hover:underline">
              Book a demo on your own data →
            </Link>
          </div>
        </div>

        <section className="prose prose-lg mt-14 max-w-[820px] text-navy-800">
          <h2>About {c.vendor}</h2>
          {c.about.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p>
            Facts about {c.vendor} on this page come from {c.vendorFull}&apos;s own website, read on {reviewed}; the
            sources are listed at the end of the page.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-extrabold text-navy-900">
            Aveon vs {c.vendor}: side-by-side comparison
          </h2>
          <p className="mb-6 max-w-[820px] text-navy-700">
            &ldquo;Not stated&rdquo; means we could not find it on the vendor&apos;s website, not that the feature is
            missing. Confirm every row in a demo.
          </p>
          <div className="overflow-x-auto rounded-lg border border-navy-900/10">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-primary-50 text-left text-navy-900">
                  <th scope="col" className="w-[22%] px-4 py-3 font-bold">
                    Criterion
                  </th>
                  <th scope="col" className="px-4 py-3 font-bold">
                    Aveon
                  </th>
                  <th scope="col" className="px-4 py-3 font-bold">
                    {c.vendor}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.matrix.map((r) => (
                  <tr key={r.label} className="border-t border-navy-900/10 align-top">
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-navy-900">
                      {r.label}
                    </th>
                    <td className="px-4 py-3 text-navy-700">{r.aveon}</td>
                    <td className="px-4 py-3 text-navy-700">{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-navy-500">
            {c.vendor} data from its website as of {reviewed}. Pricing is not compared in rupees because neither vendor
            publishes a full price list; use the <Link href="/comparisons" className="underline">five-year cost template</Link>.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-7 py-3 font-bold text-white hover:bg-primary-700"
            >
              See Aveon answer these rows live
            </Link>
          </div>
        </section>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-navy-900">Where {c.vendor} is strong</h2>
            <List items={c.theirStrengths} />
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-navy-900">Where Aveon differs</h2>
            <List items={c.aveonDifferences} />
          </section>
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-[clamp(24px,3vw,32px)] font-extrabold text-navy-900">Which should you choose?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-navy-900/10 p-6">
              <h3 className="mb-3 text-lg font-bold text-navy-900">Choose {c.vendor} if</h3>
              <List items={c.chooseThem} />
            </div>
            <div className="rounded-lg border border-primary-600/30 bg-primary-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-navy-900">Choose Aveon if</h3>
              <List items={c.chooseAveon} />
            </div>
          </div>
        </section>

        <section className="prose prose-lg mt-14 max-w-[820px] text-navy-800">
          <h2>Five questions to ask both vendors in the demo</h2>
          <p>
            Feature lists rarely separate two serious vendors. These questions do, because they make each vendor show
            the answer on screen rather than describe it. Ask them in the same order to both, and score each answer
            from 0 to 5 straight after the demo using the{" "}
            <Link href="/comparisons">twelve-criterion scorecard</Link>.
          </p>
          <ol>
            {c.demoQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
          <p>
            Aveon&apos;s implementation follows a {aveonImplementation.toLowerCase()}. Whichever vendor you shortlist,
            ask for the plan in writing before you sign, and call three references of your own choosing, ideally
            institutions of a similar size and affiliating university.
          </p>

          <h2>Frequently asked questions</h2>
          {c.faqs.map((f) => (
            <section key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </section>
          ))}

          <h2 id="methodology">How we compared</h2>
          <p>
            This page is published by Aveon Infotech, which makes one of the two products compared. To keep it fair:
            every statement about {c.vendor} is taken from {c.vendor}&apos;s own website and attributed to it; where
            something is not on its website we say &ldquo;not stated&rdquo; rather than assume it is missing; we do not
            quote ratings or review counts; and we list {c.vendor}&apos;s strengths, including areas where it covers
            ground Aveon does not. Aveon&apos;s figures ({siteConfig.stats.institutions} institutions,{" "}
            {siteConfig.stats.students} students, founded {siteConfig.stats.foundedYear}) are our own. We re-check each
            vendor quarterly. If {c.vendor} believes anything here is inaccurate, write to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and we will correct it.
          </p>

          <h3>Sources</h3>
          <ul>
            {c.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="nofollow noopener" target="_blank">
                  {s.label}
                </a>{" "}
                (accessed {reviewed})
              </li>
            ))}
          </ul>

          <h2>More comparisons</h2>
          <ul>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/comparisons/${o.slug}`}>Aveon vs {o.vendor}</Link>
              </li>
            ))}
            <li>
              <Link href="/comparisons">How to compare campus ERP vendors: the scorecard</Link>
            </li>
            <li>
              <Link href="/products/college-erp">Aveon college ERP software</Link> ·{" "}
              <Link href="/products/university-erp">University ERP</Link> ·{" "}
              <Link href="/products/iqac-naac-nba">IQAC / NAAC / NBA</Link> ·{" "}
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </section>

        <div className="mt-14 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 p-10 text-center text-white sm:p-12">
          <h2 className="mb-4 text-3xl font-bold">Comparing Aveon and {c.vendor}?</h2>
          <p className="mb-8 text-lg opacity-90">
            We will run the five demo questions on your own programme structure and fill in the five-year cost
            template for your enrolment.
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-primary-600 hover:bg-gray-100"
          >
            Book a comparison demo
          </Link>
        </div>
      </div>
    </div>
  );
}
