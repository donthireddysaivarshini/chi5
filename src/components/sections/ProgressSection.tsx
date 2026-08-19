'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Play, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
  onOpenVideoModal: (videoSrc: string) => void;
}

const PERSPECTIVES = [
  {
    title: 'Why ORR Exit-5 Corridor?',
    desc: 'Proximity metrics to international schools, pharmaceutical tech parks, and the ORR signal-free advantage.',
    image: '/images/Street view.webp',
    video: '/videos/why-this-location.mp4',
  },
  {
    title: 'Investment Appreciation Value',
    desc: 'Comparing entry price of ₹4,999/sq.ft with older corridors (₹9K-10K/sq.ft) and historical growth curves.',
    image: '/images/community view.webp',
    video: '/videos/investment.mp4',
  },
  {
    title: 'Vaastu & Spaces Philosophy',
    desc: 'Chief architect explains Vaastu flow, cross-ventilated bedroom placements, and zero-corridor layouts.',
    image: '/images/Living room.webp',
    video: '/videos/Design.mp4',
  },
];

export default function ProgressSection({ onOpenLeadModal, onOpenVideoModal }: ProgressSectionProps) {
  const milestones = [
    { label: 'Foundation & RCC Superstructure', status: '100% Completed', done: true, progress: 100 },
    { label: 'Internal Plastering & Electrical Works', status: '95% Completed', done: true, progress: 95 },
    { label: 'Flooring, Painting & Clubhouse Finishes', status: 'In Final Progress', done: false, progress: 85 },
  ];

  return (
    <motion.section
      id="progress"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-sienna-dark text-alabaster"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Progress & Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Progress Bars & Status */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-emerald flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>RERA Verified Execution</span>
              </span>
              <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                90% Built. <span className="italic text-caramel font-normal">Possession Soon.</span>
              </h2>
            </div>

            <p className="font-figtree text-sm sm:text-base text-alabaster/80 font-normal leading-relaxed">
              Experience the peace of mind of investing in a near-completion gated community. Eliminating multi-year construction risks while locking in pre-handover appreciation benefits.
            </p>

            {/* Progress Percentage Meter */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 shadow-inner">
              <div className="flex items-center justify-between font-figtree">
                <span className="text-xs font-bold uppercase tracking-wider text-alabaster/80">
                  Overall Construction Progress
                </span>
                <span className="font-gumani text-3xl font-bold text-emerald">
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
              <div className="flex items-center justify-between font-figtree text-[11px] text-alabaster/60 pt-1">
                <span>RERA Target: On Schedule</span>
                <span>TG RERA: P02200002810</span>
              </div>
            </div>

            {/* Milestones Checklist with Individual Bars */}
            <div className="space-y-3 font-figtree">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${m.done ? 'text-emerald' : 'text-caramel'}`} />
                      <span className="text-alabaster/90 font-medium">{m.label}</span>
                    </div>
                    <span className={`text-xs font-bold ${m.done ? 'text-emerald' : 'text-caramel'}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal('progress_site_visit', 'Book a Physical Progress Tour')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-caramel hover:bg-caramel-light text-white font-figtree font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Book a Physical Progress Tour</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Walkthrough Video Player */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[320px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <video
                controls
                playsInline
                poster="/images/Side view.webp"
                className="w-full h-full object-cover"
              >
                <source src="/videos/construction-progress.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-figtree text-alabaster/70">
              <span>On-Site Raw Footage & Structural Progress</span>
              <span className="text-emerald font-semibold">Live Site Status</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip: 3-Column Video Perspectives */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="font-figtree text-xs font-bold uppercase tracking-widest text-caramel">
              Expert Perspectives
            </span>
            <h3 className="font-gumani text-2xl sm:text-3xl font-bold text-white">
              Watch & Understand the Project Vision
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSPECTIVES.map((p) => (
              <div
                key={p.title}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col group transition-all hover:border-caramel/40"
              >
                <div
                  onClick={() => onOpenVideoModal(p.video)}
                  className="relative h-48 w-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-caramel/90 group-hover:bg-caramel text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-gumani text-lg font-bold text-white">
                    {p.title}
                  </h4>
                  <p className="font-figtree text-xs text-alabaster/70 font-normal leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
