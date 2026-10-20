import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { RelatedServices } from '@/components/ui/RelatedServices';
import { PriceVariants } from '@/components/ui/PriceVariants';
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
    question: 'Kolik stojí keramická ochrana laku?',
    answer: 'Aplikace keramické ochrany laku začíná od 3 499 Kč, aplikace vosku od 1 999 Kč. Ceny jsou bez přípravy vozu – mytí, dekontaminace a odmaštění laku před nanesením se účtují zvlášť podle stavu vozu, stejně jako případné rozleštění laku. Výsledná cena závisí na velikosti vozidla a zvoleném produktu.',
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
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Keramická ochrana laku · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Keramická ochrana laku<br /><span style={{ color: '#FFFFFF' }}>Vojkovice, Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Chraňte svůj vůz na roky dopředu. Keramická ochrana laku i klasický vosk pro zákazníky z Brna a okolí. Studio MN Shine ve Vojkovicích u Brna.
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

        <PriceVariants
          note={<>Ceny jsou bez přípravy vozu – zahrnují pouze aplikaci vosku nebo keramiky. Před nanesením je potřeba auto důkladně umýt, dekontaminovat a odmastit lak; tato příprava se účtuje zvlášť podle stavu vozu (viz <Link href="/sluzby/cisteni-exterieru-brno" style={{ color: '#FFFFFF' }}>čištění exteriéru</Link>).</>}
          variants={[
          { label: 'Ochrana voskem od', price: '1 999 Kč', desc: 'Prémiový tuhý vosk pro maximální lesk a hydrofobní efekt. Ochrana až 12 měsíců. Cena závisí na velikosti vozidla.' },
          { label: 'Keramická ochrana od', price: '3 499 Kč', desc: 'Keramický povlak pro hluboký lesk, výrazný hydrofobní efekt a UV ochranu. Ochrana 1–5 let. Cena závisí na velikosti vozidla a zvoleném produktu.' },
          ]}
        />

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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Keramika vs. vosk</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Vosk', items: ['Výdrž až 12 měsíců', 'Hluboký lesk a hydrofobní efekt', 'Vhodný jako pravidelná sezónní péče', 'Aplikace od 1 999 Kč (bez přípravy vozu)'] },
              { name: 'Keramická ochrana', items: ['Výdrž v řádu let, ne měsíců', 'Chemicky se váže na lak – nevymývá se', 'Odolnost vůči UV, chemii a lehkým škrábancům', 'Aplikace od 3 499 Kč (bez přípravy vozu)'] },
            ].map(col => (
              <div key={col.name} style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.2)', padding: '1.5rem' }}>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 1rem' }}>{col.name}</h3>
                {col.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#FFFFFF', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: '#9CA3AF' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginTop: '1rem' }}>
            Vosk je dobrá volba, pokud chcete rychle oživit lesk před sezónou. Pokud chcete mít s péčí o lak klid na několik let, vyplatí se keramická ochrana laku – ideálně po rozleštění laku, aby povlak zapečetil bezvadný povrch.
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

        <RelatedServices items={[
          { href: '/sluzby/renovace-laku-brno', title: 'Renovace a rozleštění laku', text: 'Před aplikací keramiky doporučujeme rozleštění a opravu laku – povlak zapečetí, co je pod ním.' },
          { href: '/sluzby/cisteni-exterieru-brno', title: 'Čištění exteriéru', text: 'Šetrné ruční mytí a dekontaminace pro údržbu keramické ochrany.' },
          { href: '/sluzby/cisteni-interieru-brno', title: 'Čištění interiéru auta', text: 'Hloubkové čištění interiéru auta včetně tepování sedaček.' },
        ]} />

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
