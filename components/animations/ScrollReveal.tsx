'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'fadeUp' | 'fadeDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

/**
 * ScrollReveal Component
 * Reveals children with animation when scrolled into view
 * Phase 8: Scroll Animations
 */
export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.1,
  className,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    triggerOnce,
  });

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClass : 'opacity-0',
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
