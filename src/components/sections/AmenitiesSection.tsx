'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Dumbbell, Users2, Smile, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AMENITY_CATEGORIES = [
  {
    id: 'fitness',
    label: 'Fitness & Pool',
    icon: Dumbbell,
    image: '/images/swimming pool.webp',
    caption: 'Rooftop Infinity Pool & Sunken Deck',
    items: [
      'Rooftop Infinity Swimming Pool',
      'AC Gymnasium with Cardio Suite',
      'Aerobics, Zumba & Yoga Studio',
      'Outdoor Jogging & Reflexology Track',
      'Meditation & Wellness Deck',
      'Steam & Sauna Rooms',
    ],
  },
  {
    id: 'social',
    label: 'Co-Work & Social',
    icon: Users2,
    image: '/images/club view.webp',
    caption: '25,000 Sq.Ft Clubhouse Foyer & Lounge',
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
    image: '/images/Childrens Play area.webp',
    caption: 'Adventure Play Park & Sports Zone',
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
    label: 'Practical Conveniences',
    icon: ShieldCheck,
    image: '/images/Basket ball court.webp',
    caption: 'Gated Township Conveniences & Security',
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
  const [activeTab, setActiveTab] = useState('fitness');
  const currentCategory = AMENITY_CATEGORIES.find((c) => c.id === activeTab) || AMENITY_CATEGORIES[0];

  return (
    <motion.section
      id="amenities"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-sienna text-alabaster"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-caramel">
            40+ Curated Privileges
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            25,000 Sq.Ft <span className="italic text-caramel font-normal">Clubhouse Sanctuary.</span>
          </h2>
          <p className="font-figtree text-sm sm:text-base text-alabaster/80 font-normal">
            A self-contained lifestyle ecosystem crafted for wellness, family recreation, and community celebrations.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {AMENITY_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 py-3 px-5 sm:px-6 rounded-full font-figtree text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? 'bg-caramel text-white shadow-lg shadow-caramel/30 scale-105'
                    : 'bg-white/10 text-alabaster/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-sienna-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Left Column: Feature List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-caramel font-figtree text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>{currentCategory.label} Privileges</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 font-figtree">
              {currentCategory.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-caramel/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-alabaster/90 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <span className="font-figtree text-xs text-alabaster/60 block">
                Exclusive access reserved for Codename Hi-Five residents and approved guests.
              </span>
            </div>
          </div>

          {/* Right Column: Animated Crossfade Image */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15">
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
                    alt={currentCategory.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-sienna-dark/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between font-figtree">
                    <span className="text-xs font-bold text-alabaster">{currentCategory.caption}</span>
                    <span className="text-[11px] text-caramel font-semibold uppercase tracking-wider">
                      Clubhouse Level
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
