import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { NAV } from "./data";

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const onHome = pathname === "/";
  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-5 sm:h-[76px] sm:px-6">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={logo.url} alt="Dhushyandh logo" className="h-7 w-7 rounded-full" />
          <span className="font-display text-[17px] font-bold text-foreground">Dhushyandh</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              className={
                active === item.id
                  ? "border-b-2 border-primary pb-1 text-[15px] font-medium text-foreground"
                  : "border-b-2 border-transparent pb-1 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              onClick={() => setOpen(false)}
              className="block py-2 text-[15px] text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}