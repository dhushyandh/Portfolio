import { useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Download, ExternalLink, Globe, Menu, MessageCircle, Monitor, Smartphone, ShoppingBag, X } from 'lucide-react';
import profile from '@/assets/profile-img.png';
import { RESUME, RESUME_URL } from './resume-data';
import { PORTFOLIO_PROJECTS, PROCESS, SERVICES } from './premium-data';
import { TIMELINE, ACHIEVEMENTS } from './data';
import { Contact } from './Contact';
import { PortfolioMotion } from './PortfolioMotion';
import './ReferencePortfolio.css';

const SERVICE_ICONS = { web: Globe, code: Code2, shop: ShoppingBag, mobile: Smartphone } as const;
const PROJECTS = PORTFOLIO_PROJECTS.slice(0, 4);
const JOURNEY = [...TIMELINE].reverse();
const STEPS = [
  { number: '01', title: 'Discover', detail: PROCESS[0].description },
  { number: '02', title: 'Design', detail: PROCESS[1].description },
  { number: '03', title: 'Build & deliver', detail: PROCESS[2].description + ' ' + PROCESS[3].description },
];
const FAQS = [
  { question: 'What kind of projects do you take on?', answer: 'I work on business websites, full-stack web applications, e-commerce experiences, and mobile apps. We can start small with a landing page or discuss a larger product build.' },
  { question: 'How do we start a project?', answer: 'Share your idea, goals, key features, and any deadline you have in mind. We can clarify the scope, agree on the next steps, and keep communication clear as the project moves forward.' },
  { question: 'Do you build both web and mobile apps?', answer: 'Yes. My work spans React-based web experiences, Node.js and database-backed applications, and mobile experiences built with React Native.' },
];

export function ReferencePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ['start 82%', 'end 52%'] });
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="reference-portfolio">
      <PortfolioMotion />
      <a href="#main-content" className="ref-skip-link">Skip to content</a>
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <a className="ref-brand" href="#home" onClick={closeMenu}>Dhushyandh<span aria-hidden="true">.</span></a>
          <div className={'ref-nav-links' + (menuOpen ? ' is-open' : '')}>
            <a href="#projects" onClick={closeMenu}>Work</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#experience" onClick={closeMenu}>Journey</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="ref-nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
          </div>
          <button className="ref-menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="ref-hero ref-wrap">
          <div className="ref-hero-copy">
            <div className="ref-hero-meta"><span className="ref-availability"><i /> Available for freelance projects</span><span>{RESUME.location}</span></div>
            <p className="ref-eyebrow">Full-stack developer · Freelancer</p>
            <h1>Hi, I’m<br /><span className="ref-name">Dhushyandh.</span><br /><em>Web & mobile developer</em></h1>
            <p className="ref-hero-description">I build useful digital products for real people — from thoughtful business websites to full-stack applications and mobile experiences.</p>
            <div className="ref-hero-actions">
              <a className="ref-button ref-button-lime" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
              <a className="ref-button ref-button-outline" href="#contact">Start a project <ArrowDownRight size={16} /></a>
            </div>
            <div className="ref-hero-footnote"><span className="ref-online-dot" /> Currently open to freelance work, internships, and collaborations</div>
          </div>
          <div className="ref-hero-art" aria-label="Portrait of Dhushyandh">
            <div className="ref-hero-glow" /><div className="ref-hero-orbit ref-hero-orbit-one" /><div className="ref-hero-orbit ref-hero-orbit-two" />
            <img src={profile} alt="Dhushyandh, full-stack web and mobile developer" fetchPriority="high" />
            <div className="ref-photo-signature"><span>Dhushyandh N.</span><small>Web · Mobile · Full stack</small></div>
            <div className="ref-hero-stamp"><span>BUILD</span><span>WITH</span><b>✳</b><span>PURPOSE</span></div>
          </div>
        </section>

        <section className="ref-partner-strip ref-wrap" aria-label="Selected project names">
          <span className="ref-strip-label">A FEW THINGS I’VE BUILT</span><span>Sri Guru Coaching Centre</span><span>RenewX Crew</span><span>Seyon Crackers</span><span>CVPilot</span>
        </section>

        <section className="ref-work-wall ref-wrap" aria-label="Project preview gallery">
          <div className="ref-work-wall-frame">
            {PROJECTS.map((project, index) => (
              <a className={'ref-wall-card ref-wall-card-' + (index + 1)} href={project.live || '#projects'} target={project.live ? '_blank' : undefined} rel={project.live ? 'noopener noreferrer' : undefined} key={project.slug} aria-label={'Preview ' + project.title}>
                {project.image && <img src={project.image} alt="" loading="lazy" decoding="async" />}
                <span>{project.title}<ArrowUpRight size={14} /></span>
              </a>
            ))}
            <div className="ref-wall-caption"><span>SELECTED WORK / 2024—2026</span><ArrowUpRight size={18} /></div>
          </div>
        </section>

        <section className="ref-manifesto ref-wrap">
          <p className="ref-script">A little philosophy</p>
          <h2>Great work starts with <em>clear thinking,</em> thoughtful design, and useful code<span>.</span></h2>
          <div className="ref-manifesto-tags">
            <span><Code2 size={14} /> Full-stack development</span><span><Monitor size={14} /> Responsive web</span><span><Smartphone size={14} /> Mobile experiences</span><span><Check size={14} /> Built around real needs</span>
          </div>
        </section>

        <section id="process" className="ref-section ref-wrap">
          <div className="ref-section-intro"><p className="ref-script">From idea to launch</p><h2 className="ref-section-title">Good work starts<br />with a clear process.</h2><p className="ref-muted">A straightforward path from the first conversation to a product you can share with confidence.</p></div>
          <div className="ref-process-grid">
            {STEPS.map((step, index) => (
              <motion.article className={'ref-process-card ref-process-card-' + (index + 1)} key={step.number} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: reduce ? 0 : index * 0.12 }}>
                <div className="ref-step-top"><span>{step.number}</span><ArrowUpRight size={18} /></div><h3>{step.title}</h3><p>{step.detail}</p>
              </motion.article>
            ))}
            <svg className="ref-process-wire" viewBox="0 0 900 180" fill="none" aria-hidden="true">
              <motion.path d="M18 128 C115 128 92 28 192 28 S302 147 399 147 S510 45 610 45 S740 126 882 126" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 6" initial={reduce ? false : { pathLength: 0, opacity: 0.3 }} whileInView={{ pathLength: 1, opacity: 0.85 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
              <circle cx="18" cy="128" r="4" fill="currentColor" /><circle cx="192" cy="28" r="4" fill="currentColor" /><circle cx="399" cy="147" r="4" fill="currentColor" /><circle cx="610" cy="45" r="4" fill="currentColor" /><circle cx="882" cy="126" r="4" fill="currentColor" />
            </svg>
          </div>
        </section>

        <section id="projects" className="ref-section ref-projects-section ref-wrap">
          <div className="ref-section-heading-row"><div><p className="ref-script">Selected projects explained</p><h2 className="ref-section-title">A few things I’ve built.</h2></div><a className="ref-text-link" href="https://github.com/dhushyandh" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
          <div className="ref-project-grid">
            {PROJECTS.map((project, index) => (
              <motion.article className="ref-project-card" key={project.slug} initial={reduce ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: reduce ? 0 : (index % 2) * 0.1 }}>
                <a className="ref-project-image" href={project.live || '#projects'} target={project.live ? '_blank' : undefined} rel={project.live ? 'noopener noreferrer' : undefined} aria-label={'Open ' + project.title}>
                  {project.image && <img src={project.image} alt={project.title + ' project preview'} loading="lazy" decoding="async" />}<span className="ref-project-image-action"><ExternalLink size={15} /></span>
                </a>
                <div className="ref-project-copy"><div className="ref-project-meta"><span>{project.category}</span><span>{project.year || 'Project'}</span></div><h3>{project.title}</h3><p>{project.description}</p>
                  <div className="ref-project-tags">{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="ref-project-actions">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={14} /></a>}<Link to="/projects/$slug" params={{ slug: project.slug }}>Case study <ArrowRight size={14} /></Link></div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="ref-services-band"><div className="ref-section ref-wrap">
          <div className="ref-section-heading-row"><div><p className="ref-script">Ways I can help</p><h2 className="ref-section-title">Let’s make your idea<br />something people can use.</h2></div><p className="ref-muted ref-services-note">Freelance development for businesses, founders, and people with a good idea to build.</p></div>
          <div className="ref-services-grid">{SERVICES.map((service) => { const Icon = SERVICE_ICONS[service.icon]; return (
            <article className="ref-service-card" key={service.number}><div className="ref-service-icon"><Icon size={21} strokeWidth={1.7} /></div><span className="ref-service-number">{service.number}</span><h3>{service.label}</h3><p>{service.description}</p><a href="#contact">Let’s talk <ArrowUpRight size={14} /></a></article>
          ); })}</div>
        </div></section>

        <section id="about" className="ref-section ref-about ref-wrap">
          <div className="ref-about-image"><div className="ref-about-image-glow" /><img src={profile} alt="Portrait of Dhushyandh" loading="lazy" decoding="async" /><div className="ref-about-caption"><span>THE PERSON BEHIND THE PIXELS</span><span>Vellore, India ↗</span></div></div>
          <div className="ref-about-copy"><p className="ref-script">Who am I?</p><h2 className="ref-section-title">Curiosity first.<br /><em>Code follows.</em></h2>
            <p className="ref-about-lead">I’m Dhushyandh — a full-stack developer and freelancer who likes turning early ideas into useful digital experiences.</p>
            <p className="ref-muted">I work across the interface, the backend, and the parts that connect them. I care about clear communication, practical decisions, and building things that feel good to use.</p>
            <div className="ref-about-facts">
              <div><span>01 / EDUCATION</span><strong>{RESUME.education.degree}</strong><small>{RESUME.education.school}</small></div>
              <div><span>02 / FOCUS</span><strong>Web · Mobile · Full stack</strong><small>React, Node.js, databases & product thinking</small></div>
              <div><span>03 / OPEN TO</span><strong>Freelance & opportunities</strong><small>Projects, collaboration, and learning from real work</small></div>
            </div>
            <a className="ref-text-link" href={RESUME_URL} download="Dhushyandh_Resume.pdf">Download my résumé <Download size={15} /></a>
          </div>
        </section>

        <section id="experience" className="ref-section ref-journey ref-wrap">
          <div className="ref-section-heading-row"><div><p className="ref-script">The journey so far</p><h2 className="ref-section-title">Still learning.<br /><em>Always building.</em></h2></div><p className="ref-muted ref-journey-note">A few milestones that shaped how I approach software and client work.</p></div>
          <div className="ref-timeline" ref={journeyRef}><div className="ref-timeline-track" aria-hidden="true"><div className="ref-timeline-track-base" /><motion.div className="ref-timeline-track-fill" style={{ scaleY: reduce ? 1 : scrollYProgress, transformOrigin: 'top' }} /></div>
            {JOURNEY.map((item, index) => (
              <motion.article key={item.slug} className={'ref-timeline-item ' + (index % 2 === 0 ? 'is-right' : 'is-left')} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.45, delay: reduce ? 0 : 0.06 }}>
                <span className="ref-timeline-node" aria-hidden="true"><span /></span>
                <div className="ref-timeline-card"><div className="ref-timeline-top"><span>{item.period}</span><span>{item.type}</span></div><h3>{item.title}</h3><p className="ref-timeline-org"><BriefcaseBusiness size={13} />{item.org}</p><p>{item.description}</p><span className="ref-timeline-number">{String(index + 1).padStart(2, '0')}</span></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="credentials" className="ref-credentials ref-wrap">
          <div className="ref-section-heading-row"><div><p className="ref-script">Credentials & learning</p><h2 className="ref-section-title">Always learning,<br />always improving.</h2></div><p className="ref-muted">A few learning milestones that support my work.</p></div>
          <div className="ref-credential-grid">{ACHIEVEMENTS.slice(0, 4).map((item, index) => (
            <article className="ref-credential" key={item.slug}><span className="ref-credential-icon"><Check size={15} /></span><div><span>0{index + 1} / LEARNING</span><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight className="ref-credential-arrow" size={15} /></article>
          ))}</div>
        </section>

        <section id="faq" className="ref-section ref-faq ref-wrap">
          <div className="ref-section-heading-row"><div><p className="ref-script">Questions, answered</p><h2 className="ref-section-title">A few things you<br />might be wondering.</h2></div><p className="ref-muted">Need something else? Reach out and tell me what you have in mind.</p></div>
          <div className="ref-faq-list">{FAQS.map((faq, index) => <details className="ref-faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="ref-faq-plus">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <Contact />
      </main>

      <footer className="ref-footer">
        <div className="ref-footer-top ref-wrap"><a className="ref-brand" href="#home">Dhushyandh<span>.</span></a><p>Building useful things<br />for a better tomorrow.</p>
          <div className="ref-footer-links"><a href="#projects">Work</a><a href="#services">Services</a><a href="#experience">Journey</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <div className="ref-social-links"><a href="https://github.com/dhushyandh" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Code2 size={17} /></a><a href="https://linkedin.com/in/dhushyandh" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><ArrowUpRight size={17} /></a><a href="mailto:dhushyandhneduncheziyan4896@gmail.com" aria-label="Email"><MessageCircle size={17} /></a></div>
        </div>
        <div className="ref-footer-wordmark" aria-hidden="true">Dhushyandh</div>
        <div className="ref-footer-bottom ref-wrap"><span>© {new Date().getFullYear()} Dhushyandh. All rights reserved.</span><span>Designed with intent. Built with code.</span></div>
      </footer>
    </div>
  );
}
