"use client";

import Link from "next/link";
import { NextStudio } from "next-sanity/studio";
import config, { sanityProjectId } from "@/sanity.config";

export default function StudioPage() {
  if (!sanityProjectId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-900">
          Sanity Studio isn&apos;t configured yet
        </h1>
        <p className="mt-4 leading-relaxed text-navy-600">
          To enable the CMS: create a free project at{" "}
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-600"
          >
            sanity.io/manage
          </a>
          , copy its Project ID into{" "}
          <code className="rounded bg-navy-50 px-1.5 py-0.5 text-sm">
            .env.local
          </code>{" "}
          as{" "}
          <code className="rounded bg-navy-50 px-1.5 py-0.5 text-sm">
            NEXT_PUBLIC_SANITY_PROJECT_ID
          </code>
          , then restart the dev server and reload this page.
        </p>
        <p className="mt-4 text-sm text-navy-500">
          Until then, the site runs on built-in fallback content.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white hover:bg-primary-700"
        >
          Back to site
        </Link>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
