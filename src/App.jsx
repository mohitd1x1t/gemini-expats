import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SaaSHero from './components/SaaSHero';
import HowItWorks from './components/HowItWorks';
import CustomPlanCTA from './components/CustomPlanCTA';
import TestimonialsAndFAQ from './components/TestimonialsAndFAQ';
import SaaSFooter from './components/SaaSFooter';

import ProfileWizard from './components/ProfileWizard';
import SettingsModal from './components/SettingsModal';
import EmergencySOSModal from './components/EmergencySOSModal';
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

import TaxResidencyEngine from './components/TaxResidencyEngine';
import CreditZeroGuide from './components/CreditZeroGuide';
import FamilyWorkspace from './components/FamilyWorkspace';
import BureaucracyGraph from './components/BureaucracyGraph';
import NeighborhoodEngine from './components/NeighborhoodEngine';
import LogisticsOptimizer from './components/LogisticsOptimizer';
import OfferComparison from './components/OfferComparison';
import SurvivalAudioDeck from './components/SurvivalAudioDeck';
import ChangeAlerts from './components/ChangeAlerts';

import { COUNTRIES_DATA } from './data/countries';
import { PACKING_CATEGORIES, getCountryCountdownTimeline, getCountryArrivalRoadmap } from './data/checklists';
import { CITY_BUDGET_BENCHMARKS, getCityBudgetData, calculateMonthlyBurn } from './data/budgetDefaults';
import { exportRelocationBinderPDF } from './utils/pdfGenerator';
import { parseUserProfileFromURL } from './utils/urlStateManager';
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
  SlidersHorizontal,
  Users,
  Scale,
  Unlock,
  MapPin,
  Ship,
  Volume2,
  Bell
} from 'lucide-react';

const STORAGE_KEY_PROFILE = 'expat_compass_profile';
const STORAGE_KEY_TASKS = 'expat_compass_tasks';
const STORAGE_KEY_API_KEY = 'expat_compass_gemini_key';

export default function App() {
  // 1. Relocation Profile State (Supports Shareable Scenario Links from URL)
  const [userProfile, setUserProfile] = useState(() => {
    const urlProfile = parseUserProfileFromURL();
    if (urlProfile) return urlProfile;

    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Profile parse error:', e);
    }
    return {
      origin: 'India',
      destinationCountry: 'germany',
      destinationCity: 'Berlin',
      persona: 'bachelor',
      dietary: 'vegetarian',
      faith: 'hinduism',
      departureDate: '',
      hasPets: false,
      hasCar: false
    };
  });

  // 2. Checklists & Tasks State
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
    setCompletedTasks(prev => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      return next;
    });
  };

  // Derive active Country & Budget
  const countryData = COUNTRIES_DATA[userProfile.destinationCountry] || COUNTRIES_DATA.germany;
  const budgetData = getCityBudgetData(userProfile.destinationCity, userProfile.destinationCountry);
  const activeCountdownData = getCountryCountdownTimeline(userProfile.destinationCountry);
  const activeArrivalRoadmap = getCountryArrivalRoadmap(userProfile.destinationCountry);

  // Completion calculation
  const calculateTotalTasks = () => {
    let total = 0;
    // Countdown tasks
    Object.values(activeCountdownData).forEach(w => {
      total += w.tasks?.length || 0;
    });
    // Arrival roadmap tasks
    Object.values(activeArrivalRoadmap).forEach(stage => {
      total += stage.tasks?.length || 0;
    });
    // Packing checklist items
    Object.values(PACKING_CATEGORIES).forEach(cat => {
      total += cat.items?.length || 0;
    });
    const completed = Object.values(completedTasks).filter(Boolean).length;
    return { completed, total };
  };

  const completionStats = calculateTotalTasks();

  const handleExportPDF = () => {
    exportRelocationBinderPDF({
      userProfile,
      countryData,
      budgetData,
      completedTasks
    });
  };

  const handleGetEstimate = () => {
    setActiveTab('budget');
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCountry = (countryId) => {
    const cData = COUNTRIES_DATA[countryId];
    if (!cData) return;
    const defaultCity = cData.cities ? cData.cities[0] : (countryId === 'uae' ? 'Dubai' : 'Capital');
    setUserProfile(prev => ({
      ...prev,
      destinationCountry: countryId,
      destinationCity: defaultCity
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation tabs for the workspace
  const navigationTabs = [
    { id: 'overview', label: 'Mission Control', icon: LayoutDashboard },
    { id: 'tax_banking', label: 'Tax, Banking & DTAA', icon: Scale },
    { id: 'family_hub', label: 'Family & Pediatric', icon: Users },
    { id: 'bureaucracy', label: 'Deadlock Breaker', icon: Unlock },
    { id: 'neighborhoods', label: 'Neighborhood Match', icon: MapPin },
    { id: 'logistics', label: 'Shipping & Voltage ROI', icon: Ship },
    { id: 'offer_showdown', label: 'Offer Showdown', icon: TrendingUp },
    { id: 'survival_audio', label: '72h Survival Audio', icon: Volume2 },
    { id: 'change_alerts', label: 'Policy Alerts', icon: Bell },
    { id: 'visa', label: 'Visa Pathways', icon: FileCheck2 },
    { id: 'compensation', label: 'IT Salary Benchmark', icon: TrendingUp },
    { id: 'budget', label: 'Cost & Budget', icon: Calculator },
    { id: 'countdown', label: '30-Day Timeline', icon: Calendar },
    { id: 'packing', label: 'Packing Matrix', icon: Luggage },
    { id: 'housing', label: 'House Hunting', icon: Home },
    { id: 'rules', label: 'Rules & Fines', icon: ShieldAlert },
    { id: 'dietary', label: 'Dietary & Faith', icon: UtensilsCrossed },
    { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
    { id: 'vault', label: 'Document Vault', icon: FileText },
    { id: 'transport', label: 'Driving & Transit', icon: Car },
    { id: 'pets', label: 'Pet Relocation', icon: Dog },
    { id: 'copilot', label: 'AI Copilot', icon: Bot },
  ];

  const currentIdx = navigationTabs.findIndex(t => t.id === activeTab);
  const handlePrevTab = () => {
    if (currentIdx > 0) setActiveTab(navigationTabs[currentIdx - 1].id);
  };
  const handleNextTab = () => {
    if (currentIdx < navigationTabs.length - 1) setActiveTab(navigationTabs[currentIdx + 1].id);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col font-sans selection:bg-terracotta-500 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. Header (7Heven-style dark logo badge + terracotta CTA) */}
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
        onGetEstimate={handleGetEstimate}
      />

      {/* 2. SaaS Hero Section (Matching Image 1: headline, subhead, trust badges, and floating estimate card) */}
      <SaaSHero
        userProfile={userProfile}
        countryData={countryData}
        budgetData={budgetData}
        onGetEstimate={handleGetEstimate}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* 3. How It Works Section (Matching Image 2: 4 cards with terracotta number circles + info callout) */}
      <HowItWorks />

      {/* 4. Interactive Relocation Suite Workspace */}
      <section id="workspace" className="py-12 sm:py-16 bg-[#faf9f6] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
          
          {/* Workspace Title & Route Strip */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-terracotta-600 mb-1">
                <span>Interactive Expat Atelier</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-stone-900 tracking-tight">
                Relocation Workspace for {userProfile.destinationCity}, {countryData.name} {countryData.flag}
              </h2>
            </div>

            {/* Quick Route Modifier Pill */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:border-terracotta-400 text-xs font-semibold text-stone-700 shadow-sm transition-all"
              >
                <span className="truncate">Route: {userProfile.origin} ➔ {userProfile.destinationCity}</span>
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              </button>

              <select
                value={userProfile.persona}
                onChange={(e) => updateGlobalPersona(e.target.value)}
                className="flex-1 sm:flex-initial appearance-none bg-white border border-stone-200 text-stone-800 text-xs rounded-xl px-3.5 py-2 font-semibold cursor-pointer focus:outline-none focus:ring-1 focus:ring-terracotta-400 shadow-sm transition-colors text-center sm:text-left"
              >
                <option value="bachelor">Solo / Bachelor</option>
                <option value="couple">Couple</option>
                <option value="family_kids">Family with Kids</option>
                <option value="family_pets">With Pets</option>
              </select>
            </div>
          </div>

          {/* Horizontal Scrollable Module Pills */}
          <div className="p-1.5 sm:p-2 rounded-2xl bg-white border border-stone-200/90 shadow-sm overflow-x-auto scrollbar-none flex items-center gap-1.5 -mx-1 sm:mx-0 px-2 sm:px-3">
            {navigationTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? 'bg-terracotta-500 text-white shadow-sm'
                      : 'bg-transparent hover:bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Workspace Module Container */}
          <div className="pt-2">
            {activeTab === 'overview' && (
              <DashboardOverview
                userProfile={userProfile}
                countryData={countryData}
                budgetData={budgetData}
                onSelectTab={setActiveTab}
                onOpenProfile={() => setIsProfileModalOpen(true)}
                completionStats={completionStats}
                completedTasks={completedTasks}
                onToggleTask={toggleTask}
                onExportPDF={handleExportPDF}
              />
            )}

            {activeTab === 'tax_banking' && (
              <div className="space-y-10">
                <TaxResidencyEngine
                  userProfile={userProfile}
                  countryData={countryData}
                  onUpdateDepartureDate={(newDate) => {
                    setUserProfile(prev => ({ ...prev, departureDate: newDate }));
                  }}
                />
                <CreditZeroGuide
                  countryData={countryData}
                  userProfile={userProfile}
                />
              </div>
            )}

            {activeTab === 'family_hub' && (
              <FamilyWorkspace
                countryData={countryData}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'bureaucracy' && (
              <BureaucracyGraph
                countryData={countryData}
              />
            )}

            {activeTab === 'neighborhoods' && (
              <NeighborhoodEngine
                countryData={countryData}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'logistics' && (
              <LogisticsOptimizer
                countryData={countryData}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'offer_showdown' && (
              <OfferComparison
                userProfile={userProfile}
                countryData={countryData}
              />
            )}

            {activeTab === 'survival_audio' && (
              <SurvivalAudioDeck
                countryData={countryData}
              />
            )}

            {activeTab === 'change_alerts' && (
              <ChangeAlerts
                countryData={countryData}
              />
            )}

            {activeTab === 'visa' && (
              <VisaGuide
                countryData={countryData}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'compensation' && (
              <SalaryBenchmark
                countryData={countryData}
                userProfile={userProfile}
                onOpenBudgetTab={() => setActiveTab('budget')}
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

            {activeTab === 'housing' && (
              <HouseHunting
                countryData={countryData}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'rules' && (
              <CountryRules
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

            {activeTab === 'vault' && (
              <DocumentVault
                countryData={countryData}
                userProfile={userProfile}
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
          </div>

        </div>
      </section>

      {/* 5. Custom Plan / Next Step CTA (Matching Image 2 bottom) */}
      <CustomPlanCTA
        userProfile={userProfile}
        countryData={countryData}
        onExportPDF={handleExportPDF}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenCopilot={() => {
          setActiveTab('copilot');
          const el = document.getElementById('workspace');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Testimonials (Dark Eggplant) & FAQ Accordion (Matching Image 3) */}
      <TestimonialsAndFAQ />

      {/* 7. SaaS Multi-Column Footer */}
      <SaaSFooter onSelectCountry={handleSelectCountry} />

      {/* Modals */}
      <ProfileWizard
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentProfile={userProfile}
        onSaveProfile={setUserProfile}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      <EmergencySOSModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        countryData={countryData}
      />
    </div>
  );
}
