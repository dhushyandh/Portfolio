import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  Cloud,
  Github,
  Trophy,
  Zap,
  Linkedin,
} from "lucide-react";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

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

export const Route = createFileRoute("/credentials/$slug")({
  loader: ({ params }) => {
    const credential = CREDENTIAL_DETAILS.find((c) => c.slug === params.slug);
    if (!credential) throw notFound();

    const currentIndex = CREDENTIAL_DETAILS.findIndex(
      (c) => c.slug === params.slug,
    );
    const next =
      currentIndex < CREDENTIAL_DETAILS.length - 1
        ? CREDENTIAL_DETAILS[currentIndex + 1]
        : undefined;

    return { credential, next };
  },

  head: ({ loaderData }) => {
    const credential = loaderData?.credential;

    if (!credential) {
      return {
        meta: [
          { title: "Credential Not Found | Dhushyandh" },
          {
            name: "description",
            content: "The requested credential details could not be found.",
          },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }

    const title = `${credential.title} | ${credential.provider} Certificate — N. Dhushyandh`;
    const description = credential.overview;
    const url = `https://dhushyandh.in/credentials/${credential.slug}`;
    const imageUrl = `https://dhushyandh.in${credential.image || "/og-image.png"}`;

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
        { property: "og:image:alt", content: `${credential.title} — ${credential.provider} Certificate` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:image:alt", content: `${credential.title} — ${credential.provider} Certificate` },
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
                    item: "https://dhushyandh.in/#credentials",
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
  notFoundComponent: () => (
    <div className="reference-portfolio ref-case-study-page">
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <Link className="ref-brand" to="/">
            Dhushyandh
          </Link>
          <div className="ref-nav-links">
            <Link to="/" hash="credentials">Credentials</Link>
            <a
              className="ref-nav-cta ref-nav-linkedin"
              href="https://linkedin.com/in/dhushyandh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dhushyandh on LinkedIn"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} className="ref-nav-linkedin-arrow" />
            </a>
          </div>
        </nav>
      </header>
      <main className="ref-wrap py-24 text-center">
        <h1 className="ref-section-title">Credential Not Found</h1>
        <p className="ref-muted mt-4">The requested certification could not be located.</p>
        <Link to="/" hash="credentials" className="ref-btn-primary mt-6 inline-flex">
          <ArrowLeft size={16} /> Back to Credentials
        </Link>
      </main>
    </div>
  ),
});

function CredentialPage() {
  const { credential, next } = Route.useLoaderData();
  const Icon = ICONS[credential.icon];

  return (
    <div className="reference-portfolio ref-case-study-page">
      {/* Top Header matching reference layout */}
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
            <Link to="/" hash="credentials" className="active font-semibold">Credentials</Link>
            <Link to="/" hash="contact">Contact</Link>
            <a
              className="ref-nav-cta ref-nav-linkedin"
              href="https://linkedin.com/in/dhushyandh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dhushyandh on LinkedIn"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} className="ref-nav-linkedin-arrow" />
            </a>
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
                <Link to="/" hash="credentials">Credentials</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: 'var(--ink)', fontWeight: 600 }}>{credential.title}</li>
            </ol>

            <Link to="/" hash="credentials" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Credentials
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <Icon size={12} />
            <span>{credential.provider} · {credential.category}</span>
          </div>

          <h1 className="ref-case-title">{credential.title}</h1>
          <p className="ref-case-overview">{credential.description}</p>

          <div className="ref-case-meta-row">
            <div className="ref-case-meta-pill">
              <span className="ref-case-status-dot" />
              <span>Verified Industry Certificate</span>
            </div>
            <div className="ref-case-meta-pill">
              <span style={{ color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase' }}>Issuer:</span>
              <span>{credential.provider}</span>
            </div>
          </div>
        </div>

        {/* Certificate Image Frame */}
        {credential.image && (
          <div className="ref-case-preview-frame" style={{ background: '#ffffff', padding: '28px 18px', textAlign: 'center' }}>
            <img
              src={credential.image}
              alt={`${credential.title} certificate issued by ${credential.provider}`}
              loading="eager"
              decoding="async"
              style={{ maxHeight: 680, objectFit: 'contain', margin: '0 auto', display: 'block' }}
            />
            <p style={{ margin: '18px 0 0', fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>
              Verified credential issued by {credential.provider}
            </p>
          </div>
        )}

        {/* Detailed Grid Content: Overview & Key Competencies */}
        <div className="ref-case-grid-content">
          {/* Left Column: Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="ref-case-section-heading">
              Certification Overview
            </h2>
            <article className="ref-case-feature-card">
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: 'var(--ink-secondary)' }}>
                {credential.overview}
              </p>
            </article>
          </section>

          {/* Right Column: Highlights & Key Competencies */}
          <section aria-labelledby="highlights-heading">
            <h2 id="highlights-heading" className="ref-case-section-heading">
              Core Competencies
            </h2>

            <div className="ref-case-features-list">
              {credential.highlights.map((highlight) => (
                <article key={highlight} className="ref-case-feature-card" style={{ padding: '16px 20px' }}>
                  <div className="ref-case-feature-header" style={{ margin: 0 }}>
                    <span className="ref-case-feature-icon">
                      <Check size={14} strokeWidth={2.6} />
                    </span>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 550, color: 'var(--ink)' }}>
                      {highlight}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Next Credential Navigation */}
        {next && (
          <Link
            to="/credentials/$slug"
            params={{ slug: next.slug }}
            className="ref-case-next-card"
          >
            <div>
              <p className="ref-case-next-label">Next Certification</p>
              <h3 className="ref-case-next-title">{next.title}</h3>
              <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--muted)' }}>
                {next.provider} · {next.category}
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