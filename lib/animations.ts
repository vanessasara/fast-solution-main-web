/**
 * Fast Solutions - Animation Utilities
 * Phase 8: Animation and Interaction Guidelines
 */

// Animation duration constants
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Animation easing functions
export const ANIMATION_EASINGS = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
} as const;

// Stagger delay for multiple items (in ms)
export const STAGGER_DELAY = 100;

// Animation variants for framer-motion (if used)
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

// CSS class helpers for animations
export const animationClasses = {
  // Fade animations
  fadeIn: 'animate-fadeIn',
  fadeUp: 'animate-fadeUp',

  // Slide animations
  slideInLeft: 'animate-slideInLeft',
  slideInRight: 'animate-slideInRight',

  // Scale animations
  scaleIn: 'animate-scaleIn',

  // Transitions
  transition: 'transition-all duration-300 ease-in-out',
  transitionFast: 'transition-all duration-200 ease-in-out',
  transitionSlow: 'transition-all duration-500 ease-in-out',

  // Hover effects
  hoverLift: 'hover:-translate-y-1 hover:shadow-xl',
  hoverScale: 'hover:scale-[1.02]',
  hoverGlow: 'hover:shadow-2xl',

  // Card animations
  cardHover: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
  cardBorderHover: 'transition-all duration-300 hover:border-[#4F46E5]',

  // Button animations
  buttonHover: 'transition-all duration-300 hover:shadow-md active:scale-[0.98]',

  // Icon animations
  iconSlide: 'transition-transform duration-300 group-hover:translate-x-1',
  iconScale: 'transition-transform duration-300 hover:scale-110',
  iconRotate: 'transition-transform duration-300 hover:rotate-12',

  // Image animations
  imageZoom: 'transition-transform duration-300 hover:scale-105',
} as const;

// Intersection Observer options for scroll animations
export const scrollObserverOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

// Helper function to add staggered delays
export function getStaggerDelay(index: number, baseDelay: number = STAGGER_DELAY): string {
  return `${index * baseDelay}ms`;
}

// Helper function to create animation style with delay
export function createAnimationStyle(
  animationName: string,
  duration: number = ANIMATION_DURATIONS.normal,
  delay: number = 0
) {
  return {
    animation: `${animationName} ${duration}ms ease-out ${delay}ms both`,
  };
}
