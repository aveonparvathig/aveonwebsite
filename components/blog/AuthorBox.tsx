import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { EDITORIAL_AUTHOR } from "@/lib/data/static-posts";

export default function AuthorBox() {
  return (
    <aside className="mt-12 border-t border-navy-900/10 pt-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl" aria-hidden>
          📚
        </div>
        <div>
          <p className="font-bold text-navy-900">{EDITORIAL_AUTHOR}</p>
          <p className="mt-1 text-sm leading-relaxed text-navy-600">
            Education-technology specialists at Aveon Infotech who have implemented campus ERP, Outcome-Based
            Education and accreditation reporting for {siteConfig.stats.institutions} institutions across India since{" "}
            {siteConfig.stats.foundedYear}.{" "}
            <Link href="/about" className="font-semibold text-primary-600 hover:text-primary-700">
              About the team
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
