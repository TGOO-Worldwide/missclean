import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Workshops } from './pages/Workshops';
import { Business } from './pages/Business';
import { Residential } from './pages/Residential';
import { Unique } from './pages/Unique';
import { Contact } from './pages/Contact';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/formacoes" element={<Workshops />} />
              <Route path="/empresas" element={<Business />} />
              <Route path="/residencias" element={<Residential />} />
              <Route path="/unico" element={<Unique />} />
              <Route path="/contactos" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
