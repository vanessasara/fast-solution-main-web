import * as React from 'react';
import { cn } from "@/lib/utils"

/**
 * Skeleton Component
 * Phase 8: Loading States - Skeleton UI
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-slate-200 dark:bg-slate-800 animate-pulse-slow rounded-md", className)}
      {...props}
    />
  )
}

/**
 * SkeletonCard Component
 * Pre-built skeleton for card loading
 */
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-6 border rounded-xl">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

/**
 * SkeletonText Component
 * Text lines skeleton
 */
interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-4/5' : 'w-full')}
        />
      ))}
    </div>
  );
}

/**
 * SkeletonAvatar Component
 * Circular skeleton for avatars
 */
function SkeletonAvatar({
  size = 'default',
}: {
  size?: 'sm' | 'default' | 'lg';
}) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  return <Skeleton className={cn('rounded-full', sizeClasses[size])} />;
}

/**
 * SkeletonButton Component
 * Button-shaped skeleton
 */
function SkeletonButton({
  size = 'default',
}: {
  size?: 'sm' | 'default' | 'lg';
}) {
  const sizeClasses = {
    sm: 'h-8 w-20',
    default: 'h-10 w-24',
    lg: 'h-12 w-32',
  };

  return <Skeleton className={cn('rounded-lg', sizeClasses[size])} />;
}

export {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
}
