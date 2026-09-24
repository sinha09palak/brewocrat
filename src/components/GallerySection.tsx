import React, { useState } from 'react';
import { Camera, Sparkles, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filterTabs = ['All', 'Food', 'Drinks', 'Ambience', 'Events', 'People'];

  const filteredGallery =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c13] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Vignettes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            THE SKYBAR <span className="text-amber-400">GALLERY</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            A glimpse into the nights, artisanal food craft, freshly tapped beers, and golden hour gatherings at Brewocrat Gurugram.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          {filterTabs.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20 font-display'
                    : 'bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-amber-500/40 bg-neutral-900 transition-all duration-300 shadow-xl h-64 sm:h-72"
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                type={item.category === 'Drinks' ? 'beer' : item.category === 'Food' ? 'food' : 'ambience'}
              />
              {/* Overlay with smooth reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-90">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-amber-400 hover:text-black transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <ImageWithFallback
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[70vh] object-contain"
                type="ambience"
              />
            </div>

            <div className="p-6 bg-[#111219] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  {selectedPhoto.category} • Brewocrat Gurugram
                </span>
                <h4 className="font-display text-xl font-bold text-white mt-1">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-neutral-300 mt-1">{selectedPhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
