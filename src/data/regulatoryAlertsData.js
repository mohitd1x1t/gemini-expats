/**
 * Country-Specific Regulatory & Consular Change Alerts Database
 * Tracks verified official policy changes, effective dates, official sources, and impact.
 */

export const REGULATORY_CHANGE_ALERTS = [
  {
    id: 'de_blue_card_reform_2024',
    countryId: 'germany',
    countryName: 'Germany 🇩🇪',
    title: 'EU Blue Card (§ 18g AufenthG) Salary Threshold Reduced & IT Specialist Exemption',
    effectiveDate: 'Nov 2023 – Current',
    officialAuthority: 'Federal Ministry of the Interior (BMI) / Auswärtiges Amt',
    officialUrl: 'https://www.make-it-in-germany.com',
    severity: 'positive',
    summary: 'The statutory minimum salary for the EU Blue Card in shortage IT occupations was reduced to 45.3% of the pension ceiling (~€41,041/year in 2024). Additionally, IT professionals with 3+ years of verifiable experience can now qualify WITHOUT a formal university degree.',
    previousRule: 'Mandatory university degree + minimum salary of €45,552 for bottleneck professions.',
    newRule: 'Minimum salary €41,041/yr for IT professions; 3 yrs relevant tech experience accepted in lieu of degree; fast-track Permanent Residence in 21 months with B1 German (or 27 months with A1 German).',
    whoIsAffected: 'Software engineers, DevOps leads, data scientists, and IT product managers relocating to Germany.'
  },
  {
    id: 'ae_golden_visa_expansion_2024',
    countryId: 'uae',
    countryName: 'UAE 🇦🇪',
    title: '10-Year Golden Visa Real Estate & Tech Executive Thresholds Streamlined',
    effectiveDate: 'Jan 2024 – Current',
    officialAuthority: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) / Dubai Land Dept',
    officialUrl: 'https://smartservices.icp.gov.ae',
    severity: 'positive',
    summary: 'Eliminated the previous requirement of paying a mandatory AED 1 Million upfront down payment for mortgaged or off-plan properties to qualify for the 10-Year Golden Visa (provided total property valuation meets AED 2M). Tech executives earning AED 30,000/month basic salary remain eligible under the skilled professional route.',
    previousRule: 'Required a minimum AED 1M cash payment proof submitted to Dubai Land Department.',
    newRule: 'Bank mortgage or off-plan contracts accepted as long as property title value is AED 2,000,000+; tech specialist category expedited via Dubai Silicon Oasis and DIFC.',
    whoIsAffected: 'Expats purchasing property or high-earning tech professionals in Dubai/Abu Dhabi.'
  },
  {
    id: 'uk_salary_threshold_hike_2024',
    countryId: 'uk',
    countryName: 'United Kingdom 🇬🇧',
    title: 'Skilled Worker General Salary Threshold Raised to £38,700',
    effectiveDate: 'April 4, 2024',
    officialAuthority: 'UK Visas and Immigration (UKVI) / Home Office',
    officialUrl: 'https://www.gov.uk/skilled-worker-visa',
    severity: 'warning',
    summary: 'The general baseline salary requirement for new Skilled Worker visa applicants increased by 48% from £26,200 to £38,700 per year (or the occupation code going rate, whichever is higher). Immigration Salary List (ISL) replaced the Shortage Occupation List with smaller discounts.',
    previousRule: 'Baseline salary £26,200 per year.',
    newRule: 'Baseline salary £38,700; new entrants (graduates under 26) can qualify at £30,960 (70% or 80% discount). Existing visa holders renewing or changing sponsors before 2030 are protected under transitional arrangements.',
    whoIsAffected: 'New foreign applicants seeking employer sponsorship in the UK.'
  },
  {
    id: 'nl_30_percent_ruling_scaling_2024',
    countryId: 'netherlands',
    countryName: 'Netherlands 🇳🇱',
    title: 'Dutch 30% Tax Ruling Phased Scaling Scheme (30/20/10)',
    effectiveDate: 'Jan 1, 2024',
    officialAuthority: 'Belastingdienst (Dutch Tax Administration)',
    officialUrl: 'https://www.belastingdienst.nl',
    severity: 'warning',
    summary: 'The 30% ruling for incoming highly skilled migrants is reduced progressively over the 5-year benefit duration: 30% tax-free allowance for the first 20 months, 20% for months 21–40, and 10% for months 41–60. The Balkenende norm salary cap also applies.',
    previousRule: 'Flat 30% tax-free allowance across the entire 60-month duration.',
    newRule: 'Phased 30/20/10 structure over 5 years. (Note: Expat lobbying has led to Dutch parliament evaluating a compromise amendment for late 2024/2025; existing beneficiaries before Dec 31, 2023 remain grandfathered).',
    whoIsAffected: 'All tech professionals moving to the Netherlands under the Kennismigrant scheme.'
  },
  {
    id: 'sg_compass_point_system_2024',
    countryId: 'singapore',
    countryName: 'Singapore 🇸🇬',
    title: 'COMPASS Points System Mandatory for all Employment Pass (EP) Renewals',
    effectiveDate: 'Sept 2023 (New) & Sept 2024 (Renewals)',
    officialAuthority: 'Ministry of Manpower (MOM)',
    officialUrl: 'https://www.mom.gov.sg',
    severity: 'info',
    summary: 'In addition to meeting the qualifying monthly salary ($5,000 baseline, $5,500 for Financial Services), all EP applicants must pass the COMPASS points test, scoring at least 40 points across 4 foundational criteria (Salary, Qualifications, Diversity, Local Employment) and 2 bonus criteria.',
    previousRule: 'Salary benchmark alone was sufficient for EP approval.',
    newRule: 'Must score 40+ points on COMPASS rubric; educational qualifications must be third-party verified via MOM-approved background check companies (e.g., Dataflow, Veremark).',
    whoIsAffected: 'All foreign developers, managers, and executives applying for or renewing an EP.'
  }
];
