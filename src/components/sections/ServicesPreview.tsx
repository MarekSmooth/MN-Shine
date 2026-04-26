'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';

const services = [
  {
    title: 'Čištění exteriéru',
    description: 'Profesionální ruční mytí, dekontaminace a ošetření laku. Vozidlo dokonale čisté zvenku – základ pro každou další péči.',
    image: '/icons/exterier.webp',
    href: '/sluzby#cisteni-exterieru',
  },
  {
    title: 'Ochrana laku',
    description: 'Keramické povlaky a ochranné fólie pro dlouhodobou ochranu. Hydrofobní efekt, UV ochrana a snadná údržba na roky.',
    image: '/icons/ochrana.webp',
    href: '/sluzby/ochrana-laku-brno',
  },
  {
    title: 'Renovace kůže',
    description: 'Obnova a ošetření kožených sedadel. Odstraníme praskliny a škrábance, obnovíme původní pružnost a lesk kůže.',
    image: '/icons/kuze.webp',
    href: '/sluzby#renovace-kuze',
  },
  {
    title: 'Renovace laku',
    description: 'Strojní leštění a korekce laku. Odstraníme škrábance, víry a oxidaci – lak bude zářit jako z výroby.',
    image: '/icons/renovacelak.webp',
    href: '/sluzby/renovace-laku-brno',
  },
  {
    title: 'Renovace světel',
    description: 'Obnova zakalených světlometů. Obnovíme průhlednost a čistotu světel, zlepšíme osvětlení a vzhled vozidla.',
    image: '/icons/svetla.webp',
    href: '/sluzby#renovace-svetel',
  },
  {
    title: 'Čištění interiéru',
    description: 'Hloubkové čištění celého interiéru – sedadla, koberce, plasty, strop. Vaše auto bude vonět a vypadat jako nové.',
    image: '/icons/interier.webp',
    href: '/sluzby/cisteni-interieru-brno',
  },
  {
    title: 'Oprava škrábanců',
    description: 'Precizní oprava povrchových i hlubších škrábanců laku. Minimálně invazivní metody na místě bez nutnosti lakovny.',
    image: '/icons/skrabance.webp',
    href: '/sluzby#oprava-skrabancu',
  },
];

// Row 1: 4 skewed tiles | Row 2: 3 centered tiles
const ROW1 = [0, 5, 3, 1]; // Čištění ext, Čištění interiéru, Renovace laku, Ochrana laku
const ROW2 = [4, 2, 6];    // Renovace světel, Renovace kůže, Oprava škrábanců
const CARD_HEIGHT = 220;

export function ServicesPreview() {
  const [revealedCards, setRevealedCards] = useState<boolean[]>(() => new Array(services.length).fill(false));
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          services.forEach((_, i) => {
            setTimeout(() => {
              setRevealedCards(prev => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderCard = (serviceIdx: number, skewed: boolean, displayPos: number) => {
    const service = services[serviceIdx];
    const revealed = revealedCards[serviceIdx];
    return (
      <div
        key={service.title}
        className="service-border-wrapper"
        style={{
          height: CARD_HEIGHT,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(28px)',
          transition: revealed
            ? `opacity 0.7s ease ${displayPos * 0.12}s, transform 0.7s ease ${displayPos * 0.12}s`
            : 'none',
        }}
      >
        <div className="service-border-glow" aria-hidden="true" />
        <Link href={service.href} className="service-flip-card" style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
          <div className="service-flip-inner" style={{ height: '100%', borderRadius: 0 }}>

                {/* Front face */}
                <div className="service-flip-front">
                  <div className="service-flip-front-bg">
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.05) 100%)',
                    }} />
                  </div>
                  <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.25rem', transform: 'translateZ(60px)' }}>
                    <h3 className="service-text-raised" style={{
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      margin: 0,
                      letterSpacing: '0.05em',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                    }}>{service.title}</h3>
                  </div>
                </div>

                {/* Back face */}
                <div className="service-flip-back">
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 0, overflow: 'hidden' }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.78)' }} />
                  </div>
                  <div className="service-flip-back-inner" style={{
                    position: 'relative', zIndex: 1,
                    width: '100%', height: '100%',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem 2.5rem',
                    textAlign: 'center',
                    transform: 'translateZ(60px)',
                  }}>
                    <h3 className="service-text-raised" style={{
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      margin: '0 0 0.75rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>{service.title}</h3>
                    <p className="service-desc-raised" style={{
                      color: '#CCCCCC', lineHeight: 1.8, margin: 0, fontSize: '0.92rem',
                    }}>{service.description}</p>
                    <p className="service-back-more" style={{
                      marginTop: '1.25rem',
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}>Zjistěte více &rarr;</p>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        );
  };

  return (
    <section style={{ backgroundColor: '#FAFAFA', padding: '3rem 1.5rem 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader title="MN Shine služby" goldLine={false} light />

        <div ref={gridRef}>
          {/* Row 1 — 4 skewed parallelogram tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '8px' }}>
            {ROW1.map((idx, pos) => renderCard(idx, true, pos))}
          </div>
          {/* Row 2 — 3 centered skewed tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', maxWidth: '75%', margin: '0 auto' }}>
            {ROW2.map((idx, pos) => renderCard(idx, true, ROW1.length + pos))}
          </div>
        </div>
      </div>
    </section>
  );
}

