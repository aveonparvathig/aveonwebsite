import Link from "next/link";
import { comparisons } from "@/lib/data/comparisons";

/** Links to the head-to-head comparison pages, for product and pricing pages. */
export default function CompareVendorsLinks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-navy-900/10 p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-navy-900">Comparing Aveon with other vendors?</h2>
          <p className="mt-2 max-w-[680px] text-[15px] text-navy-700">
            Side-by-side comparisons using facts from each vendor&apos;s own website, including where they are the
            better fit, plus a scorecard you can apply to any vendor.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {comparisons.map((c) => (
              <li key={c.slug}>
                <Link href={`/comparisons/${c.slug}`} className="font-semibold text-primary-600 hover:underline">
                  Aveon vs {c.vendor}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/comparisons" className="font-semibold text-primary-600 hover:underline">
                Vendor scorecard
              </Link>
            </li>
            <li>
              <Link href="/resources/college-erp-buyers-guide" className="font-semibold text-primary-600 hover:underline">
                ERP buyer&apos;s guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
