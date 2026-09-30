import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Sparkles, Plus, Check, GlassWater, ArrowRight, X } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';

interface MenuSectionProps {
  wishlist: MenuItem[];
  onToggleWishlist: (item: MenuItem) => void;
  onOpenReservationWithWishlist: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  wishlist,
  onToggleWishlist,
  onOpenReservationWithWishlist
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'thai', label: 'Thai Fusion' },
    { id: 'filipino', label: 'Filipino Classics' },
    { id: 'american', label: 'American Comfort' },
    { id: 'cocktails', label: 'Craft Cocktails' },
    { id: 'coffee-matcha', label: 'Matcha & Coffee' },
    { id: 'desserts', label: 'Signature Sweets' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isInWishlist = (id: string) => wishlist.some((w) => w.id === id);

  const wishlistTotal = useMemo(() => {
    return wishlist.reduce((acc, curr) => acc + curr.price, 0);
  }, [wishlist]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0b100d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#d6b059] mb-3">
            Culinary Craftsmanship
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Three-Way Fusion Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A curated intersection of aromatic Thai spices, savory Filipino heritage dishes, and comforting American favorites. Prepared fresh with quality local ingredients.
          </p>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Category Tabs (Segmented control buttons as per Constitution Section 1A) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#dcb35c] text-black shadow-md shadow-amber-950/20'
                      : 'text-zinc-400 hover:text-zinc-200 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Pad Thai, Sisig, Matcha..."
              className="w-full bg-[#121c15] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#dcb35c] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const added = isInWishlist(item.id);
            return (
              <motion.div
                layout
                key={item.id}
                className="group flex flex-col bg-[#111a14] rounded-2xl border border-white/5 overflow-hidden hover:border-[#dcb35c]/40 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
              >
                {/* Image Container with Safe Fallback */}
                <div
                  className="relative h-56 sm:h-60 w-full overflow-hidden cursor-pointer bg-[#18261e]"
                  onClick={() => setActiveItemModal(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a14] via-transparent to-black/20" />

                  {/* Category kicker */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-zinc-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <span>{item.categoryLabel}</span>
                  </div>

                  {/* Spicy indicator */}
                  {item.spicyLevel && item.spicyLevel > 0 ? (
                    <div className="absolute top-3 right-3 flex items-center gap-0.5 text-xs text-amber-400 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md">
                      <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-[10px] font-mono">{item.spicyLevel > 1 ? 'Spicy' : 'Mild'}</span>
                    </div>
                  ) : null}

                  {/* Quick price tag */}
                  <div className="absolute bottom-3 right-3 text-lg font-bold text-white font-mono tabular-nums bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                    ₱{item.price.toLocaleString()}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Thai subtitle if present */}
                    {item.thaiName && (
                      <span className="text-xs text-[#dcb35c]/80 tracking-wide font-medium block mb-1">
                        {item.thaiName}
                      </span>
                    )}

                    <h3
                      onClick={() => setActiveItemModal(item)}
                      className="text-lg font-bold text-white group-hover:text-[#ecd48d] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metadata tags (unboxed, separated by clean dots as per Constitution Section 1A) */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                      {item.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span className="text-zinc-600">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveItemModal(item)}
                      className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      View Details & Pairing →
                    </button>

                    <button
                      onClick={() => onToggleWishlist(item)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        added
                          ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-600/40'
                          : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                      title={added ? 'Remove from tasting plan' : 'Add to tasting plan'}
                    >
                      {added ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#dcb35c]" />
                          <span>Add to Tasting Plan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-zinc-400">
            <p className="text-base">No culinary items match your search for "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-[#dcb35c] hover:underline"
            >
              Reset Filters & View All
            </button>
          </div>
        )}

        {/* Floating Tasting Plan / Reservation Wishlist Banner */}
        <AnimatePresence>
          {wishlist.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="fixed bottom-6 left-4 right-4 max-w-2xl mx-auto z-30"
            >
              <div className="bg-[#121c16]/95 border border-[#dcb35c]/50 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Your Planned Feast ({wishlist.length} {wishlist.length === 1 ? 'item' : 'items'})
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Est. Total:{' '}
                      <span className="font-mono tabular-nums text-[#dcb35c]">
                        ₱{wishlistTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    onClick={onOpenReservationWithWishlist}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                  >
                    <span>Reserve with Pre-Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#111a14] border border-[#dcb35c]/30 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Image */}
              <div className="relative h-64 w-full bg-[#18261e] shrink-0">
                <img
                  src={activeItemModal.image}
                  alt={activeItemModal.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111a14] via-transparent to-black/40" />
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between">
                  <div>
                    {activeItemModal.thaiName && (
                      <span className="text-xs text-[#dcb35c] font-medium block">
                        {activeItemModal.thaiName}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white">
                      {activeItemModal.name}
                    </h3>
                  </div>
                  <div className="text-2xl font-bold text-[#dcb35c] font-mono tabular-nums">
                    ₱{activeItemModal.price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Flavor Profile & Story
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {activeItemModal.description}
                  </p>
                </div>

                {activeItemModal.ingredients && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Key Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItemModal.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-xs text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeItemModal.pairing && (
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 flex items-start gap-3">
                    <GlassWater className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wide block">
                        Restobar Drink Pairing
                      </span>
                      <p className="text-xs text-zinc-300 mt-0.5">
                        {activeItemModal.pairing}
                      </p>
                    </div>
                  </div>
                )}

                {/* Modal footer action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      onToggleWishlist(activeItemModal);
                    }}
                    className={`flex-1 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isInWishlist(activeItemModal.id)
                        ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-600/40'
                        : 'bg-gradient-to-r from-amber-300 to-amber-500 text-black shadow-md'
                    }`}
                  >
                    {isInWishlist(activeItemModal.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Included in Tasting Plan</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to My Tasting Plan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
