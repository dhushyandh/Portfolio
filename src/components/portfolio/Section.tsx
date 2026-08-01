import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-border py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
        {intro && <p className="mt-5 max-w-xl text-[17px] leading-8 text-muted-foreground">{intro}</p>}
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}