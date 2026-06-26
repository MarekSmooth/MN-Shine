import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>
        <p style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Chyba 404
        </p>
        <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1.5rem' }}>
          Stránka nenalezena
        </h1>
        <p style={{ color: '#9CA3AF', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Stránka, kterou hledáte, neexistuje nebo byla přesunuta. Zkuste se vrátit na hlavní stránku nebo si prohlédněte naše služby.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', textDecoration: 'none' }}>
            Domů
          </Link>
          <Link href="/sluzby" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', textDecoration: 'none' }}>
            Naše služby
          </Link>
          <Link href="/kontakt" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', textDecoration: 'none' }}>
            Kontakt
          </Link>
        </div>
      </div>
    </main>
  );
}
