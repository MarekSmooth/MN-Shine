import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte MN Shine Detailing. Objednejte se na detailing Brno, čištění interiéru nebo ochrana laku. Tel: +420 702 852 852',
  alternates: {
    canonical: 'https://mnshine.cz/kontakt',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/kontakt',
    title: 'Kontakt | MN Shine Detailing',
    description: 'Kontaktujte MN Shine Detailing. Objednejte se na detailing Brno, čištění interiéru nebo ochrana laku.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MN Shine Detailing – Kontakt' }],
  },
};

export default function KontaktPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <ContactSection />
    </div>
  );
}
