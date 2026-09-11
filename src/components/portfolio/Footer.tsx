import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { PROJECTS } from "./data";
import { RESUME } from "./resume-data";

const SOCIALS = [
  { href: "https://github.com/dhushyandh", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/dhushyandh", label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${RESUME.email}`, label: "Email", Icon: Mail },
];

const FEATURED = PROJECTS.slice(0, 4);

const RESOURCES = [
  { label: "Resume", to: "/resume" as const },
  { label: "Certifications", href: "/#achievements" },
  { label: "Skills & Stack", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const STACK = ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "AWS"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-[var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-primary) 60%, transparent), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid min-w-0 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo.url} alt="Dhushyandh logo" className="h-8 w-8 rounded-full" />
              <span className="font-display text-lg font-bold text-foreground">Dhushyandh</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full stack developer building scalable, AI-powered web applications with React,
              Node.js, and cloud infrastructure.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-primary" />
                {RESUME.location}
              </li>
              <li>
                <a
                  href={`mailto:${RESUME.email}`}
                  className="flex items-center gap-2 break-all transition-colors hover:text-primary"
                >
                  <Mail size={15} className="text-primary" />
                  {RESUME.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${RESUME.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone size={15} className="text-primary" />
                  {RESUME.phone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="chip-hover flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Featured projects">
            <h3 className="font-display text-sm font-bold text-foreground">Featured Projects</h3>
            <ul className="mt-4 space-y-2">
              {FEATURED.map((project) => (
                <li key={project.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#projects"
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  View all projects
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="font-display text-sm font-bold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  {"to" in item && item.to ? (
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/dhushyandh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dhushyandh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESUME.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Hire me
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Built with
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {STACK.map((tech) => (
                <span key={tech} className="chip text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {year} Dhushyandh Neduncheziyan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for opportunities
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="chip-hover flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
