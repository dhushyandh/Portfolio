import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, FileText, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { PROJECTS } from "./data";

const VISIBLE = 4;

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? PROJECTS : PROJECTS.slice(0, VISIBLE);
  const hidden = PROJECTS.length - VISIBLE;

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      intro="A selection of projects that demonstrate my approach to building scalable, production-grade software."
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.title} className="surface-card card-hover overflow-hidden">
            <div
              className="flex h-40 items-center justify-center sm:h-52"
              style={{
                background: `linear-gradient(150deg, ${p.tint}, oklch(0.17 0 0))`,
              }}
            >
              <span className="px-6 text-center font-mono text-lg font-medium tracking-wide text-foreground/70">
                {p.title}
              </span>
            </div>
            <div className="border-t border-border p-6 sm:p-7">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip chip-hover">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary"
                >
                  <Github size={15} /> GitHub
                </a>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary"
                >
                  <FileText size={15} /> Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {hidden > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-display text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show {hidden} More Projects <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
}