'use client';

import { useState } from 'react';
import type { BadgeVariant } from '@/data/packages';
import { PackagesBadge } from './PackagesBadge';

const LABELS: Record<BadgeVariant, string> = { a: 'A', b: 'B', c: 'C' };

// Živá cedulka na náhledové stránce – přepínání variant, chování jako na webu.
export function LiveBadgeDemo() {
  const [variant, setVariant] = useState<BadgeVariant>('a');
  const [run, setRun] = useState(0);
  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {(Object.keys(LABELS) as BadgeVariant[]).map(v => (
          <button
            key={v}
            type="button"
            onClick={() => { setVariant(v); setRun(r => r + 1); }}
            aria-pressed={variant === v}
            style={{ padding: '0.6rem 1rem', border: '1px solid #FFFFFF', background: variant === v ? '#FFFFFF' : 'transparent', color: variant === v ? '#0a0a0a' : '#FFFFFF', fontWeight: 600, cursor: 'pointer' }}
          >
            {LABELS[v]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setRun(r => r + 1)}
          style={{ padding: '0.6rem 1rem', border: '1px solid rgba(255,255,255,0.35)', background: 'transparent', color: '#D1D5DB', cursor: 'pointer' }}
        >
          ↻ Přehrát znovu
        </button>
      </div>
      <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0.75rem 0 0' }}>
        Po nástupu se cedulka jemně hýbe pořád, dokud návštěvník poprvé neotevře panel. Silnější připomenutí se v ukázce přehraje každých 6 s (na webu každých 15 s, nanejvýš 3×). ↻ Přehrát znovu vrátí i pohyb po otevření panelu.
      </p>
      <PackagesBadge key={run} variant={variant} image={null} forceShow showDelay={400} remindEvery={6000} />
    </div>
  );
}
