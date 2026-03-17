import './ArchiveCard.css';

export default function ArchiveCard({ category }) {
  return (
    <div className="archive-card">
      <div className="archive-card-icon">
        <i className={`bi ${category.icon}`}></i>
      </div>
      <h3 className="archive-card-title">{category.title}</h3>
      <p className="archive-card-desc">{category.description}</p>
    </div>
  );
}
