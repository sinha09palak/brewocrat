import React from 'react';
import { ArrowDown, CalendarCheck, Utensils, Star, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#090a0f]"
    >
      {/* Cinematic Luxury Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85"
          alt="Brewocrat Skybar and Brewery Ambience at Night"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Dark luxury scrims & warm amber ambient lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-[#090a0f]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-black/60 pointer-events-none" />
        
        {/* Subtle warm amber architectural glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Small Open Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-amber-300 font-mono">
            {RESTAURANT_INFO.hours}
          </span>
        </div>

        {/* Brand Sub-header */}
        <div className="mb-2 space-y-1">
          <h2 className="font-display text-sm sm:text-base md:text-lg font-bold tracking-[0.35em] text-amber-400 uppercase">
            BREWOCRAT
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-300 font-light">
            {RESTAURANT_INFO.tagline}
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mb-4 text-balance">
          “Raise a Glass.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 amber-text-glow">
            Make It a Night.”
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto mb-6 leading-relaxed text-balance">
          {RESTAURANT_INFO.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8 sm:mb-10">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 group font-display cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            Reserve a Table
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/70 hover:bg-neutral-800/80 border border-neutral-700/80 hover:border-amber-400/60 rounded-md backdrop-blur-md transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group font-display"
          >
            <Utensils className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            Explore Menu
          </a>
        </div>

        {/* Trust & Location Markers */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 border-t border-white/10 text-neutral-400 max-w-lg mx-auto w-full">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-display font-bold text-lg sm:text-xl">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.4</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400">Google Rating</span>
          </div>

          <div className="text-center border-x border-white/10">
            <div className="text-amber-400 font-display font-bold text-lg sm:text-xl">
              Fresh Taps
            </div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400">In-House Microbrewery</span>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-display font-bold text-lg sm:text-xl">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Element One</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400">Sector 47 Skybar</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors group"
        aria-label="Scroll down to Our Story"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 group-hover:text-amber-400 transition-colors">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
      </a>
    </section>
  );
};
