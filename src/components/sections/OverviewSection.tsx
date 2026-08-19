'use client';

import React from 'react';
import Image from 'next/image';
import { CalendarCheck, ShieldCheck, Sparkles, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

interface OverviewSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function OverviewSection({ onOpenLeadModal }: OverviewSectionProps) {
  return (
    <motion.section
      id="overview"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-sienna text-alabaster"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Editorial Story & Social Proof */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-caramel flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>55 Years of Developer Trust</span>
              </span>
              <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Where Gated Luxury Meets <span className="italic text-caramel font-normal">Untouched Nature.</span>
              </h2>
            </div>

            <p className="font-figtree text-sm sm:text-base text-alabaster/85 font-normal leading-relaxed">
              Codename Hi-Five by Kura Homes is a benchmark residential community crafted with 55 years of architectural excellence. Located directly adjacent to the pristine Bowrampet reserve forests, this gated address offers a cooler microclimate year-round, while placing you just 1 minute from ORR Exit-5.
            </p>

            {/* Social Proof Badges Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-sienna-dark border border-white/10 text-center">
                <Sparkles className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="font-gumani text-xl sm:text-2xl font-bold text-white block">500+</span>
                <span className="font-figtree text-[11px] text-alabaster/70 font-medium">Homes Booked</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-sienna-dark border border-white/10 text-center">
                <ShieldCheck className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="font-gumani text-xl sm:text-2xl font-bold text-white block">40+</span>
                <span className="font-figtree text-[11px] text-alabaster/70 font-medium">Club Amenities</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-sienna-dark border border-white/10 text-center">
                <Trees className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="font-gumani text-xl sm:text-2xl font-bold text-white block">70%</span>
                <span className="font-figtree text-[11px] text-alabaster/70 font-medium">Open Spaces</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenLeadModal('overview_private_visit', 'Schedule a Private Site Visit')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-caramel hover:bg-caramel-light text-white font-figtree font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Schedule a Private Site Visit</span>
              </button>
            </div>
          </div>

          {/* Right: Framed Elevation Photograph */}
          <div className="lg:col-span-6">
            <div className="relative h-[340px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image
                src="/images/community view.webp"
                alt="Codename Hi-Five 5.3 Acre Gated Community Overview"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-sienna-dark/85 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between text-xs font-figtree">
                <span className="text-white font-semibold">5.3 Acre Masterplanned Township</span>
                <span className="text-caramel font-bold uppercase tracking-wider">Bowrampet Reserve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
