
import React from 'react';
// Fix: Re-imported Link from 'react-router-dom' to resolve missing export error.
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import Testimonials from '../components/Testimonials.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { ChevronRight, Activity, Cpu, Globe, Shield, TrendingUp, ArrowUpRight, Zap, Coins, Landmark, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  const commandModules = [
    { label: "AI Intelligence", status: "Active", metric: "98.4%", icon: <Cpu size={18}/> },
    { label: "Global Logistics", status: "Syncing", metric: "14.2ms", icon: <Globe size={18}/> },
    { label: "Revenue Engine", status: "Scaling", metric: "+340%", icon: <TrendingUp size={18}/> },
    { label: "SOC Protocol", status: "Secured", metric: "0 Breaches", icon: <Shield size={18}/> }
  ];

  return (
    <main className="bg-slate-950">
      {/* 
          Global Command Ticker removed per request. 
          The Hero component now has primary focus below the navigation.
      */}
      
      {/* <div className="pt-12 md:pt-16"> */}
        <Hero />
      {/* </div> */}

      {/* 2. Tactical Command Grid Section */}
      <section id="ecosystem" className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center space-x-2 text-blue-500/60 mb-8 font-mono text-[9px] tracking-[0.4em] uppercase">
                  <Activity size={12} />
                  <span>Strategic Orchestration</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10">
                  Commanding The <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-300 to-blue-600">Future of Scale</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl font-medium">
                  RPtechhub engineers entire enterprise ecosystems. Our multi-disciplinary Command Nodes apply high-fidelity strategy to your IT infrastructure, operational efficiency, and global asset acquisitions.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {commandModules.map((mod, i) => (
                    <div key={i} className="p-8 bg-white/[0.03] border border-white/10 group hover:border-blue-500 transition-all cursor-default">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-blue-500 group-hover:scale-110 transition-transform">{mod.icon}</div>
                        <span className="text-[8px] font-black text-blue-500 uppercase tracking-tighter flex items-center px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">
                          {mod.status}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white mb-1 tracking-tight">{mod.metric}</div>
                      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{mod.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 border border-white/5 pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-blue-500/40" />
                <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-blue-500/40" />
                
                <div className="relative overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Enterprise Infrastructure" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-opacity duration-1000 group-hover:opacity-60"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  
                  <div className="relative z-30 text-center p-12">
                    <div className="text-[9px] font-mono text-blue-500 mb-4 opacity-50 uppercase tracking-[0.4em]">Integrated Intelligence</div>
                    <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">Strategic Node <br/> Alpha-One</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="px-4 py-2 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/70 bg-white/5">Sector: Global</div>
                      <div className="px-4 py-2 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/70 bg-white/5">Status: Synched</div>
                    </div>
                  </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Zero Friction Integration', 
                desc: 'Seamlessly merge our teams with your existing infrastructure through bespoke DevXOps protocols.',
                icon: <Zap className="text-blue-600" size={28} />
              },
              { 
                title: 'Data Sovereignty', 
                desc: 'Military-grade encryption and regional compliance for all global data-flow operations.',
                icon: <Shield className="text-blue-600" size={28} />
              },
              { 
                title: 'Performance Guarantees', 
                desc: 'SLA-backed metrics focused purely on exponential bottom-line expansion.',
                icon: <TrendingUp className="text-blue-600" size={28} />
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full p-12 bg-slate-50 border border-slate-100 hover:border-blue-500 transition-all duration-500 hover:bg-white hover:shadow-xl">
                   <div className="mb-8">{item.icon}</div>
                   <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-tight">{item.title}</h4>
                   <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{item.desc}</p>
                   <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                     Explore Protocol <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                   </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Financial Nexus Section (NEW) */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-slate-900/50 border border-white/10 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
            <Reveal>
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center space-x-3 text-blue-400 mb-6 font-mono text-[9px] tracking-[0.4em] uppercase">
                   <Landmark size={14} />
                   <span>Liquidity Engineering</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                  The Capital <br /> <span className="text-blue-500">Nexus Node</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                  Unlocking high-ticket business and professional loans through institutional-grade leveraging. We handle the complexity; you command the growth.
                </p>
                <Link to="/finance" className="inline-flex items-center space-x-4 px-12 py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white hover:text-slate-950 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
                  <span>Initialize Funding Protocol</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Business Loans", icon: <Briefcase size={20} /> },
                  { label: "Professional Funding", icon: <TrendingUp size={20} /> },
                  { label: "Mortgage Leveraging", icon: <Landmark size={20} /> },
                  { label: "Home Assets", icon: <Coins size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-blue-500 transition-all text-center">
                    <div className="text-blue-500 mb-4 mx-auto w-fit">{item.icon}</div>
                    <div className="text-[9px] font-black text-white uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* 5. Methodology Call-to-Action */}
      <section className="py-40 bg-slate-950 border-y border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(37,99,235,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-14">
              Ready to <span className="text-blue-500">Initialize?</span>
            </h3>
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-6 px-16 py-7 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:scale-105 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.2)]"
            >
              <span>Full Methodology Protocol</span>
              <ChevronRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <LeadGenSection />
    </main>
  );
};

export default Home;
