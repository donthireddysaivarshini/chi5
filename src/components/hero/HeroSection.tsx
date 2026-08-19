'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck2, ArrowRight, Layers, Home, IndianRupee, Move, MapPin, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

const HEADLINES = [
  "Your Home at Hyderabad's ORR Exit 5.",
  "Smart 2 BHK & Duplex Homes, 90% Built.",
  "500+ Families Have Already Chosen Hi-Five.",
];

const SNAPSHOT_FACTS = [
  { icon: Layers, val: "5.3 Acres", lbl: "Gated Township" },
  { icon: Home, val: "2 BHK & Duplex", lbl: "Smart Layouts" },
  { icon: IndianRupee, val: "₹4,999/sft", lbl: "Starting Price" },
  { icon: Move, val: "1,100 - 2,200", lbl: "Sq.Ft Carpet Area" },
  { icon: MapPin, val: "1 Min", lbl: "To ORR Exit 5" },
  { icon: Building2, val: "90% Built", lbl: "Possession Soon", isReady: true },
];

export default function HeroSection({ onOpenLeadModal }: HeroSectionProps) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[#28120C]">
      {/* Background Front View Image & Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/Front view.webp"
          alt="Codename Hi-Five Front Elevation View"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#28120C] via-[#28120C]/80 to-[#28120C]/50" />
      </div>

      {/* Left-Aligned Luxury Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl text-left items-start space-y-6">
          {/* Regulatory Badges with Pulse Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5F3E6] text-xs font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <FileCheck2 className="w-3.5 h-3.5 text-[#CE793A]" />
              <span>HMDA Approved</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5F3E6] text-xs font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TG RERA: P02200002810</span>
            </span>
          </motion.div>

          {/* Rotating Gumani Headline (Left-Aligned, Crisp Alabaster #F5F3E6) */}
          <div className="h-28 sm:h-32 md:h-36 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3E6] leading-[1.15]"
              >
                {HEADLINES[headlineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Left-Aligned Subhead (#E0D8CB) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-[#E0D8CB] font-normal leading-relaxed max-w-2xl text-left"
          >
            Luxurious 2 BHK & Duplex gated residences starting from <strong className="text-[#F5F3E6] font-semibold">₹59 Lakhs* (₹4,999/sft)</strong> with 70% open spaces adjacent to Bowrampet reserve forests.
          </motion.p>

          {/* Left-Aligned CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenLeadModal('hero_main_cta', 'Book a Visit')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#CE793A] hover:brightness-110 text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-lg hover:shadow-caramel-glow transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Book a Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenLeadModal('hero_pricing_cta', 'Request Pricing & Project Details')}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#F5F3E6] border border-white/30 font-sans font-medium text-xs sm:text-sm uppercase tracking-widest rounded-full backdrop-blur-sm transition-all"
            >
              Get Pricing & Floor Plans
            </button>
          </motion.div>
        </div>
      </div>

      {/* High-Contrast Bottom 6-Fact Snapshot Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl">
          {SNAPSHOT_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.lbl}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 text-center transition-all hover:bg-white/10"
              >
                <Icon className={`w-4 h-4 mb-1 ${fact.isReady ? 'text-emerald-400' : 'text-[#CE793A]'}`} />
                <span className={`font-serif font-bold text-lg sm:text-xl md:text-2xl ${fact.isReady ? 'text-emerald-400' : 'text-[#F5F3E6]'}`}>
                  {fact.val}
                </span>
                <span className="font-sans text-[11px] text-[#CE793A] font-semibold tracking-wider uppercase mt-0.5">
                  {fact.lbl}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
