// Submits every sitemap URL to IndexNow (Bing, Yandex, Naver, Seznam and
// the AI search engines that read Bing's index). Run after a deploy:
//   npm run indexnow            -> all sitemap URLs
//   npm run indexnow -- /blog/x -> specific paths
// From Git Bash on Windows, prefix with MSYS_NO_PATHCONV=1 or the shell
// rewrites "/blog/x" into a Windows path before node sees it.
import { readdirSync, readFileSync } from "node:fs";

const HOST = "www.aveoninfotech.com";
const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file found in public/");
const key = readFileSync(`public/${keyFile}`, "utf8").trim();

const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`));
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls }),
});

console.log(`IndexNow: submitted ${urls.length} URL(s) -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) {
  console.log(await res.text());
  process.exit(1);
}
