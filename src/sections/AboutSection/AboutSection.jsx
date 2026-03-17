import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { aboutData } from '../../data/siteData';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="pg-section about-section">
      <div className="container">
        <SectionTitle title={aboutData.title} />

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <div className="about-text reveal">
              {aboutData.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="reveal-stagger">
              {aboutData.stats.map((stat, i) => (
                <div className="about-stat" key={i}>
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
