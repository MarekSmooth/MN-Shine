import { SectionHeader } from '@/components/ui/SectionHeader';
import { ReviewCard } from '@/components/ui/ReviewCard';

export function Reviews() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '5rem 1.5rem' }}>
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
        <div style={{
          textAlign: 'center',
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(200,169,126,0.2)',
          borderRadius: '8px',
          padding: '2rem',
        }}>
          <p style={{ color: '#9CA3AF', margin: 0 }}>
            <span style={{ color: '#C8A97E', fontWeight: 600 }}>Přidejte své hodnocení</span> – po realizaci vaší zakázky vás rádi požádáme o reference. Vaše zpětná vazba nám pomáhá růst.
          </p>
        </div>
      </div>
    </section>
  );
}
