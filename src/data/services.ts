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
    id: 'ochrana-laku',
    title: 'Ochrana laku',
    slug: 'ochrana-laku-brno',
    shortDescription: 'Keramické povlaky a ochranné fólie pro dlouhodobou ochranu laku vašeho vozidla.',
    fullDescription: 'Keramická ochrana laku poskytuje dlouhodobou ochranu před povětrnostními vlivy, UV zářením, chemickými látkami a lehkými škrábanci. Aplikujeme prémiové keramické povlaky s garancí několika let.',
    features: ['Keramický povlak (2–5 let ochrany)', 'Grafenový povlak', 'Ochranná fólie PPF', 'Hydrofobní efekt', 'UV ochrana', 'Snadná údržba'],
    price: 'od 8 000 Kč',
  },
  {
    id: 'detailing-brno',
    title: 'Detailing Brno',
    slug: 'detailing-brno',
    shortDescription: 'Kompletní péče o vozidlo – od exteriéru po interiér. Prémiový detailing pro Brno a okolí.',
    fullDescription: 'Kompletní detailing zahrnuje profesionální péči o celé vozidlo – mytí, dekontaminaci, leštění laku, čištění interiéru a finální ochranu. Výsledkem je vozidlo v showroom kondici.',
    features: ['Profesionální ruční mytí', 'Dekontaminace laku (clay bar)', 'Korekce laku', 'Čištění interiéru', 'Ošetření plastů a pneumatik', 'Finální ochrana'],
    price: 'od 6 000 Kč',
  },
];
