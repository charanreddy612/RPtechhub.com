
import React from 'react';
import { Star, Quote, ShieldCheck, Globe, Zap, Cpu } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';
import Reveal from './Reveal.tsx';

// Representative "Partner" placeholders with premium SVGs
const PartnerLogos = [
  { name: "Apex Systems", icon: <ShieldCheck size={24} /> },
  { name: "Global Infra", icon: <Globe size={24} /> },
  { name: "Neural Dynamics", icon: <Cpu size={24} /> },
  { name: "Velocity Ventures", icon: <Zap size={24} /> },
  { name: "Sterling Group", icon: <ShieldCheck size={24} /> },
  { name: "Quantum Logic", icon: <Cpu size={24} /> }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <style>{`
        @keyframes glint-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(250%) skewX(-20deg); opacity: 0; }
        }
        .animate-glint-once {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
          pointer-events: none;
          z-index: 20;
        }
        .reveal-visible .animate-glint-once {
          animation: glint-sweep 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Partner Logo Grid (The Global Alliance) */}
        <Reveal>
          <div className="mb-32">
            <div className="text-center mb-12">
              <span className="text-blue-600 text-[10px] uppercase font-black tracking-[0.5em] mb-4 block">Institutional Alliance</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase italic">Strategic Partners & <span className="text-slate-400">Enterprise Clients</span></h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-slate-200">
              {PartnerLogos.map((partner, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center justify-center p-10 bg-white border border-slate-50 group hover:bg-slate-950 transition-all duration-500 cursor-default"
                >
                  <div className="text-slate-300 group-hover:text-blue-500 transition-colors duration-500 mb-4 scale-125">
                    {partner.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 2. Client Testimonials */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-blue-600 text-[10px] uppercase tracking-[0.3em] font-black mb-4">Executive Proof</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase italic">
              Global <span className="text-slate-400">Partner Intelligence</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.15}>
              <div className="bg-white p-10 border border-slate-200 rounded-sm hover:border-blue-500 transition-all duration-700 group flex flex-col h-full relative overflow-hidden transform hover:-translate-y-1">
                {/* One-time Glint Animation Triggered by Reveal Visibility */}
                <div className="animate-glint-once" />
                
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-blue-500 transition-all duration-500" />
                
                <div className="mb-6 flex items-center justify-between">
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity text-blue-600">
                    {t.logo}
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <Quote className="text-slate-100 w-12 h-12 absolute -mt-4 -ml-4 pointer-events-none group-hover:text-blue-50 transition-colors" />
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-8 italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="font-black text-slate-950 uppercase tracking-widest text-xs mb-1">
                    {t.name}
                  </div>
                  <div className="text-blue-600 text-[10px] uppercase font-bold tracking-widest">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
