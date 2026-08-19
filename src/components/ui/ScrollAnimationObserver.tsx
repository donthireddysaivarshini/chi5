'use client';

import { useEffect } from 'react';

export default function ScrollAnimationObserver() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    const elementsToAnimate = document.querySelectorAll(
      '.reveal-on-scroll, .animate-on-scroll, .snapshot-card, .pricing-card, .gallery-card, .perspective-card, .heritage-stat-card, .loc-badge-card, .amenity-tile, .mini-stat-card'
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
