import Link from 'next/link';

export function Hero() {
  return (
    <section
      aria-label="Úvodní sekce"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200,169,126,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(200,169,126,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(200,169,126,0.1)',
            border: '1px solid rgba(200,169,126,0.3)',
            borderRadius: '100px',
            padding: '0.4rem 1rem',
            marginBottom: '2rem',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C8A97E', display: 'inline-block' }} />
            <span style={{ color: '#C8A97E', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>Prémiové detailing studio · Vojkovice u Brna</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair, serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>
            Profesionální detailing<br />
            <span style={{ color: '#C8A97E' }}>na úrovni prémiových studií</span>
          </h1>

          <p style={{
            color: '#9CA3AF',
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
                <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
