import React, { useState, useEffect } from 'react';
import { ChaahLogo } from './ChaahLogo';
import { Phone, Calendar, Menu as MenuIcon, X, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface NavbarProps {
  onOpenReservation: (type?: string) => void;
  onOpenPitchMode: () => void;
  isPitchMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenPitchMode,
  isPitchMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fusion Menu', href: '#menu' },
    { label: 'Sunday Buffet', href: '#buffet' },
    { label: 'The Restobar', href: '#vibe' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Location', href: '#location' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b120d]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0b120d]/90 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Zone 1: Single Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Cha'ah Restobar Home"
            >
              <ChaahLogo size="sm" variant="color" />
            </a>

            {/* Zone 2: Clean Typography Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#dcb35c] relative py-1 text-xs uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Pitch Preview Trigger */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Pitch Mode Toggle Button for prospective outreach review */}
              <button
                onClick={onOpenPitchMode}
                title="Client Outreach Preview & Proposal Highlights"
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                  isPitchMode
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="whitespace-nowrap">Client Outreach Deck</span>
              </button>

              {/* Direct Call / Contact button */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden sm:flex items-center justify-center p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/60 transition-colors"
                aria-label="Call Cha'ah Restobar"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Primary CTA: Book Table */}
              <button
                onClick={() => onOpenReservation('general')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-[#0f1712] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <ChaahLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5"
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-200 hover:text-[#dcb35c] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation('sunday-buffet');
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg text-center shadow-lg"
                >
                  Book Sunday Unli Buffet (₱649)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation('general');
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-900/60 border border-emerald-700/50 rounded-lg text-center"
                >
                  Book A Table
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPitchMode();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-medium text-amber-300 bg-amber-950/30 border border-amber-800/40 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Client Pitch & Proposal Deck
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Villa Kananga, Butuan City</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
