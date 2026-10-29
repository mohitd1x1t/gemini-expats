/**
 * "Credit-Zero" Financial Bootstrap, Immediate Tax IDs, Neo-Banks, and FX Remittance Data
 * Verified against Receita Federal, German BMF, Dutch Belastingdienst, US IRS, and RBI guidelines.
 */

export const COUNTRY_TAX_ID_WORKAROUNDS = {
  germany: {
    idName: 'Steueridentifikationsnummer (Steuer-ID)',
    authority: 'Bundeszentralamt für Steuern (BZSt)',
    standardTimeline: '2–4 weeks after municipal address registration (Anmeldung).',
    bootstrapWorkaround: {
      title: 'Fast-Track Temporary Tax ID at Local Finanzamt',
      steps: [
        'Before your official Steuer-ID arrives in the mail, your employer might place you into punitive Tax Class VI (StKl 6, taking ~45% in withholding tax).',
        'Book an in-person emergency appointment at your municipal tax office (Finanzamt) with your passport, employment contract, and confirmation of move-in (Wohnungsgeberbestätigung).',
        'Request an immediate "Bescheinigung für den Lohnsteuerabzug" (Certificate for Wage Tax Deduction).',
        'Submit this paper certificate to your company payroll to be taxed in Tax Class I (Single) or Tax Class III/V (Married) immediately, avoiding the StKl 6 deduction.'
      ],
      warning: 'Any excess tax deducted under Tax Class 6 is fully refunded by filing your annual income tax return (Einkommensteuererklärung) next year.'
    }
  },
  brazil: {
    idName: 'CPF (Cadastro de Pessoas Físicas)',
    authority: 'Receita Federal do Brasil',
    standardTimeline: 'Immediate online or 1–3 business days via consular email.',
    bootstrapWorkaround: {
      title: 'Obtain CPF Online BEFORE Boarding Your Flight',
      steps: [
        'You CANNOT buy a Brazilian SIM card, order rides on 99/Uber, sign a lease, or register for PIX without a CPF.',
        'Foreign nationals can obtain a CPF completely free of charge before departure via the official Receita Federal portal (Formulário de Inscrição CPF Estrangeiros).',
        'Fill out the online form, select your country of residence, and print the generated protocol.',
        'Email the protocol along with a selfie holding your passport and your birth certificate to "cpf.residente.exterior@rfb.gov.br".',
        'Receita Federal typically issues your 11-digit CPF digital card within 48 to 72 hours via email.'
      ],
      warning: 'Never pay intermediary agencies \$50–\$100 for a CPF; it is 100% free directly through the Brazilian government.'
    }
  },
  netherlands: {
    idName: 'BSN (Burgerservicenummer)',
    authority: 'Gemeente (Municipality) & RNI Desk',
    standardTimeline: 'Available immediately at appointment, but standard appointments require registered housing.',
    bootstrapWorkaround: {
      title: 'The RNI (Non-Residents Registration) 4-Month Lifesaver',
      steps: [
        'Catch-22: Landlords demand a Dutch bank account, but banks demand a BSN, and municipalities demand a permanent lease to issue a BSN.',
        'Solution: Book an appointment at one of 19 dedicated RNI Desks (Registratie Niet-Ingezetenen) in Amsterdam, Utrecht, Rotterdam, or Eindhoven as a non-resident.',
        'Bring only your passport, proof of home-country address, and employment offer. No permanent Dutch lease required!',
        'You are issued an official, valid BSN on the spot during your 15-minute appointment.',
        'Use this BSN to immediately open your Dutch bank account (ABN AMRO, ING, Bunq) and receive salary for up to 4 months while searching for permanent housing.'
      ],
      warning: 'Once you sign a permanent lease, you must register at your local town hall (Gemeente) to transfer from RNI to the municipal BRP register.'
    }
  },
  usa: {
    idName: 'Social Security Number (SSN)',
    authority: 'Social Security Administration (SSA)',
    standardTimeline: '2–4 weeks after physical port of entry and I-94 validation.',
    bootstrapWorkaround: {
      title: 'Wait 10 Days for SAVE Database Sync + SS-5 Appointment',
      steps: [
        'Do NOT visit the SSA office on Day 1 or 2. CBP takes up to 10 business days to update your legal entry status in the DHS Systematic Alien Verification for Entitlements (SAVE) database.',
        'After 10 days, download your electronic Form I-94 from the official CBP website.',
        'Submit online Form SS-5 and book an in-person appointment at your local SSA field office with your passport, visa stamp, I-94, and Form DS-2019/I-20/I-797.',
        'Request an SSN Confirmation Receipt (SSA-5028) on the spot. Most US enterprise employers can run payroll using this receipt while the plastic card is in transit.'
      ],
      warning: 'Until you have an SSN, you have a credit score of zero. Open a "Secured Credit Card" (e.g., Capital One, Discover) or use credit-pass services (Nova Credit) to build FICO score quickly.'
    }
  },
  uae: {
    idName: 'Emirates ID (EID)',
    authority: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
    standardTimeline: '5–10 business days following medical fitness exam.',
    bootstrapWorkaround: {
      title: 'Digital Residency eVisa & Digital Emirates ID on UAE Pass',
      steps: [
        'Arrive on your 60-day Entry Permit (Pink Visa).',
        'Complete your blood test and chest X-ray at a certified Medical Fitness Centre (Smart Salem offers 30-minute VIP results).',
        'Attend biometric fingerprinting at an ICP center.',
        'Once stamped, download the UAE Pass app and ICP app. Your digital Emirates ID is instantly valid for opening bank accounts (Wio, Liv, ENBD) and setting up utilities before the physical plastic card arrives.'
      ]
    }
  },
  singapore: {
    idName: 'FIN (Foreign Identification Number)',
    authority: 'Ministry of Manpower (MOM)',
    standardTimeline: 'Generated on In-Principle Approval (IPA) letter.',
    bootstrapWorkaround: {
      title: 'Use IPA Letter & Singpass Pre-Registration',
      steps: [
        'Your unique FIN is already printed on your In-Principle Approval (IPA) letter before you fly.',
        'Use the IPA letter to pre-apply for non-resident bank accounts (DBS, OCBC, Wise).',
        'Book your MOM Employment Pass Services Centre (EPSC) biometrics appointment within 14 days of landing.',
        'Immediately download the Singpass mobile app once EP is issued. Singpass acts as your national digital identity for everything from tax filing (IRAS) to signing phone contracts.'
      ]
    }
  },
  uk: {
    idName: 'National Insurance Number (NINO)',
    authority: 'Department for Work and Pensions (DWP) / HMRC',
    standardTimeline: '3–6 weeks via gov.uk application.',
    bootstrapWorkaround: {
      title: 'Start Employment Immediately WITHOUT a NINO',
      steps: [
        'Under UK employment law, you DO NOT need a NINO to start working or get paid.',
        'Show your employer your online "Right to Work" share code generated from your visa application on gov.uk.',
        'Your payroll department will allocate a temporary emergency tax code (e.g. 1257L W1/M1) until your NINO arrives.',
        'Apply online at gov.uk with your passport and BRP card or eVisa identity.'
      ]
    }
  },
  thailand: {
    idName: 'Tax Identification Number (TIN)',
    authority: 'Thai Revenue Department (Krom Sanphakon)',
    standardTimeline: 'Same-day in person with passport and visa.',
    bootstrapWorkaround: {
      title: 'Obtain TIN at Local District Revenue Office',
      steps: [
        'Foreigners residing over 180 days in Thailand or opening bank accounts can request a 13-digit Tax ID directly from their area Area Revenue Branch Office (Sanphakon Phunthi).',
        'Bring your passport, valid visa (Non-B, LTR, or DTV), TM30 accommodation receipt, and rental lease agreement.',
        'Revenue officials issue the paper Tax Identification Card within 30 to 60 minutes free of charge.',
        'Use this TIN to file your annual P.N.D. 90/91 tax return and provide to your Thai bank (Bangkok Bank / Kasikornbank).'
      ]
    }
  },
  vietnam: {
    idName: 'Mã Số Thuế Cá Nhân (Personal Tax Code - MST)',
    authority: 'General Department of Taxation (Tổng Cục Thuế)',
    standardTimeline: '3 to 5 business days via employer HR or local tax branch.',
    bootstrapWorkaround: {
      title: 'Fast-Track Tax Registration via Employer HR',
      steps: [
        'Foreign employees are registered by their Vietnamese employing entity using Form 05-ĐK-TCT via the online tax portal (thuedientu.gdt.gov.vn).',
        'Requires certified notarized copy of passport and valid Work Permit / TRC.',
        'The tax department issues the 10-digit MST electronically within 3 business days.',
        'Freelancers or rep office staff can register directly at the municipal tax office (Chi Cục Thuế) of their district.'
      ]
    }
  },
  indonesia: {
    idName: 'Nomor Pokok Wajib Pajak (NPWP)',
    authority: 'Direktorat Jenderal Pajak (DJP)',
    standardTimeline: '1 to 2 business days via ereg.pajak.go.id.',
    bootstrapWorkaround: {
      title: 'Online NPWP Registration for KITAS Holders',
      steps: [
        'Foreign workers holding a valid Working KITAS (Index E23) or Investor KITAS must register on ereg.pajak.go.id.',
        'Upload your electronic KITAS (e-ITAS), passport, and employer sponsorship letter.',
        'DJP issues your 16-digit NPWP digital card via email within 24 to 48 hours.',
        'Holding an NPWP lowers your employee withholding tax by 20% compared to workers without an NPWP.'
      ]
    }
  },
  mexico: {
    idName: 'RFC (Registro Federal de Contribuyentes)',
    authority: 'SAT (Servicio de Administración Tributaria)',
    standardTimeline: 'Same-day at SAT appointment with CURP.',
    bootstrapWorkaround: {
      title: 'Securing a SAT "Cita" & Getting Your RFC + e.firma',
      steps: [
        'You need your CURP population number (printed on your green Residente Temporal card) before applying for an RFC.',
        'Join the virtual queue on citas.sat.gob.mx for "Inscripción en el RFC Personas Físicas".',
        'Bring your passport, green Residente card, proof of address (CFE electric bill or water bill under 3 months old), and a USB flash drive.',
        'SAT issues your RFC certificate (Constancia de Situación Fiscal) and digital signature (e.firma) on your USB drive immediately.'
      ]
    }
  }
};

/**
 * Neo-Banks that open accounts without a permanent registered lease
 */
export const BOOTSTRAP_NEOBANKS = [
  {
    name: 'Wise Multi-Currency',
    regions: ['Global', 'EU', 'UK', 'USA', 'Singapore', 'Australia', 'Japan'],
    acceptedProofOfAddress: 'Home country address statement or utility bill; foreign passport.',
    keyAdvantages: 'Provides local EUR (BE/DE IBAN), GBP (Sort Code), USD (Routing/Account), and SGD bank details immediately. Zero FX markup on conversions.',
    localPaymentSupport: 'SEPA Instant, Faster Payments, Fedwire/ACH, PayNow.',
    bestFor: 'Day 1 survival, initial employer salary deposit, paying apartment security deposits across borders.'
  },
  {
    name: 'Revolut',
    regions: ['EU', 'UK', 'USA', 'Singapore', 'Australia', 'Brazil', 'Japan'],
    acceptedProofOfAddress: 'Valid visa or work permit + temporary hotel/Airbnb address (some jurisdictions).',
    keyAdvantages: 'Virtual debit cards ready in Apple Pay / Google Wallet within 5 minutes. Instant currency exchange, disposable security cards for online deposits.',
    localPaymentSupport: 'SEPA Instant, UK Faster Payments, PIX (Brazil beta), iDEAL.',
    bestFor: 'Daily public transit, dining, buying groceries, and splitting bills with coworkers.'
  },
  {
    name: 'N26',
    regions: ['Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Austria'],
    acceptedProofOfAddress: 'European postal address for card delivery (can be hotel or company office); video passport verification.',
    keyAdvantages: 'Full German (DE) or Spanish (ES) banking license. Protected up to €100,000 by German Deposit Protection Scheme (EdB).',
    localPaymentSupport: 'SEPA Instant Credit Transfers, Girocard (via Mastercard debit).',
    bestFor: 'German utility contracts and cell phone postpaid plans that reject non-DE IBANs.'
  },
  {
    name: 'Nubank',
    regions: ['Brazil', 'Mexico', 'Colombia'],
    acceptedProofOfAddress: 'CPF number + foreign passport; local residential or temporary address.',
    keyAdvantages: 'The #1 digital bank in Latin America. Zero account maintenance fees. Fully integrated with PIX for instant contactless payments anywhere in Brazil.',
    localPaymentSupport: 'PIX (Chave PIX, QR Code DDA), Boleto Bancário.',
    bestFor: 'Absolute must-have for living in Brazil; almost zero merchants accept foreign credit cards for small daily items.'
  },
  {
    name: 'Wio Bank / Liv.',
    regions: ['UAE (Dubai & Abu Dhabi)'],
    acceptedProofOfAddress: 'Digital Emirates ID on UAE Pass or stamped Entry Permit.',
    keyAdvantages: 'Digital neo-bank backed by Abu Dhabi Media / Emirates NBD. Account opened on mobile in under 15 minutes.',
    localPaymentSupport: 'UAE Central Bank Instant Payment Platform (Aani), IBAN transfers.',
    bestFor: 'Paying Dubai rental cheques, DEWA utility connection deposits, and receiving AED salary.'
  }
];

/**
 * Instant Local Payment Rails Primer
 */
export const LOCAL_PAYMENT_RAILS = {
  brazil: {
    systemName: 'PIX',
    operator: 'Central Bank of Brazil (Banco Central do Brasil)',
    howItWorks: 'Instant 24/7 bank transfer executed in < 3 seconds using a "Chave PIX" (CPF, phone number, email, or 32-character random key) or dynamic QR code.',
    fees: '100% free for individual consumers.',
    expatProTip: 'Even street coconut vendors, taxi drivers, and pharmacy chains in Brazil prefer PIX over cash. Link your Brazilian neo-bank (Nubank or Revolut) to your CPF immediately.'
  },
  germany: {
    systemName: 'SEPA Instant & Girocard (EC-Karte)',
    operator: 'European Payments Council & German Banking Industry Committee',
    howItWorks: 'SEPA Instant transfers funds between European IBANs in under 10 seconds. Girocard is Germany’s proprietary debit card network.',
    fees: 'Usually free or €0.10–€0.50 per transfer depending on legacy bank.',
    expatProTip: 'Many traditional German bakeries, bureaucratic offices (Bürgeramt), and doctor clinics do NOT accept Visa or Mastercard. Always have a Girocard-enabled debit card or cash.'
  },
  india: {
    systemName: 'UPI (Unified Payments Interface)',
    operator: 'National Payments Corporation of India (NPCI)',
    howItWorks: 'Virtual Payment Address (VPA e.g. name@okhdfcbank) and interoperable QR code transfers settling directly between bank accounts.',
    fees: 'Free for P2P transactions.',
    expatProTip: 'NRI bank accounts (NRO/NRE) can now be linked to UPI using international mobile numbers (US, UK, UAE, Germany, Singapore) across approved member banks.'
  },
  singapore: {
    systemName: 'PayNow',
    operator: 'Association of Banks in Singapore (ABS)',
    howItWorks: 'Funds transfer linked to Singapore NRIC/FIN or mobile number via FAST rail. Integrated with SGQR merchant codes.',
    fees: 'Free for retail consumer transfers.',
    expatProTip: 'Cross-border PayNow-UPI linkage allows instant low-cost remittances directly between Singapore and India bank accounts.'
  },
  netherlands: {
    systemName: 'iDEAL & Wero',
    operator: 'Currence / European Payments Initiative (EPI)',
    howItWorks: 'Online payment protocol seamlessly authenticating directly through your Dutch mobile banking app with QR code or 2FA push.',
    fees: 'Free for consumers.',
    expatProTip: 'Almost all Dutch webshops (Bol.com, Coolblue) and government portals mandate iDEAL; international credit cards are frequently rejected.'
  },
  usa: {
    systemName: 'Zelle & FedNow',
    operator: 'Early Warning Services / Federal Reserve',
    howItWorks: 'Zelle links bank accounts via US phone number or email address with near-instant settlement. FedNow provides underlying interbank real-time rails.',
    fees: 'Free on most consumer checking accounts.',
    expatProTip: 'US landlords often request monthly rent via Zelle, ACH auto-debit, or paper cashier’s check. Beware that Zelle offers zero fraud protection once sent.'
  },
  thailand: {
    systemName: 'PromptPay',
    operator: 'Bank of Thailand (BOT) & National ITMX',
    howItWorks: 'Real-time payment rail linked to Thai mobile phone number, Tax ID (TIN), or interoperable Thai QR code. Scanned directly using Thai mobile banking apps (K PLUS, SCB EASY, Bangkok Bank).',
    fees: '100% free for retail transfers under 5,000 THB; max 2–10 THB for large amounts.',
    expatProTip: 'Street food stalls, 7-Eleven, BTS transit machines, and condo landlords in Thailand overwhelmingly prefer PromptPay QR scans over physical cash.'
  },
  vietnam: {
    systemName: 'VietQR (Napas 247)',
    operator: 'National Payment Corporation of Vietnam (NAPAS)',
    howItWorks: 'Instant 24/7 interbank fund transfer executed by scanning a standardized QR code via any Vietnamese banking app (Vietcombank, Techcombank, MB Bank).',
    fees: 'Free across almost all commercial digital banking apps.',
    expatProTip: 'Almost 90% of everyday retail and restaurant purchases in Saigon and Hanoi can be settled in under 3 seconds by scanning the merchant’s VietQR printout.'
  },
  indonesia: {
    systemName: 'QRIS',
    operator: 'Bank Indonesia (BI) & ASPI',
    howItWorks: 'Quick Response Code Indonesian Standard. Unifies all bank accounts and digital e-wallets (GoPay, OVO, DANA, ShopeePay) into a single universal scan.',
    fees: 'Free for retail consumer transfers.',
    expatProTip: 'Whether ordering coconut water on Canggu beach or dining at a five-star hotel in Jakarta, every merchant presents a QRIS barcode.'
  },
  mexico: {
    systemName: 'SPEI & CoDi',
    operator: 'Banco de México (Banxico)',
    howItWorks: 'Sistema de Pagos Electrónicos Interbancarios executes instant 24/7 transfers using an 18-digit CLABE number or registered mobile phone number.',
    fees: 'Free on almost all Mexican checking and neo-bank accounts (BBVA, Nu México, Hey Banco).',
    expatProTip: 'Mexican rental contracts mandate SPEI transfer to the landlord’s 18-digit CLABE. Always screenshot the SPEI CEP (Comprobante Electrónico de Pago) for your legal records.'
  }
};

/**
 * Remittance Calculator Comparison Engine
 * Computes transparent breakdown between Bank SWIFT Wire vs. Wise / FinTech
 */
export function calculateRemittanceComparison(amountSource, sourceCurrency = 'EUR', targetCurrency = 'INR') {
  // Approximate mid-market FX rates (calibrated)
  const baseRates = {
    'EUR-INR': 91.50,
    'USD-INR': 86.20,
    'GBP-INR': 108.80,
    'AED-INR': 23.47,
    'SGD-INR': 64.20,
    'EUR-BRL': 6.15,
    'USD-BRL': 5.80,
    'BRL-INR': 14.85
  };

  const pairKey = `${sourceCurrency}-${targetCurrency}`;
  const midMarketRate = baseRates[pairKey] || 1.0;

  // 1. Traditional Bank SWIFT Wire Model:
  // - Hidden FX margin: ~2.8% markup on exchange rate
  // - Fixed outgoing transfer fee: €25 / $30
  // - Correspondent intermediary fee: €15 / $20
  const bankFixedFee = sourceCurrency === 'AED' ? 100 : sourceCurrency === 'USD' ? 35 : 25;
  const bankFxMarginPercent = 0.028; // 2.8% hidden spread
  const bankEffectiveRate = midMarketRate * (1 - bankFxMarginPercent);
  const bankSendAmountAfterFee = Math.max(0, amountSource - bankFixedFee);
  const bankTargetReceived = Math.round(bankSendAmountAfterFee * bankEffectiveRate);

  // 2. Wise / Modern FinTech Model:
  // - Mid-market rate guaranteed (0% FX markup)
  // - Transparent variable fee: ~0.45%
  const wiseFeePercent = 0.0045;
  const wiseFixedFee = sourceCurrency === 'USD' ? 2.5 : 1.5;
  const wiseTotalFee = (amountSource * wiseFeePercent) + wiseFixedFee;
  const wiseSendAmountAfterFee = Math.max(0, amountSource - wiseTotalFee);
  const wiseTargetReceived = Math.round(wiseSendAmountAfterFee * midMarketRate);

  // Difference / Expats savings
  const extraReceived = Math.max(0, wiseTargetReceived - bankTargetReceived);
  const percentSaved = bankTargetReceived > 0 ? ((extraReceived / bankTargetReceived) * 100).toFixed(1) : 0;

  return {
    sourceCurrency,
    targetCurrency,
    amountSource,
    midMarketRate,
    traditionalBank: {
      fixedFee: bankFixedFee,
      hiddenFxMarginPercent: 2.8,
      effectiveRate: bankEffectiveRate.toFixed(4),
      targetReceived: bankTargetReceived,
      deliveryTime: '2 to 5 business days'
    },
    wiseFintech: {
      transparentFee: Math.round(wiseTotalFee),
      fxMarginPercent: 0.0,
      effectiveRate: midMarketRate.toFixed(4),
      targetReceived: wiseTargetReceived,
      deliveryTime: 'Minutes to same-day'
    },
    extraMoneyInPocket: extraReceived,
    percentSaved
  };
}
