import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { galleryServices } from '@/data/gallery';

// Ukázka před/po z galerie na stránce služby. Každý pár má vlastní slider,
// aby byly všechny fotky ve statickém HTML (slider s více páry vykreslí jen první).
export function ServiceBeforeAfter({ galleryId, label, count = 2 }: { galleryId: string; label: string; count?: number }) {
  const gallery = galleryServices.find(g => g.id === galleryId);
  if (!gallery) return null;
  const pairs = gallery.pairs.filter(p => p.after).slice(0, count);

  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Před a po</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {pairs.map(pair => (
          <BeforeAfterSlider key={pair.before} label={label} pairs={[pair]} />
        ))}
      </div>
      <Link href={`/galerie/${galleryId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.25rem', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
        Další fotky v galerii <ArrowRight size={14} />
      </Link>
    </section>
  );
}
