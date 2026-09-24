import React, { useState } from 'react';
import { Calendar, Users, Phone, Clock, MessageSquare, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  onSuccess?: (bookingId: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2 Guests',
    seating: 'Skybar Rooftop (Open Air)',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    name: string;
    guests: string;
    date: string;
    time: string;
    seating: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reservation engine API call
    setTimeout(() => {
      const bookingId = `BREW-${Math.floor(100000 + Math.random() * 900000)}`;
      const booking = {
        id: bookingId,
        name: formData.name,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        seating: formData.seating
      };
      setConfirmedBooking(booking);
      setIsSubmitting(false);
      if (onSuccess) onSuccess(bookingId);
    }, 700);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Brewocrat! I would like to reserve a table:\n\n• Name: ${formData.name || 'Guest'}\n• Phone: ${formData.phone || 'N/A'}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests}\n• Seating: ${formData.seating}\n${formData.specialRequests ? `• Special Request: ${formData.specialRequests}\n` : ''}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="reservations" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c13] relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Table Bookings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR TABLE IS <span className="text-amber-400">WAITING</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Reserve your rooftop skybar table or brewery lounge booth in seconds. Instant confirmation with priority seating.
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmation Success Card */
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#111219] border border-emerald-500/40 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Reservation Confirmed
            </span>
            <h3 className="font-display text-2xl font-bold text-white mt-1 mb-2">
              We&apos;re Ready For You, {confirmedBooking.name}!
            </h3>

            <div className="bg-neutral-900/90 rounded-xl p-4 my-6 text-left space-y-2 border border-neutral-800 text-xs font-mono">
              <div className="flex justify-between pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Booking Reference:</span>
                <span className="text-amber-400 font-bold">{confirmedBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="text-white">
                  {confirmedBooking.date} at {confirmedBooking.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Party Size:</span>
                <span className="text-white">{confirmedBooking.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Zone:</span>
                <span className="text-amber-300">{confirmedBooking.seating}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 mb-6">
              A confirmation SMS has been prepared. Our host team at Element One Mall, Sector 47 will hold your table for up to 15 minutes past reservation time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="py-3 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs uppercase tracking-wider font-mono"
              >
                New Booking
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form Card */
          <div className="bg-gradient-to-br from-[#12131b] via-[#101118] to-neutral-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rathore"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 098110 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Reservation Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white outline-none transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white outline-none transition-colors"
                  >
                    <option value="12:30">12:30 PM (Lunch & Brews)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Happy Hour)</option>
                    <option value="18:30">06:30 PM (Sunset Skybar)</option>
                    <option value="19:30">07:30 PM (Dinner & Drinks)</option>
                    <option value="20:30">08:30 PM (Prime Dinner)</option>
                    <option value="21:30">09:30 PM (Nightlife & Music)</option>
                    <option value="22:30">10:30 PM (Late Night Taps)</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Number of Guests *</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white outline-none transition-colors"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple / Pair)</option>
                    <option value="4 Guests">4 Guests (Group)</option>
                    <option value="6 Guests">6 Guests (Party)</option>
                    <option value="8+ Guests">8+ Guests (Celebration)</option>
                    <option value="Corporate Group (12+)">Corporate Group (12+)</option>
                  </select>
                </div>

                {/* Seating preference */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-300 block mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Seating Preference</span>
                  </label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white outline-none transition-colors"
                  >
                    <option value="Skybar Rooftop (Open Air)">Skybar Rooftop (Open Air Terrace)</option>
                    <option value="Brewery Floor (Near Tanks)">Brewery Floor (Beside Fermentation Tanks)</option>
                    <option value="Indoor AC Lounge">Indoor AC Lounge (Cozy & Quiet)</option>
                    <option value="Bar High-Tops">Bar High-Tops (Direct Tap View)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 block mb-2">
                  Special Occasion or Food Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, anniversary, corner table preferred, allergy notes..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                />
              </div>

              {/* Submit Button & Direct Call line */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-black font-display font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Table...' : 'Reserve My Table'}
                </button>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <span>Prefer to speak with host?</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-amber-400 hover:text-amber-300 underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
