import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
           <a 
             href="tel:0280054322" 
             className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-2xl shadow-primary/40 border border-white/20 backdrop-blur-sm"
           >
             <Zap className="w-5 h-5 fill-white" />
             Book a Job Now
           </a>
        </div>
      </div>
    </Router>
  );
}
