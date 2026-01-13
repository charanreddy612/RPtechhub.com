
import React from 'react';
import Reveal from './Reveal.tsx';

interface PageHeroProps {
  title: string;
  subtitle: string;
  category: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, category }) => (
  <section className="pt-40 pb-20 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <Reveal>
        <div className="text-amber-500 text-[10px] uppercase tracking-[0.4em] font-black mb-4">{category}</div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase italic leading-[0.9]">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
          {subtitle}
        </p>
      </Reveal>
    </div>
  </section>
);

export default PageHero;
