'use client';

import React from 'react';
import Image from 'next/image';

export default function DeveloperHeritageSection() {
  return (
    <section className="section developer-heritage">
      <div className="container">
        <div className="heritage-container">
          <Image
            src="/logos/kura homes logo.png"
            alt="Kura Homes Brand Logo"
            width={140}
            height={50}
            className="heritage-logo brightness-0 invert"
          />
          <h2 className="font-gumani font-bold text-white text-3xl sm:text-4xl">55 Years of Crafted Trust</h2>
          <p className="font-figtree font-normal text-alabaster/80 max-w-3xl mx-auto leading-relaxed">
            Kura Homes has been an integral part of Hyderabad&apos;s housing development journey. Grounded in transparency,
            structural superiority, and timely handovers, we deliver communities that stand as long-term wealth
            generators for our families.
          </p>

          <div className="heritage-stats">
            <div className="heritage-stat-card">
              <span className="num font-gumani font-bold text-caramel">55+</span>
              <span className="lbl font-figtree font-medium text-alabaster/80">Years Legacy</span>
            </div>
            <div className="heritage-stat-card">
              <span className="num font-gumani font-bold text-caramel">500+</span>
              <span className="lbl font-figtree font-medium text-alabaster/80">Families at Hi-Five</span>
            </div>
            <div className="heritage-stat-card">
              <span className="num font-gumani font-bold text-caramel">5.3</span>
              <span className="lbl font-figtree font-medium text-alabaster/80">Acres Gated Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
