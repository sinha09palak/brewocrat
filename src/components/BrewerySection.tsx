import React, { useState } from 'react';
import { Beer, Droplets, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { BEER_STYLES, BeerStyle } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface BrewerySectionProps {
  onSelectBeerToOrder: (beerName: string) => void;
}

export const BrewerySection: React.FC<BrewerySectionProps> = ({ onSelectBeerToOrder }) => {
  const [selectedStyle, setSelectedStyle] = useState<BeerStyle>(BEER_STYLES[0]);

  return (
    <section id="brewery" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <Beer className="w-3.5 h-3.5" />
            <span>In-House Microbrewery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            CRAFTED HERE.{' '}
            <span className="text-amber-400">ENJOYED HERE.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Brewed in our state-of-the-art tanks on the 2nd floor of Element One Mall. Unpasteurized, unfiltered, and poured directly from fermentation to glass at the peak of flavor.
          </p>
        </div>

        {/* Brewery Atmosphere Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 group h-48 sm:h-56">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80"
              alt="Stainless Steel Brewing Tanks"
              className="w-full h-full object-cover"
              type="beer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider">Fermentation</span>
              <h3 className="font-display text-lg font-bold text-white">Precision Temperature Tanks</h3>
              <p className="text-xs text-neutral-300 mt-1">Controlled cold conditioning for silky mouthfeel and clean clarity.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 group h-48 sm:h-56">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80"
              alt="Fresh Beer Pouring from Tap"
              className="w-full h-full object-cover"
              type="beer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider">Fresh Pour</span>
              <h3 className="font-display text-lg font-bold text-white">Golden Amber Nectar</h3>
              <p className="text-xs text-neutral-300 mt-1">Served at ideal cellar temperatures with creamy microfoam head.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 group h-48 sm:h-56">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?auto=format&fit=crop&w=800&q=80"
              alt="Artisanal Grain and Hops Selection"
              className="w-full h-full object-cover"
              type="beer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider">Ingredients</span>
              <h3 className="font-display text-lg font-bold text-white">Noble Hops & Malt</h3>
              <p className="text-xs text-neutral-300 mt-1">Imported Bavarian malts, aromatic hops, and purified spring water.</p>
            </div>
          </div>
        </div>

        {/* Interactive Beer Styles Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Beer Style Cards List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
              <span>Our Signature Brew Styles</span>
              <span className="text-xs font-mono font-normal text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded">
                Tap to explore
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BEER_STYLES.map((beer) => {
                const isSelected = selectedStyle.id === beer.id;
                return (
                  <button
                    key={beer.id}
                    onClick={() => setSelectedStyle(beer)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? 'bg-neutral-900 border-amber-500/80 shadow-lg shadow-amber-500/10'
                        : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: beer.color }}
                        />
                        <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                          {beer.abv} • {beer.ibu}
                        </span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {beer.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5 mb-2">
                      {beer.type}
                    </p>
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                      {beer.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Beer Tasting Profile Deep-Dive */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 via-[#12131b] to-neutral-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Brewmaster Notes</span>
                <h4 className="font-display text-2xl font-bold text-white mt-1">
                  {selectedStyle.name}
                </h4>
              </div>
              <div
                className="w-8 h-8 rounded-full border-2 border-white/20 shadow-inner"
                style={{ backgroundColor: selectedStyle.color }}
              />
            </div>

            <p className="text-sm text-neutral-300 my-4 leading-relaxed">
              {selectedStyle.description}
            </p>

            {/* Aromatics & Notes */}
            <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Aroma & Flavor Profile
              </span>
              <p className="text-xs sm:text-sm text-amber-200 font-medium italic">
                “{selectedStyle.notes}”
              </p>
            </div>

            {/* Taste Balance Sliders */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Tasting Metrics
              </span>

              <div className="space-y-2 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Malt Body</span>
                    <span className="text-amber-400">{selectedStyle.tasteProfile.malt}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${selectedStyle.tasteProfile.malt}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Hops & Bitterness</span>
                    <span className="text-amber-400">{selectedStyle.tasteProfile.hops}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-500"
                      style={{ width: `${selectedStyle.tasteProfile.hops}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Crisp Refreshment</span>
                    <span className="text-amber-400">{selectedStyle.tasteProfile.crispness}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 transition-all duration-500"
                      style={{ width: `${selectedStyle.tasteProfile.crispness}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA to order or view in menu */}
            <button
              onClick={() => onSelectBeerToOrder(selectedStyle.name)}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200"
            >
              Order {selectedStyle.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
