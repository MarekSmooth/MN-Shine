import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQItem } from '@/components/ui/FAQItem';
import { getServiceSchema } from '@/lib/schema';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Detailing Brno | Profesionální auto detailing',
  description: 'Profesionální auto detailing v Brně a okolí. Prémiová péče o vozidlo – čištění, leštění, ochrana laku. Studio ve Vojkovicích u Brna. Objednejte se ještě dnes.',
  keywords: ['detailing Brno', 'auto detailing Brno', 'detailing Brno-venkov', 'profesionální detailing Brno'],
};

const faqItems = [
  { question: 'Kolik stojí detailing v Brně?', answer: 'Cena detailingu závisí na velikosti vozu, jeho stavu a zvolených službách. Kompletní detailing začíná od 6 000 Kč. Keramická ochrana od 8 000 Kč. Přesnou kalkulaci připravíme po prohlídce vozu.' },
  { question: 'Jak daleko od Brna jedete?', answer: 'Naše studio se nachází ve Vojkovicích u Brna, což je pouhých několik kilometrů od centra Brna. Přijímáme zákazníky z celého Jihomoravského kraje.' },
  { question: 'Jak dlouho trvá kompletní detailing?', answer: 'Kompletní detailing trvá obvykle celý pracovní den, tj. 6–10 hodin. Záleží na velikosti vozidla a rozsahu prací.' },
];

export default function DetailingBrnoPage() {
  const schema = getServiceSchema(
    'Detailing Brno',
    'Profesionální auto detailing studio v Brně. Čištění interiéru, renovace laku, keramická ochrana.',
    'https://mnshine.cz/sluzby/detailing-brno'
  );

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Detailing Brno</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Profesionální auto detailing<br /><span style={{ color: '#C8A97E' }}>Brno a okolí</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            MN Shine Detailing je prémiové detailing studio ve Vojkovicích u Brna. Nabízíme komplexní péči o vaše vozidlo – od profesionálního mytí a dekontaminace, přes korekci laku, až po aplikaci keramické ochrany. Obsluhujeme zákazníky z celého Brna, Brno-venkova a Jihomoravského kraje.
          </p>
          <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
            Objednat detailing
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Co je auto detailing?</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            Auto detailing je profesionální péče o vozidlo, která jde daleko za rámec běžného mytí. Zahrnuje hloubkové čištění interiéru i exteriéru, korekci laku, ošetření povrchů a aplikaci ochranných produktů. Výsledkem je vozidlo v showroom kondici, které vypadá a voní jako nové.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1rem' }}>
            V našem studiu v Brně přistupujeme ke každému vozidlu individuálně. Před zahájením prací provedeme důkladnou diagnostiku stavu laku a interiéru, abychom mohli navrhnout optimální postup a produkty přesně pro váš vůz.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
            Detailing v Brně provádíme pro osobní vozidla, SUV i luxusní automobily. Ať vlastníte starší vůz, který chcete osvěžit, nebo nové auto, které chcete chránit od prvního dne – jsme tu pro vás.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Naše detailing služby v Brně</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Kompletní detailing', desc: 'Mytí, dekontaminace, leštění laku, čištění interiéru, ošetření plastů a pneumatik, finální ochrana.' },
              { title: 'Čištění interiéru', desc: 'Hloubkové čištění sedadel, koberců, plastů, stropu. Odstranění skvrn, pachů a bakterií.' },
              { title: 'Korekce laku', desc: 'Strojní leštění, odstranění škrábanců, víru a oxidace. Lak jako z výroby.' },
              { title: 'Keramická ochrana', desc: 'Aplikace keramického povlaku pro dlouhodobou ochranu na 2–5 let.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '1.5rem', border: '1px solid rgba(200,169,126,0.15)' }}>
                <h3 style={{ color: '#C8A97E', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Proč zvolit MN Shine pro detailing v Brně?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Prémiové produkty – používáme profesionální přípravky od renomovaných značek',
              'Individuální přístup – každé vozidlo je jiné, každou zakázku řešíme osobně',
              'Moderní vybavení – profesionální nástroje a přístroje pro dokonalé výsledky',
              'Transparentní ceny – předem víte, co a za kolik dostanete',
              'Dostupnost – jsme pár minut od Brna, ve Vojkovicích u Brna',
              'Garance spokojenosti – práci vždy zkontrolujeme společně se zákazníkem',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#C8A97E', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Proces detailingu krok za krokem</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Konzultace a prohlídka', desc: 'Provedeme prohlídku vozidla a prodiskutujeme vaše požadavky a očekávání.' },
              { step: '02', title: 'Dekontaminace a mytí', desc: 'Důkladné ruční mytí, odmaštění a dekontaminace laku clay barem.' },
              { step: '03', title: 'Korekce laku', desc: 'Strojní leštění pro odstranění defektů a obnovení lesku laku.' },
              { step: '04', title: 'Ochrana', desc: 'Aplikace vosku, sealantu nebo keramického povlaku dle vašeho výběru.' },
              { step: '05', title: 'Čištění interiéru', desc: 'Hloubkové čištění interiéru, ošetření plastů a kůže.' },
              { step: '06', title: 'Finální kontrola', desc: 'Detailní prohlídka výsledku a předání vozidla zákazníkovi.' },
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
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>Časté dotazy k detailingu v Brně</h2>
          {faqItems.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
        </section>

        <div style={{ backgroundColor: '#111111', borderRadius: '8px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Připraveni objednat se?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>Kontaktujte nás a domluvte si termín. Jsme tu pro zákazníky z Brna a celého Jihomoravského kraje.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Objednat se</Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>+420 777 123 456</a>
          </div>
        </div>
      </div>
    </div>
  );
}
