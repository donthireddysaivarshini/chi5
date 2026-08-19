'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/nav/Header';
import HeroSection from '@/components/hero/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import PricingSection from '@/components/sections/PricingSection';
import AffordabilityStudioSection from '@/components/sections/AffordabilityStudioSection';
import LocationSection from '@/components/sections/LocationSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import GallerySection from '@/components/sections/GallerySection';
import ProgressSection from '@/components/sections/ProgressSection';
import ConversionHubSection from '@/components/sections/ConversionHubSection';
import Footer from '@/components/nav/Footer';
import Modals from '@/components/ui/Modals';
import StickyMobileDock from '@/components/ui/StickyMobileDock';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalTitle, setLeadModalTitle] = useState('Unlock Project Details');
  const [leadModalSubtitle, setLeadModalSubtitle] = useState(
    'Provide your name and mobile number to receive instant access to blueprints & pricing breakdown.'
  );
  const [leadModalSource, setLeadModalSource] = useState('modal_popup');

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoModalSrc, setVideoModalSrc] = useState('');

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState('');

  const handleOpenLeadModal = (source: string, title?: string, subtitle?: string) => {
    setLeadModalSource(source);
    if (title) setLeadModalTitle(title);
    if (subtitle) setLeadModalSubtitle(subtitle);
    setLeadModalOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const hasShown = sessionStorage.getItem('lead_popup_triggered');
        if (!hasShown) {
          handleOpenLeadModal(
            'auto_popup_2s',
            'Download Complete Project Brochure & Cost Sheet',
            'Enter your contact number below to get immediate access to detailed pricing breakdown, floor plans, and site tour booking.'
          );
          sessionStorage.setItem('lead_popup_triggered', 'true');
        }
      } catch (e) {
        // Fallback for private browsing
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenVideoModal = (src: string) => {
    setVideoModalSrc(src);
    setVideoModalOpen(true);
  };

  const handleOpenImageModal = (src: string) => {
    setImageModalSrc(src);
    setImageModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-alabaster selection:bg-caramel selection:text-white">
      {/* §1 — Fixed Header Navigation */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      <main className="flex-grow">
        {/* §2 — 100vh Hero with Integrated 6-Fact Snapshot Bar */}
        <HeroSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §3 — Vision & Social Proof (50/50 Editorial Grid) */}
        <OverviewSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §4 — Configurations & Floor Plans (Side-by-Side Dual Cards) */}
        <PricingSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §5 — Financial Studio / EMI Calculator (Unified Card) */}
        <AffordabilityStudioSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §6 — Location Hub & Commute Matrix */}
        <LocationSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §7 — Clubhouse & 40+ Amenities */}
        <AmenitiesSection />

        {/* §8 — Dual Photo Galleries (Swipeable Carousels) */}
        <GallerySection onOpenImageModal={handleOpenImageModal} />

        {/* §9 — Construction Progress & Video Perspectives */}
        <ProgressSection
          onOpenLeadModal={handleOpenLeadModal}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* §10 — Lead Capture Form with High-Contrast Text */}
        <ConversionHubSection />
      </main>

      {/* §11 — Minimal Editorial Footer */}
      <Footer />

      {/* Conversion Widgets */}
      <StickyMobileDock onOpenLeadModal={handleOpenLeadModal} />
      <FloatingWhatsApp />

      {/* Universal Modals */}
      <Modals
        leadModalOpen={leadModalOpen}
        leadModalTitle={leadModalTitle}
        leadModalSubtitle={leadModalSubtitle}
        leadModalSource={leadModalSource}
        onCloseLeadModal={() => setLeadModalOpen(false)}
        videoModalOpen={videoModalOpen}
        videoModalSrc={videoModalSrc}
        onCloseVideoModal={() => {
          setVideoModalOpen(false);
          setVideoModalSrc('');
        }}
        imageModalOpen={imageModalOpen}
        imageModalSrc={imageModalSrc}
        onCloseImageModal={() => {
          setImageModalOpen(false);
          setImageModalSrc('');
        }}
      />
    </div>
  );
}
