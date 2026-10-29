import React, { useState, useEffect } from 'react';
import {
  Calculator,
  DollarSign,
  PiggyBank,
  ShieldCheck,
  Home,
  ShoppingCart,
  Train,
  HeartPulse,
  Sparkles,
  AlertCircle,
  FileCheck2,
  Clock,
  ArrowRight,
  Check,
  HelpCircle,
  Users,
  Baby,
  User,
  ChevronDown,
  Globe2
} from 'lucide-react';
import { COUNTRY_VISA_DETAILS } from '../data/visaData';
import { GLOBAL_DISPLAY_CURRENCIES, formatDualCurrency } from '../utils/currencyConverter';

export default function BudgetCalculator({
  budgetData,
  countryData,
  userProfile,
  onUpdatePersona,
  displayCurrency = 'LOCAL',
  onUpdateDisplayCurrency
}) {
  // Driven 100% by Global Persona!
  const persona = userProfile.persona?.toLowerCase() || 'bachelor';
  const isFamily = persona.includes('family');
  const isCouple = persona.includes('couple');
  const personaType = isFamily ? 'family' : isCouple ? 'couple' : 'bachelor';

  // Get active defaults
  const cityDefaults = budgetData?.[personaType] || budgetData?.bachelor || {
    rent: isFamily ? 2200 : isCouple ? 1600 : 1200,
    groceries: isFamily ? 850 : isCouple ? 600 : 350,
    transport: isFamily ? 120 : isCouple ? 100 : 50,
    healthInsurance: isFamily ? 350 : isCouple ? 300 : 180,
    utilities: isFamily ? 300 : isCouple ? 220 : 150,
    childcare: isFamily ? 500 : 0,
    leisure: isFamily ? 600 : isCouple ? 450 : 300,
    contingency: isFamily ? 400 : isCouple ? 300 : 200
  };

  const upfrontDefaults = budgetData?.upfrontRelocation || {
    flights: isFamily ? 1800 : isCouple ? 1400 : 700,
    visaAndApostilles: isFamily ? 800 : isCouple ? 700 : 400,
    temporaryStay1Month: isFamily ? 2600 : isCouple ? 2100 : 1600,
    depositRentMultiplier: 2.5,
    starterFurniture: isFamily ? 2200 : isCouple ? 1700 : 1200,
    miscellaneousSetup: 500
  };

  // State values for Monthly Living
  const [rent, setRent] = useState(cityDefaults.rent);
  const [groceries, setGroceries] = useState(cityDefaults.groceries);
  const [transport, setTransport] = useState(cityDefaults.transport);
  const [healthInsurance, setHealthInsurance] = useState(cityDefaults.healthInsurance);
  const [utilities, setUtilities] = useState(cityDefaults.utilities);
  const [childcare, setChildcare] = useState(cityDefaults.childcare || 0);
  const [leisure, setLeisure] = useState(cityDefaults.leisure);
  const [contingency, setContingency] = useState(cityDefaults.contingency || 200);

  // State values for Upfront Costs
  const [flights, setFlights] = useState(upfrontDefaults.flights);
  const [visaFees, setVisaFees] = useState(upfrontDefaults.visaAndApostilles);
  const [tempStay, setTempStay] = useState(upfrontDefaults.temporaryStay1Month);
  const [furniture, setFurniture] = useState(upfrontDefaults.starterFurniture);

  // Sync state whenever country, city, or global persona changes!
  useEffect(() => {
    const currentCityData = budgetData?.[personaType] || budgetData?.bachelor || {
      rent: isFamily ? 2200 : isCouple ? 1600 : 1200,
      groceries: isFamily ? 850 : isCouple ? 600 : 350,
      transport: isFamily ? 120 : isCouple ? 100 : 50,
      healthInsurance: isFamily ? 350 : isCouple ? 300 : 180,
      utilities: isFamily ? 300 : isCouple ? 220 : 150,
      childcare: isFamily ? 500 : 0,
      leisure: isFamily ? 600 : isCouple ? 450 : 300,
      contingency: isFamily ? 400 : isCouple ? 300 : 200
    };
    const currentUpfront = budgetData?.upfrontRelocation || {
      flights: isFamily ? 1800 : isCouple ? 1400 : 700,
      visaAndApostilles: isFamily ? 800 : isCouple ? 700 : 400,
      temporaryStay1Month: isFamily ? 2600 : isCouple ? 2100 : 1600,
      depositRentMultiplier: 2.5,
      starterFurniture: isFamily ? 2200 : isCouple ? 1700 : 1200,
      miscellaneousSetup: 500
    };

    setRent(currentCityData.rent);
    setGroceries(currentCityData.groceries);
    setTransport(currentCityData.transport);
    setHealthInsurance(currentCityData.healthInsurance);
    setUtilities(currentCityData.utilities);
    setChildcare(currentCityData.childcare || 0);
    setLeisure(currentCityData.leisure);
    setContingency(currentCityData.contingency || 200);

    setFlights(currentUpfront.flights);
    setVisaFees(currentUpfront.visaAndApostilles);
    setTempStay(currentUpfront.temporaryStay1Month);
    setFurniture(currentUpfront.starterFurniture);
  }, [userProfile.destinationCity, userProfile.destinationCountry, userProfile.persona, budgetData, personaType]);

  // Visa Process & Fees integration
  const countryVisas = COUNTRY_VISA_DETAILS[countryData.id] || COUNTRY_VISA_DETAILS.germany;
  const [selectedVisaId, setSelectedVisaId] = useState(countryVisas.primaryVisas[0]?.id || '');
  const activeVisa = countryVisas.primaryVisas.find(v => v.id === selectedVisaId) || countryVisas.primaryVisas[0];

  useEffect(() => {
    if (countryVisas.primaryVisas.length > 0) {
      // If family mode, prioritize family visa if exists!
      if (isFamily) {
        const famVisa = countryVisas.primaryVisas.find(v => v.category === 'Family' || v.id.includes('family'));
        if (famVisa) {
          setSelectedVisaId(famVisa.id);
          return;
        }
      }
      setSelectedVisaId(countryVisas.primaryVisas[0].id);
    }
  }, [countryData.id, userProfile.persona]);

  const handleApplyVisaFee = (feeAmount) => {
    setVisaFees(Math.round(feeAmount));
  };

  // Accurate Computed Totals
  const depositMultiplier = upfrontDefaults.depositRentMultiplier || 2.5;
  const securityDeposit = rent * depositMultiplier;
  const totalUpfrontCost = flights + visaFees + tempStay + securityDeposit + furniture;
  const totalMonthlyLiving = rent + groceries + transport + healthInsurance + utilities + (isFamily ? childcare : 0) + leisure + contingency;
  const recommendedRunway3Months = (totalMonthlyLiving * 3) + totalUpfrontCost;

  const currencySymbol = countryData?.symbol || '€';
  const currencyCode = countryData?.currency || 'EUR';

  // Dual Currency Conversions
  const upfrontFmt = formatDualCurrency(totalUpfrontCost, currencyCode, displayCurrency);
  const monthlyFmt = formatDualCurrency(totalMonthlyLiving, currencyCode, displayCurrency);
  const runwayFmt = formatDualCurrency(recommendedRunway3Months, currencyCode, displayCurrency);

  // Dynamic slider limits helper
  const getSliderLimits = (baseValue) => {
    const min = 0;
    const max = Math.max(Math.round(baseValue * 3), 1000);
    const step = max > 50000 ? 500 : max > 5000 ? 50 : max > 1000 ? 25 : 5;
    return { min, max, step };
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Global Persona Sync Bar — Minimalist Ledger */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase font-mono tracking-[0.22em] text-stone-400 mb-1 flex items-center gap-1.5">
            <span>FINANCIAL INTELLIGENCE · {countryData.currency} ({countryData.symbol})</span>
            {displayCurrency !== 'LOCAL' && (
              <span className="text-terracotta-600 bg-terracotta-50 px-2 py-0.5 rounded border border-terracotta-200">
                DISPLAY: {displayCurrency}
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
            Relocation & Living Budget Projections
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
            Benchmarked for {userProfile.destinationCity}, {countryData.name} ({userProfile.persona.replace('_', ' ').toUpperCase()}).
          </p>
        </div>

        {/* Global Currency & Persona Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Universal Currency Selector */}
          <div className="flex items-center gap-1.5 bg-[#faf9f5] px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-stone-700" />
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">Currency:</span>
            <div className="relative">
              <select
                value={displayCurrency}
                onChange={(e) => onUpdateDisplayCurrency && onUpdateDisplayCurrency(e.target.value)}
                className="appearance-none bg-white border border-stone-200 hover:border-stone-400 text-stone-900 font-semibold text-xs rounded-full pl-2.5 pr-7 py-1 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer shadow-sm transition-all"
                title="Select Reference Display Currency"
              >
                {GLOBAL_DISPLAY_CURRENCIES.map(curr => (
                  <option key={curr.code} value={curr.code}>
                    {curr.code === 'LOCAL' ? `${countryData.currency} (${countryData.symbol}) Local` : curr.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-stone-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Global Persona Selector Dropdown */}
          <div className="flex items-center gap-2 bg-[#faf9f5] px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm">
            <label className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-stone-700" />
              <span className="hidden sm:inline">Party:</span>
            </label>
            <div className="relative">
              <select
                value={userProfile.persona}
                onChange={(e) => onUpdatePersona(e.target.value)}
                className="appearance-none bg-white border border-stone-200 hover:border-stone-400 text-stone-900 font-semibold text-xs rounded-full pl-3 pr-8 py-1 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer shadow-sm transition-all"
              >
                <option value="bachelor">🎒 Bachelor / Solo</option>
                <option value="couple">👫 Couple</option>
                <option value="family_kids">👨‍👩‍👧‍👦 Family with Kids</option>
                <option value="family_pets">🐾 Traveling with Pets</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-stone-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Filter Active Indicator Alerts */}
      {isCouple && (
        <div className="p-4 px-5 rounded-2xl bg-white border border-stone-200/90 text-xs text-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-2 font-medium">
            <Users className="w-4 h-4 text-stone-800 shrink-0" />
            <span><strong>Couple Mode Active:</strong> Benchmarked for dual relocation (1–2 bedroom apartment rental, groceries for two, dual transit passes, and couple health cover).</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200 shrink-0 self-start sm:self-auto">Synced Across All Tabs</span>
        </div>
      )}

      {isFamily && (
        <div className="p-4 px-5 rounded-2xl bg-white border border-stone-200/90 text-xs text-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-2 font-medium">
            <Baby className="w-4 h-4 text-stone-800 shrink-0" />
            <span><strong>Family Mode Active:</strong> Benchmarked for multi-bedroom housing, childcare/kindergarten, family groceries, and pediatric health insurance.</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200 shrink-0 self-start sm:self-auto">Synced Across All Tabs</span>
        </div>
      )}

      {/* Hero Financial Summary Cards — Gallery Accounting */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Upfront */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono uppercase tracking-wider">
            <span>Initial Upfront Sunk Capital</span>
            <PiggyBank className="w-4 h-4 text-stone-400" />
          </div>
          <div className="font-serif text-3xl font-normal text-stone-900 tracking-tight">
            {upfrontFmt.primary}
          </div>
          {upfrontFmt.secondary && (
            <div className="text-xs font-mono text-terracotta-700 bg-terracotta-50/60 px-2 py-0.5 rounded inline-block">
              {upfrontFmt.secondary}
            </div>
          )}
          <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-100 space-y-1 font-sans">
            <div>• Security Deposit ({depositMultiplier}x): <strong className="text-stone-900">{currencySymbol}{Math.round(securityDeposit).toLocaleString()}</strong></div>
            <div>• Temp Stay + Flights + Setup: <strong className="text-stone-900">{currencySymbol}{Math.round(tempStay + flights + furniture).toLocaleString()}</strong></div>
            <div>• Visa & Document Legalization: <strong className="text-stone-900">{currencySymbol}{Math.round(visaFees).toLocaleString()}</strong></div>
          </div>
        </div>

        {/* Card 2: Monthly */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono uppercase tracking-wider">
            <span>Estimated Monthly Recurring Burn</span>
            <Calculator className="w-4 h-4 text-stone-400" />
          </div>
          <div className="font-serif text-3xl font-normal text-stone-900 tracking-tight">
            {monthlyFmt.primary} <span className="text-xs text-stone-400 font-sans">/mo</span>
          </div>
          {monthlyFmt.secondary && (
            <div className="text-xs font-mono text-terracotta-700 bg-terracotta-50/60 px-2 py-0.5 rounded inline-block">
              {monthlyFmt.secondary} /mo
            </div>
          )}
          <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-100 space-y-1 font-sans">
            <div>• Rent & Utilities: <strong className="text-stone-900">{currencySymbol}{Math.round(rent + utilities).toLocaleString()}</strong></div>
            <div>• Groceries, Transit, Health: <strong className="text-stone-900">{currencySymbol}{Math.round(groceries + transport + healthInsurance).toLocaleString()}</strong></div>
            <div>• Leisure & Contingency Buffer: <strong className="text-stone-900">{currencySymbol}{Math.round(leisure + contingency + (isFamily ? childcare : 0)).toLocaleString()}</strong></div>
          </div>
        </div>

        {/* Card 3: 3-Month Runway */}
        <div className="p-6 rounded-2xl bg-[#faf9f5] border border-stone-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-600 font-mono uppercase tracking-wider">
            <span>Target Emergency Runway (3 Mo)</span>
            <ShieldCheck className="w-4 h-4 text-stone-700" />
          </div>
          <div className="font-serif text-3xl font-normal text-stone-900 tracking-tight">
            {runwayFmt.primary}
          </div>
          {runwayFmt.secondary && (
            <div className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded inline-block">
              {runwayFmt.secondary}
            </div>
          )}
          <div className="text-[11px] text-stone-600 pt-2 border-t border-stone-200/70 font-sans leading-relaxed">
            Target liquid savings = (3 × Monthly Burn of {monthlyFmt.primary}) + Upfront Capital of {upfrontFmt.primary}.
          </div>
        </div>
      </div>

      {/* Two Column Interactive Budget Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: Ongoing Monthly Living */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
            <h3 className="font-serif text-base text-stone-900 flex items-center gap-2">
              <Home className="w-4 h-4 text-stone-600" />
              Monthly Ongoing Expenses ({currencyCode})
            </h3>
            <span className="text-xs font-mono text-stone-700 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 font-medium">
              Total: {currencySymbol}{Math.round(totalMonthlyLiving).toLocaleString()}/mo
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Rent */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.rent);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Monthly Rent (2-3 Bedroom Family Apartment)' : 'Monthly Rent (1BR / Studio / WG)'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={rent}
                        onChange={(e) => setRent(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={rent}
                    onChange={(e) => setRent(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{currencySymbol}{min}</span>
                    <span>City Benchmark: {currencySymbol}{cityDefaults.rent}</span>
                    <span>{currencySymbol}{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* Groceries */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.groceries);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Groceries, Baby Supplies & Pantry' : 'Groceries & Home Cooking'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={groceries}
                        onChange={(e) => setGroceries(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={groceries}
                    onChange={(e) => setGroceries(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{currencySymbol}{min}</span>
                    <span>Benchmark: {currencySymbol}{cityDefaults.groceries}</span>
                    <span>{currencySymbol}{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* Public Transit */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.transport);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Public Transit Passes & Fuel' : 'Public Commuter Transit Pass'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={transport}
                        onChange={(e) => setTransport(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={transport}
                    onChange={(e) => setTransport(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{currencySymbol}{min}</span>
                    <span>Benchmark: {currencySymbol}{cityDefaults.transport}</span>
                    <span>{currencySymbol}{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* Health Insurance */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.healthInsurance || 200);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Health Insurance Plan / Copay' : 'Health Insurance (Employee Share)'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={healthInsurance}
                        onChange={(e) => setHealthInsurance(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={healthInsurance}
                    onChange={(e) => setHealthInsurance(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{currencySymbol}{min}</span>
                    <span>Benchmark: {currencySymbol}{cityDefaults.healthInsurance}</span>
                    <span>{currencySymbol}{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* Childcare & Schooling (Family Mode) */}
            {isFamily && (() => {
              const { min, max, step } = getSliderLimits(cityDefaults.childcare || 1000);
              return (
                <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/20 space-y-1">
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Baby className="w-3.5 h-3.5 text-indigo-400" />
                      Childcare / Kindergarten (Kita) / School Tuition
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={childcare}
                        onChange={(e) => setChildcare(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={childcare}
                    onChange={(e) => setChildcare(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{currencySymbol}{min}</span>
                    <span>Benchmark: {currencySymbol}{cityDefaults.childcare}</span>
                    <span>{currencySymbol}{max}</span>
                  </div>
                </div>
              );
            })()}

            {/* Utilities */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.utilities);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">Utilities (Heating/Electricity, High-Speed WiFi, Mobiles)</span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={utilities}
                        onChange={(e) => setUtilities(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={utilities}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}

            {/* Leisure & Dining */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.leisure);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Outings, Dining, Activities & Weekend Parks' : 'Dining Out, Leisure & Social Life'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={leisure}
                        onChange={(e) => setLeisure(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={leisure}
                    onChange={(e) => setLeisure(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}

            {/* Contingency Buffer */}
            {(() => {
              const { min, max, step } = getSliderLimits(cityDefaults.contingency || 300);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">Monthly Emergency Buffer & Unforeseen Expenses</span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={contingency}
                        onChange={(e) => setContingency(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={contingency}
                    onChange={(e) => setContingency(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}
          </div>
        </div>

        {/* Column 2: Upfront One-Time Relocation Costs */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
            <h3 className="font-serif text-base text-stone-900 flex items-center gap-2">
              <PiggyBank className="w-4 h-4 text-stone-600" />
              Upfront Relocation Capital ({currencyCode})
            </h3>
            <span className="text-xs font-mono text-stone-700 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 font-medium">
              Total: {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Security Deposit (Dynamic from Rent) */}
            <div className="p-3.5 bg-[#faf9f5] rounded-xl border border-stone-200 flex items-center justify-between">
              <div>
                <div className="font-medium text-stone-900">Apartment Rental Deposit ({depositMultiplier}x Monthly Rent)</div>
                <div className="text-[11px] text-stone-500 font-mono">
                  Calculated automatically: {depositMultiplier} × {currencySymbol}{Math.round(rent).toLocaleString()}
                </div>
              </div>
              <div className="text-base font-serif font-normal text-stone-900">
                {currencySymbol}{Math.round(securityDeposit).toLocaleString()}
              </div>
            </div>

            {/* Temporary Stay */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.temporaryStay1Month);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? '1st Month Furnished Family Apartment Stay' : '1st Month Temporary Studio / Airbnb'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={tempStay}
                        onChange={(e) => setTempStay(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={tempStay}
                    onChange={(e) => setTempStay(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}

            {/* Flights & Excess Baggage */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.flights);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Flight Tickets & Extra Baggage Allowance' : 'Flight Ticket & Excess Baggage'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={flights}
                        onChange={(e) => setFlights(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={flights}
                    onChange={(e) => setFlights(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}

            {/* Visa Fees, Apostilles & Sworn Translations */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.visaAndApostilles);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Visas, Birth/Marriage Apostilles & Translations' : 'Visa Fees, Apostilles & Sworn Translations'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={visaFees}
                        onChange={(e) => setVisaFees(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={visaFees}
                    onChange={(e) => setVisaFees(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}

            {/* Starter Furniture & Setup */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.starterFurniture);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">
                      {isFamily ? 'Family Home Setup (Kids beds, crib, cookware)' : 'Initial Home Starter Setup & Furniture'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">{currencySymbol}</span>
                      <input
                        type="number"
                        value={furniture}
                        onChange={(e) => setFurniture(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-right text-white font-bold text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={furniture}
                    onChange={(e) => setFurniture(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* INTEGRATED VISA PROCESS & DETAILED FEES MODULE — Minimalist Protocol */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400">
              IMMIGRATION & CONSULAR FEES · {countryData.name.toUpperCase()}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
              Official Visa Application & Legalization Breakdown
            </h3>
            <p className="text-xs text-stone-500 font-sans">
              Select your visa category to see itemized consular fees, police registrations, and step-by-step procedures.
            </p>
          </div>

          {/* Visa Selector Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedVisaId}
              onChange={(e) => setSelectedVisaId(e.target.value)}
              className="bg-[#faf9f5] border border-stone-200 rounded-full px-3.5 py-1.5 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-900 cursor-pointer shadow-sm"
            >
              {countryVisas.primaryVisas.map(v => (
                <option key={v.id} value={v.id}>{v.name} ({v.category})</option>
              ))}
            </select>

            <button
              onClick={() => handleApplyVisaFee(activeVisa.fees.total)}
              className="px-4 py-1.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full text-xs transition-all flex items-center gap-1.5 shadow-sm"
              title="Apply this exact fee into the Upfront Budget"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Sync to Budget</span>
            </button>
          </div>
        </div>

        {/* Selected Visa Details Card */}
        {activeVisa && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Fees Column */}
            <div className="p-5 rounded-2xl bg-[#faf9f5] border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                  Itemized Fee Breakdown
                </span>
                <span className="text-xs font-mono font-medium text-stone-900 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                  Total: {currencySymbol}{Math.round(activeVisa.fees.total).toLocaleString()}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {Object.entries(activeVisa.fees).map(([feeKey, amount]) => {
                  if (feeKey === 'total') return null;
                  const label = feeKey
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase());
                  return (
                    <div key={feeKey} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/80">
                      <span className="text-stone-600">{label}</span>
                      <span className="font-mono font-medium text-stone-900">{currencySymbol}{Math.round(amount).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-600 flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-stone-400" />
                <span>Estimated processing time: <strong className="text-stone-900">{activeVisa.processingTime}</strong></span>
              </div>
            </div>

            {/* Eligibility & Requirements */}
            <div className="p-5 rounded-2xl bg-[#faf9f5] border border-stone-200 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-stone-500">
                Core Eligibility Requirements
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {activeVisa.eligibility.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-stone-900 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Procedure */}
            <div className="p-5 rounded-2xl bg-[#faf9f5] border border-stone-200 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-stone-500">
                Visa Application Steps
              </div>
              <div className="space-y-3 text-xs">
                {activeVisa.steps.map((st, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-medium text-stone-900">{st.step}</div>
                    <div className="text-stone-500 text-[11px] leading-relaxed">{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
