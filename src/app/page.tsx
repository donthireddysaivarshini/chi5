'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  // Mobile Header Drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scrolled state
  const [isScrolled, setIsScrolled] = useState(false);

  // Modals state
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

  // Location Tab
  const [activeLocTab, setActiveLocTab] = useState<'schools' | 'tech' | 'health' | 'transit'>('schools');

  // Amenities Tab
  const [activeAmenityTab, setActiveAmenityTab] = useState<'fitness' | 'social' | 'kids' | 'practical'>('fitness');

  // Affordability Calculator State
  const [propertyPrice, setPropertyPrice] = useState(5500000);
  const [loanAmount, setLoanAmount] = useState(4400000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.25);
  const [activeScenario, setActiveScenario] = useState<'live' | 'rent'>('live');

  // Lead Form Inputs (Bottom)
  const [bottomName, setBottomName] = useState('');
  const [bottomPhone, setBottomPhone] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomReq, setBottomReq] = useState('');
  const [bottomSubmitted, setBottomSubmitted] = useState(false);

  // Lead Form Inputs (Modal)
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal Open Handlers
  const openLeadModal = (source: string, title?: string, subtitle?: string) => {
    setLeadModalSource(source);
    if (title) setLeadModalTitle(title);
    if (subtitle) setLeadModalSubtitle(subtitle);
    setModalSubmitted(false);
    setLeadModalOpen(true);
  };

  const openVideoModal = (videoSrc: string) => {
    setVideoModalSrc(videoSrc);
    setVideoModalOpen(true);
  };

  const openImageModal = (imgSrc: string) => {
    setImageModalSrc(imgSrc);
    setImageModalOpen(true);
  };

  // Calculator logic
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const grossEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const taxSavings = 9500;
  const rentIncome = 20000;
  const netOutgoLive = Math.max(0, grossEmi - taxSavings);
  const netOutgoRent = Math.max(0, grossEmi - taxSavings - rentIncome);

  const formatINR = (val: number) => '₹' + val.toLocaleString('en-IN');

  const handlePropertySlider = (val: number) => {
    setPropertyPrice(val);
    setLoanAmount(Math.round(val * 0.8));
  };

  // Handle Form Submissions
  const handleBottomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bottomName,
          phone: bottomPhone,
          email: bottomEmail,
          requirement: bottomReq,
          source: 'footer_main_form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }
    setBottomSubmitted(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName,
          phone: modalPhone,
          source: leadModalSource,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }
    setModalSubmitted(true);
    setTimeout(() => {
      setLeadModalOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* §1 — FIXED HEADER NAVIGATION */}
      <header
        className={`header-nav ${isScrolled ? 'scrolled' : ''}`}
        id="mainHeader"
      >
        <div className="container header-container">
          <a href="#hero" className="header-logos">
            <img src="/logos/kura homes logo.png" alt="Kura Homes Logo" className="dev-logo" />
            <div className="divider"></div>
            <img src="/logos/hi-five logo 2.png" alt="Codename Hi-Five Logo" className="proj-logo" />
          </a>

          <nav className="nav-links">
            <a href="#hero" className="nav-link active">Overview</a>
            <a href="#pricing" className="nav-link">Homes</a>
            <a href="#amenities" className="nav-link">Lifestyle</a>
            <a href="#location" className="nav-link">Location</a>
            <a href="#progress" className="nav-link">Progress</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:8008008946" className="header-phone">
              <i className="fa-solid fa-phone"></i>
              <span>800 800 8946</span>
            </a>
            <button
              className="btn btn-primary"
              onClick={() => openLeadModal('header_cta', 'Book a Private Site Visit')}
            >
              Book Site Visit
            </button>
          </div>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            id="hamburgerBtn"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <nav className="mobile-menu-links">
          <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Overview</a>
          <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Homes & Pricing</a>
          <a href="#amenities" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Lifestyle</a>
          <a href="#location" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Location</a>
          <a href="#progress" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Progress</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </nav>
        <div className="mobile-menu-actions">
          <a href="tel:8008008946" className="btn btn-secondary">
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Call Sales Agent
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              openLeadModal('mobile_menu_cta', 'Schedule a Site Tour');
            }}
          >
            Book Site Visit
          </button>
        </div>
      </div>

      <main>
        {/* §2 — CINEMATIC HERO SECTION */}
        <section className="hero-sec" id="hero">
          <div className="hero-bg">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/Birds level view.webp" />
              <img src="/images/Front view.webp" alt="Codename Hi-Five Front View Render" />
            </picture>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badges-top">
                <span className="hero-badge-item">
                  <i className="fa-solid fa-file-signature text-accent" style={{ marginRight: '4px' }}></i> HMDA Approved
                </span>
                <span className="hero-badge-item">
                  <i className="fa-solid fa-shield-check text-accent" style={{ marginRight: '4px' }}></i> TG RERA: P02200002810
                </span>
              </div>
              <h1>Your Home at Hyderabad&apos;s ORR Exit-5</h1>
              <p>
                Luxurious 2 BHK & Duplex gated community homes starting from ₹55 Lakhs. Experience premium living with 70%
                open spaces, adjacent to Bowrampet forests.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => openLeadModal('hero_main_cta', 'Book a Private Site Tour')}
                >
                  Book a Private Site Tour
                </button>
                <button
                  className="btn-play-tour"
                  id="heroPlayBtn"
                  aria-label="Watch Project Tour video"
                  onClick={() => openVideoModal('/videos/hero-video.mp4')}
                >
                  <span className="play-icon-wrap">
                    <i className="fa-solid fa-play"></i>
                  </span>
                  <span>Watch Project Film</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* §3 — KEY SNAPSHOT STRIP */}
        <section className="snapshot-strip">
          <div className="container">
            <div className="snapshot-grid">
              <div className="snapshot-card">
                <i className="fa-solid fa-layer-group"></i>
                <span className="val">5.3 Acres</span>
                <span className="lbl">Gated Township</span>
              </div>
              <div className="snapshot-card">
                <i className="fa-solid fa-hotel"></i>
                <span className="val">2 BHK & Duplex</span>
                <span className="lbl">Smart Layouts</span>
              </div>
              <div className="snapshot-card">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <span className="val">₹4,999/sft</span>
                <span className="lbl">Starting price</span>
              </div>
              <div className="snapshot-card">
                <i className="fa-solid fa-up-down-left-right"></i>
                <span className="val">1,100 - 2,200</span>
                <span className="lbl">Sq.Ft Carpet Area</span>
              </div>
              <div className="snapshot-card">
                <i className="fa-solid fa-map-location-dot"></i>
                <span className="val">1 Min</span>
                <span className="lbl">To ORR Exit 5</span>
              </div>
              <div className="snapshot-card">
                <i className="fa-solid fa-trowel-bricks"></i>
                <span className="val">90% Built</span>
                <span className="lbl">Possession Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* §4 — ABOUT CODENAME HI-FIVE */}
        <section className="section section-dark about-section" id="overview">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <div className="section-header">
                  <span className="tag">The Vision</span>
                  <h2>Where Gated Luxury Meets Untouched Nature</h2>
                </div>
                <p>
                  Codename Hi-Five by Kura Homes is a benchmark residential community crafted with 55 years of developer
                  legacy. Located directly adjacent to the tranquil Bowrampet reserve forests, this gated address offers a
                  unique microclimate that stays cooler year-round, while placing you just minutes from Hyderabad&apos;s premier
                  IT and educational hubs.
                </p>

                <div className="about-mini-stats">
                  <div className="mini-stat-card">
                    <span className="num">500+</span>
                    <span className="desc">Homes Booked Already</span>
                  </div>
                  <div className="mini-stat-card">
                    <span className="num">40+</span>
                    <span className="desc">Lifestyle Amenities</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => openLeadModal('about_visit_cta', 'Schedule a Private Site Visit')}
                >
                  <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Schedule a Private Visit
                </button>
              </div>
              <div className="about-visual">
                <img src="/images/community view.webp" alt="Codename Hi-Five Community Overhead View" />
              </div>
            </div>
          </div>
        </section>

        {/* §5 — CONFIGURATIONS & PRICING */}
        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-header text-center">
              <span className="tag">Configurations</span>
              <h2>Explore Available Layouts & Sizes</h2>
              <p style={{ margin: '0 auto' }}>
                Select from space-optimized 2 BHK configurations or expansive double-height Duplex suites.
              </p>
            </div>

            <div className="pricing-grid">
              {/* 2 BHK Card */}
              <div className="pricing-card">
                <span className="card-badge">Smart Luxe</span>
                <h3>Premium 2 BHK Homes</h3>
                <span className="price-main">₹55 Lakhs*</span>
                <span className="price-sub">Starting price at ₹4,999/sq.ft onwards</span>
                <ul className="pricing-specs">
                  <li><i className="fa-solid fa-circle-check"></i> 1,100 to 1,285 Sq.Ft configurations</li>
                  <li><i className="fa-solid fa-circle-check"></i> 100% Vaastu Compliant Layouts</li>
                  <li><i className="fa-solid fa-circle-check"></i> East & West facing entrance choices</li>
                  <li><i className="fa-solid fa-circle-check"></i> Cross-ventilated living space with grand balconies</li>
                </ul>

                {/* Gated Floor Plan Preview */}
                <div
                  className="floorplan-vault"
                  onClick={() => openLeadModal('floorplan_2bhk', 'Unlock 2 BHK Blueprints & CAD Plans')}
                >
                  <img src="/images/bedroom 1.webp" alt="Blurred Floor Plan blueprint" className="floorplan-blur" />
                  <div className="vault-overlay">
                    <i className="fa-solid fa-lock"></i>
                    <span>Unlock 2 BHK Blueprints</span>
                  </div>
                </div>
              </div>

              {/* Duplex Card */}
              <div className="pricing-card">
                <span className="card-badge">Luxury Penthouse</span>
                <h3>Bespoke Duplex Suites</h3>
                <span className="price-main">₹95 Lakhs*</span>
                <span className="price-sub">Starting price at ₹4,999/sq.ft onwards</span>
                <ul className="pricing-specs">
                  <li><i className="fa-solid fa-circle-check"></i> 1,850 to 2,200 Sq.Ft duplex layouts</li>
                  <li><i className="fa-solid fa-circle-check"></i> Double-height ceiling architectural living</li>
                  <li><i className="fa-solid fa-circle-check"></i> Private terrace deck with green forest views</li>
                  <li><i className="fa-solid fa-circle-check"></i> Master bedroom penthouse suites on upper level</li>
                </ul>

                {/* Gated Floor Plan Preview */}
                <div
                  className="floorplan-vault"
                  onClick={() => openLeadModal('floorplan_duplex', 'Unlock Duplex Penthouse Blueprints')}
                >
                  <img src="/images/Master bedroom.webp" alt="Blurred Floor Plan blueprint" className="floorplan-blur" />
                  <div className="vault-overlay">
                    <i className="fa-solid fa-lock"></i>
                    <span>Unlock Duplex Blueprints</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-action-bottom">
              <button
                className="btn btn-primary"
                onClick={() => openLeadModal('pricing_summary_cta', 'Get Detailed Pricing & Availability')}
              >
                Get Detailed Pricing & Availability
              </button>
            </div>
          </div>
        </section>

        {/* §6 — AFFORDABILITY STUDIO */}
        <section className="section affordability-studio" id="calculators">
          <div className="container">
            <div className="section-header text-center">
              <span className="tag">Financial Studio</span>
              <h2>The True Cost of Homeownership</h2>
              <p style={{ margin: '0 auto' }}>
                Adjust the calculators to see why buying a home here can cost less than paying rent.
              </p>
            </div>

            <div className="studio-card">
              <div className="studio-sliders">
                <h3 className="font-editorial" style={{ marginBottom: '24px' }}>Adjust Loan Parameters</h3>

                {/* Slider 1 */}
                <div className="slider-group">
                  <div className="slider-lbl-row">
                    <span>Property Value</span>
                    <span>{formatINR(propertyPrice)}</span>
                  </div>
                  <input
                    type="range"
                    className="calc-slider"
                    min={5500000}
                    max={15000000}
                    step={100000}
                    value={propertyPrice}
                    onChange={(e) => handlePropertySlider(Number(e.target.value))}
                  />
                </div>

                {/* Slider 2 */}
                <div className="slider-group">
                  <div className="slider-lbl-row">
                    <span>Home Loan Amount</span>
                    <span>{formatINR(loanAmount)}</span>
                  </div>
                  <input
                    type="range"
                    className="calc-slider"
                    min={2000000}
                    max={propertyPrice}
                    step={50000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </div>

                {/* Slider 3 */}
                <div className="slider-group">
                  <div className="slider-lbl-row">
                    <span>Tenure (Years)</span>
                    <span>{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    className="calc-slider"
                    min={5}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                  />
                </div>

                {/* Slider 4 */}
                <div className="slider-group">
                  <div className="slider-lbl-row">
                    <span>Interest Rate</span>
                    <span>{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    className="calc-slider"
                    min={7}
                    max={12}
                    step={0.05}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                </div>

                {/* Accordion Disclaimer */}
                <div className="calc-disclaimer">
                  <details>
                    <summary>Calculation Assumptions & Tax Benefits</summary>
                    <p>
                      Calculations assume interest computed monthly on reducing balance. Old Tax Regime Section 24(b)
                      deduction applies to interest paid up to ₹2,00,000 annually, yielding a net monthly tax saving of up
                      to ₹9,500 for tax brackets of 30%+ surcharge. Rental estimate of ₹20,000 is based on typical 2 BHK
                      lease rates in Bowrampet-Dundigal corridor. Consult a CA for advice tailored to your tax profile.
                    </p>
                  </details>
                </div>
              </div>

              <div className="studio-output">
                <div className="toggle-scenarios">
                  <button
                    className={`toggle-btn ${activeScenario === 'live' ? 'active' : ''}`}
                    onClick={() => setActiveScenario('live')}
                  >
                    Live Here (Owner Occupied)
                  </button>
                  <button
                    className={`toggle-btn ${activeScenario === 'rent' ? 'active' : ''}`}
                    onClick={() => setActiveScenario('rent')}
                  >
                    Smart Investment (Rent Out)
                  </button>
                </div>

                <div className="outgo-display">
                  <span className="outgo-lbl">
                    {activeScenario === 'live' ? 'Net Monthly Cost of Ownership' : 'Net Monthly Cashflow Outflow'}
                  </span>
                  <span className="outgo-val">
                    {formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}
                  </span>
                </div>

                <div className="calc-breakdown-rows">
                  <div className="calc-row">
                    <span>Gross Monthly EMI</span>
                    <span>{formatINR(grossEmi)}</span>
                  </div>
                  <div className="calc-row">
                    <span>Old Regime Sec 24(b) Savings</span>
                    <span className="text-emerald">- ₹9,500</span>
                  </div>
                  {activeScenario === 'rent' && (
                    <div className="calc-row">
                      <span>Estimated Rental Income</span>
                      <span className="text-emerald">- ₹20,000</span>
                    </div>
                  )}
                  <div className="calc-row net-row">
                    <span>Net Outgo / Month</span>
                    <span>{formatINR(activeScenario === 'live' ? netOutgoLive : netOutgoRent)}</span>
                  </div>
                </div>

                <button
                  className="btn btn-secondary"
                  style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)', marginTop: 'auto' }}
                  onClick={() => openLeadModal('calculator_emi_cta', 'Check Home Loan Eligibility & Bank Offers')}
                >
                  Check Eligibility Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* §7 — LOCATION & CONNECTIVITY */}
        <section className="section location-section" id="location">
          <div className="container">
            <div className="section-header">
              <span className="tag">Connectivity Hub</span>
              <h2>At the Core of Hyderabad&apos;s Growth Path</h2>
              <p>
                Situated adjacent to ORR Exit 5, Dundigal/Bowrampet Road offers rapid transit access to central hubs and
                elite destinations.
              </p>
            </div>

            <div className="location-highlights-strip">
              <div className="loc-badge-card">
                <i className="fa-solid fa-road"></i>
                <span className="num">1 Min</span>
                <span className="txt">From ORR Exit 5</span>
              </div>
              <div className="loc-badge-card">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="num">25+</span>
                <span className="txt">Schools Within 15 Min</span>
              </div>
              <div className="loc-badge-card">
                <i className="fa-solid fa-tree"></i>
                <span className="num">3</span>
                <span className="txt">Reserve Forests Nearby</span>
              </div>
              <div className="loc-badge-card">
                <i className="fa-solid fa-briefcase"></i>
                <span className="num">15 Min</span>
                <span className="txt">To tech corridors</span>
              </div>
            </div>

            <div className="location-wrapper">
              {/* Left: Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.9664539121703!2d78.3846663!3d17.5562725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f3cf2559e4b%3A0xe54e3d360ef3a7a!2sKURA%20HOMES!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>

              {/* Right: Distance Matrix */}
              <div className="connectivity-card">
                <div className="connectivity-tabs" id="locTabContainer">
                  <button
                    className={`conn-tab-btn ${activeLocTab === 'schools' ? 'active' : ''}`}
                    onClick={() => setActiveLocTab('schools')}
                  >
                    Education
                  </button>
                  <button
                    className={`conn-tab-btn ${activeLocTab === 'tech' ? 'active' : ''}`}
                    onClick={() => setActiveLocTab('tech')}
                  >
                    IT & Pharma
                  </button>
                  <button
                    className={`conn-tab-btn ${activeLocTab === 'health' ? 'active' : ''}`}
                    onClick={() => setActiveLocTab('health')}
                  >
                    Hospitals
                  </button>
                  <button
                    className={`conn-tab-btn ${activeLocTab === 'transit' ? 'active' : ''}`}
                    onClick={() => setActiveLocTab('transit')}
                  >
                    Transit & Shop
                  </button>
                </div>

                {/* Tab 1: Education */}
                {activeLocTab === 'schools' && (
                  <div className="conn-tab-pane active" id="pane-schools">
                    <div className="conn-list-item"><span className="name">IARE College</span><span className="dist">2 Min</span></div>
                    <div className="conn-list-item"><span className="name">Ryan International School</span><span className="dist">2 Min</span></div>
                    <div className="conn-list-item"><span className="name">Sriveda Global School</span><span className="dist">2 Min</span></div>
                    <div className="conn-list-item"><span className="name">Laurus The Universal School</span><span className="dist">5 Min</span></div>
                    <div className="conn-list-item"><span className="name">Oakridge International School</span><span className="dist">8 Min</span></div>
                    <div className="conn-list-item"><span className="name">Delhi Public School (DPS)</span><span className="dist">11 Min</span></div>
                  </div>
                )}

                {/* Tab 2: Tech */}
                {activeLocTab === 'tech' && (
                  <div className="conn-tab-pane active" id="pane-tech">
                    <div className="conn-list-item"><span className="name">Tech Mahindra Campus</span><span className="dist">10 Min</span></div>
                    <div className="conn-list-item"><span className="name">Aurobindo Pharma Hub</span><span className="dist">10 Min</span></div>
                    <div className="conn-list-item"><span className="name">Jeedimetla Industrial Area</span><span className="dist">10 Min</span></div>
                    <div className="conn-list-item"><span className="name">Medical Devices Cluster Park</span><span className="dist">15 Min</span></div>
                    <div className="conn-list-item"><span className="name">Kandlakoya IT Gateway Park</span><span className="dist">18 Min</span></div>
                  </div>
                )}

                {/* Tab 3: Health */}
                {activeLocTab === 'health' && (
                  <div className="conn-tab-pane active" id="pane-health">
                    <div className="conn-list-item"><span className="name">Subhakara Multispeciality Hospital</span><span className="dist">10 Min</span></div>
                    <div className="conn-list-item"><span className="name">Malla Reddy Narayana Hospital</span><span className="dist">15 Min</span></div>
                    <div className="conn-list-item"><span className="name">Usha Mullapudi Cardiac Centre</span><span className="dist">20 Min</span></div>
                    <div className="conn-list-item"><span className="name">SLG Hospital (Bachupally)</span><span className="dist">25 Min</span></div>
                  </div>
                )}

                {/* Tab 4: Transit */}
                {activeLocTab === 'transit' && (
                  <div className="conn-tab-pane active" id="pane-transit">
                    <div className="conn-list-item"><span className="name">ORR Exit 5 (Gandimaisamma)</span><span className="dist">1 Min</span></div>
                    <div className="conn-list-item"><span className="name">Kukatpally Retail Street</span><span className="dist">20 Min</span></div>
                    <div className="conn-list-item"><span className="name">JNTU Metro Station</span><span className="dist">25 Min</span></div>
                    <div className="conn-list-item"><span className="name">IKEA & Inorbit Mall (Hitech City)</span><span className="dist">35 Min</span></div>
                    <div className="conn-list-item"><span className="name">Rajiv Gandhi Int. Airport</span><span className="dist">50 Min</span></div>
                  </div>
                )}

                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '24px', alignSelf: 'flex-start' }}
                  onClick={() => openLeadModal('location_details_cta', 'Request Complete Location Guide')}
                >
                  Request Location Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* §8 — CLUBHOUSE & AMENITIES */}
        <section className="section amenities-section" id="amenities">
          <div className="container">
            <div className="section-header text-center">
              <span className="tag">Lifestyle</span>
              <h2>25,000 Sq.Ft Clubhouse & 40+ Amenities</h2>
              <p style={{ margin: '0 auto' }}>Enjoy curated zones built for health, recreation, co-working, and family time.</p>
            </div>

            <div className="amenities-tabs-header" id="amenityTabContainer">
              <button
                className={`amenity-tab-btn ${activeAmenityTab === 'fitness' ? 'active' : ''}`}
                onClick={() => setActiveAmenityTab('fitness')}
              >
                Fitness & Pool
              </button>
              <button
                className={`amenity-tab-btn ${activeAmenityTab === 'social' ? 'active' : ''}`}
                onClick={() => setActiveAmenityTab('social')}
              >
                Co-Work & Social
              </button>
              <button
                className={`amenity-tab-btn ${activeAmenityTab === 'kids' ? 'active' : ''}`}
                onClick={() => setActiveAmenityTab('kids')}
              >
                Kids & Outdoors
              </button>
              <button
                className={`amenity-tab-btn ${activeAmenityTab === 'practical' ? 'active' : ''}`}
                onClick={() => setActiveAmenityTab('practical')}
              >
                Practical Conveniences
              </button>
            </div>

            {/* Tab 1: Fitness */}
            {activeAmenityTab === 'fitness' && (
              <div className="amenity-tab-pane active" id="pane-fit">
                <div className="amenity-grid-content">
                  <div className="amenity-tile"><i className="fa-solid fa-water-ladder"></i> <span>Rooftop Infinity Pool</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-dumbbell"></i> <span>AC Gymnasium</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-mattress-pillow"></i> <span>Aerobics & Yoga Studio</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-person-running"></i> <span>Jogging & Walking Track</span></div>
                </div>
                <div className="amenity-visual">
                  <img src="/images/swimming pool.webp" alt="Rooftop Swimming Pool Render" />
                </div>
              </div>
            )}

            {/* Tab 2: Social */}
            {activeAmenityTab === 'social' && (
              <div className="amenity-tab-pane active" id="pane-soc">
                <div className="amenity-grid-content">
                  <div className="amenity-tile"><i className="fa-solid fa-laptop-code"></i> <span>Luxe Co-working Space</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-glass-cheers"></i> <span>Multipurpose Banquet Hall</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-couch"></i> <span>Grand Reception Foyer</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-bed"></i> <span>Fully-Furnished Guest Rooms</span></div>
                </div>
                <div className="amenity-visual">
                  <img src="/images/club view.webp" alt="25K Sq.Ft Clubhouse Lounge" />
                </div>
              </div>
            )}

            {/* Tab 3: Kids */}
            {activeAmenityTab === 'kids' && (
              <div className="amenity-tab-pane active" id="pane-kid">
                <div className="amenity-grid-content">
                  <div className="amenity-tile"><i className="fa-solid fa-child-reaching"></i> <span>Traffic-Free Children&apos;s Play Area</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-baseball-bat-ball"></i> <span>Net Cricket Practice Courts</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-basketball"></i> <span>Half Basketball Court</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-bicycle"></i> <span>Dedicated Cycling Track</span></div>
                </div>
                <div className="amenity-visual">
                  <img src="/images/Childrens Play area.webp" alt="Kids Adventure Play Zone" />
                </div>
              </div>
            )}

            {/* Tab 4: Practical */}
            {activeAmenityTab === 'practical' && (
              <div className="amenity-tab-pane active" id="pane-prac">
                <div className="amenity-grid-content">
                  <div className="amenity-tile"><i className="fa-solid fa-charging-station"></i> <span>EV Charging Stations</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-vault"></i> <span>Safety Locker Facility</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-scissors"></i> <span>In-house Salon Room</span></div>
                  <div className="amenity-tile"><i className="fa-solid fa-building-shield"></i> <span>24/7 Gated Security & CCTV</span></div>
                </div>
                <div className="amenity-visual">
                  <img src="/images/Basket ball court.webp" alt="Outdoor sports arena" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* §9 — EXTERIOR & INTERIOR GALLERY */}
        <section className="section gallery-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="tag">Exteriors & Interiors</span>
              <h2>Crafted Architecture, Captured Live</h2>
              <p style={{ margin: '0 auto' }}>Click or tap to view full high-resolution imagery.</p>
            </div>

            {/* Carousel 1: Exteriors */}
            <h3 className="gallery-sub-header">Gated Township & Architecture</h3>
            <div className="gallery-carousel">
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Front view.webp')}>
                <img src="/images/Front view.webp" alt="Gated community front entrance facade" />
                <div className="caption">Grand Gated Entrance & Security Hub</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Side view.webp')}>
                <img src="/images/Side view.webp" alt="Building elevation from side path" />
                <div className="caption">Modern Tower Elevation & Linear Rhythms</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Street view.webp')}>
                <img src="/images/Street view.webp" alt="Street pathway with architectural landscaping" />
                <div className="caption">Landscaped Driveways & Pedestrian Paths</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/community view.webp')}>
                <img src="/images/community view.webp" alt="Overhead architectural community layout" />
                <div className="caption">5.3 Acre Masterplanned Gated Community</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/water body.webp')}>
                <img src="/images/water body.webp" alt="Water body plaza feature render" />
                <div className="caption">Central Water Body & Zen Plaza</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Night Aerial.webp')}>
                <img src="/images/Night Aerial.webp" alt="Aerial view of community at night" />
                <div className="caption">Illuminated Night Aerial Overview</div>
              </div>
            </div>

            {/* Carousel 2: Interiors */}
            <h3 className="gallery-sub-header">Model Flat Interiors</h3>
            <div className="gallery-carousel">
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Living room.webp')}>
                <img src="/images/Living room.webp" alt="Spacious interior living room decoration" />
                <div className="caption">Elegant Formal Living Lounge</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Dining area.webp')}>
                <img src="/images/Dining area.webp" alt="Dining room table layout model flat" />
                <div className="caption">Open-Plan Dining & Entertaining Zone</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Kitchen.webp')}>
                <img src="/images/Kitchen.webp" alt="Modern modular kitchen setup" />
                <div className="caption">Modular Kitchen with Premium Fittings</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Master bedroom.webp')}>
                <img src="/images/Master bedroom.webp" alt="Master bedroom with sliding closet doors" />
                <div className="caption">Master Bedroom Penthouse Suite</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/Bedroom detail.webp')}>
                <img src="/images/Bedroom detail.webp" alt="Bedroom detail shot closet and desk" />
                <div className="caption">Bespoke Fitting & Storage Details</div>
              </div>
              <div className="gallery-card lightbox-trigger" onClick={() => openImageModal('/images/bedroom 1.webp')}>
                <img src="/images/bedroom 1.webp" alt="Secondary guest bedroom setup" />
                <div className="caption">Smart 2nd Bedroom Plan</div>
              </div>
            </div>
          </div>
        </section>

        {/* §10 — CONSTRUCTION MILESTONES */}
        <section className="section section-dark progress-section" id="progress">
          <div className="container">
            <div className="progress-grid">
              <div className="progress-info">
                <div className="section-header">
                  <span className="tag">Development Status</span>
                  <h2>Real Progress. RERA Verified.</h2>
                </div>
                <p>
                  Codename Hi-Five is constructed using high-quality structural specifications. We are currently at 90%
                  completion status, with final finishes, landscape architecture, and test systems underway. See the on-site
                  progress video on the right.
                </p>

                <div className="bar-wrapper">
                  <div className="bar-label">
                    <span>Construction Milestones</span>
                    <span>90% Complete</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <ul className="progress-meta">
                  <li><i className="fa-solid fa-circle-check"></i> Superstructure & Masonry: 100% Completed</li>
                  <li><i className="fa-solid fa-circle-check"></i> Internal Plastering & Electrical: 95% Completed</li>
                  <li><i className="fa-solid fa-circle-check"></i> Finishing & Flooring: Underway</li>
                  <li><i className="fa-solid fa-shield-check text-accent"></i> Verified on TG RERA Portal Registration: P02200002810</li>
                </ul>

                <button
                  className="btn btn-primary"
                  onClick={() => openLeadModal('progress_site_visit_cta', 'Book a Physical Progress Tour')}
                >
                  <i className="fa-solid fa-eye" style={{ marginRight: '8px' }}></i> Book a Physical Progress Tour
                </button>
              </div>

              <div className="progress-video">
                <video controls poster="/images/Side view.webp" preload="none">
                  <source src="/videos/construction-progress.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* §11 — PERSPECTIVES / VIDEO REELS */}
        <section className="section perspectives-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="tag">Watch & Decide</span>
              <h2>Explore Core Project Perspectives</h2>
              <p style={{ margin: '0 auto' }}>
                Hear about location dynamics, architectural layouts, and corridor financial strategies.
              </p>
            </div>

            <div className="perspectives-grid">
              {/* Card 1 */}
              <div className="perspective-card">
                <div
                  className="perspective-video-cover play-video-trigger"
                  onClick={() => openVideoModal('/videos/why-this-location.mp4')}
                >
                  <img src="/images/Street view.webp" alt="Location perspective video thumbnail" />
                  <span className="play-badge-icon">
                    <i className="fa-solid fa-play"></i>
                  </span>
                </div>
                <div className="perspective-info">
                  <h3>Why ORR Exit-5 Corridor?</h3>
                  <p>
                    An in-depth look at proximity metrics to international schools, pharmaceutical parks, and the ORR loop
                    transit advantage.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="perspective-card">
                <div
                  className="perspective-video-cover play-video-trigger"
                  onClick={() => openVideoModal('/videos/investment.mp4')}
                >
                  <img src="/images/community view.webp" alt="Investment growth perspective video thumbnail" />
                  <span className="play-badge-icon">
                    <i className="fa-solid fa-play"></i>
                  </span>
                </div>
                <div className="perspective-info">
                  <h3>Investment Appreciation Value</h3>
                  <p>
                    Comparing entry pricing of ORR 5 at ₹4,999/sq.ft with older corridors of ORR 3 (₹9K-10K/sq.ft) and
                    historical growth curves.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="perspective-card">
                <div
                  className="perspective-video-cover play-video-trigger"
                  onClick={() => openVideoModal('/videos/Design.mp4')}
                >
                  <img src="/images/Living room.webp" alt="Vaastu and design perspective video thumbnail" />
                  <span className="play-badge-icon">
                    <i className="fa-solid fa-play"></i>
                  </span>
                </div>
                <div className="perspective-info">
                  <h3>Vaastu & Spaces Philosophy</h3>
                  <p>
                    Our chief architect explains the Vaastu-compliant flow, cross-ventilated bedroom placements, and
                    zero-corridor design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* §12 — DEVELOPER HERITAGE */}
        <section className="section developer-heritage">
          <div className="container">
            <div className="heritage-container">
              <img src="/logos/kura homes logo.png" alt="Kura Homes Brand Logo" className="heritage-logo" />
              <h2>55 Years of Crafted Trust</h2>
              <p>
                Kura Homes has been an integral part of Hyderabad&apos;s housing development journey. Grounded in transparency,
                structural superiority, and timely handovers, we deliver communities that stand as long-term wealth
                generators for our families.
              </p>

              <div className="heritage-stats">
                <div className="heritage-stat-card">
                  <span className="num">55+</span>
                  <span className="lbl">Years Legacy</span>
                </div>
                <div className="heritage-stat-card">
                  <span className="num">500+</span>
                  <span className="lbl">Families at Hi-Five</span>
                </div>
                <div className="heritage-stat-card">
                  <span className="num">5.3</span>
                  <span className="lbl">Acres Gated Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* §13 — CONVERSION HUB & FORM */}
        <section className="section section-dark conversion-hub" id="contact">
          <div className="container">
            <div className="conversion-wrapper">
              <div className="hub-text">
                <h2>Ready to Choose Your Next Address?</h2>
                <p>
                  Connect with a Kura Homes project advisor today. Get complete pricing breakdowns, structural layout
                  blueprints, and schedule an exclusive site visit.
                </p>

                <div className="trust-promises">
                  <div className="promise-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Guaranteed callback within 2 hours</span>
                  </div>
                  <div className="promise-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Complimentary private vehicle site visit</span>
                  </div>
                  <div className="promise-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Complete transparent legal & RERA documentation</span>
                  </div>
                </div>

                <div className="direct-box">
                  <span className="lbl">Speak to Sales Advisor Direct</span>
                  <div className="direct-num">
                    <a href="tel:8008008946">
                      <i className="fa-solid fa-phone text-accent" style={{ marginRight: '8px' }}></i> 800 800 8946
                    </a>
                  </div>
                </div>
              </div>

              <div className="form-card">
                {bottomSubmitted ? (
                  <div className="text-center py-8">
                    <i className="fa-solid fa-circle-check text-accent" style={{ fontSize: '3rem', marginBottom: '16px' }}></i>
                    <h3>Enquiry Received!</h3>
                    <p>Thank you. Our project advisor will contact you on WhatsApp / Phone shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3>Request Instant Project Details</h3>
                    <p>Provide your details below to receive the brochure & floor plans via WhatsApp.</p>

                    <form id="bottomEnquiryForm" className="lead-generation-form" onSubmit={handleBottomSubmit}>
                      <div className="form-group">
                        <label htmlFor="footer-name" style={{ display: 'none' }}>Full Name</label>
                        <input
                          type="text"
                          id="footer-name"
                          className="form-control"
                          placeholder="Full Name *"
                          required
                          value={bottomName}
                          onChange={(e) => setBottomName(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="footer-phone" style={{ display: 'none' }}>Mobile Number</label>
                        <input
                          type="tel"
                          id="footer-phone"
                          className="form-control"
                          placeholder="10-Digit Mobile Number *"
                          required
                          pattern="[0-9]{10}"
                          value={bottomPhone}
                          onChange={(e) => setBottomPhone(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="footer-email" style={{ display: 'none' }}>Email Address</label>
                        <input
                          type="email"
                          id="footer-email"
                          className="form-control"
                          placeholder="Email Address (Optional)"
                          value={bottomEmail}
                          onChange={(e) => setBottomEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="footer-requirement" style={{ display: 'none' }}>Preferred Configuration</label>
                        <select
                          id="footer-requirement"
                          className="form-control form-control-select"
                          value={bottomReq}
                          onChange={(e) => setBottomReq(e.target.value)}
                        >
                          <option value="" disabled>Preferred Configuration (Optional)</option>
                          <option value="2 BHK">Smart 2 BHK Apartment</option>
                          <option value="Duplex">Bespoke Duplex Suite</option>
                          <option value="Not Decided">Undecided / Need Details</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                        Submit Enquiry & Get Details
                      </button>

                      <p className="consent-txt">
                        By submitting, you consent to Kura Homes calling or sending project details on SMS/WhatsApp. We respect your privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* §14 — LEGAL COMPLIANCE FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logos">
                <img src="/logos/kura homes logo.png" alt="Kura Homes Logo" />
                <img src="/logos/hi-five logo 2.png" alt="Hi-Five Logo" style={{ height: '24px' }} />
              </div>
              <p>
                Codename Hi-Five is a premium gated residential development by Kura Homes, bringing 55 years of trust,
                structural excellence, and design legacy to the high-growth ORR Exit 5 corridor, Hyderabad.
              </p>
            </div>

            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Overview</a></li>
                <li><a href="#pricing">Homes & Pricing</a></li>
                <li><a href="#calculators">Affordability</a></li>
                <li><a href="#location">Location Hub</a></li>
                <li><a href="#amenities">Lifestyle Amenities</a></li>
                <li><a href="#progress">Progress</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Location Details</h4>
              <p>
                <i className="fa-solid fa-map-location text-accent" style={{ marginRight: '8px' }}></i> Adjacent to ORR Exit No. 5,
                Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043
              </p>
              <div className="footer-legal-badges">
                <a href="https://tsrera.telangana.gov.in" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-shield-check"></i> TG RERA Reg: P02200002810
                </a>
                <p style={{ margin: 0 }}>
                  <i className="fa-solid fa-file-invoice" style={{ marginRight: '8px' }}></i> HMDA Approval: G1/DM/2237/BP/2021
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-disclaimer">
              Important Disclaimer: Calculated figures (EMI, tax savings, rentals), layout graphics, and location proximity
              drive-times shown on this page are indicative models only and do not represent a financial contract, investment
              advice, or guaranteed yield curves. Home loans are subject to approval policies of underwriting banks. Tax benefits
              depend on the individual&apos;s choice of old tax regime options and CA advice. All construction timelines are
              referenced under TG RERA filings P02200002810.
            </p>
            <p className="footer-copy">© 2026 Kura Homes. All rights reserved. Developed by Antigravity under client approval.</p>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM STICKY CONVERSION DOCK */}
      <div className="mobile-sticky-dock" id="mobileStickyDock" style={{ display: isScrolled ? 'block' : 'none' }}>
        <div className="mobile-dock-grid">
          <button
            className="dock-btn"
            onClick={() => openLeadModal('mobile_dock_visit', 'Book a Private Site Visit')}
          >
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Visit</span>
          </button>
          <a
            href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20breakdown."
            className="dock-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
            <span>WhatsApp</span>
          </a>
          <a href="tel:8008008946" className="dock-btn dock-btn-accent">
            <i className="fa-solid fa-phone"></i>
            <span>Call Agent</span>
          </a>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20breakdown."
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kura Homes on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* UNIVERSAL MODALS */}

      {/* Lead Capture Modal */}
      {leadModalOpen && (
        <div className="modal-overlay active" id="leadCaptureModal">
          <div className="modal-wrapper">
            <button
              className="modal-close-btn"
              aria-label="Close Modal"
              onClick={() => setLeadModalOpen(false)}
            >
              &times;
            </button>
            <div className="modal-body">
              {modalSubmitted ? (
                <div className="text-center py-6">
                  <i className="fa-solid fa-circle-check text-accent" style={{ fontSize: '3rem', marginBottom: '12px' }}></i>
                  <h3 className="font-editorial">Thank You!</h3>
                  <p>Your request has been received. Our sales advisor will share the details with you via WhatsApp.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-editorial" id="modalHeading">{leadModalTitle}</h3>
                  <p id="modalSubheading">{leadModalSubtitle}</p>

                  <form id="modalEnquiryForm" className="lead-generation-form" style={{ marginTop: '20px' }} onSubmit={handleModalSubmit}>
                    <div className="form-group">
                      <label htmlFor="modal-name" style={{ display: 'none' }}>Full Name</label>
                      <input
                        type="text"
                        id="modal-name"
                        className="form-control"
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
                        className="form-control"
                        placeholder="10-Digit Mobile Number *"
                        required
                        pattern="[0-9]{10}"
                        value={modalPhone}
                        onChange={(e) => setModalPhone(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      Get Instant Details
                    </button>

                    <p className="consent-txt">
                      By submitting, you consent to Kura Homes sharing details with you via call / WhatsApp.
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
              onClick={() => {
                setVideoModalOpen(false);
                setVideoModalSrc('');
              }}
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
              onClick={() => {
                setImageModalOpen(false);
                setImageModalSrc('');
              }}
            >
              &times;
            </button>
            <img id="lightboxImg" src={imageModalSrc} alt="Enlarged photo view" />
          </div>
        </div>
      )}
    </>
  );
}
