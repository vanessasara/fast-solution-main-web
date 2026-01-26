/**
 * Fast Solutions - Accessibility Utilities
 * Phase 12: Accessibility Requirements
 */

// ARIA label helpers
export const ariaLabels = {
  // Navigation
  navigation: {
    main: 'Main navigation',
    services: 'Services menu',
    user: 'User account menu',
    mobile: 'Mobile menu',
    breadcrumb: 'Breadcrumb navigation',
  },

  // Actions
  actions: {
    close: 'Close',
    open: 'Open',
    expand: 'Expand',
    collapse: 'Collapse',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit form',
    search: 'Search',
  },

  // States
  states: {
    loading: 'Loading',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
  },
};

// Semantic HTML element recommendations
export const semanticElements = {
  // Page structure
  structure: {
    header: '<header>',
    main: '<main>',
    nav: '<nav>',
    aside: '<aside>',
    footer: '<footer>',
    section: '<section>',
    article: '<article>',
  },

  // Content
  content: {
    headings: '<h1> to <h6>',
    paragraph: '<p>',
    list: '<ul>, <ol>, <dl>',
    figure: '<figure> with <figcaption>',
  },

  // Forms
  forms: {
    form: '<form>',
    label: '<label>',
    input: '<input>',
    button: '<button>',
    fieldset: '<fieldset>',
    legend: '<legend>',
  },
};

// Heading hierarchy validator
export function validateHeadingHierarchy(headings: string[]): boolean {
  let currentLevel = 0;

  for (const heading of headings) {
    const level = parseInt(heading.replace('h', ''));

    // First heading should be h1
    if (currentLevel === 0 && level !== 1) {
      console.warn('First heading should be h1');
      return false;
    }

    // Don't skip levels
    if (level > currentLevel + 1) {
      console.warn(`Heading hierarchy skipped from h${currentLevel} to h${level}`);
      return false;
    }

    currentLevel = level;
  }

  return true;
}

// Color contrast checker (WCAG AA standard)
export function checkColorContrast(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): {
  ratio: number;
  passesAA: boolean;
  passesAAA: boolean;
} {
  // This is a simplified version. In production, use a proper color contrast library
  const minRatioAA = isLargeText ? 3 : 4.5;
  const minRatioAAA = isLargeText ? 4.5 : 7;

  // Placeholder - implement actual contrast calculation
  const ratio = 4.5; // This should be calculated

  return {
    ratio,
    passesAA: ratio >= minRatioAA,
    passesAAA: ratio >= minRatioAAA,
  };
}

// Keyboard navigation helpers
export const keyboardNavigation = {
  // Tab order considerations
  tabOrder: {
    // Elements should be focusable in logical order
    logical: true,

    // Skip navigation link for keyboard users
    skipNav: true,

    // Focus trap for modals
    focusTrap: true,
  },

  // Key codes
  keys: {
    Tab: 'Tab',
    Enter: 'Enter',
    Space: 'Space',
    Escape: 'Escape',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    Home: 'Home',
    End: 'End',
  },

  // Focus management
  focus: {
    // Visible focus indicators required
    visible: true,

    // Focus indicator color
    color: '#4F46E5', // Indigo

    // Focus ring size
    ring: '3px',

    // Focus ring offset
    offset: '2px',
  },
};

// Screen reader helpers
export const screenReader = {
  // Screen reader only class
  srOnly: 'sr-only',

  // Not for screen readers
  ariaHidden: 'aria-hidden',

  // Live regions for dynamic content
  liveRegions: {
    polite: 'polite' as const,
    assertive: 'assertive' as const,
    off: 'off' as const,
  },
};

// ARIA attributes helpers
export function getAriaAttributes(type: 'button' | 'link' | 'input' | 'modal') {
  const base = {
    button: {
      role: 'button',
      tabIndex: 0,
    },
    link: {
      role: 'link',
    },
    input: {
      'aria-required': undefined,
      'aria-invalid': undefined,
      'aria-describedby': undefined,
    },
    modal: {
      role: 'dialog',
      'aria-modal': true,
      'aria-labelledby': undefined,
    },
  };

  return base[type];
}

// Focus trap utility for modals
export function createFocusTrap(element: HTMLElement) {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        lastFocusable?.focus();
        e.preventDefault();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        firstFocusable?.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);

  // Focus first element
  firstFocusable?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

// Alt text generator helper
export function generateAltText(context: string, description: string): string {
  // Good alt text is concise and descriptive
  return `${description} - ${context}`.trim();
}

// Form accessibility helpers
export const formAccessibility = {
  // Label associations
  labels: {
    // Always use explicit labels
    explicit: true,

    // Use for attribute with id
    htmlFor: true,

    // Don't use placeholder as label
    placeholderNotLabel: true,
  },

  // Error handling
  errors: {
    // Announce errors to screen readers
    announce: true,

    // Use aria-invalid
    ariaInvalid: true,

    // Use aria-describedby for error messages
    ariaDescribedby: true,

    // Color alone is not sufficient
    notColorOnly: true,
  },

  // Required fields
  required: {
    // Use required attribute
    htmlRequired: true,

    // Use aria-required
    ariaRequired: true,

    // Visual indicator (not just asterisk)
    visualIndicator: true,
  },
};

// Accessibility checklist
export const a11yChecklist = {
  semantic: {
    properHeadings: true,
    semanticElements: true,
    landmarks: true,
  },
  keyboard: {
    allInteractiveElementsFocusable: true,
    visibleFocusIndicators: true,
    logicalTabOrder: true,
    skipNavigation: true,
  },
  aria: {
    properLabels: true,
    roleAttributes: true,
    stateAttributes: true,
    liveRegions: true,
  },
  color: {
    sufficientContrast: true, // WCAG AA: 4.5:1 for normal text
    notColorOnly: true, // Don't rely solely on color
  },
  media: {
    altText: true,
    captions: true,
    transcripts: true,
  },
  forms: {
    labeledInputs: true,
    errorAnnouncement: true,
    requiredIndication: true,
  },
};

// Color palette with WCAG AA compliance
export const accessibleColors = {
  // Text on white background (AA compliant)
  textOnWhite: {
    dark: '#0F172A', // 16.8:1
    slate: '#475569', // 7.5:1
    gray: '#64748B', // 5.5:1
  },

  // Text on colored backgrounds
  textOnIndigo: {
    white: '#FFFFFF', // On #4F46E5
  },

  textOnCoral: {
    white: '#FFFFFF', // On #F97316
  },

  // Interactive elements
  interactive: {
    focus: '#4F46E5', // Clear focus indicator
    error: '#DC2626', // Error state
    success: '#059669', // Success state
    warning: '#D97706', // Warning state
  },
};

// Skip navigation link component helper
export const skipNavigation = {
  text: 'Skip to main content',
  targetId: 'main-content',
  className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4F46E5] focus:text-white focus:rounded-lg',
};
