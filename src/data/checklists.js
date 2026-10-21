// Dynamic checklists for packing, 1-month countdown, and 1st-month arrival
export { getCountryCountdownTimeline, getCountryArrivalRoadmap, COUNTRY_TIMELINES } from './countryTimelines';

export const PACKING_CATEGORIES = [
  {
    id: 'documents',
    name: 'Critical Documents & Papers',
    badge: 'Never check in luggage',
    color: 'from-amber-500 to-red-500',
    bachelorItems: [
      { id: 'doc-1', title: 'Passport (valid min 6+ months beyond visa end)', priority: 'critical', checked: false },
      { id: 'doc-2', title: 'Original Visa Approval / Entry Permit / CoS printouts', priority: 'critical', checked: false },
      { id: 'doc-3', title: 'Original University Degrees & Transcripts (with Apostille/Legalization)', priority: 'critical', checked: false },
      { id: 'doc-4', title: 'Employment Contract & Signed Offer Letter', priority: 'high', checked: false },
      { id: 'doc-5', title: 'Police Clearance Certificate (PCC) with apostille (less than 3-6 months old)', priority: 'high', checked: false },
      { id: 'doc-6', title: 'International Driving Permit (IDP) + Home Driving License', priority: 'medium', checked: false },
      { id: 'doc-7', title: 'Forex Multi-Currency Cards & Emergency Cash in destination currency', priority: 'critical', checked: false },
      { id: 'doc-8', title: 'Encrypted USB / Cloud backup of all scans and biometric photos', priority: 'high', checked: false }
    ],
    familyItems: [
      { id: 'fdoc-1', title: 'Passports & Valid Visas for all family members & dependents', priority: 'critical', checked: false },
      { id: 'fdoc-2', title: 'Original Marriage Certificate (Apostilled & Certified English/Target language translation)', priority: 'critical', checked: false },
      { id: 'fdoc-3', title: 'Original Birth Certificates of all children (Apostilled + Translated)', priority: 'critical', checked: false },
      { id: 'fdoc-4', title: 'Children’s Immunization / Vaccination Records (translated and signed by pediatrician for school entry)', priority: 'critical', checked: false },
      { id: 'fdoc-5', title: 'Past 2-3 years School Transcripts, Report Cards & Transfer Certificates', priority: 'high', checked: false },
      { id: 'fdoc-6', title: 'Power of Attorney back home (for banking/property management if needed)', priority: 'medium', checked: false }
    ],
    petItems: [
      { id: 'pdoc-1', title: 'ISO 11784/11785 Compliant Microchip implantation record', priority: 'critical', checked: false },
      { id: 'pdoc-2', title: 'Rabies Neutralizing Antibody Titre Test (RNATT) result (if moving to Rabies-controlled countries)', priority: 'critical', checked: false },
      { id: 'pdoc-3', title: 'Government International Veterinary Health Certificate issued within 10 days of travel', priority: 'critical', checked: false },
      { id: 'pdoc-4', title: 'IATA-approved pet airline travel crate with water dispenser', priority: 'high', checked: false }
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics, Adapters & Power',
    badge: 'Hardware & Voltage',
    color: 'from-blue-500 to-indigo-500',
    bachelorItems: [
      { id: 'el-1', title: 'Universal International Plug Adapter (Type C, G, A/B compatible with USB-C PD)', priority: 'critical', checked: false },
      { id: 'el-2', title: 'Voltage check: US/Canada uses 110V; Europe/UK/Australia/Asia uses 220-240V. Check dual voltage (100-240V) on hair dryers and shavers!', priority: 'high', checked: false },
      { id: 'el-3', title: 'Multi-port Extension Cord with Surge Protector (from home plug to universal)', priority: 'high', checked: false },
      { id: 'el-4', title: 'Power bank (must be under 100Wh / 27,000mAh for carry-on only)', priority: 'high', checked: false },
      { id: 'el-5', title: 'Unlocked smartphone capable of dual-SIM / eSIM', priority: 'critical', checked: false }
    ],
    familyItems: [
      { id: 'fel-1', title: 'Spare charging cables & kid tablets with downloaded offline movies/educational apps', priority: 'high', checked: false },
      { id: 'fel-2', title: 'Baby monitor / white noise machine (check dual voltage compatibility)', priority: 'medium', checked: false }
    ],
    petItems: []
  },
  {
    id: 'medications',
    name: 'Medications & Health Essentials',
    badge: '3-Month Supply',
    color: 'from-emerald-500 to-teal-500',
    bachelorItems: [
      { id: 'med-1', title: '3-month supply of chronic prescription medications in original labeled packaging', priority: 'critical', checked: false },
      { id: 'med-2', title: 'Doctor\'s letter in English specifying chemical/generic names, dosage, and medical necessity', priority: 'critical', checked: false },
      { id: 'med-3', title: 'Check destination banned medication list (e.g., Codeine banned in UAE/Japan; ADHD stimulants heavily restricted)', priority: 'critical', checked: false },
      { id: 'med-4', title: 'First Aid basics: Paracetamol, Ibuprofen, Antihistamines, ORS rehydration, band-aids', priority: 'medium', checked: false },
      { id: 'med-5', title: 'Spare prescription eyeglasses or contact lenses (getting eye appointments abroad can take weeks)', priority: 'high', checked: false }
    ],
    familyItems: [
      { id: 'fmed-1', title: 'Pediatric medication supply: fever syrup, teething gel, asthma inhalers with aerochamber', priority: 'critical', checked: false },
      { id: 'fmed-2', title: 'Digital ear/forehead thermometer & nasal aspirator', priority: 'high', checked: false }
    ],
    petItems: [
      { id: 'pmed-1', title: 'Pet calming treats / vet-prescribed travel anxiety medication', priority: 'medium', checked: false }
    ]
  },
  {
    id: 'clothing',
    name: 'Clothing & Climate Transition',
    badge: 'Weather Layering',
    color: 'from-cyan-500 to-blue-600',
    bachelorItems: [
      { id: 'cl-1', title: 'High-quality thermal base layers (Merino wool or Heattech) if moving to cold climates', priority: 'high', checked: false },
      { id: 'cl-2', title: 'Waterproof and windproof hooded jacket (Gore-Tex or similar)', priority: 'high', checked: false },
      { id: 'cl-3', title: '2-3 weeks of professional/business casual clothes for first days at work', priority: 'high', checked: false },
      { id: 'cl-4', title: 'Comfortable walking shoes (you will walk 10,000-15,000 steps daily during initial city errands)', priority: 'high', checked: false },
      { id: 'cl-5', title: 'Vacuum compression bags to maximize suitcase luggage volume by 60%', priority: 'medium', checked: false }
    ],
    familyItems: [
      { id: 'fcl-1', title: 'Waterproof snowsuits, boots, and warm mittens for children (buy at destination if size/season is off)', priority: 'high', checked: false },
      { id: 'fcl-2', title: '2 change of clothes per child in carry-on bag for transit spills and delays', priority: 'critical', checked: false }
    ],
    petItems: []
  },
  {
    id: 'diet_pantry',
    name: 'Dietary, Spices & Comfort Essentials',
    badge: 'Customs Compliant',
    color: 'from-amber-500 to-orange-500',
    bachelorItems: [
      { id: 'dt-1', title: 'Factory-sealed, commercially labeled whole spices and favorite spice blends', priority: 'medium', checked: false },
      { id: 'dt-2', title: 'Compact induction-friendly pressure cooker / stainless steel cooking pot (game changer for expats)', priority: 'medium', checked: false },
      { id: 'dt-3', title: 'Check destination customs rules: NO fresh fruits, vegetables, seeds, raw meats, or dairy (strict biosecurity in AU/NZ/US)', priority: 'critical', checked: false }
    ],
    familyItems: [
      { id: 'fdt-1', title: 'Familiar baby formula / transition snacks for first 2 weeks while adjusting to local milk brands', priority: 'critical', checked: false }
    ],
    petItems: [
      { id: 'pdt-1', title: '1-week supply of familiar pet kibble/food to prevent stomach upset during transit', priority: 'high', checked: false }
    ]
  }
];

export const ONE_MONTH_COUNTDOWN = [
  {
    week: 'Week 4 (T-30 to T-23 Days)',
    title: 'Financial, Medical & Accommodation Locking',
    focus: 'Wrapping up home obligations and laying arrival foundation',
    tasks: [
      {
        id: 'w4-1',
        title: 'Book Temporary Accommodation with City Registration Guarantee',
        desc: 'Ensure the Airbnb/Wunderflats/hotel confirms in writing that they provide the landlord confirmation document (e.g. Wohnungsgeberbestätigung in Germany, or utility bill in UK) so you can do your mandatory city registration immediately upon arrival.',
        priority: 'critical'
      },
      {
        id: 'w4-2',
        title: 'Comprehensive Medical & Dental Checkups',
        desc: 'Visit your dentist and get all cleanings, fillings, and dental treatments done in your home country. Dental work abroad is often excluded from statutory health insurance and costs thousands out of pocket.',
        priority: 'high'
      },
      {
        id: 'w4-3',
        title: 'Notify Your Banks & Set Up Multi-Currency Forex Cards',
        desc: 'Order a multi-currency travel debit card (like Wise, Revolut, or bank forex card). Inform your home credit card providers of international travel dates so your cards aren’t frozen on day 1.',
        priority: 'critical'
      },
      {
        id: 'w4-4',
        title: 'Submit Formal Resignation / Terminate Home Leases & Subscriptions',
        desc: 'Serve formal notice to your current landlord, gym, internet provider, and local utility providers. Keep proof of written cancellation.',
        priority: 'high'
      }
    ]
  },
  {
    week: 'Week 3 (T-22 to T-15 Days)',
    title: 'Apostilles, Schooling & Cloud Vault',
    focus: 'Legalizing documents and arranging education/pets',
    tasks: [
      {
        id: 'w3-1',
        title: 'Double Check All Document Apostilles & Certified Translations',
        desc: 'Verify that marriage certificate, birth certificates, and degrees bear the Hague Apostille or consular legalization. Ensure translations are done by a sworn/certified translator.',
        priority: 'critical'
      },
      {
        id: 'w3-2',
        title: 'School / Kindergarten (Kita) Research & Waitlist Inquiries',
        desc: 'For families: Contact prospective schools in your target destination neighborhoods. Prepare enrollment dossier (vaccine cards, previous school reports, passport copies).',
        priority: 'high'
      },
      {
        id: 'w3-3',
        title: 'Secure Cloud Vault & Encrypted Flash Drive Backup',
        desc: 'Upload 300 DPI high-resolution scans of all documents, passports, IDs, work contracts, and biometric passport photos to encrypted Google Drive / iCloud and a password-protected thumb drive.',
        priority: 'high'
      },
      {
        id: 'w3-4',
        title: 'Power of Attorney back home (if owning property/stocks)',
        desc: 'Grant registered Special Power of Attorney to a trusted family member or lawyer to handle urgent physical paperwork in your absence.',
        priority: 'medium'
      }
    ]
  },
  {
    week: 'Week 2 (T-14 to T-8 Days)',
    title: 'Luggage Weigh-In, SIM & Currency',
    focus: 'Physical logistics and connectivity preparation',
    tasks: [
      {
        id: 'w2-1',
        title: 'Purchase Destination eSIM or Pre-Order Local SIM',
        desc: 'Install an international travel eSIM (Airalo, Holafly, Nomad) so your phone connects to 5G the second your flight touches down. You will need mobile data to hail taxis and communicate with landlords.',
        priority: 'critical'
      },
      {
        id: 'w2-2',
        title: 'Dry Run Packing & Digital Luggage Scale Weigh-In',
        desc: 'Pack suitcases and weigh with a digital luggage scale. Airline excess baggage charges at the airport counter can reach $50-$150 per extra kilo. Pre-book additional baggage allowance online for 50% discount.',
        priority: 'high'
      },
      {
        id: 'w2-3',
        title: 'Exchange Physical Currency Buffer',
        desc: 'Obtain €300 - €500 (or local equivalent) in small denomination banknotes for coin lockers, public transit ticket machines, and emergency tips.',
        priority: 'high'
      },
      {
        id: 'w2-4',
        title: 'Download Offline Maps & Essential City Apps',
        desc: 'Download Google Maps offline areas for your destination city, along with Citymapper, DB Navigator (Germany), Trainline (UK), Uber/Bolt/Grab, and Google Translate offline language packs.',
        priority: 'medium'
      }
    ]
  },
  {
    week: 'Week 1 (T-7 to Travel Day)',
    title: 'Final Carry-On Verification & Liftoff',
    focus: 'Execution and zero-risk travel day preparation',
    tasks: [
      {
        id: 'w1-1',
        title: 'Carry-On Document Binder Check (Never in Checked Bag!)',
        desc: 'Assemble hard copies: Passport with visa, work offer letter, accommodation confirmation, travel health insurance certificate, and marriage/birth certificates in a waterproof clear folder in your personal cabin bag.',
        priority: 'critical'
      },
      {
        id: 'w1-2',
        title: 'Airport Transfer Booking at Destination',
        desc: 'If traveling with family, 4+ heavy suitcases, or pets, book a pre-arranged spacious minivan or airport shuttle in advance rather than searching in cold airport queues.',
        priority: 'high'
      },
      {
        id: 'w1-3',
        title: 'Keep 48-Hour Survival Kit in Hand Luggage',
        desc: 'Pack 2 changes of clothes, essential chargers, power bank, infant diapers, and prescription medications in hand luggage in case checked baggage is delayed.',
        priority: 'critical'
      },
      {
        id: 'w1-4',
        title: 'Online Flight Check-In & Final Departure Farewell',
        desc: 'Complete online check-in 24-48 hours prior, verify passport names match flight tickets character for character, and embark on your new adventure!',
        priority: 'high'
      }
    ]
  }
];

export const FIRST_MONTH_ROADMAP = [
  {
    phase: 'Days 1 to 3',
    title: 'Immediate Survival & Connectivity',
    badge: 'Initial Landing',
    tasks: [
      {
        id: 'arr-1',
        title: 'Activate Local SIM / Local Mobile Number',
        desc: 'Switch to a local monthly mobile plan (prepaid or eSIM). You will need a local phone number for bank verification SMS, courier deliveries, and apartment portals.',
        timing: 'Day 1'
      },
      {
        id: 'arr-2',
        title: 'Get Public Transit Pass & Navigate Local Supermarket',
        desc: 'Buy a monthly commuter transit pass (e.g. Deutschlandticket in Germany, Oyster/Contactless in London, OV-Chipkaart in Netherlands). Locate nearest supermarket and buy drinking water/groceries.',
        timing: 'Day 1-2'
      },
      {
        id: 'arr-3',
        title: 'Inspect Temporary Accommodation & Get Landlord Confirmation',
        desc: 'Inspect the accommodation for pre-existing damages. Obtain the signed landlord registration form (Wohnungsgeberbestätigung in Germany, Ejari in UAE, etc.) required for city registration.',
        timing: 'Day 2-3'
      }
    ]
  },
  {
    phase: 'Week 1 (Days 4 to 7)',
    title: 'Legal Registration & Social Numbers',
    badge: 'Legal Foundation',
    tasks: [
      {
        id: 'arr-4',
        title: 'Complete Mandatory City / Resident Registration',
        desc: 'Attend your Bürgeramt (Germany), Gemeente (Netherlands), Service Canada (SIN), or Social Security Administration (USA) appointment. This unlocks your official tax ID and resident status.',
        timing: 'Days 4-7'
      },
      {
        id: 'arr-5',
        title: 'Receive Tax Identification Number',
        desc: 'Once registered, your national tax identifier (Steuer-ID, National Insurance Number, BSN) will be generated and mailed or handed to you. Share it with your employer’s HR department immediately to avoid maximum emergency tax withholding.',
        timing: 'Week 1'
      },
      {
        id: 'arr-6',
        title: 'Workplace & School Orientation',
        desc: 'First day at the new office: meet colleagues, collect laptop, set up employee benefits, and finalize school enrollment visits for children.',
        timing: 'Week 1'
      }
    ]
  },
  {
    phase: 'Week 2 (Days 8 to 14)',
    title: 'Banking & Healthcare Activation',
    badge: 'Financial & Medical',
    tasks: [
      {
        id: 'arr-7',
        title: 'Open Local Bank Account',
        desc: 'Open a local checking/salary account (traditional banks like Deutsche Bank/Commerzbank, Barclays/Lloyds, or fast digital banks like N26, Revolut, Bunq). Provide your local IBAN/routing number to HR for payroll.',
        timing: 'Days 8-10'
      },
      {
        id: 'arr-8',
        title: 'Activate Health Insurance Card & Register with GP (Hausarzt)',
        desc: 'Submit your city registration and bank details to your statutory/private health insurer to receive your electronic health card. Find a nearby English-speaking General Practitioner and register your family on their patient list.',
        timing: 'Days 10-14'
      },
      {
        id: 'arr-9',
        title: 'Purchase Personal Liability Insurance (Haftpflichtversicherung)',
        desc: 'In Europe (especially Germany/Switzerland), personal liability insurance is essential (costs only €4-€6/month) and protects you against accidental damages to rental properties or third parties.',
        timing: 'Week 2'
      }
    ]
  },
  {
    phase: 'Weeks 3 & 4 (Days 15 to 30)',
    title: 'Apartment Hunting & Community Settling',
    badge: 'Permanent Nesting',
    tasks: [
      {
        id: 'arr-10',
        title: 'Intense Long-Term House Hunting & Dossier Submission',
        desc: 'Create an attractive tenant application dossier (3 recent payslips or contract, credit score certificate, copy of IDs, intro letter). Schedule viewings and apply swiftly within 10 minutes of new listings going live.',
        timing: 'Days 15-25'
      },
      {
        id: 'arr-11',
        title: 'Master Local Recycling & Household Norms',
        desc: 'Learn local waste separation schedules (organic, glass, plastic, paper, bulky waste). Familiarize yourself with building quiet hours, bike storage rooms, and laundry room booking etiquette.',
        timing: 'Week 3'
      },
      {
        id: 'arr-12',
        title: 'Join Local Expat & Community Groups',
        desc: 'Join local Facebook groups (e.g. "Expats in Berlin", "Indians in London", "Tech Expats Amsterdam"), attend Meetups, connect with local cultural/religious centers, and build your social support network.',
        timing: 'Week 4'
      },
      {
        id: 'arr-13',
        title: 'Biometric Residence Permit (BRP / eAT) Appointment',
        desc: 'Attend your scheduled immigration authority appointment (Ausländerbehörde, Home Office, ICA) for fingerprints and facial biometric scan to receive your physical multi-year resident card.',
        timing: 'Week 4'
      }
    ]
  }
];
