import React from 'react';
import { MapPin, Phone, Clock, Car, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us In Gurugram</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                BREWOCRAT – <br />
                <span className="text-amber-400">BREWERY SKYBAR & KITCHEN</span>
              </h2>
            </div>

            {/* Address Card */}
            <div className="space-y-6 text-sm text-neutral-300">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-white font-bold text-sm uppercase">Address</h4>
                  <p className="text-neutral-300 mt-1 leading-relaxed">
                    2nd Floor, Element One Mall,<br />
                    Malibu Towne, Block A, Sector 47,<br />
                    Gurugram, Haryana 122008
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-mono mt-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Contact & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <Phone className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-display text-white font-bold text-xs uppercase">Reservations & Desk</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-amber-400 font-mono text-sm block mt-1 hover:underline font-bold"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-[11px] text-neutral-400 font-mono block mt-1">Direct Call & WhatsApp</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <Clock className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-display text-white font-bold text-xs uppercase">Operating Hours</h4>
                  <p className="text-white font-mono text-sm mt-1">
                    12:00 PM – 12:00 AM
                  </p>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-1">Open All 7 Days</span>
                </div>
              </div>

              {/* Parking feature */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400 font-mono">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Complimentary Valet Parking available at Element One Mall main lobby entrance.</span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3 px-6 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Host Desk</span>
              </a>
            </div>
          </div>

          {/* Right Map Canvas Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl h-[420px] bg-neutral-900">
              <iframe
                title="Brewocrat Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309201463162!2d77.0517!3d28.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d180b55555555%3A0x6b9d6281e85f096!2sElement%20One%20Mall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating map pin card */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-[#090a0f]/95 border border-amber-500/40 backdrop-blur-md shadow-2xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-display font-bold">
                    B
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      BREWOCRAT
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-mono">2nd Fl, Element One Mall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
