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

### Bilingual Support (Future)
- [ ] Arabic language support infrastructure (i18n setup, locale state, translation dictionaries)
- [ ] Language switcher component (deferred for future release)
- [ ] Arabic translations for all content (deferred for future release)
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
- [ ] Final checkpoint saved (after all fixes applied)
