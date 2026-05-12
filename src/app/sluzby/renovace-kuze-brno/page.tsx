import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Sparkles, Shield, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renovace kůže Brno | Obnova kožených sedadel',
  description: 'Profesionální renovace kožených sedadel v Brně. Hloubkové čištění, kondicionér, obnova barvy a ochranný nátěr. Studio ve Vojkovicích u Brna.',
  keywords: ['renovace kůže Brno', 'čištění kožených sedadel Brno', 'oprava kůže auto Brno', 'ošetření kůže Brno', 'detailing kůže Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/renovace-kuze-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/renovace-kuze-brno',
    title: 'Renovace kůže Brno | MN Shine Detailing',
    description: 'Profesionální renovace kožených sedadel. Čištění, kondicionér, obnova barvy.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Renovace kůže Brno – MN Shine' }],
  },
};

const faqItems = [
  {
    question: 'Dokážete obnovit prasklou nebo vybledle vypadající kůži?',
    answer: 'Ano. Drobné praskliny a oděrky lze ošetřit speciálními přípravky. Vybledlou nebo odřenou barvu obnovíme přebarvením – míchám přesný odstín dle vzorku. Výsledkem je kůže s obnovenou barvou, pružností a ochranou.',
  },
  {
    question: 'Jak se o kůži starat po renovaci?',
    answer: 'Doporučujeme pravidelně (každé 3–6 měsíců) nanášet kvalitní kondicionér na kůži. Ten doplňuje přirozené oleje, zabraňuje vysušení a praskání. Vyhněte se přímému slunečnímu záření po delší dobu a agresivním čisticím prostředkům.',
  },
  {
    question: 'Jak dlouho renovace kůže trvá?',
    answer: 'Standardní renovace kožených sedadel trvá 4–8 hodin v závislosti na rozsahu poškození a počtu sedadel. U kompletního přebarvení interiéru může proces trvat déle.',
  },
];

export default function RenovaceKuzePage() {
  const schema = getServiceSchema(
    'Renovace kůže Brno',
    'Profesionální renovace kožených sedadel vozidla. Čištění, kondicionér a obnova barvy.',
    'https://mnshine.cz/sluzby/renovace-kuze-brno'
  );
  const faqSchema = getFAQSchema(faqItems);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Renovace kůže · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Renovace kožených sedadel<br />Brno a okolí
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Kožená sedadla si zaslouží péči. Hloubkové čištění, regenerace kondicionérem a obnova barvy vrátí interiéru původní luxusní vzhled – za zlomek ceny výměny čalounění.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Objednat renovaci
            </Link>
            <Link href="/sluzby" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Všechny služby
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co zahrnuje renovace kůže?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Renovace kůže je vícefázový proces, který nejen vyčistí povrch, ale skutečně obnoví materiál. Každý krok na sebe navazuje a výsledkem je kůže s obnovenou pružností, barvou a ochranou.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Droplets size={24} />, title: 'Hloubkové čištění', desc: 'Odstranění zašlých nečistot, skvrn a mastnotna povrchu kůže speciálními pH neutrálními přípravky.' },
              { icon: <Sparkles size={24} />, title: 'Regenerace a kondicionér', desc: 'Ošetření regeneračním kondicionérem doplní přirozené oleje a obnoví pružnost kůže.' },
              { icon: <Shield size={24} />, title: 'Obnova barvy a ochrana', desc: 'Přebarvení vybledlých nebo odřených míst a nanesení ochranného nátěru pro dlouhodobou ochranu.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem', marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Proč renovovat kůži?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Renovace stojí zlomek ceny nového koženkového nebo kožeového čalounění',
              'Obnoví pružnost a zabrání dalšímu praskání materiálu',
              'Přebarvení vybledlých míst sjednotí vzhled celého interiéru',
              'Pravidelná péče o kůži výrazně prodlouží její životnost',
              'Čistý a ošetřený interiér zvyšuje tržní hodnotu vozidla',
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

        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', marginTop: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Objednejte renovaci kůže</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Přijímáme zákazníky z Brna a celého Jihomoravského kraje. Studio ve Vojkovicích u Brna.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Objednat se</Link>
            <Link href="/cenik" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Zobrazit ceník</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
