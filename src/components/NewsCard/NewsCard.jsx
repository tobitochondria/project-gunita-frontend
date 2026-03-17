import './NewsCard.css';

export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      <div className="news-card-img">
        <i className="bi bi-newspaper"></i>
      </div>
      <div className="news-card-body">
        <span className="news-card-source">{article.source}</span>
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-excerpt">{article.excerpt}</p>
        <a
          href={article.readUrl}
          className="news-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
