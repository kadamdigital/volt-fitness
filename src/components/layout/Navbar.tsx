import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Membership', path: '/membership' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300 bg-[#08090B]/95 backdrop-blur-md border-t-0 border-x-0 border-b ${scrolled ? 'border-white/15 bg-[#08090B]/98' : 'border-white/10'}`}>
        <div className="container max-w-[1240px] mx-auto h-[76px] flex items-center justify-between px-6">
          {/* Left: VOLT FITNESS Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E8FF00] text-[#08090B] flex items-center justify-center font-bold shrink-0">
              <Zap className="w-4 h-4 fill-[#08090B]" />
            </div>
            <span className="font-display font-black text-2xl tracking-wider text-white uppercase leading-none">
              VOLT <span className="text-xs font-mono text-slate-400 font-normal tracking-normal">FITNESS</span>
            </span>
          </Link>

          {/* Center/Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors tracking-wide py-1 ${
                    isActive ? 'text-[#E8FF00]' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex text-xs px-5 py-2.5 font-bold"
            >
              JOIN NOW
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#111216] border border-white/10 text-slate-200 hover:text-[#E8FF00] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E8FF00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#08090B]/98 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E8FF00] text-[#08090B] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 fill-[#08090B]" />
              </div>
              <span className="font-display font-black text-xl text-white">VOLT FITNESS</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#111216] border border-white/10 text-[#E8FF00]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto py-6 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-[#111216] border-[#E8FF00] text-[#E8FF00]'
                      : 'bg-[#111216]/50 border-white/5 text-white hover:border-white/20'
                  }`
                }
              >
                <span className="font-display font-bold text-lg uppercase tracking-wider">{link.label}</span>
                <ChevronRight className="w-5 h-5 opacity-60" />
              </NavLink>
            ))}
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full font-bold"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
            >
              JOIN NOW
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
