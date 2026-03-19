import DiktadorNavbar from '../../components/DiktadorNavbar/DiktadorNavbar';
import DiktadorHero from '../../sections/DiktadorHero/DiktadorHero';
import DiktadorAbout from '../../sections/DiktadorAbout/DiktadorAbout';
import DiktadorCards from '../../sections/DiktadorCards/DiktadorCards';
import DiktadorEvent from '../../sections/DiktadorEvent/DiktadorEvent';
import useScrollReveal from '../../hooks/useScrollReveal';
import './DiktadorPage.css';

export default function DiktadorPage() {
  useScrollReveal();

  return (
    <>
      <DiktadorNavbar />
      <main className="dk-page">
        <DiktadorHero />
        <DiktadorAbout />
        <DiktadorCards />
        <DiktadorEvent />
      </main>
      <footer className="dk-footer">
        <div className="container text-center">
          <p className="dk-footer-text">
            <strong>Diktador!</strong> is a collaboration between{' '}
            <a href="/" className="dk-footer-link">Project Gunita</a>{' '}
            and the Concerned Artists of the Philippines.
          </p>
          <p className="dk-footer-copyright">
            &copy; {new Date().getFullYear()} Project Gunita. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
