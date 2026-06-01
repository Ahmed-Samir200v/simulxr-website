# SimulXR Website - Project TODO

## Core Features

### Navigation & Layout
- [x] Fixed navigation bar with logo, page links (Home, About, Simulations, Industries, Case Studies, Blog, Contact), and CTA button
- [x] Responsive mobile hamburger menu
- [x] Smooth scrolling and active link highlighting
- [x] Consistent header across all pages

### Hero Section
- [x] Animated grid background with glowing accents
- [x] Headline: "Train for the Unthinkable"
- [x] Key stats display (80% human error, 10x cost reduction, 6+ simulation categories, bilingual)
- [x] Dual CTA buttons (Request Pilot Package, View Case Studies)
- [x] Fade-in animations for hero content

### Ticker Bar
- [x] Scrolling ticker displaying simulation categories
- [x] Categories: Emergency Response, Gas Leak Scenarios, Confined Space Entry, LOTO Procedures, Equipment Shutdown, Permit to Work, HSE Compliance, Arabic Language Support, Competency Assessment
- [x] Continuous loop animation

### Three Pillars Section
- [x] Safe pillar with icon and description
- [x] Scalable pillar with icon and description
- [x] Measurable pillar with icon and description
- [x] Hover effects and animations
- [x] Grid layout with borders

### Simulation Library
- [x] 6 service cards grid layout
- [x] SIM-01: Emergency Response
- [x] SIM-02: Equipment Operation
- [x] SIM-03: Confined Space Entry
- [x] SIM-04: New Hire Onboarding
- [x] SIM-05: Maintenance Procedures
- [x] SIM-06: LOTO Procedures
- [x] Numbered labels and hover animations
- [x] Arrow icons with rotation on hover

### Stats Bar
- [x] 80% - Industrial accidents caused by human error
- [x] 10× - Cost reduction vs. physical safety drills
- [x] 75% - Higher retention in immersive vs. classroom
- [x] $15B - Annual oil & gas training spend globally
- [x] Styled with borders and accent colors

### Process Section
- [x] 4-step timeline: Ingest → Build → Deploy → Measure
- [x] Connected line visualization between steps
- [x] Step descriptions and hover effects
- [x] Numbered step indicators

### Testimonials Section
- [x] 3 client testimonials in grid layout
- [x] Quote styling with decorative quotation marks
- [x] Client avatars with initials
- [x] Client name, role, and company/location
- [x] Hover effects and animations

### Contact Form & Database
- [x] Contact form with fields: name, company, email, role, message
- [x] Form validation and error handling
- [x] Database table for form submissions
- [x] Form submission to database via tRPC
- [x] Owner notification on form submission (email)
- [x] Success/error toast notifications
- [x] Loading states during submission

### Footer
- [x] Brand section with logo and description
- [x] Arabic tagline: "تدرّب على ما لا يُتصوّر"
- [x] Platform links section
- [x] Company links section
- [x] Office locations: Cairo, Egypt and Dubai, UAE
- [x] Social media links (if applicable)
- [x] Copyright information

### Styling & Design
- [x] Dark navy color scheme with orange and cyan accents
- [x] Industrial aesthetic with grid patterns and glowing effects
- [x] Responsive design for mobile, tablet, and desktop
- [x] Tailwind CSS utility-first styling
- [x] Custom animations and transitions
- [x] Google Fonts integration (Barlow, Barlow Condensed, IBM Plex Mono)

### Bilingual Support (Future Release)
- [x] Arabic language support infrastructure (i18n setup, locale state, translation dictionaries, RTL support)
- [x] Language switcher component
- [x] Arabic translations for all user-facing content
- [x] Arabic tagline in footer (تدرّب على ما لا يُتصوّر)

## Database & Backend

- [x] Create contact_submissions table in Drizzle schema
- [x] Add database query helpers in server/db.ts
- [x] Create tRPC procedure for form submission
- [x] Implement owner notification system
- [x] Add form submission validation

## Testing & Quality

- [x] Write vitest tests for form submission
- [x] Test database storage functionality
- [x] Test owner notification flow
- [x] Cross-browser testing
- [x] Mobile responsiveness testing
- [x] Performance optimization

## Deployment

- [x] Project initialized and scaffolded
- [x] Database migrations applied
- [x] All tests passing (7/7)
- [x] TypeScript compilation successful
- [x] Development server running
- [x] All features implemented and tested
- [x] Final checkpoint saved (after all fixes applied)

## Redesign to Match Untex Factory Template

- [x] Analyze Untex Factory template design patterns, colors, typography, and layout
- [x] Redesign global CSS to match Untex Factory industrial theme (yellow/gold accents, dark backgrounds, bold typography)
- [x] Redesign navigation bar to match Untex Factory style (transparent/overlay nav, bold logo treatment)
- [x] Redesign hero section with Untex Factory layout (large bold headlines, diagonal/angular design elements)
- [x] Redesign ticker/marquee bar to match Untex Factory style
- [x] Redesign pillars/services section with Untex Factory card style (numbered items, industrial borders)
- [x] Redesign simulation library cards to match Untex Factory service cards
- [x] Redesign stats section with Untex Factory counter style
- [x] Redesign process/timeline section to match Untex Factory step layout
- [x] Redesign testimonials section with Untex Factory quote style
- [x] Redesign contact form to match Untex Factory form styling
- [x] Redesign footer to match Untex Factory footer layout
- [x] Ensure all existing functionality (form submission, database, notifications) still works
- [x] Run all tests and verify TypeScript compilation

## Full Rebuild — Figma Design System + 7 Pages + Bilingual

### Design System Overhaul
- [x] Switch color palette to Figma spec: Navy #0A1628, Orange #E8622A, Cyan #00B4D8, Graphite #374151, Pale Steel #F5F6F8
- [x] Switch typography to Barlow Condensed (display), Barlow (body), IBM Plex Mono (labels), IBM Plex Arabic (Arabic)
- [x] Implement CSS grid dot pattern background texture (cyan, 5% opacity)
- [x] Implement gradient accents (Orange-to-Cyan linear gradient bars)
- [x] Implement card style: Navy mid #0F1F3D bg, 1px border, hover border-color to Orange
- [x] Implement button styles: Primary (Orange bg), Outline (Cyan border), Ghost (white border)
- [x] Implement radial glows: Cyan top-right, Orange bottom-left on hero sections

### Navigation & Layout
- [x] Build sticky navbar: Logo left, nav links center (Home|Simulations|Industries|About|Case Studies|Insights|Contact), CTA right
- [x] Implement scroll behavior: transparent to navy bg with backdrop-filter blur
- [x] Build mobile hamburger menu with full-screen overlay
- [x] Add EN|AR language toggle in navbar

### Homepage (rebuild with correct content)
- [x] Hero: eyebrow "XR Industrial Training — MENA & Global", headline "Train for the Unthinkable.", correct subheadline, stats bar (80%, 10x, 6+, 2 Languages)
- [x] Three Pillars section: Safe, Scalable, Measurable with correct copy
- [x] Six simulation service cards with correct descriptions
- [x] Stats bar: 80%, 10x, 75%, $15B
- [x] Process: Ingest → Build → Deploy → Measure
- [x] CTA section: "Your Workforce Deserves to Be Prepared"
- [x] Ticker bar with simulation categories

### Simulations Page
- [x] Hero: "Every Scenario. Zero Real Risk." with subtext
- [x] Featured simulation: Gas Pipeline Leak Emergency (SIM-OG-002)
- [x] Six simulation category cards with full descriptions
- [x] Assessment System section (Real-Time, Audit-Ready, Certifiable)
- [x] Tech stack bar

### Industries Page
- [x] Hero: "Purpose-Built for the World's Hardest Industries."
- [x] Six industry cards: Upstream, Downstream, LNG, EPC, Power, HSE Academies
- [x] Industry-specific training scenarios

### Case Studies Page
- [x] Hero section
- [x] Featured case study: Abu Gharadig (94% pass, 200 trainees, 67% cost reduction)
- [x] Projects table/grid
- [x] ROI CTA section

### About Page
- [x] Hero: "Built for the Field. Trusted in the Boardroom."
- [x] Story section: "The Problem We Solve"
- [x] Mission & Vision section
- [x] Six Core Values
- [x] MENA First section
- [x] Founding quote

### Contact Page
- [x] Hero: "Let's Build Your Training Simulation."
- [x] Full inquiry form (5 fields: name, company, email, role, message)
- [x] Three office locations: Cairo, Dubai, Riyadh
- [x] Pilot Package CTA

### Bilingual Support (EN/AR)
- [x] Language context/provider with toggle state
- [x] RTL layout support when Arabic is active
- [x] All content translated using provided Arabic copy (not machine translated)
- [x] Arabic-Indic numerals in Arabic mode (planned for future)
- [x] IBM Plex Arabic font for Arabic text

### Footer
- [x] Logo + English tagline + Arabic tagline
- [x] 4-column links layout
- [x] Social media icons (placeholder)
- [x] Copyright
- [x] 3 offices: Cairo, Dubai, Riyadh

### Animations & Interactions
- [x] Hero CSS grid background animation (slow 20s drift)
- [x] Radial glow pulse on hero
- [x] Card hover: translateY(-6px) + border-color transition + box-shadow
- [x] Button hover: translateY(-2px) + box-shadow glow
- [x] Staggered fadeUp animations on page load
- [x] Stats number count-up on viewport entry
- [x] Process steps connected line animation on scroll
