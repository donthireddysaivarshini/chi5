'use client';

import React from 'react';
import Image from 'next/image';
import { Trees, Compass, Sparkles, Building2 } from 'lucide-react';

export default function OverviewSection() {
  const highlights = [
    {
      icon: Trees,
      title: '70% Open Spaces',
      desc: 'Abutting the lush Bowrampet reserve forest for clean air & cooler natural microclimate year-round.',
    },
    {
      icon: Compass,
      title: '100% Vaastu Compliant',
      desc: 'Optimized East & West facing master plans designed with zero wasted corridor circulation.',
    },
    {
      icon: Sparkles,
      title: '40+ Club Amenities',
      desc: '25,000 sq.ft signature clubhouse with rooftop infinity pool, co-working lounge & sports courts.',
    },
    {
      icon: Building2,
      title: '90% Built & Ready',
      desc: 'Superstructure fully completed with final finishing underway. Immediate handover security.',
    },
  ];

  return (
    <section id="overview" className="py-20 sm:py-28 bg-sienna-dark text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/Birds level view.webp"
                alt="Codename Hi-Five Aerial View"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-caramel text-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[200px] sm:max-w-[240px]">
              <span className="block font-gumani text-3xl sm:text-4xl font-bold leading-none mb-1">
                55+ Yrs
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
                Kura Homes Legacy of Trust
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Text & Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
                The Vision
              </span>
              <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-alabaster leading-tight">
                Where Gated Luxury Meets <span className="italic text-caramel font-normal">Untouched Nature.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-alabaster/80 font-light leading-relaxed">
              Codename Hi-Five by Kura Homes is a benchmark residential community crafted with 55 years of developer legacy. Located directly adjacent to the tranquil Bowrampet reserve forests, this gated address offers a unique microclimate that stays cooler year-round, while placing you just minutes from Hyderabad’s premier IT and educational hubs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-caramel/40 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-caramel mb-2.5" />
                    <h3 className="font-gumani text-base font-bold text-alabaster mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-alabaster/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
