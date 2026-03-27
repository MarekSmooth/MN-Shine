import { SectionHeader } from '@/components/ui/SectionHeader';
import { ReviewCard } from '@/components/ui/ReviewCard';

export function Reviews() {
  return (
    <section style={{ backgroundColor: '#F4F4F4', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Co říkají zákazníci"
          subtitle="Sbíráme reference – brzy zde uvidíte hodnocení od spokojených zákazníků."
          light
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
            light
          />
          <ReviewCard
            name="Petra Marková"
            text="Profesionální přístup, výborné výsledky. Keramická ochrana na moje auto byla skvělou investicí."
            stars={5}
            vehicle="Audi A4"
            light
          />
          <ReviewCard
            name="Tomáš Dvořák"
            text="Konečně detailing studio, které bere svou práci vážně. Přijdu znovu určitě."
            stars={5}
            vehicle="Mercedes C220"
            light
          />
        </div>
        <div style={{
          textAlign: 'center',
          backgroundColor: '#EBEBEB',
          border: '1px solid rgba(0,0,0,0.10)',
          borderRadius: '8px',
          padding: '2rem',
        }}>
          <p style={{ color: '#555555', margin: 0 }}>
            <span style={{ color: '#0a0a0a', fontWeight: 600 }}>Přidejte své hodnocení</span> – po realizaci vaší zakázky vás rádi požádáme o reference. Vaše zpětná vazba nám pomáhá růst.
          </p>
        </div>
      </div>
    </section>
  );
}
