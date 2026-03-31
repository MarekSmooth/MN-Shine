'use client';

import { useState, useEffect, useRef } from 'react';
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
    title: 'Čištění interiéru',
    description: 'Hloubkové čištění celého interiéru – sedadla, koberce, plasty, strop. Vaše auto bude vonět a vypadat jako nové.',
    image: '/icons/interier.webp',
    href: '/sluzby/cisteni-interieru-brno',
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
    title: 'Renovace kůže',
    description: 'Obnova a ošetření kožených sedadel. Odstraníme praskliny a škrábance, obnovíme původní pružnost a lesk kůže.',
    image: '/icons/kuze.webp',
    href: '/sluzby#renovace-kuze',
  },
  {
    title: 'Oprava škrábanců',
    description: 'Precizní oprava povrchových i hlubších škrábanců laku. Minimálně invazivní metody na místě bez nutnosti lakovny.',
    image: '/icons/skrabance.webp',
    href: '/sluzby#oprava-skrabancu',
  },
];

export function ServicesPreview() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [revealedCards, setRevealedCards] = useState<boolean[]>(() => new Array(services.length).fill(false));
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
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
            }, i * 300);
          });
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: '#F4F4F4', padding: '3rem 1.5rem 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Naše služby"
          subtitle="Kompletní péče o vaše vozidlo pod jednou střechou. Od čištění interiéru po keramickou ochranu."
          light
          goldLine={false}
        />

        <div style={{ position: 'relative' }}>
          {/* Card row — cards contain only background image, back face has title+desc */}
          <div className="stagger-row" ref={rowRef}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`stagger-item stagger-item--${i}`}
                style={{
                  opacity: revealedCards[i] ? 1 : 0,
                  transition: revealedCards[i] ? `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05}s` : 'none',
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link href={service.href} className="service-flip-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="service-flip-inner">

                    {/* Front face — background image + mobile title */}
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
                      {/* Title shown on mobile only — overlay layer is hidden on mobile */}
                      <div className="service-front-title-mobile">
                        <h3>{service.title}</h3>
                      </div>
                    </div>

                    {/* Back face — same bg image, darkened, with text on top */}
                    <div className="service-flip-back">
                      {/* Background image — same as front */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }} />
                      {/* Dark overlay — much heavier than front */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,0,0,0.78)',
                      }} />
                      <div className="service-flip-back-inner" style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%', height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '2rem',
                      }}>
                        <h3 className="service-text-raised" style={{
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-cinzel, serif)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          margin: '0 0 1rem',
                          letterSpacing: '0.05em',
                        }}>{service.title}</h3>
                        <div className="service-back-divider" style={{
                          width: '28px', height: '2px',
                          backgroundColor: '#FFFFFF',
                          opacity: 0.4,
                          marginBottom: '1.25rem',
                        }} />
                        <p className="service-desc-raised" style={{
                          color: '#CCCCCC',
                          lineHeight: 1.8,
                          margin: 0,
                          fontSize: '0.92rem',
                        }}>{service.description}</p>
                        <p className="service-back-more" style={{
                          marginTop: '1.25rem',
                          color: 'rgba(255,255,255,0.45)',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          margin: '1.25rem 0 0',
                        }}>Zjistěte více &rarr;</p>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Title overlay — z:50, always above all cards regardless of stacking contexts */}
          <div className="stagger-titles-layer" aria-hidden="true">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`stagger-title-item stagger-title-item--${i}`}
                style={{
                  opacity: !revealedCards[i] ? 0 : hoveredIdx === i ? 0 : 1,
                  transition: revealedCards[i]
                    ? `opacity ${hoveredIdx === i ? '0.25s' : '0.8s'} ease`
                    : 'none',
                }}
              >
                <h3 className="service-text-raised" style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-cinzel, serif)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: '0.05em',
                }}>{service.title}</h3>
                <div style={{
                  marginTop: '0.5rem',
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#FFFFFF',
                  opacity: 0.7,
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

