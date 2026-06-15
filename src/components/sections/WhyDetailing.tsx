'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const benefits = [
  {
    title: 'Ochrana hodnoty vozu',
    description: 'Pravidelná péče o lak a interiér výrazně snižuje opotřebení. Dobře udržované vozidlo si zachovává vyšší tržní hodnotu při prodeji.',
    image: '/whydetailing/hodnota.webp',
  },
  {
    title: 'Zlepšení vzhledu',
    description: 'Vaše auto bude vypadat jako nové. Lesk laku, čistý interiér a ošetřené plasty dají vozu impozantní výsledek.',
    image: '/whydetailing/vzhled.webp',
  },
  {
    title: 'Dlouhodobá péče',
    description: 'Správná ochrana laku a interiéru výrazně prodlužuje životnost povrchů. Investice do detailingu se mnohonásobně vrátí.',
    image: '/whydetailing/pece.webp',
  },
  {
    title: 'Komfort interiéru',
    description: 'Čistý, voňavý interiér bez alergenů a bakterií zajišťuje příjemnější a zdravější prostředí pro cestující.',
    image: '/whydetailing/komfort.webp',
  },
];

const PEEK_HEIGHT = '200px';
const EXPANDED_HEIGHT = '2000px';

export function WhyDetailing() {
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(benefits.length).fill(false));
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)');
    const mobile = mq.matches;
    setIsMobile(mobile);
    if (mobile) setRevealed(new Array(benefits.length).fill(true));
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (e.matches) setRevealed(new Array(benefits.length).fill(true));
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Desktop only: stagger reveal on scroll
  useEffect(() => {
    if (isMobile) return;
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          benefits.forEach((_, i) => {
            setTimeout(() => {
              setRevealed(prev => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#0a0a0a', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader title="Proč detailing dává smysl?" />

        {/* Wrapper for peek clipping + gradient overlay */}
        <div style={{ position: 'relative' }}>
          <div
            style={isMobile ? {
              maxHeight: isExpanded ? EXPANDED_HEIGHT : PEEK_HEIGHT,
              overflow: 'hidden',
              transition: `max-height ${isExpanded ? '0.7s cubic-bezier(0.2, 0, 0, 1)' : '0.5s cubic-bezier(0.4, 0, 1, 1)'}`,
            } : {}}
          >
            <div
              className="why-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '0',
                overflow: 'hidden',
              }}
            >
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  style={{
                    position: 'relative',
                    padding: '2.5rem 2rem',
                    background: '#0f0f0f',
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    opacity: revealed[i] ? 1 : 0,
                    transform: revealed[i] ? 'translateY(0)' : 'translateY(24px)',
                    transition: revealed[i]
                      ? `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`
                      : 'none',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)'; }}
                >
                  {/* Dark overlay for readability */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Content */}
                  <div className="why-content" style={{ position: 'relative', zIndex: 1, maxWidth: '60%' }}>
                    <h3 style={{
                      color: '#FFFFFF',
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textShadow: '0 0 18px rgba(255,255,255,0.25), 0 1px 3px rgba(255,255,255,0.15)',
                      margin: '0 0 1rem',
                      textAlign: 'left',
                    }}>
                      {benefit.title}
                    </h3>

                    <p style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontSize: '0.9rem',
                      lineHeight: 1.8,
                      margin: 0,
                      textAlign: 'left',
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fade into background — visible only on mobile when collapsed */}
          {isMobile && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '110px',
                background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
                pointerEvents: 'none',
                opacity: isExpanded ? 0 : 1,
                transition: 'opacity 0.35s ease',
              }}
            />
          )}
        </div>

        {/* Toggle button — mobile only */}
        {isMobile && (
          <button
            onClick={() => setIsExpanded(v => !v)}
            aria-expanded={isExpanded}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '1.1rem 0',
              marginTop: '0.5rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.55)',
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#ffffff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)'; }}
          >
            <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.12)' }} />
            {isExpanded ? 'Zobrazit méně' : 'Zobrazit více'}
            <ChevronDown
              size={14}
              style={{
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                flexShrink: 0,
              }}
            />
            <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.12)' }} />
          </button>
        )}
      </div>
    </section>
  );
}
