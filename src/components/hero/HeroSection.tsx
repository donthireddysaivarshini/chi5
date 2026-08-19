'use client';

import React from 'react';
import { ShieldCheck, FileCheck, Phone, CalendarCheck } from 'lucide-react';
import HiFiveBrandLockup from '@/components/ui/HiFiveBrandLockup';
import { PROJECT_INFO, QUICK_STATS } from '@/data/content';

interface HeroSectionProps {
  onOpenModal: (source: string) => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-sienna-dark text-alabaster">
      {/* Background Media with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Front view.webp"
          className="w-full h-full object-cover object-center opacity-65"
        >
          <source src="/videos/hero_generated.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-sienna-dark via-sienna-dark/60 to-sienna-dark/30" />
      </div>

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        {/* Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-alabaster">
            <FileCheck className="w-3.5 h-3.5 text-caramel" />
            <span>HMDA Approved</span>
          </span>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-alabaster">
            <ShieldCheck className="w-3.5 h-3.5 text-caramel" />
            <span>TG RERA: {PROJECT_INFO.reraNumber}</span>
          </span>
        </div>

        {/* Hero Symmetrical Brand Lockup */}
        <div className="mb-6 sm:mb-8">
          <HiFiveBrandLockup variant="hero" />
        </div>

        {/* Tagline & Value Prop */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-alabaster/90 font-light leading-relaxed mb-8 sm:mb-10">
          Smart 2 BHK & Duplex gated residences starting from <span className="font-semibold text-white">₹55 Lakhs</span>. 70% open landscape adjacent to pristine Bowrampet reserve forests at <span className="text-caramel font-medium">ORR Exit-5</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          <button
            onClick={() => onOpenModal('hero_primary_cta')}
            className="flex items-center gap-2 py-3.5 px-6 sm:px-8 bg-caramel hover:bg-caramel-light text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg hover:shadow-caramel-glow transition-all"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book a Site Visit</span>
          </button>
          <a
            href={`tel:${PROJECT_INFO.phone}`}
            className="flex items-center gap-2 py-3.5 px-6 sm:px-8 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl backdrop-blur-sm transition-all"
          >
            <Phone className="w-4 h-4 text-caramel" />
            <span>Call Us Direct</span>
          </a>
        </div>
      </div>

      {/* Bottom Facts Panel */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-sienna/80 backdrop-blur-md border border-white/15 shadow-2xl">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-2 ${
                idx !== QUICK_STATS.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <span className="font-gumani text-lg sm:text-xl md:text-2xl font-bold text-alabaster leading-tight mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-alabaster/60 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
