# ExpatCompass AI 🧭

> The Complete Intelligent Relocation & Expat Launchpad — Powered by Google Gemini 3.8 Flash.

ExpatCompass AI is a full-featured relocation copilot and management dashboard built for individuals, couples, and families moving to a completely new country. It orchestrates the entire relocation lifecycle from visa paperwork to 30-day departure countdowns, budget planning, house hunting, dietary navigation, local laws, and medical onboarding.

---

## 🌟 Key Features & Problem Solvers

### 1. 📑 Visa & Legal Entry Pathways
- Detailed guides for major work permits (EU Blue Card, UK Skilled Worker, US H-1B/L-1, Canada Express Entry, UAE Golden/Green Visas, Japan Highly Skilled Professional).
- Step-by-step document legalization roadmap: Hague Apostille, sworn court translations, police clearance certificates (PCC), and degree equivalence (Anabin/WES).

### 2. ⏳ Timeline Protocols (T-30 Countdown & Day 1-30 Arrival Roadmap)
- **1 Month Left (T-30 Days)**:
  - Week 4 (T-30 to T-23): Temporary accommodation with city registration guarantee, medical/dental checkups, forex card loading, home lease notice.
  - Week 3 (T-22 to T-15): Apostille verification, cloud document vault backup, school waitlists.
  - Week 2 (T-14 to T-8): Destination eSIM activation, luggage weigh-in, offline map downloads.
  - Week 1 (T-7 to Departure): Cabin baggage document folder verification, airport transfers, 48-hour delay survival pack.
- **First Month After Arrival (Day 1 to 30)**:
  - Days 1 to 3: Local SIM, public transit monthly pass, initial grocery stocking.
  - Week 1: Mandatory municipal city registration (*Anmeldung / BSN / SIN / SSN*), tax ID issuance, school orientation.
  - Week 2: Local salary bank account opening, statutory health insurance card activation, personal liability insurance (*Haftpflichtversicherung*).
  - Weeks 3 & 4: Apartment hunting viewings, recycling/Pfand sorting, joining local expat associations, biometric residence permit (eAT / BRP).

### 3. 🧳 Intelligent Packing Matrix (Bachelor vs. Family vs. Pets)
- Dynamic luggage filters:
  - **Bachelor / Solo**: Compact tech setup, universal adapters, capsule wardrobe.
  - **Family with Kids**: Pediatric medicines, pediatric immunization records, school transcripts, comfort items.
  - **Pets**: Microchip records, rabies titre test certificates, pet airline crates.
- **Voltage & Plug Checker**: Warns about 110V (US/Canada) vs. 230V (Europe/UK/AU) voltage differences to protect appliances.
- **Banned Customs & Medication Alerts**: Highlights prohibited narcotics (e.g. codeine in UAE/Japan) and biosecurity food rules.

### 4. 💰 Relocation & Living Budget Calculator
- Upfront Relocation Sunk Costs: Flights, visa fees, temporary furnished stay, 2-3x security deposit (*Kaution/Bond*), and starter furniture.
- Monthly Recurring Living Burn: Rent (Warm vs Cold), groceries, public transit, health insurance employee co-share, utilities & WiFi, childcare/schooling, and leisure.
- Bachelor vs. Family toggle with realistic cost benchmarks by city.
- Recommended 3-Month Emergency Runway target in destination currency.

### 5. ⚖️ Country Rules, Strict Laws & Expensive Fines
- High-risk legal traps: Quiet hours (*Ruhezeit* in Germany/Switzerland), severe torrenting/copyright fines, TV broadcast licenses (*GEZ / UK TV Licence*), mandatory waste sorting, and public transit rules.
- Local workplace culture and punctuality etiquette.
- Official emergency telephone numbers cheat sheet.

### 6. 🏠 House Hunting Masterclass & Scam Defense
- Verified top real estate portals by country (ImmoScout24, WG-Gesucht, Rightmove, Funda, Zillow, Property Finder, PropertyGuru, GaijinPot).
- Scam Alert Playbook: How to detect the "Landlord is currently abroad and will mail keys via DHL/Airbnb" wire fraud.
- Ready-to-copy, high-response **Tenant Application Cover Letter Template**.

### 7. 🥗 Dietary, Supermarkets & Faith Integration
- Custom tailored advice for: **Strict Vegetarian, Vegan, Jain, Halal, Kosher, and Omnivore**.
- **Interactive Restaurant Translation Flashcard**: Full-screen translated restaurant card in local language (German, French, Dutch, Japanese) with phonetic pronunciation to show servers.
- Hidden ingredient watchlist (gelatin, animal rennet in cheeses, pork lard/Schmalz, dashi/fish broths).
- Faith guide: Places of worship (Mandirs, Gurdwaras, Mosques, Churches, Synagogues) and cultural festival observances.

### 8. 🏥 Healthcare & Insurance Navigator
- Public vs. Private health insurance structure.
- Finding an English-speaking General Practitioner (GP / Hausarzt).
- Dental and optical health insurance warnings.

### 9. 🤖 Gemini AI Relocation Copilot
- Powered by `gemini-3.8-flash` via the official `@google/genai` SDK.
- Answers any bespoke question with contextual awareness of your travel profile, origin, destination city, budget, and dietary preferences.

### 10. 📄 One-Click Relocation Master Binder (PDF Export)
- Exports a complete, beautifully formatted multi-page PDF relocation manual with your personalized budget, packing lists, legal rules, and 30-day countdown to print or carry in cabin luggage.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm

### 1. Run Development Server
```bash
# Starts both the backend server (port 3001) and Vite frontend (port 5173)
npm run start
```
Or run separately:
```bash
# Backend server
node server/index.js

# Frontend
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## 🔑 Gemini API Configuration (Optional)

The platform comes with comprehensive curated databases for top expat countries. To enable live reasoning for uncataloged cities or custom deep-dives:
1. Click the **Settings (gear icon)** in the top right corner.
2. Enter your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3. The key is saved locally in your browser storage.
