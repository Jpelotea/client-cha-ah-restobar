import React from 'react';
import { Calendar, Clock, Music, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export const ScheduleSection: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  // Get current day in PHT (UTC+8)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const phtTime = new Date(utc + (3600000 * 8));
  const currentDayOfWeek = phtTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday

  const scheduleData = [
    {
      dayId: [1, 2, 3, 4], // Mon - Thu
      dayName: 'Monday – Thursday',
      type: 'Weekday Dining & Cocktails',
      hours: '10:30 AM – 10:00 PM',
      highlight: 'Full À la Carte Service',
      description: 'Ideal for leisurely business lunches, intimate dinner dates, and after-work cocktail unwinding in a serene atmosphere.',
      tag: 'À la Carte'
    },
    {
      dayId: [5, 6], // Fri - Sat
      dayName: 'Friday & Saturday',
      type: 'Weekend Vibes & Live Acoustic Sets',
      hours: '10:30 AM – 11:00 PM (Bar till 12:00 AM)',
      highlight: 'Live Acoustic Sessions from 7:00 PM',
      description: 'Extended hours, artisanal cocktail craft, sizzlers, and live local acoustic musicians under the garden festoon lights.',
      tag: 'Live Music'
    },
    {
      dayId: [0], // Sun
      dayName: 'Sunday Unlimited Buffet Day',
      type: 'All-You-Can-Eat Banquets & Happy Hour',
      hours: '10:30 AM – 10:00 PM (3 Sessions)',
      highlight: 'Unlimited Feast for ₱649 · 20% Off Drinks',
      description: 'Session 1: Lunch (10:30 AM–2:30 PM) · Session 2: Happy Hour (2:30 PM–4:30 PM) · Session 3: Dinner (5:30 PM–10:00 PM).',
      tag: 'Unli Buffet ₱649'
    }
  ];

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#090e0b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#d6b059] mb-3">
              Operating Schedule & Hours
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Plan Your Visit to Cha'ah
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Whether you are stopping by for a comforting lunch bowl, weekend live music, or our famous Sunday feast, here is when our doors are wide open.
            </p>
          </div>

          <button
            onClick={onBookNow}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 active:scale-95 transition-all self-start md:self-auto shrink-0 shadow-lg"
          >
            Reserve Your Table
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scheduleData.map((item, idx) => {
            const isToday = item.dayId.includes(currentDayOfWeek);

            return (
              <div
                key={item.dayName}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isToday
                    ? 'bg-[#152219] border-2 border-[#dcb35c] shadow-2xl shadow-amber-950/30 -translate-y-1'
                    : 'bg-[#101712] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Active Day Indicator */}
                {isToday && (
                  <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#dcb35c] text-black text-[11px] font-black uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Open Today</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#dcb35c]">
                      {item.tag}
                    </span>
                    <Clock className="w-4 h-4 text-zinc-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mt-3">
                    {item.dayName}
                  </h3>

                  <div className="mt-3 py-2 px-3 rounded-lg bg-black/40 border border-white/5 font-mono text-sm text-zinc-200">
                    {item.hours}
                  </div>

                  <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Walk-ins & Reservations</span>
                  <button
                    onClick={onBookNow}
                    className="text-[#dcb35c] font-semibold hover:underline"
                  >
                    Book This Day →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
