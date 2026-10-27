import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Compass,
  FileText,
  Home,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  X,
  Award,
} from "lucide-react";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

export interface NotFoundViewProps {
  code?: string;
  badge?: string;
  title?: ReactNode;
  message?: string;
  backTo?: string;
  backLabel?: string;
  showDestinations?: boolean;
  customAction?: ReactNode;
}

const DESTINATIONS = [
  {
    icon: Briefcase,
    title: "Selected Work",
    desc: "Explore featured full-stack web and mobile application case studies.",
    to: "/",
    hash: "projects",
    actionLabel: "View projects",
  },
  {
    icon: FileText,
    title: "Resume & Skills",
    desc: "Review frontend/backend experience, tech stacks, and academic background.",
    to: "/resume",
    actionLabel: "Open resume",
  },
  {
    icon: Award,
    title: "Certifications",
    desc: "Official certifications verified by AWS, Google Cloud, Oracle, and IBM.",
    to: "/",
    hash: "credentials",
    actionLabel: "Inspect credentials",
  },
  {
    icon: Compass,
    title: "Career Journey",
    desc: "Chronological milestones from college foundation to client engineering.",
    to: "/journey",
    actionLabel: "Read journey",
  },
  {
    icon: Mail,
    title: "Start a Conversation",
    desc: "Have a freelance inquiry or full-stack opportunity? Send a direct message.",
    to: "/",
    hash: "contact",
    actionLabel: "Contact Dhushyandh",
  },
  {
    icon: ShieldCheck,
    title: "Explore Sitemap",
    desc: "A comprehensive directory of all verified routes, projects, and documents.",
    to: "/sitemap",
    actionLabel: "Browse sitemap",
  },
];

export function NotFoundView({
  code = "404",
  badge = "404 Error · Page Not Found",
  title = (
    <>
      Lost in the <em>Digital Landscape?</em>
    </>
  ),
  message = "The page or resource you are looking for doesn't exist, may have moved, or is no longer accessible in this version of the portfolio.",
  backTo = "/",
  backLabel = "Back to Portfolio",
  showDestinations = true,
  customAction,
}: NotFoundViewProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="reference-portfolio ref-case-study-page">
      {/* Sticky Header */}
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <Link className="ref-brand" to="/" onClick={closeMenu}>
            Dhushyandh
          </Link>

          <div className={"ref-nav-links" + (menuOpen ? " is-open" : "")}>
            <Link to="/" hash="home" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/" hash="about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/" hash="projects" onClick={closeMenu}>
              Work
            </Link>
            <Link to="/" hash="services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/" hash="credentials" onClick={closeMenu}>
              Credentials
            </Link>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
            <Link to="/journey" onClick={closeMenu}>
              Journey
            </Link>
            <Link to="/" hash="contact" onClick={closeMenu}>
              Contact
            </Link>
            <a
              className="ref-nav-cta ref-nav-linkedin"
              href="https://linkedin.com/in/dhushyandh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dhushyandh on LinkedIn"
              onClick={closeMenu}
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} className="ref-nav-linkedin-arrow" />
            </a>
          </div>

          <button
            className="ref-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Main 404 Canvas */}
      <main id="main-content" className="ref-wrap">
        <div className="ref-case-study-hero" style={{ paddingBottom: 0 }}>
          {/* Breadcrumb Navigation Bar */}
          <nav aria-label="Breadcrumb" className="ref-breadcrumb-bar">
            <ol className="ref-breadcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>
                {code} Not Found
              </li>
            </ol>

            <Link to={backTo} className="ref-back-pill">
              <ArrowLeft size={14} /> {backLabel}
            </Link>
          </nav>
        </div>

        {/* 404 Centerpiece */}
        <section className="ref-404-container">
          <div className="ref-404-glow" aria-hidden="true" />

          <div className="ref-404-content">
            <div className="ref-404-badge">
              <span className="ref-404-badge-dot" />
              <span>{badge}</span>
            </div>

            <div className="ref-404-code" aria-hidden="true">
              {code.slice(0, 1)}
              <span className="ref-404-code-highlight">
                {code.slice(1, 2) || "0"}
              </span>
              {code.slice(2) || "4"}
            </div>

            <h1 className="ref-404-title">{title}</h1>

            <p className="ref-404-desc">{message}</p>

            <div className="ref-404-actions">
              {customAction}
              <Link to="/" className="ref-btn-primary">
                <Home size={15} /> Return to Home
              </Link>
              <Link to="/" hash="projects" className="ref-btn-secondary">
                <Briefcase size={15} /> Explore Selected Work
              </Link>
            </div>

            {showDestinations && (
              <>
                <div className="ref-404-destinations-title">
                  Recommended Destinations
                </div>

                <div className="ref-404-grid">
                  {DESTINATIONS.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      hash={item.hash}
                      className="ref-404-card"
                    >
                      <div className="ref-404-card-icon">
                        <item.icon size={18} />
                      </div>
                      <div className="ref-404-card-heading">
                        <span>{item.title}</span>
                        <ArrowUpRight size={14} />
                      </div>
                      <p className="ref-404-card-text">{item.desc}</p>
                    </Link>
                  ))}
                </div>

                <div className="ref-404-help-strip">
                  <span>Looking for something specific?</span>
                  <Link to="/" hash="contact">
                    Send a quick message
                  </Link>
                  <span>·</span>
                  <Link to="/sitemap">View full site directory</Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      {/* Unified Portfolio Footer */}
      <PortfolioFooter />
    </div>
  );
}
