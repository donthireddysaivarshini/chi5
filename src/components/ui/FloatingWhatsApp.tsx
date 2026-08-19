'use client';

import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center"
      aria-label="Direct WhatsApp Chat"
    >
      <a
        href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Soft Animated Wave Pulse */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-35"></span>

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-8 h-8 relative z-10 drop-shadow-sm" />

        {/* Tooltip on Hover */}
        <span className="absolute right-16 px-3 py-1.5 bg-[#28120C] text-[#F5F3E6] text-xs font-sans font-semibold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/15">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
