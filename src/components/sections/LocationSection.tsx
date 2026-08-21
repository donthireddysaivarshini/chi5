'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, GraduationCap, Briefcase, HeartPulse, Train, Send, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  ],
};

export default function LocationSection({ onOpenLeadModal }: LocationSectionProps) {
  const [activeTab, setActiveTab] = useState<'schools' | 'tech' | 'health' | 'transit'>('schools');

  const handleRequestExactLocation = () => {
    onOpenLeadModal('location_map_request', 'Request Exact Location Pin & Site Directions');
  };

  return (
    <section
      id="location"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-alabaster text-obsidian relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze">
            Strategic Connectivity Hub
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
            1 Min from <span className="italic text-bronze font-normal">ORR Exit No. 5.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-mute font-normal">
            Prime connectivity along the Dundigal-Bowrampet growth corridor with signal-free transit to Financial District and Bachupally.
          </p>
        </motion.div>

        {/* 50/50 Split Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left: Approximate Corridor Map Card (Lead Generation Focus) */}
          <div
            className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-5 shadow-kura border border-zinc-border flex flex-col justify-between cursor-pointer group hover:shadow-kura-lg transition-all"
            onClick={handleRequestExactLocation}
          >
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-inner border border-zinc-border">
              {/* Approximate Corridor Google Map embed centered on ORR Exit 5, Bowrampet Area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15215.184852033475!2d78.385000!3d17.580000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f0000000000%3A0x0!2sORR%20Exit%205%2C%20Bowrampet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1787132923208!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ORR Exit 5 Bowrampet Corridor Approximate Area Map"
                className="w-full h-full pointer-events-none group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />

              {/* Lead Generation Overlay on Map */}
              <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/55 transition-colors flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-bronze text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-bronze-light block">
                    Approximate Location Map
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    Adjacent to ORR Exit 5, Bowrampet Road
                  </h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRequestExactLocation();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-wider shadow-2xl backdrop-blur-sm transform group-hover:scale-105 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Exact Location Pin on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 font-sans">
              <div className="flex items-center gap-2 text-xs text-charcoal-mute">
                <ShieldCheck className="w-4 h-4 text-bronze shrink-0" />
                <span>ORR Exit 5 Corridor · Dundigal-Bowrampet Road</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-bronze group-hover:text-bronze-dark transition-colors">
                <span>Get Directions Pin</span>
                <Send className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right: Commute Times Tabbed Matrix */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 shadow-kura border border-zinc-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-bronze mb-3">
                <Navigation className="w-4 h-4" />
                <span>Travel Time Matrix</span>
              </div>

              {/* Category Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
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
                      className={`flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all ${
                        active
                          ? 'bg-bronze text-white shadow-md'
                          : 'bg-slate-100 text-charcoal-mute hover:bg-slate-200 hover:text-obsidian'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Commute List with Smooth Crossfade */}
              <div className="space-y-2 font-sans">
                <AnimatePresence mode="wait">
                  {COMMUTE_DATA[activeTab].map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-zinc-border/60 hover:border-bronze/40 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-obsidian">{item.name}</span>
                      <span className="text-xs font-bold text-bronze px-2.5 py-1 rounded-md bg-bronze/10">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-border flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
              <span className="text-xs text-charcoal-mute text-center sm:text-left">
                Signal-free commute to Financial District via Nehru Outer Ring Road.
              </span>
              <button
                onClick={handleRequestExactLocation}
                className="w-full sm:w-auto px-4 py-2 bg-obsidian text-alabaster hover:bg-bronze font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0"
              >
                Request Location Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
