
import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { 
  Landmark, MapPin, ShieldCheck, Scale, 
  Building2, Globe, FileCheck, Search,
  ArrowRight, Compass, LayoutGrid, CheckCircle2
} from 'lucide-react';

const RealEstatePage: React.FC = () => {
  const protocolSteps = [
    { title: "Legal Sovereignty", desc: "Title clearance, 30-year lineage trace, and litigation-free certification." },
    { title: "Zoning Validation", desc: "Verification of industrial land use, FAR compliance, and future city-planning alignment." },
    { title: "Environmental Clearance", desc: "Soil stability tests, drainage analysis, and regulatory ecosystem impact audits." },
    { title: "Utility Feasibility", desc: "Proximity to power grids, high-bandwidth fiber backbones, and logistics corridors." }
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        category="Strategic Real Estate" 
        title="Institutional Land & Industrial Assets" 
        subtitle="Unlocking high-yield industrial corridors through our proprietary 100-point legal verification protocol." 
      />

      {/* 1. Due Diligence Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Investment Security
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                  The 100-Point <br /> <span className="text-amber-500">Legal Protocol</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  In industrial real estate, risk isn't managed—it's engineered out. Our proprietary verification framework ensures every acre under RPtechhub management is a sovereign asset, ready for immediate institutional deployment.
                </p>
                <div className="space-y-8 pt-6">
                  {protocolSteps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="text-amber-500 mt-1"><FileCheck size={20}/></div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-1">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-12 rounded-sm relative">
                <div className="absolute -top-6 -left-6 bg-amber-500 text-slate-950 p-6 rounded-sm shadow-xl">
                  <Compass size={32} className="animate-spin-slow" />
                </div>
                <h3 className="text-5xl font-black mb-8 tracking-tighter uppercase italic">Scouting <br /> <span className="text-amber-500">Intell</span></h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                     <div className="text-amber-500 font-black text-3xl mb-1">Zero</div>
                     <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Litigation Rate</div>
                  </div>
                  <div>
                     <div className="text-amber-500 font-black text-3xl mb-1">15k+</div>
                     <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Acres Managed</div>
                  </div>
                  <div className="col-span-2 pt-8 border-t border-white/10">
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-mono">
                      [SYS_LOG]: Identifying high-yield growth corridors via geospatial heatmaps and future infrastructure zoning analysis. 
                    </p>
                    <button className="w-full py-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest hover:bg-amber-400 transition-colors">
                      Download Asset Brief
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Asset Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Industrial Corridors", desc: "Strategic land banks located at the nexus of major logistical and trade routes.", icon: <LayoutGrid size={24}/> },
              { title: "Asset Repurposing", desc: "Converting brownfield sites into high-performance industrial centers.", icon: <Building2 size={24}/> },
              { title: "JV Structures", desc: "Co-investment opportunities for institutional partners and sovereign wealth funds.", icon: <Scale size={24}/> }
            ].map((asset, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 border border-slate-100 bg-slate-50 group hover:bg-white hover:border-amber-500 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="text-amber-600 mb-8 transition-transform group-hover:scale-110">{asset.icon}</div>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-950 mb-4">{asset.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{asset.desc}</p>
                  <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors">
                    Explore Inventory <ArrowRight size={14} className="ml-2" />
                  </div>
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

export default RealEstatePage;
