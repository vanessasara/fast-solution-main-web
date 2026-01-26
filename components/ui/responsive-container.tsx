import * as React from 'react';
import { cn } from '@/lib/utils';
import { containerPadding } from '@/lib/responsive';

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
  padding?: boolean;
  paddingX?: boolean;
  paddingY?: boolean;
  children: React.ReactNode;
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

/**
 * ResponsiveContainer Component
 * Phase 9: Responsive container with consistent padding and max-width
 */
export default function ResponsiveContainer({
  maxWidth = '7xl',
  padding = true,
  paddingX,
  paddingY,
  className,
  children,
  ...props
}: ResponsiveContainerProps) {
  const hasPaddingX = paddingX ?? padding;
  const hasPaddingY = paddingY ?? padding;

  return (
    <div
      className={cn(
        'mx-auto w-full',
        maxWidthClasses[maxWidth],
        hasPaddingX && containerPadding.x,
        hasPaddingY && containerPadding.y,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
