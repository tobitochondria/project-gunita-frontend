import './ArchiveCard.css';

export default function ArchiveCard({ category }) {
  return (
    <a
      href={category.link}
      className="archive-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Browse ${category.title}`}
    >
      <div className="archive-card-img-wrap">
        <img
          src={category.image}
          alt={category.title}
          className="archive-card-img"
          loading="lazy"
        />
        <div className="archive-card-overlay">
          <span className="archive-card-browse">
            Browse <i className="bi bi-arrow-up-right"></i>
          </span>
        </div>
      </div>
      <div className="archive-card-body">
        <h3 className="archive-card-title">{category.title}</h3>
        <p className="archive-card-desc">{category.description}</p>
      </div>
    </a>
  );
}
