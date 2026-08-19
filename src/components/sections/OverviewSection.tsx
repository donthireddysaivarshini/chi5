'use client';

import React from 'react';
import Image from 'next/image';
import { CalendarCheck, ShieldCheck, Sparkles, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

interface OverviewSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

const STATS = [
  { icon: Sparkles, val: "500+", lbl: "Homes Booked" },
  { icon: ShieldCheck, val: "40+", lbl: "Club Amenities" },
  { icon: Trees, val: "70%", lbl: "Open Spaces" },
];

export default function OverviewSection({ onOpenLeadModal }: OverviewSectionProps) {
  return (
    <section
      id="overview"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-obsidian text-alabaster relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Editorial Story & Staggered Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5 text-left"
          >
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>55 Years of Developer Trust</span>
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
                Where Gated Luxury Meets <span className="italic text-bronze font-normal">Untouched Nature.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-alabaster/80 font-normal leading-relaxed">
              This project by Kura Homes is a benchmark 5.3-acre residential community crafted with 55 years of architectural excellence. Located directly along the Bowrampet growth corridor, this gated address offers a cooler microclimate year-round, while placing you just 1 minute from ORR Exit-5.
            </p>

            {/* High-Contrast Stat Cards with Staggered Entrance */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.lbl}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-bronze/40 transition-colors shadow-lg"
                  >
                    <Icon className="w-4 h-4 text-bronze mx-auto mb-1" />
                    <span className="font-display text-xl sm:text-2xl font-bold text-alabaster block">{stat.val}</span>
                    <span className="font-sans text-[11px] text-alabaster/70 font-medium">{stat.lbl}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal('overview_visit', 'Book a Visit')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-bronze-glow transition-all transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book a Visit</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Framed Elevation Photograph with Slide-in Transition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
              <Image
                src="/images/club_vision.webp"
                alt="25,000 Sq.Ft Grand Clubhouse & Gated Community Vision"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-obsidian/90 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between text-xs font-sans shadow-xl">
                <span className="text-alabaster font-semibold">25,000 Sq.Ft Grand Clubhouse</span>
                <span className="text-bronze font-bold uppercase tracking-wider">Project Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
