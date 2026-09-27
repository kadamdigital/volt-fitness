import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Strength & Muscle'
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#111216] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8FF00]" />
            <h3 id="join-modal-title" className="text-xl font-bold font-display uppercase text-white">
              JOIN VOLT FITNESS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-[#E8FF00] hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-300">
              Submit your details to request a VOLT fitness membership (Portfolio Demo).
            </p>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E8FF00] text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                PHONE NUMBER *
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

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block uppercase mb-1">
                PRIMARY TRAINING GOAL
              </label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-white focus:outline-none focus:border-[#E8FF00] text-sm cursor-pointer"
              >
                <option value="Strength & Muscle">Strength & Muscle</option>
                <option value="Athletic Performance">Athletic Performance</option>
                <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                <option value="Conditioning">Conditioning</option>
              </select>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-500">
                Portfolio demonstration form
              </span>
              <Button type="submit" variant="primary" size="md" className="font-bold">
                REQUEST MEMBERSHIP
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#E8FF00]/20 text-[#E8FF00] border border-[#E8FF00]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold font-display text-white uppercase">REQUEST RECEIVED</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-[#E8FF00]">{formData.name}</strong>. Your membership request demo has been submitted successfully.
              </p>
            </div>

            <Button variant="primary" size="md" onClick={handleReset} className="font-bold">
              CLOSE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
