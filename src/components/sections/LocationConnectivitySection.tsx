'use client';

import React from 'react';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';
import { DISTANCE_MATRIX, PROJECT_INFO } from '@/data/content';

interface LocationConnectivitySectionProps {
  onOpenModal: (source: string) => void;
}

export default function LocationConnectivitySection({ onOpenModal }: LocationConnectivitySectionProps) {
  return (
    <section id="location" className="py-20 sm:py-28 bg-alabaster text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            Strategic Growth Corridor
          </span>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-sienna leading-tight">
            1 Min from <span className="italic text-caramel font-normal">ORR Exit No. 5.</span>
          </h2>
          <p className="text-sm sm:text-base text-noir/70 font-light">
            Prime connectivity along the Dundigal-Bowrampet growth corridor with direct signal-free access to Hyderabad’s tech and financial nerve centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Google Map Embed */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-6 shadow-kura border border-chocolate-dark">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-chocolate">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.9664539121703!2d78.3846663!3d17.5562725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f3cf2559e4b%3A0xe54e3d360ef3a7a!2sKURA%20HOMES!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Codename Hi-Five Location Map"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-2">
              <div className="flex items-center gap-2 text-xs text-noir/70">
                <MapPin className="w-4 h-4 text-caramel shrink-0" />
                <span className="truncate max-w-xs">{PROJECT_INFO.location}</span>
              </div>
              <a
                href={PROJECT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-caramel hover:text-caramel-dark transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Distance Matrix List */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-kura border border-chocolate-dark flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel mb-4">
                <Navigation className="w-4 h-4" />
                <span>Travel Time Matrix</span>
              </div>

              <div className="space-y-3 divide-y divide-chocolate">
                {DISTANCE_MATRIX.map((item) => (
                  <div
                    key={item.destination}
                    className="pt-3 first:pt-0 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-semibold text-sienna">
                        {item.destination}
                      </h4>
                      <span className="text-[11px] text-noir/50">{item.distance}</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-chocolate text-sienna font-bold text-xs shrink-0">
                      <Clock className="w-3.5 h-3.5 text-caramel" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-chocolate">
              <button
                onClick={() => onOpenModal('location_guide_request')}
                className="w-full py-3.5 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all"
              >
                Request Complete Location & Master Plan PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
