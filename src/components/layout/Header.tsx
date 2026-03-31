'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceCategories = [
  { href: '/sluzby#cisteni-exterieru', label: 'Čištění exteriéru' },
  { href: '/sluzby/ochrana-laku-brno', label: 'Ochrana laku' },
  { href: '/sluzby/cisteni-interieru-brno', label: 'Čištění interiéru' },
  { href: '/sluzby/renovace-laku-brno', label: 'Renovace laku' },
  { href: '/sluzby#renovace-svetel', label: 'Renovace světel' },
  { href: '/sluzby#renovace-kuze', label: 'Renovace kůže' },
  { href: '/sluzby#oprava-skrabancu', label: 'Oprava škrábanců' },
];

const leftLinks = [
  { href: '/', label: 'Domů' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/galerie', label: 'Galerie' },
];

const rightLinks = [
  { href: '/o-nas', label: 'O nás' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

const navLinkStyle = {
  color: '#CCCCCC',
  textDecoration: 'none',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  transition: 'color 0.2s',
  whiteSpace: 'nowrap' as const,
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        fontFamily: 'var(--font-inter, sans-serif)',
      }}
    >
      {/* Diagonal background — separate from content so dropdowns are never clipped */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundColor: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 44px), 0 100%)',
        filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.07))',
      }} />
      {/* Desktop */}
      <div
        className="hidden md:grid nav-desktop-inner"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'stretch',
        }}
      >
        {/* Left nav */}
        <nav aria-label="Levá navigace" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a
            href="tel:+420702852852"
            className="nav-cta"
            style={{ color: '#CCCCCC', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, transition: 'color 0.2s', whiteSpace: 'nowrap' as const, borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.25)'; }}
          >
            +420 702 852 852
          </a>
          {leftLinks.map(link =>
            link.href === '/sluzby' ? (
              <div
                key={link.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/sluzby"
                  className="nav-link"
                  style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}
                >
                  Služby
                  <ChevronDown
                    size={13}
                    style={{
                      transition: 'transform 0.2s',
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                    }}
                  />
                </Link>
                {servicesOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '10px',
                      zIndex: 100,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#111111',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '6px',
                        minWidth: '230px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                        overflow: 'hidden',
                      }}
                    >
                      {serviceCategories.map((cat, idx) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          style={{
                            display: 'block',
                            padding: '0.75rem 1.25rem',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase' as const,
                            borderBottom: idx < serviceCategories.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            transition: 'background 0.15s, color 0.15s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                            e.currentTarget.style.color = '#FFFFFF';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#FFFFFF';
                          }}
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Logo center */}
        <Link href="/" className="nav-logo-wrap">
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={350}
            height={109}
            className="nav-logo"
            style={{ width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* Right nav + CTA */}
        <nav aria-label="Pravá navigace" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-start' }}>
          {rightLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={navLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="nav-cta"
            style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.2s', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(255,255,255,0.55)', paddingBottom: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,1)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.55)'; }}
          >
            Objednat termín
          </Link>
        </nav>
      </div>

      {/* Mobile: logo centered + hamburger */}
      <div
        className="flex md:hidden"
        style={{ alignItems: 'center', justifyContent: 'center', height: '100px', position: 'relative', zIndex: 1, padding: '0 1.5rem' }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={350}
            height={109}
            style={{ height: '52px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>
        <button
          style={{ position: 'absolute', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF', padding: '0.5rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link
              href="/"
              style={{ color: '#CCCCCC', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}
            >
              Domů
            </Link>
            <div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: '#CCCCCC',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Služby
                <ChevronDown
                  size={13}
                  style={{
                    transition: 'transform 0.2s',
                    transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {mobileServicesOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.6rem' }}>
                  <Link
                    href="/sluzby"
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  >
                    Všechny služby
                  </Link>
                  {serviceCategories.map(cat => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      style={{ color: '#999999', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/galerie"
              style={{ color: '#CCCCCC', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}
            >
              Galerie
            </Link>
            {rightLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#CCCCCC', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+420702852852"
              style={{ padding: '0.75rem 1.25rem', backgroundColor: '#FFFFFF', color: '#000000', textDecoration: 'none', fontSize: '0.8rem', textAlign: 'center' as const, marginTop: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}
              onClick={() => setMenuOpen(false)}
            >
              +420 702 852 852
            </a>
            <Link
              href="/kontakt"
              style={{ padding: '0.75rem 1.25rem', backgroundColor: '#FFFFFF', color: '#000000', textDecoration: 'none', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}
            >
              Objednat termín
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
