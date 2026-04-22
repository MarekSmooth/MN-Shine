import { SectionHeader } from '@/components/ui/SectionHeader';
import { ReviewCard } from '@/components/ui/ReviewCard';

export function Reviews() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Co říkají zákazníci"
          subtitle="Sbíráme reference – brzy zde uvidíte hodnocení od spokojených zákazníků."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <ReviewCard
            name="Jan Novák"
            text="Skvělá práce! Interiér auta vypadá jako nový. Přesně to, co jsem čekal a o trošku víc. Rozhodně doporučuji."
            stars={5}
            vehicle="BMW 5 Series"
          />
          <ReviewCard
            name="Petra Marková"
            text="Profesionální přístup, výborné výsledky. Keramická ochrana na moje auto byla skvělou investicí."
            stars={5}
            vehicle="Audi A4"
          />
          <ReviewCard
            name="Tomáš Dvořák"
            text="Konečně detailing studio, které bere svou práci vážně. Přijdu znovu určitě."
            stars={5}
            vehicle="Mercedes C220"
          />
        </div>
      </div>
    </section>
  );
}
