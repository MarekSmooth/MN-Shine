import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.2)', padding: '1.25rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Contact row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="tel:+420702852852" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Phone size={14} color="#FFFFFF" strokeWidth={2} />
            +420 702 852 852
          </a>
          <a href="mailto:Info@mnshine.cz" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Mail size={14} color="#FFFFFF" strokeWidth={2} />
            Info@mnshine.cz
          </a>
          <span style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <MapPin size={14} color="#FFFFFF" strokeWidth={2} />
            Hrušovanská 425, Vojkovice 667 01
          </span>
        </div>

        {/* Social + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.facebook.com/profile.php?id=100093812870789" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF' }} aria-label="Facebook">
            <Facebook size={18} strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/mnshine_detailing/" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF' }} aria-label="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>|</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.15rem' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.78rem', margin: 0, whiteSpace: 'nowrap' }}>
              © {new Date().getFullYear()} MN Shine Detailing
            </p>
            <p style={{ color: '#9CA3AF', fontSize: '0.72rem', margin: 0, whiteSpace: 'nowrap' }}>
              Design &amp; vývoj: <a href="https://smooth-development.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Smooth Development</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

