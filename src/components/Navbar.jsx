import React from 'react';
import {
  Compass,
  Download,
  Settings,
  SlidersHorizontal,
  Bot,
  Users,
  ChevronDown,
  Siren,
  User
} from 'lucide-react';

export default function Navbar({
  userProfile,
  countryData,
  onOpenProfile,
  onOpenSettings,
  onOpenSOS,
  onExportPDF,
  activeTab,
  setActiveTab,
  completionStats,
  onUpdatePersona
}) {
  const readinessPercent = completionStats.total > 0
    ? Math.round((completionStats.completed / completionStats.total) * 100)
    : 0;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/90 bg-[#faf9f5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 py-3">
        {/* Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer shrink-0 group"
          onClick={() => setActiveTab('overview')}
        >
          <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-900 group-hover:border-stone-900 transition-colors">
            <Compass className="w-4 h-4 text-stone-800" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
                Expat<span className="italic font-serif font-light text-stone-600">Compass</span>
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-medium hidden sm:block">
              Relocation Atelier · Global Guide
            </p>
          </div>
        </div>

        {/* Center: Destination Route & Traveler Party Pill */}
        <div className="hidden md:flex items-center gap-3">
          {/* Destination Pill */}
          <button
            onClick={onOpenProfile}
            className="flex items-center space-x-2 bg-white border border-stone-200/90 hover:border-stone-400 rounded-full px-3.5 py-1.5 text-xs text-stone-700 transition-colors shadow-sm"
            title="Modify Destination & Route"
          >
            <span className="text-sm">{countryData?.flag || '🌍'}</span>
            <span className="font-medium text-stone-900">
              {userProfile.destinationCity || 'City'}, {countryData?.name || 'Country'}
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-500 capitalize">{userProfile.dietary}</span>
            <SlidersHorizontal className="w-3 h-3 text-stone-400 ml-1" />
          </button>

          {/* Minimalist Party Selector */}
          <div className="relative">
            <select
              value={userProfile.persona}
              onChange={(e) => onUpdatePersona(e.target.value)}
              className="appearance-none bg-white border border-stone-200/90 hover:border-stone-400 text-stone-800 text-xs rounded-full pl-3 pr-7 py-1.5 font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
            >
              <option value="bachelor">Solo / Bachelor</option>
              <option value="couple">Couple</option>
              <option value="family_kids">Family with Kids</option>
              <option value="family_pets">With Pets</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-stone-400">
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Actions & Utilities */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Readiness Score */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-stone-100/80 border border-stone-200 rounded-full text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span className="text-stone-500 uppercase tracking-wider text-[10px] font-mono">Readiness</span>
            <span className="font-mono font-medium text-stone-900">{readinessPercent}%</span>
          </div>

          {/* Quick AI Copilot Button */}
          <button
            onClick={() => setActiveTab('copilot')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'copilot'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400 hover:text-stone-900 shadow-sm'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={onExportPDF}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-900 hover:bg-black text-white shadow-sm transition-all"
            title="Export complete customized relocation binder as PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          {/* Emergency SOS Button */}
          <button
            onClick={onOpenSOS}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all"
            title="Immediate Emergency Numbers & Embassy Contacts"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
            <span className="font-semibold">SOS</span>
          </button>

          {/* Settings / API Key */}
          <button
            onClick={onOpenSettings}
            className="p-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 transition-colors"
            title="Settings & System Configuration"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
