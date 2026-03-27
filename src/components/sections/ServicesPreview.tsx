import { Sparkles, Paintbrush, Shield, Car } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard';

const services = [
  {
    icon: <Sparkles size={32} />,
    title: 'Čištění interiéru',
    description: 'Hloubkové čištění celého interiéru – sedadla, koberce, plasty, strop. Vaše auto bude vonět a vypadat jako nové.',
    href: '/sluzby/cisteni-interieru-brno',
  },
  {
    icon: <Paintbrush size={32} />,
    title: 'Renovace laku',
    description: 'Profesionální strojní leštění a korekce laku. Odstraníme škrábance, víry a oxidaci. Lak bude zářit jako z výroby.',
    href: '/sluzby/renovace-laku-brno',
  },
  {
    icon: <Shield size={32} />,
    title: 'Ochrana laku',
    description: 'Keramické povlaky a ochranné fólie pro dlouhodobou ochranu. Hydrofobní efekt, UV ochrana a snadná údržba na roky.',
    href: '/sluzby/ochrana-laku-brno',
  },
  {
    icon: <Car size={32} />,
    title: 'Detailing Brno',
    description: 'Kompletní péče o vozidlo od A do Z. Ideální pro zákazníky z Brna a okolí, kteří chtějí auto v perfektním stavu.',
    href: '/sluzby/detailing-brno',
  },
];

export function ServicesPreview() {
  return (
    <section style={{ backgroundColor: '#F4F4F4', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', borderTop: '1px solid rgba(0,0,0,0.12)' }}>
        <SectionHeader
          title="Naše služby"
          subtitle="Kompletní péče o vaše vozidlo pod jednou střechou. Od čištění interiéru po keramickou ochranu."
          light
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '0 3rem',
        }}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} light />
          ))}
        </div>
      </div>
    </section>
  );
}
