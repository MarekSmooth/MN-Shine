import { SectionHeader } from '@/components/ui/SectionHeader';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const examples = [
  {
    label: 'Čištění',
    pairs: [
      { before: '/beforeafter/cleaning/cleaningbefore1.webp', after: '/beforeafter/cleaning/cleaningafter1.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore2.webp', after: '/beforeafter/cleaning/cleaningafter2.webp' },
      { before: '/beforeafter/cleaning/cleaningbefore3.webp', after: '/beforeafter/cleaning/cleaningafter3.webp' },
    ],
  },
  {
    label: 'Renovace',
    pairs: [
      { before: '/beforeafter/renovace/before1.webp', after: '/beforeafter/renovace/after1.webp' },
      { before: '/beforeafter/renovace/before2.webp', after: '/beforeafter/renovace/after2.webp' },
      { before: '/beforeafter/renovace/before3.webp', after: '/beforeafter/renovace/after3.webp' },
      { before: '/beforeafter/renovace/before4.webp', after: '/beforeafter/renovace/after4.webp' },
      { before: '/beforeafter/renovace/before5.webp', after: '/beforeafter/renovace/after5.webp' },
    ],
  },
  {
    label: 'Opravy škrábanců',
    pairs: [
      { before: '/beforeafter/opravy/opravybefore1.webp', after: '/beforeafter/opravy/opravyafter1.webp' },
      { before: '/beforeafter/opravy/opravybefore2.webp', after: '/beforeafter/opravy/opavyafter2.webp' },
      { before: '/beforeafter/opravy/opravybefore3.webp', after: '/beforeafter/opravy/opravyafter3.webp' },
    ],
  },
];

export function BeforeAfterSection() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Výsledky, které mluví za vše"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {examples.map((ex) => (
            <div key={ex.label}>
              <BeforeAfterSlider label={ex.label} pairs={ex.pairs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
