import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Sparkles, Search, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oprava škrábanců Brno | Bez lakovny',
  description: 'Profesionální oprava povrchových škrábanců laku v Brně bez nutnosti lakovny. Leštění, touch-up opravy a sjednocení barvy. Studio ve Vojkovicích u Brna.',
  keywords: ['oprava škrábanců Brno', 'škrábance na autě Brno', 'leštění škrábanců Brno', 'touch up oprava laku Brno', 'oprava laku bez lakovny Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/oprava-skrabancu-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/oprava-skrabancu-brno',
    title: 'Oprava škrábanců Brno | MN Shine Detailing',
    description: 'Oprava povrchových škrábanců laku v Brně bez lakovny.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Oprava škrábanců Brno – MN Shine' }],
  },
};

const faqItems = [
  {
    question: 'Jak poznám, jestli lze škrábanec opravit bez lakovny?',
    answer: 'Klíčová je hloubka a rozsah poškození. Povrchové škrábance, které nepronikají až do základového laku nebo kovu, lze obvykle odstranit broušením a leštěním. Na hlubší poškození je potřeba retuše. Pokud je poškození velkého rozsahu, v těchto případech je potřeba individuální posouzení. Opravovaný díl nemůže být zdeformovaný.',
  },
  {
    question: 'Co je oprava retuší?',
    answer: 'Retušování laku je metoda lokální opravy při které se opravované místo připraví a následně se škrábance vyplní přesně namíchaným odstínem barvy. Po vytvrzení se místo vybrousí a následně vyleští, tato metoda je vhodná pro hluboké škrábance.',
  },
  {
    question: 'Jak dlouho oprava trvá?',
    answer: 'Leštění povrchových škrábanců trvá obvykle 1–3 hodiny v závislosti na počtu a rozsahu poškození. Opravy retuší jsou o něco časově náročnější, protože je nutné počkat na vytvrzení barvy.',
  },
];

export default function OpravaSkrabancuPage() {
  const schema = getServiceSchema(
    'Oprava škrábanců Brno',
    'Profesionální oprava povrchových škrábanců laku bez nutnosti lakovny.',
    'https://mnshine.cz/sluzby/oprava-skrabancu-brno'
  );
  const faqSchema = getFAQSchema(faqItems);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Oprava škrábanců · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Oprava škrábanců laku<br />bez lakovny
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Škrábanec od klíče, větve nebo parkovacího manévru ještě neznamená drahou lakovnu. Minimálně invazivními metodami odstraníme nebo výrazně potlačíme většinu povrchových poškození.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              Nezávazná poptávka
            </Link>
            <Link href="/sluzby" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              Všechny služby
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Jak oprava škrábanců probíhá?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Ne každý škrábanec je stejný. Nejprve provedeme diagnostiku hloubky poškození a teprve pak zvolíme správný postup. Povrchové rýhy řešíme leštěním, hlubší škrábance retuší laku.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Search size={24} />, title: 'Diagnostika', desc: 'Posoudíme hloubku škrábance a zvolíme nejvhodnější metodu opravy pro co nejlepší výsledek.' },
              { icon: <Sparkles size={24} />, title: 'Leštění povrchových rýh', desc: 'Strojním leštěním odstraníme povrchové škrábance, které ještě nepronikají do základového laku.' },
              { icon: <Wrench size={24} />, title: 'Lokální oprava retuší', desc: 'Po namíchání přesného odstínu barvy vozidla se místo vyplní a po vytvrzení barvy se brousí a leští.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '0', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem', marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Výhody bez lakovny</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Výrazně nižší cena oproti klasické lakýrnické opravě',
              'Rychlejší výsledek – bez nutnosti demontáže dílů a čekání na lak',
              'Minimálně invazivní – neopravujeme více, než je nutné',
              'Zachování originálního laku bez přelakování celé plochy',
              'Vhodné pro povrchové škrábance, rýhy od klíčů nebo drobné oděrky',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#FFFFFF', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Časté dotazy</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '0', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', marginTop: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Poptejte opravu škrábanců</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Pošlete nám fotku škrábance – rádi posoudíme, zda je opravitelný bez lakovny a připravíme nabídku.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Kontaktovat nás</Link>
            <Link href="/cenik" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Zobrazit ceník</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
