import React, { useState } from 'react';
import { UtensilsCrossed, HeartHandshake, Eye, ShoppingBag, Sparkles, AlertCircle, Share2, Globe, Volume2 } from 'lucide-react';
import { DIETARY_PREFERENCES, RESTAURANT_FLASHCARDS, FAITH_GUIDES } from '../data/dietaryData';

export default function DietaryAndFaith({ countryData, userProfile }) {
  const [activeSubTab, setActiveSubTab] = useState('diet'); // 'diet' or 'faith'
  const [showFlashcardModal, setShowFlashcardModal] = useState(false);

  const selectedDiet = DIETARY_PREFERENCES.find(d => d.id === userProfile.dietary) || DIETARY_PREFERENCES[0];
  const selectedFaith = FAITH_GUIDES.find(f => f.id === userProfile.faith) || FAITH_GUIDES[0];

  // Look up country flashcard
  const countryFlashcards = RESTAURANT_FLASHCARDS[countryData.id] || RESTAURANT_FLASHCARDS.germany;
  const currentCard = countryFlashcards[userProfile.dietary] || countryFlashcards.vegetarian;

  const dietGuide = countryData.dietaryGuide || {};
  const faithGuide = countryData.religiousGuide || {};

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header with Sub-tabs */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <UtensilsCrossed className="w-4 h-4" />
            Dietary & Community Navigator
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Dietary Preferences & Religious Community Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tailored for a <strong>{userProfile.dietary.toUpperCase()}</strong> expat following <strong>{userProfile.faith.toUpperCase()}</strong> in {countryData.name}.
          </p>
        </div>

        <div className="flex items-center bg-slate-900/80 p-1 rounded-2xl border border-slate-700">
          <button
            onClick={() => setActiveSubTab('diet')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'diet'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Dietary & Food Cards</span>
          </button>
          <button
            onClick={() => setActiveSubTab('faith')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'faith'
                ? 'bg-pink-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Faith & Community</span>
          </button>
        </div>
      </div>

      {/* DIETARY SECTION */}
      {activeSubTab === 'diet' && (
        <div className="space-y-6">
          {/* Interactive Restaurant Card Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Globe className="w-3.5 h-3.5" />
                Restaurant Dietary Card ({currentCard.lang || countryData.language})
              </div>
              <h3 className="text-lg font-bold text-white">
                Show this translated card to restaurant waiters & chefs:
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                "{currentCard.text}"
              </p>
              {currentCard.phonetic && (
                <p className="text-[11px] text-amber-300/80">
                  🗣️ Pronunciation guide: {currentCard.phonetic}
                </p>
              )}
            </div>

            <button
              onClick={() => setShowFlashcardModal(true)}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Eye className="w-4 h-4" />
              <span>Full-Screen Phone Card</span>
            </button>
          </div>

          {/* Dietary Overview & Hidden Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-400" />
                Supermarkets & Pantry Staples in {countryData.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {dietGuide.supermarkets || 'Large domestic supermarket chains offer extensive produce and vegetarian staples.'}
              </p>
              {dietGuide.ethnicGrocers && (
                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                  <strong className="text-emerald-400">Ethnic / Specialty Grocers:</strong> {dietGuide.ethnicGrocers}
                </div>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                Hidden Ingredients Watchlist ({countryData.language})
              </div>
              <p className="text-xs text-slate-400">
                Look out for these words on packaged food nutrition labels:
              </p>

              <div className="space-y-1.5 text-xs">
                {dietGuide.hiddenIngredientsGerman ? (
                  dietGuide.hiddenIngredientsGerman.map((item, i) => (
                    <div key={i} className="flex justify-between p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                      <span className="font-mono font-bold text-rose-300">{item.de}</span>
                      <span className="text-slate-400">{item.en}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-3 rounded-lg bg-slate-800/40 text-slate-400">
                    Always inspect ingredient lists for gelatin, animal rennet in cheeses, and lard/cooking tallow.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAITH & RELIGION SECTION */}
      {activeSubTab === 'faith' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedFaith.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{selectedFaith.name} Community Guide</h3>
                <p className="text-xs text-slate-400">Finding places of worship and observing celebrations abroad</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {faithGuide.overview || selectedFaith.overview}
            </p>

            {faithGuide.churchTax && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
                <strong className="text-amber-300">Tax Warning:</strong> {faithGuide.churchTax}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
                <div className="font-bold text-xs text-indigo-300">Festivals & Celebrations Abroad</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedFaith.festivalGuide || 'Major religious holidays are celebrated with community banquets, temple/mosque gatherings, and cultural events.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
                <div className="font-bold text-xs text-pink-300">Notable Places of Worship in {countryData.name}</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {faithGuide.placesOfWorship || 'Places of worship exist in all major metropolitan hubs. Search Google Maps with terms like "Mandir", "Central Mosque", or "International Church".'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Restaurant Flashcard Modal */}
      {showFlashcardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-amber-50 text-slate-900 p-8 rounded-3xl shadow-2xl space-y-6 text-center border-4 border-amber-400 animate-fadeIn">
            <div className="text-4xl">🍽️</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-amber-800">
              Dietary Communication Card • {currentCard.lang || countryData.language}
            </div>

            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              "{currentCard.text}"
            </p>

            <div className="border-t border-amber-300/80 pt-4 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">English translation:</div>
              <p>
                "I am strictly {userProfile.dietary}. I do not eat meat, fish, gelatin, or animal broth. Thank you for your assistance!"
              </p>
            </div>

            <button
              onClick={() => setShowFlashcardModal(false)}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm transition-colors"
            >
              Done / Close Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
