import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reference | MN Shine Detailing',
  description: 'Reference a hodnocení zákazníků MN Shine Detailing. Přečtěte si, co říkají spokojení zákazníci z Brna a okolí.',
};

const reviews = [
  {
    name: 'Jan Novák',
    vehicle: 'BMW 5 Series',
    service: 'Kompletní detailing',
    text: 'Skvělá práce! Interiér auta vypadá jako nový. Přesně to, co jsem čekal a o trošku víc. Rozhodně doporučuji všem, kdo hledají profesionální detailing v Brně.',
    stars: 5,
  },
  {
    name: 'Petra Marková',
    vehicle: 'Audi A4',
    service: 'Keramická ochrana',
    text: 'Profesionální přístup, výborné výsledky. Keramická ochrana na moje auto byla skvělou investicí. Voda se prostě odvaluje a auto je krásné i po dešti.',
    stars: 5,
  },
  {
    name: 'Tomáš Dvořák',
    vehicle: 'Mercedes C220',
    service: 'Renovace laku',
    text: 'Konečně detailing studio, které bere svou práci vážně. Lak mého Mercedesu zase září. Přijdu znovu určitě a doporučím dál.',
    stars: 5,
  },
  {
    name: 'Lucie Horáková',
    vehicle: 'Volkswagen Passat',
    service: 'Čištění interiéru',
    text: 'Měla jsem auto s malými dětmi a vypadalo tomu tak. Po čištění v MN Shine vypadá jako nové. Pachy pryč, koberce čisté – super práce!',
    stars: 5,
  },
  {
    name: 'Pavel Krejčí',
    vehicle: 'Škoda Octavia',
    service: 'Kompletní detailing',
    text: 'Výborný poměr cena/výkon. Auto dostalo péči, které si zasloužilo. Přístup byl velmi profesionální a výsledek předčil očekávání.',
    stars: 5,
  },
  {
    name: 'Radek Blaha',
    vehicle: 'Toyota RAV4',
    service: 'Čištění interiéru + renovace laku',
    text: 'Nechal jsem si udělat čištění interiéru i renovaci laku. Výsledek je fenomenální. Takhle auto vypadalo naposledy, když bylo nové.',
    stars: 5,
  },
];

export default function ReferencePage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Spokojení zákazníci</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Reference zákazníků
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Přečtěte si, co říkají zákazníci, kteří svěřili svá vozidla do našich rukou. Jejich spokojenost je naším největším úspěchem.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          backgroundColor: '#111111',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          border: '1px solid rgba(200,169,126,0.1)',
          textAlign: 'center',
        }}>
          {[
            { value: '5.0', label: 'Průměrné hodnocení', suffix: '★' },
            { value: '100+', label: 'Spokojených zákazníků', suffix: '' },
            { value: '100%', label: 'Doporučilo by nás', suffix: '' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ color: '#C8A97E', fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)', marginBottom: '0.5rem' }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {reviews.map(review => (
            <article key={review.name} style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(200,169,126,0.15)',
              borderRadius: '8px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#C8A97E', fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, margin: 0, flex: 1, fontStyle: 'italic' }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <p style={{ color: '#FFFFFF', fontWeight: 600, margin: '0 0 0.25rem' }}>{review.name}</p>
                <p style={{ color: '#C8A97E', fontSize: '0.85rem', margin: '0 0 0.15rem' }}>{review.vehicle}</p>
                <p style={{ color: '#9CA3AF', fontSize: '0.8rem', margin: 0 }}>{review.service}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Add review CTA */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(200,169,126,0.2)',
          borderRadius: '8px',
          padding: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Byli jste u nás?
          </h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Vaše zpětná vazba je pro nás velmi cenná. Po realizaci zakázky nás prosím ohodnoťte – pomáhá nám to zlepšovat se a budovat důvěru u nových zákazníků.
          </p>
          <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
            Zanechat hodnocení
          </Link>
        </div>

        {/* Service CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Chcete být naším dalším spokojeným zákazníkem?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Objednat se
            </Link>
            <Link href="/sluzby" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Prohlédnout služby
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
