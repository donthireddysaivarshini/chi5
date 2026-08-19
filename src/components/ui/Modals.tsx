'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ModalsProps {
  leadModalOpen: boolean;
  leadModalTitle: string;
  leadModalSubtitle: string;
  leadModalSource: string;
  onCloseLeadModal: () => void;

  videoModalOpen: boolean;
  videoModalSrc: string;
  onCloseVideoModal: () => void;

  imageModalOpen: boolean;
  imageModalSrc: string;
  onCloseImageModal: () => void;
}

export default function Modals({
  leadModalOpen,
  leadModalTitle,
  leadModalSubtitle,
  leadModalSource,
  onCloseLeadModal,
  videoModalOpen,
  videoModalSrc,
  onCloseVideoModal,
  imageModalOpen,
  imageModalSrc,
  onCloseImageModal,
}: ModalsProps) {
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName,
          phone: modalPhone,
          requirement: '',
          source: leadModalSource,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }
    setIsSubmitting(false);
    setModalSubmitted(true);
    setTimeout(() => {
      onCloseLeadModal();
      setModalSubmitted(false);
      setModalName('');
      setModalPhone('');
    }, 3000);
  };

  return (
    <>
      {/* Lead Capture Modal */}
      {leadModalOpen && (
        <div className="modal-overlay active" id="leadCaptureModal">
          <div className="modal-wrapper">
            <button
              className="modal-close-btn"
              aria-label="Close Modal"
              onClick={onCloseLeadModal}
            >
              &times;
            </button>
            <div className="modal-body">
              {modalSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <i className="fa-solid fa-circle-check text-emerald" style={{ fontSize: '3rem', marginBottom: '8px' }}></i>
                  <h3 className="font-gumani font-bold text-sienna text-2xl">Enquiry Received!</h3>
                  <p className="font-figtree text-noir/70 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong>{modalName}</strong>. Our team will connect with you shortly with the complete pricing breakdown and project brochure.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-gumani font-bold text-sienna text-2xl" id="modalHeading">
                    {leadModalTitle || 'Request Pricing & Project Details'}
                  </h3>
                  <p className="font-figtree font-normal text-noir/60 text-sm mt-1" id="modalSubheading">
                    {leadModalSubtitle || 'Enter your contact details below to receive the complete pricing breakdown, floor plans, and project brochure.'}
                  </p>

                  <form id="modalEnquiryForm" className="lead-generation-form font-figtree" style={{ marginTop: '20px' }} onSubmit={handleModalSubmit}>
                    <div className="form-group">
                      <label htmlFor="modal-name" style={{ display: 'none' }}>Full Name</label>
                      <input
                        type="text"
                        id="modal-name"
                        className="form-control font-figtree"
                        placeholder="Full Name *"
                        required
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-phone" style={{ display: 'none' }}>Mobile Number</label>
                      <input
                        type="tel"
                        id="modal-phone"
                        className="form-control font-figtree"
                        placeholder="10-Digit Mobile Number *"
                        required
                        pattern="[0-9]{10}"
                        value={modalPhone}
                        onChange={(e) => setModalPhone(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
                      style={{ width: '100%', marginTop: '8px' }}
                    >
                      {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                    </button>

                    <p className="consent-txt font-figtree font-normal text-noir/50 text-[11px] text-center mt-2">
                      By submitting, our team will share the project details and pricing with you via call / WhatsApp.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {videoModalOpen && (
        <div className="modal-overlay active" id="videoModal">
          <div className="modal-wrapper video-modal-wrapper">
            <button
              className="modal-close-btn"
              aria-label="Close Video"
              onClick={onCloseVideoModal}
            >
              &times;
            </button>
            <video id="modalVideoPlayer" controls autoPlay preload="none" key={videoModalSrc}>
              <source src={videoModalSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {imageModalOpen && (
        <div className="modal-overlay active" id="imageModal">
          <div className="modal-wrapper lightbox-img-wrapper">
            <button
              className="modal-close-btn"
              aria-label="Close Lightbox"
              onClick={onCloseImageModal}
            >
              &times;
            </button>
            <Image
              id="lightboxImg"
              src={imageModalSrc}
              alt="Enlarged photo view"
              width={1000}
              height={700}
              className="object-contain max-h-[85vh] w-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
