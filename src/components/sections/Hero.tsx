'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/bgorigo.png',
    position: 'center center',
    badge: 'Prémiová péče o váš vůz',
    heading: <>Keramická ochrana<br />a renovace laku</>,
    headingAccent: 'Jihomoravský kraj',
    text: <>Korekce laku, keramické povlaky a dlouhodobá ochrana. Výsledky, které <strong style={{ color: '#FFFFFF' }}>mluví samy za sebe</strong>.</>,
  },
  {
    image: '/herobg.jpg',
    position: '65% center',
    badge: 'Detailingové studio Vojkovice u Brna',
    heading: <>Profesionální detailing<br />a čištění vozů</>,
    headingAccent: 'Vojkovice u Brna',
    text: <>Kompletní péče o vaše vozidlo — detailing, čištění interiéru, renovace a ochrana laku.</>,
  },
];

const INTERVAL = 15000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [next, current]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <section
      aria-label="Úvodní sekce"
      className="page-pt"
      style={{ minHeight: 'min(63vh, calc(100svh - 220px), 560px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}
    >
      {/* Outgoing slide (fades out + zooms) */}
      {prevSlide && (
        <div
          key={`prev-${prev}`}
          style={{
            position: 'absolute', top: '-2%', left: 0, right: 0, bottom: '-2%',
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
          position: 'absolute', top: '-2%', left: 0, right: 0, bottom: '-2%',
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
              <span style={{ color: '#C8A97E' }}>MN Shine</span>
              <span style={{ margin: '0 0.75em', color: 'rgba(200,169,126,0.5)', fontWeight: 300 }}>◆</span>
              {slide.badge}
            </span>
            <span className="badge-line" style={{ width: '36px' }} />
          </div>

          {/* Heading */}
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
            <span style={{ color: '#C8A97E', fontWeight: 700, letterSpacing: '0.08em' }}>{slide.headingAccent}</span>
          </h1>

          {/* Paragraph */}
          <p style={{
            fontFamily: 'var(--font-inter, sans-serif)',
            color: '#B8AEA8',
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

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.46s' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.02em', transition: 'background-color 0.2s' }}>
              Objednat termín
            </Link>
            <a href="tel:+420777123456" style={{ backgroundColor: 'transparent', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem', border: '1px solid #C8A97E', transition: 'all 0.2s' }}>
              Zavolat: +420 777 123 456
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.58s' }}>
            {[
              { value: '5★', label: 'Hodnocení zákazníků' },
              { value: '100+', label: 'Spokojených zákazníků' },
              { value: '5+', label: 'Let zkušeností' },
            ].map(item => (
              <div key={item.value}>
                <div style={{ color: '#C8A97E', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-cinzel, serif)' }}>{item.value}</div>
                <div style={{ color: '#A09890', fontSize: '0.8rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={back}
        aria-label="Předchozí slide"
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(200,169,126,0.3)', color: '#C8A97E', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,126,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#C8A97E'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.35)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,126,0.3)'; }}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Další slide"
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(200,169,126,0.3)', color: '#C8A97E', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,126,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#C8A97E'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.35)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,126,0.3)'; }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators + progress bar */}
      <div style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? '28px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: i === current ? '#C8A97E' : 'rgba(200,169,126,0.35)', transition: 'width 0.3s, background-color 0.3s', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
