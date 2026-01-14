
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const InfinityLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="10" width="2" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="8" y="15" width="2" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="2" y="18" width="2" height="2" fill="currentColor" opacity="0.3"/>
    <rect x="10" y="5" width="2" height="2" fill="currentColor" opacity="0.5"/>
    <rect x="12" y="22" width="2" height="2" fill="currentColor" opacity="0.7"/>
    <rect x="15" y="12" width="2" height="2" fill="currentColor" opacity="0.8"/>
    <path d="M30 20C30 26.6274 35.3726 32 42 32C48.6274 32 54 26.6274 54 20C54 13.3726 59.3726 8 66 8C72.6274 8 78 13.3726 78 20C78 26.6274 72.6274 32 66 32C59.3726 32 54 26.6274 54 20C54 13.3726 48.6274 8 42 8C35.3726 8 30 13.3726 30 20Z" 
          stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'BPO Services', href: '/bpo-services' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center justify-center transition-transform group-hover:scale-110 text-blue-500">
            <InfinityLogo className="w-12 h-10" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
            RP<span className="text-blue-500">techhub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                location.pathname === link.href ? 'text-blue-500' : 'text-slate-300 hover:text-blue-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-black rounded-sm hover:bg-blue-500 transition-all active:scale-95">
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 py-6 px-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest font-semibold text-slate-300"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-blue-600 text-white text-xs uppercase tracking-widest font-bold rounded-sm">
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
