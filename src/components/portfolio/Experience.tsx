import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { TIMELINE } from "./data";
import { Reveal } from "./Reveal";

const ICONS = {
  briefcase: BriefcaseBusiness,
  git: Code2,
  cap: GraduationCap,
};

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Experience"
      title="Experience & Journey"
      intro="From engineering education and internships to real client work and continuous software development."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-border md:block" />

        <div className="space-y-5 md:space-y-7">
          {TIMELINE.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <Reveal
                key={item.slug}
                delay={index * 90}
              >
                <article className="group relative md:pl-16">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-sm md:flex">
                    <Icon
                      size={18}
                      className="text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_-45px_oklch(0_0_0/90%)]">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        {/* Mobile icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary md:hidden">
                          <Icon size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                                {item.period}
                              </p>

                              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                {item.title}
                              </h3>

                              <p className="mt-1 text-sm font-medium text-muted-foreground">
                                {item.org}
                              </p>
                            </div>

                            <span className="hidden shrink-0 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:inline-flex">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 h-px bg-border" />

                      <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground sm:text-[16px]">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <span className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          {item.type}
                        </span>

                        <Link
                          to="/journey/$slug"
                          params={{ slug: item.slug }}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="hidden sm:inline">
                            View journey
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}