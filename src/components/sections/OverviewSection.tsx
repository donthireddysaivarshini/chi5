'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Trees, Gem, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface OverviewSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function OverviewSection({ onOpenLeadModal }: OverviewSectionProps) {
  return (
    <section
      id="overview"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-obsidian text-alabaster relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vision & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>55 Years of Developer Trust</span>
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
                Where Gated Luxury Meets <span className="italic text-bronze font-normal">Untouched Nature.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base text-alabaster/80 font-normal leading-relaxed">
              A 5.3-acre masterplanned gated township by Kura Homes along the Bowrampet corridor. Experience cleaner air, 70% open spaces, and unmatched connectivity just 1 minute from ORR Exit-5.
            </p>

            {/* 3 Metric Stat Boxes */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Sparkles className="w-4 h-4 text-bronze mx-auto mb-1" />
                <span className="font-display text-lg sm:text-2xl font-bold text-white block">500+</span>
                <span className="font-sans text-[11px] text-alabaster/70 font-medium">Homes Booked</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Gem className="w-4 h-4 text-bronze mx-auto mb-1" />
                <span className="font-display text-lg sm:text-2xl font-bold text-white block">40+</span>
                <span className="font-sans text-[11px] text-alabaster/70 font-medium">Club Amenities</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Trees className="w-4 h-4 text-bronze mx-auto mb-1" />
                <span className="font-display text-lg sm:text-2xl font-bold text-white block">70%</span>
                <span className="font-sans text-[11px] text-alabaster/70 font-medium">Open Spaces</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal('overview_cta', 'Book a Visit')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Book a Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Featured Elevation Render */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
              <Image
                src="/images/club_vision.webp"
                alt="25,000 Sq.Ft Grand Clubhouse & Gated Community Vision"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/95 via-obsidian/60 to-transparent p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-sans">
                <span className="text-alabaster font-semibold text-sm sm:text-base">25,000 Sq.Ft Grand Clubhouse</span>
                <span className="text-bronze font-bold text-[11px] uppercase tracking-widest">Project Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
