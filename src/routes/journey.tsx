import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Compass, Linkedin } from "lucide-react";
import { TIMELINE } from "@/components/portfolio/data";
import { RESUME } from "@/components/portfolio/resume-data";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

const ICONS = {
  briefcase: BriefcaseBusiness,
  git: Code2,
  cap: GraduationCap,
};

const DESCRIPTION =
  "Explore the engineering journey and milestones of Dhushyandh N — freelance full-stack developer, software internships at Unified Mentor and Codec Technologies, and computer science engineering foundations at C. Abdul Hakeem College of Engineering and Technology (CAHCET).";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey & Milestones — Dhushyandh N | Full Stack Engineer" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Dhushyandh career, full stack developer journey, C. Abdul Hakeem College of Engineering and Technology, CAHCET computer science student, CAHCET engineering, software internship, freelance developer experience Vellore",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: "Journey & Milestones — Dhushyandh N" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dhushyandh.in/journey" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Journey & Milestones — Dhushyandh N" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/journey" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Dhushyandh N",
              alternateName: ["Dhushyandh", "Dhushyandh N", "Dhushyandh Neduncheziyan"],
              jobTitle: RESUME.title,
              url: "https://dhushyandh.in",
              alumniOf: RESUME.collegeEntity,
              affiliation: RESUME.collegeEntity,
              sameAs: [
                "https://github.com/dhushyandh",
                "https://linkedin.com/in/dhushyandh",
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://dhushyandh.in/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Journey",
                  item: "https://dhushyandh.in/journey",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: JourneyIndexPage,
});

function JourneyIndexPage() {
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
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>Journey</li>
            </ol>

            <Link to="/" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <Compass size={13} /> Career Milestones
          </div>
          <h1 className="ref-case-title">Engineering Journey & Milestones</h1>
          <p className="ref-case-overview">
            From academic engineering foundations to client-facing freelance deliveries and intensive full-stack development internships.
          </p>

          <div className="ref-resume-contact-bar">
            <span className="ref-resume-contact-item">
              <strong>5</strong> Key Milestones
            </span>
            <span className="ref-resume-contact-item">
              <strong>2</strong> Development Internships
            </span>
            <span className="ref-resume-contact-item">
              <strong>Production</strong> Client Experience
            </span>
          </div>
        </div>

        {/* Milestones List */}
        <section className="ref-case-section" style={{ marginBottom: "60px" }}>
          <div className="ref-journey-grid">
            {TIMELINE.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <article key={item.slug} className="ref-journey-card">
                  <div className="ref-journey-header">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[rgba(168,255,53,0.3)] text-[#2e5a0e] flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span className="ref-journey-badge">{item.type}</span>
                    </div>
                    <span className="ref-journey-date">{item.period}</span>
                  </div>

                  <h2 className="ref-journey-role">{item.title}</h2>
                  <div className="ref-journey-org">{item.org}</div>
                  <p className="ref-journey-desc">{item.description}</p>

                  <div className="ref-journey-footer">
                    <span className="font-mono text-xs text-[var(--muted)]">
                      Detailed Case & Learnings
                    </span>
                    <Link
                      to="/journey/$slug"
                      params={{ slug: item.slug }}
                      className="ref-journey-link-btn"
                    >
                      Read Milestone Details <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
