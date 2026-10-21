// Benchmark cost of living & relocation estimates

export const CITY_BUDGET_BENCHMARKS = {
  // Germany
  'Berlin': {
    country: 'germany',
    currency: 'EUR',
    symbol: '€',
    bachelor: {
      rent: 1100, // 1-bedroom / WG studio
      groceries: 350,
      transport: 49, // Deutschlandticket
      healthInsurance: 180, // employee public portion approx
      utilities: 150, // internet, electricity, GEZ
      leisure: 300,
      contingency: 200
    },
    family: {
      rent: 2200, // 2-3 bedroom flat
      groceries: 850,
      transport: 120, // 2-3 tickets
      healthInsurance: 350, // family covered under 1 parent public usually free!
      utilities: 300,
      childcare: 150, // Berlin Kita is subsidized! Minimal food cost
      leisure: 600,
      contingency: 450
    },
    upfrontRelocation: {
      flights: 700,
      visaAndApostilles: 350,
      temporaryStay1Month: 1600,
      depositRentMultiplier: 3, // 3 months cold rent
      starterFurniture: 1200,
      miscellaneousSetup: 500
    }
  },
  'Munich': {
    country: 'germany',
    currency: 'EUR',
    symbol: '€',
    bachelor: {
      rent: 1500,
      groceries: 400,
      transport: 49,
      healthInsurance: 190,
      utilities: 170,
      leisure: 350,
      contingency: 250
    },
    family: {
      rent: 2800,
      groceries: 950,
      transport: 130,
      healthInsurance: 380,
      utilities: 350,
      childcare: 500,
      leisure: 750,
      contingency: 550
    },
    upfrontRelocation: {
      flights: 700,
      visaAndApostilles: 350,
      temporaryStay1Month: 2100,
      depositRentMultiplier: 3,
      starterFurniture: 1400,
      miscellaneousSetup: 600
    }
  },

  // UK
  'London': {
    country: 'uk',
    currency: 'GBP',
    symbol: '£',
    bachelor: {
      rent: 1650, // Zone 2-3 1-bed flat / ensuite
      groceries: 350,
      transport: 180, // Zone 1-3 travelcard / contactless
      healthInsurance: 0, // covered via IHS surcharge paid upfront
      utilities: 220, // council tax + energy + broadband + TV license
      leisure: 450,
      contingency: 250
    },
    family: {
      rent: 2900,
      groceries: 900,
      transport: 380,
      healthInsurance: 0,
      utilities: 400, // higher council tax band
      childcare: 1400, // UK nursery costs are steep
      leisure: 750,
      contingency: 500
    },
    upfrontRelocation: {
      flights: 650,
      visaAndApostilles: 1800, // includes IHS fee (£1,035/yr)
      temporaryStay1Month: 2400,
      depositRentMultiplier: 1.25, // 5 weeks rent cap
      starterFurniture: 1000,
      miscellaneousSetup: 600
    }
  },

  // Netherlands
  'Amsterdam': {
    country: 'netherlands',
    currency: 'EUR',
    symbol: '€',
    bachelor: {
      rent: 1750,
      groceries: 380,
      transport: 110,
      healthInsurance: 150, // Dutch basic health
      utilities: 200,
      leisure: 400,
      contingency: 250
    },
    family: {
      rent: 2900,
      groceries: 950,
      transport: 240,
      healthInsurance: 300,
      utilities: 350,
      childcare: 700, // partially offset by kinderopvangtoeslag
      leisure: 700,
      contingency: 500
    },
    upfrontRelocation: {
      flights: 650,
      visaAndApostilles: 400,
      temporaryStay1Month: 2500,
      depositRentMultiplier: 2,
      starterFurniture: 1300,
      miscellaneousSetup: 600
    }
  },

  // USA
  'New York': {
    country: 'usa',
    currency: 'USD',
    symbol: '$',
    bachelor: {
      rent: 3100, // Studio / 1BR Manhattan / Queens / Brooklyn
      groceries: 550,
      transport: 132, // 30-day unlimited MetroCard
      healthInsurance: 250, // employer payroll deduction
      utilities: 240, // ConEd + Wi-Fi
      leisure: 700,
      contingency: 400
    },
    family: {
      rent: 4800,
      groceries: 1300,
      transport: 300,
      healthInsurance: 650,
      utilities: 400,
      childcare: 2200, // NYC daycare
      leisure: 1200,
      contingency: 800
    },
    upfrontRelocation: {
      flights: 850,
      visaAndApostilles: 500,
      temporaryStay1Month: 3800,
      depositRentMultiplier: 1, // 1 month deposit legally capped in NY
      starterFurniture: 1800,
      miscellaneousSetup: 900
    }
  },

  // UAE
  'Dubai': {
    country: 'uae',
    currency: 'AED',
    symbol: 'AED',
    bachelor: {
      rent: 5500, // 1-bed in Marina / Business Bay / JLT
      groceries: 1500,
      transport: 450, // Nol card / Metro
      healthInsurance: 0, // paid by company
      utilities: 750, // DEWA + Du/Etisalat internet
      leisure: 2000,
      contingency: 1000
    },
    family: {
      rent: 11000, // 2-3 bed villa or apartment
      groceries: 3800,
      transport: 1200, // fuel & Salik tolls
      healthInsurance: 0,
      utilities: 1500,
      childcare: 3500, // British/IB school tuition
      leisure: 3500,
      contingency: 2000
    },
    upfrontRelocation: {
      flights: 2500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 7500,
      depositRentMultiplier: 1.5, // 5% of annual rent + 5% broker fee
      starterFurniture: 5000,
      miscellaneousSetup: 2500
    }
  },

  // Singapore
  'Singapore': {
    country: 'singapore',
    currency: 'SGD',
    symbol: 'S$',
    bachelor: {
      rent: 2800, // Condo master room or studio
      groceries: 600,
      transport: 140, // MRT/Bus
      healthInsurance: 200,
      utilities: 220, // SP Group + Fibre broadband
      leisure: 700,
      contingency: 400
    },
    family: {
      rent: 5500, // 3-bed condo
      groceries: 1500,
      transport: 350,
      healthInsurance: 500,
      utilities: 450,
      childcare: 2000, // International school / preschool
      leisure: 1200,
      contingency: 800
    },
    upfrontRelocation: {
      flights: 900,
      visaAndApostilles: 400,
      temporaryStay1Month: 3800,
      depositRentMultiplier: 2, // 2 months deposit on 2-yr lease
      starterFurniture: 1800,
      miscellaneousSetup: 800
    }
  },

  // Australia
  'Sydney': {
    country: 'australia',
    currency: 'AUD',
    symbol: 'A$',
    bachelor: {
      rent: 2800, // ~$650/week 1-bedroom
      groceries: 550,
      transport: 180, // Opal card
      healthInsurance: 160, // OVHC expat health
      utilities: 240,
      leisure: 600,
      contingency: 350
    },
    family: {
      rent: 4600, // ~$1,050/week 3-bedroom
      groceries: 1400,
      transport: 380,
      healthInsurance: 420,
      utilities: 420,
      childcare: 1600, // childcare / early learning
      leisure: 1000,
      contingency: 700
    },
    upfrontRelocation: {
      flights: 1200,
      visaAndApostilles: 600,
      temporaryStay1Month: 3600,
      depositRentMultiplier: 1, // 4 weeks bond
      starterFurniture: 2000,
      miscellaneousSetup: 900
    }
  },

  // Japan
  'Tokyo': {
    country: 'japan',
    currency: 'JPY',
    symbol: '¥',
    bachelor: {
      rent: 110000, // 1K / 1LDK apartment
      groceries: 45000,
      transport: 15000, // Suica/Pasmo (often reimbursed by employer)
      healthInsurance: 20000, // NHI / Shakai Hoken
      utilities: 20000,
      leisure: 40000,
      contingency: 25000
    },
    family: {
      rent: 240000, // 2LDK / 3LDK in central Tokyo
      groceries: 110000,
      transport: 30000,
      healthInsurance: 45000,
      utilities: 40000,
      childcare: 80000, // International preschool
      leisure: 75000,
      contingency: 50000
    },
    upfrontRelocation: {
      flights: 85000,
      visaAndApostilles: 30000,
      temporaryStay1Month: 220000,
      depositRentMultiplier: 3.5, // 1 mo deposit + 1-2 mo Key Money (Reikin) + 1 mo agency fee
      starterFurniture: 140000,
      miscellaneousSetup: 50000
    }
  },

  // Brazil
  'São Paulo': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 3200, // 1BR / Studio in Pinheiros, Vila Madalena, Itaim Bibi, Bela Vista
      groceries: 1200,
      transport: 250, // Bilhete Único / Metrô SP
      healthInsurance: 450, // Individual private health plan (Amil/SulAmérica/Unimed)
      utilities: 400, // Electricity, high-speed fiber internet, mobile
      leisure: 900, // Dining out, cafes, cultural events
      contingency: 500
    },
    family: {
      rent: 6500, // 2-3 BR apartment in safe neighborhood with 24h doorman
      groceries: 3000,
      transport: 600, // Family transit & occasional Uber/gas
      healthInsurance: 1400, // Family private medical plan
      utilities: 750,
      childcare: 2800, // Private school tuition / bilingual kindergarten
      leisure: 2000,
      contingency: 1200
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 5000, // Furnished Airbnb in Jardins/Pinheiros
      depositRentMultiplier: 3, // Standard 3-month rental deposit (or QuintoAndar deposit)
      starterFurniture: 3500,
      miscellaneousSetup: 1500
    }
  },

  'Rio de Janeiro': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 3000, // 1BR in Zona Sul (Botafogo, Flamengo, Copacabana, Ipanema)
      groceries: 1150,
      transport: 230,
      healthInsurance: 450,
      utilities: 380,
      leisure: 850,
      contingency: 500
    },
    family: {
      rent: 6200, // 2-3 BR in Zona Sul or Barra da Tijuca
      groceries: 2800,
      transport: 550,
      healthInsurance: 1400,
      utilities: 700,
      childcare: 2600,
      leisure: 1800,
      contingency: 1100
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 4800,
      depositRentMultiplier: 3,
      starterFurniture: 3200,
      miscellaneousSetup: 1400
    }
  },

  'Brasília': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 2600, // Asa Sul / Asa Norte studio
      groceries: 1100,
      transport: 220,
      healthInsurance: 450,
      utilities: 350,
      leisure: 750,
      contingency: 450
    },
    family: {
      rent: 5500,
      groceries: 2700,
      transport: 500,
      healthInsurance: 1400,
      utilities: 650,
      childcare: 2400,
      leisure: 1600,
      contingency: 1000
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 4200,
      depositRentMultiplier: 3,
      starterFurniture: 3000,
      miscellaneousSetup: 1300
    }
  },

  'Curitiba': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 2200, // Batel / Centro Cívico / Bigorrilho
      groceries: 1000,
      transport: 190, // World-famous BRT transit system
      healthInsurance: 400,
      utilities: 320,
      leisure: 700,
      contingency: 400
    },
    family: {
      rent: 4600,
      groceries: 2400,
      transport: 450,
      healthInsurance: 1300,
      utilities: 600,
      childcare: 2100,
      leisure: 1400,
      contingency: 900
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 3800,
      depositRentMultiplier: 3,
      starterFurniture: 2800,
      miscellaneousSetup: 1200
    }
  },

  'Florianópolis': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 2500, // Lagoa da Conceição / Campeche / Centro
      groceries: 1100,
      transport: 200,
      healthInsurance: 400,
      utilities: 340,
      leisure: 800,
      contingency: 450
    },
    family: {
      rent: 5200,
      groceries: 2600,
      transport: 500,
      healthInsurance: 1300,
      utilities: 650,
      childcare: 2200,
      leisure: 1600,
      contingency: 1000
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 4200,
      depositRentMultiplier: 3,
      starterFurniture: 2900,
      miscellaneousSetup: 1300
    }
  },

  'Belo Horizonte': {
    country: 'brazil',
    currency: 'BRL',
    symbol: 'R$',
    bachelor: {
      rent: 2100, // Savassi / Lourdes / Funcionários
      groceries: 980,
      transport: 190,
      healthInsurance: 400,
      utilities: 320,
      leisure: 700,
      contingency: 400
    },
    family: {
      rent: 4500,
      groceries: 2300,
      transport: 450,
      healthInsurance: 1300,
      utilities: 580,
      childcare: 2000,
      leisure: 1400,
      contingency: 900
    },
    upfrontRelocation: {
      flights: 4500,
      visaAndApostilles: 1500,
      temporaryStay1Month: 3600,
      depositRentMultiplier: 3,
      starterFurniture: 2700,
      miscellaneousSetup: 1200
    }
  }
};
