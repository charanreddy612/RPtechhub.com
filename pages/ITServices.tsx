import React from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadGenSection from '../components/LeadGenSection.tsx';
import { SERVICES } from '../constants.tsx';
import { 
  Cpu, Shield, Database, Layers, Network, Zap, 
  Workflow, Microscope, Terminal, CheckCircle2,
  ChevronRight, ArrowRight, Server, Code,
  Activity, Globe, Lock, Radio
} from 'lucide-react';

const ITServices: React.FC = () => {
  const itServices = SERVICES.filter(s => s.category === 'IT');

  const technicalCapabilities = [
    { title: "AI/ML Engineering", value: "98% Precision Rate", desc: "Specializing in Large Language Model (LLM) fine-tuning and Retrieval-Augmented Generation (RAG)." },
    { title: "Cyber-Defense", value: "Zero Breach Record", desc: "Military-grade SOC operations utilizing predictive threat intelligence and zero-trust protocols." },
    { title: "Infrastructure", value: "99.999% SLA", desc: "High-availability cloud and hybrid architectures designed for global enterprise scale." }
  ];

  const frameworkSteps = [
    { num: "01", title: "Discovery Protocol", desc: "Deep-dive audit of existing data silos and technical debt to map strategic opportunities." },
    { num: "02", title: "Architectural Blueprint", desc: "Designing bespoke RAG systems and security mesh frameworks tailored to enterprise KPIs." },
    { num: "03", title: "Elite Deployment", desc: "Seamless integration using DevXOps pipelines with zero downtime and full data sovereignty." },
    { num: "04", title: "Autonomous Optimization", desc: "Continuous AI self-correction and human-in-the-loop refinement for exponential ROI." }
  ];

  const techStack = [
    { name: "PostgreSQL", icon: <Database />, status: "Active", metric: "HA Cluster" },
    { name: "Kubernetes", icon: <Layers />, status: "Live", metric: "Auto-Scale" },
    { name: "TensorFlow", icon: <Microscope />, status: "Ready", metric: "Neural Ops" },
    { name: "Go Lang", icon: <Code />, status: "Online", metric: "Low Latency" },
    { name: "Rust", icon: <Cpu />, status: "Secured", metric: "Memory Safe" },
    { name: "Docker", icon: <Layers />, status: "Active", metric: "Env Isolation" },
    { name: "Terraform", icon: <Workflow />, status: "Online", metric: "IaC Mesh" },
    { name: "Python", icon: <Terminal />, status: "Active", metric: "Logic Core" },
    { name: "Redis", icon: <Database />, status: "Live", metric: "In-Memory" },
    { name: "NVIDIA H100", icon: <Zap />, status: "Optimum", metric: "Compute Grid" },
    { name: "Zero Trust", icon: <Lock />, status: "Hardened", metric: "Auth Shield" },
    { name: "Vector DB", icon: <Database />, status: "Active", metric: "RAG Engine" }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 1. Page Hero */}
      <PageHero 
        category="IT Infrastructure & Intelligence" 
        title="Engineering The Digital Sovereign" 
        subtitle="Where mathematical precision meets autonomous intelligence. We build the fortresses and brains that power modern global enterprise." 
      />

      {/* 2. Executive Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Strategic Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">
                  Beyond Digital <br /> Transformation
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Most firms offer IT support. RPtechhub offers **IT Dominance**. We view technology not as a utility, but as a strategic asset. Our "Black Label" protocol ensures that your digital infrastructure is not just operational, but actively generating competitive advantage through automated intelligence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {['Sovereign Data Control', 'Autonomous Agentic Ops', 'Predictive Cybersecurity', 'Elastic Scale Architecture'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="text-amber-500 w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 gap-6">
                {technicalCapabilities.map((cap, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 group hover:border-amber-500 transition-all">
                    <div className="text-amber-600 text-xl font-black mb-1">{cap.value}</div>
                    <h4 className="text-slate-950 font-black uppercase tracking-widest text-xs mb-2">{cap.title}</h4>
                    <p className="text-slate-500 text-sm">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Core Service Matrix */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
                The Core <span className="text-amber-500">Service Matrix</span>
              </h2>
              <div className="w-12 h-1 bg-amber-500 mx-auto" />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.1}>
                <div className="group p-10 h-full bg-slate-900/50 border border-white/5 hover:border-amber-500/50 transition-all rounded-sm relative">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Terminal size={120} />
                  </div>
                  <div className="mb-8 p-3 bg-amber-500/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">{s.description}</p>
                  <ul className="space-y-3 mb-10">
                    {s.features.map((f, i) => (
                      <li key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center group-hover:text-slate-300 transition-colors">
                        <ArrowRight className="text-amber-500 w-3 h-3 mr-3 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-amber-500 hover:text-white transition-colors">
                    Technical Specs <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology: The Black Label Protocol */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Methodology</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                Deployment <br /> Framework
              </h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0" />
            {frameworkSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 border border-slate-100 relative z-10 hover:shadow-xl transition-shadow group">
                  <div className="text-6xl font-black text-slate-50 mb-6 transition-colors group-hover:text-amber-50">{step.num}</div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950 mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Elite Technical Ecosystem (ALIVE) */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(245,158,11,0.1),transparent)] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <Reveal>
                <div className="inline-flex items-center space-x-2 text-amber-500 mb-6">
                  <Activity size={16} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Live</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.9] mb-8">
                  Elite Technical <br /> <span className="text-amber-500">Ecosystem</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm">
                  Our stack is a living architecture. We don't just use tools; we orchestrate high-performance environments that evolve with enterprise data demands.
                </p>
                
                <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Infrastructure Status</div>
                  <div className="space-y-4">
                    {[
                      { label: "AI Latency", val: "12ms", color: "bg-amber-500" },
                      { label: "SOC Uptime", val: "100%", color: "bg-green-500" },
                      { label: "Data Flow", val: "4.2 TB/s", color: "bg-blue-500" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[9px] font-bold uppercase tracking-tighter">
                          <span className="text-slate-400">{stat.label}</span>
                          <span className="text-white">{stat.val}</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${stat.color} animate-[loading_2s_ease-in-out_infinite]`} style={{ width: '85%' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {techStack.map((item, i) => (
                 <Reveal key={i} delay={i * 0.05}>
                   <div className="group relative p-6 bg-slate-900/50 border border-white/5 hover:border-amber-500/50 transition-all duration-500 overflow-hidden cursor-crosshair">
                      {/* Scanning Light Effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent -translate-y-full group-hover:translate-y-[200px] transition-transform duration-1000 ease-in-out" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-slate-500 group-hover:text-amber-500 transition-colors duration-500 group-hover:scale-110 transform">
                          {/* Fix: Cast item.icon to ReactElement<any> to allow the size prop in cloneElement */}
                          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[8px] font-black text-green-500 uppercase tracking-tighter flex items-center">
                            <span className="w-1 h-1 bg-green-500 rounded-full mr-1 animate-pulse" />
                            {item.status}
                          </span>
                          <span className="text-[7px] text-slate-600 font-mono mt-1">0x{Math.floor(Math.random()*1000).toString(16).toUpperCase()}</span>
                        </div>
                      </div>

                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-2 group-hover:text-amber-500 transition-colors">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono mb-4">{item.metric}</p>

                      <div className="flex space-x-0.5 h-1">
                        {[...Array(8)].map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`flex-1 ${idx < 5 ? 'bg-amber-500/50 group-hover:bg-amber-500' : 'bg-white/5'} transition-colors`} 
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          />
                        ))}
                      </div>
                   </div>
                 </Reveal>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Strategic FAQ Bureau */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-950 tracking-tighter uppercase italic">Strategic Bureau <span className="text-slate-400">Q&A</span></h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {[
              { q: "How does RPtechhub ensure data sovereignty in AI deployments?", a: "We utilize on-premise LLM hosting and private VPC deployments. Your data never leaves your controlled environment for training or inference, ensuring 100% compliance with GDPR and HIPAA." },
              { q: "What is the typical ROI timeline for an AI-RAG implementation?", a: "Our clients typically see a break-even point within 4-6 months, driven by a 30-50% reduction in manual data retrieval labor and a significant increase in decision-making speed." },
              { q: "Can your SOC integrate with our existing security team?", a: "Absolutely. We operate as a force multiplier, providing NexGen Tier 3 support and advanced threat hunting that complements your existing IT internal protocols." }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-b border-slate-100 pb-8">
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950 mb-3 flex items-start">
                    <span className="text-amber-500 mr-4 shrink-0 font-black">?</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 text-sm pl-7 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <LeadGenSection />
    </main>
  );
};

export default ITServices;