import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  highlighted?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  highlighted = false,
  onClick
}) => {
  const isHighlighted = glow || highlighted;

  return (
    <div
      onClick={onClick}
      className={`volt-card p-6 md:p-8 ${isHighlighted ? 'border-[#E8FF00]/50 shadow-[0_0_25px_rgba(232,255,0,0.12)]' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
