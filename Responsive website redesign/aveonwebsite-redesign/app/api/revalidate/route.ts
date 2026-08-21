import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { SANITY_CACHE_TAG } from "@/lib/sanity";

/**
 * Webhook target for Sanity: Settings → API → Webhooks → POST to
 * https://<site>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 * on create/update/delete. Purges all Sanity-tagged caches so published
 * changes appear immediately instead of after the hourly revalidation.
 */
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation is not configured" },
      { status: 503 },
    );
  }

  const provided = new URL(request.url).searchParams.get("secret");
  if (provided !== secret) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag(SANITY_CACHE_TAG, "max");
  return NextResponse.json({ revalidated: true, tag: SANITY_CACHE_TAG });
}
