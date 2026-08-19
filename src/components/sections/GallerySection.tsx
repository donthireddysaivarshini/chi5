'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GallerySectionProps {
  onOpenImageModal: (imgSrc: string) => void;
}

const EXTERIOR_IMAGES = [
  { src: '/images/Front view.webp', title: 'Grand Gated Entrance & Security Hub' },
  { src: '/images/Street view.webp', title: 'Landscaped Driveways & Pedestrian Paths' },
  { src: '/images/community view.webp', title: '5.3 Acre Masterplanned Gated Community' },
  { src: '/images/water body.webp', title: 'Central Water Body & Zen Plaza' },
  { src: '/images/Night Aerial.webp', title: 'Illuminated Night Aerial Overview' },
];

const INTERIOR_IMAGES = [
  { src: '/images/Living room.webp', title: 'Elegant Formal Living Lounge' },
  { src: '/images/Dining area.webp', title: 'Open-Plan Dining & Entertaining Zone' },
  { src: '/images/Kitchen.webp', title: 'Modular Kitchen with Premium Fittings' },
  { src: '/images/Master bedroom.webp', title: 'Master Bedroom Penthouse Suite' },
  { src: '/images/Bedroom detail.webp', title: 'Bespoke Fitting & Storage Details' },
  { src: '/images/bedroom 1.webp', title: 'Smart 2nd Bedroom Plan' },
];

export default function GallerySection({ onOpenImageModal }: GallerySectionProps) {
  const [exteriorIndex, setExteriorIndex] = useState(0);
  const [interiorIndex, setInteriorIndex] = useState(0);

  const prevExterior = () => setExteriorIndex((prev) => (prev === 0 ? EXTERIOR_IMAGES.length - 1 : prev - 1));
  const nextExterior = () => setExteriorIndex((prev) => (prev === EXTERIOR_IMAGES.length - 1 ? 0 : prev + 1));

  const prevInterior = () => setInteriorIndex((prev) => (prev === 0 ? INTERIOR_IMAGES.length - 1 : prev - 1));
  const nextInterior = () => setInteriorIndex((prev) => (prev === INTERIOR_IMAGES.length - 1 ? 0 : prev + 1));

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-alabaster text-noir"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-caramel">
            Exteriors & Interiors
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1C11] tracking-tight leading-[1.15]">
            Crafted Architecture, <span className="italic text-[#CE793A] font-normal">Rendered in 3D.</span>
          </h2>
          <p className="font-figtree text-sm sm:text-base text-noir/70 font-normal">
            Swipe or use controls to browse through authentic 3D masterplan renders and interior design concepts.
          </p>
        </div>

        {/* Gallery 1: Gated Township & Architecture */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-borderTone">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-figtree text-xs font-bold uppercase tracking-widest text-caramel block">Gallery 01</span>
              <h3 className="font-gumani text-2xl font-bold text-sienna">Gated Township & Architecture</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevExterior}
                aria-label="Previous image"
                className="w-10 h-10 rounded-full bg-chocolate hover:bg-caramel hover:text-white transition-colors flex items-center justify-center text-sienna"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextExterior}
                aria-label="Next image"
                className="w-10 h-10 rounded-full bg-chocolate hover:bg-caramel hover:text-white transition-colors flex items-center justify-center text-sienna"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Featured Image with Carousel Controls */}
          <div
            onClick={() => onOpenImageModal(EXTERIOR_IMAGES[exteriorIndex].src)}
            className="relative h-72 sm:h-[420px] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl border border-borderTone"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={exteriorIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={EXTERIOR_IMAGES[exteriorIndex].src}
                  alt={EXTERIOR_IMAGES[exteriorIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-sienna-dark/85 via-transparent to-transparent flex items-end justify-between p-6">
              <div>
                <span className="font-figtree text-xs font-semibold text-caramel uppercase tracking-wider block">
                  {exteriorIndex + 1} of {EXTERIOR_IMAGES.length}
                </span>
                <h4 className="font-gumani text-lg sm:text-xl font-bold text-white">
                  {EXTERIOR_IMAGES[exteriorIndex].title}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Thumbnail Pagination Dots / Previews */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 mt-4">
            {EXTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setExteriorIndex(idx)}
                className={`relative h-14 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  exteriorIndex === idx ? 'border-caramel scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery 2: Model Flat Interiors */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-borderTone">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-figtree text-xs font-bold uppercase tracking-widest text-caramel block">Gallery 02</span>
              <h3 className="font-gumani text-2xl font-bold text-sienna">Model Flat Interiors</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevInterior}
                aria-label="Previous image"
                className="w-10 h-10 rounded-full bg-chocolate hover:bg-caramel hover:text-white transition-colors flex items-center justify-center text-sienna"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextInterior}
                aria-label="Next image"
                className="w-10 h-10 rounded-full bg-chocolate hover:bg-caramel hover:text-white transition-colors flex items-center justify-center text-sienna"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Featured Image with Carousel Controls */}
          <div
            onClick={() => onOpenImageModal(INTERIOR_IMAGES[interiorIndex].src)}
            className="relative h-72 sm:h-[420px] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl border border-borderTone"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={interiorIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={INTERIOR_IMAGES[interiorIndex].src}
                  alt={INTERIOR_IMAGES[interiorIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-sienna-dark/85 via-transparent to-transparent flex items-end justify-between p-6">
              <div>
                <span className="font-figtree text-xs font-semibold text-caramel uppercase tracking-wider block">
                  {interiorIndex + 1} of {INTERIOR_IMAGES.length}
                </span>
                <h4 className="font-gumani text-lg sm:text-xl font-bold text-white">
                  {INTERIOR_IMAGES[interiorIndex].title}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Thumbnail Pagination Dots / Previews */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 mt-4">
            {INTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setInteriorIndex(idx)}
                className={`relative h-14 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  interiorIndex === idx ? 'border-caramel scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
