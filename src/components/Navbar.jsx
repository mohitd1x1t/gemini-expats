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
  onOpenGoogleAuth,
  currentUser,
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

          {/* Google Sign-in / User Profile Button */}
          <button
            onClick={onOpenGoogleAuth}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-stone-200 hover:border-stone-400 text-stone-800 shadow-sm transition-all"
            title={currentUser ? `Signed in as ${currentUser.name}` : "Sign in with Google to sync"}
          >
            {currentUser ? (
              <>
                <img
                  src={currentUser.picture}
                  alt={currentUser.name}
                  className="w-4 h-4 rounded-full border border-stone-300 shrink-0"
                />
                <span className="hidden sm:inline text-xs font-medium">{currentUser.name.split(' ')[0]}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="hidden sm:inline">Google Login</span>
              </>
            )}
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
