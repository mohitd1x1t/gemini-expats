// Comprehensive Country-Wise Cultural, Dietary, Faith, and Regulatory Intelligence

export const COUNTRY_CULTURAL_DATA = {
  germany: {
    countryId: 'germany',
    countryName: 'Germany',
    flag: '🇩🇪',
    familyRegulations: [
      {
        title: '1. Compulsory Schooling (Schulpflicht)',
        desc: 'School attendance is legally mandatory for children (ages 6–16). Homeschooling is strictly prohibited by federal law, and taking children out of school before term ends incurs airport police checks and municipal fines up to €1,000.'
      },
      {
        title: '2. Child Benefits (Kindergeld)',
        desc: 'All foreign tax-paying residents with valid residence permits qualify for monthly government child allowances (~€250/month per child) paid directly into your German bank account by the Familienkasse.'
      },
      {
        title: '3. Children Noise Protection (Kinderlärmschutzgesetz)',
        desc: 'By German federal law, normal noise produced by playing children cannot legally be treated as a noise disturbance or ground for tenant eviction, even during quiet hours (Ruhezeit).'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Punctuality & Appointments (Pünktlichkeit)',
        desc: 'Arriving 5–10 minutes early is standard. Missing an appointment (Arzttermin) without 24 hours prior cancellation frequently incurs a private cancellation invoice.'
      },
      {
        title: 'Direct Factual Workplace Culture (Sachlichkeit)',
        desc: 'Communication in German business is direct, objective, and low-context. Constructive criticism focuses strictly on work tasks and is not taken as a personal insult.'
      },
      {
        title: 'Quiet Hours (Ruhezeit) & Bike Paths',
        desc: 'Quiet hours apply strictly every weekday 22:00–06:00 and all day Sunday (no drilling, vacuuming, or lawnmowing). Never walk on red-paved bicycle lanes—cyclists ride fast and expect right-of-way.'
      }
    ],
    hiddenIngredients: [
      { term: 'Tierisches Lab', en: 'Animal rennet (slaughtered calf stomach; common in traditional hard cheeses)' },
      { term: 'Gelatine / Speisegelatine', en: 'Pork or bovine gelatin (ubiquitous in gummy candies, yogurts, and mousses)' },
      { term: 'Schmalz / Schweineschmalz', en: 'Pork lard (used in traditional pastries, rye breads, and red cabbage)' },
      { term: 'Fleischbrühe / Rinderbrühe', en: 'Beef broth (often the hidden stock in vegetable soups)' },
      { term: 'Echtes Karmin (E120)', en: 'Carmine red food coloring derived from crushed cochineal insects' }
    ],
    diningCulture: {
      overview: 'Germany is Europe’s largest market for plant-based foods. Almost all restaurants carry the green "V-Label" (Vegetarisch / Vegan). Döner kebabs and falafel shops offer cheap, certified Halal options.',
      diningTip: 'Water in German restaurants is not free; tap water is rarely served. You must specify "Stilles Wasser" (still) or "Sprudelwasser" (carbonated).'
    },
    supermarkets: {
      mainstream: 'Rewe, Edeka (premium produce); Lidl, Aldi, Penny (budget-friendly staples).',
      organic: 'Bio Company, Alnatura, Denns BioMarkt (100% organic, extensive vegan cheese, tofu, and plant milks).',
      ethnic: 'Go Asia (huge pan-Asian chain), Spiceland & Bharat Bazaar (Indian spices and lentils), Eurogida & Bolu (Turkish grocers with fresh produce and Halal meats).'
    },
    faithCommunities: {
      hindu: {
        centers: 'Active mandirs include Sri Ganesha Hindu Temple (Berlin Neukölln), Sri Kamadchi Ampal Temple (Hamm—Europe’s second largest), and ISKCON temples in Munich, Frankfurt, and Heidelberg.',
        festivals: 'Major Diwali, Holi, and Janmashtami celebrations organized by Indian expat associations and student societies in Berlin, Munich, and Frankfurt.'
      },
      muslim: {
        centers: 'Large historic mosques including Cologne Central Mosque, Sehitlik Mosque (Berlin), and Islamic Centre Hamburg. Halal food counters and butcheries are ubiquitous in Turkish neighborhoods.',
        festivals: 'Community Eid morning prayers hosted in exhibition halls and grand mosques. Active Muslim student and professional networking groups.'
      },
      christian: {
        centers: 'English-speaking international congregations include Berlin International Church, St. George’s Anglican Church (Berlin), and Munich Christian Fellowship.',
        taxAlert: 'Kirchensteuer (Church Tax): If you register as Catholic (rk) or Protestant (ev) on your Anmeldung, Germany withholds 8%–9% additional income tax. Register as "ohne Religionsbekenntnis" (non-denominational) if you do not wish to pay.'
      },
      sikh: {
        centers: 'Gurdwara Sri Guru Singh Sabha (Berlin, Frankfurt, Munich, Stuttgart). Daily Langar (free vegetarian community kitchen) is open to all visitors regardless of faith.'
      },
      jewish: {
        centers: 'Vibrant Jewish community in Berlin (New Synagogue Oranienburger Straße, Chabad Berlin, Jewish Museum), Frankfurt, and Munich with certified Kosher bakeries and grocery stores.'
      },
      buddhist: {
        centers: 'Fo Guang Shan Berlin, Buddhistisches Haus Frohnau (oldest Theravada center in Europe), and Shambhala meditation centers across Munich and Hamburg.'
      },
      secular: {
        centers: 'Thriving international expat social hubs through InterNations, Meetup (hiking, board games, language tandems), and Toastmasters clubs in every major German city.'
      }
    }
  },

  brazil: {
    countryId: 'brazil',
    countryName: 'Brazil',
    flag: '🇧🇷',
    familyRegulations: [
      {
        title: '1. Child Travel Authorization (Autorização de Viagem)',
        desc: 'Under the Estatuto da Criança e do Adolescente (ECA), a minor child traveling internationally or domestically across states with only one parent must carry a signed, notarized travel consent form (autorização de viagem com firma reconhecida).'
      },
      {
        title: '2. Mandatory Vaccination Record (Caderneta de Vacinação)',
        desc: 'Proof of up-to-date pediatric vaccinations is strictly required for school enrollment in both public and private schools. Free childhood vaccines (including BCG, Polio, MMR) are provided by the SUS (Postos de Saúde).'
      },
      {
        title: '3. Child Safety Car Seats (Cadeirinha Mandate)',
        desc: 'Under CONTRAN Resolution 819, children under 10 or shorter than 1.45m must travel in the back seat in an approved child restraint seat (bebê conforto, cadeirinha, or booster seat). Fines and vehicle impoundment apply for violations.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Warm Personal Greetings (Beijinhos & Abraços)',
        desc: 'Brazilians greet with warmth. Handshakes with eye contact for men, and cheek touches/air kisses (one in São Paulo, two in Rio) are standard. Personal warmth and friendly rapport always precede business conversations.'
      },
      {
        title: 'WhatsApp is Essential for Everything',
        desc: 'In Brazil, WhatsApp is the primary communication channel for doctors, apartment managers, restaurants, government agencies, and bank managers. Always set up a Brazilian phone number with WhatsApp immediately.'
      },
      {
        title: 'Street Smarts & Situational Awareness (Cuidado)',
        desc: 'Never walk looking down at an expensive smartphone on city sidewalks (especially near Paulista, Centro, or Rio beaches) due to bicycle snatchers. Take registered rideshares (Uber/99) at night and avoid flashiness.'
      }
    ],
    hiddenIngredients: [
      { term: 'Banha de porco / Gordura de porco', en: 'Pork lard (used in traditional feijoada, refried black beans, and pastries)' },
      { term: 'Caldo de galinha / Caldo de carne', en: 'Chicken / Beef bouillon cube (frequently dissolved into white rice and vegetable sauces)' },
      { term: 'Bacon / Toucinho', en: 'Bacon bits (almost universally added to black beans and farofa; always ask: "O feijão tem bacon?")' },
      { term: 'Camarão seco', en: 'Dried shrimp (hidden in northern dishes like vatapá, acarajé, and caruru)' },
      { term: 'Gelatina', en: 'Animal gelatin (common in commercial mousses, yogurts, and cake icings)' }
    ],
    diningCulture: {
      overview: 'While famous for churrasco steakhouses, Brazil (especially São Paulo) is an incredible culinary haven for vegetarians, with thousands of Italian, Lebanese, and Japanese dining options.',
      diningTip: 'Look for "Restaurante por Quilo" (pay-by-weight buffet). They are everywhere at lunch, fresh, and budget-friendly. Vegetarians can pick exactly what they want from massive salad, vegetable, and grain bars!'
    },
    supermarkets: {
      mainstream: 'Pão de Açúcar (premium with organic & plant-based sections), St. Marche, Carrefour, Supermercados Mambo.',
      organic: 'Mundo Verde (nationwide health food chain), Casa Santa Luzia (São Paulo luxury grocer with worldwide specialty foods).',
      ethnic: 'Bairro da Liberdade in São Paulo (largest Japanese/Asian diaspora hub on Earth for tofu, sauces, and fresh Asian greens); Zona Cerealista in São Paulo (historic wholesale market for bulk grains, nuts, pulses, and Indian spices).'
    },
    faithCommunities: {
      hindu: {
        centers: 'ISKCON São Paulo (Templo Hare Krishna na Rua Juquis, Indianópolis), Centro Cultural Swami Vivekananda (affiliated with Indian Consulate), and Ananda Marga centers.',
        festivals: 'Diwali and Janmashtami celebrations organized by the Indian Association of São Paulo (IASP) and temple banquets with authentic vegetarian prasadam.'
      },
      muslim: {
        centers: 'Mesquita Brasil (Cambuci, São Paulo—oldest mosque in Latin America), Mesquita de Santo Amaro, and Centro Islâmico de Foz do Iguaçu. Halal butcheries in Brás and Pari.',
        festivals: 'Grand community Eid prayers and community iftars during Ramadan. Fambras Halal is the official national Halal certification agency.'
      },
      christian: {
        centers: 'Brazil is home to historic Catholic cathedrals (Catedral da Sé) and vibrant Protestant churches. English-speaking services available at Fellowship Community Church (São Paulo) and Christ Church Rio.',
        taxAlert: 'Zero Church Tax: Brazil is constitutionally secular. There is no government church tax withheld from salaries.'
      },
      sikh: {
        centers: 'Gurdwara Sahib São Paulo and Sikh Dharma community groups. Langar hospitality shared during Sikh festivals.'
      },
      jewish: {
        centers: 'Vibrant Jewish community in São Paulo (notably Higienópolis, Bom Retiro, and Morumbi) with historic synagogues (CIP - Congregação Israelita Paulista), Beit Chabad, and Kosher supermarkets.',
        festivals: 'Community Seders, Hanukkah celebrations, and youth programs through Hebraica São Paulo (one of the world\'s largest Jewish community centers).'
      },
      buddhist: {
        centers: 'Templo Zu Lai (Cotia, São Paulo—largest Buddhist temple in South America), Templo Busshinji (Liberdade), and Templo Kinkaku-ji in Itapecerica da Serra.'
      },
      secular: {
        centers: 'Active expat groups on InterNations São Paulo & Rio, Language Exchange Cafés in Pinheiros, and weekend running/cycling clubs in Parque Ibirapuera.'
      }
    }
  },

  uk: {
    countryId: 'uk',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    familyRegulations: [
      {
        title: '1. School Attendance & Term-Time Fines',
        desc: 'Compulsory schooling begins at age 5. Taking children on vacation during term time without school permission is illegal and triggers local council fines (£80 to £160 per parent, per child).'
      },
      {
        title: '2. Child Benefit',
        desc: 'Qualifying residents with valid visa status and national insurance can claim government Child Benefit payments (~£25.60/week for the eldest child, ~£16.95 for subsequent children).'
      },
      {
        title: '3. Booster Seats Law',
        desc: 'Children must use a child car seat until they are 12 years old or 135 cm tall, whichever comes first. Taxis without child seats allow children to travel in the rear with adult belts only in emergencies.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Queueing Protocol',
        desc: 'Queueing is a sacred British cultural norm. Never jump a queue or cut in line at bus stops, ticket counters, or bars—it causes immediate outrage.'
      },
      {
        title: 'Polite Understatement & Apologies',
        desc: 'Saying "Sorry", "Please", and "Thank you" repeatedly is expected in every social transaction. Constructive feedback is delivered with polite understatement ("Perhaps we could consider...").'
      },
      {
        title: 'Pub Etiquette & Rounds',
        desc: 'When visiting a pub with colleagues, you order at the bar (no table service). Groups take turns buying "rounds" of drinks for everyone.'
      }
    ],
    hiddenIngredients: [
      { term: 'Beef Dripping / Suet', en: 'Traditional beef fat (sometimes used in fish & chips, traditional roast potatoes, and Yorkshire pudding)' },
      { term: 'Animal Rennet', en: 'Slaughterhouse rennet (common in mature British Cheddars; check for "Vegetarian Society Approved" logo)' },
      { term: 'Carmine / Cochineal (E120)', en: 'Red dye derived from crushed insects' },
      { term: 'Isinglass', en: 'Fish bladder collagen used for clarifying traditional British cask ales and ciders' }
    ],
    diningCulture: {
      overview: 'The UK is one of the easiest nations in the world for vegetarian, vegan, and halal dining. All packaged goods and restaurant menus clearly show (V) for vegetarian and (Ve) for vegan.',
      diningTip: 'All major supermarkets (M&S, Waitrose, Sainsbury’s) carry extensive dedicated ready-meal aisles for plant-based and Halal diets.'
    },
    supermarkets: {
      mainstream: 'Tesco, Sainsbury’s, Asda, Morrisons; Waitrose and M&S Food for premium produce; Aldi and Lidl for budget staples.',
      organic: 'Planet Organic, Whole Foods Market (London), Holland & Barrett.',
      ethnic: 'Southall, Wembley, and Tooting in London; Rusholme Curry Mile in Manchester; massive Asian and Afro-Caribbean supermarkets on every high street.'
    },
    faithCommunities: {
      hindu: {
        centers: 'BAPS Shri Swaminarayan Mandir (Neasden Temple—one of the largest Hindu temples outside India), Bhaktivedanta Manor (Watford), and temples in Leicester, Birmingham, and Manchester.',
        festivals: 'Trafalgar Square Diwali Festival in London draws over 30,000 celebrants annually. Huge Navratri Garba celebrations across London and the Midlands.'
      },
      muslim: {
        centers: 'East London Mosque & London Muslim Centre, Regent’s Park Central Mosque, Birmingham Central Mosque, and Edinburgh Central Mosque.',
        festivals: 'Widespread community Eid celebrations and Halal Food Festivals across the UK. Halal meat is standard across British university and hospital canteens.'
      },
      christian: {
        centers: 'Historic Anglican parish churches (Church of England), Catholic cathedrals (Westminster Cathedral), and thriving international churches like HTB (Holy Trinity Brompton) in London.',
        taxAlert: 'Zero Church Tax: The UK does not collect religious taxes from your payroll.'
      },
      sikh: {
        centers: 'Sri Guru Singh Sabha (Southall—largest Gurdwara in Europe), Gurdwara Sri Guru Tegh Bahadur Sahib (Birmingham). Free Langar served daily to thousands.'
      },
      jewish: {
        centers: 'Thriving Jewish community in North London (Golders Green, Hendon, Stamford Hill), Manchester, and Leeds. Abundant Beth Din certified kosher bakeries and supermarkets.',
        festivals: 'Menorah lighting in Trafalgar Square, community Purim carnivals, and active university Jewish societies (UJS).'
      },
      buddhist: {
        centers: 'Buddhapadipa Temple (Wimbledon), London Buddhist Centre (Bethnal Green), and Amaravati Buddhist Monastery (Hertfordshire).'
      },
      secular: {
        centers: 'Humanists UK, Sunday Assembly, British expat networking groups, and weekend sports clubs across London Royal Parks.'
      }
    }
  },

  netherlands: {
    countryId: 'netherlands',
    countryName: 'Netherlands',
    flag: '🇳🇱',
    familyRegulations: [
      {
        title: '1. Compulsory Education (Leerplicht)',
        desc: 'Education is compulsory from age 5. Municipal Truancy Officers (Leerplichtambtenaren) enforce attendance strictly; parents taking unauthorized vacations are fined immediately.'
      },
      {
        title: '2. Child Allowance (Kinderbijslag)',
        desc: 'The SVB (Sociale Verzekeringsbank) pays quarterly child benefits to all foreign resident parents, increasing as children grow older (~€280–€400/quarter per child).'
      },
      {
        title: '3. Bakfiets & Bike Safety Culture',
        desc: 'Dutch children ride in cargo bikes (Bakfiets) from infancy and take the national traffic exam (Verkeersexamen) in primary school. Bike helmet usage is optional but road rules are strictly observed.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Directness & Egalitarianism (Bescheidenheid)',
        desc: 'Dutch culture is the flattest in Europe. Subordinates speak up to CEOs without hesitation. Honest opinions are preferred over polite vagueness.'
      },
      {
        title: 'Bicycle Hegemony',
        desc: 'Cyclists have absolute de facto priority on the road. Never walk on reddish bike paths, and always glance over your shoulder before opening car doors (the "Dutch Reach").'
      },
      {
        title: 'Gezelligheid & Work-Life Boundaries',
        desc: 'Work concludes promptly at 17:00–17:30 to preserve family dinner and social time ("Gezellig"). Late evening work emails are discouraged.'
      }
    ],
    hiddenIngredients: [
      { term: 'Dierlijk stremsel', en: 'Animal rennet (used in traditional Gouda and Edam cheeses; look for "vegetarisch stremsel" / microbial rennet)' },
      { term: 'Gelatine', en: 'Gelatin (found in Dutch drop licorice and pastries)' },
      { term: 'Varkensvet / Reuzel', en: 'Pork fat (used in some traditional stroopwafels and frying fats)' },
      { term: 'Vleesbouillon', en: 'Meat bouillon (common in pea soup / Erwtensoep)' }
    ],
    diningCulture: {
      overview: 'Very vegetarian and vegan friendly. Indonesian culinary heritage (Rijsttafel) provides exceptional peanut-based, tofu, and vegetable dishes (Gado-Gado, Tempeh).',
      diningTip: 'Water is typically billed; ask for "kraanwater" (tap water) politely if preferred.'
    },
    supermarkets: {
      mainstream: 'Albert Heijn (AH—the dominant supermarket with massive veggie "Lekker Vega" sections), Jumbo, Plus.',
      organic: 'Ekoplaza (100% organic/vegan supermarket chain).',
      ethnic: 'Amazing Oriental (largest Asian chain across Amsterdam, Rotterdam, and The Hague); De Pijp and Dappermarkt in Amsterdam for Turkish, Surinamese, and Moroccan grocers.'
    },
    faithCommunities: {
      hindu: {
        centers: 'Large Surinamese and Indian Hindu community. Major temples include Shri Sanatan Dharm Mandir (The Hague), ISKCON Amsterdam, and Radha Krishna Mandir (Amsterdam Bijlmer).',
        festivals: 'Holi and Diwali are massive public celebrations in The Hague and Amsterdam with cultural parades and fireworks.'
      },
      muslim: {
        centers: 'Westermoskee Ayasofya (Amsterdam), Essalam Mosque (Rotterdam—largest in Netherlands), and Ulu Mosque (Utrecht). Halal butcheries in every neighborhood.',
        festivals: 'Community Eid banquets and lively Ramadan night bazaars.'
      },
      christian: {
        centers: 'Historic Dutch Reformed and Catholic churches, alongside English-speaking international churches like Crossroads International Church (The Hague) and Liberty Church Amsterdam.',
        taxAlert: 'Zero Church Tax: The Netherlands has no church tax.'
      },
      sikh: {
        centers: 'Gurdwara Shri Guru Nanak Gurdwara Sahib (Rotterdam) and Gurdwara Amsterdam. Free Langar served every Sunday.'
      },
      jewish: {
        centers: 'Rich historic Jewish heritage. Portuguese Synagogue (Esnoga Amsterdam), Chabad on the Campus, and Kosher grocers in Amsterdam Buitenveldert.',
        festivals: 'National Holocaust memorial commemorations and public Hanukkah lightings.'
      },
      buddhist: {
        centers: 'He Hua Temple (Zeedijk, Amsterdam—largest Chinese-style Buddhist temple in Europe) and Phuntsho Chö Ling in Rotterdam.'
      },
      secular: {
        centers: 'The Netherlands is one of the most secular nations in the world. Immense expat meetup groups, language exchanges, and canal boating clubs.'
      }
    }
  },

  usa: {
    countryId: 'usa',
    countryName: 'United States',
    flag: '🇺🇸',
    familyRegulations: [
      {
        title: '1. School Districting by Residence Address',
        desc: 'Public school enrollment is strictly determined by your exact residential address and school district boundary. You must show proof of residency (lease agreement + 2 utility bills) to enroll.'
      },
      {
        title: '2. Strict Child Supervision Laws',
        desc: 'Leaving young children unattended at home, in a park, or inside a vehicle (even for 5 minutes) is illegal in many states and can trigger police response and Child Protective Services (CPS) investigations.'
      },
      {
        title: '3. State Vaccination Requirements',
        desc: 'State health departments mandate comprehensive pediatric immunizations (MMR, DTaP, Polio, Hepatitis B) before any child can enter preschool, kindergarten, or public school.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Tipping Culture (18% – 22%)',
        desc: 'Tipping is culturally expected and constitutes the primary wage for restaurant waitstaff, food delivery, and rideshares. 18% to 22% is standard in dine-in establishments.'
      },
      {
        title: 'Enthusiastic Greetings & Small Talk',
        desc: 'Casual friendliness ("How are you doing today?") and upbeat communication are expected in everyday service interactions. Smiling and verbal warmth are social norms.'
      },
      {
        title: 'At-Will Employment & Professional Merit',
        desc: 'American corporate culture is fast-moving, entrepreneurial, and merit-focused. Direct communication, initiative, and proactive networking on LinkedIn are highly valued.'
      }
    ],
    hiddenIngredients: [
      { term: 'Lard / Animal Shortening', en: 'Pork fat used in traditional pie crusts, biscuits, refried beans in Mexican restaurants, and cornbread' },
      { term: 'Beef / Chicken Stock', en: 'Meat broth used in restaurant rice pilafs, gravies, and soups labeled as "vegetable soup"' },
      { term: 'Gelatin', en: 'Pork or beef collagen found in marshmallows, frosted breakfast pastries, and yogurts' },
      { term: 'Animal Enzymes', en: 'Slaughterhouse enzymes used in mass-produced American cheese products' }
    ],
    diningCulture: {
      overview: 'Unmatched food diversity. Every dietary requirement (vegan, gluten-free, halal, kosher, dairy-free) is accommodated with extensive menu labels and allergen warnings.',
      diningTip: 'Portion sizes in the US are notoriously large. Taking home leftovers in a "to-go box" (doggy bag) is standard practice and encouraged.'
    },
    supermarkets: {
      mainstream: 'Kroger, Safeway, Whole Foods Market, Trader Joe’s (beloved for healthy/veggie snacks), Costco (bulk savings).',
      organic: 'Whole Foods Market, Sprouts Farmers Market, Natural Grocers.',
      ethnic: 'H Mart (massive pan-Asian Korean chain), Patel Brothers (nationwide Indian grocers), 99 Ranch Market, local Halal butcheries in every metro hub.'
    },
    faithCommunities: {
      hindu: {
        centers: 'BAPS Shri Swaminarayan Mandir (Robbinsville NJ—largest in US; Chino Hills CA; Houston TX; Atlanta GA), Hindu Temple Society of North America (Flushing NY), and Shiva-Vishnu temples nationwide.',
        festivals: 'Holi and Diwali parades in major cities, university Hindu Youth Network celebrations, and community cultural festivals.'
      },
      muslim: {
        centers: 'Islamic Center of America (Dearborn MI—largest mosque in North America), Dar Al-Hijrah (VA), and Islamic Cultural Center of New York. Halal dining is ubiquitous in major cities.',
        festivals: 'Eid festivals in convention centers and stadiums; ISNA and ICNA annual conventions drawing tens of thousands.'
      },
      christian: {
        centers: 'Vast array of non-denominational churches, Catholic parishes, Baptist, Episcopal, Presbyterian, and Orthodox congregations in every suburb and downtown.',
        taxAlert: 'Zero Church Tax: Freedom of religion with complete separation of church and state.'
      },
      sikh: {
        centers: 'Sikh Gurdwara San Jose (largest in North America), Gurdwara Sahib Fremont, and Gurdwaras in Queens NY and Richmond VA. Free Langar served daily to all.'
      },
      jewish: {
        centers: 'World’s largest Jewish diaspora. Major institutions in New York City, Los Angeles, Miami, Chicago, and Boston. Chabad houses on virtually every university campus.',
        festivals: 'Hanukkah menorah lightings in public parks, Passover seders, and extensive Kosher-certified restaurants.'
      },
      buddhist: {
        centers: 'Hsi Lai Temple (Hacienda Heights CA), Zen Mountain Monastery (NY), and Dharma Drum Mountain centers across the East and West coasts.'
      },
      secular: {
        centers: 'American Humanist Association, Meetup groups (hiking, coding, board games), and vibrant expat professional groups on LinkedIn and Eventbrite.'
      }
    }
  },

  uae: {
    countryId: 'uae',
    countryName: 'United Arab Emirates',
    flag: '🇦🇪',
    familyRegulations: [
      {
        title: '1. Wadeema’s Law (Federal Child Rights)',
        desc: 'Federal Law No. 3 strictly protects child welfare. Children under 4 must ride in approved rear child seats; leaving children unattended in cars or residences carries severe criminal penalties.'
      },
      {
        title: '2. Private School Ratings (KHDA & ADEK Inspections)',
        desc: 'Expat children attend private schools rated annually by KHDA (Dubai) or ADEK (Abu Dhabi) from "Outstanding" to "Very Weak". Mandatory Arabic and Islamic Studies (for Muslim students) or Social Studies (for non-Muslims) are part of the curriculum.'
      },
      {
        title: '3. Mandatory Health Insurance for Dependents',
        desc: 'Employers or sponsors are legally required to provide valid medical health insurance for dependent spouses and children before residence visas are stamped.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Respect for Islamic Customs & Ramadan',
        desc: 'Dress modestly in government buildings, courts, and malls (shoulders and knees covered). During Ramadan, avoid eating, drinking, or chewing gum in open public spaces during fasting hours.'
      },
      {
        title: 'Digital Decorum & Cybercrime Laws',
        desc: 'UAE has strict cybercrime laws: never photograph strangers without permission, post road incidents online, or use offensive language on social media/WhatsApp.'
      },
      {
        title: 'Generous Hospitality & Courtesy',
        desc: 'Offering dates and Arabic coffee (Gahwa) is customary. Avoid using the left hand when passing food, and never point the soles of your shoes directly at others.'
      }
    ],
    hiddenIngredients: [
      { term: 'Alcohol / Cooking Wine', en: '100% prohibited in standard food products; licensed hotels clearly disclose any alcohol in marinades' },
      { term: 'Pork by-products', en: 'Pork is strictly isolated by law into separate, sealed supermarket rooms marked "For Non-Muslims Only"' }
    ],
    diningCulture: {
      overview: '100% of meat served in standard restaurants is certified Halal by law. World-class vegetarian and vegan options available everywhere due to the large South Asian and international community.',
      diningTip: 'Supermarkets have a segregated, closed-door section labeled "Pork Section for Non-Muslims" where bacon, ham, and pork sausages are kept isolated.'
    },
    supermarkets: {
      mainstream: 'Carrefour, Spinneys (beloved by British expats), Waitrose, LuLu Hypermarket (giant selection of Indian spices and affordable staples), Union Coop.',
      organic: 'Organic Foods and Café, Greenheart Organic Farms.',
      ethnic: 'Al Adil Supermarket (nationwide Indian spice chain), 1004 Gourmet (Asian specialty supermarket).'
    },
    faithCommunities: {
      hindu: {
        centers: 'BAPS Hindu Mandir Abu Dhabi (grand hand-carved stone temple inaugurated in 2024), Hindu Temple Dubai in Jebel Ali, and the historic Krishna Temple in Bur Dubai.',
        festivals: 'Grand Diwali celebrations with tens of thousands of celebrants in Bur Dubai and Abu Dhabi.'
      },
      muslim: {
        centers: 'Grand Sheikh Zayed Mosque (Abu Dhabi), Jumeirah Mosque (Dubai), and thousands of beautiful neighborhood mosques with adhan (call to prayer) broadcast daily.',
        festivals: 'Public holidays for Eid al-Fitr, Eid al-Adha, Islamic New Year, and Prophet’s Birthday. Majestic Ramadan tents and community Iftars.'
      },
      christian: {
        centers: 'St. Mary’s Catholic Church (Dubai), St. Joseph’s Cathedral (Abu Dhabi), and the Jebel Ali Worship Village hosting dozens of international denominations.',
        taxAlert: 'Zero Income / Church Tax: 100% tax-free income in the UAE.'
      },
      sikh: {
        centers: 'Guru Nanak Darbar Dubai in Jebel Ali (the largest Gurdwara in the Gulf region). Serves free Langar to thousands of residents and tourists of all backgrounds daily.'
      },
      jewish: {
        centers: 'Thriving community following the Abraham Accords. Synagogues in Dubai and Abu Dhabi, the Moses Ben Maimon Synagogue at the Abrahamic Family House (Abu Dhabi), and certified Kosher catering.'
      },
      buddhist: {
        centers: 'Meditation and Buddhist fellowship centers recognized in Dubai and Abu Dhabi.'
      },
      secular: {
        centers: 'Massive cosmopolitan expat community (over 85% of population are expats). InterNations Dubai, sports leagues, and desert safari clubs.'
      }
    }
  },

  singapore: {
    countryId: 'singapore',
    countryName: 'Singapore',
    flag: '🇸🇬',
    familyRegulations: [
      {
        title: '1. Primary 1 School Registration Phase 3',
        desc: 'Children of Employment Pass holders register in Phase 3 of the Ministry of Education (MOE) primary school registration, where public school seats are limited. Many expats opt for international schools.'
      },
      {
        title: '2. Mandatory Diphtheria & Measles Vaccination',
        desc: 'Foreign-born children under 12 must submit certified vaccination records to the Health Promotion Board (HPB) for verification before their Dependant\'s Pass (DP) can be issued.'
      },
      {
        title: '3. Domestic Helper (MDW) Support',
        desc: 'Over 50% of expat families with young children employ a full-time live-in Migrant Domestic Worker (MDW / helper) at affordable statutory rates (~SGD $600–$900/month plus levy).'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Choping with Tissue Packets',
        desc: 'At hawker centres and food courts, patrons reserve empty tables by leaving a packet of tissue paper or an umbrella on the seat. Always look for "choped" seats before sitting down.'
      },
      {
        title: 'Strict Civic Fines ("The Fine City")',
        desc: 'Strict fines apply for littering ($300+), chewing gum importation, smoking outside yellow boxes, or eating/drinking on MRT trains and stations ($500).'
      },
      {
        title: 'Multiracial & Religious Harmony',
        desc: 'Singapore rigorously protects harmony between Chinese, Malay, Indian, and Eurasian communities. Racial or religious slurs are treated as severe criminal offenses.'
      }
    ],
    hiddenIngredients: [
      { term: 'Belacan (Shrimp Paste)', en: 'Pungent fermented shrimp paste used in almost all local sambal chili sauces, fried kway teow, and vegetable stir-fries' },
      { term: 'Ikan Bilis', en: 'Dried anchovies used in soup stocks and Nasi Lemak garnishes' },
      { term: 'Lard (Zhu You)', en: 'Traditional pork fat used for frying hawker noodles like Char Kway Teow and Hokkien Mee' },
      { term: 'Oyster Sauce', en: 'Mollusc sauce used in leafy vegetable dishes (Kai Lan) even when labeled "vegetarian style"' }
    ],
    diningCulture: {
      overview: 'Hawker centres provide UNESCO-recognized culinary excellence with dedicated vegetarian and Halal-certified stalls side-by-side.',
      diningTip: 'Return your tray and crockery to the designated tray-return stations at hawker centres after eating—failure to do so incurs statutory fines.'
    },
    supermarkets: {
      mainstream: 'NTUC FairPrice, Cold Storage, Sheng Siong, Giant.',
      organic: 'SuperNature, Little Farms, Scoop Wholefoods.',
      ethnic: 'Mustafa Centre in Little India (open 24/7 with everything from Indian groceries to electronics); Chinatown wet markets; Tekka Centre.'
    },
    faithCommunities: {
      hindu: {
        centers: 'Historic Sri Mariamman Temple (Chinatown—Singapore\'s oldest), Sri Srinivasa Perumal Temple (Little India), and Sri Thendayuthapani Temple.',
        festivals: 'Thaipusam procession (a major national event) and Deepavali light-up in Little India.'
      },
      muslim: {
        centers: 'Sultan Mosque (Masjid Sultan in Kampong Glam), Masjid Jamae, and Masjid Malabar. MUIS is the official Islamic religious council overseeing Halal certification.',
        festivals: 'Hari Raya Puasa and Hari Raya Haji are official national public holidays with festive light-ups in Geylang Serai.'
      },
      christian: {
        centers: 'St. Andrew’s Cathedral, Cathedral of the Good Shepherd, and vibrant multi-campus churches like New Creation Church and City Harvest.',
        taxAlert: 'Zero Church Tax: Low progressive income tax with zero capital gains tax.'
      },
      sikh: {
        centers: 'Central Sikh Gurdwara (Towner Road) and Silat Road Gurdwara. Free daily Langar open to everyone.'
      },
      jewish: {
        centers: 'Chesed-El Synagogue and Maghain Aboth Synagogue in Waterloo Street, with Jacob Ballas Community Centre and kosher groceries.'
      },
      buddhist: {
        centers: 'Buddha Tooth Relic Temple (Chinatown) and Kong Meng San Phor Kark See Monastery (Bishan).'
      },
      secular: {
        centers: 'Singapore expat societies (The American Club, British Club, Swiss Club) and vibrant tech meetup groups on Meetup.com.'
      }
    }
  },

  japan: {
    countryId: 'japan',
    countryName: 'Japan',
    flag: '🇯🇵',
    familyRegulations: [
      {
        title: '1. Independent Walking to Public School',
        desc: 'In Japan, public elementary students walk to neighborhood schools independently in small groups wearing matching yellow hats and sturdy Randoseru backpacks. Parents driving children to school is strictly discouraged.'
      },
      {
        title: '2. Child Allowance (Jidou Teate)',
        desc: 'All resident foreign parents receive municipal child allowance payments (¥10,000 to ¥15,000/month per child) deposited three times a year.'
      },
      {
        title: '3. Gakudo & Hoikuen Childcare',
        desc: 'Municipal daycares (Hoikuen) and after-school clubs (Gakudo) provide care for children of working parents, prioritized through municipal points systems.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Quiet Public Transport & No Phone Calls',
        desc: 'Speaking on mobile phones inside trains and subways is strictly forbidden ("Manner Mode"). Keep conversations in a whisper.'
      },
      {
        title: 'Shoes Off (Genkan Protocol)',
        desc: 'Always remove shoes when stepping into homes, fitting rooms, traditional ryokans, and tatami dining areas. Turn shoes to face outward.'
      },
      {
        title: 'No Tipping Anywhere',
        desc: 'Tipping is not customary in Japan and can cause confusion or embarrassment. Outstanding service (Omotenashi) is included in the bill.'
      }
    ],
    hiddenIngredients: [
      { term: 'Dashi (出汁)', en: 'Fish broth made from dried bonito flakes (katsuobushi) or kelp; hidden in almost all soups, ramen, noodle sauces, and omelets' },
      { term: 'Mirin / Ryorishu (みりん / 料理酒)', en: 'Sweet rice wine used in Japanese marinades and teriyaki glazes (contains alcohol)' },
      { term: 'Gelatin / Nikujiru', en: 'Meat extract or gelatin added to puddings and savory baked items' },
      { term: 'Katsuobushi (鰹節)', en: 'Shaved bonito tuna flakes sprinkled on top of tofu, okonomiyaki, and salads' }
    ],
    diningCulture: {
      overview: 'Japanese cuisine is legendary, but hidden fish broth (Dashi) makes ordering tricky for strict vegetarians. Vegetarian/vegan restaurants are exploding in Tokyo and Kyoto.',
      diningTip: 'Always carry a printed or digital Japanese dietary card stating clearly: "Dashi mo dame desu" (No fish stock either).'
    },
    supermarkets: {
      mainstream: 'Aeon, Life Supermarket, Ito-Yokado, Seiyu, Don Quijote (cheap late-night snacks).',
      organic: 'Bio c’ Bon (French organic chain in Tokyo), Natural Lawson.',
      ethnic: 'Shin-Okubo in Tokyo for Asian and Halal grocers; National Azabu in Minami-Azabu (legendary expat supermarket with Western imports).'
    },
    faithCommunities: {
      hindu: {
        centers: 'ISKCON New Gaya Temple (Tokyo Funabori), Shirdi Sai Baba Temple (Tokyo), and vibrant Indian community hubs in Nishi-Kasai (Tokyo\'s "Little India").',
        festivals: 'Grand Diwali celebrations in Yokohama and Nishi-Kasai.'
      },
      muslim: {
        centers: 'Tokyo Camii (majestic Ottoman-style mosque in Yoyogi-Uehara, Tokyo), Asakusa Mosque, and Nagoya Mosque. Halal ramen shops and certified eateries in Shinjuku and Roppongi.',
        festivals: 'Community Eid prayers and open cultural days at Tokyo Camii.'
      },
      christian: {
        centers: 'Tokyo Union Church (Omotesando), St. Ignatius Church (Yotsuya—English, Spanish, and Tagalog Masses), and Franciscan Chapel Center (Roppongi).',
        taxAlert: 'Zero Church Tax: Japan has no church tax.'
      },
      sikh: {
        centers: 'Guru Nanak Darbar Gurdwara Tokyo (Kobe also hosts Japan\'s oldest Gurdwara). Daily Langar served every Sunday.'
      },
      jewish: {
        centers: 'Jewish Community of Japan (JCJ in Hiroo, Tokyo) and Chabad Tokyo Japan in Takanawa. Kosher catering available.'
      },
      buddhist: {
        centers: 'Historic Buddhist temples throughout Japan (Senso-ji, Meiji Jingu, Zen meditation centers in Kyoto and Kamakura). Regular Zen meditation (Zazen) sessions for foreigners.'
      },
      secular: {
        centers: 'Tokyo Gaijin Meetup, Tokyo Comedy Bar, and international language exchange cafés across Shibuya and Shinjuku.'
      }
    }
  },

  australia: {
    countryId: 'australia',
    countryName: 'Australia',
    flag: '🇦🇺',
    familyRegulations: [
      {
        title: '1. No Jab, No Pay / No Play Vaccination Mandate',
        desc: 'Government childcare fee subsidies (CCS) and preschool enrollments are strictly linked to the Australian Immunisation Register (AIR). Children must be fully vaccinated according to national schedules.'
      },
      {
        title: '2. SunSmart "No Hat, No Play" School Rule',
        desc: 'Due to intense UV radiation in the Southern Hemisphere, Australian primary schools enforce a strict "No Hat, No Play" rule requiring broad-brimmed hats outdoors year-round.'
      },
      {
        title: '3. Child Safety Restraints in Vehicles',
        desc: 'Children up to 7 years old must ride in an approved AS/NZS 1754 child restraint (capsule, baby seat, or booster). Penalties include steep fines and loss of demerit points.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Egalitarianism & The "Fair Go"',
        desc: 'Australian culture values modesty and mateship. Pretentiousness ("Tall Poppy Syndrome") is frowned upon. Everyone is addressed informally on a first-name basis ("G\'day", "No worries").'
      },
      {
        title: 'Beach & Outdoor Lifestyle',
        desc: 'Weekends revolve around outdoor sports, coastal walks, and community barbecues (barbies). Always swim between the red and yellow flags on patrolled surf beaches.'
      },
      {
        title: 'Strict Biosecurity at Border',
        desc: 'Australia enforces the strictest biosecurity inspection in the world. You must declare all food, plant seeds, and wooden items on your incoming passenger card or face instant $1,000+ fines.'
      }
    ],
    hiddenIngredients: [
      { term: 'Animal Rennet', en: 'Found in imported European cheeses (Australian cheddar clearly labels "vegetable rennet")' },
      { term: 'Beef / Mutton Tallow', en: 'Traditional animal dripping used in some older fish and chip shops and meat pie gravies' },
      { term: 'Gelatin', en: 'Pork/beef gelatin in confectionary and yogurt desserts' }
    ],
    diningCulture: {
      overview: 'Australia is a paradise for fresh produce, world-famous specialty coffee (Flat White culture), and extensive vegetarian, vegan, and Asian fusion dining.',
      diningTip: 'BYO (Bring Your Own) is a beloved tradition in many neighborhood restaurants where diners can bring their own wine for a modest corkage fee.'
    },
    supermarkets: {
      mainstream: 'Woolworths ("Woolies"), Coles, Aldi, IGA.',
      organic: 'Harris Farm Markets, Wholefoods House (Sydney).',
      ethnic: 'Parramatta and Harris Park in Sydney for Indian grocers; Box Hill in Melbourne and Haymarket in Sydney for giant Asian supermarkets.'
    },
    faithCommunities: {
      hindu: {
        centers: 'Sri Karphaga Vinayakar Temple (Sydney), Murugan Temple (Parramatta), BAPS Shri Swaminarayan Mandir (Western Sydney & Melbourne).',
        festivals: 'Harris Park Little India in Sydney and Federation Square in Melbourne host massive Diwali festivals with food stalls and fireworks.'
      },
      muslim: {
        centers: 'Auburn Gallipoli Mosque (Sydney—spectacular Ottoman design), Lakemba Mosque, and Melbourne Grand Mosque. AFIC oversees national Halal standards.',
        festivals: 'Lakemba Ramadan Night Markets draw over 1 million foodies annually. Grand Eid festival events.'
      },
      christian: {
        centers: 'Anglican and Catholic cathedrals (St. Mary\'s Cathedral Sydney), Hillsong Church, and international evangelical churches.',
        taxAlert: 'Zero Church Tax: Australia has no church tax.'
      },
      sikh: {
        centers: 'Gurdwara Sahib Glenwood (Sydney), Craigieburn Gurdwara (Melbourne). Turbans and Kirpans are protected under civil rights laws. Free Langar served daily.'
      },
      jewish: {
        centers: 'Large communities in Sydney (Bondi, Rose Bay, St Ives) and Melbourne (Caulfield, St Kilda). Abundant kosher butcheries, bakeries, and Jewish community centers.'
      },
      buddhist: {
        centers: 'Nan Tien Temple (Wollongong—largest Buddhist temple in the Southern Hemisphere) and Bodhinyana Monastery (WA).'
      },
      secular: {
        centers: 'InterNations chapters in Sydney, Melbourne, and Brisbane; local surf lifesaving clubs, and bushwalking societies.'
      }
    }
  },

  canada: {
    countryId: 'canada',
    countryName: 'Canada',
    flag: '🇨🇦',
    familyRegulations: [
      {
        title: '1. Canada Child Benefit (CCB)',
        desc: 'Eligible temporary residents (after 18 months in Canada) and permanent residents receive substantial tax-free monthly payments up to ~$620/month per child under 6 (~$520/month for ages 6–17).'
      },
      {
        title: '2. Public School District Boards',
        desc: 'Public schools are managed by district school boards (e.g. TDSB in Toronto, VSB in Vancouver). Registration requires child immunization records, birth certificate, and lease contract proof.'
      },
      {
        title: '3. Winter School & Snow Protocols',
        desc: 'Schools operate normal outdoor recess down to -20°C with wind chill ("Snow Day" procedures apply only during severe blizzards). Proper waterproof boots, thermal snowsuits, and tuques (beanies) are mandatory.'
      }
    ],
    culturalEtiquette: [
      {
        title: 'Polite & Welcoming Multiculturalism',
        desc: 'Canadians pride themselves on polite courtesy ("Sorry", holding doors for others, and thanking bus drivers). Diversity is celebrated as a cultural mosaic rather than a melting pot.'
      },
      {
        title: 'Tipping Standards (15% – 20%)',
        desc: 'Tipping at dine-in restaurants, food delivery, and hair salons is standard practice across all provinces (15% to 20%).'
      },
      {
        title: 'Winter Preparedness',
        desc: 'Winter tires (carrying the mountain snowflake peak symbol) are legally mandatory in Quebec and highly recommended across all Canadian provinces between December and March.'
      }
    ],
    hiddenIngredients: [
      { term: 'Lard / Shortening', en: 'Pork fat used in traditional French-Canadian meat pies (Tourtière) and some commercial pastries' },
      { term: 'Beef Stock', en: 'Gravy for Poutine in casual diners is traditionally made from beef or chicken broth (ask for vegetarian poutine gravy)' },
      { term: 'Gelatin', en: 'Common in commercial candies, marshmallows, and yogurts' }
    ],
    diningCulture: {
      overview: 'Exceptional international food culture in Toronto, Vancouver, and Montreal. Vegan, vegetarian, and Halal options are widespread.',
      diningTip: 'Prices shown on menus and in retail stores do NOT include sales tax (HST/GST, 5% to 15% added at checkout).'
    },
    supermarkets: {
      mainstream: 'Loblaws, Metro, Sobeys; No Frills and Food Basics for budget groceries; Real Canadian Superstore.',
      organic: 'Whole Foods Market, Farm Boy (Ontario favorite).',
      ethnic: 'T&T Supermarket (Canada\'s premier Asian chain), Nations Fresh Foods, Brampton & Mississauga grocers for Indian staples; Marché Adonis for Middle Eastern goods.'
    },
    faithCommunities: {
      hindu: {
        centers: 'BAPS Shri Swaminarayan Mandir (Toronto), Hindu Heritage Centre (Mississauga), and temples in Richmond BC and Calgary.',
        festivals: 'Brampton and Toronto host massive Diwali celebrations with fireworks and cultural performances.'
      },
      muslim: {
        centers: 'ISNA Islamic Centre of Canada (Mississauga), Toronto Islamic Centre, and Montreal Grand Mosque. Halal food is ubiquitous in all urban centers.',
        festivals: 'Lively community Eid prayers in convention centers and soccer stadiums.'
      },
      christian: {
        centers: 'Catholic, United Church of Canada, Anglican, and international evangelical churches in every community.',
        taxAlert: 'Zero Church Tax: Canada has no church tax.'
      },
      sikh: {
        centers: 'Ontario Khalsa Darbar (Dixie Gurdwara in Mississauga—one of North America\'s largest), Ross Street Gurdwara (Vancouver). Grand Vaisakhi parades in Surrey and Toronto draw over 500,000 attendees.'
      },
      jewish: {
        centers: 'Prominent Jewish community in Toronto (Bathurst Street corridor, North York) and Montreal (Côte Saint-Luc, Mile End) with kosher bakeries and community centers.'
      },
      buddhist: {
        centers: 'Cham Shan Temple (Thornhill ON) and International Buddhist Society (Richmond BC).'
      },
      secular: {
        centers: 'InterNations, Toronto Outdoor Club, Montreal language exchange groups, and community community centers.'
      }
    }
  }
};

// Helper to get complete cultural, dietary and faith bundle for any destination
export function getCountryCulturalBundle(countryId) {
  return COUNTRY_CULTURAL_DATA[countryId] || COUNTRY_CULTURAL_DATA.germany;
}
