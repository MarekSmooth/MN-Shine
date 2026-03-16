export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MN Shine Detailing',
    description: 'Profesionální auto detailing studio v Vojkovicích u Brna. Čištění interiéru, renovace laku, keramická ochrana.',
    url: 'https://mnshine.cz',
    telephone: '+420777123456',
    email: 'info@mnshine.cz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vojkovice',
      addressRegion: 'Jihomoravský kraj',
      addressCountry: 'CZ',
    },
    areaServed: ['Brno', 'Brno-venkov', 'Jihomoravský kraj'],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: [],
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'MN Shine Detailing',
      url: 'https://mnshine.cz',
    },
    areaServed: 'Brno',
    url,
  };
}
