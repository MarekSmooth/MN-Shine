'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/bg1.png', '/bg2.png', '/bg3.png', '/bg4.png',
  '/bg5.png', '/bg6.png', '/bg7.png',
];

function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // resolve anyway so we never hang
        })
    )
  );
}

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    preloadImages(HERO_IMAGES).then(() => {
      // small delay so the animation has at least one full cycle
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 700);
      }, 800);
    });
  }, []);

  return (
    <>
      {visible && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
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
          {/* Logo – reveal z tmy zleva */}
          <div className="loading-logo-wrap">
            <Image
              src="/mnlogo.png"
              alt="MN Shine"
              width={180}
              height={80}
              priority
              className="loading-logo-img"
              style={{ width: '180px', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Úzký progress bar */}
          <div className="loading-bar-wrap">
            <div className="loading-bar" />
          </div>
        </div>
      )}
      <div style={{ visibility: visible && !fadeOut ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
}
