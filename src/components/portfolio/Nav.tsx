import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/favicon.png";
import { NAV } from "./data";

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const onHome = pathname === "/";
  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (element): element is HTMLElement => Boolean(element),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-border bg-background/75 px-3 shadow-[0_15px_50px_-25px_oklch(0_0_0/90%)] backdrop-blur-xl sm:h-16 sm:px-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Dhushyandh home">
          <img src={logo} alt="" className="h-8 w-8 rounded-xl" />
          <span className="font-display text-sm font-bold tracking-tight sm:text-base">Dhushyandh</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.slice(1).map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              className={`rounded-xl px-3 py-2 text-[13px] transition-colors ${
                active === item.id
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={hrefFor("contact")} className="hidden items-center gap-1.5 rounded-xl bg-foreground px-4 py-2.5 text-xs font-bold text-background transition-transform hover:-translate-y-0.5 md:inline-flex">
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-background/95 p-2 shadow-soft backdrop-blur-xl md:hidden">
          {NAV.slice(1).map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a href={hrefFor("contact")} onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-foreground px-4 py-3 text-sm font-bold text-background">
            Let&apos;s talk
          </a>
        </div>
      )}
      </header>

      <MobileBottomNav hrefFor={hrefFor} />
    </>
  );
}

function MobileBottomNav({ hrefFor }: { hrefFor: (id: string) => string }) {
  const items = [
    { id: "home", label: "Home", Icon: Home },
    { id: "projects", label: "Work", Icon: FolderKanban },
    { id: "about", label: "About", Icon: UserRound },
    { id: "skills", label: "Stack", Icon: Code2 },
    { id: "contact", label: "Contact", Icon: Mail },
  ];

  return (
    <nav className="fixed bottom-3 left-3 right-3 z-40 md:hidden" aria-label="Mobile navigation">
      <div className="mx-auto flex max-w-md items-center rounded-2xl border border-border bg-background/85 p-1.5 shadow-[0_18px_50px_-20px_oklch(0_0_0/70%)] backdrop-blur-xl">
        {items.map(({ id, label, Icon }) => (
          <a
            key={label}
            href={hrefFor(id)}
            className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl py-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
          >
            <Icon size={17} aria-hidden="true" />
            <span className="truncate text-[9px] font-medium">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
