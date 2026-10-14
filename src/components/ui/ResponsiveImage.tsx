import type { CSSProperties, MouseEventHandler } from 'react';
import { MOBILE_QUERY, mobileSrc } from '@/lib/responsiveImage';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
  priority?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: MouseEventHandler<HTMLImageElement>;
}

// Náhrada za next/image s `fill` – při statickém exportu (unoptimized) Next nevytváří
// menší varianty, proto přepínáme mezi originálem a -sm verzí přes <picture>.
export function ResponsiveImage({ src, alt, style, priority, onMouseEnter, onMouseLeave }: ResponsiveImageProps) {
  const small = mobileSrc(src);
  return (
    <picture>
      {small !== src && <source media={MOBILE_QUERY} srcSet={small} />}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}
      />
    </picture>
  );
}
