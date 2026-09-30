import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Clock, Music, Gift, Percent, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { SUNDAY_BUFFET_DETAILS } from '../data/menuData';

interface SundayBuffetSectionProps {
  onOpenReservation: (type: string) => void;
}

export const SundayBuffetSection: React.FC<SundayBuffetSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="buffet" className="py-20 sm:py-28 bg-[#090e0b] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141f17] via-[#101912] to-[#0c140f] border border-amber-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headlines & Pricing */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-[#edd382] text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Legendary Sunday Tradition</span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Unlimited Sunday Buffet <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#edd382] via-[#dcae48] to-[#c59128] bg-clip-text text-transparent">
                  A Curated Feast for ₱649
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                Sundays are made for slow dining, rich conversation, and second helpings. Enjoy all-you-can-eat access to our signature Thai, Filipino, and American stations with live acoustic patio entertainment.
              </p>

              {/* 20% Off Perk Callout */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-emerald-950/30 border border-amber-700/30 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-300">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-zinc-200">
                  <strong className="text-amber-300 font-semibold">Special Buffet Privilege:</strong> Enjoy{' '}
                  <span className="font-semibold text-white">20% OFF</span> on all signature cocktails, frappes, matcha series, and honey brick toast desserts during buffet days!
                </div>
              </div>

              {/* Feature Inclusions List */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUNDAY_BUFFET_DETAILS.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenReservation('sunday-buffet')}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-xl shadow-amber-950/40 hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Buffet Table (₱649)</span>
                </button>
                <div className="text-xs text-zinc-400 text-center sm:text-left">
                  <span>Walk-ins welcome, reservations highly advised for large family tables</span>
                </div>
              </div>
            </div>

            {/* Right Column: Schedule Timeline Card & Visual */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#0b130e]/90 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs uppercase tracking-wider font-bold text-zinc-200">
                      Sunday Timetable
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                    Weekly Event
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {SUNDAY_BUFFET_DETAILS.schedule.map((slot, idx) => (
                    <div
                      key={slot.title}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-white">{slot.title}</span>
                        <span className="text-amber-300 font-mono">{slot.time}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                        {slot.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Music className="w-4 h-4 text-amber-400" />
                    <span>Live Acoustic Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-amber-400" />
                    <span>Free Souvenir Gifts</span>
                  </div>
                </div>
              </div>

              {/* Dessert & Refreshment preview banner */}
              <div className="rounded-2xl overflow-hidden border border-white/10 relative h-44 group">
                <img
                  src="/src/assets/images/dessert_toast_icecream_1790732274920.jpg"
                  alt="Cha'ah Honey Toast Dessert and Smoothies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4">
                  <div>
                    <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      Sweet Ending
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Mango Popping Boba Toast & Churned Thai Tea Ice Cream
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
