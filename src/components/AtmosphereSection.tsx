import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music2, Trees, Sparkles, Users, PartyPopper, CheckCircle2 } from 'lucide-react';

interface AtmosphereSectionProps {
  onOpenEventInquiry: () => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ onOpenEventInquiry }) => {
  const [activeTab, setActiveTab] = useState<'interior' | 'acoustic' | 'luminarium'>('interior');

  const spaces = {
    interior: {
      title: 'Thai-Inspired Warm Interior',
      subtitle: 'Handwoven Rattan & Botanical Canopy',
      description:
        'Step inside a sanctuary crafted with natural woods, emerald velvet booth seating, botanical ceiling foliage, and hand-strung rattan dome chandeliers that cast a golden ambient glow. Designed for comfortable, lingering meals and heartfelt conversations.',
      image: '/src/assets/images/hero_chaah_interior_dining_1790732221973.jpg',
      highlights: [
        'Lush hanging ceiling greenery & warm ambient lighting',
        'Plush emerald green velvet banquettes & dark mahogany tables',
        'Full service craft cocktail & specialty espresso bar',
        'Fully air-conditioned dining comfort'
      ]
    },
    acoustic: {
      title: 'Live Acoustic Patio Nights',
      subtitle: 'Weekend Rhythm & Refreshing Breezes',
      description:
        'As evening falls on Friday, Saturday, and Sunday, our cozy patio comes alive with Butuan City’s finest acoustic musicians. Sip an artisanal mango chili margarita or cold brew while acoustic melodies drift through the warm night.',
      image: '/src/assets/images/drinks_cocktails_matcha_1790732261455.jpg',
      highlights: [
        'Live acoustic sets every Friday & Saturday (7:00 PM – Late)',
        'Alfresco dining with ambient bistro festoon lighting',
        'Happy hour cocktail and mocktail specials',
        'Pet-friendly and relaxing garden atmosphere'
      ]
    },
    luminarium: {
      title: 'Luminarium Events Place',
      subtitle: 'Adjacent Premier Gathering Venue',
      description:
        'Planning a milestone birthday, wedding reception, christening, or corporate banquet? Our adjacent Luminarium Events Place provides a spacious, elegant setting with full Cha’ah Restobar catering packages tailored to your celebration.',
      image: '/src/assets/images/food_crispy_sisig_karekare_1790732250636.jpg',
      highlights: [
        'Dedicated event hall accommodating 50 to 200+ guests',
        'Customized Thai, Filipino & American fusion buffet spreads',
        'Integrated audio-visual setup and banquet service team',
        'Ample guest parking with easy access along CT Montalban'
      ]
    }
  };

  const current = spaces[activeTab];

  return (
    <section id="vibe" className="py-20 sm:py-28 bg-[#0b100d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#d6b059] mb-3">
            The Cha'ah Experience
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            A Space Made for Good Conversations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            More than just dining — Cha'ah Restobar is a neighborhood sanctuary where great culinary fusion meets cozy ambiance, soulful music, and memorable celebrations.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-white/10 scrollbar-none">
          <button
            onClick={() => setActiveTab('interior')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'interior'
                ? 'bg-[#dcb35c] text-black shadow-lg shadow-amber-950/20'
                : 'text-zinc-400 hover:text-white bg-white/5'
            }`}
          >
            <Trees className="w-4 h-4" />
            <span>Cozy Indoor Dining</span>
          </button>

          <button
            onClick={() => setActiveTab('acoustic')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'acoustic'
                ? 'bg-[#dcb35c] text-black shadow-lg shadow-amber-950/20'
                : 'text-zinc-400 hover:text-white bg-white/5'
            }`}
          >
            <Music2 className="w-4 h-4" />
            <span>Acoustic Patio Nights</span>
          </button>

          <button
            onClick={() => setActiveTab('luminarium')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'luminarium'
                ? 'bg-[#dcb35c] text-black shadow-lg shadow-amber-950/20'
                : 'text-zinc-400 hover:text-white bg-white/5'
            }`}
          >
            <PartyPopper className="w-4 h-4" />
            <span>Luminarium Events Place</span>
          </button>
        </div>

        {/* Content Display Card */}
        <div className="mt-8 rounded-3xl bg-[#111a14] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          {/* Visual Side */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-[#18261e]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111a14] via-transparent to-black/20" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
                {current.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {current.title}
              </h3>
            </div>
          </div>

          {/* Prose & Details Side */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {current.description}
              </p>

              <div className="mt-6 space-y-3">
                {current.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-zinc-400">
                <span>Looking to celebrate an intimate date or 100+ person reception?</span>
              </div>
              <button
                onClick={onOpenEventInquiry}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 active:scale-95 transition-all text-center whitespace-nowrap"
              >
                Inquire For Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
