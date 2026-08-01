import { Award, BookOpen, Cloud, Github, Trophy, Users } from "lucide-react";
import { Section } from "./Section";
import { ACHIEVEMENTS } from "./data";

const ICONS = {
  github: Github,
  cloud: Cloud,
  award: Award,
  book: BookOpen,
  trophy: Trophy,
  users: Users,
};

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements & Certifications">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div key={a.title} className="surface-card card-hover p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="mt-6 text-[17px] font-bold text-foreground">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{a.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}