import { ExternalLink, FileText, Github, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { PROJECTS } from "./data";
import { Reveal } from "./Reveal";

function ProjectArtwork({ title, category, tint }: { title: string; category: string; tint: string }) {
  return (
    <div className="relative min-h-[280px] overflow-hidden border-b border-border" style={{ background: `radial-gradient(circle at 78% 20%, ${tint}, transparent 48%), var(--surface)` }}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-6 top-6 rounded-full border border-border bg-background/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
        {category}
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="max-w-md rounded-2xl border border-white/10 bg-background/75 p-5 shadow-soft backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-foreground/20" />
            <span className="h-2 w-2 rounded-full bg-foreground/10" />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
          <div className="mt-3 h-2 w-1/2 rounded-full bg-foreground/8" />
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-foreground/5" />
            <div className="h-12 rounded-lg bg-foreground/5" />
            <div className="h-12 rounded-lg bg-primary/10" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-7 hidden font-display text-5xl font-bold tracking-[-.06em] text-foreground/10 lg:block">
        {title.split(" ").map((word) => word[0]).join("")}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="01 / Selected work"
      title="Less noise. More proof."
      intro="The featured list is intentionally small: real client work, a serious product build, and a technical AI project."
    >
      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <article className="group overflow-hidden rounded-[1.5rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_25px_80px_-45px_oklch(0_0_0/90%)]">
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <ProjectArtwork title={project.title} category={project.category} tint={project.tint} />
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                        Selected
                      </span>
                    </div>
                    <h3 className="mt-8 max-w-lg font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-background px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-accent">
                      <Github size={14} /> GitHub
                    </a>
                    <Link to="/projects/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-accent hover:text-foreground">
                      Case study <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-xs font-bold text-background"
                    >
                      View project <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Beginner practice projects are intentionally not featured.
        </p>
        <a href="https://github.com/dhushyandh" target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-xs font-semibold text-foreground sm:inline-flex">
          More on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </Section>
  );
}