'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galleryServices } from '@/data/gallery';
import GalleryLoadingOverlay from '@/components/ui/GalleryLoadingOverlay';

interface Props {
  kategorie: string;
}

export default function KategorieGalerieContent({ kategorie }: Props) {
  const service = galleryServices.find(s => s.id === kategorie);
  const images: string[] = service
    ? service.pairs.flatMap(p => [p.before, p.after].filter(Boolean))
    : [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [fsVisible, setFsVisible] = useState(false);

  const openFs = (index: number) => {
    setActiveIndex(index);
    requestAnimationFrame(() => requestAnimationFrame(() => setFsVisible(true)));
  };

  const closeFs = useCallback(() => {
    setFsVisible(false);
    setTimeout(() => setActiveIndex(null), 320);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex(i => i !== null ? (i + 1) % images.length : null);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFs();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    if (activeIndex !== null) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, closeFs, goNext, goPrev]);

  if (images.length === 0) {
    return (
      <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '4rem 0', fontSize: '0.95rem' }}>
        Fotografie budou brzy k dispozici.
      </p>
    );
  }

  return (
    <>
      {/* Thumbnail grid */}
      <div style={{ position: 'relative' }}>
        <GalleryLoadingOverlay imageSrcs={images.slice(0, 9)} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '6px',
        }}>
        {images.map((src, idx) => (
          <div
            key={idx}
            onClick={() => openFs(idx)}
            style={{ cursor: 'zoom-in', backgroundColor: '#111', overflow: 'hidden' }}
          >
            {/* paddingTop 75% = 3/4 → spolehlivě landscape kontejner pro fill Image */}
            <div style={{ position: 'relative', paddingTop: '75%' }}>
              <Image
                src={src}
                alt={`${service?.name ?? ''} – fotografie ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          onClick={closeFs}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: fsVisible ? 'rgba(0,0,0,0.96)' : 'rgba(0,0,0,0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background-color 0.3s ease',
            cursor: 'zoom-out',
          }}
        >
          {/* Active image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(92vw, 1200px)',
              height: 'min(82vh, 800px)',
              transform: fsVisible ? 'scale(1)' : 'scale(0.86)',
              opacity: fsVisible ? 1 : 0,
              transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
            }}
          >
            <Image
              src={images[activeIndex]}
              alt={`${service?.name ?? ''} – fotografie ${activeIndex + 1}`}
              fill
              sizes="92vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Prev arrow */}
          <button
            onClick={e => { e.stopPropagation(); goPrev(); }}
            aria-label="Předchozí fotografie"
            style={{
              position: 'fixed', left: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '50%', width: '3rem', height: '3rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 1001, flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={e => { e.stopPropagation(); goNext(); }}
            aria-label="Další fotografie"
            style={{
              position: 'fixed', right: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '50%', width: '3rem', height: '3rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 1001, flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <div style={{
            position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', letterSpacing: '0.12em',
            zIndex: 1001, userSelect: 'none',
          }}>
            {activeIndex + 1} / {images.length}
          </div>

          {/* Close */}
          <button
            onClick={closeFs}
            aria-label="Zavřít"
            style={{
              position: 'fixed', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '50%', width: '2.5rem', height: '2.5rem',
              cursor: 'pointer', fontSize: '1.1rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 1001,
            }}
          >✕</button>
        </div>
      )}
    </>
  );
}
