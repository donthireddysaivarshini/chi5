'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PROJECT_INFO } from '@/data/content';

export default function FloatingWhatsApp() {
  return (
    <a
      href={PROJECT_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-3 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 group"
    >
      <MessageCircle className="w-5 h-5 fill-white text-whatsapp" />
      <span className="text-xs font-bold uppercase tracking-wider">Chat with Advisor</span>
    </a>
  );
}
