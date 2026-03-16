import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Naše služby',
  description: 'Přehled všech služeb MN Shine Detailing – čištění interiéru, renovace laku, keramická ochrana, detailing Brno.',
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingTop: '120px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          title="Naše služby"
          subtitle="Profesionální péče o vaše vozidlo. Vyberte si ze spektra prémiových detailing služeb."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service) => (
            <article key={service.id} style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(200,169,126,0.15)',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>{service.title}</h2>
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, flex: 1 }}>{service.fullDescription}</p>
              {service.price && (
                <p style={{ color: '#C8A97E', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{service.price}</p>
              )}
              <ul style={{ color: '#9CA3AF', paddingLeft: '1.25rem', lineHeight: 2, margin: 0 }}>
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link href={`/sluzby/${service.slug}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                color: '#C8A97E', textDecoration: 'none', fontWeight: 500,
              }}>
                Zjistit více <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/kontakt" style={{
            backgroundColor: '#C8A97E', color: '#0a0a0a', fontWeight: 700,
            padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none',
          }}>
            Nezávazná poptávka
          </Link>
        </div>
      </div>
    </div>
  );
}
