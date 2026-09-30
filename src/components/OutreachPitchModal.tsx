import React from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, TrendingUp, Users, CalendarCheck, ShieldCheck, Smartphone, Search, ArrowRight, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface OutreachPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutreachPitchModal: React.FC<OutreachPitchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const valueProps = [
    {
      icon: <CalendarCheck className="w-5 h-5 text-amber-400" />,
      title: 'Automated Table & Buffet Bookings',
      description: 'Stop losing reservations buried in busy Facebook Messenger inboxes. Customers can select party size, seating preference, and reserve Sunday Buffet passes directly 24/7.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: 'Convert 22K+ Followers into Diners',
      description: 'Leverage your passionate Facebook and Instagram community with a dedicated link in bio that turns casual post likes into seated dining receipts.'
    },
    {
      icon: <Search className="w-5 h-5 text-blue-400" />,
      title: '#1 Local SEO in Butuan City',
      description: 'Engineered with Schema.org Restaurant structured data and high-intent local search keywords ("Restobar in Butuan", "Thai Food Butuan", "Sunday Buffet Butuan") to dominate Google Search & Maps.'
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: 'Luminarium Event Catering Leads',
      description: 'High-ticket corporate banquets, debuts, and wedding receptions can now submit event specs and custom tasting plans straight to management.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-pink-400" />,
      title: 'Lightning Mobile Performance',
      description: 'Over 85% of diners browse menus on mobile phones. This website delivers ultra-fast loading, intuitive filter tabs, and one-tap calling & directions.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: 'Zero Third-Party Commission',
      description: 'Keep 100% of your margins. No expensive delivery app commissions or platform booking fees.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl bg-[#0e1511] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
      >
        {/* Banner Header */}
        <div className="p-6 bg-gradient-to-r from-amber-950/60 via-[#18261e] to-[#0e1511] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">
                  Client Outreach Proposal
                </span>
                <span className="text-xs text-zinc-400">Exclusive Preview</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                Prepared for Cha'ah Restobar Leadership
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Pitch Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-300">
          <div>
            <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Transforming Cha'ah Restobar's Online Visibility
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Cha'ah Restobar already has exceptional food, an incredible cozy Thai-inspired aesthetic, and a loyal following of 22,000+ patrons in Butuan City.
              This custom-built web application turns your digital presence into an automated reservation engine.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors"
              >
                <div className="mb-2">{prop.icon}</div>
                <h5 className="font-bold text-white text-xs sm:text-sm mb-1">{prop.title}</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Prototype Highlights */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-[#121c16] border border-emerald-700/40 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Live Interactive Features In This Preview:
            </span>
            <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
              <li>Active PHT Real-Time Open/Closed status calculator with daily schedule awareness.</li>
              <li>Filterable Thai, Filipino & American culinary catalog with tasting plan pre-ordering.</li>
              <li>Sunday ₱649 Unli Buffet showcase with session timetable and instant table reserving.</li>
              <li>Luminarium Events Place showcase with official ₱12,000 rates, zero corkage policy, and interactive package & add-on calculator.</li>
              <li>Mobile-first responsive drawer and one-tap calling & navigation.</li>
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              <span>Ready for immediate deployment under your custom domain (e.g. chaahrestobar.ph).</span>
            </div>
            <a
              href={`mailto:${BUSINESS_INFO.email}?subject=Website%20Proposal%20for%20Cha'ah%20Restobar`}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Connect on Partnership</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
