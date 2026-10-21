// Dietary and Faith Data & Restaurant Translation Flashcards

export const DIETARY_PREFERENCES = [
  {
    id: 'vegetarian',
    name: 'Vegetarian (Lacto-Ovo / Lacto)',
    icon: '🥗',
    desc: 'No meat, poultry, fish, seafood, or slaughter by-products (gelatin, animal rennet). Milk and dairy are consumed.',
    keyAlerts: [
      'Watch for animal rennet (Lab / Présure) in hard cheeses like Parmesan, Grana Padano, and Pecorino.',
      'Check for hidden gelatin in gummy candies, yogurt desserts, and marshmallows.',
      'In East Asia, watch out for fish broth (Dashi) and oyster sauce in vegetable stir fries.'
    ]
  },
  {
    id: 'vegan',
    name: 'Strict Vegan',
    icon: '🌱',
    desc: '100% plant-based: no meat, dairy, eggs, honey, gelatin, or animal derived food additives.',
    keyAlerts: [
      'Look for the official European V-Label or Vegan Society sunflower trademark.',
      'Watch for whey powder (Molkenerzeugnis) and casein in bread and baked goods.',
      'Look for milk fat or milk solids in dark chocolate.'
    ]
  },
  {
    id: 'jain',
    name: 'Jain Vegetarian',
    icon: '☸️',
    desc: 'Strict vegetarian with NO root vegetables (onions, garlic, potatoes, carrots, radishes) and no eggs or gelatin.',
    keyAlerts: [
      'Almost all European soups and vegetable stocks use onions, leeks, or carrots as base mirepoix/Suppengrün.',
      'Indian restaurants in major cities (London, Frankfurt, New York, Dubai, Singapore) often offer dedicated "No onion, no garlic (Jain)" menus upon request.',
      'Cook mostly at home or order customized dishes from Indian/Asian eateries.'
    ]
  },
  {
    id: 'halal',
    name: 'Halal',
    icon: '🌙',
    desc: 'Meat prepared according to Islamic dietary law; strict prohibition on pork, pork by-products, and alcohol/cooking wines.',
    keyAlerts: [
      'Check for cooking wines (Mirin, white/red wine, rum) in sauces, pasta dishes, and European stews.',
      'Avoid pork lard (Schmalz, Lard, Strutto) in pastries, baked beans, and refried beans.',
      'In the UAE and Middle East, 100% of meat is Halal by regulation. In Europe/UK/US, look for Turkish, Arab, or Halal-certified butcheries and eateries.'
    ]
  },
  {
    id: 'kosher',
    name: 'Kosher',
    icon: '✡️',
    desc: 'Food conforming to Jewish dietary laws (kashrut); separation of dairy and meat, certified meats, no shellfish or pork.',
    keyAlerts: [
      'Look for Kosher certification symbols (OU, Star-K, OK, Chof-K, Badatz, Beth Din).',
      'Major metropolitan areas (NYC, London Golders Green/Stamford Hill, Paris Marais, Antwerp, Berlin) have dedicated kosher bakeries, supermarkets, and restaurants.'
    ]
  },
  {
    id: 'non_veg',
    name: 'Non-Vegetarian / Omnivore',
    icon: '🍖',
    desc: 'Eats all meats, poultry, seafood, and vegetables without strict restrictions.',
    keyAlerts: [
      'Try famous regional specialties with confidence.',
      'Check food hygiene ratings in restaurants (e.g. Scores on the Doors in UK, NYC Health letter grades).'
    ]
  }
];

export const RESTAURANT_FLASHCARDS = {
  germany: {
    vegetarian: {
      lang: 'German',
      title: 'Vegetarische Karte',
      text: 'Ich bin Vegetarier(in). Ich esse KEIN Fleisch, KEIN Geflügel, KEINEN Fisch und KEINE Meeresfrüchte. Bitte verwenden Sie auch keine tierische Gelatine, kein tierisches Lab und keine Fleisch- oder Hühnerbrühe. Vielen Dank für Ihr Verständnis!',
      phonetic: 'Ikh bin veh-geh-tah-ree-er. Ikh eh-seh kyne flysh...'
    },
    vegan: {
      lang: 'German',
      title: 'Vegane Karte',
      text: 'Ich ernähre mich rein pflanzlich (vegan). Ich esse KEIN Fleisch, KEINEN Fisch, KEINE Eier, KEINE Milchprodukte, KEINEN Käse und KEINE Butter oder Honig. Ist dieses Gericht 100% vegan?',
      phonetic: 'Ikh er-nay-reh mikh ryne pflahnts-likh...'
    },
    halal: {
      lang: 'German',
      title: 'Halal Karte',
      text: 'Ich esse nur Halal-Essen. Ich darf KEIN Schweinefleisch (auch keinen Speck oder Schmalz) und KEINEN Alkohol (auch keinen Weißwein oder Rum im Essen) verzehren. Ist das Fleisch hier Halal-zertifiziert?',
      phonetic: 'Ikh eh-seh noor hah-lahl eh-sen...'
    },
    jain: {
      lang: 'German',
      title: 'Strikte vegetarische (Jain) Karte',
      text: 'Ich bin strikter Vegetarier (Jain). Ich esse KEIN Fleisch, KEINEN Fisch, KEINE Eier und KEINE Wurzelgemüse wie Zwiebeln, Knoblauch, Kartoffeln oder Karotten. Kann dieses Gericht ohne Zwiebeln und ohne Knoblauch zubereitet werden?',
      phonetic: 'Ikh bin shtrik-ter veh-geh-tah-ree-er...'
    }
  },
  netherlands: {
    vegetarian: {
      lang: 'Dutch',
      title: 'Vegetarische Kaart',
      text: 'Ik ben vegetariër. Ik eet GEEN vlees, GEEN kip, GEEN vis en GEEN zeevruchten. Bevat dit gerecht vleesbouillon of dierlijke gelatine? Alvast hartelijk bedankt!',
      phonetic: 'Ik ben veh-geh-tah-ree-er. Ik ayt ghayn vlais...'
    },
    halal: {
      lang: 'Dutch',
      title: 'Halal Kaart',
      text: 'Ik eet uitsluitend Halal. Ik eet GEEN varkensvlees of gelatine en GEEN gerechten bereid met alcohol of kookwijn. Is dit gerecht halal?',
      phonetic: 'Ik ayt out-sloy-tend hah-lahl...'
    }
  },
  japan: {
    vegetarian: {
      lang: 'Japanese',
      title: 'ベジタリアン用カード (Vegetarian Card)',
      text: '私はベジタリアンです。肉、鶏肉、魚、魚介類を一切食べることができません。鰹節（かつおぶし）や魚の出汁（だし）、コンソメスープも使わないでいただけますか？よろしくお願いします。',
      phonetic: 'Watashi wa bejitarian desu. Niku, toriniku, sakana, gyokairui wo issai taberu koto ga dekimasen. Dashi mo dame desu.'
    },
    halal: {
      lang: 'Japanese',
      title: 'ハラール用カード (Halal Card)',
      text: '私はイスラム教徒（ムスリム）です。豚肉、ポークエキス、ラード、および料理酒やみりんなどのアルコール類を口にすることができません。ハラール対応のメニューはありますか？',
      phonetic: 'Watashi wa musurimu desu. Butaniku, mirin, sake wa kuchi ni suru koto ga dekimasen.'
    }
  },
  france: {
    vegetarian: {
      lang: 'French',
      title: 'Carte Végétarienne',
      text: 'Je suis végétarien(ne). Je ne mange ni viande, ni volaille, ni poisson, ni fruits de mer. Veuillez vous assurer que le plat ne contient pas de bouillon de viande ou de gélatine. Merci beaucoup !',
      phonetic: 'Zhuh swee veh-zheh-tah-ree-an...'
    },
    halal: {
      lang: 'French',
      title: 'Carte Halal',
      text: 'Je mange uniquement de la nourriture Halal. Je ne consomme pas de porc, ni de saindoux, ni d’alcool (même dans les sauces ou cuissons). Cette viande est-elle certifiée Halal ?',
      phonetic: 'Zhuh mahnzh ew-neek-mahn duh lah noo-ree-toor hah-lahl...'
    }
  },
  brazil: {
    vegetarian: {
      lang: 'Portuguese',
      title: 'Cartão Vegetariano',
      text: 'Sou vegetariano(a). Não como carne bovina, frango, peixe nem presunto. Por favor, certifique-se de que a comida não contém caldo de galinha ou de carne, banha de porco nem gelatina. O feijão tem bacon? Muito obrigado(a)!',
      phonetic: 'Soe veh-zheh-tah-ree-ah-noo. Nown koh-moo kahr-nee boh-vee-nah...'
    },
    vegan: {
      lang: 'Portuguese',
      title: 'Cartão Vegano',
      text: 'Sou vegano(a). Não consumo nenhum ingrediente de origem animal: sem carne, peixe, leite, queijo, manteiga, ovos ou mel. O prato foi feito sem banha de porco e sem manteiga? Muito obrigado(a)!',
      phonetic: 'Soe veh-gah-noo. Nown kohn-soo-moo nay-nyoom een-greh-dee-en-tee...'
    },
    halal: {
      lang: 'Portuguese',
      title: 'Cartão Halal',
      text: 'Sigo uma alimentação Halal. Não posso consumir carne de porco (nem bacon, presunto ou banha) e nenhum molho ou prato preparado com álcool. Essa carne é certificada Halal?',
      phonetic: 'See-goo oo-mah ah-lee-men-tah-sown Hah-lahl...'
    },
    jain: {
      lang: 'Portuguese',
      title: 'Cartão Vegetariano Estrito (Jain)',
      text: 'Sou vegetariano estrito (Jain). Não como carne, peixe, ovos e nenhum legume de raiz como cebola, alho, batata e cenoura. É possível preparar um prato sem cebola e sem alho? Muito obrigado!',
      phonetic: 'Soe veh-zheh-tah-ree-ah-noo eh-stree-too...'
    }
  }
};

export const FAITH_GUIDES = [
  {
    id: 'hindu',
    name: 'Hinduism',
    icon: '🕉️',
    overview: 'Expats find thriving communities, mandirs, and cultural organizations across major global hubs.',
    festivalGuide: 'Diwali and Holi are celebrated with massive gatherings in London (Trafalgar Square), New York, Toronto, Berlin, and Singapore. Many local temples organize communal Navratri Garba and Lakshmi Puja.',
    dietaryNotes: 'Strict vegetarianism and avoidance of beef. Access to pure vegetarian (sattvic) grocery items (atta, dals, ghee, paneer) is easy in Asian/Indian supermarkets.',
    communityKeywords: ['BAPS Swaminarayan Mandir', 'ISKON', 'Hindu Forum', 'Indian Expat Association']
  },
  {
    id: 'muslim',
    name: 'Islam',
    icon: '☪️',
    overview: 'Mosques, community centers, and halal provisions are present in every major expat city globally, with widespread infrastructure in the UAE, UK, Germany, Canada, and Singapore.',
    festivalGuide: 'Eid al-Fitr and Eid al-Adha bring vibrant community gatherings and special morning prayers in convention centers and grand mosques. During Ramadan, iftar gatherings are hosted in local mosques and community centers.',
    dietaryNotes: 'Halal certification is vital. In non-Muslim majority nations, Turkish, Arab, and South Asian grocers are the cornerstone for certified meat and spices.',
    communityKeywords: ['Central Mosque', 'Islamic Cultural Center', 'Halal Food Festival', 'Muslim Professional Network']
  },
  {
    id: 'christian',
    name: 'Christianity',
    icon: '✝️',
    overview: 'Abundant English-speaking international churches, Anglican, Catholic, Baptist, Pentecostal, and Lutheran congregations in all countries.',
    festivalGuide: 'Christmas and Easter are official public holidays in North America, Europe, UK, and Australia with historic church services and festive holiday markets.',
    dietaryNotes: 'Lent fasting and Friday fish traditions practiced by observant Catholic and Orthodox expats.',
    communityKeywords: ['International Baptist Church', 'Cathedral Services', 'English Catholic Parish', 'Alpha Course']
  },
  {
    id: 'sikh',
    name: 'Sikhism',
    icon: '☬',
    overview: 'Gurdwaras provide an unmatched anchor of community warmth, daily Langar (free vegetarian community kitchen open to everyone), and spiritual solace for expats anywhere in the world.',
    festivalGuide: 'Vaisakhi parades (Nagar Kirtan) and Gurpurab celebrations draw hundreds of thousands in the UK, Canada, Australia, and the US.',
    dietaryNotes: 'Langar serves delicious, hygienic, free lacto-vegetarian meals open to all humanity regardless of religion or nationality.',
    communityKeywords: ['Gurdwara Sahib', 'Langar Kitchen', 'Sikh Council', 'Khalsa Aid']
  },
  {
    id: 'jewish',
    name: 'Judaism',
    icon: '✡️',
    overview: 'Strong, organized communities with Synagogues, Chabad Houses, and JCCs (Jewish Community Centers) across North America, Europe, and beyond.',
    festivalGuide: 'Rosh Hashanah, Yom Kippur, Hanukkah, and Passover are warmly observed with community Seders and gatherings. Chabad Houses welcome travelers and expats worldwide.',
    dietaryNotes: 'Strict Kosher certification (Kashrut) and Shabbat services.',
    communityKeywords: ['Chabad House', 'Jewish Community Center (JCC)', 'Beth Din', 'Kosher Delicatessen']
  },
  {
    id: 'buddhist',
    name: 'Buddhism',
    icon: '☸️',
    overview: 'Meditation centers, Zen centers, Theravada and Mahayana temples are widely established across the globe.',
    festivalGuide: 'Vesak (Buddha Day) celebrated with lantern festivals, meditation retreats, and temple community gatherings.',
    dietaryNotes: 'Many Buddhists practice vegetarian or vegan diets.',
    communityKeywords: ['Buddhist Meditation Centre', 'Zen Fellowship', 'Fo Guang Shan', 'Vipassana Community']
  },
  {
    id: 'secular',
    name: 'Secular / Agnostic / Atheist',
    icon: '🕊️',
    overview: 'Expats can easily connect via secular international hubs like InterNations, Meetup groups (hiking, board games, language exchanges), and Toastmasters.',
    communityKeywords: ['InterNations', 'Meetup.com Expat Groups', 'Rotary Club', 'Language Exchange Cafés']
  }
];
