import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const values = [
    {
      title: 'DISCIPLINE',
      description: 'Every workout cycle and exercise serves a purposeful strength and athletic objective.'
    },
    {
      title: 'CONSISTENCY',
      description: 'Long-term performance comes from showing up regularly and sticking to a structured routine.'
    },
    {
      title: 'PROGRESS',
      description: 'We track biomechanics, execution, and continuous strength gains over time.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* Hero */}
      <PageHero
        title="ABOUT VOLT"
        subtitle="Training built around your goals."
      />

      {/* OUR APPROACH */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
                OUR APPROACH
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                VOLT was built to give individuals a clean, professional fitness facility focused on real progress. We strip away generic fitness gimmicks and replace them with structured coaching, high-grade equipment, and a focused gym environment.
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Whether your target is raw power, metabolic endurance, or 1-on-1 personal instruction, our facility is engineered to help you reach your goals.
              </p>
            </div>

            <div className="lg:col-span-6">
              <ImagePlaceholder
                title="VOLT COACHING FLOOR"
                imageUrl="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THREE VALUES */}
      <section className="py-28 lg:py-36 border-b border-white/10 bg-[#111216]">
        <div className="container max-w-[1240px] mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
              WHAT WE STAND FOR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="volt-card p-8 space-y-4">
                <div className="w-3 h-3 rounded-full bg-[#E8FF00]" />
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36">
        <div className="container max-w-[1240px] mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase">
              READY TO TRAIN WITH US?
            </h2>
            <p className="text-slate-300 text-base">
              Experience structured training in a modern commercial fitness environment.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" onClick={onOpenJoinModal} className="font-bold px-8">
                JOIN VOLT
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
