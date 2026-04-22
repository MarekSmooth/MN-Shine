'use client';

import { Shield, Star, Wrench, Eye, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    icon: <Star size={28} />,
    title: 'Individuální přístup',
    description: 'Ke každému vozidlu přistupujeme individuálně. Provedeme důkladnou prohlídku a navrhneme optimální řešení pro váš vůz.',
  },
  {
    icon: <Award size={28} />,
    title: 'Prémiové produkty',
    description: 'Používáme výhradně profesionální přípravky od renomovaných značek. Žádné kompromisy v kvalitě materiálů.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Moderní vybavení',
    description: 'Naše studio je vybaveno profesionálními nástroji a přístroji pro dosažení nejlepších výsledků.',
  },
  {
    icon: <Eye size={28} />,
    title: 'Důraz na detail',
    description: 'Každý detail je pro nás důležitý. Věnujeme pozornost místům, která jiní přehlíží.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Kvalita nad kvantitu',
    description: 'Raději uděláme méně zakázek, ale každou na 100 %. Vaše spokojenost a výsledek jsou naší prioritou.',
  },
];

export function WhyUs() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Proč si vybrat MN Shine?"
          subtitle="Jsme více než jen autoumývárna. Jsme partneři, kteří se starají o vaše vozidlo jako o vlastní."
        />

        <div className="why-us-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0 3rem',
        }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '2rem 0', position: 'relative', transition: 'border-color 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.45)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}
            >
              <div style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-cinzel, serif)' }}>{feature.title}</h3>
              <p style={{ color: '#9BA5AE', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
            </div>
          ))}

          {/* Stats — fills the 3 remaining columns next to Kvalita nad kvantitu */}
          <div className="why-us-stats" style={{
            gridColumn: 'span 3',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            padding: '2rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '3.5rem',
          }}>
            {[
              { value: '5★', label: 'Hodnocení zákazníků' },
              { value: '100+', label: 'Spokojených zákazníků' },
              { value: '5+', label: 'Let zkušeností' },
            ].map(item => (
              <div key={item.value} style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFFFFF', fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}>{item.value}</div>
                <div style={{ color: '#9BA5AE', fontSize: '0.85rem', marginTop: '0.25rem', letterSpacing: '0.05em' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
