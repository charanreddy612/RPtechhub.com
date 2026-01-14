import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "IT Services", href: "/it-services" },
    { name: "BPO Services", href: "/bpo-services" },
    { name: "Marketing", href: "/marketing" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
      transition-all duration-300 ease-out
      ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 h-22"
          : "bg-transparent h-28"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center">
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
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors
                ${
                  location.pathname === link.href
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-sm
            hover:bg-blue-500 transition-all shadow-lg active:scale-95"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/5 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 px-8 py-8 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold uppercase tracking-wider text-slate-300 hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-4 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
          >
            Start Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
