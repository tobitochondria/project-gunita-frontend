import HeroSection from '../../sections/HeroSection/HeroSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import NewsSection from '../../sections/NewsSection/NewsSection';
import ArchivesSection from '../../sections/ArchivesSection/ArchivesSection';
import EventsSection from '../../sections/EventsSection/EventsSection';
import ContactSection from '../../sections/ContactSection/ContactSection';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ArchivesSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
