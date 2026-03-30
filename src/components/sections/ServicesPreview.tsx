'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';

const services = [
  {
    title: 'Čištění interiéru',
    description: 'Hloubkové čištění celého interiéru – sedadla, koberce, plasty, strop. Vaše auto bude vonět a vypadat jako nové.',
    image: '/herobg.jpg',
    href: '/sluzby/cisteni-interieru-brno',
  },
  {
    title: 'Čištění exteriéru',
    description: 'Profesionální ruční mytí, dekontaminace a ošetření laku. Vozidlo dokonale čisté zvenku – základ pro každou další péči.',
    image: '/bgorigo.png',
    href: '/sluzby',
  },
  {
    title: 'Renovace laku',
    description: 'Strojní leštění a korekce laku. Odstraníme škrábance, víry a oxidaci – lak bude zářit jako z výroby.',
    image: '/herobg.jpg',
    href: '/sluzby/renovace-laku-brno',
  },
  {
    title: 'Ochrana laku',
    description: 'Keramické povlaky a ochranné fólie pro dlouhodobou ochranu. Hydrofobní efekt, UV ochrana a snadná údržba na roky.',
    image: '/bgorigo.png',
    href: '/sluzby/ochrana-laku-brno',
  },
  {
    title: 'Renovace kůže',
    description: 'Obnova a ošetření kožených sedadel. Odstraníme praskliny a škrábance, obnovíme původní pružnost a lesk kůže.',
    image: '/herobg.jpg',
    href: '/sluzby',
  },
  {
    title: 'Detailing Brno',
    description: 'Kompletní péče o vozidlo od A do Z. Mytí, dekontaminace, leštění, čištění interiéru – auto v showroom kondici.',
    image: '/bgorigo.png',
    href: '/sluzby/detailing-brno',
  },
];

export function ServicesPreview() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each card with a delay
          const items = el.querySelectorAll<HTMLElement>('.stagger-item');
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('revealed'), i * 300);
          });
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link href={service.href} className="service-flip-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="service-flip-inner">

                    {/* Front face — background image only, no title here */}
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
                    </div>

                    {/* Back face — title + description + link */}
                    <div className="service-flip-back">
                      <div style={{
                        width: '100%', height: '100%',
                        backgroundColor: '#111111',
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
                        <div style={{
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
                        <p style={{
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
          <div className="stagger-titles-layer" aria-hidden="true" style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`stagger-title-item stagger-title-item--${i}`}
                style={{ opacity: hoveredIdx === i ? 0 : 1 }}
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

