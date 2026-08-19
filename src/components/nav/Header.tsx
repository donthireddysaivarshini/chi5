'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import HiFiveBrandLockup from '@/components/ui/HiFiveBrandLockup';
import { PROJECT_INFO } from '@/data/content';

interface HeaderProps {
  onOpenModal: (source: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Homes & Pricing', href: '#pricing' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'Lifestyle', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Progress', href: '#progress' },
    { label: 'Cost Studio', href: '#calculator' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-alabaster/95 backdrop-blur-md shadow-md border-b border-chocolate-dark'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Identity Lockup */}
          <a href="#hero" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative h-8 sm:h-9 w-24 sm:w-28">
              <Image
                src="/logos/kura homes logo.png"
                alt="Kura Homes"
                fill
                className={`object-contain transition-all duration-200 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
                priority
              />
            </div>
            <span className={`text-base font-light transition-colors duration-200 ${
              isScrolled ? 'text-sienna/40' : 'text-white/40'
            }`}>
              |
            </span>
            <HiFiveBrandLockup variant="header" isScrolled={isScrolled} />
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-caramel ${
                  isScrolled ? 'text-sienna/80' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${PROJECT_INFO.phone}`}
              className={`flex items-center gap-2 text-xs font-bold tracking-wider transition-colors ${
                isScrolled ? 'text-sienna' : 'text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-caramel" />
              <span>{PROJECT_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenModal('header_cta')}
              className="py-2.5 px-4 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-caramel-glow transition-all"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-sienna' : 'text-white'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-sienna-dark text-alabaster pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-gumani text-2xl font-bold hover:text-caramel transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${PROJECT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-caramel" />
              <span>Call: {PROJECT_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('mobile_drawer_cta');
              }}
              className="w-full py-3 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg"
            >
              Book a Site Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
