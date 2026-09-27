import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { trainersData } from '../data/trainersData';

interface TrainersPageProps {
  onOpenJoinModal: () => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* Hero */}
      <PageHero
        title="MEET THE TRAINERS"
        subtitle="Experienced coaches. Personal attention."
      />

      {/* 3 TRAINER CARDS */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {trainersData.map((trainer) => (
              <div key={trainer.id} className="volt-card p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <ImagePlaceholder
                    title={trainer.name}
                    imageUrl={trainer.imageUrl}
                    aspectRatio="4/5"
                  />
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white uppercase">{trainer.name}</h3>
                    <div className="text-xs font-mono text-[#E8FF00] uppercase font-bold mt-1">{trainer.role}</div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{trainer.bio}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <Button variant="outline" size="sm" onClick={onOpenJoinModal} className="w-full font-bold">
                    BOOK SESSION
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs font-mono text-slate-500">
            Fictional trainer profiles created for portfolio demonstration.
          </div>
        </div>
      </section>
    </div>
  );
};
