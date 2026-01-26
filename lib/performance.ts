/**
 * Fast Solutions - Performance Utilities
 * Phase 11: Performance and Optimization
 */

// Dynamic import helper for code splitting
export function lazyLoad<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options?: {
    fallback?: React.ReactNode;
    ssr?: boolean;
  }
) {
  const LazyComponent = React.lazy(importFunc);

  return function LazyLoadedComponent(props: React.ComponentProps<T>) {
    return (
      <React.Suspense fallback={options?.fallback || null}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Performance monitoring
export const performance = {
  // Mark performance points
  mark: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
    }
  },

  // Measure between marks
  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.measure(name, startMark, endMark);
    }
  },

  // Get measurements
  getEntries: () => {
    if (typeof window !== 'undefined' && window.performance) {
      return window.performance.getEntriesByType('measure');
    }
    return [];
  },
};

// Resource hints for preloading
export const resourceHints = {
  // Preload critical resources
  preload: (href: string, as: string) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    }
  },

  // Prefetch for next navigation
  prefetch: (href: string) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  },

  // DNS prefetch for external domains
  dnsPrefetch: (href: string) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  },
};

// Bundle size optimization recommendations
export const bundleOptimization = {
  // Tree shaking enabled by default in Next.js
  treeShaking: true,

  // Code splitting strategies
  codeSplitting: {
    // Route-based splitting (automatic in Next.js)
    routes: true,

    // Component-based splitting
    components: true,

    // Vendor splitting
    vendors: true,
  },

  // Import optimization
  importOptimization: {
    // Use named imports for tree shaking
    namedImports: true,

    // Dynamic imports for heavy components
    dynamicImports: true,

    // Avoid importing entire libraries
    avoidBarrelImports: true,
  },
};

// Font optimization settings
export const fontOptimization = {
  // Use next/font for Google Fonts
  useNextFont: true,

  // Font display strategy
  display: 'swap' as const,

  // Preload critical fonts
  preload: true,

  // Subset fonts
  subset: true,

  // Variable fonts for better performance
  preferVariable: true,
};

// Image optimization settings
export const imageOptimization = {
  // Use Next.js Image component
  useNextImage: true,

  // Quality settings
  defaultQuality: 75,
  highQuality: 90,

  // Format priority
  formats: ['avif', 'webp', 'jpeg'] as const,

  // Lazy loading strategy
  lazyLoad: {
    // Above fold images
    aboveFold: false,

    // Below fold images
    belowFold: true,

    // Distance from viewport to start loading
    rootMargin: '50px',
  },

  // Placeholder strategy
  placeholder: {
    // Use blur placeholder
    blur: true,

    // Generate low-quality placeholder
    lqip: true,

    // Solid color fallback
    color: '#E5E7EB',
  },
};

// Component lazy loading utilities
export const componentLazyLoading = {
  // Heavy sections below fold
  sections: [
    'testimonials',
    'team',
    'blog',
    'footer-newsletter',
  ],

  // Modal contents
  modals: true,

  // Carousels and complex animations
  interactive: true,

  // Third-party widgets
  thirdParty: true,
};

// Performance budgets
export const performanceBudgets = {
  // First Contentful Paint
  fcp: 1800, // ms

  // Largest Contentful Paint
  lcp: 2500, // ms

  // First Input Delay
  fid: 100, // ms

  // Cumulative Layout Shift
  cls: 0.1, // score

  // Time to Interactive
  tti: 3800, // ms

  // Total Blocking Time
  tbt: 300, // ms

  // Bundle size
  bundleSize: {
    js: 200, // KB
    css: 50, // KB
    total: 250, // KB
  },
};

// Memoization helper
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

import React from 'react';
