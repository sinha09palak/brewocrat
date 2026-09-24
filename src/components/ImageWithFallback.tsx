import React, { useState } from 'react';
import { Beer, UtensilsCrossed, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'beer' | 'food' | 'ambience' | 'generic';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  type = 'generic'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-neutral-900 via-[#181822] to-amber-950/40 flex flex-col items-center justify-center p-6 text-center border border-amber-500/20 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 text-amber-400">
          {type === 'beer' ? (
            <Beer className="w-6 h-6" />
          ) : type === 'food' ? (
            <UtensilsCrossed className="w-6 h-6" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
        </div>
        <p className="text-xs uppercase tracking-widest text-amber-300 font-display font-semibold mb-1 line-clamp-1">
          Brewocrat Gurugram
        </p>
        <p className="text-xs text-neutral-400 line-clamp-1 max-w-[200px]">
          {alt || 'Artisanal Experience'}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
