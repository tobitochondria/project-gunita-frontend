import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { heroData } from '../../data/siteData';
import './HeroSection.css';

const LOGO_WHITE = '/assets/images/pg-title-logo-white_preview_rev_1.png';
const LOGO_BLACK = '/assets/images/pg-title-logo-black_preview_rev_1.png';

export default function HeroSection() {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? LOGO_WHITE : LOGO_BLACK;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <img src="/assets/images/hero-banner.svg" alt="" aria-hidden="true" />
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <img src={logo} alt="Project Gunita" className="hero-logo" />
        <h1 className="hero-tagline">{heroData.tagline}</h1>
        <p className="hero-subtitle">
          An academic research organization focused on countering historical distortion of Philippine contemporary history.
        </p>
        <div className="hero-cta">
          {heroData.ctaButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={btn.variant === 'primary' ? 'btn-pg-primary' : 'btn-pg-outline'}
              {...(btn.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        offset={-72}
        duration={600}
        className="hero-scroll-indicator"
        role="button"
        aria-label="Scroll to About section"
      >
        <i className="bi bi-chevron-double-down"></i>
      </Link>
    </section>
  );
}
