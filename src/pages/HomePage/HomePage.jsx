import HeroSection from '../../sections/HeroSection/HeroSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import NewsSection from '../../sections/NewsSection/NewsSection';
import ArchivesSection from '../../sections/ArchivesSection/ArchivesSection';
import EventsSection from '../../sections/EventsSection/EventsSection';
import ContactSection from '../../sections/ContactSection/ContactSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import './HomePage.css';

export default function HomePage() {
  useScrollReveal();

  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ArchivesSection />
      <NewsSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
