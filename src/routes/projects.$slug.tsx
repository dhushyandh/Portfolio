import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import type { CaseStudy } from "@/components/portfolio/case-studies";
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy } from "@/components/portfolio/case-studies";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study, next: getNextCaseStudy(params.slug)! };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Case Study | Dhushyandh`;
    return {
      meta: [
        { title },
        { name: "description", content: study.tagline },
        {
          name: "keywords",
          content: `${study.title}, ${study.stack.join(", ")}, Dhushyandh case study`,
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: study.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            headline: study.title,
            description: study.tagline,
            dateCreated: study.year,
            keywords: study.stack.join(", "),
            author: { "@type": "Person", name: "Dhushyandh Neduncheziyan" },
            ...(study.live ? { url: study.live } : {}),
            codeRepository: study.github,
          }),
        },
      ],
    };
  },
  notFoundComponent: CaseStudyMissing,
  component: CaseStudyPage,
});

function CaseStudyMissing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          This case study doesn&apos;t exist.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[15px] text-foreground transition-colors hover:bg-accent"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const { study, next } = Route.useLoaderData() as { study: CaseStudy; next: CaseStudy };

  const meta = [
    { label: "Year", value: study.year },
    { label: "Role", value: study.role },
    { label: "Status", value: study.status },
    { label: "Stack", value: `${study.stack.length} technologies` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-20 sm:px-6 sm:pt-36">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <p className="eyebrow mt-10">Case Study</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{study.tagline}</p>

        <div
          className="mt-10 h-40 rounded-2xl border border-border sm:h-56"
          style={{ background: `linear-gradient(150deg, ${study.tint}, oklch(0.17 0 0))` }}
        />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="surface-card p-5">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">{m.label}</p>
              <p className="mt-2 font-display text-[15px] font-bold text-foreground">{m.value}</p>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Overview</h2>
          <p className="mt-4 text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
            {study.overview}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Key Features</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {study.features.map((f) => (
              <div key={f.title} className="surface-card card-hover p-6">
                <h3 className="text-[16px] font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <section className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-foreground">Challenges</h2>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{study.challenges}</p>
          </section>
          <section className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-foreground">Learnings</h2>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{study.learnings}</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              <ExternalLink size={16} /> View Live
            </a>
          )}
          <a
            href={study.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-display text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent"
          >
            <Github size={16} /> View on GitHub
          </a>
        </div>

        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="surface-card card-hover mt-16 flex flex-col gap-2 p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <p className="eyebrow">Next Project</p>
            <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">{next.title}</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">{next.tagline}</p>
          </div>
          <ArrowRight size={20} className="shrink-0 text-primary" />
        </Link>
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhushyandh. All rights reserved. ·{" "}
          {CASE_STUDIES.length} case studies
        </div>
      </footer>
    </div>
  );
}
