import { Hero } from '@/components/sections/Hero';
import { WhyUs } from '@/components/sections/WhyUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { WhyDetailing } from '@/components/sections/WhyDetailing';
import { Reviews } from '@/components/sections/Reviews';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getLocalBusinessSchema } from '@/lib/schema';

// Diagonal skew divider between sections — pure CSS, no SVG
// dir="ltr": cut goes bottom-left → top-right (/)
// dir="rtl": cut goes top-left → bottom-right (\)
function Divider({ to, dir = 'ltr' }: { from?: string; to: string; dir?: 'ltr' | 'rtl' }) {
  // Outer is transparent — the previous section (incl. photo) shows through above the cut line.
  // The 'to'-colored inner div rises from the bottom at an angle, revealing the next section's color.
  // ltr (/): to-color fills right → left; rtl (\): to-color fills left → right.
  return (
    <div aria-hidden="true" style={{ position: 'relative', height: '80px', marginTop: '-80px', zIndex: 5, background: 'transparent', overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: to,
        transform: dir === 'ltr' ? 'skewY(-2deg)' : 'skewY(2deg)',
        transformOrigin: dir === 'ltr' ? '100% 100%' : '0% 100%',
        borderTop: '1.5px solid rgba(255,255,255,0.20)',
      }} />
    </div>
  );
}

export default function HomePage() {
  const schema = getLocalBusinessSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <Divider from="#0a0a0a" to="#111111" dir="ltr" />
      <WhyUs />
      <Divider from="#111111" to="#0a0a0a" dir="rtl" />
      <ServicesPreview />
      <Divider from="#0a0a0a" to="#111111" dir="ltr" />
      <BeforeAfterSection />
      <Divider from="#111111" to="#0a0a0a" dir="rtl" />
      <WhyDetailing />
      <Divider from="#0a0a0a" to="#111111" dir="ltr" />
      <Reviews />
      <Divider from="#111111" to="#1a1a1a" dir="rtl" />
      <FAQSection />
      <Divider from="#1a1a1a" to="#0a0a0a" dir="ltr" />
      <ContactSection />
    </>
  );
}
