'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', vehicle: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Vyplňte jméno';
    if (!form.phone.trim()) newErrors.phone = 'Vyplňte telefon';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Vyplňte platný e-mail';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    color: '#FFFFFF',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="kontakt" style={{ backgroundColor: '#0a0a0a', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeader
          title="Kontaktujte nás"
          subtitle="Máte zájem o naše služby? Napište nám nebo zavolejte. Rádi vám poradíme."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter, sans-serif)', fontSize: '1.1rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Kontaktní informace</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: <Phone size={18} />, label: 'Telefon', value: '+420 702 852 852', href: 'tel:+420702852852' },
                { icon: <Mail size={18} />, label: 'E-mail', value: 'Info@mnshine.cz', href: 'mailto:Info@mnshine.cz' },
                { icon: <MapPin size={18} />, label: 'Adresa', value: 'Hrušovanská 425, Vojkovice 667 01', href: undefined },
                { icon: <Clock size={18} />, label: 'Provozní doba', value: 'Po-Pa: 8:00–17:00', href: undefined },
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
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{
              marginTop: '2rem',
              height: '300px',
              backgroundColor: '#E8E8E8',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '8px',
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
            <h3 style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter, sans-serif)', fontSize: '1.1rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Poptávkový formulář</h3>
            {submitted ? (
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Zpráva odeslána! ✓</p>
                <p style={{ color: '#9CA3AF', margin: 0 }}>Děkujeme za váš zájem. Ozývíme se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                    <option value="renovace-laku">Renovace laku</option>
                    <option value="ochrana-laku">Ochrana laku (keramika)</option>
                    <option value="detailing">Kompletní detailing</option>
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
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0a0a0a',
                    fontWeight: 700,
                    padding: '0.875rem',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    width: '100%',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Odeslat poptávku
                </button>
                <p style={{ color: '#666666', fontSize: '0.75rem', textAlign: 'center', margin: 0 }}>
                  * Povinné pole. Vaše data zpracujeme pouze za účelem zodpovězení dotazu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
