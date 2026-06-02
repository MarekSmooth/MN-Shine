'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageSquare, Phone, Facebook, Instagram } from 'lucide-react';

const slides = [
  {
    image: '/bg1.webp',
    imageMobile: '/bgmobile/1bgm.webp',
    position: 'center top',
    positionMobile: 'center top',
    badge: 'Detailingové studio Vojkovice u Brna',
    heading: 'Detailing Vojkovice',
    headingAccent: 'u Brna',
    text: null,
  },
  {
    image: '/bg2.webp',
    imageMobile: '/bgmobile/2bgm.webp',
    position: 'center top',
    positionMobile: 'center top',
    badge: 'Čištění interiéru & exteriéru Brno a okolí',
    heading: 'Detailing Vojkovice',
    headingAccent: 'u Brna',
    text: null,
  },
  {
    image: '/bg3.webp',
    imageMobile: '/bgmobile/3bgm.webp',
    position: 'center top',
    positionMobile: 'center top',
    badge: 'Renovace a leštění laku Brno a okolí',
    heading: 'Detailing Vojkovice',
    headingAccent: 'u Brna',
    text: null,
  },
  {
    image: '/bg4.webp',
    imageMobile: '/bgmobile/4bgm.webp',
    position: 'center top',
    positionMobile: 'center top',
    badge: 'Keramická ochrana Brno a okolí',
    heading: 'Detailing Vojkovice',
    headingAccent: 'u Brna',
    text: null,
  },
  {
    image: '/bg5.webp',
    position: 'center top',
    positionMobile: '75% 25%',
    badge: 'Detailing Brno-venkov a okolí',
    heading: 'Detailing Vojkovice',
    headingAccent: 'u Brna',
    text: null,
  },
];

const INTERVAL = 15000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detekce mobilu (< 768px)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
    setTextKey(k => k + 1);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 1000);
  }, [animating, current]);

  const next = useCallback(() => {
    const nextIdx = (current + 1) % slides.length;
    // Přepni až když je další obrázek načtený
    let done = false;
    const doGo = () => { if (!done) { done = true; goTo(nextIdx); } };
    const img = new window.Image();
    img.onload = doGo;
    img.onerror = doGo;
    img.src = slides[nextIdx].image;
    if (img.complete) doGo();
  }, [goTo, current]);

  const back = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [goTo, current]);

  // Průběžný preload: vždy načti 2 slidy dopředu
  useEffect(() => {
    [1, 2].forEach(offset => {
      const slide = slides[(current + offset) % slides.length];
      const img = new window.Image();
      img.src = isMobile && slide.imageMobile ? slide.imageMobile : slide.image;
    });
  }, [current, isMobile]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [next, current]);

  const safeIndex = current % slides.length;
  const slide = slides[safeIndex];
  const prevSlide = prev !== null ? slides[prev % slides.length] : null;

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
          className="hero-bg-slide"
          style={{
            position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px',
            backgroundImage: `url(${isMobile && prevSlide.imageMobile ? prevSlide.imageMobile : prevSlide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? prevSlide.positionMobile : prevSlide.position,
            animation: 'hero-zoom-out 1s ease forwards',
          }}
        />
      )}

      {/* Incoming slide (fades in + zooms) */}
      <div
        key={`curr-${current}`}
        className="hero-bg-slide"
        style={{
          position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px',
          backgroundImage: `url(${isMobile && slide.imageMobile ? slide.imageMobile : slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? slide.positionMobile : slide.position,
          animation: prev !== null ? 'hero-zoom-in 1s ease forwards' : undefined,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(5,5,5,0.90) 0%, rgba(5,5,5,0.62) 38%, rgba(5,5,5,0.20) 65%, rgba(5,5,5,0.0) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Content */}
      <div className="hero-inner hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div key={textKey} style={{ maxWidth: '700px' }}>

          {/* H1 — only on first slide (SEO). Spacer div preserves layout on other slides. */}
          {safeIndex === 0 && slide.heading ? (
            <h1 className="hero-headline" style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: 'clamp(2.5rem, min(7vw, 7vh), 6.5rem)',
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#FFFFFF',
              lineHeight: 1.18,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              whiteSpace: 'nowrap',
              animation: 'hero-text-in 0.7s ease both', animationDelay: '0.1s',
            }}>
              {slide.heading} <span style={{ fontWeight: 400 }}>{slide.headingAccent}</span>
            </h1>
          ) : slide.heading ? (
            <div aria-hidden="true" style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: 'clamp(2.5rem, min(7vw, 7vh), 6.5rem)',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              whiteSpace: 'nowrap',
              visibility: 'hidden',
            }}>&nbsp;</div>
          ) : null}

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.75rem', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.22s' }}>
            <span className="badge-line" style={{ width: '36px' }} />
            <span style={{ color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
              <span style={{ color: '#FFFFFF' }}>MN Shine</span>
              <span style={{ margin: '0 0.75em', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>◆</span>
              {slide.badge}
            </span>
            <span className="badge-line" style={{ width: '36px' }} />
          </div>

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

          {/* CTAs — sharp icon + label buttons */}
          <div className="hero-cta-row" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', animation: 'hero-text-in 0.7s ease both', animationDelay: '0.46s' }}>
            <Link href="/kontakt" className="hero-icon-btn" aria-label="Objednat termín">
              <MessageSquare size={19} strokeWidth={1.5} />
              <span className="hero-icon-btn__label">Napište nám</span>
            </Link>
            <a href="tel:+420702852852" className="hero-icon-btn" aria-label="Zavolat">
              <Phone size={20} strokeWidth={1.5} />
              <span className="hero-icon-btn__label">Zavolejte</span>
            </a>

          </div>


        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={back}
        aria-label="Předchozí slide"
        className="hero-arrow"
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'none', border: 'none', color: '#FFFFFF', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0.75, transition: 'opacity 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        aria-label="Další slide"
        className="hero-arrow"
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'none', border: 'none', color: '#FFFFFF', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0.75, transition: 'opacity 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
      >
        <ChevronRight size={28} />
      </button>

      {/* Social icons — bottom left */}
      <div className="hero-social-icons" style={{ position: 'absolute', bottom: '1.75rem', left: '5.5rem', zIndex: 3, display: 'flex', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
        <a href="https://www.facebook.com/profile.php?id=100093812870789" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', transition: 'background-color 0.2s, border-color 0.2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.55)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}>
          <Facebook size={18} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/mnshine_detailing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', transition: 'background-color 0.2s, border-color 0.2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.55)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}>
          <Instagram size={18} strokeWidth={1.5} />
        </a>
      </div>

      {/* Dot indicators + progress bar */}
      <div className="hero-dots-desktop" style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? '28px' : '8px', height: '8px', borderRadius: '0', border: 'none', cursor: 'pointer', backgroundColor: i === current ? '#FFFFFF' : 'rgba(255,255,255,0.35)', transition: 'width 0.3s, background-color 0.3s', padding: 0 }}
            />
          ))}
        </div>
      </div>
      {/* Mobile bottom bar: [ Social ] [ Dots ] [ Arrows ] */}
      <div className="hero-mobile-bottom">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="https://www.facebook.com/profile.php?id=100093812870789" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)' }}>
            <Facebook size={16} strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/mnshine_detailing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)' }}>
            <Instagram size={16} strokeWidth={1.5} />
          </a>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? '28px' : '8px', height: '4px', borderRadius: '2px', border: 'none', cursor: 'pointer', backgroundColor: i === current ? '#FFFFFF' : 'rgba(255,255,255,0.35)', transition: 'width 0.3s, background-color 0.3s', padding: 0 }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button onClick={back} aria-label="Předchozí slide" style={{ background: 'none', border: 'none', color: '#FFFFFF', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronLeft size={22} />
          </button>
          <button onClick={next} aria-label="Další slide" style={{ background: 'none', border: 'none', color: '#FFFFFF', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
