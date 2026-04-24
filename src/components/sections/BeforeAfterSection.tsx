import { SectionHeader } from '@/components/ui/SectionHeader';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const examples = [
  {
    label: 'Čištění',
    pairs: [
      { before: '/beforeafter/cleaning/cleaningbefore1.JPEG', after: '/beforeafter/cleaning/cleaningafter1.JPEG' },
      { before: '/beforeafter/cleaning/cleaningbefore2.JPEG', after: '/beforeafter/cleaning/cleaningafter2.JPEG' },
      { before: '/beforeafter/cleaning/cleaningbefore3.JPEG', after: '/beforeafter/cleaning/cleaningafter3.JPEG' },
    ],
  },
  {
    label: 'Renovace',
    pairs: [
      { before: '/beforeafter/renovace/before1.JPEG', after: '/beforeafter/renovace/after1.JPEG' },
      { before: '/beforeafter/renovace/before2.JPEG', after: '/beforeafter/renovace/after2.JPEG' },
      { before: '/beforeafter/renovace/before3.JPEG', after: '/beforeafter/renovace/after3.JPEG' },
      { before: '/beforeafter/renovace/before4.JPEG', after: '/beforeafter/renovace/after4.JPEG' },
      { before: '/beforeafter/renovace/before5.JPEG', after: '/beforeafter/renovace/after5.JPEG' },
    ],
  },
  {
    label: 'Opravy škrábanců',
    pairs: [
      { before: '/beforeafter/opravy/opravybefore1.JPEG', after: '/beforeafter/opravy/opravyafter1.JPEG' },
      { before: '/beforeafter/opravy/opravybefore2.JPEG', after: '/beforeafter/opravy/opavyafter2.JPEG' },
      { before: '/beforeafter/opravy/opravybefore3.JPEG', after: '/beforeafter/opravy/opravyafter3.JPEG' },
    ],
  },
];

export function BeforeAfterSection() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Výsledky, které mluví za vše"
          subtitle="Posuňte posuvník a podívejte se na rozdíl před a po profesionálním detailingu."
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
