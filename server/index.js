import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ExpatCompass AI Backend'
  });
});

// Helper to get GoogleGenAI client
function getGenAIClient(req) {
  const apiKey = req.headers['x-gemini-key'] || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

// Interactive Expat Copilot Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userProfile } = req.body;
    const client = getGenAIClient(req);

    const profileContext = userProfile ? `
User Relocation Profile:
- Moving From: ${userProfile.origin || 'Not specified'}
- Moving To: ${userProfile.destinationCity || 'Target City'}, ${userProfile.destinationCountry || 'Target Country'}
- Persona: ${userProfile.persona || 'Bachelor'}
- Dietary Preference: ${userProfile.dietary || 'Vegetarian'}
- Religious / Faith: ${userProfile.faith || 'None'}
- Budget Level: ${userProfile.budgetTier || 'Moderate'}
- Departure Timeline: ${userProfile.departureDate ? userProfile.departureDate : 'Within 1-2 months'}
` : '';

    const systemPrompt = `You are ExpatCompass AI, a world-class, empathetic, highly knowledgeable relocation specialist, immigration advisor, and local cultural expert.
You assist expats transitioning to their new home country.
${profileContext}

Guidelines:
1. Provide actionable, practical, concrete advice tailored to the user's destination, family status (bachelor vs family with kids/pets), dietary restrictions, and faith.
2. When answering questions regarding visas, rental contracts, legal quiet hours, healthcare, or customs, give realistic warnings and legal nuances.
3. Use formatted markdown with clear bullet points, bold highlights, and occasional emojis for readability.
4. Keep the tone encouraging, calm, highly organized, and pragmatic.`;

    if (!client) {
      // Offline heuristic intelligent response if API key is not configured
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
      let simulatedReply = '';

      if (lastMessage.includes('vegetarian') || lastMessage.includes('halal') || lastMessage.includes('food') || lastMessage.includes('diet')) {
        simulatedReply = `Here is essential dietary guidance for **${userProfile?.destinationCity || 'your destination'}**:

- **Grocery Shopping**: Visit major local supermarkets (or specialized Turkish, Asian, and ethnic grocers) for familiar pantry staples, pulses, and certified ingredients.
- **Hidden Ingredients**: Always watch labels for hidden animal derivatives like gelatin (*Gelatine*), animal rennet (*Lab*), and animal lards (*Schmalz / Graisse animale*).
- **Restaurant Card**: Keep a translated card on your phone showing: *"I am strictly vegetarian / halal. Does this dish contain animal broth, gelatin, or cooking wine?"*
- **Apps to Install**: Download **HappyCow** (for verified vegetarian/vegan eateries) and **Zabihah** (for halal certification).

💡 *Pro-tip: You can enter your Gemini API Key in the top bar to unlock live, customized AI deep-dives for any restaurant or street market!*`;
      } else if (lastMessage.includes('house') || lastMessage.includes('apartment') || lastMessage.includes('rent')) {
        simulatedReply = `Key strategies for finding housing in **${userProfile?.destinationCity || 'your destination'}**:

1. **Beware of Rental Scams**: Never transfer a security deposit before physically inspecting the unit and signing the written lease. If a landlord says *"I am currently living abroad, wire money and I'll mail the keys"*, it is 100% a scam.
2. **Prepare Your Tenant Dossier**:
   - 3 recent payslips or your official employment contract
   - Credit check report (e.g. Schufa in Germany, credit score in US/UK)
   - Copy of passport & visa
   - Short, polite introductory letter introducing yourself/family.
3. **Understand Rental Terms**: Check whether the advertised rent is "Cold Rent" (base only) or "Warm Rent" (includes heating and building utility advances).
4. **Registration**: Ensure the landlord confirms in writing that you can legally register (*Anmeldung / Address registration*) at this address.`;
      } else if (lastMessage.includes('kid') || lastMessage.includes('school') || lastMessage.includes('family')) {
        simulatedReply = `Relocating with family to **${userProfile?.destinationCity || 'your destination'}**:

- **Childcare & School Enrollment**: Public schools usually assign seats based on your residential municipal registration (*catchment zone*). Bring apostilled birth certificates and pediatrician-certified immunization charts.
- **Healthcare**: In most public European healthcare systems (like Germany, NHS in UK), children and dependent non-working spouses are co-insured under one parent's statutory health plan at no extra charge!
- **Family Packing**: Keep favorite comfort toys, digital tablets with offline content, and a 2-week supply of familiar baby formula/snacks in cabin luggage.`;
      } else {
        simulatedReply = `Welcome to **ExpatCompass AI**! I'm ready to assist you with every phase of your move to **${userProfile?.destinationCity || 'your destination'}**.

I can help you with:
- 📑 **Visa Document Verification & Embassy Interviews**
- 💰 **Relocation Budgeting & Cost of Living Breakdowns**
- 🧳 **Tailored Packing Checklists (Bachelor vs Family vs Pets)**
- 🏠 **House Hunting, Avoiding Rental Scams & Lease Gotchas**
- 🥗 **Dietary Survival (Vegetarian, Vegan, Halal, Jain) & Local Supermarkets**
- 🕌 **Places of Worship & Expat Diaspora Communities**
- 🏥 **Health Insurance Activation & Emergency GP Registration**
- ⏳ **Week-by-week Countdown (30 Days Left & First 30 Days)**

Feel free to ask any specific question! (You can also set your Gemini API key in the top right to enable live reasoning).`;
      }

      return res.json({
        reply: simulatedReply,
        source: 'built-in-relocation-engine'
      });
    }

    // Prepare contents for Gemini interactions / models
    const conversationHistory = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n\n');
    const prompt = `${systemPrompt}\n\nConversation:\n${conversationHistory}\n\nAssistant:`;

    // Try client.interactions.create or client.models.generateContent
    let text = '';
    try {
      if (client.interactions && typeof client.interactions.create === 'function') {
        const interaction = await client.interactions.create({
          model: 'gemini-3.8-flash',
          input: prompt,
        });
        text = interaction.output_text;
      }
    } catch (interactErr) {
      console.warn('Interactions API note:', interactErr.message);
    }

    if (!text && client.models) {
      const response = await client.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });
      text = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text;
    }

    res.json({
      reply: text || 'I processed your request, but received an empty response. Please check your query or API key.',
      source: 'gemini-3.8-flash'
    });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: error.message || 'Failed to generate response',
      reply: 'An error occurred while contacting the AI service. Please check your API key or network connection.'
    });
  }
});

// Custom Destination Intelligence Generator
app.post('/api/generate-custom-city', async (req, res) => {
  try {
    const { country, city, persona, dietary, faith } = req.body;
    const client = getGenAIClient(req);

    if (!client) {
      return res.json({
        success: false,
        message: 'A Gemini API Key is required to generate real-time dynamic dossiers for uncataloged cities. Please add your key in Settings.'
      });
    }

    const prompt = `Generate a detailed relocation intelligence JSON for an expat moving to ${city}, ${country}.
Persona: ${persona || 'bachelor'}, Dietary: ${dietary || 'vegetarian'}, Faith: ${faith || 'none'}.

Return ONLY valid JSON matching this exact structure (no markdown fences, just pure JSON):
{
  "id": "${country.toLowerCase().replace(/\\s+/g, '_')}",
  "name": "${country}",
  "flag": "🌍",
  "currency": "EUR/USD/local",
  "symbol": "$",
  "language": "Official language",
  "emergencyNumbers": {
    "police": "...",
    "ambulance": "..."
  },
  "visaOverview": "Key visa requirements for skilled workers and families",
  "strictRulesAndLaws": [
    { "title": "Rule name", "desc": "Description and penalties", "severity": "critical/high/medium" }
  ],
  "houseHunting": {
    "topPortals": [
      { "name": "Portal Name", "url": "https://...", "note": "Description" }
    ],
    "scamWarnings": ["Scam 1", "Scam 2"]
  },
  "healthcare": {
    "type": "Healthcare system name",
    "details": "How to register and mandatory insurance rules"
  },
  "dietaryGuide": {
    "vegetarianStatus": "Assessment of availability",
    "supermarkets": "Names of best stores and ethnic supermarkets",
    "hiddenIngredients": ["ingredient 1 in local language", "ingredient 2"]
  },
  "religiousGuide": {
    "overview": "Overview of religious tolerance and centers",
    "placesOfWorship": "Notable places of worship"
  }
}`;

    let jsonStr = '';
    try {
      if (client.interactions) {
        const interaction = await client.interactions.create({
          model: 'gemini-3.8-flash',
          input: prompt
        });
        jsonStr = interaction.output_text;
      }
    } catch (e) {
      console.warn('Interactions fallback:', e.message);
    }

    if (!jsonStr && client.models) {
      const response = await client.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });
      jsonStr = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text;
    }

    // Clean JSON
    const cleanJson = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    res.json({ success: true, data: parsed });
  } catch (err) {
    console.error('Error generating custom city:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`ExpatCompass AI Server running on http://localhost:${PORT}`);
});
