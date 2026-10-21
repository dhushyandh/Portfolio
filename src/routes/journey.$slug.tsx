import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { TIMELINE, type ExperienceItem } from "@/components/portfolio/data";
import "@/components/portfolio/ReferencePortfolio.css";

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
      "Three-month internship",
      "Practical full-stack development",
      "Frontend + backend workflows",
      "Database and API practical experience",
    ],
    learnings:
      "This internship reinforced the value of structured code, consistent workflows, and understanding how data flows from user interface to database.",
  },

  "codec-technologies-mern-internship": {
    tagline: "Focused MERN stack development practice.",
    overview:
      "At Codec Technologies, I focused on MERN stack development, gaining hands-on experience in building full-stack web applications using React, Node.js, Express, and MongoDB.",
    responsibilities: [
      "React component development",
      "Backend API routes with Express",
      "MongoDB database integration",
      "Connecting frontend with backend services",
      "Understanding full-stack application architecture",
    ],
    highlights: [
      "Hands-on MERN stack development",
      "Component-based UI design",
      "REST API integration",
      "Database schema and querying",
    ],
    learnings:
      "Working with the MERN stack deepened my understanding of full-stack JavaScript development and showed me how modern web stacks fit together seamlessly.",
  },

  "project-based-software-development": {
    tagline: "Learning by building complete projects.",
    overview:
      "A core part of my developer journey has been personal project building — exploring technologies, solving real challenges, and building complete applications from scratch.",
    responsibilities: [
      "Ideating and planning project architectures",
      "Building responsive interfaces from scratch",
      "Integrating APIs, authentication, and database models",
      "Testing, deploying, and refining features",
      "Exploring new tools, cloud services, and AI workflows",
    ],
    highlights: [
      "Full project lifecycles",
      "Self-directed engineering",
      "Broad technology exploration",
      "Practical problem solving",
    ],
    learnings:
      "Building personal projects is where real learning happens. It forces you to solve unexpected problems, read documentation carefully, and understand software end-to-end.",
  },

  "be-computer-science-engineering": {
    tagline: "Strong engineering and computer science fundamentals.",
    overview:
      "Pursuing a Bachelor of Engineering in Computer Science and Engineering at C. Abdul Hakeem College of Engineering and Technology (Anna University) provides the theoretical foundation for my practical development work.",
    responsibilities: [
      "Studying core computer science subjects (Data Structures, Algorithms, DBMS, Networks, OS)",
      "Applying theoretical concepts to practical coding projects",
      "Participating in academic projects and technical events",
      "Maintaining strong academic performance alongside practical development",
    ],
    highlights: [
      "Anna University affiliated",
      "Computer Science Engineering (2023 — 2027)",
      "Core CS fundamentals",
      "Balancing academia with real-world development",
    ],
    learnings:
      "A solid theoretical foundation in computer science makes learning new technologies, debugging complex issues, and designing software architectures much faster and more intuitive.",
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
                    name: "Journey",
                    item: "https://dhushyandh.in/journey",
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
    <div className="reference-portfolio ref-case-study-page">
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <Link className="ref-brand" to="/">
            Dhushyandh
          </Link>
          <div className="ref-nav-links">
            <Link to="/">Home</Link>
            <Link to="/journey">Journey</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
      </header>

      <main id="main-content" className="ref-wrap" style={{ minHeight: "50vh", paddingTop: "80px", textAlign: "center" }}>
        <div className="ref-case-hero-tag">404 Error</div>
        <h1 className="ref-case-title">Milestone Not Found</h1>
        <p className="ref-case-overview" style={{ maxWidth: "500px", margin: "0 auto 30px" }}>
          The requested career journey milestone could not be located.
        </p>
        <Link to="/journey" className="ref-back-pill">
          <ArrowLeft size={14} /> Back to All Milestones
        </Link>
      </main>

      <PortfolioFooter />
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
    <div className="reference-portfolio ref-case-study-page">
      {/* Sticky Header */}
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <Link className="ref-brand" to="/">
            Dhushyandh
          </Link>

          <div className="ref-nav-links">
            <Link to="/" hash="home">Home</Link>
            <Link to="/" hash="about">About</Link>
            <Link to="/" hash="projects">Projects</Link>
            <Link to="/" hash="services">Services</Link>
            <Link to="/" hash="credentials">Credentials</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/journey" className="active font-semibold">Journey</Link>
            <Link to="/" hash="contact">Contact</Link>
            <Link className="ref-nav-cta" to="/" hash="contact">
              Let’s Talk <ArrowUpRight size={14} />
            </Link>
          </div>
        </nav>
      </header>

      <main id="main-content" className="ref-wrap">
        {/* Hero Section */}
        <div className="ref-case-study-hero">
          {/* Breadcrumb Navigation Bar */}
          <nav aria-label="Breadcrumb" className="ref-breadcrumb-bar">
            <ol className="ref-breadcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/journey">Journey</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>{item.title}</li>
            </ol>

            <Link to="/journey" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Journey
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <Icon size={12} />
            <span>{item.type} · {item.period}</span>
          </div>

          <h1 className="ref-case-title">{item.title}</h1>
          <p className="ref-case-overview">{details.tagline}</p>

          <div className="ref-case-meta-row">
            <div className="ref-case-meta-pill">
              <span className="ref-case-status-dot" />
              <span>{item.type} Experience</span>
            </div>
            <div className="ref-case-meta-pill">
              <span style={{ color: "var(--muted)", fontSize: 11, textTransform: "uppercase" }}>Organization:</span>
              <span>{item.org}</span>
            </div>
            <div className="ref-case-meta-pill">
              <span style={{ color: "var(--muted)", fontSize: 11, textTransform: "uppercase" }}>Timeline:</span>
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        {/* Detailed Grid Content */}
        <div className="ref-case-grid-content">
          {/* Left Column: Overview & Responsibilities */}
          <div>
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="ref-case-section-heading">
                01 / Milestone Overview
              </h2>
              <article className="ref-case-feature-card">
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "var(--ink-secondary)" }}>
                  {details.overview}
                </p>
              </article>
            </section>

            <section aria-labelledby="resp-heading" style={{ marginTop: 36 }}>
              <h2 id="resp-heading" className="ref-case-section-heading">
                02 / Key Responsibilities & Workflows
              </h2>
              <div className="ref-case-features-list">
                {details.responsibilities.map((resp, index) => (
                  <article key={resp} className="ref-case-feature-card" style={{ padding: "16px 20px" }}>
                    <div className="ref-case-feature-header" style={{ margin: 0 }}>
                      <span className="ref-case-feature-icon">
                        <span style={{ fontSize: 11, fontWeight: 700 }}>{index + 1}</span>
                      </span>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 550, color: "var(--ink)" }}>
                        {resp}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Highlights & Outcomes */}
          <div>
            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="ref-case-section-heading">
                03 / Key Highlights
              </h2>
              <div className="ref-case-tech-chips">
                {details.highlights.map((h) => (
                  <span key={h} className="ref-case-tech-chip">
                    {h}
                  </span>
                ))}
              </div>
            </section>

            <section aria-labelledby="learnings-heading" style={{ marginTop: 28 }}>
              <h2 id="learnings-heading" className="ref-case-section-heading">
                04 / Growth & Outcomes
              </h2>
              <div className="ref-case-callout-card">
                <div className="ref-case-callout-title">
                  <Check size={14} strokeWidth={2.6} /> Key Takeaway
                </div>
                <p className="ref-case-callout-text">
                  {details.learnings}
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Next Milestone Card */}
        {next && (
          <Link
            to="/journey/$slug"
            params={{ slug: next.slug }}
            className="ref-case-next-card"
            style={{ marginBottom: 60 }}
          >
            <div>
              <p className="ref-case-next-label">Next Career Milestone</p>
              <h3 className="ref-case-next-title">{next.title}</h3>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--muted)" }}>
                {next.org} · {next.period}
              </p>
            </div>
            <div className="ref-case-next-arrow">
              <ArrowRight size={22} />
            </div>
          </Link>
        )}
      </main>

      <PortfolioFooter />
    </div>
  );
}