import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const row1 = [
    { name: "Home", href: "/" },
    { name: "IT Services", href: "/it-services" },
    { name: "BPO Services", href: "/bpo-services" },
    { name: "Marketing", href: "/marketing" },
  ];

  const row2 = [
    { name: "Finance", href: "/finance" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const NavLink = ({ name, href }: { name: string; href: string }) => {
    const active = location.pathname === href;

    return (
      <Link
        to={href}
        className={`
          relative px-3 py-1 text-xs uppercase tracking-widest font-semibold transition-colors
          ${active ? "text-blue-500" : "text-slate-300 hover:text-blue-400"}
        `}
      >
        {name}
        {active && (
          <span className="absolute left-1/2 -bottom-1 w-6 h-[2px] bg-blue-500 -translate-x-1/2 rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[96px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo_rp_tech_hub.webp"
            alt="RP TECH HUB"
            className="h-16 md:h-18 w-auto transition drop-shadow-[0_0_14px_rgba(59,130,246,0.35)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.55)]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col items-center gap-2">
          <div className="flex justify-center gap-6">
            {row1.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex justify-center gap-6">
            {row2.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="
            hidden lg:inline-flex
            px-7 py-3 rounded-lg
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white text-xs font-semibold uppercase tracking-wider
            shadow-[0_8px_24px_rgba(59,130,246,0.35)]
            hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]
            transition-shadow
          "
        >
          Consultation
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10 px-6 py-8 space-y-5">
          {[...row1, ...row2].map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest font-semibold text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-4 rounded-lg bg-blue-600 text-white text-xs uppercase tracking-wider font-semibold"
          >
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
