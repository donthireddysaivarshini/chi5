'use client';

import React, { useState, useEffect } from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

interface StickyMobileDockProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function StickyMobileDock({ onOpenLeadModal }: StickyMobileDockProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-3 left-3 right-3 z-40 md:hidden"
        >
          <div className="bg-obsidian/95 backdrop-blur-lg border border-white/20 rounded-2xl p-1.5 shadow-2xl grid grid-cols-3 gap-1.5 font-sans">
            {/* 1. Contact Us (Call) */}
            <a
              href="tel:8008008946"
              className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 hover:bg-white/20 text-alabaster transition-all active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-bronze mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Contact Us</span>
            </a>

            {/* 2. WhatsApp */}
            <a
              href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 text-alabaster transition-all active:scale-95 text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#25D366]">WhatsApp</span>
            </a>

            {/* 3. Book Visit (Opens Form Modal) */}
            <button
              onClick={() => onOpenLeadModal('mobile_bottom_dock', 'Book a Visit')}
              className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-bronze hover:bg-bronze-hover text-white transition-all active:scale-95 shadow-md text-center"
            >
              <CalendarCheck className="w-4 h-4 text-white mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Book Visit</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
