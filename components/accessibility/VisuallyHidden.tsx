import * as React from 'react';
import { cn } from '@/lib/utils';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/**
 * VisuallyHidden Component
 * Phase 12: Accessibility - Hide content visually but keep it accessible to screen readers
 */
export default function VisuallyHidden({
  children,
  className,
  ...props
}: VisuallyHiddenProps) {
  return (
    <span className={cn('sr-only', className)} {...props}>
      {children}
    </span>
  );
}
