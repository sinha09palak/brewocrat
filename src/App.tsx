/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Signatures } from './components/Signatures';
import { BrewerySection } from './components/BrewerySection';
import { MenuSection } from './components/MenuSection';
import { SkybarExperience } from './components/SkybarExperience';
import { OffersSection } from './components/OffersSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ItemDetailsModal } from './components/ItemDetailsModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { MenuItem, MENU_ITEMS } from './data/restaurantData';
import { Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenReservation = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added ${item.name} to order tray`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectBeerFromBrewery = (beerName: string) => {
    // Find matching or relevant craft beer in menu
    const matched = MENU_ITEMS.find((m) =>
      m.name.toLowerCase().includes(beerName.toLowerCase()) ||
      m.category === 'Craft Beer'
    );
    if (matched) {
      handleAddToCart(matched);
    } else {
      handleOpenReservation();
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Flow */}
      <main className="flex-1">
        {/* Full Screen Cinematic Hero */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Our Story / Split Screen Experience */}
        <OurStory />

        {/* Brewocrat Signatures Spotlight */}
        <Signatures
          onAddToCart={handleAddToCart}
          onViewDetails={(item) => setDetailItem(item)}
        />

        {/* In-House Microbrewery Showcase */}
        <BrewerySection onSelectBeerToOrder={handleSelectBeerFromBrewery} />

        {/* Kitchen & Tap Menu with Category Tabs & Filters */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onViewDetails={(item) => setDetailItem(item)}
          addedItemIds={cart.map((ci) => ci.item.id)}
        />

        {/* Skybar Rooftop Atmosphere */}
        <SkybarExperience onOpenReservation={handleOpenReservation} />

        {/* Dining Offers & Tonight's Specials (with Content Manager) */}
        <OffersSection onOpenReservation={handleOpenReservation} />

        {/* Visual Vignettes & Gallery */}
        <GallerySection />

        {/* Social Proof & Customer Reviews */}
        <ReviewsSection />

        {/* VIP Table Reservation Section */}
        <ReservationSection />

        {/* Location & Map Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenReservation={handleOpenReservation}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Item Details Modal */}
      <ItemDetailsModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        onAddToCart={handleAddToCart}
        isAdded={detailItem ? cart.some((ci) => ci.item.id === detailItem.id) : false}
      />

      {/* Order Tray Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onProceedToReservation={handleOpenReservation}
      />

      {/* Subtle Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 p-4 rounded-xl bg-[#111219] border border-amber-500/40 text-amber-300 text-xs font-mono shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
