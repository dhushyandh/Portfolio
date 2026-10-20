import { Link } from '@tanstack/react-router';
import {
  ArrowUp,
  ArrowUpRight,
  Clock,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import dhushyandhProf from '@/assets/dhushyandh_prof.png';
import { RESUME_URL } from './resume-data';

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ref-footer">
      <div className="ref-footer-top ref-wrap">
        <div className="ref-footer-brand-col">
          <div className="ref-footer-brand-head">
            <img
              src={dhushyandhProf}
              alt="N. Dhushyandh"
              className="ref-footer-avatar"
              width={52}
              height={52}
              loading="lazy"
            />
            <div>
              <span className="ref-footer-name">N. Dhushyandh</span>
              <span className="ref-footer-role">Full Stack & Mobile App Developer</span>
            </div>
          </div>

          <p className="ref-footer-bio">
            Crafting high-impact websites and touch-first mobile applications with clean architecture, intuitive UX, and measurable performance.
          </p>

          <div className="ref-footer-status">
            <span className="ref-status-dot" />
            <span>Available for New Projects & Freelance · 2026</span>
          </div>

          <div className="ref-footer-loc-time">
            <span><MapPin size={13} /> Vellore, Tamil Nadu, India</span>
            <span><Clock size={13} /> IST (UTC+5:30)</span>
          </div>
        </div>

        <div className="ref-footer-columns">
          <div className="ref-footer-col">
            <h4>Navigation</h4>
            <Link to="/" hash="home">Home</Link>
            <Link to="/" hash="about">About</Link>
            <Link to="/" hash="work">Selected Work</Link>
            <Link to="/" hash="projects">Case Studies</Link>
            <Link to="/" hash="services">Services</Link>
            <Link to="/" hash="experience">Journey</Link>
            <Link to="/" hash="credentials">Credentials</Link>
            <Link to="/" hash="contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>

          <div className="ref-footer-col">
            <h4>Case Studies</h4>
            <Link to="/projects/$slug" params={{ slug: 'savore' }}>Savoré Restaurant</Link>
            <Link to="/projects/$slug" params={{ slug: 'forge-fitness' }}>Forge Fitness</Link>
            <Link to="/projects/$slug" params={{ slug: 'sri-guru-coaching-centre' }}>Sri Guru Coaching</Link>
            <Link to="/projects/$slug" params={{ slug: 'renewx-crew' }}>RenewX Crew</Link>
            <Link to="/projects/$slug" params={{ slug: 'smartmart' }}>SmartMart</Link>
          </div>

          <div className="ref-footer-col">
            <h4>Credentials</h4>
            <Link to="/credentials/$slug" params={{ slug: 'aws-technical-essentials' }}>AWS Technical</Link>
            <Link to="/credentials/$slug" params={{ slug: 'ibm-web-development' }}>IBM Web Dev</Link>
            <Link to="/credentials/$slug" params={{ slug: 'amazon-full-stack-web-development' }}>Amazon Full Stack</Link>
            <Link to="/credentials/$slug" params={{ slug: 'oracle-cloud-infrastructure' }}>Oracle OCI</Link>
            <Link to="/credentials/$slug" params={{ slug: 'google-cloud-cybersecurity' }}>Google CyberSec</Link>
            <Link to="/credentials/$slug" params={{ slug: 'mern-stack-development' }}>MERN Stack</Link>
          </div>

          <div className="ref-footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/dhushyandh" target="_blank" rel="noopener noreferrer">
              <Github size={13} /> GitHub <ArrowUpRight size={11} />
            </a>
            <a href="https://linkedin.com/in/dhushyandh" target="_blank" rel="noopener noreferrer">
              <Linkedin size={13} /> LinkedIn <ArrowUpRight size={11} />
            </a>
            <a href="https://wa.me/919342763553" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={13} /> WhatsApp <ArrowUpRight size={11} />
            </a>
            <a href="mailto:dhushyandhneduncheziyan4896@gmail.com">
              <Mail size={13} /> Email <ArrowUpRight size={11} />
            </a>
            <a href={RESUME_URL} download="Dhushyandh_Resume.pdf">
              <Download size={13} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Big Wordmark Section with Ambient Lime Glow */}
      <div className="ref-footer-wordmark-wrap">
        <div className="ref-footer-wordmark-glow" aria-hidden="true" />
        <div className="ref-footer-wordmark" aria-hidden="true">
          Dhushyandh
        </div>
      </div>

      {/* Footer Bottom Bar with Back to Top Button */}
      <div className="ref-footer-bottom ref-wrap">
        <span>© {new Date().getFullYear()} N. Dhushyandh. All rights reserved.</span>
        <div className="ref-footer-legal-links">
          <Link to="/privacy-policy" className="ref-legal-link">Privacy Policy</Link>
          <span className="ref-legal-dot" aria-hidden="true">·</span>
          <Link to="/terms-and-conditions" className="ref-legal-link">Terms & Conditions</Link>
        </div>
        <span>Designed with intent. Engineered with code.</span>
        <button
          type="button"
          className="ref-footer-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
