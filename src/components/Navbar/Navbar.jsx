import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/siteData';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const LOGO_WHITE = '/assets/images/pg-title-logo-white_preview_rev_1.png';
const LOGO_BLACK = '/assets/images/pg-title-logo-black_preview_rev_1.png';

export default function Navbar() {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? LOGO_WHITE : LOGO_BLACK;

  return (
    <nav className="navbar navbar-expand-lg pg-navbar fixed-top">
      <div className="container">
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="navbar-brand"
          role="button"
          aria-label="Go to top"
        >
          <img src={logo} alt="Project Gunita" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pgNavbar"
          aria-controls="pgNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="pgNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={600}
                  className="nav-link"
                  activeClass="active"
                  role="button"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
