import type { Metadata } from 'next';
import Link from 'next/link';
import KategorieGalerieContent from '@/components/sections/KategorieGalerieContent';

const categoryNames: Record<string, string> = {
  'cisteni-interieru': 'Čištění interiéru',
  'cisteni-exterieru': 'Čištění exteriéru',
  'renovace-laku': 'Renovace laku',
  'ochrana-laku': 'Ochrana laku',
  'renovace-svetel': 'Renovace světel',
  'renovace-kuze': 'Renovace kůže',
  'oprava-skrabancu': 'Oprava škrábanců',
};

export function generateStaticParams() {
  return Object.keys(categoryNames).map(k => ({ kategorie: k }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ kategorie: string }> }
): Promise<Metadata> {
  const { kategorie } = await params;
  const name = categoryNames[kategorie] ?? 'Galerie';
  return {
    title: `${name} | Galerie | MN Shine`,
    description: `Ukázky naší práce – ${name}. Prohlédněte si fotografie před a po.`,
  };
}

export default async function KategorieGaleriePage(
  { params }: { params: Promise<{ kategorie: string }> }
) {
  const { kategorie } = await params;
  const name = categoryNames[kategorie] ?? 'Galerie';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        <Link
          href="/galerie"
          style={{
            color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            marginBottom: '2.5rem', letterSpacing: '0.08em', textTransform: 'uppercase',
          }}
        >
          ← Zpět na galerii
        </Link>

        <h1 style={{
          fontFamily: 'var(--font-big-shoulders, sans-serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          textTransform: 'uppercase',
          color: 'white',
          marginBottom: '3rem',
          letterSpacing: '0.05em',
        }}>
          {name}
        </h1>

        <KategorieGalerieContent />

      </div>
    </main>
  );
}
