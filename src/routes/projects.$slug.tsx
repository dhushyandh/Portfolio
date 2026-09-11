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
    const url = `https://dhushyandh.in/projects/${study.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: study.tagline },
        {
          name: "keywords",
          content: `${study.title}, ${study.stack.join(", ")}, Dhushyandh, MERN Stack Developer, case study`,
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: study.tagline },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Dhushyandh" },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: study.tagline },
        { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
            name: study.title,
            headline: study.title,
            description: study.tagline,
            dateCreated: study.year,
            keywords: study.stack.join(", "),
                author: {
                  "@type": "Person",
                  name: "Dhushyandh N",
                  url: "https://dhushyandh.in",
                },
                ...(study.live ? { sameAs: study.live } : {}),
                url,
            codeRepository: study.github,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://dhushyandh.in/",
                  },
                  { "@type": "ListItem", position: 2, name: study.title, item: url },
                ],
              },
            ],
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
  const { study, next } = Route.useLoaderData() as {
    study: CaseStudy;
    next: CaseStudy;
  };

  const meta = [
    { label: "Year", value: study.year },
    { label: "Role", value: study.role },
    { label: "Status", value: study.status },
    { label: "Stack", value: `${study.stack.length} technologies` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Case Study Hero */}
      <section
        className="relative overflow-hidden border-b border-border"
        style={{
          background: `
            radial-gradient(
              circle at 78% 18%,
              ${study.tint},
              transparent 42%
            ),
            linear-gradient(
              180deg,
              oklch(0.14 0.02 260) 0%,
              oklch(0.08 0.01 260) 55%,
              var(--background) 100%
            )
          `,
        }}
      >
        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* soft bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          <div className="mt-24 max-w-4xl sm:mt-36">
            <p className="eyebrow">Case Study</p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              {study.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              {study.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        {/* Project Meta */}
        <div className="relative z-10 -mt-1 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {meta.map((m) => (
            <div
              key={m.label}
              className="surface-card p-5 sm:p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {m.label}
              </p>

              <p className="mt-2 font-display text-sm font-bold text-foreground sm:text-[15px]">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mt-20 sm:mt-24">
          <p className="eyebrow">01 / Overview</p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What I built
          </h2>

          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
            {study.overview}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-16 sm:mt-20">
          <p className="eyebrow">02 / Technology</p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tech Stack
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="chip chip-hover"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 sm:mt-20">
          <p className="eyebrow">03 / Capabilities</p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Key Features
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {study.features.map((f, index) => (
              <div
                key={f.title}
                className="surface-card card-hover p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-[16px] font-bold text-foreground">
                      {f.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges + Learnings */}
        <section className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2">
          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow">04 / Challenges</p>

            <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              What was difficult?
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              {study.challenges}
            </p>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow">05 / Learnings</p>

            <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              What I learned
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              {study.learnings}
            </p>
          </div>
        </section>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-3">
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}

          <a
            href={study.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-display text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>

        {/* Next Project */}
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="surface-card card-hover mt-16 flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="min-w-0">
            <p className="eyebrow">Next Project</p>

            <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
              {next.title}
            </h3>

            <p className="mt-2 text-[15px] text-muted-foreground">
              {next.tagline}
            </p>
          </div>

          <ArrowRight
            size={20}
            className="shrink-0 text-primary"
          />
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
