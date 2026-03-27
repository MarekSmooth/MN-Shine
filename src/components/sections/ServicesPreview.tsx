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
  return (
    <section style={{ backgroundColor: '#F4F4F4', padding: '3rem 1.5rem 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Naše služby"
          subtitle="Kompletní péče o vaše vozidlo pod jednou střechou. Od čištění interiéru po keramickou ochranu."
          light
          goldLine={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {services.map((service) => (
            <div key={service.title}>
              {/* Flip card */}
              <div className="service-flip-card" style={{ perspective: '1000px' }}>
                <div className="service-flip-inner">

                  {/* Front face — photo + title */}
                  <div className="service-flip-front">
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.10) 100%)',
                    }} />
                    {/* Title */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '1.75rem 1.5rem',
                    }}>
                      <h3 style={{
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-cinzel, serif)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        margin: 0,
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                      }}>{service.title}</h3>
                      <div style={{
                        marginTop: '0.5rem',
                        width: '32px',
                        height: '2px',
                        backgroundColor: '#FFFFFF',
                        opacity: 0.7,
                      }} />
                    </div>
                  </div>

                  {/* Back face — description */}
                  <div className="service-flip-back">
                    <div style={{
                      width: '100%', height: '100%',
                      backgroundColor: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem 2rem',
                    }}>
                      <div>
                        <h3 style={{
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
                        <p style={{
                          color: '#CCCCCC',
                          lineHeight: 1.8,
                          margin: 0,
                          fontSize: '0.92rem',
                        }}>{service.description}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Button below the card */}
              <div style={{ marginTop: '1.1rem', textAlign: 'center' }}>
                <Link href={service.href} className="service-btn">
                  Zjistit více
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

