import profile from "@/assets/profile-img.png.asset.json";
import { STATS } from "./data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14">
        <img
          src={profile.url}
          alt="Dhushyandh, full stack developer"
          loading="lazy"
          decoding="async"
          width={800}
          height={1000}
          className="max-h-72 w-full max-w-md rounded-2xl border border-border object-cover object-top sm:max-h-96 lg:max-h-none"
        />

        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Passionate about building things that matter.
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
            <p>
              I&apos;m a Computer Science Engineering student with a deep passion for software
              engineering. I believe great software is built at the intersection of technical rigor
              and thoughtful design.
            </p>
            <p>
              My journey started with curiosity about how things work on the web, and it quickly
              evolved into a commitment to mastering the full stack — from crafting responsive UIs
              to architecting scalable backend systems and deploying on cloud infrastructure.
            </p>
            <p>
              I&apos;m a continuous learner who thrives on building real-world applications that
              solve genuine problems. Whether it&apos;s integrating AI capabilities, optimizing
              database queries, or designing clean APIs — I care deeply about the craft.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="surface-card card-hover p-5">
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}