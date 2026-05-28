'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

type Pair = { before: string; after: string };

const EMPTY_PAIRS: Pair[] = Array.from({ length: 15 }, () => ({ before: '', after: '' }));

const rows: Pair[][] = [];
for (let i = 0; i < EMPTY_PAIRS.length; i += 3) {
  rows.push(EMPTY_PAIRS.slice(i, i + 3));
}

export default function KategorieGalerieContent() {
  const [fullscreen, setFullscreen] = useState<Pair | null>(null);
  const [fsVisible, setFsVisible] = useState(false);

  const openFs = (pair: Pair) => {
    setFullscreen(pair);
    requestAnimationFrame(() => requestAnimationFrame(() => setFsVisible(true)));
  };

  const closeFs = useCallback(() => {
    setFsVisible(false);
    setTimeout(() => setFullscreen(null), 320);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeFs(); };
    if (fullscreen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen, closeFs]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: 'flex', gap: '6px', height: '300px' }}>
            {row.map((pair, colIdx) => (
              <div key={colIdx} style={{ flex: 1, minWidth: 0, position: 'relative' }}>
                <BeforeAfterSlider beforeImage={pair.before} afterImage={pair.after} />
                <button
                  onClick={() => openFs(pair)}
                  aria-label="Zvětšit"
                  style={{
                    position: 'absolute', bottom: '0.5rem', right: '0.5rem',
                    background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.22)',
                    color: 'white', borderRadius: '6px', padding: '0.3rem 0.4rem',
                    cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center',
                    backdropFilter: 'blur(6px)', lineHeight: 1,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          onClick={closeFs}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: fsVisible ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background-color 0.32s ease',
            cursor: 'zoom-out',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: 'min(95vw, 1400px)',
              transform: fsVisible ? 'scale(1)' : 'scale(0.84)',
              opacity: fsVisible ? 1 : 0,
              transition: 'transform 0.32s cubic-bezier(0.22,1,0.36,1), opacity 0.32s ease',
            }}
          >
            <BeforeAfterSlider
              beforeImage={fullscreen.before}
              afterImage={fullscreen.after}
              height="min(85vh, 720px)"
            />
          </div>
          <button
            onClick={closeFs}
            aria-label="Zavřít"
            style={{
              position: 'fixed', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '50%', width: '2.5rem', height: '2.5rem',
              cursor: 'pointer', fontSize: '1.1rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >✕</button>
        </div>
      )}
    </>
  );
}
