'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, BedDouble } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteriorGallerySectionProps {
  onOpenImageModal: (imgSrc: string) => void;
}

const INTERIOR_IMAGES = [
  { src: '/images/Living room.webp', title: 'Elegant Formal Living Lounge' },
  { src: '/images/Dining area.webp', title: 'Open-Plan Dining & Entertaining Zone' },
  { src: '/images/Kitchen.webp', title: 'Modular Kitchen with Premium Fittings' },
  { src: '/images/Master bedroom.webp', title: 'Master Bedroom Penthouse Suite' },
  { src: '/images/Bedroom detail.webp', title: 'Bespoke Fitting & Storage Details' },
  { src: '/images/bedroom 1.webp', title: 'Smart 2nd Bedroom Plan' },
];

export default function InteriorGallerySection({ onOpenImageModal }: InteriorGallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? INTERIOR_IMAGES.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === INTERIOR_IMAGES.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="interiors"
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
            <BedDouble className="w-3.5 h-3.5" />
            <span>Model Flat Living Concepts</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
            Step Inside, <span className="italic text-bronze font-normal">Experience Luxury.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-alabaster/80 font-normal">
            Take a visual tour through spacious living lounges, functional modular kitchens, and private master bedroom suites.
          </p>
        </motion.div>

        {/* Gallery Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl max-w-5xl mx-auto backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="font-bold uppercase tracking-widest text-bronze">
                Model Flat Interiors
              </span>
              <span className="text-alabaster/60">
                ({currentIndex + 1} of {INTERIOR_IMAGES.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous image"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-bronze hover:text-white transition-colors flex items-center justify-center text-alabaster"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-bronze hover:text-white transition-colors flex items-center justify-center text-alabaster"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Featured Image */}
          <div
            onClick={() => onOpenImageModal(INTERIOR_IMAGES[currentIndex].src)}
            className="relative h-60 sm:h-[340px] lg:h-[380px] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-white/15"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={INTERIOR_IMAGES[currentIndex].src}
                  alt={INTERIOR_IMAGES[currentIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5">
              <div>
                <span className="font-sans text-[11px] font-semibold text-bronze uppercase tracking-wider block">
                  Click to Expand High-Res
                </span>
                <h4 className="font-display text-base sm:text-xl font-bold text-white">
                  {INTERIOR_IMAGES[currentIndex].title}
                </h4>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 mt-3">
            {INTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-12 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx ? 'border-bronze scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
