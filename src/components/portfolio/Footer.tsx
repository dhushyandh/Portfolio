import { Link } from "@tanstack/react-router";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "@/assets/favicon.png";
import { PROJECTS } from "./data";
import { RESUME } from "./resume-data";

const SOCIALS = [
  {
    href: "https://github.com/dhushyandh",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://linkedin.com/in/dhushyandh",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: `mailto:${RESUME.email}`,
    label: "Email",
    Icon: Mail,
  },
];

const FEATURED = PROJECTS.slice(0, 4);

const RESOURCES = [
  { label: "Resume", to: "/resume" as const },
  { label: "Certifications", href: "/#achievements" },
  { label: "Skills & Stack", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Top accent */}
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
          {/* Brand / Contact */}
          <div className="min-w-0">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src={logo}
                alt="Dhushyandh logo"
                className="h-8 w-8 rounded-full transition-transform duration-300 group-hover:scale-105"
              />

              <span className="font-display text-lg font-bold text-foreground">
                Dhushyandh
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full stack developer building scalable, AI-powered web
              applications with React, Node.js, and cloud technologies.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-primary" />
                <span>{RESUME.location}</span>
              </li>

              <li>
                <a
                  href={`mailto:${RESUME.email}`}
                  className="flex items-center gap-2 break-all transition-colors hover:text-primary"
                >
                  <Mail size={15} className="shrink-0 text-primary" />
                  <span>{RESUME.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${RESUME.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone size={15} className="shrink-0 text-primary" />
                  <span>{RESUME.phone}</span>
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="chip-hover flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <nav aria-label="Featured projects">
            <h3 className="font-display text-sm font-bold text-foreground">
              Featured Projects
            </h3>

            <ul className="mt-4 space-y-2.5">
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

              <li className="pt-1">
                <a
                  href="/#projects"
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  View all projects →
                </a>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="font-display text-sm font-bold text-foreground">
              Resources
            </h3>

            <ul className="mt-4 space-y-2.5">
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

          {/* Connect */}
          <div>
            <h3 className="font-display text-sm font-bold text-foreground">
              Connect
            </h3>

            <ul className="mt-4 space-y-2.5">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-border pt-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              © {year} Dhushyandh N. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>

              <span aria-hidden className="h-1 w-1 rounded-full bg-border" />

              <Link
                to="/terms-and-conditions"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        title="Back to top"
        className="group fixed bottom-40 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary text-primary-foreground shadow-[0_18px_45px_-15px_color-mix(in_oklab,var(--color-primary)_80%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_22px_55px_-15px_color-mix(in_oklab,var(--color-primary)_90%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-20 sm:right-6"
      >
        <ArrowUp size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
}