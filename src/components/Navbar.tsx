import React, { useState, useEffect } from 'react';
import { ChaahLogo } from './ChaahLogo';
import { Phone, Calendar, Menu as MenuIcon, X, Eye, Ticket, MapPin } from 'lucide-react';
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

  // Close mobile drawer on Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Fusion Menu', href: '#menu' },
    { label: 'Sunday Buffet', href: '#buffet' },
    { label: 'Luminarium Venue', href: '#luminarium' },
    { label: 'The Restobar', href: '#vibe' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Location', href: '#location' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b120d]/95 backdrop-blur-md border-b border-white/10 py-2 sm:py-2.5 shadow-xl'
            : 'bg-gradient-to-b from-[#0b120d]/95 via-[#0b120d]/80 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Zone 1: Brand Wordmark Logo (~56px desktop / 44px mobile, uncropped) */}
            <a
              href="#"
              className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Cha'ah Restobar Home"
            >
              <ChaahLogo size="md" />
            </a>

            {/* Zone 2: Navigation Links */}
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

            {/* Zone 3: Actions & Outreach Preview Pill */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Phone Call Link */}
              <a
                href="tel:+639150938706"
                className="hidden sm:flex items-center justify-center p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/60 transition-colors"
                aria-label="Call Cha'ah Restobar"
              >
                <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </a>

              {/* Primary CTA Button: Consistent "Reserve a Table" label */}
              <button
                onClick={() => onOpenReservation('general')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-black" strokeWidth={2} aria-hidden="true" />
                <span>Reserve a Table</span>
              </button>

              {/* Subtle Preview Pill at far edge (using Eye icon from consistent icon set) */}
              {/* NOTE: Preview pill for prospective client outreach demonstration. Remove before site goes live. */}
              <button
                onClick={onOpenPitchMode}
                title="Client Outreach Preview (Proposal Highlights)"
                className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full border transition-colors ${
                  isPitchMode
                    ? 'border-amber-400/50 bg-amber-400/10 text-amber-300'
                    : 'border-white/15 bg-white/5 text-zinc-400 hover:text-zinc-200 hover:border-white/30'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-amber-400/90" strokeWidth={2} aria-hidden="true" />
                <span>Preview</span>
              </button>

              {/* Accessible Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-drawer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                ) : (
                  <MenuIcon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer (below 1024px) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
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
                  <X className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
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
                    onOpenReservation('general');
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg text-center shadow-lg"
                >
                  Reserve a Table
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation('sunday-buffet');
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-amber-200 bg-amber-950/40 border border-amber-600/40 rounded-lg flex items-center justify-center gap-2"
                >
                  <Ticket className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} aria-hidden="true" />
                  <span>Sunday Unli Buffet · ₱649/head</span>
                </button>
                {/* Subtle mobile preview trigger */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPitchMode();
                  }}
                  className="w-full py-2 px-3 text-[11px] font-medium text-zinc-400 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 hover:text-zinc-200"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} aria-hidden="true" />
                  <span>Outreach Pitch Deck</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2} aria-hidden="true" />
                <span className="truncate">Villa Kananga, Butuan City</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2} aria-hidden="true" />
                <a href="tel:+639150938706" className="hover:underline" aria-label="Call Cha'ah Restobar">
                  +63 915 093 8706
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar on Mobile (<1024px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0b120d]/95 backdrop-blur-md border-t border-white/10 lg:hidden flex items-center justify-between gap-3 shadow-2xl safe-area-inset-bottom">
        <a
          href="tel:+639150938706"
          aria-label="Call Cha'ah Restobar"
          className="flex items-center justify-center p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/40 text-emerald-400 active:scale-95 transition-transform shrink-0"
        >
          <Phone className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
        </a>
        <button
          onClick={() => onOpenReservation('general')}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] rounded-xl shadow-lg active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-black" strokeWidth={2} aria-hidden="true" />
          <span>Reserve a Table</span>
        </button>
      </div>
    </>
  );
};
