'use client';

import React, { useState, useEffect } from 'react';
import { Phone, CalendarCheck, MessageSquare } from 'lucide-react';
import { PROJECT_INFO } from '@/data/content';

interface StickyMobileBarProps {
  onOpenModal: (source: string) => void;
}

export default function StickyMobileBar({ onOpenModal }: StickyMobileBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-sienna-dark/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 md:hidden flex items-center justify-between gap-2 animate-fade-in shadow-2xl">
      <a
        href={`tel:${PROJECT_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-caramel" />
        <span>Call</span>
      </a>

      <button
        onClick={() => onOpenModal('mobile_sticky_dock')}
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
      >
        <CalendarCheck className="w-3.5 h-3.5" />
        <span>Book Visit</span>
      </button>

      <a
        href={PROJECT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald hover:bg-emerald/90 text-white font-bold text-xs uppercase tracking-wider transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
