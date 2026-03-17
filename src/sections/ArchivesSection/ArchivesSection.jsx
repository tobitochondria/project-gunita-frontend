import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ArchiveCard from '../../components/ArchiveCard/ArchiveCard';
import { archiveCategories } from '../../data/siteData';
import './ArchivesSection.css';

export default function ArchivesSection() {
  return (
    <section id="archives" className="pg-section archives-section">
      <div className="container">
        <SectionTitle
          title="Digital Archives"
          subtitle="Explore our collection of digitized materials from the Martial Law era"
        />

        <div className="archives-grid reveal-stagger">
          {archiveCategories.map((category) => (
            <ArchiveCard key={category.id} category={category} />
          ))}
        </div>

        <div className="archives-cta reveal">
          <a
            href="https://drive.google.com/drive/folders/1WGzCtbbBJZkAjWsTxWkETp7FKLD1EvAj?usp=sharing"
            className="btn-pg-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-folder2-open me-2"></i>
            Browse Full Archives
          </a>
        </div>
      </div>
    </section>
  );
}
