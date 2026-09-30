import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Users,
  Briefcase,
  Cake,
  PartyPopper,
  Volume2,
  Droplets,
  Armchair,
  UserCheck,
  CheckCircle2,
  Gift,
  Coffee,
  Wine,
  UtensilsCrossed,
  Calculator,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-react';
import { LUMINARIUM_DETAILS, LuminariumAddon } from '../data/menuData';

export interface LuminariumBookingConfiguration {
  durationHours: number;
  mobileBarPackage: 'none' | 'premium' | 'vip';
  dessertPackage: 'none' | 'premium';
  coffeePackage: 'none' | 'classic' | 'premium' | 'vip';
  serviceCrewCount: number;
  totalCost: number;
}

interface LuminariumSectionProps {
  onBookLuminarium: (config: LuminariumBookingConfiguration) => void;
}

export const LuminariumSection: React.FC<LuminariumSectionProps> = ({ onBookLuminarium }) => {
  const [durationHours, setDurationHours] = useState<number>(4);
  const [mobileBarPackage, setMobileBarPackage] = useState<'none' | 'premium' | 'vip'>('none');
  const [dessertPackage, setDessertPackage] = useState<'none' | 'premium'>('none');
  const [coffeePackage, setCoffeePackage] = useState<'none' | 'classic' | 'premium' | 'vip'>('none');
  const [serviceCrewCount, setServiceCrewCount] = useState<number>(0);

  // Calculate pricing in PHP
  const calculation = useMemo(() => {
    const baseCost = LUMINARIUM_DETAILS.basePrice; // 12,000
    const extraHours = Math.max(0, durationHours - 4);
    const extraHoursCost = extraHours * LUMINARIUM_DETAILS.succeedingHourPrice; // 2,500/hr

    let mobileBarCost = 0;
    if (mobileBarPackage === 'premium') mobileBarCost = 13000;
    else if (mobileBarPackage === 'vip') mobileBarCost = 22500;

    let dessertCost = 0;
    if (dessertPackage === 'premium') dessertCost = 10000;

    let coffeeCost = 0;
    if (coffeePackage === 'classic') coffeeCost = 7000;
    else if (coffeePackage === 'premium') coffeeCost = 11000;
    else if (coffeePackage === 'vip') coffeeCost = 21000;

    const crewCost = serviceCrewCount * 500;

    const total = baseCost + extraHoursCost + mobileBarCost + dessertCost + coffeeCost + crewCost;

    return {
      baseCost,
      extraHours,
      extraHoursCost,
      mobileBarCost,
      dessertCost,
      coffeeCost,
      crewCost,
      total
    };
  }, [durationHours, mobileBarPackage, dessertPackage, coffeePackage, serviceCrewCount]);

  const handleBookNow = () => {
    onBookLuminarium({
      durationHours,
      mobileBarPackage,
      dessertPackage,
      coffeePackage,
      serviceCrewCount,
      totalCost: calculation.total
    });
  };

  return (
    <section id="luminarium" className="py-20 sm:py-28 bg-[#090e0b] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Kicker & Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Event Venue by Cha'ah Restobar</span>
            </div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Luminarium <span className="font-light italic text-[#dcb35c]">Events Place</span>
              </h2>
            </div>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Butuan City's premier greenhouse-style glass conservatory banquet venue. Perfect for corporate summits, milestone debuts, and private celebrations with natural daylight, hanging garden canopies, and complete audiovisual equipment.
            </p>
          </div>

          {/* Key Metric Stamp */}
          <div className="flex items-center gap-4 bg-[#121c16] border border-amber-500/30 p-4 sm:p-5 rounded-2xl shadow-xl shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                Capacity Limit
              </div>
              <div className="text-2xl font-black text-white font-mono">
                Up to 100 Persons
              </div>
              <div className="text-[11px] text-zinc-400">
                Spacious indoor hall & patio flow
              </div>
            </div>
          </div>
        </div>

        {/* 3 Main Event Type Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-6 rounded-2xl bg-[#111a14] border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Corporate Events</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Conferences, executive seminars, year-end banquets, and product launches with sound setup.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111a14] border border-white/10 hover:border-amber-500/40 transition-colors flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Cake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Birthdays & Special Occasions</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                18th debuts, golden wedding anniversaries, christenings, and memorable family milestones.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111a14] border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <PartyPopper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Small Gatherings & Parties</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Reunions, bridal showers, intimate social gatherings, and private cocktail receptions.
              </p>
            </div>
          </div>
        </div>

        {/* Master Showcase & Rate Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121c16] via-[#0f1712] to-[#0a100c] border border-amber-500/30 overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px]">
              <img
                src="/src/assets/images/luminarium_events_venue_1790733593503.jpg"
                alt="Luminarium Events Place interior by Cha'ah Restobar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1611] via-black/20 to-transparent" />

              {/* Floating badges on photo */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#dcb35c] border border-white/10">
                  Luminarium by Cha'ah
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-zinc-200">
                <p className="font-semibold text-white">
                  Natural daylight ambiance with floor-to-ceiling glass wall, emerald booth seating, and overhead botanical lanterns.
                </p>
              </div>
            </div>

            {/* Pricing & Policy Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Rate Headline */}
                <div className="border-b border-white/10 pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#dcb35c] block mb-1">
                    Standard Rental Package
                  </span>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs text-zinc-400 font-medium">for as low as</span>
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                      ₱12,000
                    </span>
                    <span className="text-sm font-semibold text-amber-300">
                      for the first 4 hours
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-300 font-mono flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400 font-bold">
                      +₱2,500
                    </span>
                    <span>for each succeeding hour</span>
                  </div>
                </div>

                {/* Inclusions Grid */}
                <div className="py-6 border-b border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
                    Standard Inclusions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <Volume2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Lights & Sound System</strong>
                        <span className="text-zinc-400 text-[11px]">Integrated audio & microphones</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <Droplets className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Water Station</strong>
                        <span className="text-zinc-400 text-[11px]">Free-flowing cold water</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <Armchair className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Chairs & Table Set-up</strong>
                        <span className="text-zinc-400 text-[11px]">Banquet & cocktail setup (as presented)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Staff Assistance (2 Pax)</strong>
                        <span className="text-zinc-400 text-[11px]">Dedicated on-site crew</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NO CORKAGE FEE CALLOUT (Direct from flyer) */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#142318] to-emerald-950/60 border border-emerald-500/50">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Exclusive Advantage · Zero Corkage Policy</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    NO CORKAGE FEE FOR:
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-600/40">
                      ✓ Food & Drinks (Bring your favorites freely)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-600/40">
                      ✓ Backdrop / Decorations (Personalize your theme)
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 mt-2">
                    Or choose Cha'ah Restobar's Thai, Filipino & American catering for an all-in seamless feast!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Event Package & Add-On Calculator */}
        <div className="rounded-3xl bg-[#111a14] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Customize Your Event Package & Estimate Total
              </h3>
              <p className="text-xs text-zinc-400">
                Select your intended duration and optional food/drink stations to receive an instant transparent quotation.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options configuration */}
            <div className="lg:col-span-8 space-y-6">
              {/* Duration Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Event Duration (Hours)
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {[4, 5, 6, 7, 8].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDurationHours(hrs)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        durationHours === hrs
                          ? 'bg-[#dcb35c] text-black border-[#dcb35c] shadow-md'
                          : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white'
                      }`}
                    >
                      {hrs} Hours {hrs === 4 ? '(Base Package)' : `(+₱${((hrs - 4) * 2500).toLocaleString()})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons from flyer */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#dcb35c] block">
                  Official Add-on Stations:
                </span>

                {/* Mobile Bar */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Wine className="w-4 h-4 text-amber-400" />
                      Mobile Bar Station
                    </span>
                    <span className="text-zinc-400 font-normal">Cha'ah signature cocktails & mixes</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setMobileBarPackage('none')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        mobileBarPackage === 'none'
                          ? 'bg-white/20 border-white text-white'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      None
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileBarPackage('premium')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        mobileBarPackage === 'premium'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Premium (50 pax) · ₱13,000
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileBarPackage('vip')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        mobileBarPackage === 'vip'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      VIP (100 pax) · ₱22,500
                    </button>
                  </div>
                </div>

                {/* Dessert Station */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Cake className="w-4 h-4 text-pink-400" />
                      Dessert Station
                    </span>
                    <span className="text-zinc-400 font-normal">Pastries, cakes & sweet delicacies</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setDessertPackage('none')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        dessertPackage === 'none'
                          ? 'bg-white/20 border-white text-white'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      None
                    </button>
                    <button
                      type="button"
                      onClick={() => setDessertPackage('premium')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        dessertPackage === 'premium'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Premium Package (50 pax) · ₱10,000
                    </button>
                  </div>
                </div>

                {/* Coffee Station */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-amber-400" />
                      Coffee Station
                    </span>
                    <span className="text-zinc-400 font-normal">Artisan brew, espresso & barista</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setCoffeePackage('none')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        coffeePackage === 'none'
                          ? 'bg-white/20 border-white text-white'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      None
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoffeePackage('classic')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        coffeePackage === 'classic'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Classic (30pax) ₱7,000
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoffeePackage('premium')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        coffeePackage === 'premium'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Premium (50pax) ₱11,000
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoffeePackage('vip')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        coffeePackage === 'vip'
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      VIP (100pax) ₱21,000
                    </button>
                  </div>
                </div>

                {/* Additional Service Crew */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Additional Service Crew (₱500 / pax)
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Standard package already includes 2 crew members
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceCrewCount(Math.max(0, serviceCrewCount - 1))}
                      className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white"
                      disabled={serviceCrewCount <= 0}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold font-mono text-white w-6 text-center">
                      +{serviceCrewCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setServiceCrewCount(Math.min(10, serviceCrewCount + 1))}
                      className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Quotation Summary Card */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#0c140f] border border-amber-500/40 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#dcb35c] block mb-1">
                  Estimated Rental Quotation
                </span>
                <div className="text-3xl font-black text-white font-mono tracking-tight mt-1">
                  ₱{calculation.total.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Transparent breakdown based on official rates
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span>Base Venue Rental (4 hrs):</span>
                    <span className="font-mono font-semibold">₱12,000</span>
                  </div>
                  {calculation.extraHours > 0 && (
                    <div className="flex justify-between text-zinc-300">
                      <span>+{calculation.extraHours} extra hour(s):</span>
                      <span className="font-mono font-semibold">
                        +₱{calculation.extraHoursCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {calculation.mobileBarCost > 0 && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Mobile Bar ({mobileBarPackage === 'premium' ? '50 pax' : '100 pax'}):</span>
                      <span className="font-mono font-semibold">
                        +₱{calculation.mobileBarCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {calculation.dessertCost > 0 && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Dessert Station (50 pax):</span>
                      <span className="font-mono font-semibold">
                        +₱{calculation.dessertCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {calculation.coffeeCost > 0 && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Coffee Station ({coffeePackage}):</span>
                      <span className="font-mono font-semibold">
                        +₱{calculation.coffeeCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {calculation.crewCost > 0 && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Extra Crew ({serviceCrewCount} pax):</span>
                      <span className="font-mono font-semibold">
                        +₱{calculation.crewCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/30 text-[11px] text-emerald-300">
                  ✓ Includes lights & sound, water station, tables & chairs, 2 staff. Zero corkage for outside food, drinks, and decor!
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-xl shadow-amber-950/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Luminarium with This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
