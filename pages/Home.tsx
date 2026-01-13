
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import Testimonials from '../components/Testimonials.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
// Added Zap to the imports
import { ChevronRight, Activity, Cpu, Globe, Shield, TrendingUp, ArrowUpRight, Zap } from 'lucide-react';

const Home: React.FC = () => {
  // Command center modules for the interactive section
  const commandModules = [
    { label: "AI Intelligence", status: "Active", metric: "98.4%", icon: <Cpu size={18}/> },
    { label: "Global Logistics", status: "Syncing", metric: "14.2ms", icon: <Globe size={18}/> },
    { label: "Revenue Engine", status: "Scaling", metric: "+340%", icon: <TrendingUp size={18}/> },
    { label: "SOC Protocol", status: "Secured", metric: "0 Breaches", icon: <Shield size={18}/> }
  ];

  return (
    <main className="bg-slate-950">
      {/* 1. Global Command Ticker */}
      <div className="pt-24 bg-slate-950 border-b border-white/5 overflow-hidden whitespace-nowrap py-3">
        <div className="flex animate-[text-shimmer_40s_linear_infinite] opacity-30 select-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-amber-500 mx-12">
              [SYSTEM_LOG: {Math.random().toString(16).slice(2, 8).toUpperCase()}] // UPTIME: 99.999% // AI_RAG_SYNC: OPTIMAL // DATA_SOVEREIGNTY: HARDENED // ROAS_TARGET: 14X // GLOBAL_REACH: EXPANDING //
            </span>
          ))}
        </div>
      </div>

      <Hero />

      {/* 2. Tactical Command Grid Section */}
      <section id="ecosystem" className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(245,158,11,0.1),transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center space-x-2 text-amber-500 mb-8 font-mono text-[10px] tracking-[0.6em] uppercase">
                  <Activity size={14} className="animate-pulse" />
                  <span>Strategic Orchestration</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10">
                  Commanding The <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-600">Future of Scale</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
                  RPtechhub engineers entire enterprise ecosystems. Our multi-disciplinary Command Nodes apply high-fidelity strategy to your IT infrastructure, operational efficiency, and global asset acquisitions.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {commandModules.map((mod, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/10 group hover:border-amber-500 transition-all cursor-crosshair">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-amber-500 group-hover:scale-125 transition-transform duration-500">{mod.icon}</div>
                        <span className="text-[8px] font-black text-green-500 uppercase tracking-tighter flex items-center bg-green-500/10 px-2 py-0.5 rounded-full">
                          <span className="w-1 h-1 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                          {mod.status}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white mb-1 tracking-tight">{mod.metric}</div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{mod.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative group">
                {/* Tactical Frame Elements */}
                <div className="absolute -inset-6 border border-white/5 pointer-events-none" />
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-amber-500" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-amber-500" />
                
                <div className="relative overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Enterprise Infrastructure" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-[3000ms]"
                  />
                  
                  {/* Digital HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/30 blur-md animate-[scan-line_6s_linear_infinite] z-20" />
                  
                  <div className="relative z-30 text-center p-12">
                    <div className="text-[10px] font-mono text-amber-500 mb-4 opacity-70 uppercase tracking-[0.5em]">Integrated Intelligence</div>
                    <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">Strategic Node <br/> Alpha-One</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="px-5 py-2.5 border border-white/20 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-xl bg-white/5">Sector: Global</div>
                      <div className="px-5 py-2.5 border border-white/20 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-xl bg-white/5">Status: Synched</div>
                    </div>
                  </div>

                  {/* Corner Coordinates */}
                  <div className="absolute bottom-6 left-6 text-[8px] font-mono text-slate-600 tracking-tighter uppercase">Lat: 51.5074° N // Long: 0.1278° W</div>
                  <div className="absolute top-6 right-6 text-[8px] font-mono text-slate-600 tracking-tighter uppercase">Log_v4.2.0_RP</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Services />

      {/* 3. The "Black Label" Protocol Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { 
                title: 'Zero Friction Integration', 
                desc: 'Seamlessly merge our teams with your existing infrastructure through bespoke DevXOps protocols.',
                icon: <Zap className="text-amber-600" size={32} />
              },
              { 
                title: 'Data Sovereignty', 
                desc: 'Military-grade encryption and regional compliance for all global data-flow operations.',
                icon: <Shield className="text-amber-600" size={32} />
              },
              { 
                title: 'Performance Guarantees', 
                desc: 'SLA-backed metrics focused purely on exponential bottom-line expansion.',
                icon: <TrendingUp className="text-amber-600" size={32} />
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full p-12 bg-slate-50 border border-slate-200 hover:border-amber-500 transition-all duration-500 hover:bg-white hover:shadow-2xl">
                   <div className="mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{item.icon}</div>
                   <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-6 leading-tight">{item.title}</h4>
                   <p className="text-slate-500 leading-relaxed mb-10 text-sm font-medium">{item.desc}</p>
                   <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors">
                     Explore Protocol <ArrowUpRight className="ml-2 w-4 h-4" />
                   </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* 4. Methodology Call-to-Action */}
      <section className="py-32 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(245,158,11,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-12">
              Ready to <span className="text-amber-500">Initialize?</span>
            </h3>
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-6 px-14 py-7 bg-amber-500 text-slate-950 text-sm font-black uppercase tracking-[0.4em] hover:bg-white hover:scale-105 transition-all shadow-[0_20px_60px_rgba(245,158,11,0.3)] group relative overflow-hidden"
            >
              <span className="relative z-10">Full Methodology Protocol</span>
              <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </Reveal>
        </div>
      </section>

      <LeadGenSection />
    </main>
  );
};

export default Home;
