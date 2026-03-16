'use client';

import { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  label?: string;
}

export function BeforeAfterSlider({ label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

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
        height: '280px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        border: '1px solid rgba(200,169,126,0.2)',
      }}
      aria-label={`Porovnání před a po: ${label || 'detailing'}`}
    >
      {/* Before (left) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #0a0a0a 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.4rem 1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', background: 'rgba(0,0,0,0.5)' }}>PŘED</span>
      </div>

      {/* After (right, clipped) */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: `inset(0 ${100 - position}% 0 0)`,
        background: 'linear-gradient(135deg, #2a1f0e 0%, #C8A97E33 50%, #1a1200 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ color: '#C8A97E', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.4rem 1rem', border: '1px solid rgba(200,169,126,0.5)', borderRadius: '4px', background: 'rgba(0,0,0,0.5)' }}>PO</span>
      </div>

      {/* Divider handle */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: `${position}%`,
        transform: 'translateX(-50%)',
        width: '2px',
        backgroundColor: '#C8A97E',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#C8A97E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}>
          <span aria-hidden="true" style={{ color: '#0a0a0a', fontSize: '0.7rem', fontWeight: 700 }}>◀▶</span>
        </div>
      </div>

      {label && (
        <div style={{ position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)', color: '#9CA3AF', fontSize: '0.75rem', whiteSpace: 'nowrap', background: 'rgba(0,0,0,0.7)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
          {label}
        </div>
      )}
    </div>
  );
}
