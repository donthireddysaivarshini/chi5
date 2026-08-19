'use client';

import React from 'react';

interface ProgressSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function ProgressSection({ onOpenLeadModal }: ProgressSectionProps) {
  return (
    <section className="section section-dark progress-section" id="progress">
      <div className="container">
        <div className="progress-grid">
          <div className="progress-info">
            <div className="section-header">
              <span className="tag font-figtree font-bold uppercase tracking-widest text-caramel">Development Status</span>
              <h2 className="font-gumani font-bold text-alabaster">Real Progress. RERA Verified.</h2>
            </div>
            <p className="font-figtree font-normal text-alabaster/80 leading-relaxed">
              Codename Hi-Five is constructed using high-quality structural specifications. We are currently at 90%
              completion status, with final finishes, landscape architecture, and test systems underway. See the on-site
              progress video on the right.
            </p>

            <div className="bar-wrapper">
              <div className="bar-label font-figtree font-bold">
                <span>Construction Milestones</span>
                <span className="text-emerald font-gumani text-lg">90% Complete</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <ul className="progress-meta font-figtree font-medium text-alabaster/90">
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Superstructure & Masonry: 100% Completed</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Internal Plastering & Electrical: 95% Completed</li>
              <li><i className="fa-solid fa-circle-check text-emerald"></i> Finishing & Flooring: Underway</li>
              <li><i className="fa-solid fa-shield-check text-caramel"></i> Verified on TG RERA Portal Registration: P02200002810</li>
            </ul>

            <button
              className="btn btn-primary font-figtree font-bold uppercase tracking-wider text-xs"
              onClick={() => onOpenLeadModal('progress_site_visit_cta', 'Book a Physical Progress Tour')}
            >
              <i className="fa-solid fa-eye" style={{ marginRight: '8px' }}></i> Book a Physical Progress Tour
            </button>
          </div>

          <div className="progress-video">
            <video controls poster="/images/Side view.webp" preload="none" className="rounded-2xl shadow-2xl">
              <source src="/videos/construction-progress.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
