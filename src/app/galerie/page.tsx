import type { Metadata } from 'next';
import GalerieContent from '@/components/sections/GalerieContent';

export const metadata: Metadata = {
  title: 'Galerie detailingu Brno',
  description: 'Prohlédněte si galerii prací MN Shine Detailing. Výsledky čištění interiéru, renovace laku, keramické ochrany a kompletního detailingu.',
  alternates: {
    canonical: 'https://mnshine.cz/galerie',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/galerie',
    title: 'Galerie detailingu Brno | MN Shine Detailing',
    description: 'Výsledky čištění interiéru, renovace laku a keramické ochrany.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MN Shine Detailing – Galerie' }],
  },
};

export default function GaleriePage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', opacity: 0.5 }}>
            Naše práce
          </div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', margin: '0 0 1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Galerie prací
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Prohlédněte si výsledky naší práce. Každá fotografie zachycuje skutečný výsledek profesionálního detailingu v MN Shine.
          </p>
        </div>

        <GalerieContent />

      </div>
    </div>
  );
}
