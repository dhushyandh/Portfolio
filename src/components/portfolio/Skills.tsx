import { Cloud, Code2, Database, Server, Wrench } from "lucide-react";
import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";

const ICONS = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Expertise"
      title="Skills & Technologies"
      intro="A curated set of tools and technologies I use to build modern, production-ready software."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => {
          const Icon = ICONS[group.icon];
          return (
            <div key={group.label} className="surface-card p-7">
              <div className="flex items-center gap-2 text-primary">
                <Icon size={16} />
                <span className="eyebrow">{group.label}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}