import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EventCard from '../../components/EventCard/EventCard';
import { events } from '../../data/siteData';
import './EventsSection.css';

export default function EventsSection() {
  return (
    <section id="events" className="pg-section events-section">
      <div className="container">
        <SectionTitle
          title="Recent Events and Activities"
          subtitle="Our latest initiatives in preserving history and promoting truth"
        />

        <div className="events-grid reveal-stagger">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
