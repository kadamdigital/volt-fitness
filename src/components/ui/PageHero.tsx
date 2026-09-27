import React from 'react';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  badge?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative py-20 md:py-24 bg-[#08090B] border-b border-white/10 overflow-hidden">
      <div className="container max-w-[1240px] mx-auto text-center space-y-4 px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white tracking-tight uppercase leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
