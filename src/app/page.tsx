import { Hero } from '@/components/sections/Hero';
import { WhyUs } from '@/components/sections/WhyUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { WhyDetailing } from '@/components/sections/WhyDetailing';
import { Reviews } from '@/components/sections/Reviews';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getLocalBusinessSchema } from '@/lib/schema';

export default function HomePage() {
  const schema = getLocalBusinessSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <BeforeAfterSection />
      <WhyDetailing />
      <Reviews />
      <FAQSection />
      <ContactSection />
    </>
  );
}
