import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import { CheckCircle, Shield, Droplets, Sun, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Keramická ochrana laku Brno',
  description: 'Profesionální ochrana laku vozidla v Brně. Keramické a grafenové povlaky, PPF fólie. Hydrofobní efekt, UV ochrana, 2–5 let záruky. Vojkovice u Brna.',
  keywords: ['ochrana laku Brno', 'keramický povlak Brno', 'keramika auto Brno', 'PPF fólie Brno', 'nano keramika Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/ochrana-laku-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/ochrana-laku-brno',
    title: 'Keramická ochrana laku Brno | MN Shine Detailing',
    description: 'Keramické povlaky a PPF fólie pro ochranu laku vozidla v Brně.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ochrana laku Brno – MN Shine' }],
  },};

const faqItems = [
  {
    question: 'Jak dlouho vydrží keramický povlak?',
    answer: 'Délka trvání závisí na kvalitě použitého produktu a péči o vozidlo. Profesionální keramické povlaky vydrží 1–5 let při správné údržbě. Jednou ročně doporučujeme aplikaci boost sealantu.',
  },
  {
    question: 'Je nutné lak vyleštit před aplikací keramiky?',
    answer: 'Ano, před aplikací keramického povlaku doporučujeme provést korekci laku. Keramika "zapečetí" stav laku v momentě aplikace. Pokud jsou v laku defekty, budou pod keramikou nadále viditelné. Proto je vhodné nejprve vyleštit a poté chránit.',
  },
  {
    question: 'Jak keramický povlak chrání lak?',
    answer: 'Keramický povlak vytvoří na laku tvrdou, hydrofobní vrstvu, která odpuzuje vodu, nečistoty a ptačí trus, chrání před UV zářením a drobnými chemickými vlivy. Lak navíc získá hlubší lesk a auto se snáze udržuje čisté.',
  },
];

export default function OchranaLakuPage() {
  const schema = getServiceSchema(
    'Ochrana laku Brno',
    'Profesionální ochrana laku vozidla keramickými povlaky a PPF fólií v Brně. Hydrofobní efekt, UV ochrana, dlouhodobá ochrana laku.',
    'https://mnshine.cz/sluzby/ochrana-laku-brno'
  );
  const faqSchema = getFAQSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Domů', url: 'https://mnshine.cz' },
    { name: 'Služby', url: 'https://mnshine.cz/sluzby' },
    { name: 'Ochrana laku Brno', url: 'https://mnshine.cz/sluzby/ochrana-laku-brno' },
  ]);
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Ochrana laku · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Ochrana laku<br /><span style={{ color: '#FFFFFF' }}>Vojkovice, Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Chraňte svůj vůz na roky dopředu. Aplikujeme vosky a keramické povlaky. Studio MN Shine ve Vojkovicích u Brna.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              Objednat ochranu laku
            </Link>
            <a href="tel:+420702852852" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              +420 702 852 852
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Price highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ochrana voskem od</p>
              <p style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Big Shoulders Display', sans-serif", margin: 0 }}>2 500 Kč</p>
            </div>
            <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '160px' }}>Prémiový tuhý vosk pro maximální lesk a hydrofobní efekt. Ochrana až 12 měsíců.</p>
          </div>
          <div style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Keramická ochrana od</p>
              <p style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Big Shoulders Display', sans-serif", margin: 0 }}>4 999 Kč</p>
            </div>
            <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '160px' }}>Cena závisí na velikosti vozidla a zvoleném produktu. Zahrnuje přípravu laku a aplikaci povlaku.</p>
          </div>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co je keramická ochrana laku?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Keramický povlak (ceramic coating) je tekutý polymer na bázi oxidu křemičitého (SiO2), který se chemicky váže na povrch laku a vytváří tvrdou, ochrannou vrstvu. Na rozdíl od vosku nebo sealantu, keramika nevymývá a vydrží roky.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Výsledkem je extrémní hydrofobní efekt – voda, bahno a nečistoty se odvalují z povrchu. Lak je chráněn před UV zářením, chemickými látkami (průmyslový spad, ptačí trus, hmyz) a lehkými škrábanci.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Vozidlo s keramickou ochranou je výrazně snazší udržovat – nečistoty se nepřilepují a mytí trvá méně času. Lesk laku zůstává zachován na roky.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Výhody keramické ochrany</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Hydrofobní efekt – voda, bahno a nečistoty se odvalují z povrchu',
              'UV ochrana – lak je chráněn před vyblednutím a oxidací způsobenou sluncem',
              'Chemická odolnost – ochrana před průmyslovým spadem, ptačím trusem a hmyzem',
              'Snadná údržba – znečištěné vozidlo se mnohem snáze čistí a myje',
              'Zachování lesku – lak si dlouhodobě zachovává hloubku a zrcadlový lesk',
              'Ochrana hodnoty vozidla – chráněný lak se opotřebovává výrazně pomaleji',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#FFFFFF', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Postup aplikace ochrany laku</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Přípravné mytí a dekontaminace', desc: 'Důkladné ruční mytí, odmaštění a clay bar pro odstranění kontaminace.' },
              { step: '02', title: 'Korekce laku (volitelná)', desc: 'Strojní leštění pro odstranění defektů před zapečetěním ochranným povlakem.' },
              { step: '03', title: 'Odmašťování povrchu', desc: 'Důkladné odmaštění pro maximální přilnavost ochranného povlaku.' },
              { step: '04', title: 'Aplikace ochrany laku', desc: 'Ruční aplikace ochranného povlaku panel po panelu s dodržením předepsaných podmínek.' },
              { step: '05', title: 'Vytvrzení a předání', desc: 'Ochranný povlak potřebuje čas na vytvrzení. Předáme vozidlo s instrukcemi pro první dny po aplikaci.' },
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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Časté dotazy k ochraně laku</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '0', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Chraňte svůj vůz od prvního dne</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Konzultujte s námi výběr správné ochrany pro vaše vozidlo. Rádi vám poradíme a připravíme kalkulaci.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420702852852" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>+420 702 852 852</a>
          </div>
        </div>
      </div>
    </div>
  );
}
