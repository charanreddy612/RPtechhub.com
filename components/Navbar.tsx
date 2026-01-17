import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = [
    { name: "IT Services", href: "/it-services" },
    { name: "BPO Services", href: "/bpo-services" },
    { name: "Marketing", href: "/marketing" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Finance", href: "/finance" },
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo_rp_tech_hub.webp"
              alt="RP TECH HUB"
              className="h-20 md:h-24 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-between ml-12">
            {/* Nav Links (2 rows) */}
            <div className="flex flex-col gap-4">
              {/* Services */}
              <div className="flex items-center gap-8">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                      location.pathname === link.href
                        ? "text-blue-500"
                        : "text-slate-300 hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div className="flex items-center gap-8">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                      location.pathname === link.href
                        ? "text-blue-500"
                        : "text-slate-400 hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-10 px-8 py-4 bg-blue-600 text-white text-sm font-semibold uppercase tracking-wider rounded-sm
              hover:bg-blue-500 transition-all shadow-lg active:scale-95"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10 px-8 py-8 space-y-6">
          {[...serviceLinks, ...companyLinks].map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold uppercase tracking-wider text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-4 bg-blue-600 text-white text-sm font-semibold uppercase tracking-wider rounded-sm"
          >
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
