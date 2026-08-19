'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function Header({ onOpenLeadModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
        <div className="container header-container">
          <a href="#hero" className="header-logos">
            <Image
              src="/logos/kura homes logo.png"
              alt="Kura Homes Logo"
              width={110}
              height={36}
              className="dev-logo"
              priority
            />
            <div className="divider"></div>
            <Image
              src="/logos/hi-five logo 2.png"
              alt="Codename Hi-Five Logo"
              width={130}
              height={40}
              className="proj-logo"
              priority
            />
          </a>

          <nav className="nav-links">
            <a href="#hero" className="nav-link active font-figtree font-medium">Overview</a>
            <a href="#pricing" className="nav-link font-figtree font-medium">Homes</a>
            <a href="#amenities" className="nav-link font-figtree font-medium">Lifestyle</a>
            <a href="#location" className="nav-link font-figtree font-medium">Location</a>
            <a href="#progress" className="nav-link font-figtree font-medium">Progress</a>
            <a href="#contact" className="nav-link font-figtree font-medium">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:8008008946" className="header-phone font-figtree font-semibold">
              <i className="fa-solid fa-phone text-caramel"></i>
              <span>800 800 8946</span>
            </a>
            <button
              className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
              onClick={() => onOpenLeadModal('header_cta', 'Book a Private Site Visit')}
            >
              Book Site Visit
            </button>
          </div>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            id="hamburgerBtn"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <nav className="mobile-menu-links">
          <a href="#hero" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Overview</a>
          <a href="#pricing" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Homes & Pricing</a>
          <a href="#amenities" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Lifestyle</a>
          <a href="#location" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Location</a>
          <a href="#progress" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Progress</a>
          <a href="#contact" className="mobile-nav-link font-gumani font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </nav>
        <div className="mobile-menu-actions">
          <a href="tel:8008008946" className="btn btn-secondary font-figtree font-bold">
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Call Sales Agent
          </a>
          <button
            className="btn btn-primary font-figtree font-bold"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLeadModal('mobile_menu_cta', 'Schedule a Site Tour');
            }}
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </>
  );
}
