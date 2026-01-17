
import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
// Fix: Added missing 'ChevronRight' to the lucide-react imports
import { 
  Landmark, Coins, Briefcase, TrendingUp, Key, 
  ArrowRight, ShieldCheck, Zap, Activity, Globe,
  FileCheck, Calculator, Clock, PieChart, ChevronRight
} from 'lucide-react';

const FinancialServices: React.FC = () => {
  const loanSectors = [
    {
      title: "Business Liquidity",
      icon: <Briefcase size={32} />,
      desc: "Fueling enterprise expansion through high-ticket business loans designed for scale. We navigate the underwriting complexity so you can focus on core operations.",
      features: ["Working Capital Injection", "Asset-Backed Lending", "Expansion Credit Lines"]
    },
    {
      title: "Professional Capital",
      icon: <TrendingUp size={32} />,
      desc: "Tailored funding for high-net-worth professionals, including medical practitioners and consultants. Secure high-ticket loans based on your professional earning power.",
      features: ["Practice Acquisition", "Professional Debt Consolidation", "Equipment Financing"]
    },
    {
      title: "Strategic Mortgages",
      icon: <Landmark size={32} />,
      desc: "Elite mortgage solutions for institutional and high-value residential assets. Leveraging mathematical precision to secure the most favorable LTV ratios.",
      features: ["Institutional Mortgages", "Commercial Real Estate Debt", "Refinance Optimization"]
    },
    {
      title: "Premium Home Loans",
      icon: <Key size={32} />,
      desc: "Sovereign home financing for the discerning investor. Our frictionless acquisition protocol ensures a smooth path to high-value asset ownership.",
      features: ["Luxury Asset Financing", "Investment Property Loans", "Global Real Estate Capital"]
    }
  ];

  const valueProps = [
    { label: "Zero Friction", desc: "Our partners handle the heavy lifting, ensuring your time is spent on decision-making, not paperwork." },
    { label: "Elite Underwriting", desc: "Proprietary credit-enhancement models that present your case to lenders in the most favorable light." },
    { label: "High Ticket Specialty", desc: "We specialize in funding requirements that standard retail banks often deem too complex." }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHero 
        category="Capital & Liquidity Orchestration" 
        title="Institutional Financial Services" 
        subtitle="Unlocking exponential liquidity through high-precision loan acquisition. We specialize in high-ticket business, professional, and asset-backed funding." 
      />

      {/* 1. The Capital Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Financial Protocol
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">
                  Frictionless <br /> <span className="text-slate-400">Capital Acquisition</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Securing high-ticket capital shouldn't be an operational bottleneck. RPtechhub applies the same "Black Label" engineering to finance as we do to IT. We represent your interests across a global network of institutional lenders, ensuring you get the liquidity you need without the retail-level stress.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  {valueProps.map((prop, i) => (
                    <div key={i} className="space-y-2">
                       <div className="text-[11px] font-black text-blue-600 uppercase tracking-widest">{prop.label}</div>
                       <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase">{prop.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 bg-slate-950 text-white rounded-sm border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <PieChart size={180} />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Funding Telemetry</h4>
                <div className="space-y-8">
                  {[
                    { label: "Approval Delta", val: "94%", color: "bg-blue-500" },
                    { label: "Avg. Processing Time", val: "14 Days", color: "bg-green-500" },
                    { label: "CapEx Optimization", val: "18.4%", color: "bg-amber-500" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                        <span className="text-slate-500">{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} animate-pulse`} style={{ width: '80%' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                    [SYS_MSG]: High-ticket funding corridors detected. Initializing lender matching protocol...
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Core Loan Modules */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                Our Strategic <span className="text-blue-500">Funding Vertical</span>
               </h2>
               <div className="w-12 h-1 bg-blue-500 mx-auto mt-6" />
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {loanSectors.map((sector, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group h-full p-12 bg-white/5 border border-white/10 hover:border-blue-500 transition-all rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                    {sector.icon}
                  </div>
                  <div className="mb-8 text-blue-500">
                    {sector.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{sector.title}</h3>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">{sector.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {sector.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                        <ArrowRight size={12} className="text-blue-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-all">
                    Download Loan Protocol <ChevronRight size={14} className="ml-2" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Underwriting Advantage */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                  High-Ticket <br /> <span className="text-slate-400">Success Architecture</span>
                 </h2>
                 <p className="text-slate-500 text-lg leading-relaxed">
                  Our core idea is simple: You build your legacy; we'll engineer the capital. We have helped hundreds of professionals and business owners navigate the labyrinth of institutional lending to deliver high-ticket loans that move the needle.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                   {[
                     { icon: <Clock />, title: "Rapid Turnaround", desc: "48H Initial Term Sheet" },
                     { icon: <ShieldCheck />, title: "Hardened Privacy", desc: "Discrete Portfolio Management" },
                     { icon: <Calculator />, title: "Optimal Rates", desc: "Institutional Matching" },
                     { icon: <Globe />, title: "Global Network", desc: "Multijurisdictional Funding" }
                   ].map((item, i) => (
                     <div key={i} className="flex space-x-4">
                        <div className="text-blue-600 shrink-0">{item.icon}</div>
                        <div>
                          <div className="text-[11px] font-black uppercase tracking-widest text-slate-950 mb-1">{item.title}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase">{item.desc}</div>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-950 rounded-sm translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                <div className="bg-slate-50 p-12 border border-slate-200">
                   <h4 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter mb-8">Funding Scenario Alpha</h4>
                   <div className="space-y-6">
                     <div className="p-6 bg-white border-l-4 border-blue-600 shadow-sm">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Loan Objective</div>
                       <div className="text-lg font-black text-slate-950">Multi-Unit Asset Acquisition</div>
                     </div>
                     <div className="p-6 bg-white border-l-4 border-blue-600 shadow-sm">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Capital Deployed</div>
                       <div className="text-lg font-black text-slate-950">$4.8M Institutional Debt</div>
                     </div>
                     <div className="p-6 bg-white border-l-4 border-blue-600 shadow-sm">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Cycle Speed</div>
                       <div className="text-lg font-black text-slate-950">12 Business Days to Close</div>
                     </div>
                   </div>
                   <div className="mt-10 text-center">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 animate-pulse">Ready to Duplicate Results?</span>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </main>
  );
};

export default FinancialServices;
