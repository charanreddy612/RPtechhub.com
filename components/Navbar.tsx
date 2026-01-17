import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// Fix: Re-imported Link and useLocation from 'react-router-dom' to ensure proper resolution.
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "IT Services", href: "/it-services" },
    { name: "BPO Services", href: "/bpo-services" },
    { name: "Marketing", href: "/marketing" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Finance", href: "/finance" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <img
            src="/logo_rp_tech_hub.webp"
            alt="RP Tech Hub"
            className={`
              transition-all duration-300 ease-out
              ${isScrolled ? "h-12 md:h-16" : "h-28 md:h-36"}
              group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.45)]
            `}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all ${
                  location.pathname === link.href
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-blue-600 text-white text-[10px] uppercase tracking-[0.3em] font-black rounded-sm hover:bg-blue-500 transition-all shadow-[0_15px_40px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 py-10 px-8 space-y-6 shadow-2xl animate-glitch max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg uppercase tracking-[0.3em] font-black text-slate-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-5 bg-blue-600 text-white text-[10px] uppercase tracking-[0.4em] font-black rounded-sm"
          >
            Start Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
