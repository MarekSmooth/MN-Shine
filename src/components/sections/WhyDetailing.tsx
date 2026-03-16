import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrendingUp, Heart, Clock, Layers } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Ochrana hodnoty vozu',
    description: 'Pravidelný detailing chrání lak a interiér před opotřebením. Dobře udržované vozidlo si zachovává vyšší tržní hodnotu při prodeji.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Zlepšení vzhledu',
    description: 'Vaše auto bude vypadat jako nové. Lesk laku, čistý interiér a ošetřené plasty dají vozu impozantní výsledek.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Dlouhodobá péče',
    description: 'Správná ochrana laku a interiéru výrazně prodlužuje životnost povrchů. Investice do detailingu se mnohonásobně vrátí.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Komfort interiéru',
    description: 'Čistý, vonící interiér bez alergenů a bakterií zajišťuje příjemnější a zdravější prostředí pro cestující.',
  },
];

export function WhyDetailing() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Proč detailing dává smysl?"
          subtitle="Detailing není luxus – je to investice do vašeho vozidla, která se vyplatí."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}>
          {benefits.map((benefit) => (
            <div key={benefit.title} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '2rem',
              borderLeft: '2px solid #C8A97E',
              backgroundColor: '#111111',
              borderRadius: '0 8px 8px 0',
            }}>
              <div style={{ color: '#C8A97E' }}>{benefit.icon}</div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'var(--font-playfair, serif)', margin: 0 }}>{benefit.title}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
