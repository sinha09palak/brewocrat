import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  cartCount,
  onOpenCart
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Brewery', href: '#brewery' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#090a0f]/90 via-[#090a0f]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.25em] text-white group-hover:text-amber-400 transition-colors uppercase">
              BREWOCRAT
            </span>
          </a>

          {/* Zone 2: Clean text navigation links (Reviews removed) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-300 hover:text-amber-400 transition-colors relative py-1 text-[13px] tracking-wider uppercase font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions - Book a Table Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-lg bg-neutral-900/80 border border-amber-500/40 text-amber-400 hover:bg-neutral-800 transition-colors"
                aria-label={`View ordered dishes (${cartCount})`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-black font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-95 whitespace-nowrap font-display cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-black shrink-0" />
              <span>Book a Table</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#111219] border-l border-amber-500/20 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <span className="font-display text-lg font-bold tracking-[0.2em] text-white">
                  BREWOCRAT
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded text-neutral-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-neutral-200 hover:text-amber-400 transition-colors py-2 border-b border-neutral-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded font-display shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-wider text-amber-300 bg-neutral-900 border border-amber-500/30 rounded"
              >
                <Phone className="w-4 h-4" />
                Call: {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
