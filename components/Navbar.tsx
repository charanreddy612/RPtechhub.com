
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const InfinityLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pixelized/Disintegrating Left Side */}
    <g className="text-blue-400">
      <rect x="10" y="20" width="4" height="4" fill="currentColor" />
      <rect x="5" y="26" width="3" height="3" fill="currentColor" opacity="0.6" />
      <rect x="12" y="32" width="4" height="4" fill="currentColor" />
      <rect x="18" y="14" width="3" height="3" fill="currentColor" opacity="0.8" />
      <rect x="2" y="15" width="3" height="3" fill="currentColor" opacity="0.4" />
      <rect x="8" y="8" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="15" y="42" width="4" height="4" fill="currentColor" />
      <rect x="22" y="48" width="3" height="3" fill="currentColor" opacity="0.7" />
      <rect x="0" y="35" width="2" height="2" fill="currentColor" opacity="0.3" />
    </g>
    
    {/* The Infinity Path - Transitioning from Pixels to Solid */}
    <path 
      d="M30 45C30 45 45 50 60 30C75 10 90 10 105 10C120 10 120 50 105 50C90 50 75 50 60 30C45 10 30 15 30 15" 
      stroke="currentColor" 
      strokeWidth="7" 
      strokeLinecap="round"
      className="text-blue-600"
    />
    
    {/* Additional Pixels along the transition */}
    <rect x="25" y="40" width="5" height="5" fill="currentColor" className="text-blue-500" />
    <rect x="22" y="18" width="4" height="4" fill="currentColor" className="text-blue-500" />
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
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="flex items-center justify-center transition-transform group-hover:scale-110">
            <InfinityLogo className="w-20 h-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic leading-none">
              RP<span className="text-blue-500">techhub</span>
            </span>
            <span className="text-[7px] font-bold text-blue-400 uppercase tracking-[0.3em] mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
              Innovation Meets Execution
            </span>
          </div>
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
          <Link to="/contact" className="ml-4 px-8 py-3 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-black rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 py-8 px-8 space-y-6 shadow-2xl animate-glitch">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-[0.2em] font-black text-slate-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-5 bg-blue-600 text-white text-xs uppercase tracking-[0.3em] font-black rounded-sm">
            Start Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
