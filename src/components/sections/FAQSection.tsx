import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQItem } from '@/components/ui/FAQItem';
import { faqs } from '@/data/faq';

export function FAQSection() {
  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark logo */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mnlogo.png"
          alt=""
          style={{
            width: '70%',
            maxWidth: '700px',
            opacity: 0.04,
            filter: 'grayscale(1) brightness(2)',
            userSelect: 'none',
          }}
        />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Nejčastější dotazy"
          subtitle="Máte otázky? Zde najdete odpovědi na ty nejčastější."
        />
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
