// Výhodné balíčky – jediný zdroj dat pro plovoucí cedulku i stránku /vyhodne-balicky.
// Texty a ceny doslova podle podkladu majitele (akcni-balicky.pdf). Nic nedoplňovat.
// Odchylka odsouhlasená s majitelem: místo konkrétní značky keramiky obecně „keramický povlak“.

export type PackageSlug = 'vosk' | 'keramika' | 'oziveni';

export interface PackagePrices {
  small: number;   // Malé vozidlo
  medium: number;  // Střední vozidlo
  large: number;   // Velké vozidlo / SUV
}

export interface PackageAddon {
  name: string;
  protection: string;
  price: number;   // příplatek v Kč
}

export interface ServicePackage {
  slug: PackageSlug;
  name: string;
  shortName: string;
  priceFrom: number;
  prices: PackagePrices;
  /** Výdrž ochrany; null = podklad výdrž neuvádí. */
  protection: string | null;
  duration: string;
  /** První věta popisu – pro cedulku a karty. */
  summary: string;
  /** Celý popis z podkladu. */
  description: string;
  includes: string[];
  /** Věta „Výsledek: …“; null = podklad ji neuvádí. */
  result: string | null;
  notes: string[];
  addons?: PackageAddon[];
  addonsNote?: string;
}

export const packages: ServicePackage[] = [
  {
    slug: 'vosk',
    name: 'Důkladné mytí, dekontaminace a ochrana tuhým voskem',
    shortName: 'Mytí + tuhý vosk',
    priceFrom: 4499,
    prices: { small: 4499, medium: 4999, large: 5499 },
    protection: 'přibližně 6–12 měsíců',
    duration: 'přibližně 6–7 hodin',
    summary: 'Důkladné vyčištění karoserie a odstranění odolných nečistot s následnou aplikací kvalitního tuhého vosku.',
    description: 'Důkladné vyčištění karoserie a odstranění odolných nečistot s následnou aplikací kvalitního tuhého vosku. Pro zákazníky, kteří chtějí čistý, lesklejší a chráněný lak bez strojního leštění.',
    includes: [
      'Důkladné předmytí, čištění kol z vnější strany a pneumatik, šetrné ruční mytí.',
      'Chemická dekontaminace laku, důkladný oplach a vysušení.',
      'Příprava laku s důkladným odmaštěním.',
      'Aplikace kvalitního tuhého vosku a závěrečná kontrola.',
    ],
    result: 'Čistý, hladší a lesklejší lak s hydrofobní ochranou usnadňující údržbu.',
    notes: [],
  },
  {
    slug: 'keramika',
    name: 'Důkladné mytí, dekontaminace a keramická ochrana laku',
    shortName: 'Mytí + keramická ochrana',
    priceFrom: 5499,
    prices: { small: 5499, medium: 5999, large: 6499 },
    protection: 'až 12 měsíců',
    duration: 'zpravidla přes noc',
    summary: 'Důkladné vyčištění karoserie a odstranění odolných nečistot s následnou aplikací keramické ochrany.',
    description: 'Kompletní příprava karoserie a aplikace keramického povlaku. Pomáhá odpuzovat vodu, zvýrazňuje lesk a usnadňuje pravidelné mytí. Bez předchozího strojního leštění.',
    includes: [
      'Důkladné předmytí, čištění kol z vnější strany a pneumatik, šetrné ruční mytí.',
      'Chemická dekontaminace laku, důkladný oplach a vysušení.',
      'Příprava laku s důkladným odmaštěním.',
      'Aplikace keramického povlaku, vytvrzení v kontrolovaných podmínkách a závěrečná kontrola.',
    ],
    result: null,
    notes: [
      'Vozidlo zpravidla zůstává v dílně přes noc a je připraveno k převzetí následující den.',
      'Ochrana se aplikuje na stávající stav laku; služba nezahrnuje leštění ani korekci defektů.',
    ],
  },
  {
    slug: 'oziveni',
    name: 'Oživení a rozjasnění laku',
    shortName: 'Oživení laku',
    priceFrom: 4999,
    prices: { small: 4999, medium: 5999, large: 6999 },
    protection: null,
    duration: 'přibližně 8–10 hodin podle velikosti a stavu vozidla',
    summary: 'Rychlejší strojní oživení vzhledu laku se zaměřením na zvýraznění lesku a hloubky barvy.',
    description: 'Rychlejší strojní oživení vzhledu laku se zaměřením na zvýraznění lesku a hloubky barvy. Po důkladném vyčištění se provádí jeden základní lešticí cyklus na jednotlivých částech vozu bez opakovaných korekčních průchodů a bez cíleného odstraňování škrábanců.',
    includes: [
      'Důkladné předmytí, čištění kol z vnější strany a šetrné ruční mytí.',
      'Potřebná chemická dekontaminace, vysušení a příprava laku.',
      'Základní strojní rozjasnění celého vozu jedním lešticím cyklem.',
      'Odstranění zbytků lešticích přípravků, základní krátkodobá ochrana a závěrečná kontrola.',
    ],
    result: 'Oživení barvy a zvýšení lesku.',
    notes: [],
    addons: [
      { name: 'Tuhý vosk', protection: 'přibližně 6–12 měsíců', price: 1499 },
      { name: 'Keramický povlak', protection: 'až 12 měsíců', price: 2499 },
    ],
    addonsNote: 'Příplatky platí při společné realizaci s rozjasněním; nejde o ceny samostatných služeb. U keramiky je nutné počítat s dobou vytvrzení a zpravidla přenocováním vozidla.',
  },
];

export const packagesIntro =
  'Profesionální péče o lak za zvýhodněné ceny. Dopřejte svému vozu důkladné vyčištění, dlouhodobou ochranu nebo oživení vzhledu laku.';

export const oziveniVsRenovace = {
  title: 'Rozdíl oproti jednokrokové renovaci laku',
  text: 'Oživení není jednokroková renovace. Jeho cílem není odstraňování škrábanců. Jednokroková renovace zahrnuje intenzivnější korekční leštění zaměřené na odstranění škrábanců a dalších defektů v rozsahu možností laku.',
};

export const vehicleCategories = [
  { key: 'small', label: 'Malé vozidlo', examples: 'Citigo, Fabia hatchback, Polo, Yaris' },
  { key: 'medium', label: 'Střední vozidlo', examples: 'Golf, Octavia, Leon, BMW řady 3' },
  { key: 'large', label: 'Velké vozidlo / SUV', examples: 'Superb, Kodiaq, Passat, BMW X5' },
] as const;

export const vehicleCategoriesNote =
  'Uvedené modely jsou příklady. Konečné zařazení závisí na konkrétní karoserii a velikosti vozidla.';

export const packageConditions = [
  'Ceny platí pro vozidla v běžném stavu znečištění a kontaminace.',
  'U nadměrně znečištěných nebo silně kontaminovaných vozidel může být cena individuálně upravena.',
  'Jakékoli navýšení ceny bude vždy předem konzultováno a odsouhlaseno zákazníkem.',
  'Výdrž ochrany je orientační a závisí na používání vozidla, údržbě a vnějších podmínkách.',
  'Rozsah a konečná cena služby budou potvrzeny před zahájením práce.',
];

export const packagesCta = {
  title: 'Máte zájem o některou ze služeb?',
  text: 'Rádi vám poradíme s výběrem vhodné péče a připravíme nezávaznou nabídku podle velikosti a stavu vozidla.',
  button: 'Nezávazně poptat termín',
};

export const PACKAGES_PATH = '/vyhodne-balicky';

/** 4499 -> "4 499 Kč" */
export function formatCzk(n: number): string {
  return n.toLocaleString('cs-CZ').replace(/\s/g, ' ') + ' Kč';
}

export function getPackage(slug: string | null | undefined): ServicePackage | undefined {
  return packages.find(p => p.slug === slug);
}

/** Odkaz na kontaktní formulář s předvyplněným balíčkem. */
export function orderHref(slug: PackageSlug): string {
  return `/kontakt?balicek=${slug}#kontakt`;
}

// ---- Plovoucí cedulka „Výhodné balíčky“ (žlutý ribbon s %, odsouhlaseno s majitelem) ----
export interface BadgeImage {
  /** WebP v /public/balicky/, max ~60 kB */
  src: string;
  width: number;
  height: number;
}

export const badgeConfig: { image: BadgeImage | null } = {
  // Vlastní grafika místo SVG/CSS, např. { src: '/balicky/cedulka.webp', width: 220, height: 64 }
  image: null,
};

/** Stránky, kde se cedulka nezobrazuje. */
export const BADGE_HIDDEN_PATHS = [PACKAGES_PATH];
