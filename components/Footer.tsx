import React from "react";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
// Fix: Re-imported Link from 'react-router-dom' to ensure clean resolution of the component.
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col space-y-6 group">
              <div className="flex items-center justify-start">
                <img
                  src="/logo_rp_tech_hub_1.webp"
                  alt="RP TECH HUB"
                  className="
                              w-48 md:w-56
                              h-auto
                              transition-all duration-300
                              hover:scale-105
                              hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]
                            "
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              The world's premium multi-disciplinary enterprise agency
              ecosystem. Engineering growth through mathematical precision and
              elite strategy.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-white/5 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {[
                { name: "AI Engineering", path: "/it-services" },
                { name: "NexGen SOC", path: "/it-services" },
                { name: "Healthcare RCM", path: "/bpo-services" },
                { name: "Lean BPO", path: "/bpo-services" },
                { name: "ROI Marketing", path: "/marketing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-blue-500 text-sm font-bold transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">
              Executive
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About RPtechhub", path: "/about" },
                { name: "Leadership", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Strategy Deck", path: "/" },
                { name: "Careers", path: "/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-blue-500 text-sm font-bold transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">
              Global Reach
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-slate-500">
                <MapPin className="w-5 h-5 mt-1 text-blue-500 shrink-0" />
                <span className="text-sm font-bold leading-tight tracking-wide text-slate-400">
                  Enterprise Tower, Level 42 <br /> London, EC1A 1BB
                </span>
              </li>
              <li className="flex items-center space-x-4 text-slate-500">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm font-bold tracking-wide text-slate-400">
                  +44 (0) 20 8123 4567
                </span>
              </li>
              <li className="flex items-center space-x-4 text-slate-500">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm font-bold tracking-wide text-slate-400">
                  strategy@rptechhub.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-600">
            © {new Date().getFullYear()} RPtechhub Global Group. All Rights
            Reserved.
          </div>
          <div className="flex space-x-10 text-[10px] uppercase tracking-widest font-black text-slate-600">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Protocol
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Service Terms
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 blur-[120px]" />
    </footer>
  );
};

export default Footer;
