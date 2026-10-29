/**
 * Pediatric Immunization Schedules, Medical Record Translation, Schooling Tiers & Spousal Work-Rights
 * Verified against STIKO (Robert Koch Institute), CDC, NHS, Receita Federal, and German AufenthG § 29.
 */

export const PEDIATRIC_VACCINE_SCHEDULES = [
  {
    scientificName: 'Hexavalent (DTaP-IPV-HepB-Hib)',
    diseasesCovered: 'Diphtheria, Tetanus, Pertussis (Whooping cough), Polio, Hepatitis B, Haemophilus influenzae b',
    brandNames: ['Infanrix Hexa', 'Hexaxim', 'Vaxelis'],
    localTerms: {
      germany: '6-fach-Impfung (Diphtherie, Tetanus, Keuchhusten, Polio, Hep B, Hib)',
      brazil: 'Vacina Hexavalente acelular (DTPa-VIP-HB-Hib)',
      usa: 'DTaP-HepB-IPV / Pentacel / Vaxelis',
      netherlands: 'DKTP-Hib-HepB (Rijksvaccinatieprogramma)',
      uae: 'Hexavalent Pediatric (MOHAP)'
    },
    timing: '2, 3/4, and 11–12 months of age',
    schoolMandatory: {
      germany: 'Recommended by STIKO; Polio and Tetanus strongly advised for sports.',
      usa: 'Strictly mandatory for daycare and K-12 public school enrollment.',
      brazil: 'Mandatory for Carteira de Vacinação clearance at UBS.'
    }
  },
  {
    scientificName: 'MMR / MMRV (Measles, Mumps, Rubella, Varicella)',
    diseasesCovered: 'Measles, Mumps, German Measles, Chickenpox',
    brandNames: ['Priorix', 'M-M-R II', 'Priorix-Tetra', 'ProQuad'],
    localTerms: {
      germany: 'Masern-Mumps-Röteln (MMR) & Windpocken (V)',
      brazil: 'Tríplice Viral (Sarampo, Caxumba, Rubéola) + Varicela',
      usa: 'MMR / Varicella',
      netherlands: 'BMR (Bof, Mazelen, Rodehond)',
      uae: 'MMR (Ministry of Health)'
    },
    timing: '1st dose at 11–12 months, 2nd dose at 15–24 months',
    schoolMandatory: {
      germany: 'CRITICAL LEGAL MANDATE: Under the German Measles Protection Act (Masernschutzgesetz), proof of 2x measles vaccinations or medical immunity titer is required by federal law before a child can step foot in any Kita (daycare) or school.',
      usa: 'Mandatory in all 50 states for school admission.',
      brazil: 'Mandatory in the National Immunization Program (PNI).'
    }
  },
  {
    scientificName: 'BCG (Bacillus Calmette–Guérin)',
    diseasesCovered: 'Tuberculosis (TB)',
    brandNames: ['BCG Vaccine', 'OncoTICE'],
    localTerms: {
      germany: 'BCG-Impfung (Not routinely administered since 1998 due to low incidence)',
      brazil: 'Vacina BCG (Mandatory at birth in maternity ward)',
      usa: 'BCG (Not part of routine US childhood immunization)',
      netherlands: 'BCG (Only for targeted high-risk groups)'
    },
    timing: 'At birth (in India, Brazil) or none in Western Europe/US',
    schoolMandatory: {
      germany: 'Not required. However, children arriving from high-incidence countries may require a Mantoux tuberculin skin test or IGRA blood test.',
      usa: 'Often triggers false positive on PPD skin test; request an IGRA Quantiferon-TB Gold blood test instead of chest X-ray.',
      brazil: 'Proof of scar or birth dose required.'
    }
  },
  {
    scientificName: 'Pneumococcal Conjugate (PCV13 / PCV15)',
    diseasesCovered: 'Pneumonia, Meningitis, Sepsis caused by Streptococcus pneumoniae',
    brandNames: ['Prevnar 13', 'Synflorix', 'Vaxneuvance'],
    localTerms: {
      germany: 'Pneumokokken-Konjugatimpfstoff',
      brazil: 'Pneumocócica 10-valente / 13-valente',
      usa: 'PCV15 / PCV20',
      netherlands: 'Pneumokokkenvaccinatie'
    },
    timing: '2, 4, and 11–14 months',
    schoolMandatory: {
      germany: 'Standard STIKO recommendation.',
      usa: 'Mandatory for child care entry under age 5.',
      brazil: 'Included in SUS basic calendar.'
    }
  },
  {
    scientificName: 'Meningococcal (MenACWY & MenB)',
    diseasesCovered: 'Meningococcal meningitis types A, C, W, Y and B',
    brandNames: ['Bexsero (MenB)', 'Nimenrix (MenACWY)', 'Menveo'],
    localTerms: {
      germany: 'Meningokokken B (Bexsero, newly added to standard STIKO in 2024) & Meningokokken C',
      brazil: 'Meningocócica ACWY / Meningocócica B',
      usa: 'MenACWY & MenB (Mandatory before middle/high school & college dorms)',
      uk: 'MenB at 8 & 16 weeks; MenACWY at age 14'
    },
    timing: 'MenB: 2, 4, 12 months; MenACWY: 12 months & adolescence',
    schoolMandatory: {
      germany: 'Recommended; health insurance (Krankenkasse) reimburses 100% of costs.',
      usa: 'Mandatory entry requirement for 7th grade and university.',
      brazil: 'Offered in public clinics for specific ages, private for full coverage.'
    }
  }
];

/**
 * Schooling and Daycare Tiers Benchmark Data
 */
export const SCHOOLING_TIERS_DATA = {
  germany: {
    publicLocal: {
      name: 'Public Kita & Staatliche Grundschule',
      language: '100% German immersion',
      monthlyTuition: '€0 – €150 (Berlin Kita is tuition-free via Kita-Gutschein; small meal fee ~€23/mo)',
      upfrontFees: '€0',
      pros: 'Total integration into neighborhood, fluent native German within 6 months, free high-standard education.',
      cons: 'Competitive spots in big cities (Berlin, Munich); 6-12 month waiting list; parent communication in German.',
      curriculum: 'State Rahmenlehrplan / Abitur'
    },
    privateBilingual: {
      name: 'Bilingual German-English School (e.g., Phorms, Berlin Cosmopolitan)',
      language: '50% English / 50% German',
      monthlyTuition: '€600 – €1,250 / month (income-dependent)',
      upfrontFees: '€400 – €1,000 (admission & registration)',
      pros: 'Gentle transition for expat kids, English-speaking staff, dual graduation (Abitur + IB diploma option).',
      cons: 'Higher costs, waiting list still applies.'
    },
    international: {
      name: 'International IB / American / British School (e.g., Berlin Brandenburg, Frankfurt IS)',
      language: '100% English (German taught as foreign language)',
      monthlyTuition: '€1,400 – €2,600 / month (€16,000 – €28,000 / year)',
      upfrontFees: '€2,000 – €4,500 (one-time capital levy & enrollment fee)',
      pros: 'Seamless global mobility if moving again, diverse expat peer group, world-class facilities.',
      cons: 'Expat bubble with low local German language acquisition; very expensive.'
    }
  },
  brazil: {
    publicLocal: {
      name: 'Escola Pública Municipal / Estadual',
      language: '100% Portuguese',
      monthlyTuition: 'R$ 0 (Free)',
      upfrontFees: 'R$ 0',
      pros: 'Fast Portuguese fluency, zero tuition burden.',
      cons: 'Varying infrastructure and security between neighborhoods; public school strikes occur.'
    },
    privateBilingual: {
      name: 'Escola Bilíngue Privada (São Paulo / Rio)',
      language: 'Dual Portuguese & English',
      monthlyTuition: 'R$ 2,500 – R$ 5,500 / month',
      upfrontFees: 'R$ 1,500 – R$ 3,000 (Matrícula)',
      pros: 'High academic rigor, sports facilities, security, strong English immersion.'
    },
    international: {
      name: 'International School (Graded American School, St. Paul’s British, Chapel)',
      language: 'English (US or British Curriculum with IB Diploma)',
      monthlyTuition: 'R$ 8,000 – R$ 16,000 / month (R$ 90k – R$ 180k / year)',
      upfrontFees: 'R$ 15,000 – R$ 35,000 (Jóia / Enrollment bond)',
      pros: 'Premier education in Latin America, top university placements in US/UK/Europe.',
      cons: 'Among the highest expat tuition costs in the Southern Hemisphere.'
    }
  },
  uae: {
    publicLocal: {
      name: 'UAE Public Government Schools',
      language: 'Arabic instruction with English curriculum',
      monthlyTuition: 'Restricted access for non-GCC expats (approx. AED 6,000/yr where permitted)',
      upfrontFees: 'AED 500',
      pros: 'Cultural immersion.',
      cons: 'Most expats attend private curriculum schools.'
    },
    privateBilingual: {
      name: 'Private CBSE / Indian / Bilingual Schools (e.g., GEMS, Delhi Private School)',
      language: 'English with Hindi/Arabic languages',
      monthlyTuition: 'AED 800 – AED 2,500 / month (AED 10k – AED 28k / year)',
      upfrontFees: 'AED 1,000 – AED 2,500',
      pros: 'Seamless alignment with Indian CBSE/ICSE curriculum; affordable for families.'
    },
    international: {
      name: 'Top British / IB / American Schools (e.g., Dubai College, JESS, American School of Dubai)',
      language: 'English (UK GCSE/A-Levels, IB, or US AP)',
      monthlyTuition: 'AED 3,500 – AED 8,500 / month (AED 45k – AED 95k / year)',
      upfrontFees: 'AED 3,000 – AED 7,500 (KHDA registration & assessment fee)',
      pros: 'Ranked Outstanding by KHDA inspection; elite facilities (Olympic pools, theater).'
    }
  },
  thailand: {
    publicLocal: {
      name: 'Thai Government School (Rong Rian Ratthaban)',
      language: '100% Thai language',
      monthlyTuition: '฿0 – ฿1,500 / month (Nominal administrative and uniform fees)',
      upfrontFees: '฿1,000',
      pros: 'Complete Thai cultural and linguistic immersion.',
      cons: 'Language barrier for non-Thai speakers; rote-learning structure.'
    },
    privateBilingual: {
      name: 'English Program (EP) / Bilingual Thai-English School',
      language: '50% English / 50% Thai',
      monthlyTuition: '฿8,000 – ฿22,000 / month (฿90k – ฿250k / year)',
      upfrontFees: '฿15,000 – ฿35,000',
      pros: 'Affordable bridge for expat families; strong STEM and English foundation.'
    },
    international: {
      name: 'International School (e.g., Bangkok Patana, ISB, NIST, Prem Tinsulanonda Chiang Mai)',
      language: '100% English (IB, British GCSE/A-Levels, or American AP)',
      monthlyTuition: '฿35,000 – ฿90,000 / month (฿400k – ฿1,000k / year)',
      upfrontFees: '฿100,000 – ฿250,000 (Capital fee & registration)',
      pros: 'World-class campuses, international university matriculation, diverse peer groups.'
    }
  },
  vietnam: {
    publicLocal: {
      name: 'Trường Công Lập (Public School)',
      language: '100% Vietnamese',
      monthlyTuition: '₫0 – ₫1,000,000 / month',
      upfrontFees: '₫500,000',
      pros: 'Rapid fluency in Vietnamese.',
      cons: 'Heavy curriculum workload; enrollment challenging for non-citizens without local household book.'
    },
    privateBilingual: {
      name: 'Bilingual Vietnamese-English (e.g., Vinschool, VAS)',
      language: 'Dual Vietnamese & Cambridge English curriculum',
      monthlyTuition: '₫8,000,000 – ₫20,000,000 / month (₫90M – ₫240M / year)',
      upfrontFees: '₫10,000,000 – ₫25,000,000',
      pros: 'High quality modern facilities with recognized Cambridge certificates.'
    },
    international: {
      name: 'International School (e.g., ISHCMC, BIS Saigon, UNIS Hanoi)',
      language: 'English (IB Diploma, British, or American curriculum)',
      monthlyTuition: '₫30,000,000 – ₫70,000,000 / month (₫350M – ₫850M / year)',
      upfrontFees: '₫40,000,000 – ₫75,000,000 (Enrollment capital fee)',
      pros: 'Among the finest international schools in Asia, IB world schools.'
    }
  },
  indonesia: {
    publicLocal: {
      name: 'Sekolah Negeri (Indonesian State School)',
      language: '100% Bahasa Indonesia',
      monthlyTuition: 'Rp 0 (Free for citizens, limited expat access)',
      upfrontFees: 'Rp 0',
      pros: 'Language fluency.',
      cons: 'Curriculum structured for local state examinations.'
    },
    privateBilingual: {
      name: 'SPK School / National Plus (e.g., Dyatmika Bali, HighScope Jakarta)',
      language: 'Bilingual English & Indonesian (Cambridge / International)',
      monthlyTuition: 'Rp 5,000,000 – Rp 15,000,000 / month',
      upfrontFees: 'Rp 10,000,000 – Rp 25,000,000 (Uang Pangkal / Entry building fee)',
      pros: 'Progressive educational approaches, strong arts and sports programs in Bali.'
    },
    international: {
      name: 'International School (e.g., Jakarta Intercultural School - JIS, Green School Bali, BIS)',
      language: '100% English (IB Diploma / American AP)',
      monthlyTuition: 'Rp 20,000,000 – Rp 50,000,000 / month (Rp 250M – Rp 600M / year)',
      upfrontFees: 'Rp 30,000,000 – Rp 70,000,000',
      pros: 'Pioneering holistic and sustainable education (Green School), elite university placement.'
    }
  },
  mexico: {
    publicLocal: {
      name: 'Escuela Primaria / Secundaria Pública (SEP)',
      language: '100% Spanish',
      monthlyTuition: 'Mex$ 0 (Constitutional free education)',
      upfrontFees: 'Mex$ 0',
      pros: 'Native Spanish fluency within one school year.',
      cons: 'Large class sizes; bureaucratic enrollment.'
    },
    privateBilingual: {
      name: 'Colegio Bilingüe Particular (e.g., Peterson Schools, Eton School)',
      language: 'Dual Spanish & English (50/50)',
      monthlyTuition: 'Mex$ 6,000 – Mex$ 16,000 / month',
      upfrontFees: 'Mex$ 8,000 – Mex$ 20,000 (Inscripción)',
      pros: 'Academic excellence, bilingual fluency, sports and technology infrastructure.'
    },
    international: {
      name: 'International School (e.g., American School Foundation - ASF, Greengates British, Churchill)',
      language: '100% English (US High School Diploma + IB / British A-Levels)',
      monthlyTuition: 'Mex$ 20,000 – Mex$ 45,000 / month (Mex$ 240k – Mex$ 500k / year)',
      upfrontFees: 'Mex$ 40,000 – Mex$ 100,000 (Cuota de admisión)',
      pros: 'Premier educational institutions in Latin America with direct Ivy League/Oxbridge pipelines.'
    }
  }
};

/**
 * Spousal Career & Dependent Work-Rights Matrix across 10 Destination Hubs
 */
export const SPOUSAL_WORK_RIGHTS = {
  germany: {
    dependentVisaType: 'Familienzusammenführung (§§ 29, 30 AufenthG)',
    workRightStatus: 'Immediate, 100% Unrestricted Right to Work (Erwerbstätigkeit erlaubt)',
    requiresSeparatePermit: false,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Legally permitted. If resident in Germany, overseas employer must comply with German statutory social contributions or spouse can register as freelance (Freiberufler).',
    languageRequirement: 'Exempt for spouses of EU Blue Card holders and IT specialists! (No A1 German certificate needed prior to visa issuance).',
    integrationResources: [
      { name: 'Volkshochschule (VHS)', desc: 'State-subsidized German integration courses (Integrationskurs) costing ~€2.29/hour.' },
      { name: 'Federal Employment Agency (Arbeitsagentur)', desc: 'Offers free career counseling, diploma recognition guidance, and resume matching for expat spouses.' }
    ]
  },
  uae: {
    dependentVisaType: 'Family Residence Visa (Husband/Wife Sponsorship)',
    workRightStatus: 'Permitted upon issuance of standard MOHRE Work Permit',
    requiresSeparatePermit: true,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: '100% Legal under UAE Virtual Working / Freelance framework without local corporate sponsor.',
    languageRequirement: 'None (English is the de facto corporate language in Dubai/Abu Dhabi).',
    integrationResources: [
      { name: 'Dubai Business Women Council', desc: 'Networking, mentoring, and entrepreneurship incubator for female professionals.' },
      { name: 'Twofour54 / Tecom Freelance Visas', desc: 'Affordable individual media and tech freelance permits.' }
    ]
  },
  singapore: {
    dependentVisaType: "Dependant's Pass (DP)",
    workRightStatus: 'Requires Separate Employment Pass or Letter of Consent (LOC restricted)',
    requiresSeparatePermit: true,
    laborMarketTest: true,
    remoteWorkForOverseasEmployer: 'Permitted if overseas company has zero physical presence or business activity in Singapore.',
    languageRequirement: 'None (English is primary working language).',
    integrationResources: [
      { name: 'PrimeStaff / Career Transition Singapore', desc: 'Assistance transitioning from Dependant Pass to independent S-Pass or Employment Pass.' }
    ]
  },
  uk: {
    dependentVisaType: 'Skilled Worker Dependant Visa',
    workRightStatus: 'Immediate, 100% Unrestricted Work Authorization',
    requiresSeparatePermit: false,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Permitted; subject to UK PAYE tax after 183 days or establishing UK tax residency.',
    languageRequirement: 'No initial English test required for dependants of Skilled Workers.'
  },
  netherlands: {
    dependentVisaType: 'Kennismigrant Dependant Visa',
    workRightStatus: 'Immediate, Unrestricted Labor Market Access (Arbeid Vrij Toegestaan)',
    requiresSeparatePermit: false,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Permitted via Dutch payroll umbrella company or self-employment (ZZP).'
  },
  usa: {
    dependentVisaType: 'H-4 (for H-1B) or L-2S (for L-1)',
    workRightStatus: 'L-2S: Immediate automatic work authorization incident to status. H-4: Requires approved I-140 and separate Form I-765 (EAD) with 4–9 month processing backlog.',
    requiresSeparatePermit: true,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Working remotely from US soil without valid US work authorization (EAD) violates non-immigrant status according to US immigration law.'
  },
  brazil: {
    dependentVisaType: 'VITEM V Dependant (Reunião Familiar)',
    workRightStatus: 'Immediate, 100% Equal Work Rights',
    requiresSeparatePermit: false,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Permitted; income declared via monthly Carnê-Leão tax return.',
    integrationResources: [
      { name: 'Digital Work Card (CTPS Digital)', desc: 'Obtained online immediately with CPF number to work for any Brazilian company.' }
    ]
  },
  thailand: {
    dependentVisaType: 'Non-Immigrant O (Dependent)',
    workRightStatus: 'Requires Separate Work Permit',
    requiresSeparatePermit: true,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: 'Permitted if holding DTV dependent or LTR dependent visa status; traditional Non-O requires Thai employer sponsorship for local payroll.',
    integrationResources: [
      { name: 'Thai Language & Culture Classes (ED Visa or Community)', desc: 'Alliance Française Bangkok, AUA Language Center, and British Council Bangkok.' }
    ]
  },
  vietnam: {
    dependentVisaType: 'TT Visa (Thân Nhân)',
    workRightStatus: 'Requires Independent Work Permit (LD2)',
    requiresSeparatePermit: true,
    laborMarketTest: true,
    remoteWorkForOverseasEmployer: 'Permitted for offshore contracts paid to offshore accounts; local employment requires DOLISA work permit sponsorship.',
    integrationResources: [
      { name: 'Saigon Expat Women & Families Community', desc: 'Active network organizing career meetups, international school tours, and Vietnamese language circles.' }
    ]
  },
  indonesia: {
    dependentVisaType: 'Family KITAS (Index E31 / C317)',
    workRightStatus: 'Strictly Prohibited from Local Employment without E23 Conversion',
    requiresSeparatePermit: true,
    laborMarketTest: true,
    remoteWorkForOverseasEmployer: 'Remote work for overseas companies permitted if not generating Indonesian-sourced revenue.',
    integrationResources: [
      { name: 'Bali Coworking & Family Hubs', desc: 'Bilingual international family networks in Canggu, Sanur, and Ubud (Outpost, BWork, Tropical Nomad).' }
    ]
  },
  mexico: {
    dependentVisaType: 'Residente Temporal por Unidad Familiar',
    workRightStatus: 'Permit to Work Granted upon Employer Job Offer',
    requiresSeparatePermit: true,
    laborMarketTest: false,
    remoteWorkForOverseasEmployer: '100% Permitted for offshore employers without Mexican tax liability on foreign salary.',
    integrationResources: [
      { name: 'INM Permiso de Trabajo Tramite', desc: 'Fast-track administrative filing at local INM office to add work authorization to the temporary resident card.' }
    ]
  }
};
