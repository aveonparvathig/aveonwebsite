import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  priority?: boolean;
  lazy?: boolean;
  className?: string;
  containerClassName?: string;
  fallback?: ReactNode;
}

/**
 * Optimized Image component with automatic WebP/AVIF conversion,
 * lazy loading, and responsive sizing for better performance.
 *
 * Usage:
 * <OptimizedImage
 *   src="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 *   priority // for LCP images
 * />
 */
export function OptimizedImage({
  alt,
  priority = false,
  lazy = true,
  className = "",
  containerClassName = "",
  ...props
}: OptimizedImageProps) {
  const loading = priority ? "eager" : lazy ? "lazy" : "eager";

  return (
    <div className={containerClassName}>
      <Image
        alt={alt}
        priority={priority}
        loading={loading}
        quality={85} // Balanced quality/size (default is 75)
        className={className}
        {...props}
      />
    </div>
  );
}

/**
 * Hero Image component optimized for above-the-fold content.
 * Automatically prioritized and preloaded.
 */
export function HeroImage(props: Omit<OptimizedImageProps, "priority">) {
  return <OptimizedImage {...props} priority={true} />;
}

/**
 * Thumbnail component optimized for smaller images.
 * Uses aggressive lazy loading.
 */
export function ThumbnailImage(
  props: Omit<OptimizedImageProps, "lazy" | "quality">
) {
  return <OptimizedImage {...props} lazy={true} quality={80} />;
}

/**
 * Responsive image component that adapts to container width.
 * Best for product images and cards.
 */
export function ResponsiveImage({
  alt,
  src,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps & { sizes?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      priority={priority}
      className={className}
      {...props}
    />
  );
}
