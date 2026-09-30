import React, { useState } from 'react';

interface ChaahLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  variant?: 'light' | 'dark' | 'color';
}

export const ChaahLogo: React.FC<ChaahLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  // Height sizing: about 56px on desktop (44px on mobile), auto width, unconstrained aspect-ratio
  const sizeClasses = {
    sm: 'h-[40px] sm:h-[48px] w-auto',
    md: 'h-[44px] md:h-[56px] w-auto', // Default desktop 56px, mobile 44px
    lg: 'h-[60px] md:h-[72px] w-auto',
    xl: 'h-[80px] md:h-[96px] w-auto',
    custom: ''
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  if (!imageError) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-transparent select-none ${currentSizeClass} ${className}`}
        role="img"
        aria-label="Cha'ah Restobar logo"
      >
        {/* 
          NOTE: Temporary workaround using mix-blend-mode: screen to eliminate the opaque black background
          of the current JPEG asset, allowing only the gold wordmark and green leaf to show over the dark navbar.
          Replace this image with a client-supplied transparent PNG/SVG logo when available to eliminate this workaround.
        */}
        <img
          src="/src/assets/images/chaah_logo_transparent_1790734219650.jpg"
          alt="Cha'ah Restobar logo"
          className="h-full w-auto object-contain max-h-full block select-none pointer-events-none"
          style={{
            mixBlendMode: 'screen',
            filter: 'contrast(1.15) brightness(1.08)',
          }}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback vector SVG if image fails
  return (
    <div
      className={`inline-flex items-center justify-center select-none bg-transparent ${currentSizeClass} ${className}`}
      role="img"
      aria-label="Cha'ah Restobar logo"
    >
      <svg
        viewBox="0 0 460 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto object-contain"
        aria-hidden="true"
      >
        <title>Cha'ah Restobar logo</title>
        <defs>
          <linearGradient id="chaahFallbackGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7d86d" />
            <stop offset="35%" stopColor="#e5aa32" />
            <stop offset="70%" stopColor="#c7861b" />
            <stop offset="100%" stopColor="#7a3f0c" />
          </linearGradient>
        </defs>
        <g fill="url(#chaahFallbackGold)">
          <path d="M 68 88 C 65 72 54 62 38 62 C 18 62 6 78 6 103 C 6 128 19 144 38 144 C 54 144 65 134 68 118 L 52 115 C 50 124 45 130 37 130 C 26 130 20 119 20 103 C 20 87 26 76 37 76 C 45 76 50 82 52 91 Z" />
          <path d="M 76 40 L 96 40 L 96 139 L 76 139 Z M 94 88 C 99 74 111 63 126 63 C 142 63 151 74 151 92 L 151 125 C 151 138 143 145 131 145 C 122 145 116 139 116 131 C 116 122 123 116 131 116 C 135 116 138 118 139 121 L 139 94 C 139 82 133 75 123 75 C 112 75 102 85 96 98 Z" />
          <path d="M 162 103 C 162 78 176 63 197 63 C 213 63 223 72 226 84 L 226 139 L 207 139 L 207 130 C 203 139 194 145 182 145 C 169 145 162 136 162 124 C 162 109 175 101 197 101 L 207 101 L 207 90 C 207 79 201 74 193 74 C 184 74 178 79 176 89 Z M 207 112 L 195 112 C 183 112 177 116 177 123 C 177 130 182 134 189 134 C 199 134 207 125 207 114 Z" />
          <path d="M 245 64 C 248 48 258 34 274 26 C 278 23 282 22 284 22 C 281 30 279 40 279 48 C 279 61 286 71 282 79 C 276 86 264 88 254 86 C 245 83 237 75 245 64 Z" fill="#84cc16" />
          <path d="M 285 103 C 285 78 299 63 320 63 C 336 63 346 72 349 84 L 349 139 L 330 139 L 330 130 C 326 139 317 145 305 145 C 292 145 285 136 285 124 C 285 109 298 101 320 101 L 330 101 L 330 90 C 330 79 324 74 316 74 C 307 74 301 79 299 89 Z M 330 112 L 318 112 C 306 112 300 116 300 123 C 300 130 305 134 312 134 C 322 134 330 125 330 114 Z" />
          <path d="M 358 40 L 378 40 L 378 139 L 358 139 Z M 376 88 C 381 74 393 63 408 63 C 424 63 433 74 433 92 L 433 125 C 433 138 425 145 413 145 C 404 145 398 139 398 131 C 398 122 405 116 413 116 C 417 116 420 118 421 121 L 421 94 C 421 82 415 75 405 75 C 394 75 384 85 378 98 Z" />
        </g>
        <text
          x="230"
          y="168"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="20"
          fontWeight="900"
          letterSpacing="0.32em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          RESTOBAR · EST. 2020
        </text>
      </svg>
    </div>
  );
};
