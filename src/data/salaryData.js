// Authoritative IT & Tech Industry Expat Compensation Benchmarks

export const IT_ROLES = [
  { id: 'software_engineer', name: 'Software Engineer / Full Stack', category: 'Engineering' },
  { id: 'backend_engineer', name: 'Backend & Systems Engineer', category: 'Engineering' },
  { id: 'frontend_engineer', name: 'Frontend / Web UI Engineer', category: 'Engineering' },
  { id: 'mobile_engineer', name: 'Mobile Engineer (iOS / Android)', category: 'Engineering' },
  { id: 'devops_sre', name: 'DevOps / Cloud Platform / SRE', category: 'Infrastructure' },
  { id: 'cloud_architect', name: 'Cloud Solutions & Systems Architect', category: 'Infrastructure' },
  { id: 'data_engineer', name: 'Data Engineer & Pipelines', category: 'Data & AI' },
  { id: 'data_scientist_ml', name: 'Data Scientist & Machine Learning / AI', category: 'Data & AI' },
  { id: 'qa_automation', name: 'QA & Test Automation Engineer', category: 'Quality' },
  { id: 'cybersecurity', name: 'Cybersecurity & Infosec Specialist', category: 'Security' },
  { id: 'product_manager', name: 'Technical Product Manager (PM)', category: 'Product' },
  { id: 'ui_ux_designer', name: 'Product Designer / UI-UX Lead', category: 'Design' },
  { id: 'engineering_manager', name: 'Engineering Manager / Tech Lead', category: 'Leadership' }
];

export const EXPERIENCE_LEVELS = [
  { id: 'junior', label: 'Junior / Associate', years: '0–2 yrs', factor: 0.68 },
  { id: 'mid', label: 'Mid-Level', years: '3–5 yrs', factor: 0.85 },
  { id: 'senior', label: 'Senior', years: '6–9 yrs', factor: 1.0 },
  { id: 'staff', label: 'Staff / Principal / Lead', years: '10–14 yrs', factor: 1.25 },
  { id: 'director', label: 'Director / Head of Engineering', years: '15+ yrs', factor: 1.55 }
];

// Country Benchmarks (Annual base figures in local currency for a Senior level)
export const COUNTRY_SALARY_BENCHMARKS = {
  germany: {
    currency: 'EUR',
    symbol: '€',
    seniorMedianBase: 84000,
    cityMultipliers: {
      'Berlin': 1.0,
      'Munich': 1.14,
      'Frankfurt': 1.10,
      'Hamburg': 1.05,
      'Cologne': 1.02,
      'Stuttgart': 1.08
    },
    // EU Blue Card statutory legal threshold for IT/STEM bottleneck occupations (2024-2026)
    visaThresholdAnnual: 45300,
    visaName: 'EU Blue Card (STEM / Shortage)',
    regularVisaThreshold: 50580,
    taxEstimate: {
      singleTaxRate: 0.41, // Includes income tax + solidarity + social security (pension 9.3%, health 7.3%, unemployment 1.3%, care 2.2%)
      familyTaxRate: 0.32, // Steuerklasse 3 (married single earner with dependent children)
      notes: 'Germany deducts health insurance, state pension, care insurance, and income tax at source. Kindergarten (Kita) is subsidized or free in Berlin/Hamburg.'
    },
    relocationPerks: [
      'Relocation lump-sum (€3,000 – €7,000 tax-free)',
      '1 to 2 months corporate furnished housing in arrival city',
      'Visa agency (Relo consultant) paid by employer',
      'Deutschlandticket (€49/mo) subsidized transit pass',
      '30 days statutory paid vacation (standard in German tech)'
    ]
  },
  brazil: {
    currency: 'BRL',
    symbol: 'R$',
    seniorMedianBase: 210000, // Annual CLT base (~R$ 16,150/mo x 13)
    cityMultipliers: {
      'São Paulo': 1.0,
      'Rio de Janeiro': 0.94,
      'Brasília': 0.96,
      'Curitiba': 0.88,
      'Florianópolis': 0.86,
      'Belo Horizonte': 0.88
    },
    visaThresholdAnnual: 75000,
    visaName: 'VITEM V Work Visa / RN 02 Normative',
    regularVisaThreshold: 60000,
    taxEstimate: {
      singleTaxRate: 0.275, // Top IRPF rate minus allowances + INSS cap
      familyTaxRate: 0.23,
      notes: 'Brazilian CLT includes the 13th month salary (décimo terceiro), 1/3 vacation bonus, FGTS (8% employer deposit), and daily food vouchers (VR/VA ~R$ 1,000–1,500/mo tax-free).'
    },
    relocationPerks: [
      'Private health insurance (Bradesco Saúde / SulAmérica) covering family',
      'Vale Refeição / Vale Alimentação (VR/VA ~R$ 1,200/mo tax-free food allowance)',
      '13th salary + 1/3 vacation constitutional bonus',
      'Furnished flat in Jardins / Pinheiros / Itaim Bibi for first 30 days',
      'Bilingual CPF & Cartório documentation liaison'
    ]
  },
  uk: {
    currency: 'GBP',
    symbol: '£',
    seniorMedianBase: 90000,
    cityMultipliers: {
      'London': 1.0,
      'Manchester': 0.78,
      'Edinburgh': 0.80,
      'Birmingham': 0.76,
      'Bristol': 0.80,
      'Cambridge': 0.88
    },
    visaThresholdAnnual: 38700, // Modern UK Skilled Worker threshold
    visaName: 'UK Skilled Worker Visa Threshold',
    regularVisaThreshold: 38700,
    taxEstimate: {
      singleTaxRate: 0.36, // Income tax + National Insurance
      familyTaxRate: 0.32,
      notes: 'UK uses PAYE tax bands (20%, 40%, 45%) plus National Insurance. Employers must contribute at least 3% to your workplace pension.'
    },
    relocationPerks: [
      'Full UK Skilled Worker Visa & Immigration Health Surcharge (IHS) sponsorship',
      'Relocation allowance (£4,000 – £8,000)',
      '1 month temporary serviced flat in London Zone 1-2',
      'Private medical insurance (Bupa / AXA PPP) for family',
      'Cycle to Work tax-free scheme'
    ]
  },
  usa: {
    currency: 'USD',
    symbol: '$',
    seniorMedianBase: 185000,
    cityMultipliers: {
      'San Francisco': 1.0,
      'New York': 0.98,
      'Seattle': 0.94,
      'Austin': 0.82,
      'Boston': 0.90,
      'Chicago': 0.80,
      'Los Angeles': 0.90
    },
    visaThresholdAnnual: 85000,
    visaName: 'DOL H-1B Prevailing Wage Level II/III',
    regularVisaThreshold: 80000,
    taxEstimate: {
      singleTaxRate: 0.32, // Federal + State + FICA (varies by state, e.g. 0% in TX/WA, up to 9.3% in CA)
      familyTaxRate: 0.26,
      notes: 'US tech packages frequently include significant equity (RSUs) on top of base salary. 401(k) matching of 3–6% is standard.'
    },
    relocationPerks: [
      'Relocation cash allowance ($8,000 – $15,000)',
      'H-1B / O-1 / L-1 visa legal fees paid entirely by employer',
      '30–60 days corporate apartment and rental car',
      'High-tier PPO health/dental/vision insurance',
      'Sign-on bonus ($10,000 – $30,000)'
    ]
  },
  canada: {
    currency: 'CAD',
    symbol: '$',
    seniorMedianBase: 132000,
    cityMultipliers: {
      'Toronto': 1.0,
      'Vancouver': 0.98,
      'Montreal': 0.88,
      'Ottawa': 0.92,
      'Calgary': 0.90
    },
    visaThresholdAnnual: 60000,
    visaName: 'Global Talent Stream (GTS) LMIA-Exempt',
    regularVisaThreshold: 55000,
    taxEstimate: {
      singleTaxRate: 0.33,
      familyTaxRate: 0.28,
      notes: 'Federal + Provincial tax (Ontario/BC/Quebec) plus CPP & EI deductions. Provincial healthcare (OHIP / MSP) kicks in after arrival.'
    },
    relocationPerks: [
      'GTS 2-week fast-track work permit processing',
      'Relocation reimbursement (CAD $5,000 – $10,000)',
      'Group RRSP matching up to 4-5%',
      'Extended medical benefits covering prescription drugs & dental',
      '1 month temporary housing in downtown core'
    ]
  },
  netherlands: {
    currency: 'EUR',
    symbol: '€',
    seniorMedianBase: 88000,
    cityMultipliers: {
      'Amsterdam': 1.0,
      'Rotterdam': 0.92,
      'Utrecht': 0.94,
      'The Hague': 0.92,
      'Eindhoven': 0.90
    },
    visaThresholdAnnual: 65472, // Kennismigrant threshold > 30 yrs
    visaName: 'Highly Skilled Migrant (Kennismigrant)',
    regularVisaThreshold: 48000,
    taxEstimate: {
      singleTaxRate: 0.35, // Normal ~49.5% top bracket, but with 30% Ruling effective tax drops to ~26-30%!
      familyTaxRate: 0.29,
      notes: 'Crucial: Qualifies for the 30% Ruling tax exemption! Up to 30% of your gross salary is exempt from Dutch payroll tax for foreign specialists.'
    },
    relocationPerks: [
      '30% Ruling tax exemption filing support',
      'Relocation allowance (€4,000 – €7,500)',
      'NS Business Card for unlimited train travel',
      'Dutch driver license immediate direct conversion without road test',
      'Housing search agent (makelaar) paid by company'
    ]
  },
  australia: {
    currency: 'AUD',
    symbol: '$',
    seniorMedianBase: 155000,
    cityMultipliers: {
      'Sydney': 1.0,
      'Melbourne': 0.95,
      'Brisbane': 0.88,
      'Perth': 0.90,
      'Adelaide': 0.82
    },
    visaThresholdAnnual: 70000, // TSMIT threshold
    visaName: 'TSS 482 / SID Skills In Demand',
    regularVisaThreshold: 70000,
    taxEstimate: {
      singleTaxRate: 0.34,
      familyTaxRate: 0.29,
      notes: 'In Australia, employers MUST pay an additional 11.5% Superannuation (pension fund) ON TOP of your base salary by law!'
    },
    relocationPerks: [
      'Superannuation (11.5% paid on top of base)',
      'Subclass 482 visa nomination & PR pathway',
      'Flight tickets for family + container shipping',
      '4 weeks furnished stay in Sydney / Melbourne',
      'Settling-in allowance (AUD $5,000 – $10,000)'
    ]
  },
  uae: {
    currency: 'AED',
    symbol: 'AED ',
    seniorMedianBase: 360000, // AED 30,000 / month
    cityMultipliers: {
      'Dubai': 1.0,
      'Abu Dhabi': 0.98,
      'Sharjah': 0.82
    },
    visaThresholdAnnual: 180000,
    visaName: 'Green Visa / Skilled Employee Tier 1',
    regularVisaThreshold: 120000,
    taxEstimate: {
      singleTaxRate: 0.0, // 0% Income Tax!
      familyTaxRate: 0.0,
      notes: '100% Tax-Free Income! There is 0% personal income tax and 0% capital gains tax in the UAE. What you earn is what you take home.'
    },
    relocationPerks: [
      '100% Tax-Free salary (Zero income tax)',
      'Annual flight ticket home for employee & family',
      'Executive medical insurance (including direct hospital billing)',
      'Children schooling allowance (AED 20,000 – 40,000/child in top packages)',
      'UAE Golden Visa / Green Visa processing sponsorship'
    ]
  },
  singapore: {
    currency: 'SGD',
    symbol: '$',
    seniorMedianBase: 150000, // SGD 12,500 / month
    cityMultipliers: {
      'Singapore': 1.0
    },
    visaThresholdAnnual: 66000, // Employment Pass minimum (higher for Tech/Finance)
    visaName: 'Employment Pass (EP) / COMPASS Framework',
    regularVisaThreshold: 60000,
    taxEstimate: {
      singleTaxRate: 0.15, // Progressive tax maxes at 22-24%, effective tax is very low (~12-15%)
      familyTaxRate: 0.12,
      notes: 'Singapore has one of the lowest personal income tax rates in the world (top bracket 22%). No capital gains tax.'
    },
    relocationPerks: [
      'Low effective income tax (~12–15%)',
      'EP / Tech.Pass / ONE Pass sponsorship',
      'Relocation shipment + 1 month serviced apartment in Orchard / River Valley',
      'Comprehensive private hospital insurance',
      'AWS (Annual Wage Supplement / 13th month bonus)'
    ]
  },
  japan: {
    currency: 'JPY',
    symbol: '¥',
    seniorMedianBase: 10500000,
    cityMultipliers: {
      'Tokyo': 1.0,
      'Osaka': 0.88,
      'Kyoto': 0.85,
      'Fukuoka': 0.82
    },
    visaThresholdAnnual: 4000000,
    visaName: 'Highly Skilled Professional (HSP) Points Visa',
    regularVisaThreshold: 3500000,
    taxEstimate: {
      singleTaxRate: 0.30, // Income tax + Residence tax (10%) + Social insurance
      familyTaxRate: 0.25,
      notes: 'Japan deducts national income tax, local municipal residence tax (Juminzei, ~10%), and national health/pension insurance.'
    },
    relocationPerks: [
      'HSP Visa points acceleration (Fast-track to Permanent Residency in 1-2 years)',
      'Commuter train pass paid 100% by employer (standard in Japan)',
      'Bilingual relocation coordinator for ward office registration',
      'Flight tickets to Tokyo + shipping subsidy',
      'Housing allowance (Yachin hojo) or corporate leased housing'
    ]
  }
};

// Calculate exact salary benchmark for any role, seniority, and destination
export function calculateSalaryBenchmark(roleId, experienceLevelId, countryId, city) {
  const role = IT_ROLES.find(r => r.id === roleId) || IT_ROLES[0];
  const exp = EXPERIENCE_LEVELS.find(e => e.id === experienceLevelId) || EXPERIENCE_LEVELS[2]; // Default Senior
  const country = COUNTRY_SALARY_BENCHMARKS[countryId] || COUNTRY_SALARY_BENCHMARKS.germany;

  // City multiplier
  const cityMult = (city && country.cityMultipliers[city]) ? country.cityMultipliers[city] : 1.0;

  // Role specialization factor
  let roleFactor = 1.0;
  if (roleId === 'cloud_architect' || roleId === 'engineering_manager') roleFactor = 1.18;
  if (roleId === 'data_scientist_ml' || roleId === 'cybersecurity') roleFactor = 1.12;
  if (roleId === 'backend_engineer' || roleId === 'devops_sre') roleFactor = 1.06;
  if (roleId === 'qa_automation' || roleId === 'ui_ux_designer') roleFactor = 0.90;

  // Base median for this role, experience, and city
  const adjustedMedian = Math.round(country.seniorMedianBase * exp.factor * roleFactor * cityMult);

  // Derive percentiles
  const p25 = Math.round(adjustedMedian * 0.85); // 25th percentile (below median)
  const p50 = adjustedMedian;                    // 50th percentile (market standard)
  const p75 = Math.round(adjustedMedian * 1.16); // 75th percentile (top tier tech)
  const p90 = Math.round(adjustedMedian * 1.35); // 90th percentile (elite multinationals)

  return {
    role,
    exp,
    country,
    cityMult,
    currency: country.currency,
    symbol: country.symbol,
    p25,
    p50,
    p75,
    p90,
    visaThreshold: country.visaThresholdAnnual,
    visaName: country.visaName
  };
}

// Evaluate user's offered salary against the benchmark
export function evaluateExpatOffer(offeredAmount, benchmark, persona = 'bachelor') {
  const { p25, p50, p75, p90, visaThreshold, symbol, country } = benchmark;

  const diffFromMedian = Math.round(((offeredAmount - p50) / p50) * 100);
  const isFamily = persona.toLowerCase().includes('family');

  let rating = 'fair';
  let badgeLabel = 'Fair Market Range';
  let badgeColor = 'stone';
  let narrative = '';

  if (offeredAmount >= p90) {
    rating = 'exceptional';
    badgeLabel = 'Top 10% Elite Offer';
    badgeColor = 'emerald';
    narrative = `This offer sits in the top decile of compensation for this specialization in ${country.name}. You have an exceptional package with substantial bargaining power.`;
  } else if (offeredAmount >= p75) {
    rating = 'strong';
    badgeLabel = 'Above Market Standard';
    badgeColor = 'emerald';
    narrative = `Your package is ${Math.abs(diffFromMedian)}% above the regional median. This matches high-tier tech companies and well-funded scale-ups.`;
  } else if (offeredAmount >= p25) {
    rating = 'fair';
    badgeLabel = 'Within Market Median';
    badgeColor = 'stone';
    narrative = `Your offer is in line with the standard market median for this seniority level. A solid, realistic base for living comfortably.`;
  } else if (offeredAmount >= visaThreshold) {
    rating = 'below_average';
    badgeLabel = 'Below Market Average';
    badgeColor = 'amber';
    narrative = `This offer is ${Math.abs(diffFromMedian)}% below regional tech averages. While it legally meets work visa criteria, you should negotiate for a relocation allowance or performance review in 6 months.`;
  } else {
    rating = 'critical';
    badgeLabel = 'Visa Non-Compliance Risk';
    badgeColor = 'rose';
    narrative = `Warning: This offer is below the official immigration threshold (${symbol}${visaThreshold.toLocaleString()}) for ${benchmark.visaName}. Immigration authorities may reject the work visa on wage dumping grounds!`;
  }

  // Legal visa check
  const meetsVisa = offeredAmount >= visaThreshold;

  // Estimated take-home
  const taxRate = isFamily ? country.taxEstimate.familyTaxRate : country.taxEstimate.singleTaxRate;
  const annualTax = Math.round(offeredAmount * taxRate);
  const annualNet = offeredAmount - annualTax;
  const monthlyGross = Math.round(offeredAmount / 12);
  const monthlyNet = Math.round(annualNet / 12);

  return {
    offeredAmount,
    diffFromMedian,
    rating,
    badgeLabel,
    badgeColor,
    narrative,
    meetsVisa,
    visaThreshold,
    monthlyGross,
    monthlyNet,
    annualNet,
    annualTax,
    taxRatePercentage: Math.round(taxRate * 100)
  };
}
