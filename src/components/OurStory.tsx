import React from 'react';
import { Star, Sparkles, MapPin, ChefHat } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c13] relative overflow-hidden">
      {/* Subtle ambient amber lighting in corner */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Large chef / culinary kitchen imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                alt="Executive Chef Crafting Culinary Masterpieces at Brewocrat Kitchen"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                type="ambience"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating aesthetic feature card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#111219]/90 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Artisanal Kitchen & Chef</p>
                    <p className="text-sm font-semibold text-white font-display">Element One Mall, Sector 47</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Gurugram</span>
                </div>
              </div>
            </div>

            {/* Decorative accent frame */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-500/40 rounded-bl-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right: The Brewocrat Experience content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
                THE BREWOCRAT <br />
                <span className="text-amber-400">EXPERIENCE</span>
              </h2>
            </div>

            <p className="font-display text-lg sm:text-xl text-neutral-200 italic font-normal leading-relaxed border-l-2 border-amber-500/60 pl-4 py-1">
              “Where craft brewing meets great food, music and unforgettable evenings.”
            </p>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Perched high on the second floor of Element One Mall in Malibu Towne, <strong className="text-white">Brewocrat</strong> was forged with a singular passion: to redefine Gurugram&apos;s nightlife through artisanal brewing, vibrant culinary artistry, and electrifying skybar energy.
              </p>
              <p>
                From cold-conditioned Belgian Wits and crisp lagers poured straight from our stainless steel fermentation tanks to wood-fired pizzas, gourmet smashed burgers, and sizzling global plates, every recipe is dialed in for perfection.
              </p>
              <p>
                Whether you&apos;re settling into our breezy open rooftop under the stars, gathering around ambient fire pits, or dancing to live weekend sets, Brewocrat is designed for those who appreciate authentic craft and genuine hospitality.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center">
                <div className="flex items-center justify-center gap-1 font-display text-2xl sm:text-3xl font-bold text-amber-400">
                  <span>{RESTAURANT_INFO.rating}</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1 font-mono">Google Rating</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
                  {RESTAURANT_INFO.reviewCount}
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1 font-mono">Reviews</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
                  100%
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1 font-mono">Good Vibes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
