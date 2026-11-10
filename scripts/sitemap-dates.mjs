// Writes lib/data/page-dates.json: the date each sitemap page was last edited,
// taken from git history of the files that hold its content.
//
//   npm run sitemap:dates     (run before committing a content change)
//
// The result is committed rather than computed at build time because Vercel
// builds from a shallow clone, where `git log` would report the latest commit
// for every file. A page missing from the JSON simply gets no <lastmod>.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_DIR = "app/(site)";

/** Last commit date (YYYY-MM-DD) that touched any of the given files. */
function lastEdited(files) {
  // A file with uncommitted edits is being changed right now: date it today,
  // so the script can run before the commit that carries those edits.
  const dirty = execFileSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" }).trim();
  if (dirty) return new Date().toISOString().slice(0, 10);
  const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { encoding: "utf8" }).trim();
  return out || null;
}

/** Every static route under app/(site): a folder with a page.tsx and no [param] segment. */
function staticRoutes(dir = SITE_DIR, route = "") {
  const found = [];
  if (existsSync(join(dir, "page.tsx"))) found.push({ route: route || "/", file: join(dir, "page.tsx") });
  for (const name of readdirSync(dir)) {
    const child = join(dir, name);
    if (!statSync(child).isDirectory() || name.startsWith("[")) continue;
    found.push(...staticRoutes(child, `${route}/${name}`));
  }
  return found;
}

const dates = {};
for (const { route, file } of staticRoutes()) {
  const date = lastEdited([file.replaceAll("\\", "/")]);
  if (date) dates[route] = date;
}

// Product pages served by the dynamic [slug] route share one template and one
// data file, so they share a date; sitemap.ts looks this key up for them.
const productTemplate = lastEdited([`${SITE_DIR}/products/[slug]/page.tsx`, "lib/data/products.ts"]);
if (productTemplate) dates["/products/[slug]"] = productTemplate;

const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync("lib/data/page-dates.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(`Wrote ${Object.keys(sorted).length} page dates to lib/data/page-dates.json`);
