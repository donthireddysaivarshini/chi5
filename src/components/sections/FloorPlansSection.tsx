'use client';

import React from 'react';
import Image from 'next/image';
import { Lock, DownloadCloud, FileSpreadsheet } from 'lucide-react';
import { FLOOR_PLANS } from '@/data/content';

interface FloorPlansSectionProps {
  onOpenModal: (source: string) => void;
}

export default function FloorPlansSection({ onOpenModal }: FloorPlansSectionProps) {
  return (
    <section id="floorplans" className="py-20 sm:py-28 bg-chocolate/60 text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            Architectural Blueprints
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-sienna leading-tight">
            Master Unit <span className="italic text-caramel font-normal">Floor Plans.</span>
          </h2>
          <p className="text-sm sm:text-base text-noir/70 font-light">
            All residences engineered with 100% Vaastu compliance, maximum natural lighting, and cross-ventilation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FLOOR_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-chocolate-dark flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-gumani text-xl sm:text-2xl font-bold text-sienna">
                    {plan.type}
                  </h3>
                  <span className="text-xs font-semibold text-caramel">{plan.area}</span>
                </div>
                <span className="p-2.5 rounded-full bg-chocolate text-sienna">
                  <Lock className="w-4 h-4 text-caramel" />
                </span>
              </div>

              {/* Gated Blueprint Graphic */}
              <div
                onClick={() => onOpenModal(`floorplans_tab_${plan.id}`)}
                className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden my-4 bg-chocolate-dark cursor-pointer group"
              >
                <Image
                  src={plan.image}
                  alt={`${plan.type} Blueprint`}
                  fill
                  className="object-cover filter blur-[6px] group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-sienna-dark/60 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-caramel/90 text-white flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <DownloadCloud className="w-6 h-6" />
                  </div>
                  <h4 className="font-gumani text-lg sm:text-xl font-bold text-alabaster mb-1">
                    Download {plan.type} PDF
                  </h4>
                  <p className="text-xs text-alabaster/70 max-w-xs mb-4">
                    Unlock dimension measurements, furniture layout provisions, and structural layouts.
                  </p>
                  <button className="py-2.5 px-5 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors">
                    Unlock Floor Plan
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 text-xs text-noir/60 border-t border-chocolate">
                <span className="flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-caramel" />
                  <span>High-Res Architectural CAD Blueprint</span>
                </span>
                <span className="font-bold text-emerald">Verified Layout</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
