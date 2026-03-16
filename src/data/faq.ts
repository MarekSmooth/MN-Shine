export interface FAQEntry {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQEntry[] = [
  {
    category: 'Obecné',
    question: 'Co je to auto detailing?',
    answer: 'Auto detailing je komplexní péče o vozidlo, která zahrnuje hloubkové čištění, opravu a ochranu interiéru i exteriéru. Na rozdíl od běžného mytí jde o precizní práci, jejímž cílem je obnovit nebo zachovat vozidlo v perfektním stavu.',
  },
  {
    category: 'Obecné',
    question: 'Kde se studio MN Shine nachází?',
    answer: 'Naše studio se nachází ve Vojkovicích u Brna, v Jihomoravském kraji. Obsluhujeme zákazníky z celého Brna a širokého okolí.',
  },
  {
    category: 'Obecné',
    question: 'Jak dlouho trvá detailing?',
    answer: 'Délka závisí na typu zvolené služby. Čištění interiéru trvá obvykle 3–5 hodin, renovace laku 4–8 hodin, keramická ochrana i déle. Přesný čas vám sdělíme při objednání.',
  },
  {
    category: 'Služby',
    question: 'Jaký je rozdíl mezi leštěním a keramickou ochranou?',
    answer: 'Leštění (korekce laku) odstraňuje povrchové defekty jako škrábance a víry a vrací laku lesk. Keramická ochrana je vrstva nanášená na lak po leštění, která ho chrání před znečištěním, UV zářením a drobnými poškrábaními po dobu let.',
  },
  {
    category: 'Služby',
    question: 'Jak pečovat o vůz po keramické ochraně?',
    answer: 'Po aplikaci keramické ochrany doporučujeme pravidelné ruční mytí šampónem určeným pro keramiku, vyhýbat se automatickým mycím linkám s kartáči a jednou za rok provést boost sealantem pro udržení hydrofobního efektu.',
  },
  {
    category: 'Objednávka',
    question: 'Jak mohu objednat službu?',
    answer: 'Objednat se můžete telefonicky na čísle +420 777 123 456, e-mailem na info@mnshine.cz nebo přes kontaktní formulář na našem webu. Rádi s vámi probereme vaše potřeby a doporučíme nejvhodnější řešení.',
  },
  {
    category: 'Objednávka',
    question: 'Přijedete přímo k nám, nebo musíme přivézt auto?',
    answer: 'Vozidlo přivezete do našeho studia ve Vojkovicích u Brna. V případě zájmu o mobilní detailing pro firemní flotily nás kontaktujte pro individuální domluvu.',
  },
  {
    category: 'Ceny',
    question: 'Jaké jsou přibližné ceny detailingu?',
    answer: 'Ceny se odvíjejí od velikosti vozidla, jeho stavu a zvolené služby. Čištění interiéru začíná od 2 500 Kč, renovace laku od 4 500 Kč, keramická ochrana od 8 000 Kč. Přesnou kalkulaci vám připravíme po prohlídce vozidla.',
  },
];
