import { useTheme } from '../../context/ThemeContext';
import { socialLinks, footerData } from '../../data/siteData';
import './Footer.css';

const LOGO_WHITE = '/assets/images/pg-title-logo-white_preview_rev_1.png';
const LOGO_BLACK = '/assets/images/pg-title-logo-black_preview_rev_1.png';

export default function Footer() {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? LOGO_WHITE : LOGO_BLACK;

  return (
    <footer className="pg-footer">
      <div className="container text-center">
        <div className="pg-footer-logo mb-3">
          <img src={logo} alt="Project Gunita" />
        </div>

        <div className="pg-footer-social">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              title={link.platform}
            >
              <i className={`bi ${link.icon}`}></i>
            </a>
          ))}
        </div>

        <div className="pg-footer-links">
          {footerData.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <p className="pg-footer-copyright">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
