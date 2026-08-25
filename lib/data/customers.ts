export type Customer = {
  /** Institution / company name shown in the "Trusted by" strip. */
  name: string;
  /** Optional logo URL (from Sanity) or a path under /public. When absent, the name is shown as text. */
  logo?: string;
};

/**
 * ⚠️ PLACEHOLDER DATA — replace with your real customers before going live.
 *
 * These are sample names only. Update them here, or manage customers from
 * Sanity Studio (the "Customer" document type). When Sanity is configured and
 * has Customer entries, they override this list automatically.
 */
export const customers: Customer[] = [
  { name: "Sunrise University" },
  { name: "Green Valley College" },
  { name: "Heritage Institute of Technology" },
  { name: "St. Mary's Matriculation School" },
  { name: "Coastal Arts & Science College" },
  { name: "National Polytechnic" },
  { name: "Crescent Public School" },
  { name: "Riverside Engineering College" },
];
