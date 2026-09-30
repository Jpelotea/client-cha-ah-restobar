import React from 'react';

interface ChaahLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
}

export const ChaahLogo: React.FC<ChaahLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color'
}) => {
  const sizeMap = {
    sm: { h: 32, w: 120, textClass: 'text-lg', subClass: 'text-[9px]' },
    md: { h: 42, w: 150, textClass: 'text-2xl', subClass: 'text-[10px]' },
    lg: { h: 56, w: 200, textClass: 'text-3xl', subClass: 'text-xs' },
    xl: { h: 72, w: 260, textClass: 'text-4xl', subClass: 'text-sm' }
  };

  const { textClass, subClass } = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Brand Wordmark with Thai-stylized typography & fresh leaf */}
      <div className="relative flex items-center">
        <span
          className={`font-black tracking-tight leading-none ${textClass} ${
            variant === 'light'
              ? 'text-white'
              : 'bg-gradient-to-b from-[#f3d278] via-[#d4a036] to-[#996316] bg-clip-text text-transparent drop-shadow-sm'
          }`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          cha
        </span>

        {/* Apostrophe with stylized emerald leaf */}
        <div className="relative mx-0.5 -mt-2">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transform -rotate-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.07 0 2.1-.17 3.07-.48-1.89-1.25-3.15-3.37-3.15-5.8 0-3.87 3.13-7 7-7 .84 0 1.65.15 2.4.42C21.72 5.38 17.34 2 12 2z" />
          </svg>
          <span className="sr-only">'</span>
        </div>

        <span
          className={`font-black tracking-tight leading-none ${textClass} ${
            variant === 'light'
              ? 'text-white'
              : 'bg-gradient-to-b from-[#f3d278] via-[#d4a036] to-[#996316] bg-clip-text text-transparent drop-shadow-sm'
          }`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          ah
        </span>
      </div>

      {/* RESTOBAR & EST. 2020 subtitle */}
      <div className="flex flex-col items-center mt-1">
        <span
          className={`font-bold tracking-[0.28em] uppercase ${subClass} ${
            variant === 'light' ? 'text-zinc-300' : 'text-[#f0ebd8]'
          }`}
        >
          RESTOBAR
        </span>
        <span className="text-[8px] tracking-[0.2em] uppercase text-[#a59a85] font-semibold -mt-0.5">
          EST. 2020
        </span>
      </div>
    </div>
  );
};
