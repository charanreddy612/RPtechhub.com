
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import AIStrategist from './components/AIStrategist.tsx';
import Footer from './components/Footer.tsx';
import { SCHEMA_ORG } from './constants.tsx';

// Lazy-style imports (direct imports for now)
import Home from './pages/Home.tsx';
import ITServices from './pages/ITServices.tsx';
import BPOServices from './pages/BPOServices.tsx';
import MarketingPage from './pages/Marketing.tsx';
import RealEstatePage from './pages/RealEstate.tsx';
import FinancialPage from './pages/FinancialServices.tsx';
import AboutPage from './pages/About.tsx';
import ContactPage from './pages/Contact.tsx';

export default function App() {
  useEffect(() => {
    // Add Schema Markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(SCHEMA_ORG);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {/* Main Content: Routes are now direct children to ensure initial rendering visibility */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/bpo-services" element={<BPOServices />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/finance" element={<FinancialPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <AIStrategist />
      </div>
    </Router>
  );
}
