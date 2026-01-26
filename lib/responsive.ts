/**
 * Fast Solutions - Responsive Design Utilities
 * Phase 9: Responsive Design Requirements
 */

// Tailwind breakpoints (from guide)
export const BREAKPOINTS = {
  sm: 640,   // Small devices (landscape phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (desktops)
  xl: 1280,  // Extra large devices (large desktops)
  '2xl': 1536, // 2XL devices (larger desktops)
} as const;

// Media query helpers
export const mediaQueries = {
  sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  md: `@media (min-width: ${BREAKPOINTS.md}px)`,
  lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']}px)`,
} as const;

// Helper to check if we're on mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.md;
}

// Helper to check if we're on tablet
export function isTablet(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.md && window.innerWidth < BREAKPOINTS.lg;
}

// Helper to check if we're on desktop
export function isDesktop(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.lg;
}

// Get current breakpoint
export function getCurrentBreakpoint(): keyof typeof BREAKPOINTS | 'xs' {
  if (typeof window === 'undefined') return 'xs';

  const width = window.innerWidth;

  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

// Responsive grid column helpers
export const gridColumns = {
  // For service cards, feature cards
  services: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  features: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  testimonials: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  team: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',

  // For two-column layouts
  split: 'grid-cols-1 lg:grid-cols-2',

  // For pricing tiers
  pricing: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
} as const;

// Responsive padding helpers
export const containerPadding = {
  x: 'px-4 sm:px-6 lg:px-8',
  y: 'py-12 md:py-16 lg:py-20',
  section: 'px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20',
} as const;

// Responsive text sizes
export const textSizes = {
  hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  h1: 'text-3xl sm:text-4xl md:text-5xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl',
  h3: 'text-xl sm:text-2xl md:text-3xl',
  h4: 'text-lg sm:text-xl md:text-2xl',
  body: 'text-base md:text-lg',
  small: 'text-sm md:text-base',
} as const;

// Responsive gap sizes
export const gaps = {
  cards: 'gap-6 md:gap-8',
  sections: 'gap-8 md:gap-12 lg:gap-16',
  items: 'gap-4 md:gap-6',
  tight: 'gap-2 md:gap-3',
} as const;

// Touch-friendly tap targets (minimum 44px)
export const tapTargets = {
  button: 'min-h-[44px] min-w-[44px]',
  icon: 'w-11 h-11', // 44px
  link: 'py-3 px-4', // Ensures 44px height
} as const;

// Mobile-specific utilities
export const mobileOnly = 'block md:hidden';
export const desktopOnly = 'hidden md:block';
export const tabletUp = 'hidden md:block';
export const mobileTablet = 'block lg:hidden';
