import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES } from "@/components/portfolio/case-studies";

const BASE_URL = "https://dhushyandh.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          { loc: `${BASE_URL}/`, priority: "1.0" },
          ...CASE_STUDIES.map((c) => ({
            loc: `${BASE_URL}/projects/${c.slug}`,
            priority: "0.8",
          })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`,
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