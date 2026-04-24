'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const benefits = [
  {
    title: 'Ochrana hodnoty vozu',
    description: 'Pravidelný detailing chrání lak a interiér před opotřebením. Dobře udržované vozidlo si zachovává vyšší tržní hodnotu při prodeji.',
  },
  {
    title: 'Zlepšení vzhledu',
    description: 'Vaše auto bude vypadat jako nové. Lesk laku, čistý interiér a ošetřené plasty dají vozu impozantní výsledek.',
  },
  {
    title: 'Dlouhodobá péče',
    description: 'Správná ochrana laku a interiéru výrazně prodlužuje životnost povrchů. Investice do detailingu se mnohonásobně vrátí.',
  },
  {
    title: 'Komfort interiéru',
    description: 'Čistý, vonící interiér bez alergenů a bakterií zajišťuje příjemnější a zdravější prostředí pro cestující.',
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
          subtitle="Detailing není luxus – je to investice do vašeho vozidla, která se vyplatí."
        />

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
                opacity: revealed[i] ? 1 : 0,
                transform: revealed[i] ? 'translateY(0)' : 'translateY(24px)',
                transition: revealed[i]
                  ? `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`
                  : 'none',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#141414'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0f0f0f'; }}
            >
              <h3 style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-inter, sans-serif)',
                fontSize: '1.05rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textShadow: '0 0 18px rgba(255,255,255,0.25), 0 1px 3px rgba(255,255,255,0.15)',
                margin: '0 0 1rem',
              }}>
                {benefit.title}
              </h3>

              <p style={{
                color: '#7a8490',
                fontFamily: 'var(--font-inter, sans-serif)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
