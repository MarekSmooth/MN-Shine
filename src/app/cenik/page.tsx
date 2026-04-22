import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ceník služeb | MN Shine Detailing Brno',
  description: 'Ceník auto detailingu MN Shine Brno. Čištění interiéru, exteriéru, keramická ochrana laku, renovace a leštění. Ceny od 500 Kč.',
};

const packages = [
  {
    name: 'Basic',
    price: 'od 1 500 Kč',
    description: 'Ideální pro pravidelnou údržbu vozidla.',
    items: [
      'Ruční předmytí a šamponování',
      'Čištění kol a podběhů',
      'Vyčištění interiéru',
      'Ošetření plastů',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    price: 'od 4 500 Kč',
    description: 'Komplexní péče pro náročné zákazníky.',
    items: [
      'Vše z balíčku Basic',
      'Dekontaminace laku (clay bar)',
      'Hloubkové čištění interiéru',
      'Strojní leštění (1-step)',
      'Vosk nebo sealant',
    ],
    highlight: true,
  },
  {
    name: 'Full Detail',
    price: 'od 9 000 Kč',
    description: 'Maximální péče — výsledek jako z výroby.',
    items: [
      'Vše z balíčku Premium',
      'Korekce laku (2-step)',
      'Keramická ochrana',
      'Renovace světel',
      'Ošetření kůže',
    ],
    highlight: false,
  },
];

export default function CenikPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Transparentní ceny
          </div>
          <h1 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Ceník služeb
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Ceny jsou orientační a liší se podle velikosti, stavu a typu vozidla. Přesnou kalkulaci připravíme po osobní prohlídce.
          </p>
        </div>

        {/* Packages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {packages.map(pkg => (
            <div
              key={pkg.name}
              style={{
                backgroundColor: pkg.highlight ? '#FFFFFF' : '#111111',
                border: pkg.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: pkg.highlight ? '#0a0a0a' : '#9CA3AF', marginBottom: '0.5rem' }}>
                  {pkg.name}
                </div>
                <div style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.8rem', fontWeight: 700, color: pkg.highlight ? '#0a0a0a' : '#FFFFFF' }}>
                  {pkg.price}
                </div>
                <p style={{ color: pkg.highlight ? '#444444' : '#9CA3AF', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                  {pkg.description}
                </p>
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: pkg.highlight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {pkg.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: pkg.highlight ? '#1a1a1a' : '#CCCCCC', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    <span style={{ color: pkg.highlight ? '#0a0a0a' : '#FFFFFF', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <Link
                  href="/kontakt"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.875rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    backgroundColor: pkg.highlight ? '#0a0a0a' : 'transparent',
                    color: pkg.highlight ? '#FFFFFF' : '#CCCCCC',
                    border: pkg.highlight ? 'none' : '1px solid rgba(255,255,255,0.3)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Nezávazná poptávka
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Individual services */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#FFFFFF', marginBottom: '0.75rem', textAlign: 'center' }}>
            Jednotlivé služby
          </h2>
          <p style={{ color: '#9CA3AF', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Vyberete si přesně to, co vaše vozidlo potřebuje.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {services.map((service, idx) => (
              <div
                key={service.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  borderBottom: idx < services.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                  gap: '1rem',
                  flexWrap: 'wrap' as const,
                }}
              >
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    {service.title}
                  </div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {service.shortDescription}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' as const }}>
                    {service.price ?? 'na dotaz'}
                  </span>
                  <Link
                    href={`/sluzby/${service.slug}`}
                    style={{ color: '#9CA3AF', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '1px', whiteSpace: 'nowrap' as const }}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note + CTA */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '8px',
          padding: '2.5rem',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Nejste si jisti, co váš vůz potřebuje?
          </h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.75rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 1.75rem' }}>
            Napište nám nebo zavolejte. Provedeme bezplatnou diagnostiku stavu vozidla a navrhneme optimální řešení za férovou cenu.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Nezávazná poptávka
            </Link>
            <a href="tel:+420702852852" style={{ border: '1px solid rgba(255,255,255,0.35)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              +420 702 852 852
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
