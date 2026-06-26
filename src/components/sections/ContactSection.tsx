'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  message: string;
}

// Klíč z https://web3forms.com – formulář s ním odešle poptávku e-mailem na info@mnshine.cz.
const WEB3FORMS_ACCESS_KEY = '649214cd-a20c-4d16-a1ca-ccafe6cc5c09';

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', vehicle: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Vyplňte jméno';
    if (!form.phone.trim()) newErrors.phone = 'Vyplňte telefon';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Vyplňte platný e-mail';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Nová poptávka z webu MN Shine',
          from_name: 'MN Shine Detailing – web',
          name: form.name,
          phone: form.phone,
          email: form.email,
          vehicle: form.vehicle,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '0',
    padding: '0.75rem 1rem',
    color: '#FFFFFF',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="kontakt" style={{ backgroundColor: '#0a0a0a', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Kontaktujte nás"
          subtitle="Máte zájem o naše služby? Napište nám nebo zavolejte. Rádi vám poradíme."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Kontaktní informace</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { icon: <Phone size={18} />, label: 'Telefon', value: '+420 702 852 852', href: 'tel:+420702852852' },
                { icon: <Mail size={18} />, label: 'E-mail', value: 'info@mnshine.cz', href: 'mailto:info@mnshine.cz' },
                { icon: <MapPin size={18} />, label: 'Adresa', value: 'Hrušovanská 425, Vojkovice 667 01', href: undefined },
                { icon: <Clock size={18} />, label: 'Provozní doba', value: 'Po-Pa: 8:00–17:00', href: undefined, note: 'Vzhledem k mobilním výjezdům je nutné osobní návštěvu na provozovně domluvit předem po telefonu.' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#FFFFFF', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ color: '#666666', fontSize: '0.8rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>{item.value}</a>
                    ) : (
                      <p style={{ color: '#CCCCCC', margin: 0, fontSize: '0.95rem' }}>{item.value}</p>
                    )}
                    {item.note && (
                      <p style={{ color: '#666666', fontSize: '0.75rem', margin: '0.35rem 0 0', lineHeight: 1.4 }}>{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://www.facebook.com/profile.php?id=100093812870789" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/mnshine_detailing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                <Instagram size={22} strokeWidth={1.5} />
              </a>
            </div>

            {/* Map */}
            <div style={{
              marginTop: '1.25rem',
              height: '220px',
              backgroundColor: '#E8E8E8',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '0',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.0!2d16.6042113!3d49.0494319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712c701237f7dcd%3A0xe58689b8ae61987e!2sMNshine%20Detailing%20-%20%C4%8Di%C5%A1t%C4%9Bn%C3%AD%20interi%C3%A9ru%2Crenovace%20laku%2Copravy%20k%C5%AF%C5%BEe!5e0!3m2!1scs!2scz!4v1711267890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa MN Shine Detailing - Hrušovanská 425, Vojkovice 667 01"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Poptávkový formulář</h3>
            {submitted ? (
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '0',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Zpráva odeslána! ✓</p>
                <p style={{ color: '#9CA3AF', margin: 0 }}>Děkujeme za váš zájem. Ozývíme se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div className="form-grid-2col">
                  <div>
                    <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Jméno a příjmení *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'rgba(0,0,0,0.15)' }}
                      placeholder="Jan Novák"
                    />
                    {errors.name && <p style={{ color: '#ef4444', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Telefon *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ ...inputStyle, borderColor: errors.phone ? '#ef4444' : 'rgba(0,0,0,0.15)' }}
                      placeholder="např. +420 777 888 999"
                    />
                    {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>E-mail *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'rgba(0,0,0,0.15)' }}
                    placeholder="jan@example.cz"
                  />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>{errors.email}</p>}
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Typ vozidla</label>
                  <input
                    type="text"
                    value={form.vehicle}
                    onChange={e => setForm({ ...form, vehicle: e.target.value })}
                    style={inputStyle}
                    placeholder="např. BMW 3 Series 2020"
                  />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Zájem o službu</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle }}
                  >
                    <option value="">Vyberte službu</option>
                    <option value="cisteni-interieru">Čištění interiéru</option>
                    <option value="cisteni-exterieru">Čištění exteriéru</option>
                    <option value="renovace-laku">Renovace laku</option>
                    <option value="ochrana-laku">Ochrana laku</option>
                    <option value="renovace-svetel">Renovace světel</option>
                    <option value="renovace-kuze">Renovace kůže</option>
                    <option value="oprava-skrabancu">Oprava škrábanců</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Zpráva</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                    placeholder="Popište nám váš požadavek nebo dotaz..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0a0a0a',
                    fontWeight: 700,
                    padding: '0.875rem',
                    border: 'none',
                    borderRadius: '0',
                    fontSize: '1rem',
                    cursor: submitting ? 'default' : 'pointer',
                    opacity: submitting ? 0.6 : 1,
                    width: '100%',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {submitting ? 'Odesílám…' : 'Odeslat poptávku'}
                </button>
                {submitError && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
                    Odeslání se nezdařilo. Zkuste to znovu nebo nám zavolejte na +420 702 852 852.
                  </p>
                )}
                <p style={{ color: '#666666', fontSize: '0.75rem', textAlign: 'center', margin: 0 }}>
                  * Povinné pole. Vaše data zpracujeme pouze za účelem zodpovězení dotazu.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Studio building photo — full width */}
        <div style={{
          position: 'relative',
          marginTop: '3rem',
          height: 'clamp(160px, 22vw, 300px)',
          borderRadius: '0',
          overflow: 'hidden',
        }}>
          <img
            src="/contact/studio-building.webp"
            alt="MN Shine Detailing – studio Vojkovice u Brna"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 30%, rgba(10,10,10,0.85) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.5rem',
            color: '#FFFFFF',
            fontFamily: 'var(--font-inter, sans-serif)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textShadow: '0 1px 6px rgba(0,0,0,0.8)',
          }}>
            Naše studio — Vojkovice u Brna
          </div>
        </div>
      </div>
    </section>
  );
}
