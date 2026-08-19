'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logos">
              <Image src="/logos/kura homes logo.png" alt="Kura Homes Logo" width={110} height={36} />
              <Image src="/logos/hi-five logo 2.png" alt="Hi-Five Logo" width={120} height={34} />
            </div>
            <p className="font-figtree font-normal text-alabaster/80 leading-relaxed">
              Codename Hi-Five is a premium gated residential development by Kura Homes, bringing 55 years of trust,
              structural excellence, and design legacy to the high-growth ORR Exit 5 corridor, Hyderabad.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="font-gumani font-bold text-alabaster text-lg">Navigation</h4>
            <ul className="font-figtree font-medium">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#pricing">Homes & Pricing</a></li>
              <li><a href="#calculators">Affordability</a></li>
              <li><a href="#location">Location Hub</a></li>
              <li><a href="#amenities">Lifestyle Amenities</a></li>
              <li><a href="#progress">Progress</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="font-gumani font-bold text-alabaster text-lg">Location Details</h4>
            <p className="font-figtree font-normal text-alabaster/80">
              <i className="fa-solid fa-map-location text-accent" style={{ marginRight: '8px' }}></i> Adjacent to ORR Exit No. 5,
              Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043
            </p>
            <div className="footer-legal-badges font-figtree">
              <a href="https://tsrera.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-caramel hover:underline">
                <i className="fa-solid fa-shield-check"></i> TG RERA Reg: P02200002810
              </a>
              <p style={{ margin: 0 }} className="text-alabaster/70">
                <i className="fa-solid fa-file-invoice" style={{ marginRight: '8px' }}></i> HMDA Approval: G1/DM/2237/BP/2021
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom font-figtree">
          <p className="footer-disclaimer font-normal text-alabaster/60 text-xs leading-relaxed">
            Important Disclaimer: Calculated figures (EMI, tax savings, rentals), layout graphics, and location proximity
            drive-times shown on this page are indicative models only and do not represent a financial contract, investment
            advice, or guaranteed yield curves. Home loans are subject to approval policies of underwriting banks. Tax benefits
            depend on the individual&apos;s choice of old tax regime options and CA advice. All construction timelines are
            referenced under TG RERA filings P02200002810.
          </p>
          <p className="footer-copy font-normal text-alabaster/70 text-xs">
            © 2026 Kura Homes. All rights reserved. Developed by Antigravity under client approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
