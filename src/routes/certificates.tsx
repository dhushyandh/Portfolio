import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Download, ExternalLink, Filter, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CERTIFICATES, type CertificateItem, RESUME_URL } from '@/components/portfolio/resume-data';

const TITLE = 'Certifications & Credentials — Dhushyandh N | Cloud, Full Stack, Security';
const DESCRIPTION =
  'Verified professional certifications earned by Dhushyandh N across Oracle Cloud Infrastructure, AWS Technical Essentials, Google Cybersecurity, Amazon Full Stack, and IBM Frontend Development.';

export const Route = createFileRoute('/certificates')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dhushyandh.in/certificates' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
    ],
    links: [{ rel: 'canonical', href: 'https://dhushyandh.in/certificates' }],
  }),
  component: CertificatesPage,
});

export function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePreview, setActivePreview] = useState<CertificateItem | null>(null);

  const categories = ['All', 'Cloud Infrastructure', 'Cloud Computing', 'Security & Cloud', 'Full Stack', 'Frontend Development'];

  const filteredCerts =
    selectedCategory === 'All'
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
        {/* Navigation back */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="h-9 gap-1.5 text-xs">
              <a href={RESUME_URL} download="Dhushyandh_Resume.pdf">
                <Download size={14} /> Resume PDF
              </a>
            </Button>
            <Button asChild size="sm" className="h-9 gap-1.5 text-xs">
              <Link to="/resume">
                View Full Resume <ArrowUpRight size={14} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Page Header */}
        <div className="mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            <Award size={14} />
            Verified Credentials & Accreditations
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Professional Certifications
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A comprehensive record of certified skills in cloud infrastructure, cybersecurity, full-stack architecture, and frontend systems. Each certificate is verified with authentic credential documentation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <span className="mr-2 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <Filter size={13} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg"
            >
              {/* Image Preview Thumbnail with direct redirect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-border/60">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                {/* Quick overlay buttons */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded bg-background/80 px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm text-foreground">
                    <ShieldCheck size={12} className="text-primary" /> Verified
                  </span>
                  <button
                    type="button"
                    onClick={() => setActivePreview(cert)}
                    className="rounded bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="font-mono text-primary">{cert.issuer}</span>
                  {cert.issueDate && <span>{cert.issueDate}</span>}
                </div>

                <h2 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h2>

                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-block rounded-md bg-secondary/80 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                    {cert.category}
                  </span>
                </div>

                {/* Direct Redirect Action */}
                <div className="mt-auto pt-5 border-t border-border/60">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    View Certificate Image <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Lightbox for High-Res Inspection */}
        {activePreview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activePreview.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActivePreview(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="min-w-0 pr-4">
                  <p className="font-mono text-xs text-primary">{activePreview.issuer}</p>
                  <h3 className="truncate text-base font-semibold text-foreground">
                    {activePreview.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activePreview.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary/80"
                  >
                    Open Original <ExternalLink size={13} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePreview(null)}
                    className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label="Close preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-3 max-h-[75vh] overflow-auto rounded-lg bg-black/50 p-2">
                <img
                  src={activePreview.image}
                  alt={activePreview.title}
                  className="mx-auto max-h-[70vh] w-auto rounded object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
