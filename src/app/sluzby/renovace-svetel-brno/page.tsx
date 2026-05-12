import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema, getFAQSchema } from '@/lib/schema';
import { CheckCircle, Eye, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renovace světel Brno | Odstranění zakalenosti světlometů',
  description: 'Profesionální renovace zakalených světlometů v Brně. Strojní leštění a ochranný povlak – světla jako nová bez výměny. Studio ve Vojkovicích u Brna.',
  keywords: ['renovace světel Brno', 'čištění světlometů Brno', 'zakalené světlomety Brno', 'leštění světel auto Brno'],
  alternates: {
    canonical: 'https://mnshine.cz/sluzby/renovace-svetel-brno',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby/renovace-svetel-brno',
    title: 'Renovace světel Brno | MN Shine Detailing',
    description: 'Renovace zakalených světlometů v Brně. Strojní leštění a ochranný povlak.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Renovace světel Brno – MN Shine' }],
  },
};

const faqItems = [
  {
    question: 'Proč světlomety žloutnou a kalí se?',
    answer: 'Plastové kryty světlometů jsou chráněny tenkou vrstvou UV laku, která se postupem času degraduje vlivem slunečního záření, tepla a chemikálií. Výsledkem je zakalení, žloutnutí a ztráta průhlednosti. Renovací tuto vrstvu obnovíme a znovu ošetříme ochranným povlakem.',
  },
  {
    question: 'Jak dlouho renovace světlometů vydrží?',
    answer: 'Výsledek závisí na kvalitě použitého ochranného povlaku a podmínkách provozu. Při správném ošetření lze počítat s výsledkem trvajícím 1–3 roky. Pro maximální životnost doporučujeme aplikaci keramického povlaku na světlomety.',
  },
  {
    question: 'Je renovace levnější než výměna světlometů?',
    answer: 'Výrazně levnější. Nové světlomety pro běžné osobní vozidlo stojí od několika tisíc do desítek tisíc korun za kus. Renovace vyjde na zlomek této ceny a výsledek je srovnatelný s novými světlomety.',
  },
];

export default function RenovaceSvetelPage() {
  const schema = getServiceSchema(
    'Renovace světel Brno',
    'Profesionální renovace zakalených světlometů. Strojní leštění a ochranný povlak.',
    'https://mnshine.cz/sluzby/renovace-svetel-brno'
  );
  const faqSchema = getFAQSchema(faqItems);

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Renovace světel · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Renovace světlometů<br />Brno a okolí
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Zakalené světlomety kazí vzhled vozu a snižují bezpečnost jízdy. Strojním leštěním a ochranným povlakem je vrátíme do stavu jako nové – bez nutnosti výměny.
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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Co zahrnuje renovace světlometů?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Renovace světlometů je precizní vícekrokový proces. Nestačí povrch pouze přeleštit – klíčem k trvalému výsledku je závěrečný ochranný povlak, který brání opětovnému kálení.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Sparkles size={24} />, title: 'Odmaštění a příprava', desc: 'Důkladné čištění povrchu světlometu od nečistot a mastnoty před leštěním.' },
              { icon: <Eye size={24} />, title: 'Strojní leštění', desc: 'Postupné vícekrokové leštění odstraní zakalenost, žloutnutí a povrchové poškrábání krytu.' },
              { icon: <Shield size={24} />, title: 'Ochranný povlak', desc: 'Aplikace UV odolného ochranného povlaku, který zabrání opětovné degradaci plastu.' },
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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Proč renovovat, ne vyměňovat?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Cena renovace je zlomkem ceny nových světlometů',
              'Výsledek je vizuálně srovnatelný s novými světlomety',
              'Zlepšení průchodu světla = lepší osvětlení vozovky v noci',
              'Průhledné světlomety zlepšují celkový vzhled a hodnotu vozu',
              'Ekologicky šetrnější než výměna celých světlometů',
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
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem', marginTop: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Objednejte renovaci světel</h2>
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
