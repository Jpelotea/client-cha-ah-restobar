import React from 'react';
import { Clock, CheckCircle2, Sun, Moon, Coffee, Sparkles } from 'lucide-react';

export const ScheduleSection: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  // Get current day in PHT (Asia/Manila, UTC+8)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const phtTime = new Date(utc + (3600000 * 8));
  const currentDayOfWeek = phtTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday

  const serviceShifts = [
    {
      shift: 'Lunch Service',
      time: '11:00 AM – 1:30 PM',
      icon: Sun,
      iconColor: 'text-amber-400',
      tag: 'Morning & Midday Feast',
      highlight: 'Express Fusion Sets & Comfort Classics',
      description: 'Quick artisan lunches, Pad Thai noodle bowls, garlic rice platters, and midday iced refreshments.',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-amber-500/30'
    },
    {
      shift: 'Mid-Day Break',
      time: '1:30 PM – 5:00 PM',
      icon: Coffee,
      iconColor: 'text-zinc-400',
      tag: 'Closed / Kitchen Prep',
      highlight: 'Dining Room Reset & Stock Preparation',
      description: 'Our kitchen takes an afternoon intermission to simmer fresh broths and prepare evening sizzlers. Online reservations remain open 24/7.',
      gradient: 'from-zinc-800/10 to-transparent',
      borderColor: 'border-white/10'
    },
    {
      shift: 'Evening Service',
      time: '5:00 PM – 10:00 PM',
      icon: Moon,
      iconColor: 'text-indigo-400',
      tag: 'Dinner & Craft Cocktails',
      highlight: 'Sizzling Sisig, Kare-Kare & Live Ambience',
      description: 'Full evening fusion menu, handcrafted cocktails, tropical craft brews, and warm patio dining.',
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      borderColor: 'border-emerald-500/30'
    }
  ];

  const daysList = [
    { day: 'Monday', id: 1 },
    { day: 'Tuesday', id: 2 },
    { day: 'Wednesday', id: 3 },
    { day: 'Thursday', id: 4 },
    { day: 'Friday', id: 5 },
    { day: 'Saturday', id: 6 },
    { day: 'Sunday', id: 0 },
  ];

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#090e0b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Effective April 21, 2026 · Daily Schedule</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Operating Hours & Daily Service
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Cha'ah Restobar is open <strong className="text-white">Mondays through Sundays</strong> with dedicated Lunch and Evening dining services.
            </p>
          </div>

          <button
            onClick={onBookNow}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 active:scale-95 transition-all self-start md:self-auto shrink-0 shadow-lg"
          >
            Reserve a Table
          </button>
        </div>

        {/* 3 Service Cards: Lunch, Mid-Day Break, Evening */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {serviceShifts.map((shift) => {
            const Icon = shift.icon;
            const isBreak = shift.shift.includes('Break');

            return (
              <div
                key={shift.shift}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 bg-[#101712] border ${shift.borderColor} bg-gradient-to-b ${shift.gradient} shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isBreak ? 'text-zinc-400' : 'text-[#dcb35c]'}`}>
                      {shift.tag}
                    </span>
                    <Icon className={`w-5 h-5 ${shift.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {shift.shift}
                  </h3>

                  <div className="py-2.5 px-3.5 rounded-xl bg-black/50 border border-white/10 font-mono text-base font-semibold text-[#f5de99] inline-block mb-4">
                    {shift.time}
                  </div>

                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{shift.highlight}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {shift.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>{isBreak ? 'Walk-ins resume at 5:00 PM' : 'Open for Dine-in & Takeout'}</span>
                  {!isBreak && (
                    <button
                      onClick={onBookNow}
                      className="text-[#dcb35c] font-semibold hover:underline"
                    >
                      Book Shift →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Schedule Strip: Monday through Sunday */}
        <div className="rounded-2xl bg-[#0e1611] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Weekly Schedule (Monday – Sunday)</span>
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Same consistent two-shift schedule every day of the week.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              <span>● Open 7 Days A Week</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
            {daysList.map((d) => {
              const isToday = d.id === currentDayOfWeek;
              return (
                <div
                  key={d.day}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    isToday
                      ? 'bg-amber-500/10 border-amber-500/60 shadow-lg shadow-amber-950/30'
                      : 'bg-white/5 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs font-bold text-white">{d.day}</span>
                    {isToday && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <div className="mt-2 text-[11px] text-[#f5de99] font-mono leading-tight">
                    11:00 AM – 1:30 PM
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">
                    Break 1:30–5 PM
                  </div>
                  <div className="text-[11px] text-[#f5de99] font-mono leading-tight mt-0.5">
                    5:00 PM – 10:00 PM
                  </div>
                  {isToday && (
                    <div className="mt-2 text-[10px] font-bold uppercase text-amber-300 bg-amber-950/60 py-0.5 px-1.5 rounded">
                      Today
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
