import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Droplets, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Čištění exteriéru Brno | Ruční mytí a dekontaminace auta',
  description: 'Profesionální čištění exteriéru vozidla v Brně a okolí. Ruční mytí, chemická dekontaminace laku, čištění kol a nanesení ochranného vosku. Studio ve Vojkovicích u Brna.',
  keywords: ['čištění exteriéru Brno', 'ruční mytí auta Brno', 'dekontaminace laku Brno', 'mytí auta Brno', 'detailing exteriér Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/cisteni-exterieru-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/cisteni-exterieru-brno',
    title: 'Čištění exteriéru Brno | MN Shine Detailing',
    description: 'Profesionální ruční mytí a dekontaminace laku vozidla v Brně. Studio ve Vojkovicích u Brna.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Čištění exteriéru Brno – MN Shine' }],
  },
};

const faqItems = [
  {
    question: 'Jak se liší vaše čištění od běžné myčky?',
    answer: 'Automatické myčky používají tvrdé kartáče a agresivní chemii, která časem poškozuje lak a způsobuje jemné škrábance. Naše ruční mytí probíhá šetrnými přípravky a dvoukbelíkovou technikou, která lak nepoškodí. Navíc provádíme chemickou dekontaminaci a nanášíme ochranný povlak.',
  },
  {
    question: 'Co je chemická dekontaminace laku?',
    answer: 'Dekontaminace odstraní z laku látky, které běžné mytí nestačí – zejména polétavou rez (železné částice z brzd a kolejnic), asfaltové skvrny a jiné chemické usazeniny. Tyto nečistoty se hluboko zapékají do laku a bez dekontaminace způsobují jeho postupnou korozi.',
  },
  {
    question: 'Je nutné mít vůz čistý před aplikací ochrany laku?',
    answer: 'Ano, čistý a dekontaminovaný lak je základ. Jakákoliv ochrana – vosk, sealant nebo keramika – se nanáší pouze na lak zbavený nečistot a mastnoty. Jinak se ochrana správně nepřichytí a nebude plnit svou funkci.',
  },
];

export default function CisteniExterieru() {
  const schema = getServiceSchema(
    'Čištění exteriéru Brno',
    'Profesionální ruční mytí a dekontaminace exteriéru vozidla. Čištění disků, nanesení ochranného vosku.',
    'https://mnshine.cz/sluzby/cisteni-exterieru-brno'
  );
  const faqSchema = getFAQSchema(faqItems);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Čištění exteriéru · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Profesionální čištění exteriéru<br />Vojkovice, Brno a okolí
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Ruční mytí, hloubková dekontaminace laku a nanesení ochranného povlaku – základ péče o každé vozidlo. Výsledek, který běžná myčka nikdy neposkytne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              Objednat čištění
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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co zahrnuje čištění exteriéru?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Naše čištění exteriéru není jen mytí – je to kompletní péče o povrch vozidla. Každý krok má svůj účel: od šetrného předmytí přes dekontaminaci až po nanesení ochranné vrstvy, která lak chrání dlouhodobě.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Droplets size={24} />, title: 'Šetrné ruční mytí', desc: 'Předmytí aktivní pěnou a ruční mytí dvoukbelíkovou technikou bez rizika poškrábání laku.' },
              { icon: <Shield size={24} />, title: 'Dekontaminace laku', desc: 'Chemické odstranění polétavé rzi, asfaltu a zapečených nečistot, které běžné mytí neodstraní.' },
              { icon: <Sparkles size={24} />, title: 'Čištění kol a disků', desc: 'Specializovaná příprava na čištění ráfků a pneumatik včetně podběhů.' },
              { icon: <Shield size={24} />, title: 'Ochranný povlak', desc: 'Nanesení tuhého vosku nebo keramické ochrany pro hydrofobní efekt a zachování lesku.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '0', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Big Shoulders Display', sans-serif", color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem', marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Proč volit ruční mytí?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Automatické myčky způsobují mikroškrábance – ruční mytí a kombinace dvoukbelíkové techniky lak nepoškodí',
              'Dekontaminace odstraní látky, které běžným mytím nelze odstranit',
              'Ochranný povlak prodlouží interval nutného mytí a usnadní každodenní péči',
              'Čistý a ošetřený lak zachovává tržní hodnotu vozidla',
              'Základ pro každou další prémiovou péči – renovaci nebo keramickou ochranu',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#FFFFFF', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Postup čištění exteriéru</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Předmytí aktivní pěnou', desc: 'Nanesení alkalické aktivní pěny, která uvolní a změkčí nečistoty na celé karoserii.' },
              { step: '02', title: 'Čištění kol a podběhů', desc: 'Aplikace přípravku na ráfky a pneumatiky, ruční čištění podběhů od bláta a nečistot.' },
              { step: '03', title: 'Ruční mytí', desc: 'Šetrné mytí karoserie, skel, zrcátek a lemů.' },
              { step: '04', title: 'Chemická dekontaminace', desc: 'Aplikace přípravků na odstranění polétavé rzi, asfaltu a pryskyřice z povrchu laku.' },
              { step: '05', title: 'Sušení a příprava', desc: 'Šetrné sušení, zbavení laku zbytků mastnoty a příprava na nanesení ochrany laku.' },
              { step: '06', title: 'Nanesení ochranného povlaku', desc: 'Aplikace tuhého vosku nebo keramické ochrany pro hydrofobní efekt a dlouhodobou ochranu.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#111111', borderRadius: '0' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.25rem', fontFamily: "'Big Shoulders Display', sans-serif", minWidth: '32px' }}>{item.step}</span>
                <div>
                  <h3 style={{ fontFamily: "'Big Shoulders Display', sans-serif", color: '#FFFFFF', fontWeight: 600, margin: '0 0 0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Časté dotazy</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '0', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', marginTop: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Objednejte čištění exteriéru</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Přijímáme zákazníky z Brna a celého Jihomoravského kraje. Studio ve Vojkovicích u Brna.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Objednat se</Link>
            <Link href="/cenik" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Zobrazit ceník</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
