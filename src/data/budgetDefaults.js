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
      rent: 125000, // Central Tokyo 1K/1LDK (Shinjuku, Meguro, Shibuya periphery)
      groceries: 55000,
      transport: 18000, // Suica/Pasmo (often reimbursed by employer)
      healthInsurance: 25000, // National Health Insurance / Shakai Hoken
      utilities: 24000, // Gas, electricity, fiber internet, water
      leisure: 50000, // Dining, izakayas, coffee
      contingency: 30000
    },
    couple: {
      rent: 200000, // 1LDK / 2LDK apartment in good neighborhood
      groceries: 100000, // 2 adults eating balanced meals + occasional eating out
      transport: 30000, // Dual transit passes
      healthInsurance: 55000, // 2 adults health & pension
      utilities: 35000, // Dual heating, electricity, AC, internet
      leisure: 75000, // Weekend dining, cultural exploration
      contingency: 45000
    },
    family: {
      rent: 280000, // 2LDK / 3LDK in central Tokyo
      groceries: 130000,
      transport: 35000,
      healthInsurance: 60000,
      utilities: 42000,
      childcare: 90000, // International preschool
      leisure: 85000,
      contingency: 55000
    },
    upfrontRelocation: {
      flights: 90000,
      visaAndApostilles: 30000,
      temporaryStay1Month: 240000,
      depositRentMultiplier: 3.5, // 1 mo deposit + 1-2 mo Key Money (Reikin) + 1 mo agency fee
      starterFurniture: 160000,
      miscellaneousSetup: 60000
    }
  },

  'Osaka': {
    country: 'japan',
    currency: 'JPY',
    symbol: '¥',
    bachelor: {
      rent: 110000, // 1K / 1LDK in central Osaka (Umeda, Namba, Honmachi, Chuo-ku)
      groceries: 50000,
      transport: 15000, // Osaka Metro / JR pass
      healthInsurance: 22000,
      utilities: 20000,
      leisure: 45000,
      contingency: 28000
    },
    couple: {
      rent: 175000, // 1LDK / 2LDK in Umeda, Tennoji, or Namba
      groceries: 90000, // Two adults eating nutritious meals + eating out
      transport: 25000, // Two commuters
      healthInsurance: 50000, // Two adults health & pension
      utilities: 30000,
      leisure: 65000, // Dotonbori dining, weekend Kyoto/Nara trips
      contingency: 35000
    },
    family: {
      rent: 250000, // 2LDK / 3LDK family apartment
      groceries: 120000,
      transport: 35000,
      healthInsurance: 55000,
      utilities: 38000,
      childcare: 75000,
      leisure: 75000,
      contingency: 50000
    },
    upfrontRelocation: {
      flights: 85000,
      visaAndApostilles: 30000,
      temporaryStay1Month: 210000,
      depositRentMultiplier: 3.0, // Deposit + Key Money + Broker
      starterFurniture: 140000,
      miscellaneousSetup: 50000
    }
  },

  // Thailand (ExpatFIRE & Digital Nomad Hubs)
  'Bangkok': {
    country: 'thailand',
    currency: 'THB',
    symbol: '฿',
    bachelor: {
      rent: 18000, // Modern 1BR condo near BTS/MRT with pool/gym (Asok, Phra Khanong, Ari)
      groceries: 8500, // Mix of local markets, Tops, Villa Market
      transport: 2500, // BTS Skytrain, MRT, Grab
      healthInsurance: 3500, // Comprehensive expat inpatient/outpatient coverage
      utilities: 2500, // High-speed fiber + electricity with AC
      leisure: 6500, // Street food, rooftop cafes, weekend social
      contingency: 3500
    },
    couple: {
      rent: 28000, // 2BR / 1BR+ high-rise condo with gym and coworking
      groceries: 15000, // Two adults
      transport: 4500,
      healthInsurance: 7000, // Dual private health plan
      utilities: 4500, // Daily dual AC usage + utilities
      leisure: 12000, // Dining out, weekend getaways
      contingency: 6000
    },
    family: {
      rent: 55000, // 3BR spacious condo in Thonglor / Ekkamai / Sukhumvit
      groceries: 24000,
      transport: 7000,
      healthInsurance: 12000,
      utilities: 7000,
      childcare: 35000, // Bilingual / International kindergarten
      leisure: 18000,
      contingency: 10000
    },
    upfrontRelocation: {
      flights: 18000,
      visaAndApostilles: 12000, // DTV or Non-B application & attestations
      temporaryStay1Month: 32000,
      depositRentMultiplier: 2.0, // 2 months security deposit standard in Thailand
      starterFurniture: 25000,
      miscellaneousSetup: 10000
    }
  },

  'Chiang Mai': {
    country: 'thailand',
    currency: 'THB',
    symbol: '฿',
    bachelor: {
      rent: 12000, // Modern condo in Nimman / Maya / Santitham with pool/fiber
      groceries: 6500, // Local fruit & night markets, Rimping Supermarket
      transport: 1800, // Scooter rental & fuel / Grab
      healthInsurance: 3000,
      utilities: 2000,
      leisure: 5000, // Coffee capital of SEA
      contingency: 2500
    },
    couple: {
      rent: 19000, // 2BR quiet green condo or townhouse near Nimman / Jed Yod
      groceries: 12000,
      transport: 3500,
      healthInsurance: 6000,
      utilities: 3500,
      leisure: 9000,
      contingency: 4500
    },
    family: {
      rent: 35000, // Spacious detached house / villa in Hang Dong / San Sai
      groceries: 18000,
      transport: 5500,
      healthInsurance: 9000,
      utilities: 5000,
      childcare: 22000,
      leisure: 12000,
      contingency: 7000
    },
    upfrontRelocation: {
      flights: 18000,
      visaAndApostilles: 12000,
      temporaryStay1Month: 24000,
      depositRentMultiplier: 2.0,
      starterFurniture: 20000,
      miscellaneousSetup: 8000
    }
  },

  'Phuket': {
    country: 'thailand',
    currency: 'THB',
    symbol: '฿',
    bachelor: {
      rent: 20000, // 1BR condo near Rawai, Bang Tao, or Chalong
      groceries: 9000,
      transport: 3500, // Scooter or car rental (island transit is pricier)
      healthInsurance: 3500,
      utilities: 3000,
      leisure: 8000,
      contingency: 4000
    },
    couple: {
      rent: 32000, // 2BR villa / luxury condo with pool access
      groceries: 16000,
      transport: 6000,
      healthInsurance: 7000,
      utilities: 5000,
      leisure: 14000,
      contingency: 6000
    },
    family: {
      rent: 55000, // 3BR pool villa in Cherngtalay / Bang Tao
      groceries: 25000,
      transport: 8000,
      healthInsurance: 12000,
      utilities: 7500,
      childcare: 35000,
      leisure: 18000,
      contingency: 10000
    },
    upfrontRelocation: {
      flights: 20000,
      visaAndApostilles: 12000,
      temporaryStay1Month: 36000,
      depositRentMultiplier: 2.0,
      starterFurniture: 28000,
      miscellaneousSetup: 12000
    }
  },

  // Vietnam
  'Ho Chi Minh City': {
    country: 'vietnam',
    currency: 'VND',
    symbol: '₫',
    bachelor: {
      rent: 12000000, // Modern serviced 1BR in District 2 (Thao Dien) or Binh Thanh
      groceries: 5500000, // Annam Gourmet + local fresh markets
      transport: 1500000, // GrabBike / GrabCar
      healthInsurance: 2000000,
      utilities: 1800000, // AC + fiber internet
      leisure: 4500000, // Vibrant cafe culture and street eats
      contingency: 2500000
    },
    couple: {
      rent: 19000000, // 2BR high-rise condo with river views
      groceries: 10000000,
      transport: 2800000,
      healthInsurance: 4000000,
      utilities: 3000000,
      leisure: 8000000,
      contingency: 4000000
    },
    family: {
      rent: 35000000, // 3BR in Thao Dien near international schools
      groceries: 16000000,
      transport: 4500000,
      healthInsurance: 6500000,
      utilities: 4500000,
      childcare: 22000000,
      leisure: 12000000,
      contingency: 7000000
    },
    upfrontRelocation: {
      flights: 12000000,
      visaAndApostilles: 8000000,
      temporaryStay1Month: 22000000,
      depositRentMultiplier: 2.0, // 2 months deposit standard in Vietnam
      starterFurniture: 18000000,
      miscellaneousSetup: 8000000
    }
  },

  'Da Nang': {
    country: 'vietnam',
    currency: 'VND',
    symbol: '₫',
    bachelor: {
      rent: 9000000, // Beachside studio in An Thuong / My Khe beach
      groceries: 4500000,
      transport: 1200000, // Scooter / Grab
      healthInsurance: 1800000,
      utilities: 1500000,
      leisure: 3500000,
      contingency: 2000000
    },
    couple: {
      rent: 14000000, // 2BR apartment 300m from the beach
      groceries: 8000000,
      transport: 2200000,
      healthInsurance: 3600000,
      utilities: 2400000,
      leisure: 6000000,
      contingency: 3500000
    },
    family: {
      rent: 26000000, // 3BR house / villa near Han River
      groceries: 13000000,
      transport: 3500000,
      healthInsurance: 5500000,
      utilities: 3500000,
      childcare: 16000000,
      leisure: 9000000,
      contingency: 5500000
    },
    upfrontRelocation: {
      flights: 12000000,
      visaAndApostilles: 8000000,
      temporaryStay1Month: 16000000,
      depositRentMultiplier: 2.0,
      starterFurniture: 15000000,
      miscellaneousSetup: 6000000
    }
  },

  // Indonesia (Bali & Jakarta)
  'Bali': {
    country: 'indonesia',
    currency: 'IDR',
    symbol: 'Rp ',
    bachelor: {
      rent: 9500000, // 1BR private guesthouse / studio in Canggu, Berawa, or Ubud
      groceries: 4000000, // Pepito Supermarket + local organic markets
      transport: 1500000, // Monthly Nmax scooter rental & Gojek
      healthInsurance: 1800000, // Nomad/Expat health insurance
      utilities: 1500000, // Fast fiber wifi + PLN electricity
      leisure: 4500000, // Beach clubs, cafes, yoga
      contingency: 2500000
    },
    couple: {
      rent: 16000000, // 2BR private pool villa in Pererenan, Sanur, or Ubud
      groceries: 7500000,
      transport: 2800000,
      healthInsurance: 3600000,
      utilities: 2500000,
      leisure: 8000000,
      contingency: 4000000
    },
    family: {
      rent: 30000000, // 3BR enclosed villa with garden in Sanur or Umalas
      groceries: 13000000,
      transport: 4500000,
      healthInsurance: 5500000,
      utilities: 4000000,
      childcare: 18000000, // International preschool / Green School programs
      leisure: 11000000,
      contingency: 6500000
    },
    upfrontRelocation: {
      flights: 8500000,
      visaAndApostilles: 6000000, // B211A or E33G Remote Worker visa fees
      temporaryStay1Month: 15000000,
      depositRentMultiplier: 1.0, // Long-term Bali rentals often 1-month or paid annually
      starterFurniture: 12000000,
      miscellaneousSetup: 5000000
    }
  },

  'Jakarta': {
    country: 'indonesia',
    currency: 'IDR',
    symbol: 'Rp ',
    bachelor: {
      rent: 10500000, // Modern 1BR apartment in Kuningan / SCBD / Sudirman
      groceries: 4500000,
      transport: 1800000, // MRT Jakarta & Bluebird / Grab
      healthInsurance: 2000000,
      utilities: 1800000,
      leisure: 4500000,
      contingency: 2500000
    },
    couple: {
      rent: 18000000, // 2BR central high-rise condo with gym
      groceries: 8500000,
      transport: 3200000,
      healthInsurance: 4000000,
      utilities: 3000000,
      leisure: 8500000,
      contingency: 4500000
    },
    family: {
      rent: 32000000, // 3BR apartment in Pondok Indah / Senopati
      groceries: 14000000,
      transport: 5000000,
      healthInsurance: 6000000,
      utilities: 4500000,
      childcare: 22000000,
      leisure: 12000000,
      contingency: 7000000
    },
    upfrontRelocation: {
      flights: 8500000,
      visaAndApostilles: 6000000,
      temporaryStay1Month: 18000000,
      depositRentMultiplier: 2.0,
      starterFurniture: 14000000,
      miscellaneousSetup: 5000000
    }
  },

  // Mexico
  'Mexico City': {
    country: 'mexico',
    currency: 'MXN',
    symbol: 'Mex$',
    bachelor: {
      rent: 18000, // 1BR in Roma Norte, Condesa, Cuauhtémoc, or Del Valle
      groceries: 6000, // City Market, Superama, local Tianguis markets
      transport: 1500, // Metro, Metrobus, Ecobici, occasional Uber
      healthInsurance: 2500, // Major medical insurance (Gastos Médicos Mayores)
      utilities: 1800, // High-speed internet, gas, CFE electricity
      leisure: 5500, // Top world-class culinary capital
      contingency: 3000
    },
    couple: {
      rent: 28000, // 2BR apartment in safe leafy neighborhood with security
      groceries: 11000,
      transport: 2800,
      healthInsurance: 5000,
      utilities: 2800,
      leisure: 9500,
      contingency: 4500
    },
    family: {
      rent: 45000, // 3BR in Polanco periphery, San Ángel, or Del Valle
      groceries: 18000,
      transport: 4500,
      healthInsurance: 7500,
      utilities: 4000,
      childcare: 22000, // Private bilingual school
      leisure: 14000,
      contingency: 7500
    },
    upfrontRelocation: {
      flights: 12000,
      visaAndApostilles: 8000, // Residente Temporal consulate fees
      temporaryStay1Month: 28000,
      depositRentMultiplier: 1.5, // 1–1.5 months deposit + Poliza Jurídica
      starterFurniture: 22000,
      miscellaneousSetup: 7000
    }
  },

  'Playa del Carmen': {
    country: 'mexico',
    currency: 'MXN',
    symbol: 'Mex$',
    bachelor: {
      rent: 16000, // Modern 1BR condo near 5th Avenue / Playacar with pool
      groceries: 5500,
      transport: 1200, // Walking, bicycle, occasional taxi
      healthInsurance: 2500,
      utilities: 2200, // Higher electricity due to Caribbean AC
      leisure: 5000,
      contingency: 2500
    },
    couple: {
      rent: 24000, // 2BR condo in quiet Playacar or Centro
      groceries: 10000,
      transport: 2500,
      healthInsurance: 5000,
      utilities: 3500,
      leisure: 8500,
      contingency: 4000
    },
    family: {
      rent: 38000, // 3BR house in gated community with security
      groceries: 16000,
      transport: 4000,
      healthInsurance: 7500,
      utilities: 5000,
      childcare: 18000,
      leisure: 12000,
      contingency: 6500
    },
    upfrontRelocation: {
      flights: 12000,
      visaAndApostilles: 8000,
      temporaryStay1Month: 25000,
      depositRentMultiplier: 1.5,
      starterFurniture: 20000,
      miscellaneousSetup: 6000
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
  },

  // Canada
  'Toronto': {
    country: 'canada',
    currency: 'CAD',
    symbol: 'C$',
    bachelor: {
      rent: 2200, // 1-bedroom condo downtown
      groceries: 450,
      transport: 156, // TTC monthly pass
      healthInsurance: 75, // OHIP gap/dental
      utilities: 220, // hydro, heating, gigabit internet
      leisure: 450,
      contingency: 300
    },
    family: {
      rent: 3400, // 2-3 bedroom flat
      groceries: 1100,
      transport: 320,
      healthInsurance: 150,
      utilities: 380,
      childcare: 950, // CWELCC subsidized daycare / schooling
      leisure: 800,
      contingency: 600
    },
    upfrontRelocation: {
      flights: 900,
      visaAndApostilles: 500,
      temporaryStay1Month: 2800,
      depositRentMultiplier: 2, // First & last month standard
      starterFurniture: 1500,
      miscellaneousSetup: 600
    }
  },
  'Vancouver': {
    country: 'canada',
    currency: 'CAD',
    symbol: 'C$',
    bachelor: {
      rent: 2350,
      groceries: 470,
      transport: 140, // TransLink 2-zone
      healthInsurance: 75,
      utilities: 210,
      leisure: 480,
      contingency: 320
    },
    family: {
      rent: 3600,
      groceries: 1150,
      transport: 300,
      healthInsurance: 150,
      utilities: 370,
      childcare: 1050,
      leisure: 850,
      contingency: 650
    },
    upfrontRelocation: {
      flights: 950,
      visaAndApostilles: 500,
      temporaryStay1Month: 2900,
      depositRentMultiplier: 1.5,
      starterFurniture: 1500,
      miscellaneousSetup: 600
    }
  },
  'Montreal': {
    country: 'canada',
    currency: 'CAD',
    symbol: 'C$',
    bachelor: {
      rent: 1650,
      groceries: 400,
      transport: 97, // STM pass
      healthInsurance: 75,
      utilities: 180,
      leisure: 400,
      contingency: 250
    },
    family: {
      rent: 2600,
      groceries: 980,
      transport: 220,
      healthInsurance: 150,
      utilities: 320,
      childcare: 450, // highly subsidized Quebec CPE
      leisure: 700,
      contingency: 500
    },
    upfrontRelocation: {
      flights: 900,
      visaAndApostilles: 500,
      temporaryStay1Month: 2300,
      depositRentMultiplier: 1,
      starterFurniture: 1400,
      miscellaneousSetup: 500
    }
  },

  // Additional Major Hubs
  'San Francisco': {
    country: 'usa',
    currency: 'USD',
    symbol: '$',
    bachelor: {
      rent: 2900,
      groceries: 550,
      transport: 120,
      healthInsurance: 250,
      utilities: 240,
      leisure: 600,
      contingency: 400
    },
    family: {
      rent: 4600,
      groceries: 1300,
      transport: 250,
      healthInsurance: 550,
      utilities: 450,
      childcare: 2200,
      leisure: 1000,
      contingency: 750
    },
    upfrontRelocation: {
      flights: 1100,
      visaAndApostilles: 550,
      temporaryStay1Month: 3800,
      depositRentMultiplier: 1.5,
      starterFurniture: 1800,
      miscellaneousSetup: 800
    }
  },
  'Seattle': {
    country: 'usa',
    currency: 'USD',
    symbol: '$',
    bachelor: {
      rent: 2200,
      groceries: 480,
      transport: 110,
      healthInsurance: 220,
      utilities: 210,
      leisure: 500,
      contingency: 350
    },
    family: {
      rent: 3500,
      groceries: 1150,
      transport: 240,
      healthInsurance: 500,
      utilities: 380,
      childcare: 1850,
      leisure: 850,
      contingency: 650
    },
    upfrontRelocation: {
      flights: 1100,
      visaAndApostilles: 550,
      temporaryStay1Month: 3100,
      depositRentMultiplier: 1.5,
      starterFurniture: 1600,
      miscellaneousSetup: 700
    }
  },
  'Frankfurt': {
    country: 'germany',
    currency: 'EUR',
    symbol: '€',
    bachelor: {
      rent: 1300,
      groceries: 380,
      transport: 49,
      healthInsurance: 185,
      utilities: 160,
      leisure: 320,
      contingency: 220
    },
    family: {
      rent: 2400,
      groceries: 900,
      transport: 125,
      healthInsurance: 360,
      utilities: 320,
      childcare: 350,
      leisure: 650,
      contingency: 500
    },
    upfrontRelocation: {
      flights: 700,
      visaAndApostilles: 350,
      temporaryStay1Month: 1800,
      depositRentMultiplier: 3,
      starterFurniture: 1300,
      miscellaneousSetup: 500
    }
  },
  'Melbourne': {
    country: 'australia',
    currency: 'AUD',
    symbol: 'A$',
    bachelor: {
      rent: 2100,
      groceries: 550,
      transport: 190,
      healthInsurance: 140,
      utilities: 260,
      leisure: 500,
      contingency: 350
    },
    family: {
      rent: 3300,
      groceries: 1300,
      transport: 380,
      healthInsurance: 320,
      utilities: 420,
      childcare: 1600,
      leisure: 850,
      contingency: 650
    },
    upfrontRelocation: {
      flights: 1200,
      visaAndApostilles: 3200,
      temporaryStay1Month: 2900,
      depositRentMultiplier: 1.2,
      starterFurniture: 1800,
      miscellaneousSetup: 700
    }
  },
  'Abu Dhabi': {
    country: 'uae',
    currency: 'AED',
    symbol: 'AED ',
    bachelor: {
      rent: 5500,
      groceries: 1400,
      transport: 600,
      healthInsurance: 450,
      utilities: 750,
      leisure: 1500,
      contingency: 800
    },
    family: {
      rent: 10500,
      groceries: 3200,
      transport: 1400,
      healthInsurance: 1200,
      utilities: 1600,
      childcare: 3500,
      leisure: 3000,
      contingency: 1800
    },
    upfrontRelocation: {
      flights: 1800,
      visaAndApostilles: 2500,
      temporaryStay1Month: 7500,
      depositRentMultiplier: 1,
      starterFurniture: 4500,
      miscellaneousSetup: 1500
    }
  }
};

// Direct country-level fallbacks so indexing by country code always succeeds
CITY_BUDGET_BENCHMARKS['germany'] = CITY_BUDGET_BENCHMARKS['Berlin'];
CITY_BUDGET_BENCHMARKS['uk'] = CITY_BUDGET_BENCHMARKS['London'];
CITY_BUDGET_BENCHMARKS['netherlands'] = CITY_BUDGET_BENCHMARKS['Amsterdam'];
CITY_BUDGET_BENCHMARKS['canada'] = CITY_BUDGET_BENCHMARKS['Toronto'];
CITY_BUDGET_BENCHMARKS['usa'] = CITY_BUDGET_BENCHMARKS['New York'];
CITY_BUDGET_BENCHMARKS['uae'] = CITY_BUDGET_BENCHMARKS['Dubai'];
CITY_BUDGET_BENCHMARKS['singapore'] = CITY_BUDGET_BENCHMARKS['Singapore'];
CITY_BUDGET_BENCHMARKS['australia'] = CITY_BUDGET_BENCHMARKS['Sydney'];
CITY_BUDGET_BENCHMARKS['japan'] = CITY_BUDGET_BENCHMARKS['Tokyo'];
CITY_BUDGET_BENCHMARKS['brazil'] = CITY_BUDGET_BENCHMARKS['São Paulo'];
CITY_BUDGET_BENCHMARKS['thailand'] = CITY_BUDGET_BENCHMARKS['Bangkok'];
CITY_BUDGET_BENCHMARKS['vietnam'] = CITY_BUDGET_BENCHMARKS['Ho Chi Minh City'];
CITY_BUDGET_BENCHMARKS['indonesia'] = CITY_BUDGET_BENCHMARKS['Bali'];
CITY_BUDGET_BENCHMARKS['mexico'] = CITY_BUDGET_BENCHMARKS['Mexico City'];

/**
 * Robust helper to retrieve budget data for any city or country
 */
export function getCityBudgetData(city, countryId) {
  if (city && CITY_BUDGET_BENCHMARKS[city]) {
    return CITY_BUDGET_BENCHMARKS[city];
  }
  if (city) {
    const match = Object.keys(CITY_BUDGET_BENCHMARKS).find(
      k => k.toLowerCase() === city.toLowerCase()
    );
    if (match) return CITY_BUDGET_BENCHMARKS[match];
  }
  if (countryId && CITY_BUDGET_BENCHMARKS[countryId]) {
    return CITY_BUDGET_BENCHMARKS[countryId];
  }
  return CITY_BUDGET_BENCHMARKS['Berlin'];
}

/**
 * Calculates accurate, comprehensive monthly living burn
 * Includes: Rent + Groceries + Transport + Health Insurance + Utilities + (Childcare) + Leisure + Contingency
 * Supports First-Class "couple" persona scaling as requested by Reddit Expat community
 */
export function calculateMonthlyBurn(budgetData, persona = 'bachelor') {
  if (!budgetData) return 2500;
  const p = typeof persona === 'string' ? persona.toLowerCase() : 'bachelor';
  const isFamily = p.includes('family');
  const isCouple = p.includes('couple');
  const personaKey = isFamily ? 'family' : isCouple ? 'couple' : 'bachelor';

  let profile = budgetData[personaKey];
  if (!profile && isCouple) {
    // Smart conservative couple fallback (1.5x rent for 1LDK/2LDK, 1.8x groceries, 2x transport, 2x health, 1.4x utilities, 1.7x leisure, 1.5x contingency)
    const b = budgetData.bachelor || {};
    profile = {
      rent: Math.round((b.rent || 1200) * 1.5),
      groceries: Math.round((b.groceries || 400) * 1.8),
      transport: Math.round((b.transport || 60) * 2.0),
      healthInsurance: Math.round((b.healthInsurance || 200) * 2.0),
      utilities: Math.round((b.utilities || 150) * 1.4),
      childcare: 0,
      leisure: Math.round((b.leisure || 300) * 1.7),
      contingency: Math.round((b.contingency || 200) * 1.5),
    };
  } else if (!profile) {
    profile = budgetData.bachelor || budgetData.family || {};
  }

  const rent = Number(profile.rent) || 0;
  const groceries = Number(profile.groceries) || 0;
  const transport = Number(profile.transport) || 0;
  const healthInsurance = Number(profile.healthInsurance) || 0;
  const utilities = Number(profile.utilities) || 0;
  const childcare = isFamily ? (Number(profile.childcare) || 0) : 0;
  const leisure = Number(profile.leisure) || 0;
  const contingency = Number(profile.contingency) || 0;

  return Math.round(rent + groceries + transport + healthInsurance + utilities + childcare + leisure + contingency);
}

/**
 * Calculates upfront initial relocation capital requirement
 */
export function calculateUpfrontLandingCost(budgetData, persona = 'bachelor', customVisaFee = null) {
  if (!budgetData) return { totalUpfront: 6500, securityDeposit: 3300, flights: 800, visaFees: 500, tempStay: 1800, furniture: 1200, misc: 500 };
  const p = typeof persona === 'string' ? persona.toLowerCase() : 'bachelor';
  const isFamily = p.includes('family');
  const isCouple = p.includes('couple');
  const personaKey = isFamily ? 'family' : isCouple ? 'couple' : 'bachelor';

  let profile = budgetData[personaKey];
  if (!profile && isCouple) {
    const b = budgetData.bachelor || {};
    profile = { rent: Math.round((b.rent || 1200) * 1.5) };
  } else if (!profile) {
    profile = budgetData.bachelor || budgetData.family || {};
  }
  const upfront = budgetData.upfrontRelocation || {};

  const rent = Number(profile.rent) || 1500;
  const depositMult = Number(upfront.depositRentMultiplier) || 2.5;
  const securityDeposit = Math.round(rent * depositMult);
  const flights = Number(upfront.flights) ? (isCouple ? Number(upfront.flights) * 2 : isFamily ? Number(upfront.flights) * 2.5 : Number(upfront.flights)) : (isFamily ? 2400 : isCouple ? 1600 : 800);
  const visaFees = customVisaFee !== null ? Number(customVisaFee) : (Number(upfront.visaAndApostilles) ? (isCouple ? Number(upfront.visaAndApostilles) * 2 : Number(upfront.visaAndApostilles)) : 500);
  const tempStay = Number(upfront.temporaryStay1Month) ? (isCouple ? Number(upfront.temporaryStay1Month) * 1.25 : isFamily ? Number(upfront.temporaryStay1Month) * 1.5 : Number(upfront.temporaryStay1Month)) : (isFamily ? 3000 : 1800);
  const furniture = Number(upfront.starterFurniture) ? (isCouple ? Number(upfront.starterFurniture) * 1.3 : Number(upfront.starterFurniture)) : 1200;
  const misc = Number(upfront.miscellaneousSetup) || 500;

  return {
    securityDeposit,
    flights: Math.round(flights),
    visaFees: Math.round(visaFees),
    tempStay: Math.round(tempStay),
    furniture: Math.round(furniture),
    misc: Math.round(misc),
    totalUpfront: Math.round(securityDeposit + flights + visaFees + tempStay + furniture + misc)
  };
}
