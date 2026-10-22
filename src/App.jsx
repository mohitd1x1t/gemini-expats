import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileWizard from './components/ProfileWizard';
import SettingsModal from './components/SettingsModal';
import EmergencySOSModal from './components/EmergencySOSModal';
import GoogleAuthModal from './components/GoogleAuthModal';
import DashboardOverview from './components/DashboardOverview';
import CountdownTimeline from './components/CountdownTimeline';
import PackingEngine from './components/PackingEngine';
import BudgetCalculator from './components/BudgetCalculator';
import SalaryBenchmark from './components/SalaryBenchmark';
import CountryRules from './components/CountryRules';
import HouseHunting from './components/HouseHunting';
import DietaryAndFaith from './components/DietaryAndFaith';
import HealthcareGuide from './components/HealthcareGuide';
import VisaGuide from './components/VisaGuide';
import DocumentVault from './components/DocumentVault';
import DrivingTransport from './components/DrivingTransport';
import PetRelocation from './components/PetRelocation';
import GeminiCopilot from './components/GeminiCopilot';

import { COUNTRIES_DATA } from './data/countries';
import { PACKING_CATEGORIES, getCountryCountdownTimeline, getCountryArrivalRoadmap } from './data/checklists';
import { CITY_BUDGET_BENCHMARKS } from './data/budgetDefaults';
import { exportRelocationBinderPDF } from './utils/pdfGenerator';
import {
  LayoutDashboard,
  Calendar,
  Luggage,
  Calculator,
  TrendingUp,
  ShieldAlert,
  Home,
  UtensilsCrossed,
  HeartPulse,
  FileCheck2,
  FileText,
  Car,
  Dog,
  Bot,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Users
} from 'lucide-react';

const STORAGE_KEY_PROFILE = 'expat_compass_profile';
const STORAGE_KEY_TASKS = 'expat_compass_tasks';
const STORAGE_KEY_API_KEY = 'expat_compass_gemini_key';
const STORAGE_KEY_USER = 'expat_google_user';

export default function App() {
  // 1. Relocation Profile State
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Profile parse error:', e);
    }
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    const dateStr = futureDate.toISOString().split('T')[0];

    return {
      origin: 'India',
      destinationCountry: 'germany',
      destinationCity: 'Berlin',
      persona: 'bachelor',
      purpose: 'Skilled Worker / Employment',
      dietary: 'vegetarian',
      faith: 'hindu',
      budgetTier: 'moderate',
      departureDate: dateStr
    };
  });

  // 2. Completed Checklist Tasks State
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TASKS);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // 3. Gemini API Key
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_API_KEY) || '';
  });

  // 4. Google Auth User
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.email?.includes('alex.mercer')) {
          localStorage.removeItem(STORAGE_KEY_USER);
          return null;
        }
        return parsed;
      }
    } catch (e) {}
    return null;
  });

  // 5. Navigation & Modals
  const [activeTab, setActiveTab] = useState('overview');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [isGoogleAuthModalOpen, setIsGoogleAuthModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleSaveApiKey = (newKey) => {
    setApiKey(newKey);
    localStorage.setItem(STORAGE_KEY_API_KEY, newKey);
  };

  const handleGoogleSignIn = (userObj) => {
    setCurrentUser(userObj);
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userObj));
  };

  const handleGoogleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_KEY_USER);
  };

  const updateGlobalPersona = (newPersona) => {
    setUserProfile(prev => ({
      ...prev,
      persona: newPersona
    }));
  };

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Derive active Country and City data
  const countryData = COUNTRIES_DATA[userProfile.destinationCountry] || COUNTRIES_DATA.germany;
  const budgetData = CITY_BUDGET_BENCHMARKS[userProfile.destinationCity] || CITY_BUDGET_BENCHMARKS['Berlin'];

  // Derive country-specific 30-Day Departure Countdown and First Month Arrival Roadmaps
  const activeCountdownData = getCountryCountdownTimeline(userProfile.destinationCountry, countryData, userProfile);
  const activeArrivalRoadmap = getCountryArrivalRoadmap(userProfile.destinationCountry, countryData, userProfile);

  // Calculate overall readiness stats
  let totalTasks = 0;
  activeCountdownData.forEach(stage => {
    totalTasks += stage.tasks.length;
  });
  activeArrivalRoadmap.forEach(phase => {
    totalTasks += phase.tasks.length;
  });
  PACKING_CATEGORIES.forEach(cat => {
    totalTasks += cat.bachelorItems.length;
    if (userProfile.persona.toLowerCase().includes('family')) {
      totalTasks += cat.familyItems.length;
    }
  });

  const completedCount = Object.keys(completedTasks).filter(k => completedTasks[k]).length;
  const completionStats = {
    total: totalTasks,
    completed: completedCount
  };

  const handleExportPDF = () => {
    exportRelocationBinderPDF(
      userProfile,
      countryData,
      budgetData,
      activeCountdownData,
      PACKING_CATEGORIES
    );
  };

  const navigationTabs = [
    { id: 'overview', label: '1. Overview Dashboard', icon: LayoutDashboard, group: 'Planning & Legal' },
    { id: 'countdown', label: '2. 30-Day Timelines (T-30 & Day 1-30)', icon: Calendar, group: 'Planning & Legal' },
    { id: 'visa', label: '3. Visa & Legal Pathways', icon: FileCheck2, group: 'Planning & Legal' },
    { id: 'budget', label: '4. Relocation & Living Budget', icon: Calculator, group: 'Planning & Legal' },
    { id: 'compensation', label: '5. Tech Salary & Market Benchmark', icon: TrendingUp, group: 'Planning & Legal' },
    { id: 'packing', label: '6. Smart Packing Matrix', icon: Luggage, group: 'Logistics & Housing' },
    { id: 'vault', label: '7. Document Vault & Apostilles', icon: FileText, group: 'Logistics & Housing' },
    { id: 'housing', label: '8. House Hunting & Scam Defense', icon: Home, group: 'Logistics & Housing' },
    { id: 'rules', label: '9. Strict Local Laws & Fines', icon: ShieldAlert, group: 'Logistics & Housing' },
    { id: 'dietary', label: '10. Dietary, Supermarkets & Faith', icon: UtensilsCrossed, group: 'Living & Mobility' },
    { id: 'healthcare', label: '11. Healthcare & Insurance Guide', icon: HeartPulse, group: 'Living & Mobility' },
    { id: 'transport', label: '12. Driving, IDP & Public Transit', icon: Car, group: 'Living & Mobility' },
    { id: 'pets', label: '13. Pet Relocation & Biosecurity', icon: Dog, group: 'Living & Mobility' },
    { id: 'copilot', label: '14. Gemini AI Relocation Copilot', icon: Bot, isHighlight: true, group: 'AI Intelligence' }
  ];

  const currentIdx = Math.max(0, navigationTabs.findIndex(t => t.id === activeTab));

  const handlePrevTab = () => {
    if (currentIdx > 0) {
      setActiveTab(navigationTabs[currentIdx - 1].id);
    }
  };

  const handleNextTab = () => {
    if (currentIdx < navigationTabs.length - 1) {
      setActiveTab(navigationTabs[currentIdx + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-stone-900 flex flex-col selection:bg-stone-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        userProfile={userProfile}
        countryData={countryData}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onOpenSOS={() => setIsSOSModalOpen(true)}
        onOpenGoogleAuth={() => setIsGoogleAuthModalOpen(true)}
        currentUser={currentUser}
        onExportPDF={handleExportPDF}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completionStats={completionStats}
        onUpdatePersona={updateGlobalPersona}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Dropdown Bar — Minimalist Atelier Index */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          {/* Active Module Dropdown Selector */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-widest shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              <span>Index / Guide:</span>
            </div>

            {/* Dropdown with optgroups */}
            <div className="relative flex-1">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-900 font-serif font-normal text-sm sm:text-base rounded-xl pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer transition-all shadow-none"
              >
                <optgroup label="Planning, Budget & Legal Pathways" className="font-sans font-bold text-xs text-stone-500 bg-stone-100">
                  <option value="overview" className="font-serif text-stone-900">01 · Overview Blueprint</option>
                  <option value="countdown" className="font-serif text-stone-900">02 · 30-Day Departure & First Month Timelines</option>
                  <option value="visa" className="font-serif text-stone-900">03 · Visa Process & Legal Roadmap</option>
                  <option value="budget" className="font-serif text-stone-900">04 · Relocation & Living Budget Calculator</option>
                  <option value="compensation" className="font-serif text-stone-900">05 · Tech Salary & Market Benchmark</option>
                </optgroup>
                <optgroup label="Logistics, Housing & Regulations" className="font-sans font-bold text-xs text-stone-500 bg-stone-100">
                  <option value="packing" className="font-serif text-stone-900">06 · Smart Packing Matrix (Baggage & Customs)</option>
                  <option value="vault" className="font-serif text-stone-900">07 · Document Vault & Legalization Tracker</option>
                  <option value="housing" className="font-serif text-stone-900">08 · House Hunting & Scam Defense Masterclass</option>
                  <option value="rules" className="font-serif text-stone-900">09 · Country Rules, Strict Laws & Fines</option>
                </optgroup>
                <optgroup label="Living, Health & Lifestyle" className="font-sans font-bold text-xs text-stone-500 bg-stone-100">
                  <option value="dietary" className="font-serif text-stone-900">10 · Dietary Preferences & Faith Communities</option>
                  <option value="healthcare" className="font-serif text-stone-900">11 · Healthcare System & Insurance Guide</option>
                  <option value="transport" className="font-serif text-stone-900">12 · Driving License & Public Transit</option>
                  <option value="pets" className="font-serif text-stone-900">13 · Pet Relocation & Biosecurity Protocol</option>
                </optgroup>
                <optgroup label="AI Intelligence" className="font-sans font-bold text-xs text-stone-500 bg-stone-100">
                  <option value="copilot" className="font-serif text-stone-900">14 · Gemini AI Relocation Copilot</option>
                </optgroup>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

            {/* Quick Step Buttons & Persona Indicator */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
            <span className="text-xs font-mono text-stone-500 px-2 py-1 rounded bg-stone-50 border border-stone-200">
              Module {currentIdx + 1} of {navigationTabs.length}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevTab}
                disabled={currentIdx === 0}
                className="p-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none text-stone-700 transition-colors"
                title="Previous Module"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTab}
                disabled={currentIdx === navigationTabs.length - 1}
                className="p-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none text-stone-700 transition-colors"
                title="Next Module"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Persona Active Filter Indicator Banner */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5 text-stone-700" />
            </div>
            <div className="text-stone-700">
              Active Persona: <strong className="text-stone-900 font-serif font-medium">{userProfile.persona.replace('_', ' ').toUpperCase()}</strong>
              <span className="text-stone-400 mx-2">|</span>
              Moving: <span className="font-mono text-stone-600">{userProfile.origin} ➔ {userProfile.destinationCity}, {countryData.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
              Synchronized Across All 14 Modules
            </span>
          </div>
        </div>

        {/* Tab Content Panes */}
        {activeTab === 'overview' && (
          <DashboardOverview
            userProfile={userProfile}
            countryData={countryData}
            budgetData={budgetData}
            onSelectTab={setActiveTab}
            onOpenProfile={() => setIsProfileModalOpen(true)}
            completionStats={completionStats}
          />
        )}

        {activeTab === 'countdown' && (
          <CountdownTimeline
            countdownData={activeCountdownData}
            arrivalRoadmap={activeArrivalRoadmap}
            completedTasks={completedTasks}
            onToggleTask={toggleTask}
            departureDate={userProfile.departureDate}
            countryData={countryData}
            userProfile={userProfile}
            onUpdatePersona={updateGlobalPersona}
          />
        )}

        {activeTab === 'packing' && (
          <PackingEngine
            categories={PACKING_CATEGORIES}
            completedTasks={completedTasks}
            onToggleTask={toggleTask}
            userProfile={userProfile}
            countryData={countryData}
            onUpdatePersona={updateGlobalPersona}
          />
        )}

        {activeTab === 'budget' && (
          <BudgetCalculator
            budgetData={budgetData}
            countryData={countryData}
            userProfile={userProfile}
            onUpdatePersona={updateGlobalPersona}
            onOpenVisaTab={() => setActiveTab('visa')}
          />
        )}

        {activeTab === 'compensation' && (
          <SalaryBenchmark
            countryData={countryData}
            userProfile={userProfile}
            onOpenBudgetTab={() => setActiveTab('budget')}
          />
        )}

        {activeTab === 'rules' && (
          <CountryRules
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'housing' && (
          <HouseHunting
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'dietary' && (
          <DietaryAndFaith
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'healthcare' && (
          <HealthcareGuide
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'visa' && (
          <VisaGuide
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'vault' && (
          <DocumentVault
            userProfile={userProfile}
            countryData={countryData}
          />
        )}

        {activeTab === 'transport' && (
          <DrivingTransport
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'pets' && (
          <PetRelocation
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'copilot' && (
          <GeminiCopilot
            userProfile={userProfile}
            countryData={countryData}
            apiKey={apiKey}
            currentUser={currentUser}
          />
        )}
      </main>

      {/* Profile Wizard Modal */}
      <ProfileWizard
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentProfile={userProfile}
        onSaveProfile={setUserProfile}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
        currentUser={currentUser}
        onOpenGoogleAuth={() => setIsGoogleAuthModalOpen(true)}
      />

      {/* Google Authentication Modal */}
      <GoogleAuthModal
        isOpen={isGoogleAuthModalOpen}
        onClose={() => setIsGoogleAuthModalOpen(false)}
        currentUser={currentUser}
        onSignIn={handleGoogleSignIn}
        onSignOut={handleGoogleSignOut}
      />

      {/* Emergency SOS Modal */}
      <EmergencySOSModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        countryData={countryData}
      />

      {/* Minimalist Footer */}
      <footer className="border-t border-stone-200/80 bg-white/60 py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-normal text-stone-900">Expat<span className="italic text-stone-600">Compass</span></span>
            <span className="text-stone-300">·</span>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono">The Relocation Atelier</span>
          </div>
          <div className="text-stone-400 text-[11px]">
            Powered by Gemini 3.8 Flash · Always verify immigration rules with official consular services
          </div>
        </div>
      </footer>
    </div>
  );
}
