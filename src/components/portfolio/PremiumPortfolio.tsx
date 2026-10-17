import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowUp, Download, Code2, Globe, Smartphone, ShoppingBag, Github, Linkedin, Mail, MessageCircle, Plus, Minus, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '@/assets/profile-img.png';
import { RESUME, RESUME_URL, CERTIFICATES } from './resume-data';
import { PORTFOLIO_PROJECTS, PROCESS, SERVICES, TECHNOLOGIES, PORTFOLIO_FAQS } from './premium-data';
import { TIMELINE } from './data';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { PortfolioMotion } from './PortfolioMotion';
import { ClientWorkCarousel } from './ClientWorkCarousel';
import { TimelineJourney } from './TimelineJourney';

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span className="text-primary">/{number}</span>{children}</p>;
}

export function PremiumPortfolio() {
  const [role, setRole] = useState(0);
  const [more, setMore] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const timer = setInterval(() => setRole(i => (i + 1) % 3), 3500); return () => clearInterval(timer); }, [reduce]);
  return <div className="premium-portfolio">
    <PortfolioMotion /><Nav />
    <a href="#main-content" className="skip-link">Skip to content</a>
    <main id="main-content">
      <section id="home" className="premium-hero page-width">
        <div className="hero-topline"><span className="availability"><i /> Open to freelance & opportunities</span><span className="hidden sm:block">Vellore, India · Working everywhere</span></div>
        <p className="hero-intro">Hey, I’m N. Dhushyandh <span className="text-primary">↗</span></p>
        <h1 className="hero-heading"><span className="hero-line"><motion.span initial={reduce ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ duration: .85, delay: .2 }}>Web Developer.</motion.span></span><span className="hero-line text-primary"><motion.span initial={reduce ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ duration: .85, delay: .35 }}>Mobile App Developer.</motion.span></span></h1>
        <div className="hero-bottom"><div className="min-w-0"><p className="hero-description">I turn ideas into thoughtful digital experiences.<br className="hidden sm:block" /> Modern websites, full-stack products & AI-powered apps.</p><div className="hero-actions"><Button asChild className="premium-button"><a href="#projects">Explore my work <ArrowUpRight /></a></Button><a href={RESUME_URL} download="Dhushyandh_Resume.pdf" className="inline-flex h-[48px] items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black shadow-md transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95"><span>Download resume</span><Download size={16} /></a><a href="https://linkedin.com/in/dhushyandh" target="_blank" rel="noopener noreferrer" className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#0A66C2] px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#004182] hover:scale-105 active:scale-95"><svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37z" /></svg><span>LinkedIn</span><ArrowUpRight size={16} /></a></div></div><div className="hero-signature"><span className="role-slot"><AnimatePresence mode="wait"><motion.span key={role} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }}>{['FULL-STACK DEVELOPMENT', 'WEB & MOBILE EXPERIENCES', 'AI-POWERED APPLICATIONS'][role]}</motion.span></AnimatePresence></span><a href="#about" className="scroll-cue" aria-label="Scroll to about"><ArrowDown size={20} /></a></div></div>
        <div className="hero-project-strip" aria-label="Clients I've built for"><span>CLIENTS I'VE BUILT FOR</span><span>Sri Guru Coaching Centre</span><span>RenewX Crew</span><span>Seyon Crackers</span><ArrowUpRight size={18} /></div>
      </section>

      <section id="about" className="editorial-section page-width">
        <SectionLabel number="01">A little about me</SectionLabel>
        <div className="about-layout"><div data-enter="left" className="about-photo"><img src={profile} alt="N. Dhushyandh, web and mobile app developer" width="800" height="1000" loading="lazy" decoding="async" /><span className="photo-caption">N. Dhushyandh / Developer & builder</span></div><div data-enter="right"><h2 className="section-heading">Curiosity first.<br />Code follows.</h2><p className="large-copy mt-8">I’m a full-stack developer who enjoys turning a good idea into something people can actually use.</p><p className="body-copy mt-5">From a business’s first website to a connected commerce platform or an AI-powered tool, I care about both how a product works and how it feels. My work spans React, Node.js, databases and mobile development.</p><p className="body-copy mt-5">Based in Vellore, Tamil Nadu, I’m pursuing {RESUME.education.degree} at {RESUME.education.school} ({RESUME.education.period}). Always learning. Always building.</p><div className="mt-6 flex flex-wrap items-center gap-4"><Button asChild variant="link" className="h-auto p-0 text-base"><a href="#experience">Explore journey & timeline <ArrowUpRight /></a></Button><span className="text-muted-foreground">·</span><Button asChild variant="link" className="h-auto p-0 text-base"><Link to="/resume">Full resume <ArrowUpRight /></Link></Button></div><div className="about-tags"><span>Full-stack thinking</span><span>Design-conscious</span><span>Continuous learner</span></div></div></div>
      </section>

      <section id="projects" className="editorial-section page-width">
        <div className="section-header"><SectionLabel number="02">CLIENTS I'VE BUILT FOR</SectionLabel><span className="text-sm text-muted-foreground">Real client work. Tailored for web & mobile.</span></div>
        <h2 data-enter="up" className="section-heading mb-14">Client builds.<br /><span className="text-primary">Designed & delivered.</span></h2>
        <div className="featured-projects">{PORTFOLIO_PROJECTS.slice(0, 3).map((project, i) => <article key={project.slug} className={`featured-project ${i % 2 ? 'project-reverse' : ''}`}>
          <div className="project-visual" data-enter={i % 2 ? 'right' : 'left'}>
            <a
              href={project.live || `/projects/${project.slug}`}
              target={project.live ? '_blank' : undefined}
              rel={project.live ? 'noopener noreferrer' : undefined}
              className="block group/preview cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-transform duration-300 hover:scale-[1.015]"
              aria-label={`Open ${project.title} live demo in a new tab`}
            >
              {project.projectType === 'mobile' ? (
                <div className="mobile-app-preview transition-all duration-300 group-hover/preview:border-primary/50 group-hover/preview:shadow-[0_16px_40px_-20px_rgba(210,248,56,0.3)]" data-project-preview>
                  <div className="mobile-app-bar">
                    <span className="flex items-center gap-1.5"><Smartphone size={12} className="text-primary" /> Mobile App</span>
                    <span className="group-hover/preview:text-primary transition-colors">{project.title.toLowerCase()}</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 text-primary" />
                  </div>
                  <div className="mobile-app-screen">
                    <img src={project.image} alt={`${project.title} Mobile App preview`} loading="lazy" decoding="async" />
                  </div>
                </div>
              ) : (
                <div className="browser-preview transition-all duration-300 group-hover/preview:border-primary/50 group-hover/preview:shadow-[0_16px_40px_-20px_rgba(210,248,56,0.3)]" data-project-preview>
                  <div className="browser-bar">
                    <span className="browser-dots">● ● ●</span>
                    <span className="group-hover/preview:text-primary transition-colors">{project.title.toLowerCase()} / live project</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 text-primary" />
                  </div>
                  <img src={project.image} alt={`${project.title} actual website project screenshot`} width="1280" height="900" loading="lazy" decoding="async" />
                </div>
              )}
            </a>
            <span className="preview-caption">{project.category}<span>0{i + 1} / 2026</span></span>
          </div>
          <div className="project-information" data-enter={i % 2 ? 'left' : 'right'}><div className="project-kicker"><span>0{i + 1}</span><span className="project-status"><i />{project.status}</span></div><h3>{project.title}</h3><p className="body-copy mt-5">{project.description}</p><p className="project-role">{project.role}</p><div className="project-tech">{project.stack.map(t => <span key={t}>{t}</span>)}</div><ul className="project-features">{project.features.slice(0, 4).map(f => <li key={f}><span className="text-primary">↗</span> {f}</li>)}</ul><div className="project-links">{project.live && <Button asChild variant="link"><a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a></Button>}{project.github && <Button asChild variant="link"><a href={project.github} target="_blank" rel="noreferrer"><Github /> Source</a></Button>}<Button asChild variant="link"><Link to="/projects/$slug" params={{ slug: project.slug }}>Case study <ArrowUpRight /></Link></Button></div></div>
        </article>)}</div>
        <div className="other-projects">{PORTFOLIO_PROJECTS.slice(3).slice(0, more ? undefined : 0).map(p => <article key={p.slug} className="project-row" data-enter="up"><div className="min-w-0"><p className="text-sm text-muted-foreground">{p.category}</p><h3>{p.title}</h3><p className="body-copy mt-3">{p.description}</p></div><div className="project-row-end"><span className="text-xs text-muted-foreground">{p.status}</span><Button asChild variant="outline" size="icon"><Link to="/projects/$slug" params={{ slug: p.slug }} aria-label={`Read ${p.title} project details`}><ArrowUpRight /></Link></Button></div></article>)}</div>
        <Button variant="outline" onClick={() => setMore(v => !v)} aria-expanded={more} className="premium-button mt-8">{more ? 'Show less' : 'More project work'}{more ? <Minus /> : <Plus />}</Button>
      </section>

      <section id="services" className="services-band"><div className="page-width editorial-section"><SectionLabel number="03">What I can help with</SectionLabel><h2 data-enter="up" className="section-heading">Your next idea.<br />My next build.</h2><div className="services-grid">{SERVICES.map(s => { const Icon = { web: Globe, code: Code2, shop: ShoppingBag, mobile: Smartphone }[s.icon]; return <article key={s.number} data-enter="up" className="service-item"><div className="flex items-center justify-between"><span className="font-mono text-sm text-muted-foreground">/{s.number}</span><Icon size={25} className="text-primary" /></div><p className="service-label">{s.label}</p><h3>{s.title}</h3><p className="body-copy mt-5">{s.description}</p></article>; })}</div></div></section>

      <section id="skills" className="editorial-section overflow-hidden"><div className="page-width"><SectionLabel number="04">My toolkit</SectionLabel><div className="section-header"><h2 data-enter="up" className="section-heading">The right tools.<br />Not just more tools.</h2><p className="body-copy max-w-sm">A growing toolkit across interfaces, APIs, data and AI. Chosen for the problem, not the trend.</p></div></div><div className="technology-marquees">{[TECHNOLOGIES.slice(0, 7), TECHNOLOGIES.slice(7)].map((row, i) => <div key={i} className={`marquee ${i ? 'marquee-reverse' : ''}`}><div className="marquee-track">{[0, 1].map(n => <div key={n} className="marquee-group" aria-hidden={n === 1}>{row.map(t => <span key={t}><Code2 size={20} />{t}<span className="text-primary">✳</span></span>)}</div>)}</div></div>)}</div><div className="page-width skills-note"><span>Interfaces & mobile</span><span>APIs & databases</span><span>AI integration · Gemini API</span><span>Cloud & deployment</span></div></section>

      <section id="process" className="editorial-section page-width">
        <SectionLabel number="05">From idea to launch</SectionLabel>
        <h2 data-enter="up" className="section-heading">Good work starts<br />with a clear process.</h2>
        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <div key={p.title} data-enter="up">
              <span className="process-number">0{i + 1}</span>
              <h3>{p.title}<ArrowUpRight size={20} /></h3>
              <p className="body-copy">{p.description}</p>
            </div>
          ))}
        </div>
        <ClientWorkCarousel />
      </section>

      <section id="experience" className="editorial-section page-width border-t border-border">
        <div className="section-header">
          <SectionLabel number="06">Experience & Milestones</SectionLabel>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/resume">Full resume <ArrowUpRight size={14} /></Link>
            </Button>
          </div>
        </div>
        <h2 data-enter="up" className="section-heading mb-4">
          Where I’ve built.<br /><span className="text-primary">Where I’m heading.</span>
        </h2>
        <p className="body-copy max-w-2xl mb-12">
          From practical engineering education and full-stack internships to real client delivery and product-oriented software development.
        </p>

        <TimelineJourney />
      </section>

      <section id="achievements" className="certificates-section page-width">
        <SectionLabel number="07">Learning never stops</SectionLabel>
        <div className="section-header">
          <h2 className="section-heading text-3xl sm:text-4xl">Credentials & curiosity.</h2>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/certificates">All certificates <ArrowUpRight size={14} /></Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/resume">View resume <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {CERTIFICATES.map(c => (
            <a
              key={c.id}
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card/40 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="min-w-0">
                <span className="font-mono text-[11px] text-primary">{c.issuer}</span>
                <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{c.title}</p>
                <span className="text-xs text-muted-foreground">{c.category}</span>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </section>

      <section id="faq" className="editorial-section page-width border-t border-border">
        <SectionLabel number="08">Got questions?</SectionLabel>
        <div className="section-header">
          <h2 className="section-heading">Frequently asked<br /><span className="text-primary">questions.</span></h2>
          <p className="body-copy max-w-md hidden md:block">
            Clear answers about my development services, verified client work, tech stack, and freelance availability.
          </p>
        </div>
        <div className="faq-grid mt-12 divide-y divide-border border-y border-border">
          {PORTFOLIO_FAQS.map((faq, index) => (
            <details key={faq.question} className="faq-item group py-6 transition-colors" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none font-semibold text-lg sm:text-xl text-foreground hover:text-primary transition-colors focus-visible:outline-none">
                <span className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">/0{index + 1}</span>
                  <span>{faq.question}</span>
                </span>
                <span className="shrink-0 text-muted-foreground group-open:rotate-45 transition-transform duration-200">
                  <Plus size={20} />
                </span>
              </summary>
              <p className="body-copy mt-4 pl-8 sm:pl-10 max-w-3xl text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Contact />
    </main>
    <footer className="premium-footer page-width border-t border-border pt-16 pb-12 mt-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border">
        {/* Brand & Bio column */}
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
            <span>N. Dhushyandh</span>
            <span className="text-primary font-mono text-xl">↗</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Full-Stack Web & Mobile App Developer based in Vellore, India. Turning ambitious ideas into high-performance, user-first software.
          </p>


          <div className="mt-6 flex items-center gap-2.5">
            {[
              { Icon: Github, label: 'GitHub', href: 'https://github.com/dhushyandh' },
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dhushyandh' },
              { Icon: Mail, label: 'Email', href: `mailto:${RESUME.email}` },
              { Icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919342763553' },
            ].map(({ Icon, label, href }) => (
              <Button asChild key={label} variant="outline" size="icon" className="h-9 w-9 rounded-full border-border/80 bg-background/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <Icon size={16} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Links Column 1: Navigation */}
        <div className="lg:col-span-2 sm:col-span-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Me</a></li>
            <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Featured Projects</a></li>
            <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Technical Skills</a></li>
            <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Journey & Timeline</a></li>
            <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">Frequently Asked</a></li>
          </ul>
        </div>

        {/* Quick Links Column 2: Credentials */}
        <div className="lg:col-span-3 sm:col-span-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Credentials</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/resume" className="text-muted-foreground hover:text-foreground transition-colors">Interactive Resume</Link></li>
            <li><a href={RESUME_URL} download="Dhushyandh_Resume.pdf" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"><span>Download PDF Resume</span><Download size={13} className="text-primary" /></a></li>
            <li><Link to="/certificates" className="text-muted-foreground hover:text-foreground transition-colors">Verified Certifications</Link></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Start a Project</a></li>
          </ul>
        </div>

        {/* Quick Links Column 3: Legal & Information */}
        <div className="lg:col-span-2 sm:col-span-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Legal & Site</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">Visual Sitemap</Link></li>
            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Sitemap XML</a></li>
            <li><a href={`mailto:${RESUME.email}`} className="text-muted-foreground hover:text-foreground transition-colors">Direct Inquiries</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>
          <span>© {new Date().getFullYear()} N. Dhushyandh</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Vellore, Tamil Nadu, IN</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 text-primary hover:underline focus-visible:outline-none cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  </div>;
}