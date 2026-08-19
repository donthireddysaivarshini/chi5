'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FLOOR_PLANS } from '@/data/content';

interface PricingConfigSectionProps {
  onOpenModal: (source: string) => void;
}

export default function PricingConfigSection({ onOpenModal }: PricingConfigSectionProps) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-alabaster text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            Configurations & Pricing
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-sienna leading-tight">
            Explore Available <span className="italic text-caramel font-normal">Layouts & Suites.</span>
          </h2>
          <p className="text-sm sm:text-base text-noir/70 font-light">
            Select from space-optimized 2 BHK configurations or expansive double-height Duplex penthouses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FLOOR_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-chocolate-dark overflow-hidden hover:shadow-kura-lg transition-all duration-300 group"
            >
              {plan.isPopular && (
                <div className="absolute top-6 right-6 px-3.5 py-1 bg-caramel text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-caramel">
                  {plan.facing}
                </span>
                <h3 className="font-gumani text-2xl sm:text-3xl font-bold text-sienna mt-1">
                  {plan.type}
                </h3>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-gumani text-2xl sm:text-3xl font-bold text-caramel">
                    {plan.price}
                  </span>
                  <span className="text-xs text-noir/50">| Carpet Area: {plan.area}</span>
                </div>
              </div>

              {/* Blurred Blueprint Preview */}
              <div
                onClick={() => onOpenModal(`pricing_${plan.id}_floorplan`)}
                className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 bg-chocolate cursor-pointer group-hover:border-caramel transition-all border border-chocolate-dark"
              >
                <Image
                  src={plan.image}
                  alt={plan.type}
                  fill
                  className="object-cover filter blur-[4px] scale-105 group-hover:scale-110 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-sienna-dark/50 flex flex-col items-center justify-center p-4 text-center">
                  <span className="py-2 px-4 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform group-hover:scale-105">
                    Unlock Official Floor Plan
                  </span>
                  <span className="text-[11px] text-alabaster/80 mt-2">
                    Click to view high-res dimension blueprint
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-noir/80">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Card CTA */}
              <div className="mt-auto pt-4 border-t border-chocolate">
                <button
                  onClick={() => onOpenModal(`pricing_${plan.id}_enquire`)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-sienna hover:bg-sienna-light text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                >
                  <span>Request Detailed Cost Sheet</span>
                  <ArrowRight className="w-4 h-4 text-caramel" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
