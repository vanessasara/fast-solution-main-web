import * as React from 'react';
import { cn } from '@/lib/utils';
import { gridColumns, gaps } from '@/lib/responsive';

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof gridColumns | 'custom';
  gap?: keyof typeof gaps;
  children: React.ReactNode;
}

/**
 * ResponsiveGrid Component
 * Phase 9: Pre-configured responsive grids for common layouts
 */
export default function ResponsiveGrid({
  variant = 'features',
  gap = 'cards',
  className,
  children,
  ...props
}: ResponsiveGridProps) {
  return (
    <div
      className={cn(
        'grid',
        variant !== 'custom' && gridColumns[variant],
        gaps[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
