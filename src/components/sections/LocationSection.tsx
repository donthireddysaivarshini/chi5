'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ExternalLink, GraduationCap, Briefcase, HeartPulse, Train } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

const COMMUTE_DATA = {
  schools: [
    { name: 'IARE Engineering College', time: '2 Min' },
    { name: 'Ryan International School', time: '2 Min' },
    { name: 'Sriveda Global School', time: '2 Min' },
    { name: 'Laurus The Universal School', time: '5 Min' },
    { name: 'Oakridge International School', time: '8 Min' },
    { name: 'Delhi Public School (DPS)', time: '11 Min' },
  ],
  tech: [
    { name: 'Tech Mahindra Campus', time: '10 Min' },
    { name: 'Aurobindo Pharma Hub', time: '10 Min' },
    { name: 'Jeedimetla Industrial Area', time: '10 Min' },
    { name: 'Medical Devices Cluster Park', time: '15 Min' },
    { name: 'Kandlakoya IT Gateway Park', time: '18 Min' },
  ],
  health: [
    { name: 'Subhakara Multispeciality Hospital', time: '10 Min' },
    { name: 'Malla Reddy Narayana Hospital', time: '15 Min' },
    { name: 'Usha Mullapudi Cardiac Centre', time: '20 Min' },
    { name: 'SLG Hospital (Bachupally)', time: '25 Min' },
  ],
  transit: [
    { name: 'ORR Exit 5 (Gandimaisamma)', time: '1 Min' },
    { name: 'Bachupally Commercial Hub', time: '10 Min' },
    { name: 'Kukatpally & JNTU Metro', time: '30 Min' },
    { name: 'Financial District (Signal-free ORR)', time: '35 Min' },
    { name: 'HITEC City & Cyber Towers', time: '35 Min' },
  ],
};

export default function LocationSection({ onOpenLeadModal }: LocationSectionProps) {
  const [activeTab, setActiveTab] = useState<'schools' | 'tech' | 'health' | 'transit'>('schools');
  const [mapInteractive, setMapInteractive] = useState(false);

  return (
    <motion.section
      id="location"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-alabaster text-noir"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-caramel">
            Strategic Connectivity Hub
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1C11] tracking-tight leading-[1.15]">
            1 Min from <span className="italic text-[#CE793A] font-normal">ORR Exit No. 5.</span>
          </h2>
          <p className="font-figtree text-sm sm:text-base text-noir/70 font-normal">
            Prime connectivity along the Dundigal-Bowrampet growth corridor with signal-free transit to Financial District and HITEC City.
          </p>
        </div>

        {/* 50/50 Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Map Container with Click-to-Interact */}
          <div
            className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 shadow-kura border border-borderTone flex flex-col justify-between"
            onClick={() => setMapInteractive(true)}
          >
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-borderTone">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.393652044088!2d78.398838!3d17.5840323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f09e0058659%3A0xeec976a256a5b678!2sSpeed%20Sanarelli%20-%20Apartment%20of%20Contentment!5e0!3m2!1sen!2sin!4v1787132923208!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Speed Sanarelli Location Map"
                className={`w-full h-full transition-opacity ${
                  mapInteractive ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              />
              {!mapInteractive && (
                <div className="absolute inset-0 bg-black/5 flex items-end justify-center pb-4 cursor-pointer">
                  <span className="px-4 py-1.5 rounded-full bg-sienna/90 text-white font-figtree font-semibold text-xs shadow-md backdrop-blur-sm">
                    Click to Interact with Map
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-2 font-figtree">
              <div className="flex items-center gap-2 text-xs text-noir/70">
                <MapPin className="w-4 h-4 text-caramel shrink-0" />
                <span>Adjacent to ORR Exit 5, Bowrampet Road, Dundigal</span>
              </div>
              <a
                href="https://maps.app.goo.gl/XWMJEZtLnFB2UPcGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-caramel hover:text-caramel-dark transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Commute Times Tabbed Matrix */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-borderTone flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-figtree text-xs font-bold uppercase tracking-widest text-caramel mb-4">
                <Navigation className="w-4 h-4" />
                <span>Travel Time Matrix</span>
              </div>

              {/* Category Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: 'schools', label: 'Education', icon: GraduationCap },
                  { id: 'tech', label: 'IT & Pharma', icon: Briefcase },
                  { id: 'health', label: 'Hospitals', icon: HeartPulse },
                  { id: 'transit', label: 'Transit', icon: Train },
                ].map((t) => {
                  const Icon = t.icon;
                  const active = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as typeof activeTab)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-figtree font-bold text-xs uppercase tracking-wider transition-all ${
                        active
                          ? 'bg-caramel text-white shadow-md'
                          : 'bg-chocolate/60 text-noir/70 hover:bg-chocolate hover:text-noir'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Items List */}
              <div className="space-y-3 divide-y divide-borderTone/60">
                {COMMUTE_DATA[activeTab].map((item) => (
                  <div
                    key={item.name}
                    className="pt-3 first:pt-0 flex items-center justify-between gap-4 font-figtree"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-sienna">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-chocolate text-sienna font-bold text-xs shrink-0">
                      <Clock className="w-3.5 h-3.5 text-caramel" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-borderTone">
              <button
                onClick={() => onOpenLeadModal('location_guide_pdf', 'Download Master Location & Commute Guide')}
                className="w-full py-3.5 bg-caramel hover:bg-caramel-light text-white font-figtree font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all"
              >
                Download Master Location & Commute Guide (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
