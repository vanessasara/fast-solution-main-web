'use client';

import React from 'react';
import { skipNavigation } from '@/lib/accessibility';

/**
 * SkipNavigation Component
 * Phase 12: Accessibility - Skip navigation link for keyboard users
 */
export default function SkipNavigation() {
  return (
    <a
      href={`#${skipNavigation.targetId}`}
      className={skipNavigation.className}
    >
      {skipNavigation.text}
    </a>
  );
}
