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
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze">
            40+ Curated Privileges
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
            25,000 Sq.Ft <span className="italic text-bronze font-normal">Clubhouse Sanctuary.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-alabaster/80 font-normal">
            A self-contained lifestyle ecosystem crafted for wellness, family recreation, and community celebrations.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8"
        >
          {AMENITY_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 py-2.5 px-4 sm:px-5 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? 'bg-bronze text-white shadow-lg shadow-bronze/30 scale-105'
                    : 'bg-white/10 text-alabaster/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white/5 rounded-3xl p-5 sm:p-8 border border-white/10 shadow-2xl"
        >
          {/* Left Column: Feature List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-bronze font-sans text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>{currentCategory.label} Privileges</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-sans">
              <AnimatePresence mode="wait">
                {currentCategory.items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-bronze/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-alabaster/90 font-medium leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="pt-1">
              <span className="font-sans text-[11px] text-alabaster/60 block">
                Exclusive access reserved for residents and approved guests of this project.
              </span>
            </div>
          </div>

          {/* Right Column: Animated Crossfade Image */}
          <div className="lg:col-span-6">
            <div className="relative h-64 sm:h-80 lg:h-84 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15">
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
                  <div className="absolute bottom-3 left-3 right-3 bg-obsidian/85 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between font-sans">
                    <span className="text-xs font-bold text-alabaster">{currentCategory.caption}</span>
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
    </section>
  );
}
