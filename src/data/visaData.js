// Comprehensive Visa Intelligence, Portals, Document Dossiers & Government Procedures by Country

export const COUNTRY_VISA_DETAILS = {
  germany: {
    country: 'Germany',
    currency: 'EUR',
    symbol: '€',
    familyReunion: {
      spouseWork: 'Spouses of EU Blue Card and Skilled Worker holders receive immediate unrestricted open work authorization in Germany with no German language A1 certificate required prior to arrival.',
      vitalRecords: 'Original marriage and birth certificates require the Hague Apostille from your home foreign ministry plus certified translations into German by a court-sworn translator (beeidigter Übersetzer).',
      housingOrSalary: 'Immigration authorities (Ausländerbehörde) require proof of adequate residential living space (minimum 12m² per adult/child age 6+ and 10m² for younger children).'
    },
    primaryVisas: [
      {
        id: 'eu_blue_card_de',
        name: 'EU Blue Card Germany (Blaue Karte EU)',
        category: 'Skilled Employment',
        validity: 'Duration of contract + 3 months (max 4 years, PR in 21-27 months)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Yes — Fast-track procedure for skilled workers (Beschleunigtes Fachkräfteverfahren) via employer for €411.',
        fees: {
          consularFee: 75,
          auslanderbehordeFee: 100,
          apostillesAndTranslations: 200,
          zabEquivalence: 200,
          total: 575
        },
        portals: [
          {
            name: 'Auswärtiges Amt Consular Services Portal',
            url: 'https://digital.diplo.de',
            loginType: 'BundID or Email Account',
            purpose: 'Official German Federal Foreign Office portal to complete digital visa applications and pre-check documents online.'
          },
          {
            name: 'Anabin Database (KMK)',
            url: 'https://anabin.kmk.org',
            loginType: 'Public Database Access (Free)',
            purpose: 'Verify university degree comparability (must show "H+" status for university and "Entspricht" for degree).'
          },
          {
            name: 'ZAB (Central Office for Foreign Education)',
            url: 'https://zab.kmk.org',
            loginType: 'Online ZAB Account',
            purpose: 'Order a formal Statement of Comparability if your degree is not listed with H+ status on Anabin.'
          },
          {
            name: 'VFS Global / German Embassy Appointment Booking',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Global Account',
            purpose: 'Book the mandatory in-person consular biometric and document submission appointment.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 12 months validity beyond stay and 2 blank visa pages',
            '2 printed copies of the completed VIDEX Category D application form signed by applicant',
            'Declaration of accuracy of information (Belehrung nach § 54 AufenthG)'
          ],
          credentials: [
            'Recognized university degree certificate and academic marksheets',
            'Anabin database printouts showing university (H+) and degree equivalency (Entspricht / Gleichwertig), or ZAB Statement of Comparability',
            'Detailed tabular curriculum vitae (CV) in chronological order with no unexplained career gaps'
          ],
          employment: [
            'Binding employment contract or concrete job offer with gross annual salary meeting threshold (€45,300 for shortage/IT occupations; €50,700 for general)',
            'Official Federal Employment Agency declaration form (Erklärung zum Beschäftigungsverhältnis) completed and signed by German employer'
          ],
          financialAndHealth: [
            'Proof of incoming travel health insurance (Incoming-Krankenversicherung) with minimum €30,000 coverage valid until statutory employment health begins'
          ],
          photoSpec: '2 biometric passport photographs: 35mm x 45mm, sharp focus, neutral facial expression, white/light-grey background, taken within last 6 months (no headwear or tinted glasses).'
        },
        eligibility: [
          'Recognized university degree comparable to a German higher education qualification',
          'Binding job offer in Germany with gross annual salary meeting the statutory threshold (~€45,300 for IT/STEM shortage roles, ~€50,700 for general)',
          'No German language certificate required for initial visa issuance'
        ],
        steps: [
          {
            step: 'Step 1: Government Account Setup & Qualification Check',
            desc: 'Create an account on the Auswärtiges Amt Consular Services Portal (digital.diplo.de). Search the Anabin database to confirm your university has "H+" status and degree is recognized. If unlisted, apply for a ZAB Statement of Comparability.'
          },
          {
            step: 'Step 2: Document Legalization & Sworn German Translations',
            desc: 'Obtain Hague Apostille stamps on your degree certificates from your home country foreign ministry. Have non-English/non-German documents translated by a court-sworn translator (beeidigter Übersetzer).'
          },
          {
            step: 'Step 3: Online VIDEX Application & Employer Declaration',
            desc: 'Fill out the official VIDEX Category D national visa form. Ensure your German employer completes and signs the "Erklärung zum Beschäftigungsverhältnis" detailing salary and social security deductions.'
          },
          {
            step: 'Step 4: Book Consular Slot & Attend Biometrics Appointment',
            desc: 'Schedule an appointment at the German Embassy / Consulate or VFS Global center. Submit your physical passport, biometric photos, and original document dossier. Pay the €75 consular fee.'
          },
          {
            step: 'Step 5: Consular Waiting Period & Visa Sticker Collection',
            desc: 'Track application status via your VFS/Embassy reference number. Processing typically takes 4 to 8 weeks. Collect your passport stamped with the 3 to 6-month national entry visa (D-Visa).'
          },
          {
            step: 'Step 6: Landing, Anmeldung & Ausländerbehörde Blue Card',
            desc: 'Fly to Germany. Within 14 days of moving into your apartment, register your address at the Bürgeramt (Anmeldung). Attend your appointment at the local Ausländerbehörde to receive your physical plastic EU Blue Card.'
          }
        ],
        commonPitfalls: [
          'Submitting an Anabin printout where only the university has H+ but the specific degree discipline is missing or marked "bedingt vergleichbar".',
          'Providing an employer contract with salary below the exact statutory threshold published for that calendar year.',
          'Missing the official Federal Employment Agency declaration form (Erklärung zum Beschäftigungsverhältnis) signed by employer HR.'
        ]
      },
      {
        id: 'chancenkarte_de',
        name: 'Opportunity Card (Chancenkarte)',
        category: 'Job Search',
        validity: '1 year (allows 20 hrs/week part-time work)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Standard consular processing.',
        fees: {
          consularFee: 75,
          blockedAccountSetup: 150,
          apostillesAndTranslations: 200,
          total: 425
        },
        portals: [
          {
            name: 'Make it in Germany Self-Assessment',
            url: 'https://www.make-it-in-germany.com',
            loginType: 'Free Interactive Points Calculator',
            purpose: 'Calculate your points score (minimum 6 points required based on age, language, degree, and experience).'
          },
          {
            name: 'German Consular Services Portal',
            url: 'https://digital.diplo.de',
            loginType: 'BundID or Email Account',
            purpose: 'Lodge Chancenkarte application online and upload verification documents.'
          },
          {
            name: 'Fintiba / Expatrio Blocked Account Portal',
            url: 'https://www.fintiba.com',
            loginType: 'Online Banking Registration',
            purpose: 'Open a legally mandated German Blocked Account (Sperrkonto) with minimum €12,324 (€1,027/month) proof of funds.'
          }
        ],
        documentation: {
          identity: [
            'Valid passport with at least 12 months validity',
            'Signed VIDEX National Visa application form',
            'Letter of motivation detailing target job search sectors, planned living arrangements, and interview strategies'
          ],
          credentials: [
            'Foreign degree or vocational certificate verified by ZAB / Anabin',
            'German language certificate (minimum A1/A2 Goethe / telc) OR English certificate (minimum B2 IELTS / TOEFL)',
            'Proof of at least 2 years continuous professional experience in field of study'
          ],
          financialAndHealth: [
            'Official Sperrkonto (Blocked Account) confirmation letter proving €1,027/month (€12,324 total for 1 year)',
            'Incoming travel health insurance covering 365 days in Germany'
          ],
          photoSpec: '2 standard biometric passport photos (35mm x 45mm, white background).'
        },
        eligibility: [
          'Minimum 6 points under the statutory points framework (awarded for recognized degree, language skills, age under 35/40, and experience)',
          'Proof of financial sustenance via a German Blocked Account (~€1,027/month) or binding part-time employment offer in Germany'
        ],
        steps: [
          {
            step: 'Step 1: Points Assessment & Language Certification',
            desc: 'Calculate points on make-it-in-germany.com. Take an official German language exam (Goethe/telc) or English exam (IELTS/TOEFL) to lock in points.'
          },
          {
            step: 'Step 2: Open German Blocked Bank Account (Sperrkonto)',
            desc: 'Open a blocked account through Fintiba, Expatrio, or Deutsche Bank. Transfer the statutory minimum of ~€12,324 to prove financial independence.'
          },
          {
            step: 'Step 3: Online Application on Consular Portal',
            desc: 'Complete the online application via digital.diplo.de, uploading point verification proofs, language certificates, and blocked account confirmation.'
          },
          {
            step: 'Step 4: Consular Biometrics Appointment',
            desc: 'Attend your Embassy or VFS appointment with physical original certificates and passport. Pay €75 visa fee.'
          },
          {
            step: 'Step 5: Visa Collection & Flight to Germany',
            desc: 'Collect your passport stamped with the Opportunity Card visa sticker. Book initial temporary accommodation in your target German city.'
          },
          {
            step: 'Step 6: Landing, Anmeldung & In-Country Transition',
            desc: 'Complete city registration (Anmeldung). Search for full-time professional roles while utilizing the 20 hr/week secondary work authorization. Transition directly to an EU Blue Card upon securing a contract.'
          }
        ],
        commonPitfalls: [
          'Claiming points for language proficiency without presenting an officially accredited test certificate (informal language school letters are rejected).',
          'Submitting a regular savings bank statement instead of a verified blocked account confirmation.'
        ]
      },
      {
        id: 'family_reunion_de',
        name: 'Family Reunion Visa (Familienzusammenführung)',
        category: 'Family',
        validity: 'Co-terminus with primary resident sponsor',
        processingTime: '6 to 12 weeks',
        fastTrackAvailable: 'Can be processed concurrently with primary applicant if filed together.',
        fees: {
          consularFeeAdult: 75,
          consularFeeMinor: 37.5,
          auslanderbehordeFee: 100,
          apostillesAndTranslations: 300,
          total: 512.5
        },
        portals: [
          {
            name: 'German Consular Portal',
            url: 'https://digital.diplo.de',
            loginType: 'BundID / Email',
            purpose: 'Submit joint or follow-on family reunification applications.'
          },
          {
            name: 'VFS Global Family Visa Category',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Account',
            purpose: 'Book family biometric appointment slots for spouse and dependent children.'
          }
        ],
        documentation: {
          identity: [
            'Passports for spouse and all minor children with minimum 1-year validity',
            'Completed VIDEX National Visa forms for each family member'
          ],
          credentials: [
            'Original marriage certificate with Hague Apostille and court-sworn German translation',
            'Original birth certificates for all children with Hague Apostille and court-sworn German translation',
            'Copy of primary sponsor’s passport, German residence permit (or EU Blue Card visa), and employment contract'
          ],
          financialAndHealth: [
            'Proof of primary sponsor’s income (recent 3 payslips or binding offer letter)',
            'Proof of German residential tenancy agreement showing adequate living space (minimum 12m² per person age 6+)',
            'Travel health insurance for family members until enrollment in statutory Familienversicherung'
          ],
          photoSpec: '2 biometric passport photos (35mm x 45mm) for each family member.'
        },
        eligibility: [
          'Legally married spouse and minor dependent children under 18',
          'Primary sponsor holds valid German residence permit (EU Blue Card, ICT, Skilled Worker, or PR)',
          'Spouses of EU Blue Card holders exempt from German A1 language certificate'
        ],
        steps: [
          {
            step: 'Step 1: Document Legalization & Hague Apostilles',
            desc: 'Apostille foreign marriage and birth certificates. Have all documents translated into German by a certified sworn translator.'
          },
          {
            step: 'Step 2: Complete VIDEX Family Applications',
            desc: 'Fill out individual VIDEX forms for spouse and each child linking them to the primary sponsor’s application or residence permit.'
          },
          {
            step: 'Step 3: Family Consular Appointment Booking',
            desc: 'Schedule appointment at Embassy / VFS. Ensure all family members (including children) attend for biometric fingerprinting.'
          },
          {
            step: 'Step 4: Consular Vetting & Ausländerbehörde Check',
            desc: 'The embassy transmits files to the local Ausländerbehörde in Germany to verify housing size and salary sufficiency. Processing: 6-12 weeks.'
          },
          {
            step: 'Step 5: Collect Family Visas & Fly to Germany',
            desc: 'Collect stamped passports. Travel together to Germany.'
          },
          {
            step: 'Step 6: Joint Anmeldung & Zero-Cost Health Co-Insurance',
            desc: 'Register whole family at Bürgeramt. Enroll spouse and children into statutory health insurance (Familienversicherung) at zero additional monthly charge.'
          }
        ],
        commonPitfalls: [
          'Submitting marriage certificates that lack the Hague Apostille or were translated by an uncertified commercial translator.',
          'Renting an apartment that falls below the strict municipal living space minimums (12m² per adult/child).'
        ]
      }
    ]
  },

  uae: {
    country: 'United Arab Emirates',
    currency: 'AED',
    symbol: 'AED ',
    familyReunion: {
      spouseWork: 'Spouses on a UAE dependent visa can legally work by obtaining an individual work permit / labor card from MOHRE or their respective Free Zone without cancelling their family visa sponsorship.',
      vitalRecords: 'Original marriage and birth certificates must be fully attested: first by your home country foreign ministry, then by the UAE Embassy in your home country, and finally by the Ministry of Foreign Affairs (MOFA) in the UAE.',
      housingOrSalary: 'The family sponsor must earn a minimum salary of AED 4,000/month (or AED 3,000 + accommodation provided by employer) and hold a registered Ejari tenancy contract proving suitable residential accommodation.'
    },
    primaryVisas: [
      {
        id: 'uae_employment_residence',
        name: 'Standard Employment Residence Visa',
        category: 'Employment',
        validity: '2 years (renewable as long as employment continues)',
        processingTime: '2 to 4 weeks',
        fastTrackAvailable: 'VIP Medical Fitness screening at Smart Salem Dubai delivers results within 2 hours.',
        fees: {
          entryPermitAndVisa: 1100, // MOHRE quota & entry permit
          medicalFitnessExam: 320,  // Fast-track DHA/SEHA medical fitness
          emiratesIdFee: 370,       // ICP Emirates ID 2-year validity
          visaStampingAndAdmin: 500, // GDRFA digital residence visa
          total: 2290
        },
        portals: [
          {
            name: 'GDRFA Dubai Smart Portal (General Directorate of Residency)',
            url: 'https://gdrfad.gov.ae',
            loginType: 'UAE Pass / Email Account',
            purpose: 'Official immigration portal for Dubai residency permits, entry permit issuance, and in-country status adjustments.'
          },
          {
            name: 'ICP Smart Services (Federal Authority for Identity & Citizenship)',
            url: 'https://smartservices.icp.gov.ae',
            loginType: 'UAE Pass or Emirates ID / Email',
            purpose: 'Official federal platform for Emirates ID card registration, biometric tracking, and Abu Dhabi/Northern Emirates visas.'
          },
          {
            name: 'MOHRE (Ministry of Human Resources & Emiratisation)',
            url: 'https://www.mohre.gov.ae',
            loginType: 'Company Labor Card / Digital UAE Pass',
            purpose: 'Issuance of initial work permit approvals, job offer contracts, and labor quota clearance.'
          },
          {
            name: 'Amer Service Centers Dubai',
            url: 'https://amer247.com',
            loginType: 'Physical / Walk-in Customer Happiness Centers',
            purpose: 'Authorized government service centers providing immediate document processing, typing, and status changes.'
          }
        ],
        documentation: {
          identity: [
            'Original international passport valid for at least 6 months with clear color digital scan',
            'Colored copy of approved electronic Entry Permit (Pink Visa)'
          ],
          credentials: [
            'Attested educational degree certificate (attested by foreign ministry + UAE Embassy in home country + MOFA in UAE)',
            'Signed MOHRE standard employment offer letter and Ministry labor contract detailing salary and designation'
          ],
          financialAndHealth: [
            'Passing medical fitness test report (blood test for communicable diseases and chest X-ray for pulmonary tuberculosis)',
            'Proof of employer-provided medical health insurance complying with DHA / DOH regulations'
          ],
          photoSpec: 'Recent passport-size colored photograph (45mm x 35mm) with clean white background, dark clothing, full frontal facial view (digital JPEG format for online typing).'
        },
        eligibility: [
          'Binding job offer from a mainland UAE or Free Zone registered corporate entity',
          'MOHRE employment offer letter signed by employer and employee with designated occupational tier',
          'Attested university degree certificate for managerial and technical skilled roles (Levels 1 to 3)',
          'Clear medical fitness screening result (absence of HIV, Hepatitis B/C, and active TB)'
        ],
        steps: [
          {
            step: 'Step 1: Ministry Work Permit & Entry Permit Issuance',
            desc: 'Your sponsoring UAE employer creates an electronic application on the MOHRE / GDRFA portal. The government issues your official electronic Entry Permit (Pink Visa) allowing legal arrival into the UAE.'
          },
          {
            step: 'Step 2: Arrival & In-Country Status Change',
            desc: 'Land in Dubai or Abu Dhabi. If you entered on a visit visa or are already inside the country, your employer performs an in-country "Change of Status" without requiring you to exit the border.'
          },
          {
            step: 'Step 3: Mandatory Medical Fitness Screening',
            desc: 'Visit an authorized Medical Fitness Centre (e.g. Al Muhaisnah, Al Quoz, or Smart Salem VIP in Dubai). Complete the mandatory blood sample collection and chest X-ray screening for communicable diseases.'
          },
          {
            step: 'Step 4: ICP Emirates ID Biometric Enrollment',
            desc: 'Attend your scheduled appointment at an ICP biometric center. Officers record your fingerprints, iris/retina scan, and facial biometric photography.'
          },
          {
            step: 'Step 5: Digital Residence Visa Stamping & Approval',
            desc: 'GDRFA (Dubai) or ICP (Abu Dhabi) reviews medical results and issues your official 2-year digital residence visa approval notification.'
          },
          {
            step: 'Step 6: Emirates ID Card Delivery & UAE Pass Activation',
            desc: 'Your physical plastic Emirates ID smartcard is printed and delivered via Emirates Post to your registered address. Activate UAE Pass on your mobile device to unlock digital banking and government services.'
          }
        ],
        commonPitfalls: [
          'Presenting degree certificates without the triple attestation chain (Home Ministry -> UAE Embassy -> MOFA UAE).',
          'Scarring on chest X-ray from past pneumonia causing delays; requires specialized medical review at preventive medicine centers.',
          'Attempting to sign rental leases or buy vehicles before the physical Emirates ID card is received.'
        ]
      },
      {
        id: 'uae_golden_visa',
        name: 'UAE Golden Visa (10 Years)',
        category: 'Long-Term Residency',
        validity: '10 years (renewable, 100% self-sponsored with no local employer sponsor needed)',
        processingTime: '1 to 3 weeks',
        fastTrackAvailable: 'VIP lounges at Dubai One Central and Amer GDRFA process pre-approvals in 48 hours.',
        fees: {
          eligibilityNominationFee: 250,
          visaIssuanceAndMedical: 1800,
          emiratesId10Year: 1070,
          total: 3120
        },
        portals: [
          {
            name: 'GDRFA Dubai Golden Visa Portal',
            url: 'https://smart.gdrfad.gov.ae',
            loginType: 'UAE Pass',
            purpose: 'Direct submission of 10-year residency nominations for Dubai residents.'
          },
          {
            name: 'ICP Golden Residency Services',
            url: 'https://smartservices.icp.gov.ae',
            loginType: 'UAE Pass',
            purpose: 'Federal nomination and eligibility pre-check for Golden Visas across all Emirates.'
          },
          {
            name: 'One Central VIP Golden Visa Lounge (Dubai)',
            url: 'https://gdrfad.gov.ae',
            loginType: 'In-person VIP concierge service',
            purpose: 'End-to-end walk-in concierge handling nomination, medical test, and Emirates ID in 48 hours.'
          }
        ],
        documentation: {
          identity: [
            'Valid passport with at least 6 months validity',
            'Current UAE residence visa copy (if currently resident) or entry permit copy'
          ],
          credentials: [
            'Bachelor’s degree diploma attested by MOFA and Ministry of Education (MoE) equivalency certificate',
            'Valid UAE labor contract showing basic + allowance salary of at least AED 30,000/month',
            'Official bank statements for the last 6 consecutive months showing regular salary deposits of AED 30,000+'
          ],
          financialAndHealth: [
            'Passing VIP medical fitness screening result',
            'Comprehensive UAE health insurance policy'
          ],
          photoSpec: 'High-resolution digital biometric photo with white background (300 DPI).'
        },
        eligibility: [
          'Skilled Professionals: Minimum Bachelor’s degree + monthly salary of at least AED 30,000 in classified occupational level 1 or 2',
          'Real Estate Investors: Ownership of UAE property valued at AED 2,000,000+ (mortgaged and off-plan properties eligible with developer NOC)',
          'Allows sponsoring spouse, children of any age, and unlimited domestic workers with zero requirement to enter UAE every 6 months'
        ],
        steps: [
          {
            step: 'Step 1: Online Nomination & Eligibility Submission',
            desc: 'Log in to the GDRFA Dubai or ICP portal using UAE Pass. Submit your degree equivalency, labor contract, and 6 months bank statements verifying AED 30,000+ monthly salary.'
          },
          {
            step: 'Step 2: Receiving Initial Pre-Approval & Nomination Grant',
            desc: 'The regulatory committee reviews credentials within 3 to 5 business days and issues the official Golden Visa nomination approval letter.'
          },
          {
            step: 'Step 3: VIP Medical Fitness Examination',
            desc: 'Attend a specialized VIP medical center (e.g. Smart Salem in City Walk or DIFC) for expedited 2-hour blood test and chest X-ray screening.'
          },
          {
            step: 'Step 4: Cancel Prior Employment Visa (if applicable)',
            desc: 'If already on an employer-sponsored visa, HR cancels your standard visa; Golden Visa grants 100% self-sponsored independent legal status.'
          },
          {
            step: 'Step 5: 10-Year Residency Stamping',
            desc: 'GDRFA / ICP stamps the digital 10-year Golden Visa residency onto your passport record.'
          },
          {
            step: 'Step 6: Collect 10-Year Golden Emirates ID Card',
            desc: 'Collect your premium 10-year Emirates ID card. Sponsor your family members with matching 10-year residency validity.'
          }
        ],
        commonPitfalls: [
          'Bank statements showing total salary less than AED 30,000 after deductions or bonuses.',
          'Missing the official Ministry of Education (MoE) degree equivalency certificate.'
        ]
      },
      {
        id: 'uae_remote_work',
        name: 'Dubai Virtual Working Visa (Digital Nomad)',
        category: 'Remote Work',
        validity: '1 year (renewable annually)',
        processingTime: '1 to 2 weeks',
        fastTrackAvailable: 'Processed fully digitally via Visit Dubai within 5 business days.',
        fees: {
          applicationAndProcessing: 1100, // US$ 287 equivalent
          medicalFitnessExam: 320,
          emiratesId1Year: 270,
          healthInsuranceDubai: 1500, // UAE valid health cover
          total: 3190
        },
        portals: [
          {
            name: 'Visit Dubai Remote Work Portal',
            url: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/visas-and-entry/work-remotely-from-dubai',
            loginType: 'Email Registration',
            purpose: 'Official application portal for overseas employees and company owners to apply for Dubai remote working visas.'
          },
          {
            name: 'GDRFA Dubai Application Tracking',
            url: 'https://gdrfad.gov.ae',
            loginType: 'Application Reference Number',
            purpose: 'Track entry permit issuance and download approval vouchers.'
          }
        ],
        documentation: {
          identity: [
            'Valid passport with at least 6 months validity'
          ],
          credentials: [
            'Proof of employment with an overseas company with contract valid for at least 1 year (or proof of overseas company ownership for 1+ year)',
            'Payslips from previous month and last 3 consecutive months of bank statements verifying monthly salary of US$ 3,500+'
          ],
          financialAndHealth: [
            'Valid health insurance policy with comprehensive UAE coverage or international travel health policy'
          ],
          photoSpec: 'Digital biometric passport photograph on white background.'
        },
        eligibility: [
          'Employment contract with a non-UAE company valid for at least 1 year (or proof of business ownership abroad for 1+ year)',
          'Minimum monthly salary/income of US$ 3,500 (or equivalent in foreign currency) proven via bank statements',
          'Zero local corporate sponsorship required'
        ],
        steps: [
          {
            step: 'Step 1: Online Application on Visit Dubai Portal',
            desc: 'Submit application online with your overseas employment contract, 3 months bank statements, passport copy, and health insurance.'
          },
          {
            step: 'Step 2: Initial Government Review & Entry Permit',
            desc: 'GDRFA reviews documentation within 5 to 7 business days and issues an electronic 60-day entry permit sent directly to your email.'
          },
          {
            step: 'Step 3: Fly to Dubai & Undergo Medical Fitness',
            desc: 'Land at DXB. Complete standard medical fitness blood test and chest X-ray screening at an authorized DHA health center.'
          },
          {
            step: 'Step 4: Biometrics for 1-Year Emirates ID',
            desc: 'Visit an ICP center for biometric fingerprint scanning.'
          },
          {
            step: 'Step 5: Collect Emirates ID & Open Local Bank Account',
            desc: 'Receive your physical 1-year Emirates ID. Unlocks legal rights to rent long-term residential housing, open local bank accounts, and register telecoms.'
          }
        ],
        commonPitfalls: [
          'Submitting bank statements without official bank stamps or where monthly income dips below US$ 3,500.',
          'Health insurance policies that exclude UAE territory.'
        ]
      },
      {
        id: 'uae_family_dependent',
        name: 'Family & Dependent Residence Visa UAE',
        category: 'Family',
        validity: 'Tied to sponsor’s visa duration (typically 2 or 10 years)',
        processingTime: '1 to 2 weeks',
        fastTrackAvailable: 'Express Amer Center processing delivers family visas in 48 hours.',
        fees: {
          entryPermitDependent: 500,
          medicalFitnessExamSpouse: 320,
          emiratesIdFeePerDependent: 370,
          residencyStamping: 500,
          total: 1690
        },
        portals: [
          {
            name: 'Amer Service Centers (Dubai)',
            url: 'https://amer247.com',
            loginType: 'Walk-in / Online Concierge',
            purpose: 'Typing and instant submission of dependent family residence visas.'
          },
          {
            name: 'ICP Smart Services Portal',
            url: 'https://smartservices.icp.gov.ae',
            loginType: 'UAE Pass',
            purpose: 'Apply for dependent entry permits and Emirates ID cards for spouse and children online.'
          },
          {
            name: 'Dubai REST App (Ejari Registration)',
            url: 'https://dubailand.gov.ae',
            loginType: 'UAE Pass',
            purpose: 'Verify registered residential lease (Ejari) required as proof of family accommodation.'
          }
        ],
        documentation: {
          identity: [
            'Original passports of spouse and children with at least 6 months validity',
            'Recent biometric photos on white background'
          ],
          credentials: [
            'Original marriage certificate attested by home Foreign Ministry + UAE Embassy + MOFA in UAE',
            'Original birth certificates of children attested by home Foreign Ministry + UAE Embassy + MOFA in UAE',
            'Sponsor’s original Emirates ID, passport, and residence visa copy'
          ],
          financialAndHealth: [
            'Sponsor’s official salary certificate (for government/freezone) or registered labor contract (mainland) showing AED 4,000+ monthly salary',
            'Registered Ejari tenancy contract in sponsor’s name showing suitable multi-room accommodation',
            'Valid health insurance policy for each dependent'
          ],
          photoSpec: 'Passport-size photographs (white background, digital JPEG).'
        },
        eligibility: [
          'Sponsor must earn a minimum salary of AED 4,000/month (or AED 3,000 plus employer-provided housing)',
          'Valid registered Ejari tenancy contract',
          'Attested marriage and birth certificates legalized through MOFA UAE',
          'Medical fitness clearance for adult dependents (spouse and children age 18+)'
        ],
        steps: [
          {
            step: 'Step 1: Complete MOFA Certificate Attestation',
            desc: 'Legalize foreign marriage and birth certificates through home country foreign ministry, UAE Embassy, and Ministry of Foreign Affairs (MOFA) in UAE.'
          },
          {
            step: 'Step 2: Apply for Dependent Entry Permits',
            desc: 'Submit application via Amer Centre or ICP portal uploading salary certificate, Ejari lease, and attested civil certificates.'
          },
          {
            step: 'Step 3: Family Arrival or In-Country Status Change',
            desc: 'Family enters UAE on entry permits, or performs in-country change of status if already on tourist visas.'
          },
          {
            step: 'Step 4: Medical Screening for Spouse & Adult Children',
            desc: 'Spouse and children aged 18+ undergo mandatory medical fitness blood test and chest X-ray screening at DHA center.'
          },
          {
            step: 'Step 5: Emirates ID Biometrics for Family',
            desc: 'Attend ICP biometric appointment for family fingerprint and photo registration.'
          },
          {
            step: 'Step 6: Digital Residency Stamping & Card Collection',
            desc: 'GDRFA issues digital residency visas for family members; physical Emirates IDs are delivered via courier within 3 business days.'
          }
        ],
        commonPitfalls: [
          'Submitting marriage certificates that lack the final MOFA UAE stamp.',
          'Ejari registered under a colleague\'s or company\'s name without an official corporate housing assignment letter.'
        ]
      }
    ]
  },

  singapore: {
    country: 'Singapore',
    currency: 'SGD',
    symbol: 'S$',
    familyReunion: {
      spouseWork: 'Dependant’s Pass (DP) holders seeking employment must secure an employer willing to sponsor an Employment Pass, S Pass, or Work Permit. ONE Pass spouses can work via a Letter of Consent (LOC).',
      vitalRecords: 'Marriage and child birth certificates must be translated into English by a certified translator or notary public. Educational verification is handled via MOM-approved screening agencies.',
      housingOrSalary: 'Primary Employment Pass holder must earn a minimum fixed monthly salary of S$6,000 to sponsor spouse/children, and S$12,000 to sponsor dependent parents on Long-Term Visit Pass (LTVP).'
    },
    primaryVisas: [
      {
        id: 'sg_employment_pass',
        name: 'Employment Pass (EP) & COMPASS Framework',
        category: 'Employment',
        validity: '1 to 2 years (renewable for up to 3 years thereafter)',
        processingTime: '2 to 5 weeks',
        fastTrackAvailable: 'Standard MOM digital processing.',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          multipleJourneyVisa: 30,
          educationalVerification: 150,
          total: 510
        },
        portals: [
          {
            name: 'myMOM Portal (Ministry of Manpower)',
            url: 'https://www.mom.gov.sg/eservices/mymom-portal',
            loginType: 'Singpass / Corppass',
            purpose: 'Official Singapore government portal where employers lodge EP applications, COMPASS assessments, and card issuance.'
          },
          {
            name: 'MOM Self-Assessment Tool (SAT)',
            url: 'https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool',
            loginType: 'Free Public Tool',
            purpose: 'Instant pre-check to assess candidate eligibility and qualifying salary requirements.'
          },
          {
            name: 'Approved Background Screening Portals (Dataflow / Cisive)',
            url: 'https://www.dataflowgroup.com',
            loginType: 'Candidate Portal Account',
            purpose: 'Submit university degree certificates for mandatory MOM authenticity verification.'
          }
        ],
        documentation: {
          identity: [
            'Clear copy of personal particulars page of passport (valid for 6+ months)',
            'Previous Singapore work pass / FIN details (if previously employed in Singapore)'
          ],
          credentials: [
            'Degree certificate and full academic transcripts verified through an MOM-approved background screening agency',
            'Candidate detailed curriculum vitae detailing work experience and achievements'
          ],
          employment: [
            'Employment contract or official appointment letter from Singapore company',
            'Detailed job scope description and organizational reporting chart'
          ],
          photoSpec: 'Passport-size digital photo (35mm x 45mm, white background, matte finish, taken within last 3 months).'
        },
        eligibility: [
          'Minimum qualifying fixed monthly salary of S$5,000 (increases with age up to S$10,500 for age 45+; S$5,500 in financial services)',
          'Passing the Complementarity Assessment Framework (COMPASS) points system with at least 40 points across Salary, Qualifications, Diversity, and Local Employment',
          'Recognized degree verified through an MOM-approved background screening agency'
        ],
        steps: [
          {
            step: 'Step 1: Degree Verification via MOM-Approved Agency',
            desc: 'Upload degree credentials to an approved screening body (Dataflow or Cisive) to generate an authenticity verification report.'
          },
          {
            step: 'Step 2: Employer Submits EP via myMOM Portal',
            desc: 'Sponsoring employer lodges the online application with COMPASS self-assessment scoring on the Ministry of Manpower portal.'
          },
          {
            step: 'Step 3: Receive In-Principle Approval (IPA) Letter',
            desc: 'MOM reviews files within 10 to 20 business days and issues an electronic IPA letter serving as an official single-entry visa.'
          },
          {
            step: 'Step 4: Travel to Singapore & Pass Issuance Request',
            desc: 'Fly to Singapore. Employer requests pass issuance on myMOM, generating a temporary Notification Letter that permits immediate work.'
          },
          {
            step: 'Step 5: Attend Biometrics Appointment at EPSC',
            desc: 'Visit the Employment Pass Services Centre (EPSC) at Riverside Walk for biometric photo capture and fingerprint registration.'
          },
          {
            step: 'Step 6: Receive EP Smartcard & Activate Singpass',
            desc: 'Your green EP smartcard is delivered to employer within 4 business days. Set up Singpass on your smartphone.'
          }
        ],
        commonPitfalls: [
          'Submitting degree verifications from unaccredited third-party screening agencies not recognized on MOM\'s official panel.',
          'Falling below the age-adjusted COMPASS salary percentile benchmarks.'
        ]
      },
      {
        id: 'sg_one_pass',
        name: 'ONE Pass (Overseas Networks & Expertise)',
        category: 'Top-Tier Talent',
        validity: '5 years (unrestricted multi-company work rights)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Dedicated concierge handling via Contact Singapore.',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          total: 330
        },
        portals: [
          {
            name: 'MOM ONE Pass eService',
            url: 'https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass',
            loginType: 'Singpass or Candidate Email Registration',
            purpose: 'Direct portal to apply for Singapore\'s flagship 5-year personalized talent pass.'
          },
          {
            name: 'MOM Self-Assessment Tool (SAT)',
            url: 'https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool',
            loginType: 'Public Access (Free)',
            purpose: 'Pre-check eligibility against statutory salary and qualification thresholds before formally applying.'
          },
          {
            name: 'Singapore Global Network (SGN)',
            url: 'https://singaporeglobalnetwork.gov.sg',
            loginType: 'SGN Profile',
            purpose: 'Government talent agency providing concierge relocation advisory and executive onboarding.'
          }
        ],
        documentation: {
          identity: ['Passport valid for at least 12 months', 'Comprehensive resume and career portfolio'],
          credentials: [
            'Proof of earning fixed monthly salary of at least S$30,000 for the past 12 consecutive months (or prospective salary in Singapore)',
            'Latest annual tax assessment returns (Form 16, W-2, or P60) and payslips',
            'Employment reference letters from previous employers'
          ],
          photoSpec: 'Biometric photograph on white background.'
        },
        eligibility: [
          'Fixed monthly salary of at least S$30,000 (or equivalent overseas salary over the past year)',
          'Or outstanding achievements in technology, arts, culture, sports, science, or academia',
          'Grants unrestricted flexibility to work for multiple companies concurrently, start businesses, and direct spouse work rights'
        ],
        steps: [
          {
            step: 'Step 1: Direct Application Submission',
            desc: 'Apply directly through MOM or with prospective employer submitting salary vouchers, tax returns, and resume.'
          },
          {
            step: 'Step 2: Contact Singapore / MOM Vetting',
            desc: 'MOM and economic development boards review achievements and salary verification.'
          },
          {
            step: 'Step 3: Receive 5-Year In-Principle Approval',
            desc: 'Receive official 5-year IPA letter allowing travel to Singapore.'
          },
          {
            step: 'Step 4: Biometrics at EPSC Riverside Walk',
            desc: 'Attend biometrics appointment at Employment Pass Services Centre.'
          },
          {
            step: 'Step 5: Collect 5-Year Smartcard & Spousal LOC',
            desc: 'Collect personalized ONE Pass card. Spouses receive direct open employment rights via a Letter of Consent (LOC).'
          }
        ],
        commonPitfalls: [
          'Including non-guaranteed bonuses or equity options in the S$30,000 monthly threshold (only fixed base salary qualifies).'
        ]
      },
      {
        id: 'sg_dependants_pass',
        name: 'Dependant’s Pass (DP) Singapore',
        category: 'Family',
        validity: 'Tied to primary EP validity',
        processingTime: '2 to 4 weeks',
        fastTrackAvailable: 'Processed concurrently with primary Employment Pass.',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          total: 330
        },
        portals: [
          {
            name: 'myMOM Dependant Application Portal',
            url: 'https://www.mom.gov.sg/passes-and-permits/dependants-pass',
            loginType: 'Corppass / Sponsoring Employer',
            purpose: 'Lodge dependent family pass applications linked to main passholder.'
          },
          {
            name: 'Employment Pass Services Centre (EPSC) Booking',
            url: 'https://service2.mom.gov.sg/esp/epscons/Index.aspx',
            loginType: 'IPA Application Number',
            purpose: 'Schedule family biometric appointments for fingerprinting and card issuance at Clarke Quay.'
          },
          {
            name: 'Singpass Citizen & Resident Services',
            url: 'https://www.singpass.gov.sg',
            loginType: 'Singpass Digital ID',
            purpose: 'Activate Singpass mobile identity upon receiving DP card to access public digital services.'
          }
        ],
        documentation: {
          identity: ['Passport copies for spouse and children with minimum 6 months validity'],
          credentials: [
            'Certified true copy of marriage certificate with English translation and notary verification',
            'Certified copy of child birth certificates detailing parent names',
            'Primary passholder\'s EP approval letter and employment contract'
          ],
          photoSpec: 'Digital passport photo on white background.'
        },
        eligibility: [
          'Primary EP passholder earns a minimum fixed monthly salary of S$6,000 (S$12,000 for parents on LTVP)',
          'Legally married spouse and unmarried biological or adopted children under 21',
          'Verified marriage and birth certificates'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits DP via myMOM',
            desc: 'Can be submitted concurrently with the primary EP application or anytime after primary EP issuance.'
          },
          {
            step: 'Step 2: Receive Family IPA Letters',
            desc: 'MOM issues individual In-Principle Approval letters for each dependent family member.'
          },
          {
            step: 'Step 3: Family Arrival in Singapore',
            desc: 'Travel to Singapore using IPA letters.'
          },
          {
            step: 'Step 4: Biometrics Appointment at EPSC',
            desc: 'Spouse and children aged 6+ attend biometrics at Employment Pass Services Centre.'
          },
          {
            step: 'Step 5: Receive Physical DP Smartcards',
            desc: 'Cards are delivered to employer office. Unlocks local schooling and banking entitlements.'
          }
        ],
        commonPitfalls: [
          'Submitting marriage certificates that lack official notary translations or certification.'
        ]
      }
    ]
  },

  uk: {
    country: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    familyReunion: {
      spouseWork: 'Dependent partners on UK Skilled Worker visas receive full unrestricted work authorization in the UK (except as professional sportsperson) without requiring separate employer sponsorship.',
      vitalRecords: 'Marriage and birth certificates must be in English or accompanied by certified translations. Tuberculosis (TB) testing is mandatory from Home Office-approved clinics for designated countries.',
      housingOrSalary: 'The primary Skilled Worker must earn at least £38,700 (or going rate) and cover the Immigration Health Surcharge (IHS) upfront (£1,035/year per adult dependent, £776/year per child).'
    },
    primaryVisas: [
      {
        id: 'skilled_worker_uk',
        name: 'Skilled Worker Visa UK',
        category: 'Employment',
        validity: 'Up to 5 years (leads to Indefinite Leave to Remain / ILR)',
        processingTime: '3 to 6 weeks',
        fastTrackAvailable: 'Priority Visa service (£500 for decision in 5 working days).',
        fees: {
          consularFee: 719, // up to 3 years
          immigrationHealthSurcharge: 3105, // £1,035/year for 3 years
          biometricsAppointment: 20,
          tbTestAndEnglish: 250,
          total: 4094
        },
        portals: [
          {
            name: 'GOV.UK Official Visa Application Portal',
            url: 'https://www.gov.uk/skilled-worker-visa/apply-from-outside-the-uk',
            loginType: 'GOV.UK One Login',
            purpose: 'Official UK Home Office portal to lodge applications, pay Immigration Health Surcharge (IHS), and track status.'
          },
          {
            name: 'UK Immigration: ID Check Smartphone App',
            url: 'https://www.gov.uk/guidance/using-the-uk-immigration-id-check-app',
            loginType: 'NFC Biometric Chip Scan',
            purpose: 'Scan your biometric passport chip with your smartphone to bypass in-person visa appointment centers.'
          },
          {
            name: 'VFS Global / TLScontact UK Visa Centres',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Global Account',
            purpose: 'Book biometrics appointment and submit passport for non-app eligible applicants.'
          }
        ],
        documentation: {
          identity: ['Valid passport with at least 1 blank page for vignette', 'Previous travel history for last 10 years'],
          credentials: [
            'Certificate of Sponsorship (CoS) reference number issued by UK licensed employer',
            'Proof of English proficiency at B1 CEFR level (IELTS for UKVI, or Ecctis degree verification letter)',
            'Tuberculosis (TB) test certificate from a Home Office approved clinic (if residing in listed countries like India, Pakistan, Nigeria)'
          ],
          financialAndHealth: [
            'Proof of at least £1,270 in personal bank account for 28 consecutive days (unless employer certifies maintenance on CoS)',
            'Immigration Health Surcharge (IHS) reference number'
          ],
          photoSpec: 'Digital passport photo conforming to Home Office photo guidelines.'
        },
        eligibility: [
          'Certificate of Sponsorship (CoS) from a licensed UK Home Office sponsor',
          'Job role on eligible occupation list (RQF level 3 or above)',
          'Meeting minimum salary threshold (£38,700 or going rate for the profession, whichever is higher)',
          'English proficiency at B1 level'
        ],
        steps: [
          {
            step: 'Step 1: Certificate of Sponsorship (CoS) Assignment',
            desc: 'Your UK employer assigns an electronic CoS containing an individual reference number, occupation code, and certified salary details.'
          },
          {
            step: 'Step 2: English Language Exam & TB Screening',
            desc: 'Take an approved IELTS for UKVI exam or obtain an Ecctis verification of your university degree. Complete TB screening at a Home Office approved medical clinic.'
          },
          {
            step: 'Step 3: Online GOV.UK Application & IHS Payment',
            desc: 'Complete application on gov.uk. Pay the visa fee (£719) and mandatory Immigration Health Surcharge (£1,035/year).'
          },
          {
            step: 'Step 4: Biometrics via App or VFS Appointment',
            desc: 'Verify identity via the "UK Immigration: ID Check" mobile app, or attend an in-person biometrics appointment at VFS Global / TLScontact.'
          },
          {
            step: 'Step 5: Consular Processing & eVisa Decision',
            desc: 'Home Office reviews application within 3 to 6 weeks. Receive digital immigration status (eVisa) and passport entry vignette.'
          },
          {
            step: 'Step 6: Landing in UK & National Insurance Number (NINO)',
            desc: 'Fly to the UK. Collect your physical Biometric Residence Permit (BRP) or access digital share-code. Apply for your National Insurance Number (NINO) for payroll.'
          }
        ],
        commonPitfalls: [
          'Sitting a general academic IELTS test instead of the strictly required "IELTS for UKVI" test.',
          'Missing the mandatory 28-day maintenance funds holding rule when employer does not tick the maintenance certification box on the CoS.'
        ]
      },
      {
        id: 'family_dependent_uk',
        name: 'Skilled Worker Dependant Visa',
        category: 'Family',
        validity: 'Co-terminus with primary Skilled Worker visa',
        processingTime: '3 to 6 weeks',
        fastTrackAvailable: 'Priority Visa service (£500 per applicant).',
        fees: {
          consularFee: 719,
          immigrationHealthSurcharge: 3105,
          total: 3824
        },
        portals: [
          {
            name: 'GOV.UK Dependant Application Portal',
            url: 'https://www.gov.uk/skilled-worker-visa/your-partner-and-children',
            loginType: 'GOV.UK Account',
            purpose: 'Lodge dependent partner and child applications linked to primary applicant’s UAN or CoS.'
          },
          {
            name: 'VFS Global / TLScontact UK Visa Appointments',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS / TLS Profile',
            purpose: 'Book dependent biometric enrollment appointments and submit physical passports.'
          },
          {
            name: 'View and Prove Your Immigration Status (UK eVisa)',
            url: 'https://www.gov.uk/view-prove-immigration-status',
            loginType: 'UKVI Account / eVisa',
            purpose: 'Generate digital share codes to prove legal residency and unrestricted work rights to UK landlords and employers.'
          }
        ],
        documentation: {
          identity: ['Valid passport for spouse and all dependent children'],
          credentials: [
            'Marriage certificate or civil partnership certificate with certified English translation',
            'Full birth certificates for children listing parent details',
            'Proof of genuine and subsisting relationship (joint utility bills, joint bank statements, photos)',
            'TB test certificate for each family member'
          ],
          financialAndHealth: [
            'Maintenance funds (£285 for partner, £315 for first child, £200 for each additional child) held for 28 consecutive days unless employer certified maintenance',
            'IHS payment receipt'
          ],
          photoSpec: 'Standard UK passport photo specifications.'
        },
        eligibility: [
          'Spouse, civil partner, or unmarried partner (cohabited for at least 2 years) and dependent children under 18',
          'Primary applicant holds valid UK Skilled Worker visa or approved sponsorship',
          'Meeting relationship and maintenance funds criteria'
        ],
        steps: [
          {
            step: 'Step 1: Complete Online GOV.UK Filing',
            desc: 'Apply online linking directly to primary applicant\'s application reference number or CoS.'
          },
          {
            step: 'Step 2: Pay IHS Surcharge per Dependent',
            desc: 'Pay the mandatory healthcare surcharge (£1,035/year for partner, £776/year for child).'
          },
          {
            step: 'Step 3: Biometrics via App or VFS Global',
            desc: 'Submit biometric scans for all family members.'
          },
          {
            step: 'Step 4: Visa Decision & Collection',
            desc: 'Collect passport vignettes / digital eVisa.'
          },
          {
            step: 'Step 5: UK Arrival & NHS Registration',
            desc: 'Arrive in UK. Register whole family at local NHS GP surgery and enroll children in neighborhood schools.'
          }
        ],
        commonPitfalls: [
          'Submitting unmarried partner applications without concrete proofs of 2 years shared cohabitation (joint tenancy, bank accounts).'
        ]
      }
    ]
  },

  netherlands: {
    country: 'Netherlands',
    currency: 'EUR',
    symbol: '€',
    familyReunion: {
      spouseWork: 'Spouses of Highly Skilled Migrant (Kennismigrant) holders receive identical labor rights—the residence permit card explicitly states "Arbeid vrij toegestaan" (Work freely permitted, no separate work permit TWV needed).',
      vitalRecords: 'Birth and marriage certificates must have the Hague Apostille and official English or Dutch sworn translations for municipal Gemeente registration.',
      housingOrSalary: 'Proof of registered rental housing with municipal registration permission and mandatory Dutch basic health insurance (basisverzekering) enrollment within 4 months of arrival.'
    },
    primaryVisas: [
      {
        id: 'kennismigrant_nl',
        name: 'Highly Skilled Migrant (Kennismigrant)',
        category: 'Employment',
        validity: 'Duration of contract (max 5 years)',
        processingTime: '2 to 4 weeks',
        fastTrackAvailable: 'Standard expedited processing for IND recognized sponsors (10-14 days).',
        fees: {
          indApplicationFee: 380, // paid by sponsor
          apostillesAndTranslations: 200,
          total: 580
        },
        portals: [
          {
            name: 'IND (Immigration and Naturalisation Service)',
            url: 'https://ind.nl/en/work/working-in-the-netherlands/highly-skilled-migrant',
            loginType: 'Corporate eHerkenning / IND Business Portal',
            purpose: 'Recognized sponsor employer lodges the combined entry and residence permit (TEV).'
          },
          {
            name: 'Netherlands Worldwide Portal',
            url: 'https://www.netherlandsworldwide.nl',
            loginType: 'Consular Appointment Booking',
            purpose: 'Book consular appointment at Dutch embassy/VFS to collect MVV entry sticker.'
          }
        ],
        documentation: {
          identity: ['Valid passport with at least 6 months validity', 'Antecedents Certificate (declaration of clean criminal record)'],
          credentials: [
            'Binding employment contract with IND-recognized sponsor employer meeting salary threshold (€5,688/mo for age 30+; €4,171/mo for under 30)',
            'University degree certificate and curriculum vitae'
          ],
          financialAndHealth: [
            'Dutch basic health insurance (basisverzekering) application upon landing',
            'Tuberculosis (TB) examination form (if from designated country)'
          ],
          photoSpec: '1 official Dutch passport photo (strict ICAO criteria, light grey background).'
        },
        eligibility: [
          'Binding contract with an IND-recognized sponsor employer',
          'Meeting monthly gross salary threshold (€5,688 for age 30+, €4,171 for under 30)',
          'Valid passport and apostilled birth/marriage certificates'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits TEV Application to IND',
            desc: 'Your Dutch recognized sponsor employer files the combined entry (MVV) and residence permit (VVR) application directly through the IND portal.'
          },
          {
            step: 'Step 2: Fast-Track IND Approval',
            desc: 'The IND processes recognized sponsor petitions within 2 to 3 weeks and issues an approval letter to your employer and the Dutch Embassy.'
          },
          {
            step: 'Step 3: Collect MVV Entry Sticker at Embassy',
            desc: 'Visit the Dutch Embassy or VFS in your home country with your passport to have the physical MVV entry sticker placed in your passport.'
          },
          {
            step: 'Step 4: Landing & Gemeente BSN Registration',
            desc: 'Fly to the Netherlands. Within 5 days, attend your municipality appointment (Gemeente) to register your address and receive your Citizen Service Number (BSN).'
          },
          {
            step: 'Step 5: Collect IND Biometric Residence Card',
            desc: 'Visit the designated IND desk or Expat Center to collect your plastic residence permit card (Verblijfsdocument).'
          },
          {
            step: 'Step 6: Apply for 30% Tax Ruling',
            desc: 'Your employer submits the 30% Ruling application to the Dutch Tax Office (Belastingdienst) to receive 30% of gross salary tax-free.'
          }
        ],
        commonPitfalls: [
          'Arriving without a certified Hague Apostille on your original birth certificate (Gemeente cannot finalize BSN without it).',
          'Signing a temporary rental lease that prohibits municipal registration (geen inschrijving mogelijk).'
        ]
      },
      {
        id: 'eu_blue_card_nl',
        name: 'EU Blue Card Netherlands',
        category: 'Skilled Employment',
        validity: 'Duration of contract + 3 months (up to 4 years)',
        processingTime: '3 to 6 weeks',
        fastTrackAvailable: 'Standard expedited processing for IND recognized sponsors (10-14 days).',
        fees: {
          indApplicationFee: 380,
          apostillesAndTranslations: 200,
          nufficEvaluation: 150,
          total: 730
        },
        portals: [
          {
            name: 'IND (Immigration and Naturalisation Service)',
            url: 'https://ind.nl/en/work/working-in-the-netherlands/eu-blue-card',
            loginType: 'Corporate eHerkenning / IND Business Portal',
            purpose: 'Employer lodges digital EU Blue Card application on behalf of foreign professional.'
          },
          {
            name: 'Nuffic Foreign Credential Evaluation',
            url: 'https://www.nuffic.nl',
            loginType: 'Online Nuffic Profile',
            purpose: 'Evaluates and certifies foreign higher education degree equivalency to Dutch HBO/WO standards.'
          },
          {
            name: 'Netherlands Worldwide Portal',
            url: 'https://www.netherlandsworldwide.nl',
            loginType: 'Consular Appointment Booking',
            purpose: 'Schedule embassy appointment to obtain provisional MVV entry visa foil.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 6 months validity and 2 blank visa pages',
            'Signed Antecedents Certificate declaring clean criminal history'
          ],
          credentials: [
            'Higher education diploma (minimum 3-year bachelor program) with certified English or Dutch translation',
            'Nuffic credential evaluation statement or proof of recognized accreditation'
          ],
          employment: [
            'Binding employment contract for at least 6 months with Dutch registered entity',
            'Gross monthly salary meeting EU Blue Card statutory threshold (€5,331/mo or €63,972/yr excluding 8% holiday allowance)'
          ],
          financialAndHealth: [
            'Proof of Dutch basic health insurance (basisverzekering) enrollment within 4 months of arrival',
            'Tuberculosis (TB) test declaration form (if arriving from designated countries)'
          ],
          photoSpec: '1 official Dutch passport photo meeting strict ICAO standards (35mm x 45mm, light grey backdrop).'
        },
        eligibility: [
          'Binding employment contract of at least 6 months with Dutch employer',
          'Higher education diploma of at least 3 years verified by Nuffic',
          'Gross annual salary meeting threshold of €5,331/month (€63,972/year)'
        ],
        steps: [
          {
            step: 'Step 1: Credential Verification via Nuffic',
            desc: 'Submit your higher education degree to Nuffic for formal verification against Dutch standards.'
          },
          {
            step: 'Step 2: Employer Lodges TEV Petition with IND',
            desc: 'Your Dutch employer submits the combined entry and residence permit application directly through the IND portal.'
          },
          {
            step: 'Step 3: IND Fast-Track Approval & MVV Collection',
            desc: 'IND approves petition within 3-4 weeks. Visit Dutch Embassy or VFS in your origin country to get your MVV entry sticker.'
          },
          {
            step: 'Step 4: Flight & Gemeente BSN Registration',
            desc: 'Travel to Netherlands. Within 5 business days, attend your municipality appointment (Gemeente) to register your address and receive your BSN.'
          },
          {
            step: 'Step 5: Collect Biometric EU Blue Card at IND Desk',
            desc: 'Visit IND Desk or Expat Center (e.g. IN Amsterdam / The Hague International Centre) to collect your physical biometric card.'
          },
          {
            step: 'Step 6: Activate 30% Tax Ruling & DigiD',
            desc: 'Employer lodges your 30% tax facility with Belastingdienst; activate your DigiD for government digital services.'
          }
        ],
        commonPitfalls: [
          'Monthly base salary falling just below threshold because variable bonuses were included (IND only counts guaranteed base pay).',
          'Failure to secure Hague Apostille on birth certificate prior to leaving home country.'
        ]
      },
      {
        id: 'family_dependent_nl',
        name: 'Family & Dependent Resident Permit (Gezinshereniging)',
        category: 'Family',
        validity: 'Co-terminus with primary permit holder (up to 5 years)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Can be submitted concurrently with primary applicant’s TEV petition.',
        fees: {
          indApplicationFee: 228,
          apostillesAndTranslations: 250,
          total: 478
        },
        portals: [
          {
            name: 'IND Family Reunion Portal',
            url: 'https://ind.nl/en/family-and-partner',
            loginType: 'Corporate eHerkenning / DigiD',
            purpose: 'Lodge dependent residence permit applications for spouse, partner, and minor children.'
          },
          {
            name: 'Netherlands Worldwide',
            url: 'https://www.netherlandsworldwide.nl',
            loginType: 'Consular Appointment System',
            purpose: 'Book dependent biometric and MVV entry collection appointments.'
          }
        ],
        documentation: {
          identity: [
            'Valid passports for each family member with at least 6 months validity',
            'Completed and signed IND Antecedents Certificate for each adult dependent'
          ],
          credentials: [
            'Original marriage certificate with Hague Apostille and court-sworn Dutch/English translation',
            'Original unabridged birth certificates for all dependent children with Hague Apostille and translation'
          ],
          employment: [
            'Primary sponsor’s Dutch employment contract and recent payslips demonstrating independent, sufficient income (SV-loon threshold)'
          ],
          financialAndHealth: [
            'Dutch rental tenancy contract showing permission for family cohabitation',
            'Commitment to enroll all family members in Dutch basic health insurance (basisverzekering) within 4 months of arrival'
          ],
          photoSpec: '1 Dutch passport standard photo (35mm x 45mm, light grey background) per applicant.'
        },
        eligibility: [
          'Legally married spouse, registered partner, or unmarried long-term exclusive partner of primary permit holder',
          'Minor children under 18 who actually form part of the household',
          'Primary sponsor demonstrates sufficient independent and sustainable income'
        ],
        steps: [
          {
            step: 'Step 1: Legalize Certificates with Hague Apostille',
            desc: 'Apostille marriage certificate and all children\'s birth certificates in your origin country and obtain sworn Dutch/English translations.'
          },
          {
            step: 'Step 2: Concurrent TEV Filing with IND',
            desc: 'Primary employer lodges dependent applications together with the main applicant\'s petition.'
          },
          {
            step: 'Step 3: Collect MVV Entry Stickers at Embassy',
            desc: 'Family attends appointment at Dutch Embassy or VFS to have MVV entry stickers placed in passports.'
          },
          {
            step: 'Step 4: Arrival & Joint Gemeente Registration',
            desc: 'Attend Gemeente municipal appointment with original apostilled certificates to register all family members and receive BSNs.'
          },
          {
            step: 'Step 5: Collect IND Dependent Residence Cards',
            desc: 'Pick up biometric residence cards explicitly endorsing "Arbeid vrij toegestaan" (unrestricted work authorization).'
          },
          {
            step: 'Step 6: Schooling & Healthcare Enrollment',
            desc: 'Register children in local or international school and enroll family in Dutch statutory healthcare policy.'
          }
        ],
        commonPitfalls: [
          'Arriving with a laminated original birth or marriage certificate (Dutch Gemeente rejects laminated documents because apostille seals cannot be verified).',
          'Not having apostilles completed before leaving the home country.'
        ]
      }
    ]
  },

  usa: {
    country: 'United States',
    currency: 'USD',
    symbol: '$',
    familyReunion: {
      spouseWork: 'H-4 dependent spouses are only eligible to apply for an Employment Authorization Document (EAD Form I-765) if the primary H-1B holder has an approved Form I-140 immigrant petition.',
      vitalRecords: 'Original birth certificates and marriage certificates must be translated into English with an official Certificate of Translation accuracy for USCIS and consular processing.',
      housingOrSalary: 'The primary H-1B sponsor must earn the prevailing wage certified by the Department of Labor on the Labor Condition Application (LCA) to support the household.'
    },
    primaryVisas: [
      {
        id: 'h1b_usa',
        name: 'H-1B Specialty Occupation Visa',
        category: 'Specialty Employment',
        validity: '3 years (extendable to 6 years, green card pathway)',
        processingTime: '2 to 6 months',
        fastTrackAvailable: 'USCIS Premium Processing (Form I-907, $2,805 fee for 15 calendar day decision).',
        fees: {
          ds160ConsularFee: 205,
          biometricsAndCourier: 50,
          apostillesAndEvaluations: 300,
          total: 555
        },
        portals: [
          {
            name: 'US Department of State CEAC Portal (Form DS-160)',
            url: 'https://ceac.state.gov/genniv',
            loginType: 'DS-160 Application ID & Security Question',
            purpose: 'Complete official electronic nonimmigrant visa application (DS-160) and generate confirmation barcode.'
          },
          {
            name: 'US Visa Scheduling Portal (CGI Federal / AIS)',
            url: 'https://www.usvisascheduling.com',
            loginType: 'User Profile Account',
            purpose: 'Pay consular MRV fee ($205) and schedule VAC biometrics and consular interview slots.'
          },
          {
            name: 'USCIS Case Status Online',
            url: 'https://egov.uscis.gov',
            loginType: 'Receipt Number Lookup (WAC/EAC/LIN)',
            purpose: 'Track employer’s Form I-129 petition approval status.'
          },
          {
            name: 'CBP I-94 Official Website',
            url: 'https://i94.cbp.dhs.gov',
            loginType: 'Passport Details Lookup',
            purpose: 'Retrieve electronic Form I-94 arrival record upon entering the US.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 6 months validity beyond intended stay',
            'Printed Form DS-160 barcode confirmation page',
            'Visa appointment confirmation letter'
          ],
          credentials: [
            'Form I-797 (Notice of Action) official approval notice from USCIS',
            'Full copy of Form I-129 petition and certified Labor Condition Application (LCA Form ETA-9035)',
            'University degree diplomas, academic transcripts, and formal US academic evaluation report'
          ],
          employment: [
            'Official employer support letter detailing job duties, salary, and company profile',
            'Detailed professional resume / CV'
          ],
          photoSpec: 'Recent color photograph (2 x 2 inches / 51 x 51 mm), full face, white background, taken within last 6 months (no eyeglasses).'
        },
        eligibility: [
          'Bachelor’s degree or higher in a specific specialty field related to the position',
          'Approved Form I-129 petition from USCIS sponsored by a US employer',
          'Labor Condition Application (LCA) certified by Department of Labor verifying prevailing wage compliance'
        ],
        steps: [
          {
            step: 'Step 1: Electronic Registration & USCIS I-129 Petition',
            desc: 'Employer submits electronic registration in March lottery. If selected, employer files Form I-129 petition with USCIS along with certified LCA.'
          },
          {
            step: 'Step 2: Form I-797 Approval & Document Assembly',
            desc: 'USCIS approves petition and issues Form I-797 Notice of Action. Employer legal counsel sends original I-797 and I-129 petition copy.'
          },
          {
            step: 'Step 3: Complete Online Form DS-160',
            desc: 'Fill out Form DS-160 on ceac.state.gov. Print the confirmation page with alphanumeric barcode.'
          },
          {
            step: 'Step 4: Book Appointments & Pay MRV Fee',
            desc: 'Create profile on usvisascheduling.com, pay $205 fee, and book two appointments: 1) Visa Application Center (VAC) for biometrics, 2) Embassy/Consulate interview.'
          },
          {
            step: 'Step 5: Attend Consular Interview & Stamping',
            desc: 'Attend consular interview. Consular officer inspects I-797, degrees, and employer offer. Collect passport with stamped H-1B visa foil.'
          },
          {
            step: 'Step 6: Landing, Form I-94 & Social Security Number (SSN)',
            desc: 'Enter US up to 10 days before start date. Download I-94 online. Visit Social Security Administration (SSA) office to apply for your SSN.'
          }
        ],
        commonPitfalls: [
          'Inconsistencies between job duties listed on LCA and candidate\'s academic degree major (leading to 221(g) administrative processing).',
          'Entering the US earlier than 10 days before the authorized start date on Form I-797.'
        ]
      },
      {
        id: 'l1_transferee_usa',
        name: 'L-1 Intra-Company Transferee (L-1A / L-1B)',
        category: 'Corporate Transfer',
        validity: 'Up to 3 years initially (max 7 years for L-1A, 5 years for L-1B)',
        processingTime: '15 calendar days with Premium Processing; 2 to 3 months standard',
        fastTrackAvailable: 'USCIS Premium Processing (Form I-907, $2,805 fee for 15-day decision) or Blanket L consular filing.',
        fees: {
          ds160ConsularFee: 205,
          fraudPreventionFee: 500,
          biometricsAndCourier: 50,
          total: 755
        },
        portals: [
          {
            name: 'US Department of State CEAC Portal (Form DS-160)',
            url: 'https://ceac.state.gov/genniv',
            loginType: 'DS-160 Application ID',
            purpose: 'Complete nonimmigrant visa electronic application form DS-160.'
          },
          {
            name: 'US Visa Scheduling Portal',
            url: 'https://www.usvisascheduling.com',
            loginType: 'User Profile Account',
            purpose: 'Pay consular MRV fee ($205) and schedule biometric appointment and consular interview.'
          },
          {
            name: 'USCIS Case Status Online',
            url: 'https://egov.uscis.gov',
            loginType: 'Receipt Number Lookup (WAC/EAC/LIN)',
            purpose: 'Track status of corporate Form I-129 petition.'
          },
          {
            name: 'CBP I-94 Official Website',
            url: 'https://i94.cbp.dhs.gov',
            loginType: 'Passport Details Lookup',
            purpose: 'Download electronic arrival record Form I-94 upon entry into the United States.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 6 months validity beyond intended stay',
            'Printed Form DS-160 confirmation page with barcode',
            'Consular appointment confirmation letter'
          ],
          credentials: [
            'Form I-797 approval notice (or 3 copies of Form I-129S if applying under corporate Blanket L)',
            'University degree diplomas, transcripts, and credentials evaluation (if degree obtained outside US)'
          ],
          employment: [
            'Detailed corporate transfer letter from US company detailing job title, executive/managerial duties or specialized knowledge, and compensation',
            'Proof of at least 1 continuous year of qualifying full-time employment with overseas parent/affiliate entity within preceding 3 years (payslips, tax forms, employment contracts)'
          ],
          financialAndHealth: [
            'Company organizational chart showing position within corporate hierarchy'
          ],
          photoSpec: 'Recent color photograph (2 x 2 inches / 51 x 51 mm), full face, white background, taken within last 6 months (no eyeglasses).'
        },
        eligibility: [
          'Employed continuously for at least 1 year in preceding 3 years by affiliate, parent, subsidiary, or branch of US employer',
          'Entering US to render services in managerial/executive capacity (L-1A) or specialized knowledge capacity (L-1B)',
          'Approved USCIS Form I-129 individual petition or qualifying under corporate Blanket L petition'
        ],
        steps: [
          {
            step: 'Step 1: Corporate Petition or Blanket L Preparation',
            desc: 'US employer files Form I-129 with USCIS, or issues Form I-129S endorsed under company\'s approved Blanket L petition.'
          },
          {
            step: 'Step 2: Complete Form DS-160 Online',
            desc: 'Fill out online Form DS-160 at ceac.state.gov for primary applicant and dependents. Save confirmation barcodes.'
          },
          {
            step: 'Step 3: Pay Fees & Book Appointments',
            desc: 'Create profile on usvisascheduling.com, pay MRV fee ($205), and schedule VAC biometric and consular interview appointments.'
          },
          {
            step: 'Step 4: Consular Interview & Stamping',
            desc: 'Attend interview at US Consulate with I-129S/I-797, corporate transfer letter, and proof of 1-year overseas tenure. Collect stamped passport.'
          },
          {
            step: 'Step 5: Travel to US & Electronic Form I-94',
            desc: 'Fly to the US up to 10 days before authorized start date. Download electronic Form I-94 from i94.cbp.dhs.gov.'
          },
          {
            step: 'Step 6: Social Security Number (SSN) & Onboarding',
            desc: 'Apply for SSN at local Social Security Administration (SSA) field office and complete Form I-9 with employer.'
          }
        ],
        commonPitfalls: [
          'Inability to clearly prove specialized knowledge is proprietary and distinct from general industry know-how (for L-1B).',
          'Tenure with foreign affiliate falling short of 365 continuous days prior to the transfer.'
        ]
      },
      {
        id: 'family_dependent_usa',
        name: 'H-4 & L-2 Dependent Family Visa',
        category: 'Family',
        validity: 'Co-terminus with primary H-1B or L-1 visa holder',
        processingTime: 'Concurrently with primary or 2 to 4 weeks',
        fastTrackAvailable: 'Processed simultaneously during primary applicant’s consular interview.',
        fees: {
          ds160ConsularFee: 205,
          biometricsAndCourier: 50,
          total: 255
        },
        portals: [
          {
            name: 'US Department of State CEAC Portal',
            url: 'https://ceac.state.gov/genniv',
            loginType: 'DS-160 Barcode',
            purpose: 'Complete dependent Form DS-160 for spouse and each child.'
          },
          {
            name: 'US Visa Scheduling Portal',
            url: 'https://www.usvisascheduling.com',
            loginType: 'Family Group Profile',
            purpose: 'Link dependent profiles to primary applicant to attend joint consular interview.'
          }
        ],
        documentation: {
          identity: [
            'Valid passport for each dependent with at least 6 months validity',
            'Printed Form DS-160 barcode confirmation page for each applicant'
          ],
          credentials: [
            'Original government marriage certificate with certified English translation',
            'Original birth certificates for all dependent children with certified English translation'
          ],
          employment: [
            'Copy of primary applicant’s Form I-797 approval notice, LCA, and recent US paystubs (if already in the US)',
            'Employer employment verification letter for primary sponsor'
          ],
          financialAndHealth: [
            'Primary visa holder’s US tax returns (Form 1040/W-2) if already residing in the US'
          ],
          photoSpec: 'Recent color photograph (2 x 2 inches / 51 x 51 mm), white background, no glasses, per applicant.'
        },
        eligibility: [
          'Legally married spouse or unmarried child under 21 years of age of valid H-1B or L-1 visa holder',
          'Primary visa holder maintains lawful nonimmigrant status in the United States'
        ],
        steps: [
          {
            step: 'Step 1: Complete Individual DS-160s',
            desc: 'Fill out Form DS-160 online for each family member indicating primary applicant as principal.'
          },
          {
            step: 'Step 2: Link Profiles & Schedule Joint Interview',
            desc: 'Add dependents to the primary applicant profile on usvisascheduling.com and book a combined interview slot.'
          },
          {
            step: 'Step 3: Biometrics at Visa Application Center (VAC)',
            desc: 'Attend VAC center with family for digital fingerprints and biometric photographs.'
          },
          {
            step: 'Step 4: Consular Interview & Stamping',
            desc: 'Consular officer verifies marriage and birth documents. Passports are stamped with H-4 or L-2 foils.'
          },
          {
            step: 'Step 5: Travel to US & I-94 Endorsement',
            desc: 'Enter US together or subsequently. L-2 spouses receive I-94 class of admission "L-2S" granting automatic open work authorization without needing an EAD card.'
          },
          {
            step: 'Step 6: SSN Application for Spouse',
            desc: 'L-2 spouses can apply immediately for a Social Security Number at the SSA office using their L-2S Form I-94.'
          }
        ],
        commonPitfalls: [
          'Laminating original marriage certificates (consulates frequently reject laminated vital records).',
          'Discrepancies in spelling of names between marriage certificates and international passports.'
        ]
      }
    ]
  },

  canada: {
    country: 'Canada',
    currency: 'CAD',
    symbol: 'C$',
    familyReunion: {
      spouseWork: 'Spouses of skilled foreign workers (TEER 0, 1, 2, or 3) are eligible for a Spousal Open Work Permit (SOWP) allowing unrestricted employment for any employer in Canada.',
      vitalRecords: 'Certified true copies of marriage and birth certificates with certified English or French translations. Upfront medical examination by IRCC panel physicians required.',
      housingOrSalary: 'Proof of unencumbered settlement funds based on family size (LICO threshold) unless already authorized to work in Canada with a valid job offer.'
    },
    primaryVisas: [
      {
        id: 'work_permit_ca',
        name: 'Employer Work Permit / Express Entry',
        category: 'Employment & PR',
        validity: '1 to 3 years',
        processingTime: '2 to 4 months',
        fastTrackAvailable: 'Global Skills Strategy (2-week processing for qualifying LMIA-exempt positions).',
        fees: {
          workPermitFee: 155,
          biometricsFee: 85,
          medicalExam: 250,
          translationsAndWES: 300,
          total: 790
        },
        portals: [
          {
            name: 'IRCC Secure Account (GCKey Portal)',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
            loginType: 'GCKey Login / Sign-In Partner',
            purpose: 'Official Canadian federal portal to lodge work permits, submit e-medical records, and track application status.'
          },
          {
            name: 'WES (World Education Services Canada)',
            url: 'https://www.wes.org/ca',
            loginType: 'Online WES Profile',
            purpose: 'Obtain an Educational Credential Assessment (ECA) report for foreign degrees.'
          },
          {
            name: 'VFS Global Canada Visa Application Centres',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Account',
            purpose: 'Submit biometrics (fingerprints & photo) upon receiving the IRCC Biometric Instruction Letter (BIL).'
          }
        ],
        documentation: {
          identity: ['Valid passport with at least 1-year validity', 'Biometric Instruction Letter (BIL) from IRCC'],
          credentials: [
            'Positive Labour Market Impact Assessment (LMIA) or LMIA-exempt Employer Portal Offer of Employment number',
            'Educational Credential Assessment (ECA) report and degree certificates',
            'Detailed employment reference letters verifying years of skilled work experience'
          ],
          financialAndHealth: [
            'Upfront medical examination report from an IRCC panel physician (e-Medical sheet)',
            'Police clearance certificates from all countries lived in for 6+ months since age 18'
          ],
          photoSpec: 'Digital photo (35mm x 45mm, white background, facial height 31-36mm).'
        },
        eligibility: [
          'LMIA approval or LMIA-exempt category (Intra-Company Transferee / CUSMA / International Mobility Program)',
          'Medical examination by approved panel physician',
          'Police clearance from all residences'
        ],
        steps: [
          {
            step: 'Step 1: Employer LMIA / Portal Offer Submission',
            desc: 'Employer obtains Labor Market Impact Assessment (LMIA) or submits offer in Employer Portal generating a 7-digit offer number.'
          },
          {
            step: 'Step 2: Complete IRCC Online Application',
            desc: 'Create GCKey account on canada.ca. Complete Form IMM 1295, upload resume, degree credentials, and pay CAD 155 fee.'
          },
          {
            step: 'Step 3: Biometrics at Canada VAC (VFS)',
            desc: 'Receive Biometric Instruction Letter (BIL). Visit VFS Global center for fingerprint scanning and photograph.'
          },
          {
            step: 'Step 4: Receive Port of Entry (POE) Letter of Introduction',
            desc: 'IRCC approves application and issues the official POE Letter of Introduction to your online portal.'
          },
          {
            step: 'Step 5: Border Interview & Physical Work Permit Issuance',
            desc: 'Fly to Canada. Present POE letter to CBSA border officer at airport to print your physical Work Permit paper on the spot.'
          },
          {
            step: 'Step 6: Service Canada SIN & Health Insurance',
            desc: 'Visit Service Canada center to obtain your 9-digit Social Insurance Number (SIN) on the spot. Apply for provincial healthcare (OHIP/MSP).'
          }
        ],
        commonPitfalls: [
          'Employment reference letters that lack detailed weekly hours, salary breakdown, or job duties matching NOC codes.',
          'Missing police clearance certificates from third countries where applicant spent study or exchange semesters.'
        ]
      },
      {
        id: 'ict_work_permit_ca',
        name: 'Intra-Company Transferee (ICT C10/C61/C62)',
        category: 'Corporate Transfer',
        validity: '1 to 3 years initially (extendable up to 5-7 years)',
        processingTime: '2 to 8 weeks (LMIA-exempt)',
        fastTrackAvailable: 'Global Skills Strategy (GSS) provides 2-week expedited processing for qualifying applications.',
        fees: {
          workPermitFee: 155,
          biometricsFee: 85,
          medicalAndPCC: 350,
          total: 590
        },
        portals: [
          {
            name: 'IRCC Secure Account (GCKey Portal)',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
            loginType: 'GCKey Login',
            purpose: 'Submit online work permit application, upload documents, and track status.'
          },
          {
            name: 'IRCC Employer Portal',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/partners-service-providers/employer-portal.html',
            loginType: 'Canadian Employer GCKey',
            purpose: 'Canadian company submits LMIA-exempt Offer of Employment and pays $230 employer compliance fee.'
          },
          {
            name: 'VFS Global Canada VAC',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Account',
            purpose: 'Submit biometrics (fingerprints & digital photo) upon receiving IRCC Biometric Instruction Letter.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 1-year validity',
            'IRCC Biometric Instruction Letter (BIL)'
          ],
          credentials: [
            'University degree diplomas and academic transcripts',
            'Detailed professional resume / CV'
          ],
          employment: [
            'IRCC Employer Portal Offer of Employment 7-digit number (starts with A)',
            'Corporate transfer letter confirming qualifying foreign parent/affiliate relationship and detailed job description',
            'Proof of at least 1 continuous year of full-time employment with foreign affiliate in preceding 3 years (payslips, tax assessments, contracts)'
          ],
          financialAndHealth: [
            'Upfront medical examination report from an IRCC panel physician (e-Medical sheet)',
            'Police Clearance Certificates from all countries lived in 6+ months since age 18'
          ],
          photoSpec: 'Digital photo (35mm x 45mm, plain white background, facial height 31-36mm).'
        },
        eligibility: [
          'Continuous full-time employment of at least 1 year in preceding 3 years with qualifying foreign affiliate',
          'Transferring to Canadian executive/managerial position (C61) or specialized knowledge role (C62/C10)',
          'Canadian entity has submitted Offer of Employment via IRCC Employer Portal'
        ],
        steps: [
          {
            step: 'Step 1: Canadian Employer Portal Submission',
            desc: 'Canadian employer creates Offer of Employment in IRCC Employer Portal, pays CAD 230 compliance fee, and obtains 7-digit offer number.'
          },
          {
            step: 'Step 2: Lodge Work Permit on GCKey',
            desc: 'Complete Form IMM 1295 on canada.ca, attach corporate transfer letter, proof of 1-year overseas tenure, and payslips.'
          },
          {
            step: 'Step 3: Biometrics at Canada VAC',
            desc: 'Attend nearest VFS Global Visa Application Centre with Biometric Instruction Letter for fingerprinting.'
          },
          {
            step: 'Step 4: Receive Port of Entry (POE) Letter',
            desc: 'IRCC approves petition and issues official POE Letter of Introduction to your online account.'
          },
          {
            step: 'Step 5: Airport Border Interview & Permit Issuance',
            desc: 'Present POE letter to Canada Border Services Agency (CBSA) border officer upon landing. Physical work permit is printed and stapled into passport.'
          },
          {
            step: 'Step 6: Service Canada SIN & Health Insurance',
            desc: 'Visit Service Canada office to obtain your 9-digit Social Insurance Number (SIN) on the spot.'
          }
        ],
        commonPitfalls: [
          'Failure to clearly demonstrate the qualifying corporate relationship between overseas entity and Canadian branch.',
          'Missing tax filings or payslips verifying the continuous 1-year foreign employment duration.'
        ]
      },
      {
        id: 'family_sowp_ca',
        name: 'Spousal Open Work Permit (SOWP Canada)',
        category: 'Family',
        validity: 'Co-terminus with primary worker\'s Canadian work permit',
        processingTime: '8 to 12 weeks (concurrent submission available)',
        fastTrackAvailable: 'Can be submitted simultaneously with primary applicant’s ICT / Work Permit petition.',
        fees: {
          workPermitFee: 155,
          openWorkPermitHolderFee: 100,
          biometricsFee: 85,
          total: 340
        },
        portals: [
          {
            name: 'IRCC Secure Account (GCKey Portal)',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
            loginType: 'GCKey Login',
            purpose: 'Lodge online application for Spousal Open Work Permit and minor study/visitor permits.'
          },
          {
            name: 'VFS Global Canada VAC',
            url: 'https://visa.vfsglobal.com',
            loginType: 'VFS Account',
            purpose: 'Schedule family biometrics appointment.'
          }
        ],
        documentation: {
          identity: [
            'Valid passports for spouse and dependents with minimum 1-year validity',
            'Digital passport photographs conforming to IRCC specifications'
          ],
          credentials: [
            'Original marriage certificate with certified English or French translation',
            'Unabridged birth certificates for dependent children'
          ],
          employment: [
            'Copy of primary applicant’s valid Canadian Work Permit (or POE Letter of Introduction)',
            'Primary applicant’s Canadian employment contract and recent payslips showing TEER 0, 1, 2, or 3 occupation'
          ],
          financialAndHealth: [
            'Upfront e-Medical exam sheet from IRCC approved panel physician',
            'Police clearance certificates for adult family members'
          ],
          photoSpec: 'Digital photo (35mm x 45mm, plain white background, facial height 31-36mm).'
        },
        eligibility: [
          'Legally married spouse or common-law partner of a foreign worker in Canada',
          'Primary applicant holds a valid Canadian work permit in TEER 0, 1, 2, or 3 valid for at least 6 months',
          'Clean criminal and medical background'
        ],
        steps: [
          {
            step: 'Step 1: Gather Vital Records & Certified Translations',
            desc: 'Obtain certified true copies of marriage certificate and children\'s birth records with certified English or French translations.'
          },
          {
            step: 'Step 2: Submit SOWP Application via GCKey',
            desc: 'Complete Form IMM 1295 online, selecting "Open Work Permit" and referencing primary applicant’s work permit number.'
          },
          {
            step: 'Step 3: Biometrics at Local Canada VAC',
            desc: 'Attend VFS Global centre for biometric scanning upon receiving the IRCC Biometric Instruction Letter.'
          },
          {
            step: 'Step 4: Receive POE Letter of Introduction',
            desc: 'IRCC issues electronic approval letter instructing applicant to travel to Canada.'
          },
          {
            step: 'Step 5: Collect Physical Open Work Permit at Border',
            desc: 'CBSA border officer issues physical open work permit paper allowing employment for any Canadian company without an LMIA.'
          },
          {
            step: 'Step 6: Service Canada SIN & Provincial Healthcare',
            desc: 'Obtain Social Insurance Number and enroll in provincial public health coverage (e.g. OHIP in Ontario, MSP in BC).'
          }
        ],
        commonPitfalls: [
          'Applying when the primary spouse\'s work permit has fewer than 6 months remaining validity.',
          'Insufficient proof of genuine relationship (for common-law partners lacking shared utility bills or lease agreements).'
        ]
      }
    ]
  },

  australia: {
    country: 'Australia',
    currency: 'AUD',
    symbol: 'A$',
    familyReunion: {
      spouseWork: 'Secondary applicants (spouses) on Subclass 482 TSS or Subclass 189/190 permanent visas enjoy full unrestricted open work authorization across Australia.',
      vitalRecords: 'Documents not in English must have certified translations by a NAATI-accredited translator. Original color scans of birth and marriage certificates are submitted via ImmiAccount.',
      housingOrSalary: 'The primary employer sponsor must meet the Core Skills / TSMIT salary threshold (minimum A$73,150/year). All family members must pass Bupa Medical health checks.'
    },
    primaryVisas: [
      {
        id: 'tss_482_aus',
        name: 'Temporary Skill Shortage (Subclass 482)',
        category: 'Employment',
        validity: 'Up to 4 years (direct pathway to PR Subclass 186)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Accredited sponsor petitions processed in under 10 business days.',
        fees: {
          primaryApplicantFee: 3115,
          adultDependentFee: 3115,
          childDependentFee: 780,
          nominationFeeByEmployer: 330,
          policeClearanceAndMedical: 450,
          total: 5110
        },
        portals: [
          {
            name: 'ImmiAccount (Department of Home Affairs)',
            url: 'https://online.immi.gov.au',
            loginType: 'ImmiAccount Username / Password',
            purpose: 'Official Australian immigration portal to lodge applications, attach documents, and view visa grant notices.'
          },
          {
            name: 'VEVO (Visa Entitlement Verification Online)',
            url: 'https://online.immi.gov.au/vevo',
            loginType: 'Passport / TRN Lookup',
            purpose: 'Free official online verification of your live Australian visa work and study rights.'
          },
          {
            name: 'Bupa Medical Visa Services',
            url: 'https://www.bupamvs.com.au',
            loginType: 'HAP ID Online Booking',
            purpose: 'Schedule immigration health examinations with panel physicians.'
          }
        ],
        documentation: {
          identity: ['Color scan of passport bio page with 6+ months validity', 'National ID card'],
          credentials: [
            'Nomination Transaction Reference Number (TRN) from sponsoring employer',
            'Degree certificates, academic transcripts, and positive skills assessment (if applicable)',
            'English proficiency test results (IELTS minimum 5.0 overall, or PTE Academic minimum 36)'
          ],
          financialAndHealth: [
            'Bupa / Panel Physician health examination clearance (HAP ID report)',
            'Overseas Visitor Health Cover (OVHC) policy certificate meeting visa condition 8501',
            'National police clearance certificates for all countries lived in 12+ months'
          ],
          photoSpec: 'Passport-quality photograph (45mm x 35mm, white background).'
        },
        eligibility: [
          'Nominated by an approved Australian Standard Business Sponsor',
          'Occupation on Medium and Long-term Strategic Skills List (MLTSSL) or Short-term list',
          'Meeting Core Skills / TSMIT salary threshold (minimum A$73,150/year)',
          'At least 2 years relevant full-time work experience in nominated occupation'
        ],
        steps: [
          {
            step: 'Step 1: Standard Business Sponsorship & Nomination',
            desc: 'Australian employer applies for Standard Business Sponsorship (SBS) and submits nomination petition paying the Skilling Australians Fund (SAF) levy.'
          },
          {
            step: 'Step 2: English Language Exam & Skills Assessment',
            desc: 'Sit PTE Academic or IELTS for English requirement. If required for your occupation (e.g. trade/certain IT), obtain positive skills assessment.'
          },
          {
            step: 'Step 3: ImmiAccount Application & HAP Medical Booking',
            desc: 'Create ImmiAccount. Complete application form linking to employer’s Nomination TRN. Generate HAP ID and complete Bupa panel medical exam.'
          },
          {
            step: 'Step 4: Visa Grant Notification via Email',
            desc: 'Department of Home Affairs reviews files and grants digital visa recorded directly against your passport on VEVO.'
          },
          {
            step: 'Step 5: Travel to Australia & Tax File Number (TFN)',
            desc: 'Fly to Australia. Apply for your Tax File Number (TFN) online via the ATO website within 28 days of arrival.'
          },
          {
            step: 'Step 6: Superannuation & Bank Account Setup',
            desc: 'Open Australian everyday bank account with CommBank/ANZ/NAB and nominate your superannuation fund for mandatory 11.5% employer contributions.'
          }
        ],
        commonPitfalls: [
          'Gaps in employment history not supported by payslips or tax assessment summaries (ATO / ITR).',
          'Purchasing a regular travel insurance policy instead of specialized Overseas Visitor Health Cover (OVHC).'
        ]
      },
      {
        id: 'ens_186_aus',
        name: 'Employer Nomination Scheme (Subclass 186 PR)',
        category: 'Permanent Residency',
        validity: 'Permanent Residency (Direct Australian PR)',
        processingTime: '6 to 10 months',
        fastTrackAvailable: 'Accredited sponsor petitions receive prioritized processing queue.',
        fees: {
          primaryApplicantFee: 4640,
          adultDependentFee: 2320,
          childDependentFee: 1160,
          skillsAssessment: 1200,
          medicalAndPCC: 500,
          total: 9820
        },
        portals: [
          {
            name: 'ImmiAccount (Department of Home Affairs)',
            url: 'https://online.immi.gov.au',
            loginType: 'ImmiAccount Login',
            purpose: 'Lodge Subclass 186 visa application, upload skills assessment, and track decision.'
          },
          {
            name: 'Australian Computer Society (ACS) / VETASSESS',
            url: 'https://www.acs.org.au',
            loginType: 'Skills Assessment Portal',
            purpose: 'Obtain positive migration skills assessment for nominated occupation.'
          },
          {
            name: 'Bupa Medical Visa Services',
            url: 'https://www.bupamvs.com.au',
            loginType: 'HAP ID Portal',
            purpose: 'Complete immigration health examinations with authorized panel physicians.'
          }
        ],
        documentation: {
          identity: [
            'Color passport bio-page scan with at least 6 months validity',
            'National identity cards for all family members'
          ],
          credentials: [
            'Positive Migration Skills Assessment outcome letter from relevant assessing body (e.g. ACS for IT, Engineers Australia)',
            'University degree certificates and comprehensive academic transcripts',
            'English proficiency test results (Competent English: IELTS minimum 6.0 in each component, or PTE Academic minimum 50)'
          ],
          employment: [
            'Employer Nomination TRN from Department of Home Affairs',
            'Full-time employment contract for at least 2 years with Australian sponsoring employer',
            'Detailed employment reference letters proving at least 3 years of full-time relevant work experience'
          ],
          financialAndHealth: [
            'HAP ID health examination clearance results from panel physician',
            'National police certificates for all countries lived in 12+ months within last 10 years'
          ],
          photoSpec: 'Passport-quality photograph (45mm x 35mm, plain white background).'
        },
        eligibility: [
          'Nominated by an approved Australian employer for an occupation on the eligible skilled occupations list',
          'At least 3 years of relevant full-time work experience in nominated occupation',
          'Positive migration skills assessment and Competent English proficiency',
          'Under 45 years of age at time of application (exemptions apply for high-salary earners)'
        ],
        steps: [
          {
            step: 'Step 1: Positive Skills Assessment & English Test',
            desc: 'Obtain positive skills assessment from ACS/VETASSESS and sit IELTS (6.0) or PTE Academic (50).'
          },
          {
            step: 'Step 2: Employer Nomination Lodgment',
            desc: 'Australian employer lodges nomination petition with Department of Home Affairs and pays Skilling Australians Fund (SAF) levy.'
          },
          {
            step: 'Step 3: Lodge Subclass 186 Application on ImmiAccount',
            desc: 'Submit visa application online linking to employer\'s Nomination TRN, attach identity and credential files, and pay fee.'
          },
          {
            step: 'Step 4: Health Examination & Character Checks',
            desc: 'Generate HAP ID letter, attend panel physician medical, and submit national police clearance certificates.'
          },
          {
            step: 'Step 5: Permanent Residency Grant Notification',
            desc: 'Department of Home Affairs grants Australian Permanent Residency. Status is recorded electronically on VEVO.'
          },
          {
            step: 'Step 6: Medicare Enrollment & ATO Tax Setup',
            desc: 'Enroll immediately in Australia\'s universal healthcare scheme (Medicare) and register Tax File Number (TFN).'
          }
        ],
        commonPitfalls: [
          'Skills assessment outcome expiring before the visa application is formally lodged on ImmiAccount.',
          'Reference letters that do not detail specific daily responsibilities or hours worked per week.'
        ]
      },
      {
        id: 'family_subsequent_aus',
        name: 'Subsequent Entrant / Dependent Visa (Subclass 482)',
        category: 'Family',
        validity: 'Co-terminus with primary Subclass 482 visa holder',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Processed rapidly if lodged simultaneously with primary sponsor’s nomination.',
        fees: {
          adultDependentFee: 3115,
          childDependentFee: 780,
          medicalAndPCC: 450,
          total: 4345
        },
        portals: [
          {
            name: 'ImmiAccount (Department of Home Affairs)',
            url: 'https://online.immi.gov.au',
            loginType: 'ImmiAccount Login',
            purpose: 'Lodge dependent family applications and link to primary sponsor’s visa.'
          },
          {
            name: 'Bupa Medical Visa Services',
            url: 'https://www.bupamvs.com.au',
            loginType: 'HAP ID Portal',
            purpose: 'Complete dependent health examinations.'
          }
        ],
        documentation: {
          identity: [
            'Color passport scans with at least 6 months validity for each dependent',
            'National ID cards and family registry documents'
          ],
          credentials: [
            'Original marriage certificate with certified NAATI English translation',
            'Birth certificates for all dependent children with official translations'
          ],
          employment: [
            'Copy of primary applicant’s Subclass 482 visa grant notice or application TRN',
            'Primary applicant’s Australian employment contract and recent payslips'
          ],
          financialAndHealth: [
            'Bupa panel physician medical clearance for all dependents',
            'Overseas Visitor Health Cover (OVHC) policy certificate covering the entire family (Condition 8501)',
            'National police clearance certificates for dependents aged 16+'
          ],
          photoSpec: 'Color passport photograph (45mm x 35mm, white background).'
        },
        eligibility: [
          'Spouse, de facto partner (12+ months mutual cohabitation), or dependent child under 23 of Subclass 482 visa holder',
          'Meeting mandatory public health and character criteria',
          'Covered by active OVHC private health insurance policy'
        ],
        steps: [
          {
            step: 'Step 1: Document Legalization & NAATI Translations',
            desc: 'Prepare original marriage and birth certificates with certified English translations.'
          },
          {
            step: 'Step 2: Lodge Application via ImmiAccount',
            desc: 'Select "Subsequent Entrant" on ImmiAccount, input primary applicant\'s TRN, and upload relationship proof.'
          },
          {
            step: 'Step 3: Health Examinations via HAP ID',
            desc: 'Generate HAP ID letters and complete Bupa panel medical examinations for all family members.'
          },
          {
            step: 'Step 4: Visa Grant Notification',
            desc: 'Home Affairs grants digital visas with full unrestricted study and open work authorization for spouses across Australia.'
          },
          {
            step: 'Step 5: Travel to Australia & VEVO Verification',
            desc: 'Travel to Australia and verify work entitlement on VEVO (Visa Entitlement Verification Online).'
          },
          {
            step: 'Step 6: School Enrollment & Bank Accounts',
            desc: 'Enroll school-age children in local state or private schools and open linked family bank accounts.'
          }
        ],
        commonPitfalls: [
          'De facto couples failing to provide joint financial documents (such as shared bank accounts, lease agreements, or joint utilities).',
          'Purchasing general travel insurance instead of policy explicitly meeting Visa Condition 8501 (OVHC).'
        ]
      }
    ]
  },

  japan: {
    country: 'Japan',
    currency: 'JPY',
    symbol: '¥',
    familyReunion: {
      spouseWork: 'Spouses on a Dependent Visa (Kazoku Taizai) can work up to 28 hours per week after obtaining Permission to Engage in Activity other than that Permitted (資格外活動許可) at immigration or airport entry.',
      vitalRecords: 'Original marriage and birth certificates must be accompanied by accurate Japanese translations. Hague Apostille is required for foreign official documents.',
      housingOrSalary: 'The primary visa sponsor must submit proof of tax payments (Kazei Shōmeisho) and verifiable annual income sufficient to support all dependents in Japan.'
    },
    primaryVisas: [
      {
        id: 'hsp_japan',
        name: 'Highly Skilled Professional (HSP I & II)',
        category: 'High-Tier Employment',
        validity: '5 years (accelerated Permanent Residency in 1 to 3 years)',
        processingTime: '2 to 4 weeks',
        fastTrackAvailable: 'Preferential fast-track processing (CoE granted in 10-15 business days).',
        fees: {
          certificateOfEligibility: 0,
          consularVisaStamping: 3000,
          translationAndApostilles: 15000,
          total: 18000
        },
        portals: [
          {
            name: 'Immigration Services Agency of Japan (ISA)',
            url: 'https://www.isa.go.jp/en',
            loginType: 'Corporate Sponsoring Organization',
            purpose: 'Official immigration portal for Certificate of Eligibility (CoE) petitions and HSP point evaluations.'
          },
          {
            name: 'Japan eVISA Portal (MOFA)',
            url: 'https://www.evisa.mofa.go.jp',
            loginType: 'Individual eVISA Account',
            purpose: 'Digital entry visa applications for eligible passport holders holding an electronic CoE.'
          }
        ],
        documentation: {
          identity: ['Valid passport with at least 6 months validity', 'Certificate of Eligibility (CoE) electronic grant letter'],
          credentials: [
            'HSP Points Calculation Sheet (minimum 70 points for 3-yr PR, 80 points for 1-yr PR)',
            'University degree diplomas and academic marks transcripts with Japanese translations',
            'JLPT Japanese language proficiency certificate (N1 or N2 gives bonus points)'
          ],
          employment: [
            'Employment contract with Japanese entity specifying annual gross remuneration',
            'Company registration certificate (Tōkibo Tōhon) and financial statements'
          ],
          photoSpec: 'Color photograph (40mm x 30mm, plain white background, taken within last 3 months).'
        },
        eligibility: [
          'Points-based system: Minimum 70 points for 3-year PR, or 80 points for 1-year fast-track PR',
          'Sponsoring Japanese employer or multinational with Tokyo/regional presence',
          'Annual salary threshold meeting points requirement (minimum ¥3,000,000 to ¥10,000,000+)'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits CoE Petition to Immigration Bureau',
            desc: 'Sponsoring employer files application for a Certificate of Eligibility (CoE) with Regional Immigration Services Bureau in Tokyo/Osaka.'
          },
          {
            step: 'Step 2: Receive Electronic CoE (e-CoE)',
            desc: 'Immigration Bureau grants the e-CoE in 10-20 days under preferential HSP processing.'
          },
          {
            step: 'Step 3: Consular Visa Application',
            desc: 'Submit passport and e-CoE to local Japanese embassy or VFS/consulate to receive the entry visa sticker.'
          },
          {
            step: 'Step 4: Airport Landing & Residence Card (Zairyū Card)',
            desc: 'Land at Narita, Haneda, Kansai, or Chubu airport. Immigration inspects your CoE and prints your physical biometric Residence Card (在留カード) right at border control.'
          },
          {
            step: 'Step 5: Municipal Ward Office Registration (Jūminhyō)',
            desc: 'Within 14 days, register your residence at local city/ward office (Shikuchoson) to print address on back of card and enroll in National Health Insurance (NHI) and pension.'
          },
          {
            step: 'Step 6: My Number Card & Bank Account',
            desc: 'Receive My Number notification and open Japanese bank account (Japan Post Bank / Yūcho Ginko or SMBC Prestia).'
          }
        ],
        commonPitfalls: [
          'Missing certified Japanese translations for degree certificates and employment reference letters.',
          'Claiming points for Japanese language proficiency without official JLPT score certificates.'
        ]
      },
      {
        id: 'engineer_specialist_japan',
        name: 'Engineer / Specialist in Humanities / Int. Services (Gijinkoku)',
        category: 'Skilled Employment',
        validity: '1, 3, or 5 years (renewable)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Standard fast-track for Category 1 & 2 publicly listed or TSE sponsor enterprises.',
        fees: {
          consularVisaStamping: 3000,
          translationAndApostilles: 12000,
          total: 15000
        },
        portals: [
          {
            name: 'Immigration Services Agency of Japan (ISA)',
            url: 'https://www.isa.go.jp/en',
            loginType: 'Corporate Sponsoring Organization',
            purpose: 'Japanese employer submits Certificate of Eligibility (CoE) application.'
          },
          {
            name: 'Japan eVISA Portal (MOFA)',
            url: 'https://www.evisa.mofa.go.jp',
            loginType: 'MOFA eVISA Profile',
            purpose: 'Electronic visa stamping once digital CoE is granted.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 6 months validity',
            'Certificate of Eligibility (CoE) grant notice issued by Japanese immigration'
          ],
          credentials: [
            'University degree diploma (bachelor or higher) or graduation certificate related to job duties',
            'Academic transcripts with Japanese translation'
          ],
          employment: [
            'Binding employment contract with Japanese company stating gross annual salary (must be equal to or higher than Japanese nationals in similar roles)',
            'Company profile brochure and statutory corporate registration certificate (Tōkibo Tōhon)'
          ],
          financialAndHealth: [
            'Statutory corporate tax withholding certificate (Gensen Chōshūhyō) from employer'
          ],
          photoSpec: 'Color photograph (40mm x 30mm, plain white background, taken within last 3 months).'
        },
        eligibility: [
          'Bachelor\'s degree or higher in engineering, computer science, humanities, or business, OR 10+ years relevant professional experience',
          'Concrete employment contract with a company in Japan',
          'Remuneration at or above the level paid to Japanese peers for equivalent work'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits CoE Petition',
            desc: 'Sponsoring Japanese company files CoE application with Regional Immigration Bureau in Tokyo/Osaka.'
          },
          {
            step: 'Step 2: Receive Electronic CoE (e-CoE)',
            desc: 'Immigration bureau reviews corporate credentials and issues digital CoE to applicant and employer.'
          },
          {
            step: 'Step 3: Consular Visa Application',
            desc: 'Submit passport and e-CoE to nearest Japanese Embassy or VFS application center to receive entry visa sticker.'
          },
          {
            step: 'Step 4: Landing & Residence Card (Zairyū Card)',
            desc: 'Land at Narita, Haneda, Kansai, or Chubu. Border officer inspects CoE and prints physical biometric Residence Card on the spot.'
          },
          {
            step: 'Step 5: City/Ward Office Registration (Jūminhyō)',
            desc: 'Within 14 days, register residential address at local city/ward office (Shikuchoson) to print address on back of card.'
          },
          {
            step: 'Step 6: Health Insurance, Pension & Bank Setup',
            desc: 'Enroll in National Health Insurance (NHI) or Shakai Hoken, register My Number, and open bank account (Japan Post Bank / Yūcho).'
          }
        ],
        commonPitfalls: [
          'Disconnection between university degree major and proposed job responsibilities (e.g. literature degree applying for core software engineering without 10 yrs verified experience).',
          'Neglecting municipal address registration within the mandatory 14-day statutory window after landing.'
        ]
      },
      {
        id: 'family_dependent_japan',
        name: 'Dependent Family Visa (Kazoku Taizai Japan)',
        category: 'Family',
        validity: 'Co-terminus with primary worker\'s visa (up to 5 years)',
        processingTime: '4 to 6 weeks',
        fastTrackAvailable: 'Can be submitted concurrently with primary applicant’s CoE application.',
        fees: {
          consularVisaStamping: 3000,
          translationsAndApostilles: 10000,
          total: 13000
        },
        portals: [
          {
            name: 'Immigration Services Agency of Japan (ISA)',
            url: 'https://www.isa.go.jp/en',
            loginType: 'Corporate Sponsoring Organization / Primary Sponsor',
            purpose: 'Lodge dependent CoE petition for spouse and children.'
          },
          {
            name: 'Japan eVISA Portal (MOFA)',
            url: 'https://www.evisa.mofa.go.jp',
            loginType: 'MOFA eVISA Profile',
            purpose: 'Obtain dependent entry visa foils.'
          }
        ],
        documentation: {
          identity: [
            'Valid passports with minimum 6 months validity for each family member',
            'Dependent Certificate of Eligibility (CoE) grant notice'
          ],
          credentials: [
            'Original marriage certificate with certified Japanese translation',
            'Original birth certificates for dependent children with certified Japanese translation'
          ],
          employment: [
            'Primary visa holder’s Certificate of Employment (Zaishoku Shōmeisho)',
            'Primary sponsor’s taxation certificates (Kazei / Nōzei Shōmeisho) or bank balance certificates'
          ],
          financialAndHealth: [
            'Letter of guarantee (Mimoto Hoshōsho) executed by primary worker sponsor'
          ],
          photoSpec: 'Color photograph (40mm x 30mm, white background, taken within last 3 months) per applicant.'
        },
        eligibility: [
          'Legally married spouse or dependent children of valid work visa holder in Japan',
          'Primary visa sponsor demonstrates verifiable income adequate to support all family members'
        ],
        steps: [
          {
            step: 'Step 1: Translate Vital Records into Japanese',
            desc: 'Obtain certified Japanese translations of marriage certificate and children\'s birth records.'
          },
          {
            step: 'Step 2: Submit Dependent CoE Petitions to ISA',
            desc: 'Primary employer or worker submits dependent CoE applications to Japanese Immigration.'
          },
          {
            step: 'Step 3: Consular Visa Stamping',
            desc: 'Submit passports and issued dependent CoEs to Japanese Embassy/Consulate to receive entry visa stickers.'
          },
          {
            step: 'Step 4: Landing & Biometric Zairyū Card',
            desc: 'Family lands in Japan; immigration border desk prints physical Residence Cards on arrival.'
          },
          {
            step: 'Step 5: Municipal Ward Office Registration',
            desc: 'Register family address at local city/ward office and add family members to primary sponsor’s health insurance and pension.'
          },
          {
            step: 'Step 6: Apply for Part-Time Work Permit (Shikakugai)',
            desc: 'Spouses can apply for Permission to Engage in Activity other than Permitted (資格外活動許可) allowing up to 28 hours per week part-time work.'
          }
        ],
        commonPitfalls: [
          'Exceeding the 28-hour weekly work limitation without separate authorization.',
          'Missing certified Japanese translations for relationship certificates.'
        ]
      }
    ]
  },

  brazil: {
    country: 'Brazil',
    currency: 'BRL',
    symbol: 'R$',
    familyReunion: {
      spouseWork: 'Spouses and civil partners on VITEM XI family reunion visas receive an open CRNM biometric residency card granting unrestricted work authorization across Brazil.',
      vitalRecords: 'Marriage and birth certificates must carry the Hague Apostille stamp plus a sworn Brazilian Portuguese translation (tradução juramentada) from an official JUCESP translator.',
      housingOrSalary: 'Under Brazilian ECA child protection law, minors traveling with one parent must carry a signed, notarized travel consent form (autorização de viagem com firma reconhecida).'
    },
    primaryVisas: [
      {
        id: 'vitem_xiv',
        name: 'Digital Nomad Visa (VITEM XIV)',
        category: 'Remote Work',
        validity: '1 year (renewable for another 1 year)',
        processingTime: '3 to 6 weeks',
        fastTrackAvailable: 'Direct online submission via E-Consular.',
        fees: {
          consularFee: 750, // Approx US$ 100 - $160
          federalPoliceCRNM: 204.77, // Taxa de Emissão de Carteira de Registro Nacional Migratório
          apostillesAndTranslations: 450,
          medicalTravelInsurance: 350,
          total: 1754.77
        },
        portals: [
          {
            name: 'E-Consular (Ministry of Foreign Affairs - Itamaraty)',
            url: 'https://ec-brasilia.itamaraty.gov.br',
            loginType: 'Gov.br or Email Login',
            purpose: 'Official consular portal to validate document scans prior to scheduling in-person passport submission.'
          },
          {
            name: 'Formulário de Visto MRE (SCVR)',
            url: 'https://formulario-mre.serpro.gov.br',
            loginType: 'Online Protocol Generation',
            purpose: 'Fill out the mandatory visa request form and generate the RER barcode sheet.'
          },
          {
            name: 'Polícia Federal SISMIGRA & GRU Portal',
            url: 'https://servicos.dpf.gov.br',
            loginType: 'CPF / Protocol Number',
            purpose: 'Schedule mandatory post-arrival appointment and generate GRU union tax receipt for CRNM card.'
          }
        ],
        documentation: {
          identity: [
            'Valid passport with at least 2 blank pages and 1-year validity',
            'Printed RER visa delivery receipt with signed declaration and glued photograph'
          ],
          credentials: [
            'Employment contract with non-Brazilian company or service contract proving remote work outside Brazil',
            'Declaration of remote worker status signed by applicant',
            'Police Clearance Certificate (PCC) apostilled within 90 days of application'
          ],
          financialAndHealth: [
            'Bank statements proving monthly income of at least US$ 1,500 (or bank balance of at least US$ 18,000)',
            'Travel health insurance policy with coverage valid in Brazil'
          ],
          photoSpec: 'Recent passport photo (30mm x 40mm or 50mm x 70mm, white background, matte paper).'
        },
        eligibility: [
          'Employment contract with non-Brazilian company or self-employment contract outside Brazil',
          'Proof of monthly remote income of at least US$ 1,500 (or bank balance of at least US$ 18,000)',
          'Clean Police Clearance Certificate (PCC) apostilled within 90 days of application',
          'Valid passport with at least 2 blank pages and 1-year validity'
        ],
        steps: [
          {
            step: 'Step 1: Document Legalization & Sworn Portuguese Translations',
            desc: 'Apostille your Police Clearance Certificate (PCC) and have your remote employment contract and bank statements translated by a sworn Brazilian translator (tradutor juramentado).'
          },
          {
            step: 'Step 2: Complete SCVR Form & E-Consular Submission',
            desc: 'Fill out online application on formulario-mre.serpro.gov.br. Upload document scans to the E-Consular system of your local Brazilian consulate for pre-validation.'
          },
          {
            step: 'Step 3: Consular Appointment & Passport Stamping',
            desc: 'Once E-Consular grants approval, deliver physical passport, photo, and original documents. Collect your stamped VITEM XIV visa.'
          },
          {
            step: 'Step 4: Flight & Landing in Brazil',
            desc: 'Enter Brazil within the entry timeframe indicated on your visa sticker.'
          },
          {
            step: 'Step 5: Generate GRU Tax & Book Federal Police Slot',
            desc: 'Go to servicos.dpf.gov.br to generate the GRU union tax (R$ 204.77) for Carteira de Registro Nacional Migratório. Pay at any Brazilian bank or lottery agency.'
          },
          {
            step: 'Step 6: Federal Police Registration (CRNM) within 90 Days',
            desc: 'Attend appointment at Polícia Federal (e.g. Lapa de Baixo in São Paulo). Submit fingerprints, photograph, and receive your Protocolo and physical CRNM card.'
          }
        ],
        commonPitfalls: [
          'PCC issued more than 90 days before the consular appointment date (strictly rejected).',
          'Using translations from non-sworn commercial agencies instead of a Tradutor Público Juramentado.'
        ]
      },
      {
        id: 'vitem_xi',
        name: 'Family Reunion Visa (VITEM XI)',
        category: 'Family',
        validity: 'Co-terminus with family sponsor or permanent',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Can also be applied for directly inside Brazil at the Federal Police.',
        fees: {
          consularFee: 750,
          federalPoliceCRNM: 204.77,
          apostillesAndTranslations: 400,
          total: 1354.77
        },
        portals: [
          {
            name: 'E-Consular Brazil',
            url: 'https://ec-brasilia.itamaraty.gov.br',
            loginType: 'Gov.br / Email',
            purpose: 'Pre-validate family relationship documents for VITEM XI.'
          },
          {
            name: 'Polícia Federal SISMIGRA',
            url: 'https://servicos.dpf.gov.br',
            loginType: 'CPF / Protocol',
            purpose: 'In-country family residency authorization and CRNM issuance.'
          }
        ],
        documentation: {
          identity: ['Valid passport with minimum 1-year validity'],
          credentials: [
            'Original marriage certificate or stable union declaration (união estável) with Hague Apostille and sworn translation',
            'Original birth certificate for children with Hague Apostille and sworn translation',
            'Sponsor’s Brazilian identity card (RG) or CRNM card and CPF'
          ],
          financialAndHealth: [
            'Declaration of financial responsibility and livelihood signed by primary sponsor',
            'Clean police record for applicants aged 18+'
          ],
          photoSpec: 'Passport photograph on white background.'
        },
        eligibility: [
          'Spouse, civil partner (união estável), child, or dependent parent of a Brazilian citizen or valid residence permit holder',
          'Apostilled marriage or birth certificate with sworn translation',
          'Clean police record'
        ],
        steps: [
          {
            step: 'Step 1: Legalize Relationship Documents with Apostille',
            desc: 'Apostille original marriage/birth certificates and obtain sworn Brazilian Portuguese translation (tradução juramentada).'
          },
          {
            step: 'Step 2: Embassy Application or In-Country Filing',
            desc: 'Can be applied for at the consulate abroad via E-Consular, or directly inside Brazil at the Federal Police.'
          },
          {
            step: 'Step 3: Consular Stamping or Police Protocol',
            desc: 'Receive visa foil abroad, or receive immediate temporary residency protocol at Federal Police in Brazil.'
          },
          {
            step: 'Step 4: Federal Police CRNM Issuance',
            desc: 'Collect multi-year biometric residence permit granting full unrestricted work authorization in Brazil.'
          }
        ],
        commonPitfalls: [
          'Minor traveling with one parent lacking the notarized travel authorization (autorização de viagem com firma reconhecida).'
        ]
      },
      {
        id: 'vitem_v_work',
        name: 'Work Contract & Technical Assistance Visa (VITEM V)',
        category: 'Employment',
        validity: 'Up to 2 years (renewable or convertible to permanent residence)',
        processingTime: '4 to 8 weeks',
        fastTrackAvailable: 'Prior authorization handled digitally via MigranteWeb.',
        fees: {
          consularFee: 750,
          federalPoliceCRNM: 204.77,
          apostillesAndTranslations: 450,
          total: 1404.77
        },
        portals: [
          {
            name: 'MigranteWeb (Ministério da Justiça e Segurança Pública)',
            url: 'https://migranteweb.mjt.gov.br',
            loginType: 'Gov.br Corporate Certificate',
            purpose: 'Brazilian sponsoring company files prior labor authorization (Autorização de Trabalho).'
          },
          {
            name: 'E-Consular Brazil',
            url: 'https://ec-brasilia.itamaraty.gov.br',
            loginType: 'Gov.br / Email Login',
            purpose: 'Pre-validate consular application documents before in-person passport submission.'
          },
          {
            name: 'Polícia Federal SISMIGRA & GRU Portal',
            url: 'https://servicos.dpf.gov.br',
            loginType: 'CPF / Protocol Number',
            purpose: 'Generate GRU tax receipt and book post-arrival biometric CRNM appointment.'
          }
        ],
        documentation: {
          identity: [
            'Valid international passport with at least 2 blank pages and 1-year validity',
            'Printed RER visa delivery receipt with signed declaration and photograph'
          ],
          credentials: [
            'University degree diplomas with Hague Apostille and sworn Portuguese translation (tradução juramentada)',
            'Curriculum vitae and certificates demonstrating at least 2 years of relevant professional experience'
          ],
          employment: [
            'Approval of prior labor authorization published in the Diário Oficial da União (DOU)',
            'Employment contract with Brazilian company or intra-company technical assistance agreement'
          ],
          financialAndHealth: [
            'Police Clearance Certificate (PCC) apostilled within 90 days of application',
            'Comprehensive international health insurance policy valid in Brazil'
          ],
          photoSpec: 'Recent passport photo (30mm x 40mm or 50mm x 70mm, white background, matte paper).'
        },
        eligibility: [
          'Concrete employment contract with a Brazilian entity or corporate technical transfer agreement approved by Coordenação-Geral de Imigração Laboral (CGIL)',
          'University degree and verifiable professional experience matching the job description',
          'Clean police record apostilled within 90 days'
        ],
        steps: [
          {
            step: 'Step 1: Brazilian Employer Files on MigranteWeb',
            desc: 'Sponsoring employer in Brazil files petition with Ministério da Justiça paying the R$ 168.13 authorization fee.'
          },
          {
            step: 'Step 2: DOU Publication & Consular Notification',
            desc: 'Approval is published in the Brazilian Official Gazette (Diário Oficial da União) and transmitted electronically to the designated consulate.'
          },
          {
            step: 'Step 3: Consular Visa Submission via E-Consular',
            desc: 'Applicant fills out SCVR form, uploads apostilled PCC and degrees to E-Consular, and attends consular appointment for passport stamping.'
          },
          {
            step: 'Step 4: Flight & Landing in Brazil',
            desc: 'Enter Brazil within 90 days of visa issuance.'
          },
          {
            step: 'Step 5: Federal Police Registration (CRNM) within 90 Days',
            desc: 'Pay GRU union tax (R$ 204.77) and attend Polícia Federal appointment to provide biometrics and obtain temporary residency protocol.'
          },
          {
            step: 'Step 6: Digital Work Card (CTPS) & Bank Account',
            desc: 'Issue Carteira de Trabalho Digital (CTPS) via gov.br and open Brazilian bank account (Nubank / Itaú / Bradesco).'
          }
        ],
        commonPitfalls: [
          'PCC issued or apostilled more than 90 days before consular lodgment.',
          'Translations prepared by unauthorized translation bureaus rather than an official Brazilian Tradutor Público Juramentado.'
        ]
      }
    ]
  }
};
