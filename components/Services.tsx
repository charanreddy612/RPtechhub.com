
import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants.tsx';
import { ChevronRight, Activity, Zap, Cpu, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.tsx';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'IT', 'BPO', 'Marketing', 'RealEstate', 'Finance'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="solutions" 
      onMouseMove={handleMouseMove}
      className="py-32 bg-slate-50 relative overflow-hidden transition-colors duration-1000"
    >
      {/* 1. Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Parallax Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Interactive Radial Glow */}
        <div 
          className="absolute w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] transition-all duration-300 ease-out"
          style={{ 
            left: mousePos.x - 400, 
            top: mousePos.y - 400,
            transform: 'translate3d(0,0,0)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-12 md:space-y-0">
          <Reveal>
            <div className="relative">
              <div className="text-blue-600 text-[10px] uppercase tracking-[0.6em] font-black mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-blue-500 mr-4" />
                Strategic Deployment
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.8] uppercase italic">
                Multi-Disciplinary <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-900 to-blue-400 animate-text-shimmer bg-[length:200%_auto] drop-shadow-sm">
                  Enterprise Solutions
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} width="fit-content">
            <div className="flex flex-wrap gap-3 p-1.5 bg-slate-200/50 backdrop-blur-md rounded-full border border-slate-300/50 shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-black rounded-full transition-all duration-500 ${
                    activeCategory === cat 
                      ? 'bg-slate-950 text-white shadow-2xl scale-105' 
                      : 'text-slate-500 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => (
            <Reveal key={`${service.id}-${activeCategory}`} delay={index * 0.05}>
              <div className="group relative h-full bg-white border border-slate-200 rounded-sm transition-all duration-700 hover:border-blue-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
                
                {/* Individual Card Hover Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Card Corner Tech Decals */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-transparent group-hover:border-blue-500 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-blue-500/30 transition-colors duration-500 pointer-events-none" />
                
                <div className="p-12 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-100 group-hover:border-blue-400">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-1.5 mb-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Sector: {service.category}</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-300 font-bold tracking-widest">
                        NODE_{Math.random().toString(16).slice(2, 6).toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-slate-950 mb-6 tracking-tighter uppercase group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium opacity-90">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-12">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 group-hover:text-slate-600 transition-all duration-500">
                        <div className="w-5 h-[1px] bg-blue-500/20 mr-4 group-hover:w-8 group-hover:bg-blue-500 transition-all" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-10 border-t border-slate-100 flex items-center justify-between">
                    <button className="flex items-center text-[11px] uppercase tracking-[0.3em] font-black text-slate-950 hover:text-blue-600 transition-all group/btn">
                      Protocol Specs
                      <ChevronRight className="ml-3 w-5 h-5 transition-transform group-hover/btn:translate-x-3" />
                    </button>
                    <Activity size={16} className="text-slate-100 group-hover:text-blue-500/40 transition-colors animate-pulse" />
                  </div>
                </div>

                {/* Animated Bottom Scan Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-700 to-sky-400 w-0 group-hover:w-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tactical Footer: Live Ecosystem Telemetry */}
        <Reveal delay={0.4}>
          <div className="mt-24 flex flex-col lg:flex-row items-stretch justify-between bg-slate-950 text-white rounded-sm border border-white/5 shadow-2xl overflow-hidden">
            <div className="flex items-center space-x-8 p-10 bg-slate-900/50 border-r border-white/5">
              <div className="p-4 bg-blue-600 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] group hover:scale-110 transition-transform cursor-pointer">
                <Zap size={28} className="text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Ecosystem Performance</div>
                <div className="text-[10px] text-slate-500 font-mono tracking-widest flex items-center">
                  <span className="text-blue-500 mr-2">●</span> LATENCY: 3.8ms // SYNC: OPTIMAL // UPTIME: 99.999%
                </div>
              </div>
            </div>

            <div className="flex flex-1 divide-x divide-white/5">
              {[
                { label: "Target ROAS", val: "14.2x", icon: <Activity size={12}/> },
                { label: "AI Efficiency", val: "+340%", icon: <Cpu size={12}/> },
                { label: "Data Mesh", val: "Global", icon: <Zap size={12}/> }
              ].map((stat, i) => (
                <div key={i} className="flex-1 p-10 flex flex-col justify-center hover:bg-white/5 transition-colors group cursor-default">
                  <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-slate-500 font-black mb-2">
                    <span className="text-blue-500 group-hover:animate-spin-slow">{stat.icon}</span>
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors italic">{stat.val}</div>
                </div>
              ))}
            </div>
            
            <div className="p-10 flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer group">
              <span className="text-white text-[11px] font-black uppercase tracking-[0.4em] mr-4">Initialize Build</span>
              <ArrowRight size={20} className="text-white group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
