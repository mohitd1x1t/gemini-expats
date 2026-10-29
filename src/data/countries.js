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
  },

  brazil: {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    currency: 'BRL',
    symbol: 'R$',
    language: 'Portuguese',
    emergencyNumbers: {
      police: '190',
      ambulance: '192',
      fire: '193'
    },
    cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Curitiba', 'Florianópolis', 'Belo Horizonte'],
    visaTypes: [
      {
        name: 'Digital Nomad Visa (VITEM XIV)',
        desc: '1-year renewable residence visa for remote workers employed by companies outside Brazil. Requires proof of monthly remote income of at least US$ 1,500 (or available bank funds of US$ 18,000). Highly popular among expats.',
        timeframe: '3 to 6 weeks'
      },
      {
        name: 'Work Visa (VITEM V)',
        desc: 'For foreigners with an employment contract with a Brazilian entity, pre-approved by the Ministry of Justice and Public Security (Coordenação-Geral de Imigração Laboral).',
        timeframe: '6 to 12 weeks'
      },
      {
        name: 'Investor Visa (VIPER / VITEM IX)',
        desc: 'Permanent residency pathway for individual investors investing in real estate (minimum R$ 700k in North/Northeast or R$ 1M in South/Southeast) or in a new Brazilian business enterprise.',
        timeframe: '8 to 16 weeks'
      },
      {
        name: 'Family Reunion Visa (VITEM XI)',
        desc: 'For spouse, common-law partner (união estável), children, or dependent parents of a Brazilian citizen or valid residence permit holder.',
        timeframe: '4 to 8 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'CPF (Cadastro de Pessoas Físicas) is Essential',
        desc: 'The CPF (tax ID number) is mandatory for practically everything in Brazil: buying a local SIM card, renting an apartment, ordering on iFood, shopping online, opening a bank account, or using the PIX payment system. Apply for your CPF at a Brazilian consulate before departure or at the Receita Federal immediately on arrival.',
        severity: 'critical'
      },
      {
        title: 'Federal Police Registration (CRNM) within 90 Days',
        desc: 'All visa holders must schedule an appointment and register in person with the Federal Police (Polícia Federal) within 90 days of arriving in Brazil to receive their Carteira de Registro Nacional Migratório (CRNM / foreign ID card). Heavy daily fines apply for late registration.',
        severity: 'critical'
      },
      {
        title: 'Street Safety & Phone Snatching Awareness',
        desc: 'In major metropolitan hubs like São Paulo (especially Centro, Paulista, Pinheiros) and Rio de Janeiro, avoid using your mobile phone openly on sidewalks or near road traffic due to bicycle/motorbike grab-and-run thefts. Use rideshares (Uber/99) at night, keep backup digital copies of documents, and carry a secondary debit card.',
        severity: 'high'
      },
      {
        title: 'Voltage & Plug Type N Peculiarity',
        desc: 'Brazil uses the unique three-round-pin Type N socket (IEC 60906-1). Crucially, voltage is NOT standardized nationally: São Paulo and Rio de Janeiro are primarily 110V/127V, whereas Brasília, Curitiba, and Florianópolis are 220V! Always check the outlet label before plugging high-wattage equipment.',
        severity: 'high'
      },
      {
        title: 'PIX Payment Dominance',
        desc: 'Brazil has revolutionized payments through PIX (instant QR/key transfers directly between bank accounts). Almost every vendor, from beach stalls to supermarkets, prefers PIX over cash. Opening a local digital bank account (Nubank, Inter) unlocks PIX access.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'QuintoAndar', url: 'https://www.quintoandar.com.br', note: 'The #1 modern rental platform in Brazil. Eliminates the traditional need for a local guarantor (fiador) and operates fully digitally.' },
        { name: 'Zap Imóveis', url: 'https://www.zapimoveis.com.br', note: 'Largest classifieds portal for apartments and houses across São Paulo and all Brazilian states.' },
        { name: 'Viva Real', url: 'https://www.vivareal.com.br', note: 'Massive database of verified rental properties with neighborhood price maps.' },
        { name: 'OLX Brasil', url: 'https://www.olx.com.br', note: 'Popular direct-owner rental classifieds (exercise caution and avoid wire deposits without in-person inspection).' }
      ],
      scamWarnings: [
        'Never make a deposit or advance PIX payment before physically viewing the property and verifying the owner\'s identity with official registration (matrícula do imóvel).',
        'Traditional Brazilian rental contracts often ask for a "Fiador" (a Brazilian guarantor who owns real estate in the same city) or expensive rental insurance ("Seguro Fiança"). Using QuintoAndar avoids this obstacle.'
      ],
      keyConcepts: [
        { term: 'Aluguel (Base Rent)', meaning: 'Base rental amount paid to the property owner.' },
        { term: 'Condomínio', meaning: 'Monthly building maintenance, security, and amenity charge (pools, gym, doorman/portaria 24h); billed separately from rent and can add R$ 500 to R$ 2,500/month.' },
        { term: 'IPTU', meaning: 'Municipal urban property tax, almost always passed on as the tenant\'s responsibility in Brazil.' },
        { term: 'Cartório & Firma Reconhecida', meaning: 'Notary offices where lease contracts must be officially notarized and verified.' },
        { term: 'Portaria 24 Horas', meaning: '24/7 staffed reception/doorman building entrance, highly valued for residential security and package deliveries.' }
      ]
    },
    healthcare: {
      type: 'Constitutional Universal Public Healthcare (SUS) & Private Insurance',
      details: 'Brazil provides free healthcare to all persons on Brazilian soil (including foreign tourists and expats) through the SUS (Sistema Único de Saúde). However, public facilities frequently experience long queues and administrative delays. Expats almost universally purchase private health plans (Amil, Bradesco Saúde, SulAmérica, Unimed, or Porto Seguro) for immediate access to top hospitals like Albert Einstein and Sírio-Libanês in São Paulo.',
      englishFriendlyInsurers: ['Amil', 'Bradesco Saúde', 'SulAmérica', 'Porto Seguro Saúde'],
      generalPractitioner: 'Private clinics and telemedicine apps allow immediate appointment booking. For emergencies, dial 192 (SAMU - Serviço de Atendimento Móvel de Urgência) or go to a private hospital Emergency Room (Pronto-Socorro).',
      prescriptions: 'Pharmacies (Drogasil, Droga Raia) are on almost every street corner in São Paulo. Generic medications (Medicamentos Genéricos) are strictly regulated and highly affordable. Antibiotics and controlled medications require a doctor\'s dual carbon-copy prescription (receita controlada).'
    },
    dietaryGuide: {
      vegetarianStatus: 'Surprising variety! While Brazilian food culture is famous for churrasco, São Paulo is one of the world\'s top culinary capitals with thousands of vegetarian, vegan, Japanese, Lebanese, and Italian dining options.',
      restaurantesPorQuilo: 'Look for "Restaurante por Quilo" (pay-by-weight buffet restaurants). They are ubiquitous at lunch, budget-friendly, and offer dozens of fresh salads, vegetables, rice, beans, manioc, and fruit where vegetarians select exactly what they want.',
      hiddenIngredientsPortuguese: [
        { pt: 'Banha de porco / Gordura de porco', en: 'Pork lard (frequently used in traditional Brazilian black beans / feijoada)' },
        { pt: 'Caldo de galinha / Caldo de carne', en: 'Chicken / Beef bouillon cube' },
        { pt: 'Bacon / Toucinho', en: 'Bacon bits (often added to cooked beans and farofa; always ask "O feijão tem bacon?")' },
        { pt: 'Gelatina', en: 'Gelatin' },
        { pt: 'Camarão seco', en: 'Dried shrimp (often added to northern Brazilian dishes like vatapá and acarajé)' }
      ],
      supermarkets: 'Pão de Açúcar (premium with organic/vegan sections), St. Marche, Carrefour, Hirota Food Supermercados (great Asian selection).',
      ethnicGrocers: 'Bairro da Liberdade in São Paulo has the largest Japanese/Asian diaspora outside Japan, brimming with specialty tofu, sauces, and produce. Zona Cerealista in São Paulo is a giant historic market for bulk nuts, grains, pulses, and spices at warehouse prices.'
    },
    religiousGuide: {
      overview: 'Brazil is a constitutionally secular country with immense religious diversity and constitutional protection of freedom of worship.',
      placesOfWorship: 'Historic Catholic cathedrals (Catedral da Sé), thriving Evangelical churches, Jewish synagogues and cultural centers (notably in Higienópolis and Bom Retiro in São Paulo), Mosques (Mesquita Brasil in Cambuci, São Paulo - the oldest in Latin America), Buddhist temples (Zu Lai Temple in Cotia/SP - largest in South America), and Afro-Brazilian spiritual centers (Candomblé and Umbanda terreiros).',
      hinduCommunity: 'Active Hindu diaspora centers in São Paulo include ISKCON São Paulo (Templo Hare Krishna na Rua Juquis, Indianópolis), Indian Cultural Centre (affiliated with the Indian Consulate), and regular Diwali celebrations organized by the Indian Association of São Paulo.'
    }
  },

  thailand: {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    currency: 'THB',
    symbol: '฿',
    language: 'Thai',
    emergencyNumbers: {
      police: '191',
      touristPolice: '1155',
      ambulance: '1669',
      fire: '199'
    },
    cities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Koh Samui', 'Hua Hin'],
    visaTypes: [
      {
        name: 'Destination Thailand Visa (DTV)',
        desc: 'Groundbreaking 5-year multi-entry digital nomad & cultural visa launched in 2024. Grants 180 days stay per entry (extendable once in Thailand for another 180 days, total up to 360 days/year). Requires 500,000 THB (~$15,000 USD) bank balance and proof of remote employment or freelance contracts.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Long-Term Resident (LTR) Visa',
        desc: '10-year residency visa for Wealthy Global Citizens, Wealthy Pensioners, and Remote Professionals (Work-from-Thailand) earning ≥ $80k/yr. Includes fast-track digital work permit and a flat 17% personal income tax cap.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Non-Immigrant B (Business & Employment)',
        desc: 'Traditional employer-sponsored work visa paired with a physical or Digital Work Permit. Requires ratio of 4 Thai staff per foreign hire unless BOI (Board of Investment) company approved.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Non-Immigrant O (Dependent & Retirement)',
        desc: 'For trailing spouses/dependents of Non-B/LTR holders, or retirees aged 50+ with 800,000 THB bank deposit in a Thai bank or 65,000 THB/mo pension.',
        timeframe: '2 to 4 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Lèse-Majesté (Criminal Code Section 112)',
        desc: 'Defaming, insulting, or threatening the King, Queen, Heir-Apparent, or Regent carries 3 to 15 years imprisonment per count. This strictly applies to social media posts, private chats, defacing currency with royal images, and public conversations.',
        severity: 'critical'
      },
      {
        title: 'TM30 Accommodation Notification (Mandatory within 24h)',
        desc: 'Thai immigration law requires property owners, hotels, or tenants to report foreign guests to the Immigration Bureau within 24 hours of arrival. Without a validated TM30 receipt, you cannot renew visas, apply for 90-day reporting, or get a driving license.',
        severity: 'critical'
      },
      {
        title: '90-Day Reporting (TM47)',
        desc: 'Foreign nationals remaining in Thailand for more than 90 consecutive days must report their residential address to the Immigration Bureau every 90 days. Failure to report carries fines from 2,000 to 5,000 THB and risks arrest during police checks.',
        severity: 'high'
      },
      {
        title: 'Vaping & E-Cigarettes Complete Ban',
        desc: 'Importing, buying, or possessing e-cigarettes and vaping liquids is strictly illegal in Thailand. Penalties include heavy fines up to 500,000 THB, confiscation, and up to 5 years imprisonment or deportation.',
        severity: 'critical'
      },
      {
        title: 'Overstay Fines & Entry Bans',
        desc: 'Overstaying a visa incurs a fine of 500 THB/day (up to 20,000 THB). Overstaying by more than 90 days results in an automatic 1-year entry ban upon departure; over 1 year incurs a 3-year ban.',
        severity: 'high'
      },
      {
        title: 'Motorbike License & Helmet Laws',
        desc: 'Riding a scooter without a helmet carries police checkpoint fines. Operating motorbikes without a valid International Driving Permit (with motorcycle endorsement) or Thai driving license invalidates all travel and health insurance claims.',
        severity: 'high'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'DDproperty', url: 'https://www.ddproperty.com', note: 'Thailand’s largest property portal for condos, apartments, and townhouses.' },
        { name: 'Hipflat', url: 'https://www.hipflat.co.th', note: 'Great map-based visual pricing, neighborhood transit walkability, and BTS/MRT proximity.' },
        { name: 'FazWaz Thailand', url: 'https://www.fazwaz.com', note: 'Curated verified listings with strong English customer service in Bangkok, Phuket, and Chiang Mai.' },
        { name: 'Living Insider', url: 'https://www.livinginsider.com', note: 'Popular direct-owner and agent portal with real-time room availability.' }
      ],
      scamWarnings: [
        'Never wire rental deposits before inspecting the unit in person and checking the condo juristic office.',
        'Verify the landlord\'s Chanote (title deed) or confirm the agent holds power of attorney from the registered owner.',
        'Check utility submetering in the lease: standard government MEA/PEA rates are ~4 to 5 THB/unit. Landlords inflating electricity to 7 to 10 THB/unit will double your AC cooling bills!'
      ],
      keyConcepts: [
        { term: 'Chanote (Nor Sor 4 Jor)', meaning: 'True freehold land title deed in Thailand.' },
        { term: 'Juristic Office', meaning: 'The on-site condominium management team managing security, parcel collection, and TM30 registration receipts.' },
        { term: 'Security Deposit', meaning: 'Standard practice is 2 months security deposit + 1 month advance rent upon lease signing.' },
        { term: 'BTS / MRT Proximity', meaning: 'Skytrain and subway stations in Bangkok dictate rent and traffic sanity; staying within 500m of a station saves 1-2 hours of daily gridlock.' }
      ]
    },
    healthcare: {
      type: 'Dual Public/Private with World-Renowned Medical Tourism Hubs',
      details: 'Thailand boasts globally acclaimed private hospitals with zero wait times, JCI accreditations, and multi-lingual concierge medical desks. Expat health insurance (Luma, AXA Thailand, Cigna Global, Allianz Ayudhya) is essential.',
      englishFriendlyInsurers: ['Luma Health', 'AXA Thailand', 'Cigna Global Thailand', 'Allianz Ayudhya', 'Bupa Thailand'],
      generalPractitioner: 'Visit private hospital outpatient departments (OPDs) directly for immediate same-day specialist consultations. Top hospitals include Bumrungrad International, Bangkok Hospital, Samitivej Sukhumvit, and BNH Hospital.',
      prescriptions: 'Pharmacies (Boots, Watsons, and local independent chemists) are ubiquitous. Many standard prescription medications can be dispensed directly over the counter by licensed pharmacists without doctor scripts, except narcotics and psychotropics.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Culinary wonderland with strong Buddhist vegetarian traditions. Street food requires attention to fish sauce and oyster sauce.',
      jayLabel: 'Look for the bright yellow flag or triangle with the red Thai character "เจ" (Jay). It denotes strict Buddhist vegan cuisine (no meat, eggs, dairy, garlic, or onions).',
      hiddenIngredientsThai: [
        { th: 'น้ำปลา (Nam Pla)', en: 'Fish sauce (present in almost every Thai soup, curry, pad thai, and salad)' },
        { th: 'กะปิ (Kapi)', en: 'Fermented shrimp paste (essential base in curry pastes like Green and Red curry)' },
        { th: 'น้ำมันหอย (Nam Man Hoi)', en: 'Oyster sauce (standard in stir-fried vegetables)' },
        { th: 'หมูกรอบ / หมูสับ (Moo Krob / Moo Sab)', en: 'Crispy pork / Minced pork (often mixed into fried rice and noodle broths)' },
        { th: 'ผงชูรส / ซุปก้อน (Knorr Pork / Chicken cube)', en: 'Meat bouillon base used in vegetable noodle broths' }
      ],
      phrases: [
        { th: 'กินเจ (Gin Jay)', en: 'I eat strict vegan / Jay' },
        { th: 'มังสวิรัติ (Mangsawirat)', en: 'Vegetarian (may contain egg/dairy)' },
        { th: 'ไม่ใส่น้ำปลา (Mai sai nam pla)', en: 'Do not put fish sauce' },
        { th: 'ไม่ใส่เนื้อสัตว์ (Mai sai nuea sat)', en: 'Do not put any meat' }
      ],
      supermarkets: 'Gourmet Market (Siam Paragon/EmQuartier - top tier international & organic), Villa Market (classic expat grocery staple), Tops Supermarket, Big C Supercenter.'
    },
    religiousGuide: {
      overview: 'Predominantly Theravada Buddhist (~93%). Religion is deeply integrated into daily life, architecture, and respect for the monarchy and monks.',
      templeEtiquette: 'Remove shoes before entering temple wats; cover shoulders and knees. Never point your feet directly at Buddha images or monks. Women must never touch or hand objects directly to Buddhist monks.',
      placesOfWorship: 'Historic Buddhist temples (Wat Phra Kaew, Wat Pho, Wat Arun), Catholic churches (Holy Redeemer Church in Ruamrudee, Assumption Cathedral), Protestant fellowships, and Sunni/Shia Mosques (Haroon Mosque in Bang Rak).',
      hinduCommunity: 'Deeply revered in Thai culture! Sri Maha Mariamman Temple (Wat Khaek) in Silom is a vibrant center for Tamil and Indian diaspora. The Erawan Shrine (Phra Phrom / Brahma) in Rajprasong is visited by millions. Dev Mandir in Phra Nakhon and Gurudwara Siri Guru Singh Sabha in Phahurat (Little India) host weekly langar.'
    }
  },

  vietnam: {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    currency: 'VND',
    symbol: '₫',
    language: 'Vietnamese',
    emergencyNumbers: {
      police: '113',
      ambulance: '115',
      fire: '114'
    },
    cities: ['Ho Chi Minh City', 'Da Nang', 'Hanoi', 'Nha Trang', 'Hoi An', 'Vung Tau'],
    visaTypes: [
      {
        name: 'Temporary Residence Card (TRC - Thẻ Tạm Trú)',
        desc: 'Issued for 2 to 3 years to foreign workers holding a valid Vietnam Work Permit (LD1/LD2) or business investors (DT). Grants multi-entry residency, rights to sign long-term residential leases, and open local bank accounts without border runs.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Work Permit (Giấy Phép Lao Động)',
        desc: 'Mandatory for direct local employment. Requires recognized bachelor’s degree, 3 years certified foreign work experience in the role, criminal background check (police certificate), and certified health check in Vietnam.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: '90-Day E-Visa (Multiple / Single Entry)',
        desc: 'Convenient tourist and remote worker visa applied directly via the official national portal (evisa.xuatnhapcanh.gov.vn). Expats frequently perform border runs via Moc Bai (Cambodia) or Laos to reset their 90-day status.',
        timeframe: '3 to 5 business days'
      },
      {
        name: 'Business Visa (DN1 / DN2)',
        desc: 'For entering Vietnam to attend technical meetings, conferences, or work with Vietnamese corporate partners, sponsored by a Vietnamese business entity.',
        timeframe: '1 to 2 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Temporary Residence Registration (Khai Báo Tạm Trú)',
        desc: 'Within 12 hours of move-in, your landlord or hotel MUST register your stay with the local Ward Police (Công an Phường) online. Without this police confirmation slip (Giấy Xác Nhận Tạm Trú), you cannot apply for a TRC, renew visas, or extend contracts.',
        severity: 'critical'
      },
      {
        title: 'Zero Tolerance Drunk Driving (Decree 100/2019)',
        desc: 'Vietnam enforces a strict 0.00% blood alcohol concentration (BAC) limit for operating motorbikes and cars. Police breathalyzer checkpoints impose heavy fines (up to 40,000,000 VND) and driver license suspensions up to 24 months.',
        severity: 'critical'
      },
      {
        title: 'Drone / UAS Flight Ban Without Defense Permit',
        desc: 'Operating any recreational or commercial drone without an advance flight permit issued by the Ministry of National Defense (Decree 36/2008) is illegal. Customs at Tan Son Nhat or Noi Bai airport will confiscate drones at luggage inspection.',
        severity: 'high'
      },
      {
        title: 'SIM Card Passport Registration',
        desc: 'Decree 49 mandates biometric and passport registration for all SIM cards (Viettel, Vinaphone, Mobifone). Buying pre-activated tourist SIMs from street hawkers risks sudden suspension within 30 days.',
        severity: 'medium'
      },
      {
        title: 'Pedestrian Street Crossing Etiquette',
        desc: 'Motorbike traffic in Saigon and Hanoi is continuous. Cross slowly, calmly, and predictably at a steady pace without stopping abruptly or running backwards so motorbike drivers can navigate around you.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Batdongsan.com.vn', url: 'https://batdongsan.com.vn', note: 'Largest real estate classifieds portal in Vietnam across all major provinces.' },
        { name: 'Dot Property Vietnam', url: 'https://www.dotproperty.com.vn', note: 'Expat-friendly condo listings in HCMC (District 2 Thao Dien, Binh Thanh) and Da Nang.' },
        { name: 'Rentapartments.vn', url: 'https://rentapartments.vn', note: 'Serviced apartment specialists catering to expats with English lease agreements.' },
        { name: 'Facebook Expat Groups', url: 'https://facebook.com', note: 'Expats in Saigon, Expats in Da Nang, and Housing in Thao Dien are prime channels for direct-lease apartments.' }
      ],
      scamWarnings: [
        'Check that the landlord actually owns the property by asking to see the "Sổ Hồng" (Pink Book / Property Ownership Certificate).',
        'Check utility billing terms: the state EVN electricity rate is ~2,500 to 3,500 VND/kWh. Many rogue landlords charge 4,500 to 5,500 VND/kWh on private submeters, inflating monthly bills.',
        'Deposit terms: standard is 1 month rent for 1-year leases or 2 months for high-end villas. Never wire deposits prior to in-person walkthrough.'
      ],
      keyConcepts: [
        { term: 'Sổ Hồng (Pink Book)', meaning: 'Certificate of land use and residential property ownership.' },
        { term: 'Phí Quản Lý', meaning: 'Monthly condominium management and amenity service fee (often paid separately from rent).' },
        { term: 'Công An Phường', meaning: 'Local Ward Police station responsible for your mandatory residential registration.' },
        { term: 'Thảo Điền / District 2', meaning: 'The premier expat enclave in Ho Chi Minh City, full of international schools, craft breweries, and cafes.' }
      ]
    },
    healthcare: {
      type: 'Dual Public/Private with International Expat Hospitals',
      details: 'While public hospitals are crowded and operate predominantly in Vietnamese, international private hospitals provide Western-trained doctors and bilingual nurses.',
      englishFriendlyInsurers: ['Pacific Cross Vietnam', 'Liberty Insurance Vietnam', 'Bảo Việt InterCare', 'Allianz Care', 'Cigna Global'],
      generalPractitioner: 'Visit international clinics for outpatient consultations. Renowned facilities include FV Hospital (District 7 HCMC), Vinmec International Hospital (Central Park HCMC & Times City Hanoi), Family Medical Practice, and Raffles Medical.',
      prescriptions: 'Pharmacies (Pharmacity, Long Châu, An Khang) are found on almost every street corner. Most standard medications and antibiotics can be purchased easily over the counter at low prices.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Strong Buddhist tradition means "Ăn Chay" (Vegetarian) is widely respected, recognized, and available on every street.',
      chayLabel: 'Look for signs displaying "Cơm Chay" or "Quán Chay" for pure vegetarian and vegan restaurants serving tofu, mock meats, fresh mushrooms, and vegetables.',
      hiddenIngredientsVietnamese: [
        { vi: 'Nước mắm', en: 'Fish sauce (the cornerstone of Vietnamese broths, marinades, and dipping sauces)' },
        { vi: 'Mắm tôm', en: 'Fermented shrimp paste (intense purple paste in northern dishes like bún đậu)' },
        { vi: 'Mỡ heo', en: 'Pork lard (traditionally used to fry shallots and coat noodles)' },
        { vi: 'Hạt nêm thịt heo / bò', en: 'Meat seasoning granules used in vegetable broths' }
      ],
      phrases: [
        { vi: 'Tôi ăn chay (Ăn Chay)', en: 'I eat vegetarian / Buddhist vegan' },
        { vi: 'Không nước mắm', en: 'No fish sauce' },
        { vi: 'Không thịt, không tôm', en: 'No meat, no shrimp' }
      ],
      supermarkets: 'Annam Gourmet (premier high-end French and international expat grocery), Mega Market (bulk wholesale), WinMart, Co.opmart, Lotte Mart.'
    },
    religiousGuide: {
      overview: 'Folk religions, Mahayana Buddhism, and Roman Catholicism coexist harmoniously. Freedom of religion is constitutionally recognized.',
      placesOfWorship: 'Historic Buddhist pagodas (Vĩnh Tràng, Trấn Quốc, Jade Emperor Pagoda in HCMC), Catholic churches (Saigon Notre Dame Cathedral, Tân Định Pink Church), and Evangelical fellowships.',
      hinduCommunity: 'Mariamman Hindu Temple (Đền Bà Mariamman on Trương Định, District 1 HCMC) is a famous historic temple frequented by both Indian expats and Vietnamese locals who revere the Goddess Mariamman. Sri Subramaniam Swamy Temple in District 1 also serves the community with vibrant Deepavali pujas.'
    }
  },

  indonesia: {
    id: 'indonesia',
    name: 'Indonesia',
    flag: '🇮🇩',
    currency: 'IDR',
    symbol: 'Rp ',
    language: 'Indonesian (Bahasa Indonesia)',
    emergencyNumbers: {
      police: '110',
      ambulance: '118',
      searchRescue: '115',
      fire: '113'
    },
    cities: ['Bali (Canggu / Ubud / Seminyak)', 'Jakarta', 'Surabaya', 'Bandung', 'Lombok', 'Yogyakarta'],
    visaTypes: [
      {
        name: 'Remote Worker Visa (E33G)',
        desc: '1-year digital nomad visa for remote workers employed by offshore entities outside Indonesia. Allows living in Bali/Indonesia legally without local income tax on overseas earnings. Requires proof of $60,000/yr salary and employment contract outside Indonesia.',
        timeframe: '1 to 2 weeks'
      },
      {
        name: 'Second Home Visa (E33)',
        desc: '5 or 10-year residency visa for high-net-worth individuals, investors, and retirees. Requires proof of 2 Billion IDR (~$130,000 USD) deposited in an Indonesian state-owned bank (Bank Mandiri, BRI, BNI) or luxury property ownership.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Working KITAS (E23 / C312)',
        desc: 'Formal temporary stay permit for foreign professionals employed by Indonesian companies or PT PMAs. Requires approved Manpower Utilization Plan (RPTKA) and employer payment of $1,200/yr DKP-TKA skills fund levy.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Investor KITAS (E28A / E28B)',
        desc: '1 to 2-year residency permit for foreign investors holding minimum shares in an Indonesian Foreign Investment Company (PT PMA), exempt from standard DKP-TKA manpower levies.',
        timeframe: '3 to 6 weeks'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'Zero Tolerance Drug Laws (Law No. 35/2009)',
        desc: 'Indonesia has some of the strictest narcotics laws on earth. Possession of minor amounts of marijuana, cannabis gummies, or narcotics results in severe prison sentences in notorious facilities (Kerobokan prison), while trafficking carries mandatory capital punishment (death penalty).',
        severity: 'critical'
      },
      {
        title: 'Working Locally on Tourist Visas',
        desc: 'Indonesian immigration regularly conducts surprise raids on co-working spaces and villas in Canggu, Ubud, and Seminyak. Conducting local commercial transactions, shooting paid photoshoots, or consulting local clients on a Tourist Visa (VOA) triggers immediate deportation and blacklisting.',
        severity: 'critical'
      },
      {
        title: 'Balinese Customary Law (Adat & Banjar) & Nyepi',
        desc: 'In Bali, local Banjar councils govern village safety and conduct. Respecting Balinese ceremonies is paramount. On Nyepi (Balinese Day of Silence), the entire island completely shuts down for 24 hours: no flights land, no outdoor movement is allowed, and no light may be visible from residences.',
        severity: 'high'
      },
      {
        title: 'Motorbike Helmet & IDP Enforcement',
        desc: 'Police checkpoints frequently stop foreigners riding scooters in Bali. Driving without a helmet or without a valid International Driving Permit (carrying motorcycle endorsement) results in fines and scooter impoundment.',
        severity: 'high'
      },
      {
        title: 'Temple Dress Codes',
        desc: 'Entering Balinese Hindu temples (Pura) requires wearing a sarong and sash (selendang) covering legs and knees. Women who are menstruating are forbidden by traditional custom from entering sacred inner sanctums.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Rumah123', url: 'https://www.rumah123.com', note: 'Largest property and real estate portal in Indonesia with extensive listings in Jakarta, Surabaya, and Bali.' },
        { name: 'Rumah.com', url: 'https://www.rumah.com', note: 'Detailed neighborhood listings with property valuation insights.' },
        { name: 'Bali Real Estate Villa Portals', url: 'https://balirealestate.com', note: 'Specialist agencies handling short and long-term leaseholds for expat villas in Badung and Gianyar.' },
        { name: 'Airbnb Monthly Stays', url: 'https://airbnb.com', note: 'Standard launchpad for the first 30 days while scouting local villa leaseholds in person.' }
      ],
      scamWarnings: [
        'Foreigners cannot legally hold "Hak Milik" (Freehold) in Indonesia. Avoid illegal nominee schemes where an Indonesian citizen holds title on your behalf.',
        'Always check the remaining duration on "Hak Sewa" (Leasehold) agreements (e.g. 25-year lease) and have a licensed Indonesian notary (PPAT) inspect the original certificates.',
        'Zoning laws in Bali: ensure the villa sits on a Yellow Zone (Residential) or Pink Zone (Tourism). Properties built on Green Zones (Agricultural/Rice fields) cannot obtain building permits (PBG) and face demolition.'
      ],
      keyConcepts: [
        { term: 'Hak Sewa (Leasehold)', meaning: 'Right of lease for a defined duration (typically 20–30 years), the safest legal mechanism for expats in Bali.' },
        { term: 'Hak Milik (Freehold)', meaning: 'Full freehold ownership, strictly restricted to Indonesian citizens only.' },
        { term: 'PPAT (Pejabat Pembuat Akta Tanah)', meaning: 'Government-appointed land deed official and notary who legally executes property lease contracts.' },
        { term: 'Banjar Fee', meaning: 'Small monthly community dues paid to the local village neighborhood association for security and waste disposal.' }
      ]
    },
    healthcare: {
      type: 'National BPJS Kesehatan with Comprehensive Expat Private Facilities',
      details: 'While BPJS covers citizens and formal KITAS holders, expats and digital nomads rely heavily on modern private hospitals and clinics. For critical life-threatening conditions, medical evacuation (Medevac) coverage to Singapore or Australia is strongly advised.',
      englishFriendlyInsurers: ['SafetyWing Nomad Insurance', 'Cigna Global', 'Allianz Worldwide Care', 'Prudential Indonesia', 'Manulife Indonesia'],
      generalPractitioner: 'Bali has modern international medical centers: BIMC Hospital Nusa Dua (24/7 ER and Western-trained staff), Siloam Hospitals Denpasar, and Kasih Ibu Hospital. In Jakarta: RS Pondok Indah, Medistra Hospital, and Siloam MRCCC.',
      prescriptions: 'Apotek (Apotek Kimia Farma, Century Healthcare, Guardian) are widespread across all cities. Common over-the-counter and prescription treatments are readily accessible.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Bali is a global epicenter for vegetarian, vegan, gluten-free, and plant-based organic cafes. Jakarta has diverse Indonesian, Indian, and international offerings.',
      halalAwareness: 'Across Java and Muslim-majority provinces, almost all food is 100% Halal certified. In Bali, Balinese cuisine features roast pork (Babi Guling).',
      hiddenIngredientsIndonesian: [
        { id: 'Terasi / Belacan', en: 'Shrimp paste (common in sambal chili pastes, fried rice, and stir-fries)' },
        { id: 'Kaldu ayam / sapi (Royco / Masako)', en: 'Chicken or beef bouillon powder heavily used in soups and seasonings' },
        { id: 'Bawang merah / Bawang putih', en: 'Shallots and garlic (crucial for Jain diners to flag)' },
        { id: 'Minyak babi', en: 'Pork lard (used in traditional Chinese-Indonesian noodle stalls)' }
      ],
      phrases: [
        { id: 'Saya vegetarian (Saya tidak makan daging)', en: 'I am vegetarian (I do not eat meat)' },
        { id: 'Tanpa terasi dan tanpa kaldu daging', en: 'Without shrimp paste and without meat bouillon' },
        { id: 'Hanya sayuran dan telur/tahu/tempe', en: 'Only vegetables, eggs, tofu, and tempeh' }
      ],
      supermarkets: 'Grand Lucky (fabulous expat grocery selection in Jakarta & Bali), Pepito Market (Bali expat staple with imported cheeses and wines), Ranch Market, Food Hall.'
    },
    religiousGuide: {
      overview: 'Indonesia officially recognizes six religions: Islam, Protestantism, Catholicism, Hinduism, Buddhism, and Confucianism. Bali is uniquely 87% Balinese Hindu.',
      placesOfWorship: 'Historic Balinese temples (Pura Besakih, Uluwatu, Tanah Lot), Grand Istiqlal Mosque in Jakarta (largest in Southeast Asia), Jakarta Cathedral (Gereja Katedral), and Buddhist viharas.',
      hinduCommunity: 'Balinese Hinduism (Agama Hindu Dharma) permeates daily life with incense, canang sari daily flower offerings, and gamelan music. In Jakarta, the Indian diaspora gathers at Shri Sanathana Dharma Aalayam, Gurudwara Mission, and ISKCON centres with grand Janmashtami and Diwali festivals.'
    }
  },

  mexico: {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    currency: 'MXN',
    symbol: 'Mex$',
    language: 'Spanish',
    emergencyNumbers: {
      police: '911',
      redCross: '065',
      touristAssistance: '078',
      fire: '911'
    },
    cities: ['Mexico City (CDMX)', 'Playa del Carmen', 'Guadalajara', 'Monterrey', 'Cancún', 'Puerto Vallarta', 'Querétaro'],
    visaTypes: [
      {
        name: 'Residente Temporal (Temporary Resident Visa)',
        desc: '1 to 4-year stay permit for digital nomads, remote workers, freelancers, and retirees. Requires proof of economic solvency (~$3,500 to $4,300 USD/month net income over the past 6 months or ~$65,000 to $70,000 USD bank savings balance over the past 12 months). Can be converted directly to Permanent Residency after 4 years.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'Residente Temporal con Permiso de Trabajo',
        desc: 'Employer-sponsored work resident visa where a registered Mexican company (holding an INM Constancia de Empleador) sponsors the candidate with a formal job contract.',
        timeframe: '4 to 8 weeks'
      },
      {
        name: 'Residente Permanente (Permanent Resident)',
        desc: 'Direct permanent residency granted to retirees meeting higher financial thresholds (~$5,500+/month or ~$250,000 USD savings) or through family unity with Mexican citizens.',
        timeframe: '2 to 4 weeks'
      },
      {
        name: 'FMM Tourist Permit (Forma Migratoria Múltiple)',
        desc: 'Up to 180 days granted upon arrival for tourism and business exploratory visits. Note that immigration officers (INM) at airports now frequently ask for return flight tickets and confirmed lodging before determining the number of days stamped.',
        timeframe: 'Instant at border'
      }
    ],
    strictRulesAndLaws: [
      {
        title: 'INM Canje Process within 30 Days of Landing',
        desc: 'The visa sticker placed in your passport by the Mexican consulate is only a single-entry entry permit! You MUST visit your local INM (Instituto Nacional de Migración) office within 30 days of arrival to complete the "Canje" (biometrics swap) to receive your physical plastic Green Resident Card.',
        severity: 'critical'
      },
      {
        title: 'RFC (Registro Federal de Contribuyentes) & CURP',
        desc: 'Obtaining your RFC tax ID and CURP population code from SAT (Servicio de Administración Tributaria) is legally required to open premier bank accounts, buy vehicles, register utilities, or invest locally.',
        severity: 'high'
      },
      {
        title: 'Drinking Alcohol in Public Streets',
        desc: 'Consuming alcoholic beverages on public sidewalks, parks, or streets outside licensed restaurant terraces is strictly illegal across Mexican municipalities and will lead to fines or detention by Municipal Police.',
        severity: 'medium'
      },
      {
        title: 'Drinking Water Caution (Agua de la Llave)',
        desc: 'Tap water across Mexico is NOT safe for direct drinking due to municipal piping. Always drink purified bottled water or subscribe to 20-liter water jug delivery services (Garrafón - Bonafont, Ciel, or Epura).',
        severity: 'high'
      },
      {
        title: 'SPEI Electronic Transfers Dominance',
        desc: 'Mexico runs on SPEI (Sistema de Pagos Electrónicos Interbancarios). Almost all rents, utility bills, and merchant transfers are paid instantly 24/7 using an 18-digit CLABE number.',
        severity: 'medium'
      }
    ],
    houseHunting: {
      topPortals: [
        { name: 'Inmuebles24', url: 'https://www.inmuebles24.com', note: 'Mexico’s leading real estate portal for apartments, houses, and corporate rentals.' },
        { name: 'Vivanuncios', url: 'https://www.vivanuncios.com.mx', note: 'Extensive classifieds platform across Mexico City, Guadalajara, and Monterrey.' },
        { name: 'Homie.mx', url: 'https://homie.mx', note: 'Modern tech-enabled rental portal that eliminates the traditional need for a local property guarantor (fiador).' },
        { name: 'Metros Cúbicos', url: 'https://www.metroscubicos.com', note: 'Popular property search engine backed by Mercado Libre.' }
      ],
      scamWarnings: [
        'Traditional Mexican rental contracts usually demand an "Aval con bien raíz" (a local guarantor who owns unmortgaged property in the same state). Never pay shady brokers promising fake guarantor deeds.',
        'If you do not have an Aval, ask the landlord or agent if they accept a "Póliza Jurídica" (legal rental insurance, costs ~3,000 to 5,000 MXN) or use platforms like Homie.',
        'Never wire security deposits before seeing the apartment in person with the building administrator.'
      ],
      keyConcepts: [
        { term: 'Aval / Fiador', meaning: 'Local guarantor who co-signs the lease and owns real estate in the city.' },
        { term: 'Póliza Jurídica', meaning: 'Legal rental insurance contract policy that acts in place of a traditional guarantor.' },
        { term: 'Mantenimiento', meaning: 'Monthly building maintenance and security charge (often 1,500 to 4,000 MXN; verify if included in rent).' },
        { term: 'CLABE', meaning: '18-digit standardized interbank code required to transfer rent payments via SPEI.' }
      ]
    },
    healthcare: {
      type: 'Dual Public (IMSS/ISSSTE) and World-Class Affordable Private Healthcare',
      details: 'Mexico is a premier destination for healthcare with modern facilities, US-trained English-speaking doctors, and hospital costs at a fraction of US prices. Expats utilize private health insurance (GNP Seguros, AXA México, MetLife México, or international expat plans).',
      englishFriendlyInsurers: ['GNP Seguros', 'AXA México', 'Seguros Monterrey New York Life', 'Bupa Global Latin America', 'Allianz Care'],
      generalPractitioner: 'Visit private medical centers and hospital outpatient clinics: ABC Medical Center (Santa Fe & Observatorio in CDMX), Hospital Español, and Hospital Ángeles network nationwide.',
      prescriptions: 'Pharmacies (Farmacias San Pablo, Farmacias del Ahorro, Farmacias Benavides, Farmacias Similares) are on every corner. Most standard maintenance medications, pain relievers, and treatments are sold over the counter at low prices; antibiotics and sedatives require a Mexican doctor’s written script.'
    },
    dietaryGuide: {
      vegetarianStatus: 'Mexican cuisine is filled with fresh avocado, beans, salsa, nopales (cactus), corn tortillas, and tropical fruits. However, watch out for animal fats in traditional cooking.',
      mantecaAlert: 'Always verify whether beans or tortillas are prepared with "Manteca de cerdo" (pork lard).',
      hiddenIngredientsSpanish: [
        { es: 'Manteca de cerdo', en: 'Pork lard (widely used in traditional refried beans and tamales)' },
        { es: 'Caldo de pollo', en: 'Chicken bouillon powder (used to season traditional red Mexican rice)' },
        { es: 'Chicharrón', en: 'Pork cracklings / rinds (often used as garnish in soups and guacamole)' },
        { es: 'Grasa animal', en: 'Animal fat in pastries and baked goods' }
      ],
      phrases: [
        { es: '¿Los frijoles están hechos con manteca de cerdo?', en: 'Are the beans made with pork lard?' },
        { es: '¿El arroz tiene caldo de pollo?', en: 'Does the rice have chicken broth?' },
        { es: 'Soy vegetariano / vegano estricto', en: 'I am strict vegetarian / vegan' }
      ],
      supermarkets: 'City Market (ultra-luxury gourmet expat grocery with organic & imported food), Chedraui Selecto, Superama / Walmart Express, Soriana Híper.'
    },
    religiousGuide: {
      overview: 'Predominantly Roman Catholic (~78%) with rich syncretic traditions and constitutional freedom of worship.',
      placesOfWorship: 'Basílica de Santa María de Guadalupe in Mexico City (one of the most visited Catholic pilgrimage sites in the world), Metropolitan Cathedral, Jewish synagogues (Polanco), and Protestant churches.',
      hinduCommunity: 'Vibrant and growing Indian expat community in CDMX, Guadalajara, and Querétaro. ISKCON México (Colonia San Pedro de los Pinos, CDMX) holds Sunday feasts and kirtans. The Indian Embassy in Polanco hosts regular cultural workshops, Hindi classes, and grand community Diwali and Holi celebrations.'
    }
  }
};
