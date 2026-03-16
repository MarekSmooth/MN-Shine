import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema } from '@/lib/schema';
import { CheckCircle, Droplets, Wind, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Čištění interiéru Brno | Profesionální hloubkové čištění auta',
  description: 'Profesionální čištění interiéru vozu v Brně a okolí. Hloubkové čištění sedadel, koberců, plastů a stropu. Odstranění skvrn, pachů a bakterií. Studio ve Vojkovicích u Brna.',
  keywords: ['čištění interiéru Brno', 'hloubkové čištění auta Brno', 'čištění sedadel Brno', 'dezinfekce auta Brno'],
};

const faqItems = [
  {
    question: 'Jak dlouho trvá čištění interiéru?',
    answer: 'Hloubkové čištění interiéru obvykle trvá 3–5 hodin v závislosti na velikosti vozidla a míře znečištění. U silně znečištěných vozidel může proces trvat déle.',
  },
  {
    question: 'Dokážete odstranit staré skvrny z koberců a sedadel?',
    answer: 'Ano, používáme profesionální extraktory a speciální přípravky na odstraňování skvrn. Většinu skvrn dokážeme výrazně zredukovat nebo úplně odstranit. Výsledek závisí na druhu a stáří skvrny.',
  },
  {
    question: 'Je čištění bezpečné pro kožená sedadla?',
    answer: 'Samozřejmě. Kožená sedadla čistíme speciálními přípravky určenými pro kůži, které ji nepoškodí ani nezbaví přirozených olejů. Po čištění aplikujeme kondicionér pro ochranu a výživu kůže.',
  },
];

export default function CisteniInterieru() {
  const schema = getServiceSchema(
    'Čištění interiéru Brno',
    'Profesionální hloubkové čištění interiéru vozidla. Sedadla, koberce, plasty, strop. Odstranění skvrn, pachů a bakterií.',
    'https://mnshine.cz/sluzby/cisteni-interieru-brno'
  );

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Čištění interiéru · Brno</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Profesionální čištění interiéru<br /><span style={{ color: '#C8A97E' }}>Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Zajistíme hloubkové čištění každého koutu vašeho vozidla. Sedadla, koberce, plasty, strop – vše bude čisté, svěží a dezinfikované. Obsluhujeme zákazníky z Brna a celého Jihomoravského kraje.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Objednat čištění
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
            <p style={{ color: '#C8A97E', fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)', margin: 0 }}>2 500 Kč</p>
          </div>
          <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '200px' }}>Konečná cena závisí na velikosti vozidla a míře znečištění. Přesnou kalkulaci vám poskytneme po prohlídce.</p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Co zahrnuje čištění interiéru?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Naše hloubkové čištění interiéru je komplexní proces, který se zaměřuje na každý povrch uvnitř vašeho vozidla. Neomezujeme se jen na povrchové vyčištění – pracujeme důkladně, abychom odstranili veškeré nečistoty, alergeny a bakterie.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Sparkles size={24} />, title: 'Sedadla a čalounění', desc: 'Čištění látkových i kožených sedadel extrakcí a parním čištěním. Odstranění skvrn a pachů.' },
              { icon: <Droplets size={24} />, title: 'Koberce a rohožky', desc: 'Hloubkové čištění koberců mokrou extrakcí. Odstraňujeme nečistoty, písek i zatvrdlé skvrny.' },
              { icon: <Wind size={24} />, title: 'Plasty a palubní deska', desc: 'Čištění a ošetření všech plastových povrchů, vzduchových otvorů, kapes a úchytů.' },
              { icon: <Sparkles size={24} />, title: 'Strop a sloupky', desc: 'Šetrné čištění stropu a sloupků, které odstraní skvrny a šmouhy bez poškození materiálu.' },
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
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Proč pravidelně čistit interiér?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Interiér vozidla je prostředím, kde trávíme spoustu času. Špína, prach, bakterie a alergeny se hromadí v koberci, čalounění i ventilačních otvorech. Pravidelné čištění přispívá nejen k estetickému vzhledu, ale i ke zdraví cestujících.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Kvalitní čistý interiér také zachovává hodnotu vozidla. Při případném prodeji je stav interiéru jedním z klíčových faktorů ovlivňujících výslednou cenu.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              'Eliminace alergenů, prachu a bakterií pro zdravější prostředí',
              'Odstranění nepříjemných pachů (jídlo, cigarety, domácí mazlíčci)',
              'Ochrana a prodloužení životnosti čalounění a koberců',
              'Zachování tržní hodnoty vozidla',
              'Příjemnější a komfortnější jízdní zážitek',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#C8A97E', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Postup čištění interiéru</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Vysávání', desc: 'Důkladné vysání celého interiéru včetně spár, pod sedadly a v kapsách.' },
              { step: '02', title: 'Předúprava', desc: 'Aplikace přípravků na předúpravu skvrn a silně znečištěných míst.' },
              { step: '03', title: 'Extrakce a parní čištění', desc: 'Mokrá extrakce koberců a sedadel, parní čištění pro dezinfekci.' },
              { step: '04', title: 'Čištění plastů', desc: 'Šetrné čištění a ošetření palubní desky, dveřních panelů a plastů.' },
              { step: '05', title: 'Čištění skel zevnitř', desc: 'Bezpruhové čištění všech skel pro dokonalý výhled.' },
              { step: '06', title: 'Ošetření a finalizace', desc: 'Ošetření plastů kondicionérem, finální prohlídka a předání.' },
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
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Časté dotazy ke čištění interiéru</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Objednejte čištění interiéru</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Kontaktujte nás a domluvte si termín. Přijímáme zákazníky z Brna a celého Jihomoravského kraje.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>+420 777 123 456</a>
          </div>
        </div>
      </div>
    </div>
  );
}
