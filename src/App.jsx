import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileWizard from './components/ProfileWizard';
import SettingsModal from './components/SettingsModal';
import EmergencySOSModal from './components/EmergencySOSModal';
import DashboardOverview from './components/DashboardOverview';
import CountdownTimeline from './components/CountdownTimeline';
import PackingEngine from './components/PackingEngine';
import BudgetCalculator from './components/BudgetCalculator';
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

export default function App() {
  // 1. Relocation Profile State
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Profile parse error:', e);
    }
    // Default 30 days ahead from today
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

  // 4. Navigation & Modals
  const [activeTab, setActiveTab] = useState('overview');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);

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
    { id: 'packing', label: '5. Smart Packing Matrix', icon: Luggage, group: 'Logistics & Housing' },
    { id: 'vault', label: '6. Document Vault & Apostilles', icon: FileText, group: 'Logistics & Housing' },
    { id: 'housing', label: '7. House Hunting & Scam Defense', icon: Home, group: 'Logistics & Housing' },
    { id: 'rules', label: '8. Strict Local Laws & Fines', icon: ShieldAlert, group: 'Logistics & Housing' },
    { id: 'dietary', label: '9. Dietary, Supermarkets & Faith', icon: UtensilsCrossed, group: 'Living & Mobility' },
    { id: 'healthcare', label: '10. Healthcare & Insurance Guide', icon: HeartPulse, group: 'Living & Mobility' },
    { id: 'transport', label: '11. Driving, IDP & Public Transit', icon: Car, group: 'Living & Mobility' },
    { id: 'pets', label: '12. Pet Relocation & Biosecurity', icon: Dog, group: 'Living & Mobility' },
    { id: 'copilot', label: '13. Gemini AI Relocation Copilot', icon: Bot, isHighlight: true, group: 'AI Intelligence' }
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
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        userProfile={userProfile}
        countryData={countryData}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onOpenSOS={() => setIsSOSModalOpen(true)}
        onExportPDF={handleExportPDF}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completionStats={completionStats}
        onUpdatePersona={updateGlobalPersona}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Dropdown Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg backdrop-blur-md">
          {/* Active Module Dropdown Selector */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 shrink-0">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Compass className="w-4 h-4" />
              </span>
              <span>Go to Report / Guide:</span>
            </div>

            {/* Dropdown with optgroups */}
            <div className="relative flex-1">
              <select
                id="module-navigator-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500/60 text-white font-semibold text-sm rounded-xl pl-3.5 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-inner transition-all"
              >
                <optgroup label="🏛️ Core Planning & Legal" className="bg-slate-900 text-slate-400 font-bold">
                  <option value="overview" className="bg-slate-800 text-slate-100 font-normal">📊 1. Overview Dashboard</option>
                  <option value="countdown" className="bg-slate-800 text-slate-100 font-normal">⏱️ 2. 30-Day Timelines (T-30 & Day 1-30)</option>
                  <option value="visa" className="bg-slate-800 text-slate-100 font-normal">🛂 3. Visa & Legal Pathways</option>
                  <option value="budget" className="bg-slate-800 text-slate-100 font-normal">💰 4. Relocation & Living Budget</option>
                </optgroup>
                <optgroup label="📦 Logistics, Documents & Housing" className="bg-slate-900 text-slate-400 font-bold">
                  <option value="packing" className="bg-slate-800 text-slate-100 font-normal">🧳 5. Smart Packing Matrix</option>
                  <option value="vault" className="bg-slate-800 text-slate-100 font-normal">📑 6. Document Vault & Apostilles</option>
                  <option value="housing" className="bg-slate-800 text-slate-100 font-normal">🏡 7. House Hunting & Scam Defense</option>
                  <option value="rules" className="bg-slate-800 text-slate-100 font-normal">⚖️ 8. Strict Local Laws & Fines</option>
                </optgroup>
                <optgroup label="🌍 Daily Living, Healthcare & Mobility" className="bg-slate-900 text-slate-400 font-bold">
                  <option value="dietary" className="bg-slate-800 text-slate-100 font-normal">🥗 9. Dietary, Supermarkets & Faith</option>
                  <option value="healthcare" className="bg-slate-800 text-slate-100 font-normal">🩺 10. Healthcare & Insurance Guide</option>
                  <option value="transport" className="bg-slate-800 text-slate-100 font-normal">🚗 11. Driving, IDP & Public Transit</option>
                  <option value="pets" className="bg-slate-800 text-slate-100 font-normal">🐾 12. Pet Relocation & Biosecurity Protocol</option>
                </optgroup>
                <optgroup label="✨ AI Relocation Intelligence" className="bg-slate-900 text-slate-400 font-bold">
                  <option value="copilot" className="bg-slate-800 text-indigo-300 font-medium">🤖 13. Gemini AI Relocation Copilot</option>
                </optgroup>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-indigo-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Step Counter & Prev / Next Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
              Module <strong className="text-white">{currentIdx + 1}</strong> of {navigationTabs.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevTab}
                disabled={currentIdx <= 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 disabled:cursor-not-allowed text-slate-200 border border-slate-700 transition-all"
                title="Go to previous guide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                type="button"
                onClick={handleNextTab}
                disabled={currentIdx >= navigationTabs.length - 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 disabled:cursor-not-allowed text-white shadow-sm shadow-indigo-600/30 transition-all"
                title="Go to next guide"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Persona Filter Status Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3.5 px-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">
              {userProfile.persona.includes('family') ? '👨‍👩‍👧‍👦' : userProfile.persona === 'couple' ? '👫' : userProfile.persona.includes('pet') ? '🐾' : '🎒'}
            </span>
            <div className="text-xs">
              <span className="text-slate-400">Global Relocation Mode: </span>
              <strong className="text-white capitalize">
                {userProfile.persona.replace('_', ' ')}
              </strong>
              <span className="text-indigo-300 ml-1.5 hidden md:inline">
                • Synchronized across Budget, Packing, House Hunting, Healthcare & Visas
              </span>
            </div>
          </div>

          {/* Global Traveler Party Dropdown */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <label className="text-xs text-slate-400 font-medium hidden sm:flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>Traveler Party:</span>
            </label>
            <div className="relative">
              <select
                value={userProfile.persona}
                onChange={(e) => updateGlobalPersona(e.target.value)}
                className="appearance-none bg-slate-800 border border-indigo-500/50 hover:border-indigo-400 text-white font-bold text-xs rounded-xl pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer shadow-sm transition-all"
              >
                <option value="bachelor" className="bg-slate-900 text-slate-100">🎒 Bachelor / Solo</option>
                <option value="couple" className="bg-slate-900 text-slate-100">👫 Couple</option>
                <option value="family_kids" className="bg-slate-900 text-slate-100">👨‍👩‍👧‍👦 Family with Kids</option>
                <option value="family_pets" className="bg-slate-900 text-slate-100">🐾 Traveling with Pets</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'overview' && (
          <DashboardOverview
            userProfile={userProfile}
            countryData={countryData}
            budgetData={budgetData}
            onSelectTab={setActiveTab}
            onOpenProfile={() => setIsProfileModalOpen(true)}
            completionStats={completionStats}
            onUpdatePersona={updateGlobalPersona}
          />
        )}

        {activeTab === 'countdown' && (
          <CountdownTimeline
            countdownData={activeCountdownData}
            arrivalRoadmap={activeArrivalRoadmap}
            completedTasks={completedTasks}
            onToggleTask={toggleTask}
            userProfile={userProfile}
            countryData={countryData}
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
      />

      {/* Emergency SOS Modal */}
      <EmergencySOSModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        countryData={countryData}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">ExpatCompass AI</span>
            <span>•</span>
            <span>Empowering Global Expats & Nomads</span>
          </div>
          <div>
            Built with Google Gemini 3.8 Flash • Always consult official government immigration authorities
          </div>
        </div>
      </footer>
    </div>
  );
}
