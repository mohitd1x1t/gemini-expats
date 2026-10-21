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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Gemini API Intelligence Settings</h3>
              <p className="text-xs text-slate-400">Power your personal Relocation Copilot</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-slate-300 space-y-2">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Optional Client-Side Key Storage
            </div>
            <p className="text-slate-400 leading-relaxed">
              ExpatCompass comes with built-in heuristic expat dossiers for top countries. Entering your Google Gemini API key enables real-time reasoning with <strong>Gemini 3.8 Flash</strong> for unlimited custom questions, neighborhood searches, and uncataloged cities.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Get a free API key at Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Gemini API Key
            </label>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 font-mono text-xs"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Your key is saved locally in your browser storage and never shared.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                Saved Successfully
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Save Key
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
