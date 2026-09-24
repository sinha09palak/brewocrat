import React, { useState } from 'react';
import { Sparkles, Calendar, Music, Flame, Moon, ArrowRight } from 'lucide-react';
import { EXPERIENCE_TAGS } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface SkybarExperienceProps {
  onOpenReservation: () => void;
}

export const SkybarExperience: React.FC<SkybarExperienceProps> = ({ onOpenReservation }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const experienceCards = [
    {
      title: 'Open Sky Terrace & Skyline Vibe',
      desc: 'Bask under the stars on our breezy second-floor terrace overlooking Malibu Towne and Sector 47.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      tag: '🌃 Skybar Ambience'
    },
    {
      title: 'Acoustic Sessions & Weekend Live DJ',
      desc: 'High energy sets, soul stirring acoustic melodies and vibrant beats every Friday through Sunday.',
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      tag: '🎵 Live Music'
    },
    {
      title: 'Cozy Fire Pit Lounging',
      desc: 'Gather around glowing outdoor fire tables with friends, pairing crisp pints with smoky skewers.',
      img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      tag: '🔥 Fireplace'
    },
    {
      title: 'Artisanal Tap Room & Mixology Bar',
      desc: 'Watch our master bartenders craft smoked old fashioneds and pour fresh cloudy Belgian Wits.',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
      tag: '🍺 Craft Brews'
    }
  ];

  return (
    <section id="experience" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c13] relative overflow-hidden">
      {/* Amber glow backlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Skybar Atmosphere</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            NIGHTS THAT FEEL <span className="text-amber-400">DIFFERENT</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Elevate your evenings. Brewocrat unites an unpretentious artisanal brewery with the magnetic allure of Gurugram&apos;s premier skybar terrace.
          </p>
        </div>

        {/* Experience Tags Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {EXPERIENCE_TAGS.map((tag) => (
            <div
              key={tag.label}
              className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group text-center flex flex-col items-center justify-center"
            >
              <span className="text-xl mb-1 transform group-hover:scale-110 transition-transform">
                {tag.icon}
              </span>
              <h3 className="font-display text-xs font-bold text-white group-hover:text-amber-300 transition-colors uppercase tracking-wide">
                {tag.label}
              </h3>
              <p className="text-[10px] text-neutral-400 mt-0.5 line-clamp-2 leading-tight">
                {tag.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Experience Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
            {/* Visual Screen */}
            <div className="lg:col-span-8 relative min-h-[260px] lg:min-h-[420px]">
              <ImageWithFallback
                src={experienceCards[activeSlide].img}
                alt={experienceCards[activeSlide].title}
                className="w-full h-full object-cover"
                type="ambience"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded bg-black/80 text-amber-400 text-xs font-mono uppercase tracking-wider border border-amber-500/30">
                  {experienceCards[activeSlide].tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 drop-shadow-md">
                  {experienceCards[activeSlide].title}
                </h3>
              </div>
            </div>

            {/* Selector Menu on Right */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 bg-[#0e1017]">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2">
                  Select Atmosphere
                </span>

                <div className="space-y-3">
                  {experienceCards.map((card, idx) => {
                    const isActive = activeSlide === idx;
                    return (
                      <button
                        key={card.title}
                        onClick={() => setActiveSlide(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-neutral-900 border-amber-500/80 shadow-md text-white'
                            : 'bg-transparent border-neutral-800/60 hover:bg-neutral-900/40 text-neutral-400'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold font-display uppercase tracking-wide">
                          <span>{card.title}</span>
                          {isActive && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                          {card.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-neutral-800 mt-6">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group transition-all"
                >
                  <Calendar className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>Book A Table On The Rooftop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
