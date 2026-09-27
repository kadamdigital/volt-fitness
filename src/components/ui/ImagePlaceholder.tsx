import React from 'react';

export interface ImagePlaceholderProps {
  title: string;
  imageUrl?: string;
  category?: string;
  tag?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '16/10' | '4/5';
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  imageUrl,
  aspectRatio = '16/9',
  className = ''
}) => {
  const aspectClasses: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '16/10': 'aspect-[16/10]',
    '4/5': 'aspect-[4/5]'
  };

  const defaultImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80";
  const src = imageUrl || defaultImage;

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl bg-[#111216] border border-white/10 ${aspectClasses[aspectRatio] || 'aspect-[16/9]'} ${className}`}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      {/* Subtle Black Dark Overlay for Seamless Integration with Black Theme */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
};
