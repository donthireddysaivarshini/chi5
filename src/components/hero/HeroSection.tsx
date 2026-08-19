'use client';

import React, { useState, useEffect } from 'react';
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
  { icon: Building2, val: "90% Built", lbl: "Possession Soon", highlight: true },
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
    <section id="hero" className="min-h-screen relative flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-sienna-dark">
      {/* Background Video & Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Front view.webp"
          className="w-full h-full object-cover"
        >
          <source src="/videos/Static_camera_locked_in_place_hero.mp4" type="video/mp4" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-sienna-dark via-sienna-dark/75 to-sienna-dark/45" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl space-y-6">
          {/* Regulatory Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-alabaster text-xs font-figtree font-medium">
              <FileCheck2 className="w-3.5 h-3.5 text-caramel" />
              <span>HMDA Approved</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-alabaster text-xs font-figtree font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald" />
              <span>TG RERA: P02200002810</span>
            </span>
          </motion.div>

          {/* Rotating Headline with Framer Motion */}
          <div className="h-28 sm:h-32 md:h-36 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-gumani text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]"
              >
                {HEADLINES[headlineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-figtree text-sm sm:text-base md:text-lg text-alabaster/90 font-normal leading-relaxed max-w-2xl"
          >
            Luxurious 2 BHK & Duplex gated community homes starting from <strong className="text-white font-semibold">₹55 Lakhs</strong>. Experience premium living with 70% open spaces, adjacent to Bowrampet reserve forests.
          </motion.p>

          {/* Clean CTA Button Pair */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onOpenLeadModal('hero_main_cta', 'Book a Private Site Tour')}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-caramel hover:bg-caramel-light text-white font-figtree font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-caramel-glow transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Book a Private Site Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenLeadModal('hero_pricing_cta', 'Get Detailed Pricing & Floor Plans')}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-alabaster border border-white/20 font-figtree font-semibold text-xs uppercase tracking-widest rounded-full backdrop-blur-sm transition-all"
            >
              Get Pricing & Floor Plans
            </button>
          </motion.div>
        </div>
      </div>

      {/* Integrated 6-Fact Snapshot Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
          {SNAPSHOT_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.lbl}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/20 text-center transition-all hover:bg-black/35"
              >
                <Icon className={`w-4 h-4 mb-1 ${fact.highlight ? 'text-emerald' : 'text-caramel'}`} />
                <span className={`font-gumani text-base sm:text-lg font-bold ${fact.highlight ? 'text-emerald' : 'text-white'}`}>
                  {fact.val}
                </span>
                <span className="font-figtree text-[11px] text-alabaster/70 font-medium">
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
