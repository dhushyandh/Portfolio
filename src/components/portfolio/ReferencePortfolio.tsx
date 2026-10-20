import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clock,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
} from 'lucide-react';
import dhushyandhProf from '@/assets/dhushyandh_prof.png';
import sriguruLogo from '@/assets/sriguru-logo.png';
import renewxLogo from '@/assets/renewx-logo.png';
import savoreLogo from '@/assets/savore-logo.png';
import forgeFitnessLogo from '@/assets/forge-fitness-logo.png';
import { RESUME, RESUME_URL } from './resume-data';
import { PORTFOLIO_PROJECTS, PROCESS, SERVICES } from './premium-data';
import { ACHIEVEMENTS, TIMELINE } from './data';
import { Contact } from './Contact';
import { PortfolioMotion } from './PortfolioMotion';
import { PortfolioFooter } from './PortfolioFooter';
import './ReferencePortfolio.css';

const CLIENT_LOGOS = [
  {
    name: 'Sri Guru Coaching Centre',
    logo: sriguruLogo,
    slug: 'sri-guru-coaching-centre',
    height: 48,
  },
  {
    name: 'RenewX Crew',
    logo: renewxLogo,
    slug: 'renewx-crew',
    height: 46,
  },
  {
    name: 'Savoré Restaurant & Café',
    logo: savoreLogo,
    slug: 'savore',
    height: 50,
  },
  {
    name: 'Forge Fitness',
    logo: forgeFitnessLogo,
    slug: 'forge-fitness',
    height: 42,
  },
];

const SERVICE_ICONS = { web: Globe, code: Code2, shop: ShoppingBag, mobile: Smartphone } as const;
const PROJECTS = PORTFOLIO_PROJECTS.slice(0, 4);

const ROLES = [
  'Full Stack Developer',
  'Mobile App Developer',
  'AI-Powered Applications',
  'Cloud Architecture',
];

const TECH_STACK = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Prisma', icon: 'prisma' },
  { name: 'React Native', icon: 'reactnative' },
  { name: 'Gemini AI', icon: 'gemini' },
  { name: 'AWS Cloud', icon: 'aws' },
];

function renderTechIcon(icon: string) {
  switch (icon) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" width="32" height="32">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l72.984 94.024c3.486-1.748 6.96-3.714 10.41-5.888z" fill="#ffffff" />
          <path d="M115.602 54h12.114v72h-12.114z" fill="#ffffff" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5z" fill="#339933" />
          <path d="M16 5.8l8.6 5v9.9L16 25.7l-8.6-5v-9.9l8.6-5z" fill="#ffffff" opacity="0.2" />
          <text x="16" y="19" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ne</text>
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 64 64" width="32" height="32">
          <rect width="64" height="64" rx="14" fill="#18181b" />
          <text x="32" y="38" fill="#ffffff" fontSize="18" fontWeight="700" letterSpacing="-1" textAnchor="middle" fontFamily="monospace">exe</text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12 1.5C12 1.5 6 7 6 13.5C6 17.5 9 21.5 12 22.5C15 21.5 18 17.5 18 13.5C18 7 12 1.5 12 1.5Z" fill="#13AA52" />
          <path d="M12 2.5V22C11.5 21.8 10 20.5 9.5 18.5C8 14 10.5 8 12 2.5Z" fill="#119245" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 64 64" width="32" height="32">
          <rect width="64" height="64" rx="14" fill="#336791" />
          <path d="M42 22c-2-3-6-5-10-5s-8 2-10 5c-3 4-4 10-3 15 1 5 4 9 9 10v6l5-3v-3c4-1 7-4 8-8 2-5 2-13 1-17z" fill="#ffffff" opacity="0.9" />
          <circle cx="28" cy="26" r="2" fill="#336791" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path d="M18.5 12h-8v3h2.4v10.5h3.2V15h2.4V12zm9 4.3c-1.3-.8-2.6-1.2-4-1.2-1.6 0-2.4.7-2.4 1.7 0 .9.7 1.4 2.5 2 2.5.9 3.9 2 3.9 4.2 0 2.5-2 4.2-5.4 4.2-1.8 0-3.3-.5-4.5-1.4l1.2-2.5c1.1.8 2.3 1.2 3.4 1.2 1.6 0 2.4-.7 2.4-1.8 0-1-.7-1.5-2.6-2.2-2.5-.9-3.7-2-3.7-4 0-2.4 1.9-4 5-4 1.5 0 2.9.4 4 1l-1.8 2.6z" fill="#ffffff" />
        </svg>
      );
    case 'prisma':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M20.5 18.2L12.9 2.6c-.3-.7-1.4-.7-1.7 0L3.5 18.2c-.3.7.2 1.4 1 1.4h15c.8 0 1.3-.7 1-1.4z" fill="#2D3748" />
          <path d="M12.5 3.5l6.5 14.5H12V3.5z" fill="#5A67D8" opacity="0.8" />
        </svg>
      );
    case 'reactnative':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect x="7" y="3" width="18" height="26" rx="4" fill="#0284C7" />
          <rect x="9" y="6" width="14" height="18" rx="1" fill="#ffffff" />
          <circle cx="16" cy="15" r="2.5" fill="#0284C7" />
          <circle cx="16" cy="26.5" r="1" fill="#ffffff" />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A73E8" />
              <stop offset="50%" stopColor="#8AB4F8" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="6" fill="#232F3E" />
          <path d="M7 19c5 3.5 13 3.5 18 0" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M23 18l2.5 1.5L25 16" fill="#FF9900" />
        </svg>
      );
    default:
      return <Code2 size={28} />;
  }
}

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    detail: 'Understanding your goals, users, and challenges through research and strategy.',
  },
  {
    number: '02',
    title: 'Design & Build',
    detail: 'Turn concepts into responsive UI wireframes, high-fidelity prototypes, and robust full-stack code with modern frameworks.',
  },
  {
    number: '03',
    title: 'Deliver',
    detail: 'Test thoroughly across devices, optimize performance, deploy seamlessly with CI/CD, and provide launch support.',
  },
];

const JOURNEY = [...TIMELINE].reverse();



const EXPERIENCE_ROWS = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent & Global Clients',
    period: '2024 — Present',
  },
  {
    role: 'Full-Stack & Mobile Developer',
    company: 'Client Projects & Mobile Apps',
    period: '2023 — 2024',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Sri Guru Coaching & Education',
    period: '2022 — 2023',
  },
  {
    role: 'Web Developer Intern',
    company: 'Foundation & Core Engineering',
    period: '2021 — 2022',
  },
];

const FAQS = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'I build responsive business websites, full-stack web applications, e-commerce stores, and cross-platform mobile apps with React Native. Whether you need an MVP from scratch or a redesign, we can shape the right solution.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Share your idea, timeline, and key goals. We will discuss the requirements, establish milestones, and agree on clear deliverables before development begins.',
  },
  {
    question: 'Do you build both web and mobile apps?',
    answer:
      'Yes! My expertise covers modern React and Next.js web applications, Node.js and database backends, and performant iOS & Android mobile applications built with React Native.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer:
      'Landing pages and core business websites typically launch within 1–2 weeks, while full-stack web platforms and mobile apps depend on feature scope, typically 3–6 weeks with continuous progress updates.',
  },
];

export function ReferencePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start 85%', 'end 70%'],
  });

  // Typing effect for "Dhushyandh" every 10 seconds
  const TARGET_NAME = 'Dhushyandh';
  const [typedName, setTypedName] = useState(TARGET_NAME);
  const [isTypingDone, setIsTypingDone] = useState(true);

  // Role rotator state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) {
      setTypedName(TARGET_NAME);
      setIsTypingDone(true);
      return;
    }
    let typingTimer: NodeJS.Timeout | null = null;
    const runTyping = () => {
      let idx = 0;
      setTypedName('');
      setIsTypingDone(false);
      if (typingTimer) clearInterval(typingTimer);
      typingTimer = setInterval(() => {
        idx++;
        setTypedName(TARGET_NAME.slice(0, idx));
        if (idx >= TARGET_NAME.length) {
          if (typingTimer) clearInterval(typingTimer);
          setIsTypingDone(true);
        }
      }, 95);
    };

    runTyping();
    // Re-trigger typing animation every 10 seconds as requested
    const cycleTimer = setInterval(runTyping, 10000);

    return () => {
      if (typingTimer) clearInterval(typingTimer);
      clearInterval(cycleTimer);
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <div className="reference-portfolio">
      <PortfolioMotion />
      <a href="#main-content" className="ref-skip-link">
        Skip to content
      </a>

      {/* Top Header matching reference layout */}
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <a className="ref-brand" href="#home" onClick={closeMenu}>
            Dhushyandh
          </a>

          <div className={'ref-nav-links' + (menuOpen ? ' is-open' : '')}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="ref-nav-cta" href="#contact" onClick={closeMenu}>
              Let’s Talk <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            className="ref-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <main id="main-content">
        {/* First Section: Hero Layout Matching Exactly User Reference Mockup */}
        <section id="home" className="ref-hero-split ref-wrap">
          {/* Left Column: Bio, Headings, and Actions */}
          <div className="ref-hero-left">
            <div className="ref-hero-status-pill">
              <span className="ref-status-dot" />
              <span>Available for Oppurtunities</span>
            </div>

            <div className="ref-hero-role-pill">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[currentRoleIndex]}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {ROLES[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <h1 className="ref-hero-split-title">
              <span className="ref-split-lead">Hi, I’m</span>
              <span className="ref-split-name">
                {typedName}
                <span className={`ref-typing-cursor ${isTypingDone ? 'is-blinking' : 'is-solid'}`} aria-hidden="true">
                  |
                </span>
              </span>
            </h1>

            <p className="ref-split-bio">
              I build modern web applications and mobile apps that help businesses grow and solve real-world problems.
            </p>

            <div className="ref-split-actions">
              <a className="ref-btn-primary" href="#contact">
                Let’s Work Together <ArrowUpRight size={15} />
              </a>

              <a className="ref-btn-secondary" href="#projects">
                View My Work
              </a>

              <a
                className="ref-btn-outline-sm"
                href={RESUME_URL}
                download="Dhushyandh_Resume.pdf"
                title="Download Résumé"
              >
                <Download size={14} /> Resume
              </a>

              <a
                className="ref-btn-outline-sm"
                href="https://linkedin.com/in/dhushyandh"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Dhushyandh Portrait with Radiant Lime Glow & Doodle Art */}
          <div className="ref-hero-right">
            <div className="ref-hero-glow" aria-hidden="true" />

            {/* Subtle organic green orbit paths */}
            <svg className="ref-hero-orbit-svg" viewBox="0 0 500 500" fill="none" aria-hidden="true">
              <path
                d="M 120 280 C 60 140, 260 40, 390 120 C 510 190, 460 380, 330 420 C 190 460, 160 380, 120 280 Z"
                stroke="#84cc16"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <path
                d="M 160 340 C 90 220, 220 80, 350 140 C 470 210, 430 360, 310 400"
                stroke="#a3e635"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <circle cx="280" cy="90" r="3" fill="#84cc16" opacity="0.6" />
              <circle cx="440" cy="230" r="3" fill="#84cc16" opacity="0.6" />
              <circle cx="220" cy="430" r="3.5" fill="#84cc16" opacity="0.5" />
            </svg>

            {/* Top Right Floating Script */}
            <div className="ref-hero-script-tag">
              <span>Turning ideas into real products</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M 4 4 C 14 10, 18 16, 20 20 M 20 20 L 14 19 M 20 20 L 19 14" stroke="#84cc16" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Portrait Cutout */}
            <div className="ref-hero-img-container">
              <img
                src={dhushyandhProf}
                alt="Dhushyandh — Full Stack Developer"
                className="ref-hero-split-img"
                fetchPriority="high"
                loading="eager"
              />
            </div>

            {/* Bottom Right Floating Badge: Open to Opportunities */}
            <a href="#contact" className="ref-hero-floating-opp">
              <span className="ref-status-dot" />
              <span>Open to Opportunities</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        {/* Second Section: Tech Stack with Infinite Right-to-Left Continuous Animation */}
        <section id="tech-stack" className="ref-tech-section ref-wrap">
          <div className="ref-tech-header">
            <div className="ref-tech-heading-group">
              <p className="ref-tech-eyebrow">
                <span className="ref-eyebrow-slash">/</span> Technologies I work with
              </p>
              <h2 className="ref-tech-title">
                Tech <em className="ref-serif-green">Stack</em>
              </h2>
            </div>
            <p className="ref-tech-desc">
              Tools and technologies I use to build modern, scalable and high-performance applications.
            </p>
          </div>

          {/* Marquee moving Right to Left continuously */}
          <div className="ref-tech-marquee-wrapper" aria-label="Technologies carousel">
            <div className="ref-tech-track">
              {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                <div className="ref-tech-card" key={tech.name + '-' + idx}>
                  <div className="ref-tech-icon-box">
                    {renderTechIcon(tech.icon)}
                  </div>
                  <span className="ref-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients I've Built For (Left-to-Right Continuous Animation) */}
        <section className="ref-clients-strip-section" aria-label="Clients I have built for">
          <div className="ref-clients-divider ref-wrap">
            <span className="ref-clients-line" />
            <h3 className="ref-clients-title">CLIENTS I'VE BUILT FOR</h3>
            <span className="ref-clients-line" />
          </div>

          <div className="ref-clients-marquee-wrapper" aria-label="Clients logo marquee">
            <div className="ref-clients-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                <Link
                  to="/projects/$slug"
                  params={{ slug: client.slug }}
                  className="ref-client-logo-item"
                  key={client.name + '-' + idx}
                  title={`View ${client.name} case study`}
                >
                  <img
                    src={client.logo}
                    alt={client.name + ' logo'}
                    loading="lazy"
                    decoding="async"
                    style={{ height: client.height }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Big Lime Bento Showcase Box (Matching the reference's vibrant green container) */}
        <section id="work" className="ref-work-wall ref-wrap" aria-label="Featured work collage">
          <div className="ref-work-wall-frame">
            {PROJECTS.map((project, index) => (
              <a
                className={'ref-wall-card ref-wall-card-' + (index + 1)}
                href={project.live || ('/projects/' + project.slug)}
                target={project.live ? '_blank' : undefined}
                rel={project.live ? 'noopener noreferrer' : undefined}
                key={project.slug}
                aria-label={'Preview ' + project.title}
              >
                {project.image && (
                  <img src={project.image} alt={project.title + ' preview'} loading="lazy" decoding="async" />
                )}
                <span className="ref-wall-card-label">
                  <span>{project.title}</span>
                  <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
            <div className="ref-wall-caption">
              <span>SELECTED WORK / 2024—2026</span>
              <a href="#projects" className="ref-wall-caption-link">
                View All Case Studies <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy / Manifesto Section with floating feature badges matching reference image */}
        <section className="ref-manifesto ref-wrap">
          <p className="ref-manifesto-greeting">Hallo!</p>
          <div className="ref-manifesto-container">
            {/* Left floating pills */}
            <div className="ref-orbit-col ref-orbit-left">
              <div className="ref-orbit-pill ref-pill-orange">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>Product Design</span>
              </div>
              <div className="ref-orbit-pill ref-pill-blue">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>UX Design</span>
              </div>
              <div className="ref-orbit-pill ref-pill-dark">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>User Research</span>
              </div>
            </div>

            {/* Central Philosophy text */}
            <h2 className="ref-manifesto-text">
              focus is on blending clear strategy, thoughtful design, and user empathy to{' '}
              <span className="ref-muted-highlight">craft experiences that solve real problems</span>
            </h2>

            {/* Right floating pills */}
            <div className="ref-orbit-col ref-orbit-right">
              <div className="ref-orbit-pill ref-pill-yellow">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>Design Systems</span>
              </div>
              <div className="ref-orbit-pill ref-pill-pink">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>Usability Testing</span>
              </div>
              <div className="ref-orbit-pill ref-pill-green">
                <span className="ref-pill-icon"><Zap size={11} fill="#ffffff" stroke="#ffffff" /></span>
                <span>Brand Identity</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section ("Here’s how it works") with tilted cards & green wire pins */}
        <section id="process" className="ref-section ref-process-section ref-wrap">
          <div className="ref-section-intro">
            <p className="ref-process-eyebrow"><em>/ Our Projects Explained</em></p>
            <h2 className="ref-section-title">Here’s how it works</h2>
          </div>

          <div className="ref-process-cards-container">
            {/* Soft lime atmospheric glow behind the cards */}
            <div className="ref-process-glow" aria-hidden="true" />

            <div className="ref-process-grid">
              {STEPS.map((step, index) => (
                <motion.article
                  className={'ref-process-card ref-process-card-' + (index + 1)}
                  key={step.number}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: reduce ? 0 : index * 0.12 }}
                >
                  <span className="ref-step-num">{step.number}</span>
                  <div className="ref-step-body">
                    <h3 className="ref-step-title">{step.title}</h3>
                    <p className="ref-step-desc">{step.detail}</p>
                  </div>
                </motion.article>
              ))}

              {/* Handcrafted Lime Wire Pins SVG overlay matching reference image */}
              <svg className="ref-process-wire-svg" viewBox="0 0 1000 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Wire 1: Card 01 to Card 02 arch */}
                <path
                  d="M 285 64 C 308 20, 356 18, 394 30"
                  stroke="#84cc16"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <circle cx="279" cy="68" r="7" stroke="#84cc16" strokeWidth="2.5" fill="#ffffff" />
                <circle cx="400" cy="32" r="7" stroke="#84cc16" strokeWidth="2.5" fill="#ffffff" />

                {/* Wire 2: Card 02 to Card 03 loop-de-loop */}
                <path
                  d="M 610 368 C 632 368, 652 368, 664 372 C 684 378, 688 408, 668 412 C 648 416, 638 392, 652 370 C 664 350, 680 324, 708 324 C 726 324, 725 350, 720 394"
                  stroke="#84cc16"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="604" cy="368" r="7" stroke="#84cc16" strokeWidth="2.5" fill="#ffffff" />
                <circle cx="720" cy="394" r="7" stroke="#84cc16" strokeWidth="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>



        </section>

        {/* Selected Works (Projects Grid) */}
        <section id="projects" className="ref-section ref-projects-section ref-wrap">
          <div className="ref-section-heading-row">
            <div>
              <p className="ref-section-eyebrow">Case Studies</p>
              <h2 className="ref-section-title">Selected Works</h2>
            </div>
            <a
              className="ref-text-link"
              href="https://github.com/dhushyandh"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="ref-project-grid">
            {PROJECTS.map((project, index) => (
              <motion.article
                className="ref-project-card"
                key={project.slug}
                initial={reduce ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: reduce ? 0 : (index % 2) * 0.1 }}
              >
                <a
                  className="ref-project-image"
                  href={project.live || ('/projects/' + project.slug)}
                  target={project.live ? '_blank' : undefined}
                  rel={project.live ? 'noopener noreferrer' : undefined}
                  aria-label={'Open ' + project.title}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title + ' project preview'}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span className="ref-project-image-action">
                    <ExternalLink size={15} />
                  </span>
                </a>
                <div className="ref-project-copy">
                  <div className="ref-project-meta">
                    <span>{project.category}</span>
                    <span>{project.year || '2024–2026'}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="ref-project-tags">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="ref-project-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live project <ArrowUpRight size={14} />
                      </a>
                    )}
                    <Link to="/projects/$slug" params={{ slug: project.slug }}>
                      Case study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Services Band */}
        <section id="services" className="ref-services-band">
          <div className="ref-section ref-wrap">
            <div className="ref-section-heading-row">
              <div>
                <p className="ref-section-eyebrow">Ways I can help</p>
                <h2 className="ref-section-title">
                  Let’s make your idea<br />something people love using.
                </h2>
              </div>
              <p className="ref-muted ref-services-note">
                Freelance engineering for founders, businesses, and product teams building web & mobile apps.
              </p>
            </div>
            <div className="ref-services-grid">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                return (
                  <article className="ref-service-card" key={service.number}>
                    <div className="ref-service-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                    <span className="ref-service-number">{service.number}</span>
                    <h3>{service.label}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">
                      Let’s talk <ArrowUpRight size={14} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pushing Boundaries since 2023 (About & Experience Section) */}
        <section id="about" className="ref-section ref-about ref-wrap">
          <div className="ref-section-intro ref-about-intro">
            <p className="ref-section-eyebrow">About Me</p>
            <h2 className="ref-section-title">
              Pushing Boundaries <em className="ref-serif-highlight">since 2023</em>
            </h2>
          </div>

          <div className="ref-about-two-col">
            {/* Left dark card with Dhushyandh portrait & social icons */}
            <div className="ref-about-dark-card">
              <div className="ref-about-photo-wrap">
                <img
                  src={dhushyandhProf}
                  alt="Dhushyandh portrait"
                  className="ref-about-prof-img"
                  loading="lazy"
                />
              </div>
              <div className="ref-about-socials">
                <a
                  href="https://linkedin.com/in/dhushyandh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/dhushyandh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Code2 size={16} />
                </a>
                <a href={`mailto:${RESUME.email}`} aria-label="Email">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Right column with Bio & Key facts */}
            <div className="ref-about-info-col">
              <p className="ref-about-lead">
                A full-stack web and mobile developer specialized in creating high-performing digital experiences, robust architectures, and intuitive user interfaces that convert.
              </p>

              <div className="ref-about-facts">
                <div className="ref-fact-card">
                  <span className="ref-fact-num">01 / EDUCATION</span>
                  <strong>{RESUME.education.degree}</strong>
                  <small>{RESUME.education.school}</small>
                </div>
                <div className="ref-fact-card">
                  <span className="ref-fact-num">02 / FOCUS</span>
                  <strong>Web · Mobile · Full Stack</strong>
                  <small>React, Node.js, databases & modern architecture</small>
                </div>
                <div className="ref-fact-card">
                  <span className="ref-fact-num">03 / OPEN TO</span>
                  <strong>Freelance & Collaborations</strong>
                  <small>Real-world client work, builds, and product delivery</small>
                </div>
              </div>

              <div className="ref-about-cta-row">
                <a className="ref-text-link" href={RESUME_URL} download="Dhushyandh_Resume.pdf">
                  Download my résumé <Download size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey Timeline Section ("The journey so far") */}
        <section id="experience" className="ref-section ref-journey ref-wrap">
          <div className="ref-section-heading-row">
            <div>
              <p className="ref-section-eyebrow">The journey so far</p>
              <h2 className="ref-section-title">
                Still learning.<br /><em>Always building.</em>
              </h2>
            </div>
            <p className="ref-muted ref-journey-note">
              A few milestones that shaped how I approach software, engineering, and client delivery.
            </p>
          </div>

          <div className="ref-timeline" ref={journeyRef}>
            <div className="ref-timeline-track" aria-hidden="true">
              <div className="ref-timeline-track-base" />
              <motion.div
                className="ref-timeline-track-fill"
                style={{ scaleY: reduce ? 1 : scrollYProgress, transformOrigin: 'top' }}
              />
            </div>

            {JOURNEY.map((item, index) => (
              <motion.article
                key={item.slug}
                className={'ref-timeline-item ' + (index % 2 === 0 ? 'is-right' : 'is-left')}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : 0.06 }}
              >
                <span className="ref-timeline-node" aria-hidden="true">
                  <span />
                </span>
                <div className="ref-timeline-card">
                  <div className="ref-timeline-top">
                    <span>{item.period}</span>
                    <span>{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="ref-timeline-org">
                    <BriefcaseBusiness size={13} />
                    {item.org}
                  </p>
                  <p>{item.description}</p>
                  <span className="ref-timeline-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Credentials & Learning */}
        <section id="credentials" className="ref-credentials ref-wrap">
          <div id="achievements" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />
          <div className="ref-section-heading-row">
            <div>
              <p className="ref-section-eyebrow">Credentials & Certifications</p>
              <h2 className="ref-section-title">
                Always learning,<br />always improving.
              </h2>
            </div>
            <p className="ref-muted">Key industry certifications supporting modern full-stack development.</p>
          </div>
          <div className="ref-credential-grid">
            {ACHIEVEMENTS.map((item, index) => (
              <article className="ref-credential-card" key={item.slug}>
                <div className="ref-credential-header">
                  <span className="ref-credential-num">0{index + 1}</span>
                  <span className="ref-credential-badge">Verified Certificate</span>
                </div>
                <div className="ref-credential-body">
                  <h3 className="ref-credential-title">{item.title}</h3>
                  <p className="ref-credential-desc">{item.description}</p>
                </div>
                <div className="ref-credential-footer">
                  <Link
                    to="/credentials/$slug"
                    params={{ slug: item.slug }}
                    className="ref-credential-btn"
                    aria-label={`View ${item.title} certificate details`}
                  >
                    <span>View Credential</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="ref-section ref-faq ref-wrap">
          <div className="ref-section-heading-row">
            <div>
              <p className="ref-section-eyebrow">Questions, answered</p>
              <h2 className="ref-section-title">
                A few things you<br />might be wondering.
              </h2>
            </div>
            <p className="ref-muted">Need something else? Reach out and tell me what you have in mind.</p>
          </div>
          <div className="ref-faq-list">
            {FAQS.map((faq, index) => (
              <details className="ref-faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="ref-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* "Let’s Make It Happen" CTA Banner */}
        <section className="ref-cta-banner-wrap ref-wrap">
          <div className="ref-cta-banner">
            <h2 className="ref-cta-title">Let’s Make It Happen</h2>
            <p className="ref-cta-subtitle">
              Have an idea or need a high-impact website or app? Let’s collaborate and bring your digital vision to life today.
            </p>
            <a href="#contact" className="ref-cta-button">
              Start a Project <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />
      </main>

      <PortfolioFooter />
    </div>
  );
}
