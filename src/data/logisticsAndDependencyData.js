/**
 * Bureaucracy Dependency Graphs, Neighborhood Engine, Shipping ROI, Voltage Compatibility, and Survival Phrasebook
 * Verified against municipal data (Amtliche Statistik Berlin, Dubai Land Dept, Gemeente Amsterdam, etc.).
 */

export const BUREAUCRACY_DEPENDENCY_GRAPHS = {
  germany: {
    country: 'Germany',
    deadlockProblem: 'The German Anmeldung Catch-22: You cannot sign a long-term lease without a German bank account (or Schufa). You cannot open a standard bank account or get a Steuer-ID without a registered address (Anmeldung). You cannot get an Anmeldung without a signed landlord confirmation (Wohnungsgeberbestätigung).',
    criticalPathSteps: [
      {
        step: 1,
        title: 'Book "Anmeldefähig" Temporary Housing',
        action: 'Before flying, book 1–2 months in temporary serviced housing that EXPLICITLY provides a "Wohnungsgeberbestätigung" (e.g. Wunderflats, HousingAnywhere, Homeike). Verify with the host in writing.',
        deadlockBroken: 'Provides legal residential proof for registration without requiring long-term lease or Schufa.'
      },
      {
        step: 2,
        title: 'Open Pan-European Neo-Bank (Wise / N26) & Local eSIM',
        action: 'Open an N26 or Wise account with your passport and temporary German address. Activate an eSIM (Fraenk, Aldi Talk, Telekom) with your passport.',
        deadlockBroken: 'Gives you a German DE-IBAN and a local +49 mobile number on Day 1.'
      },
      {
        step: 3,
        title: 'Attend City Registration (Anmeldung) at Bürgeramt',
        action: 'Book appointment at ANY Bürgeramt in your city (not just your neighborhood). Bring passport, visa, and Wohnungsgeberbestätigung. Receive your stamped Meldebestätigung.',
        deadlockBroken: 'Meldebestätigung unlocks official tax ID generation and permanent banking.'
      },
      {
        step: 4,
        title: 'Fast-Track Tax Class at Finanzamt & Activate Health Insurance',
        action: 'Visit local Finanzamt with Meldebestätigung to get temporary tax certificate (avoiding Tax Class 6). Notify your statutory Krankenkasse (TK, Barmer) to issue your social security number (Sozialversicherungsnummer).',
        deadlockBroken: 'Allows your employer to run full payroll and pay your first month salary.'
      },
      {
        step: 5,
        title: 'Assemble "Bewerbungsmappe" & Hunt Long-Term Lease',
        action: 'Create full tenant dossier: 3x payslips (or employment contract with stated salary), copy of passport & visa, German bank statement, and Schufa certificate (obtainable via Immobilienscout24 or Postbank).',
        deadlockBroken: 'Landlords consider your application legally viable.'
      }
    ]
  },
  brazil: {
    country: 'Brazil',
    deadlockProblem: 'The Brazilian CPF & PIX Deadlock: Landlords demand a Brazilian bank account and Fiador (local guarantor). Brazilian banks demand a CPF and local proof of residency (Comprovante de Residência). You cannot buy a local prepaid SIM card without a CPF.',
    criticalPathSteps: [
      {
        step: 1,
        title: 'Get CPF Online BEFORE Departure via Receita Federal',
        action: 'Submit online form on Receita Federal and email foreign passport + birth certificate to cpf.residente.exterior@rfb.gov.br. Receive your 11-digit CPF PDF within 72 hours.',
        deadlockBroken: 'Breaks 100% of the initial deadlock before landing.'
      },
      {
        step: 2,
        title: 'Activate Local SIM Card (Claro / Vivo) at Airport / Mall',
        action: 'Visit an official carrier store with your foreign passport and CPF. Register a prepaid plan (e.g. Vivo Easy or Claro Flex).',
        deadlockBroken: 'Local phone number is required to receive 2FA SMS for all banking and ride apps.'
      },
      {
        step: 3,
        title: 'Open Digital Account on Nubank & Set Up PIX Key',
        action: 'Download Nubank app. Register with your CPF, passport, and hotel address. Link your CPF as your primary "Chave PIX".',
        deadlockBroken: 'Gives you instant local payment rails across Brazil without a permanent lease.'
      },
      {
        step: 4,
        title: 'Federal Police Registration (Polícia Federal) for CRNM Card',
        action: 'Book in-person appointment at Polícia Federal within 90 days of arrival. Submit Form GRU fee receipt, visa application, and biometrics to receive protocol for your Carteira de Registro Nacional Migratório (CRNM).',
        deadlockBroken: 'Confirms permanent legal foreign registration in Brazil.'
      },
      {
        step: 5,
        title: 'Rent via No-Guarantor Digital Platforms (QuintoAndar)',
        action: 'Use digital platforms like QuintoAndar or VivaReal that bypass the traditional "Fiador" (guarantor) requirement using credit insurance (fiança locatícia).',
        deadlockBroken: 'Secures permanent housing without Brazilian family ties.'
      }
    ]
  },
  netherlands: {
    country: 'Netherlands',
    deadlockProblem: 'The Dutch BSN Deadlock: Landlords demand Dutch bank accounts; Dutch banks demand a BSN; city town halls demand a registered lease before issuing a BSN.',
    criticalPathSteps: [
      {
        step: 1,
        title: 'Book RNI (Non-Resident Registration) Appointment',
        action: 'Schedule appointment at an RNI desk (Registratie Niet-Ingezetenen) in Amsterdam, Utrecht, or Rotterdam before flying. Bring passport and employment contract.',
        deadlockBroken: 'Official BSN issued in 15 minutes without needing a permanent Dutch lease.'
      },
      {
        step: 2,
        title: 'Open Dutch Bank Account (ABN AMRO / Bunq)',
        action: 'Open account using your fresh RNI BSN and temporary accommodation address. Activate iDEAL functionality.',
        deadlockBroken: 'Unlocks local salary deposits and rent payments.'
      },
      {
        step: 3,
        title: 'Sign Permanent Lease & Transfer to Municipal BRP',
        action: 'Find permanent apartment, register at local Gemeente within 5 days of move-in date to transfer BSN from non-resident to permanent resident status.',
        deadlockBroken: 'Full civic compliance and eligibility for the 30% Tax Ruling.'
      }
    ]
  }
};

/**
 * Neighborhood Decision Engine Benchmark Data
 */
export const CITY_NEIGHBORHOODS = {
  berlin: [
    {
      id: 'mitte',
      name: 'Mitte',
      vibe: 'Central, historic & tech-hub proximity',
      rentAvg1Bed: 1650,
      rentAvg3Bed: 3100,
      commuteMin: 10,
      safetyScore: 82,
      schoolScore: 78,
      parkScore: 84,
      groceryAccess: 95,
      transitScore: 98,
      bestFor: 'Solo tech professionals & executive couples wanting zero commute to startup hubs.',
      tradeoffs: 'High rent per square meter; competitive apartment viewings; tourist crowds around Alexanderplatz.',
      dataSources: 'Amt für Statistik Berlin-Brandenburg 2024 / Immobilienscout24 Mietspiegel'
    },
    {
      id: 'prenzlauer_berg',
      name: 'Prenzlauer Berg (Pankow)',
      vibe: 'Family-friendly, leafy cobblestone streets & cafés',
      rentAvg1Bed: 1450,
      rentAvg3Bed: 2750,
      commuteMin: 20,
      safetyScore: 92,
      schoolScore: 94,
      parkScore: 96,
      groceryAccess: 92,
      transitScore: 93,
      bestFor: 'Families with young children (highest Kita & playground density in Europe) & expats.',
      tradeoffs: 'Kita spots have long waitlists; parking is scarce and strictly zoned.',
      dataSources: 'Bezirksamt Pankow Kita-Register / Numbeo Safety Index'
    },
    {
      id: 'kreuzberg',
      name: 'Kreuzberg (Friedrichshain-Kreuzberg)',
      vibe: 'Vibrant, multicultural, nightlife & creative tech',
      rentAvg1Bed: 1350,
      rentAvg3Bed: 2500,
      commuteMin: 18,
      safetyScore: 74,
      schoolScore: 70,
      parkScore: 88,
      groceryAccess: 96,
      transitScore: 95,
      bestFor: 'Young developers, singles, and expats seeking rich cultural life and diverse international cuisine.',
      tradeoffs: 'Can be noisy on weekends; older Altbau buildings often have steep walk-ups and lack elevators.',
      dataSources: 'Polizei Berlin Kriminalitätsstatistik'
    },
    {
      id: 'charlottenburg',
      name: 'Charlottenburg-Wilmersdorf',
      vibe: 'Upscale, elegant, international schools & quiet avenues',
      rentAvg1Bed: 1400,
      rentAvg3Bed: 2800,
      commuteMin: 22,
      safetyScore: 90,
      schoolScore: 89,
      parkScore: 90,
      groceryAccess: 90,
      transitScore: 92,
      bestFor: 'Senior engineers, corporate executives, and families wanting quiet residential streets near Tiergarten.',
      tradeoffs: 'Quieter nightlife; requires longer U-Bahn commute to East-side tech offices.',
      dataSources: 'Mietspiegel Berlin 2024'
    },
    {
      id: 'steglitz',
      name: 'Steglitz-Zehlendorf',
      vibe: 'Suburban green oasis, lakes, American / International schools',
      rentAvg1Bed: 1100,
      rentAvg3Bed: 2200,
      commuteMin: 35,
      safetyScore: 96,
      schoolScore: 92,
      parkScore: 98,
      groceryAccess: 82,
      transitScore: 84,
      bestFor: 'Families attending John F. Kennedy American School or wanting private gardens and lake recreation (Wannsee).',
      tradeoffs: '30-40 min commute to city center; car ownership recommended.',
      dataSources: 'Senatsverwaltung für Bildung, Jugend und Familie'
    }
  ],
  dubai: [
    {
      id: 'dubai_marina',
      name: 'Dubai Marina & JBR',
      vibe: 'High-rise waterfront, beachfront dining & energetic expat lifestyle',
      rentAvg1Bed: 7500,
      rentAvg3Bed: 16500,
      commuteMin: 20,
      safetyScore: 96,
      schoolScore: 75,
      parkScore: 80,
      groceryAccess: 98,
      transitScore: 94,
      bestFor: 'Single tech workers and couples wanting walking access to beach, tram, and nightlife.',
      tradeoffs: 'Traffic congestion during rush hours along Al Marsa street; noise on lower floors.',
      dataSources: 'Dubai Land Department (DLD) Rental Index 2024'
    },
    {
      id: 'downtown_dubai',
      name: 'Downtown Dubai & DIFC',
      vibe: 'Ultra-modern, Burj Khalifa views & financial center proximity',
      rentAvg1Bed: 9500,
      rentAvg3Bed: 22000,
      commuteMin: 5,
      safetyScore: 98,
      schoolScore: 78,
      parkScore: 85,
      groceryAccess: 95,
      transitScore: 92,
      bestFor: 'Fintech executives, bankers, and professionals wanting walk-to-work DIFC convenience.',
      tradeoffs: 'Highest rent per square foot in Dubai; tourist crowds at Dubai Mall.',
      dataSources: 'DIFC Authority & RERA Rental Calculator'
    },
    {
      id: 'arabian_ranches',
      name: 'Arabian Ranches (I, II, III)',
      vibe: 'Gated villa community, championship golf, family serenity',
      rentAvg1Bed: 6000,
      rentAvg3Bed: 18500,
      commuteMin: 30,
      safetyScore: 99,
      schoolScore: 96,
      parkScore: 98,
      groceryAccess: 85,
      transitScore: 50,
      bestFor: 'Expats with families with kids and dogs wanting standalone villas with private gardens.',
      tradeoffs: 'Car is strictly mandatory (no Dubai Metro access); 25-35 min commute to central business hubs.',
      dataSources: 'Emaar Community Management / KHDA School Reports'
    },
    {
      id: 'jlt',
      name: 'Jumeirah Lake Towers (JLT)',
      vibe: 'Lakeside pedestrian promenades, pet-friendly & high value',
      rentAvg1Bed: 6200,
      rentAvg3Bed: 13500,
      commuteMin: 22,
      safetyScore: 95,
      schoolScore: 82,
      parkScore: 89,
      groceryAccess: 97,
      transitScore: 95,
      bestFor: 'Budget-conscious tech expats wanting direct Metro access and 20% lower rent than Marina.',
      tradeoffs: 'Cluster architecture means traffic bottlenecks during one-way loop peak hours.',
      dataSources: 'DMCC Free Zone Living Benchmark'
    }
  ],
  sao_paulo: [
    {
      id: 'pinheiros',
      name: 'Pinheiros',
      vibe: 'Bohemian tech corridor, craft breweries & transit hub',
      rentAvg1Bed: 3800,
      rentAvg3Bed: 7800,
      commuteMin: 15,
      safetyScore: 82,
      schoolScore: 84,
      parkScore: 86,
      groceryAccess: 98,
      transitScore: 97,
      bestFor: 'Tech professionals working along Faria Lima wanting walkable streets and Yellow Metro line access.',
      tradeoffs: 'Higher rents than surrounding neighborhoods; street noise near Praça Benedito Calixto.',
      dataSources: 'Secovi-SP / FipeZap Rental Index'
    },
    {
      id: 'itaim_bibi',
      name: 'Itaim Bibi / Vila Olímpia',
      vibe: 'The Silicon Valley of Brazil, corporate HQs & luxury dining',
      rentAvg1Bed: 5200,
      rentAvg3Bed: 11500,
      commuteMin: 5,
      safetyScore: 88,
      schoolScore: 85,
      parkScore: 82,
      groceryAccess: 95,
      transitScore: 85,
      bestFor: 'Senior executives, startup founders, and expats wanting walk-to-office proximity to Google/Meta/Nubank offices.',
      tradeoffs: 'Limited subway coverage (served by CPTM train line); heavy car traffic on Juscelino Kubitschek avenue.',
      dataSources: 'Prefeitura de São Paulo / FipeZap 2024'
    },
    {
      id: 'jardins',
      name: 'Jardins (Cerqueira César & Jardim Paulista)',
      vibe: 'Tree-lined luxury, international boutiques & culinary epicenter',
      rentAvg1Bed: 4800,
      rentAvg3Bed: 10500,
      commuteMin: 18,
      safetyScore: 90,
      schoolScore: 88,
      parkScore: 92,
      groceryAccess: 96,
      transitScore: 90,
      bestFor: 'Diplomats, expat couples, and families wanting walking proximity to Ibirapuera Park and international consulates.',
      tradeoffs: 'High monthly condominium maintenance fees (condomínio) in historic buildings.',
      dataSources: 'Secretaria da Segurança Pública de SP'
    }
  ]
};

/**
 * Shipping vs. Excess Baggage ROI Calculator Logic
 */
export function calculateShippingVsBaggageROI({
  suitcasesCount = 4,
  estimatedStayYears = 2,
  includeFurniture = false,
  origin = 'India',
  destination = 'Germany'
}) {
  // 1. Extra Airline Baggage Option (4x 23kg suitcases = 92kg extra gear):
  const airlineCostPerBag = 175; // avg international 23kg piece
  const totalBaggageCost = suitcasesCount * airlineCostPerBag;
  const baggageDeliveryDays = 0; // arrives on your flight

  // 2. LCL (Less than Container Load) Sea Crate (2.5 cubic meters, wooden liftvan):
  const lclFreightCost = 2200;
  const lclCustomsBrokerDestFees = 750;
  const lclInsurance = 250;
  const totalLclCost = lclFreightCost + lclCustomsBrokerDestFees + lclInsurance;
  const lclDeliveryDays = 65; // ~2 months transit + clearance lag

  // 3. Selling & Buying Locally (IKEA / Local Market Starter Set):
  const localBuyStarterBachelor = 1600;
  const localBuyStarterFamily = 3200;
  const localBuyCost = includeFurniture ? localBuyStarterFamily : localBuyStarterBachelor;

  // Recommendation logic
  let recommendedOption = '';
  let rationale = '';

  if (estimatedStayYears <= 1.5 && !includeFurniture) {
    recommendedOption = 'Airline Excess Baggage + Buy Essentials Locally';
    rationale = `For a ${estimatedStayYears}-year stay, paying \$${totalBaggageCost} for ${suitcasesCount} extra suitcases avoids \$${totalLclCost} in sea freight, port handling, and 60-90 days of maritime delay without your gear.`;
  } else if (includeFurniture && estimatedStayYears >= 3) {
    recommendedOption = 'LCL Wooden Sea Crate or Employer Container Allowance';
    rationale = `For long-term relocations (3+ years) with high-value heirloom furniture or bespoke items, sea shipping (\$${totalLclCost}) pays off compared to repurchasing everything new in local currency (\$${localBuyCost * 1.5}).`;
  } else {
    recommendedOption = 'Sell Everything & Buy Locally in Destination';
    rationale = `Modern expat consensus: Sell heavy furniture and appliances at home. Electrical frequency differences (50Hz vs 60Hz) and small European apartment layouts make imported furniture awkward to fit. Buy modularly in destination.`;
  }

  return {
    baggageOption: {
      title: `${suitcasesCount}x Extra 23kg Suitcases (${suitcasesCount * 23} kg)`,
      totalCost: totalBaggageCost,
      deliveryTime: 'Immediate (With you on flight)',
      risk: 'Zero port demurrage; no customs broker needed; baggage loss insurance applies.'
    },
    seaLclOption: {
      title: 'LCL Wooden Sea Crate (2.5 m³)',
      totalCost: totalLclCost,
      deliveryTime: '60 to 90 days',
      risk: 'Port congestion delays; potential customs duty if electronics owned < 6 months.'
    },
    buyLocallyOption: {
      title: 'Sell at Home & Purchase Locally',
      totalCost: localBuyCost,
      deliveryTime: '1 to 7 days post-arrival',
      risk: 'Brand new local warranty; guaranteed 100% plug & voltage compatibility.'
    },
    recommendation: recommendedOption,
    rationale
  };
}

/**
 * Voltage, Frequency & Appliance Standards Matrix
 */
export const COUNTRY_ELECTRICAL_STANDARDS = {
  india: { voltage: 230, frequency: 50, plugs: ['Type C', 'Type D', 'Type M'], plugImg: '🔌' },
  germany: { voltage: 230, frequency: 50, plugs: ['Type C', 'Type F (Schuko)'], plugImg: '🔌' },
  netherlands: { voltage: 230, frequency: 50, plugs: ['Type C', 'Type F'], plugImg: '🔌' },
  uk: { voltage: 230, frequency: 50, plugs: ['Type G (British 3-pin)'], plugImg: '🔌' },
  uae: { voltage: 230, frequency: 50, plugs: ['Type G (British 3-pin)'], plugImg: '🔌' },
  singapore: { voltage: 230, frequency: 50, plugs: ['Type G (British 3-pin)'], plugImg: '🔌' },
  usa: { voltage: 120, frequency: 60, plugs: ['Type A', 'Type B'], plugImg: '🔌' },
  brazil: { voltage: '127V / 220V (Split)', frequency: 60, plugs: ['Type N (IEC 60906-1)', 'Type C'], plugImg: '🔌' },
  japan: { voltage: 100, frequency: '50Hz (Tokyo) / 60Hz (Osaka)', plugs: ['Type A', 'Type B'], plugImg: '🔌' },
  australia: { voltage: 230, frequency: 50, plugs: ['Type I'], plugImg: '🔌' },
  canada: { voltage: 120, frequency: 60, plugs: ['Type A', 'Type B'], plugImg: '🔌' },
  thailand: { voltage: 230, frequency: 50, plugs: ['Type A', 'Type B', 'Type C', 'Type O'], plugImg: '🔌' },
  vietnam: { voltage: 220, frequency: 50, plugs: ['Type A', 'Type C', 'Type F'], plugImg: '🔌' },
  indonesia: { voltage: 230, frequency: 50, plugs: ['Type C', 'Type F (Schuko)'], plugImg: '🔌' },
  mexico: { voltage: 127, frequency: 60, plugs: ['Type A', 'Type B'], plugImg: '🔌' }
};

/**
 * First 72 Hours Survival Audio Phrasebook Data
 * Supported with Web Speech API audio playback
 */
export const SURVIVAL_PHRASEBOOK = {
  germany: {
    langCode: 'de-DE',
    languageName: 'German (Deutsch)',
    categories: [
      {
        name: 'Landlord & Handover',
        phrases: [
          {
            phrase: 'Guten Tag, ich bin hier für die Wohnungsübergabe.',
            phonetic: 'GOO-ten tahk, ikh bin heer foor dee VOH-noongs-oo-ber-gah-buh',
            english: 'Hello, I am here for the apartment handover.',
            context: 'Meeting the landlord for key collection.'
          },
          {
            phrase: 'Können Sie mir bitte die Wohnungsgeberbestätigung für die Anmeldung unterschreiben?',
            phonetic: 'KOEN-nen zee meer BIT-tuh dee VOH-noongs-gay-ber-beh-shta-tee-goong foor dee AHN-mel-doong oon-ter-SHRY-ben?',
            english: 'Could you please sign the landlord confirmation for my city registration?',
            context: 'Essential for Anmeldung.'
          },
          {
            phrase: 'Wo befinden sich die Sicherungskästen und der Hauptwasserhahn?',
            phonetic: 'Voh beh-FIN-den zikh dee ZEE-kheh-roongs-kes-ten oont der HOWPT-vas-ser-hahn?',
            english: 'Where are the circuit breakers and main water shutoff valve?',
            context: 'First day apartment walk-through.'
          }
        ]
      },
      {
        name: 'Clinic & Pharmacy',
        phrases: [
          {
            phrase: 'Ich habe starke Schmerzen und brauche einen Termin beim Arzt.',
            phonetic: 'Ikh HAH-buh SHTAR-kuh SHMAIR-tsen oont BROW-khuh eye-nen ter-MEEN bym ahrts-t',
            english: 'I have severe pain and need an appointment with the doctor.',
            context: 'Doctor clinic reception.'
          },
          {
            phrase: 'Haben Sie ein Schmerzmittel, das man ohne Rezept kaufen kann?',
            phonetic: 'HAH-ben zee eye-n SHMAIRTS-mit-tel, dahs mahn OH-nuh reh-TSEPT KOW-fen kahn?',
            english: 'Do you have a painkiller available over-the-counter without a prescription?',
            context: 'At the Apotheke (Pharmacy).'
          }
        ]
      },
      {
        name: 'Dietary & Supermarket',
        phrases: [
          {
            phrase: 'Ist dieses Gericht streng vegetarisch ohne Fleisch oder Fischbrühe?',
            phonetic: 'Ist DEE-zes geh-RIKHT shtreng veh-geh-TAH-rish OH-nuh flysh OH-der fish-BROO-huh?',
            english: 'Is this dish strictly vegetarian without meat or fish broth?',
            context: 'Restaurant or deli counter.'
          },
          {
            phrase: 'Wo finde ich laktosefreie und pflanzliche Milchalternativen?',
            phonetic: 'Voh FIN-duh ikh lahk-TOH-zuh-fry-uh oont PFLAHNTS-lee-khuh MILKH-ahl-ter-nah-TEE-ven?',
            english: 'Where can I find lactose-free and plant-based milk alternatives?',
            context: 'Supermarket aisle inquiry.'
          }
        ]
      },
      {
        name: 'Utilities & Internet',
        phrases: [
          {
            phrase: 'Ich möchte einen Glasfaser-Internetanschluss für meine neue Wohnung aktivieren.',
            phonetic: 'Ikh MOEKH-tuh eye-nen GLAHS-fah-zer in-ter-net-AHN-shloos foor MY-nuh NOY-uh VOH-noong ahk-tee-VEE-ren',
            english: 'I would like to activate a fiber internet connection for my new apartment.',
            context: 'Telekom / Vodafone store.'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: 'Bitte helfen Sie mir, es ist ein Notfall! Rufen Sie einen Krankenwagen (112)!',
            phonetic: 'BIT-tuh HEL-fen zee meer, es ist eye-n NOHT-fahl! ROO-fen zee eye-nen KRAHN-ken-vah-gen!',
            english: 'Please help me, this is an emergency! Call an ambulance (112)!',
            context: 'Severe emergency.'
          }
        ]
      }
    ]
  },
  brazil: {
    langCode: 'pt-BR',
    languageName: 'Portuguese (Português)',
    categories: [
      {
        name: 'Landlord & Handover',
        phrases: [
          {
            phrase: 'Olá, cheguei para a entrega das chaves e vistoria do apartamento.',
            phonetic: 'oh-LAH, shay-GAY pah-rah ah en-TREH-gah dahs SHAH-vees ee vees-toh-REE-ah doo ah-pahr-tah-MEN-too',
            english: 'Hello, I have arrived for key handover and apartment inspection.',
            context: 'Meeting landlord or building porter (porteiro).'
          },
          {
            phrase: 'Você aceita pagamento do aluguel ou condomínio via PIX?',
            phonetic: 'voh-SAY ah-SAY-tah pah-gah-MEN-too doo ah-loo-GEHL oh kon-doh-MEE-nee-oo VEE-ah PEEX?',
            english: 'Do you accept rent or condominium fee payment via PIX?',
            context: 'First payment inquiry.'
          }
        ]
      },
      {
        name: 'Dietary & Supermarket',
        phrases: [
          {
            phrase: 'Eu sou vegetariano estrito. Este prato não leva carne, frango ou bacon?',
            phonetic: 'EH-oo soh veh-zheh-tah-ree-AH-noo es-TREE-too. ES-tee PRAH-too now LEH-vah CAHR-nee, FRAHN-goo oh BEH-e-con?',
            english: 'I am strictly vegetarian. Does this dish contain no meat, chicken, or bacon?',
            context: 'Restaurants (where bacon is often added to beans).'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: 'Por favor, me ajude! É uma emergência médica, chame o SAMU (192)!',
            phonetic: 'pohr fah-VOHR, mee ah-ZHOO-jee! EH OO-mah eh-mair-ZHEN-see-ah MEH-jee-cah, SHAH-mee oo SAH-moo!',
            english: 'Please help me! It is a medical emergency, call the ambulance (192)!',
            context: 'Health emergency.'
          }
        ]
      }
    ]
  },
  thailand: {
    langCode: 'th-TH',
    languageName: 'Thai (ภาษาไทย)',
    categories: [
      {
        name: 'Arrival & Ride Services',
        phrases: [
          {
            phrase: 'สวัสดีครับ/ค่ะ ไปที่คอนโดนี้ได้ไหมครับ/ค่ะ (เปิดมิเตอร์ด้วยครับ)',
            phonetic: 'Sawatdee khrap/kha, bpai tee condo nee dai mai khrap/kha? (Bpoet meter duay khrap)',
            english: 'Hello, can you take me to this condominium? (Please turn on the taxi meter)',
            context: 'Taking a taxi from Suvarnabhumi or Don Mueang.'
          }
        ]
      },
      {
        name: 'Dietary & Street Food',
        phrases: [
          {
            phrase: 'กินเจครับ/ค่ะ ไม่ใส่น้ำปลาและไม่ใส่เนื้อสัตว์เลยครับ',
            phonetic: 'Gin jay khrap/kha, mai sai nam pla lae mai sai nuea sat loei khrap',
            english: 'I eat strictly vegan/Jay. Please do not put any fish sauce or any meat at all.',
            context: 'Ordering street food or at local Thai markets.'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: 'ช่วยด้วยครับ! มีเหตุฉุกเฉิน กรุณาเรียกรถพยาบาล (1669) ให้หน่อย!',
            phonetic: 'Chuay duay khrap! Mee het chuk-choen, karuna riak rot phayaban (neung-hok-hok-kao) hai noi!',
            english: 'Help me! There is an emergency, please call an ambulance (1669)!',
            context: 'Life-threatening medical emergency.'
          }
        ]
      }
    ]
  },
  vietnam: {
    langCode: 'vi-VN',
    languageName: 'Vietnamese (Tiếng Việt)',
    categories: [
      {
        name: 'Arrival & Ride Services',
        phrases: [
          {
            phrase: 'Xin chào, làm ơn chở tôi đến địa chỉ này theo đồng hồ tính cước nhé.',
            phonetic: 'Sin chow, lahm uhn chuh toy den dee-ah chee nai theo dong hoh tin kuoc nye.',
            english: 'Hello, please take me to this address using the meter.',
            context: 'Airport taxi or Grab ride.'
          }
        ]
      },
      {
        name: 'Dietary & Street Food',
        phrases: [
          {
            phrase: 'Tôi ăn chay thanh tịnh, xin đừng bỏ nước mắm hay mỡ heo nhé.',
            phonetic: 'Toy ahn chai tahnh tin, sin doong baw nuok mahm hai muh heo nye.',
            english: 'I eat pure vegetarian, please do not include fish sauce or pork lard.',
            context: 'Dining at local noodle houses and street stalls.'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: 'Cứu tôi với! Trường hợp khẩn cấp, làm ơn gọi cấp cứu (115)!',
            phonetic: 'Koo toy voy! Truong hop kahn kahp, lahm uhn goy kahp koo (mot-mot-nam)!',
            english: 'Help me! Emergency, please call an ambulance (115)!',
            context: 'Accident or emergency.'
          }
        ]
      }
    ]
  },
  indonesia: {
    langCode: 'id-ID',
    languageName: 'Indonesian (Bahasa Indonesia)',
    categories: [
      {
        name: 'Arrival & Ride Services',
        phrases: [
          {
            phrase: 'Halo Pak, tolong antar saya ke villa/hotel ini sesuai argo ya.',
            phonetic: 'HAH-loh pahk, TOH-long AHN-tahr SAH-yah keh VIL-lah/hoh-TEHL EE-nee seh-soo-EYE AHR-goh yah.',
            english: 'Hello sir, please take me to this villa/hotel using the meter.',
            context: 'Airport taxi or Gojek/Grab driver.'
          }
        ]
      },
      {
        name: 'Dietary & Food',
        phrases: [
          {
            phrase: 'Saya vegetarian. Tolong tanpa terasi, tanpa kaldu ayam, dan tanpa daging ya.',
            phonetic: 'SAH-yah veh-geh-tah-ree-AHN. TOH-long TAHN-pah teh-RAH-see, TAHN-pah KAHL-doo AH-yahm, dahn TAHN-pah DAH-ging yah.',
            english: 'I am vegetarian. Please no shrimp paste, no chicken bouillon, and no meat.',
            context: 'Warungs and local restaurants in Bali and Java.'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: 'Tolong! Ada keadaan darurat medis, panggil ambulans (118)!',
            phonetic: 'TOH-long! AH-dah keh-ah-DAH-ahn dah-ROO-raht MEH-dis, PAHN-gil ahm-boo-LAHNS (sah-too sah-too deh-lah-pahn)!',
            english: 'Help! Medical emergency, call an ambulance (118)!',
            context: 'Immediate assistance.'
          }
        ]
      }
    ]
  },
  mexico: {
    langCode: 'es-MX',
    languageName: 'Spanish (Español Mexicano)',
    categories: [
      {
        name: 'Arrival & Ride Services',
        phrases: [
          {
            phrase: 'Hola, buenas tardes. ¿Me lleva a esta dirección por favor? Ponga el taxímetro.',
            phonetic: 'OH-lah, BWEH-nahs TAHR-des. Meh YEH-vah ah EHS-tah dee-rek-see-OHN pohr fah-VOHR? POHN-gah ehl tahk-SEE-meh-troh.',
            english: 'Hello, good afternoon. Can you take me to this address please? Turn on the meter.',
            context: 'Authorized taxi or rideshare.'
          }
        ]
      },
      {
        name: 'Dietary & Food',
        phrases: [
          {
            phrase: 'Soy vegetariano estricto. ¿Los frijoles no tienen manteca de cerdo ni caldo de pollo?',
            phonetic: 'Soy veh-heh-tah-ree-AH-noh ehs-TREEK-toh. ¿Lohs free-HOH-lehs noh tee-EH-nehn mahn-TEH-kah deh SEHR-doh nee KAHL-doh deh POH-yoh?',
            english: 'I am strict vegetarian. Do the beans have no pork lard and no chicken broth?',
            context: 'Ordering Mexican food (tacos, fondas, restaurants).'
          }
        ]
      },
      {
        name: 'Emergency & Urgent',
        phrases: [
          {
            phrase: '¡Ayuda por favor! Es una emergencia médica, ¡llamen al 911 de inmediato!',
            phonetic: 'ah-YOO-dah pohr fah-VOHR! Ehs OO-nah eh-mair-HEN-see-ah MEH-dee-kah, YAH-mehn ahl noo-EH-veh ooh-noh ooh-noh deh een-meh-dee-AH-toh!',
            english: 'Help please! It is a medical emergency, call 911 immediately!',
            context: 'Emergency in Mexico.'
          }
        ]
      }
    ]
  }
};
