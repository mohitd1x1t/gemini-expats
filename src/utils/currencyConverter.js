// Multi-Currency Exchange Engine for Expat Visa & Settlement Budgeting

export const SUPPORTED_ORIGIN_CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar (USD)', countryHint: 'United States' },
  { code: 'EUR', symbol: '€', name: 'Euro (EUR)', countryHint: 'Germany / Europe' },
  { code: 'GBP', symbol: '£', name: 'British Pound (GBP)', countryHint: 'United Kingdom' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar (CAD)', countryHint: 'Canada' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar (AUD)', countryHint: 'Australia' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee (INR)', countryHint: 'India' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real (BRL)', countryHint: 'Brazil' },
  { code: 'AED', symbol: 'AED ', name: 'UAE Dirham (AED)', countryHint: 'United Arab Emirates' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar (SGD)', countryHint: 'Singapore' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen (JPY)', countryHint: 'Japan' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht (THB)', countryHint: 'Thailand' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong (VND)', countryHint: 'Vietnam' },
  { code: 'IDR', symbol: 'Rp ', name: 'Indonesian Rupiah (IDR)', countryHint: 'Indonesia' },
  { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso (MXN)', countryHint: 'Mexico' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso (PHP)', countryHint: 'Philippines' },
  { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee (PKR)', countryHint: 'Pakistan' }
];

// Global Base Display Currency Choices requested by Reddit users
export const GLOBAL_DISPLAY_CURRENCIES = [
  { code: 'LOCAL', symbol: '', label: 'Local Currency (Destination)' },
  { code: 'USD', symbol: '$', label: 'USD ($) — US Dollar' },
  { code: 'CAD', symbol: 'C$', label: 'CAD (C$) — Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', label: 'AUD (A$) — Australian Dollar' },
  { code: 'EUR', symbol: '€', label: 'EUR (€) — Euro' },
  { code: 'GBP', symbol: '£', label: 'GBP (£) — British Pound' },
  { code: 'INR', symbol: '₹', label: 'INR (₹) — Indian Rupee' },
  { code: 'BRL', symbol: 'R$', label: 'BRL (R$) — Brazilian Real' }
];

// Pegged base rates against 1 USD (calibrated current/annual average exchange rates)
export const EXCHANGE_RATES_TO_USD = {
  USD: 1.0,
  EUR: 1.085,
  GBP: 1.285,
  AED: 0.2723,
  SGD: 0.752,
  CAD: 0.732,
  AUD: 0.655,
  BRL: 0.176,
  JPY: 0.00654, // 1 USD ≈ 152.9 JPY
  INR: 0.0119,  // 1 USD ≈ 84.1 INR
  THB: 0.0298,  // 1 USD ≈ 33.6 THB
  VND: 0.0000394, // 1 USD ≈ 25,380 VND
  IDR: 0.0000637, // 1 USD ≈ 15,700 IDR
  MXN: 0.0505,  // 1 USD ≈ 19.8 MXN
  PHP: 0.0173,
  PKR: 0.0036
};

// Automatic detector based on user's origin string
export function detectOriginCurrency(originString = '') {
  if (!originString || typeof originString !== 'string') return 'INR';
  const query = originString.toLowerCase().trim();

  if (query.includes('ind') || query.includes('delhi') || query.includes('mumbai') || query.includes('bengaluru') || query.includes('bangalore') || query.includes('hyderabad')) {
    return 'INR';
  }
  if (query.includes('brazil') || query.includes('brasil') || query.includes('são paulo') || query.includes('sao paulo') || query.includes('rio')) {
    return 'BRL';
  }
  if (query.includes('united states') || query.includes('usa') || query.includes('america') || query.includes('california') || query.includes('york')) {
    return 'USD';
  }
  if (query.includes('united kingdom') || query.includes('uk') || query.includes('london') || query.includes('britain') || query.includes('england') || query.includes('scotland')) {
    return 'GBP';
  }
  if (query.includes('germany') || query.includes('deutschland') || query.includes('berlin') || query.includes('munich') || query.includes('frankfurt') || query.includes('france') || query.includes('spain') || query.includes('italy') || query.includes('netherlands') || query.includes('amsterdam') || query.includes('europe')) {
    return 'EUR';
  }
  if (query.includes('canada') || query.includes('toronto') || query.includes('vancouver') || query.includes('montreal')) {
    return 'CAD';
  }
  if (query.includes('australia') || query.includes('sydney') || query.includes('melbourne') || query.includes('brisbane')) {
    return 'AUD';
  }
  if (query.includes('singapore')) {
    return 'SGD';
  }
  if (query.includes('japan') || query.includes('tokyo') || query.includes('osaka')) {
    return 'JPY';
  }
  if (query.includes('thailand') || query.includes('bangkok') || query.includes('chiang mai') || query.includes('phuket')) {
    return 'THB';
  }
  if (query.includes('vietnam') || query.includes('saigon') || query.includes('hanoi') || query.includes('da nang')) {
    return 'VND';
  }
  if (query.includes('indonesia') || query.includes('bali') || query.includes('jakarta')) {
    return 'IDR';
  }
  if (query.includes('mexico') || query.includes('cdmx')) {
    return 'MXN';
  }
  if (query.includes('uae') || query.includes('dubai') || query.includes('abu dhabi') || query.includes('emirates')) {
    return 'AED';
  }
  if (query.includes('philippines') || query.includes('manila')) {
    return 'PHP';
  }
  if (query.includes('pakistan') || query.includes('karachi') || query.includes('lahore')) {
    return 'PKR';
  }

  return 'USD';
}

// Convert from one currency to another
export function convertCurrency(amount, fromCode = 'EUR', toCode = 'INR') {
  if (isNaN(amount) || amount === 0) return 0;
  if (fromCode === toCode) return amount;

  const fromRate = EXCHANGE_RATES_TO_USD[fromCode] || 1.0;
  const toRate = EXCHANGE_RATES_TO_USD[toCode] || 1.0;

  // Amount in USD = amount * fromRate
  const usdAmount = amount * fromRate;
  // Amount in Target = usdAmount / toRate
  const converted = usdAmount / toRate;

  return Math.round(converted);
}

// Currency symbol helper
export function getCurrencySymbol(code = 'INR') {
  const match = SUPPORTED_ORIGIN_CURRENCIES.find(c => c.code === code);
  return match ? match.symbol : code + ' ';
}

// Full formatting helper
export function formatCurrencyAmount(amount, code = 'INR') {
  const symbol = getCurrencySymbol(code);
  const rounded = Math.round(amount);
  return `${symbol}${rounded.toLocaleString()}`;
}

// Dual display helper: formats amount according to user's display preference
export function formatDualCurrency(amount, destCurrencyCode = 'EUR', userDisplayCurrencyCode = 'LOCAL') {
  if (isNaN(amount) || amount === 0) {
    return {
      primary: `${getCurrencySymbol(destCurrencyCode)}0`,
      secondary: null,
      isConverted: false
    };
  }

  const isLocal = !userDisplayCurrencyCode || userDisplayCurrencyCode === 'LOCAL' || userDisplayCurrencyCode === destCurrencyCode;

  if (isLocal) {
    return {
      primary: formatCurrencyAmount(amount, destCurrencyCode),
      secondary: null,
      isConverted: false,
      code: destCurrencyCode
    };
  }

  // Converted to target currency (e.g. USD, CAD, AUD)
  const convertedAmount = convertCurrency(amount, destCurrencyCode, userDisplayCurrencyCode);
  const primary = formatCurrencyAmount(convertedAmount, userDisplayCurrencyCode);
  const localOriginal = formatCurrencyAmount(amount, destCurrencyCode);

  return {
    primary,
    secondary: `≈ ${localOriginal}`,
    isConverted: true,
    code: userDisplayCurrencyCode,
    destCode: destCurrencyCode
  };
}
