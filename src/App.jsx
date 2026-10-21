import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileWizard from './components/ProfileWizard';
import SettingsModal from './components/SettingsModal';
import DashboardOverview from './components/DashboardOverview';
import CountdownTimeline from './components/CountdownTimeline';
import PackingEngine from './components/PackingEngine';
import BudgetCalculator from './components/BudgetCalculator';
import CountryRules from './components/CountryRules';
import HouseHunting from './components/HouseHunting';
import DietaryAndFaith from './components/DietaryAndFaith';
import HealthcareGuide from './components/HealthcareGuide';
import VisaGuide from './components/VisaGuide';
import GeminiCopilot from './components/GeminiCopilot';

import { COUNTRIES_DATA } from './data/countries';
import { PACKING_CATEGORIES, ONE_MONTH_COUNTDOWN, FIRST_MONTH_ROADMAP } from './data/checklists';
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
  Bot
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

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Derive active Country and City data
  const countryData = COUNTRIES_DATA[userProfile.destinationCountry] || COUNTRIES_DATA.germany;
  const budgetData = CITY_BUDGET_BENCHMARKS[userProfile.destinationCity] || CITY_BUDGET_BENCHMARKS['Berlin'];

  // Calculate overall readiness stats
  let totalTasks = 0;
  ONE_MONTH_COUNTDOWN.forEach(stage => {
    totalTasks += stage.tasks.length;
  });
  FIRST_MONTH_ROADMAP.forEach(phase => {
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
      ONE_MONTH_COUNTDOWN,
      PACKING_CATEGORIES
    );
  };

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'countdown', label: '30-Day Timelines', icon: Calendar },
    { id: 'packing', label: 'Smart Packing', icon: Luggage },
    { id: 'budget', label: 'Budget Calculator', icon: Calculator },
    { id: 'rules', label: 'Strict Laws & Rules', icon: ShieldAlert },
    { id: 'housing', label: 'House Hunting', icon: Home },
    { id: 'dietary', label: 'Dietary & Faith', icon: UtensilsCrossed },
    { id: 'healthcare', label: 'Healthcare & Insurance', icon: HeartPulse },
    { id: 'visa', label: 'Visa Process', icon: FileCheck2 },
    { id: 'copilot', label: 'AI Copilot', icon: Bot, isHighlight: true }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        userProfile={userProfile}
        countryData={countryData}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onExportPDF={handleExportPDF}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completionStats={completionStats}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-800/80 scrollbar-none">
          {navigationTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? tab.isHighlight
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
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
          />
        )}

        {activeTab === 'countdown' && (
          <CountdownTimeline
            countdownData={ONE_MONTH_COUNTDOWN}
            arrivalRoadmap={FIRST_MONTH_ROADMAP}
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
          />
        )}

        {activeTab === 'budget' && (
          <BudgetCalculator
            budgetData={budgetData}
            countryData={countryData}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'rules' && (
          <CountryRules
            countryData={countryData}
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
