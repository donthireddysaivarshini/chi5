'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '@/data/content';

interface ConstructionStatusSectionProps {
  onOpenModal: (source: string) => void;
}

export default function ConstructionStatusSection({ onOpenModal }: ConstructionStatusSectionProps) {
  const milestones = [
    { label: 'Foundation & Earthwork', status: '100% Completed', done: true },
    { label: 'Superstructure & RCC Framing', status: '100% Completed', done: true },
    { label: 'Brickwork & Internal Plastering', status: '95% Completed', done: true },
    { label: 'Flooring, Painting & Clubhouse Finishes', status: 'In Final Progress', done: false },
  ];

  return (
    <section id="progress" className="py-20 sm:py-28 bg-sienna-dark text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Progress Data & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>RERA Verified Execution</span>
              </span>
              <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-alabaster leading-tight">
                90% Built. <span className="italic text-caramel font-normal">Possession Soon.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-alabaster/80 font-light leading-relaxed">
              Experience the confidence of investing in a near-completion project. Eliminating multi-year construction risks while locking in pre-handover appreciation benefits.
            </p>

            {/* Progress Percentage Meter */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-alabaster/80">
                  Overall Construction Progress
                </span>
                <span className="font-gumani text-2xl sm:text-3xl font-bold text-emerald">
                  90%
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald rounded-full w-[90%] transition-all duration-1000 shadow-lg shadow-emerald/40" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-alabaster/60 pt-1">
                <span>RERA Target: On Schedule</span>
                <span>TG RERA: {PROJECT_INFO.reraNumber}</span>
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-2.5">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${m.done ? 'text-emerald' : 'text-caramel'}`} />
                    <span className="text-alabaster/90">{m.label}</span>
                  </div>
                  <span className={`text-xs font-bold ${m.done ? 'text-emerald' : 'text-caramel'}`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal('construction_status_visit')}
                className="inline-flex items-center gap-2 py-3.5 px-6 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
              >
                <span>Schedule On-Site Progress Tour</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Construction Video Player */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[320px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <video
                controls
                playsInline
                poster="/images/Front view.webp"
                className="w-full h-full object-cover"
              >
                <source src="/videos/construction-progress.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-alabaster/70">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-caramel" />
                <span>On-Site Raw Footage & Structural Audit</span>
              </div>
              <span className="text-emerald font-semibold">Live Site Status</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
