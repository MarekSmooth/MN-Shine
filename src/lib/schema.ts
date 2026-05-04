export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'AutoBodyShop', 'LocalBusiness'],
    name: 'MN Shine Detailing',
    description: 'Profesionální auto detailing studio ve Vojkovicích u Brna. Čištění interiéru, renovace laku, keramická ochrana.',
    url: 'https://mnshine.cz',
    telephone: '+420702852852',
    email: 'info@mnshine.cz',
    image: 'https://mnshine.cz/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vojkovice',
      addressRegion: 'Jihomoravský kraj',
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.083,
      longitude: 16.617,
    },
    areaServed: [
      'Brno', 'Brno-venkov', 'Jihomoravský kraj',
      'Vojkovice', 'Šlapanice', 'Modřice', 'Rajhrad', 'Pohořelice',
      'Husovice', 'Žabovřesky', 'Bystrc', 'Líšeň',
    ],
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+420702852852',
      contactType: 'customer service',
      areaServed: 'CZ',
      availableLanguage: 'Czech',
    },
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
      '@type': 'AutoRepair',
      name: 'MN Shine Detailing',
      url: 'https://mnshine.cz',
    },
    areaServed: 'Brno',
    url,
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
