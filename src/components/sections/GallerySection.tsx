'use client';

import React from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  onOpenImageModal: (imgSrc: string) => void;
}

export default function GallerySection({ onOpenImageModal }: GallerySectionProps) {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Exteriors & Interiors</span>
          <h2 className="font-gumani font-bold text-sienna">Crafted Architecture, Captured Live</h2>
          <p className="font-figtree font-normal text-noir/70" style={{ margin: '0 auto' }}>
            Click or tap to view full high-resolution imagery.
          </p>
        </div>

        {/* Carousel 1: Exteriors */}
        <h3 className="gallery-sub-header font-gumani font-bold text-sienna text-xl">Gated Township & Architecture</h3>
        <div className="gallery-carousel">
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Front view.webp')}>
            <Image src="/images/Front view.webp" alt="Gated community front entrance facade" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Grand Gated Entrance & Security Hub</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Side view.webp')}>
            <Image src="/images/Side view.webp" alt="Building elevation from side path" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Modern Tower Elevation & Linear Rhythms</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Street view.webp')}>
            <Image src="/images/Street view.webp" alt="Street pathway with architectural landscaping" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Landscaped Driveways & Pedestrian Paths</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/community view.webp')}>
            <Image src="/images/community view.webp" alt="Overhead architectural community layout" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">5.3 Acre Masterplanned Gated Community</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/water body.webp')}>
            <Image src="/images/water body.webp" alt="Water body plaza feature render" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Central Water Body & Zen Plaza</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Night Aerial.webp')}>
            <Image src="/images/Night Aerial.webp" alt="Aerial view of community at night" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Illuminated Night Aerial Overview</div>
          </div>
        </div>

        {/* Carousel 2: Interiors */}
        <h3 className="gallery-sub-header font-gumani font-bold text-sienna text-xl">Model Flat Interiors</h3>
        <div className="gallery-carousel">
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Living room.webp')}>
            <Image src="/images/Living room.webp" alt="Spacious interior living room decoration" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Elegant Formal Living Lounge</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Dining area.webp')}>
            <Image src="/images/Dining area.webp" alt="Dining room table layout model flat" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Open-Plan Dining & Entertaining Zone</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Kitchen.webp')}>
            <Image src="/images/Kitchen.webp" alt="Modern modular kitchen setup" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Modular Kitchen with Premium Fittings</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Master bedroom.webp')}>
            <Image src="/images/Master bedroom.webp" alt="Master bedroom with sliding closet doors" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Master Bedroom Penthouse Suite</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/Bedroom detail.webp')}>
            <Image src="/images/Bedroom detail.webp" alt="Bedroom detail shot closet and desk" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Bespoke Fitting & Storage Details</div>
          </div>
          <div className="gallery-card lightbox-trigger" onClick={() => onOpenImageModal('/images/bedroom 1.webp')}>
            <Image src="/images/bedroom 1.webp" alt="Secondary guest bedroom setup" width={380} height={260} className="object-cover" />
            <div className="caption font-figtree font-semibold">Smart 2nd Bedroom Plan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
