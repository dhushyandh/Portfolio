import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import profile from "@/assets/profile-img.png.asset.json";
import { ROLES } from "./data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 px-6 pt-40 pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-[1.05] text-foreground sm:text-7xl">
            Hi, I&apos;m
            <br />
            Dhushyandh.
          </h1>

          <p
            key={index}
            className="mt-6 font-display text-3xl font-bold text-primary transition-opacity duration-500"
          >
            {ROLES[index]}
          </p>

          <p className="mt-6 text-lg font-medium text-foreground/90">
            Building scalable software with modern technologies.
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-8 text-muted-foreground">
            I enjoy transforming ideas into reliable, scalable, and user-focused software. My
            interests span full-stack development, cloud computing, AI-powered applications, and
            system design.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-display text-[15px] font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <FileText size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="rounded-full border-[6px] border-surface p-1 ring-1 ring-border">
            <img
              src={profile.url}
              alt="Portrait of Dhushyandh"
              className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}