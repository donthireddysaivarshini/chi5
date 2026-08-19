'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function AmenitiesSection() {
  const [activeAmenityTab, setActiveAmenityTab] = useState<'fitness' | 'social' | 'kids' | 'practical'>('fitness');

  return (
    <section className="section amenities-section" id="amenities">
      <div className="container">
        <div className="section-header text-center">
          <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Lifestyle</span>
          <h2 className="font-gumani font-bold text-sienna">25,000 Sq.Ft Clubhouse & 40+ Amenities</h2>
          <p className="font-figtree font-normal text-noir/70" style={{ margin: '0 auto' }}>
            Enjoy curated zones built for health, recreation, co-working, and family time.
          </p>
        </div>

        <div className="amenities-tabs-header" id="amenityTabContainer">
          <button
            className={`amenity-tab-btn font-figtree font-bold ${activeAmenityTab === 'fitness' ? 'active' : ''}`}
            onClick={() => setActiveAmenityTab('fitness')}
          >
            Fitness & Pool
          </button>
          <button
            className={`amenity-tab-btn font-figtree font-bold ${activeAmenityTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveAmenityTab('social')}
          >
            Co-Work & Social
          </button>
          <button
            className={`amenity-tab-btn font-figtree font-bold ${activeAmenityTab === 'kids' ? 'active' : ''}`}
            onClick={() => setActiveAmenityTab('kids')}
          >
            Kids & Outdoors
          </button>
          <button
            className={`amenity-tab-btn font-figtree font-bold ${activeAmenityTab === 'practical' ? 'active' : ''}`}
            onClick={() => setActiveAmenityTab('practical')}
          >
            Practical Conveniences
          </button>
        </div>

        {/* Tab 1: Fitness */}
        {activeAmenityTab === 'fitness' && (
          <div className="amenity-tab-pane active" id="pane-fit">
            <div className="amenity-grid-content">
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-water-ladder text-caramel"></i> <span>Rooftop Infinity Pool</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-dumbbell text-caramel"></i> <span>AC Gymnasium</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-mattress-pillow text-caramel"></i> <span>Aerobics & Yoga Studio</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-person-running text-caramel"></i> <span>Jogging & Walking Track</span></div>
            </div>
            <div className="amenity-visual">
              <Image
                src="/images/swimming pool.webp"
                alt="Rooftop Swimming Pool Render"
                width={500}
                height={350}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Social */}
        {activeAmenityTab === 'social' && (
          <div className="amenity-tab-pane active" id="pane-soc">
            <div className="amenity-grid-content">
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-laptop-code text-caramel"></i> <span>Luxe Co-working Space</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-glass-cheers text-caramel"></i> <span>Multipurpose Banquet Hall</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-couch text-caramel"></i> <span>Grand Reception Foyer</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-bed text-caramel"></i> <span>Fully-Furnished Guest Rooms</span></div>
            </div>
            <div className="amenity-visual">
              <Image
                src="/images/club view.webp"
                alt="25K Sq.Ft Clubhouse Lounge"
                width={500}
                height={350}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab 3: Kids */}
        {activeAmenityTab === 'kids' && (
          <div className="amenity-tab-pane active" id="pane-kid">
            <div className="amenity-grid-content">
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-child-reaching text-caramel"></i> <span>Traffic-Free Children&apos;s Play Area</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-baseball-bat-ball text-caramel"></i> <span>Net Cricket Practice Courts</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-basketball text-caramel"></i> <span>Half Basketball Court</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-bicycle text-caramel"></i> <span>Dedicated Cycling Track</span></div>
            </div>
            <div className="amenity-visual">
              <Image
                src="/images/Childrens Play area.webp"
                alt="Kids Adventure Play Zone"
                width={500}
                height={350}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab 4: Practical */}
        {activeAmenityTab === 'practical' && (
          <div className="amenity-tab-pane active" id="pane-prac">
            <div className="amenity-grid-content">
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-charging-station text-caramel"></i> <span>EV Charging Stations</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-vault text-caramel"></i> <span>Safety Locker Facility</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-scissors text-caramel"></i> <span>In-house Salon Room</span></div>
              <div className="amenity-tile font-figtree font-medium"><i className="fa-solid fa-building-shield text-caramel"></i> <span>24/7 Gated Security & CCTV</span></div>
            </div>
            <div className="amenity-visual">
              <Image
                src="/images/Basket ball court.webp"
                alt="Outdoor sports arena"
                width={500}
                height={350}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
