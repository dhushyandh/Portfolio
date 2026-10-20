import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  FolderGit2,
  BriefcaseBusiness,
  Award,
  ShieldCheck,
  FileText,
  Search,
  ExternalLink,
  Layers,
  Compass,
  Sparkles,
  Home,
  CheckCircle2,
  Clock,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES } from '@/components/portfolio/case-studies';
import { TIMELINE, ACHIEVEMENTS } from '@/components/portfolio/data';

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
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://dhushyandh.in/sitemap#webpage',
              url: 'https://dhushyandh.in/sitemap',
              name: 'Sitemap — N. Dhushyandh | Web & Mobile App Developer',
              description:
                'Comprehensive visual sitemap for N. Dhushyandh portfolio. Explore all verified client projects, career milestones, credentials, resume, and legal policies.',
              isPartOf: {
                '@type': 'WebSite',
                url: 'https://dhushyandh.in/',
                name: 'Dhushyandh — Full-Stack Web Developer & Freelancer',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dhushyandh.in/' },
                { '@type': 'ListItem', position: 2, name: 'Sitemap', item: 'https://dhushyandh.in/sitemap' },
              ],
            },
          ],
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
  category: 'core' | 'projects' | 'journey' | 'credentials' | 'legal';
  description: string;
  priority: string;
  changefreq: string;
  badge?: string;
  isExternal?: boolean;
}

function SitemapComponent() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<SitemapCategory>('all');

  // Build complete directory of all website pages
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

  // Filter entries based on search query and active tab
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Breadcrumb Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="page-width flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/">
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </Button>
            <span className="h-4 w-px bg-border/80" />
            <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground transition-colors">
                dhushyandh.in
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">sitemap</span>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <Button asChild variant="outline" size="sm" className="h-8 gap-1.5 rounded-full border-border/80 text-xs font-mono">
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                <span>Raw XML</span>
                <ExternalLink size={12} className="text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="page-width py-12 md:py-16">
        {/* Page Hero */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
            <Compass size={13} className="text-primary" />
            <span>Site Directory & Navigation Index</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Visual Sitemap & Directory
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A complete, transparent index of all verified client builds, career journey milestones, cloud credentials, technical resumes, and legal policies on this domain.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-10 rounded-2xl border border-border bg-card/40 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search pages by name, path, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background/80 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Stat Counter */}
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>Showing</span>
              <span className="rounded bg-primary/15 px-2 py-0.5 font-bold text-primary">
                {filteredEntries.length}
              </span>
              <span>of {allEntries.length} verified routes</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
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
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                      : 'border border-border/80 bg-background/60 text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <TabIcon size={13} />
                  <span>{label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                      active ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEntries.map((entry) => {
            const isXml = entry.isExternal || entry.path.endsWith('.xml');

            return (
              <article
                key={entry.path}
                className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/75 hover:shadow-lg"
              >
                <div>
                  {/* Card Header: Category + Priority badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {entry.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded border border-border/80 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        P: {entry.priority}
                      </span>
                      {entry.badge && (
                        <span className="truncate max-w-[120px] rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                          {entry.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mt-3 font-display text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {isXml ? (
                      <a href={entry.path} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none">
                        {entry.title}
                      </a>
                    ) : (
                      <Link to={entry.path as any} className="focus-visible:outline-none">
                        {entry.title}
                      </Link>
                    )}
                  </h2>

                  {/* Path URI */}
                  <p className="mt-1 font-mono text-xs text-primary/80 truncate">
                    {entry.path}
                  </p>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {entry.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    freq: {entry.changefreq}
                  </span>

                  {isXml ? (
                    <a
                      href={entry.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5"
                    >
                      <span>Open XML</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      to={entry.path as any}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5"
                    >
                      <span>Visit page</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredEntries.length === 0 && (
          <div className="my-16 rounded-2xl border border-dashed border-border py-12 text-center">
            <Compass size={36} className="mx-auto text-muted-foreground/60" />
            <h3 className="mt-4 text-base font-semibold text-foreground">No matching routes found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try searching with another keyword like &quot;project&quot;, &quot;resume&quot;, or &quot;terms&quot;.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearch('');
                setActiveTab('all');
              }}
              className="mt-4"
            >
              Reset filters
            </Button>
          </div>
        )}

        {/* Interactive In-Page Anchor Sections Map */}
        <section className="mt-16 border-t border-border pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">In-Page Landmarks</p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                Homepage Content Landmarks
              </h2>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm">
              Direct anchors to jump directly to specific sections on the primary scrolling portfolio page.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
                className="group flex items-center justify-between rounded-lg border border-border/80 bg-card/40 p-3 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-card/70 transition-all"
              >
                <span className="group-hover:text-primary transition-colors">{label}</span>
                <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="page-width border-t border-border py-8 text-center sm:flex sm:items-center sm:justify-between text-xs font-mono text-muted-foreground">
        <p>© {new Date().getFullYear()} N. Dhushyandh — Official Sitemap</p>
        <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>·</span>
          <Link to="/resume" className="hover:text-foreground transition-colors">Resume</Link>
          <span>·</span>
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
          <span>·</span>
          <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
