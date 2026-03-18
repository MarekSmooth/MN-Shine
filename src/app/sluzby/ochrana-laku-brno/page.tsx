import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Shield, Droplets, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ochrana laku Brno | Keramický povlak a PPF fólie',
  description: 'Profesionální ochrana laku vozidla v Brně. Keramické povlaky, grafenové povlaky a ochranná fólie PPF. Hydrofobní efekt, UV ochrana, 2–5 let záruky. Studio ve Vojkovicích u Brna.',
  keywords: ['ochrana laku Brno', 'keramický povlak Brno', 'keramika auto Brno', 'PPF fólie Brno', 'nano keramika Brno'],  alternates: {
    canonical: 'https://mnshine.cz/sluzby/ochrana-laku-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/ochrana-laku-brno',
    title: 'Ochrana laku Brno | MN Shine Detailing',
    description: 'Keramické povlaky a PPF fólie pro ochranu laku vozidla v Brně.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ochrana laku Brno – MN Shine' }],
  },};

const faqItems = [
  {
    question: 'Jak dlouho vydrží keramický povlak?',
    answer: 'Délka trvání závisí na kvalitě použitého produktu a péči o vozidlo. Profesionální keramické povlaky vydrží 2–5 let při správné údržbě. Grafenové povlaky mohou vydržet ještě déle. Jednou ročně doporučujeme aplikaci boost sealantu.',
  },
  {
    question: 'Je nutné lak vyleštit před aplikací keramiky?',
    answer: 'Ano, před aplikací keramického povlaku doporučujeme provést korekci laku. Keramika "zapečetí" stav laku v momentě aplikace. Pokud jsou v laku defekty, budou pod keramikou nadále viditelné. Proto je vhodné nejprve vyleštit a poté chránit.',
  },
  {
    question: 'Jaký je rozdíl mezi keramikou a PPF fólií?',
    answer: 'Keramický povlak je chemická vrstva nanášená na lak, která poskytuje hydrofobní efekt, UV ochranu a snadnou údržbu. PPF (Paint Protection Film) je fyzická transparentní fólie, která chrání lak před kamínky, škrábanci a mechanickým poškozením. Obě ochrany se doplňují a lze je kombinovat.',
  },
];

export default function OchranaLakuPage() {
  const schema = getServiceSchema(
    'Ochrana laku Brno',
    'Profesionální ochrana laku vozidla keramickými povlaky a PPF fólií v Brně. Hydrofobní efekt, UV ochrana, dlouhodobá ochrana laku.',
    'https://mnshine.cz/sluzby/ochrana-laku-brno'
  );  const faqSchema = getFAQSchema(faqItems);
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Ochrana laku · Brno</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Keramická ochrana laku<br /><span style={{ color: '#C8A97E' }}>Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Chraňte svůj vůz před poškozením na roky dopředu. Aplikujeme prémiové keramické povlaky a ochranné fólie PPF, které zajistí maximální ochranu laku vašeho vozidla. Studio MN Shine ve Vojkovicích u Brna.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Objednat ochranu laku
            </Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              +420 777 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Price highlight */}
        <div style={{ backgroundColor: '#111111', border: '1px solid rgba(200,169,126,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Keramická ochrana od</p>
            <p style={{ color: '#C8A97E', fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)', margin: 0 }}>8 000 Kč</p>
          </div>
          <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '200px' }}>Cena závisí na velikosti vozidla a zvoleném produktu. Zahrnuje přípravu laku a aplikaci povlaku.</p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Co je keramická ochrana laku?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Keramický povlak (ceramic coating) je tekutý polymer na bázi oxidu křemičitého (SiO2) nebo oxidu titaničitého (TiO2), který se chemicky váže na povrch laku a vytváří tvrdou, ochrannou vrstvu. Na rozdíl od vosku nebo sealantu, keramika nevymývá a vydrží roky.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Výsledkem je extrémní hydrofobní efekt – voda, bahno a nečistoty se odvalují z povrchu. Lak je chráněn před UV zářením, chemickými látkami (průmyslový spad, ptačí trus, hmyz) a lehkými škrábanci.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Vozidlo s keramickou ochranou je výrazně snazší udržovat – nečistoty se nepřilepují a mytí trvá méně času. Lesk laku zůstává zachován na roky.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Typy ochrany laku</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                icon: <Shield size={28} />,
                title: 'Keramický povlak (SiO2)',
                desc: 'Prémiová keramická ochrana pro osobní vozidla. Tvrdost 9H, hydrofobní efekt, UV ochrana. Výdrž 2–5 let dle produktu. Vhodný pro každodenní vozidla.',
                duration: '2–5 let',
                price: 'od 8 000 Kč',
              },
              {
                icon: <Droplets size={28} />,
                title: 'Grafenový povlak',
                desc: 'Nejnovější generace ochranných povlaků s grafenovými nanočásticemi. Vyšší tvrdost, lepší teplotní odolnost a delší výdrž než standardní keramika. Vhodný pro luxusní a sportovní vozidla.',
                duration: '3–7 let',
                price: 'od 12 000 Kč',
              },
              {
                icon: <Sun size={28} />,
                title: 'Ochranná fólie PPF',
                desc: 'Transparentní samoléčící fólie na fyzické poškrábání. Chrání lak před kamínky, hmyzem a drobnými nárazy. Lze aplikovat na celé vozidlo nebo jen na exponovaná místa (kapota, nárazníky).',
                duration: '5–10 let',
                price: 'individuální kalkulace',
              },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2rem', border: '1px solid rgba(200,169,126,0.2)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ color: '#C8A97E', flexShrink: 0 }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h3 style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{item.title}</h3>
                    <span style={{ color: '#C8A97E', fontWeight: 700, fontSize: '0.9rem' }}>{item.price}</span>
                  </div>
                  <p style={{ color: '#9CA3AF', margin: '0 0 0.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
                  <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Výdrž: <span style={{ color: '#C8A97E' }}>{item.duration}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Výhody keramické ochrany</h2>
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
                <CheckCircle size={18} style={{ color: '#C8A97E', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Postup aplikace keramické ochrany</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Diagnostika', desc: 'Měření tloušťky laku a posouzení stavu povrchu.' },
              { step: '02', title: 'Přípravné mytí a dekontaminace', desc: 'Důkladné ruční mytí, odmaštění a clay bar pro odstranění kontaminace.' },
              { step: '03', title: 'Korekce laku (volitelná)', desc: 'Strojní leštění pro odstranění defektů před zapečetěním keramikou.' },
              { step: '04', title: 'Odmašťování povrchu', desc: 'Důkladné odmašťování isopropylalkoholem pro maximální přilnavost keramiky.' },
              { step: '05', title: 'Aplikace keramického povlaku', desc: 'Ruční aplikace keramiky panel po panelu s dodržením předepsaných podmínek.' },
              { step: '06', title: 'Vytvrzení a předání', desc: 'Keramika potřebuje čas na vytvrzení. Předáme vozidlo s instrukcemi pro první dny po aplikaci.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#111111', borderRadius: '8px' }}>
                <span style={{ color: '#C8A97E', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-playfair, serif)', minWidth: '32px' }}>{item.step}</span>
                <div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 600, margin: '0 0 0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Časté dotazy k ochraně laku</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Chraňte svůj vůz od prvního dne</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Konzultujte s námi výběr správné ochrany pro vaše vozidlo. Rádi vám poradíme a připravíme kalkulaci.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>+420 777 123 456</a>
          </div>
        </div>
      </div>
    </div>
  );
}
