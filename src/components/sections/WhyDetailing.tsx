'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const benefits = [
  {
    title: 'Ochrana hodnoty vozu',
    description: 'Pravidelný detailing chrání lak a interiér před opotřebením. Dobře udržované vozidlo si zachovává vyšší tržní hodnotu při prodeji.',
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
    description: 'Čistý, vonící interiér bez alergenů a bakterií zajišťuje příjemnější a zdravější prostředí pro cestující.',
    image: '/whydetailing/komfort.webp',
  },
];

export function WhyDetailing() {
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(benefits.length).fill(false));
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
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
  }, []);

  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Proč detailing dává smysl?"
        />

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
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
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '60%' }}>
                <h3 style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-inter, sans-serif)',
                  fontSize: '1.05rem',
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
    </section>
  );
}
