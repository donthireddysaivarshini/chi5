'use client';

import React from 'react';
import Image from 'next/image';

interface OverviewSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function OverviewSection({ onOpenLeadModal }: OverviewSectionProps) {
  return (
    <section className="section section-dark about-section" id="overview">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-header">
              <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">The Vision</span>
              <h2 className="font-gumani font-bold text-alabaster">
                Where Gated Luxury Meets <span className="text-caramel font-normal italic">Untouched Nature</span>
              </h2>
            </div>
            <p className="font-figtree font-normal text-alabaster/80 leading-relaxed">
              Codename Hi-Five by Kura Homes is a benchmark residential community crafted with 55 years of developer
              legacy. Located directly adjacent to the tranquil Bowrampet reserve forests, this gated address offers a
              unique microclimate that stays cooler year-round, while placing you just minutes from Hyderabad&apos;s premier
              IT and educational hubs.
            </p>

            <div className="about-mini-stats">
              <div className="mini-stat-card">
                <span className="num font-gumani font-bold text-caramel">500+</span>
                <span className="desc font-figtree font-medium text-alabaster/70">Homes Booked Already</span>
              </div>
              <div className="mini-stat-card">
                <span className="num font-gumani font-bold text-caramel">40+</span>
                <span className="desc font-figtree font-medium text-alabaster/70">Lifestyle Amenities</span>
              </div>
            </div>

            <button
              className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
              onClick={() => onOpenLeadModal('about_visit_cta', 'Schedule a Private Site Visit')}
            >
              <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Schedule a Private Visit
            </button>
          </div>
          <div className="about-visual">
            <Image
              src="/images/community view.webp"
              alt="Codename Hi-Five Community Overhead View"
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
