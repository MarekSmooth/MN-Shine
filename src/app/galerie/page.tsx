import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Galerie | MN Shine Detailing',
  description: 'Prohlédněte si galerii prací MN Shine Detailing. Výsledky čištění interiéru, renovace laku, keramické ochrany a kompletního detailingu.',
};

const categories = [
  { name: 'Čištění interiéru', count: 12, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' },
  { name: 'Renovace laku', count: 8, gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b00 50%, #4a2c00 100%)' },
  { name: 'Keramická ochrana', count: 6, gradient: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #0d3b5e 100%)' },
  { name: 'Kompletní detailing', count: 15, gradient: 'linear-gradient(135deg, #1a0a1a 0%, #2d1a2d 50%, #1a0a1a 100%)' },
];

const placeholderTiles = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  gradient: `linear-gradient(${135 + i * 15}deg, rgba(200,169,126,0.${Math.floor(i / 4) + 1}) 0%, rgba(10,10,10,1) 70%)`,
  category: categories[i % 4].name,
}));

export default function GaleriePage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Naše práce</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1rem' }}>Galerie prací</h1>
          <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Prohlédněte si výsledky naší práce. Každá fotografie zachycuje skutečný výsledek profesionálního detailingu v MN Shine.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
          {['Vše', ...categories.map(c => c.name)].map(cat => (
            <span key={cat} style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '100px',
              border: '1px solid rgba(200,169,126,0.3)',
              color: cat === 'Vše' ? '#0a0a0a' : '#C8A97E',
              backgroundColor: cat === 'Vše' ? '#C8A97E' : 'transparent',
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontWeight: cat === 'Vše' ? 600 : 400,
            }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Category overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <div key={cat.name} style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,126,0.15)',
            }}>
              <div style={{
                height: '160px',
                background: cat.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'rgba(200,169,126,0.4)', fontSize: '3rem', fontFamily: 'var(--font-playfair, serif)', fontWeight: 700 }}>
                  {cat.count}+
                </span>
              </div>
              <div style={{ backgroundColor: '#111111', padding: '1rem' }}>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, margin: '0 0 0.25rem', fontSize: '1rem' }}>{cat.name}</h3>
                <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.85rem' }}>{cat.count} fotografií</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo grid placeholder */}
        <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Všechny práce</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {placeholderTiles.map(tile => (
            <div key={tile.id} style={{
              aspectRatio: '4/3',
              borderRadius: '8px',
              background: tile.gradient,
              border: '1px solid rgba(200,169,126,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}>
                <p style={{ color: 'rgba(200,169,126,0.6)', fontSize: '0.85rem', margin: 0, textAlign: 'center', padding: '0 1rem' }}>{tile.category}</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: 0 }}>Foto #{tile.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(200,169,126,0.2)',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <p style={{ color: '#C8A97E', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Galerie se rozrůstá</p>
          <p style={{ color: '#9CA3AF', margin: 0 }}>
            Skutečné fotografie z našich zakázek budou průběžně přidávány. Sledujte nás pro nejnovější výsledky.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Chcete podobné výsledky pro vaše vozidlo?</p>
          <Link href="/kontakt" style={{
            backgroundColor: '#C8A97E',
            color: '#0a0a0a',
            fontWeight: 700,
            padding: '0.875rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
          }}>
            Objednat se
          </Link>
        </div>
      </div>
    </div>
  );
}
