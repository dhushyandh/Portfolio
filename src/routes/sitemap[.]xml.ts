import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES } from "@/components/portfolio/case-studies";
import { ACHIEVEMENTS, TIMELINE } from "@/components/portfolio/data";

const BASE_URL = "https://dhushyandh.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
          { loc: `${BASE_URL}/resume`, priority: "0.9", changefreq: "monthly" },
          ...CASE_STUDIES.map((c) => ({
            loc: `${BASE_URL}/projects/${c.slug}`,
            priority: "0.8",
            changefreq: "monthly",
          })),
          ...TIMELINE.map((t) => ({
            loc: `${BASE_URL}/journey/${t.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
          ...ACHIEVEMENTS.map((a) => ({
            loc: `${BASE_URL}/credentials/${a.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
          { loc: `${BASE_URL}/privacy-policy`, priority: "0.5", changefreq: "yearly" },
          { loc: `${BASE_URL}/terms-and-conditions`, priority: "0.5", changefreq: "yearly" },
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});