// Comprehensive Country-specific 30-Day Departure Countdown & First Month Arrival Roadmaps
// Ensures authentic, legally accurate procedures per country (e.g., CPF & Polícia Federal in Brazil, Anmeldung in Germany, BSN in Netherlands, etc.)

export const COUNTRY_TIMELINES = {
  brazil: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Safe Accommodation, Medical & Banking Setup',
        focus: 'Securing vetted initial lodging and international funds for Brazil',
        tasks: [
          {
            id: 'br-w4-1',
            title: 'Book Temporary Accommodation in a Vetted Safe District',
            desc: 'Book your first 2 to 4 weeks in a safe neighborhood with a 24-hour staffed doorman (Portaria 24 Horas). In São Paulo: Jardins, Pinheiros, Itaim Bibi, Moema, or Vila Mariana. In Rio de Janeiro: Ipanema, Leblon, or Botafogo. Ensure the host will provide an address declaration or utility bill if needed.',
            priority: 'critical'
          },
          {
            id: 'br-w4-2',
            title: 'Comprehensive Dental & Medical Checkup Back Home',
            desc: 'Get full dental cleanings, cavity checks, and physicals before flying. While Brazil has world-class private hospitals (Albert Einstein, Sírio-Libanês), completing routine dental and preventive care at home avoids out-of-pocket costs on week 1.',
            priority: 'high'
          },
          {
            id: 'br-w4-3',
            title: 'Notify Home Banks & Order Wise / International Cards',
            desc: 'Inform your home banks of travel to Brazil so cards are not blocked by anti-fraud algorithms. Order a Wise multi-currency debit card; Wise allows holding Brazilian Reais (BRL) and sending funds directly into Brazilian accounts and PIX.',
            priority: 'critical'
          },
          {
            id: 'br-w4-4',
            title: 'Resign from Current Employment & Terminate Home Leases',
            desc: 'Serve formal notice to your current landlord, gym, internet provider, and utility companies. Obtain written clearance letters.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'CPF Application, Apostilles & Sworn Translations',
        focus: 'Crucial Brazilian legal paperwork: CPF and Hague Apostilles',
        tasks: [
          {
            id: 'br-w3-1',
            title: 'Hague Apostilles & Sworn Portuguese Translations (Tradução Juramentada)',
            desc: 'Brazil is a member of the Hague Apostille Convention. All public documents (university degrees, police clearance, marriage, and birth certificates) MUST have the Hague Apostille in your home country. Once in Brazil, they must be translated into Portuguese by an official sworn court translator (Tradutor Público Juramentado).',
            priority: 'critical'
          },
          {
            id: 'br-w3-2',
            title: 'Apply for CPF (Tax ID Number) Online Prior to Departure',
            desc: 'The CPF (Cadastro de Pessoas Físicas) is mandatory for EVERYTHING in Brazil: buying a SIM card, opening a bank account, ordering on iFood, renting an apartment, and using PIX. Apply online through the Receita Federal website or at your nearest Brazilian Consulate before departure to land with your CPF ready!',
            priority: 'critical'
          },
          {
            id: 'br-w3-3',
            title: 'School Research & Child Vaccination Records (Cartão de Vacinação)',
            desc: 'For families: Gather child school transcripts and vaccination cards translated into Portuguese. Brazilian schools legally require proof of up-to-date immunizations (Yellow Fever, MMR, Polio). Research bilingual and international schools in São Paulo (Graded, St. Paul\'s, Chapel) or private Colégios.',
            priority: 'high'
          },
          {
            id: 'br-w3-4',
            title: 'Secure Cloud Vault & Encrypted Flash Drive Backup',
            desc: 'Upload 300 DPI high-resolution scans of all passports, Brazilian visas, employment/nomad contracts, and biometric 3x4 cm photos to encrypted cloud storage and a portable USB stick.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Brazilian Apps, Voltage Check & Currency Buffer',
        focus: 'App setup, Type N plug adapters, and luggage weigh-in',
        tasks: [
          {
            id: 'br-w2-1',
            title: 'Install WhatsApp, 99 & Essential Brazilian Apps',
            desc: 'Install WhatsApp immediately; in Brazil, 99% of communication with landlords, banks, realtors, and doctors happens on WhatsApp! Also install 99 (leading Brazilian ride-hailing app), Uber, iFood (food delivery), and download offline Portuguese in Google Translate.',
            priority: 'critical'
          },
          {
            id: 'br-w2-2',
            title: 'Voltage Check & Type N Plug Adapters (Crucial!)',
            desc: 'Brazil uses the unique 3-pin Type N socket (IEC 60906-1). Crucially, voltage is NOT uniform across Brazil: São Paulo and Rio de Janeiro are primarily 110V/127V, whereas Brasília, Curitiba, and Florianópolis are 220V! Check appliance voltage ratings and buy Type N adapters.',
            priority: 'high'
          },
          {
            id: 'br-w2-3',
            title: 'Exchange Small Cash Buffer in Brazilian Reais (R$ 300 - R$ 500)',
            desc: 'Exchange a small emergency buffer of R$ 300 to R$ 500 in small banknotes (R$ 10, R$ 20, R$ 50). While Brazil is predominantly cashless through cards and PIX, small cash is handy for arrival transit snacks and tips.',
            priority: 'high'
          },
          {
            id: 'br-w2-4',
            title: 'Dry Run Packing & Digital Luggage Scale Weigh-In',
            desc: 'Weigh all suitcases. Transatlantic and international flights to Brazil strictly enforce baggage allowances (typically two 23kg or 32kg bags depending on ticket class). Pre-book extra bags online to avoid 50% counter surcharges.',
            priority: 'medium'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to Travel Day)',
        title: 'Carry-On Binder & Airport Safety Protocols',
        focus: 'Final travel binder and official airport arrival transit',
        tasks: [
          {
            id: 'br-w1-1',
            title: 'Carry-On Document Dossier Check (Never in Checked Luggage!)',
            desc: 'Keep hard copies of: Passport with Brazilian visa, CPF registration confirmation, apostilled documents, proof of accommodation, return/onward ticket (if nomad), and travel insurance in a waterproof cabin folder.',
            priority: 'critical'
          },
          {
            id: 'br-w1-2',
            title: 'Pre-Plan Airport Transfer & Street Safety Protocol',
            desc: 'At São Paulo Guarulhos Airport (GRU) or Rio Galeão (GIG), NEVER accept rides from unbadged touts inside the terminal. Use the official prepaid taxi counter (e.g. Guarucoop at GRU) or order an Uber from the dedicated app pickup zone.',
            priority: 'high'
          },
          {
            id: 'br-w1-3',
            title: 'Pack 48-Hour Survival Kit in Hand Luggage',
            desc: 'Pack 2 changes of clothes, essential chargers, Type N adapter, infant supplies, and prescription medications in hand luggage in case checked baggage is delayed.',
            priority: 'critical'
          },
          {
            id: 'br-w1-4',
            title: 'Online Flight Check-In & Final Departure Farewell',
            desc: 'Complete airline check-in 24-48 hours before departure. Double check passport details and prepare for your move to Brazil!',
            priority: 'high'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Immediate Landing, SIM & Transit Card',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'br-arr-1',
            title: 'Obtain / Validate CPF (Cadastro de Pessoas Físicas)',
            desc: 'If you did not receive your CPF before departure, visit a local Receita Federal post, Banco do Brasil, or Correios (post office). In Brazil, you cannot purchase a registered SIM card, open a bank account, use PIX, or sign a lease without a CPF number.',
            timing: 'Days 1-2'
          },
          {
            id: 'br-arr-2',
            title: 'Activate Local Brazilian SIM & WhatsApp (Claro, Vivo, or TIM)',
            desc: 'Visit an official carrier store (Claro, Vivo, or TIM) in a shopping mall with your passport and CPF. Register a local mobile plan. All communication in Brazil—from grocery deliveries to doctor consultations—operates via WhatsApp.',
            timing: 'Days 1-3'
          },
          {
            id: 'br-arr-3',
            title: 'Get Public Transit Pass (Bilhete Único / RioCard) & Street Smarts',
            desc: 'In São Paulo, purchase a Bilhete Único at any metro station for integrated subway, train, and bus discounts. In Rio, get a RioCard Mais. Practice urban safety: never walk with your mobile phone held loosely near the road curb or bicycle lanes.',
            timing: 'Days 2-3'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Polícia Federal Appointment & Cartório Notarization',
        badge: 'Legal Foundation',
        tasks: [
          {
            id: 'br-arr-4',
            title: 'Polícia Federal Appointment for CRNM (Foreign Resident ID)',
            desc: 'All visa holders must register in person at the Federal Police (Polícia Federal) within 90 days of arrival. Bring your passport, visa grant letter, passport photos, proof of address, and paid GRU government fee voucher. Complete biometrics to receive your Protocolo de CRNM.',
            timing: 'Days 4-7'
          },
          {
            id: 'br-arr-5',
            title: 'Cartório Registration & Signature Card (Abrir Firma)',
            desc: 'Visit a local Cartório de Notas (notary public) with your passport, CPF, and CRNM protocol to open a signature card (abrir firma). Brazilian legal contracts and apartment leases require official notarized signature recognition (reconhecimento de firma).',
            timing: 'Days 5-7'
          },
          {
            id: 'br-arr-6',
            title: 'Workplace eSocial Registration & School Visits',
            desc: 'Provide your CPF and CRNM protocol to your employer\'s HR department for mandatory enrollment into the government eSocial labor system. Complete in-person visits and immunization paperwork for children\'s schooling.',
            timing: 'Week 1'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Banking, PIX Activation & Healthcare',
        badge: 'Financial & Medical',
        tasks: [
          {
            id: 'br-arr-7',
            title: 'Open Brazilian Bank Account & Activate PIX',
            desc: 'Open an account with a digital bank (Nubank, Banco Inter) or major commercial bank (Itaú, Bradesco, Santander) using your CPF and CRNM protocol. Immediately set up your PIX key (instant fee-free QR code and mobile transfer system used universally across Brazil).',
            timing: 'Days 8-10'
          },
          {
            id: 'br-arr-8',
            title: 'Enroll in Private Health Insurance (Plano de Saúde) & SUS Card',
            desc: 'While Brazil provides free public healthcare through the SUS (Sistema Único de Saúde), wait times can be significant. Expats overwhelmingly enroll in private health plans (Amil, Bradesco Saúde, SulAmérica) to access top hospitals (Albert Einstein, Sírio-Libanês) and English-speaking doctors.',
            timing: 'Days 10-14'
          },
          {
            id: 'br-arr-9',
            title: 'Condominium Protocols & 24h Doorman (Portaria) Security',
            desc: 'Meet your building manager (síndico) and 24h reception staff (portaria). Register biometric gate access, learn package delivery locker codes, and understand condominium rules regarding quiet hours and visitor registration.',
            timing: 'Week 2'
          }
        ]
      },
      {
        phase: 'Weeks 3 & 4 (Days 15 to 30)',
        title: 'Long-Term Housing, Driving & Community',
        badge: 'Permanent Nesting',
        tasks: [
          {
            id: 'br-arr-10',
            title: 'Apartment Hunting on QuintoAndar / Zap Imóveis',
            desc: 'Use QuintoAndar to rent without needing a Brazilian property guarantor (fiador) or costly deposit insurance (seguro fiança). Remember to factor monthly Condomínio (maintenance) and municipal IPTU taxes into your total monthly rental budget.',
            timing: 'Days 15-25'
          },
          {
            id: 'br-arr-11',
            title: 'International Driving Permit (IDP) 6-Month Rules',
            desc: 'You can legally drive in Brazil for up to 6 months with your valid foreign driver\'s license accompanied by an official Portuguese translation or International Driving Permit (IDP). If remaining long-term, begin checking state Detran requirements for license conversion.',
            timing: 'Week 3'
          },
          {
            id: 'br-arr-12',
            title: 'Collect Physical CRNM Card & Connect with Expat Network',
            desc: 'Collect your permanent plastic CRNM card from the Polícia Federal once notified. Join local expat circles (Expats in São Paulo, Gringos in Rio), visit weekend neighborhood street markets (Feiras Livres), and begin conversational Portuguese practice.',
            timing: 'Week 4'
          }
        ]
      }
    ]
  },

  germany: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Accommodation, Medical & Banking Setup',
        focus: 'Securing temporary flat with Anmeldung guarantee and banking',
        tasks: [
          {
            id: 'de-w4-1',
            title: 'Book Temporary Accommodation with Anmeldung Guarantee',
            desc: 'Ensure your temporary apartment (Wunderflats, HousingAnywhere, or Airbnb) confirms in writing that they provide the landlord confirmation document (Wohnungsgeberbestätigung). Without this, you cannot register your address in Germany!',
            priority: 'critical'
          },
          {
            id: 'de-w4-2',
            title: 'Comprehensive Medical & Dental Checkup Back Home',
            desc: 'Get dental cleanings, cavity fillings, and checkups completed. German statutory health insurance covers basic dental checkups, but major crowns, implants, or out-of-pocket dental treatments are expensive.',
            priority: 'high'
          },
          {
            id: 'de-w4-3',
            title: 'Notify Home Banks & Order Wise / Revolut Travel Cards',
            desc: 'Inform your home credit card providers of your move to Germany to prevent transaction blocks. Order a Wise or Revolut multi-currency debit card with a Euro IBAN.',
            priority: 'critical'
          },
          {
            id: 'de-w4-4',
            title: 'Submit Formal Resignation & Cancel Subscriptions',
            desc: 'Serve formal notice to your current landlord, gym, internet provider, and utility providers in your home country. Keep written cancellation receipts.',
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
            id: 'de-w3-1',
            title: 'Hague Apostille & Sworn German Translations',
            desc: 'Verify that your university degree certificates, marriage certificate, and children\'s birth certificates bear the Hague Apostille. Obtain certified German translations by a sworn court translator (beeidigter Übersetzer).',
            priority: 'critical'
          },
          {
            id: 'de-w3-2',
            title: 'School / Kita (Daycare) Research & Kita-Gutschein Inquiries',
            desc: 'For families: Research local Grundschulen (primary schools) and Kitas in your target city. In Berlin/Hamburg, research how to apply for the municipal childcare voucher (Kita-Gutschein).',
            priority: 'high'
          },
          {
            id: 'de-w3-3',
            title: 'Secure Cloud Vault & Encrypted Flash Drive Backup',
            desc: 'Upload 300 DPI high-resolution scans of all documents, passports, IDs, work contracts, and biometric passport photos to encrypted cloud storage.',
            priority: 'high'
          },
          {
            id: 'de-w3-4',
            title: 'Power of Attorney back home (if owning property/stocks)',
            desc: 'Grant registered Special Power of Attorney to a trusted family member or lawyer to handle urgent physical paperwork in your absence.',
            priority: 'medium'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'SIM, Transit Apps & Luggage Weigh-In',
        focus: 'Connectivity and travel preparation',
        tasks: [
          {
            id: 'de-w2-1',
            title: 'Purchase International eSIM & Download German Apps',
            desc: 'Install a travel eSIM for arrival. Download DB Navigator (Deutsche Bahn railway app), Citymapper, Google Maps offline, and Google Translate German dictionary.',
            priority: 'critical'
          },
          {
            id: 'de-w2-2',
            title: 'Dry Run Packing & Digital Luggage Scale Weigh-In',
            desc: 'Pack suitcases and weigh with a digital luggage scale. Pre-book additional baggage allowance online with the airline to avoid high airport counter excess fees.',
            priority: 'high'
          },
          {
            id: 'de-w2-3',
            title: 'Exchange Physical Currency Buffer (€300 - €500)',
            desc: 'Obtain €300 - €500 in small euro banknotes. While card acceptance in Germany has improved, many bakeries, coin lockers, and small shops still require cash (Barzahlung).',
            priority: 'high'
          },
          {
            id: 'de-w2-4',
            title: 'Check European Type C/F Plugs & 230V Voltage',
            desc: 'Ensure your chargers and devices are compatible with Germany\'s 230V 50Hz supply and European standard Type C and Schuko Type F sockets.',
            priority: 'medium'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to Travel Day)',
        title: 'Carry-On Verification & Liftoff',
        focus: 'Zero-risk travel day execution',
        tasks: [
          {
            id: 'de-w1-1',
            title: 'Carry-On Document Binder Check (Never in Checked Bag!)',
            desc: 'Assemble hard copies: Passport with German visa, work offer letter/contract, accommodation confirmation, travel health insurance certificate, and apostilled certificates in your cabin bag.',
            priority: 'critical'
          },
          {
            id: 'de-w1-2',
            title: 'Book Airport Transfer / S-Bahn Route',
            desc: 'Plan your route from the airport (e.g. Berlin BER FEX train, Frankfurt S-Bahn) or pre-book an airport minivan if traveling with family and 4+ heavy suitcases.',
            priority: 'high'
          },
          {
            id: 'de-w1-3',
            title: 'Keep 48-Hour Survival Kit in Hand Luggage',
            desc: 'Pack 2 changes of clothes, essential chargers, infant diapers, and prescription medications in hand luggage in case checked baggage is delayed.',
            priority: 'critical'
          },
          {
            id: 'de-w1-4',
            title: 'Online Flight Check-In & Final Departure Farewell',
            desc: 'Complete airline check-in 24-48 hours prior, verify passport details, and embark on your journey to Germany!',
            priority: 'high'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Immediate Landing & Transit Card',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'de-arr-1',
            title: 'Activate Local German SIM / Mobile Plan',
            desc: 'Switch to a local monthly mobile plan (Telekom, Vodafone, O2, or discount MVNOs like fraenk/ALDI TALK). You need a local German number for 2FA SMS and landlord inquiries.',
            timing: 'Day 1'
          },
          {
            id: 'de-arr-2',
            title: 'Purchase Deutschlandticket (€49/Month Commuter Pass)',
            desc: 'Subscribe to the Deutschlandticket via DB Navigator or local transport operator (BVG, MVG). It gives unlimited travel on all regional trains (RE, RB), subways (U-Bahn), S-Bahn, trams, and buses across all of Germany.',
            timing: 'Day 1-2'
          },
          {
            id: 'de-arr-3',
            title: 'Inspect Temporary Flat & Obtain Wohnungsgeberbestätigung',
            desc: 'Inspect the apartment for damages and immediately obtain the signed landlord confirmation form (Wohnungsgeberbestätigung) needed for your Bürgeramt city registration.',
            timing: 'Day 2-3'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Anmeldung (City Registration) & Tax ID',
        badge: 'Legal Foundation',
        tasks: [
          {
            id: 'de-arr-4',
            title: 'Complete Mandatory City Registration (Anmeldung) at Bürgeramt',
            desc: 'Attend your Bürgeramt / Einwohnermeldeamt appointment within 14 days. Present your passport and signed Wohnungsgeberbestätigung to receive your official Meldebestätigung certificate.',
            timing: 'Days 4-7'
          },
          {
            id: 'de-arr-5',
            title: 'Receive German Tax ID (Steuerliche Identifikationsnummer)',
            desc: 'Once registered, your national Steuer-ID will be generated by the Federal Central Tax Office (BZSt) and mailed to your registered address. Provide it to your employer immediately to avoid emergency Tax Class 6 deductions.',
            timing: 'Week 1'
          },
          {
            id: 'de-arr-6',
            title: 'Workplace & School Orientation',
            desc: 'First day at the office: meet your team, collect IT equipment, and finalize school / Kita registration documentation for children.',
            timing: 'Week 1'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Banking, Health Insurance & Liability Policy',
        badge: 'Financial & Medical',
        tasks: [
          {
            id: 'de-arr-7',
            title: 'Open German Bank Account (Girokonto)',
            desc: 'Open a checking account (traditional banks like Deutsche Bank/Commerzbank, or digital banks like N26/C24). Provide your German IBAN to your employer\'s HR for monthly payroll.',
            timing: 'Days 8-10'
          },
          {
            id: 'de-arr-8',
            title: 'Activate Health Insurance Card & Register with Hausarzt (GP)',
            desc: 'Submit your Anmeldung and bank details to your statutory health fund (TK, Barmer, AOK) to receive your electronic health card (eGK). Find a nearby English-speaking Hausarzt (GP) for your family.',
            timing: 'Days 10-14'
          },
          {
            id: 'de-arr-9',
            title: 'Purchase Personal Liability Insurance (Haftpflichtversicherung)',
            desc: 'In Germany, personal liability insurance is essential (costs €4-€6/month) and protects you against accidental damages to rental properties, bicycles, or third parties. 85%+ of German residents hold one.',
            timing: 'Week 2'
          }
        ]
      },
      {
        phase: 'Weeks 3 & 4 (Days 15 to 30)',
        title: 'Apartment Hunting, Ausländerbehörde & Settling',
        badge: 'Permanent Nesting',
        tasks: [
          {
            id: 'de-arr-10',
            title: 'Long-Term Apartment Hunting on ImmoScout24 & WG-Gesucht',
            desc: 'Assemble your tenant dossier: 3 recent payslips / employment contract, SCHUFA credit report, copy of IDs, and landlord debt-free certificate (Mietschuldenfreiheitsbescheinigung). Apply swiftly to new listings.',
            timing: 'Days 15-25'
          },
          {
            id: 'de-arr-11',
            title: 'Master Waste Sorting (Mülltrennung) & Quiet Hours (Ruhezeit)',
            desc: 'Learn local recycling rules: Bio (organic), Gelber Sack (plastics/packaging), Papier (blue bin), and Restmüll (residual waste). Strictly observe Ruhezeit (quiet hours: 22:00-06:00 and all day Sunday).',
            timing: 'Week 3'
          },
          {
            id: 'de-arr-12',
            title: 'Ausländerbehörde Appointment for Electronic Residence Permit (eAT)',
            desc: 'Attend your immigration office appointment (Ausländerbehörde / LEA in Berlin) for fingerprint capture and biometric verification to issue your multi-year plastic residence title card (eAT).',
            timing: 'Week 4'
          }
        ]
      }
    ]
  },

  uk: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Accommodation, Medical & UK Banking Prep',
        focus: 'Securing temporary accommodation and financial preparation for the UK',
        tasks: [
          {
            id: 'uk-w4-1',
            title: 'Book Temporary Accommodation with Proof of Address',
            desc: 'Book your first 2 to 4 weeks in a serviced flat or Airbnb where you can receive mail. You will need a recognized UK address to open traditional bank accounts and register with an NHS GP surgery.',
            priority: 'critical'
          },
          {
            id: 'uk-w4-2',
            title: 'Medical & Dental Checkup in Home Country',
            desc: 'Complete all dental treatments, cleanings, and optical checkups before departure. NHS dental spots in the UK are notoriously difficult to secure with long waiting lists, and private dentists charge high fees.',
            priority: 'high'
          },
          {
            id: 'uk-w4-3',
            title: 'Notify Home Banks & Order Multi-Currency Travel Cards',
            desc: 'Notify your credit card issuers of your UK relocation. Order a Wise or Revolut card with GBP balance capability for immediate contactless payments on the London Underground.',
            priority: 'critical'
          },
          {
            id: 'uk-w4-4',
            title: 'Serve Resignation & Cancel Home Subscriptions',
            desc: 'Submit formal resignation to your current employer and serve notice on your home rental lease and utility contracts.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Document Legalization & School Catchment Research',
        focus: 'Sworn English translations and UK school catchment boundaries',
        tasks: [
          {
            id: 'uk-w3-1',
            title: 'Apostilles & Certified English Translations',
            desc: 'Ensure all certificates (degrees, police clearance, marriage, birth) have Hague Apostilles and certified official English translations recognized by UK Visas and Immigration (UKVI).',
            priority: 'critical'
          },
          {
            id: 'uk-w3-2',
            title: 'UK School Catchment Area & Ofsted Report Research',
            desc: 'For families: Research local council school admissions and Ofsted inspection ratings ("Outstanding" or "Good"). UK state schools allocate places strictly by geographical catchment distance from your residential address.',
            priority: 'high'
          },
          {
            id: 'uk-w3-3',
            title: 'Cloud Vault & Biometric Photo Backup',
            desc: 'Upload 300 DPI high-resolution scans of all passports, visas, UKVI share codes, and work contracts to secure cloud storage.',
            priority: 'high'
          },
          {
            id: 'uk-w3-4',
            title: 'Power of Attorney back home (if owning property/stocks)',
            desc: 'Grant registered Special Power of Attorney to a trusted family member or lawyer to handle urgent physical paperwork in your absence.',
            priority: 'medium'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'UK Apps, Type G Plug Adapters & Currency Buffer',
        focus: 'App downloads and UK 3-pin plug equipment',
        tasks: [
          {
            id: 'uk-w2-1',
            title: 'Install Citymapper, Trainline & UK Apps',
            desc: 'Download Citymapper (indispensable for London transit), Trainline (for National Rail trains), Uber, and Google Maps offline area maps.',
            priority: 'critical'
          },
          {
            id: 'uk-w2-2',
            title: 'Pack UK Standard Type G Plug Adapters (230V)',
            desc: 'The UK strictly uses rectangular 3-pin Type G sockets operating at 230V 50Hz. Ensure all chargers and multi-plug extension boards use Type G adapters with internal safety fuses.',
            priority: 'high'
          },
          {
            id: 'uk-w2-3',
            title: 'Exchange Small Currency Buffer in British Pounds (£200 - £300)',
            desc: 'Keep £200 to £300 in £10 and £20 notes for small emergency expenses, although the UK is almost entirely cashless via Contactless and Apple/Google Pay.',
            priority: 'high'
          },
          {
            id: 'uk-w2-4',
            title: 'Luggage Weigh-In & Baggage Allowance Verification',
            desc: 'Weigh suitcases against airline limits. Pre-purchase additional baggage allowance online for discounts.',
            priority: 'medium'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to Travel Day)',
        title: 'Carry-On Verification & Liftoff',
        focus: 'Final document checks and travel day execution',
        tasks: [
          {
            id: 'uk-w1-1',
            title: 'Cabin Bag Document Binder Check',
            desc: 'Assemble hard copies: Passport, UKVI decision letter, Certificate of Sponsorship (CoS), accommodation confirmation, and marriage/birth certificates in your cabin bag.',
            priority: 'critical'
          },
          {
            id: 'uk-w1-2',
            title: 'Pre-Book Airport Express / Minivan Transfer',
            desc: 'Plan travel from Heathrow, Gatwick, or Manchester Airport (Heathrow Express, Elizabeth Line, or pre-booked private minivan for families with luggage).',
            priority: 'high'
          },
          {
            id: 'uk-w1-3',
            title: '48-Hour Survival Kit in Hand Luggage',
            desc: 'Pack 2 changes of clothes, essential chargers, Type G adapter, infant necessities, and prescription medications in cabin luggage.',
            priority: 'critical'
          },
          {
            id: 'uk-w1-4',
            title: 'Online Airline Check-In & Departure',
            desc: 'Complete airline check-in 24-48 hours before departure. Check terminal numbers and fly to the UK!',
            priority: 'high'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Immediate Landing & Transit Card',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'uk-arr-1',
            title: 'Activate UK SIM Card (EE, Vodafone, O2, or giffgaff)',
            desc: 'Switch to a UK mobile plan. A UK mobile number is required to receive bank verification codes, delivery notifications, and landlord messages.',
            timing: 'Day 1'
          },
          {
            id: 'uk-arr-2',
            title: 'Setup Transit Payments (Contactless / Oyster Card)',
            desc: 'Use any contactless debit/credit card or buy an Oyster Card for London Underground (Tube) and bus travel with automatic daily fare capping.',
            timing: 'Day 1-2'
          },
          {
            id: 'uk-arr-3',
            title: 'Collect BRP Card (if applicable) or Generate eVisa Share Code',
            desc: 'If your visa issued a physical Biometric Residence Permit (BRP), collect it at your designated Post Office branch within 10 days of arrival. If on digital eVisa, generate a right-to-work share code online via gov.uk.',
            timing: 'Days 2-3'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'National Insurance Number & Council Tax',
        badge: 'Legal Foundation',
        tasks: [
          {
            id: 'uk-arr-4',
            title: 'Apply for National Insurance Number (NINo)',
            desc: 'Apply online on gov.uk for your National Insurance Number. You can start working without a NINo if you have proof of your right to work in the UK, but provide it to payroll as soon as received.',
            timing: 'Days 4-7'
          },
          {
            id: 'uk-arr-5',
            title: 'Register for Local Council Tax with Landlord',
            desc: 'Ensure your name is registered on the municipal Council Tax bill for your address. Council Tax bills serve as premier proof of address in the UK for banking and credit checks.',
            timing: 'Days 5-7'
          },
          {
            id: 'uk-arr-6',
            title: 'Workplace Onboarding & Child School Application',
            desc: 'Submit your right-to-work share code and bank details to employer HR. Submit formal in-year school admissions to your local council education department for children.',
            timing: 'Week 1'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Banking & NHS GP Surgery Registration',
        badge: 'Financial & Medical',
        tasks: [
          {
            id: 'uk-arr-7',
            title: 'Open UK Bank Account (Monzo, Starling, HSBC, Barclays)',
            desc: 'Open an account with digital banks like Monzo or Starling (which only require passport photo and video selfie), or book a branch appointment at Barclays/HSBC with your proof of address.',
            timing: 'Days 8-10'
          },
          {
            id: 'uk-arr-8',
            title: 'Register with an NHS GP Surgery & Receive NHS Number',
            desc: 'Find your local GP surgery based on postcode (nhs.uk/service-search/find-a-gp) and register online or in person. Once registered, you will receive an NHS Number giving full access to state healthcare and prescriptions.',
            timing: 'Days 10-14'
          },
          {
            id: 'uk-arr-9',
            title: 'TV Licence Registration (£169.50/Year)',
            desc: 'In the UK, watching live broadcast television or using BBC iPlayer on any device legally requires a TV Licence (£169.50/year). Failure to hold one carries fines up to £1,000.',
            timing: 'Week 2'
          }
        ]
      },
      {
        phase: 'Weeks 3 & 4 (Days 15 to 30)',
        title: 'Long-Term Housing, Driving & Settling',
        badge: 'Permanent Nesting',
        tasks: [
          {
            id: 'uk-arr-10',
            title: 'Long-Term Flat Hunting on Rightmove & Zoopla',
            desc: 'Set up instant alerts on Rightmove and Zoopla. Prepare tenant references, proof of employment, credit check consent, and 5-week deposit (held in a government Tenancy Deposit Scheme).',
            timing: 'Days 15-25'
          },
          {
            id: 'uk-arr-11',
            title: 'Driving License Exchange / 12-Month Rule',
            desc: 'In the UK, you can drive on a valid foreign driver\'s license for up to 12 months from your date of arrival. Check DVLA reciprocity rules if eligible to exchange without a practical test.',
            timing: 'Week 3'
          },
          {
            id: 'uk-arr-12',
            title: 'Community Integration & Local Council Recycling Norms',
            desc: 'Familiarize yourself with your borough\'s color-coded recycling bins (general, food waste, plastics, paper). Join local neighborhood groups (Nextdoor, Expats in London, British-Indian / international cultural clubs).',
            timing: 'Week 4'
          }
        ]
      }
    ]
  },

  netherlands: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Dutch Accommodation with BSN Rights',
        focus: 'Finding a municipality-registerable flat in the Netherlands',
        tasks: [
          {
            id: 'nl-w4-1',
            title: 'Book Temporary Accommodation with Gemeente BSN Rights',
            desc: 'Ensure your temporary apartment explicitly confirms in writing that you can register with the local municipality (Gemeente). Without address registration, you cannot receive your BSN (Burgerservicenummer) or open a Dutch bank account!',
            priority: 'critical'
          },
          {
            id: 'nl-w4-2',
            title: 'Comprehensive Dental & Medical Exams Back Home',
            desc: 'Complete dental cleanings and optical exams before leaving. Adult dental care is not included in standard Dutch statutory basic healthcare (Basisverzekering) and requires expensive add-on policies.',
            priority: 'high'
          },
          {
            id: 'nl-w4-3',
            title: 'Notify Banks & Setup Wise with Euro IBAN',
            desc: 'Order a Wise card or Revolut account supporting Euro IBANs. In the Netherlands, many supermarkets (such as Albert Heijn) historical prefer Maestro/V-Pay and Dutch debit cards over Mastercard/Visa credit cards.',
            priority: 'critical'
          },
          {
            id: 'nl-w4-4',
            title: 'Submit Formal Resignation Back Home',
            desc: 'Serve formal notice to your employer, landlord, and domestic subscriptions.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Apostilles & Dutch 30% Ruling Preparation',
        focus: 'Birth certificates, marriage apostilles, and tax ruling documentation',
        tasks: [
          {
            id: 'nl-w3-1',
            title: 'Hague Apostille on Original Birth & Marriage Certificates',
            desc: 'Dutch municipalities (Gemeentes) strictly demand legal birth certificates with a Hague Apostille or consular legalization translated into Dutch, English, French, or German to complete civil registration.',
            priority: 'critical'
          },
          {
            id: 'nl-w3-2',
            title: 'Gather 30% Ruling Expat Tax Exemption Documentation',
            desc: 'If moving for skilled employment, gather your employment contract and proof of living 150km+ from the Dutch border prior to employment to apply for the lucrative 30% tax-free income ruling.',
            priority: 'high'
          },
          {
            id: 'nl-w3-3',
            title: 'Cloud Vault & Biometric Photos',
            desc: 'Upload 300 DPI scans of all contracts, degrees, and passport photos to encrypted storage.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Dutch Apps, OV-Chipkaart & Plug Check',
        focus: 'Transit and Dutch lifestyle preparation',
        tasks: [
          {
            id: 'nl-w2-1',
            title: 'Download 9292, NS App & Buienradar (Rain Radar)',
            desc: 'Install 9292 (the definitive Dutch door-to-door transit planner), NS (Dutch railways app), and Buienradar (essential for checking rain showers before cycling!).',
            priority: 'critical'
          },
          {
            id: 'nl-w2-2',
            title: 'Check European Type C/F Plugs & 230V Voltage',
            desc: 'The Netherlands uses standard European Type C and Schuko Type F sockets at 230V 50Hz.',
            priority: 'medium'
          },
          {
            id: 'nl-w2-3',
            title: 'Exchange Small Euro Cash Buffer (€200 - €300)',
            desc: 'Keep €200 to €300 in cash, though the Netherlands is almost 100% cashless via PIN debit cards.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to Travel Day)',
        title: 'Carry-On Verification & Liftoff',
        focus: 'Final document checks and flight day',
        tasks: [
          {
            id: 'nl-w1-1',
            title: 'Carry-On Document Binder Check',
            desc: 'Assemble hard copies: Passport with MVV sticker / approval letter, apostilled birth certificate, work contract, and rental confirmation in your cabin folder.',
            priority: 'critical'
          },
          {
            id: 'nl-w1-2',
            title: 'Schiphol Airport Train Transfer Route',
            desc: 'Plan your direct NS intercity train from Amsterdam Airport Schiphol directly to Amsterdam Centraal, Utrecht, Rotterdam, or The Hague.',
            priority: 'high'
          },
          {
            id: 'nl-w1-3',
            title: '48-Hour Survival Kit in Hand Luggage',
            desc: 'Pack 2 changes of clothes, essential chargers, and prescription medications in hand luggage.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Immediate Landing & Public Transit',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'nl-arr-1',
            title: 'Activate Dutch SIM Card (KPN, Odido, or Vodafone)',
            desc: 'Get a local Dutch phone number for banking, delivery apps, and DigiD two-factor authentication.',
            timing: 'Day 1'
          },
          {
            id: 'nl-arr-2',
            title: 'Buy OV-Chipkaart or Use OVpay (Contactless)',
            desc: 'Use OVpay (tap in and out directly with bank card/Apple Pay) or buy an anonymous/personal OV-Chipkaart for NS trains, trams, and metro.',
            timing: 'Day 1-2'
          },
          {
            id: 'nl-arr-3',
            title: 'Inspect Apartment & Check Tenancy Agreement',
            desc: 'Verify the signed rental agreement needed for your municipal registration at the city hall (Gemeente).',
            timing: 'Day 2-3'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Gemeente Registration, BSN & DigiD',
        badge: 'Legal Foundation',
        tasks: [
          {
            id: 'nl-arr-4',
            title: 'Gemeente Appointment for BSN (Burgerservicenummer)',
            desc: 'Register at the local municipal council (Gemeente) or Expat Centre with your passport, apostilled birth certificate, and lease. Receive your BSN citizen service number.',
            timing: 'Days 4-7'
          },
          {
            id: 'nl-arr-5',
            title: 'Share BSN with Employer & Apply for DigiD',
            desc: 'Submit your BSN to your employer HR for payroll and 30% ruling execution. Apply online for your DigiD digital government identity.',
            timing: 'Days 5-7'
          },
          {
            id: 'nl-arr-6',
            title: 'Workplace Onboarding & Child School Registration',
            desc: 'Meet colleagues, collect laptop, and finalize admissions at local Dutch basisschool or international school.',
            timing: 'Week 1'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Banking, Health Insurance & Bicycle',
        badge: 'Financial & Medical',
        tasks: [
          {
            id: 'nl-arr-7',
            title: 'Open Dutch Bank Account (ING, ABN AMRO, Bunq)',
            desc: 'Open a local checking account with iDEAL payment integration (the universal Dutch online checkout system).',
            timing: 'Days 8-10'
          },
          {
            id: 'nl-arr-8',
            title: 'Buy Mandatory Health Insurance (Basisverzekering) & Register with GP',
            desc: 'By law, all residents must purchase basic health insurance (Zilveren Kruis, CZ, Menzis) within 4 months of arrival. Register with a local neighborhood GP (Huisarts).',
            timing: 'Days 10-14'
          },
          {
            id: 'nl-arr-9',
            title: 'Buy a City Commuter Bicycle & ART-Certified Lock',
            desc: 'Buy a reliable city bike (Swapfiets subscription or secondhand Omafiets) with front and rear lights and a certified chain lock to prevent bike theft.',
            timing: 'Week 2'
          }
        ]
      },
      {
        phase: 'Weeks 3 & 4 (Days 15 to 30)',
        title: 'Housing, IND Residence Card & Settling',
        badge: 'Permanent Nesting',
        tasks: [
          {
            id: 'nl-arr-10',
            title: 'Long-Term House Hunting on Funda & Pararius',
            desc: 'Search for long-term rentals on Funda.nl and Pararius.nl. Prepare employer contract, payslips, and 1 to 2 months deposit.',
            timing: 'Days 15-25'
          },
          {
            id: 'nl-arr-11',
            title: 'Collect IND Residence Permit Card',
            desc: 'Visit the designated IND desk or Expat Center to collect your plastic residence permit card (Verblijfsdocument).',
            timing: 'Week 3'
          },
          {
            id: 'nl-arr-12',
            title: 'Driving License Exchange (30% Ruling Benefit)',
            desc: 'If you receive the 30% Ruling, you can exchange any foreign driving license for a Dutch driving license without passing the Dutch driving exam!',
            timing: 'Week 4'
          }
        ]
      }
    ]
  }
};

// Generic / Template generator for other supported countries (Canada, USA, UAE, Singapore, Australia, Japan)
export function getCountryCountdownTimeline(countryId, countryData, userProfile) {
  const custom = COUNTRY_TIMELINES[countryId];
  if (custom && custom.countdown) {
    return custom.countdown;
  }

  // Smart dynamic generator for other destinations
  const name = countryData?.name || 'Destination Country';
  const currency = countryData?.currency || 'USD';
  const symbol = countryData?.symbol || '$';

  return [
    {
      week: 'Week 4 (T-30 to T-23 Days)',
      title: 'Accommodation, Medical & Financial Locking',
      focus: `Securing initial stay and international banking for ${name}`,
      tasks: [
        {
          id: `${countryId}-w4-1`,
          title: `Book Temporary Accommodation with Address Registration Rights`,
          desc: `Book your first 2 to 4 weeks in a vetted neighborhood in ${name}. Confirm with the host that they will provide proof of address or a utility confirmation for mandatory local registrations.`,
          priority: 'critical'
        },
        {
          id: `${countryId}-w4-2`,
          title: 'Comprehensive Medical & Dental Checkups Back Home',
          desc: `Complete all dental treatments, cleanings, and physicals before leaving. Dental and specialized medical care abroad is costly and often excluded from initial coverage.`,
          priority: 'high'
        },
        {
          id: `${countryId}-w4-3`,
          title: `Notify Home Banks & Order Multi-Currency Travel Cards`,
          desc: `Inform your credit card providers of international travel to ${name} to avoid fraud freezes. Order a Wise or Revolut card with ${currency} support.`,
          priority: 'critical'
        },
        {
          id: `${countryId}-w4-4`,
          title: 'Submit Formal Resignation & Cancel Home Leases',
          desc: 'Serve formal notice to your current employer, landlord, gym, and local utility providers. Keep written cancellation confirmations.',
          priority: 'high'
        }
      ]
    },
    {
      week: 'Week 3 (T-22 to T-15 Days)',
      title: 'Apostilles, Schooling & Cloud Vault',
      focus: `Legalizing certificates and arranging education in ${name}`,
      tasks: [
        {
          id: `${countryId}-w3-1`,
          title: `Hague Apostille & Certified Translations for ${name}`,
          desc: `Ensure all vital documents (degrees, police clearance, marriage, and birth certificates) bear Hague Apostilles and certified translations accepted by immigration authorities in ${name}.`,
          priority: 'critical'
        },
        {
          id: `${countryId}-w3-2`,
          title: `School / Childcare Inquiries & Child Vaccination Records`,
          desc: `For families: Contact schools in your target neighborhood in ${name}. Prepare child immunization history, transcripts, and passport copies.`,
          priority: 'high'
        },
        {
          id: `${countryId}-w3-3`,
          title: 'Secure Cloud Vault & Encrypted Flash Drive Backup',
          desc: 'Upload 300 DPI high-resolution scans of all documents, passports, IDs, work contracts, and biometric photos to encrypted cloud storage.',
          priority: 'high'
        },
        {
          id: `${countryId}-w3-4`,
          title: 'Power of Attorney back home (if owning property/stocks)',
          desc: 'Grant registered Special Power of Attorney to a trusted family member or lawyer to handle urgent physical paperwork in your absence.',
          priority: 'medium'
        }
      ]
    },
    {
      week: 'Week 2 (T-14 to T-8 Days)',
      title: 'SIM, Essential City Apps & Currency Buffer',
      focus: 'Connectivity and travel preparation',
      tasks: [
        {
          id: `${countryId}-w2-1`,
          title: `Pre-Order International eSIM & Download Local Transit Apps`,
          desc: `Install a travel eSIM for arrival day. Download local city transit apps, ride-hailing apps, and offline maps for ${userProfile.destinationCity || name}.`,
          priority: 'critical'
        },
        {
          id: `${countryId}-w2-2`,
          title: 'Dry Run Packing & Digital Luggage Scale Weigh-In',
          desc: 'Pack suitcases and weigh with a digital luggage scale. Pre-book additional baggage allowance online with the airline to avoid high airport counter excess fees.',
          priority: 'high'
        },
        {
          id: `${countryId}-w2-3`,
          title: `Exchange Physical Currency Buffer (~${symbol}300 - ${symbol}500)`,
          desc: `Obtain ~${symbol}300 to ${symbol}500 in local cash for coin lockers, transit cards, and small vendors upon arrival in ${name}.`,
          priority: 'high'
        },
        {
          id: `${countryId}-w2-4`,
          title: `Check Plug Types & Voltage for ${name}`,
          desc: `Verify electrical plug type and voltage standards in ${name} before packing appliances and electronics.`,
          priority: 'medium'
        }
      ]
    },
    {
      week: 'Week 1 (T-7 to Travel Day)',
      title: 'Carry-On Verification & Liftoff',
      focus: 'Zero-risk travel day execution',
      tasks: [
        {
          id: `${countryId}-w1-1`,
          title: 'Carry-On Document Binder Check (Never in Checked Bag!)',
          desc: `Assemble hard copies: Passport with ${name} entry visa, work contract, accommodation booking, health insurance certificate, and apostilled certificates in your cabin bag.`,
          priority: 'critical'
        },
        {
          id: `${countryId}-w1-2`,
          title: 'Pre-Book Official Airport Transfer',
          desc: 'Pre-book an authorized airport transfer or verify official taxi counter locations at the arrival airport to avoid unauthorized street touts.',
          priority: 'high'
        },
        {
          id: `${countryId}-w1-3`,
          title: 'Keep 48-Hour Survival Kit in Hand Luggage',
          desc: 'Pack 2 changes of clothes, essential chargers, plug adapters, infant necessities, and prescription medications in hand luggage.',
          priority: 'critical'
        },
        {
          id: `${countryId}-w1-4`,
          title: 'Online Flight Check-In & Departure',
          desc: `Complete online check-in 24-48 hours before flight, double check luggage tags, and begin your journey to ${name}!`,
          priority: 'high'
        }
      ]
    }
  ];
}

export function getCountryArrivalRoadmap(countryId, countryData, userProfile) {
  const custom = COUNTRY_TIMELINES[countryId];
  if (custom && custom.arrival) {
    return custom.arrival;
  }

  // Dynamic arrival generator for other countries
  const name = countryData?.name || 'Destination Country';
  const city = userProfile.destinationCity || 'your city';

  return [
    {
      phase: 'Days 1 to 3',
      title: 'Immediate Landing & Local Connectivity',
      badge: 'Landing & Connectivity',
      tasks: [
        {
          id: `${countryId}-arr-1`,
          title: `Activate Local Mobile SIM / eSIM in ${name}`,
          desc: `Switch to a local monthly mobile plan. A local phone number in ${name} is essential for verification SMS, delivery apps, and landlord communications.`,
          timing: 'Day 1'
        },
        {
          id: `${countryId}-arr-2`,
          title: `Get Commuter Public Transit Card for ${city}`,
          desc: `Purchase a local rechargeable commuter transit pass for subway, bus, and light rail travel across ${city}.`,
          timing: 'Day 1-2'
        },
        {
          id: `${countryId}-arr-3`,
          title: `Inspect Temporary Lodging & Obtain Address Proof`,
          desc: `Inspect accommodation for pre-existing damages and obtain written tenancy confirmation or landlord registration needed for municipal registration in ${name}.`,
          timing: 'Day 2-3'
        }
      ]
    },
    {
      phase: 'Week 1 (Days 4 to 7)',
      title: 'Legal Resident Registration & Tax Identifier',
      badge: 'Legal Foundation',
      tasks: [
        {
          id: `${countryId}-arr-4`,
          title: `Complete Mandatory Resident Registration in ${name}`,
          desc: `Attend your city / municipal registration appointment. This establishes your legal address and unlocks your resident identifier.`,
          timing: 'Days 4-7'
        },
        {
          id: `${countryId}-arr-5`,
          title: `Receive National Tax Identification Number`,
          desc: `Obtain your tax identifier and provide it to your employer\'s HR department immediately to ensure proper payroll withholding tax classification.`,
          timing: 'Week 1'
        },
        {
          id: `${countryId}-arr-6`,
          title: 'Workplace & School Orientation',
          desc: 'First day at the office: meet colleagues, collect workstation equipment, and submit school admission dossiers for children.',
          timing: 'Week 1'
        }
      ]
    },
    {
      phase: 'Week 2 (Days 8 to 14)',
      title: 'Local Banking & Healthcare Activation',
      badge: 'Financial & Medical',
      tasks: [
        {
          id: `${countryId}-arr-7`,
          title: `Open Local Bank Account in ${name}`,
          desc: `Open a local checking/salary account with a recognized domestic bank or digital financial institution. Provide your routing and account number to HR.`,
          timing: 'Days 8-10'
        },
        {
          id: `${countryId}-arr-8`,
          title: `Activate Health Insurance & Register with Local Doctor`,
          desc: `Enroll in statutory or private health insurance in ${name}. Locate a nearby General Practitioner (GP / Family Doctor) and register your family on their patient list.`,
          timing: 'Days 10-14'
        },
        {
          id: `${countryId}-arr-9`,
          title: 'Residential Protocols & Neighborhood Safety',
          desc: `Learn building entry rules, package delivery procedures, emergency building contacts, and neighborhood etiquette.`,
          timing: 'Week 2'
        }
      ]
    },
    {
      phase: 'Weeks 3 & 4 (Days 15 to 30)',
      title: 'Long-Term Housing, Driving & Settling',
      badge: 'Permanent Nesting',
      tasks: [
        {
          id: `${countryId}-arr-10`,
          title: `Long-Term Apartment Hunting on Leading Portals`,
          desc: `Submit tenant application packages on verified rental portals. Prepare proof of income, deposit funds, credit checks, and reference letters.`,
          timing: 'Days 15-25'
        },
        {
          id: `${countryId}-arr-11`,
          title: `Driving License Conversion / IDP Validity Check`,
          desc: `Check local driver's license conversion regulations and reciprocity in ${name}. Most jurisdictions permit foreign driving for strictly 6 to 12 months before requiring a local license.`,
          timing: 'Week 3'
        },
        {
          id: `${countryId}-arr-12`,
          title: `Community Networking & Local Social Circles`,
          desc: `Connect with local expat communities, cultural associations, language exchange groups, and community sports clubs in ${city}.`,
          timing: 'Week 4'
        }
      ]
    }
  ];
}
