'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface ImagePair {
  before: string;
  after: string;
}

interface BeforeAfterSliderProps {
  label?: string;
  beforeImage?: string;
  afterImage?: string;
  pairs?: ImagePair[];
}

const FADE_DURATION = 450;
const CYCLE_INTERVAL = 15000;

export function BeforeAfterSlider({ label, beforeImage, afterImage, pairs: pairsProp }: BeforeAfterSliderProps) {
  const pairs: ImagePair[] = pairsProp && pairsProp.length > 0
    ? pairsProp
    : (beforeImage && afterImage ? [{ before: beforeImage, after: afterImage }] : []);

  const [displayIdx, setDisplayIdx] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const displayIdxRef = useRef(0);

  useEffect(() => {
    if (pairs.length <= 1) return;
    const interval = setInterval(() => {
      // 1. Fade out
      setFadeOut(true);
      // 2. Midpoint: swap image + reset slider (while invisible)
      setTimeout(() => {
        const next = (displayIdxRef.current + 1) % pairs.length;
        displayIdxRef.current = next;
        setDisplayIdx(next);
        setPosition(50);
        // 3. Fade back in
        setFadeOut(false);
      }, FADE_DURATION);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [pairs.length]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = useCallback(() => { isDragging.current = true; }, []);
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => { if (isDragging.current) updatePosition(e.clientX); }, [updatePosition]);
  const onMouseUp = useCallback(() => { isDragging.current = false; }, []);
  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => { updatePosition(e.touches[0].clientX); }, [updatePosition]);

  const pair = pairs[displayIdx] ?? { before: '', after: '' };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        boxShadow: `
          0 2px 4px rgba(0,0,0,0.18),
          0 8px 20px rgba(0,0,0,0.30),
          0 20px 48px rgba(0,0,0,0.24),
          inset 0  4px 0 rgba(255,255,255,0.10),
          inset  4px 0 0 rgba(255,255,255,0.05),
          inset 0 -4px 0 rgba(0,0,0,0.40),
          inset -4px 0 0 rgba(0,0,0,0.20)
        `,
      }}
      aria-label={`Porovnání před a po: ${label || 'detailing'}`}
    >
      {/* Images wrapper — fades as one unit during transition */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: fadeOut ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms ease`,
      }}>
        {/* PŘED */}
        <div style={{
          position: 'absolute', inset: 0,
          background: pair.before
            ? `url(${pair.before}) center/cover no-repeat`
            : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 40%)' }} />
          <span style={{
            position: 'absolute', top: '1rem', left: '1rem',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', fontFamily: 'var(--font-rubik, sans-serif)',
          }}>PŘED</span>
        </div>

        {/* PO — clipped */}
        <div style={{
          position: 'absolute', inset: 0,
          clipPath: `inset(0 0 0 ${position}%)`,
          background: pair.after
            ? `url(${pair.after}) center/cover no-repeat`
            : 'linear-gradient(135deg, #0f1520 0%, #1e2a38 50%, #0a0f17 100%)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 40%)' }} />
          <span style={{
            position: 'absolute', top: '1rem', right: '1rem',
            color: 'rgba(255,255,255,0.90)',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', fontFamily: 'var(--font-rubik, sans-serif)',
          }}>PO</span>
        </div>
      </div>

      {/* Divider line */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: `${position}%`,
        transform: 'translateX(-50%)',
        width: '2px',
        background: 'rgba(255,255,255,0.9)',
        pointerEvents: 'none',
        boxShadow: '0 0 8px rgba(255,255,255,0.4)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '38px', height: '38px', borderRadius: '50%',
          backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
            <path d="M5 1L1 5L5 9" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 1L15 5L11 9" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Label */}
      {label && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '1.8rem 1.25rem 1rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}>
          <p style={{
            margin: 0, color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700,
            letterSpacing: '0.04em', fontFamily: 'var(--font-rubik, sans-serif)',
            textShadow: '0 1px 4px rgba(0,0,0,0.8)',
          }}>{label}</p>
        </div>
      )}

      {/* Pagination dots */}
      {pairs.length > 1 && (
        <div style={{
          position: 'absolute', bottom: '0.8rem', right: '1rem',
          display: 'flex', gap: '5px', pointerEvents: 'none',
        }}>
          {pairs.map((_, i) => (
            <div key={i} style={{
              width: i === displayIdx ? '16px' : '6px',
              height: '6px', borderRadius: '3px',
              backgroundColor: i === displayIdx ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>
      )}
    </div>
  );
}
