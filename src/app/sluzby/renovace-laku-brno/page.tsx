import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Zap, Eye, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renovace laku Brno | Leštění a korekce laku automobilu',
  description: 'Profesionální renovace a korekce laku vozidla v Brně. Odstraníme škrábance, víry, oxidaci a jiné defekty. Strojní leštění. Studio ve Vojkovicích u Brna.',
  keywords: ['renovace laku Brno', 'leštění laku Brno', 'korekce laku Brno', 'odstranění škrábanců Brno', 'polish auto Brno'],  alternates: {
    canonical: 'https://mnshine.cz/sluzby/renovace-laku-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/renovace-laku-brno',
    title: 'Renovace laku Brno | MN Shine Detailing',
    description: 'Profesionální renovace a korekce laku vozidla v Brně. Strojní leštění, odstranění škrábanců.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Renovace laku Brno – MN Shine' }],
  },};

const faqItems = [
  {
    question: 'Lze odstranit hluboké škrábance leštěním?',
    answer: 'Strojní leštění odstraňuje povrchové škrábance, které neprorůstají přes základní lak. Hlubší škrábance, které sahají až na plech, leštěním zcela neodstraníme – ty vyžadují lakýrnické opravy. Vždy provedeme diagnostiku a řekneme vám, co je možné.',
  },
  {
    question: 'Kolik stojí renovace laku v Brně?',
    answer: 'Cena závisí na velikosti vozidla, míře poškození a zvoleném postupu (1-step nebo 2-step korekce). Ceny začínají od 4 500 Kč. Přesnou kalkulaci připravíme po prohlídce a diagnostice laku.',
  },
  {
    question: 'Jak dlouho vydrží efekt leštění?',
    answer: 'Samotné leštění bez ochranné vrstvy vydrží typicky 1–3 měsíce při pravidelné péči. Proto doporučujeme po korekci laku aplikovat keramický povlak nebo kvalitní sealant, který chrání lak po dobu měsíců až let.',
  },
];

export default function RenovaceLakuPage() {
  const schema = getServiceSchema(
    'Renovace laku Brno',
    'Profesionální renovace a korekce laku vozidla. Strojní leštění, odstranění škrábanců, víru a oxidace. Studio ve Vojkovicích u Brna.',
    'https://mnshine.cz/sluzby/renovace-laku-brno'
  );
  const faqSchema = getFAQSchema(faqItems);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Renovace laku · Brno</div>
          <h1 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Renovace a korekce laku<br /><span style={{ color: '#C8A97E' }}>Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Vrátíme vašemu autu původní lesk. Profesionálním strojním leštěním odstraníme škrábance, víry, matnou oxidaci a jiné povrchové defekty. Výsledkem je lak zářící jako z výroby. Studio MN Shine ve Vojkovicích u Brna.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Objednat renovaci laku
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
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cena od</p>
            <p style={{ color: '#C8A97E', fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-cinzel, serif)', margin: 0 }}>4 500 Kč</p>
          </div>
          <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '200px' }}>Cena závisí na velikosti vozidla a míře poškození laku. Po diagnostice připravíme přesnou kalkulaci.</p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Co je korekce a renovace laku?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Renovace laku, neboli korekce laku, je proces strojního leštění, při kterém odstraňujeme tenkou vrstvu laku obsahující defekty – škrábance, víry, matné plochy a oxidaci. Výsledkem je hladký, lesklý lak bez viditelných vad.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Víry v laku (swirl marks) jsou drobné kruhové škrábance způsobené nesprávným mytím a leštěním. Při světle (zejména přímém slunci) jsou velmi viditelné a kazí celkový dojem z vozidla. Naším leštěním je odstraníme.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Oxidace laku je důsledkem dlouhodobého působení UV záření. Projevuje se matným, vybledlým nebo křídovým povrchem. Správnou korekcí laku oxidaci odstraníme a obnovíme původní hloubku a lesk barvy.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Co odstraníme z vašeho laku?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Eye size={24} />, title: 'Víry (swirl marks)', desc: 'Drobné kruhové škrábance vzniklé nesprávným mytím nebo leštěním.' },
              { icon: <Zap size={24} />, title: 'Povrchové škrábance', desc: 'Lehké škrábance neprorůstající přes čirý lak (clear coat).' },
              { icon: <Layers size={24} />, title: 'Oxidace a matnost', desc: 'Degradace způsobená UV zářením – matný a křídový povrch.' },
              { icon: <Eye size={24} />, title: 'Vodní kameny', desc: 'Minerální usazeniny zanechané po odpaření vody z povrchu laku.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '1.5rem', border: '1px solid rgba(200,169,126,0.15)' }}>
                <div style={{ color: '#C8A97E', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Typy korekce laku</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                title: '1-Step korekce',
                desc: 'Jednokroková korekce pro vozidla s mírnými defekty. Leštění kombinovaným polishem odstraní víry a lehké škrábance a obnoví lesk. Ideální pro pravidelnou údržbu.',
                price: 'od 4 500 Kč',
              },
              {
                title: '2-Step korekce',
                desc: 'Dvoukroková korekce pro vozidla s výraznějšími defekty. Nejprve hrubší compound pro odstranění škrábanců, poté finální polish pro maximální lesk. Doporučujeme pro starší nebo zanedbaná vozidla.',
                price: 'od 7 000 Kč',
              },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '1.5rem 2rem', border: '1px solid rgba(200,169,126,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                  <p style={{ color: '#9CA3AF', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
                <span style={{ color: '#C8A97E', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Proč zvolit profesionální leštění?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Profesionální strojní leštění dosahuje výsledků, které ruční leštění neumožňuje',
              'Správná volba polishu a lešticího kotouče chrání lak před přeleštěním',
              'Zkušený detailer rozpozná hranici bezpečného leštění pro váš lak',
              'Výsledek je rovnoměrný, bez hologramů a přeleštěných míst',
              'Kombinace s ochranou laku prodlouží životnost výsledku na roky',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#C8A97E', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Postup renovace laku</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Diagnostika laku', desc: 'Měření tloušťky laku tloušťkoměrem a vizuální posouzení defektů při různém osvětlení.' },
              { step: '02', title: 'Přípravné mytí', desc: 'Důkladné ruční mytí a odmašťování povrchu před leštěním.' },
              { step: '03', title: 'Dekontaminace', desc: 'Clay bar pro odstranění vzdušného znečištění a kovových úlomků z povrchu laku.' },
              { step: '04', title: 'Strojní leštění', desc: 'Korekce laku orbitální nebo rotační leštičkou s příslušným polishem.' },
              { step: '05', title: 'Finální polish', desc: 'Závěrečný polish pro maximální lesk a odstranění micro-scratch z předchozího kroku.' },
              { step: '06', title: 'Ochrana', desc: 'Aplikace vosku, sealantu nebo keramického povlaku pro ochranu čerstvě vyleštěného laku.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#111111', borderRadius: '8px' }}>
                <span style={{ color: '#C8A97E', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-cinzel, serif)', minWidth: '32px' }}>{item.step}</span>
                <div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 600, margin: '0 0 0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Časté dotazy k renovaci laku</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Objednejte renovaci laku</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Kontaktujte nás pro nezávaznou konzultaci. Posoudíme stav vašeho laku a navrhneme optimální řešení.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>+420 777 123 456</a>
          </div>
        </div>
      </div>
    </div>
  );
}
