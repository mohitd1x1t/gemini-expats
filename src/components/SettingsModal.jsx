import React, { useState } from 'react';
import { X, Key, Check, ShieldCheck, Sparkles, ExternalLink, UserCheck } from 'lucide-react';

export default function SettingsModal({
  isOpen,
  onClose,
  apiKey,
  onSaveApiKey
}) {
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
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Settings & Sync</div>
              <h3 className="text-base font-serif text-stone-900">Account & Gemini Intelligence</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs">
          {/* Local Workspace & Privacy Card */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif font-medium text-stone-900 text-sm">
                  Private Local Session
                </div>
                <div className="text-[10px] font-mono text-stone-500">
                  Relocation itineraries & checklists stored securely in your browser
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
              Active
            </span>
          </div>

          {/* Built-in Free Tier Note */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-stone-600 space-y-1.5">
            <div className="flex items-center gap-1.5 font-medium text-stone-900 font-serif">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Free Gemini 3.8 Flash Active</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              ExpatCompass Copilot is free and active by default out-of-the-box. Users do not need an API key to ask questions regarding visas, rental contracts, schooling, or packing.
            </p>
          </div>

          {/* Optional Developer API Key */}
          <div className="pt-2 border-t border-stone-100 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                Custom Gemini API Key (Optional)
              </label>
              <span className="text-[10px] font-mono text-stone-400">For Developers</span>
            </div>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500 font-mono text-xs"
            />
            <p className="text-[10px] font-mono text-stone-400">
              Only enter a key if you wish to bypass standard community rate limits.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-stone-100 bg-[#fbfaf8] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
          >
            Close
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
