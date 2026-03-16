import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQItem } from '@/components/ui/FAQItem';
import { faqs } from '@/data/faq';

export function FAQSection() {
  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
