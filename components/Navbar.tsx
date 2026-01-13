
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <Rocket className="text-slate-950 w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
            RP<span className="text-amber-500">techhub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                location.pathname === link.href ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 bg-amber-500 text-slate-950 text-[10px] uppercase tracking-widest font-black rounded-sm hover:bg-amber-400 transition-all active:scale-95">
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
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-amber-500 text-slate-950 text-xs uppercase tracking-widest font-bold rounded-sm">
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
