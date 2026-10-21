import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, Code2, Linkedin } from "lucide-react";
import { RESUME, RESUME_URL, CERTIFICATES } from "@/components/portfolio/resume-data";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

const DESCRIPTION =
  "Resume of Dhushyandh N — Full Stack Developer (MERN) from Vellore, India. B.E Computer Science 2023-2027, AWS/Google/IBM/Oracle certifications, React, Node.js, PostgreSQL and AI projects. Download the PDF.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Dhushyandh N | Full Stack Developer (MERN)" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Dhushyandh resume, Dhushyandh N CV, MERN stack developer resume, full stack developer resume India, React Node.js PostgreSQL resume, CAHCET computer science",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: "Resume — Dhushyandh N | Full Stack Developer" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://dhushyandh.in/resume" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resume — Dhushyandh N | Full Stack Developer" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/resume" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Dhushyandh N",
              alternateName: "Dhushyandh N",
              jobTitle: RESUME.title,
              email: `mailto:${RESUME.email}`,
              telephone: RESUME.phone,
              url: "https://dhushyandh.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: RESUME.education.school,
              },
              knowsAbout: [...RESUME.technicalSkills],
              hasCredential: RESUME.certificates.map((c) => ({
                "@type": "EducationalOccupationalCredential",
                name: c,
              })),
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
                  name: "Resume",
                  item: "https://dhushyandh.in/resume",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
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
            <Link to="/resume" className="active font-semibold">Resume</Link>
            <Link to="/journey">Journey</Link>
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
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>Resume</li>
            </ol>

            <Link to="/" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </nav>

          <div className="ref-case-hero-tag">Curriculum Vitae</div>
          <h1 className="ref-case-title">{RESUME.name}</h1>
          <p className="ref-case-overview" style={{ marginBottom: 20 }}>
            {RESUME.title}
          </p>

          <div className="ref-resume-contact-bar">
            <span className="ref-resume-contact-item">
              <MapPin size={15} /> {RESUME.location}
            </span>
            <a className="ref-resume-contact-item" href={`mailto:${RESUME.email}`}>
              <Mail size={15} /> {RESUME.email}
            </a>
            <span className="ref-resume-contact-item">
              <Phone size={15} /> {RESUME.phone}
            </span>
          </div>

          <div className="ref-resume-actions">
            <a
              href={RESUME_URL}
              download="Dhushyandh_Resume.pdf"
              className="ref-resume-download-btn"
            >
              <Download size={16} /> Download PDF Resume
            </a>
            <Link to="/certificates" className="ref-resume-secondary-btn">
              <Award size={15} /> View Certificates Gallery
            </Link>
          </div>
        </div>

        {/* Profile Summary */}
        <section className="ref-resume-section">
          <h2 className="ref-resume-section-title">Professional Summary</h2>
          <div className="ref-resume-card">
            <div className="ref-resume-card-body">
              <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.75" }}>
                {RESUME.profile}
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="ref-resume-section">
          <h2 className="ref-resume-section-title">
            <GraduationCap size={18} className="text-[#2e5a0e]" />
            Education
          </h2>
          <div className="ref-resume-card">
            <div className="ref-resume-card-header">
              <h3 className="ref-resume-card-title">{RESUME.education.degree}</h3>
              <span className="font-mono text-xs text-[var(--muted)] font-semibold">
                {RESUME.education.period}
              </span>
            </div>
            <div className="ref-resume-card-body">
              <p style={{ fontWeight: 600, color: "var(--ink)", margin: "0 0 4px" }}>
                {RESUME.education.school}
              </p>
              <p style={{ margin: 0 }}>
                {RESUME.education.place}
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="ref-resume-section">
          <h2 className="ref-resume-section-title">
            <Code2 size={18} className="text-[#2e5a0e]" />
            Core Technical & Soft Skills
          </h2>
          <div className="ref-resume-card">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                Engineering & Frameworks
              </span>
              <div className="ref-resume-chips-wrap">
                {RESUME.technicalSkills.map((s) => (
                  <span key={s} className="ref-resume-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                Professional Competencies
              </span>
              <div className="ref-resume-chips-wrap">
                {RESUME.softSkills.map((s) => (
                  <span key={s} className="ref-resume-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="ref-resume-section">
          <h2 className="ref-resume-section-title">
            <Briefcase size={18} className="text-[#2e5a0e]" />
            Notable Projects
          </h2>
          <div className="grid gap-3">
            {RESUME.projects.map((p) => (
              <div key={p.title} className="ref-resume-card">
                <div className="ref-resume-card-header">
                  <h3 className="ref-resume-card-title">{p.title}</h3>
                  <span className="font-mono text-xs text-[var(--muted)]">{p.date}</span>
                </div>
                <div className="ref-resume-card-body">
                  <p style={{ margin: "0 0 16px" }}>{p.description}</p>
                  <div className="ref-resume-chips-wrap">
                    {p.stack.map((t) => (
                      <span key={t} className="ref-resume-chip text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="ref-resume-section" style={{ marginBottom: "60px" }}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h2 className="ref-resume-section-title" style={{ margin: 0 }}>
              <Award size={18} className="text-[#2e5a0e]" />
              Industry Credentials & Badges
            </h2>
            <Link
              to="/certificates"
              className="text-xs font-semibold text-[var(--ink)] hover:underline inline-flex items-center gap-1"
            >
              Full Gallery ({CERTIFICATES.length} credentials) <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="ref-cert-grid">
            {CERTIFICATES.map((c) => (
              <a
                key={c.id}
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-cert-card"
              >
                <div className="min-w-0">
                  <span className="font-mono text-[11px] text-[#2e5a0e] font-semibold block uppercase">
                    {c.issuer}
                  </span>
                  <span className="font-semibold text-sm text-[var(--ink)] block truncate mt-0.5">
                    {c.title}
                  </span>
                  <span className="text-xs text-[var(--muted)] block mt-0.5">
                    {c.category}
                  </span>
                </div>
                <ExternalLink size={14} className="text-[var(--muted)] shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
