import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Beer, Check, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onViewDetails: (item: MenuItem) => void;
  addedItemIds: string[];
}

type CategoryType = 'All' | 'Craft Beer' | 'Starters' | 'Burgers' | 'Main Course' | 'Pizza' | 'Drinks' | 'Desserts';

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onViewDetails,
  addedItemIds
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const categories: CategoryType[] = [
    'All',
    'Craft Beer',
    'Starters',
    'Burgers',
    'Main Course',
    'Pizza',
    'Drinks',
    'Desserts'
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchCategory = activeCategory === 'All' || item.category === activeCategory;
      // Search match
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      // Dietary match
      const matchDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);

      return matchCategory && matchSearch && matchDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skybar & Kitchen Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BOLD FLAVOURS.{' '}
            <span className="text-amber-400">ARTISANAL POURS.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From freshly brewed craft beers on tap to gourmet smashed burgers, hand-stretched pizzas, and royal mains — prepared fresh to order in our open kitchen.
          </p>
        </div>

        {/* Filter Toolbar: Category Tabs + Search + Dietary */}
        <div className="mb-6 space-y-3">
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-800">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20 font-display'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-850 bg-neutral-900/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search bar & Dietary Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search food, brews, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 w-full sm:w-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Pure Veg
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-rose-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">No menu items match your search or filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline uppercase tracking-wider font-mono"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-[#111219] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                >
                  <div>
                    {/* Item Image with Fallback */}
                    <div className="relative h-48 overflow-hidden bg-neutral-900">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        type={item.category === 'Craft Beer' || item.category === 'Drinks' ? 'beer' : 'food'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Dietary dot & category clean metadata */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full border border-white/20 flex items-center justify-center ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                        {item.isBestseller && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-black font-bold">
                            Bestseller
                          </span>
                        )}
                        {item.isSignature && !item.isBestseller && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-500/40 font-semibold">
                            Signature
                          </span>
                        )}
                      </div>

                      {/* Price badge */}
                      <div className="absolute bottom-3 right-3 text-white font-mono font-bold text-base px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 tabular-nums">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400 uppercase font-mono tracking-wider">
                        <span>{item.category}</span>
                        {item.alcoholByVolume && (
                          <>
                            <span>•</span>
                            <span className="text-amber-400">{item.alcoholByVolume}</span>
                          </>
                        )}
                        {item.spiceLevel && item.spiceLevel !== 'None' && (
                          <>
                            <span>•</span>
                            <span className="text-rose-400">{item.spiceLevel} Spice</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {item.name}
                      </h3>

                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {item.beerPairing && (
                        <p className="text-[11px] text-amber-300/90 pt-1 flex items-center gap-1.5 font-sans">
                          <Beer className="w-3 h-3 shrink-0 text-amber-400" />
                          <span className="truncate">Pairs with: {item.beerPairing}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-neutral-800/80 mt-2">
                    <button
                      onClick={() => onViewDetails(item)}
                      className="py-2.5 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-neutral-800"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </button>

                    <button
                      onClick={() => onAddToCart(item)}
                      className={`py-2.5 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ${
                        isAdded
                          ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                          : 'bg-amber-400 hover:bg-amber-300 text-black shadow-md shadow-amber-500/10 active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          Add to Order
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
