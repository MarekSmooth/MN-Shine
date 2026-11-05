'use client';

import { useEffect, useSyncExternalStore } from 'react';
import type { BadgeVariant } from '@/data/packages';
import { PackagesBadge } from './PackagesBadge';

// Ukázka pro majitele (GitHub Pages): cedulka s přepínačem variant A / B / C.
// Varianta se bere z ?varianta=… nebo z sessionStorage, aby vydržela při procházení webu.
const KEY = 'mn-demo-variant';
const EVENT = 'mn-demo-variant';
const VARIANTS: { v: BadgeVariant; label: string }[] = [
  { v: 'a', label: 'A' },
  { v: 'b', label: 'B' },
  { v: 'c', label: 'C' },
];
const isVariant = (x: unknown): x is BadgeVariant => x === 'a' || x === 'b' || x === 'c';

function read(): BadgeVariant {
  const fromUrl = new URLSearchParams(window.location.search).get('varianta');
  if (isVariant(fromUrl)) return fromUrl;
  try {
    const stored = sessionStorage.getItem(KEY);
    if (isVariant(stored)) return stored;
  } catch { /* bez storage */ }
  return 'a';
}
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

export function DemoBadge() {
  const variant = useSyncExternalStore(subscribe, read, () => 'a' as BadgeVariant);

  // varianta z odkazu (?varianta=…) se zapamatuje pro další stránky
  // (ne vykreslená hodnota – při hydrataci je dočasně výchozí „a“ a přepsala by výběr)
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('varianta');
    if (isVariant(fromUrl)) {
      try { sessionStorage.setItem(KEY, fromUrl); } catch { /* bez storage */ }
    }
  }, []);

  const pick = (v: BadgeVariant) => {
    try { sessionStorage.setItem(KEY, v); } catch { /* bez storage */ }
    const url = new URL(window.location.href);
    url.searchParams.delete('varianta');
    window.history.replaceState(null, '', url);
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <>
      {/* key = při přepnutí se cedulka přehraje od začátku */}
      <PackagesBadge key={variant} variant={variant} image={null} demo />
      {/* lišta až za cedulkou – CSS ji schová, když je panel otevřený (.pkb-wrap.is-open ~ .pkb-demo-bar) */}
      <div className="pkb-demo-bar" role="group" aria-label="Ukázka – výběr varianty cedulky">
        <span className="pkb-demo-bar__label">Ukázka · varianta</span>
        {VARIANTS.map(({ v, label }) => (
          <button key={v} type="button" aria-pressed={variant === v} onClick={() => pick(v)}>
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
