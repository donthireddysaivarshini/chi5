'use client';

import React from 'react';

interface BrandLockupProps {
  variant?: 'hero' | 'header' | 'footer';
  className?: string;
  isScrolled?: boolean;
}

export default function HiFiveBrandLockup({
  variant = 'hero',
  className = '',
  isScrolled = false,
}: BrandLockupProps) {
  // 1. Header / Footer Variant (Compact)
  if (variant === 'header' || variant === 'footer') {
    const textColor = variant === 'footer' ? 'text-[#F5F3E6]' : isScrolled ? 'text-sienna' : 'text-[#F5F3E6]';
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        {/* Top: ───── CODENAME ───── */}
        <div className="flex items-center justify-center gap-2 mb-1 w-full min-w-[130px] sm:min-w-[150px]">
          <span className="w-6 sm:w-8 h-[1.5px] bg-caramel" />
          <span className={`font-gumani text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase ${textColor} whitespace-nowrap transition-colors duration-200`}>
            CODENAME
          </span>
          <span className="w-6 sm:w-8 h-[1.5px] bg-caramel" />
        </div>
        {/* Bottom: HI FIVE */}
        <span className={`font-gumani text-2xl sm:text-3xl font-bold tracking-normal ${textColor} leading-none text-center whitespace-nowrap transition-colors duration-200`}>
          HI FIVE
        </span>
      </div>
    );
  }

  // 2. Hero Variant (Dominant & Large)
  return (
    <div className={`inline-flex flex-col items-center select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] ${className}`}>
      {/* Top: ──────── CODENAME ──────── */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-2 sm:mb-3 w-full min-w-[260px] sm:min-w-[340px] md:min-w-[420px]">
        <span className="flex-1 max-w-[120px] sm:max-w-[160px] h-[2px] bg-caramel rounded-full shadow-sm" />
        <span className="font-gumani text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] uppercase text-alabaster whitespace-nowrap drop-shadow-md">
          CODENAME
        </span>
        <span className="flex-1 max-w-[120px] sm:max-w-[160px] h-[2px] bg-caramel rounded-full shadow-sm" />
      </div>
      {/* Main Dominant Headline */}
      <h1 className="font-gumani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none text-center whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
        HI FIVE
      </h1>
    </div>
  );
}
