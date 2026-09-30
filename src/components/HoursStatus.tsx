import React, { useState, useEffect } from 'react';

// ============================================================================
// CONFIGURABLE OPERATING HOURS (Asia/Manila timezone, UTC+8)
// NOTE: Replace the placeholder hours below with the client's confirmed schedule.
// Supports multiple open/close service ranges per day (e.g., split lunch & dinner service).
// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
// ============================================================================
export interface ServiceShift {
  open: string;  // 24-hr format "HH:mm"
  close: string; // 24-hr format "HH:mm"
  label: string; // e.g. "Lunch Service"
}

export interface DaySchedule {
  dayName: string;
  shifts: ServiceShift[];
}

export const HOURS: Record<number, DaySchedule> = {
  0: {
    dayName: "Sunday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  1: {
    dayName: "Monday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  2: {
    dayName: "Tuesday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  3: {
    dayName: "Wednesday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  4: {
    dayName: "Thursday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  5: {
    dayName: "Friday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
  6: {
    dayName: "Saturday",
    shifts: [
      { open: "11:00", close: "13:30", label: "Lunch Service" },
      { open: "17:00", close: "22:00", label: "Evening Service" },
    ],
  },
};

/**
 * Formats a 24-hour "HH:mm" time string into standard 12-hour display ("11:00 AM", "1:30 PM", "10:00 PM")
 */
export function formatHoursTime(timeStr: string): string {
  const [hourStr, minuteStr] = timeStr.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  return `${displayHour}:${displayMinute} ${period}`;
}

/**
 * Formats all service shifts for today into a readable summary string
 * e.g. "11:00 AM – 1:30 PM · 5:00 PM – 10:00 PM"
 */
export function getTodayFormattedHoursString(): string {
  const now = new Date();
  const phtString = now.toLocaleString('en-US', { timeZone: 'Asia/Manila' });
  const phtDate = new Date(phtString);
  const currentDay = phtDate.getDay();
  const schedule = HOURS[currentDay] || HOURS[1];

  return schedule.shifts
    .map((s) => `${formatHoursTime(s.open)} – ${formatHoursTime(s.close)}`)
    .join(' · ');
}

export interface StatusInfo {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentShiftLabel?: string;
  todayScheduleSummary: string;
}

/**
 * Calculates real-time open/closed status strictly in Asia/Manila time zone (UTC+8),
 * accurately handling multiple open/close ranges per day (split shifts).
 */
export function getChaahCurrentStatus(): StatusInfo {
  const now = new Date();
  const phtString = now.toLocaleString('en-US', { timeZone: 'Asia/Manila' });
  const phtDate = new Date(phtString);

  const currentDay = phtDate.getDay();
  const currentMinutes = phtDate.getHours() * 60 + phtDate.getMinutes();

  const todayConfig = HOURS[currentDay] || HOURS[1];
  const shifts = todayConfig.shifts;

  let isOpen = false;
  let statusText = '';
  let currentShiftLabel = '';
  const subText = 'Reservations & inquiries open 24/7 online';
  const todayScheduleSummary = shifts
    .map((s) => `${formatHoursTime(s.open)} – ${formatHoursTime(s.close)}`)
    .join(' · ');

  // 1. Check if current time falls within any today's shifts
  for (let i = 0; i < shifts.length; i++) {
    const shift = shifts[i];
    const [openH, openM] = shift.open.split(':').map(Number);
    const [closeH, closeM] = shift.close.split(':').map(Number);
    const openMin = openH * 60 + openM;
    const closeMin = closeH * 60 + closeM;

    if (currentMinutes >= openMin && currentMinutes < closeMin) {
      isOpen = true;
      statusText = `Open now · Closes at ${formatHoursTime(shift.close)}`;
      currentShiftLabel = shift.label;
      break;
    }
  }

  // 2. If not currently open, find the next upcoming shift today
  if (!isOpen) {
    let foundNextToday = false;
    for (let i = 0; i < shifts.length; i++) {
      const shift = shifts[i];
      const [openH, openM] = shift.open.split(':').map(Number);
      const openMin = openH * 60 + openM;

      if (currentMinutes < openMin) {
        statusText = `Opens today at ${formatHoursTime(shift.open)}`;
        currentShiftLabel = shift.label;
        foundNextToday = true;
        break;
      }
    }

    // 3. Past all shifts today -> opens tomorrow on first shift
    if (!foundNextToday) {
      const tomorrowDay = (currentDay + 1) % 7;
      const tomorrowConfig = HOURS[tomorrowDay] || HOURS[1];
      const firstTomorrowShift = tomorrowConfig.shifts[0];
      statusText = `Opens tomorrow at ${formatHoursTime(firstTomorrowShift.open)}`;
      currentShiftLabel = firstTomorrowShift.label;
    }
  }

  return {
    isOpen,
    statusText,
    subText,
    currentShiftLabel,
    todayScheduleSummary,
  };
}

export const HoursStatusBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [status, setStatus] = useState<StatusInfo>(getChaahCurrentStatus());

  useEffect(() => {
    // Re-evaluate every 30 seconds
    const interval = setInterval(() => {
      setStatus(getChaahCurrentStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? 'bg-emerald-400' : 'bg-[#dcb35c]'
          }`}
          aria-hidden="true"
        />
        <span className="font-semibold text-zinc-100">{status.statusText}</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="inline-flex items-center gap-3 py-1.5 px-3.5 sm:py-2 sm:px-4 rounded-xl bg-[#0e1711]/90 border border-emerald-900/60 backdrop-blur-md shadow-lg"
    >
      {/* Indicator Dot: Green when open; Neutral soft-gold when closed. Never red or ambiguous amber. */}
      <div className="relative flex items-center justify-center shrink-0">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            status.isOpen ? 'bg-emerald-400' : 'bg-[#dcb35c]'
          }`}
          aria-hidden="true"
        />
        {status.isOpen && (
          <span
            className="absolute w-4 h-4 rounded-full bg-emerald-400/30 animate-ping"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-col text-left">
        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
          {status.statusText}
        </span>
        {/* High contrast subtext (> 7:1 ratio meeting WCAG AA requirements) */}
        <span className="text-[11px] font-medium text-[#ede8dd] tracking-normal">
          {status.subText}
        </span>
      </div>
    </div>
  );
};
