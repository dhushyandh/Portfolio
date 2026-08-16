import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { NAV } from "./data";

const SOCIALS = [
  { href: "https://github.com/dhushyandh", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/dhushyandh", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:dhushyandhneduncheziyan4896@gmail.com", label: "Email", Icon: Mail },
];

const STACK = ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"];

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
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo.url} alt="Dhushyandh logo" className="h-8 w-8 rounded-full" />
              <span className="font-display text-lg font-bold text-foreground">Dhushyandh</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full stack developer and cloud engineer building fast, scalable products with modern
              web technologies and AI.
            </p>
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

          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-bold text-foreground">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-foreground">Get in touch</h3>
            <a
              href="mailto:dhushyandhneduncheziyan4896@gmail.com"
              className="mt-4 block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              dhushyandhneduncheziyan4896@gmail.com
            </a>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
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