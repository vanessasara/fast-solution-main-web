/**
 * Fast Solutions - Image Utilities
 * Phase 10: Image Guidelines
 */

// Unsplash image categories for different services
export const unsplashCategories = {
  'it-solutions-digital-tech': [
    'technology',
    'coding',
    'computer',
    'data center',
    'software development',
  ],
  'marketing-advertising': [
    'marketing',
    'creative team',
    'brainstorming',
    'presentation',
    'advertising',
  ],
  'printing-packaging': [
    'printing machine',
    'packaging design',
    'quality inspection',
    'print products',
  ],
  'hospitality-tourism-app': [
    'hotel interior',
    'restaurant',
    'tourism',
    'travel destination',
    'mobile app',
  ],
  'soft-skills-foreign-education': [
    'classroom',
    'international students',
    'learning',
    'global education',
    'training',
  ],
  'travel-agency-ticketing': [
    'airport',
    'booking',
    'travel destination',
    'vacation',
    'airplane',
  ],
  'consultant-travel-advisory': [
    'business consultation',
    'business travel',
    'strategy meeting',
    'professional meeting',
  ],
  'real-estate': [
    'modern building',
    'interior design',
    'property tour',
    'real estate',
    'architecture',
  ],
} as const;

// Image optimization settings for Next.js Image component
export const imageSettings = {
  // Quality settings
  quality: {
    high: 90,
    default: 75,
    low: 60,
  },

  // Common aspect ratios
  aspectRatios: {
    square: '1/1',
    landscape: '16/9',
    portrait: '3/4',
    ultrawide: '21/9',
    hero: '2/1',
  },

  // Sizes for responsive images
  sizes: {
    full: '100vw',
    half: '50vw',
    third: '33vw',
    quarter: '25vw',
    hero: '(max-width: 768px) 100vw, 1200px',
    card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
} as const;

// Helper to generate Unsplash URL with parameters
export function getUnsplashUrl(
  imageId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    fit?: 'crop' | 'cover' | 'fill';
  } = {}
): string {
  const { width = 800, height, quality = 80, fit = 'crop' } = options;

  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    fit,
  });

  if (height) {
    params.append('h', height.toString());
  }

  return `https://images.unsplash.com/${imageId}?${params.toString()}`;
}

// Image loading priorities
export type ImagePriority = 'high' | 'low' | 'auto';

export function getImagePriority(position: 'above-fold' | 'below-fold'): boolean {
  return position === 'above-fold';
}

// Placeholder generator for images
export function generateImagePlaceholder(
  width: number,
  height: number,
  color: string = '#E5E7EB'
): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E`;
}

// Image optimization recommendations
export const imageOptimization = {
  // Use Next.js Image component for all images
  useNextImage: true,

  // Implement lazy loading for below-fold images
  lazyLoad: true,

  // Specify sizes for responsive loading
  specifySizes: true,

  // Use appropriate quality settings
  quality: 75, // Default quality

  // Format recommendations
  formats: ['webp', 'avif', 'jpeg'], // Modern formats first

  // Loading strategy
  loading: {
    hero: 'eager' as const, // Above fold
    cards: 'lazy' as const, // Below fold
    thumbnails: 'lazy' as const,
  },
} as const;

// Image treatment utilities
export const imageTreatment = {
  // Object fit classes
  objectFit: {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  },

  // Rounded corners
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },

  // Accent frames (colored borders)
  accentFrame: {
    indigo: 'border-4 border-[#4F46E5]',
    coral: 'border-4 border-[#F97316]',
    navy: 'border-4 border-[#1E293B]',
  },
} as const;
