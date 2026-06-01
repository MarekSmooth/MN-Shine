'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  imageSrcs: string[];
}

export default function GalleryLoadingOverlay({ imageSrcs }: Props) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const done = () => {
      if (cancelled) return;
      setFadeOut(true);
      setTimeout(() => { if (!cancelled) setVisible(false); }, 700);
    };

    // Pojistka – max 3 s
    const maxTimer = setTimeout(done, 3000);

    if (imageSrcs.length === 0) {
      setTimeout(done, 400);
      return () => { cancelled = true; clearTimeout(maxTimer); };
    }

    let loaded = 0;
    const minUntil = Date.now() + 600; // zobrazit alespoň 600 ms

    const checkDone = () => {
      loaded++;
      if (loaded >= imageSrcs.length) {
        clearTimeout(maxTimer);
        const wait = Math.max(0, minUntil - Date.now());
        setTimeout(done, wait);
      }
    };

    imageSrcs.forEach(src => {
      const img = new window.Image();
      img.onload = checkDone;
      img.onerror = checkDone;
      img.src = src;
    });

    return () => {
      cancelled = true;
      clearTimeout(maxTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.7s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
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
  );
}
