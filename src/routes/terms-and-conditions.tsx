import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileText,
  Github,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Dhushyandh | Full Stack & Mobile App Developer" },
      {
        name: "description",
        content:
          "Terms and Conditions for using Dhushyandh's developer portfolio website, AI assistant, and project showcase materials.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: "Terms & Conditions — Dhushyandh" },
      {
        property: "og:description",
        content:
          "Terms and Conditions for using Dhushyandh's developer portfolio website, AI assistant, and project showcase materials.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dhushyandh.in/terms-and-conditions" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions — Dhushyandh" },
      {
        name: "twitter:description",
        content:
          "Terms and Conditions for using Dhushyandh's developer portfolio website, AI assistant, and project showcase materials.",
      },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/terms-and-conditions" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://dhushyandh.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Terms & Conditions",
              item: "https://dhushyandh.in/terms-and-conditions",
            },
          ],
        }),
      },
    ],
  }),
  component: TermsAndConditions,
});

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms", icon: Scale },
  { id: "website", title: "Permitted Use", icon: UserCheck },
  { id: "projects", title: "Intellectual Property", icon: BriefcaseBusiness },
  { id: "ai", title: "AI Assistant Disclaimer", icon: Bot },
  { id: "external", title: "External Links & Repos", icon: Github },
  { id: "liability", title: "Warranties & Liability", icon: ShieldCheck },
  { id: "jurisdiction", title: "Governing Law", icon: FileText },
  { id: "contact", title: "Contact Information", icon: Mail },
];

function TermsAndConditions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="reference-portfolio ref-case-study-page">
      {/* Top Header matching reference layout */}
      <header className="ref-header">
        <nav className="ref-nav ref-wrap" aria-label="Main navigation">
          <Link className="ref-brand" to="/">
            Dhushyandh
          </Link>

          <div className="ref-nav-links">
            <Link to="/" hash="home">Home</Link>
            <Link to="/" hash="about">About</Link>
            <Link to="/" hash="projects">Work</Link>
            <Link to="/" hash="services">Services</Link>
            <Link to="/" hash="journey">Journey</Link>
            <Link to="/" hash="credentials">Credentials</Link>
            <Link to="/" hash="contact">Contact</Link>
            <Link className="ref-nav-cta" to="/" hash="contact">
              Let’s Talk <ArrowUpRight size={14} />
            </Link>
          </div>
        </nav>
      </header>

      <main id="main-content" className="ref-wrap">
        {/* Hero Section */}
        <div className="ref-case-study-hero">
          {/* Breadcrumb Navigation Bar */}
          <nav aria-label="Breadcrumb" className="ref-breadcrumb-bar">
            <ol className="ref-breadcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>Legal</li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>Terms & Conditions</li>
            </ol>

            <Link to="/" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <Scale size={12} />
            <span>Legal Agreement</span>
          </div>

          <h1 className="ref-case-title">Terms & Conditions</h1>

          <p className="ref-case-overview">
            These Terms & Conditions explain the operational terms and conditions for using
            Dhushyandh's portfolio website, evaluating code projects, and engaging in inquiries.
          </p>

          <div className="ref-case-meta-row">
            <div className="ref-case-meta-pill">
              <span className="ref-case-status-dot" />
              <span>Effective: September 11, 2026</span>
            </div>
            <div className="ref-case-meta-pill">
              <span>N. Dhushyandh · Full Stack & Mobile App Developer</span>
            </div>
            <div className="ref-case-meta-pill">
              <span>Jurisdiction: Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Legal Grid: Sticky Sidebar + Main Content Cards */}
        <div className="ref-legal-grid">
          {/* Table of Contents Sidebar */}
          <aside className="ref-legal-sidebar">
            <div className="ref-legal-sidebar-title">Contents</div>
            <nav className="ref-legal-sidebar-nav">
              {SECTIONS.map(({ id, title }) => (
                <a key={id} href={`#${id}`} className="ref-legal-sidebar-link">
                  <span>{title}</span>
                  <ChevronRight size={13} />
                </a>
              ))}
            </nav>
          </aside>

          {/* Legal Content Cards */}
          <div className="ref-legal-content">
            {/* 01 */}
            <article id="acceptance" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Scale size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 01</span>
                  <h2 className="ref-legal-card-title">Acceptance of Terms</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  By accessing, browsing, or utilizing any features of this website, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms & Conditions and the accompanying
                  Privacy Policy.
                </p>
                <p>
                  These terms govern all visitors, prospective clients, hiring managers, and recruiters reviewing
                  case studies, inspecting code repositories, and initiating communication.
                </p>
              </div>
            </article>

            {/* 02 */}
            <article id="website" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <UserCheck size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 02</span>
                  <h2 className="ref-legal-card-title">Permitted Use & Conduct</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This website is provided as an engineering portfolio and client showcase. When interacting with
                  this domain, you agree to:
                </p>
                <ul className="ref-legal-list">
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Browse case studies and documentation for evaluation, recruitment, or commercial collaboration.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Never attempt to probe, bypass, disrupt, or compromise server security or origin endpoints.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Never submit spam, automated abusive queries, or fraudulent inquiries through contact channels.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Never reverse-engineer private assets or misrepresent Dhushyandh's project credentials.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 03 */}
            <article id="projects" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <BriefcaseBusiness size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 03</span>
                  <h2 className="ref-legal-card-title">Intellectual Property & Portfolio Content</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  All custom interface designs, animations, written case study narratives, and code snippets
                  created specifically for this portfolio remain the intellectual property of N. Dhushyandh.
                </p>
                <p>
                  Client logos, trademarks, and brand assets (including Sri Guru Coaching Centre, RenewX Crew,
                  Savoré, and Forge Fitness) belong to their respective registered owners and are displayed here
                  solely to showcase genuine development services and technical contributions.
                </p>
                <p>
                  Open-source projects linked via GitHub remain governed by their explicit open-source licenses
                  (e.g., MIT, Apache 2.0).
                </p>
              </div>
            </article>

            {/* 04 */}
            <article id="ai" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Bot size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 04</span>
                  <h2 className="ref-legal-card-title">AI Assistant Informational Disclaimer</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  The interactive chatbot assistant is designed to provide rapid informational guidance regarding
                  Dhushyandh's engineering background, certifications, and technical projects.
                </p>
                <div className="ref-legal-callout">
                  <strong>Disclaimer:</strong> AI-generated statements are provided for convenience only and do not
                  constitute formal contractual warranties, binding price quotes, or legal commitments. For official
                  project proposals and contract terms, please confirm directly via email.
                </div>
              </div>
            </article>

            {/* 05 */}
            <article id="external" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Github size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 05</span>
                  <h2 className="ref-legal-card-title">External Links & Repositories</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This site includes outbound hyperlinks to third-party services (such as GitHub, LinkedIn,
                  and live client websites). These links are provided solely for professional verification.
                </p>
                <p>
                  Dhushyandh does not control third-party site contents and accepts no liability for third-party
                  modifications or external platform outages.
                </p>
              </div>
            </article>

            {/* 06 */}
            <article id="liability" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 06</span>
                  <h2 className="ref-legal-card-title">Warranties & Limitation of Liability</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This portfolio and its demonstrations are provided on an "as is" and "as available" basis
                  without warranties of uninterrupted uptime or error-free continuous operation.
                </p>
                <p>
                  To the maximum extent permitted by applicable law, Dhushyandh will not be liable for any indirect,
                  incidental, or consequential damages arising from the use or inability to access this showcase.
                </p>
              </div>
            </article>

            {/* 07 */}
            <article id="jurisdiction" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <FileText size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 07</span>
                  <h2 className="ref-legal-card-title">Governing Law & Jurisdiction</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  These Terms & Conditions are governed by and construed in accordance with the laws of the
                  Republic of India.
                </p>
                <p>
                  Any disputes arising out of or related to the usage of this portfolio shall be subject to the
                  competent courts having jurisdiction in Vellore, Tamil Nadu, India.
                </p>
              </div>
            </article>

            {/* 08 */}
            <article id="contact" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 08</span>
                  <h2 className="ref-legal-card-title">Contact Information</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  If you have inquiries regarding these Terms & Conditions or wish to discuss an engineering
                  collaboration, please reach out directly:
                </p>
                <div className="ref-case-actions-row" style={{ marginBottom: 0, marginTop: 14 }}>
                  <a
                    href="mailto:dhushyandhneduncheziyan4896@gmail.com"
                    className="ref-btn-primary"
                  >
                    <Mail size={15} /> dhushyandhneduncheziyan4896@gmail.com
                  </a>
                  <a
                    href="https://wa.me/919342763553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-btn-secondary"
                  >
                    WhatsApp Inquiry <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom Pagination Card */}
        <Link to="/privacy-policy" className="ref-case-next-card">
          <div>
            <div className="ref-case-next-label">Previous Legal Document</div>
            <div className="ref-case-next-title">Privacy Policy</div>
          </div>
          <div className="ref-case-next-arrow">
            <ArrowRight size={20} />
          </div>
        </Link>
      </main>

      <PortfolioFooter />
    </div>
  );
}