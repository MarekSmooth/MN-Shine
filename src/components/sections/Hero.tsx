import Link from 'next/link';

export function Hero() {
  return (
    <section
      aria-label="Úvodní sekce"
      className="page-pt"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/herobg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '65% center',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Overlay — vlevo tma (text čitelný), vpravo průhledné (auto viditelné) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.60) 38%, rgba(5,5,5,0.18) 62%, rgba(5,5,5,0.0) 100%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <div className="hero-badge" style={{
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '2rem',
          }}>
            <span className="badge-line" style={{ width: '36px' }} />
            <span style={{
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              textShadow: '0 1px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)',
            }}>
              <span style={{ color: '#C8A97E' }}>MN Shine</span>
              <span style={{ margin: '0 0.75em', color: 'rgba(200,169,126,0.5)', fontWeight: 300 }}>◆</span>
              Detailingové studio pro Brno a okolí
            </span>
            <span className="badge-line" style={{ width: '36px' }} />
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair, serif)',
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>
            Profesionální detailing a čištění vozů<br />
            <span style={{ color: '#C8A97E' }}>Vojkovice u Brna</span>
          </h1>

          <p style={{
            color: '#A09890',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '560px',
          }}>
            Staráme se o vaše vozidlo s maximální precizností a péčí. Naše studio ve <strong style={{ color: '#FFFFFF' }}>Vojkovicích u Brna</strong> nabízí kompletní detailing, čištění interiéru, renovaci a ochranu laku pro zákazníky z celého <strong style={{ color: '#FFFFFF' }}>Jihomoravského kraje</strong>.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/kontakt"
              style={{
                backgroundColor: '#C8A97E',
                color: '#0a0a0a',
                fontWeight: 700,
                padding: '0.875rem 2rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                transition: 'background-color 0.2s',
              }}
            >
              Objednat termín
            </Link>
            <a
              href="tel:+420777123456"
              style={{
                backgroundColor: 'transparent',
                color: '#C8A97E',
                fontWeight: 600,
                padding: '0.875rem 2rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid #C8A97E',
                transition: 'all 0.2s',
              }}
            >
              Zavolat: +420 777 123 456
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[
              { value: '5★', label: 'Hodnocení zákazníků' },
              { value: '100+', label: 'Spokojených zákazníků' },
              { value: '5+', label: 'Let zkušeností' },
            ].map(item => (
              <div key={item.value}>
                <div style={{ color: '#C8A97E', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)' }}>{item.value}</div>
                <div style={{ color: '#A09890', fontSize: '0.8rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none' }}>
        <span style={{ color: 'rgba(200,169,126,0.55)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
        <div className="bounce-arrow" style={{ width: '10px', height: '10px', borderRight: '1.5px solid rgba(200,169,126,0.65)', borderBottom: '1.5px solid rgba(200,169,126,0.65)' }} />
      </div>
    </section>
  );
}
