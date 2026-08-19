'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function PricingSection({ onOpenLeadModal }: PricingSectionProps) {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-[#F5F3E6] text-[#1B1717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#CE793A]">
            Configurations & Pricing
          </span>
          <h2 className="font-display font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1C11] tracking-tight leading-[1.15]">
            Explore Available <span className="italic text-[#CE793A] font-normal">Layouts & Sizes.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5C4D44] font-normal">
            Select from space-optimized 2 BHK configurations or expansive double-height Duplex penthouses.
          </p>
        </div>

        {/* Side-by-Side Dual Cards with Embedded Blueprints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: 2 BHK Smart Luxe */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-[#EADECF] flex flex-col justify-between transition-all duration-300 hover:shadow-kura-lg hover:-translate-y-1.5">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#CE793A]/10 text-[#CE793A] font-sans font-bold text-xs uppercase tracking-wider">
                  Smart Luxe
                </span>
                <span className="font-sans text-xs text-[#5C4D44]">Possession Soon</span>
              </div>

              <div>
                <h3 className="font-display font-serif text-2xl sm:text-3xl font-bold text-[#3A1C11]">
                  Premium 2 BHK Homes
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#CE793A]">
                    ₹59 Lakhs*
                  </span>
                  <span className="font-sans text-xs text-[#5C4D44]">onwards</span>
                </div>
                <span className="font-sans text-xs text-[#5C4D44] block mt-0.5">
                  Starting at ₹4,999/sq.ft onwards
                </span>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-[#EADECF]/60 font-sans text-xs sm:text-sm text-[#1B1717]/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1,100 to 1,285 Sq.Ft configurations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Vaastu Compliant Layouts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>East & West facing entrance choices</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cross-ventilated living space with grand balconies</span>
                </li>
              </ul>
            </div>

            {/* Embedded Blueprint Trigger */}
            <div className="pt-6 mt-6 border-t border-[#EADECF]/60 space-y-4">
              <div
                onClick={() => onOpenLeadModal('floorplan_2bhk', 'Unlock 2 BHK Blueprints (PDF)')}
                className="relative h-36 w-full rounded-2xl overflow-hidden cursor-pointer group border border-[#EADECF] shadow-inner"
              >
                <Image
                  src="/images/bedroom 1.webp"
                  alt="2 BHK Floor Plan Blueprint Preview"
                  fill
                  className="object-cover blur-sm group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#28120C]/70 group-hover:bg-[#28120C]/60 transition-colors flex flex-col items-center justify-center text-[#F5F3E6] gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#CE793A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#F5F3E6]">
                    Unlock 2 BHK Blueprints (PDF)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal('floorplan_2bhk', 'Unlock 2 BHK Blueprints (PDF)')}
                className="w-full py-3.5 bg-[#3A1C11] hover:bg-[#5E2B1B] text-[#F5F3E6] font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Download 2 BHK Blueprint & Cost Sheet</span>
                <ArrowRight className="w-4 h-4 text-[#CE793A]" />
              </button>
            </div>
          </div>

          {/* Card 2: Bespoke Duplex Suites */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-[#EADECF] flex flex-col justify-between transition-all duration-300 hover:shadow-kura-lg hover:-translate-y-1.5">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#CE793A]/10 text-[#CE793A] font-sans font-bold text-xs uppercase tracking-wider">
                  Luxury Penthouse
                </span>
                <span className="font-sans text-xs text-[#5C4D44]">Exclusive Limited Units</span>
              </div>

              <div>
                <h3 className="font-display font-serif text-2xl sm:text-3xl font-bold text-[#3A1C11]">
                  Bespoke Duplex Suites
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#CE793A]">
                    ₹95 Lakhs*
                  </span>
                  <span className="font-sans text-xs text-[#5C4D44]">onwards</span>
                </div>
                <span className="font-sans text-xs text-[#5C4D44] block mt-0.5">
                  Starting at ₹4,999/sq.ft onwards
                </span>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-[#EADECF]/60 font-sans text-xs sm:text-sm text-[#1B1717]/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>2,200 Sq.Ft bespoke duplex layouts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Double-height ceiling architectural living</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Private terrace deck with green forest views</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Master bedroom penthouse suites on upper level</span>
                </li>
              </ul>
            </div>

            {/* Embedded Blueprint Trigger */}
            <div className="pt-6 mt-6 border-t border-[#EADECF]/60 space-y-4">
              <div
                onClick={() => onOpenLeadModal('floorplan_duplex', 'Unlock Duplex Blueprints (PDF)')}
                className="relative h-36 w-full rounded-2xl overflow-hidden cursor-pointer group border border-[#EADECF] shadow-inner"
              >
                <Image
                  src="/images/Master bedroom.webp"
                  alt="Duplex Floor Plan Blueprint Preview"
                  fill
                  className="object-cover blur-sm group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#28120C]/70 group-hover:bg-[#28120C]/60 transition-colors flex flex-col items-center justify-center text-[#F5F3E6] gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#CE793A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#F5F3E6]">
                    Unlock Duplex Blueprints (PDF)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal('floorplan_duplex', 'Unlock Duplex Blueprints (PDF)')}
                className="w-full py-3.5 bg-[#CE793A] hover:brightness-110 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Download Duplex Blueprint & Cost Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
