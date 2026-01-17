
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal.tsx';
import AnimatedCounter from './AnimatedCounter.tsx';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Client ROAS', end: 14.2, decimals: 1, suffix: 'x', delay: 0 },
    { label: 'Uptime SLA', end: 99.99, decimals: 2, suffix: '%', delay: 0.1 },
    { label: 'Global Assets', end: 2.4, decimals: 1, prefix: '$', suffix: 'B+', delay: 0.2 },
    { label: 'AI Efficiency', end: 340, decimals: 0, prefix: '+', suffix: '%', delay: 0.3 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Morphing Background Orbs */}
      <div className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] animate-orb-1 mix-blend-screen opacity-60" />
      <div className="absolute bottom-[5%] -right-[5%] w-[700px] h-[700px] bg-sky-500/5 blur-[100px] animate-orb-2 mix-blend-screen opacity-40" />
      <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] animate-orb-3 opacity-30" />

      <style>{`
        @keyframes orb-morph {
          0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
          33% { border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; }
          66% { border-radius: 45% 55% 35% 65% / 55% 45% 55% 45%; }
          100% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
        }
        @keyframes orb-drift-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(4%, 6%) rotate(4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes orb-drift-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5%, 8%) rotate(-6deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes orb-drift-3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, -10%) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-orb-1 {
          animation: orb-morph 18s ease-in-out infinite, orb-drift-1 25s ease-in-out infinite;
        }
        .animate-orb-2 {
          animation: orb-morph 22s ease-in-out infinite reverse, orb-drift-2 30s ease-in-out infinite;
        }
        .animate-orb-3 {
          animation: orb-drift-3 20s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-[0.25em] font-black mb-10">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
              Enterprise Grade Excellence
            </span>
            <div className="w-px h-3 bg-white/10 mx-2" />
            <span className="text-slate-400">Strategic AI Integration</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85] max-w-5xl mx-auto">
            <span className="block mb-4 text-slate-200">Building Scalable Enterprises</span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-300 to-blue-600 uppercase drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              Through Smart Technology
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Where mathematical precision meets exponential growth. <br className="hidden md:block" />
            We orchestrate elite solutions across IT, BPO, Marketing, and Real Estate.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white text-xs uppercase tracking-[0.2em] font-black rounded-sm hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.2)] active:scale-95">
              Explore Ecosystem
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white text-xs uppercase tracking-[0.2em] font-black rounded-sm hover:bg-white/5 transition-all flex items-center justify-center active:scale-95">
              Strategy Deck
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/5 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={0.5 + (i * 0.05)}>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-black text-blue-500 mb-2 tracking-tight">
                  <AnimatedCounter 
                    end={stat.end} 
                    decimals={stat.decimals} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    delay={stat.delay}
                  />
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-500">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
    </section>
  );
};

export default Hero;
