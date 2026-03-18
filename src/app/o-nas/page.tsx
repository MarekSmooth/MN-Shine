import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nás',
  description: 'Seznamte se s MN Shine Detailing. Prémiové detailing studio ve Vojkovicích u Brna. Náš příběh, hodnoty a přístup ke každému vozidlu.',
};

const values = [
  {
    icon: <Star size={28} />,
    title: 'Preciznost',
    description: 'Každá zakázka je pro nás výzvou k dokonalosti. Věnujeme pozornost každému detailu, který ostatní přehlíží.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Vášeň pro automobily',
    description: 'Automobily milujeme. Tato vášeň se odráží v každé práci, kterou odvádíme. Váš vůz je v rukou nadšenců.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Poctivost a transparentnost',
    description: 'Vždy vám řekneme pravdu o stavu vašeho vozidla a navrhneme řešení, které skutečně dává smysl.',
  },
  {
    icon: <Users size={28} />,
    title: 'Zákazník na prvním místě',
    description: 'Vaše spokojenost je naším hlavním cílem. Pracujeme tak, abychom předčili vaše očekávání.',
  },
];

export default function ONasPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Náš příběh</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1.5rem' }}>
            O MN Shine Detailing
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Jsme prémiové detailing studio se sídlem ve Vojkovicích u Brna. Naším posláním je pečovat o vozidla s maximální precizností a vášní, kterou si každý automobil zaslouží.
          </p>
        </div>

        {/* Story */}
          <section className="card-responsive-padding" style={{ backgroundColor: '#111111', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', border: '1px solid rgba(200,169,126,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Náš příběh</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            MN Shine Detailing vzniklo z lásky k automobilům a touhy poskytnout zákazníkům v Jihomoravském kraji skutečně profesionální péči o jejich vozidla. Uvědomili jsme si, že na trhu chybí studio, které by kombinovalo prémiovost, individuální přístup a dostupnost pro zákazníky z Brna a okolí.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Začínali jsme s hlubokým přesvědčením, že detailing není jen o čistém autě – je to o péči, respektu a odvedení precizní práce. Každé vozidlo, které k nám přijede, tratujeme jako by bylo naše vlastní.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Dnes nabízíme komplexní spektrum detailing služeb – od hloubkového čištění interiéru přes renovaci laku až po aplikaci prémiových keramických povlaků. Každou zakázku realizujeme s maximálním nasazením a moderním vybavením.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem' }}>Naše hodnoty</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map(value => (
              <div key={value.title} style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(200,169,126,0.12)',
                borderRadius: '8px',
                padding: '1.75rem',
              }}>
                <div style={{ color: '#C8A97E', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem', fontFamily: 'var(--font-playfair, serif)' }}>{value.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="card-responsive-padding" style={{ backgroundColor: '#111111', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', border: '1px solid rgba(200,169,126,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem' }}>MN Shine v číslech</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '100+', label: 'Spokojených zákazníků' },
              { value: '5+', label: 'Let zkušeností' },
              { value: '5★', label: 'Průměrné hodnocení' },
              { value: '4', label: 'Hlavní služby' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ color: '#C8A97E', fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team placeholder */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2rem' }}>Náš tým</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Martin N.', role: 'Zakladatel & hlavní detailer', spec: 'Korekce laku, keramické povlaky' },
              { name: 'Detailer', role: 'Specialista na interiér', spec: 'Čištění interiéru, dekontaminace' },
            ].map(member => (
              <div key={member.name} style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(200,169,126,0.15)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200,169,126,0.2)',
                    border: '2px solid rgba(200,169,126,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ color: '#C8A97E', fontSize: '1.75rem', fontFamily: 'var(--font-playfair, serif)', fontWeight: 700 }}>
                      {member.name[0]}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem' }}>{member.name}</h3>
                  <p style={{ color: '#C8A97E', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>{member.role}</p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>{member.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Chcete se s námi setkat?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Navštivte naše studio ve Vojkovicích u Brna nebo nás kontaktujte pro nezávaznou konzultaci.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Kontaktovat nás</Link>
            <Link href="/sluzby" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Naše služby</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
