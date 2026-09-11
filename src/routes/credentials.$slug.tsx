import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cloud,
  ExternalLink,
  Github,
  Trophy,
} from "lucide-react";
import { ACHIEVEMENTS } from "@/components/portfolio/data";

type CredentialDetail = {
  slug: string;
  title: string;
  provider: string;
  category: string;
  description: string;
  overview: string;
  highlights: string[];
  icon: keyof typeof ICONS;
  image?: string;
};

const ICONS = {
  github: Github,
  cloud: Cloud,
  award: Award,
  book: BookOpen,
  trophy: Trophy,
};

const CREDENTIAL_DETAILS: CredentialDetail[] = [
  {
    slug: "aws-technical-essentials",
    title: "AWS Technical Essentials",
    provider: "Amazon Web Services",
    category: "Cloud Learning",
    description:
      "Cloud fundamentals and AWS learning experience.",
    overview:
      "AWS Technical Essentials provides foundational exposure to Amazon Web Services and core cloud concepts. It supports understanding of common AWS services and the fundamentals behind cloud-based application development.",
    highlights: [
      "Introduction to core AWS cloud concepts.",
      "Foundation for understanding AWS services.",
      "Supports cloud-oriented application development.",
    ],
    icon: "cloud",
    image: "/certificates/aws.png",
  },
  {
    slug: "ibm-web-development",
    title: "IBM Web Development",
    provider: "IBM",
    category: "Web Development",
    description:
      "IBM learning covering HTML, CSS, and JavaScript fundamentals.",
    overview:
      "This learning experience focused on foundational web development concepts using HTML, CSS, and JavaScript. These technologies form an important foundation for building modern web interfaces.",
    highlights: [
      "HTML fundamentals.",
      "CSS fundamentals.",
      "JavaScript fundamentals.",
      "Foundation for frontend web development.",
    ],
    icon: "award",
    image: "/certificates/IBM-frontend.png",
  },
  {
    slug: "amazon-full-stack-web-development",
    title: "Amazon Full Stack Web Development",
    provider: "Amazon",
    category: "Full Stack Development",
    description:
      "Full-stack web development learning and project work.",
    overview:
      "This learning experience focused on full-stack web development concepts and practical project work, complementing Dhushyandh's continued development across frontend and backend technologies.",
    highlights: [
      "Full-stack web development concepts.",
      "Practical project-oriented learning.",
      "Frontend and backend development exposure.",
    ],
    icon: "book",
    image: "/certificates/FullStack%20-%20Amazon.png",
  },
  {
    slug: "oracle-cloud-infrastructure",
    title: "Oracle Cloud Infrastructure",
    provider: "Oracle",
    category: "Cloud Infrastructure",
    description:
      "Cloud infrastructure learning through Oracle.",
    overview:
      "This credential represents learning focused on Oracle Cloud Infrastructure and foundational cloud infrastructure concepts.",
    highlights: [
      "Introduction to cloud infrastructure concepts.",
      "Oracle Cloud Infrastructure exposure.",
      "Supports broader cloud technology knowledge.",
    ],
    icon: "trophy",
    image: "/certificates/Oracle%20-%20oci.png",
  },
  {
    slug: "google-cloud-cybersecurity",
    title: "Google Cloud Cybersecurity Certificate",
    provider: "Google",
    category: "Cloud Security",
    description:
      "Cloud cybersecurity foundations and security learning through Google.",
    overview:
      "This certificate represents foundational learning in cybersecurity with a focus on cloud environments, security principles, and responsible protection of digital systems.",
    highlights: [
      "Cybersecurity foundations.",
      "Cloud security concepts.",
      "Security-focused technology learning.",
    ],
    icon: "cloud",
    image: "/certificates/CyberSecurity-Google.png",
  },
  {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    provider: "MERN Stack Development",
    category: "Full Stack Development",
    description:
      "Full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
    overview:
      "This certificate represents practical learning across the MERN stack, covering the technologies used to build modern full-stack web applications from frontend interface to backend API and database.",
    highlights: [
      "MongoDB database development.",
      "Express and Node.js backend development.",
      "React frontend development.",
      "Full-stack application workflows.",
    ],
    icon: "book",
    image: "/certificates/MERN_Intern.png",
  },
];

function getCredential(slug: string) {
  return CREDENTIAL_DETAILS.find((credential) => credential.slug === slug);
}

function getNextCredential(slug: string) {
  const index = CREDENTIAL_DETAILS.findIndex(
    (credential) => credential.slug === slug,
  );

  if (index === -1) return undefined;

  return CREDENTIAL_DETAILS[(index + 1) % CREDENTIAL_DETAILS.length];
}

export const Route = createFileRoute("/credentials/$slug")({
  loader: ({ params }) => {
    const credential = getCredential(params.slug);

    if (!credential) {
      throw notFound();
    }

    return {
      credential,
      next: getNextCredential(params.slug),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Credential Not Found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { credential } = loaderData;
    const title = `${credential.title} (${credential.provider}) — Credentials | Dhushyandh`;
    const url = `https://dhushyandh.in/credentials/${credential.slug}`;
    const description = `${credential.title} credential from ${credential.provider}. ${credential.description}`;
    const imageUrl = credential.image
      ? `https://dhushyandh.in${credential.image}`
      : "https://dhushyandh.in/og-image.png";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${credential.title}, ${credential.provider}, ${credential.category}, Dhushyandh, certifications, credentials, MERN Stack Developer`,
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
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "EducationalOccupationalCredential",
                name: credential.title,
                credentialCategory: credential.category,
                description: credential.overview,
                recognizedBy: {
                  "@type": "Organization",
                  name: credential.provider,
                },
                url,
                image: imageUrl,
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
                    name: "Credentials",
                    item: "https://dhushyandh.in/#achievements",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: credential.title,
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

  component: CredentialPage,
});

function CredentialPage() {
  const { credential, next } = Route.useLoaderData();

  const Icon = ICONS[credential.icon];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 78% 18%,
                color-mix(in oklab, var(--color-primary) 22%, transparent),
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
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
          <Link
            to="/"
            hash="achievements"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={15} />
            Back to credentials
          </Link>

          <div className="mt-12 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {credential.category}
              </span>
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {credential.provider}
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {credential.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {credential.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
        {credential.image && (
          <figure className="surface-card mb-8 overflow-hidden rounded-2xl p-3 sm:p-5">
            <img
              src={credential.image}
              alt={`${credential.title} certificate`}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto max-h-[620px] w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Certificate issued by {credential.provider}
            </figcaption>
          </figure>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Overview */}
          <article className="surface-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary">
                01
              </span>

              <h2 className="font-display text-xl font-bold text-foreground">
                Overview
              </h2>
            </div>

            <p className="mt-6 text-[15px] leading-8 text-muted-foreground">
              {credential.overview}
            </p>
          </article>

          {/* Details */}
          <aside className="surface-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary">
                02
              </span>

              <h2 className="font-display text-xl font-bold text-foreground">
                Highlights
              </h2>
            </div>

            <ul className="mt-6 space-y-4">
              {credential.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            hash="achievements"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={15} />
            Back to credentials
          </Link>

          {next && (
            <Link
              to="/credentials/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Next credential
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}