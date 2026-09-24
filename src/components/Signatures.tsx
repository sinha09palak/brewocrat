import React from 'react';
import { Sparkles, Plus, Beer, Flame, Eye } from 'lucide-react';
import { SIGNATURE_ITEMS, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface SignaturesProps {
  onAddToCart: (item: MenuItem) => void;
  onViewDetails: (item: MenuItem) => void;
}

export const Signatures: React.FC<SignaturesProps> = ({ onAddToCart, onViewDetails }) => {
  return (
    <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#0b0c13] relative border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Chef & Brewmaster Spotlight</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              BREWOCRAT <span className="text-amber-400">SIGNATURES</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-3 md:mt-0">
            Handcrafted culinary masterworks and signature craft pours that define the Brewocrat skybar dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_ITEMS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-amber-500/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    type={item.category === 'Craft Beer' || item.category === 'Drinks' ? 'beer' : 'food'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Dietary badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
                      }`}
                    />
                    <span className="text-neutral-200">
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-amber-500/90 text-black font-display font-bold text-sm shadow-md">
                    ₹{item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 uppercase font-mono tracking-wider">
                    <span>{item.category}</span>
                    {item.prepTime && (
                      <>
                        <span>•</span>
                        <span>{item.prepTime}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.beerPairing && (
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300 bg-amber-500/10 px-2.5 py-1.5 rounded border border-amber-500/20">
                      <Beer className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">Pair with: {item.beerPairing}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onViewDetails(item)}
                  className="py-2.5 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Details
                </button>

                <button
                  onClick={() => onAddToCart(item)}
                  className="py-2.5 px-3 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
