import type { Metadata } from 'next';
import { FAQItem } from '@/components/ui/FAQItem';
import { faqs } from '@/data/faq';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Časté dotazy (FAQ)',
  description: 'Odpovědi na nejčastější dotazy k auto detailingu, čištění interiéru, keramické ochraně a cenách. MN Shine Detailing Brno.',
};

const categories = [...new Set(faqs.map(f => f.category))];

export default function FAQPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#C8A97E', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Máte otázky?</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Časté dotazy
          </h1>
          <p style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
            Zde najdete odpovědi na nejčastější otázky k našim službám. Nenašli jste odpověď? Kontaktujte nás přímo.
          </p>
        </div>

        {/* FAQ by category */}
        {categories.map(category => (
          <section key={category} style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(200,169,126,0.1)',
              border: '1px solid rgba(200,169,126,0.3)',
              borderRadius: '100px',
              padding: '0.35rem 1rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{ color: '#C8A97E', fontSize: '0.85rem', fontWeight: 500 }}>{category}</span>
            </div>
            <div>
              {faqs
                .filter(faq => faq.category === category)
                .map(faq => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
            </div>
          </section>
        ))}

        {/* Still have questions */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(200,169,126,0.2)',
          borderRadius: '8px',
          padding: '2.5rem',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Nenašli jste odpověď?
          </h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Kontaktujte nás přímo. Rádi zodpovíme jakékoliv dotazy k detailingu, cenám nebo objednávkám.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              Kontaktovat nás
            </Link>
            <a href="tel:+420777123456" style={{ border: '1px solid #C8A97E', color: '#C8A97E', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>
              +420 777 123 456
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
