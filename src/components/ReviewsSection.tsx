import React, { useState } from 'react';
import { Star, MessageSquarePlus, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, Review, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    review: '',
    recommendedItem: ''
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const created: Review = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      date: 'Just now',
      review: newReview.review,
      verified: true,
      avatarBg: 'bg-amber-600',
      recommendedItem: newReview.recommendedItem || 'Belgian Wit & Burgers'
    };

    setReviews([created, ...reviews]);
    setNewReview({ name: '', rating: 5, review: '', recommendedItem: '' });
    setIsModalOpen(false);
  };

  return (
    <section id="reviews" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Big 4.4 Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-neutral-800">
          <div className="lg:col-span-7 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Patron Experiences</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              CELEBRATED IN <span className="text-amber-400">GURUGRAM</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from craft beer enthusiasts, rooftop sunset lovers, and foodies across Delhi NCR who make Brewocrat their weekend sanctuary.
            </p>
          </div>

          {/* Social Proof Aggregate Scoreboard */}
          <div className="lg:col-span-5 bg-[#12131b] border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 font-display text-4xl sm:text-5xl font-extrabold text-white">
                <span>{RESTAURANT_INFO.rating}</span>
                <span className="text-2xl text-neutral-500">/ 5</span>
              </div>
              <div className="flex items-center gap-1 my-2 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-amber-400/50 text-amber-400/50'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Based on <strong className="text-white">{RESTAURANT_INFO.reviewCount}</strong> Google & Platform Reviews
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-lg bg-neutral-900 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Add Your Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#111219] border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-display font-bold text-sm shadow-md`}
                    >
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <span title="Verified Diner" className="inline-flex items-center text-amber-400">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  “{rev.review}”
                </p>
              </div>

              {rev.recommendedItem && (
                <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-500">Favorite Picks:</span>
                  <span className="text-amber-300 font-semibold">{rev.recommendedItem}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leave Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#111219] rounded-2xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white uppercase mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Tell us how you enjoyed the brews, rooftop skybar ambience and kitchen plates.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sahil Kapoor"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 block mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1 text-amber-400 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-amber-400 ml-2">
                    {newReview.rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 block mb-1">
                  Favorite Dish or Craft Beer
                </label>
                <input
                  type="text"
                  placeholder="e.g. Crisp Lager & Double Smashed Burger"
                  value={newReview.recommendedItem}
                  onChange={(e) => setNewReview({ ...newReview, recommendedItem: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 block mb-1">
                  Your Review *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about the service, beer freshness, music, or seating..."
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-xs text-white focus:border-amber-400 outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded text-xs uppercase font-mono text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-amber-400 hover:bg-amber-300 text-black font-display text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
