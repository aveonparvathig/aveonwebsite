import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

// The project id is public by design (it ships in the client bundle),
// so a hardcoded default keeps the site + studio working even when the
// env var isn't configured on the host.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jc3ht4hv";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-01";

/** Cache tag shared by all Sanity fetches; the revalidate webhook purges it. */
export const SANITY_CACHE_TAG = "sanity";

/** True once a real Sanity project is configured via env vars. */
export const sanityConfigured = Boolean(projectId);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}

/**
 * Fetch from Sanity when configured, otherwise return fallback data.
 * Lets the site run fully before the CMS project is provisioned.
 * Responses are cached for an hour and tagged so the Sanity webhook
 * (/api/revalidate) can purge them instantly on publish.
 */
export async function fetchOrFallback<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    const result = await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 3600, tags: [SANITY_CACHE_TAG] },
    });
    // Empty CMS (not yet populated, or all docs unpublished) → fallback.
    if (result == null || (Array.isArray(result) && result.length === 0)) {
      return fallback;
    }
    return result;
  } catch {
    return fallback;
  }
}
