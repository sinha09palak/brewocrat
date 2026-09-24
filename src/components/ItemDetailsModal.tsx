import React from 'react';
import { X, Plus, Beer, Flame, Clock, Sparkles } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface ItemDetailsModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  isAdded: boolean;
}

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
  item,
  onClose,
  onAddToCart,
  isAdded
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-[#111219] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-amber-400 hover:text-black transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative h-60 overflow-hidden bg-neutral-900">
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            type={item.category === 'Craft Beer' || item.category === 'Drinks' ? 'beer' : 'food'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111219] via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full border border-white/20 ${
                item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            />
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-white border border-white/10">
              {item.category}
            </span>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {item.name}
              </h3>
              <p className="text-xs font-mono text-amber-400 uppercase mt-1">
                Brewocrat Kitchen & Skybar
              </p>
            </div>
            <div className="text-right">
              <span className="font-display text-2xl font-black text-amber-400 font-mono">
                ₹{item.price}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">Taxes as applicable</span>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {item.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {item.prepTime && (
              <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <div className="text-xs">
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Preparation</span>
                  <span className="text-white font-medium">{item.prepTime}</span>
                </div>
              </div>
            )}

            {item.alcoholByVolume && (
              <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-2.5">
                <Beer className="w-4 h-4 text-amber-400" />
                <div className="text-xs">
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">ABV Rating</span>
                  <span className="text-white font-medium">{item.alcoholByVolume}</span>
                </div>
              </div>
            )}

            {item.spiceLevel && item.spiceLevel !== 'None' && (
              <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-rose-400" />
                <div className="text-xs">
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Spice Profile</span>
                  <span className="text-white font-medium">{item.spiceLevel}</span>
                </div>
              </div>
            )}
          </div>

          {/* Beer Pairing recommendation */}
          {item.beerPairing && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
              <Beer className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block text-[10px]">
                  Brewmaster Beer Pairing Recommendation
                </span>
                <span className="text-neutral-200">
                  Enjoy best alongside our cold-tapped <strong className="text-white">{item.beerPairing}</strong>
                </span>
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onAddToCart(item);
                onClose();
              }}
              className="py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isAdded ? 'Add Another to Order' : 'Add to Order'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
