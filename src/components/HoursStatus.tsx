import React, { useState, useEffect } from 'react';

export interface StatusInfo {
  isOpen: boolean;
  statusText: string;
  subText: string;
  isBuffetDay: boolean;
  specialEvent?: string;
}

export function getChaahCurrentStatus(): StatusInfo {
  // Compute time in Philippine Standard Time (UTC+8)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const phtTime = new Date(utc + (3600000 * 8));

  const day = phtTime.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const hours = phtTime.getHours();
  const minutes = phtTime.getMinutes();
  const decimalTime = hours + minutes / 60;

  const isSunday = day === 0;
  const isWeekend = day === 5 || day === 6;

  if (isSunday) {
    if (decimalTime >= 10.5 && decimalTime < 14.5) {
      return {
        isOpen: true,
        statusText: 'Open Now · Sunday Unli Lunch Buffet',
        subText: 'Serving until 2:30 PM (₱649 feast)',
        isBuffetDay: true,
        specialEvent: 'Sunday Buffet ₱649'
      };
    } else if (decimalTime >= 14.5 && decimalTime < 17.5) {
      return {
        isOpen: true,
        statusText: 'Open Now · Happy Hour & À la Carte',
        subText: '20% off selected drinks & desserts until 4:30 PM',
        isBuffetDay: true
      };
    } else if (decimalTime >= 17.5 && decimalTime < 22) {
      return {
        isOpen: true,
        statusText: 'Open Now · Sunday Unli Dinner Buffet',
        subText: 'Live acoustic music & unli banquet until 10:00 PM',
        isBuffetDay: true,
        specialEvent: 'Sunday Buffet ₱649'
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed Now · Opens Sunday 10:30 AM',
        subText: 'Sunday Unli Buffet starts at 10:30 AM',
        isBuffetDay: true
      };
    }
  }

  if (isWeekend) {
    // Friday & Saturday: 10:30 AM - 11:00 PM (extended bar till 12:00 AM)
    if (decimalTime >= 10.5 && decimalTime < 24) {
      return {
        isOpen: true,
        statusText: decimalTime >= 19 ? 'Open Now · Live Acoustic Patio Night' : 'Open Now · À la Carte Dining',
        subText: 'Open until 12:00 AM Midnight',
        isBuffetDay: false,
        specialEvent: decimalTime >= 19 ? 'Live Acoustic Sessions' : undefined
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed Now · Opens 10:30 AM',
        subText: 'Live acoustic sets on Friday & Saturday evenings',
        isBuffetDay: false
      };
    }
  }

  // Mon - Thu: 10:30 AM - 10:00 PM
  if (decimalTime >= 10.5 && decimalTime < 22) {
    return {
      isOpen: true,
      statusText: 'Open Now · À la Carte Dining & Cocktails',
      subText: 'Serving until 10:00 PM tonight',
      isBuffetDay: false
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now · Opens at 10:30 AM',
      subText: 'Reservations & inquiries open 24/7 online',
      isBuffetDay: false
    };
  }
}

export const HoursStatusBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [status, setStatus] = useState<StatusInfo>(getChaahCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getChaahCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 text-xs">
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'
          }`}
        />
        <span className="font-medium text-zinc-300">{status.statusText}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-[#142017]/80 border border-emerald-900/40 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
        />
        {status.isOpen && (
          <span className="absolute w-4 h-4 rounded-full bg-emerald-400/30 animate-ping" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-zinc-100">{status.statusText}</span>
        <span className="text-[11px] text-zinc-400">{status.subText}</span>
      </div>
    </div>
  );
};
