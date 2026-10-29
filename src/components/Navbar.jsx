import React from 'react';
import {
  Compass,
  Download,
  Settings,
  SlidersHorizontal,
  Bot,
  Users,
  ChevronDown,
  ArrowRight,
  Siren,
  Globe2
} from 'lucide-react';
import { GLOBAL_DISPLAY_CURRENCIES } from '../utils/currencyConverter';

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
  onUpdatePersona,
  onGetEstimate,
  displayCurrency = 'LOCAL',
  onUpdateDisplayCurrency
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/90 bg-[#faf9f6]/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4 py-2.5 sm:py-3.5">
        
        {/* Brand Logo (7Heven-style dark rounded badge + bold sans typography) */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer shrink-0 group"
          onClick={() => {
            setActiveTab('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#181325] flex items-center justify-center text-white shadow-sm group-hover:bg-terracotta-500 transition-colors">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-stone-900">
                Expat<span className="text-terracotta-500">Compass</span>
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-mono font-medium hidden sm:block">
              Relocation Estimator & Suite
            </p>
          </div>
        </div>

        {/* Center Nav Links (Matching 7Heven: Calculator, How it works, FAQ, Reviews) */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold text-stone-600">
          <a
            href="#workspace"
            onClick={() => setActiveTab('overview')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab !== 'overview' ? 'text-stone-600' : 'text-stone-900 font-bold'
            }`}
          >
            Workspace
          </a>
          <a
            href="#workspace"
            onClick={() => setActiveTab('budget')}
            className="transition-colors hover:text-stone-900"
          >
            Calculator
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-stone-900"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-stone-900"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
          
          {/* Universal Currency Selector Pill */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white border border-stone-200 hover:border-stone-400 text-xs text-stone-700 transition-colors shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <select
              value={displayCurrency}
              onChange={(e) => onUpdateDisplayCurrency && onUpdateDisplayCurrency(e.target.value)}
              className="appearance-none bg-transparent font-bold text-stone-800 text-[11px] cursor-pointer focus:outline-none pr-1"
              title="Display Currency Preference"
            >
              {GLOBAL_DISPLAY_CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>
                  {c.code === 'LOCAL' ? `${countryData?.currency || 'EUR'} (Local)` : c.code}
                </option>
              ))}
            </select>
          </div>

          {/* Destination Route Pill */}
          <button
            onClick={onOpenProfile}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 hover:border-stone-400 text-xs text-stone-700 transition-colors shadow-sm"
            title="Change Relocation Route & Origin"
          >
            <span className="text-sm">{countryData?.flag || '🌍'}</span>
            <span className="font-semibold text-stone-900">
              {userProfile.destinationCity || 'City'}
            </span>
            <SlidersHorizontal className="w-3 h-3 text-stone-400 ml-0.5" />
          </button>

          {/* Export PDF Button (Shown on sm+ to prevent mobile navbar crowding) */}
          <button
            onClick={onExportPDF}
            className="hidden sm:flex p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors shadow-sm"
            title="Download Relocation PDF Binder"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Emergency SOS Button */}
          <button
            onClick={onOpenSOS}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all shrink-0"
            title="Emergency Numbers & Consular SOS Contacts"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-600 animate-ping" />
            <span>SOS</span>
          </button>

          {/* Primary Terracotta CTA Button (Matching 7Heven 'Get estimate ->') */}
          <button
            onClick={() => {
              if (onGetEstimate) onGetEstimate();
              else {
                setActiveTab('budget');
                const el = document.getElementById('workspace');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all shrink-0"
          >
            <span className="hidden sm:inline">Get estimate</span>
            <span className="sm:hidden">Estimate</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          {/* Settings Modal Toggle */}
          <button
            onClick={onOpenSettings}
            className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 border border-stone-200 transition-colors shrink-0"
            title="System Settings"
          >
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>

      </div>
    </header>
  );
}
