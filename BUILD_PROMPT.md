# BUILD_PROMPT.md — Codename Hi-Five by Kura Homes
## Technical Implementation Blueprint

---

## 1. PROJECT OVERVIEW

Build a premium, mobile-first, high-converting real estate landing page for **Codename Hi-Five by Kura Homes** — a 5.3-acre gated community at ORR Exit-5, Hyderabad.

**Core Mandate:** This page must NOT resemble SpeedHousing.in in structure, layout, visual language, or section naming. It must feel like a completely original **warm architectural editorial** experience built around the Kura Homes brand identity.

**Tech Stack:** Single-page HTML + Vanilla CSS + Vanilla JavaScript. No frameworks, no build tools. Performance-first.

---

## 2. DESIGN TOKENS

```css
:root {
  /* Brand Palette */
  --color-primary: #3A1C11;
  --color-primary-rgb: 58, 28, 17;
  --color-primary-dark: #24110A;
  --color-secondary: #F5F3E6;
  --color-accent: #CE793A;
  --color-accent-hover: #B5672E;
  --color-accent-light: rgba(206, 121, 58, 0.08);
  --color-white: #FFFFFF;
  --color-text: #2A1508;
  --color-text-muted: #6B5A4F;
  --color-border: #E8E2D2;
  --color-trust: #2E7D32;

  /* Typography */
  --font-heading: 'Gumani', Georgia, serif;
  --font-body: 'Figtree', system-ui, -apple-system, sans-serif;

  /* Spacing */
  --section-pad: clamp(48px, 8vw, 96px);
  --container: min(1200px, 90vw);

  /* Elevation */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-card: 0 4px 20px rgba(58, 28, 17, 0.06);
  --shadow-hover: 0 8px 32px rgba(58, 28, 17, 0.12);
  --shadow-glow: 0 0 20px rgba(206, 121, 58, 0.2);
}
```

---

## 3. ASSET MAP

All assets are in `public/`:

### Logos
- `logos/kura homes logo.png` — Developer logo
- `logos/hi-five logo 2.png` — Project logo

### Videos (5 files)
- `videos/hero-video.mp4` — 4-min cinematic project tour (55MB)
- `videos/why-this-location.mp4` — Location perspective (19MB)
- `videos/investment.mp4` — Corridor growth story (4MB)
- `videos/Design.mp4` — Vaastu & architecture (12MB)
- `videos/construction-progress.mp4` — 90% progress (47MB)

### Images — Exteriors & Aerial
- `images/Front view.webp` — Front architectural render (HERO primary)
- `images/Birds level view.webp` — Aerial bird's-eye (HERO mobile alternate)
- `images/Night Aerial.webp` — Night aerial view
- `images/Side view.webp` — Side elevation
- `images/Street view.webp` — Street-level perspective
- `images/community view.webp` — Full community overview
- `images/water body.webp` — Water feature landscape
- `images/Drone view.jpg` — Real drone photograph

### Images — Amenities
- `images/club view.webp` — Clubhouse exterior
- `images/swimming pool.webp` — Rooftop pool
- `images/Basket ball court.webp` — Basketball court
- `images/Childrens Play area.webp` — Children's play area

### Images — Interiors
- `images/Living room.webp`
- `images/Dining area.webp`
- `images/Kitchen.webp`
- `images/Master bedroom.webp`
- `images/Bedroom detail.webp`
- `images/bedroom 1.webp`
- `images/bedroom 2.webp`

---

## 4. SECTION-BY-SECTION BUILD SPECS

### §1 — FIXED HEADER

```
┌─────────────────────────────────────────────────────────────────┐
│ [Kura Logo] [Hi-Five Logo]  Overview Homes Lifestyle Location  │
│                             Progress Contact    📞 800 800 8946 │
│                                               [Book Site Visit] │
└─────────────────────────────────────────────────────────────────┘
```

- `position: fixed; top: 0; z-index: 1000`
- Background: `rgba(245, 243, 230, 0.92)` with `backdrop-filter: blur(16px)`
- Dual logos: Kura Homes left, Hi-Five right of it (both small, ~32px height)
- Nav links: Figtree Medium, anchor scroll to sections
- Phone: `tel:8008008946` styled as text link
- CTA: Caramel solid button "Book Site Visit" → triggers lead modal
- **Mobile:** Compress to `[Logos] [📞] [☰]`. Hamburger opens full-screen overlay menu (Dark Sienna bg, large nav links, prominent CTA)
- Active section highlight via IntersectionObserver scroll-spy

---

### §2 — HERO

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     [Full-bleed: Front view.webp]                              │
│     [Dark gradient overlay from bottom]                         │
│                                                                 │
│     Gumani H1: "Your Home at                                   │
│                  Hyderabad's ORR Exit-5"                        │
│                                                                 │
│     Figtree: "2 BHK & Duplex Homes from ₹55 Lakhs             │
│               5.3 Acre Gated Community · 90% Built"             │
│                                                                 │
│     [Book a Site Visit]  [▶ Watch Project Film]                 │
│                                                                 │
│     RERA: P02200002810 · HMDA: G1/DM/2237/BP/2021              │
└─────────────────────────────────────────────────────────────────┘
```

- Background: `images/Front view.webp` with `object-fit: cover` + gradient overlay: `linear-gradient(to top, rgba(58,28,17,0.85) 0%, rgba(58,28,17,0.3) 50%, transparent 100%)`
- Mobile background: `images/Birds level view.webp` (separate `<source>` in `<picture>`)
- H1: Gumani, ~clamp(2rem, 5vw, 3.5rem), white
- Subtitle: Figtree Regular, white/80%
- Primary CTA: Caramel solid, opens lead modal (`source: hero_cta`)
- Secondary: Ghost button with play icon, opens video lightbox (`videos/hero-video.mp4`)
- RERA/HMDA: Small text badges at bottom, Figtree, white/60%
- Animation: Ken Burns zoom on bg image via CSS `@keyframes` (scale 1→1.05 over 20s). Text fade-up on load
- Hero: `min-height: 100svh`

---

### §3 — PROJECT SNAPSHOT STRIP

```
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ 5.3 Acres│ 2BHK &   │ From     │ 1,100–   │ ORR      │ 90%      │
│ Gated    │ Duplex   │ ₹55L*    │ 2,200sft │ Exit-5   │ Built    │
│ Township │ Suites   │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
```

- Background: Alabaster
- 6 cards in CSS Grid: `grid-template-columns: repeat(6, 1fr)` → `repeat(3, 1fr)` on mobile → `repeat(2, 1fr)` on small mobile
- Each card: Small icon/emoji top, Figtree Semibold value, Figtree Regular label
- Subtle bottom border or card shadow
- Animation: Staggered reveal via IntersectionObserver (each card delays 100ms)

---

### §4 — ABOUT SECTION (Dark)

```
┌─────────────────────────────────────────────────────────────────┐
│ DARK SIENNA BACKGROUND                                          │
│                                                                 │
│  [Editorial Text — 60%]              [community view.webp 40%] │
│                                                                 │
│  Gumani: "Codename Hi-Five"                                    │
│  Figtree: About paragraph                                      │
│                                                                 │
│  500+ Homes · 55 Years · 40+ Amenities · 25K sft Club         │
│                                                                 │
│  [Schedule a Private Visit — Caramel CTA]                      │
└─────────────────────────────────────────────────────────────────┘
```

- Background: Dark Sienna
- Text: White (Gumani heading, Figtree body)
- Image: `images/community view.webp`, rounded corners, subtle shadow
- Stat strip: 4 horizontal stats with dividers
- CTA: Caramel button → modal (`source: about_cta`)
- Mobile: Image on top, text below, full width

---

### §5 — CONFIGURATIONS & PRICING (Light)

```
┌─────────────────────────────────────────────────────────────────┐
│  Gumani: "Find Your Home"                                       │
│                                                                 │
│  ┌──── 2 BHK Card ────┐    ┌──── Duplex Card ────┐            │
│  │ Badge: "Smart Luxe" │    │ Badge: "Penthouse"  │            │
│  │ 1,100–1,285 sft     │    │ 1,850–2,200 sft     │            │
│  │ From ₹55 Lakhs*     │    │ From ₹95 Lakhs*     │            │
│  │ ₹4,999/sq.ft        │    │ Features list        │            │
│  │ Features list        │    │                      │            │
│  │ [Frosted floor plan] │    │ [Frosted floor plan] │            │
│  │ 🔓 Unlock Blueprint  │    │ 🔓 Unlock Blueprint  │            │
│  └──────────────────────┘    └──────────────────────┘            │
│                                                                 │
│           [Get Detailed Pricing — CTA]                          │
└─────────────────────────────────────────────────────────────────┘
```

- Background: Alabaster
- Two cards: `display: grid; grid-template-columns: 1fr 1fr; gap: 2rem`
- Card styling: White bg, `border-radius: var(--radius-md)`, card shadow
- Badge: Small pill top-left of card (Caramel bg, white text)
- Floor plan preview: `filter: blur(8px)` with overlay badge "🔒 Unlock Complete Blueprint"
- Click on frosted plan → modal form with `source: floorplan_2bhk` / `source: floorplan_duplex`
- Bottom CTA → modal with `source: pricing_cta`
- Mobile: Stack cards vertically

---

### §6 — EMI CALCULATOR (Warm Card Section)

- Background: Alabaster with a large warm card container
- Layout: `grid: 1fr 1fr` — Left: sliders, Right: results
- Sliders: Custom-styled `<input type="range">` with Caramel track
- Toggle: Segmented control `[ Live Here ]` / `[ Rent & Earn ]` — CSS toggle, JS switches output
- Results card:
  - Scenario A: EMI − Tax Benefit = Net Cost
  - Scenario B: EMI − Rental − Tax Benefit = Net Outgo
- EMI formula: `P * r * (1+r)^n / ((1+r)^n - 1)` where r = monthly rate
- Disclaimer: Expandable `<details>` element with full CA/tax warning
- CTA: `Check Your Eligibility` → modal (`source: emi_calculator`)
- Mobile: Stack vertically, sliders full-width, results below

---

### §7 — LOCATION & CONNECTIVITY

- Layout: `grid: 1fr 1fr` — Left: Google Maps iframe, Right: Tabbed distance list
- Map: `<iframe>` with `loading="lazy"` from Google Maps embed
- Tabs: `IT & Work` / `Schools` / `Healthcare` / `Shopping` / `Transit` — horizontal scrollable pills
- Tab content: List of destinations with drive-time badges
- Above map: Highlight metrics strip: `1 min ORR` · `25+ Schools` · `3 Forests` · `15 min IT`
- CTA: Below tabs → modal (`source: location_cta`)
- Mobile: Map full-width top, tabs + list below

---

### §8 — AMENITIES (Tabbed with Images)

- 4 tabs: Fitness / Sports / Social / Kids
- Each tab: 4 amenity tiles (icon + label) + 1 featured image
- Featured images: `swimming pool.webp`, `Basket ball court.webp`, `club view.webp`, `Childrens Play area.webp`
- Tab switching: CSS class toggle, content crossfade
- CTA: → modal (`source: amenities_cta`)

---

### §9 — GALLERY (Dual Carousel)

- Two sub-headings: "Exterior & Architecture" / "Interiors & Living"
- Each: Horizontal scroll carousel with `scroll-snap-type: x mandatory`
- Image cards: `scroll-snap-align: start`, rounded corners, caption below
- Click: Opens lightbox modal (custom, no library needed — simple overlay + img)
- Lazy load all gallery images

---

### §10 — CONSTRUCTION PROGRESS (Dark Section)

- Dark Sienna background
- Left: Heading + animated progress bar (CSS `width` transition on intersection) + RERA badge
- Right: Video player (`construction-progress.mp4`) with poster frame
- Mobile: Stack — video on top, text below

---

### §11 — PERSPECTIVES (Video Cards)

- 3 cards in a row: each with video poster, play icon overlay, title, description
- Click: Play video in lightbox or inline expand
- Videos: `why-this-location.mp4`, `investment.mp4`, `Design.mp4`
- Cards: White bg, card shadow, Caramel play button
- Mobile: Vertical stack

---

### §12 — DEVELOPER HERITAGE

- Centered layout: Kura Homes logo (large), Gumani heading "55 Years of Trust", brief paragraph, stat counters
- Counters animate on intersection: `55` Years, `500+` Homes, `5.3` Acres
- Background: Alabaster

---

### §13 — CONVERSION HUB (Dark Section)

- Dark Sienna background
- Split: Left (trust messaging), Right (form)
- Form: Name, Phone (+91), Email (optional), Config dropdown, hidden source field
- Submit → Google Apps Script webhook
- Success: In-modal confirmation + WhatsApp link
- Phone/WhatsApp direct links on the left

---

### §14 — FOOTER

- Dark Sienna, lighter than §13 or with subtle border
- Logos, address, RERA/HMDA, quick links, disclaimer, copyright

---

### MOBILE BOTTOM DOCK

```
┌───────────────┬───────────────┬───────────────┐
│ 📋 Book Visit │ 💬 WhatsApp   │ 📞 Call       │
└───────────────┴───────────────┴───────────────┘
```

- `position: fixed; bottom: 0; z-index: 999`
- `display: none` on desktop, `display: flex` on `< 768px`
- Appears only after scrolling past hero (IntersectionObserver on hero)
- Book Visit → modal (`source: mobile_dock`)
- WhatsApp → `https://wa.me/918008008946?text=...`
- Call → `tel:8008008946`

---

### LEAD MODAL (Universal)

- Centered overlay with Dark Sienna backdrop
- White card: Name input, Phone input (+91 prefix), Submit button
- Hidden: `source`, `utm_source`, `utm_medium`, `utm_campaign`, `page_url`, `timestamp`
- Close: X button + backdrop click
- Success state: Thank you + WhatsApp CTA
- Trap focus inside modal for accessibility

---

## 5. FORM SUBMISSION TO GOOGLE SHEETS

```javascript
async function submitLead(data) {
  const payload = {
    timestamp: new Date().toISOString(),
    name: data.name,
    phone: data.phone,
    email: data.email || '',
    requirement: data.requirement || '',
    source: data.source || 'unknown',
    utm_source: new URLSearchParams(location.search).get('utm_source') || 'direct',
    utm_medium: new URLSearchParams(location.search).get('utm_medium') || '',
    utm_campaign: new URLSearchParams(location.search).get('utm_campaign') || '',
    page_url: location.href
  };

  try {
    await fetch('APPS_SCRIPT_WEBHOOK_URL', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return true;
  } catch (e) {
    console.error('Submission failed:', e);
    return true; // Still show success to user
  }
}
```

---

## 6. FONT LOADING

```html
<!-- Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap">
<!-- Gumani: self-hosted if available, or use Playfair Display as fallback -->
```

> **Note:** Gumani may need to be self-hosted as a `.woff2` file if it's not on Google Fonts. If unavailable, use `Playfair Display` as the serif heading font with similar editorial character.

---

## 7. QA CHECKLIST

- [ ] All CTA buttons trigger modal with correct `source` value
- [ ] Modal traps focus, closes on X and backdrop click
- [ ] Form validates: Name required, Phone required (10 digits)
- [ ] Form submits to Google Sheets webhook
- [ ] Success state shows in modal after submission
- [ ] WhatsApp link opens with pre-filled message
- [ ] Phone link initiates call
- [ ] All videos play in lightbox/inline player with controls
- [ ] Hero loads < 2.5s (LCP)
- [ ] No layout shift on images (CLS < 0.1)
- [ ] All images have `alt` text
- [ ] Mobile bottom dock appears only on `< 768px` after scrolling past hero
- [ ] Full-screen mobile menu opens/closes correctly
- [ ] Scroll-spy highlights current section in nav
- [ ] EMI calculator produces correct values across all slider ranges
- [ ] All sections have unique `id` attributes for anchor navigation
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- [ ] `prefers-reduced-motion` disables animations
- [ ] Tested on: 375px, 390px, 412px, 768px, 1024px, 1440px
- [ ] OG/Twitter meta tags present
- [ ] Favicon loads correctly
- [ ] No console errors
- [ ] Brand colors match exactly: `#3A1C11`, `#F5F3E6`, `#CE793A`
- [ ] **Does NOT visually resemble SpeedHousing.in**
