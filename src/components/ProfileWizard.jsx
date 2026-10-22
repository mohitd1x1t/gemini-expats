import React, { useState } from 'react';
import { X, Globe2, Users, Utensils, HeartHandshake, Sparkles, Calendar, Briefcase } from 'lucide-react';
import { COUNTRIES_DATA } from '../data/countries';

export const POPULAR_ORIGINS = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'South Africa', 'Philippines', 'Nigeria', 'Brazil', 'Pakistan', 'Germany', 'France'];

export default function ProfileWizard({ isOpen, onClose, currentProfile, onSaveProfile }) {
  const [profile, setProfile] = useState({
    origin: currentProfile.origin || 'India',
    destinationCountry: currentProfile.destinationCountry || 'germany',
    destinationCity: currentProfile.destinationCity || 'Berlin',
    persona: currentProfile.persona || 'bachelor',
    purpose: currentProfile.purpose || 'Skilled Worker / Employment',
    dietary: currentProfile.dietary || 'vegetarian',
    faith: currentProfile.faith || 'hindu',
    budgetTier: currentProfile.budgetTier || 'moderate',
    departureDate: currentProfile.departureDate || ''
  });

  if (!isOpen) return null;

  const currentCountry = COUNTRIES_DATA[profile.destinationCountry] || COUNTRIES_DATA.germany;
  const availableCities = currentCountry?.cities || ['Capital City'];

  const handleCountryChange = (countryId) => {
    const selected = COUNTRIES_DATA[countryId];
    setProfile(prev => ({
      ...prev,
      destinationCountry: countryId,
      destinationCity: selected ? selected.cities[0] : 'Main City'
    }));
  };

  const handleSave = () => {
    onSaveProfile(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-stone-100 bg-[#fbfaf8]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Personal Itinerary</div>
              <h3 className="text-xl font-serif text-stone-900">Customize Your Relocation Blueprint</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-7 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
          {/* 1. Country & City Routing */}
          <div className="space-y-3">
            <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-stone-700" />
              <span>Relocation Corridor (Origin & Destination)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1">Origin Country</label>
                <select
                  value={profile.origin}
                  onChange={(e) => setProfile({ ...profile, origin: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-500"
                >
                  {POPULAR_ORIGINS.map(org => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                  <option value="Other">Other Country</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1">Destination Country</label>
                <select
                  value={profile.destinationCountry}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-500"
                >
                  {Object.values(COUNTRIES_DATA).map(c => (
                    <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stone-500 mb-1">Destination City</label>
                <select
                  value={profile.destinationCity}
                  onChange={(e) => setProfile({ ...profile, destinationCity: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-500"
                >
                  {availableCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 2. Persona / Travel Party */}
          <div className="space-y-3">
            <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-stone-700" />
              <span>Who is Traveling?</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'bachelor', label: 'Bachelor / Solo', icon: '🎒', desc: 'Compact luggage, flatshare / WG' },
                { id: 'couple', label: 'Couple', icon: '👫', desc: '1–2 BR rental, dual relocation' },
                { id: 'family_kids', label: 'Family with Kids', icon: '👨‍👩‍👧‍👦', desc: 'Schooling, Kita, pediatrician, family flat' },
                { id: 'family_pets', label: 'Traveling with Pets', icon: '🐾', desc: 'ISO microchip, titer, pet-friendly lease' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setProfile({ ...profile, persona: opt.id })}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    profile.persona === opt.id
                      ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <div className="text-xl mb-1.5">{opt.icon}</div>
                  <div className={`font-serif text-sm font-medium ${profile.persona === opt.id ? 'text-white' : 'text-stone-900'}`}>{opt.label}</div>
                  <div className={`text-[10px] font-mono mt-1 leading-tight ${profile.persona === opt.id ? 'text-stone-300' : 'text-stone-500'}`}>{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Dietary Preference */}
          <div className="space-y-3">
            <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-stone-700" />
              <span>Dietary Restrictions & Traditions</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'vegetarian', label: 'Vegetarian (Lacto-Ovo)', icon: '🥗' },
                { id: 'vegan', label: 'Strict Vegan', icon: '🌱' },
                { id: 'jain', label: 'Jain (No Root Veg)', icon: '☸️' },
                { id: 'halal', label: 'Strict Halal', icon: '🌙' },
                { id: 'kosher', label: 'Kosher', icon: '✡️' },
                { id: 'non_veg', label: 'Non-Vegetarian / Any', icon: '🍖' }
              ].map(d => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setProfile({ ...profile, dietary: d.id })}
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                    profile.dietary === d.id
                      ? 'bg-stone-900 border-stone-900 text-white'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <span className="text-base">{d.icon}</span>
                  <span className="text-xs font-medium">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Religion / Faith */}
          <div className="space-y-3">
            <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-stone-700" />
              <span>Faith & Religious Community</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'hindu', label: 'Hinduism', icon: '🕉️' },
                { id: 'muslim', label: 'Islam', icon: '☪️' },
                { id: 'christian', label: 'Christianity', icon: '✝️' },
                { id: 'sikh', label: 'Sikhism', icon: '☬' },
                { id: 'jewish', label: 'Judaism', icon: '✡️' },
                { id: 'buddhist', label: 'Buddhism', icon: '☸️' },
                { id: 'secular', label: 'Secular / Agnostic', icon: '🕊️' },
                { id: 'none', label: 'Prefer not to say', icon: '✨' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setProfile({ ...profile, faith: f.id })}
                  className={`p-2 rounded-xl border flex items-center gap-2 transition-all ${
                    profile.faith === f.id
                      ? 'bg-stone-900 border-stone-900 text-white'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <span className="text-base">{f.icon}</span>
                  <span className="text-xs">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Purpose & Departure Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5 mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-stone-700" />
                <span>Immigration Purpose / Visa</span>
              </label>
              <select
                value={profile.purpose}
                onChange={(e) => setProfile({ ...profile, purpose: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-500"
              >
                <option value="Skilled Worker / Employment">Skilled Worker / Employment (e.g. Blue Card, H-1B)</option>
                <option value="Tech / Corporate Transfer">Tech / Corporate Intra-Company Transfer</option>
                <option value="Higher Education / University">Higher Education / Student Visa</option>
                <option value="Digital Nomad / Remote Work">Digital Nomad / Remote Work Visa</option>
                <option value="Family Reunion / Dependent">Family Reunion / Spouse Dependent</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-[0.2em] flex items-center gap-1.5 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-700" />
                <span>Target Departure Date</span>
              </label>
              <input
                type="date"
                value={profile.departureDate}
                onChange={(e) => setProfile({ ...profile, departureDate: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-500"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-7 py-4 border-t border-stone-100 bg-[#fbfaf8] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-full shadow-sm transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Apply & Regenerate Blueprint</span>
          </button>
        </div>
      </div>
    </div>
  );
}
