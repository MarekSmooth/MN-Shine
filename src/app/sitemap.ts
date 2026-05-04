import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mnshine.cz';
  return [
    { url: baseUrl, lastModified: new Date('2026-05-04'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/sluzby`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sluzby/detailing-brno`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sluzby/cisteni-interieru-brno`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sluzby/renovace-laku-brno`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sluzby/ochrana-laku-brno`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/galerie`, lastModified: new Date('2026-05-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/o-nas`, lastModified: new Date('2026-01-01'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reference`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date('2026-01-01'), changeFrequency: 'yearly', priority: 0.8 },
  ];
}
