'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Dumbbell, Users2, Smile, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AMENITY_CATEGORIES = [
  {
    id: 'fitness',
    label: 'Fitness & Pool',
    icon: Dumbbell,
    tag: 'Wellness Sanctuary',
    title: 'Rooftop Infinity Swimming Pool & Sunken Deck',
    subtitle: 'Temperature-controlled leisure pool with panoramic gated township views.',
    image: '/images/swimming pool.webp',
    items: [
      'Rooftop Infinity Swimming Pool',
      'AC Gymnasium with Cardio Suite',
      'Aerobics, Zumba & Yoga Studio',
      'Outdoor Jogging & Reflexology Track',
      'Meditation & Wellness Deck',
      'Steam & Sauna Wellness Rooms',
    ],
  },
  {
    id: 'social',
    label: 'Co-Work & Social',
    icon: Users2,
    tag: 'Grand Reception',
    title: '25,000 Sq.Ft Grand Clubhouse Foyer & Lounge',
    subtitle: 'Double-height welcoming lobby with co-working suites and banquet halls.',
    image: '/images/club view.webp',
    items: [
      'High-Speed Wi-Fi Co-working Lounge',
      'Grand Multipurpose Banquet Hall',
      'Double-Height Reception Foyer',
      'Fully-Furnished Luxury Guest Suites',
      'Private Meeting & Board Rooms',
      'Coffee Bar & Alfresco Terrace',
    ],
  },
  {
    id: 'kids',
    label: 'Kids & Outdoors',
    icon: Smile,
    tag: 'Family Recreation',
    title: 'Adventure Play Park & Outdoor Sports Zone',
    subtitle: 'Traffic-free soft-padded play spaces, net cricket arena, and skating track.',
    image: '/images/Childrens Play area.webp',
    items: [
      'Traffic-Free Soft-Padded Play Park',
      'Net Cricket Practice Arena',
      'Half Basketball & Badminton Court',
      'Dedicated Safe Cycling Track',
      'Toddlers Indoor Activity Room',
      'Outdoor Skating & Roller Rink',
    ],
  },
  {
    id: 'practical',
    label: 'Conveniences',
    icon: ShieldCheck,
    tag: 'Active Lifestyle',
    title: 'Gated Township Conveniences & Security',
    subtitle: 'EV charging bays, multi-level parking, 24/7 AI security, and power backup.',
    image: '/images/Basket ball court.webp',
    items: [
      'Dedicated EV Fast-Charging Bays',
      '24/7 Gated Security & AI-CCTV Grid',
      'In-House Unisex Grooming Salon Room',
      'Pharmacy & Daily Convenience Store',
      '100% DG Power Backup for Units',
      'Covered Multi-Level Car Parking',
    ],
  },
];

export default function AmenitiesSection() {
  // Desktop state: Active category tab
  const [activeTab, setActiveTab] = useState('fitness');
  
  // Mobile state: Touch swipe & index
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Desktop current category
  const currentCategory = AMENITY_CATEGORIES.find((c) => c.id === activeTab) || AMENITY_CATEGORIES[0];

  // Mobile slideshow auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev === AMENITY_CATEGORIES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const mobilePrev = () => setMobileIndex((prev) => (prev === 0 ? AMENITY_CATEGORIES.length - 1 : prev - 1));
  const mobileNext = () => setMobileIndex((prev) => (prev === AMENITY_CATEGORIES.length - 1 ? 0 : prev + 1));

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) mobileNext();
    else if (distance < -40) mobilePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentMobileSlide = AMENITY_CATEGORIES[mobileIndex];

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

        {/* ====================================================================== */}

        {/* ====================================================================== */}
        <div className="block lg:hidden">
          <div className="relative max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 select-none">
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative h-72 sm:h-96 w-full overflow-hidden cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentMobileSlide.image}
                    alt={currentMobileSlide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Clean Non-Clumsy Gradient Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent p-5 flex flex-col justify-end text-left space-y-1 pointer-events-none">
                <span className="font-sans text-xs font-bold text-bronze uppercase tracking-widest">
                  {currentMobileSlide.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  {currentMobileSlide.title}
                </h3>
              </div>

              {/* Mobile Arrows */}
              <button
                onClick={mobilePrev}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-obsidian/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-10 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={mobileNext}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-obsidian/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-10 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Dots Bar */}
            <div className="py-3 px-4 bg-obsidian/90 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-2.5">
              {AMENITY_CATEGORIES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setMobileIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all rounded-full ${
                    mobileIndex === idx
                      ? 'w-7 h-2 bg-bronze shadow-lg shadow-bronze/40'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center pt-3">
            <span className="font-sans text-[11px] text-alabaster/60 font-medium">
              ← Swipe image or tap arrows →
            </span>
          </div>
        </div>

        {/* ====================================================================== */}
       
        {/* ====================================================================== */}
        <div className="hidden lg:block">
          {/* Category Tabs (Desktop Only) */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {AMENITY_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-full font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? 'bg-bronze text-white shadow-lg shadow-bronze/30 scale-105'
                      : 'bg-white/10 text-alabaster/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop 50/50 Split Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-10 items-center bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto"
          >
            {/* Left 50%: Curated Privilege Points */}
            <div className="col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-bronze font-sans text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>{currentCategory.label} Privileges</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-sans">
                <AnimatePresence mode="wait">
                  {currentCategory.items.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-bronze/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-alabaster/90 font-medium leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-2">
                <span className="font-sans text-[11px] text-alabaster/60 block">
                  Exclusive access reserved for residents and approved guests of this project.
                </span>
              </div>
            </div>

            {/* Right 50%: Large Featured Render */}
            <div className="col-span-6">
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/90 via-obsidian/60 to-transparent p-4 flex items-center justify-between font-sans">
                      <span className="text-xs font-bold text-alabaster">{currentCategory.title}</span>
                      <span className="text-[11px] text-bronze font-semibold uppercase tracking-wider">
                        Clubhouse Level
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
