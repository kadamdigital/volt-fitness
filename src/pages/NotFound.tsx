import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#08090B]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#E8FF00]/10 border border-[#E8FF00]/30 text-[#E8FF00] flex items-center justify-center mx-auto">
          <Zap className="w-8 h-8 fill-[#E8FF00]" />
        </div>
        
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#E8FF00] tracking-widest uppercase font-semibold">
            ERROR 404
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            PAGE NOT FOUND
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            The page you are looking for does not exist or has been moved. Return to the main floor to continue your training.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto font-bold gap-2">
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Button>
          </Link>
          <Link to="/programs" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto font-bold">
              EXPLORE PROGRAMS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
