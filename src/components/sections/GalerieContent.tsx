'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { galleryServices as services } from '@/data/gallery';
import type { Pair } from '@/data/gallery';

export default function GalerieContent() {
  const [fullscreen, setFullscreen] = useState<Pair | null>(null);
  const [fsVisible, setFsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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

  const sliderSrcs = services.flatMap(svc =>
    svc.pairs.filter(p => p.before && p.after).slice(0, 3).flatMap(p => [p.before, p.after])
  );

  useEffect(() => {
    let cancelled = false;
    const done = () => {
      if (cancelled) return;
      setFadeOut(true);
      setTimeout(() => { if (!cancelled) setIsLoading(false); }, 700);
    };
    const maxTimer = setTimeout(done, 3000);
    if (sliderSrcs.length === 0) {
      setTimeout(done, 400);
      return () => { cancelled = true; clearTimeout(maxTimer); };
    }
    let loaded = 0;
    const minUntil = Date.now() + 600;
    const checkDone = () => {
      loaded++;
      if (loaded >= sliderSrcs.length) {
        clearTimeout(maxTimer);
        const wait = Math.max(0, minUntil - Date.now());
        setTimeout(done, wait);
      }
    };
    sliderSrcs.forEach(src => {
      const img = new window.Image();
      img.onload = checkDone;
      img.onerror = checkDone;
      img.src = src;
    });
    return () => { cancelled = true; clearTimeout(maxTimer); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {isLoading ? (
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            minHeight: '400px',
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.7s ease',
          }}
        >
          <Image
            src="/mnlogo.png"
            alt="MN Shine"
            width={160}
            height={71}
            priority
            style={{ width: '160px', height: 'auto', display: 'block', animation: 'gallery-logo-in 0.4s ease forwards' }}
          />
          <div className="loading-bar-wrap">
            <div className="loading-bar" />
          </div>
        </div>
      ) : (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {services.map((svc, idx) => (
          <React.Fragment key={svc.id}>
            <section
              id={svc.id}
              style={{ scrollMarginTop: '110px', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
            >
              <div className="gal-row">
                <div className="gal-cover">
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', height: '200px' }}>
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
                  {svc.pairs.filter(p => p.before && p.after).slice(0, 3).map((pair, i) => (
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
      )}
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
