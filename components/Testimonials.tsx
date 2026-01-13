
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';
import Reveal from './Reveal.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-amber-600 text-[10px] uppercase tracking-[0.3em] font-black mb-4">Executive Proof</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase italic">
              Global <span className="text-slate-400">Partner Intelligence</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.2}>
              <div className="bg-white p-10 border border-slate-200 rounded-sm hover:border-amber-500 transition-all group flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                    {t.logo}
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <Quote className="text-slate-100 w-12 h-12 absolute -mt-4 -ml-4 pointer-events-none" />
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-8 italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="font-black text-slate-950 uppercase tracking-widest text-xs mb-1">
                    {t.name}
                  </div>
                  <div className="text-amber-600 text-[10px] uppercase font-bold tracking-widest">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
