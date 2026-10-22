import React, { useState } from 'react';
import { UtensilsCrossed, HeartHandshake, Eye, ShoppingBag, AlertCircle, Globe, X } from 'lucide-react';
import { DIETARY_PREFERENCES, RESTAURANT_FLASHCARDS, FAITH_GUIDES } from '../data/dietaryData';

export default function DietaryAndFaith({ countryData, userProfile }) {
  const [activeSubTab, setActiveSubTab] = useState('diet'); // 'diet' or 'faith'
  const [showFlashcardModal, setShowFlashcardModal] = useState(false);

  const selectedDiet = DIETARY_PREFERENCES.find(d => d.id === userProfile.dietary) || DIETARY_PREFERENCES[0];
  const selectedFaith = FAITH_GUIDES.find(f => f.id === userProfile.faith) || FAITH_GUIDES[0];

  const countryFlashcards = RESTAURANT_FLASHCARDS[countryData.id] || RESTAURANT_FLASHCARDS.germany;
  const currentCard = countryFlashcards[userProfile.dietary] || countryFlashcards.vegetarian;

  const dietGuide = countryData.dietaryGuide || {};
  const faithGuide = countryData.religiousGuide || {};

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header with Sub-tabs */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <UtensilsCrossed className="w-3.5 h-3.5 text-stone-700" />
            <span>Dietary & Community Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Dietary Preferences & <em className="italic font-serif">Faith Communities</em>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Tailored for a <span className="font-mono text-stone-800 font-medium">{userProfile.dietary.toUpperCase()}</span> expat practicing <span className="font-mono text-stone-800 font-medium">{userProfile.faith.toUpperCase()}</span> in {countryData.name}.
          </p>
        </div>

        {/* Minimal Sub-Tabs Pill */}
        <div className="flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 self-start md:self-center">
          <button
            onClick={() => setActiveSubTab('diet')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSubTab === 'diet'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Dietary & Flashcards</span>
          </button>
          <button
            onClick={() => setActiveSubTab('faith')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSubTab === 'faith'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Faith & Community</span>
          </button>
        </div>
      </div>

      {/* DIETARY SECTION */}
      {activeSubTab === 'diet' && (
        <div className="space-y-6">
          {/* Interactive Restaurant Card Banner */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[10px] font-mono uppercase tracking-wider border border-stone-200">
                <Globe className="w-3 h-3 text-stone-500" />
                <span>Restaurant Dietary Card • {currentCard.lang || countryData.language}</span>
              </div>
              <h3 className="text-xl font-serif text-stone-900">
                Show this translated phrase directly to waiters and chefs:
              </h3>
              <p className="text-sm font-serif italic text-stone-800 bg-stone-50 p-4 rounded-2xl border border-stone-200 leading-relaxed">
                "{currentCard.text}"
              </p>
              {currentCard.phonetic && (
                <p className="text-xs font-mono text-stone-500">
                  Pronunciation Guide: {currentCard.phonetic}
                </p>
              )}
            </div>

            <button
              onClick={() => setShowFlashcardModal(true)}
              className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs shadow-sm transition-all flex items-center justify-center gap-2 shrink-0 self-start md:self-center"
            >
              <Eye className="w-4 h-4" />
              <span>Full-Screen Card</span>
            </button>
          </div>

          {/* Dietary Overview & Hidden Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
              <div className="font-serif text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-stone-700" />
                <span>Supermarkets & Pantry Staples in {countryData.name}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {dietGuide.supermarkets || 'Large domestic supermarket chains offer extensive produce and vegetarian staples.'}
              </p>
              {dietGuide.ethnicGrocers && (
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-700">
                  <strong className="text-stone-900 font-serif">Specialty Grocers:</strong> {dietGuide.ethnicGrocers}
                </div>
              )}
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
              <div className="font-serif text-stone-900 text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-700" />
                <span>Hidden Ingredients Watchlist ({countryData.language})</span>
              </div>
              <p className="text-xs text-stone-500">
                Inspect ingredient labels for these terms on packaged groceries:
              </p>

              <div className="space-y-1.5 text-xs">
                {dietGuide.hiddenIngredientsGerman ? (
                  dietGuide.hiddenIngredientsGerman.map((item, i) => (
                    <div key={i} className="flex justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
                      <span className="font-mono font-medium text-stone-900">{item.de}</span>
                      <span className="text-stone-500">{item.en}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-600 text-xs">
                    Inspect package contents for animal rennet in cheeses, bovine gelatin in confectionary, and animal broth or tallow in fried goods.
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
          <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
            <div className="flex items-center gap-3.5">
              <span className="text-3xl">{selectedFaith.icon}</span>
              <div>
                <h3 className="text-xl font-serif text-stone-900">{selectedFaith.name} Community Guide</h3>
                <p className="text-xs text-stone-500">Observance and places of worship in {countryData.name}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {faithGuide.overview || selectedFaith.overview}
            </p>

            {faithGuide.churchTax && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-0.5">
                <strong className="text-stone-900 font-serif block">Church Tax Notice (Kirchensteuer):</strong>
                <p className="text-stone-700">{faithGuide.churchTax}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-700 font-semibold">Festivals & Celebrations</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedFaith.festivalGuide || 'Major religious holidays are celebrated with community banquets, temple or mosque gatherings, and cultural events.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-700 font-semibold">Places of Worship in {countryData.name}</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {faithGuide.placesOfWorship || 'Places of worship exist in all metropolitan centers. Search local maps with terms like "Mandir", "Central Mosque", or "International Church".'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Restaurant Flashcard Modal */}
      {showFlashcardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white text-stone-900 p-8 rounded-3xl shadow-2xl space-y-6 text-center border border-stone-200 animate-fadeIn">
            <button
              onClick={() => setShowFlashcardModal(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-4xl">🍽️</div>
            <div className="text-[10px] uppercase font-mono tracking-[0.22em] text-stone-500">
              Dietary Communication Card • {currentCard.lang || countryData.language}
            </div>

            <p className="text-xl sm:text-2xl font-serif text-stone-900 leading-snug italic">
              "{currentCard.text}"
            </p>

            <div className="border-t border-stone-100 pt-4 text-xs text-stone-600 space-y-1">
              <div className="font-serif text-stone-800 text-sm">English Translation:</div>
              <p className="text-stone-500 leading-relaxed">
                "I am strictly {userProfile.dietary}. I do not consume meat, fish, poultry, gelatin, or animal-based broth. Thank you for your assistance!"
              </p>
            </div>

            <button
              onClick={() => setShowFlashcardModal(false)}
              className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full text-xs transition-colors"
            >
              Done / Close Flashcard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
