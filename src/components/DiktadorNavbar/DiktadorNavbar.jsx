import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { diktadorNav } from '../../data/diktadorData';
import './DiktadorNavbar.css';

const LOGOTYPE = '/assets/images/diktador/diktador-logotype.png';

export default function DiktadorNavbar() {
  return (
    <nav className="navbar navbar-expand-lg dk-navbar fixed-top">
      <div className="container">
        <Link
          to="dk-hero"
          smooth={true}
          duration={600}
          className="navbar-brand"
          role="button"
          aria-label="Go to top"
        >
          <img src={LOGOTYPE} alt="Diktador!" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dkNavbar"
          aria-controls="dkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="dkNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {diktadorNav.map((link) => (
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
              <RouterLink to="/" className="dk-back-link">
                <img src="/assets/images/pg-logo-black.svg" alt="" className="dk-back-link-logo" aria-hidden="true" />
                Project Gunita
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
