'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
  onOpenVideoModal: (videoSrc: string) => void;
}

export default function HeroSection({ onOpenLeadModal, onOpenVideoModal }: HeroSectionProps) {
  return (
    <section className="hero-sec" id="hero">
      <div className="hero-bg">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/Birds level view.webp" />
          <Image
            src="/images/Front view.webp"
            alt="Codename Hi-Five Front View Render"
            fill
            className="object-cover"
            priority
          />
        </picture>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badges-top">
            <span className="hero-badge-item font-figtree font-medium">
              <i className="fa-solid fa-file-signature text-accent" style={{ marginRight: '4px' }}></i> HMDA Approved
            </span>
            <span className="hero-badge-item font-figtree font-medium">
              <i className="fa-solid fa-shield-check text-accent" style={{ marginRight: '4px' }}></i> TG RERA: P02200002810
            </span>
          </div>
          <h1 className="font-gumani font-bold text-white leading-tight">
            Your Home at Hyderabad&apos;s ORR Exit-5
          </h1>
          <p className="font-figtree font-normal text-alabaster/90 leading-relaxed">
            Luxurious 2 BHK & Duplex gated community homes starting from <span className="font-semibold text-white">₹55 Lakhs</span>. Experience premium living with 70%
            open spaces, adjacent to Bowrampet reserve forests.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
              onClick={() => onOpenLeadModal('hero_main_cta', 'Book a Private Site Tour')}
            >
              Book a Private Site Tour
            </button>
            <button
              className="btn-play-tour font-figtree font-medium"
              id="heroPlayBtn"
              aria-label="Watch Project Tour video"
              onClick={() => onOpenVideoModal('/videos/hero-video.mp4')}
            >
              <span className="play-icon-wrap">
                <i className="fa-solid fa-play"></i>
              </span>
              <span>Watch Project Film</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
