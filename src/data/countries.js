// Comprehensive curated data for top expat destinations
export const COUNTRIES_DATA = {
  germany: {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR',
    symbol: '€',
    language: 'German',
    emergencyNumbers: {
      police: '110',
      ambulance: '112',
      medicalOnCall: '116 117'
    },
    cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart', 'Düsseldorf', 'Cologne'],
    visaTypes: [
      {
        name: 'EU Blue Card',
        desc: 'For highly qualified academics and professionals with a recognized university degree and binding job offer meeting the salary threshold (~€45,300/yr for shortage occupations, ~€50,700/yr general). Fast track to permanent residency (21 or 27 months).',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Skilled Worker Visa (Fachkraft)',
        desc: 'For qualified professionals with vocational training or degree recognized in Germany (Anabin database check or ZAB statement required).',
        timeframe: '6 to 12 weeks'
      },
      {
        name: 'Opportunity Card (Chancenkarte)',
        desc: 'Points-based job search visa allowing 1 year stay in Germany with 20h/week part-time work rights.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Family Reunion Visa (Familienzusammenführung)',
        desc: 'For spouse and minor children. Spouses of EU Blue Card holders do NOT need German A1 certificate prior to arrival!',
        timeframe: '8 to 16 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Ruhezeit (Mandatory Quiet Hours)',
        desc: 'Quiet hours apply strictly every weekday 22:00–06:00, Saturday night, and ALL DAY Sunday (no vacuuming, drilling, lawnmowing, or loud music). Violations can lead to police visits and landlord warnings.',
        severity: 'high'
      },
      {
        title: 'Strict P2P / Torrenting Laws & Copyright Fines',
        desc: 'Downloading movies/music via torrents without VPN results in legal letters (Abmahnung) from specialized law firms demanding €900 to €2,000+ per file within days. Never torrent on German IP.',
        severity: 'critical'
      },
      {
        title: 'Anmeldung (Mandatory City Registration within 14 Days)',
        desc: 'You must register your living address at the local Bürgeramt within 14 days of moving in. You need the landlord confirmation (Wohnungsgeberbestätigung). Without Anmeldung, you cannot get a Tax ID or open most bank accounts.',
        severity: 'critical'
      },
      {
        title: 'GEZ / Rundfunkbeitrag (Mandatory Public Broadcasting Fee)',
        desc: 'Every single household must pay €18.36/month regardless of whether you own a TV or radio. You will receive an official letter after Anmeldung.',
        severity: 'medium'
      },
      {
        title: 'Jaywalking & Red Light Pedestrian Fines',
        desc: 'Crossing on red (especially in front of children) is socially taboo and carries a €5-€10 police fine. Cycling on pedestrian pavements or without lights at night attracts €20-€55 fines.',
        severity: 'medium'
      },
      {
        title: 'Pfand & Strict Waste Sorting (Mülltrennung)',
        desc: 'Plastic bottles and beer bottles carry a return deposit (€0.25 Pfand). Trash must be rigorously sorted: Bio (organic), Papier (blue), Gelber Sack (plastics/packaging), and Restmüll (residual black bin). Landlords can fine tenants for repeated violations.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'ImmoScout24', url: 'https://www.immobilienscout24.de', note: 'Largest portal; MieterPlus subscription gives big advantage' },
        { name: 'WG-Gesucht', url: 'https://www.wg-gesucht.de', note: 'Top choice for flatshares (WGs) and bachelor studio rentals' },
        { name: 'Immowelt', url: 'https://www.immowelt.de', note: 'Second largest real estate portal' },
        { name: 'Wunderflats & HousingAnywhere', url: 'https://wunderflats.com', note: 'Furnished temporary rentals that provide Wohnungsgeberbestätigung for initial Anmeldung' }
      ],
      scamWarnings: [
        'Landlord claims to be out of the country (e.g. UK/Spain) and asks to deposit money via Airbnb or Western Union to mail keys. 100% scam.',
        'Never transfer Kaution (deposit) before viewing the flat and signing the written Mietvertrag.',
        'Beware of fake portal listings with unrealistically low prices for prime districts (Mitte, Kreuzberg, Schwabing).'
      ],
      keyConcepts: [
        { term: 'Kaltmiete (Cold Rent)', meaning: 'Base rent without heating, water, or building maintenance.' },
        { term: 'Warmmiete (Warm Rent)', meaning: 'Total monthly rent including estimated heating and utility advance payments (Nebenkosten). Electricity and internet are usually billed separately.' },
        { term: 'Kaution', meaning: 'Security deposit, legally capped at 3 months base cold rent, payable in up to 3 monthly installments.' },
        { term: 'Wohnungsgeberbestätigung', meaning: 'Signed landlord confirmation form required by law for your city registration (Anmeldung).' },
        { term: 'Schufa', meaning: 'German credit rating report. New arrivals should obtain an official "No negative entries" certificate once registered.' }
      ]
    },
    healthcare: {
      type: 'Dual System (Gesetzliche vs. Private Krankenversicherung)',
      details: 'Health insurance is legally mandatory for all residents. Employees earning under ~€69,300 are automatically enrolled in Public Insurance (TK - Techniker Krankenkasse, Barmer, or AOK), split 50/50 with employer (~14.6% + small additional contribution).',
      englishFriendlyInsurers: ['Techniker Krankenkasse (TK)', 'Barmer', 'Ottonova (Private expat)'],
      generalPractitioner: 'Register with a local "Hausarzt" (General Practitioner). For non-emergency off-hours, dial 116 117 (Bereitschaftsdienst). For life-threatening emergencies, dial 112.',
      prescriptions: 'Pink prescription = covered by public insurance (you pay €5-€10 pharmacy co-pay). Blue/White prescription = private prescription (you pay full upfront and claim reimbursement).'
    },
    dietaryGuide: {
      vegetarianStatus: 'Extremely vegetarian and vegan friendly. Germany is Europe\'s largest vegan market.',
      veganLabel: 'Look for the green "V-Label" (Vegetarisch / Vegan).',
      hiddenIngredientsGerman: [
        { de: 'Gelatine', en: 'Gelatin (animal bone collagen, found in gummies, yogurts, marshmallows)' },
        { de: 'Lab / Kälberlab', en: 'Animal rennet (found in many hard cheeses; look for "mikrobielles Lab")' },
        { de: 'Schweineschmalz / Schmalz', en: 'Pork lard (used in traditional pastries and red cabbage)' },
        { de: 'Geflügelfond / Rinderbrühe', en: 'Chicken / Beef broth' },
        { de: 'Echtes Karmin (E120)', en: 'Carmine red dye made from crushed insects' }
      ],
      supermarkets: 'Bio Company, Alnatura, Denns BioMarkt (organic/veggie); Rewe, Edeka, Lidl, Aldi for daily groceries.',
      ethnicGrocers: 'Go Asia (massive pan-Asian chain), Indian Groceries (Spiceland, Bharat Bazaar), Turkish Supermarkets (Eurogida, Bolu - excellent for fresh produce, lentils, and Halal meats).'
    },
    religiousGuide: {
      overview: 'Freedom of religion is constitutionally protected. Major communities include Christian (Catholic & Protestant), Muslim, Jewish, Hindu, Sikh, and Buddhist.',
      churchTax: 'Warning: If you declare Catholic or Protestant on your Anmeldung registration, the government will automatically withhold 8% to 9% additional income tax as Church Tax (Kirchensteuer). If you are not affiliated or do not wish to pay, register as non-denominational (ohne Religionsbekenntnis / k.A.).',
      placesOfWorship: 'Mosques (Sehitlik, Cologne Central Mosque), Hindu Temples (Sri Ganesha Hindu Temple Berlin, Sri Kamadchi Ampal Hamm), Gurdwaras, Synagogues, and English-speaking International Baptist/Anglican/Catholic Churches exist in all major cities.',
      halalAvailability: 'Widely available via Turkish and Arab butchers and restaurants. Most döner shops display "Helal" certification.'
    }
  },

  uk: {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    symbol: '£',
    language: 'English',
    emergencyNumbers: {
      police: '999',
      ambulance: '999',
      medicalNonEmergency: '111',
      policeNonEmergency: '101'
    },
    cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Glasgow', 'Leeds', 'Bristol'],
    visaTypes: [
      {
        name: 'Skilled Worker Visa',
        desc: 'Requires a job offer with a Certificate of Sponsorship (CoS) from a licensed UK employer and meeting minimum salary thresholds.',
        timeframe: '3 to 6 weeks'
      },
      {
        name: 'Global Talent Visa',
        desc: 'For leaders and innovators in Tech (Tech Nation), Academia, or Arts. No job sponsor required, provides ultimate freedom.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Health and Care Worker Visa',
        desc: 'Special rate visa with exemption from Immigration Health Surcharge (IHS) for qualified doctors, nurses, and care staff.',
        timeframe: '3 to 5 weeks'
      },
      {
        name: 'Youth Mobility Scheme',
        desc: 'For eligible nationals aged 18-35 (Canada, Australia, NZ, Japan, India Young Professionals, etc.) for up to 2 years.',
        timeframe: '3 to 4 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'TV Licensing (£169.50/year)',
        desc: 'If you watch or record live TV on any channel or use BBC iPlayer on any device, you must hold a valid TV Licence. Enforcement officers send threatening letters to unlicensed addresses.',
        severity: 'medium'
      },
      {
        title: 'Council Tax Registration',
        desc: 'Every home pays local council tax (Band A through H, typically £1,200 to £3,500/yr). Single adults get a 25% single-person discount. Full-time students are exempt.',
        severity: 'high'
      },
      {
        title: 'Tenancy Deposit Protection (TDP)',
        desc: 'By law, landlords must place your rental deposit (max 5 weeks rent for annual rents under £50k) in a government-backed tenancy deposit scheme (DPS, MyDeposits, TDS) within 30 days.',
        severity: 'high'
      },
      {
        title: 'Driving on the Left & ULEZ / Congestion Zones',
        desc: 'Driving is on the left. In London, driving into the Ultra Low Emission Zone (ULEZ) or Congestion Charge zone incurs £12.50 to £15 daily fees if your vehicle does not comply.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Rightmove', url: 'https://www.rightmove.co.uk', note: 'Largest UK property portal with most listings' },
        { name: 'Zoopla', url: 'https://www.zoopla.co.uk', note: 'Comprehensive with neighborhood price estimates' },
        { name: 'OpenRent', url: 'https://www.openrent.co.uk', note: 'Direct landlord rentals with zero admin fees and fast communication' },
        { name: 'SpareRoom', url: 'https://www.spareroom.co.uk', note: 'Undisputed #1 portal for bachelor flatshares and room rentals' }
      ],
      scamWarnings: [
        'Never transfer holding deposits before attending an in-person or live verified video viewing.',
        'Agency fees are banned in England under the Tenant Fees Act 2019. If an agent tries to charge you for inventory check or contract drafting, it is illegal.'
      ],
      keyConcepts: [
        { term: 'Holding Deposit', meaning: 'Capped at 1 week’s rent to reserve a property while references are vetted.' },
        { term: 'Guarantor / Rent in Advance', meaning: 'Expats without UK credit history are often asked for a UK homeowner guarantor or 3 to 6 months rent upfront.' },
        { term: 'Right to Rent Check', meaning: 'Landlords are legally required to verify your immigration status share-code from gov.uk before handing over keys.' }
      ]
    },
    healthcare: {
      type: 'National Health Service (NHS)',
      details: 'Expats on visas pay the Immigration Health Surcharge (IHS, approx £1,035/year) as part of their visa application, entitling them to NHS care largely free at the point of delivery.',
      generalPractitioner: 'Immediately register with your local GP surgery once you have proof of address. Dental care under NHS has long waiting queues; many expats use private dental plans.',
      prescriptions: 'In England, prescriptions have a flat charge of ~£9.90 per item (free in Scotland and Wales). NHS 111 is available 24/7 for urgent health advice.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Exceptional. The UK is one of the easiest countries in the world for vegetarians and vegans. Almost every restaurant has dedicated vegetarian (V) and vegan (Ve) markings.',
      halalAvailability: 'Very widely accessible. All major supermarkets (Tesco, Sainsbury’s, Asda, Morrisons) have dedicated Halal meat counters.',
      ethnicGrocers: 'Asian, Afro-Caribbean, and Indian grocery stores are in every borough (e.g., Tooting, Wembley, Southall, Rusholme Manchester). Spices and lentils are cheap and plentiful.'
    },
    religiousGuide: {
      overview: 'Highly multicultural and welcoming. Huge active communities for Islam, Hinduism, Sikhism, Judaism, and Christianity.',
      placesOfWorship: 'Prominent centers include BAPS Shri Swaminarayan Mandir (Neasden), East London Mosque, Regent’s Park Central Mosque, West London Synagogue, and Sri Guru Singh Sabha Southall.'
    }
  },

  netherlands: {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    currency: 'EUR',
    symbol: '€',
    language: 'Dutch (English spoken fluently by 90%+)',
    emergencyNumbers: {
      police: '112',
      ambulance: '112',
      policeNonEmergency: '0900-8844'
    },
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen'],
    visaTypes: [
      {
        name: 'Highly Skilled Migrant (Kennismigrant)',
        desc: 'Fast-track visa sponsored by a recognized IND employer meeting monthly salary criteria (€5,688 for 30+, €4,171 for under 30).',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Orientation Year (Zoekjaar)',
        desc: '1-year work search visa for recent graduates from top 200 global universities or Dutch universities.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Start-Up / Self-Employed Visa',
        desc: 'For innovative entrepreneurs under the guidance of a recognized Dutch facilitator.',
        timeframe: '8 to 12 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'BSN (Burgerservicenummer) & Gemeente Registration',
        desc: 'You must register at your local municipality (Gemeente) to receive your BSN. Without a BSN, you cannot receive salary, open a Dutch bank account, or buy mandatory health insurance.',
        severity: 'critical'
      },
      {
        title: 'Strict Bicycle Priority & Cycling Rules',
        desc: 'Bicycle paths (Fietspad) are strictly for bikes. Pedestrians walking on bike lanes will be aggressively rung at. Cycling without front/rear lights after sunset incurs a €60+ fine. Hand signals when turning are expected.',
        severity: 'medium'
      },
      {
        title: 'Severe Rental Housing Shortage',
        desc: 'The Netherlands faces an acute housing crisis. Beware of landlords offering rentals where "registration is not possible" (geen inschrijving mogelijk). This is illegal and prevents you from obtaining a BSN.',
        severity: 'critical'
      },
      {
        title: '30% Tax Ruling Scrutiny',
        desc: 'The 30% ruling (tax-free reimbursement of extraterritorial costs for skilled expats) has been tightened. Ensure your employment contract explicitly includes this application.',
        severity: 'high'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Funda', url: 'https://www.funda.nl', note: 'Primary Dutch real estate portal with verified rentals' },
        { name: 'Pararius', url: 'https://www.pararius.com', note: 'Dedicated expat-friendly rental portal' },
        { name: 'Kamernet', url: 'https://kamernet.nl', note: 'Top platform for student rooms and shared bachelor flats' }
      ],
      scamWarnings: [
        'Never rent an apartment where the landlord refuses to let you register at the Gemeente.',
        'Never wire money to a non-Dutch IBAN or via Western Union for a Dutch apartment.'
      ],
      keyConcepts: [
        { term: 'Kale huur (Bare rent)', meaning: 'Rent for an unfurnished shell (often without light fixtures or flooring!).' },
        { term: 'Gestoffeerd (Upholstered)', meaning: 'Includes flooring, curtains, and kitchen appliances.' },
        { term: 'Gemeubileerd (Furnished)', meaning: 'Fully furnished with bed, sofa, utensils.' }
      ]
    },
    healthcare: {
      type: 'Mandatory Universal Private Insurance (Basisverzekering)',
      details: 'All residents MUST buy Dutch basic health insurance within 4 months of arrival (retroactive to registration date). Costs ~€135-€160/month per adult. Children under 18 are free. Annual compulsory deductible (eigen risico) is ~€385.',
      insurers: ['Zilveren Kruis', 'VGZ', 'CZ', 'Loonzorg (expat friendly)'],
      generalPractitioner: 'Must register with a "Huisarts" (GP) in your postal code. The Huisarts is the gatekeeper for all specialist appointments.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Superb. Albert Heijn and Jumbo carry extensive plant-based sections ("Vega" / "Vegan").',
      hiddenIngredientsDutch: [
        { de: 'Gelatine', en: 'Gelatin' },
        { de: 'Dierlijk stremsel', en: 'Animal rennet (look for "vegetarisch stremsel" / "microbieel stremsel")' },
        { de: 'Varkensvet', en: 'Pork fat' }
      ],
      supermarkets: 'Albert Heijn (premium), Jumbo, Lidl, Ekoplaza (organic), Amazing Oriental (giant Asian grocery chain).'
    },
    religiousGuide: {
      overview: 'A secular, pluralistic society where all religions are free to practice openly.',
      placesOfWorship: 'Mosques (Westermoskee Amsterdam), Hindu Temples (Shri Radha Krishna Mandir Amsterdam, Murugan Temple Roermond), Gurdwaras, and international churches.'
    }
  },

  canada: {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    symbol: 'C$',
    language: 'English & French',
    emergencyNumbers: {
      police: '911',
      ambulance: '911',
      healthAdvice: '811'
    },
    cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton'],
    visaTypes: [
      {
        name: 'Express Entry (FSW / CEC / PNP)',
        desc: 'Points-based Permanent Residency (PR) pathway based on age, education, language scores (IELTS/CELPIP), and Canadian work experience.',
        timeframe: '6 to 9 months'
      },
      {
        name: 'Intra-Company Transferee / LMIA Work Permit',
        desc: 'Employer-sponsored work permit for specialized knowledge workers or managers transferred to Canadian branch.',
        timeframe: '2 to 4 months'
      },
      {
        name: 'Post-Graduation Work Permit (PGWP)',
        desc: 'Open work permit for graduates from designated Canadian learning institutions (DLI) up to 3 years.',
        timeframe: '2 to 3 months'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Social Insurance Number (SIN)',
        desc: 'Apply for your 9-digit SIN at Service Canada on your first week. Keep it confidential to protect against identity fraud. Required before starting work.',
        severity: 'critical'
      },
      {
        title: 'Winter Tires & Extreme Weather Preparedness',
        desc: 'In Quebec and mountainous BC highways, winter tires are legally mandatory by December 1. Sub-zero temperatures (-20°C to -30°C) require high-grade down parkas and insulated boots.',
        severity: 'high'
      },
      {
        title: 'Tipping Culture (15% to 20%)',
        desc: 'Tipping is socially compulsory in restaurants, bars, barbers, and delivery. Minimum expected tip is 15%–18% unless service was appalling.',
        severity: 'medium'
      },
      {
        title: 'Provincial Healthcare Waiting Period',
        desc: 'In some provinces (e.g. BC), there is a waiting period of up to 3 months before provincial medical coverage kicks in. You must buy private bridge insurance.',
        severity: 'high'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Realtor.ca', url: 'https://www.realtor.ca', note: 'Official real estate association portal with MLS listings' },
        { name: 'Rentals.ca', url: 'https://rentals.ca', note: 'Premier Canadian rental platform with map filters' },
        { name: 'PadMapper & Zumper', url: 'https://www.padmapper.com', note: 'Great for condo and apartment rentals' },
        { name: 'Kijiji', url: 'https://www.kijiji.ca', note: 'Popular for basement suites and room shares (exercise caution for scams)' }
      ],
      scamWarnings: [
        'Never e-Transfer first and last month’s rent before signing an official provincial standard lease and receiving keys.'
      ],
      keyConcepts: [
        { term: 'First and Last Month Rent', meaning: 'In Ontario and several provinces, landlords can legally ask for first and last month’s rent upon signing.' },
        { term: 'Equifax / TransUnion Credit Score', meaning: 'Without Canadian credit history, newcomers often need an employer confirmation letter, proof of savings, or a local co-signer.' }
      ]
    },
    healthcare: {
      type: 'Provincial Public Healthcare (OHIP in ON, MSP in BC, RAMQ in QC)',
      details: 'Funded by taxes; covers doctor visits and emergency hospital care. Does NOT automatically cover dental, eye care, or outpatient prescription drugs (most employers provide extended health benefits).',
      emergencyNumber: '911 for ambulance/ER. Telehealth / 811 for free non-emergency nursing triage.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Very accessible across all major metropolitan areas. Abundant plant-based options in Loblaws, Metro, Sobeys, Costco.',
      ethnicGrocers: 'T&T Supermarket (pan-Asian), Nations Fresh Foods, Subzi Mandi, Iqbal Foods (South Asian & Halal), Adonis (Middle Eastern).'
    },
    religiousGuide: {
      overview: 'Deeply multicultural. Major active places of worship for all world faiths in every major Canadian city.',
      placesOfWorship: 'BAPS Shri Swaminarayan Mandir Toronto, Baitul Islam Mosque, Gurdwara Nanaksar, Beth Tzedec Congregation, St. Michael’s Cathedral Basilica.'
    }
  },

  usa: {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    language: 'English',
    emergencyNumbers: {
      police: '911',
      ambulance: '911',
      fire: '911'
    },
    cities: ['New York', 'San Francisco', 'Seattle', 'Austin', 'Boston', 'Chicago', 'Los Angeles'],
    visaTypes: [
      {
        name: 'H-1B Specialty Occupation',
        desc: 'Employer-sponsored specialty visa subject to annual lottery (or cap-exempt institutions). Dual intent allowed.',
        timeframe: '2 to 6 months'
      },
      {
        name: 'L-1 Intra-Company Transferee',
        desc: 'For executives/managers (L-1A) or specialized knowledge employees (L-1B) transferring from a foreign office.',
        timeframe: '2 to 4 months'
      },
      {
        name: 'O-1 Extraordinary Ability',
        desc: 'For individuals with demonstrated sustained national or international acclaim in sciences, education, business, or arts.',
        timeframe: '2 to 3 months'
      },
      {
        name: 'F-1 OPT / STEM OPT',
        desc: '12 to 36 months work authorization following degree completion at an accredited US university.',
        timeframe: '2 to 3 months'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Social Security Number (SSN) & The Credit Score Dilemma',
        desc: 'Apply for your SSN at the Social Security Administration 10 days after arrival. You start with zero US credit score. Open a secured credit card on Day 1 to build credit history; without credit history, renting an apartment or financing a car is challenging.',
        severity: 'critical'
      },
      {
        title: 'U.S. Healthcare & Surprise Medical Bills',
        desc: 'There is NO universal healthcare. An emergency room visit or ambulance ride without in-network health insurance can easily cost $10,000 to $50,000+. Always carry your insurance card and verify "in-network" providers.',
        severity: 'critical'
      },
      {
        title: 'At-Will Employment & Visa Grace Periods',
        desc: 'Most US employment is at-will (either party can terminate without cause). If laid off on H-1B, you have a strict 60-day grace period to find a new sponsor, change status, or depart.',
        severity: 'high'
      },
      {
        title: 'Sales Tax & Tipping Norms',
        desc: 'Price tags in stores do NOT include state and local sales tax (typically +6% to +10% added at the register). Restaurant tipping is standard 18% to 22%.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Zillow', url: 'https://www.zillow.com', note: 'Largest nationwide home and rental portal' },
        { name: 'StreetEasy', url: 'https://streeteasy.com', note: 'Undisputed #1 portal for New York City' },
        { name: 'Apartments.com', url: 'https://www.apartments.com', note: 'Great for managed luxury apartment buildings with amenities' },
        { name: 'HotPads & PadMapper', url: 'https://hotpads.com', note: 'Excellent map-based searching' }
      ],
      scamWarnings: [
        'Watch out for Craigslist rental scams where the poster asks for security deposit via Zelle or wire transfer without meeting in person.',
        'In NYC, broker fees can be up to 15% of annual rent unless marked "No-Fee".'
      ],
      keyConcepts: [
        { term: '40x Rent Rule (NYC & Big Metros)', meaning: 'Landlords require your gross annual salary to be at least 40 times the monthly rent (e.g. $120k salary for a $3k/mo apartment).' },
        { term: 'Guarantor Services', meaning: 'If you lack credit history or salary multiplier, companies like TheGuarantors or Insurent act as cosigners for a ~1 month fee.' }
      ]
    },
    healthcare: {
      type: 'Employer-Sponsored Private Insurance (PPO, HDHP with HSA, HMO)',
      details: 'Understanding your plan: Premium (monthly cost), Deductible (amount you pay out of pocket before insurance pays), Copay (fixed fee per visit), Coinsurance (% you pay after deductible), and Out-of-Pocket Maximum (ceiling for the year).',
      urgentCareVsER: 'For minor cuts, flu, sprains: go to "Urgent Care" ($50-$150 copay). Go to the "Emergency Room (ER)" only for life-threatening emergencies ($500-$2,000+ copay).'
    },
    dietaryGuide: {
      vegetarianStatus: 'Plentiful options nationwide, especially in California, NY, Texas, Washington, Illinois.',
      supermarkets: 'Whole Foods Market, Trader Joe’s (fantastic vegetarian/vegan frozen foods), Sprouts, Safeway, Kroger, Costco.',
      ethnicGrocers: 'Patel Brothers (Indian), H Mart (Korean/Asian), 99 Ranch Market (Chinese), Mitsuwa (Japanese), Fiesta Mart (Latin).'
    },
    religiousGuide: {
      overview: 'Vast religious diversity with legal protections. Every world religion has major temples, centers, and communities across all 50 states.'
    }
  },

  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'AED',
    symbol: 'AED',
    language: 'Arabic (English is the primary business language)',
    emergencyNumbers: {
      police: '999',
      ambulance: '998',
      fire: '997'
    },
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    visaTypes: [
      {
        name: 'Standard Employment Residence Visa',
        desc: 'Sponsored by a mainland UAE company or Free Zone entity. Valid for 2 years, renewable. Includes medical fitness test and Emirates ID issuance.',
        timeframe: '2 to 3 weeks'
      },
      {
        name: 'Golden Visa (10 Years)',
        desc: 'Long-term residency for investors, entrepreneurs, specialized talents, high earners (AED 30,000+/mo salary), researchers, and outstanding graduates. No sponsor required.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Green Visa (5 Years)',
        desc: 'For freelancers, self-employed persons, and skilled employees without employer sponsorship.',
        timeframe: '3 to 5 weeks'
      },
      {
        name: 'Remote Work / Digital Nomad Visa',
        desc: '1-year renewable visa for individuals employed outside the UAE earning $3,500+/month.',
        timeframe: '2 to 4 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Banned Medications & Prescriptions (Narcotics / Psychotropics)',
        desc: 'The UAE has zero tolerance for unapproved controlled drugs (including codeine, tramadol, certain sleeping pills, ADHD stimulants like Adderall). You must obtain prior online permit from the Ministry of Health and Prevention (MOHAP) and carry signed doctor’s prescriptions, or face arrest.',
        severity: 'critical'
      },
      {
        title: 'Cybercrime Laws & Privacy Violations',
        desc: 'Taking photos or videos of individuals without their explicit consent and posting them online is a serious crime punished by heavy fines and deportation. Vulgar language, swearing on WhatsApp, or defamation on social media carry heavy penalties.',
        severity: 'critical'
      },
      {
        title: 'Ejari Registration & Cheque Payment Culture',
        desc: 'Rental contracts in Dubai must be registered with Ejari (Tawtheeq in Abu Dhabi). Rent is traditionally paid via 1, 2, 4, or 6 post-dated paper cheques. Ensure your account has sufficient funds on the due date.',
        severity: 'high'
      },
      {
        title: 'Public Decorum & Ramadan Etiquette',
        desc: 'Modest dress in official government buildings and malls is respected. During the holy month of Ramadan, be courteous during fasting hours (eating/drinking in public is restricted or discreet).',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Property Finder', url: 'https://www.propertyfinder.ae', note: 'Top portal in the UAE with verified listings' },
        { name: 'Bayut', url: 'https://www.bayut.com', note: 'Popular portal with extensive floor plans and neighborhood guides' },
        { name: 'Dubizzle', url: 'https://dubizzle.com', note: 'Largest classifieds for rooms, flats, and secondhand furniture' }
      ],
      scamWarnings: [
        'Always verify the broker’s RERA broker card number in Dubai before signing or handing over cheques.',
        'Cheques should always be written in the landlord’s name as shown on the Title Deed, NEVER in the real estate agent’s name.'
      ],
      keyConcepts: [
        { term: 'Ejari', meaning: 'The mandatory tenancy registration system in Dubai; required to connect DEWA (electricity/water) and sponsor family visas.' },
        { term: 'DEWA Deposit', meaning: 'Dubai Electricity & Water Authority requires an upfront refundable deposit (AED 2,000 for apartment, AED 4,000 for villa).' },
        { term: 'Chiller Free', meaning: 'Air conditioning charges are covered by the landlord, which saves hundreds of dirhams during hot summer months.' }
      ]
    },
    healthcare: {
      type: 'Mandatory Health Insurance',
      details: 'In Dubai and Abu Dhabi, employers are legally required to provide medical insurance for their employees. Family visa sponsors must buy medical insurance for their dependents.',
      facilities: 'World-class private healthcare infrastructure (Mediclinic, Aster, King’s College Hospital London, Cleveland Clinic Abu Dhabi).'
    },
    dietaryGuide: {
      vegetarianStatus: 'Exceptional. Dubai and UAE have thousands of pure vegetarian and vegan restaurants due to the massive Indian and international expat population.',
      halalOverview: 'All meat served in mainstream restaurants and supermarkets is 100% Halal by law.',
      porkSections: 'Pork products are strictly segregated in designated "Non-Muslim Sections" in supermarkets like Spinneys, Waitrose, and Choithrams.',
      ethnicGrocers: 'LuLu Hypermarket, Carrefour, Al Maya, Adil Supermarket (Indian spices and pulses).'
    },
    religiousGuide: {
      overview: 'Islam is the official religion, but the UAE champions tolerance with dedicated worship centers for all faiths.',
      placesOfWorship: 'Grand Mosque Abu Dhabi, Hindu Mandir Abu Dhabi (BAPS Shri Swaminarayan Mandir), Hindu Temple Dubai (Jebel Ali), Guru Nanak Darbar Gurdwara (Jebel Ali), St. Mary’s Catholic Church, Abrahamic Family House.'
    }
  },

  singapore: {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    symbol: 'S$',
    language: 'English (primary), Mandarin, Malay, Tamil',
    emergencyNumbers: {
      police: '999',
      ambulance: '995'
    },
    cities: ['Singapore'],
    visaTypes: [
      {
        name: 'Employment Pass (EP)',
        desc: 'For foreign professionals earning at least S$5,000/month (higher in financial services), vetted under the COMPASS points framework.',
        timeframe: '3 to 6 weeks'
      },
      {
        name: 'ONE Pass (Overseas Networks & Expertise Pass)',
        desc: 'Top-tier 5-year personalized work pass for talent earning S$30,000+/month with unrestricted work privileges.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'S Pass',
        desc: 'For mid-level skilled staff earning at least S$3,150/month, subject to employer quota and levies.',
        timeframe: '3 to 5 weeks'
      },
      {
        name: 'Dependant’s Pass (DP)',
        desc: 'For spouses and unmarried children under 21 of EP holders earning S$6,000+/month.',
        timeframe: '3 to 4 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Zero Tolerance Drug Laws',
        desc: 'Singapore has some of the strictest narcotics laws on earth, including mandatory capital punishment or heavy caning and prison for trafficking or possession.',
        severity: 'critical'
      },
      {
        title: 'Strict Public Fines (Chewing Gum, Littering, Jaywalking)',
        desc: 'Selling or importing chewing gum is banned. Littering carries fines from S$300 to S$1,000+ plus Corrective Work Orders. Eating or drinking on the MRT subway incurs a S$500 fine.',
        severity: 'high'
      },
      {
        title: 'HDB Subletting Rules for Expats',
        desc: 'Subletting public housing (HDB) units has strict foreigner quotas (Non-Citizen quota) and minimum 6-month lease duration. Short-term rentals like Airbnb are illegal.',
        severity: 'high'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'PropertyGuru', url: 'https://www.propertyguru.com.sg', note: 'The dominant portal with almost 90% market coverage' },
        { name: '99.co', url: 'https://www.99.co', note: 'Clean UI with MRT commute-time filtering' }
      ],
      scamWarnings: [
        'Always check the Council for Estate Agencies (CEA) public register to verify your property agent’s license before paying any holding deposit.'
      ],
      keyConcepts: [
        { term: 'Condo vs HDB', meaning: 'Condos have pools, security, gyms, and BBQ pits but cost 40-70% more than public HDB flats.' },
        { term: 'Aircon Servicing Clause', meaning: 'Tenants are legally obliged to have all aircon units professionally serviced every 3 months and retain receipts for the landlord.' },
        { term: 'Diplomatic Clause', meaning: 'Allows tenants on 2-year leases to terminate after 12 months with 2 months notice if posted overseas or laid off.' }
      ]
    },
    healthcare: {
      type: 'Private Expat Healthcare / International Insurance',
      details: 'Expats on EP/DP do NOT qualify for subsidized public healthcare (CPF Medisave is for citizens/PRs only). You must ensure your employer provides comprehensive corporate medical insurance or buy private international health coverage.',
      facilities: 'Exceptional standards at Mount Elizabeth, Gleneagles, Raffles Hospital, Singapore General Hospital.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Superb. Hundreds of Buddhist, Indian vegetarian, and modern plant-based eateries across the island.',
      hawkerCenters: 'Every food center has dedicated vegetarian/halal stalls. Look for "Vegetarian" (素食) and official MUIS Halal certified signage.',
      supermarkets: 'FairPrice Finest, Cold Storage, Little India grocery stores (Mustafa Centre is open late and stocks everything imaginable!).'
    },
    religiousGuide: {
      overview: 'Harmonious multicultural society with deep respect for Buddhist, Taoist, Muslim, Hindu, Christian, and Sikh heritage.',
      placesOfWorship: 'Sri Mariamman Temple (Chinatown), Sultan Mosque (Kampong Glam), Buddha Tooth Relic Temple, St. Andrew’s Cathedral, Central Sikh Temple.'
    }
  },

  australia: {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    symbol: 'A$',
    language: 'English',
    emergencyNumbers: {
      police: '000',
      ambulance: '000'
    },
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    visaTypes: [
      {
        name: 'Temporary Skill Shortage Visa (Subclass 482)',
        desc: 'Employer-sponsored visa allowing skilled workers to address labor shortages, with pathways to PR via subclass 186.',
        timeframe: '1 to 3 months'
      },
      {
        name: 'Skilled Independent Visa (Subclass 189 / 190)',
        desc: 'Points-based permanent residency visa for skilled workers not sponsored by an employer.',
        timeframe: '6 to 12 months'
      },
      {
        name: 'Working Holiday Visa (Subclass 417 / 462)',
        desc: 'For young adults aged 18 to 30/35 to travel and work in Australia for 12 months.',
        timeframe: '2 to 4 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Extremely Strict Biosecurity & Border Inspection',
        desc: 'Australia has the world’s strictest biosecurity laws. You MUST declare all food items, seeds, wooden items, and animal products on your incoming passenger card. Failing to declare incurs on-the-spot fines of up to A$3,750 or visa cancellation.',
        severity: 'critical'
      },
      {
        title: 'Tax File Number (TFN) Application',
        desc: 'Apply for a TFN through the Australian Taxation Office (ATO) immediately upon arrival. Without a TFN, your employer must withhold tax at the highest marginal rate (47%).',
        severity: 'high'
      },
      {
        title: 'Sun Protection & Water Safety',
        desc: 'Australia has the highest skin cancer rates globally due to high UV index. Always use SPF 50+ sunscreen, wear hats, and swim strictly between the red-and-yellow flags on patrolled surf beaches to avoid dangerous rip currents.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Realestate.com.au', url: 'https://www.realestate.com.au', note: 'Australia’s #1 property portal' },
        { name: 'Domain', url: 'https://www.domain.com.au', note: 'Second largest property and rental platform' },
        { name: 'Flatmates.com.au', url: 'https://flatmates.com.au', note: 'The premier platform for room rentals and share-houses' }
      ],
      scamWarnings: [
        'Never transfer rental bond or rent upfront via unverified bank transfers. Rental bonds must be lodged with the state tenancy bond authority (e.g. NSW Fair Trading / RTBA).'
      ],
      keyConcepts: [
        { term: '100 Point ID Check', meaning: 'Rigorous reference checks require passport, driver license, bank statements, and payslips totaling 100 points.' },
        { term: 'Rent Quoted Weekly', meaning: 'Australian rental prices are almost always advertised per week (e.g., $650/week, which is ~ $2,816/month!).' }
      ]
    },
    healthcare: {
      type: 'Medicare vs Overseas Visitor Health Cover (OVHC)',
      details: 'Most temporary visa holders (subclass 482, etc.) are NOT eligible for Medicare and must hold mandatory OVHC (Bupa, Medibank, Allianz Care) as a visa condition (Condition 8501). PR holders get immediate Medicare access.',
      emergencyNumber: 'Dial 000 for emergency ambulance and police.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Outstanding. Australia is a world hub for specialty coffee, organic produce, and plant-based dining.',
      supermarkets: 'Woolworths ("Woolies"), Coles, ALDI, Harris Farm Markets (gourmet fresh produce).',
      ethnicGrocers: 'Asian supermarkets in every suburb, Indian Spice Hubs (Udaya, Spice World), Middle Eastern butchers.'
    },
    religiousGuide: {
      overview: 'Vibrant, open, and multicultural society with active places of worship for all communities across all states.'
    }
  },

  japan: {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    currency: 'JPY',
    symbol: '¥',
    language: 'Japanese',
    emergencyNumbers: {
      police: '110',
      ambulance: '119'
    },
    cities: ['Tokyo', 'Osaka', 'Kyoto', 'Fukuoka', 'Yokohama', 'Nagoya'],
    visaTypes: [
      {
        name: 'Highly Skilled Professional (HSP)',
        desc: 'Points-based visa offering preferential treatment, fast-track to Permanent Residency in as little as 1 to 3 years, and spouse full-time work rights.',
        timeframe: '1 to 2 months'
      },
      {
        name: 'Engineer / Specialist in Humanities / International Services',
        desc: 'Standard working visa sponsored by a Japanese company or registered entity.',
        timeframe: '1 to 3 months'
      },
      {
        name: 'Digital Nomad Visa',
        desc: 'Up to 6-month stay for remote workers earning ¥10M+ (~$65,000 USD) annually from designated visa-exempt countries.',
        timeframe: '4 to 6 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Banned Medications & Stimulants',
        desc: 'Medications containing pseudoephedrine (Sudafed, Vicks inhalers), codeine, and ADHD drugs (Adderall) are strictly banned in Japan and considered illegal narcotics. Bringing them into Japan without prior approval (Yakkan Shoumei) results in arrest and detention.',
        severity: 'critical'
      },
      {
        title: 'Meticulous Trash Sorting (Gomi Bunbetsu)',
        desc: 'Trash sorting is extraordinarily detailed: Burnable (combustible), Non-burnable, PET bottles (labels and caps removed and sorted separately!), Cans, Glass, and Cardboard on designated days of the week in transparent municipal bags.',
        severity: 'high'
      },
      {
        title: 'Resident Registration & My Number Card',
        desc: 'Within 14 days of moving into permanent accommodation, register at the local City/Ward Office (Kuyakusho/Shiyakusho) to print your address on your Residence Card (Zairyu Card) and enroll in National Health Insurance / Pension.',
        severity: 'critical'
      },
      {
        title: 'Train Etiquette & Public Quiet',
        desc: 'Talking on mobile phones on trains is strictly prohibited ("Manner Mode"). Avoid speaking loudly or eating on local commuter trains.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'SUUMO', url: 'https://suumo.jp', note: 'Largest Japanese rental portal (mainly Japanese)' },
        { name: 'GaijinPot Apartments', url: 'https://apartments.gaijinpot.com', note: 'Top English portal where all listings accept foreign residents' },
        { name: 'Real Estate Japan', url: 'https://realestate.co.jp', note: 'English language listings with bilingual agent support' }
      ],
      scamWarnings: [
        'Be prepared for "Gaijin-rejection" from traditional landlords who decline non-Japanese speakers. Using expat-focused guarantor agencies (GTN - Global Trust Networks) solves this.'
      ],
      keyConcepts: [
        { term: 'Reikin (Key Money / Gift Money)', meaning: 'Non-refundable gift money paid to the landlord, typically 1 to 2 months rent.' },
        { term: 'Shikikin (Security Deposit)', meaning: 'Refundable deposit, usually 1 to 2 months rent.' },
        { term: 'Guarantor Company (Hoshonin)', meaning: 'Most apartments require an approved guarantor company (fee: 50%-100% of 1 month rent).' },
        { term: 'Hanko / Inkan', meaning: 'Personal name stamp seal, traditionally required for bank accounts and official leases (signatures are becoming more accepted).' }
      ]
    },
    healthcare: {
      type: 'National Health Insurance (NHI) or Shakai Hoken',
      details: 'Universal healthcare where residents pay 30% of medical and dental expenses out-of-pocket, with high-cost medical expense caps for expensive treatments. High medical quality with English clinics available in major cities (e.g., St. Luke’s International Hospital in Tokyo).',
      emergencyNumber: '119 for ambulance and fire.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Requires vigilance! Many seemingly vegetarian dishes (ramen, soba, miso soup, boiled vegetables) contain "Dashi" (fish and bonito kelp broth).',
      essentialPhrasesJapanese: [
        { jp: 'Nikue ya Sakana wo taberaremasen', en: 'I cannot eat meat or fish' },
        { jp: 'Dashi mo dame desu', en: 'Fish broth (dashi) is also not allowed' },
        { jp: 'Bejitarian / Bīgan muke no menyū wa arimasu ka?', en: 'Do you have a vegetarian/vegan menu?' }
      ],
      apps: 'Download HappyCow app in Japan — essential for finding dedicated plant-based and vegan restaurants.',
      halalOverview: 'Japan Halal Association inspects increasing numbers of certified restaurants in Tokyo and Osaka.'
    },
    religiousGuide: {
      overview: 'Shinto and Buddhism form the cultural backdrop, with complete religious freedom.',
      placesOfWorship: 'Tokyo Camii (magnificent Ottoman-style mosque in Shibuya), Yokohama Hindu Temple, Kobe Muslim Mosque, English Catholic & Christian fellowships.'
    }
  }
};
