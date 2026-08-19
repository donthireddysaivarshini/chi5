'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExteriorGallerySectionProps {
  onOpenImageModal: (imgSrc: string) => void;
}

const EXTERIOR_IMAGES = [
  { src: '/images/Front view.webp', title: 'Grand Gated Entrance & Security Hub' },
  { src: '/images/Street view.webp', title: 'Landscaped Driveways & Pedestrian Paths' },
  { src: '/images/community view.webp', title: '5.3 Acre Masterplanned Gated Community' },
  { src: '/images/water body.webp', title: 'Central Water Body & Zen Plaza' },
  { src: '/images/Night Aerial.webp', title: 'Illuminated Night Aerial Overview' },
];

export default function ExteriorGallerySection({ onOpenImageModal }: ExteriorGallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? EXTERIOR_IMAGES.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === EXTERIOR_IMAGES.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="exteriors"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-alabaster text-obsidian relative overflow-hidden"
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
            <Building2 className="w-3.5 h-3.5" />
            <span>Masterplan & Architecture</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
            Crafted Architecture, <span className="italic text-bronze font-normal">Brought to Life.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-mute font-normal">
            Swipe or use controls to browse through authentic 3D masterplan renders and gated township features.
          </p>
        </motion.div>

        {/* Gallery Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-5 sm:p-7 shadow-kura border border-zinc-border max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="font-bold uppercase tracking-widest text-bronze">
                Gated Township Exteriors
              </span>
              <span className="text-charcoal-mute">
                ({currentIndex + 1} of {EXTERIOR_IMAGES.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous image"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-bronze hover:text-white transition-colors flex items-center justify-center text-obsidian"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-bronze hover:text-white transition-colors flex items-center justify-center text-obsidian"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Featured Image */}
          <div
            onClick={() => onOpenImageModal(EXTERIOR_IMAGES[currentIndex].src)}
            className="relative h-60 sm:h-[340px] lg:h-[380px] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-zinc-border"
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
                  src={EXTERIOR_IMAGES[currentIndex].src}
                  alt={EXTERIOR_IMAGES[currentIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5">
              <div>
                <span className="font-sans text-[11px] font-semibold text-bronze uppercase tracking-wider block">
                  Click to Expand High-Res
                </span>
                <h4 className="font-display text-base sm:text-xl font-bold text-white">
                  {EXTERIOR_IMAGES[currentIndex].title}
                </h4>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-3">
            {EXTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-12 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx ? 'border-bronze scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
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
