import React from 'react';
import { ChaahLogo } from './ChaahLogo';
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const Footer: React.FC<{ onOpenPitch: () => void }> = ({ onOpenPitch }) => {
  return (
    <footer className="bg-[#070b08] border-t border-white/10 pt-16 pb-24 lg:pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand Wordmark & Story */}
          <div className="lg:col-span-4 space-y-4">
            <ChaahLogo size="md" variant="color" />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mt-3">
              A cozy Thai, Filipino, and American fusion restobar located on CT Montalban Street, Villa Kananga, Butuan City. Known for authentic Pad Thai, sizzling sisig, Sunday unli buffets, and live weekend acoustic sessions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="Cha'ah Restobar Facebook"
              >
                Facebook
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-pink-950/30 hover:bg-pink-900/40 text-pink-300 hover:text-pink-200 border border-pink-800/30 transition-colors"
                aria-label="Cha'ah Restobar Instagram"
              >
                Instagram
              </a>
              <a
                href={BUSINESS_INFO.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-200 border border-cyan-800/30 transition-colors"
                aria-label="Cha'ah Restobar TikTok"
              >
                TikTok
              </a>
              <button
                onClick={onOpenPitch}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                Pitch Deck
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Fusion Menu</a>
              </li>
              <li>
                <a href="#buffet" className="hover:text-white transition-colors">Sunday Buffet (₱649)</a>
              </li>
              <li>
                <a href="#luminarium" className="hover:text-white transition-colors">Luminarium Venue (₱12,000)</a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-white transition-colors">The Restobar & Patio</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">Operating Hours</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Map & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Dining Schedule
            </h4>
            <div className="space-y-2 text-zinc-400 text-xs">
              <div>
                <strong className="text-zinc-200 block">Open Daily:</strong>
                <span className="text-[#f5de99]">Mondays through Sundays</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">Lunch Service:</strong>
                <span>11:00 AM – 1:30 PM</span>
              </div>
              <div>
                <strong className="text-zinc-400 block text-[11px]">Mid-Day Break (Closed):</strong>
                <span className="text-zinc-500">1:30 PM – 5:00 PM</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">Evening Service:</strong>
                <span>5:00 PM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Venue */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Restobar Details
            </h4>
            <div className="space-y-2 text-zinc-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>CT Montalban St, near Camella Homes, Villa Kananga, Butuan City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Cha'ah Restobar. All rights reserved. Est. 2020 in Butuan City.
          </div>
          <div className="flex items-center gap-2">
            <span>Thai · Filipino · American Fusion Restobar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
