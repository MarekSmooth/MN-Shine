import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(200,169,126,0.2)', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <Image
                src="/mnlogo.png"
                alt="MN Shine Detailing logo"
                width={140}
                height={44}
                style={{ height: '44px', width: 'auto' }}
              />
            </Link>
            <p style={{ color: '#A09890', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '260px' }}>
              Prémiové auto detailing studio v Vojkovicích u Brna. Pečujeme o vaše vozidlo s láskou a precizností.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigace</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'Domů' },
                { href: '/sluzby', label: 'Služby' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/o-nas', label: 'O nás' },
                { href: '/reference', label: 'Reference' },
                { href: '/faq', label: 'FAQ' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="link-gold-hover">{link.label}</Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Služby</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/sluzby/cisteni-interieru-brno', label: 'Čištění interiéru' },
                { href: '/sluzby/renovace-laku-brno', label: 'Renovace laku' },
                { href: '/sluzby/ochrana-laku-brno', label: 'Ochrana laku' },
                { href: '/sluzby/detailing-brno', label: 'Detailing Brno' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="link-gold-hover">{link.label}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kontakt</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+420702852852" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>+420 702 852 852</a>
              <a href="mailto:Info@mnshine.cz" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Info@mnshine.cz</a>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Hrušovanská 425</p>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Vojkovice 667 01</p>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Po-Pa: 8:00-17:00</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} MN Shine Detailing. Všechna práva vyhrazena.
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
            Hrušovanská 425, Vojkovice 667 01
          </p>
        </div>
      </div>
    </footer>
  );
}
