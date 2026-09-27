import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { programsData } from '../data/programsData';

interface HomeProps {
  onOpenJoinModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenJoinModal }) => {
  const trainingCards = programsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[78vh] lg:min-h-[85vh] flex items-center justify-center py-20 lg:py-28 border-b border-white/10 bg-[#08090B]">
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8FF00]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#E8FF00] uppercase">
                  VOLT FITNESS
                </span>
              </div>

              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
                TRAIN BEYOND <span className="text-[#E8FF00]">LIMITS.</span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
                "Premium training. Expert coaching. Real results."
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={onOpenJoinModal} 
                  className="font-bold px-8"
                >
                  JOIN NOW
                </Button>
                <Link to="/programs" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full font-bold px-8"
                  >
                    EXPLORE PROGRAMS
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Realistic Gym Photography */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                title="VOLT STRENGTH DECK"
                imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                aspectRatio="4/3"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRAINING */}
      <section className="py-28 lg:py-36 border-b border-white/10 bg-[#111216]">
        <div className="container max-w-[1240px] mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight">
              TRAIN YOUR WAY.
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              Purpose-built training options engineered for strength, performance, and custom 1-on-1 coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingCards.map((card) => (
              <div key={card.id} className="volt-card p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <ImagePlaceholder
                    title={card.title}
                    imageUrl={card.imageUrl}
                    aspectRatio="4/3"
                  />
                  <h3 className="font-display font-bold text-2xl text-white uppercase">{card.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.description}</p>
                </div>
                <div className="pt-6">
                  <Link to="/programs" className="text-sm font-bold text-[#E8FF00] hover:underline uppercase tracking-wide inline-flex items-center gap-1">
                    LEARN MORE &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT / BRAND STATEMENT */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
                BUILT FOR PEOPLE WHO WANT MORE.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                VOLT combines expert coaching, quality strength equipment and periodized training programs to help you become stronger, fitter and more confident in an uncluttered commercial gym environment.
              </p>
              <div className="pt-2">
                <Link to="/about">
                  <Button variant="secondary" size="md" className="font-bold">
                    ABOUT VOLT
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImagePlaceholder
                title="COMMERCIAL GYM FLOOR"
                imageUrl="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-28 lg:py-36 bg-[#111216]">
        <div className="container max-w-[1240px] mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 lg:p-16 rounded-3xl bg-[#08090B] border border-white/10 space-y-6">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight">
              READY TO GET STRONGER?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Your next level starts here.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" onClick={onOpenJoinModal} className="font-bold px-10">
                JOIN VOLT
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
