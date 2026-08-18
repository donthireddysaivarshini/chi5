# DESIGN.md — Codename Hi-Five by Kura Homes
## Landing Page UX Strategy, Reference Analysis & Bespoke Design Architecture

---

# PART I — INDEPENDENT REFERENCE WEBSITE ANALYSIS

> **Note:** SpeedHousing has been deliberately excluded from this analysis per client direction. The following 7 references are analyzed independently to extract conversion principles, UX patterns, and design inspiration — not to copy.

---

## REFERENCE 01 — SUNSHINE GREEN MEADOWS

**URL:** `https://sunshineinfra.in/sunshine-green-meadows/index.html`
**Project:** 236 units of 2 & 3 BHK apartments in Bowrampet, Medchal, Hyderabad (2.87 acres, 4 blocks)

### Overall Design Direction
Dark, warm, parallax-heavy editorial aesthetic. Uses large background imagery with overlaid text. Feels like a luxury hospitality site adapted for real estate.

### Target Audience
Middle-class first-time buyers and young families in the Bowrampet/Medchal growth corridor. Price-conscious but aspiring to gated community lifestyle.

### Primary Conversion Goal
Enquiry form submission + WhatsApp-driven brochure download (brochure download triggers WhatsApp conversation).

### Hero Strategy
Full-width background image with parallax. Bold aspirational headline ("Indulge in the Epitome of Refined Living"). Scroll-down arrow button. No immediate product/pricing info in hero — purely atmospheric.

### Section Structure
```
Hero (atmospheric image + headline)
↓
Project Overview (stats: 2.87 acres, 4 blocks, 236 apts, 2&3 BHK)
↓
Image Carousel (3-slide swiper)
↓
About / "Locale of Dreams" (split image + text)
↓
YouTube Video Embed
↓
Project Highlights (22-icon grid: HMDA, clubhouse, pool, cricket, vaastu, etc.)
↓
Amenities (image + text split with feature list)
↓
Amenity Gallery (4-slide carousel)
↓
Location (text + description)
↓
Google Maps Embed
↓
Proximity Cards (3×2 grid: Proximity, Schools, Hospitals, Connectivity, Conveniences)
↓
Floor Plans (tabbed: Master Plan, Block A/B/C/D)
↓
Contact Form ("Can't wait to know more? Let's talk!")
↓
Sticky Bottom Bar (Call Now + Download Brochure)
↓
Footer (address, RERA, socials)
↓
Popup Enquiry Form
```

### What Works
- **Project stats displayed as large numbers** (2.87 Acres, 4 Blocks, 236 Apartments) — immediately communicates scale
- **Tabbed floor plans by block** — clean way to show multiple options without clutter
- **Proximity cards organized by category** (Schools, Hospitals, Connectivity) — practical, scannable
- **Sticky bottom bar on mobile** (Call + Download Brochure) — always-available conversion
- **YouTube video embed** — real project video builds authenticity
- **WhatsApp-triggered brochure download** — captures lead through conversation

### What Doesn't Work
- **22-icon project highlights grid** — overwhelming, no hierarchy, visitors can't absorb 22 features at once
- **Aspirational headline with no specifics** — "Epitome of Refined Living" says nothing about what/where/how much
- **No pricing visible anywhere** — forces visitor to enquire just to know if it's affordable
- **Preloader animation** — adds perceived latency, unacceptable for paid traffic
- **Floor plan images link to WhatsApp** rather than being viewable — frustrating UX

### What We Should Learn
- Large stat counters create impact (learn the pattern)
- Category-based proximity cards are practical (learn the organization)
- Tabbed floor plans are clean (learn the tab pattern)
- Sticky bottom bar works on mobile (learn the persistence)

### What We Should NOT Replicate
- 22-icon grids — too dense, no hierarchy
- Aspirational-only hero with no product info
- Hidden pricing
- Preloader
- WhatsApp-only floor plans (frustrating)

---

## REFERENCE 02 — RAJAPUSHPA PROVINCIA

**URL:** `https://rajapushpaprovincia.in/`
**Project:** 2 & 3 BHK premium apartments in Narsingi (near Financial District, Hyderabad)

### Overall Design Direction
Lead-capture-first landing page. Navigation is intentionally hidden for the landing page variant. Heavy focus on form submissions with OTP verification. Clean, brand-forward with orange/gold accents.

### Target Audience
Upper-middle-class professionals working in Financial District / Gachibowli. Looking for premium ready-to-move or near-ready apartments.

### Primary Conversion Goal
Form submission (Get Callback) with phone OTP verification. Secondary: brochure download via form.

### Hero Strategy
The landing page variant hides full navigation. Hero focuses on project imagery with floating "ENQUIRE NOW" and "DOWNLOAD BROCHURE" buttons.

### Section Structure
```
Header (minimal, brand logos)
↓
Hero Slider
↓
About Section
↓
Amenities
↓
Clubhouse
↓
Master Plan
↓
Floor Plan
↓
Price
↓
Location
↓
Gallery
↓
Specifications
↓
Floating CTAs (mobile)
↓
Modal Forms (Enquire / Download / Visit)
```

### What Works
- **Floating dual CTA on mobile** ("ENQUIRE NOW" + "DOWNLOAD BROCHURE") — persistent, clear actions
- **OTP verification on phone number** — dramatically reduces fake leads (but adds friction)
- **"Phase 1 OC Received | Ready to Move-in" messaging** in form header — strong trust + urgency
- **Multiple modal forms for different intents** (Enquire, Download Brochure, Schedule Visit) — segmented conversion
- **UTM parameter tracking in hidden form fields** — proper attribution setup

### What Doesn't Work
- **Hidden navigation** — removes user control, increases bounce from non-ad traffic
- **Country code selector** with 200+ countries for a domestic Hyderabad project — unnecessary friction
- **Excessive form length** — name, phone+OTP, email, message is too many fields for cold traffic
- **Dense HTML with inline styles** — poor maintainability, slow rendering

### What We Should Learn
- Multiple forms for different intents (enquiry vs brochure vs visit)
- UTM tracking in hidden fields — essential for Meta Ads attribution
- "Ready to move / OC received" messaging is powerful trust signal
- Floating CTAs on mobile work well

### What We Should NOT Replicate
- Hidden navigation
- Country code selector for domestic traffic
- OTP for cold Meta traffic (too much friction)
- Message/textarea field in initial contact form

---

## REFERENCE 03 — MSN NEOPOLIS

**URL:** `https://msn-neopolis.com/`
**Project:** MSN One — Ultra-luxury apartments in Neopolis, Kokapet, Hyderabad

### Overall Design Direction
Modern, professional, section-based layout with clear navigation anchors. Uses Bebas Neue + Inter/Poppins font combination. Deep brand color (#600528) as primary accent. Clean form-driven conversion.

### Target Audience
Premium/luxury buyers in the Financial District / Kokapet corridor. Higher budget bracket.

### Primary Conversion Goal
Enquiry form submission ("I'M INTERESTED" button). Multiple form placements — modal, sticky bottom, inline.

### Hero Strategy
Image banner slider with auto-play and navigation arrows. Separate mobile-specific banners for optimal display. No text overlay on hero — lets the renders speak.

### Section Structure
```
Sticky Header (Logo, nav anchors, phone number, "Enquire Now")
↓
Banner Slider (desktop + mobile variants)
↓
Overview Section
↓
Configuration / Cost Sheet
↓
Amenities
↓
Floor Plans
↓
Connectivity
↓
Gallery
↓
About the Developer
↓
Floating WhatsApp Button
↓
Floating Call Button
↓
Sticky "Enquire Now" Sidebar Button
↓
Mobile Bottom Dock (Enquire / Call / WhatsApp)
↓
Expandable Bottom Form (desktop)
```

### What Works
- **Triple-channel mobile bottom dock** (Enquire + Call + WhatsApp) — gives users choice of contact method
- **Separate desktop and mobile banner images** — optimized visual experience per device
- **Expandable bottom form on desktop** that can collapse/expand — non-intrusive yet persistent
- **Sticky sidebar "Enquire Now" button** on desktop — always visible, one click
- **Clean section navigation** with anchor links — easy to jump to specific info
- **Phone number visible in header** — instant trust signal

### What Doesn't Work
- **Multiple duplicate forms in DOM** — wasteful, confusing for screen readers
- **Too many floating elements simultaneously** — WhatsApp + Call + Enquire + Bottom Form can feel cluttered
- **Commented-out BHK radio buttons in forms** — suggests indecision in UX
- **Missing alt text** and generic image naming — poor accessibility/SEO

### What We Should Learn
- Desktop expandable bottom form is a smart conversion pattern
- Triple mobile dock gives users their preferred channel
- Separate mobile/desktop banners is good practice
- Phone number in header builds immediate trust

### What We Should NOT Replicate
- Duplicate forms in the DOM
- Too many simultaneous floating elements
- Commented-out UI elements left in production
- Generic or missing alt text

---

## REFERENCE 04 — SAS INFRA / TALLEST RESIDENTIAL TOWER

**URL:** `https://sasinfra.com/tallest-residential-tower-in-south-india/`
**Project:** SAS Crown — 3 & 4 BHK ultra-luxury in Kokapet, Hyderabad

### Overall Design Direction
Cinematic, video-forward, dark and luxurious. WordPress/Elementor build with heavy use of video backgrounds and animated sections. Premium positioning with emphasis on "tallest residential tower in South India."

### Target Audience
Ultra-high-net-worth buyers seeking prestige real estate near Financial District.

### Primary Conversion Goal
Lead form + WhatsApp conversation.

### Hero Strategy
Full-width cinematic video background — immediately establishes scale and premium positioning. The "tallest tower" USP is communicated through video rather than text.

### What Works
- **Video-first hero creates powerful emotional impact** — viewers feel the scale
- **Clear USP** ("Tallest Residential Tower in South India") — memorable, differentiating
- **WhatsApp chat bubble** with animation — inviting, low-friction
- **Rich structured data (JSON-LD)** — strong SEO foundation
- **Professional OG/Twitter meta tags** — good social sharing

### What Doesn't Work
- **Very heavy page** (Elementor + LiteSpeed cache + multiple scripts) — likely poor Core Web Vitals
- **Video autoplay on all devices** — data-heavy on mobile, poor performance
- **Render-blocking resources** — multiple CSS/JS files loaded in head
- **Lazy-loaded content behind JS** — poor initial load experience

### What We Should Learn
- A strong, singular USP creates memorability
- Video can establish scale and emotion better than any photo
- WhatsApp chat bubble style is inviting
- Structured data and rich meta tags are important

### What We Should NOT Replicate
- Heavy CMS/page-builder output
- Autoplay video on mobile without user consent
- Render-blocking resource chains
- Over-reliance on JavaScript for content rendering

---

## REFERENCE 05 — SHAPOORJI PALLONJI / THE PANTHEON ASCENT (via HousingMan)

**URL:** `https://www.housingman.com/projects/ms/shapoorji-pallonji-the-pantheon-ascent-the-minerva-mahalaxmi-high-mahalaxmi-south-mumbai-residential/`
**Project:** The Pantheon Ascent at The Minerva — 3.5 & 4 BHK ultra-luxury, Mahalaxmi, South Mumbai (₹18.31 Cr+)

### Overall Design Direction
Elegant, premium, property-detail-page format. Dual project+developer logo in navbar. Carousel banners with scroll-spy navigation. AOS (Animate On Scroll) for section reveals. Clean white + gold aesthetic.

### Target Audience
Ultra-HNI buyers, South Mumbai luxury market.

### Primary Conversion Goal
Lead form (modal) + site visit booking.

### Section Structure
```
Fixed Navbar (dual logos: project + developer)
↓
Banner Carousel (3 slides, separate mobile banners)
↓
Key Details Strip (below banner)
↓
About / Highlights
↓
Configuration / Floor Plans
↓
Location
↓
Amenities
↓
Gallery
↓
About Developer
↓
Contact Form
```

### What Works
- **Dual-logo navbar** (project logo left, developer logo right) — instantly establishes both brand identities
- **AOS scroll animations** — sections fade-up elegantly, creating a premium reveal rhythm
- **Separate mobile banner images** — optimized per device
- **Clean section-spy navigation** — highlights current section in nav as you scroll
- **Comprehensive SEO** — proper geo meta, OG tags, Twitter cards, keywords
- **Smooth scroll-to-view** function on nav links

### What Doesn't Work
- **Carousel indicators with no preview** — hard to know what you're clicking to
- **No pricing visible** on the landing page — relies entirely on form submission
- **No construction status** — for a project this expensive, buyers want progress proof

### What We Should Learn
- Dual-logo pattern establishes credibility quickly
- AOS scroll animations create premium feel without heavy JS
- Scroll-spy navigation helps orientation on long pages
- Separate mobile/desktop banners — important for Meta Ads mobile traffic

### What We Should NOT Replicate
- Hidden pricing (we should show pricing openly)
- Missing construction/progress information
- Over-reliance on carousel for hero (static hero image can be more impactful)

---

## REFERENCE 06 — ATS HOMEKRAFT SANCTUARY 105

**URL:** `https://atshomekraft-sanctuary105.com/`
**Project:** 3.5 & 4 BHK apartments in Sector 105, Gurugram (₹2.50 Cr+ onwards)

### Overall Design Direction
Clean, nature-inspired, dark hero sections alternating with white content sections. Montserrat + Roboto typography. Green/earth-toned gradient buttons. Bootstrap-based responsive grid.

### Target Audience
Upper-middle-class families seeking spacious, nature-adjacent living in Gurugram.

### Primary Conversion Goal
Modal form submission ("Schedule a Private Site Tour Today" / "Book Site Visit").

### Section Structure
```
Fixed Navbar (project logo + developer logo, anchor nav, mobile CTA)
↓
Hero Banner (full-width image, separate desktop/mobile)
↓
Key Details Strip (Type, Configuration, Price, Carpet Area, Location, Possession)
↓
About Section (dark background, editorial text, "Book Site Visit" CTA)
↓
Highlights ("A Sanctuary of Space, Serenity & Style" — bullet feature list)
↓
Connectivity / Location (distance matrix)
↓
Configuration / Plans
↓
Amenities
↓
Contact Section
```

### What Works
- **Key Details Strip immediately below hero** — 6 data points (Type, Config, Price, Area, Location, Possession) answer all essential questions in under 3 seconds
- **"Schedule a Private Site Tour Today"** mobile CTA in hamburger menu — conversion in the navigation itself
- **Dark About section with "Book Site Visit" CTA** including phone icon — visually distinct, action-oriented
- **Feature highlight as a clean bullet list** (not an icon grid) — scannable, readable, honest
- **"Download Brochure" with file icon** — clear secondary CTA
- **Modal form triggered by multiple buttons** throughout page

### What Doesn't Work
- **About section text is too long** — a single dense paragraph on dark background is hard to read
- **No video content** — misses opportunity for immersive storytelling
- **No construction progress** — no visual proof of project status
- **No testimonials** — no social proof from existing buyers

### What We Should Learn
- **Key Details Strip pattern is the strongest immediate-info mechanism** across all 7 references — adopt this
- Clean bullet feature lists outperform icon grids for readability
- Modal form triggered from multiple CTAs is the right approach
- Mobile CTA inside the navigation itself is smart
- Dark/light section alternation creates visual rhythm

### What We Should NOT Replicate
- Dense paragraph text on dark backgrounds
- Absence of video content
- No construction/progress section
- No social proof

---

## REFERENCE 07 — RUNWAL 7 MAHALAXMI (via HousingMan)

**URL:** `https://www.housingman.com/projects/ms/runwal-enterprises-7-mahalaxmi-high-n-m-joshi-marg-mumbai-residential/`
**Project:** Runwal 7 Mahalaxmi — Luxury residences, South Mumbai

### Overall Design Direction
Modern, minimal, green-accented luxury. Playfair Display for headings + Montserrat for body. Custom Lucide icons. No Bootstrap — custom CSS with elegant card compositions. AOS animations throughout.

### Target Audience
Luxury buyers in the South Mumbai market.

### Primary Conversion Goal
Lead form submission via modal.

### Section Structure
```
Fixed Navbar (project logo + developer logo, desktop nav, mobile hamburger)
↓
Hero Carousel (separate desktop/mobile banners)
↓
About Section
↓
Highlights
↓
Location
↓
Amenities
↓
Floor Plans / Pricing
↓
Contact Form
↓
Full-screen Mobile Menu
```

### What Works
- **Full-screen mobile menu** — modern, spacious, easy to navigate on touch devices
- **Lucide icons** — clean, consistent, modern icon system
- **AOS animations** with staggered delays — premium scroll experience
- **Clean dual-logo navbar** — developer credibility + project identity
- **Custom CSS** (no heavy framework) — fast, maintainable, performant
- **Scroll-to-view function** on all nav links — smooth section navigation

### What Doesn't Work
- **No pricing visible** until deep in the page
- **Hero carousel without text overlay** — misses opportunity to communicate instantly
- **No video content** — no immersive project experience
- **No WhatsApp/phone sticky** on mobile — missed conversion opportunity

### What We Should Learn
- Full-screen mobile menu is premium and usable
- Custom CSS without heavy frameworks = better performance
- AOS staggered animations create elegance
- Clean card compositions with good spacing

### What We Should NOT Replicate
- Hidden pricing
- Text-free hero carousel
- Absence of WhatsApp/phone on mobile
- No video content

---

# PART II — CROSS-REFERENCE ANALYSIS

| Element | Sunshine | Rajapushpa | MSN Neopolis | SAS Infra | Shapoorji/HM | ATS Sanctuary | Runwal/HM |
|---|---|---|---|---|---|---|---|
| **Hero** | Parallax image, aspirational headline | Slider, floating CTAs | Banner slider, auto-play | Cinematic video | Carousel, indicators | Full-width image, separate mobile | Carousel, separate mobile |
| **Pricing** | Hidden | In form header only | Not prominent | Hidden | Hidden | Visible in key strip (₹2.50 Cr) | Hidden |
| **Key Details Strip** | Stats as large numbers | None | None | None | Brief strip | ✅ 6-point strip below hero | None |
| **Configurations** | Text description | Tab navigation | Configuration section | Text | Floor plan cards | Cards with bullet features | Cards |
| **Amenities** | 22-icon grid (overloaded) | Section + list | Section | Section | Section | Categorized | Section |
| **Location** | Google Map + proximity cards | Map + description | Connectivity section | Brief | Location section | Distance matrix tabs | Location section |
| **Trust** | RERA in footer | OC received, RERA | Phone in header | USP claim, RERA | Developer logo, SEO | RERA, developer logo | Developer logo |
| **Testimonials** | None | None | None | None | None | None | None |
| **CTA Strategy** | Sticky bottom bar + popup | Floating dual CTA | Triple mobile dock + sidebar + bottom form | WhatsApp bubble | Modal CTAs | Modal + nav CTA + section CTAs | Modal CTAs |
| **Lead Form** | 3 fields (name, phone, email) | 4+ fields + OTP | 2 fields (name, phone) | Form + WhatsApp | 2-field modal | Modal (name, phone, email) | Modal |
| **Video** | YouTube embed | None | None | Hero video bg | None | None | None |
| **Animation** | Parallax, slide-up | None | Swiper | Elementor animations | AOS fade-up | None visible | AOS staggered |
| **Mobile UX** | Sticky bottom bar | Floating CTAs | Triple bottom dock | Responsive | Hamburger + modal | Nav CTA + hamburger | Full-screen menu |

---

## COMMON HIGH-CONVERTING PATTERNS

1. **Fixed/sticky navbar with anchor navigation** (7/7) — universal, essential
2. **Modal lead form triggered by multiple CTAs** (6/7) — the standard conversion mechanism
3. **Dual-logo identity** (project + developer) in navbar (5/7) — establishes both brands instantly
4. **Separate mobile/desktop hero images** (4/7) — critical for Meta Ads mobile traffic
5. **Full-width hero image/visual** (7/7) — creates immediate visual impact
6. **RERA/approval badges** (6/7) — legal compliance + trust signal
7. **WhatsApp + Phone accessible** (5/7) — multi-channel contact
8. **AOS/scroll animations** (4/7) — premium perceived quality

## HIGH-VALUE DIFFERENTIATING PATTERNS

1. **Key Details Strip below hero** (ATS Sanctuary) — the single most effective immediate-information pattern. Answers 6 buyer questions in 3 seconds.
2. **Triple mobile bottom dock** (MSN Neopolis) — Enquire + Call + WhatsApp gives users their preferred channel.
3. **YouTube/video embed for project** (Sunshine) — real footage builds authenticity beyond renders.
4. **Proximity cards organized by category** (Sunshine) — practical, scannable location information.
5. **Full-screen mobile menu** (Runwal) — modern, spacious, premium touch experience.
6. **Multiple forms for different intents** (Rajapushpa) — enquiry vs brochure vs visit separates lead intent.
7. **Expandable desktop bottom form** (MSN Neopolis) — persistent but non-intrusive conversion.
8. **Phone number visible in header** (MSN Neopolis) — instant credibility.

## PATTERNS TO AVOID

1. **22+ icon feature grids** (Sunshine) — creates visual overload, dilutes important features
2. **Hidden pricing** (5/7 references hide pricing) — bad for Meta Ads traffic who need instant affordability validation
3. **OTP verification for cold traffic** (Rajapushpa) — too much friction
4. **Country code selector for domestic projects** (Rajapushpa) — unnecessary
5. **Heavy CMS output / render-blocking resources** (SAS Infra) — kills mobile performance
6. **Aspirational-only headlines** ("Epitome of Refined Living") — says nothing specific
7. **Preloader animations** (Sunshine) — perceived latency
8. **Multiple floating elements simultaneously** (MSN) — visual clutter
9. **No pricing anywhere** — forces enquiry for basic information, increases bounce

## OPPORTUNITIES (What none of them do well)

1. **None have genuine testimonials** — 0/7 references show customer testimonials. Codename Hi-Five has professional video testimonials — this is a massive differentiator.
2. **None have stakeholder/developer video** — MD/Architect interviews build trust that text cannot.
3. **None have an EMI/affordability tool** — making affordability tangible and interactive is a unique opportunity.
4. **None show transparent construction progress** with dated verification — Hi-Five at 90% can show real progress.
5. **None have investment context** (corridor growth, rental yield) — financial storytelling is powerful for the ₹55L buyer.

---

# PART III — CODENAME HI-FIVE: BESPOKE INFORMATION ARCHITECTURE

> This architecture is designed from scratch for **Codename Hi-Five by Kura Homes**. It does not follow the section order or naming convention of any single reference. It is structured around **buyer psychology for cold Meta Ads traffic at the ₹55L price point in Hyderabad.**

---

## BRAND DESIGN SYSTEM

| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | Dark Sienna `#3A1C11` | Dark sections, text, header, footer, overlays |
| **Secondary** | Alabaster `#F5F3E6` | Page canvas, card backgrounds, light sections |
| **Accent** | Caramel `#CE793A` | CTAs, links, highlights, hover states, active indicators |
| **White** | `#FFFFFF` | Cards, contrast areas |
| **Text Dark** | `#2A1508` | Body text on light backgrounds |
| **Text Muted** | `#6B5A4F` | Captions, secondary text |
| **Trust Green** | `#2E7D32` | RERA badges, verified indicators |
| **Heading Font** | Gumani | H1, H2, accent quotes |
| **Body Font** | Figtree | H3–H6, body, buttons, navigation |

---

## SECTION ARCHITECTURE

### `§1 — HEADER`
**Inspired by:** Shapoorji dual-logo + MSN phone visibility + ATS nav CTA

| Attribute | Specification |
|-----------|---------------|
| **Layout** | Fixed top bar with frosted glass. Left: Kura Homes logo + Hi-Five logo. Center: Anchor nav links. Right: Phone number link + Caramel "Book Site Visit" button |
| **Nav Links** | `Overview` · `Homes` · `Lifestyle` · `Location` · `Progress` · `Contact` |
| **Mobile** | Compact: dual logos (smaller) + phone icon + hamburger → full-screen menu drawer (Runwal-inspired) with all nav links + prominent CTA |
| **Trust** | Phone number `+91 800 800 8946` visible in header on desktop |

---

### `§2 — HERO: CINEMATIC FIRST IMPRESSION`
**Inspired by:** ATS Sanctuary full-bleed image + SAS Infra video trigger + Shapoorji editorial overlay

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Instantly confirm the ad promise — "this is a real, affordable, nearly-complete gated community near ORR" |
| **Background** | Full-bleed architectural render (`images/Front view.webp`) with subtle warm gradient overlay (Dark Sienna → transparent). Separate mobile image (`images/Birds level view.webp` cropped portrait) |
| **Content** | Gumani headline: **"Your Home at Hyderabad's ORR Exit-5"** | Figtree subtitle: **"2 BHK & Duplex Homes from ₹55 Lakhs · 5.3 Acre Gated Community · 90% Built"** |
| **Video Trigger** | Floating play button badge: "▶ Watch Project Film" → opens `videos/hero-video.mp4` in lightbox modal |
| **CTAs** | Primary: `Book a Site Visit` (Caramel solid) · Secondary: `Explore Project` (ghost/outline, scrolls to §3) |
| **Trust Micro-badges** | Small RERA + HMDA badges at bottom of hero: `TG RERA: P02200002810 · HMDA Approved` |
| **Animation** | Subtle Ken Burns zoom on background image. Headline + subtitle fade-up staggered on load |

---

### `§3 — PROJECT SNAPSHOT: ESSENTIAL FACTS AT A GLANCE`
**Inspired by:** ATS Sanctuary key details strip + Sunshine large stat counters

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Deliver all essential project facts in a single scannable bar — answers "What is this?" in 3 seconds |
| **Layout** | Horizontal strip on Alabaster background. 6 icon-topped metric cards |
| **Content** | |

| Metric | Value |
|--------|-------|
| Community | 5.3 Acres · Gated Township |
| Homes | 2 BHK & Duplex Suites |
| Price | From ₹55 Lakhs* |
| Living Area | 1,100 – 2,200 sq.ft |
| Location | ORR Exit-5, Gandimaisamma |
| Status | 90% Built · Possession Soon |

| **Mobile** | 3×2 grid, each card compact with icon + value |
| **Animation** | Cards stagger-reveal on scroll (AOS-style) |

---

### `§4 — ABOUT CODENAME HI-FIVE: THE PROJECT STORY`
**Inspired by:** ATS Sanctuary dark about section + Sunshine editorial split

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Tell the story of the project — who, what, why — in warm editorial format |
| **Layout** | Dark Sienna background. Split: Left (60%) — editorial text. Right (40%) — `images/community view.webp` with rounded corners |
| **Content** | Brief, warm narrative about Codename Hi-Five: a 5.3-acre gated community by Kura Homes (55 years of trust) on Hyderabad's high-growth ORR Exit-5 corridor. 500+ families have already chosen their home here. 90% constructed, with possession approaching. |
| **CTA** | `Schedule a Private Visit` (Caramel button with phone icon, triggers modal form with source: `about_cta`) |
| **Key Stat Strip** | Below the text: `500+ Homes Booked · 55 Years of Trust · 40+ Amenities · 25,000 sq.ft Clubhouse` |
| **Animation** | Text fade-up, image reveal from right |

---

### `§5 — HOMES & PRICING: CONFIGURATIONS WITH TRANSPARENT COST`
**Inspired by:** ATS Sanctuary configuration cards + Rajapushpa pricing visibility

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Show exactly what's available, at what price, with what features — and offer gated floor plans |
| **Layout** | Alabaster background. Two large cards side by side (desktop) / stacked (mobile) |
| **Card 1 — 2 BHK Smart Luxe** | |

| Detail | Value |
|--------|-------|
| Type | 2 BHK Apartment |
| Carpet Area | 1,100 – 1,285 sq.ft |
| Starting Price | ₹55 Lakhs* |
| Per sq.ft | ₹4,999 |
| Features | 100% Vaastu · Cross-ventilated · East/West facing · Optimized zero-waste layout |

| **Card 2 — Luxury Duplex Suite** | |

| Detail | Value |
|--------|-------|
| Type | Duplex / Penthouse |
| Carpet Area | 1,850 – 2,200 sq.ft |
| Starting Price | ₹95 Lakhs* |
| Features | Double-height living · Private terrace · Panoramic views · Premium master suite |

| **Floor Plan Gating** | Each card shows a softly frosted preview of the floor plan with a golden badge: *"Unlock Complete Blueprint"* → triggers 2-field modal (Name + Phone) with `source: floorplan_2bhk` or `source: floorplan_duplex` |
| **CTA** | Below cards: `Get Detailed Pricing & Availability` (triggers modal with `source: pricing_cta`) |
| **Animation** | Cards slide-up on scroll |

---

### `§6 — AFFORDABILITY STUDIO: INTERACTIVE EMI & OWNERSHIP CALCULATOR`
**NOT inspired by any reference — this is a unique competitive advantage**

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Make ownership tangible — prove that buying costs less than renting |
| **Visual Style** | Warm Alabaster card with Dark Sienna accents. NOT a dark block. Clean, airy, approachable. |
| **Layout** | Left: sliders + inputs. Right: live results card showing monthly breakdown |
| **Sliders** | Property Value (₹55L default), Loan Amount (₹46L), Tenure (20 yrs), Interest Rate (8.25%) |
| **Output — Scenario A (Owner-Occupied)** | EMI ₹39,195 − Tax Benefit ₹9,500 = **₹29,695/month** net cost |
| **Output — Scenario B (Rent & Earn)** | EMI ₹39,195 − Rental ₹20,000 − Tax Benefit ₹9,500 = **₹9,695/month** net outgo |
| **Toggle** | Clean segmented toggle: `[ Live Here ]` `[ Rent & Earn ]` — switches result display |
| **Disclaimer** | Expandable accordion: "Important: These calculations are illustrative only…" with full CA/tax disclosure |
| **CTA** | `Check Your Eligibility` (triggers modal with `source: emi_calculator`) |
| **Mobile** | Sliders stack vertically. Results card appears below. Toggle remains accessible |

---

### `§7 — LOCATION & CONNECTIVITY: WHERE YOUR LIFE CONNECTS`
**Inspired by:** Sunshine proximity cards + ATS distance matrix + Google Maps integration

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Prove the location is practical for daily life — commute, schools, hospitals, entertainment |
| **Layout** | Left (desktop): Interactive Google Map embed (`https://maps.app.goo.gl/xA6RJPGZQS1HwaYA6`). Right: Tabbed distance list |
| **Tabs** | `IT & Work` · `Schools` · `Healthcare` · `Shopping & Leisure` · `Transit` |
| **Content per Tab** | 5–6 destinations with drive time in minutes |
| **Highlight Metrics** | Above map: `1 min → ORR Exit-5` · `25+ Schools` · `3 Reserve Forests` · `15 min → IT Hubs` |
| **Background** | Aerial image (`images/Drone view.jpg`) as faded background behind the map area |
| **CTA** | `Visit the Project Location` (triggers modal with `source: location_cta`) |
| **Mobile** | Map full-width on top. Tabs as horizontal scrollable pills below. Distance list stacked |
| **Animation** | Map fades in. Tab content transitions smoothly |

---

### `§8 — LIFESTYLE & AMENITIES: 25,000 SQ.FT OF CLUB-LEVEL LIVING`
**Inspired by:** ATS categorized tabs + Sunshine amenity imagery

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Showcase the lifestyle value of the 25K sq.ft clubhouse and 40+ amenities |
| **Layout** | Section header with key stats (`25,000 sq.ft Clubhouse · 40+ Amenities · 70% Open Space`). Below: 4 category tabs with 4 amenity tiles each (icon + name + image on hover/click) |
| **Categories** | |

| Tab | Featured Amenities (4 each) | Image Asset |
|-----|---------------------------|-------------|
| Fitness & Wellness | Rooftop Pool · Gymnasium · Yoga Deck · Jogging Track | `swimming pool.webp` |
| Sports & Play | Badminton · Cricket Nets · Basketball · Indoor Games | `Basket ball court.webp` |
| Social & Community | Banquet Hall · Co-working · Guest Rooms · Reception | `club view.webp` |
| Kids & Family | Play Area · Splash Pool · Cycling Track · Gardens | `Childrens Play area.webp` |

| **CTA** | `Experience the Amenities — Book a Visit` (triggers modal with `source: amenities_cta`) |
| **Animation** | Tab content crossfade. Image tiles scale subtly on hover |

---

### `§9 — EXTERIOR & INTERIOR GALLERY: SEE YOUR FUTURE HOME`
**Inspired by:** MSN Neopolis gallery + Runwal clean card compositions

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Let buyers see the actual project — exteriors for pride of ownership, interiors for livability |
| **Layout** | Two sub-sections with horizontal scroll/drag carousels |
| **Exterior Gallery** | `Front view.webp`, `Side view.webp`, `Street view.webp`, `Night Aerial.webp`, `water body.webp`, `community view.webp` |
| **Interior Gallery** | `Living room.webp`, `Dining area.webp`, `Kitchen.webp`, `Master bedroom.webp`, `Bedroom detail.webp`, `bedroom 1.webp`, `bedroom 2.webp` |
| **Interaction** | Click/tap opens full-screen lightbox. Drag/swipe on mobile |
| **Captions** | Each image has a brief caption (e.g., "Grand entrance & water feature", "Spacious master bedroom") |
| **Animation** | Smooth slide transitions, lazy-loaded images |

---

### `§10 — CONSTRUCTION MILESTONES: 90% COMPLETE, VERIFIED`
**Unique to Codename Hi-Five — no reference does this well**

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Prove the project is real, nearly complete, and RERA-verified |
| **Layout** | Dark Sienna background. Split: Left — headline + milestone stats + RERA badge. Right — embedded video player (`construction-progress.mp4`) |
| **Headline** | Gumani: *"Real Progress. No Surprises."* |
| **Stats** | Progress bar: 90% filled. "Possession Soon" badge. "Updated: May 2026" timestamp |
| **RERA Verification** | Clickable badge: "Verified on TG RERA Portal → P02200002810" with external link |
| **CTA** | `See It For Yourself — Book a Visit` (triggers modal with `source: construction_cta`) |
| **Animation** | Progress bar animates fill on scroll. Video poster shows first frame |

---

### `§11 — PERSPECTIVES: HEAR FROM LEADERSHIP & BUYERS`
**Unique competitive advantage — no reference has video testimonials**

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Build trust through real people — the MD, architects, and future customers |
| **Layout** | 3 video cards in a row (desktop) / swipeable stack (mobile). Each card: video thumbnail + title + brief description |
| **Card 1** | **"Why This Location"** — `why-this-location.mp4` — Location advantages explained |
| **Card 2** | **"The Investment Story"** — `investment.mp4` — Corridor growth context |
| **Card 3** | **"Design & Vaastu Philosophy"** — `Design.mp4` — Architectural vision |
| **Interaction** | Click plays in inline expand or lightbox modal |
| **Note** | When customer testimonial videos (2–3) are ready with updated branding, add them as a separate row below with distinct styling |
| **Animation** | Cards stagger on scroll. Play button pulses subtly |

---

### `§12 — KURA HOMES: 55 YEARS OF TRUST`
**Inspired by:** MSN "About the Developer" + Shapoorji developer credibility

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Establish developer credibility — "who stands behind this project?" |
| **Layout** | Alabaster background. Centered: Kura Homes logo (large). Below: brief heritage paragraph + stat counters |
| **Stats** | `55 Years` (of Trust) · `500+` (Homes Booked at Hi-Five) · `5.3 Acres` (Gated Community) |
| **Content** | 2–3 sentences about Kura Homes' legacy, commitment to quality, and the Hi-Five vision |
| **Animation** | Logo fade-in. Counter numbers animate on scroll |

---

### `§13 — CONVERSION HUB: YOUR NEXT STEP`
**Inspired by:** ATS Sanctuary CTA section + Sunshine contact section

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Final conversion point for visitors who've scrolled through the complete journey |
| **Layout** | Dark Sienna background. Split: Left — headline + trust promises + direct contact. Right — comprehensive form |
| **Headline** | Gumani: *"Ready to Make This Your Address?"* |
| **Trust Promises** | Three items with check icons: "Response within 2 hours" · "Free private site visit" · "Complete pricing & documentation" |
| **Direct Contact** | Phone: `+91 800 800 8946` · WhatsApp: same number with pre-filled text |
| **Form Fields** | Full Name (required), Mobile Number +91 (required), Email (optional), Preferred Home: dropdown `2 BHK` / `Duplex` / `Not Sure Yet` (optional) |
| **Submit Button** | `Submit Enquiry & Get Details` (Caramel, full-width) |
| **Source Tracking** | Hidden field: `source: footer_main_form` |
| **Backend** | POST to Google Apps Script webhook → Google Sheets (with UTM params from URL) |
| **Success State** | Modal: "Thank you! Our advisor will reach out within 2 hours." + WhatsApp button: "Get instant info on WhatsApp" |

---

### `§14 — FOOTER`
| Content | Detail |
|---------|--------|
| Logos | Kura Homes + Codename Hi-Five |
| Address | Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043 |
| Approvals | TG RERA: P02200002810 · HMDA: G1/DM/2237/BP/2021 |
| Verification | Link to TG RERA portal |
| Legal | Financial/investment disclaimer |
| Quick Links | Section anchors |
| Contact | Phone + WhatsApp |
| Copyright | © 2026 Kura Homes. All rights reserved. |

---

### `MOBILE BOTTOM CONVERSION DOCK`
**Inspired by:** MSN Neopolis triple dock + Sunshine sticky bar

| Attribute | Specification |
|-----------|---------------|
| **Visibility** | Fixed bottom, mobile only (`< 768px`), appears after scrolling past hero |
| **Layout** | 3 equal buttons: `[ 📋 Book Visit ]` `[ 💬 WhatsApp ]` `[ 📞 Call ]` |
| **Book Visit** | Triggers modal form with `source: mobile_dock_visit` |
| **WhatsApp** | Opens `https://wa.me/918008008946?text=Hi, I'm interested in Codename Hi-Five by Kura Homes` |
| **Call** | Opens `tel:8008008946` |
| **Style** | Dark Sienna background, white text, Caramel accent on active |

---

### `LEAD CAPTURE MODAL (UNIVERSAL)`
| Attribute | Specification |
|-----------|---------------|
| **Fields** | Full Name (required), Mobile Number (required, 10 digits, +91 prefix) |
| **Hidden Fields** | `source` (set by trigger button), `utm_source`, `utm_medium`, `utm_campaign`, `page_url`, `timestamp` |
| **Submit** | Caramel button: "Get Project Details" |
| **Backend** | Google Apps Script webhook → Google Sheets |
| **Success** | In-modal thank you message + WhatsApp link + "Our advisor will call within 2 hours" |

---

# PART IV — ANIMATION & PERFORMANCE STRATEGY

| Section | Animation | Method | Performance Impact |
|---------|-----------|--------|-------------------|
| Hero | Ken Burns zoom on image | CSS `transform` | Very low |
| Hero headline | Fade-up on load | CSS `@keyframes` | Very low |
| §3 Facts Strip | Staggered fade-in | IntersectionObserver | Low |
| §4 About stats | Counter animation | JS on intersection | Low |
| §5 Config cards | Slide-up on scroll | IntersectionObserver | Low |
| §6 EMI calc | Real-time slider updates | Vanilla JS | Low |
| §8 Amenity tabs | Crossfade content | CSS transitions | Very low |
| §9 Gallery | Smooth slide/drag | CSS scroll-snap or light JS | Low |
| §10 Progress bar | Fill animation on scroll | CSS + IntersectionObserver | Very low |
| §11 Video cards | Stagger on scroll | IntersectionObserver | Low |
| §12 Stat counters | Count-up animation | JS on intersection | Low |
| CTA buttons | Hover: scale + color shift | CSS `:hover` | Very low |
| Form fields | Focus glow (Caramel border) | CSS `:focus` | Very low |

**Rules:**
- All images lazy-loaded below fold (`loading="lazy"`)
- Hero image eager-loaded (LCP optimization)
- Videos: poster image + lazy load, never autoplay on mobile
- Google Maps: load only on intersection or user interaction
- All animations respect `prefers-reduced-motion`
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

# PART V — RESPONSIVE STRATEGY

### Desktop (1200px+)
- Full editorial split layouts (60/40)
- Side-by-side configuration cards
- Map + tabs side by side
- Inline video cards 3-across
- Header shows full nav + phone + CTA

### Tablet (768–1199px)
- Reduce to 2-column where needed
- Stack splits vertically
- Gallery remains horizontal scroll
- Header: compressed nav

### Mobile (< 768px)
- **Separate mobile hero image** (portrait crop)
- Single column throughout
- **Sticky bottom dock** (Book Visit / WhatsApp / Call)
- **Full-screen hamburger menu** with CTA
- Swipe galleries
- Stacked config cards
- EMI calc: stacked sliders, results above
- Location tabs: horizontal scroll pills
- Large tap targets (min 48px)
- Font minimum 16px for inputs
- Reduced animation intensity

---

# PART VI — SEO & META

| Element | Value |
|---------|-------|
| `<title>` | Codename Hi-Five by Kura Homes — 2 BHK & Duplex Homes from ₹55L at ORR Exit-5, Hyderabad |
| `<meta description>` | 2 BHK & Duplex gated community homes from ₹55 Lakhs at ORR Exit-5, Hyderabad. 90% constructed. 40+ amenities, 25,000 sq.ft clubhouse, 3 reserve forests. HMDA & TG RERA approved. By Kura Homes — 55 years of trust. |
| `<h1>` | In hero section only |
| OG:title | Codename Hi-Five — Premium Gated Homes from ₹55L \| Kura Homes |
| OG:image | Front view render |
| Semantic HTML | `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>` |
| Image alt text | Descriptive, keyword-relevant |
| Favicon | Already set in `public/` |

---

# PART VII — WHAT MAKES THIS ARCHITECTURE DIFFERENT FROM SPEEDHOUSING

| Aspect | SpeedHousing | Codename Hi-Five |
|--------|-------------|-----------------|
| **Hero** | Location badge + ticker + "Know More" | Full-bleed architectural render + video trigger + dual CTA |
| **Info delivery** | Scrolling marquee ticker | Static key facts strip (ATS-inspired) |
| **Why section** | 4 identical text pillars | Warm editorial story section with split image |
| **Pricing** | Corridor bar chart + unit cards | Configuration cards with features + gated floor plans |
| **EMI tool** | Dark block with slider + scenario text | Warm card with toggle switch + visual breakdown |
| **Location** | Full dedicated sub-page | Tabbed distance matrix with map embed (single section) |
| **Amenities** | Category tabs with icon rows | Category tabs with image tiles |
| **Gallery** | Drag carousel (exterior) + separate interior | Dual carousel (exterior + interior) with lightbox |
| **Progress** | Text + photo grid | Video player + progress bar + RERA link |
| **Videos** | Tabbed 3-video switcher | 3 video cards in editorial layout |
| **Developer** | Single line in footer | Dedicated heritage section with logo + stats |
| **Form** | Bottom form with OTP | Simple modal system + comprehensive footer form |
| **Mobile CTA** | Not specified | Triple bottom dock (Visit/WhatsApp/Call) |
| **Color** | Dark/neutral modern | Warm Dark Sienna + Alabaster + Caramel |
| **Typography** | System/Inter-style | Gumani serif + Figtree sans |
| **Overall feel** | Data-driven tech startup | Warm architectural editorial |
