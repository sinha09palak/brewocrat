import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070a] text-neutral-400 text-xs border-t border-neutral-900 pt-12 pb-24 md:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-bold tracking-[0.25em] text-white uppercase block">
              BREWOCRAT
            </span>
            <p className="text-amber-400 font-display text-xs tracking-wider uppercase">
              “Brewery • Skybar • Kitchen”
            </p>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Crafted brews, bold flavours, and unforgettable nights under the stars in the heart of Gurugram.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="Brewocrat on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="Brewocrat on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="Brewocrat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-xs font-bold uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#brewery" className="hover:text-amber-400 transition-colors">
                  Microbrewery Beers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Kitchen Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors">
                  Skybar Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-amber-400 transition-colors">
                  Reserve a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-xs font-bold uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="space-y-3 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="text-white hover:text-amber-400">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  Sector 47, Gurugram, Haryana 122008
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-400">12:00 PM – 12:00 AM Daily</span>
              </div>
            </div>
          </div>

          {/* Location & Access */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-xs font-bold uppercase tracking-widest">
              Location Landmark
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              2nd Floor, Element One Mall, Malibu Towne, Block A, Sector 47. Seamless valet parking and lift access directly to skybar level.
            </p>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-amber-300 font-mono">
              ✓ Open Today: 12 PM - 12 AM
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <p>© 2026 Brewocrat. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors uppercase tracking-wider font-mono cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
