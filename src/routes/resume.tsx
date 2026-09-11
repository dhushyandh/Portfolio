import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { RESUME, RESUME_URL } from "@/components/portfolio/resume-data";

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

function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="chip chip-hover">
          {i}
        </span>
      ))}
    </div>
  );
}

function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </Link>

        <p className="eyebrow mt-8">Resume</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
          {RESUME.name}
        </h1>
        <p className="mt-3 font-display text-xl font-bold text-primary">{RESUME.title}</p>
        <p className="mt-4 max-w-2xl text-[16px] leading-7 text-muted-foreground sm:text-[17px]">
          {RESUME.profile}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} /> {RESUME.location}
          </span>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${RESUME.email}`}>
            <Mail size={15} /> {RESUME.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Phone size={15} /> {RESUME.phone}
          </span>
        </div>

        <a
          href={RESUME_URL}
          download="Dhushyandh_Resume.pdf"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          <Download size={16} /> Download PDF resume
        </a>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold text-foreground">Education</h2>
          <div className="surface-card card-hover mt-5 p-6">
            <p className="font-display text-lg font-bold text-foreground">
              {RESUME.education.degree}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{RESUME.education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {RESUME.education.place} · {RESUME.education.period}
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-foreground">Skills</h2>
          <h3 className="mt-6 text-sm uppercase tracking-[0.14em] text-muted-foreground">
            Technical
          </h3>
          <Chips items={RESUME.technicalSkills} />
          <h3 className="mt-8 text-sm uppercase tracking-[0.14em] text-muted-foreground">Soft</h3>
          <Chips items={RESUME.softSkills} />
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-foreground">Projects</h2>
          <div className="mt-5 grid gap-4">
            {RESUME.projects.map((p) => (
              <article key={p.title} className="surface-card card-hover p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="chip text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-foreground">Certifications</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {RESUME.certificates.map((c) => (
              <li key={c} className="surface-card card-hover p-4 text-sm text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
