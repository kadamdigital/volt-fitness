import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans">
      {/* Hero */}
      <PageHero
        title="GET IN TOUCH"
        subtitle="Have questions? Reach out to our team."
      />

      {/* 2-COLUMN CONTACT LAYOUT */}
      <section className="py-28 lg:py-36 border-b border-white/10">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display font-black text-3xl text-white uppercase mb-3">VOLT FITNESS</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10 text-sm text-slate-300">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">OPENING HOURS</div>
                  <div className="font-bold text-white mt-1">Mon–Sat: 6:00 AM – 10:00 PM</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">EMAIL</div>
                  <a href="mailto:hello@voltfitness.example" className="font-bold text-white hover:text-[#E8FF00] transition-colors mt-1 block">hello@voltfitness.example</a>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">PHONE</div>
                  <a href="tel:+919000000000" className="font-bold text-white hover:text-[#E8FF00] transition-colors mt-1 block">+91 90000 00000</a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="volt-card p-8 lg:p-10">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <h3 className="font-display font-bold text-2xl text-white uppercase">MESSAGE SENT</h3>
                    <p className="text-slate-300 text-sm">
                      Thank you for contacting VOLT FITNESS demo.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      SEND ANOTHER MESSAGE
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hello@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                          PHONE *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 90000 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                        MESSAGE *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                      SEND MESSAGE
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-20">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="h-64 rounded-2xl bg-[#111216] border border-white/10 flex items-center justify-center text-center p-6">
            <div className="text-xs font-mono text-slate-400">
              LOCATION MAP PLACEHOLDER • Mumbai, Maharashtra
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
