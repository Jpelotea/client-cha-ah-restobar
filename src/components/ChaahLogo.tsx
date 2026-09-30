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
  // Dimension presets for headers, footers and hero badges
  const sizeMap = {
    sm: 'h-11 sm:h-12 w-auto',
    md: 'h-14 sm:h-16 w-auto',
    lg: 'h-20 sm:h-24 w-auto',
    xl: 'h-28 sm:h-32 w-auto'
  };

  const sizeClass = sizeMap[size];

  // Unique IDs for SVG gradients so multiple instances on page don't conflict
  const goldGradId = `chaahGoldGrad-${size}`;
  const leafGradId = `chaahLeafGrad-${size}`;
  const strokeGradId = `chaahStrokeGrad-${size}`;

  const isLight = variant === 'light';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${sizeClass} ${className}`}
      aria-label="Cha'ah Restobar EST. 2020 Logo"
    >
      <svg
        viewBox="0 0 460 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full object-contain overflow-visible"
      >
        <defs>
          {/* Authentic Metallic Gold Gradient */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7d86d" />
            <stop offset="35%" stopColor="#e5aa32" />
            <stop offset="70%" stopColor="#c7861b" />
            <stop offset="100%" stopColor="#7a3f0c" />
          </linearGradient>

          {/* Deep Bronze Border Gradient */}
          <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a86812" />
            <stop offset="100%" stopColor="#4a2205" />
          </linearGradient>

          {/* Fresh Tropical Green Leaf Gradient */}
          <linearGradient id={leafGradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#43a047" />
            <stop offset="50%" stopColor="#76c935" />
            <stop offset="100%" stopColor="#a3e635" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#subtleGlow)">
          {/* ================= LETTER 'c' ================= */}
          <path
            d="M 68 88 C 65 72 54 62 38 62 C 18 62 6 78 6 103 C 6 128 19 144 38 144 C 54 144 65 134 68 118 L 52 115 C 50 124 45 130 37 130 C 26 130 20 119 20 103 C 20 87 26 76 37 76 C 45 76 50 82 52 91 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />

          {/* ================= LETTER 'h' ================= */}
          {/* Left tall stem */}
          <path
            d="M 76 40 C 76 37 78 35 81 35 L 91 35 C 94 35 96 37 96 40 L 96 139 C 96 142 94 144 91 144 L 81 144 C 78 144 76 142 76 139 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Right arch with Thai curl spiral loop */}
          <path
            d="M 94 88 C 99 74 111 63 126 63 C 142 63 151 74 151 92 L 151 125 C 151 138 143 145 131 145 C 122 145 116 139 116 131 C 116 122 123 116 131 116 C 135 116 138 118 139 121 L 139 94 C 139 82 133 75 123 75 C 112 75 102 85 96 98 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Inner circle of Thai loop in 'h' */}
          <circle cx="131" cy="131" r="5" fill="#0d1410" opacity="0.8" />

          {/* ================= LETTER 'a' (first) ================= */}
          {/* Outer body and arch */}
          <path
            d="M 162 103 C 162 78 176 63 197 63 C 213 63 223 72 226 84 L 226 139 C 226 142 224 144 221 144 L 212 144 C 209 144 207 142 207 139 L 207 130 C 203 139 194 145 182 145 C 169 145 162 136 162 124 C 162 109 175 101 197 101 L 207 101 L 207 90 C 207 79 201 74 193 74 C 184 74 178 79 176 89 Z M 207 112 L 195 112 C 183 112 177 116 177 123 C 177 130 182 134 189 134 C 199 134 207 125 207 114 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Signature Thai inner spiral flourish */}
          <path
            d="M 183 125 C 183 120 187 117 192 117 C 196 117 199 120 199 124 C 199 129 194 133 189 133 C 185 133 183 130 183 125 Z"
            fill="#5c3008"
            opacity="0.9"
          />

          {/* ================= APOSTROPHE LEAF ================= */}
          <g transform="translate(230, 22)">
            {/* The leaf blade */}
            <path
              d="M 15 42 C 18 26 28 12 44 4 C 48 1 52 0 54 0 C 51 8 49 18 49 26 C 49 39 56 49 52 57 C 46 64 34 66 24 64 C 15 61 7 53 15 42 Z"
              fill={`url(#${leafGradId})`}
              filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))"
            />
            {/* Leaf central spine vein */}
            <path
              d="M 22 55 C 30 46 38 32 46 12"
              stroke="#bef264"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>

          {/* ================= LETTER 'a' (second) ================= */}
          <path
            d="M 285 103 C 285 78 299 63 320 63 C 336 63 346 72 349 84 L 349 139 C 349 142 347 144 344 144 L 335 144 C 332 144 330 142 330 139 L 330 130 C 326 139 317 145 305 145 C 292 145 285 136 285 124 C 285 109 298 101 320 101 L 330 101 L 330 90 C 330 79 324 74 316 74 C 307 74 301 79 299 89 Z M 330 112 L 318 112 C 306 112 300 116 300 123 C 300 130 305 134 312 134 C 322 134 330 125 330 114 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Signature Thai inner spiral flourish */}
          <path
            d="M 306 125 C 306 120 310 117 315 117 C 319 117 322 120 322 124 C 322 129 317 133 312 133 C 308 133 306 130 306 125 Z"
            fill="#5c3008"
            opacity="0.9"
          />

          {/* ================= LETTER 'h' (second) ================= */}
          {/* Left tall stem */}
          <path
            d="M 358 40 C 358 37 360 35 363 35 L 373 35 C 376 35 378 37 378 40 L 378 139 C 378 142 376 144 373 144 L 363 144 C 360 144 358 142 358 139 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Right arch with Thai curl spiral loop */}
          <path
            d="M 376 88 C 381 74 393 63 408 63 C 424 63 433 74 433 92 L 433 125 C 433 138 425 145 413 145 C 404 145 398 139 398 131 C 398 122 405 116 413 116 C 417 116 420 118 421 121 L 421 94 C 421 82 415 75 405 75 C 394 75 384 85 378 98 Z"
            fill={`url(#${goldGradId})`}
            stroke={`url(#${strokeGradId})`}
            strokeWidth="1.2"
          />
          {/* Inner circle of Thai loop in 'h' */}
          <circle cx="413" cy="131" r="5" fill="#0d1410" opacity="0.8" />
        </g>

        {/* ================= RESTOBAR SUBTITLE ================= */}
        <text
          x="230"
          y="178"
          textAnchor="middle"
          fill={isLight ? '#1c1b18' : '#ffffff'}
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.32em"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ textTransform: 'uppercase' }}
        >
          RESTOBAR
        </text>

        {/* ================= EST. 2020 SUBTITLE ================= */}
        <text
          x="230"
          y="200"
          textAnchor="middle"
          fill={isLight ? '#444' : '#cfc6b4'}
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.22em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          EST. 2020
        </text>
      </svg>
    </div>
  );
};
