import React from 'react';
import { Calendar, Phone, Utensils, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileStickyBarProps {
  onOpenReservation: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenReservation,
  cartCount,
  onOpenCart
}) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0c0d14]/95 border-t border-amber-500/30 backdrop-blur-md px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2 max-h-[64px]"
    >
      {/* Call button */}
      <a
        href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 min-w-[56px] text-center"
        aria-label="Call Brewocrat"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span className="text-[10px] font-mono mt-0.5">Call</span>
      </a>

      {/* WhatsApp chat */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Brewocrat!%20I%20would%20like%20to%20inquire%20about%20a%20table.`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 min-w-[56px] text-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span className="text-[10px] font-mono mt-0.5">Chat</span>
      </a>

      {/* Order Tray / Menu quick anchor */}
      {cartCount > 0 ? (
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg bg-neutral-900 border border-amber-500/40 text-amber-400 min-w-[56px] relative"
          aria-label="View Order Tray"
        >
          <span className="text-xs font-mono font-bold">{cartCount}</span>
          <span className="text-[10px] font-mono mt-0.5">Tray</span>
        </button>
      ) : (
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 min-w-[56px] text-center"
        >
          <Utensils className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-mono mt-0.5">Menu</span>
        </a>
      )}

      {/* Primary Reserve Table Button */}
      <button
        onClick={onOpenReservation}
        className="flex-1 py-2.5 px-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all truncate"
      >
        <Calendar className="w-4 h-4 shrink-0 text-black" />
        <span className="truncate">Reserve Table</span>
      </button>
    </aside>
  );
};
