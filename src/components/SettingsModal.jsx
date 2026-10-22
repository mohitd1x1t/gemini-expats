import React, { useState } from 'react';
import { X, Key, Check, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function SettingsModal({ isOpen, onClose, apiKey, onSaveApiKey }) {
  const [inputKey, setInputKey] = useState(apiKey || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(inputKey.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#fbfaf8]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">AI Configuration</div>
              <h3 className="text-base font-serif text-stone-900">Gemini Intelligence Settings</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-stone-600 space-y-2">
            <div className="flex items-center gap-1.5 font-medium text-stone-900 font-serif">
              <ShieldCheck className="w-4 h-4 text-stone-700" />
              <span>Client-Side Local Storage</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              ExpatCompass contains pre-compiled dossiers for all top destinations. Entering your Google Gemini API key enables real-time reasoning with <strong>Gemini 3.8 Flash</strong> for custom questions, neighborhood searches, and uncataloged cities.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-stone-800 hover:text-stone-950 font-mono text-[11px] underline underline-offset-2"
            >
              Get a free API key at Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1.5">
              Gemini API Key
            </label>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500 font-mono text-xs"
            />
            <p className="text-[10px] font-mono text-stone-400 mt-1.5">
              Your key is saved locally in your browser and never sent to external servers.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-stone-100 bg-[#fbfaf8] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-full shadow-sm transition-all flex items-center gap-2"
          >
            {savedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Saved</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Save Key</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
