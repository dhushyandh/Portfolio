import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Cookie,
  ExternalLink,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import "@/components/portfolio/ReferencePortfolio.css";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dhushyandh | Full Stack & Mobile App Developer" },
      {
        name: "description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: "Privacy Policy — Dhushyandh" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dhushyandh.in/privacy-policy" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — Dhushyandh" },
      {
        name: "twitter:description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/privacy-policy" }],
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
              name: "Privacy Policy",
              item: "https://dhushyandh.in/privacy-policy",
            },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPolicy,
});

const SECTIONS = [
  { id: "information", title: "Information Collected", icon: FileText },
  { id: "usage", title: "How Information Is Used", icon: UserCheck },
  { id: "ai", title: "AI Assistant", icon: Bot },
  { id: "cookies", title: "Cookies & Analytics", icon: Cookie },
  { id: "third-party", title: "Third-Party Services", icon: ExternalLink },
  { id: "security", title: "Security & Retention", icon: Lock },
  { id: "rights", title: "Your Rights", icon: ShieldCheck },
  { id: "contact", title: "Contact Information", icon: Mail },
];

function PrivacyPolicy() {
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
              <li style={{ color: "var(--ink)", fontWeight: 600 }}>Privacy Policy</li>
            </ol>

            <Link to="/" className="ref-back-pill">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </nav>

          <div className="ref-case-hero-tag">
            <ShieldCheck size={12} />
            <span>Legal Policy</span>
          </div>

          <h1 className="ref-case-title">Privacy Policy</h1>

          <p className="ref-case-overview">
            This Privacy Policy explains how information is handled when you visit and interact
            with Dhushyandh's portfolio website, contact forms, and interactive features.
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
            <article id="information" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <FileText size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 01</span>
                  <h2 className="ref-legal-card-title">Information We Collect</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  You can browse the majority of this portfolio website freely without submitting any
                  personally identifiable information.
                </p>
                <p>
                  When you voluntarily initiate contact through the inquiry form, direct email links, or
                  messaging channels, you may choose to provide details such as your name, email address,
                  organization, and the specific details of your project or inquiry.
                </p>
                <p>
                  Standard technical information (such as anonymized IP addresses, browser types, and
                  general device characteristics) may be logged by hosting infrastructure and CDN providers
                  strictly for security, DDoS mitigation, and reliable site delivery.
                </p>
              </div>
            </article>

            {/* 02 */}
            <article id="usage" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <UserCheck size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 02</span>
                  <h2 className="ref-legal-card-title">How Information Is Used</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>Information collected through this website is utilized strictly to:</p>
                <ul className="ref-legal-list">
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Respond promptly to business inquiries, freelance opportunities, and project requests.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Discuss contract engineering roles, software development collaborations, or full-time opportunities.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Provide requested project specifications, technical documentation, or client estimates.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span>Maintain the security, uptime, and accessibility of the portfolio website.</span>
                  </li>
                </ul>
                <p>Your details are never sold, rented, or shared with third-party advertisers or data brokers.</p>
              </div>
            </article>

            {/* 03 */}
            <article id="ai" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Bot size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 03</span>
                  <h2 className="ref-legal-card-title">AI Assistant & Gemini Processing</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This portfolio features an interactive AI assistant powered by Google Gemini to help
                  prospective clients and recruiters explore Dhushyandh's project case studies, tech stack,
                  credentials, and background.
                </p>
                <div className="ref-legal-callout">
                  <strong>Important Notice:</strong> Queries entered into the AI assistant are processed in
                  real time solely to synthesize contextual answers. Please avoid entering sensitive personal data,
                  passwords, financial information, or proprietary business secrets into chat prompts.
                </div>
              </div>
            </article>

            {/* 04 */}
            <article id="cookies" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Cookie size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 04</span>
                  <h2 className="ref-legal-card-title">Cookies & Local Storage</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This website prioritizes privacy and does not utilize invasive tracking or third-party
                  advertising cookies.
                </p>
                <p>
                  Lightweight local storage or session cookies may be utilized strictly for essential UI
                  state (such as remembering reduced motion preferences or chat session state during an active visit).
                </p>
              </div>
            </article>

            {/* 05 */}
            <article id="third-party" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 05</span>
                  <h2 className="ref-legal-card-title">Third-Party Services & Links</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  This portfolio contains outbound links to verified third-party platforms, including:
                </p>
                <ul className="ref-legal-list">
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span><strong>GitHub:</strong> Hosting open-source code repositories and project commits.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span><strong>LinkedIn:</strong> Professional networking and employment verification.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span><strong>WhatsApp:</strong> Direct client communication and instant messaging channel.</span>
                  </li>
                  <li>
                    <span className="ref-legal-bullet-icon"><Check size={11} /></span>
                    <span><strong>Client Websites:</strong> Live demonstrations of deployed applications (e.g., Sri Guru Coaching, Savoré, RenewX).</span>
                  </li>
                </ul>
                <p>
                  External platforms operate under their own independent privacy terms. Visiting these links is
                  governed by their respective privacy policies.
                </p>
              </div>
            </article>

            {/* 06 */}
            <article id="security" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <Lock size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 06</span>
                  <h2 className="ref-legal-card-title">Security & Data Retention</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  Standard modern security protocols, including HTTPS (TLS 1.3) encryption in transit,
                  are enforced throughout the entire domain.
                </p>
                <p>
                  Inquiries and communications received via email or contact forms are retained only for the
                  duration necessary to conduct professional business discussions and maintain project correspondence.
                </p>
              </div>
            </article>

            {/* 07 */}
            <article id="rights" className="ref-legal-card">
              <div className="ref-legal-card-header">
                <div className="ref-legal-card-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="ref-legal-card-num">Section 07</span>
                  <h2 className="ref-legal-card-title">Your Rights & Choices</h2>
                </div>
              </div>
              <div className="ref-legal-card-body">
                <p>
                  You have the right to request access to, correction of, or permanent deletion of any personal
                  information you have voluntarily submitted through this website.
                </p>
                <p>
                  To exercise your rights or request removal of past email correspondence, please contact
                  Dhushyandh directly via the email listed below.
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
                  For questions regarding this Privacy Policy or data handling practices, please write directly to:
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
        <Link to="/terms-and-conditions" className="ref-case-next-card">
          <div>
            <div className="ref-case-next-label">Next Legal Document</div>
            <div className="ref-case-next-title">Terms & Conditions</div>
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