import { createFileRoute } from "@tanstack/react-router";
import { NotFoundView } from "@/components/portfolio/NotFoundView";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page Not Found (404) — Dhushyandh | Full-Stack Developer" },
      {
        name: "description",
        content:
          "The requested page could not be located. Explore verified full-stack projects, credentials, resume, and contact details for Dhushyandh.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return <NotFoundView />;
}
