import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  FolderGit2,
  BriefcaseBusiness,
  Award,
  ShieldCheck,
  Search,
  ExternalLink,
  Layers,
  Compass,
  Home,
} from 'lucide-react';
import { CASE_STUDIES } from '@/components/portfolio/case-studies';
import { TIMELINE, ACHIEVEMENTS } from '@/components/portfolio/data';
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter';
import '@/components/portfolio/ReferencePortfolio.css';

export const Route = createFileRoute('/sitemap')({
  head: () => ({
    meta: [
      { title: 'Sitemap — N. Dhushyandh | Web & Mobile App Developer' },
      {
        name: 'description',
        content:
          'Comprehensive visual sitemap for N. Dhushyandh portfolio. Explore all verified client projects, career milestones, credentials, resume, and legal policies.',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      { property: 'og:title', content: 'Sitemap — N. Dhushyandh' },
      {
        property: 'og:description',
        content:
          'Visual directory and route map for N. Dhushyandh portfolio website. Browse case studies, career journey, credentials, and documentation.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dhushyandh.in/sitemap' },
      { property: 'og:image', content: 'https://dhushyandh.in/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Sitemap — N. Dhushyandh' },
      {
        name: 'twitter:description',
        content:
          'Explore all pages, verified projects, and career milestones across the N. Dhushyandh developer portfolio.',
      },
      { name: 'twitter:image', content: 'https://dhushyandh.in/og-image.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://dhushyandh.in/sitemap' }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Visual Sitemap — N. Dhushyandh',
          description:
            'Complete index of all public routes and resources on dhushyandh.in.',
          url: 'https://dhushyandh.in/sitemap',
          isPartOf: {
            '@type': 'WebSite',
            name: 'N. Dhushyandh Portfolio',
            url: 'https://dhushyandh.in',
          },
        }),
      },
    ],
  }),
  component: SitemapComponent,
});

type SitemapCategory = 'all' | 'core' | 'projects' | 'journey' | 'credentials' | 'legal';

interface SitemapEntry {
  title: string;
  path: string;
  category: Exclude<SitemapCategory, 'all'>;
  description: string;
  priority: string;
  changefreq: string;
  badge?: string;
  isExternal?: boolean;
}

function SitemapComponent() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<SitemapCategory>('all');

  const allEntries: SitemapEntry[] = useMemo(() => {
    const entries: SitemapEntry[] = [
      // Core Pages
      {
        title: 'Home — Portfolio Showcase',
        path: '/',
        category: 'core',
        description:
          'Main portfolio landing page featuring client builds, services, technical skills, interactive journey timeline, and inquiry form.',
        priority: '1.0',
        changefreq: 'weekly',
        badge: 'Main Hub',
      },
      {
        title: 'Interactive Resume',
        path: '/resume',
        category: 'core',
        description:
          'Comprehensive professional credentials, engineering education, technical skillset, verified experience, and downloadable PDF resume.',
        priority: '0.9',
        changefreq: 'monthly',
        badge: 'Credentials',
      },
      {
        title: 'Career Journey & Milestones',
        path: '/journey',
        category: 'journey',
        description:
          'Chronological career journey, development internships, freelance client experience, and computer science engineering path.',
        priority: '0.8',
        changefreq: 'monthly',
        badge: 'Timeline Hub',
      },
      {
        title: 'Verified Certifications Directory',
        path: '/certificates',
        category: 'core',
        description:
          'Industry certifications, cloud learning completions (AWS, IBM, Oracle, Google), and verified credential credentials.',
        priority: '0.9',
        changefreq: 'monthly',
        badge: 'Certifications',
      },
      {
        title: 'Raw XML Sitemap Feed',
        path: '/sitemap.xml',
        category: 'core',
        description:
          'Standard XML sitemap protocol endpoint designed for automated search engine crawlers and web indexers.',
        priority: '0.7',
        changefreq: 'weekly',
        badge: 'XML Feed',
        isExternal: true,
      },

      // Project Case Studies
      ...CASE_STUDIES.map((cs) => ({
        title: `${cs.title} — Case Study`,
        path: `/projects/${cs.slug}`,
        category: 'projects' as const,
        description: cs.overview || `Detailed architecture, technical implementation, and deliverables for ${cs.title}.`,
        priority: '0.8',
        changefreq: 'monthly',
        badge: cs.status || 'Client Project',
      })),

      // Career Journey & Experience
      ...TIMELINE.map((item) => ({
        title: `${item.title} — Journey Milestone`,
        path: `/journey/${item.slug}`,
        category: 'journey' as const,
        description: item.description,
        priority: '0.7',
        changefreq: 'monthly',
        badge: `${item.type} · ${item.period}`,
      })),

      // Credentials Details
      ...ACHIEVEMENTS.map((ach) => ({
        title: `${ach.title} — Credential Detail`,
        path: `/credentials/${ach.slug}`,
        category: 'credentials' as const,
        description: ach.description,
        priority: '0.6',
        changefreq: 'monthly',
        badge: 'Certification',
      })),

      // Legal & Policies
      {
        title: 'Privacy Policy',
        path: '/privacy-policy',
        category: 'legal',
        description:
          'Official data protection disclosure, analytics handling, form inquiry policies, and cookie transparency.',
        priority: '0.5',
        changefreq: 'yearly',
        badge: 'Compliance',
      },
      {
        title: 'Terms & Conditions',
        path: '/terms-and-conditions',
        category: 'legal',
        description:
          'Terms of service, intellectual property guidelines, client engagement scope, and limitation of liability.',
        priority: '0.5',
        changefreq: 'yearly',
        badge: 'Agreement',
      },
    ];

    return entries;
  }, []);

  const filteredEntries = useMemo(() => {
    return allEntries.filter((entry) => {
      const matchesTab = activeTab === 'all' || entry.category === activeTab;
      const q = search.trim().toLowerCase();
      if (!q) return matchesTab;

      const matchesSearch =
        entry.title.toLowerCase().includes(q) ||
        entry.path.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q) ||
        (entry.badge && entry.badge.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [allEntries, activeTab, search]);

  const counts = useMemo(() => {
    return {
      all: allEntries.length,
      core: allEntries.filter((e) => e.category === 'core').length,
      projects: allEntries.filter((e) => e.category === 'projects').length,
      journey: allEntries.filter((e) => e.category === 'journey').length,
      credentials: allEntries.filter((e) => e.category === 'credentials').length,
      legal: allEntries.filter((e) => e.category === 'legal').length,
    };
  }, [allEntries]);

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
            <Link to="/journey">Journey</Link>
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
              <li style={{ color: 'var(--ink)', fontWeight: 600 }}>Sitemap</li>
            </ol>

            <div className="flex items-center gap-2">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-back-pill"
              >
                Raw XML <ExternalLink size={12} />
              </a>
              <Link to="/" className="ref-back-pill">
                <ArrowLeft size={14} /> Back to Portfolio
              </Link>
            </div>
          </nav>

          <div className="ref-case-hero-tag">
            <Compass size={13} /> Site Directory
          </div>
          <h1 className="ref-case-title">Visual Sitemap & Directory</h1>
          <p className="ref-case-overview">
            A complete, transparent index of all verified client builds, career journey milestones, cloud credentials, technical resumes, and legal policies on this domain.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="ref-sitemap-toolbar">
          <div className="ref-sitemap-search-wrap">
            <Search size={16} className="ref-sitemap-search-icon" />
            <input
              type="text"
              placeholder="Search pages by name, path, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ref-sitemap-search-input"
            />
          </div>

          <div className="ref-sitemap-tabs">
            {[
              { id: 'all', label: 'All Routes', icon: Layers, count: counts.all },
              { id: 'core', label: 'Core Pages', icon: Home, count: counts.core },
              { id: 'projects', label: 'Projects', icon: FolderGit2, count: counts.projects },
              { id: 'journey', label: 'Journey', icon: BriefcaseBusiness, count: counts.journey },
              { id: 'credentials', label: 'Credentials', icon: Award, count: counts.credentials },
              { id: 'legal', label: 'Legal', icon: ShieldCheck, count: counts.legal },
            ].map(({ id, label, icon: TabIcon, count }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id as SitemapCategory)}
                  className={`ref-sitemap-tab ${active ? 'active' : ''}`}
                >
                  <TabIcon size={13} />
                  <span>{label}</span>
                  <span className="ref-sitemap-tab-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="ref-sitemap-grid">
          {filteredEntries.map((entry) => {
            const isXml = entry.isExternal || entry.path.endsWith('.xml');

            return (
              <article key={entry.path} className="ref-sitemap-card">
                <div>
                  <div className="ref-sitemap-card-top">
                    <span className="ref-journey-badge" style={{ fontSize: '10px', padding: '3px 8px' }}>
                      {entry.category}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)] font-semibold">
                      Priority: {entry.priority}
                    </span>
                  </div>

                  <h2 className="ref-sitemap-card-title">
                    {isXml ? (
                      <a href={entry.path} target="_blank" rel="noopener noreferrer">
                        {entry.title}
                      </a>
                    ) : (
                      <a href={entry.path}>
                        {entry.title}
                      </a>
                    )}
                  </h2>

                  <p className="font-mono text-xs text-[#2e5a0e] font-medium truncate mb-2">
                    {entry.path}
                  </p>

                  <p className="ref-sitemap-card-desc">
                    {entry.description}
                  </p>
                </div>

                <div className="ref-sitemap-card-bottom">
                  <span>freq: {entry.changefreq}</span>
                  {isXml ? (
                    <a
                      href={entry.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[var(--ink)] hover:text-[#2e5a0e]"
                    >
                      <span>Open XML</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <a
                      href={entry.path}
                      className="inline-flex items-center gap-1 font-semibold text-[var(--ink)] hover:text-[#2e5a0e]"
                    >
                      <span>Visit page</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredEntries.length === 0 && (
          <div className="my-16 rounded-2xl border border-dashed border-[rgba(23,24,17,0.15)] py-12 text-center bg-white">
            <Compass size={36} className="mx-auto text-[var(--muted)]" />
            <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">No matching routes found</h3>
            <p className="mt-1 text-sm text-[var(--ink-secondary)]">
              Try searching with another keyword like &quot;project&quot;, &quot;resume&quot;, or &quot;terms&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveTab('all');
              }}
              className="ref-back-pill mt-4"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Homepage Landmarks Section */}
        <section className="ref-case-section" style={{ marginTop: '50px', marginBottom: '60px' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="ref-case-hero-tag" style={{ marginBottom: '8px' }}>Landmarks</div>
              <h2 className="ref-case-section-title" style={{ margin: 0 }}>
                Homepage Section Anchors
              </h2>
            </div>
            <p className="text-xs text-[var(--ink-secondary)] max-w-sm">
              Direct anchor shortcuts to jump to specific sections on the primary single-page scrolling portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              { anchor: '#about', label: '01 / About Me' },
              { anchor: '#projects', label: '02 / Client Builds' },
              { anchor: '#services', label: '03 / Services' },
              { anchor: '#skills', label: '04 / Toolkit' },
              { anchor: '#process', label: '05 / Process' },
              { anchor: '#experience', label: '06 / Timeline' },
              { anchor: '#achievements', label: '07 / Certificates' },
              { anchor: '#faq', label: '08 / FAQ' },
              { anchor: '#contact', label: '09 / Contact' },
            ].map(({ anchor, label }) => (
              <a
                key={anchor}
                href={`/${anchor}`}
                className="ref-cert-card"
                style={{ padding: '12px 16px' }}
              >
                <span className="text-xs font-semibold text-[var(--ink)]">{label}</span>
                <ArrowUpRight size={13} className="text-[var(--muted)] shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
