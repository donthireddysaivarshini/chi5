'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center font-sans"
      aria-label="Direct Support Chat"
    >
      <a
        href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider pr-0.5">WhatsApp</span>
      </a>
    </aside>
  );
}
