import React from 'react';
import {
  Compass,
  Sparkles,
  Download,
  Settings,
  SlidersHorizontal,
  CheckCircle2,
  Bot,
  Users,
  Baby,
  User,
  Dog
} from 'lucide-react';

export default function Navbar({
  userProfile,
  countryData,
  onOpenProfile,
  onOpenSettings,
  onExportPDF,
  activeTab,
  setActiveTab,
  completionStats,
  onUpdatePersona
}) {
  const readinessPercent = completionStats.total > 0
    ? Math.round((completionStats.completed / completionStats.total) * 100)
    : 0;

  const personas = [
    { id: 'bachelor', label: 'Bachelor', icon: '🎒' },
    { id: 'couple', label: 'Couple', icon: '👫' },
    { id: 'family_kids', label: 'Family with Kids', icon: '👨‍👩‍👧‍👦' },
    { id: 'family_pets', label: 'With Pets', icon: '🐾' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => setActiveTab('overview')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <Compass className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                ExpatCompass
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-md">
                AI 3.8
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">The Intelligent Relocation Launchpad</p>
          </div>
        </div>

        {/* Global Persona Quick Filter (Active Everywhere!) */}
        <div className="hidden lg:flex items-center bg-slate-950/80 border border-slate-700/80 rounded-2xl p-1 gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 px-2 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            Party:
          </span>
          {personas.map(p => {
            const isActive = userProfile.persona === p.id ||
              (p.id === 'family_kids' && userProfile.persona === 'family');
            return (
              <button
                key={p.id}
                onClick={() => onUpdatePersona(p.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
                title={`Switch global report mode to ${p.label}`}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* User Route Pill */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-800/70 border border-slate-700/60 rounded-full px-3 py-1.5 text-xs">
          <span className="text-base">{countryData?.flag || '🌍'}</span>
          <span className="font-semibold text-slate-200">
            {userProfile.destinationCity || 'City'}, {countryData?.name || 'Country'}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 capitalize">{userProfile.dietary}</span>
          <button
            onClick={onOpenProfile}
            className="ml-1 text-slate-400 hover:text-white p-1 hover:bg-slate-700 rounded-full transition-colors"
            title="Modify Destination & Full Profile"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Actions & Utilities */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Readiness Score */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700/40 rounded-lg text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Readiness:</span>
            <span className="font-bold text-emerald-400">{readinessPercent}%</span>
            <div className="w-10 h-1.5 bg-slate-700 rounded-full overflow-hidden ml-1">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>
          </div>

          {/* Quick AI Copilot Button */}
          <button
            onClick={() => setActiveTab('copilot')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${
              activeTab === 'copilot'
                ? 'bg-indigo-600 text-white shadow-indigo-500/30'
                : 'bg-indigo-950/70 text-indigo-300 border border-indigo-700/50 hover:bg-indigo-900/80'
            }`}
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Ask AI Copilot</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={onExportPDF}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-500/20 transition-all"
            title="Export complete customized relocation binder as PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download Binder</span>
            <span className="sm:hidden">PDF</span>
          </button>

          {/* Mobile Profile Toggle */}
          <button
            onClick={onOpenProfile}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            title="Profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Settings / API Key */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700/60 transition-colors"
            title="Settings & Gemini API Key"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
