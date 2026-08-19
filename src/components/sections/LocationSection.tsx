'use client';

import React, { useState } from 'react';

interface LocationSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function LocationSection({ onOpenLeadModal }: LocationSectionProps) {
  const [activeLocTab, setActiveLocTab] = useState<'schools' | 'tech' | 'health' | 'transit'>('schools');

  return (
    <section className="section location-section" id="location">
      <div className="container">
        <div className="section-header">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Connectivity Hub</span>
          <h2 className="font-gumani font-bold text-sienna">At the Core of Hyderabad&apos;s Growth Path</h2>
          <p className="font-figtree font-normal text-noir/70">
            Situated adjacent to ORR Exit 5, Dundigal/Bowrampet Road offers rapid transit access to central hubs and
            elite destinations.
          </p>
        </div>

        <div className="location-highlights-strip">
          <div className="loc-badge-card">
            <i className="fa-solid fa-road text-caramel"></i>
            <span className="num font-gumani font-bold text-sienna">1 Min</span>
            <span className="txt font-figtree font-medium">From ORR Exit 5</span>
          </div>
          <div className="loc-badge-card">
            <i className="fa-solid fa-graduation-cap text-caramel"></i>
            <span className="num font-gumani font-bold text-sienna">25+</span>
            <span className="txt font-figtree font-medium">Schools Within 15 Min</span>
          </div>
          <div className="loc-badge-card">
            <i className="fa-solid fa-tree text-caramel"></i>
            <span className="num font-gumani font-bold text-sienna">3</span>
            <span className="txt font-figtree font-medium">Reserve Forests Nearby</span>
          </div>
          <div className="loc-badge-card">
            <i className="fa-solid fa-briefcase text-caramel"></i>
            <span className="num font-gumani font-bold text-sienna">15 Min</span>
            <span className="txt font-figtree font-medium">To tech corridors</span>
          </div>
        </div>

        <div className="location-wrapper">
          {/* Left: Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.9664539121703!2d78.3846663!3d17.5562725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f3cf2559e4b%3A0xe54e3d360ef3a7a!2sKURA%20HOMES!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/* Right: Distance Matrix */}
          <div className="connectivity-card">
            <div className="connectivity-tabs" id="locTabContainer">
              <button
                className={`conn-tab-btn font-figtree font-bold ${activeLocTab === 'schools' ? 'active' : ''}`}
                onClick={() => setActiveLocTab('schools')}
              >
                Education
              </button>
              <button
                className={`conn-tab-btn font-figtree font-bold ${activeLocTab === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveLocTab('tech')}
              >
                IT & Pharma
              </button>
              <button
                className={`conn-tab-btn font-figtree font-bold ${activeLocTab === 'health' ? 'active' : ''}`}
                onClick={() => setActiveLocTab('health')}
              >
                Hospitals
              </button>
              <button
                className={`conn-tab-btn font-figtree font-bold ${activeLocTab === 'transit' ? 'active' : ''}`}
                onClick={() => setActiveLocTab('transit')}
              >
                Transit & Shop
              </button>
            </div>

            {/* Tab 1: Education */}
            {activeLocTab === 'schools' && (
              <div className="conn-tab-pane active" id="pane-schools">
                <div className="conn-list-item font-figtree"><span className="name font-medium">IARE College</span><span className="dist font-bold text-caramel">2 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Ryan International School</span><span className="dist font-bold text-caramel">2 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Sriveda Global School</span><span className="dist font-bold text-caramel">2 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Laurus The Universal School</span><span className="dist font-bold text-caramel">5 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Oakridge International School</span><span className="dist font-bold text-caramel">8 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Delhi Public School (DPS)</span><span className="dist font-bold text-caramel">11 Min</span></div>
              </div>
            )}

            {/* Tab 2: Tech */}
            {activeLocTab === 'tech' && (
              <div className="conn-tab-pane active" id="pane-tech">
                <div className="conn-list-item font-figtree"><span className="name font-medium">Tech Mahindra Campus</span><span className="dist font-bold text-caramel">10 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Aurobindo Pharma Hub</span><span className="dist font-bold text-caramel">10 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Jeedimetla Industrial Area</span><span className="dist font-bold text-caramel">10 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Medical Devices Cluster Park</span><span className="dist font-bold text-caramel">15 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Kandlakoya IT Gateway Park</span><span className="dist font-bold text-caramel">18 Min</span></div>
              </div>
            )}

            {/* Tab 3: Health */}
            {activeLocTab === 'health' && (
              <div className="conn-tab-pane active" id="pane-health">
                <div className="conn-list-item font-figtree"><span className="name font-medium">Subhakara Multispeciality Hospital</span><span className="dist font-bold text-caramel">10 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Malla Reddy Narayana Hospital</span><span className="dist font-bold text-caramel">15 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Usha Mullapudi Cardiac Centre</span><span className="dist font-bold text-caramel">20 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">SLG Hospital (Bachupally)</span><span className="dist font-bold text-caramel">25 Min</span></div>
              </div>
            )}

            {/* Tab 4: Transit */}
            {activeLocTab === 'transit' && (
              <div className="conn-tab-pane active" id="pane-transit">
                <div className="conn-list-item font-figtree"><span className="name font-medium">ORR Exit 5 (Gandimaisamma)</span><span className="dist font-bold text-caramel">1 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Kukatpally Retail Street</span><span className="dist font-bold text-caramel">20 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">JNTU Metro Station</span><span className="dist font-bold text-caramel">25 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">IKEA & Inorbit Mall (Hitech City)</span><span className="dist font-bold text-caramel">35 Min</span></div>
                <div className="conn-list-item font-figtree"><span className="name font-medium">Rajiv Gandhi Int. Airport</span><span className="dist font-bold text-caramel">50 Min</span></div>
              </div>
            )}

            <button
              className="btn btn-secondary font-figtree font-bold"
              style={{ marginTop: '24px', alignSelf: 'flex-start' }}
              onClick={() => onOpenLeadModal('location_details_cta', 'Request Complete Location Guide')}
            >
              Request Location Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
