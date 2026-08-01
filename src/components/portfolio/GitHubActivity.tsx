import { Activity, ExternalLink, GitBranch, Star, Users } from "lucide-react";
import { Section } from "./Section";
import { GITHUB_STATS, LANGUAGES, REPOS } from "./data";

const ICONS = { git: GitBranch, star: Star, users: Users };

export function GitHubActivity() {
  return (
    <Section id="github" eyebrow="Open Source" title="GitHub Activity">
      <div className="-mt-8 mb-12 flex items-center gap-2 text-sm text-muted-foreground">
        <Activity size={15} /> Live data · updated today
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {GITHUB_STATS.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <div key={s.label} className="surface-card flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon size={18} />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-[15px] text-muted-foreground">Top Repositories</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REPOS.map((repo) => (
          <a
            key={repo.name}
            href={`https://github.com/dhushyandh/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            className="surface-card flex flex-col p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[17px] font-bold text-foreground">{repo.name}</h3>
              <ExternalLink size={15} className="mt-1 shrink-0 text-muted-foreground" />
            </div>
            {repo.description && (
              <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-muted-foreground">
                {repo.description}
              </p>
            )}
            <div className="mt-auto flex items-center gap-4 pt-6 font-mono text-[13px] text-muted-foreground">
              {repo.language && (
                <span className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#f1e05a" }}
                  />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={13} /> {repo.stars}
              </span>
              <span className="ml-auto">{repo.updated}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="surface-card mt-8 p-7">
        <p className="text-[15px] text-muted-foreground">Most Used Languages</p>
        <div className="mt-6 space-y-4">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="flex items-center gap-4">
              <span className="w-28 shrink-0 font-mono text-[13px] text-muted-foreground">
                {lang.name}
              </span>
              <div className="h-2 flex-1 rounded-full bg-secondary">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                />
              </div>
              <span className="w-10 shrink-0 text-right font-mono text-[13px] text-muted-foreground">
                {lang.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}