import { contactData, socialLinks } from '../../data/siteData';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="pg-section contact-section">
      <div className="container">
        <h2 className="contact-heading reveal">{contactData.heading}</h2>

        <div className="contact-info reveal">
          <p className="contact-partnership">{contactData.partnershipText}</p>
          <a
            href={`mailto:${contactData.partnershipEmail}`}
            className="contact-email"
          >
            <i className="bi bi-envelope-fill"></i>
            {contactData.partnershipEmail}
          </a>

          <h3 className="contact-social-heading">Social Media Pages</h3>
          <div className="contact-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi ${link.icon}`}></i>
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
