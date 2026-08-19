'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { AMENITY_TABS, AMENITIES } from '@/data/content';

interface AmenitiesSectionProps {
  onOpenModal: (source: string) => void;
}

export default function AmenitiesSection({ onOpenModal }: AmenitiesSectionProps) {
  const [activeTab, setActiveTab] = useState('wellness');

  const currentTab = AMENITY_TABS.find((t) => t.id === activeTab) || AMENITY_TABS[0];
  const items = AMENITIES[activeTab] || [];

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-sienna text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            40+ Curated Lifestyle Privileges
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-alabaster leading-tight">
            25,000 Sq.Ft <span className="italic text-caramel font-normal">Clubhouse Sanctuary.</span>
          </h2>
          <p className="text-sm sm:text-base text-alabaster/80 font-light">
            Crafted for relaxation, wellness, recreation, and meaningful social connections for every generation.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {AMENITY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-5 sm:px-6 rounded-2xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-caramel text-white shadow-lg shadow-caramel/30 scale-105'
                  : 'bg-white/10 text-alabaster/80 hover:bg-white/15 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-sienna-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Left: Amenities Feature List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-caramel text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>{currentTab.label} Highlights</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-caramel/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-alabaster/90 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal(`amenities_brochure_${activeTab}`)}
                className="py-3 px-6 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all"
              >
                Download Full 40+ Amenities Brochure
              </button>
            </div>
          </div>

          {/* Right: Render Image */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src={currentTab.image}
                alt={currentTab.label}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-sienna-dark/80 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-alabaster">{currentTab.label}</span>
                <span className="text-[11px] text-caramel font-semibold uppercase tracking-wider">
                  Clubhouse Level
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
