import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { RelatedServices } from '@/components/ui/RelatedServices';
import { ServiceBeforeAfter } from '@/components/sections/ServiceBeforeAfter';
import { PriceVariants } from '@/components/ui/PriceVariants';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import { CheckCircle, Zap, Eye, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renovace, oprava a leštění laku Brno',
  description: 'Renovace a oprava laku v Brně. Strojním rozleštěním laku odstraníme škrábance, víry i oxidaci. Cena od 6 999 Kč. Studio ve Vojkovicích u Brna.',
  keywords: ['renovace laku Brno', 'oprava laku Brno', 'rozleštění laku', 'leštění laku Brno', 'korekce laku Brno', 'odstranění škrábanců Brno', 'polish auto Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/renovace-laku-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/renovace-laku-brno',
    title: 'Renovace, oprava a leštění laku Brno | MN Shine Detailing',
    description: 'Profesionální renovace a korekce laku vozidla v Brně. Strojní leštění, odstranění škrábanců.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Renovace laku Brno – MN Shine' }],
  },};

const faqItems = [
  {
    question: 'Lze odstranit hluboké škrábance leštěním?',
    answer: 'Strojní leštění odstraňuje povrchové škrábance, které neprorůstají přes lak. Hlubší škrábance, které sahají až na plech, leštěním neodstraníme – provádíme retuše laku, v ostatních případech je potřeba lakýrnická oprava. Vždy provedeme diagnostiku a řekneme vám, co je možné opravit.',
  },
  {
    question: 'Kolik stojí renovace a rozleštění laku?',
    answer: 'Cena závisí na velikosti vozidla, míře poškození a zvoleném postupu (jednokroková nebo vícekroková korekce). Jednokroková renovace začíná od 6 999 Kč u malého auta, od 8 999 Kč u středního (např. Škoda Octavia) a od 9 999 Kč u velkého. Vícekroková renovace stojí od 9 999 Kč. Přesnou kalkulaci připravíme po prohlídce a diagnostice laku.',
  },
  {
    question: 'Pozná se na autě, že bylo leštěno?',
    answer: 'Rozdíl poznáte okamžitě – lak znovu září, barva je sytější a povrch působí jako nový. Výsledek mluví sám za sebe. Navíc správně provedená renovace laku nezanechává hologramy ani jiné stopy v laku. Lak je hladký, lesklý a bez viditelných defektů.',
  },
];

export default function RenovaceLakuPage() {
  const schema = getServiceSchema(
    'Renovace laku Brno',
    'Profesionální renovace a korekce laku vozidla. Strojní leštění, odstranění škrábanců, víru a oxidace. Studio ve Vojkovicích u Brna.',
    'https://mnshine.cz/sluzby/renovace-laku-brno'
  );
  const faqSchema = getFAQSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Domů', url: 'https://mnshine.cz' },
    { name: 'Služby', url: 'https://mnshine.cz/sluzby' },
    { name: 'Renovace laku Brno', url: 'https://mnshine.cz/sluzby/renovace-laku-brno' },
  ]);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Renovace laku · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Renovace a leštění laku<br /><span style={{ color: '#FFFFFF' }}>Vojkovice, Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Rozleštění a oprava laku, které vašemu autu vrátí původní lesk. Strojním leštěním odstraníme škrábance, víry, matnou oxidaci a jiné povrchové defekty. Výsledkem je lak zářící jako z výroby. Studio MN Shine ve Vojkovicích u Brna.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              Objednat renovaci laku
            </Link>
            <a href="tel:+420702852852" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>
              +420 702 852 852
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <ServiceBeforeAfter galleryId="renovace-laku" label="Renovace a rozleštění laku" />

        <PriceVariants
          note={<>Uvedené ceny platí pro malé auto. Ceny pro střední a velká auta najdete v tabulce níže.</>}
          variants={[
          { label: 'Jednokroková renovace od', price: '6 999 Kč', desc: 'Pro lak s mírnými defekty. Strojní leštění odstraní víry a lehké škrábance a obnoví lesk. Včetně mytí a dekontaminace, 2–3 dny.' },
          { label: 'Vícekroková renovace od', price: '9 999 Kč', desc: 'Pro starší nebo zanedbaný lak. Postupné leštění od hrubších po nejjemnější pasty pro maximální korekci a lesk. Včetně mytí a dekontaminace, 3–5 dní.' },
          ]}
        />

        <section id="cenik-podle-velikosti" style={{ marginBottom: '3rem', scrollMarginTop: '110px' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Kolik stojí renovace a rozleštění laku</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Orientační ceny podle velikosti auta. Přesnou cenu určíme po diagnostice laku podle rozsahu defektů.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '420px' }}>
              <thead>
                <tr>
                  {['Velikost auta', 'Jednokroková', 'Vícekroková'].map(h => (
                    <th key={h} style={{ textAlign: 'left', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'Malé auto', examples: 'např. Škoda Fabia, Toyota Yaris, VW Polo', one: 'od 6 999 Kč', multi: 'od 9 999 Kč' },
                  { size: 'Střední auto', examples: 'např. Škoda Octavia, VW Golf, Škoda Karoq', one: 'od 8 999 Kč', multi: 'od 11 999 Kč' },
                  { size: 'Velké auto', examples: 'např. Škoda Superb, VW Tiguan, Volvo XC60', one: 'od 9 999 Kč', multi: 'od 13 999 Kč' },
                ].map(row => (
                  <tr key={row.size} style={{ backgroundColor: '#111111' }}>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{row.size}</div>
                      <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.2rem' }}>{row.examples}</div>
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.one}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.multi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co je renovace laku?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Renovace laku (často se jí říká také oprava laku, rozleštění nebo korekce laku) je proces strojního leštění, při kterém odstraňujeme tenkou vrstvu laku obsahující defekty – škrábance, víry, matné plochy a oxidaci. Výsledkem je hladký, lesklý lak bez viditelných vad.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Víry v laku (swirl marks) jsou drobné kruhové škrábance způsobené nesprávným mytím a leštěním. Při světle (zejména přímém slunci) jsou velmi viditelné a kazí celkový dojem z vozidla. Naším leštěním je odstraníme.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Oxidace laku je důsledkem dlouhodobého působení UV záření. Projevuje se matným, vybledlým nebo křídovým povrchem. Správnou korekcí laku oxidaci odstraníme a obnovíme původní hloubku a lesk barvy.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co odstraníme z vašeho laku?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Eye size={24} />, title: 'Víry (swirl marks)', desc: 'Drobné kruhové škrábance vzniklé nejčastěji nesprávným mytím.' },
              { icon: <Zap size={24} />, title: 'Povrchové škrábance', desc: 'Lehké škrábance neprorůstající přes čirý lak (clear coat).' },
              { icon: <Layers size={24} />, title: 'Oxidace a matnost', desc: 'Degradace způsobená UV zářením – matný a křídový povrch.' },
              { icon: <Eye size={24} />, title: 'Vodní kámen', desc: 'Minerální usazeniny zanechané po odpaření vody z povrchu laku.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '0', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Big Shoulders Display', sans-serif", color: '#FFFFFF', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Proč zvolit profesionální leštění?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Profesionální strojní leštění dosahuje výsledků, které ruční leštění neumožňuje',
              'Výběr správných past a technik pro váš konkrétní lak zajistí optimální výsledek bez rizika poškození',
              'Zkušený detailer rozpozná hranici bezpečného leštění pro váš lak',
              'Výsledek je rovnoměrný, bez hologramů a s hlubokým leskem',
              'Kombinace s ochranou laku prodlouží životnost výsledku na roky',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#FFFFFF', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Postup renovace laku</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Přípravné mytí', desc: 'Důkladné ruční mytí a odmašťování povrchu před leštěním.' },
              { step: '02', title: 'Dekontaminace', desc: 'Clay bar pro odstranění vzdušného znečištění a kovových úlomků z povrchu laku.' },
              { step: '03', title: 'Diagnostika laku', desc: 'Měření tloušťky laku a vizuální posouzení defektů při různém osvětlení.' },
              { step: '04', title: 'Strojní leštění', desc: 'Korekce laku orbitální nebo rotační leštičkou s příslušnou kombinací leštící pasty a kotouče.' },
              { step: '05', title: 'Ochrana', desc: 'V případě výběru ochrany laku se aplikuje tuhý vosk, nebo keramický povlak pro ochranu čerstvě vyleštěného laku.' },
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
          { href: '/sluzby/ochrana-laku-brno', title: 'Keramická ochrana laku', text: 'Po rozleštění lak ochraňte keramickým povlakem – lesk vydrží roky, ne týdny.' },
          { href: '/sluzby/oprava-skrabancu-brno', title: 'Oprava škrábanců', text: 'Hlubší jednotlivé škrábance opravíme lokálně retuší bez lakovny.' },
          { href: '/sluzby/cisteni-exterieru-brno', title: 'Čištění exteriéru', text: 'Pravidelné šetrné ruční mytí, které nový lesk laku nepoškrábe.' },
        ]} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Časté dotazy k renovaci laku</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '0', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Objednejte renovaci laku</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Kontaktujte nás pro nezávaznou konzultaci. Posoudíme stav vašeho laku a navrhneme optimální řešení.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420702852852" style={{ border: '1px solid #FFFFFF', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' }}>+420 702 852 852</a>
          </div>
        </div>
      </div>
    </div>
  );
}
