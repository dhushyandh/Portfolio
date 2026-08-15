import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES } from "@/components/portfolio/case-studies";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          { loc: `${origin}/`, priority: "1.0" },
          ...CASE_STUDIES.map((c) => ({
            loc: `${origin}/projects/${c.slug}`,
            priority: "0.8",
          })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`,
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