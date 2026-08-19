'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/nav/Header';
import HeroSection from '@/components/hero/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import PricingSection from '@/components/sections/PricingSection';
import AffordabilityStudioSection from '@/components/sections/AffordabilityStudioSection';
import LocationSection from '@/components/sections/LocationSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import ExteriorGallerySection from '@/components/sections/ExteriorGallerySection';
import InteriorGallerySection from '@/components/sections/InteriorGallerySection';
import ProgressSection from '@/components/sections/ProgressSection';
import PerspectivesSection from '@/components/sections/PerspectivesSection';
import ConversionHubSection from '@/components/sections/ConversionHubSection';
import Footer from '@/components/nav/Footer';
import Modals from '@/components/ui/Modals';
import StickyMobileDock from '@/components/ui/StickyMobileDock';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalTitle, setLeadModalTitle] = useState('Request Pricing & Project Details');
  const [leadModalSubtitle, setLeadModalSubtitle] = useState(
    'Enter your contact details below to receive the complete pricing breakdown, floor plans, and project brochure.'
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
            'Request Pricing & Project Details',
            'Enter your contact details below to receive the complete pricing breakdown, floor plans, and project brochure.'
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
        {/* §2 — Hero Section (Dark Slate) */}
        <HeroSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §3 — Project Vision (Dark Slate) */}
        <OverviewSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §4 — Configurations & Layouts (Light Slate) */}
        <PricingSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §5 — Clubhouse & 40+ Amenities (Dark Slate) */}
        <AmenitiesSection />

        {/* §6 — Exterior Architecture Gallery (Light Slate) */}
        <ExteriorGallerySection onOpenImageModal={handleOpenImageModal} />

        {/* §7 — Model Flat Interior Gallery (Dark Slate) */}
        <InteriorGallerySection onOpenImageModal={handleOpenImageModal} />

        {/* §8 — Financial Studio / EMI Calculator (Light Slate / Pure White Card) */}
        <AffordabilityStudioSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §9 — Location Hub & Commute Matrix (Light Slate) */}
        <LocationSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §10 — Construction Progress (Dark Slate) */}
        <ProgressSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §11 — Expert Perspectives (Pure White / Light Slate) */}
        <PerspectivesSection onOpenVideoModal={handleOpenVideoModal} />

        {/* §12 — Lead Capture Form & Developer Contact (Dark Slate with Pure White Form) */}
        <ConversionHubSection />
      </main>

      {/* §13 — Minimal Editorial Footer */}
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
