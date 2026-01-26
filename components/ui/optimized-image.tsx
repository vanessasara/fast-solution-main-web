import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { imageSettings, imageTreatment } from '@/lib/imageUtils';

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'sizes'> {
  quality?: 'high' | 'default' | 'low';
  aspectRatio?: keyof typeof imageSettings.aspectRatios;
  rounded?: keyof typeof imageTreatment.rounded;
  objectFit?: keyof typeof imageTreatment.objectFit;
  accentFrame?: keyof typeof imageTreatment.accentFrame | null;
  responsiveSizes?: keyof typeof imageSettings.sizes;
  loading?: 'eager' | 'lazy';
}

/**
 * OptimizedImage Component
 * Phase 10 & 11: Optimized image with automatic lazy loading and responsive sizing
 */
export default function OptimizedImage({
  quality = 'default',
  aspectRatio,
  rounded = 'default',
  objectFit = 'cover',
  accentFrame,
  responsiveSizes = 'card',
  loading = 'lazy',
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  const qualityValue = imageSettings.quality[quality];
  const sizesValue = imageSettings.sizes[responsiveSizes];

  return (
    <div className="relative">
      {/* Accent frame if specified */}
      {accentFrame && (
        <div
          className={cn(
            'absolute -top-4 -left-4 w-full h-full rounded-xl',
            imageTreatment.accentFrame[accentFrame],
            'pointer-events-none'
          )}
        />
      )}

      {/* Image container with aspect ratio */}
      <div
        className={cn(
          'relative overflow-hidden',
          imageTreatment.rounded[rounded],
          className
        )}
        style={
          aspectRatio
            ? { aspectRatio: imageSettings.aspectRatios[aspectRatio] }
            : undefined
        }
      >
        <Image
          alt={alt}
          quality={qualityValue}
          sizes={sizesValue}
          loading={loading}
          className={cn(
            'w-full h-full',
            imageTreatment.objectFit[objectFit]
          )}
          {...props}
        />
      </div>
    </div>
  );
}
