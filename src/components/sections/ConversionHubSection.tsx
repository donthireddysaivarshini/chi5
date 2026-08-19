'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConversionHubSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [req, setReq] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          requirement: req || 'Not Specified',
          source: 'footer_main_form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-sienna text-alabaster"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Connect & Promises */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-figtree text-xs font-bold uppercase tracking-[0.15em] text-caramel flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Direct Developer Invitation</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3E6] tracking-tight leading-[1.15]">
                Ready to Choose Your <span className="italic text-[#CE793A] font-normal">Next Address?</span>
              </h2>
            </div>

            <p className="font-figtree text-sm sm:text-base text-alabaster/85 font-normal leading-relaxed">
              Connect with a senior Kura Homes project advisor today. Get complete transparent pricing breakdowns, structural blueprints, and schedule an exclusive site visit.
            </p>

            {/* Trust Promises */}
            <div className="space-y-3 pt-2 font-figtree text-xs sm:text-sm text-alabaster/90">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Guaranteed advisor callback within 2 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Complimentary private vehicle site visit & pickup</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Complete transparent legal title & RERA documentation</span>
              </div>
            </div>

            {/* Direct Call Box */}
            <div className="pt-4 p-5 rounded-2xl bg-sienna-dark border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-figtree text-xs text-alabaster/60 block">Speak to Sales Advisor Direct</span>
                <a
                  href="tel:8008008946"
                  className="font-gumani text-2xl font-bold text-caramel hover:text-caramel-light transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-caramel" />
                  <span>800 800 8946</span>
                </a>
              </div>
              <span className="font-figtree text-xs px-3 py-1.5 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-semibold self-start sm:self-center">
                Available 9 AM - 8 PM
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form Card with High-Contrast Text */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-borderTone">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald mx-auto" />
                <h3 className="font-gumani text-2xl font-bold text-sienna">
                  Enquiry Received!
                </h3>
                <p className="font-figtree text-sm text-noir/70 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Our project coordinator will send the brochure and floor plans to your WhatsApp and phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 bg-chocolate text-sienna font-figtree font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-chocolate-dark transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1">
                  <span className="font-figtree text-xs font-bold uppercase tracking-widest text-caramel block">
                    Instant Access
                  </span>
                  <h3 className="font-gumani text-2xl sm:text-3xl font-bold text-sienna">
                    Request Instant Project Details
                  </h3>
                  <p className="font-figtree text-xs sm:text-sm text-noir/65">
                    Provide your details below to receive the brochure & floor plans via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-figtree">
                  <div>
                    <label className="block text-xs font-semibold text-sienna mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-borderTone rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-sienna mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-borderTone rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sienna mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="rajesh@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-borderTone rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sienna mb-1">
                        Configuration
                      </label>
                      <select
                        value={req}
                        onChange={(e) => setReq(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-borderTone rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                      >
                        <option value="">Preferred Layout (Optional)</option>
                        <option value="2 BHK">Smart 2 BHK Apartment</option>
                        <option value="Duplex">Bespoke Duplex Suite</option>
                        <option value="Both">Interested in Both</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-caramel hover:bg-caramel-light text-white font-figtree font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-caramel-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                  >
                    <span>{loading ? 'Submitting Details...' : 'Submit Enquiry & Get Details'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-noir/50 pt-1 font-normal">
                    By submitting, you consent to Kura Homes calling or sending project details on SMS/WhatsApp.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
