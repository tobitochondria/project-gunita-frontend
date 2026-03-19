import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DiktadorPage from './pages/DiktadorPage/DiktadorPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route
        path="/diktador"
        element={
          <>
            <ScrollToTop />
            <DiktadorPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
