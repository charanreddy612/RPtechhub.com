
import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfinityLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    
    <g className="fill-blue-400">
      <rect x="5" y="38" width="4" height="4" opacity="0.4" />
      <rect x="12" y="28" width="3" height="3" opacity="0.6" />
      <rect x="10" y="48" width="4" height="4" opacity="0.5" />
      <rect x="30" y="40" width="5" height="5" />
    </g>

    <path 
      d="M45 40 C45 25 70 20 80 40 C90 60 115 65 115 40 C115 15 90 20 80 40 C70 60 45 55 45 40 Z" 
      stroke="url(#footer-logo-grad)" 
      strokeWidth="11" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col space-y-6 group">
              <div className="flex items-center justify-start">
                <InfinityLogo className="w-32 h-16" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
                  RP<span className="text-blue-500">techhub</span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2">
                  Established 2018
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              The world's premium multi-disciplinary enterprise agency ecosystem. 
              Engineering growth through mathematical precision and elite strategy.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-white/5 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { name: 'AI Engineering', path: '/it-services' },
                { name: 'NexGen SOC', path: '/it-services' },
                { name: 'Healthcare RCM', path: '/bpo-services' },
                { name: 'Lean BPO', path: '/bpo-services' },
                { name: 'ROI Marketing', path: '/marketing' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-500 text-sm font-bold transition-colors uppercase tracking-widest">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">Executive</h4>
            <ul className="space-y-4">
              {[
                { name: 'About RPtechhub', path: '/about' },
                { name: 'Leadership', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Strategy Deck', path: '/' },
                { name: 'Careers', path: '/' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-500 text-sm font-bold transition-colors uppercase tracking-widest">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-white mb-10">Global Reach</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-slate-500">
                <MapPin className="w-5 h-5 mt-1 text-blue-500 shrink-0" />
                <span className="text-sm font-bold leading-tight tracking-wide text-slate-400">Enterprise Tower, Level 42 <br /> London, EC1A 1BB</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-500">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm font-bold tracking-wide text-slate-400">+44 (0) 20 8123 4567</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-500">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm font-bold tracking-wide text-slate-400">strategy@rptechhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-600">
            © {new Date().getFullYear()} RPtechhub Global Group. All Rights Reserved.
          </div>
          <div className="flex space-x-10 text-[10px] uppercase tracking-widest font-black text-slate-600">
            <Link to="/" className="hover:text-white transition-colors">Privacy Protocol</Link>
            <Link to="/" className="hover:text-white transition-colors">Service Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 blur-[120px]" />
    </footer>
  );
};

export default Footer;
