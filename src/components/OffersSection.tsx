import React, { useState } from 'react';
import { Tag, Sparkles, Clock, AlertCircle, Edit3, Plus, Trash2, Check } from 'lucide-react';
import { Offer, INITIAL_OFFERS } from '../data/restaurantData';

interface OffersSectionProps {
  onOpenReservation: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onOpenReservation }) => {
  const [offers, setOffers] = useState<Offer[]>(INITIAL_OFFERS);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // New offer draft for editor
  const [newOffer, setNewOffer] = useState<Partial<Offer>>({
    title: '',
    discount: '',
    badge: 'Special',
    description: '',
    validity: '',
    terms: '',
    code: ''
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOffer.title || !newOffer.discount) return;

    const created: Offer = {
      id: `offer-${Date.now()}`,
      title: newOffer.title || 'Seasonal Brew Offer',
      discount: newOffer.discount || 'Special Discount',
      badge: newOffer.badge || 'Limited',
      description: newOffer.description || 'Valid during regular dining hours.',
      validity: newOffer.validity || 'Limited Period',
      terms: newOffer.terms || 'Terms apply. Subject to availability.',
      code: newOffer.code?.toUpperCase() || 'BREWVIP'
    };

    setOffers([created, ...offers]);
    setNewOffer({
      title: '',
      discount: '',
      badge: 'Special',
      description: '',
      validity: '',
      terms: '',
      code: ''
    });
  };

  const handleDeleteOffer = (id: string) => {
    setOffers(offers.filter((o) => o.id !== id));
  };

  return (
    <section id="offers" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with Admin/Edit quick toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold mb-1.5">
              <Tag className="w-4 h-4" />
              <span>Dining Promotions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              TONIGHT&apos;S <span className="text-amber-400">SPECIAL</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-2 font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Offers subject to seasonal availability & active dining partner terms.</span>
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsEditorOpen(!isEditorOpen)}
              className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEditorOpen ? 'Close Offer Manager' : 'Manage / Edit Offers'}</span>
            </button>
          </div>
        </div>

        {/* Staff / Content Editor Panel */}
        {isEditorOpen && (
          <div className="mb-12 p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/30 backdrop-blur-md animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">
                  Staff Content Control: Dining Offers
                </h3>
                <p className="text-xs text-neutral-400">
                  Add or edit current promotional rates, partner platform deals, and table booking discounts.
                </p>
              </div>
            </div>

            <form onSubmit={handleAddOffer} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Offer Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Zomato Gold Special"
                  value={newOffer.title}
                  onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Discount Highlight *
                </label>
                <input
                  type="text"
                  placeholder="e.g. FLAT 30% OFF"
                  value={newOffer.discount}
                  onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Promo Code / Channel
                </label>
                <input
                  type="text"
                  placeholder="e.g. BREW30"
                  value={newOffer.code}
                  onChange={(e) => setNewOffer({ ...newOffer, code: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 outline-none uppercase font-mono"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Offer Description & Validity
                </label>
                <input
                  type="text"
                  placeholder="Available on total dining bill through selected dining platforms or direct bookings..."
                  value={newOffer.description}
                  onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-black font-display font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Publish Offer
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-2xl bg-gradient-to-br from-[#12131c] via-[#101118] to-neutral-900 border border-amber-500/25 p-6 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {offer.badge}
                  </span>

                  {isEditorOpen && (
                    <button
                      onClick={() => handleDeleteOffer(offer.id)}
                      className="p-1 rounded text-neutral-500 hover:text-rose-400 transition-colors"
                      title="Delete offer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Big Discount Headline */}
                <div className="mb-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                    {offer.discount}
                  </h3>
                  <h4 className="font-display text-sm font-bold text-white uppercase mt-1">
                    {offer.title}
                  </h4>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {offer.description}
                </p>

                <div className="space-y-1.5 text-[11px] font-mono text-neutral-400 pt-3 border-t border-neutral-800">
                  <p>
                    <span className="text-neutral-500">Timing:</span> {offer.validity}
                  </p>
                  <p className="line-clamp-1">
                    <span className="text-neutral-500">Terms:</span> {offer.terms}
                  </p>
                </div>
              </div>

              {/* Promo code & Reserve CTA */}
              <div className="pt-6 mt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                {offer.code ? (
                  <button
                    onClick={() => handleCopyCode(offer.code!)}
                    className="flex-1 py-2 px-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 rounded text-xs font-mono text-amber-300 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Tag className="w-3.5 h-3.5" />
                        <span>CODE: {offer.code}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="text-xs text-neutral-400 font-mono">Walk-in or App</div>
                )}

                <button
                  onClick={onOpenReservation}
                  className="py-2 px-4 bg-amber-400 hover:bg-amber-300 text-black font-display text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
