import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte MN Shine Detailing. Objednejte se na detailing Brno, čištění interiéru nebo ochrana laku. Tel: +420 777 123 456',
};

export default function KontaktPage() {
  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <ContactSection />
    </div>
  );
}
