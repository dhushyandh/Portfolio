import {
  ArrowUpRight,
  Award,
  BookOpen,
  Cloud,
  Github,
  Trophy,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { ACHIEVEMENTS } from "./data";
import { Reveal } from "./Reveal";

const ICONS = {
  github: Github,
  cloud: Cloud,
  award: Award,
  book: BookOpen,
  trophy: Trophy,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="06 / Credentials"
      title="Credentials & Recognition"
      intro="Certifications, developer programmes, and learning milestones that complement my engineering experience."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = ICONS[achievement.icon];

          return (
            <Reveal key={achievement.slug} delay={index * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_-45px_oklch(0_0_0/90%)]">
                {/* subtle glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/30">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7 flex-1">
                    <h3 className="text-[17px] font-bold leading-6 tracking-tight text-foreground sm:text-[18px]">
                      {achievement.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        Credential
                      </span>
                    </div>

                    <Link
                      to="/credentials/$slug"
                      params={{ slug: achievement.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:gap-2"
                    >
                      Know more
                      <ArrowUpRight size={14} />
                    </Link>
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