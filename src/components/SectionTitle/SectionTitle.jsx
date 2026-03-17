import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="title-underline"></div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
