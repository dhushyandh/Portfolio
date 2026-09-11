import {
  Blocks,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";
import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";
import { Reveal } from "./Reveal";

const ICONS = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

const TECHNOLOGY_ICONS: Record<string, typeof Code2> = {
  React: Code2,
  "Next.js": Layers3,
  JavaScript: Code2,
  TypeScript: Code2,
  HTML: Code2,
  CSS: Blocks,
  "Tailwind CSS": Blocks,

  "Node.js": Server,
  "Express.js": Server,
  "REST API": GitBranch,

  MongoDB: Database,
  PostgreSQL: Database,
  Prisma: Database,

  AWS: Cloud,
  Vercel: Cloud,
  Render: Cloud,
  Docker: Blocks,

  Git: GitBranch,
  GitHub: GitBranch,
  Postman: Wrench,
  "VS Code": Code2,
  Figma: Blocks,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 / Stack"
      title="Tools I build with."
      intro="A focused stack covering interfaces, backend systems, data, deployment, and the tooling behind my development workflow."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => {
          const GroupIcon = ICONS[group.icon];

          return (
            <Reveal key={group.label} delay={index * 80}>
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_80px_-50px_oklch(0_0_0/90%)]">
                {/* subtle corner decoration */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-border opacity-40 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/30">
                        <GroupIcon size={18} />
                      </div>

                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-foreground">
                          {group.label}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-muted-foreground">
                      {group.items.length} skills
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {group.items.map((item) => {
                      const TechIcon = TECHNOLOGY_ICONS[item] ?? Code2;

                      return (
                        <div
                          key={item}
                          className="group/tech flex min-h-[72px] items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-accent"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors group-hover/tech:text-primary">
                            <TechIcon size={15} strokeWidth={1.8} />
                          </div>

                          <span className="text-xs font-medium leading-4 text-foreground">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}