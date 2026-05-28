'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

type Pair = { before: string; after: string };

const services: { id: string; name: string; pairs: Pair[] }[] = [
  {
    id: 'cisteni-interieru',
    name: 'Čištění interiéru',
    pairs: [
      { before: '/beforeafter/cleaning/cleaningbefore1.webp', after: '/beforeafter/cleaning/cleaningafter1.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore2.webp', after: '/beforeafter/cleaning/cleaningafter2.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore3.webp', after: '/beforeafter/cleaning/cleaningafter3.webp' },
    ],
  },
  {
    id: 'cisteni-exterieru',
    name: 'Čištění exteriéru',
    pairs: [
      { before: '/beforeafter/cleaning/cleaningbefore1.webp', after: '/beforeafter/cleaning/cleaningafter1.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore2.webp', after: '/beforeafter/cleaning/cleaningafter2.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore3.webp', after: '/beforeafter/cleaning/cleaningafter3.webp' },
    ],
  },
  {
    id: 'renovace-laku',
    name: 'Renovace laku',
    pairs: [
      { before: '/beforeafter/renovace/before1.webp', after: '/beforeafter/renovace/after1.webp' },
      { before: '/beforeafter/renovace/before2.webp', after: '/beforeafter/renovace/after2.webp' },
      { before: '/beforeafter/renovace/before3.webp', after: '/beforeafter/renovace/after3.webp' },
      { before: '/beforeafter/renovace/before4.webp', after: '/beforeafter/renovace/after4.webp' },
      { before: '/beforeafter/renovace/before5.webp', after: '/beforeafter/renovace/after5.webp' },
    ],
  },
  {
    id: 'ochrana-laku',
    name: 'Ochrana laku',
    pairs: [
      { before: '/beforeafter/renovace/before3.webp', after: '/beforeafter/renovace/after3.webp' },
      { before: '/beforeafter/renovace/before4.webp', after: '/beforeafter/renovace/after4.webp' },
      { before: '/beforeafter/renovace/before5.webp', after: '/beforeafter/renovace/after5.webp' },
    ],
  },
  {
    id: 'renovace-svetel',
    name: 'Renovace světel',
    pairs: [
      { before: '/bg1.webp', after: '/bg2.webp' },
      { before: '/bg3.webp', after: '/bg4.webp' },
    ],
  },
  {
    id: 'renovace-kuze',
    name: 'Renovace kůže',
    pairs: [
      { before: '/bg4.webp', after: '/bg5.webp' },
      { before: '/bg2.webp', after: '/bg3.webp' },
    ],
  },
  {
    id: 'oprava-skrabancu',
    name: 'Oprava škrábanců',
    pairs: [
      { before: '/beforeafter/opravy/opravybefore1.webp', after: '/beforeafter/opravy/opravyafter1.webp' },
      { before: '/beforeafter/opravy/opravybefore2.webp', after: '/beforeafter/opravy/opavyafter2.webp' },
      { before: '/beforeafter/opravy/opravybefore3.webp', after: '/beforeafter/opravy/opravyafter3.webp' },
    ],
  },
];

export default function GalerieContent() {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '4rem', justifyContent: 'center' }}>
        {services.map(svc => (
          <button
            key={svc.id}
            onClick={() => scrollTo(svc.id)}
            className="gal-filter-btn"
          >
            {svc.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {services.map((svc, idx) => (
          <React.Fragment key={svc.id}>
            <section
              id={svc.id}
              style={{ scrollMarginTop: '110px', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
            >
              <div className="gal-row">
                <div className="gal-cover">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <h2 className="gal-cover-title">{svc.name}</h2>
                    <Link
                      href={`/galerie/${svc.id}`}
                      className="gal-filter-btn"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
                    >
                      Zobrazit vše
                    </Link>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', gap: '6px', minWidth: 0 }}>
                  {svc.pairs.slice(0, 3).map((pair, i) => (
                    <div key={i} style={{ flex: 1, minWidth: 0, position: 'relative' }}>
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
              </div>
            </section>
            {idx < services.length - 1 && <div className="gal-divider" aria-hidden="true" />}
          </React.Fragment>
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
