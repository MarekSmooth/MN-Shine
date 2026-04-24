import { Hero } from '@/components/sections/Hero';
import { WhyUs } from '@/components/sections/WhyUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { WhyDetailing } from '@/components/sections/WhyDetailing';
import { Reviews } from '@/components/sections/Reviews';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getLocalBusinessSchema } from '@/lib/schema';
import SectionTransition from '@/components/ui/SectionTransition';

export default function HomePage() {
  const schema = getLocalBusinessSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <SectionTransition direction="dark-to-light" />
      <ServicesPreview />
      <SectionTransition direction="light-to-dark" />
      <BeforeAfterSection />
      <SectionTransition />
      <div
        aria-hidden="true"
        style={{
          height: '420px',
          backgroundImage: 'url(/Sectionbg/bg1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <SectionTransition />
      <WhyUs />
      <SectionTransition />
      <WhyDetailing />
      <SectionTransition />
      <FAQSection />
      <SectionTransition />
      <ContactSection />
    </>
  );
}
