import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, ChevronDown, Ticket, MapPin, Clock, Phone } from 'lucide-react';
import { HoursStatusBadge, getTodayFormattedHoursString } from './HoursStatus';

// ============================================================================
// HERO IMAGES CONFIGURATION
// Place photography URLs here. Current primary image is first.
// NOTE: Use only photos owned by the client or used with their explicit permission.
// Recommended photography specs: Source images at least 1920px wide in WebP format (quality ~80).
// ============================================================================
export const HERO_IMAGES = [
  {
    url: '/src/assets/images/hero_chaah_interior_dining_1790732221973.jpg',
    alt: "Cha'ah Restobar cozy dining room with rattan chandeliers and ambient lighting",
    label: 'Restobar & Patio Atmosphere'
  },
  {
    url: '/src/assets/images/food_pad_thai_fusion_1790732234875.jpg',
    alt: 'Signature gourmet Pad Thai with jumbo tiger prawns and crushed peanuts',
    label: 'Signature Pad Thai'
  },
  {
    url: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
    alt: 'Sizzling Filipino Sisig and rich pork Kare-Kare fusion feast',
    label: 'Sizzling Sisig & Kare-Kare'
  }
];

interface HeroProps {
  onOpenReservation: (type?: string) => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [todayHoursSummary, setTodayHoursSummary] = useState(getTodayFormattedHoursString());

  // Detect user prefers-reduced-motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update today's hours periodically
  useEffect(() => {
    setTodayHoursSummary(getTodayFormattedHoursString());
    const interval = setInterval(() => {
      setTodayHoursSummary(getTodayFormattedHoursString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Slow crossfade slideshow: 6 seconds per slide, pauses on hover, disabled on reduced motion
  useEffect(() => {
    if (HERO_IMAGES.length <= 1 || isHovered || prefersReducedMotion) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, prefersReducedMotion]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[100svh] flex flex-col justify-between pt-20 pb-4 sm:pt-22 sm:pb-5 overflow-hidden"
    >
      {/* Background Slideshow with Layered Soft Vignette Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {HERO_IMAGES.map((image, index) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover object-[center_35%] transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
            referrerPolicy="no-referrer"
          />
        ))}

        {/* 
          Soft radial vignette gradient focused behind the central text block (eyebrow, headline, copy, CTAs):
          Darkens the middle area slightly for >= 4.5:1 WCAG AA text contrast while keeping left & right edges lighter and vivid.
        */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,13,10,0.72)_0%,rgba(8,13,10,0.48)_50%,rgba(8,13,10,0.18)_80%,rgba(8,13,10,0.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b100d] via-transparent to-[#0b100d]/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Real-time Status in Asia/Manila (PHT) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-3 sm:mb-4"
        >
          <HoursStatusBadge />
        </motion.div>

        {/* Editorial Subtitle with >= 4.5:1 Contrast & Text Shadow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#edd382] mb-3"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
        >
          <span>Thai Flavors</span>
          <span className="text-zinc-400 font-bold" aria-hidden="true">·</span>
          <span>Filipino Soul</span>
          <span className="text-zinc-400 font-bold" aria-hidden="true">·</span>
          <span>American Comfort</span>
        </motion.div>

        {/* Main Display Headline: Wraps to 2 balanced lines on desktop with loosened letter-spacing */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(1.9rem,4.4vw,4.1rem)] font-bold text-white max-w-5xl leading-[1.12] sm:leading-[1.15] text-center"
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-0.005em',
            textWrap: 'balance',
            textShadow: '0 2px 12px rgba(0,0,0,0.8)'
          }}
        >
          <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">From Pad Thai to Sisig,</span>{' '}
          <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">Craft Cocktails to Cold Brews.</span>
        </motion.h1>

        {/* 
          Hero Paragraph: Max width 620-660px, text-wrap: balance, text-shadow,
          presented on desktop as three short, evenly sized lines by sentence.
        */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-zinc-100 max-w-[640px] leading-relaxed text-center"
          style={{
            textWrap: 'balance',
            textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.95)'
          }}
        >
          <span className="lg:block">
            Welcome to <strong className="text-white font-semibold">Cha'ah Restobar</strong> in Villa Kananga, Butuan City.{' '}
          </span>
          <span className="lg:block">
            Thai, Filipino and American favorites, reimagined under one roof.{' '}
          </span>
          <span className="lg:block">
            Enjoy Sunday unlimited buffets and live acoustic music.
          </span>
        </motion.p>

        {/* Action Buttons: Unified "Reserve a Table" Primary CTA and Ticket-icon Buffet CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onOpenReservation('general')}
            className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] shadow-lg shadow-amber-950/40 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" strokeWidth={2} aria-hidden="true" />
            <span>Reserve a Table</span>
          </button>

          {/* Secondary Buffet CTA: Non-wrapping copy with Ticket icon */}
          <button
            onClick={() => onOpenReservation('sunday-buffet')}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[#f5de99] bg-[#18261d]/90 hover:bg-[#203427] border border-[#d6b059]/40 hover:border-[#d6b059] active:scale-95 transition-all shadow-md whitespace-nowrap"
          >
            <Ticket className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span className="whitespace-nowrap">Sunday Unli Buffet · ₱649/head</span>
          </button>

          {/* Tertiary Menu CTA */}
          <button
            onClick={onExploreMenu}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-zinc-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95 transition-all whitespace-nowrap"
          >
            <Utensils className="w-4 h-4 text-zinc-300 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>Browse Full Menu</span>
          </button>
        </motion.div>

        {/* Slideshow indicator dots: at least 24px spacing from buttons, keyboard accessible */}
        {HERO_IMAGES.length > 1 && !prefersReducedMotion && (
          <div
            className="mt-6 sm:mt-7 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Hero background slideshow"
          >
            {HERO_IMAGES.map((img, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={img.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}: ${img.label}`}
                  tabIndex={0}
                  onClick={() => setCurrentSlideIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setCurrentSlideIndex(idx);
                    }
                  }}
                  className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400/70 ${
                    isActive
                      ? 'w-7 bg-[#dcb35c] shadow-sm shadow-amber-400/50'
                      : 'w-2 bg-white/35 hover:bg-white/70'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Above-the-fold Bottom Info Strip & Scroll Chevron */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Bottom Info Strip: Location, Today's Hours, Call Us */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-300">
          <a
            href="#location"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>Villa Kananga, Butuan City</span>
          </a>

          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>

          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>Today: {todayHoursSummary}</span>
          </div>

          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>

          <a
            href="tel:+639150938706"
            aria-label="Call Cha'ah Restobar"
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>Call: +63 915 093 8706</span>
          </a>
        </div>

        {/* Scroll prompt */}
        <button
          type="button"
          onClick={onExploreMenu}
          className="mt-2.5 mx-auto flex flex-col items-center gap-0.5 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer group focus:outline-none focus:ring-1 focus:ring-amber-400/40 rounded-md p-1"
          aria-label="Scroll to discover menu"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to Discover</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
