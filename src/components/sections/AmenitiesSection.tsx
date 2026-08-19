'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AMENITY_SLIDES = [
  {
    id: 'pool',
    tag: 'Wellness Sanctuary',
    title: 'Rooftop Infinity Swimming Pool & Sunken Deck',
    subtitle: 'Temperature-controlled leisure pool with panoramic gated township views.',
    image: '/images/swimming pool.webp',
  },
  {
    id: 'foyer',
    tag: 'Grand Reception',
    title: '25,000 Sq.Ft Grand Clubhouse Foyer & Lounge',
    subtitle: 'Double-height welcoming lobby with co-working suites and banquet halls.',
    image: '/images/club view.webp',
  },
  {
    id: 'kids',
    tag: 'Family Recreation',
    title: 'Adventure Play Park & Outdoor Sports Zone',
    subtitle: 'Traffic-free soft-padded play spaces, net cricket arena, and skating track.',
    image: '/images/Childrens Play area.webp',
  },
  {
    id: 'sports',
    tag: 'Active Lifestyle',
    title: 'Half Basketball Arena & Multi-Sports Court',
    subtitle: 'Floodlit professional courts for tennis, basketball, and evening fitness.',
    image: '/images/Basket ball court.webp',
  },
];

export default function AmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? AMENITY_SLIDES.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === AMENITY_SLIDES.length - 1 ? 0 : prev + 1));

  // Auto slide every 6 seconds if idle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === AMENITY_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = AMENITY_SLIDES[currentIndex];

  return (
    <section
      id="amenities"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-obsidian text-alabaster relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>40+ Curated Privileges</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
            25,000 Sq.Ft <span className="italic text-bronze font-normal">Clubhouse Sanctuary.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-alabaster/80 font-normal">
            A self-contained lifestyle ecosystem crafted for wellness, family recreation, and community celebrations.
          </p>
        </motion.div>

        {/* Slideshow Container with Smooth Crossfade & Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950"
        >
          {/* Main Visual Slide */}
          <div className="relative h-72 sm:h-96 lg:h-[440px] w-full overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Clean Non-Clumsy Gradient Text Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent p-5 sm:p-8 flex flex-col justify-end text-left space-y-1.5">
              <span className="font-sans text-xs font-bold text-bronze uppercase tracking-widest">
                {currentSlide.tag}
              </span>
              <h3 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {currentSlide.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-alabaster/80 font-normal max-w-2xl hidden sm:block">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Desktop / Tablet Left & Right Arrow Buttons */}
            <button
              onClick={prev}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-obsidian/60 hover:bg-bronze text-white hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-obsidian/60 hover:bg-bronze text-white hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator Bar */}
          <div className="py-3.5 px-4 bg-obsidian/90 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-2.5">
            {AMENITY_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-bronze shadow-lg shadow-bronze/40'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="text-center pt-3 block sm:hidden">
          <span className="font-sans text-[11px] text-alabaster/60 font-medium">
            ← Swipe or tap dots to view more →
          </span>
        </div>
      </div>
    </section>
  );
}
