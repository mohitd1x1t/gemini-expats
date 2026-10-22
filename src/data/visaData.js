// Comprehensive Visa Process, Fees & Document Legalization Data by Country

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
        name: 'EU Blue Card Germany',
        category: 'Skilled Employment',
        validity: 'Duration of contract + 3 months (max 4 years, PR in 21-27 months)',
        processingTime: '4 to 8 weeks',
        fees: {
          consularFee: 75,
          auslanderbehordeFee: 100,
          apostillesAndTranslations: 200,
          zabEquivalence: 200,
          total: 575
        },
        eligibility: [
          'Recognized university degree (comparable on Anabin database or with ZAB Statement of Comparability)',
          'Binding job offer in Germany with gross annual salary meeting statutory threshold (~€45,300 for shortage occupations, ~€50,700 for general)',
          'No German language certificate required for initial visa issuance'
        ],
        steps: [
          {
            step: 'Step 1: Degree Verification (Anabin / ZAB)',
            desc: 'Verify your university and degree have "H+" status on anabin.kmk.org. If not listed, order a ZAB Statement of Comparability.'
          },
          {
            step: 'Step 2: National Visa (Category D) Application',
            desc: 'Book appointment at German Embassy / VFS Global. Submit employment declaration (Erklärung zum Beschäftigungsverhältnis) and work contract.'
          },
          {
            step: 'Step 3: Entry & City Registration (Anmeldung)',
            desc: 'Fly to Germany and register your residential address at the local Bürgeramt within 14 days to obtain your Tax ID (Steuer-ID).'
          },
          {
            step: 'Step 4: Ausländerbehörde Biometric Card',
            desc: 'Attend local immigration office appointment for fingerprint scan and receive your physical EU Blue Card.'
          }
        ]
      },
      {
        id: 'chancenkarte_de',
        name: 'Opportunity Card (Chancenkarte)',
        category: 'Job Search',
        validity: '1 year (allows 20 hrs/week part-time work)',
        processingTime: '4 to 8 weeks',
        fees: {
          consularFee: 75,
          blockedAccountSetup: 150,
          apostillesAndTranslations: 200,
          total: 425
        },
        eligibility: [
          'Points-based system: Minimum 6 points based on recognized qualifications, German (A2) or English (B2) skills, age, and professional experience',
          'Proof of financial sustenance (~€1,027/month via Blocked Account or binding part-time employment offer)'
        ],
        steps: [
          {
            step: 'Step 1: Points Assessment',
            desc: 'Calculate points on make-it-in-germany.com and assemble language certificates, degrees, and proof of funds.'
          },
          {
            step: 'Step 2: Embassy Application & Blocked Account',
            desc: 'Submit Category D jobseeker application with proof of blocked bank account (Sperrkonto).'
          },
          {
            step: 'Step 3: In-Country Transition',
            desc: 'Fly to Germany, search for jobs, and convert into a full EU Blue Card or Skilled Worker permit once employment is secured.'
          }
        ]
      },
      {
        id: 'family_reunion_de',
        name: 'Family Reunion Visa (Familienzusammenführung)',
        category: 'Family',
        validity: 'Co-terminus with primary resident sponsor',
        processingTime: '6 to 12 weeks',
        fees: {
          consularFeeAdult: 75,
          consularFeeMinor: 37.5,
          auslanderbehordeFee: 100,
          apostillesAndTranslations: 300,
          total: 512.5
        },
        eligibility: [
          'Spouse and minor children of valid residence permit holder (EU Blue Card, Skilled Worker, or PR)',
          'Spouses of EU Blue Card holders exempt from German A1 requirement',
          'Sponsor must demonstrate adequate living space and health insurance covering all dependents'
        ],
        steps: [
          {
            step: 'Step 1: Legalize Marriage & Birth Certificates',
            desc: 'Apostille foreign certificates and obtain German sworn court translations.'
          },
          {
            step: 'Step 2: Consular Joint or Separate Filing',
            desc: 'Apply at German consulate concurrently with primary applicant or subsequent to sponsor arrival.'
          },
          {
            step: 'Step 3: Registration & Health Insurance Co-Coverage',
            desc: 'Register at Bürgeramt and enroll family into statutory health insurance (Familienversicherung) at zero extra premium.'
          }
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
        fees: {
          entryPermitAndVisa: 1100, // MOHRE work permit & entry permit
          medicalFitnessExam: 320,  // Standard fast-track medical fitness (blood test & chest X-ray)
          emiratesIdFee: 370,       // ICP Emirates ID 2-year validity
          visaStampingAndAdmin: 500, // GDRFA / ICP digital residence visa
          total: 2290
        },
        eligibility: [
          'Valid job offer from a mainland UAE or Free Zone (DIFC, DMCC, ADGM, TECOM, DAFZA, etc.) registered company',
          'MOHRE employment offer letter signed by both parties with Ministry labor contract',
          'Attested university degree certificate (attested by home country foreign ministry + UAE Embassy + MOFA UAE)',
          'Passing mandatory medical fitness test (free of tuberculosis, HIV, Hepatitis B/C)'
        ],
        steps: [
          {
            step: 'Step 1: Entry Permit Issuance (Pink Visa)',
            desc: 'Your employer/sponsor applies for an initial electronic Entry Permit via MOHRE / ICP / GDRFA allowing legal entry into UAE.'
          },
          {
            step: 'Step 2: Arrival & Status Change',
            desc: 'Arrive in Dubai or Abu Dhabi. If already inside UAE on a visit visa, perform an in-country status change (Change of Status without exiting).'
          },
          {
            step: 'Step 3: Medical Fitness Screening',
            desc: 'Visit an authorized Medical Fitness Centre (e.g. Al Muhaisnah or Smart Salem in Dubai) for mandatory blood test and chest X-ray screening.'
          },
          {
            step: 'Step 4: Emirates ID Biometrics',
            desc: 'Attend ICP biometric center appointment for fingerprint and retina scan for your Emirates ID card.'
          },
          {
            step: 'Step 5: Residence Visa Stamping & Card Collection',
            desc: 'GDRFA/ICP issues the digital residence visa. Your physical Emirates ID card is delivered via Emirates Post to your registered address.'
          }
        ]
      },
      {
        id: 'uae_golden_visa',
        name: 'UAE Golden Visa (10 Years)',
        category: 'Long-Term Residency',
        validity: '10 years (renewable, 100% self-sponsored with no local employer sponsor needed)',
        processingTime: '1 to 3 weeks',
        fees: {
          eligibilityNominationFee: 250,
          visaIssuanceAndMedical: 1800,
          emiratesId10Year: 1070,
          total: 3120
        },
        eligibility: [
          'Skilled Professionals: Bachelor’s degree + monthly salary of at least AED 30,000 in classified occupational level 1 or 2',
          'Real Estate Investors: Property ownership in UAE valued at AED 2,000,000+ (off-plan or mortgaged eligible)',
          'Entrepreneurs / Tech Talent: Endorsement from Dubai Future Foundation or relevant federal council',
          'Allows sponsoring spouse, children of any age, and unlimited domestic helpers with no minimum stay requirement'
        ],
        steps: [
          {
            step: 'Step 1: Initial Nomination & Pre-Approval',
            desc: 'Submit nomination via GDRFA Dubai / ICP portal or Dubai One Central GDRFA VIP Lounge with salary certificates, bank statements, and degree equivalency.'
          },
          {
            step: 'Step 2: Medical Fitness & Emirates ID',
            desc: 'Complete VIP medical fitness exam and submit biometric enrollment for the 10-year card.'
          },
          {
            step: 'Step 3: 10-Year Residency Issuance',
            desc: 'Receive digital residency sticker and collect 10-year Golden Visa Emirates ID. No requirement to enter UAE every 6 months to maintain validity!'
          }
        ]
      },
      {
        id: 'uae_remote_work',
        name: 'Dubai Virtual Working Visa (Digital Nomad)',
        category: 'Remote Work',
        validity: '1 year (renewable annually)',
        processingTime: '1 to 2 weeks',
        fees: {
          applicationAndProcessing: 1100, // US$ 287 equivalent
          medicalFitnessExam: 320,
          emiratesId1Year: 270,
          healthInsuranceDubai: 1500, // UAE valid health cover
          total: 3190
        },
        eligibility: [
          'Proof of employment outside UAE with contract valid for at least 1 year (or proof of overseas business ownership for 1+ year)',
          'Minimum monthly remote salary/income of US$ 3,500 (or equivalent in foreign currency)',
          'Last 3 months of bank statements verifying salary deposits',
          'Health insurance policy with UAE coverage'
        ],
        steps: [
          {
            step: 'Step 1: Online Application via GDRFA',
            desc: 'Submit application on the official Visit Dubai / GDRFA portal with employment contract, bank statements, and passport copy.'
          },
          {
            step: 'Step 2: Electronic Entry Permit',
            desc: 'Receive pre-approved Virtual Working Visa entry permit in your email within 5 to 7 business days.'
          },
          {
            step: 'Step 3: Landing in Dubai & Emirates ID Stamping',
            desc: 'Land in Dubai, undergo standard medical fitness check, and receive your 1-year Emirates ID granting right to rent housing, open local bank accounts, and register utilities.'
          }
        ]
      },
      {
        id: 'uae_family_dependent',
        name: 'Family & Dependent Residence Visa UAE',
        category: 'Family',
        validity: 'Tied to sponsor’s visa duration (typically 2 or 10 years)',
        processingTime: '1 to 2 weeks',
        fees: {
          entryPermitDependent: 500,
          medicalFitnessExamSpouse: 320,
          emiratesIdFeePerDependent: 370,
          residencyStamping: 500,
          total: 1690
        },
        eligibility: [
          'Sponsor must earn a minimum monthly salary of AED 4,000 (or AED 3,000 plus employer-provided accommodation)',
          'Registered Ejari tenancy contract proving adequate family housing',
          'Attested marriage certificate (for spouse) and birth certificates (for children) legalized by foreign ministry & UAE Embassy',
          'Mandatory health insurance coverage for all sponsored dependents'
        ],
        steps: [
          {
            step: 'Step 1: Certificate Attestation',
            desc: 'Legalize marriage and birth certificates through your home country foreign ministry and UAE Embassy, then MOFA in UAE.'
          },
          {
            step: 'Step 2: Apply for Dependent Entry Permit',
            desc: 'Submit application via Amer Centre (Dubai) or ICP portal with salary certificate, Ejari, and attested certificates.'
          },
          {
            step: 'Step 3: Medical Screening & Emirates ID for Family',
            desc: 'Adult dependents (spouse and children 18+) complete medical fitness screening and biometric enrollment.'
          },
          {
            step: 'Step 4: Residency Stamping',
            desc: 'Receive digital residency visas and physical Emirates IDs for your family members.'
          }
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
        name: 'Employment Pass (EP) & COMPASS',
        category: 'Employment',
        validity: '1 to 2 years (renewable for up to 3 years thereafter)',
        processingTime: '2 to 5 weeks',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          multipleJourneyVisa: 30,
          educationalVerification: 150,
          total: 510
        },
        eligibility: [
          'Minimum qualifying fixed monthly salary of S$5,000 (increases progressively with age up to S$10,500 for age 45+; S$5,500 for financial sector)',
          'Passing the Complementarity Assessment Framework (COMPASS) points system with at least 40 points across Salary, Qualifications, Diversity, and Local Employment',
          'Recognized degree verified through MOM-approved background screening agencies (Dataflow, Cisive, HireRight)'
        ],
        steps: [
          {
            step: 'Step 1: MOM-Approved Degree Verification',
            desc: 'Employer submits candidate degree to an approved background screening agency for authenticity verification.'
          },
          {
            step: 'Step 2: Employer Submits EP via myMOM Portal',
            desc: 'Employer submits application with COMPASS self-assessment declaration on the Ministry of Manpower (MOM) portal.'
          },
          {
            step: 'Step 3: In-Principle Approval (IPA) Letter',
            desc: 'Upon approval, MOM issues an IPA letter serving as single-entry visa to enter Singapore within 6 months.'
          },
          {
            step: 'Step 4: Card Issuance & EPSC Appointment',
            desc: 'Arrive in Singapore. Employer requests pass issuance on myMOM. Attend appointment at Employment Pass Services Centre (EPSC) at Riverside Walk for biometrics.'
          },
          {
            step: 'Step 5: Receive Physical EP Smartcard',
            desc: 'Your green EP smartcard is delivered to employer\'s registered office within 4 business days. Download SGWorkPass and Singpass app.'
          }
        ]
      },
      {
        id: 'sg_one_pass',
        name: 'ONE Pass (Overseas Networks & Expertise)',
        category: 'Top-Tier Talent',
        validity: '5 years (unrestricted multi-company work rights)',
        processingTime: '4 to 8 weeks',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          total: 330
        },
        eligibility: [
          'Fixed monthly salary of at least S$30,000 (or equivalent overseas salary over the past year)',
          'Or outstanding achievements in arts, culture, sports, science, or academia',
          'Allows concurrent employment, founding companies, and direct open work authorization for spouse via Letter of Consent (LOC)'
        ],
        steps: [
          {
            step: 'Step 1: Direct or Sponsored Application',
            desc: 'Apply directly through MOM or with prospective employer submitting salary vouchers, tax returns, and resume.'
          },
          {
            step: 'Step 2: In-Principle Approval & Transition',
            desc: 'Receive 5-year IPA letter allowing travel to Singapore.'
          },
          {
            step: 'Step 3: EPSC Biometrics & 5-Year Card',
            desc: 'Complete biometrics at EPSC and collect 5-year personalized ONE Pass smartcard.'
          }
        ]
      },
      {
        id: 'sg_dependants_pass',
        name: 'Dependant’s Pass (DP) Singapore',
        category: 'Family',
        validity: 'Tied to primary EP validity',
        processingTime: '2 to 4 weeks',
        fees: {
          momApplicationFee: 105,
          momIssuanceFee: 225,
          total: 330
        },
        eligibility: [
          'Main EP passholder must earn a minimum fixed monthly salary of S$6,000 (S$12,000 for parents on LTVP)',
          'Legally married spouse and unmarried biological or legally adopted children under 21',
          'Apostilled/verified marriage certificate and birth certificates with English translations'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits DP on myMOM',
            desc: 'Can be submitted concurrently with primary EP or after primary EP issuance.'
          },
          {
            step: 'Step 2: IPA Issuance & Travel',
            desc: 'Family members receive individual IPA letters to enter Singapore.'
          },
          {
            step: 'Step 3: Biometrics at EPSC',
            desc: 'Children over 6 and spouse attend biometrics appointment at Employment Pass Services Centre.'
          }
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
        fees: {
          consularFee: 719, // for up to 3 years
          immigrationHealthSurcharge: 3105, // £1,035/year for 3 years
          biometricsAppointment: 20,
          tbTestAndEnglish: 250,
          total: 4094
        },
        eligibility: [
          'Certificate of Sponsorship (CoS) from a licensed UK Home Office sponsor',
          'Job role on eligible occupation list at suitable skill level (RQF 3 or above)',
          'Meeting minimum salary threshold (£38,700 or going rate for the profession)',
          'English proficiency at B1 level (IELTS for UKVI or degree Ecctis certified)'
        ],
        steps: [
          {
            step: 'Step 1: Certificate of Sponsorship (CoS)',
            desc: 'Employer assigns an electronic CoS containing reference number and salary breakdown.'
          },
          {
            step: 'Step 2: Online gov.uk Application & IHS Payment',
            desc: 'Submit application online and pay Immigration Health Surcharge (£1,035/year).'
          },
          {
            step: 'Step 3: Biometrics via UKVI ID App or VFS Global',
            desc: 'Scan biometric passport using the UK Immigration: ID Check smartphone app or attend in-person center.'
          },
          {
            step: 'Step 4: Decision & eVisa Digital Share Code',
            desc: 'Receive digital immigration status (eVisa) and travel vignette to enter the UK.'
          }
        ]
      },
      {
        id: 'global_talent_uk',
        name: 'Global Talent Visa UK',
        category: 'Exceptional Talent',
        validity: 'Up to 5 years (accelerated 3-year PR pathway)',
        processingTime: '4 to 8 weeks',
        fees: {
          endorsementFee: 524,
          visaFee: 192,
          immigrationHealthSurcharge: 3105,
          total: 3821
        },
        eligibility: [
          'Endorsement from recognized body (Tech Nation for digital technology, Royal Society, British Academy)',
          'Demonstrated track record of innovation or leadership in tech, academia, or arts',
          'No job offer or minimum salary threshold required'
        ],
        steps: [
          {
            step: 'Step 1: Stage 1 Endorsement Application',
            desc: 'Submit portfolio and reference letters to Tech Nation / endorsing body.'
          },
          {
            step: 'Step 2: Stage 2 Visa Application',
            desc: 'Apply online for the visa within 3 months of receiving endorsement approval.'
          },
          {
            step: 'Step 3: Biometrics & eVisa Activation',
            desc: 'Enroll biometrics and enter UK with complete independence to work, consult, or start a business.'
          }
        ]
      },
      {
        id: 'family_dependent_uk',
        name: 'Skilled Worker Dependant Visa',
        category: 'Family',
        validity: 'Co-terminus with primary Skilled Worker visa',
        processingTime: '3 to 6 weeks',
        fees: {
          consularFee: 719,
          immigrationHealthSurcharge: 3105,
          total: 3824
        },
        eligibility: [
          'Spouse, civil partner, or unmarried partner (cohabited 2+ years) and children under 18',
          'Proof of genuine and subsisting relationship',
          'Maintenance funds of £285 for partner, £315 for first child, £200 for subsequent child'
        ],
        steps: [
          {
            step: 'Step 1: Joint or Follow-on Online Filing',
            desc: 'Apply online linking to primary applicant’s UAN or CoS number.'
          },
          {
            step: 'Step 2: Pay IHS & Biometrics',
            desc: 'Pay health surcharge and attend biometrics appointment.'
          },
          {
            step: 'Step 3: Arrival & Open Work Rights',
            desc: 'Family receives digital eVisa permitting open employment and schooling in the UK.'
          }
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
        fees: {
          indApplicationFee: 380, // usually covered by sponsor
          apostillesAndTranslations: 200,
          total: 580
        },
        eligibility: [
          'Binding contract with an IND-recognized sponsor employer',
          'Meeting monthly gross salary threshold (€5,688 for age 30+, €4,171 for under 30)',
          'Valid passport and apostilled birth/marriage certificates'
        ],
        steps: [
          {
            step: 'Step 1: Sponsor Submits TEV to IND',
            desc: 'Your employer submits the combined entry and residence permit application directly to IND.'
          },
          {
            step: 'Step 2: Collect MVV Entry Sticker',
            desc: 'Visit Dutch embassy in home country to receive your provisional entry sticker (MVV).'
          },
          {
            step: 'Step 3: Gemeente Registration & IND Card',
            desc: 'Register at municipality for BSN and collect your biometric residence permit from IND desk.'
          }
        ]
      },
      {
        id: 'family_dependent_nl',
        name: 'Family & Partner Visa Netherlands',
        category: 'Family',
        validity: 'Co-terminus with primary Kennismigrant permit',
        processingTime: '2 to 4 weeks',
        fees: {
          indApplicationFee: 228,
          apostillesAndTranslations: 250,
          total: 478
        },
        eligibility: [
          'Spouse, registered partner, or unmarried cohabiting partner and children under 18',
          'Sponsor meets Kennismigrant income requirement',
          'Apostilled birth and marriage certificates'
        ],
        steps: [
          {
            step: 'Step 1: Joint Filing by Sponsor Employer',
            desc: 'Employer includes family members in the initial TEV petition submitted to IND.'
          },
          {
            step: 'Step 2: Collect Family MVVs',
            desc: 'Collect entry stickers at embassy and travel together to Netherlands.'
          },
          {
            step: 'Step 3: Gemeente Registration for BSN',
            desc: 'Register whole family at city hall to receive BSN numbers.'
          }
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
        fees: {
          ds160ConsularFee: 205,
          biometricsAndCourier: 50,
          apostillesAndEvaluations: 300,
          total: 555
        },
        eligibility: [
          'Bachelor’s degree or higher in a specific specialty field related to the position',
          'Approved Form I-129 petition from USCIS sponsored by a US employer',
          'Labor Condition Application (LCA) certified by Department of Labor'
        ],
        steps: [
          {
            step: 'Step 1: Lottery & I-129 Petition',
            desc: 'Employer submits electronic lottery registration in March; if selected, files Form I-129 petition.'
          },
          {
            step: 'Step 2: Form DS-160 & Consular Interview',
            desc: 'Complete DS-160 online, pay $205 consular fee, and attend in-person visa interview with I-797 approval notice.'
          },
          {
            step: 'Step 3: Entry on Form I-94 & SSN Application',
            desc: 'Enter US up to 10 days before start date and apply for Social Security Number (SSN).'
          }
        ]
      },
      {
        id: 'h4_dependent_usa',
        name: 'H-4 Dependent Visa',
        category: 'Family',
        validity: 'Co-terminus with primary H-1B approval',
        processingTime: '2 to 4 months',
        fees: {
          ds160ConsularFee: 205,
          biometricsFee: 85,
          total: 290
        },
        eligibility: [
          'Legally married spouse and unmarried biological or adopted children under 21',
          'Primary applicant holds valid H-1B status or approved I-797 petition',
          'Marriage and birth certificates'
        ],
        steps: [
          {
            step: 'Step 1: DS-160 Application per Dependent',
            desc: 'Submit individual DS-160 forms for spouse and each child.'
          },
          {
            step: 'Step 2: Attend Consular Interview',
            desc: 'Attend embassy appointment together with primary applicant or separately.'
          },
          {
            step: 'Step 3: US Entry & I-94 Record',
            desc: 'Family members receive electronic I-94 arrival records matching H-1B validity.'
          }
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
        fees: {
          workPermitFee: 155,
          biometricsFee: 85,
          medicalExam: 250,
          translationsAndWES: 300,
          total: 790
        },
        eligibility: [
          'LMIA approval or LMIA-exempt category (Intra-Company Transferee / CUSMA)',
          'Medical exam by approved panel physician',
          'Police clearance from all residences'
        ],
        steps: [
          {
            step: 'Step 1: Employer Portal / LMIA',
            desc: 'Employer obtains Labor Market Impact Assessment (LMIA) or submits offer in Employer Portal.'
          },
          {
            step: 'Step 2: IRCC Online Application',
            desc: 'Submit application online with biometrics and upfront medical exam.'
          },
          {
            step: 'Step 3: Port of Entry Letter & SIN',
            desc: 'Receive Letter of Introduction; exchange for physical Work Permit at Canadian border, then obtain SIN.'
          }
        ]
      },
      {
        id: 'sowp_dependent_ca',
        name: 'Spousal Open Work Permit (SOWP) & Dependent Child Study',
        category: 'Family',
        validity: 'Co-terminus with primary worker permit',
        processingTime: '2 to 3 months',
        fees: {
          openWorkPermitFee: 255,
          biometricsFee: 85,
          medicalExam: 250,
          total: 590
        },
        eligibility: [
          'Spouse or common-law partner of a skilled worker on TEER 0, 1, 2, or 3',
          'Dependent children under 22 can study at primary or secondary school without separate study permit',
          'Upfront medical exam'
        ],
        steps: [
          {
            step: 'Step 1: Concurrent IRCC Filing',
            desc: 'Apply online concurrently with primary worker’s work permit.'
          },
          {
            step: 'Step 2: Biometrics & Medicals',
            desc: 'Submit fingerprints at VAC and complete upfront medical examination.'
          },
          {
            step: 'Step 3: Border Stamping',
            desc: 'Collect Open Work Permit at Canadian airport port of entry.'
          }
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
        fees: {
          primaryApplicantFee: 3115,
          adultDependentFee: 3115,
          childDependentFee: 780,
          nominationFeeByEmployer: 330,
          policeClearanceAndMedical: 450,
          total: 5110
        },
        eligibility: [
          'Nominated by an approved Australian Standard Business Sponsor',
          'Occupation on Medium and Long-term Strategic Skills List (MLTSSL) or Short-term list',
          'Meeting Core Skills / TSMIT salary threshold (minimum A$73,150/year)',
          'At least 2 years relevant full-time work experience in the nominated occupation',
          'English proficiency (IELTS overall 5.0 with minimum 5.0 in each band, or PTE 36+)'
        ],
        steps: [
          {
            step: 'Step 1: Employer Sponsorship & Nomination',
            desc: 'Australian employer applies for Standard Business Sponsorship (SBS) and submits nomination petition paying the Skilling Australians Fund (SAF) levy.'
          },
          {
            step: 'Step 2: Skills Assessment & English Test',
            desc: 'If required for your occupation, obtain positive skills assessment from assessing authority (e.g., ACS for IT, Engineers Australia) and sit IELTS/PTE.'
          },
          {
            step: 'Step 3: ImmiAccount Application & Bupa Health',
            desc: 'Submit visa application online via ImmiAccount. Undergo immigration health examination with approved panel physician.'
          },
          {
            step: 'Step 4: Visa Grant & Travel to Australia',
            desc: 'Receive digital Visa Grant Notification (recorded on VEVO). Apply for Tax File Number (TFN) and Medicare reciprocal if applicable.'
          }
        ]
      },
      {
        id: 'skilled_189_190_aus',
        name: 'Skilled Independent / Nominated (Subclass 189 / 190)',
        category: 'Permanent Residency',
        validity: 'Permanent Residency (5-year travel facility)',
        processingTime: '6 to 12 months',
        fees: {
          primaryApplicantFee: 4770,
          adultDependentFee: 2385,
          skillsAssessment: 1000,
          policeAndMedical: 500,
          total: 8655
        },
        eligibility: [
          'Points-based system: Minimum 65 points based on age, English (Proficient/Superior), education, and skilled experience',
          'Positive formal Skills Assessment from relevant assessing authority',
          'Competent or Proficient English (IELTS 7.0+ or PTE 65+ for extra points)',
          'Age under 45 at time of invitation'
        ],
        steps: [
          {
            step: 'Step 1: Positive Skills Assessment & English Exam',
            desc: 'Obtain formal skills assessment from ACS / Engineers Australia and sit PTE Academic or IELTS.'
          },
          {
            step: 'Step 2: Submit Expression of Interest (EOI) in SkillSelect',
            desc: 'Log EOI on the Department of Home Affairs SkillSelect portal for Subclass 189 (federal) or Subclass 190 (state nomination).'
          },
          {
            step: 'Step 3: Invitation to Apply (ITA) & Full Lodgement',
            desc: 'Upon receiving invitation, lodge full visa application within 60 days on ImmiAccount with all police clearances and bank proofs.'
          },
          {
            step: 'Step 4: Permanent Resident Grant',
            desc: 'Receive unconditional Australian Permanent Residency status with Medicare healthcare rights and unrestricted work authorization.'
          }
        ]
      },
      {
        id: 'partner_dependent_aus',
        name: 'Subclass 482 Subsequent Entrant (Family Dependent)',
        category: 'Family',
        validity: 'Co-terminus with primary Subclass 482 visa',
        processingTime: '4 to 8 weeks',
        fees: {
          adultDependentFee: 3115,
          childDependentFee: 780,
          medicalExam: 450,
          total: 4345
        },
        eligibility: [
          'De facto partner or legally married spouse, and dependent children under 23',
          'Proof of genuine and continuing relationship (joint finances, shared lease)',
          'Pass health (Bupa medical exam) and character (police clearance) checks'
        ],
        steps: [
          {
            step: 'Step 1: Employer Nomination Update',
            desc: 'Employer agrees to include dependents on the 482 sponsorship.'
          },
          {
            step: 'Step 2: ImmiAccount Lodgement',
            desc: 'Submit subsequent entrant application attaching marriage/birth certificates.'
          },
          {
            step: 'Step 3: Grant on VEVO',
            desc: 'Dependents receive grant notification with unrestricted work and study entitlements.'
          }
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
        processingTime: '2 to 4 weeks (preferential fast-track)',
        fees: {
          certificateOfEligibility: 0,
          consularVisaStamping: 3000,
          translationAndApostilles: 15000,
          total: 18000
        },
        eligibility: [
          'Points-based system: Minimum 70 points for 3-year PR, or 80 points for 1-year fast-track PR (evaluated on degree, salary, experience, age, and JLPT Japanese level)',
          'Sponsoring Japanese employer or multinational with Tokyo/regional presence',
          'Annual salary threshold meeting points requirement (minimum ¥3,000,000 to ¥10,000,000+)'
        ],
        steps: [
          {
            step: 'Step 1: Employer Submits CoE Petition',
            desc: 'Sponsoring employer files application for a Certificate of Eligibility (CoE / 在留資格認定証明書) with Regional Immigration Services Bureau.'
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
          }
        ]
      },
      {
        id: 'eng_specialist_japan',
        name: 'Engineer / Specialist in Humanities / Int\'l Services',
        category: 'Employment',
        validity: '1, 3, or 5 years (renewable)',
        processingTime: '4 to 8 weeks',
        fees: {
          consularVisaStamping: 3000,
          translations: 10000,
          total: 13000
        },
        eligibility: [
          'Binding employment contract with a company in Japan with remuneration equal to or higher than a Japanese national',
          'University degree in a related major, or 10+ years of verifiable professional experience in the field',
          'Clean legal and immigration record'
        ],
        steps: [
          {
            step: 'Step 1: Certificate of Eligibility (CoE)',
            desc: 'Employer submits application to Immigration Bureau with corporate financial statements, job description, and university diploma.'
          },
          {
            step: 'Step 2: Embassy Visa Stamping',
            desc: 'Submit CoE and passport to Japanese Embassy to receive entry visa.'
          },
          {
            step: 'Step 3: Residence Card & Ward Registration',
            desc: 'Receive Zairyū Card upon arrival at major airport. Register address at ward office within 14 days to receive My Number notification.'
          }
        ]
      },
      {
        id: 'dependent_japan',
        name: 'Dependent Visa (Kazoku Taizai / 家族滞在)',
        category: 'Family',
        validity: 'Co-terminus with primary visa holder (1 to 5 years)',
        processingTime: '3 to 6 weeks',
        fees: {
          consularVisaStamping: 3000,
          translations: 10000,
          total: 13000
        },
        eligibility: [
          'Spouse and dependent children of valid work visa holder or Highly Skilled Professional',
          'Sponsor must demonstrate sufficient salary/income to support dependents in Japan',
          'Apostilled marriage and birth certificates with Japanese translation'
        ],
        steps: [
          {
            step: 'Step 1: CoE Application for Dependents',
            desc: 'Can be submitted simultaneously with primary applicant\'s CoE or after primary visa holder arrives in Japan.'
          },
          {
            step: 'Step 2: Embassy Visa & Arrival',
            desc: 'Obtain visa and receive dependent Zairyū Card at airport.'
          },
          {
            step: 'Step 3: Work Permission (Shikakugai Katsudō)',
            desc: 'Spouse can apply for Permission to Engage in Activity other than that Permitted (資格外活動許可) at airport or immigration to work part-time up to 28 hours/week.'
          }
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
        fees: {
          consularFee: 750, // Approx US$ 100 - $160
          federalPoliceCRNM: 204.77, // Taxa de Emissão de Carteira de Registro Nacional Migratório
          apostillesAndTranslations: 450, // Criminal check & remote contract sworn translation
          medicalTravelInsurance: 350,
          total: 1754.77
        },
        eligibility: [
          'Employment contract with non-Brazilian company or self-employment contract outside Brazil',
          'Proof of monthly remote income of at least US$ 1,500 (or bank balance of at least US$ 18,000)',
          'Clean Police Clearance Certificate (PCC) apostilled within 90 days of application',
          'Valid passport with at least 2 blank pages and 1-year validity'
        ],
        steps: [
          {
            step: 'Step 1: Document Legalization',
            desc: 'Apostille your Police Clearance Certificate (PCC) and have your remote employment contract and bank statements translated by a sworn Brazilian translator (tradutor juramentado).'
          },
          {
            step: 'Step 2: Consular Submission (E-Consular)',
            desc: 'Fill out the online application on the Brazilian Ministry of Foreign Affairs portal (formulario-mre.serpro.gov.br) and submit via E-Consular system of your local Brazilian consulate.'
          },
          {
            step: 'Step 3: In-Person Appointment & Passport Stamping',
            desc: 'Deliver physical passport, photo, and original documents. Collect your stamped VITEM XIV visa.'
          },
          {
            step: 'Step 4: Flight & Landing in Brazil',
            desc: 'Enter Brazil within the entry timeframe indicated on your visa sticker.'
          },
          {
            step: 'Step 5: Federal Police Registration (CRNM) within 90 Days',
            desc: 'Book an appointment with the Polícia Federal (PF) in your city (e.g., Lapa de Baixo in São Paulo). Pay GRU union tax (R$ 204.77), submit fingerprints, and receive your CRNM resident card.'
          }
        ]
      },
      {
        id: 'vitem_v',
        name: 'Work Visa (VITEM V)',
        category: 'Employment',
        validity: 'Up to 2 years (renewable / convertible to permanent)',
        processingTime: '6 to 12 weeks',
        fees: {
          consularFee: 750,
          ministryAuthorization: 300,
          federalPoliceCRNM: 204.77,
          apostillesAndTranslations: 550,
          total: 1804.77
        },
        eligibility: [
          'Pre-approved employment authorization from the Ministry of Justice and Public Security (Coordenação-Geral de Imigração Laboral)',
          'Recognized professional qualifications (degree + 2-5 years experience)',
          'Apostilled degrees and clean background check'
        ],
        steps: [
          {
            step: 'Step 1: Brazilian Employer Ministry Petition',
            desc: 'Your sponsoring Brazilian employer files a work permit petition with the Ministry of Justice and Public Security in Brasília via the MigranteWeb system.'
          },
          {
            step: 'Step 2: Ministry Approval & Consular Cable',
            desc: 'Once approved, the authorization is electronically transmitted to the Brazilian consulate in your home country.'
          },
          {
            step: 'Step 3: Consular Visa Application',
            desc: 'Submit your visa application with apostilled PCC, birth certificate, and university degrees.'
          },
          {
            step: 'Step 4: Federal Police Registration',
            desc: 'Register at the Federal Police station within 90 days of arrival to collect your CRNM foreign ID.'
          }
        ]
      },
      {
        id: 'vitem_xi',
        name: 'Family Reunion Visa (VITEM XI)',
        category: 'Family',
        validity: 'Co-terminus with family sponsor or permanent',
        processingTime: '4 to 8 weeks',
        fees: {
          consularFee: 750,
          federalPoliceCRNM: 204.77,
          apostillesAndTranslations: 400,
          total: 1354.77
        },
        eligibility: [
          'Spouse, civil partner (união estável), child, or dependent parent of a Brazilian citizen or valid residence permit holder',
          'Apostilled marriage or birth certificate with sworn translation',
          'Clean police record'
        ],
        steps: [
          {
            step: 'Step 1: Legalize Relationship Documents',
            desc: 'Apostille original marriage/birth certificates and obtain sworn Brazilian Portuguese translation.'
          },
          {
            step: 'Step 2: Embassy Application or In-Country Adjustment',
            desc: 'Can be applied for at the consulate abroad, or directly inside Brazil at the Federal Police.'
          },
          {
            step: 'Step 3: Federal Police CRNM Issuance',
            desc: 'Collect multi-year biometric residence permit granting full unrestricted work authorization in Brazil.'
          }
        ]
      }
    ]
  }
};
