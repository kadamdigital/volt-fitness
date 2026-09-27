import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { programsData } from '../data/programsData';

interface ProgramsPageProps {
  onOpenJoinModal: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* Hero */}
      <PageHero
        title="TRAINING PROGRAMS"
        subtitle="Choose the training that fits your goals."
      />

      {/* 4 PROGRAMS 2x2 GRID */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {programsData.map((program) => (
              <div key={program.id} className="volt-card p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <ImagePlaceholder
                    title={program.title}
                    imageUrl={program.imageUrl}
                    aspectRatio="16/10"
                  />
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">
                    {program.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <Button variant="primary" size="md" onClick={onOpenJoinModal} className="w-full font-bold">
                    ENROLL NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
