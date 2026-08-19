'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
  onOpenVideoModal?: (videoSrc: string) => void;
}

export default function ProgressSection({ onOpenLeadModal }: ProgressSectionProps) {
  const milestones = [
    { label: 'Foundation & RCC Superstructure', status: '100% Completed', done: true, progress: 100 },
    { label: 'Internal Plastering & Electrical Works', status: '95% Completed', done: true, progress: 95 },
    { label: 'Flooring, Painting & Clubhouse Finishes', status: 'In Final Progress', done: false, progress: 85 },
  ];

  return (
    <section
      id="progress"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-obsidian text-alabaster relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Split: Progress & Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Progress Bars & Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="space-y-1.5">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-emerald flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>RERA Verified Execution</span>
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
                90% Built. <span className="italic text-bronze font-normal">Possession Soon.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-alabaster/80 font-normal leading-relaxed">
              Experience the peace of mind of investing in a near-completion gated community. Eliminating multi-year construction risks while locking in pre-handover appreciation benefits.
            </p>

            {/* Progress Percentage Meter */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-3 shadow-inner">
              <div className="flex items-center justify-between font-sans">
                <span className="text-xs font-bold uppercase tracking-wider text-alabaster/80">
                  Overall Construction Progress
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-emerald">
                  90%
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-emerald rounded-full shadow-lg shadow-emerald/40"
                />
              </div>
              <div className="flex items-center justify-between font-sans text-[11px] text-alabaster/60 pt-0.5">
                <span>RERA Target: On Schedule</span>
                <span>TG RERA: P02200002810</span>
              </div>
            </div>

            {/* Milestones Checklist */}
            <div className="space-y-2.5 font-sans">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${m.done ? 'text-emerald' : 'text-bronze'}`} />
                    <span className="text-alabaster/90 font-medium">{m.label}</span>
                  </div>
                  <span className={`text-xs font-bold ${m.done ? 'text-emerald' : 'text-bronze'}`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal('progress_visit', 'Book a Visit')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>Book a Visit</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Embedded Walkthrough Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <video
                controls
                playsInline
                poster="/images/Front view.webp"
                className="w-full h-full object-cover"
              >
                <source src="/videos/sanarelli_progress.mp4" type="video/mp4" />
                <source src="/videos/construction-progress.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-sans text-alabaster/70">
              <span>On-Site Raw Footage & Structural Progress</span>
              <span className="text-emerald font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Site Status
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
