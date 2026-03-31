import { SectionHeader } from '@/components/ui/SectionHeader';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const examples = [
  { label: 'Čištění', beforeImage: '/beforeafter/cleaning/cleanbefore1.JPEG', afterImage: '/beforeafter/cleaning/cleanafter1.JPEG' },
  { label: 'Renovace', beforeImage: '/beforeafter/renovace/before1.JPEG', afterImage: '/beforeafter/renovace/after1.JPEG' },
  { label: 'Opravy škrábanců', beforeImage: '/beforeafter/opravy/opravybefore1.JPEG', afterImage: '/beforeafter/opravy/opravyafter1.JPEG' },
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
              <BeforeAfterSlider label={ex.label} beforeImage={ex.beforeImage} afterImage={ex.afterImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
