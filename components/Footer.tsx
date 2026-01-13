
import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Rocket className="text-slate-950 w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                RP<span className="text-amber-500">techhub</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The world's premium multi-disciplinary enterprise agency ecosystem. 
              Engineering growth through mathematical precision and elite strategy.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { name: 'AI Engineering', path: '/it-services' },
                { name: 'NexGen SOC', path: '/it-services' },
                { name: 'Healthcare RCM', path: '/bpo-services' },
                { name: 'Lean BPO', path: '/bpo-services' },
                { name: 'ROI Marketing', path: '/marketing' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-amber-500 text-sm font-semibold transition-colors uppercase tracking-widest">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-8">Executive</h4>
            <ul className="space-y-4">
              {[
                { name: 'About RPtechhub', path: '/about' },
                { name: 'Leadership', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Strategy Deck', path: '/' },
                { name: 'Careers', path: '/' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-amber-500 text-sm font-semibold transition-colors uppercase tracking-widest">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-8">Global Reach</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold leading-tight tracking-wide">Enterprise Tower, Level 42 <br /> London, EC1A 1BB</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold tracking-wide">+44 (0) 20 8123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold tracking-wide">strategy@rptechhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
            © {new Date().getFullYear()} RPtechhub Global. All Rights Reserved.
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold text-slate-600">
            <Link to="/" className="hover:text-white transition-colors">Privacy Protocol</Link>
            <Link to="/" className="hover:text-white transition-colors">Service Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">GDPR / Compliance</Link>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 blur-[120px]" />
    </footer>
  );
};

export default Footer;
