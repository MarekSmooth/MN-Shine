import { SectionHeader } from '@/components/ui/SectionHeader';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const examples = [
  { label: 'Čištění interiéru – sedadla' },
  { label: 'Renovace laku – karoserie' },
  { label: 'Keramická ochrana – exteriér' },
];

export function BeforeAfterSection() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '5rem 1.5rem' }}>
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
              <BeforeAfterSlider label={ex.label} />
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.85rem', marginTop: '2rem' }}>
          * Ukázkové vizualizace – skutečné fotografie budou přidány po zahájení provozu studia.
        </p>
      </div>
    </section>
  );
}
