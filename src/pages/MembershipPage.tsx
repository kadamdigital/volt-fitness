import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { membershipData } from '../data/membershipData';

interface MembershipPageProps {
  onOpenJoinModal: () => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* Hero */}
      <PageHero
        title="MEMBERSHIP"
        subtitle="Simple plans. Serious training."
      />

      {/* 3 MEMBERSHIP PLANS */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
            {membershipData.map((plan) => (
              <div
                key={plan.id}
                className={`volt-card p-8 flex flex-col justify-between relative ${
                  plan.isFeatured ? 'border-[#E8FF00]/50 shadow-[0_0_25px_rgba(232,255,0,0.12)]' : ''
                }`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E8FF00] text-[#08090B] font-mono text-xs font-black uppercase tracking-widest">
                    RECOMMENDED
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-white/10 mb-6">
                    <h3 className="font-display font-black text-2xl text-white uppercase mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display font-black text-4xl lg:text-5xl text-white">{plan.price}</span>
                      <span className="text-xs font-mono text-slate-400">/ month</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#E8FF00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={plan.isFeatured ? 'primary' : 'outline'}
                  size="lg"
                  onClick={onOpenJoinModal}
                  className="w-full font-bold"
                >
                  JOIN NOW
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center text-xs font-mono text-slate-500">
            Fictional pricing for portfolio demonstration.
          </div>
        </div>
      </section>
    </div>
  );
};
