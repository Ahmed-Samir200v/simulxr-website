/**
 * SIMULXR Design System — Single Source of Truth
 * All design decisions flow from this file.
 */

export const colors = {
  // Primary palette
  navy:        '#0F2A4A',
  navyMid:     '#0D2040',
  navyLight:   '#1A3A5C',
  navySurface: '#0A1E36',

  // Action / CTA
  orange:      '#D4622B',
  orangeLight: '#E07540',
  orangeDark:  '#B85325',

  // Technology accent
  cyan:        '#00B4D8',
  cyanLight:   '#22C4E8',
  cyanDark:    '#0090B0',

  // Neutral
  graphite:    '#374151',
  graphiteMid: '#6B7280',
  graphiteLight:'#9CA3AF',

  // Surfaces
  paleSteel:   '#F5F6F8',
  paleSteelDark:'#EAECEF',
  white:       '#FFFFFF',
} as const;

export const typography = {
  fontDisplay: "'Inter', system-ui, sans-serif",
  fontSans:    "'Inter', system-ui, sans-serif",
  fontMono:    "'IBM Plex Mono', monospace",
  fontArabic:  "'IBM Plex Sans Arabic', 'Inter', sans-serif",

  weights: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
  },
} as const;

export const spacing = {
  sectionSm: '4rem',    // 64px
  sectionMd: '6rem',    // 96px
  sectionLg: '8rem',    // 128px
} as const;

export const radius = {
  sm:   '0.375rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  full: '9999px',
} as const;

export const shadows = {
  card:    '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
  cardHover:'0 8px 32px rgba(0,0,0,0.12)',
  orange:  '0 8px 24px rgba(212,98,43,0.25)',
  cyan:    '0 4px 20px rgba(0,180,216,0.20)',
} as const;

export const animations = {
  ease:    'cubic-bezier(0.23, 1, 0.32, 1)',
  fast:    '150ms',
  base:    '250ms',
  slow:    '400ms',
} as const;
