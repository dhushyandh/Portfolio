import {
  Activity,
  ArrowUpRight,
  GitBranch,
  Github,
  Star,
  Users,
} from "lucide-react";
import { Section } from "./Section";
import { GITHUB_STATS, LANGUAGES, REPOS } from "./data";
import { Reveal } from "./Reveal";

const ICONS = {
  git: GitBranch,
  star: Star,
  users: Users,
};

export function GitHubActivity() {
  return (
    <Section
      id="github"
      eyebrow="07 / Open Source"
      title="GitHub Activity"
      intro="A snapshot of my public development activity, repositories, and the technologies I spend the most time building with."
    >
      {/* Live status */}
      <div className="-mt-8 mb-10 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>

        <Activity size={14} className="text-primary" />

        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Public GitHub activity
        </span>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {GITHUB_STATS.map((stat, index) => {
          const Icon = ICONS[stat.icon];

          return (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-[1.25rem] border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_60px_-45px_oklch(0_0_0/90%)] sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <Icon size={17} />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-7">
                  <p className="font-display text-3xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Repositories */}
      <div className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Repositories</p>

            <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Selected repositories
            </h3>
          </div>

          <a
            href="https://github.com/dhushyandh"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Visit GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {REPOS.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 80}>
              <a
                href={`https://github.com/dhushyandh/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_60px_-45px_oklch(0_0_0/90%)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                      <Github size={16} />
                    </div>

                    <h4 className="min-w-0 break-words text-[16px] font-bold text-foreground">
                      {repo.name}
                    </h4>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {repo.description && (
                  <p className="mt-5 line-clamp-2 text-[14px] leading-6 text-muted-foreground">
                    {repo.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
                  {repo.language && (
                    <span className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}

                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <Star size={12} />
                    {repo.stars}
                  </span>

                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {repo.updated}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-8 rounded-[1.25rem] border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Languages</p>

            <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Most used languages
            </h3>
          </div>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Public repositories
          </span>
        </div>

        <div className="mt-8 space-y-5">
          {LANGUAGES.map((language) => (
            <div key={language.name}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-foreground">
                  {language.name}
                </span>

                <span className="font-mono text-[11px] text-muted-foreground">
                  {language.percent}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${language.percent}%`,
                    backgroundColor: language.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile GitHub link */}
      <a
        href="https://github.com/dhushyandh"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:hidden"
      >
        Visit GitHub
        <ArrowUpRight size={14} />
      </a>
    </Section>
  );
}