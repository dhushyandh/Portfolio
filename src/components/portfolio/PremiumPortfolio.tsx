import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowUp, Download, Code2, Globe, Smartphone, ShoppingBag, Github, Linkedin, Mail, MessageCircle, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '@/assets/profile-img.png';
import { RESUME, RESUME_URL, CERTIFICATES } from './resume-data';
import { PORTFOLIO_PROJECTS, PROCESS, SERVICES, TECHNOLOGIES } from './premium-data';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { PortfolioMotion } from './PortfolioMotion';
import { ClientWorkCarousel } from './ClientWorkCarousel';

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
        <div className="about-layout"><div data-enter="left" className="about-photo"><img src={profile} alt="N. Dhushyandh, web and mobile app developer" width="800" height="1000" loading="lazy" decoding="async" /><span className="photo-caption">N. Dhushyandh / Developer & builder</span></div><div data-enter="right"><h2 className="section-heading">Curiosity first.<br />Code follows.</h2><p className="large-copy mt-8">I’m a full-stack developer who enjoys turning a good idea into something people can actually use.</p><p className="body-copy mt-5">From a business’s first website to a connected commerce platform or an AI-powered tool, I care about both how a product works and how it feels. My work spans React, Node.js, databases and mobile development.</p><p className="body-copy mt-5">Based in Vellore, Tamil Nadu, I’m pursuing {RESUME.education.degree} at {RESUME.education.school} ({RESUME.education.period}). Always learning. Always building.</p><Button asChild variant="link" className="mt-6 h-auto p-0 text-base"><Link to="/resume">More about my journey <ArrowUpRight /></Link></Button><div className="about-tags"><span>Full-stack thinking</span><span>Design-conscious</span><span>Continuous learner</span></div></div></div>
      </section>

      <section id="projects" className="editorial-section page-width">
        <div className="section-header"><SectionLabel number="02">CLIENTS I'VE BUILT FOR</SectionLabel><span className="text-sm text-muted-foreground">Real client work. Tailored for web & mobile.</span></div>
        <h2 data-enter="up" className="section-heading mb-14">Client builds.<br /><span className="text-primary">Designed & delivered.</span></h2>
        <div className="featured-projects">{PORTFOLIO_PROJECTS.slice(0, 3).map((project, i) => <article key={project.slug} className={`featured-project ${i % 2 ? 'project-reverse' : ''}`}>
          <div className="project-visual" data-enter={i % 2 ? 'right' : 'left'}>
            {project.projectType === 'mobile' ? (
              <div className="mobile-app-preview" data-project-preview>
                <div className="mobile-app-bar">
                  <span className="flex items-center gap-1.5"><Smartphone size={12} className="text-primary" /> Mobile App</span>
                  <span>{project.title.toLowerCase()}</span>
                  <ArrowUpRight size={12} />
                </div>
                <div className="mobile-app-screen">
                  <img src={project.image} alt={`${project.title} Mobile App preview`} loading="lazy" decoding="async" />
                </div>
              </div>
            ) : (
              <div className="browser-preview" data-project-preview>
                <div className="browser-bar">
                  <span className="browser-dots">● ● ●</span>
                  <span>{project.title.toLowerCase()} / website project</span>
                  <ArrowUpRight size={12} />
                </div>
                <img src={project.image} alt={`${project.title} actual website project screenshot`} width="1280" height="900" loading="lazy" decoding="async" />
              </div>
            )}
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

      <section id="achievements" className="certificates-section page-width">
        <SectionLabel number="06">Learning never stops</SectionLabel>
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
      <Contact />
    </main>
    <footer className="premium-footer page-width"><div className="footer-main"><div><Link to="/" className="footer-brand">N. Dhushyandh<span className="text-primary">↗</span></Link><p className="body-copy mt-3">Thoughtful websites. Connected apps. Real possibilities.</p></div><div className="footer-socials">{[{ Icon: Github, label: 'GitHub', href: 'https://github.com/dhushyandh' }, { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dhushyandh' }, { Icon: Mail, label: 'Email', href: `mailto:${RESUME.email}` }, { Icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919342763553' }].map(({ Icon, label, href }) => <Button asChild key={label} variant="outline" size="icon"><a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon /></a></Button>)}</div></div><div className="footer-resources"><a href="#projects">Featured projects</a><Link to="/resume">Resume</Link><a href={RESUME_URL} download="Dhushyandh_Resume.pdf">Download PDF</a><Link to="/certificates">Certifications</Link><a href="#contact">Contact</a><a href="#home" className="ml-auto flex items-center gap-2">Back to top <ArrowUp size={14} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} N. Dhushyandh</span><span>Built with React · TypeScript · TanStack Start</span><span>Made with intention.</span></div></footer>
  </div>;
}