'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function Header({ onOpenLeadModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-alabaster/95 backdrop-blur-md shadow-kura py-3 border-b border-borderTone/50'
            : 'bg-gradient-to-b from-sienna-dark/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Lockup */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src="/logos/kura homes logo.png"
              alt="Kura Homes (55 Years of Trust)"
              width={100}
              height={32}
              className={`h-8 w-auto object-contain transition-all ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
            <div className={`h-6 w-[1px] ${isScrolled ? 'bg-borderTone' : 'bg-white/30'}`}></div>
            <Image
              src="/logos/hi-five logo 2.png"
              alt="Codename Hi-Five"
              width={110}
              height={34}
              className={`h-8 md:h-9 w-auto object-contain transition-all ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Overview', href: '#overview' },
              { label: 'Homes & Pricing', href: '#pricing' },
              { label: 'Calculators', href: '#calculators' },
              { label: 'Lifestyle', href: '#amenities' },
              { label: 'Location', href: '#location' },
              { label: 'Progress', href: '#progress' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-[#CE793A] ${
                  isScrolled ? 'text-[#3A1C11]' : 'text-[#F5F3E6]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Hub */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:8008008946"
              className={`flex items-center gap-2 font-sans text-sm font-semibold transition-colors ${
                isScrolled ? 'text-[#3A1C11] hover:text-[#CE793A]' : 'text-[#F5F3E6] hover:text-[#E59253]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#CE793A]" />
              <span>800 800 8946</span>
            </a>
            <button
              onClick={() => onOpenLeadModal('header_cta', 'Book a Visit')}
              className="bg-[#CE793A] hover:bg-[#E59253] text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              Book a Visit
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#3A1C11]' : 'text-[#F5F3E6]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#28120C] text-[#F5F3E6] pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden"
          >
            <nav className="flex flex-col gap-5">
              {[
                { label: 'Overview', href: '#overview' },
                { label: 'Homes & Pricing', href: '#pricing' },
                { label: 'Financial Studio', href: '#calculators' },
                { label: 'Clubhouse & Lifestyle', href: '#amenities' },
                { label: 'Location & Transit', href: '#location' },
                { label: 'Construction Progress', href: '#progress' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold text-[#F5F3E6] hover:text-[#CE793A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href="tel:8008008946"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl font-sans font-bold text-sm text-[#F5F3E6]"
              >
                <Phone className="w-4 h-4 text-[#CE793A]" />
                <span>Call Sales: 800 800 8946</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('mobile_drawer_cta', 'Book a Visit');
                }}
                className="w-full py-3.5 bg-[#CE793A] hover:bg-[#E59253] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg"
              >
                Book a Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
