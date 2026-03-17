import './EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <span className="event-card-date">
        <i className="bi bi-calendar-event me-1"></i>
        {event.date}
      </span>
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-desc">{event.description}</p>
    </div>
  );
}
