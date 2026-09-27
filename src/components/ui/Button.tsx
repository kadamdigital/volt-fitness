import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E8FF00] focus:ring-offset-2 focus:ring-offset-[#08090B] disabled:opacity-50 disabled:pointer-events-none shrink-0 leading-normal";

  const sizes = {
    sm: "text-xs px-4 py-2.5 min-h-[40px] gap-2 rounded-lg",
    md: "text-sm px-6 py-3 min-h-[48px] gap-2.5 rounded-lg",
    lg: "text-base px-8 py-4 min-h-[54px] gap-3 rounded-xl"
  };

  const variants = {
    primary: "btn-volt-primary",
    secondary: "bg-[#111216] text-white border border-white/10 hover:border-[#E8FF00]/50 hover:bg-[#181A20]",
    outline: "bg-transparent text-slate-200 border border-white/20 hover:border-[#E8FF00] hover:text-[#E8FF00]",
    ghost: "bg-transparent text-slate-300 hover:text-[#E8FF00] hover:bg-white/5"
  };

  return (
    <button
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">{icon}</span>}
      </span>
    </button>
  );
};
