import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { TIMELINE, type ExperienceItem } from "@/components/portfolio/data";

const ICONS = {
  briefcase: BriefcaseBusiness,
  git: Code2,
  cap: GraduationCap,
};

const JOURNEY_DETAILS: Record<
  string,
  {
    tagline: string;
    overview: string;
    responsibilities: string[];
    highlights: string[];
    learnings: string;
  }
> = {
  "freelance-full-stack-developer": {
    tagline: "Building real products and websites for real clients.",
    overview:
      "My freelance journey began with turning real client requirements into usable, responsive web experiences and product-oriented applications.",
    responsibilities: [
      "Understanding client requirements and project goals",
      "Designing and implementing responsive interfaces",
      "Developing frontend and backend functionality",
      "Deploying and iterating on production projects",
    ],
    highlights: [
      "Real client communication",
      "End-to-end project ownership",
      "Responsive web development",
      "Product-oriented development",
    ],
    learnings:
      "Freelancing has strengthened both my engineering skills and my ability to work from real requirements, make practical trade-offs, and deliver usable software.",
  },

  "unified-mentor-full-stack-internship": {
    tagline: "Three months of practical full-stack development experience.",
    overview:
      "During my internship at Unified Mentor Pvt. Ltd., I worked through practical full-stack development workflows and strengthened my understanding of building complete web applications.",
    responsibilities: [
      "Frontend application development",
      "Backend and API workflows",
      "Working with databases",
      "Understanding full-stack project structure",
      "Applying development practices in an internship environment",
    ],
    highlights: [
      "3-month internship",
      "Full-stack development",
      "Frontend and backend workflows",
      "Practical project experience",
    ],
    learnings:
      "The internship helped me connect individual technologies into complete application workflows and gain experience working within a professional development environment.",
  },

  "codec-technologies-mern-internship": {
    tagline: "Hands-on MERN stack development internship.",
    overview:
      "At Codec Technologies, I gained practical experience working with the MERN stack and understanding how frontend, backend, API, and database layers work together.",
    responsibilities: [
      "React frontend development",
      "Node.js and Express backend development",
      "MongoDB data workflows",
      "REST API implementation",
      "Full-stack application development",
    ],
    highlights: [
      "MERN stack experience",
      "React development",
      "Node.js & Express",
      "MongoDB",
      "REST APIs",
    ],
    learnings:
      "This internship strengthened my practical MERN stack foundation and gave me experience thinking about applications as connected frontend, backend, and data systems.",
  },

  "project-based-software-development": {
    tagline: "Continuous learning through building serious software.",
    overview:
      "Alongside my formal education and internships, I have consistently used project-based development to learn modern software engineering concepts by building applications.",
    responsibilities: [
      "Designing application architectures",
      "Building frontend interfaces",
      "Developing backend APIs",
      "Working with databases and authentication",
      "Exploring cloud and AI-assisted development",
    ],
    highlights: [
      "Full-stack applications",
      "API development",
      "Database design",
      "Authentication",
      "Cloud technologies",
      "AI-assisted workflows",
    ],
    learnings:
      "Building projects continuously has helped me move from learning individual technologies to understanding how they fit together in complete software systems.",
  },

  "be-computer-science-engineering": {
    tagline: "Computer Science Engineering · 2023 — 2027",
    overview:
      "I am pursuing a B.E. in Computer Science Engineering while complementing academic learning with internships, freelance work, and project-based software development.",
    responsibilities: [
      "Studying core computer science concepts",
      "Developing software through academic projects",
      "Building practical web development skills",
      "Applying classroom concepts through independent development",
    ],
    highlights: [
      "B.E. Computer Science Engineering",
      "2023 — 2027",
      "Anna University",
      "Project-based learning",
    ],
    learnings:
      "My degree provides the foundation in computer science while my projects and professional experiences help me apply that knowledge to practical software development.",
  },
};

function getJourney(slug: string) {
  return JOURNEY_DETAILS[slug];
}

function getNextJourney(slug: string) {
  const index = TIMELINE.findIndex((item) => item.slug === slug);

  if (index === -1) return undefined;

  return TIMELINE[(index + 1) % TIMELINE.length];
}

export const Route = createFileRoute("/journey/$slug")({
  loader: ({ params }) => {
    const item = TIMELINE.find((entry) => entry.slug === params.slug);
    const details = getJourney(params.slug);
    const next = getNextJourney(params.slug);

    if (!item || !details || !next) {
      throw notFound();
    }

    return {
      item,
      details,
      next,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Journey Not Found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item, details } = loaderData;
    const title = `${item.title} — ${item.org} | Journey & Experience — Dhushyandh`;
    const url = `https://dhushyandh.in/journey/${item.slug}`;
    const description = `${item.title} at ${item.org} (${item.period}). ${details.tagline} ${item.description}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${item.title}, ${item.org}, ${item.type}, Dhushyandh, career timeline, developer experience, MERN Stack`,
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Dhushyandh" },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
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
                "@type": "AboutPage",
                name: item.title,
                description,
                url,
                mainEntity: {
                  "@type": "Person",
                  name: "Dhushyandh N",
                  jobTitle: item.title,
                  worksFor: {
                    "@type": "Organization",
                    name: item.org,
                  },
                },
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
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Experience",
                    item: "https://dhushyandh.in/#experience",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: item.title,
                    item: url,
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },

  notFoundComponent: JourneyMissing,

  component: JourneyPage,
});

function JourneyMissing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
        <p className="eyebrow">404</p>

        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          This journey doesn&apos;t exist.
        </h1>

        <Link
          to="/"
          hash="experience"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[15px] text-foreground transition-colors hover:bg-accent"
        >
          <ArrowLeft size={16} />
          Back to experience
        </Link>
      </div>
    </div>
  );
}

function JourneyPage() {
  const { item, details, next } = Route.useLoaderData() as {
    item: ExperienceItem;
    details: (typeof JOURNEY_DETAILS)[string];
    next: ExperienceItem;
  };

  const Icon = ICONS[item.icon];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border"
        style={{
          background: `
            radial-gradient(
              circle at 78% 18%,
              ${item.tint},
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
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  oklch(1 0 0 / 4%) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  oklch(1 0 0 / 4%) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
          <Link
            to="/"
            hash="experience"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Back to experience
          </Link>

          <div className="mt-20 max-w-4xl sm:mt-28">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-primary backdrop-blur">
                <Icon size={19} />
              </div>

              <div>
                <p className="eyebrow">{item.type}</p>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.period}
                </p>
              </div>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              {item.title}
            </h1>

            <p className="mt-4 text-base font-medium text-primary sm:text-lg">
              {item.org}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              {details.tagline}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        {/* Overview */}
        <section className="pt-16 sm:pt-20">
          <p className="eyebrow">01 / Overview</p>

          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            The journey
          </h2>

          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
            {details.overview}
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mt-16 sm:mt-20">
          <p className="eyebrow">02 / Responsibilities</p>

          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            What I worked on
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {details.responsibilities.map((item, index) => (
              <div
                key={item}
                className="surface-card card-hover p-6"
              >
                <span className="font-mono text-[10px] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 text-[15px] leading-7 text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-16 sm:mt-20">
          <p className="eyebrow">03 / Highlights</p>

          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            What stands out
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {details.highlights.map((highlight) => (
              <span
                key={highlight}
                className="chip chip-hover"
              >
                {highlight}
              </span>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mt-16 sm:mt-20">
          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow">04 / Learnings</p>

            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              What I gained
            </h2>

            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-muted-foreground sm:text-[16px]">
              {details.learnings}
            </p>
          </div>
        </section>

        {/* Next */}
        <Link
          to="/journey/$slug"
          params={{ slug: next.slug }}
          className="surface-card card-hover mt-16 flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="eyebrow">Next Journey</p>

            <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
              {next.title}
            </h3>

            <p className="mt-2 text-[15px] text-muted-foreground">
              {next.org} · {next.period}
            </p>
          </div>

          <ArrowRight
            size={20}
            className="shrink-0 text-primary"
          />
        </Link>

        <div className="mt-10">
          <Link
            to="/"
            hash="experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Back to experience
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhushyandh. All rights reserved.
        </div>
      </footer>
    </div>
  );
}