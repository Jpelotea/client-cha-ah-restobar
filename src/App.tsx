/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { SundayBuffetSection } from './components/SundayBuffetSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { ScheduleSection } from './components/ScheduleSection';
import { LocationSection } from './components/LocationSection';
import { ReservationModal } from './components/ReservationModal';
import { OutreachPitchModal } from './components/OutreachPitchModal';
import { Footer } from './components/Footer';
import { MenuItem } from './data/menuData';
import { Sparkles, X } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationType, setReservationType] = useState('general');
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [wishlist, setWishlist] = useState<MenuItem[]>([]);
  const [showOutreachBanner, setShowOutreachBanner] = useState(true);

  const handleOpenReservation = (type: string = 'general') => {
    setReservationType(type);
    setIsReservationOpen(true);
  };

  const handleToggleWishlist = (item: MenuItem) => {
    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === item.id);
      if (exists) {
        return prev.filter((w) => w.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleOpenReservationWithWishlist = () => {
    setReservationType('regular');
    setIsReservationOpen(true);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b100d] text-[#f4f2ec] flex flex-col font-sans selection:bg-[#c99738]/30 selection:text-[#f8e5b9]">
      {/* Client Outreach Top Bar (Dismissible, for first client presentation) */}
      {showOutreachBanner && (
        <div className="bg-gradient-to-r from-amber-950 via-[#18261e] to-amber-950 text-amber-200 text-xs px-4 py-2 border-b border-amber-600/30 flex items-center justify-between z-50 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-1 text-center">
            <span className="inline-flex items-center gap-1 font-bold text-[#f5de99]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Cha'ah Restobar Client Outreach Preview
            </span>
            <span className="hidden md:inline text-zinc-400">·</span>
            <span className="hidden md:inline text-zinc-300">
              Interactive prototype built for executive pitch & digital reservation upgrade
            </span>
            <button
              onClick={() => setIsPitchOpen(true)}
              className="ml-2 font-bold underline text-white hover:text-amber-300 transition-colors cursor-pointer"
            >
              View Proposal Deck →
            </button>
          </div>
          <button
            onClick={() => setShowOutreachBanner(false)}
            className="text-amber-300/70 hover:text-white p-1 ml-2"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Top Bar */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onOpenPitchMode={() => setIsPitchOpen(true)}
        isPitchMode={isPitchOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        <MenuSection
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenReservationWithWishlist={handleOpenReservationWithWishlist}
        />

        <SundayBuffetSection onOpenReservation={handleOpenReservation} />

        <AtmosphereSection
          onOpenEventInquiry={() => handleOpenReservation('event')}
        />

        <ScheduleSection onBookNow={() => handleOpenReservation('general')} />

        <LocationSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenPitch={() => setIsPitchOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        defaultType={reservationType}
        wishlist={wishlist}
      />

      {/* Prospective Client Outreach & Pitch Presentation Modal */}
      <OutreachPitchModal
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
      />
    </div>
  );
}
