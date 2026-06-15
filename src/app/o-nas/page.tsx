import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nás – MN Shine Detailing Vojkovice u Brna',
  description: 'Seznamte se s MN Shine Detailing. Prémiové detailing studio ve Vojkovicích u Brna. Náš příběh, hodnoty a přístup ke každému vozidlu.',
  alternates: {
    canonical: 'https://mnshine.cz/o-nas',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/o-nas',
    title: 'O nás | MN Shine Detailing',
    description: 'Prémiové detailing studio ve Vojkovicích u Brna. Náš příběh a hodnoty.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MN Shine Detailing – O nás' }],
  },
};

const values = [
  {
    icon: <Star size={28} />,
    title: 'Preciznost',
    description: 'Každá zakázka je pro nmě výzvou k dokonalosti. Věnuji pozornost každému detailu, který ostatní přehlíží.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Vášeň pro automobily',
    description: 'Automobily miluji. Tato vášeň se odráží v každé práci, kterou odvádím. Váš vůz je v rukou nadšenců.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Poctivost a transparentnost',
    description: 'Vždy vám řeknu pravdu o stavu vašeho vozidla a navrhnu řešení, které skutečně dává smysl.',
  },
  {
    icon: <Users size={28} />,
    title: 'Zákazník na prvním místě',
    description: 'Vaše spokojenost je mým hlavním cílem. Pracuji tak, abych předčil vaše očekávání.',
  },
];

export default function ONasPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Můj příběh</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            O MN Shine Detailing
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Jsme prémiové detailing studio se sídlem ve Vojkovicích u Brna. Naším posláním je pečovat o vozidla s maximální precizností a vášní, kterou si každý automobil zaslouží.
          </p>
        </div>

        {/* Story */}
          <section className="card-responsive-padding" style={{ backgroundColor: '#111111', borderRadius: '0', padding: '3rem', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Můj příběh</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Dobrý den, rád bych se vám krátce představil – a hlavně poděkoval, že zvažujete svěřit péči o vaše auto právě mně.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Čistota a lesk auta se pro mě staly skutečnou vášní už před mnoha lety. Začínalo to jednoduše – chtěl jsem, aby moje auto vypadalo lépe než ostatní, s minimem vybavení v domácí garáži. Postupem času jsem investoval do lepšího vybavení, zlepšoval techniky a brousil výsledky do detailu. Jako u většiny detailerů to začalo u aut kamarádů a rodiny.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Jednoho dne jsem si uvědomil, že tahle vášeň by mohla být i živobytím. <strong style={{ color: '#FFFFFF' }}>A tak jsem se do toho pustil.</strong>
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Dodnes se neustále zdokonaluji a sleduji nové technologie a postupy – péče o lak a interiér je obor, který vás dokáže překvapit i po letech praxe. A to je přesně to, co mě posouvá dál.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            <strong style={{ color: '#FFFFFF' }}>Máte nestandardní požadavek?</strong> Neváhejte se ozvat – snažím se každou zakázku přizpůsobit individuálně potřebám zákazníka.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Naše hodnoty</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map(value => (
              <div key={value.title} style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '0',
                padding: '1.75rem',
              }}>
                <div style={{ color: '#FFFFFF', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem', fontFamily: "'Big Shoulders Display', sans-serif" }}>{value.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="card-responsive-padding" style={{ backgroundColor: '#111111', borderRadius: '0', padding: '3rem', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>MN Shine v číslech</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '100+', label: 'Spokojených zákazníků' },
              { value: '5+', label: 'Let zkušeností' },
              { value: '5★', label: 'Průměrné hodnocení' }
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ color: '#FFFFFF', fontSize: '2rem', fontWeight: 700, fontFamily: "'Big Shoulders Display', sans-serif", marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: '#111111', borderRadius: '0', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Chcete se s námi setkat?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Navštivte naše studio ve Vojkovicích u Brna nebo nás kontaktujte pro nezávaznou konzultaci.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Kontaktovat nás</Link>
            <Link href="/sluzby" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Naše služby</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
