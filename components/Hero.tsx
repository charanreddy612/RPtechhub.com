
import React, { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal.tsx';
import AnimatedCounter from './AnimatedCounter.tsx';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Client ROAS', end: 14.2, decimals: 1, suffix: 'x', delay: 0 },
    { label: 'Uptime SLA', end: 99.99, decimals: 2, suffix: '%', delay: 0.2 },
    { label: 'Global Assets', end: 2.4, decimals: 1, prefix: '$', suffix: 'B+', delay: 0.4 },
    { label: 'AI Efficiency', end: 340, decimals: 0, prefix: '+', suffix: '%', delay: 0.6 }
  ];

  // Simulated background data nodes for "aliveness"
  const metadataElements = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      text: `0x${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
      left: `${Math.random() * 90}%`,
      top: `${Math.random() * 90}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 10}s`
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Laser Scan Line */}
      <div className="scan-line" />

      {/* Floating Metadata Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {metadataElements.map((meta) => (
          <div 
            key={meta.id}
            className="floating-metadata opacity-20"
            style={{ 
              left: meta.left, 
              top: meta.top, 
              animationDelay: meta.delay,
              animationDuration: meta.duration 
            }}
          >
            {meta.text}
          </div>
        ))}
      </div>

      {/* Morphing Orbs Background */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-amber-600/10 morphing-orb" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 morphing-orb" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 morphing-orb" style={{ animationDelay: '-10s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <Reveal delay={0.2}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black mb-8 animate-pulse">
            <span className="flex items-center">
              <span className="w-1 h-1 rounded-full bg-amber-500 mr-2 animate-ping" />
              Enterprise Grade Excellence
            </span>
            <div className="w-px h-2 bg-amber-500/30 mx-1" />
            <span>Strategic AI Integration</span>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.85] max-w-5xl mx-auto">
            <span className="block mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">THE BLACK LABEL</span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-600 uppercase animate-text-shimmer drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              ENTERPRISE ECOSYSTEM
              {/* Secondary Layer for added depth */}
              <span className="absolute inset-0 text-amber-500/10 blur-2xl -z-10 select-none">ENTERPRISE ECOSYSTEM</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Where mathematical precision meets exponential growth. <br className="hidden md:block" />
            We orchestrate elite solutions across IT, BPO, Marketing, and Real Estate.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-slate-950 text-sm uppercase tracking-widest font-black rounded-sm hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(245,158,11,0.3)] group relative overflow-hidden">
              <span className="relative z-10">Explore Ecosystem</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white text-sm uppercase tracking-widest font-black rounded-sm hover:bg-white/5 transition-all flex items-center justify-center group">
              Strategy Deck
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        {/* Dynamic Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={1 + (i * 0.1)}>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-black text-amber-500 mb-1 tracking-tight group-hover:scale-110 transition-transform cursor-default">
                  <AnimatedCounter 
                    end={stat.end} 
                    decimals={stat.decimals} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    delay={stat.delay}
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-amber-200/50 transition-colors">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </section>
  );
};

export default Hero;
