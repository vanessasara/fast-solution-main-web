'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

interface StaggeredListProps {
  children: React.ReactNode[];
  animation?: 'fadeIn' | 'fadeUp' | 'fadeDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * StaggeredList Component
 * Reveals list items with staggered animation delays
 * Phase 8: Scroll Animations with Stagger
 */
export default function StaggeredList({
  children,
  animation = 'fadeUp',
  staggerDelay = 100,
  baseDelay = 0,
  className,
  itemClassName,
}: StaggeredListProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        const delay = baseDelay + (index * staggerDelay);

        return (
          <ScrollReveal
            animation={animation}
            delay={delay > 500 ? 500 : delay} // Cap at 500ms
            className={itemClassName}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
