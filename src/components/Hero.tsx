import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, ChevronDown, Sparkles, Music2, Award, Clock } from 'lucide-react';
import { HoursStatusBadge } from './HoursStatus';

interface HeroProps {
  onOpenReservation: (type?: string) => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_chaah_interior_dining_1790732221973.jpg"
          alt="Cha'ah Restobar cozy dining room with rattan chandeliers and lush green ceiling"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark botanical scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1310] via-[#0e1310]/85 to-[#0b120d]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0e1310_90%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Real-time Status & Location Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-6"
        >
          <HoursStatusBadge />
        </motion.div>

        {/* Editorial Subtitle with typographic separators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#d6b059] mb-4"
        >
          <span>Thai Flavors</span>
          <span className="text-zinc-500">·</span>
          <span>Filipino Soul</span>
          <span className="text-zinc-500">·</span>
          <span>American Comfort</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl text-balance leading-[1.08]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          From Pad Thai to Sisig, <br className="hidden sm:inline" />
          Craft Cocktails to Cold Brews.
        </motion.h1>

        {/* Supporting descriptive copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl text-balance leading-relaxed"
        >
          Welcome to <strong className="text-white font-semibold">Cha'ah Restobar</strong> in Villa Kananga, Butuan City.
          A warm indoor patio serving authentic three-way fusion cuisine, Sunday unlimited buffets, and live acoustic music.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenReservation('general')}
            className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] shadow-lg shadow-amber-950/40 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>Book Table Reservation</span>
          </button>

          <button
            onClick={() => onOpenReservation('sunday-buffet')}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#f5de99] bg-[#18261d]/90 hover:bg-[#203427] border border-[#d6b059]/40 hover:border-[#d6b059] active:scale-95 transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sunday Unli Buffet · ₱649</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all"
          >
            <Utensils className="w-4 h-4 text-zinc-400" />
            <span>Browse Full Menu</span>
          </button>
        </motion.div>

        {/* Clean Credibility Markers (Zero-Pill Discipline) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 sm:mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl text-center"
        >
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">2020</span>
            <span className="text-xs text-zinc-400 mt-0.5">Established in Butuan</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[#e5be5a] font-mono tabular-nums">22,000+</span>
            <span className="text-xs text-zinc-400 mt-0.5">Facebook Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">3-in-1</span>
            <span className="text-xs text-zinc-400 mt-0.5">Thai · Filipino · American</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[#e5be5a] font-mono tabular-nums">₱649</span>
            <span className="text-xs text-zinc-400 mt-0.5">Sunday Unli Feast</span>
          </div>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 text-zinc-500 flex flex-col items-center gap-1 hover:text-zinc-300 transition-colors cursor-pointer"
          onClick={onExploreMenu}
        >
          <span className="text-[11px] uppercase tracking-widest font-medium">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
