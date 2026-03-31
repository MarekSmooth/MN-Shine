export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  price?: string;
}

export const services: Service[] = [
  {
    id: 'cisteni-exterieru',
    title: 'Čištění exteriéru',
    slug: 'cisteni-exterieru-brno',
    shortDescription: 'Profesionální ruční mytí, dekontaminace a ošetření laku. Základ pro každou další péči o vozidlo.',
    fullDescription: 'Profesionální čištění exteriéru zahrnuje ruční mytí, odmaštění, odstranění polétavé rzi (clay bar) a dekontaminaci. Výsledkem je čistý a ošetřený lak připravený na další péči.',
    features: ['Ruční předmytí vysokým tlakem', 'Šamponování karoserie', 'Dekontaminace laku (clay bar)', 'Čištění kol a podběhů', 'Ošetření pneumatik', 'Finální oplach a sušení'],
    price: 'od 800 Kč',
  },
  {
    id: 'ochrana-laku',
    title: 'Ochrana laku',
    slug: 'ochrana-laku-brno',
    shortDescription: 'Keramické povlaky a ochranné fólie pro dlouhodobou ochranu laku vašeho vozidla.',
    fullDescription: 'Keramická ochrana laku poskytuje dlouhodobou ochranu před povětrnostními vlivy, UV zářením, chemickými látkami a lehkými škrábanci. Aplikujeme prémiové keramické povlaky s garancí několika let.',
    features: ['Keramický povlak (2–5 let ochrany)', 'Grafenový povlak', 'Ochranná fólie PPF', 'Hydrofobní efekt', 'UV ochrana', 'Snadná údržba'],
    price: 'od 8 000 Kč',
  },
  {
    id: 'cisteni-interieru',
    title: 'Čištění interiéru',
    slug: 'cisteni-interieru-brno',
    shortDescription: 'Profesionální hloubkové čištění celého interiéru vozidla – sedadla, koberce, plasty, strop.',
    fullDescription: 'Komplexní čištění interiéru zahrnuje odstranění nečistot, skvrn, pachů a bakterií z každého koutu vašeho vozidla. Používáme profesionální parní čistič a prémiové přípravky bezpečné pro všechny materiály.',
    features: ['Čištění sedadel (látka i kůže)', 'Hloubkové čištění koberců', 'Čištění plastů a palubní desky', 'Čištění stropu', 'Odstranění pachů', 'Dezinfekce'],
    price: 'od 2 500 Kč',
  },
  {
    id: 'renovace-laku',
    title: 'Renovace laku',
    slug: 'renovace-laku-brno',
    shortDescription: 'Oprava, leštění a renovace laku vozidla. Odstraníme škrábance, víry a jiné povrchové defekty.',
    fullDescription: 'Renovace laku zahrnuje strojní leštění, které odstraní povrchové škrábance, víry, oxidaci a jiné defekty. Výsledkem je lak s dokonalým leskem jako z výroby.',
    features: ['Korekce laku (1-step/2-step)', 'Strojní leštění', 'Odstranění škrábanců', 'Finální polish', 'Ochranný vosk nebo sealant'],
    price: 'od 4 500 Kč',
  },
  {
    id: 'renovace-svetel',
    title: 'Renovace světel',
    slug: 'renovace-svetel-brno',
    shortDescription: 'Obnova zakalených světlometů. Průhlednost, čistota a zlepšení osvětlení vozidla.',
    fullDescription: 'Renovace světlometů odstraní zakalenost, žloutnutí a oxidaci plastového krytu. Světla budou průhledná a jasná, zlepší se bezpečnost jízdy a vzhled vozidla. Ošetření je zakončeno ochrannou vrstvou.',
    features: ['Odstraní zakalenost a žloutnutí', 'Strojní leštění světlometů', 'Ochranný povlak na světla', 'Zlepšení viditelnosti', 'Prodloužení životnosti světel'],
    price: 'od 800 Kč',
  },
  {
    id: 'renovace-kuze',
    title: 'Renovace kůže',
    slug: 'renovace-kuze-brno',
    shortDescription: 'Obnova a ošetření kožených sedadel. Obnovíme pružnost, lesk a barvu kůže.',
    fullDescription: 'Renovace kožených sedadel zahrnuje hloubkové čištění, ošetření kondicionérem, opravu drobných trhlin a případné přebarvení. Výsledkem je kůže jako nová s obnovenou pružností a leskem.',
    features: ['Hloubkové čištění kůže', 'Ošetření kondicionérem', 'Oprava prasklin a škrábanců', 'Přebarvení (dle potřeby)', 'Ochranný vosk na kůži'],
    price: 'od 2 000 Kč',
  },
  {
    id: 'oprava-skrabancu',
    title: 'Oprava škrábanců',
    slug: 'oprava-skrabancu-brno',
    shortDescription: 'Precizní oprava povrchových i hlubších škrábanců laku bez nutnosti lakovny.',
    fullDescription: 'Oprava škrábanců pomocí minimálně invazivních metod – od leštění povrchových rýh až po lokální přetmelení a tzv. touch-up opravy. Vše provedeno přímo u vás bez nutnosti rozsáhlé lakýrnické práce.',
    features: ['Oprava povrchových škrábanců', 'Lokální touch-up opravy', 'Příprava povrchu', 'Barevné sjednocení', 'Výsledek bez zbytečné lakovny'],
    price: 'od 500 Kč',
  },
];
