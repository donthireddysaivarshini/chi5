'use client';

import React, { useState } from 'react';
import Header from '@/components/nav/Header';
import HeroSection from '@/components/hero/HeroSection';
import SnapshotStripSection from '@/components/sections/SnapshotStripSection';
import OverviewSection from '@/components/sections/OverviewSection';
import PricingSection from '@/components/sections/PricingSection';
import AffordabilityStudioSection from '@/components/sections/AffordabilityStudioSection';
import LocationSection from '@/components/sections/LocationSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import GallerySection from '@/components/sections/GallerySection';
import ProgressSection from '@/components/sections/ProgressSection';
import PerspectivesSection from '@/components/sections/PerspectivesSection';
import DeveloperHeritageSection from '@/components/sections/DeveloperHeritageSection';
import ConversionHubSection from '@/components/sections/ConversionHubSection';
import Footer from '@/components/nav/Footer';
import Modals from '@/components/ui/Modals';
import StickyMobileDock from '@/components/ui/StickyMobileDock';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import ScrollAnimationObserver from '@/components/ui/ScrollAnimationObserver';

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

  const handleOpenVideoModal = (src: string) => {
    setVideoModalSrc(src);
    setVideoModalOpen(true);
  };

  const handleOpenImageModal = (src: string) => {
    setImageModalSrc(src);
    setImageModalOpen(true);
  };

  return (
    <>
      <ScrollAnimationObserver />
      {/* §1 — Fixed Header Navigation */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      <main>
        {/* §2 — Cinematic Hero */}
        <HeroSection
          onOpenLeadModal={handleOpenLeadModal}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* §3 — Key Snapshot Strip */}
        <SnapshotStripSection />

        {/* §4 — Overview / The Vision */}
        <OverviewSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §5 — Configurations & Pricing */}
        <PricingSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §6 — Affordability Studio & EMI Calculator */}
        <AffordabilityStudioSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §7 — Location & Connectivity */}
        <LocationSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §8 — 25K Sq.Ft Clubhouse & 40+ Amenities */}
        <AmenitiesSection />

        {/* §9 — Exteriors & Interiors Gallery */}
        <GallerySection onOpenImageModal={handleOpenImageModal} />

        {/* §10 — Verified Construction Progress */}
        <ProgressSection onOpenLeadModal={handleOpenLeadModal} />

        {/* §11 — Project Perspectives & Reels */}
        <PerspectivesSection onOpenVideoModal={handleOpenVideoModal} />

        {/* §12 — 55 Years Developer Heritage */}
        <DeveloperHeritageSection />

        {/* §13 — Conversion Hub & Form */}
        <ConversionHubSection />
      </main>

      {/* §14 — Legal Compliance Footer */}
      <Footer />

      {/* Mobile Sticky Dock & WhatsApp */}
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
    </>
  );
}
