'use client';

import React from 'react';
import Image from 'next/image';

interface PricingSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function PricingSection({ onOpenLeadModal }: PricingSectionProps) {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Configurations</span>
          <h2 className="font-gumani font-bold text-sienna">Explore Available Layouts & Sizes</h2>
          <p className="font-figtree font-normal text-noir/70" style={{ margin: '0 auto' }}>
            Select from space-optimized 2 BHK configurations or expansive double-height Duplex suites.
          </p>
        </div>

        <div className="pricing-grid">
          {/* 2 BHK Card */}
          <div className="pricing-card">
            <span className="card-badge font-figtree font-bold">Smart Luxe</span>
            <h3 className="font-gumani font-bold text-sienna text-2xl">Premium 2 BHK Homes</h3>
            <span className="price-main font-gumani font-bold text-caramel">₹55 Lakhs*</span>
            <span className="price-sub font-figtree font-normal text-noir/60">Starting price at ₹4,999/sq.ft onwards</span>
            <ul className="pricing-specs font-figtree font-normal text-noir/80">
              <li><i className="fa-solid fa-circle-check text-emerald"></i> 1,100 to 1,285 Sq.Ft configurations</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> 100% Vaastu Compliant Layouts</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> East & West facing entrance choices</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Cross-ventilated living space with grand balconies</li>
            </ul>

            {/* Gated Floor Plan Preview */}
            <div
              className="floorplan-vault"
              onClick={() => onOpenLeadModal('floorplan_2bhk', 'Unlock 2 BHK Blueprints & CAD Plans')}
            >
              <Image
                src="/images/bedroom 1.webp"
                alt="Blurred Floor Plan blueprint"
                width={400}
                height={200}
                className="floorplan-blur object-cover"
              />
              <div className="vault-overlay font-figtree font-bold">
                <i className="fa-solid fa-lock text-caramel"></i>
                <span>Unlock 2 BHK Blueprints</span>
              </div>
            </div>
          </div>

          {/* Duplex Card */}
          <div className="pricing-card">
            <span className="card-badge font-figtree font-bold">Luxury Penthouse</span>
            <h3 className="font-gumani font-bold text-sienna text-2xl">Bespoke Duplex Suites</h3>
            <span className="price-main font-gumani font-bold text-caramel">₹95 Lakhs*</span>
            <span className="price-sub font-figtree font-normal text-noir/60">Starting price at ₹4,999/sq.ft onwards</span>
            <ul className="pricing-specs font-figtree font-normal text-noir/80">
              <li><i className="fa-solid fa-circle-check text-emerald"></i> 1,850 to 2,200 Sq.Ft duplex layouts</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Double-height ceiling architectural living</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Private terrace deck with green forest views</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Master bedroom penthouse suites on upper level</li>
            </ul>

            {/* Gated Floor Plan Preview */}
            <div
              className="floorplan-vault"
              onClick={() => onOpenLeadModal('floorplan_duplex', 'Unlock Duplex Penthouse Blueprints')}
            >
              <Image
                src="/images/Master bedroom.webp"
                alt="Blurred Floor Plan blueprint"
                width={400}
                height={200}
                className="floorplan-blur object-cover"
              />
              <div className="vault-overlay font-figtree font-bold">
                <i className="fa-solid fa-lock text-caramel"></i>
                <span>Unlock Duplex Blueprints</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-action-bottom">
          <button
            className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
            onClick={() => onOpenLeadModal('pricing_summary_cta', 'Get Detailed Pricing & Availability')}
          >
            Get Detailed Pricing & Availability
          </button>
        </div>
      </div>
    </section>
  );
}
