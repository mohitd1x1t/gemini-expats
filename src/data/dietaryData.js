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
    },
    kosher: {
      lang: 'German',
      title: 'Koschere Karte',
      text: 'Ich ernähre mich koscher. Ich esse kein Schweinefleisch, keine Schalentiere und trenne Fleisch- und Milchprodukte strikt. Bieten Sie koschere oder rein vegetarische Speisen an?',
      phonetic: 'Ikh er-nay-reh mikh koh-sher...'
    }
  },
  uk: {
    vegetarian: {
      lang: 'English (UK)',
      title: 'Vegetarian Dietary Card',
      text: 'I am strictly vegetarian. I do not eat meat, poultry, fish, seafood, gelatin, or animal rennet. Could you please confirm if this dish is prepared without animal broths, beef dripping, or parmesan made with calf rennet? Thank you!',
      phonetic: 'Clear British English inquiry for restaurant and pub staff.'
    },
    vegan: {
      lang: 'English (UK)',
      title: 'Vegan Dietary Card',
      text: 'I follow a 100% plant-based vegan diet. I do not consume meat, poultry, fish, dairy, cheese, butter, eggs, or honey. Please ensure no dairy or egg wash is used. Thank you!',
      phonetic: 'Clear British English dietary request.'
    },
    halal: {
      lang: 'English (UK)',
      title: 'Halal Dining Card',
      text: 'I only consume Halal food. I cannot eat pork, bacon, gelatin, or any dishes cooked with alcohol or cooking wine. Is your chicken or beef certified Halal, or do you have a vegetarian option prepared without alcohol?',
      phonetic: 'Clear inquiry on Halal certification and alcohol-free cooking.'
    },
    jain: {
      lang: 'English (UK)',
      title: 'Strict Vegetarian (Jain) Card',
      text: 'I follow a strict Jain vegetarian diet. I do not eat meat, fish, eggs, gelatin, or any underground root vegetables including onions, garlic, potatoes, and carrots. Can this dish be prepared without onion and garlic? Thank you!',
      phonetic: 'Specific dietary allergy and religious preference statement.'
    },
    kosher: {
      lang: 'English (UK)',
      title: 'Kosher Dietary Card',
      text: 'I keep strictly Kosher. I do not consume pork, shellfish, or mix dairy and meat products. Could you please advise on vegetarian or kosher-suitable options?',
      phonetic: 'Inquiry regarding kashrut dietary compatibility.'
    }
  },
  netherlands: {
    vegetarian: {
      lang: 'Dutch',
      title: 'Vegetarische Kaart',
      text: 'Ik ben vegetariër. Ik eet GEEN vlees, GEEN kip, GEEN vis en GEEN zeevruchten. Bevat dit gerecht vleesbouillon of dierlijke gelatine? Alvast hartelijk bedankt!',
      phonetic: 'Ik ben veh-geh-tah-ree-er. Ik ayt ghayn vlais...'
    },
    vegan: {
      lang: 'Dutch',
      title: 'Vegane Kaart',
      text: 'Ik eet 100% plantaardig (veganistisch). Ik eet GEEN vlees, vis, zuivel, kaas, boter, eieren of honing. Is dit gerecht volledig veganistisch?',
      phonetic: 'Ik ayt plan-taar-dekh...'
    },
    halal: {
      lang: 'Dutch',
      title: 'Halal Kaart',
      text: 'Ik eet uitsluitend Halal. Ik eet GEEN varkensvlees of gelatine en GEEN gerechten bereid met alcohol of kookwijn. Is dit gerecht halal?',
      phonetic: 'Ik ayt out-sloy-tend hah-lahl...'
    },
    jain: {
      lang: 'Dutch',
      title: 'Jain Vegetarische Kaart',
      text: 'Ik ben strikt vegetariër (Jain). Ik eet geen vlees, vis, eieren en geen uien, knoflook of wortelgroenten. Kan dit gerecht zonder ui en zonder knoflook gemaakt worden?',
      phonetic: 'Zon-der oy en zon-der knof-look...'
    }
  },
  canada: {
    vegetarian: {
      lang: 'English & French (Canada)',
      title: 'Vegetarian Card / Carte Végétarienne',
      text: 'I am strictly vegetarian / Je suis végétarien(ne). I do not consume meat, poultry, fish, gelatin, or meat broths. Pas de viande, volaille, poisson ni bouillon animal. Merci beaucoup!',
      phonetic: 'Je suis végétarien(ne). Pas de viande ni de bouillon.'
    },
    vegan: {
      lang: 'English & French (Canada)',
      title: 'Vegan Card / Carte Végétalienne',
      text: 'I follow a 100% vegan diet / Je suis végétalien(ne). No meat, dairy, cheese, eggs, or animal derivatives. Aucun produit d\'origine animale (lait, fromage, beurre, oeufs). Thank you!',
      phonetic: 'Je suis végétalien(ne). Aucun produit d\'origine animale.'
    },
    halal: {
      lang: 'English & French (Canada)',
      title: 'Halal Card / Carte Halal',
      text: 'I eat strictly Halal. No pork, bacon, gelatin, or food prepared with cooking wine or alcohol. Is this meat certified Halal? Cette viande est-elle certifiée Halal? Merci!',
      phonetic: 'Est-ce certifié Halal? Pas de porc ni d\'alcool.'
    },
    jain: {
      lang: 'English & French (Canada)',
      title: 'Jain Vegetarian Card',
      text: 'I am a strict Jain vegetarian. No meat, fish, eggs, and strictly no root vegetables (no onions, garlic, potatoes). Sans oignons ni ail s\'il vous plaît. Thank you!',
      phonetic: 'Sans oignon ni ail s\'il vous plaît.'
    }
  },
  usa: {
    vegetarian: {
      lang: 'English (US)',
      title: 'Vegetarian Dietary Card',
      text: 'I am strictly vegetarian. I do not eat meat, poultry, fish, shellfish, gelatin, or animal rennet. Please ensure no chicken or beef broth, bacon fat, or animal stock is used in this dish. Thank you!',
      phonetic: 'Standard American English dietary instruction for waitstaff.'
    },
    vegan: {
      lang: 'English (US)',
      title: 'Strict Vegan Card',
      text: 'I follow a 100% plant-based vegan diet. No meat, dairy, cheese, butter, eggs, honey, or animal fats. Is this dish completely free of animal products?',
      phonetic: 'Standard plant-based dietary specification.'
    },
    halal: {
      lang: 'English (US)',
      title: 'Halal Dietary Card',
      text: 'I adhere to a strict Halal diet. I do not consume pork, bacon, lard, or any food cooked with wine or alcohol. Is your meat Halal certified, or could you recommend an alcohol-free vegetarian option?',
      phonetic: 'Inquiry on Halal certification and alcohol-free cooking.'
    },
    jain: {
      lang: 'English (US)',
      title: 'Jain Vegetarian Card',
      text: 'I am a strict Jain vegetarian. I do not consume meat, fish, eggs, gelatin, or underground root vegetables (no onions, garlic, potatoes, or carrots). Can this dish be prepared without onion and garlic? Thank you!',
      phonetic: 'Religious dietary specification: no meat, eggs, onion, or garlic.'
    },
    kosher: {
      lang: 'English (US)',
      title: 'Kosher Dietary Card',
      text: 'I observe Kosher dietary laws. I do not consume non-kosher meats, pork, shellfish, or mix meat and dairy. Could you please advise on kosher-certified or suitable vegetarian selections?',
      phonetic: 'Kashrut dietary compatibility check.'
    }
  },
  uae: {
    vegetarian: {
      lang: 'Arabic & English (UAE)',
      title: 'بطاقة نباتي (Vegetarian Card)',
      text: 'أنا شخص نباتي. لا أتناول اللحوم أو الدواجن أو المأكولات البحرية أو الجيلاتين أو مرق اللحم. I am strictly vegetarian. No meat, chicken, fish, seafood, or animal broth. شكراً جزيلاً!',
      phonetic: 'Ana nabati. La atanawal al-luhum aw al-dajaj aw al-samak.'
    },
    vegan: {
      lang: 'Arabic & English (UAE)',
      title: 'بطاقة نباتي صرف (Vegan Card)',
      text: 'أنا نباتي صرف (فيجان). لا أتناول أي منتجات حيوانية، بما في ذلك الحليب أو الجبن أو البيض أو الزبدة أو العسل. I eat 100% plant-based vegan food: no dairy, cheese, eggs, or butter. شكراً!',
      phonetic: 'Ana nabati sarf. La atanawal ayy muntajat hayawaniyyah.'
    },
    halal: {
      lang: 'Arabic & English (UAE)',
      title: 'حلال (Halal Standard in UAE)',
      text: 'جميع اللحوم في دولة الإمارات حلال وفقاً للوائح هيئة الرقابة الغذائية. All meat served in UAE restaurants is strictly 100% Halal certified by law. Pork is strictly segregated in dedicated non-Muslim sections.',
      phonetic: 'Jamee\' al-luhum halal bi-hukm al-qanun.'
    },
    jain: {
      lang: 'Arabic & English (UAE)',
      title: 'بطاقة نباتي جايني (Jain Card)',
      text: 'أنا نباتي جايني. لا آكل اللحوم أو الأسماك أو البيض، ولا أتناول البصل أو الثوم أو البطاطس. I am strict Jain vegetarian: no meat, eggs, and strictly no onion, garlic, or root vegetables. شكراً!',
      phonetic: 'Bidoon basal wa bidoon thawm min fadlik.'
    }
  },
  singapore: {
    vegetarian: {
      lang: 'English & Mandarin (新加坡素食卡)',
      title: 'Vegetarian Card / 素食卡',
      text: '我是素食者。我不吃任何肉类、家禽、海鲜、动物明胶或肉汤。请确保食物中没有虾米、鱼露或猪油。I am strictly vegetarian. No meat, fish, lard (猪油), dried shrimp (虾米), or belacan (shrimp paste). 谢谢！',
      phonetic: 'Wǒ shì sù shí zhě. Wǒ bù chī ròu, hǎixiān, zhūyóu, xiāmǐ.'
    },
    vegan: {
      lang: 'English & Mandarin (纯素卡)',
      title: 'Strict Vegan Card / 纯素卡',
      text: '我吃纯素。我不吃肉、海鲜、蛋、奶制品（牛奶、奶酪、黄油）或蜂蜜。炒菜请不要放猪油或牛油。I am 100% vegan: no dairy, eggs, honey, or animal fats. 谢谢！',
      phonetic: 'Wǒ chī chún sù. Bù chī dàn, nǎi, zhūyóu.'
    },
    halal: {
      lang: 'English & Malay (Kad Halal)',
      title: 'Halal Card / Kad Halal',
      text: 'Saya hanya makan makanan Halal. Tiada daging babi, gelatin babi, atau arak dalam masakan. Adakah makanan ini diperakui Halal oleh MUIS? I only eat Halal-certified food.',
      phonetic: 'MUIS Halal certification verification.'
    },
    jain: {
      lang: 'English & Mandarin (严格耆那教素食)',
      title: 'Jain Vegetarian Card / 严格耆那教素食',
      text: '我是耆那教素食者。我不吃肉、鱼、蛋、五辛（大蒜、葱、洋葱）以及根茎类蔬菜（马铃薯、胡萝卜）。可以准备无葱无蒜的菜肴吗？No onion, no garlic, no root vegetables. 谢谢！',
      phonetic: 'Wú cōng wú suàn, bù chī gēnjīng cài.'
    }
  },
  australia: {
    vegetarian: {
      lang: 'English (Australia)',
      title: 'Vegetarian Dietary Card',
      text: 'I am strictly vegetarian. I do not consume meat, poultry, seafood, gelatin, or animal rennet. Please confirm no chicken/beef stock or bacon is used in the preparation. Thank you!',
      phonetic: 'Standard Australian English dietary inquiry.'
    },
    vegan: {
      lang: 'English (Australia)',
      title: 'Vegan Dietary Card',
      text: 'I eat a 100% plant-based vegan diet. No meat, dairy, eggs, butter, or honey. Is this dish fully vegan-friendly? Thanks!',
      phonetic: 'Australian plant-based dietary request.'
    },
    halal: {
      lang: 'English (Australia)',
      title: 'Halal Dietary Card',
      text: 'I eat Halal only. No pork, bacon, gelatin, or cooking alcohol. Is your meat Halal certified, or could you recommend a seafood/vegetarian option prepared without wine?',
      phonetic: 'Halal certification and alcohol inquiry.'
    },
    jain: {
      lang: 'English (Australia)',
      title: 'Jain Vegetarian Card',
      text: 'I am a strict Jain vegetarian. No meat, seafood, eggs, or underground root vegetables (no onion, garlic, or potatoes). Can this dish be cooked without onion and garlic? Thank you!',
      phonetic: 'No meat, eggs, onion, or garlic.'
    }
  },
  japan: {
    vegetarian: {
      lang: 'Japanese',
      title: 'ベジタリアン用カード (Vegetarian Card)',
      text: '私はベジタリアンです。肉、鶏肉、魚、魚介類を一切食べることができません。鰹節（かつおぶし）や魚の出汁（だし）、コンソメスープも使わないでいただけますか？よろしくお願いします。',
      phonetic: 'Watashi wa bejitarian desu. Niku, toriniku, sakana, gyokairui wo issai taberu koto ga dekimasen. Dashi mo dame desu.'
    },
    vegan: {
      lang: 'Japanese',
      title: 'ヴィーガン用カード (Vegan Card)',
      text: '私は完全菜食主義者（ヴィーガン）です。肉、魚、卵、乳製品（牛乳・チーズ・バター）、蜂蜜を一切口にしません。出汁（だし）やラードも使っていませんか？よろしくお願いします。',
      phonetic: 'Watashi wa vīgan desu. Tamago, nyūseihin, dashi mo dame desu.'
    },
    halal: {
      lang: 'Japanese',
      title: 'ハラール用カード (Halal Card)',
      text: '私はイスラム教徒（ムスリム）です。豚肉、ポークエキス、ラード、および料理酒やみりんなどのアルコール類を口にすることができません。ハラール対応のメニューはありますか？',
      phonetic: 'Watashi wa musurimu desu. Butaniku, mirin, sake wa kuchi ni suru koto ga dekimasen.'
    },
    jain: {
      lang: 'Japanese',
      title: 'ジャイナ教素食カード (Jain Vegetarian Card)',
      text: '私はジャイナ教のベジタリアンです。肉、魚、卵のほか、玉ねぎ、ニンニク、生姜、じゃがいもなどの根菜類も食べられません。玉ねぎ・ニンニク抜きで調理可能ですか？',
      phonetic: 'Tamanegi, ninniku nuki de chōri dekimasu ka?'
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
