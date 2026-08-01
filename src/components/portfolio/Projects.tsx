import { FileText, Github } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      intro="A selection of projects that demonstrate my approach to building scalable, production-grade software."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="surface-card overflow-hidden">
            <div
              className="flex h-52 items-center justify-center"
              style={{
                background: `linear-gradient(150deg, ${p.tint}, oklch(0.17 0 0))`,
              }}
            >
              <span className="px-6 text-center font-mono text-lg font-medium tracking-wide text-foreground/70">
                {p.title}
              </span>
            </div>
            <div className="border-t border-border p-7">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  <FileText size={15} /> Case Study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}