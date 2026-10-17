import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Nav } from '@/components/portfolio/Nav';
import { getCaseStudy, getNextCaseStudy } from '@/components/portfolio/case-studies';
export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study, next: getNextCaseStudy(params.slug) };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    const title = study ? `${study.title} — Case Study & Project Details | N. Dhushyandh` : 'Project Unavailable — N. Dhushyandh';
    const description = study?.overview ?? 'This project could not be found.';
    const url = `https://dhushyandh.in/projects/${study?.slug ?? ''}`;
    const ogImage = 'https://dhushyandh.in/og-image.png';

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
                name: 'N. Dhushyandh — Full Stack & Mobile App Developer',
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
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        ...(!study ? [{ name: 'robots', content: 'noindex' }] : []),
      ],
      links: study ? [{ rel: 'canonical', href: url }] : [],
      scripts: structuredData ? [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }] : [],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="page-width py-24 text-center">
      <h1 className="section-heading">Project not found.</h1>
      <p className="body-copy mt-4">The requested project case study could not be located.</p>
      <Link to="/" className="text-primary mt-6 inline-flex items-center gap-2">
        <ArrowLeft size={16} /> Back to portfolio
      </Link>
    </div>
  ),
});

function ProjectPage() {
  const { study, next } = Route.useLoaderData();
  return (
    <>
      <Nav />
      <main className="page-width editorial-section">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/" hash="projects" className="hover:text-foreground transition-colors">Work</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium truncate" aria-current="page">{study.title}</li>
          </ol>
        </nav>

        <p className="section-label mt-8">{study.tagline}</p>
        <h1 className="section-heading">{study.title}</h1>
        <p className="large-copy mt-6 max-w-3xl">{study.overview}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{study.role}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />{study.status}</span>
          <span>·</span>
          <span>{study.year}</span>
        </div>

        {study.image && (
          <div className="browser-preview mt-12">
            <img
              src={study.image}
              alt={`${study.title} interface screenshot and interactive layout demonstration`}
              width="1280"
              height="900"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        )}

        <div className="grid gap-10 py-14 md:grid-cols-2">
          <section aria-labelledby="scope-heading">
            <h2 id="scope-heading" className="text-2xl font-semibold">Project Scope & Key Features</h2>
            <ul className="mt-6 space-y-6">
              {study.features.length ? (
                study.features.map((f) => (
                  <li key={f.title} className="border-b border-border/50 pb-5 last:border-b-0">
                    <h3 className="text-base font-medium text-primary flex items-center gap-2">
                      <span>↗</span> {f.title}
                    </h3>
                    <p className="body-copy mt-2">{f.description}</p>
                  </li>
                ))
              ) : (
                <li className="body-copy">
                  Implemented features have not been confirmed. Contact me for an up-to-date walkthrough.
                </li>
              )}
            </ul>
          </section>

          <section aria-labelledby="tech-heading">
            <h2 id="tech-heading" className="text-2xl font-semibold">Technologies & Engineering Details</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.length ? (
                study.stack.map((t) => (
                  <span key={t} className="chip font-mono text-xs">
                    {t}
                  </span>
                ))
              ) : (
                <p className="body-copy">Technology stack awaiting confirmation.</p>
              )}
            </div>

            <div className="mt-8 rounded-lg border border-border/60 bg-surface/50 p-6">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider">Engineering Challenges</h3>
              <p className="body-copy mt-3">{study.challenges}</p>
            </div>

            <div className="mt-6 rounded-lg border border-border/60 bg-surface/50 p-6">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider">Outcomes & Key Learnings</h3>
              <p className="body-copy mt-3">{study.learnings}</p>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          {study.live && (
            <Button asChild className="premium-button">
              <a href={study.live} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight />
              </a>
            </Button>
          )}
          {study.github && (
            <Button asChild variant="outline" className="premium-button">
              <a href={study.github} target="_blank" rel="noreferrer">
                <Github /> Source code
              </a>
            </Button>
          )}
          <Button asChild variant="outline" className="premium-button">
            <Link to="/" hash="contact">
              Discuss a project <ArrowUpRight />
            </Link>
          </Button>
        </div>

        {next && (
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8 group transition-colors"
          >
            <div>
              <p className="section-label mb-2">Next project</p>
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{next.title}</h3>
            </div>
            <ArrowUpRight className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
          </Link>
        )}
      </main>
    </>
  );
}
