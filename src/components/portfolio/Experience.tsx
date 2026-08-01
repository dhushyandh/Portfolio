import { BookOpen, Briefcase, GitBranch, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { TIMELINE } from "./data";

const ICONS = {
  briefcase: Briefcase,
  git: GitBranch,
  book: BookOpen,
  cap: GraduationCap,
};

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Timeline">
      <div className="relative space-y-8 lg:max-w-4xl">
        <div className="absolute top-6 bottom-6 left-[19px] hidden w-px bg-border sm:block" />
        {TIMELINE.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.title} className="relative flex gap-4 sm:gap-6">
              <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground sm:flex">
                <Icon size={16} />
              </div>
              <div className="surface-card card-hover min-w-0 flex-1 p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary">{item.org}</p>
                  </div>
                  <span className="chip chip-hover">{item.period}</span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}