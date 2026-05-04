'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    title: 'Individuální přístup',
    description: 'Ke každému vozidlu přistupujeme individuálně. Provedeme důkladnou prohlídku a navrhneme optimální řešení pro váš vůz.',
    image: '/whyus/individual.webp',
  },
  {
    title: 'Prémiové produkty',
    description: 'Používáme výhradně profesionální přípravky od renomovaných značek. Žádné kompromisy v kvalitě materiálů.',
    image: '/whyus/produkty.webp',
  },
  {
    title: 'Moderní vybavení',
    description: 'Naše studio je vybaveno profesionálními nástroji a přístroji pro dosažení nejlepších výsledků.',
    image: '/whyus/vybaveni.webp',
  },
  {
    title: 'Důraz na detail',
    description: 'Každý detail je pro nás důležitý. Věnujeme pozornost místům, která jiní přehlíží.',
    image: '/whyus/detail.webp',
  },
  {
    title: 'Kvalita nad kvantitu',
    description: 'Raději uděláme méně zakázek, ale každou na 100 %. Vaše spokojenost a výsledek jsou naší prioritou.',
    image: '/whyus/kvalita.webp',
  },
];

export function WhyUs() {
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(features.length).fill(false));
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [...Array(features.length)].forEach((_, i) => {
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
          title="Proč si vybrat MN Shine?"

        />

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {features.map((feature, i) => {
            const isWide = i >= 3; // bottom 2 cards span 3 cols each
            return (
              <div
                key={feature.title}
                style={{
                  gridColumn: isWide ? 'span 3' : 'span 2',
                  position: 'relative',
                  padding: '2.5rem 2rem',
                  background: '#0f0f0f',
                  backgroundImage: `url(${feature.image})`,
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
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.filter = 'brightness(1)';
                }}
              >
                {/* Dark overlay for readability */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Content — left aligned, max half width */}
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '55%' }}>
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
                    {feature.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontFamily: 'var(--font-inter, sans-serif)',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    margin: 0,
                    textAlign: 'left',
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}


        </div>
      </div>
    </section>
  );
}
