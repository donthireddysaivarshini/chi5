'use client';

import React, { useState } from 'react';

export default function ConversionHubSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [req, setReq] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          requirement: req,
          source: 'footer_main_form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }
    setSubmitted(true);
  };

  return (
    <section className="section section-dark conversion-hub" id="contact">
      <div className="container">
        <div className="conversion-wrapper">
          <div className="hub-text">
            <h2 className="font-gumani font-bold text-alabaster">Ready to Choose Your Next Address?</h2>
            <p className="font-figtree font-normal text-alabaster/80 leading-relaxed">
              Connect with a Kura Homes project advisor today. Get complete pricing breakdowns, structural layout
              blueprints, and schedule an exclusive site visit.
            </p>

            <div className="trust-promises font-figtree font-medium text-alabaster/90">
              <div className="promise-item">
                <i className="fa-solid fa-circle-check text-emerald"></i>
                <span>Guaranteed callback within 2 hours</span>
              </div>
              <div className="promise-item">
                <i className="fa-solid fa-circle-check text-emerald"></i>
                <span>Complimentary private vehicle site visit</span>
              </div>
              <div className="promise-item">
                <i className="fa-solid fa-circle-check text-emerald"></i>
                <span>Complete transparent legal & RERA documentation</span>
              </div>
            </div>

            <div className="direct-box">
              <span className="lbl font-figtree font-medium text-alabaster/70">Speak to Sales Advisor Direct</span>
              <div className="direct-num">
                <a href="tel:8008008946" className="font-gumani font-bold text-2xl text-caramel hover:text-caramel-light transition-colors">
                  <i className="fa-solid fa-phone text-accent" style={{ marginRight: '8px' }}></i> 800 800 8946
                </a>
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="text-center py-8">
                <i className="fa-solid fa-circle-check text-emerald" style={{ fontSize: '3rem', marginBottom: '16px' }}></i>
                <h3 className="font-gumani font-bold text-sienna text-2xl">Enquiry Received!</h3>
                <p className="font-figtree text-noir/70 mt-2">Thank you, <strong>{name}</strong>. Our project advisor will contact you on WhatsApp / Phone shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="font-gumani font-bold text-sienna text-2xl">Request Instant Project Details</h3>
                <p className="font-figtree font-normal text-noir/60 text-sm">Provide your details below to receive the brochure & floor plans via WhatsApp.</p>

                <form id="bottomEnquiryForm" className="lead-generation-form font-figtree" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="footer-name" style={{ display: 'none' }}>Full Name</label>
                    <input
                      type="text"
                      id="footer-name"
                      className="form-control font-figtree"
                      placeholder="Full Name *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-phone" style={{ display: 'none' }}>Mobile Number</label>
                    <input
                      type="tel"
                      id="footer-phone"
                      className="form-control font-figtree"
                      placeholder="10-Digit Mobile Number *"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-email" style={{ display: 'none' }}>Email Address</label>
                    <input
                      type="email"
                      id="footer-email"
                      className="form-control font-figtree"
                      placeholder="Email Address (Optional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-requirement" style={{ display: 'none' }}>Preferred Configuration</label>
                    <select
                      id="footer-requirement"
                      className="form-control form-control-select font-figtree"
                      value={req}
                      onChange={(e) => setReq(e.target.value)}
                    >
                      <option value="" disabled>Preferred Configuration (Optional)</option>
                      <option value="2 BHK">Smart 2 BHK Apartment</option>
                      <option value="Duplex">Bespoke Duplex Suite</option>
                      <option value="Not Decided">Undecided / Need Details</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs" style={{ width: '100%', marginTop: '8px' }}>
                    Submit Enquiry & Get Details
                  </button>

                  <p className="consent-txt font-figtree font-normal text-noir/50 text-[11px]">
                    By submitting, you consent to Kura Homes calling or sending project details on SMS/WhatsApp. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
