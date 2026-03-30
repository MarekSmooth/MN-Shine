import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.2)', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr 1fr', gap: '3rem', marginBottom: '2.5rem', alignItems: 'stretch' }}>

          {/* Logo — full height */}
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/mnlogo.png"
                alt="MN Shine Detailing logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: '100%', width: 'auto', maxHeight: '120px', objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Tagline — column right of logo */}
          <div style={{ display: 'flex', alignItems: 'center', maxWidth: '220px' }}>
            <p style={{ color: '#9BA5AE', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Prémiové auto detailing studio v Vojkovicích u Brna. Pečujeme o vaše vozidlo s láskou a precizností.
            </p>
          </div>

          {/* Phone + Email */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kontakt</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+420702852852" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={15} color="#FFFFFF" strokeWidth={2} style={{ flexShrink: 0 }} />
                +420 702 852 852
              </a>
              <a href="mailto:Info@mnshine.cz" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} color="#FFFFFF" strokeWidth={2} style={{ flexShrink: 0 }} />
                Info@mnshine.cz
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Adresa</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <MapPin size={15} color="#FFFFFF" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Hrušovanská 425</span>
                <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Vojkovice 667 01</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} MN Shine Detailing. Všechna práva vyhrazena.
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
            Design & vývoj: <a href="https://smooth-development.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 500 }}>Smooth Development</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

