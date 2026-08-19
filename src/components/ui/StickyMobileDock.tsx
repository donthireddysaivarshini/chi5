'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyMobileDockProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function StickyMobileDock({ onOpenLeadModal }: StickyMobileDockProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
          <div className="h-12 bg-sienna-dark/95 backdrop-blur-md border border-white/20 rounded-full px-4 shadow-2xl flex items-center justify-between font-figtree">
            {/* Left Tag */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-gumani font-bold text-white text-sm">₹55 Lakhs*</span>
              <span className="text-white/40">|</span>
              <span className="text-caramel font-semibold">ORR Exit 5</span>
            </div>

            {/* Right Single CTA Button */}
            <button
              onClick={() => onOpenLeadModal('mobile_pill_cta', 'Book a Private Site Tour')}
              className="bg-caramel hover:bg-caramel-light text-white font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-full shadow-md transition-all active:scale-95"
            >
              Book Site Visit
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
