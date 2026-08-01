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
    <section id={id} className={`scroll-mt-24 border-t border-border py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-xl text-[16px] leading-7 text-muted-foreground sm:mt-5 sm:text-[17px] sm:leading-8">{intro}</p>}
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}