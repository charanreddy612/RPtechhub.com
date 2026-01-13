
import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { 
  Shield, 
  Target, 
  Cpu, 
  Globe, 
  Zap, 
  TrendingUp, 
  Database, 
  Lock, 
  Briefcase,
  ChevronRight,
  Activity,
  Layers
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const commandments = [
    { 
      title: "The Mathematical Absolute", 
      desc: "We reject ambiguity. Every strategic recommendation is backed by multi-variate data models and predictive simulations.",
      icon: <Target className="text-amber-500" size={24} />
    },
    { 
      title: "Sovereign Integration", 
      desc: "Technology is only as good as its security. We prioritize data sovereignty and zero-trust architecture in every deployment.",
      icon: <Lock className="text-amber-500" size={24} />
    },
    { 
      title: "Exponential Scale", 
      desc: "We build for the future. Our systems are engineered to handle 100x growth without architectural redesign.",
      icon: <TrendingUp className="text-amber-500" size={24} />
    },
    { 
      title: "Cross-Sector Synergy", 
      desc: "Our unique advantage lies at the intersection of digital intelligence and physical asset management.",
      icon: <Layers className="text-amber-500" size={24} />
    }
  ];

  const milestones = [
    { year: "2018", event: "Genesis: Foundation of the Black Label Protocol in London." },
    { year: "2020", event: "Expansion: Integration of AI RAG systems into our BPO healthcare sector." },
    { year: "2022", event: "Scale: $1.2B in strategic industrial land corridors secured for partners." },
    { year: "2024", event: "Intelligence: Launch of the RPtechhub Autonomous SOC & Growth Lab." }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Page Hero */}
      <PageHero 
        category="Corporate Identity" 
        title="The Black Label Strategic Protocol" 
        subtitle="Engineering high-impact enterprise solutions through mathematical precision and elite multi-disciplinary synergy." 
      />

      {/* 2. The Genesis Dossier */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.4em] mb-6">Strategic Genesis</h2>
                <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.9] mb-8">
                  Engineering <br /> <span className="text-slate-400">Certainty</span>
                </h3>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    RPtechhub was founded on a singular realization: <span className="text-slate-950 font-bold">Traditional consulting is dead.</span> In an era of high-velocity data, "advice" is no longer sufficient. Enterprise growth requires execution-grade engineering.
                  </p>
                  <p>
                    What began as an elite IT security firm in London has evolved into a global multi-disciplinary powerhouse. We bridge the critical gap between digital infrastructure, operational efficiency, and tangible physical assets.
                  </p>
                </div>
                <div className="flex items-center space-x-8 mt-12 pt-12 border-t border-slate-100">
                  <div>
                    <div className="text-3xl font-black text-slate-950 tracking-tight">24/7</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operational Command</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div>
                    <div className="text-3xl font-black text-slate-950 tracking-tight">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Data Sovereignty</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-950 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" 
                  alt="Boardroom Strategy" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 p-8 bg-amber-500 text-slate-950">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1">Status Report</div>
                  <div className="text-lg font-black uppercase italic tracking-tighter">System Initialized</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. The 4-Pillar Synergy (Moving Element) */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-24">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Structural Integrity</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                The Multi-Sector <span className="text-amber-500">Nexus</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {['IT Intelligence', 'Operational BPO', 'Growth Marketing', 'Strategic Land'].map((pillar, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-12 bg-white/5 border border-white/10 group hover:bg-amber-500 transition-all duration-500 relative overflow-hidden h-80 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-500 group-hover:text-slate-900 transition-colors">0x0{i + 1}_LOG</div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter group-hover:text-slate-950 transition-colors">{pillar}</h4>
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Activity size={60} className="text-slate-950/20" />
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-slate-900 leading-relaxed transition-colors">
                    Seamlessly interconnected data streams that optimize your entire enterprise ecosystem.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Executive Commandments */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <Reveal>
                <h2 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic mb-8">
                  Core <br /> <span className="text-slate-400">Commandments</span>
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-8" />
                <p className="text-slate-500 leading-relaxed mb-10">
                  These are the immutable laws that govern every action within the RPtechhub ecosystem. We do not negotiate on quality, security, or results.
                </p>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-sm">
                  <div className="flex items-center space-x-3 text-slate-950 mb-4">
                    <Shield className="text-amber-500" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Compliance Ready</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-loose">
                    ISO 27001 // SOC2 TYPE II // GDPR // HIPAA COMPLIANT
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {commandments.map((cmd, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="space-y-4 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      {cmd.icon}
                    </div>
                    <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">{cmd.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{cmd.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Historical Milestones (The Roadmap) */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic">Institutional <span className="text-slate-400">Velocity</span></h2>
            </div>
          </Reveal>
          
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-12 group">
                  <div className="text-5xl font-black text-slate-200 group-hover:text-amber-500 transition-colors duration-500 tracking-tighter">{m.year}</div>
                  <div className="h-px flex-grow bg-slate-200 group-hover:bg-amber-200 transition-colors hidden md:block" />
                  <div className="text-lg font-bold text-slate-600 group-hover:text-slate-950 transition-colors max-w-xl">
                    {m.event}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Global Command Nodes */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="p-12 bg-slate-950 text-white rounded-sm relative">
                <div className="absolute top-0 right-0 p-8">
                  <Globe className="text-amber-500/20 w-32 h-32 animate-[spin_20s_linear_infinite]" />
                </div>
                <h3 className="text-3xl font-black mb-10 tracking-tighter uppercase italic">Global <br /> Operations</h3>
                <div className="space-y-8 relative z-10">
                  {[
                    { city: "London", region: "European HQ", status: "Online" },
                    { city: "New York", region: "Americas Node", status: "Online" },
                    { city: "Singapore", region: "APAC Hub", status: "Online" },
                    { city: "Dubai", region: "MENA Strategic", status: "Ready" }
                  ].map((loc, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <div>
                        <div className="text-lg font-black uppercase tracking-tight">{loc.city}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{loc.region}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{loc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                  Localized Strategy. <br /> <span className="text-slate-400">Global Execution.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Our network of Command Nodes allows us to provide localized strategic context while maintaining the global execution standards of the RPtechhub protocol. Whether we are securing land in industrial corridors or deploying RAG systems for global healthcare firms, our presence is constant.
                </p>
                <button className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 hover:text-slate-950 transition-colors group">
                  <span>View Strategic Footprint</span>
                  <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </main>
  );
};

export default AboutPage;
