'use client';

import React from 'react';
import Image from 'next/image';

interface PerspectivesSectionProps {
  onOpenVideoModal: (videoSrc: string) => void;
}

export default function PerspectivesSection({ onOpenVideoModal }: PerspectivesSectionProps) {
  return (
    <section className="section perspectives-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Watch & Decide</span>
          <h2 className="font-gumani font-bold text-sienna">Explore Core Project Perspectives</h2>
          <p className="font-figtree font-normal text-noir/70" style={{ margin: '0 auto' }}>
            Hear about location dynamics, architectural layouts, and corridor financial strategies.
          </p>
        </div>

        <div className="perspectives-grid">
          {/* Card 1 */}
          <div className="perspective-card">
            <div
              className="perspective-video-cover play-video-trigger"
              onClick={() => onOpenVideoModal('/videos/why-this-location.mp4')}
            >
              <Image src="/images/Street view.webp" alt="Location perspective video thumbnail" width={380} height={220} className="object-cover" />
              <span className="play-badge-icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </div>
            <div className="perspective-info">
              <h3 className="font-gumani font-bold text-sienna text-xl">Why ORR Exit-5 Corridor?</h3>
              <p className="font-figtree font-normal text-noir/70 text-sm leading-relaxed">
                An in-depth look at proximity metrics to international schools, pharmaceutical parks, and the ORR loop
                transit advantage.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="perspective-card">
            <div
              className="perspective-video-cover play-video-trigger"
              onClick={() => onOpenVideoModal('/videos/investment.mp4')}
            >
              <Image src="/images/community view.webp" alt="Investment growth perspective video thumbnail" width={380} height={220} className="object-cover" />
              <span className="play-badge-icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </div>
            <div className="perspective-info">
              <h3 className="font-gumani font-bold text-sienna text-xl">Investment Appreciation Value</h3>
              <p className="font-figtree font-normal text-noir/70 text-sm leading-relaxed">
                Comparing entry pricing of ORR 5 at ₹4,999/sq.ft with older corridors of ORR 3 (₹9K-10K/sq.ft) and
                historical growth curves.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="perspective-card">
            <div
              className="perspective-video-cover play-video-trigger"
              onClick={() => onOpenVideoModal('/videos/Design.mp4')}
            >
              <Image src="/images/Living room.webp" alt="Vaastu and design perspective video thumbnail" width={380} height={220} className="object-cover" />
              <span className="play-badge-icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </div>
            <div className="perspective-info">
              <h3 className="font-gumani font-bold text-sienna text-xl">Vaastu & Spaces Philosophy</h3>
              <p className="font-figtree font-normal text-noir/70 text-sm leading-relaxed">
                Our chief architect explains the Vaastu-compliant flow, cross-ventilated bedroom placements, and
                zero-corridor design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
