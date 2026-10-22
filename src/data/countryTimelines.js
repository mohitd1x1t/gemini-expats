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
  },

  uae: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Attestations & Medical Preparation',
        focus: 'Document legalization through UAE Embassy and MOFA, and health records',
        tasks: [
          {
            id: 'uae-w4-1',
            title: 'Attest Degree and Civil Certificates via MOFA & UAE Embassy',
            desc: 'UAE immigration strictly requires educational degrees, marriage, and birth certificates to be fully attested: home country foreign ministry, UAE Embassy in home country, and Ministry of Foreign Affairs (MOFA) in UAE.',
            priority: 'critical'
          },
          {
            id: 'uae-w4-2',
            title: 'Medical Fitness Preparation & Health Clearance',
            desc: 'UAE residency requires passing a mandatory medical screening (blood test for infectious diseases and chest X-ray for active tuberculosis). Ensure prior medical checkups are complete.',
            priority: 'high'
          },
          {
            id: 'uae-w4-3',
            title: 'Order Multi-Currency Travel Card (AED Support)',
            desc: 'Order a multi-currency card (Wise/Revolut) supporting United Arab Emirates Dirham (AED) to pay initial hotel deposits, taxi fares, and government fees without heavy foreign transaction surcharges.',
            priority: 'high'
          },
          {
            id: 'uae-w4-4',
            title: 'Passport Validity Check (Minimum 6 Months)',
            desc: 'Ensure passport has at least 6 months validity from expected date of arrival and at least 3 blank pages for UAE visa and residency stamping.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Entry Permit & Temporary Accommodation',
        focus: 'Securing the UAE Entry Permit (Pink Visa) and initial accommodation',
        tasks: [
          {
            id: 'uae-w3-1',
            title: 'Receive Official UAE Entry Permit (Pink Visa)',
            desc: 'Your employer/sponsor applies for an electronic Entry Permit via MOHRE / GDRFA / ICP. Verify your name matches your passport letter-for-letter before flying.',
            priority: 'critical'
          },
          {
            id: 'uae-w3-2',
            title: 'Book Temporary Furnished Accommodation in Dubai or Abu Dhabi',
            desc: 'Book your first 2 to 4 weeks in a central district (e.g. Dubai Marina, Downtown, Business Bay, JLT, or Al Reem Island in Abu Dhabi). Ensure the property provides written booking confirmation.',
            priority: 'critical'
          },
          {
            id: 'uae-w3-3',
            title: 'Review UAE Banned Medications List (MOHAP)',
            desc: 'Certain prescription painkillers, sleeping pills, and ADHD stimulants are strictly controlled in the UAE. Check the Ministry of Health and Prevention (MOHAP) controlled drug list and obtain online import approval if needed.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Pet Relocation & Home Resignation',
        focus: 'Finalizing home affairs and preparing cargo/logistics',
        tasks: [
          {
            id: 'uae-w2-1',
            title: 'Submit Resignation & Obtain Employment Experience Letters',
            desc: 'Serve formal notice to current employer. Collect stamped service letters, reference contacts, and last 6 months payslips for UAE banking and executive credit applications.',
            priority: 'high'
          },
          {
            id: 'uae-w2-2',
            title: 'Driving License Verification for Reciprocal Conversion',
            desc: 'Check if your home country license is on the UAE RTA approved exemption list (UK, USA, Canada, EU nations, Australia, Japan). If eligible, bring the physical original for instant conversion.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'App Installation & Flight Departure',
        focus: 'Digital setup and packing for Dubai / Abu Dhabi arrival',
        tasks: [
          {
            id: 'uae-w1-1',
            title: 'Download Essential UAE Digital Apps',
            desc: 'Install UAE Pass (national digital identity), Dubai Now (municipal utilities and payments), Careem (ride-hailing and food delivery), and Nol Pay.',
            priority: 'critical'
          },
          {
            id: 'uae-w1-2',
            title: 'Pack Original Legal Documents in Carry-On Bag',
            desc: 'Keep attested degree certificates, marriage/birth certificates, printed Entry Permit, passport, and passport photos on white background in your carry-on backpack.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Landing, SIM Card & Nol Smartcard',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'uae-arr-1',
            title: 'Collect Local UAE SIM Card at DXB / AUH Airport',
            desc: 'Collect a local telecom SIM card (e& or du) at airport passport control. A local +971 phone number is essential for receiving OTPs from government portals, banks, and building security.',
            timing: 'Day 1'
          },
          {
            id: 'uae-arr-2',
            title: 'Purchase Dubai Nol Card (Silver or Gold)',
            desc: 'Purchase an RTA Nol Card at airport metro station for seamless travel on Dubai Metro, Dubai Tram, and city buses with automatic fare deduction.',
            timing: 'Day 1-2'
          },
          {
            id: 'uae-arr-3',
            title: 'Check Into Temporary Lodging & Perform In-Country Status Change',
            desc: 'If you entered on a tourist visa instead of an entry permit, employer will file an in-country Change of Status without requiring you to exit the country.',
            timing: 'Day 2-3'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Medical Fitness Screening & Emirates ID Biometrics',
        badge: 'Legal Identity',
        tasks: [
          {
            id: 'uae-arr-4',
            title: 'Complete Mandatory Medical Fitness Screening',
            desc: 'Visit an authorized DHA Medical Fitness Centre (e.g. Al Muhaisnah or Smart Salem VIP center) for mandatory blood test and chest X-ray screening.',
            timing: 'Days 4-5'
          },
          {
            id: 'uae-arr-5',
            title: 'Attend ICP Emirates ID Biometric Enrollment',
            desc: 'Visit an ICP (Federal Authority for Identity and Citizenship) biometric center for fingerprint scanning, facial photography, and retina capture.',
            timing: 'Days 5-7'
          },
          {
            id: 'uae-arr-6',
            title: 'Office Orientation & MOHRE Contract Signing',
            desc: 'Report to your corporate office or Free Zone authority. Sign your standard MOHRE tripartite employment contract detailing salary and benefits.',
            timing: 'Days 4-7'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Emirates ID Delivery, UAE Pass & Bank Account',
        badge: 'Financial Foundation',
        tasks: [
          {
            id: 'uae-arr-7',
            title: 'Receive Digital Residency Visa & Physical Emirates ID',
            desc: 'GDRFA/ICP issues your digital residency visa. Your physical Emirates ID smartcard is delivered via Emirates Post to your registered address.',
            timing: 'Days 8-10'
          },
          {
            id: 'uae-arr-8',
            title: 'Activate UAE Pass Digital National Identity',
            desc: 'Register on the UAE Pass smartphone app using your new Emirates ID card and facial verification. Unlocks 100% of municipal and federal digital services.',
            timing: 'Days 9-11'
          },
          {
            id: 'uae-arr-9',
            title: 'Open UAE Bank Account (Zero Minimum Balance / Digital)',
            desc: 'Open a local checking/salary account with Emirates NBD, ADCB, FAB, or Wio digital bank using your Emirates ID and salary certificate.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Housing, Cheques & Ejari Registration',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'uae-arr-10',
            title: 'House Hunting on Property Finder & Bayut',
            desc: 'Tour verified properties in your target neighborhoods. Check building amenities (pool, gym, covered parking, chiller free status).',
            timing: 'Days 15-18'
          },
          {
            id: 'uae-arr-11',
            title: 'Issue Rent Cheques & Register Ejari Lease',
            desc: 'In the UAE, rent is paid via post-dated bank cheques (1 to 4 cheques per year). Register your unified tenancy contract on the official Ejari system (vital for DEWA and family visas).',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'Utilities, Driving License & Family Visas',
        badge: 'Settling In',
        tasks: [
          {
            id: 'uae-arr-12',
            title: 'Connect DEWA (Dubai Electricity & Water) Online',
            desc: 'DEWA is activated automatically upon Ejari registration. Pay the security deposit (AED 2,000 for apartment / AED 4,000 for villa) online.',
            timing: 'Day 22'
          },
          {
            id: 'uae-arr-13',
            title: 'Exchange Driving License at RTA & Get Salik Tag',
            desc: 'Visit an RTA Customer Happiness Centre with eye test results and your home license to receive your physical UAE Driving License. Purchase a Salik toll tag for your car.',
            timing: 'Days 23-26'
          },
          {
            id: 'uae-arr-14',
            title: 'Sponsor Family Dependents for UAE Residence Visas',
            desc: 'Using your Emirates ID, salary certificate, and Ejari tenancy contract, apply for dependent residence visas for spouse and children via Amer Centre or ICP portal.',
            timing: 'Days 25-30'
          }
        ]
      }
    ]
  },

  singapore: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'MOM Educational Verification & COMPASS',
        focus: 'Ministry of Manpower degree screening and initial preparations',
        tasks: [
          {
            id: 'sg-w4-1',
            title: 'Submit Degree to MOM-Approved Verification Agency',
            desc: 'Singapore MOM requires candidate degrees to be verified through accredited background screening agencies (Dataflow, Cisive, HireRight) to fulfill COMPASS C2 criteria.',
            priority: 'critical'
          },
          {
            id: 'sg-w4-2',
            title: 'Notify Home Banks & Prepare Multi-Currency Card (SGD Support)',
            desc: 'Order a multi-currency card (Wise/Revolut) supporting Singapore Dollars (SGD) for instant fee payments and local tap-to-pay transit.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'In-Principle Approval (IPA) & Accommodation',
        focus: 'Receiving the IPA letter and booking initial stay',
        tasks: [
          {
            id: 'sg-w3-1',
            title: 'Receive MOM In-Principle Approval (IPA) Letter',
            desc: 'Your employer receives the IPA letter via myMOM. Print the full document; it acts as an official single-entry visa for Singapore.',
            priority: 'critical'
          },
          {
            id: 'sg-w3-2',
            title: 'Book Serviced Apartment or Temporary Stay',
            desc: 'Book temporary lodging in a convenient district (Tanjong Pagar, Novena, River Valley). Note that Airbnb short-term rentals under 3 months are strictly prohibited in Singapore private residential properties.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Employment Resignation & Vital Records',
        focus: 'Finalizing affairs back home',
        tasks: [
          {
            id: 'sg-w2-1',
            title: 'Legalize Marriage & Birth Certificates for DP Sponsorship',
            desc: 'If relocating with family, ensure marriage and child birth certificates are translated into English by a certified translator or notary public.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'Arrival Card (SGAC) & Packing',
        focus: 'Electronic declaration and travel readiness',
        tasks: [
          {
            id: 'sg-w1-1',
            title: 'Submit Singapore Arrival Card (SGAC) Online',
            desc: 'Submit the electronic SG Arrival Card with health declaration on the ICA portal within 3 days prior to arriving at Singapore Changi Airport.',
            priority: 'critical'
          },
          {
            id: 'sg-w1-2',
            title: 'Pack Original Degree and IPA in Cabin Luggage',
            desc: 'Carry original degree certificates, passport, IPA letter, and employment contract in your carry-on luggage for immigration inspection.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Landing, Changi SIM & SimplyGo Transit',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'sg-arr-1',
            title: 'Pick Up Local Tourist/Postpaid SIM at Changi Airport',
            desc: 'Pick up a local SIM (Singtel, StarHub, M1). A local Singapore +65 phone number is required for Singpass SMS notifications.',
            timing: 'Day 1'
          },
          {
            id: 'sg-arr-2',
            title: 'Tap SimplyGo on MRT & Public Buses',
            desc: 'You can tap directly onto MRT trains and public buses with your contactless bank card, Apple Pay, or EZ-Link card.',
            timing: 'Day 1-2'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Pass Issuance & EPSC Biometrics',
        badge: 'Work Pass Registration',
        tasks: [
          {
            id: 'sg-arr-3',
            title: 'Employer Issues Pass via myMOM Portal',
            desc: 'Upon landing, employer requests card issuance on myMOM and receives the Notification Letter allowing you to work immediately.',
            timing: 'Days 4-5'
          },
          {
            id: 'sg-arr-4',
            title: 'Attend Biometrics Appointment at MOM EPSC',
            desc: 'Visit the Employment Pass Services Centre (EPSC) at Riverside Walk for fingerprint registration and photo capture.',
            timing: 'Days 5-7'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'EP Smartcard, Singpass & Local Banking',
        badge: 'Digital Identity & Finance',
        tasks: [
          {
            id: 'sg-arr-5',
            title: 'Receive Physical Employment Pass Smartcard',
            desc: 'Your EP smartcard is delivered to your employer\'s registered address within 4 business days. Download SGWorkPass app.',
            timing: 'Days 8-10'
          },
          {
            id: 'sg-arr-6',
            title: 'Set Up Singpass Digital National Identity',
            desc: 'Register for Singpass on the app using your FIN number. Unlocks all digital government transactions, tax filings, and banking.',
            timing: 'Days 9-11'
          },
          {
            id: 'sg-arr-7',
            title: 'Open Singapore Bank Account (DBS, OCBC, UOB)',
            desc: 'Open an everyday checking and savings account via Singpass MyInfo verification for instant approval.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Housing on PropertyGuru',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'sg-arr-8',
            title: 'Search Condominiums or HDB Flats on PropertyGuru',
            desc: 'Inspect target units. For HDB rentals, confirm landlord has valid HDB approval and ethnic integration quota compliance for foreign tenants.',
            timing: 'Days 15-18'
          },
          {
            id: 'sg-arr-9',
            title: 'Sign Letter of Intent (LOI) & Tenancy Agreement (TA)',
            desc: 'Submit LOI with 1 month good faith deposit. Review standard CEA tenancy agreement with 1-2 months security deposit and diplomatic clause.',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'Utilities & Dependant\'s Pass (DP)',
        badge: 'Settling In',
        tasks: [
          {
            id: 'sg-arr-10',
            title: 'Open SP Services Account for Water & Electricity',
            desc: 'Download the SP Utilities app to open your residential utilities account with digital meter activation.',
            timing: 'Day 22'
          },
          {
            id: 'sg-arr-11',
            title: 'Complete Dependant\'s Pass Registration for Family',
            desc: 'Attend family biometrics at EPSC and receive DP smartcards for spouse and children.',
            timing: 'Days 23-30'
          }
        ]
      }
    ]
  },

  australia: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'VEVO Visa Check & Health Examination',
        focus: 'Department of Home Affairs verification and medicals',
        tasks: [
          {
            id: 'aus-w4-1',
            title: 'Verify Visa Grant on VEVO (Visa Entitlement Verification Online)',
            desc: 'Check your Subclass 482 / 189 / 190 visa grant letter and confirm full work rights and validity on the official Home Affairs VEVO portal.',
            priority: 'critical'
          },
          {
            id: 'aus-w4-2',
            title: 'Arrange Overseas Visitor Health Cover (OVHC)',
            desc: 'If on Subclass 482, maintain compliant OVHC (Bupa, Medibank, Allianz Care) meeting visa condition 8501 for you and all dependents.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Accommodation & Banking Setup',
        focus: 'Securing lodging in Sydney, Melbourne, Brisbane',
        tasks: [
          {
            id: 'aus-w3-1',
            title: 'Book Initial Temporary Stay',
            desc: 'Book temporary lodging in a vetted neighborhood with train/tram connectivity. Confirm landlord will provide proof of address.',
            priority: 'high'
          },
          {
            id: 'aus-w3-2',
            title: 'Order Multi-Currency Card (AUD Support)',
            desc: 'Order a multi-currency card (Wise) with Australian Dollar balance for tap-and-go payments upon landing.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Employment Resignation & Documents',
        focus: 'Finalizing affairs back home',
        tasks: [
          {
            id: 'aus-w2-1',
            title: 'Assemble NAATI Certified Civil Documents',
            desc: 'Ensure marriage and birth certificates not in English have official NAATI certified translations.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'Biosecurity Customs Awareness & Flight',
        focus: 'Australian Border Force compliance',
        tasks: [
          {
            id: 'aus-w1-1',
            title: 'Review Strict Biosecurity Declaration Rules',
            desc: 'Australia enforces world-leading biosecurity laws. Never pack fresh fruit, meat, dairy, seeds, or uncleaned hiking boots. Declare all food items on incoming passenger card.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Landing, SIM Card & Public Transit Pass',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'aus-arr-1',
            title: 'Buy Local Australian SIM Card at Airport',
            desc: 'Collect a local mobile SIM (Telstra, Optus, or Vodafone). An Australian +61 number is required for myGov and banking.',
            timing: 'Day 1'
          },
          {
            id: 'aus-arr-2',
            title: 'Transit Card / Contactless Tap',
            desc: 'Get an Opal Card in Sydney, myki in Melbourne, or simply tap your contactless bank card directly on gates and buses.',
            timing: 'Day 1-2'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Tax File Number (TFN) & First Day at Work',
        badge: 'Tax & Employment',
        tasks: [
          {
            id: 'aus-arr-3',
            title: 'Apply Online for Tax File Number (TFN) via ATO',
            desc: 'Apply online on the Australian Taxation Office (ATO) website once physically inside Australia. Provide TFN to employer within 28 days to avoid highest marginal tax withholding.',
            timing: 'Days 4-5'
          },
          {
            id: 'aus-arr-4',
            title: 'Report to Employer & Superannuation Setup',
            desc: 'First day at workplace: submit TFN, passport, and elect your Superannuation fund (e.g. AustralianSuper) for 11.5% mandatory employer retirement contributions.',
            timing: 'Days 4-7'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Australian Banking & Medicare Enrollment',
        badge: 'Finance & Healthcare',
        tasks: [
          {
            id: 'aus-arr-5',
            title: 'Activate Australian Bank Account (Big 4)',
            desc: 'Visit a branch of CommBank, ANZ, NAB, or Westpac with your passport to complete 100-point ID check and receive debit card.',
            timing: 'Days 8-10'
          },
          {
            id: 'aus-arr-6',
            title: 'Enroll in Medicare (if Eligible)',
            desc: 'Permanent residents or citizens from reciprocal healthcare countries (UK, Netherlands, Italy, etc.) register at Services Australia for a Medicare card.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Rentals on Realestate & Domain',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'aus-arr-7',
            title: 'Inspect Rentals & Submit 1Form / 2Apply Dossier',
            desc: 'Attend Saturday rental inspections. Submit electronic application with 100 points of ID, employer letter, and payslips.',
            timing: 'Days 15-18'
          },
          {
            id: 'aus-arr-8',
            title: 'Pay 4 Weeks Bond to State Rental Bonds Board',
            desc: 'Security bond (typically 4 weeks rent) is held safely by the government statutory authority (Rental Bonds Online).',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'Utilities & Driver License Exchange',
        badge: 'Settling In',
        tasks: [
          {
            id: 'aus-arr-9',
            title: 'Connect Electricity, Gas & Internet',
            desc: 'Connect electricity and NBN broadband through providers like AGL, Origin, or Aussie Broadband.',
            timing: 'Day 22'
          },
          {
            id: 'aus-arr-10',
            title: 'Exchange Driver License at State Service Centre',
            desc: 'Visit Service NSW / VicRoads within 3 to 6 months to convert foreign license to state driver license.',
            timing: 'Days 23-30'
          }
        ]
      }
    ]
  },

  japan: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Certificate of Eligibility (CoE) & Visa Stamping',
        focus: 'Securing the CoE and Japanese consular visa',
        tasks: [
          {
            id: 'jp-w4-1',
            title: 'Receive Certificate of Eligibility (CoE) from Employer',
            desc: 'Confirm employer has obtained your electronic CoE from the Regional Immigration Services Bureau in Japan.',
            priority: 'critical'
          },
          {
            id: 'jp-w4-2',
            title: 'Apply for Japanese Entry Visa at Consulate',
            desc: 'Submit your passport, CoE, and application form to the local Japanese embassy or consulate to receive your visa sticker.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Temporary Apartment & Personal Seal (Hanko)',
        focus: 'Lodging in Tokyo / Osaka and personal identification seal',
        tasks: [
          {
            id: 'jp-w3-1',
            title: 'Book Monthly Furnished Apartment',
            desc: 'Book a monthly apartment (Oakwood, Metroresidences, Fontana) where landlord permits address registration.',
            priority: 'critical'
          },
          {
            id: 'jp-w3-2',
            title: 'Order Personal Seal (Hanko / Inkan) in Katakana',
            desc: 'While signatures are increasingly accepted, a wooden or titanium name stamp (Hanko) in Katakana is highly recommended for official Japanese banking and rental contracts.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Flight Booking to Major International Airport',
        focus: 'Ensuring on-the-spot Residence Card issuance',
        tasks: [
          {
            id: 'jp-w2-1',
            title: 'Book Flight into Major International Airport',
            desc: 'Fly into Tokyo Narita (NRT), Tokyo Haneda (HND), Kansai (KIX), or Chubu (NGO) airport where your physical Residence Card (Zairyū Card) is issued instantly at immigration control.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'Cash Preparation & Japan Digital Travel Apps',
        focus: 'Yen cash and digital navigation',
        tasks: [
          {
            id: 'jp-w1-1',
            title: 'Convert Japanese Yen Cash for Initial Days',
            desc: 'Carry ¥30,000 to ¥50,000 in cash. While cashless payment is common, many ramen shops, shrines, and coin laundromats accept cash only.',
            priority: 'high'
          },
          {
            id: 'jp-w1-2',
            title: 'Install Translation and Transit Apps',
            desc: 'Download Google Translate (with Japanese offline camera dictionary) and Japan Travel by NAVITIME for train routing.',
            priority: 'high'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Landing, Zairyū Card & Mobile Suica',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'jp-arr-1',
            title: 'Receive Biometric Residence Card (Zairyū Card) at Airport',
            desc: 'Present your passport and CoE at airport immigration gate to have your physical biometric Residence Card printed on the spot.',
            timing: 'Day 1'
          },
          {
            id: 'jp-arr-2',
            title: 'Pick Up Pocket WiFi or Tourist SIM at Airport',
            desc: 'Collect pre-ordered Pocket WiFi router or data SIM card from airport pickup counter.',
            timing: 'Day 1'
          },
          {
            id: 'jp-arr-3',
            title: 'Add Mobile Suica or Pasmo to Apple Wallet / Google Pay',
            desc: 'Add a digital transit IC card directly to your smartphone wallet for seamless tap-in across Tokyo Metro, JR East lines, and combinis (7-Eleven, Lawson).',
            timing: 'Day 1-2'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Ward Office Registration (Jūminhyō) & Health Insurance',
        badge: 'Municipal Foundation',
        tasks: [
          {
            id: 'jp-arr-4',
            title: 'Register Address at Local City/Ward Office (Kuyakusho)',
            desc: 'Visit your local ward office (e.g. Shinjuku, Shibuya, Minato) within 14 days. Staff will print your official address on the back of your Residence Card and create your Resident Certificate (Jūminhyō).',
            timing: 'Days 4-5'
          },
          {
            id: 'jp-arr-5',
            title: 'Enroll in National Health Insurance & National Pension',
            desc: 'Enroll in National Health Insurance (NHI) and National Pension (Kokumin Nenkin) at the ward office counter if not enrolled directly via employer Shakai Hoken.',
            timing: 'Days 4-6'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'My Number Card & Japanese Bank Account',
        badge: 'Finance & Identity',
        tasks: [
          {
            id: 'jp-arr-6',
            title: 'Receive My Number (Individual Number) Notification',
            desc: 'Collect your My Number letter mailed to your registered address for official tax and payroll reporting.',
            timing: 'Days 8-10'
          },
          {
            id: 'jp-arr-7',
            title: 'Open Japanese Bank Account (Japan Post Bank / Yūcho Ginko)',
            desc: 'During the first 6 months, expats are classed as "non-resident" for banking. Open an account with Japan Post Bank (Yūcho Ginko) or SMBC Prestia using your Residence Card.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Housing via Suumo & Expat Agencies',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'jp-arr-8',
            title: 'Search Apartments on Suumo / GaijinPot Apartments',
            desc: 'Work with an expat-friendly real estate agent. Understand initial upfront costs: Key money (Reikin), Deposit (Shikikin), and Guarantor Company fee.',
            timing: 'Days 15-18'
          },
          {
            id: 'jp-arr-9',
            title: 'Sign Lease Agreement with Hanko Stamp',
            desc: 'Sign the two-year lease agreement using your Hanko stamp and provide copies of Jūminhyō and employment contract.',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'Utilities & Mobile Voice Contract',
        badge: 'Settling In',
        tasks: [
          {
            id: 'jp-arr-10',
            title: 'Connect TEPCO Electricity & Gas',
            desc: 'Call utility providers to open electricity and gas accounts. Gas activation requires an in-person technician visit to open the valve.',
            timing: 'Day 22'
          },
          {
            id: 'jp-arr-11',
            title: 'Switch to Local Voice SIM (IIJmio, Linemo, ahamo)',
            desc: 'With your Jūminhyō, Japanese bank account, and Residence Card, sign up for a permanent Japanese mobile voice plan.',
            timing: 'Days 23-30'
          }
        ]
      }
    ]
  },

  usa: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Form I-797 Approval & DS-160 Filing',
        focus: 'USCIS petition verification and consular appointment',
        tasks: [
          {
            id: 'usa-w4-1',
            title: 'Verify Form I-797 H-1B Approval Notice',
            desc: 'Confirm your employer\'s legal counsel has sent your original Form I-797 Notice of Action and complete I-129 petition copy.',
            priority: 'critical'
          },
          {
            id: 'usa-w4-2',
            title: 'Submit Online DS-160 Form and Pay Consular Fee ($205)',
            desc: 'Complete the Department of State DS-160 application online and schedule your visa interview at the nearest US Embassy or Consulate.',
            priority: 'critical'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Consular Interview & Temporary Housing',
        focus: 'Receiving visa foil and securing initial US lodging',
        tasks: [
          {
            id: 'usa-w3-1',
            title: 'Attend US Consular Visa Interview',
            desc: 'Bring I-797 original, employer support letter, bachelor/master degree diplomas with academic evaluation, and DS-160 confirmation to the interview.',
            priority: 'critical'
          },
          {
            id: 'usa-w3-2',
            title: 'Book Short-Term Lodging in Destination City',
            desc: 'Book your first 2 to 4 weeks in a central location. Verify host will allow receiving mail and package deliveries.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Financial Notifications & Packing',
        focus: 'US banking preparation and travel cards',
        tasks: [
          {
            id: 'usa-w2-1',
            title: 'Order Multi-Currency Card (USD Support)',
            desc: 'Order a multi-currency card (Wise/Revolut) with US Dollar balance to handle initial security deposits and everyday expenses without foreign transaction fees.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'Travel Timing & Documents in Hand',
        focus: '10-Day early entry window compliance',
        tasks: [
          {
            id: 'usa-w1-1',
            title: 'Check 10-Day Early Entry Rule',
            desc: 'By US statutory law, H-1B visa holders may enter the United States up to 10 days before the start date indicated on Form I-797, but cannot work until the official start date.',
            priority: 'critical'
          },
          {
            id: 'usa-w1-2',
            title: 'Assemble I-797, Degrees, and Offer in Carry-On',
            desc: 'CBP border officers at US Port of Entry will inspect your physical I-797 approval, visa stamp, and job offer letter. Never pack them in checked baggage.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Landing, Form I-94 & Mobile SIM',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'usa-arr-1',
            title: 'Download Electronic Form I-94 Arrival Record',
            desc: 'Visit i94.cbp.dhs.gov within 24 hours of landing to retrieve your electronic I-94 arrival record proving legal status and authorized stay duration.',
            timing: 'Day 1'
          },
          {
            id: 'usa-arr-2',
            title: 'Buy Local US Mobile SIM Card',
            desc: 'Activate a monthly plan with T-Mobile, AT&T, or Verizon. A local +1 US phone number is required for two-factor authentication on banking and credit portals.',
            timing: 'Day 1-2'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Form I-9 & Social Security Number (SSN)',
        badge: 'Employment & Tax ID',
        tasks: [
          {
            id: 'usa-arr-3',
            title: 'Complete Form I-9 Employment Verification on Day 1',
            desc: 'Report to your employer and complete federal Form I-9 (Employment Eligibility Verification) presenting your passport, visa, and I-94.',
            timing: 'Days 4-5'
          },
          {
            id: 'usa-arr-4',
            title: 'Apply for Social Security Number (SSN) at SSA Office',
            desc: 'Wait 3 to 5 business days after landing for CBP records to sync with SAVE database, then visit local Social Security Administration office with passport and I-94.',
            timing: 'Days 5-7'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'US Bank Account & Credit Score Foundation',
        badge: 'Finance & Credit',
        tasks: [
          {
            id: 'usa-arr-5',
            title: 'Open Checking & Savings Account (Chase, BofA)',
            desc: 'Visit a local bank branch with passport, I-94, employment offer letter, and lease confirmation to open checking account and set up direct deposit payroll.',
            timing: 'Days 8-10'
          },
          {
            id: 'usa-arr-6',
            title: 'Apply for a Secured Credit Card to Build FICO Score',
            desc: 'In the US, credit history does not transfer from abroad. Open a secured credit card (Discover it Secured or Capital One) to begin establishing your US credit score immediately.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Housing Search',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'usa-arr-7',
            title: 'Search Apartments on Zillow, Streeteasy, or Apartments.com',
            desc: 'Tour prospective rentals. Landlords require proof of 40x monthly rent in annual income, recent bank statements, and background check authorization.',
            timing: 'Days 15-18'
          },
          {
            id: 'usa-arr-8',
            title: 'Sign Lease Agreement & Pay Security Deposit',
            desc: 'Pay first month\'s rent and one month\'s security deposit via cashier\'s check or ACH transfer.',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'State Driver\'s License (REAL ID) & Utilities',
        badge: 'Settling In',
        tasks: [
          {
            id: 'usa-arr-9',
            title: 'Connect Electric, Gas & High-Speed Internet',
            desc: 'Set up accounts with local utility companies (ConEdison, PG&E, National Grid) and schedule broadband installation.',
            timing: 'Day 22'
          },
          {
            id: 'usa-arr-10',
            title: 'Visit State DMV for Driver\'s License or REAL ID',
            desc: 'Schedule appointment at the state DMV (Department of Motor Vehicles) to transfer license or take knowledge test for state driver license.',
            timing: 'Days 23-30'
          }
        ]
      }
    ]
  },

  canada: {
    countdown: [
      {
        week: 'Week 4 (T-30 to T-23 Days)',
        title: 'Port of Entry (POE) Letter & Medical Exam',
        focus: 'IRCC approval documents and panel physician clearance',
        tasks: [
          {
            id: 'ca-w4-1',
            title: 'Verify Port of Entry (POE) Letter of Introduction',
            desc: 'Ensure your IRCC Port of Entry (POE) Letter of Introduction is printed in color; you will hand this directly to the CBSA border officer at the airport to receive your physical work permit.',
            priority: 'critical'
          },
          {
            id: 'ca-w4-2',
            title: 'Obtain International Driver\'s Permit (IDP) & Driving Abstract',
            desc: 'Request a certified driving record / abstract from your home country licensing bureau. In Ontario, BC, and Alberta, this allows immediate credit toward a full Class G / Class 5 driver license.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 3 (T-22 to T-15 Days)',
        title: 'Temporary Lodging in Toronto / Vancouver / Montreal',
        focus: 'Securing initial accommodation in Canada',
        tasks: [
          {
            id: 'ca-w3-1',
            title: 'Book Initial Temporary Stay',
            desc: 'Book 2 to 4 weeks in a transit-friendly neighborhood. Ensure the host can provide written proof of residence.',
            priority: 'critical'
          },
          {
            id: 'ca-w3-2',
            title: 'Order Multi-Currency Card (CAD Support)',
            desc: 'Order a multi-currency card (Wise) with Canadian Dollar (CAD) balance for immediate expenses upon landing.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 2 (T-14 to T-8 Days)',
        title: 'Employment Resignation & Vital Records',
        focus: 'Certified copies of family and academic documents',
        tasks: [
          {
            id: 'ca-w2-1',
            title: 'Assemble Certified English/French Translations',
            desc: 'Ensure birth certificates, marriage certificates, and university degrees have certified English or French translations.',
            priority: 'high'
          }
        ]
      },
      {
        week: 'Week 1 (T-7 to T-0 Days)',
        title: 'Winter Clothing & Flight Departure',
        focus: 'Packing for Canadian climate and border readiness',
        tasks: [
          {
            id: 'ca-w1-1',
            title: 'Pack Thermal Layers and Winter Outerwear',
            desc: 'If arriving between October and April, pack a heavy down parka, thermal underwear, gloves, and waterproof boots in your luggage.',
            priority: 'high'
          },
          {
            id: 'ca-w1-2',
            title: 'Assemble POE Letter, LMIA/Job Offer, and Funds in Carry-On',
            desc: 'CBSA border officers will inspect your POE letter, employer offer, and bank proof of funds before issuing the work permit at immigration.',
            priority: 'critical'
          }
        ]
      }
    ],
    arrival: [
      {
        phase: 'Days 1 to 3',
        title: 'Airport Work Permit, SIM & Transit Card',
        badge: 'Landing & Connectivity',
        tasks: [
          {
            id: 'ca-arr-1',
            title: 'Collect Physical Work Permit from CBSA at Airport',
            desc: 'Present your POE letter at border control. Verify your name, employer name, and conditions on the printed physical Work Permit paper before leaving the counter.',
            timing: 'Day 1'
          },
          {
            id: 'ca-arr-2',
            title: 'Buy Local Canadian SIM Card at Airport',
            desc: 'Activate a monthly mobile plan with Rogers, Telus, Bell, or discount carriers (Fido, Koodo, Freedom). A +1 number is needed for Service Canada.',
            timing: 'Day 1-2'
          },
          {
            id: 'ca-arr-3',
            title: 'Get Transit Smartcard (PRESTO / Compass / OPUS)',
            desc: 'Buy a PRESTO card in Toronto, Compass Card in Vancouver, or OPUS in Montreal for integrated subway, train, and bus transit.',
            timing: 'Day 1-2'
          }
        ]
      },
      {
        phase: 'Week 1 (Days 4 to 7)',
        title: 'Social Insurance Number (SIN) & Health Insurance',
        badge: 'Legal & Health Foundation',
        tasks: [
          {
            id: 'ca-arr-4',
            title: 'Obtain Social Insurance Number (SIN) at Service Canada',
            desc: 'Visit a Service Canada Centre with your passport and physical Work Permit. You will receive your 9-digit SIN paper on the spot.',
            timing: 'Days 4-5'
          },
          {
            id: 'ca-arr-5',
            title: 'Apply for Provincial Healthcare Card (OHIP / MSP / RAMQ)',
            desc: 'Submit application for provincial healthcare. Keep private travel health insurance active during any applicable waiting periods.',
            timing: 'Days 5-7'
          }
        ]
      },
      {
        phase: 'Week 2 (Days 8 to 14)',
        title: 'Canadian Banking Newcomer Package',
        badge: 'Finance & Credit',
        tasks: [
          {
            id: 'ca-arr-6',
            title: 'Open Bank Account with Newcomer Package (RBC, TD, Scotiabank)',
            desc: 'Canadian banks offer dedicated newcomer packages with free checking for one year and an unsecured credit card to begin building your Canadian credit rating.',
            timing: 'Days 8-10'
          },
          {
            id: 'ca-arr-7',
            title: 'Provide SIN and Direct Deposit Void Cheque to Employer',
            desc: 'Download a direct deposit form from your banking app and submit it along with your SIN to corporate payroll.',
            timing: 'Days 10-14'
          }
        ]
      },
      {
        phase: 'Week 3 (Days 15 to 21)',
        title: 'Long-Term Housing on Rentals.ca & Realtor.ca',
        badge: 'Permanent Housing',
        tasks: [
          {
            id: 'ca-arr-8',
            title: 'Search Long-Term Condos or Apartments',
            desc: 'Tour prospective homes with a licensed real estate agent (tenant representation is free in Canada; landlord pays commission).',
            timing: 'Days 15-18'
          },
          {
            id: 'ca-arr-9',
            title: 'Sign Standard Lease & Pay First and Last Month\'s Rent',
            desc: 'Sign the Standard Form of Lease and provide first and last month\'s rent via bank draft or Interac e-Transfer.',
            timing: 'Days 18-21'
          }
        ]
      },
      {
        phase: 'Week 4 (Days 22 to 30)',
        title: 'Driver License Exchange & School Registration',
        badge: 'Settling In',
        tasks: [
          {
            id: 'ca-arr-10',
            title: 'Exchange Driver\'s License at DriveTest / ICBC',
            desc: 'Visit DriveTest (Ontario) or ICBC (BC) with your home license, driving abstract, and proof of address to exchange for provincial driver license.',
            timing: 'Days 22-25'
          },
          {
            id: 'ca-arr-11',
            title: 'Register Children at Local Public School Board',
            desc: 'Contact the local school board (e.g. TDSB in Toronto, VSB in Vancouver) to enroll children in their neighborhood public school.',
            timing: 'Days 25-30'
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
