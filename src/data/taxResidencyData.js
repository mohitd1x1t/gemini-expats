/**
 * Cross-Border Tax Residency, DTAA, Pre-Departure Compliance & Totalization Data
 * Verified against Income Tax Act 1961 (India), UK Statutory Residence Test (HMRC),
 * US IRS Substantial Presence Test (IRC § 7701(b)), and bilateral DTAA/SSA agreements.
 */

export const TAX_RESIDENCY_RULES = {
  india: {
    country: 'India',
    fiscalYear: 'April 1 to March 31',
    rules: [
      {
        id: '182_day_departure',
        name: '182-Day Indian Physical Presence Rule (Sec 6(1)(c) Explanation (a))',
        description: 'An Indian citizen leaving India for the purpose of employment abroad is treated as a Resident ONLY if they remain in India for 182 days or more in the financial year (April 1 - March 31).',
        safeDepartureDeadline: 'September 28 (in non-leap years) or September 27 (leap years)',
        implication: 'If you leave India before ~September 28 and do not return before March 31, your physical presence in India is < 182 days, granting Non-Resident (NR) tax status for foreign-sourced income.'
      },
      {
        id: '120_day_deemed_resident',
        name: 'Finance Act 120-Day Rule for High Earners (Sec 6(1A))',
        description: 'If your total taxable income accrued inside India (excluding foreign income) exceeds ₹15 Lakhs in the fiscal year, the residency threshold drops from 182 days to 120 days. Exceeding 120 days makes you Resident but Not Ordinarily Resident (RNOR).',
        implication: 'In RNOR status, foreign employment income is not taxed in India, but global income may become scrutinized. Aim to keep Indian physical stay under 120 days if Indian-sourced income > ₹15L.'
      }
    ],
    preDepartureChecklist: [
      {
        id: 'nro_nre_conversion',
        title: 'Mandatory Conversion of Savings Accounts to NRO / NRE',
        category: 'Banking (FEMA Sec 41)',
        severity: 'Critical / Legal Mandatory',
        penalty: 'Penalty up to 3x the sum involved under Foreign Exchange Management Act (FEMA) for holding resident accounts while an NRI.',
        action: 'Notify your Indian bank (HDFC, ICICI, SBI) with your visa copy and overseas address proof to re-designate your resident savings account into a Non-Resident Ordinary (NRO) account. Open a tax-free Non-Resident External (NRE) account for foreign remittances.'
      },
      {
        id: 'demat_pis_account',
        title: 'Convert Resident Demat & Trading Account to PIS / Non-PIS',
        category: 'Investments & Equity',
        severity: 'High',
        penalty: 'Trading through a resident demat account as an NRI violates RBI / SEBI guidelines.',
        action: 'Designate your Demat account as NRO non-repatriable or open an NRE Portfolio Investment Scheme (PIS) account with an authorized dealer bank before transacting from abroad.'
      },
      {
        id: 'form_15ca_15cb',
        title: 'Form 15CA & 15CB for Funds Repatriation',
        category: 'Remittances',
        severity: 'Moderate',
        action: 'Required for transferring funds from your NRO account to your overseas bank account if exceeding ₹5 Lakhs per financial year, certifying tax has been paid.'
      },
      {
        id: 'fatca_declaration',
        title: 'Submit FATCA / CRS Self-Certification',
        category: 'Tax Reporting',
        severity: 'Mandatory',
        action: 'Update your tax residency status on mutual fund portals (CAMS, KFintech) and insurance policies to avoid account freezing.'
      },
      {
        id: 'epf_ppf_rules',
        title: 'Employee Provident Fund (EPF) & PPF Status',
        category: 'Retirement',
        severity: 'Advisory',
        action: 'Existing PPF accounts can continue until maturity on a non-repatriation basis; no fresh extensions permitted. EPF earns taxable interest after 36 months of account inactivity if you cease Indian employment.'
      }
    ]
  },
  uk: {
    country: 'United Kingdom',
    fiscalYear: 'April 6 to April 5',
    rules: [
      {
        id: 'uk_srt',
        name: 'HMRC Statutory Residence Test (SRT)',
        description: 'Determines UK tax residency via Automatic Overseas Tests, Automatic UK Tests, and Sufficient Ties Tests (Family, Accommodation, Work, 90-day ties).',
        implication: 'If moving mid-tax year, apply for "Split-Year Treatment" (Case 1: Starting full-time work abroad; Case 2: Accompanying spouse; Case 3: Ceasing UK home) to ensure earnings after departure are not taxed in the UK.'
      }
    ]
  },
  usa: {
    country: 'United States',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'us_spt',
        name: 'IRS Substantial Presence Test (SPT)',
        description: 'You are considered a US tax resident if physically present for at least 31 days during the current year, AND 183 days over a 3-year period: (Current year days) + (1/3 days in previous year) + (1/6 days in year before that) ≥ 183.',
        implication: 'Once triggered, you are subject to worldwide US taxation and mandatory FBAR (FinCEN 114 for foreign accounts > $10,000) and FATCA Form 8938 reporting.'
      }
    ]
  },
  brazil: {
    country: 'Brazil',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'brazil_residency',
        name: 'Receita Federal Fiscal Residence on Day One / 183 Days',
        description: 'Holding a permanent visa or local employment contract establishes Brazilian tax residency on DAY ONE. On temporary visas, residency triggers upon completing 183 days of physical presence within a 12-month period.',
        implication: 'Once a tax resident, global income must be declared monthly via "Carnê-Leão" and taxed up to 27.5%. When departing Brazil, filing a "Declaração de Saída Definitiva do País (DSDP)" is mandatory to terminate global tax liability.'
      }
    ]
  },
  germany: {
    country: 'Germany',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'germany_unlimited',
        name: 'Unbeschränkte Steuerpflicht (Unlimited Tax Liability)',
        description: 'Triggered from your first registered address (Anmeldung) or habitual residence (Gewöhnlicher Aufenthalt > 6 months) under §§ 8, 9 Abgabenordnung (AO).',
        implication: 'Worldwide income is taxed at progressive rates up to 45% + solidarity surcharge. The Progression Proviso (Progressionsvorbehalt) means foreign income earned before arrival is not taxed directly, but increases the tax bracket on your German salary.'
      }
    ]
  },
  thailand: {
    country: 'Thailand',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'thailand_180_days',
        name: '180-Day Physical Presence & Foreign Remittance Rule (Paw 161/2566)',
        description: 'Under Thai Revenue Code Section 41, an individual present in Thailand for ≥ 180 days in any calendar year becomes a Thai tax resident. Under Revenue Department Instruction No. Paw 161/2566 (effective 2024), foreign income brought into Thailand by a tax resident is subject to Thai personal income tax regardless of when it was earned.',
        implication: 'Digital nomads on DTV visas or remote workers should plan remittance timing and consider DTAA foreign tax credits. LTR visa holders enjoy specific tax exemptions on foreign income.'
      }
    ]
  },
  vietnam: {
    country: 'Vietnam',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'vietnam_183_days',
        name: '183-Day Physical Presence or Registered Regular Residence',
        description: 'You are considered a tax resident in Vietnam if you are physically present for 183 days or more in a calendar year (or in 12 consecutive months), OR maintain a registered residential lease in Vietnam for 183 days or more.',
        implication: 'Tax residents are subject to progressive PIT rates from 5% up to 35% on global income. Non-residents are taxed at a flat 20% rate strictly on Vietnam-sourced income.'
      }
    ]
  },
  indonesia: {
    country: 'Indonesia',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'indonesia_183_days',
        name: '183-Day Rule & DGT Territorial Exemption',
        description: 'Under the Indonesian Income Tax Law (UU HPP), staying in Indonesia for more than 183 days in a 12-month period or residing with intent to stay makes you a resident tax subject (SPDN). However, qualified foreign specialists with specific STEM expertise can access territorial taxation on Indonesian-sourced income for their first 4 years.',
        implication: 'Holders of the Remote Worker E33G visa with offshore income are treated as non-taxable on foreign earnings that are not derived from Indonesian businesses.'
      }
    ]
  },
  mexico: {
    country: 'Mexico',
    fiscalYear: 'January 1 to December 31',
    rules: [
      {
        id: 'mexico_center_vital_interests',
        name: 'Center of Vital Interests & Fiscal Home (Código Fiscal de la Federación Art. 9)',
        description: 'You are considered a Mexican tax resident if you establish a permanent home in Mexico. If you have homes in two countries, you are resident in Mexico if your center of vital interests is in Mexico (i.e. >50% of your annual income is derived from Mexican sources or Mexico is your primary center of professional activities).',
        implication: 'Holding a Residente Temporal visa while working 100% remotely for a foreign employer with foreign pay avoids Mexican ISR taxation unless funds are routed through Mexican corporate entities.'
      }
    ]
  }
};

/**
 * Double Taxation Avoidance Agreements (DTAA) & Totalization Agreements
 * Covers bilateral treaties between common origins (e.g., India) and 10 destination hubs.
 */
export const BILATERAL_AGREEMENTS = {
  germany: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Salaries & Wages taxed only in country where work is physically exercised unless stay < 183 days and paid by non-resident employer.',
    dtaaEliminationDoubleTax: 'Article 23: Credit / Exemption method prevents paying tax on the same salary in both jurisdictions.',
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Bilateral Social Security Agreement (SSA) between India & Germany',
      inEffectSince: 'May 1, 2017',
      certificateOfCoverage: 'Available for postings up to 48 months (extendable to 60 months). Expat can be exempted from German statutory pension (Rentenversicherung, 9.3% employee share) by submitting a Certificate of Coverage (CoC) from Indian EPFO.',
      pensionRefundRights: 'Non-EU citizens contributing to German Rentenversicherung for < 60 months can apply for a full refund of their employee contribution share after a 24-month waiting period post-departure from Germany.'
    }
  },
  uae: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Income from employment in the UAE is taxed only in the UAE (current personal income tax rate: 0%).',
    dtaaEliminationDoubleTax: 'Article 24: With zero UAE personal income tax, NRIs who qualify as non-residents under Indian 182-day rule pay ZERO income tax on UAE earnings.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'No Bilateral Totalization Agreement',
      details: 'Expatriates do not pay statutory UAE GPSSA pension. Instead, UAE Federal Decree-Law mandates an End of Service Gratuity (ESG) or voluntary participation in the DIFC Employee Workplace Savings (DEWS) scheme.'
    }
  },
  singapore: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Dependent personal services taxed in Singapore. Progressive resident tax rates 0% - 24%.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'No Totalization Agreement with India / USA',
      details: 'Foreigners on Employment Pass (EP) or S-Pass are exempt from mandatory Central Provident Fund (CPF) deductions. Voluntary supplementary retirement schemes (SRS) can be cashed out with a 50% tax concession after a 10-year holding period.'
    }
  },
  uk: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 16: Employment income taxed where duties are performed.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'No Comprehensive SSA between India & UK',
      details: 'Expats pay UK National Insurance Contributions (NIC Class 1: currently 8% up to upper earnings limit, 2% above). NIC cannot be refunded upon repatriation.'
    }
  },
  netherlands: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Employment exercised in the Netherlands is taxable by Dutch Belastingdienst.',
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Social Security Agreement (SSA) in effect since Dec 2010',
      details: 'Covers export of benefits, totalization of contribution periods, and exemption from Dutch AOW/Anw/WIA for posted workers holding an EPFO CoC for up to 60 months.'
    }
  },
  usa: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 16: Dependent Personal Services. Remuneration taxed in US if work performed there.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'No US-India Totalization Agreement',
      details: 'Expats pay 6.2% Social Security + 1.45% Medicare (FICA). Contributions are generally not refundable unless expat accumulates 40 US credits (10 years of contributions) for future retirement benefits.'
    }
  },
  canada: {
    dtaaSigned: true,
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Canada-India Social Security Agreement (In force Aug 2015)',
      details: 'Allows totalization of CPP (Canada Pension Plan) and Indian EPFO contribution periods to qualify for old-age security and pension benefits.'
    }
  },
  australia: {
    dtaaSigned: true,
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Australia-India Social Security Agreement (In force Jan 2016)',
      details: 'Exempts posted employees from Australian Superannuation Guarantee (11.5%) via Certificate of Coverage. Non-posted expats can claim Departing Australia Superannuation Payment (DASP) with 35%-65% withholding tax upon leaving on a temporary visa.'
    }
  },
  japan: {
    dtaaSigned: true,
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Japan-India Social Security Agreement (In force Oct 2016)',
      details: 'Totalization of pension periods and Lump-Sum Withdrawal Payment (Dattai Ichijikin) claimable within 2 years of leaving Japan for up to 5 years of Nenkin contributions.'
    }
  },
  brazil: {
    dtaaSigned: true,
    socialSecurityTotalization: {
      hasAgreement: true,
      title: 'Brazil-India Bilateral Social Security Agreement (Signed 2020)',
      details: 'Coordinates INSS benefits, mutual period aggregation for retirement, and temporary posting exemptions.'
    }
  },
  thailand: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Salaries and wages taxed in the state where employment is exercised. Double taxation eliminated via tax credit method.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'Thailand Social Security Framework',
      details: 'Expats employed on Thai payroll contribute to the Thai Social Security Fund (SSF, 5% capped at 750 THB/mo). Foreign retirees or departing workers can claim accumulated Old Age Pension contributions upon permanent exit.'
    }
  },
  vietnam: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Employment income taxed only in residence state unless employment is exercised in the other contracting state for ≥ 183 days.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'Vietnam Social Insurance (SI) One-Time Lump Sum',
      details: 'Foreign workers contributing to Vietnam Social Insurance (BHXH, 8% employee contribution) are eligible to claim a one-time lump-sum withdrawal payment upon expiration of their work permit and permanent exit from Vietnam.'
    }
  },
  indonesia: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Dependent personal services taxed where physically performed. DTAA relief via foreign tax credits prevents double deduction.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'BPJS Ketenagakerjaan (JHT / Jaminan Hari Tua)',
      details: 'Foreign employees enrolled in Indonesia’s BPJS Old Age Security (JHT) can withdraw their entire accumulated balance (employee 2% + employer 3.7%) upon permanent departure and KITAS cancellation (EPO).'
    }
  },
  mexico: {
    dtaaSigned: true,
    dtaaArticleEmployment: 'Article 15: Salaries, wages, and remunerations taxed in source country where physically earned unless 183-day exemption applies. Tax credit mechanism eliminates double taxation.',
    socialSecurityTotalization: {
      hasAgreement: false,
      title: 'IMSS / AFORE Retirement System',
      details: 'Foreign workers on local Mexican payroll contribute to IMSS and an individual AFORE retirement account. Funds in SAR/AFORE sub-accounts can be managed or transferred under consular certification upon retirement.'
    }
  }
};

/**
 * Calculates Indian Tax Residency status based on exact departure date
 * @param {string} departureDate - YYYY-MM-DD
 * @param {boolean} indianIncomeOver15L - Whether Indian-sourced income exceeds ₹15 Lakhs
 */
export function calculateIndianTaxResidency(departureDate, indianIncomeOver15L = false) {
  if (!departureDate) return null;

  const dep = new Date(departureDate);
  const year = dep.getFullYear();
  const month = dep.getMonth(); // 0-indexed (0 = Jan, 3 = April)
  const day = dep.getDate();

  // Indian Financial Year runs from April 1 (year) to March 31 (year + 1)
  let fyStartYear = month >= 3 ? year : year - 1;
  const fyStart = new Date(fyStartYear, 3, 1); // April 1
  const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31

  // Days spent in India from April 1 until departure day (inclusive)
  const msDiff = dep.getTime() - fyStart.getTime();
  const daysInIndia = Math.max(1, Math.floor(msDiff / (1000 * 60 * 60 * 24)) + 1);

  const thresholdStandard = 182;
  const thresholdHighEarner = 120;

  const isNonResidentStandard = daysInIndia < thresholdStandard;
  const isNonResidentHighEarner = daysInIndia < thresholdHighEarner;

  const daysUntilStandardBreach = thresholdStandard - daysInIndia;
  const daysUntilHighEarnerBreach = thresholdHighEarner - daysInIndia;

  let statusText = '';
  let statusBadge = '';
  let explanation = '';

  if (isNonResidentStandard) {
    if (indianIncomeOver15L && !isNonResidentHighEarner) {
      statusText = 'RNOR (Resident but Not Ordinarily Resident)';
      statusBadge = 'warning';
      explanation = `You stayed ${daysInIndia} days in India (over 120 days). Since your Indian income exceeds ₹15 Lakhs, you trigger RNOR status under Sec 6(1A). Your foreign salary remains non-taxable in India, but global assets may face scrutiny.`;
    } else {
      statusText = 'Non-Resident (NR) — Safe Harbor Qualified';
      statusBadge = 'success';
      explanation = `You will spend only ${daysInIndia} days in India this fiscal year (< 182 days). As an Indian citizen leaving for foreign employment, your foreign-sourced income is 100% EXEMPT from Indian taxation!`;
    }
  } else {
    statusText = 'Resident & Ordinarily Resident (ROR) — Dual Residency Risk!';
    statusBadge = 'danger';
    explanation = `You spent ${daysInIndia} days in India this fiscal year (≥ 182 days). You remain a tax resident of India for FY ${fyStartYear}-${fyStartYear + 1}. You must invoke DTAA Article 15/23 tie-breaker rules and claim Foreign Tax Credit (FTC via Form 67) to prevent double taxation on your foreign salary.`;
  }

  return {
    fiscalYearLabel: `FY ${fyStartYear}-${(fyStartYear + 1).toString().slice(-2)}`,
    daysInIndia,
    daysRemainingSafe: Math.max(0, daysUntilStandardBreach),
    statusText,
    statusBadge,
    explanation,
    isSafeNR: isNonResidentStandard && (!indianIncomeOver15L || isNonResidentHighEarner),
    fyStartDate: fyStart.toISOString().split('T')[0],
    fyEndDate: fyEnd.toISOString().split('T')[0]
  };
}
