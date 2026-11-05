// Události do Google tagu (gtag.js, Google Ads AW-16647918075).
// Odesílá se jen se souhlasem s marketingovými cookies (cookie lišta, localStorage).
const CONSENT_KEY = 'mn-shine-cookie-consent';

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  try {
    const prefs = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? 'null');
    if (!prefs?.marketing) return;
  } catch {
    return;
  }
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.('event', name, { ...params, transport_type: 'beacon' });
}
