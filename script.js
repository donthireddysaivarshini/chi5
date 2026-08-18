/**
 * Codename Hi-Five by Kura Homes
 * Interactive Scripting & Conversion Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE HEADER DRAWER ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });


  // --- HEADER SCROLL & SCROLL SPY ---
  const mainHeader = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const mobileStickyDock = document.getElementById('mobileStickyDock');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 50) {
      mainHeader.style.boxShadow = 'var(--shadow-md)';
      mainHeader.style.backgroundColor = 'rgba(245, 243, 230, 0.98)';
    } else {
      mainHeader.style.boxShadow = 'none';
      mainHeader.style.backgroundColor = 'rgba(245, 243, 230, 0.88)';
    }

    // Mobile sticky dock visibility threshold (appear past hero)
    if (window.innerWidth < 768) {
      const heroHeight = document.getElementById('hero').offsetHeight;
      if (window.scrollY > heroHeight - 100) {
        mobileStickyDock.style.display = 'block';
      } else {
        mobileStickyDock.style.display = 'none';
      }
    }

    // Scroll Spy
    let currentId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });


  // --- UNIVERSAL LEAD CAPTURE MODALS & ATTRIBUTION ---
  const leadCaptureModal = document.getElementById('leadCaptureModal');
  const modalHeading = document.getElementById('modalHeading');
  const modalSubheading = document.getElementById('modalSubheading');
  const modalSourceInput = document.getElementById('modalSource');
  const triggerModalBtns = document.querySelectorAll('.trigger-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');

  // Custom headings based on CTA click source for high relevance
  const modalCopyMap = {
    header_cta: {
      title: 'Schedule a Site Visit',
      desc: 'Our advisor will contact you to coordinate a private site tour and luxury vehicle pickup.'
    },
    mobile_menu_cta: {
      title: 'Schedule a Site Visit',
      desc: 'Schedule your private site tour with a Kura Homes project expert.'
    },
    hero_main_cta: {
      title: 'Book a Private Site Tour',
      desc: 'Confirm your visit to see the progress, clubhouse, and model flats in person.'
    },
    about_visit_cta: {
      title: 'Book a Physical Progress Tour',
      desc: 'Select a preferred time slot. We will arrange a complimentary pickup and tour.'
    },
    pricing_summary_cta: {
      title: 'Request Detailed Pricing Sheet',
      desc: 'Get the absolute, non-inflated cost sheet and available unit numbers instantly.'
    },
    floorplan_2bhk: {
      title: 'Unlock 2 BHK Blueprints',
      desc: 'Unlock high-definition floor plans, dimensions, and furniture layout specifications.'
    },
    floorplan_duplex: {
      title: 'Unlock Duplex Blueprints',
      desc: 'Unlock detailed structural layouts, penthouse duplex blueprints, and terrace specifications.'
    },
    calculator_emi_cta: {
      title: 'Request Home Loan & Eligibility Guide',
      desc: 'Speak with our banking advisors to receive complete interest rate offers and CA estimates.'
    },
    location_details_cta: {
      title: 'Request Location Connectivity Guide',
      desc: 'Download school proximity lists and commuter drive-time maps for ORR Exit 5.'
    },
    amenities_cta: {
      title: 'Request Clubhouse Amenities Brochure',
      desc: 'Get the complete catalog detailing all 40+ clubhouse and outdoor amenities.'
    },
    progress_site_visit_cta: {
      title: 'Schedule a Physical Progress Tour',
      desc: 'Walk through the actual constructions and verify the quality in person.'
    },
    mobile_dock_visit: {
      title: 'Book a Private Site Tour',
      desc: 'Arrange your site visit. Callback response guaranteed within 2 hours.'
    }
  };

  function openLeadModal(source) {
    const copy = modalCopyMap[source] || {
      title: 'Unlock Project Details',
      desc: 'Provide your name and number to receive instant access to blueprints & pricing details.'
    };
    modalHeading.textContent = copy.title;
    modalSubheading.textContent = copy.desc;
    modalSourceInput.value = source;
    leadCaptureModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus traps
    leadCaptureModal.querySelector('input').focus();
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    // Stop modal video if playing
    const modalVideoPlayer = document.getElementById('modalVideoPlayer');
    modalVideoPlayer.pause();
    modalVideoPlayer.src = '';
    
    document.body.style.overflow = '';
  }

  triggerModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const source = btn.getAttribute('data-source');
      openLeadModal(source);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });


  // --- VIDEO LIGHTBOX MODAL ---
  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  
  // Hero Project Film Modal trigger
  const heroPlayBtn = document.getElementById('heroPlayBtn');
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
      modalVideoPlayer.src = 'public/videos/hero-video.mp4';
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      modalVideoPlayer.play().catch(err => console.log('Video play failed:', err));
    });
  }

  // Perspectives card triggers
  const playVideoTriggers = document.querySelectorAll('.play-video-trigger');
  playVideoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const videoSrc = trigger.getAttribute('data-video');
      modalVideoPlayer.src = videoSrc;
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      modalVideoPlayer.play().catch(err => console.log('Video play failed:', err));
    });
  });


  // --- IMAGE LIGHTBOX MODAL ---
  const imageModal = document.getElementById('imageModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imgSrc = trigger.getAttribute('data-img');
      lightboxImg.src = imgSrc;
      imageModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });


  // --- LOCATION & CONNECTIVITY TABS ---
  const locTabContainer = document.getElementById('locTabContainer');
  if (locTabContainer) {
    const locTabs = locTabContainer.querySelectorAll('.conn-tab-btn');
    const locPanes = document.querySelectorAll('.conn-tab-pane');

    locTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        locTabs.forEach(t => t.classList.remove('active'));
        locPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetId = `pane-${tab.getAttribute('data-tab')}`;
        document.getElementById(targetId).classList.add('active');
      });
    });
  }


  // --- CLUBHOUSE AMENITIES TABS ---
  const amenityTabContainer = document.getElementById('amenityTabContainer');
  if (amenityTabContainer) {
    const amenityTabs = amenityTabContainer.querySelectorAll('.amenity-tab-btn');
    const amenityPanes = document.querySelectorAll('.amenity-tab-pane');

    const amenityPaneMap = {
      fitness: 'pane-fit',
      social: 'pane-soc',
      kids: 'pane-kid',
      practical: 'pane-prac'
    };

    amenityTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        amenityTabs.forEach(t => t.classList.remove('active'));
        amenityPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetId = amenityPaneMap[tab.getAttribute('data-tab')];
        document.getElementById(targetId).classList.add('active');
      });
    });
  }


  // --- INTERACTIVE EMI & NET OUTGO CALCULATOR ---
  const propertySlider = document.getElementById('propertySlider');
  const loanSlider = document.getElementById('loanSlider');
  const tenureSlider = document.getElementById('tenureSlider');
  const rateSlider = document.getElementById('rateSlider');

  const textPropertyVal = document.getElementById('slider-property-val');
  const textLoanVal = document.getElementById('slider-loan-val');
  const textTenureVal = document.getElementById('slider-tenure-val');
  const textRateVal = document.getElementById('slider-rate-val');

  const outgoVal = document.getElementById('outgoVal');
  const scenarioLabel = document.getElementById('scenarioLabel');
  
  const calcEmi = document.getElementById('calcEmi');
  const calcTaxRow = document.getElementById('calcTaxRow');
  const calcRentRow = document.getElementById('calcRentRow');
  const calcNetOutgo = document.getElementById('calcNetOutgo');

  const scenarioLiveBtn = document.getElementById('scenarioLiveBtn');
  const scenarioRentBtn = document.getElementById('scenarioRentBtn');

  let currentScenario = 'live'; // 'live' or 'rent'

  function formatRupees(num) {
    return '₹' + Number(num).toLocaleString('en-IN');
  }

  function calculateEmiValues() {
    const P = parseFloat(loanSlider.value);
    const N = parseFloat(tenureSlider.value) * 12;
    const R = parseFloat(rateSlider.value) / 12 / 100;

    // Standard EMI formula: P * R * (1+R)^N / ((1+R)^N - 1)
    let emi = 0;
    if (R > 0) {
      emi = Math.round(P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1));
    } else {
      emi = Math.round(P / N);
    }

    // Tax benefit assumption: up to 2L interest deduction under Sec 24(b) (approx ₹9,500/month maximum savings at 30% slab)
    // We adjust it relative to the loan size to be realistic (max ₹9,500)
    const annualInterestPaidFirstYear = P * (parseFloat(rateSlider.value) / 100);
    const monthlyInterest = annualInterestPaidFirstYear / 12;
    const actualTaxSaving = Math.min(9500, Math.round(monthlyInterest * 0.312)); // 30% slab + cess

    // Rental estimation based on Bowrampet corridor
    const estimatedRental = 20000;

    // Update display values
    textPropertyVal.textContent = formatRupees(propertySlider.value);
    textLoanVal.textContent = formatRupees(loanSlider.value);
    textTenureVal.textContent = `${tenureSlider.value} Years`;
    textRateVal.textContent = `${rateSlider.value}%`;

    calcEmi.textContent = formatRupees(emi);
    
    if (currentScenario === 'live') {
      scenarioLabel.textContent = 'Net Monthly Cost of Ownership';
      const net = Math.max(0, emi - actualTaxSaving);
      
      outgoVal.textContent = formatRupees(net);
      calcNetOutgo.textContent = formatRupees(net);
      
      calcTaxRow.querySelector('span:last-child').textContent = `- ${formatRupees(actualTaxSaving)}`;
      calcTaxRow.style.display = 'flex';
      calcRentRow.style.display = 'none';
    } else {
      scenarioLabel.textContent = 'Net Effective Outgo (Investment)';
      const net = Math.max(0, emi - estimatedRental - actualTaxSaving);
      
      outgoVal.textContent = formatRupees(net);
      calcNetOutgo.textContent = formatRupees(net);

      calcTaxRow.querySelector('span:last-child').textContent = `- ${formatRupees(actualTaxSaving)}`;
      calcRentRow.querySelector('span:last-child').textContent = `- ${formatRupees(estimatedRental)}`;
      calcTaxRow.style.display = 'flex';
      calcRentRow.style.display = 'flex';
    }
  }

  // Bind Slider Inputs
  if (propertySlider) {
    // Dynamic cap logic: loan should not exceed 85% of property value
    propertySlider.addEventListener('input', () => {
      const maxLoan = Math.round(propertySlider.value * 0.85);
      loanSlider.max = maxLoan;
      if (parseInt(loanSlider.value) > maxLoan) {
        loanSlider.value = maxLoan;
      }
      calculateEmiValues();
    });

    loanSlider.addEventListener('input', calculateEmiValues);
    tenureSlider.addEventListener('input', calculateEmiValues);
    rateSlider.addEventListener('input', calculateEmiValues);

    scenarioLiveBtn.addEventListener('click', () => {
      currentScenario = 'live';
      scenarioLiveBtn.classList.add('active');
      scenarioRentBtn.classList.remove('active');
      calculateEmiValues();
    });

    scenarioRentBtn.addEventListener('click', () => {
      currentScenario = 'rent';
      scenarioRentBtn.classList.add('active');
      scenarioLiveBtn.classList.remove('active');
      calculateEmiValues();
    });

    // Run initial compute
    calculateEmiValues();
  }


  // --- ANIMATIONS & INTERSECTION OBSERVER ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-stagger-child');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Custom hooks for counters and progress bars
        if (entry.target.id === 'progress') {
          document.getElementById('progressBar').style.width = '90%';
        }
        
        if (entry.target.classList.contains('heritage-container') || entry.target.querySelector('.heritage-stats')) {
          animateNumbers();
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    scrollObserver.observe(el);
  });

  // Numbers Count-Up Animation
  let numbersAnimated = false;
  function animateNumbers() {
    if (numbersAnimated) return;
    numbersAnimated = true;

    const stats = [
      { id: 'stat-years', end: 55, suffix: '' },
      { id: 'stat-booked', end: 500, suffix: '+' },
      { id: 'stat-acres', end: 5.3, suffix: '', decimals: 1 }
    ];

    stats.forEach(stat => {
      const el = document.getElementById(stat.id);
      if (!el) return;

      const duration = 1500; // ms
      const startTime = performance.now();
      const startValue = 0;

      function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing out quadratic
        const easeProgress = progress * (2 - progress);
        const currentValue = startValue + easeProgress * (stat.end - startValue);

        if (stat.decimals) {
          el.textContent = currentValue.toFixed(stat.decimals) + stat.suffix;
        } else {
          el.textContent = Math.floor(currentValue) + stat.suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          if (stat.decimals) {
            el.textContent = stat.end.toFixed(stat.decimals) + stat.suffix;
          } else {
            el.textContent = stat.end + stat.suffix;
          }
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }


  // --- LEAD SUBMISSION WEBHOOK LOGIC ---
  const forms = document.querySelectorAll('.lead-generation-form');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Details...';

      let name = '';
      let phone = '';
      let email = '';
      let req = 'Not Specified';
      let source = 'website_form';

      // Check form fields mapping
      if (form.id === 'modalEnquiryForm') {
        name = document.getElementById('modal-name').value;
        phone = document.getElementById('modal-phone').value;
        source = document.getElementById('modalSource').value;
      } else {
        name = document.getElementById('footer-name').value;
        phone = document.getElementById('footer-phone').value;
        email = document.getElementById('footer-email').value;
        req = document.getElementById('footer-requirement').value || 'Not Specified';
        source = form.querySelector('input[name="source"]').value;
      }

      const payload = {
        timestamp: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        requirement: req,
        source: source,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        page_url: window.location.href
      };

      try {
        // Post asynchronously to App Script Webhook (Replace URL when sheets webhook is active)
        const webHookUrl = 'https://script.google.com/macros/s/AKfycbz_MOCK_ENDPOINT_URL/exec';
        
        await fetch(webHookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        // Graceful confirmation state
        closeAllModals();
        
        // Open success modal overlay
        openSuccessModal(name);
        
        form.reset();
      } catch (err) {
        console.error('Lead submit error:', err);
        // Fallback success state
        closeAllModals();
        openSuccessModal(name);
        form.reset();
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  });

  // Programmatic Success Modal builder
  function openSuccessModal(name) {
    const successOverlay = document.createElement('div');
    successOverlay.className = 'modal-overlay active';
    successOverlay.id = 'successModal';
    
    successOverlay.innerHTML = `
      <div class="modal-wrapper">
        <button class="modal-close-btn" id="successCloseBtn">&times;</button>
        <div class="modal-body text-center">
          <i class="fa-solid fa-circle-check text-accent" style="font-size: 3.5rem; margin-bottom: 20px;"></i>
          <h3 class="font-editorial" style="margin-bottom: 12px;">Thank You, ${name.split(' ')[0]}!</h3>
          <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 24px;">Your request was successfully submitted. A dedicated Kura Homes advisor will reach out to you personally within 2 hours.</p>
          
          <a href="https://wa.me/918008008946?text=Hi,%20I%20just%20submitted%20my%20details%20for%20Codename%20Hi-Five.%20Please%20send%20brochure%20and%20pricing." class="btn btn-whatsapp" target="_blank" rel="noopener" style="width: 100%;">
            <i class="fa-brands fa-whatsapp" style="margin-right: 8px;"></i> Instant Details on WhatsApp
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(successOverlay);
    document.body.style.overflow = 'hidden';

    const closeBtn = successOverlay.querySelector('#successCloseBtn');
    closeBtn.addEventListener('click', () => {
      successOverlay.remove();
      document.body.style.overflow = '';
    });

    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) {
        successOverlay.remove();
        document.body.style.overflow = '';
      }
    });
  }

});
