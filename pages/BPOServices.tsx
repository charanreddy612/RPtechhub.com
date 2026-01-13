
import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { SERVICES } from '../constants.tsx';
import { 
  HeartPulse, Factory, CheckCircle2, BarChart, 
  Settings, Users, ShieldCheck, Zap, ArrowRight,
  TrendingUp, Activity, ClipboardCheck
} from 'lucide-react';

const BPOServices: React.FC = () => {
  const bpoServices = SERVICES.filter(s => s.category === 'BPO');

  const leanFramework = [
    { title: "Define", desc: "Identify critical-to-quality (CTQ) parameters of the process." },
    { title: "Measure", desc: "Establish baseline performance metrics using real-time data." },
    { title: "Analyze", desc: "Root cause determination of process variations and waste." },
    { title: "Improve", desc: "Deploy automated solutions to eliminate operational friction." },
    { title: "Control", desc: "Implement autonomous monitoring for sustained efficiency." }
  ];

  const metrics = [
    { label: "Cycle Time Reduction", val: "42%", delta: "+12%" },
    { label: "Data Accuracy Rate", val: "99.98%", delta: "+0.05%" },
    { label: "Operational ROI", val: "5.2x", delta: "+1.1x" }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHero 
        category="Business Process Outsourcing" 
        title="Lean Operational <br/> Orchestration" 
        subtitle="Moving beyond simple outsourcing. We engineer high-precision back-office ecosystems built on Lean Six Sigma methodology." 
      />

      {/* 1. The Efficiency Delta */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Operational Philosophy
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">
                  The Efficiency <br /> <span className="text-slate-400">Mastery Framework</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  RPtechhub doesn't just manage tasks; we optimize value streams. Our BPO solutions are designed for enterprises that demand mathematical precision in their healthcare RCM, logistics, and manufacturing operations.
                </p>
                <div className="space-y-4 pt-4">
                  {['Lean Six Sigma DMAIC Protocol', 'ISO 9001:2015 Compliant', 'Real-time Telemetry Dashboards', 'Sovereign Data Security'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-8 bg-slate-950 rounded-sm border border-white/5 relative group">
                <div className="absolute top-0 right-0 p-4">
                   <Activity className="text-amber-500/20 w-12 h-12" />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-10">Live Performance Delta</h4>
                <div className="space-y-12">
                  {metrics.map((m, i) => (
                    <div key={i} className="relative">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{m.label}</span>
                        <div className="text-right">
                          <span className="text-white text-2xl font-black tracking-tight">{m.val}</span>
                          <span className="text-green-500 text-[9px] font-bold ml-2">{m.delta}</span>
                        </div>
                      </div>
                      <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 animate-[loading_3s_ease-out_infinite]" style={{ width: '75%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Service Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bpoServices.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.2}>
                <div className="group h-full p-12 bg-white border border-slate-200 hover:border-amber-500 transition-all shadow-sm hover:shadow-xl">
                  <div className="mb-8 p-4 bg-slate-50 w-fit rounded-lg group-hover:bg-amber-50 transition-colors">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-6 uppercase tracking-tighter">{s.title}</h3>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed">{s.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-700 transition-colors">
                        <ArrowRight className="w-3 h-3 text-amber-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DMAIC Protocol Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                The Lean Six Sigma <br /> <span className="text-slate-400">DMAIC Protocol</span>
              </h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {leanFramework.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 border border-slate-100 bg-slate-50 hover:bg-slate-950 group transition-all h-full">
                  <div className="text-xs font-black text-amber-500 mb-6 font-mono">STEP_0{i+1}</div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950 group-hover:text-white mb-4">{step.title}</h4>
                  <p className="text-slate-500 group-hover:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
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

export default BPOServices;
