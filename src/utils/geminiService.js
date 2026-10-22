// Client-side service to interact with backend & Gemini API with full GitHub Pages static fallback

export async function sendChatMessage(messages, userProfile, userApiKey) {
  // 1. Try local/deployed backend API first if reachable
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (userApiKey) headers['x-gemini-key'] = userApiKey;

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers,
      body: JSON.stringify({ messages, userProfile })
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (backendErr) {
    // Backend server not available (e.g. running statically on GitHub Pages)
  }

  // 2. If user provided a Gemini API Key, call Gemini API directly from browser
  if (userApiKey) {
    try {
      const profileContext = userProfile ? `
User Relocation Profile:
- Moving From: ${userProfile.origin || 'Not specified'}
- Moving To: ${userProfile.destinationCity || 'Target City'}, ${userProfile.destinationCountry || 'Target Country'}
- Persona: ${userProfile.persona || 'Bachelor'}
- Dietary Preference: ${userProfile.dietary || 'Vegetarian'}
- Religious / Faith: ${userProfile.faith || 'None'}
- Budget Level: ${userProfile.budgetTier || 'Moderate'}
` : '';

      const systemPrompt = `You are ExpatCompass AI, a world-class, empathetic, highly knowledgeable relocation specialist, immigration advisor, and local cultural expert.
You assist expats transitioning to their new home country.
${profileContext}

Guidelines:
1. Provide actionable, practical advice tailored to the user's destination, family status, dietary restrictions, and faith.
2. When answering questions regarding visas, rental contracts, legal quiet hours, healthcare, or customs, give realistic warnings and legal nuances.
3. Use formatted markdown with clear bullet points, bold highlights, and occasional emojis for readability.`;

      const contents = messages.map(m => ({
        role: m.sender === 'user' || m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(userApiKey)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return { reply: text, source: 'gemini-2.5-flash' };
        }
      }
    } catch (geminiErr) {
      console.warn('Direct Gemini API note:', geminiErr.message);
    }
  }

  // 3. Intelligent built-in relocation advice engine tailored to destination & persona
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
  const city = userProfile?.destinationCity || 'your destination';

  let simulatedReply = '';
  if (lastMessage.includes('vegetarian') || lastMessage.includes('halal') || lastMessage.includes('food') || lastMessage.includes('diet') || lastMessage.includes('jain')) {
    simulatedReply = `Here is essential dietary guidance for **${city}**:
- **Grocery Shopping**: Visit major supermarkets and specialty ethnic grocers for familiar pantry staples, certified ingredients, and fresh produce.
- **Hidden Ingredients**: Always inspect labels for hidden animal derivatives like gelatin, animal rennet, and animal broths.
- **Restaurant Card**: Use the translated communication flashcards in the *Dietary* tab of this app to show chefs and waitstaff your exact requirements.
- **Dining Apps**: Use **HappyCow** for vegetarian/vegan options and **Zabihah** for Halal dining.`;
  } else if (lastMessage.includes('house') || lastMessage.includes('apartment') || lastMessage.includes('rent')) {
    simulatedReply = `Key strategies for finding housing in **${city}**:
1. **Beware of Rental Scams**: Never transfer a deposit before inspecting the property and signing a formal contract.
2. **Prepare Your Tenant Dossier**:
   - 3 recent payslips or formal employment contract
   - Credit rating certificate / credit score
   - Passport & visa copies
   - Polite cover letter introducing yourself and your family.
3. **Address Registration**: Confirm the landlord permits official municipal address registration at the property.`;
  } else if (lastMessage.includes('kid') || lastMessage.includes('school') || lastMessage.includes('family')) {
    simulatedReply = `Relocating with family to **${city}**:
- **School Admissions**: Public schools assign spots based on your registered residential zone. Assemble apostilled birth certificates and pediatric vaccination records.
- **Healthcare**: Verify whether dependents are co-insured under statutory schemes or require private health policies.
- **Safety**: Explore family-friendly districts with parks, pediatric clinics, and reputable schools.`;
  } else {
    simulatedReply = `I am your **ExpatCompass AI Relocation Copilot** for **${city}**!

I can help guide you on:
- 📑 **Visa Pathways, Hague Apostilles & Consular Appointments**
- 💰 **Relocation Budgets & Sunk Upfront Costs**
- 🏠 **Rental Housing, Leases & Scam Protection**
- 🥗 **Dietary Guidelines, Hidden Ingredients & Flashcards**
- 🏥 **Healthcare Systems, Health Insurance & Pediatric Care**
- 🚦 **Driving License Conversion & Public Transit Smartcards**

*Enter any relocation question or add a Gemini API Key in Settings for live reasoning.*`;
  }

  return {
    reply: simulatedReply,
    source: 'built-in-relocation-engine'
  };
}

export async function fetchCustomDestinationData(country, city, persona, dietary, faith, userApiKey) {
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (userApiKey) headers['x-gemini-key'] = userApiKey;

    const response = await fetch('/api/generate-custom-city', {
      method: 'POST',
      headers,
      body: JSON.stringify({ country, city, persona, dietary, faith })
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // Backend offline / static hosting
  }

  return {
    cityName: city,
    countryName: country,
    overview: `Comprehensive settlement intelligence for ${city}, ${country}.`,
    generatedAt: new Date().toISOString()
  };
}
