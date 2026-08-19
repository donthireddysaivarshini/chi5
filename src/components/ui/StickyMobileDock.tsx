'use client';

import React, { useState, useEffect } from 'react';

interface StickyMobileDockProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function StickyMobileDock({ onOpenLeadModal }: StickyMobileDockProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="mobile-sticky-dock"
      id="mobileStickyDock"
      style={{ display: isScrolled ? 'block' : 'none' }}
    >
      <div className="mobile-dock-grid">
        <button
          className="dock-btn font-figtree font-medium"
          onClick={() => onOpenLeadModal('mobile_dock_visit', 'Book a Private Site Visit')}
        >
          <i className="fa-solid fa-calendar-check text-caramel"></i>
          <span>Book Visit</span>
        </button>
        <a
          href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20breakdown."
          className="dock-btn font-figtree font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
          <span>WhatsApp</span>
        </a>
        <a href="tel:8008008946" className="dock-btn dock-btn-accent font-figtree font-medium">
          <i className="fa-solid fa-phone"></i>
          <span>Call Agent</span>
        </a>
      </div>
    </div>
  );
}
