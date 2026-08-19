'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, FileText, MapPin, Phone, MessageSquare } from 'lucide-react';
import HiFiveBrandLockup from '@/components/ui/HiFiveBrandLockup';
import { PROJECT_INFO } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-sienna-dark text-alabaster pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-24">
                <Image
                  src="/logos/kura homes logo.png"
                  alt="Kura Homes"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-white/40">|</span>
              <HiFiveBrandLockup variant="footer" />
            </div>
            <p className="text-xs sm:text-sm text-alabaster/70 leading-relaxed max-w-sm">
              Codename Hi-Five is a benchmark residential community crafted with 55 years of developer legacy, located adjacent to ORR Exit 5, Bowrampet, Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${PROJECT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-alabaster hover:border-caramel hover:text-caramel transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-caramel" />
                <span>{PROJECT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={PROJECT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald hover:bg-emerald/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-gumani text-base font-bold text-alabaster tracking-wide">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-alabaster/70">
              <li><a href="#overview" className="hover:text-caramel transition-colors">Overview & Concept</a></li>
              <li><a href="#pricing" className="hover:text-caramel transition-colors">Unit Configurations & Pricing</a></li>
              <li><a href="#floorplans" className="hover:text-caramel transition-colors">Floor Plan Blueprints</a></li>
              <li><a href="#amenities" className="hover:text-caramel transition-colors">Clubhouse & Amenities</a></li>
              <li><a href="#location" className="hover:text-caramel transition-colors">Location & Connectivity Matrix</a></li>
              <li><a href="#calculator" className="hover:text-caramel transition-colors">EMI & Tax Savings Studio</a></li>
            </ul>
          </div>

          {/* Col 3: Compliance & RERA */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-gumani text-base font-bold text-alabaster tracking-wide">Approvals & Location</h4>
            <div className="space-y-2 text-xs text-alabaster/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                <span>{PROJECT_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2 text-emerald">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>TG RERA Registration: <strong>{PROJECT_INFO.reraNumber}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-caramel shrink-0" />
                <span>HMDA Approval: <strong>{PROJECT_INFO.hmdaNumber}</strong></span>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-3 text-[11px] text-alabaster/50 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> The visual representations, layouts, specifications, images, and prices mentioned on this website are indicative and subject to change per regulatory guidelines. All calculations (EMI, tax savings) are illustrative financial estimates. Official approvals are documented under TG RERA No. {PROJECT_INFO.reraNumber}.
          </p>
          <p>© {new Date().getFullYear()} Kura Homes. All Rights Reserved. Codename Hi-Five, Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
