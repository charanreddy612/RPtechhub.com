
import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { SERVICES } from '../constants.tsx';
import { 
  TrendingUp, BarChart3, Search, Megaphone, Globe, 
  Target, Rocket, PieChart, Activity, Zap, 
  ArrowRight, ShieldCheck, Mail, MessageCircle
} from 'lucide-react';

const MarketingPage: React.FC = () => {
  const mktServices = SERVICES.filter(s => s.category === 'Marketing');

  const techStack = [
    { name: "Semantic SEO", status: "Hardened", icon: <Search size={16}/> },
    { name: "WhatsApp API", status: "Active", icon: <MessageCircle size={16}/> },
    { name: "ROAS Engine", status: "Scaling", icon: <TrendingUp size={16}/> },
    { name: "Data Pixel", status: "Live", icon: <Activity size={16}/> },
    { name: "CRM Nexus", status: "Synched", icon: <Globe size={16}/> },
    { name: "Paid Media", status: "Optimum", icon: <Target size={16}/> }
  ];

  return (
    <main className="bg-slate-950 min-h-screen">
      <PageHero 
        category="Performance Marketing" 
        title="ROAS-Centric <br/> Growth Lab" 
        subtitle="Engineering market dominance through semantic SEO, data-driven paid media, and automated conversion pipelines." 
      />

      {/* 1. Growth Philosophy */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Growth Methodology
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                  Mathematical <br /> <span className="text-amber-500">Market Dominance</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We don't "run ads." We engineer revenue. Every campaign at RPtechhub is treated as a financial asset, managed with the rigor of a trading desk and optimized through proprietary semantic and predictive models.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { label: "Conversion Rate", val: "+140%", desc: "Post-Implementation" },
                    { label: "Cost Per Lead", val: "-65%", desc: "Average Reduction" }
                  ].map((stat, i) => (
                    <div key={i} className="border-l-2 border-amber-500 pl-6">
                      <div className="text-2xl font-black text-white">{stat.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="p-6 bg-slate-950 border border-white/5 hover:border-amber-500/50 transition-all group">
                    <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                    <div className="text-xs font-black text-white uppercase tracking-widest mb-1">{tech.name}</div>
                    <div className="flex items-center text-[8px] font-black text-green-500 uppercase tracking-tighter">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-1 animate-pulse" />
                      {tech.status}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Primary Engines */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                Our Primary <span className="text-amber-500">Growth Engines</span>
               </h2>
               <div className="w-12 h-1 bg-amber-500 mx-auto mt-6" />
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mktServices.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.1}>
                <div className="group relative p-12 bg-white/5 border border-white/10 rounded-sm hover:bg-white/[0.07] transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Rocket size={120} />
                  </div>
                  <div className="mb-8 p-3 bg-amber-500/10 w-fit rounded-lg">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{s.title}</h3>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed">{s.description}</p>
                  <ul className="space-y-4 mb-10">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
                        <Zap size={10} className="text-amber-500 mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-amber-500 hover:text-white transition-all group">
                    View Strategic Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadGenSection />
    </main>
  );
};

export default MarketingPage;
