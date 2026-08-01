import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "./Section";

const LINKS = [
  { icon: Mail, label: "Email", value: "dhushyandh@example.com", href: "mailto:dhushyandh@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/dhushyandh", href: "https://github.com/dhushyandh" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dhushyandh", href: "https://linkedin.com/in/dhushyandh" },
  { icon: MapPin, label: "Location", value: "India · Open to remote", href: null },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      intro="I'm open to internships, full-time roles, and collaborations. The fastest way to reach me is email."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {LINKS.map((link) => {
          const Icon = link.icon;
          const content = (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="mt-1 font-mono text-[15px] text-foreground">{link.value}</p>
              </div>
            </>
          );
          return link.href ? (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-primary/40"
            >
              {content}
            </a>
          ) : (
            <div key={link.label} className="surface-card flex items-center gap-4 p-6">
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}