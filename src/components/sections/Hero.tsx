'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageSquare, Phone } from 'lucide-react';

const slides = [
  {
    image: '/bgarte.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/bgorigo.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/herobg.jpg',
    position: '65% center',
    badge: 'Detailingové studio Vojkovice u Brna',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/1.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/2.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/3.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/4.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/5.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/6.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/7.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/8.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/9.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/10.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/11.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/12.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/13.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
  {
    image: '/14.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: null,
    headingAccent: null,
    text: null,
  },
];

const INTERVAL = 15000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Preload all slide images before starting auto-advance
  useEffect(() => {
    let loaded = 0;
    const total = slides.length;
    slides.forEach(slide => {
      const img = new window.Image();
      img.onload = () => { loaded++; if (loaded === total) setAllLoaded(true); };
      img.onerror = () => { loaded++; if (loaded === total) setAllLoaded(true); };
      img.src = slide.image;
    });
  }, []);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
    setTextKey(k => k + 1);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 1000);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [goTo, current]);
  const back = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [goTo, current]);

  // Auto-advance — only after all images are loaded
  useEffect(() => {
    if (!allLoaded) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [next, current, allLoaded]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <section
      aria-label="Úvodní sekce"
      className="hero-section page-pt"
      style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '18vh', position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', fontFamily: 'var(--font-inter, sans-serif)' }}
    >
      {/* Outgoing slide (fades out + zooms) */}
      {prevSlide && (
        <div
          key={`prev-${prev}`}
          style={{
            position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px',
            backgroundImage: `url(${prevSlide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: prevSlide.position,
            animation: 'hero-zoom-out 1s ease forwards',
          }}
        />
      )}

      {/* Incoming slide (fades in + zooms) */}
      <div
        key={`curr-${current}`}
        style={{
          position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px',
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: slide.position,
          animation: prev !== null ? 'hero-zoom-in 1s ease forwards' : undefined,
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(5,5,5,0.90) 0%, rgba(5,5,5,0.62) 38%, rgba(5,5,5,0.20) 65%, rgba(5,5,5,0.0) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Content */}
      <div className="hero-inner" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div key={textKey} style={{ maxWidth: '700px' }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.75rem', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.1s' }}>
            <span className="badge-line" style={{ width: '36px' }} />
            <span style={{ color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
              <span style={{ color: '#FFFFFF' }}>MN Shine</span>
              <span style={{ margin: '0 0.75em', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>◆</span>
              {slide.badge}
            </span>
            <span className="badge-line" style={{ width: '36px' }} />
          </div>

          {/* Heading */}
          {slide.heading && (
            <h1 style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(1.5rem, min(4.5vw, 4.5vh), 4rem)',
              fontWeight: 600,
              fontStyle: 'normal',
              color: '#FFFFFF',
              lineHeight: 1.18,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              animation: 'hero-text-in 0.7s ease both', animationDelay: '0.22s',
            }}>
              {slide.heading}<br />
              <span style={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.08em' }}>{slide.headingAccent}</span>
            </h1>
          )}

          {/* Paragraph */}
          {slide.text && (
            <p style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              color: '#CCCCCC',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: '0.03em',
              marginBottom: '2.25rem',
              maxWidth: '560px',
              animation: 'hero-text-in 0.7s ease both', animationDelay: '0.34s',
            }}>
              {slide.text}
            </p>
          )}

          {/* CTAs — sharp icon-only buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.46s' }}>
            <Link href="/kontakt" className="hero-icon-btn" aria-label="Objednat termín">
              <MessageSquare size={19} strokeWidth={1.5} />
            </Link>
            <a href="tel:+420702852852" className="hero-icon-btn" aria-label="Zavolat">
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>


        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={back}
        aria-label="Předchozí slide"
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'none', border: 'none', color: '#FFFFFF', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0.75, transition: 'opacity 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        aria-label="Další slide"
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'none', border: 'none', color: '#FFFFFF', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0.75, transition: 'opacity 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot indicators + progress bar */}
      <div style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? '28px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: i === current ? '#FFFFFF' : 'rgba(255,255,255,0.35)', transition: 'width 0.3s, background-color 0.3s', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
