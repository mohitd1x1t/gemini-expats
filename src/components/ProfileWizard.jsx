import React, { useState } from 'react';
import { X, Globe2, Users, Utensils, HeartHandshake, Sparkles, Calendar, DollarSign, Briefcase } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Customize Your Relocation Blueprint</h3>
              <p className="text-xs text-slate-400">Tailors packing, laws, diet, timeline, and house hunting to you</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
          {/* 1. Country & City Routing */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-blue-400" />
              Moving Route (Origin & Destination)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Origin Country</label>
                <select
                  value={profile.origin}
                  onChange={(e) => setProfile({ ...profile, origin: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  {POPULAR_ORIGINS.map(org => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                  <option value="Other">Other Country</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Destination Country</label>
                <select
                  value={profile.destinationCountry}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  {Object.values(COUNTRIES_DATA).map(c => (
                    <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Destination City</label>
                <select
                  value={profile.destinationCity}
                  onChange={(e) => setProfile({ ...profile, destinationCity: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
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
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-400" />
              Who is Traveling?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'bachelor', label: 'Bachelor / Solo', icon: '🎒', desc: 'Compact packing, room share / WG' },
                { id: 'couple', label: 'Couple', icon: '👫', desc: '1-2 BR rental, dual relocation' },
                { id: 'family_kids', label: 'Family with Kids', icon: '👨‍👩‍👧‍👦', desc: 'Schooling, Kita, pediatrician, large flat' },
                { id: 'family_pets', label: 'Traveling with Pets', icon: '🐾', desc: 'Microchip, rabies titre, pet friendly flat' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setProfile({ ...profile, persona: opt.id })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    profile.persona === opt.id
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xl mb-1">{opt.icon}</div>
                  <div className="font-semibold text-xs text-white">{opt.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Dietary Preference */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" />
              Dietary Preference & Food Restrictions
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'vegetarian', label: 'Vegetarian (Lacto-Ovo)', icon: '🥗' },
                { id: 'vegan', label: 'Strict Vegan', icon: '🌱' },
                { id: 'jain', label: 'Jain (No Root Veg/Onion)', icon: '☸️' },
                { id: 'halal', label: 'Strict Halal', icon: '🌙' },
                { id: 'kosher', label: 'Kosher', icon: '✡️' },
                { id: 'non_veg', label: 'Non-Vegetarian / Any', icon: '🍖' }
              ].map(d => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setProfile({ ...profile, dietary: d.id })}
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all ${
                    profile.dietary === d.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 ring-1 ring-amber-500 font-semibold'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-lg">{d.icon}</span>
                  <span className="text-xs">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Religion / Faith */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-pink-400" />
              Faith, Religion & Community
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
                      ? 'bg-pink-500/20 border-pink-500 text-pink-200 ring-1 ring-pink-500 font-semibold'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
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
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Relocation Purpose / Visa
              </label>
              <select
                value={profile.purpose}
                onChange={(e) => setProfile({ ...profile, purpose: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="Skilled Worker / Employment">Skilled Worker / Employment (e.g. Blue Card, H-1B)</option>
                <option value="Tech / Corporate Transfer">Tech / Corporate Intra-Company Transfer</option>
                <option value="Higher Education / University">Higher Education / Student Visa</option>
                <option value="Digital Nomad / Remote Work">Digital Nomad / Remote Work Visa</option>
                <option value="Family Reunion / Dependent">Family Reunion / Spouse Dependent</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                Target Departure Date
              </label>
              <input
                type="date"
                value={profile.departureDate}
                onChange={(e) => setProfile({ ...profile, departureDate: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Apply & Generate Blueprint
          </button>
        </div>
      </div>
    </div>
  );
}
