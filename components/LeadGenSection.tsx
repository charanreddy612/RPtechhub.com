
import React from 'react';
import Reveal from './Reveal.tsx';

const LeadGenSection: React.FC = () => (
  <section id="strategy" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <Reveal>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-10" />
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 mb-8 uppercase italic">
          Executive <br /> Strategy Brief
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
          Secure a slot with our senior partners for a detailed 100-point audit of your current operations and digital footprint.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
           <div className="space-y-2">
             <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Full Name</label>
             <input type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" placeholder="Alexander Sterling" />
           </div>
           <div className="space-y-2">
             <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Enterprise Email</label>
             <input type="email" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" placeholder="a.sterling@global.com" />
           </div>
           <div className="md:col-span-2 space-y-2">
             <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Strategic Interest</label>
             <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none">
               <option>AI Engineering & RAG Systems</option>
               <option>NexGen Cybersecurity (SOC)</option>
               <option>Healthcare RCM Solutions</option>
               <option>Real Estate Investment Corridors</option>
               <option>High-Performance Marketing</option>
             </select>
           </div>
           <button type="button" className="md:col-span-2 mt-6 py-5 bg-slate-950 text-white text-xs uppercase tracking-[0.3em] font-black hover:bg-slate-900 transition-colors">
             Submit Portfolio Request
           </button>
        </form>
      </Reveal>
    </div>
  </section>
);

export default LeadGenSection;
