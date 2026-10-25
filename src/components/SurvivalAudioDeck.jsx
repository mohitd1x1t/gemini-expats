import React, { useState } from 'react';
import {
  Volume2,
  Copy,
  Check,
  Languages,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Utensils,
  Home,
  HeartPulse,
  Wifi,
  ShieldAlert
} from 'lucide-react';
import { SURVIVAL_PHRASEBOOK } from '../data/logisticsAndDependencyData';

export default function SurvivalAudioDeck({ countryData }) {
  const phrasebookKey = SURVIVAL_PHRASEBOOK[countryData.id] ? countryData.id : 'germany';
  const phrasebook = SURVIVAL_PHRASEBOOK[phrasebookKey] || SURVIVAL_PHRASEBOOK.germany;

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [playingPhrase, setPlayingPhrase] = useState(null);
  const [copiedPhrase, setCopiedPhrase] = useState(null);

  const activeCategory = phrasebook.categories[activeCategoryIndex] || phrasebook.categories[0];

  const handleSpeak = (text, lang) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Text-to-speech is not supported by your browser.');
      return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || phrasebook.langCode;
    utterance.rate = 0.88; // Slightly slower for clear pronunciation learning

    setPlayingPhrase(text);
    utterance.onend = () => setPlayingPhrase(null);
    utterance.onerror = () => setPlayingPhrase(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = async (text) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setCopiedPhrase(text);
      setTimeout(() => setCopiedPhrase(null), 2500);
    }
  };

  const categoryIcons = [Home, HeartPulse, Utensils, Wifi, ShieldAlert];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Volume2 className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Local Language Survival Assistant with Speech Audio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            First 72 Hours Pronunciation & Survival Deck
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Critical scripts for talking to landlords, pharmacists, and utility technicians. Includes native script, phonetic transliteration, one-click copy, and native audio voice playback.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <Languages className="w-4 h-4 text-terracotta-500" />
          <span>Language: <strong>{phrasebook.languageName}</strong></span>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl w-fit text-xs font-semibold">
        {phrasebook.categories.map((cat, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];
          const isActive = activeCategoryIndex === idx;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${
                isActive
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-terracotta-500' : 'text-stone-400'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Phrases Deck */}
      <div className="space-y-4">
        {activeCategory.phrases.map((item, idx) => {
          const isPlaying = playingPhrase === item.phrase;
          const isCopied = copiedPhrase === item.phrase;

          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:border-terracotta-300 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1 max-w-2xl">
                  {/* Native Text */}
                  <div className="text-base sm:text-lg font-bold font-serif text-stone-900">
                    {item.phrase}
                  </div>

                  {/* Phonetic Pronunciation Guide */}
                  <div className="text-xs font-mono text-terracotta-600 tracking-wide">
                    🗣️ {item.phonetic}
                  </div>

                  {/* English Translation */}
                  <div className="text-xs text-stone-600 pt-1">
                    <strong>Meaning:</strong> {item.english}
                  </div>
                </div>

                {/* Audio Playback & Copy Buttons */}
                <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                  <button
                    onClick={() => handleSpeak(item.phrase, phrasebook.langCode)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      isPlaying
                        ? 'bg-terracotta-600 text-white animate-pulse'
                        : 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
                    }`}
                    title="Listen to native audio pronunciation"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlaying ? 'Playing...' : 'Pronounce'}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(item.phrase)}
                    className="p-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200 transition-colors"
                    title="Copy phrase to clipboard"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {item.context && (
                <div className="text-[11px] font-mono text-stone-400 pt-2 border-t border-stone-100">
                  Context: {item.context}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
