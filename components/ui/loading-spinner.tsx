import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        default: 'h-8 w-8 border-2',
        lg: 'h-12 w-12 border-3',
        xl: 'h-16 w-16 border-4',
      },
      variant: {
        primary: 'text-[#4F46E5]',
        secondary: 'text-[#F97316]',
        white: 'text-white',
        slate: 'text-slate-400',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'primary',
    },
  }
);

interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

/**
 * LoadingSpinner Component
 * Phase 8: Loading States
 */
export function LoadingSpinner({
  size,
  variant,
  label,
  className,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)} {...props}>
      <div
        className={cn(spinnerVariants({ size, variant }))}
        role="status"
        aria-label={label || 'Loading'}
      >
        <span className="sr-only">{label || 'Loading...'}</span>
      </div>
      {label && (
        <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
      )}
    </div>
  );
}

export { spinnerVariants };
