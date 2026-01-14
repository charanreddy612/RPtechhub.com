
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const InfinityLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-32 h-16 md:w-44 md:h-20"><defs><linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#60a5fa"></stop><stop offset="100%" stop-color="#1d4ed8"></stop></linearGradient></defs><g class="fill-blue-400"><rect x="5" y="38" width="4" height="4" opacity="0.4"></rect><rect x="12" y="28" width="3" height="3" opacity="0.6"></rect><rect x="10" y="48" width="4" height="4" opacity="0.5"></rect><rect x="18" y="32" width="4" height="4" opacity="0.8"></rect><rect x="22" y="52" width="3" height="3" opacity="0.3"></rect><rect x="30" y="40" width="5" height="5"></rect><rect x="38" y="32" width="4" height="4" opacity="0.7"></rect></g><path d="M45 40 C45 25 70 20 80 40 C90 60 115 65 115 40 C115 15 90 20 80 40 C70 60 45 55 45 40 Z" stroke="url(#nav-logo-grad)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]"></path><rect x="35" y="45" width="6" height="6" class="fill-blue-500"></rect><rect x="42" y="25" width="5" height="5" class="fill-blue-500" opacity="0.8"></rect></svg>
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
