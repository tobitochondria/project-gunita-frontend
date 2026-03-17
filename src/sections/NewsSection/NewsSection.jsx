import { useState, useMemo } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import NewsCard from '../../components/NewsCard/NewsCard';
import { newsArticles } from '../../data/siteData';
import './NewsSection.css';

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = useMemo(() => {
    const cats = [...new Set(newsArticles.map((a) => a.category))];
    return ['All', ...cats];
  }, []);

  const filtered = activeTab === 'All'
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeTab);

  return (
    <section id="news" className="pg-section news-section">
      <div className="container">
        <SectionTitle
          title="News"
          subtitle="Media coverage and features about Project Gunita"
        />

        <div className="news-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`news-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filtered.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
