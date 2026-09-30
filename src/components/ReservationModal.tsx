import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, CheckCircle2, MessageCircle, Phone, Sparkles, MapPin, Send } from 'lucide-react';
import { MenuItem, BUSINESS_INFO } from '../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  wishlist?: MenuItem[];
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'general',
  wishlist = []
}) => {
  const [bookingType, setBookingType] = useState<string>(
    defaultType === 'sunday-buffet' ? 'sunday-buffet' : defaultType === 'event' ? 'event' : 'regular'
  );
  const [guestCount, setGuestCount] = useState<number>(defaultType === 'sunday-buffet' ? 4 : 2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [reservationDate, setReservationDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('18:00');
  const [seatingArea, setSeatingArea] = useState<string>('indoor-booth');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    // Generate readable confirmation code
    const randomCode = `CHA-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const getCalendarLink = () => {
    const title = encodeURIComponent(
      bookingType === 'sunday-buffet'
        ? "Cha'ah Restobar Sunday Unlimited Buffet"
        : "Dining at Cha'ah Restobar Butuan"
    );
    const details = encodeURIComponent(
      `Reservation under ${guestName} for ${guestCount} guests at Cha'ah Restobar. Reference: ${confirmationCode}. Contact: +63 915 093 8706.`
    );
    const location = encodeURIComponent(BUSINESS_INFO.address);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const getSmsLink = () => {
    const message = encodeURIComponent(
      `Hi Cha'ah Restobar! I would like to confirm my table reservation ${confirmationCode} under ${guestName} on ${reservationDate} at ${timeSlot} for ${guestCount} guests (${bookingType}). Thank you!`
    );
    return `sms:+639150938706?body=${message}`;
  };

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

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-xl bg-[#0f1712] border border-[#dcb35c]/40 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#17251c] to-[#121c16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isSubmitted ? 'Reservation Confirmed' : 'Reserve a Table at Cha\'ah'}
              </h3>
              <p className="text-xs text-zinc-400">
                {isSubmitted
                  ? 'Your table request has been received'
                  : 'CT Montalban Street, Villa Kananga, Butuan City'}
              </p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#dcb35c] font-bold">
                  Booking Reference
                </span>
                <div className="text-3xl font-black font-mono tracking-wider text-white mt-1">
                  {confirmationCode}
                </div>
                <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{guestName}</strong>! We look forward to hosting your party of <strong className="text-white">{guestCount}</strong> on{' '}
                  <strong className="text-white">{reservationDate}</strong> at{' '}
                  <strong className="text-white">{timeSlot}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Dining Experience:</span>
                  <span className="font-semibold text-white capitalize">
                    {bookingType === 'sunday-buffet'
                      ? 'Sunday Unlimited Buffet (₱649)'
                      : bookingType === 'event'
                      ? 'Luminarium Private Event'
                      : 'À la Carte Fusion Dining'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Seating Area:</span>
                  <span className="font-semibold text-white">
                    {seatingArea === 'indoor-booth'
                      ? 'Cozy Indoor Green Velvet Booth'
                      : seatingArea === 'patio'
                      ? 'Outdoor Garden Acoustic Patio'
                      : 'Bar Counter Lounge'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Contact Number:</span>
                  <span className="font-semibold text-white">{guestPhone}</span>
                </div>
                {wishlist.length > 0 && (
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-zinc-400 block mb-1">Pre-Selected Tasting Plan:</span>
                    <span className="text-amber-300 font-medium">
                      {wishlist.map((w) => w.name).join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={getSmsLink()}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send SMS Confirmation (+63 915 093 8706)</span>
                </a>

                <a
                  href={getCalendarLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Add to Google Calendar</span>
                </a>

                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <span>Chat with us on Facebook Messenger →</span>
                </a>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Dining Experience Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Select Experience
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingType('regular')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      bookingType === 'regular'
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    À la Carte Dining
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('sunday-buffet')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      bookingType === 'sunday-buffet'
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Sunday Unli Buffet (₱649)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('event')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      bookingType === 'event'
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Luminarium Event
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-[#dcb35c]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-[#dcb35c]"
                  >
                    <option value="11:00">11:00 AM (Lunch)</option>
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">1:00 PM (Lunch)</option>
                    <option value="15:00">3:00 PM (Happy Hour / Coffee)</option>
                    <option value="17:30">5:30 PM (Dinner & Sunset)</option>
                    <option value="18:30">6:30 PM (Dinner)</option>
                    <option value="19:30">7:30 PM (Dinner & Acoustic)</option>
                    <option value="20:30">8:30 PM (Cocktails & Late Dinner)</option>
                    <option value="21:30">9:30 PM (Late Night Bar)</option>
                  </select>
                </div>
              </div>

              {/* Number of Guests & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Party Size (Guests)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6, 8, '10+'].map((num) => (
                      <button
                        key={String(num)}
                        type="button"
                        onClick={() => setGuestCount(typeof num === 'number' ? num : 10)}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${
                          guestCount === (typeof num === 'number' ? num : 10)
                            ? 'bg-[#dcb35c] text-black border-[#dcb35c]'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Seating Preference
                  </label>
                  <select
                    value={seatingArea}
                    onChange={(e) => setSeatingArea(e.target.value)}
                    className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-[#dcb35c]"
                  >
                    <option value="indoor-booth">Cozy Indoor Velvet Booth</option>
                    <option value="patio">Outdoor Garden Acoustic Patio</option>
                    <option value="bar">Bar Counter Lounge</option>
                    <option value="private-hall">Luminarium Private Event Area</option>
                  </select>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#dcb35c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                      Phone Number (PH) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+63 9XX XXX XXXX"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#dcb35c]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="maria@gmail.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#dcb35c]"
                    />
                  </div>
                </div>
              </div>

              {/* Pre-Selected Tasting Plan (Wishlist) if any */}
              {wishlist.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-bold mb-1">
                    <span>Attached Tasting Plan:</span>
                    <span>{wishlist.length} dishes</span>
                  </div>
                  <div className="text-xs text-zinc-300 truncate">
                    {wishlist.map((w) => w.name).join(' · ')}
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                  Special Notes / Birthday / Dietary Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Celebrating our anniversary, please arrange a quiet corner booth..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#121d15] border border-white/15 rounded-xl px-3.5 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#dcb35c]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-xl shadow-amber-950/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Table Reservation Request</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
