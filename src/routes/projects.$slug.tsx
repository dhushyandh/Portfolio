import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Sparkles,
  Zap,
  Linkedin,
} from 'lucide-react';
import { getCaseStudy, getNextCaseStudy } from '@/components/portfolio/case-studies';
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter';
import { NotFoundView } from '@/components/portfolio/NotFoundView';
import '@/components/portfolio/ReferencePortfolio.css';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study, next: getNextCaseStudy(params.slug) };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    const title = study
      ? `${study.title} — Case Study & Project Details | N. Dhushyandh`
      : 'Project Unavailable — N. Dhushyandh';
    const description = study?.overview ?? 'This project could not be found.';
    const url = `https://dhushyandh.in/projects/${study?.slug ?? ''}`;
    const ogImage = study?.image
      ? (study.image.startsWith('http')
          ? study.image
          : `https://dhushyandh.in${study.image.startsWith('/') ? '' : '/'}${study.image}`)
      : 'https://dhushyandh.in/og-image.png';

    const structuredData = study
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `${url}#webpage`,
              url,
              name: title,
              description,
              isPartOf: {
                '@type': 'WebSite',
                url: 'https://dhushyandh.in/',
                name: 'Dhushyandh — Full-Stack Web Developer & Freelancer',
              },
            },
            {
              '@type': 'CreativeWork',
              '@id': `${url}#project`,
              name: study.title,
              headline: `${study.title} — ${study.tagline}`,
              description: study.overview,
              author: {
                '@type': 'Person',
                name: 'N. Dhushyandh',
                url: 'https://dhushyandh.in/',
              },
              creator: {
                '@type': 'Person',
                name: 'N. Dhushyandh',
                url: 'https://dhushyandh.in/',
              },
              keywords: study.stack.join(', '),
              url,
              ...(study.live ? { sameAs: study.live } : {}),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dhushyandh.in/' },
                { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://dhushyandh.in/#projects' },
                { '@type': 'ListItem', position: 3, name: study.title, item: url },
              ],
            },
          ],
        }
      : null;

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:site_name', content: 'Dhushyandh' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: `${study?.title ?? 'Project'} — Case Study by Dhushyandh` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: `${study?.title ?? 'Project'} — Case Study by Dhushyandh` },
        ...(!study ? [{ name: 'robots', content: 'noindex' }] : []),
      ],
      links: study ? [{ rel: 'canonical', href: url }] : [],
      scripts: structuredData ? [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }] : [],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <NotFoundView
      code="404"
      badge="Case Study Not Found"
      title={
        <>
          Project <em>Not Located</em>
        </>
      }
      message="The requested project case study could not be located or may have been archived. You can explore active full-stack projects below."
      backTo="/"
      backLabel="Back to Projects"
    />
  ),
});

function ProjectPage() {
  const { study, next } = Route.useLoaderData();

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
            <Link to="/" hash="projects" className="active font-semibold">Projects</Link>
            <Link to="/" hash="services">Services</Link>
            <Link to="/" hash="credentials">Credentials</Link>
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
                <Link to="/" hash="projects">Work</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: 'var(--ink)', fontWeight: 600 }}>{study.title}</li>
            </ol>

            <Link to="/" hash="projects" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Selected Works
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <Zap size={11} fill="#489a14" stroke="#489a14" />
            <span>{study.tagline}</span>
          </div>

          <h1 className="ref-case-title">{study.title}</h1>
          <p className="ref-case-overview">{study.overview}</p>

          <div className="ref-case-meta-row">
            <div className="ref-case-meta-pill">
              <span className="ref-case-status-dot" />
              <span>{study.status}</span>
            </div>
            <div className="ref-case-meta-pill">
              <span style={{ color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase' }}>Role:</span>
              <span>{study.role}</span>
            </div>
            <div className="ref-case-meta-pill">
              <span style={{ color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase' }}>Timeline:</span>
              <span>{study.year}</span>
            </div>
          </div>

          <div className="ref-case-actions-row">
            {study.live && (
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary"
              >
                Live Project <ArrowUpRight size={15} />
              </a>
            )}
            {study.github && (
              <a
                href={study.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-outline-sm"
              >
                <Github size={15} /> Source Code
              </a>
            )}
            <Link to="/" hash="contact" className="ref-btn-secondary">
              Discuss a Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* High-Resolution Showcase Preview Image */}
        {study.image && (
          <div className="ref-case-preview-frame">
            <img
              src={study.image}
              alt={`${study.title} interface preview and mockup`}
              loading="eager"
              decoding="async"
            />
          </div>
        )}

        {/* Detailed Grid Content: Scope & Features + Technical Architecture */}
        <div className="ref-case-grid-content">
          {/* Left Column: Scope & Key Features */}
          <section aria-labelledby="scope-heading">
            <h2 id="scope-heading" className="ref-case-section-heading">
              Project Scope & Key Features
            </h2>
            <div className="ref-case-features-list">
              {study.features.length ? (
                study.features.map((f, i) => (
                  <article key={f.title} className="ref-case-feature-card">
                    <div className="ref-case-feature-header">
                      <span className="ref-case-feature-icon">
                        <Check size={14} strokeWidth={2.6} />
                      </span>
                      <h3 className="ref-case-feature-title">{f.title}</h3>
                    </div>
                    <p className="ref-case-feature-desc">{f.description}</p>
                  </article>
                ))
              ) : (
                <p className="ref-case-callout-text">
                  Implemented features are documented in Dhushyandh’s engineering repository.
                </p>
              )}
            </div>
          </section>

          {/* Right Column: Technologies & Engineering Insights */}
          <section aria-labelledby="tech-heading">
            <h2 id="tech-heading" className="ref-case-section-heading">
              Technologies & Architecture
            </h2>

            <div className="ref-case-tech-chips">
              {study.stack.map((t) => (
                <span key={t} className="ref-case-tech-chip">
                  {t}
                </span>
              ))}
            </div>

            <article className="ref-case-callout-card">
              <h3 className="ref-case-callout-title">
                <Sparkles size={14} />
                Engineering Challenges
              </h3>
              <p className="ref-case-callout-text">{study.challenges}</p>
            </article>

            <article className="ref-case-callout-card">
              <h3 className="ref-case-callout-title" style={{ color: '#2563eb' }}>
                <Zap size={14} fill="#2563eb" stroke="#2563eb" />
                Outcomes & Key Learnings
              </h3>
              <p className="ref-case-callout-text">{study.learnings}</p>
            </article>
          </section>
        </div>

        {/* Next Case Study Navigation */}
        {next && (
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="ref-case-next-card"
          >
            <div>
              <p className="ref-case-next-label">Next Project Case Study</p>
              <h3 className="ref-case-next-title">{next.title}</h3>
              <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--muted)' }}>
                {next.tagline}
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
