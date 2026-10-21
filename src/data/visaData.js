// Comprehensive Visa Process, Fees & Document Legalization Data by Country

export const COUNTRY_VISA_DETAILS = {
  brazil: {
    country: 'Brazil',
    currency: 'BRL',
    symbol: 'R$',
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
  },

  germany: {
    country: 'Germany',
    currency: 'EUR',
    symbol: '€',
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
          'Recognized university degree (comparable on Anabin or with ZAB Statement of Comparability)',
          'Binding job offer in Germany with gross annual salary meeting statutory threshold (€45,300 for shortage occupations, €50,700 for general)',
          'No German language certificate required for initial visa!'
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
            desc: 'Fly to Germany and register your residential address at the local Bürgeramt within 14 days.'
          },
          {
            step: 'Step 4: Ausländerbehörde Biometric Card',
            desc: 'Attend local immigration office appointment for fingerprint scan and receive your plastic EU Blue Card.'
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
          'Proof of financial sustenance (~€1,027/month via Blocked Account or work contract)'
        ],
        steps: [
          {
            step: 'Step 1: Points Assessment',
            desc: 'Calculate points on make-it-in-germany.com and assemble language certs, degrees, and proof of funds.'
          },
          {
            step: 'Step 2: Embassy Application',
            desc: 'Submit Category D jobseeker application with proof of blocked bank account (Sperrkonto).'
          },
          {
            step: 'Step 3: Job Search in Germany',
            desc: 'Convert into full EU Blue Card or Skilled Worker permit once employment offer is secured.'
          }
        ]
      }
    ]
  },

  uk: {
    country: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
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
      }
    ]
  },

  netherlands: {
    country: 'Netherlands',
    currency: 'EUR',
    symbol: '€',
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
      }
    ]
  },

  usa: {
    country: 'United States',
    currency: 'USD',
    symbol: '$',
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
      }
    ]
  },

  canada: {
    country: 'Canada',
    currency: 'CAD',
    symbol: 'C$',
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
      }
    ]
  }
};
