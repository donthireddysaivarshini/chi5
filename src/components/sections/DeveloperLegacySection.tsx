'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Users, CheckCircle, Clock } from 'lucide-react';
import { PERSPECTIVES } from '@/data/content';

export default function DeveloperLegacySection() {
  const stats = [
    { num: '55+', label: 'Years of Developer Legacy', icon: Clock },
    { num: '500+', label: 'Families Delivered Homes', icon: Users },
    { num: '100%', label: 'Clear Title & RERA Compliance', icon: CheckCircle },
    { num: '5.3', label: 'Acres of Gated Community', icon: Award },
  ];

  return (
    <section className="py-20 sm:py-28 bg-sienna text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="relative h-10 w-32 mx-auto mb-4">
            <Image
              src="/logos/kura homes logo.png"
              alt="Kura Homes Developer"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            55 Years of Crafted Trust
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-alabaster leading-tight">
            Building Landmarks for <span className="italic text-caramel font-normal">Generations.</span>
          </h2>
          <p className="text-sm sm:text-base text-alabaster/80 font-light">
            Founded on foundational principles of uncompromised structural quality, transparency, and lifelong customer relationships across Hyderabad.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-6 bg-sienna-dark rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center shadow-lg"
              >
                <Icon className="w-5 h-5 text-caramel mb-2" />
                <span className="font-gumani text-3xl sm:text-4xl font-bold text-white mb-1">
                  {s.num}
                </span>
                <span className="text-xs text-alabaster/70 font-medium">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* Video Perspectives */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-caramel">
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
                className="bg-sienna-dark rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col"
              >
                <div className="relative h-48 w-full bg-black">
                  <video
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={p.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="font-gumani text-base font-bold text-alabaster mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-alabaster/70 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
