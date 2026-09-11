import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import profile from "@/assets/profile-img.png";
import { ROLES } from "./data";
import { Reveal } from "./Reveal";
import { RESUME_URL } from "./resume-data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 px-5 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] text-foreground sm:mt-8 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <br />
            Dhushyandh.
          </h1>

          <p
            key={index}
            className="mt-5 font-display text-2xl font-bold text-primary transition-opacity duration-500 sm:mt-6 sm:text-3xl"
          >
            {ROLES[index]}
          </p>

          <p className="mt-6 text-lg font-medium text-foreground/90">
            Building scalable software with modern technologies.
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
            I enjoy transforming ideas into reliable, scalable, and user-focused software. My
            interests span full-stack development, cloud computing, AI-powered applications, and
            system design.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:px-6"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={RESUME_URL}
              download="Dhushyandh_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-display text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent sm:px-6"
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
        </Reveal>

        <Reveal delay={150} className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="rounded-full border-[6px] border-surface p-1 ring-1 ring-border">
            <img
              src={profile}
              alt="Portrait of Dhushyandh"
              loading="eager"
              className="h-48 w-48 rounded-full object-cover sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}