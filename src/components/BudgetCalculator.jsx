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
  HelpCircle
} from 'lucide-react';
import { COUNTRY_VISA_DETAILS } from '../data/visaData';

export default function BudgetCalculator({
  budgetData,
  countryData,
  userProfile
}) {
  const isDefaultFamily = userProfile.persona.toLowerCase().includes('family');
  const [personaType, setPersonaType] = useState(isDefaultFamily ? 'family' : 'bachelor');

  // Get active defaults
  const cityDefaults = budgetData?.[personaType] || {
    rent: 1400,
    groceries: 400,
    transport: 80,
    healthInsurance: 160,
    utilities: 180,
    childcare: personaType === 'family' ? 500 : 0,
    leisure: 350,
    contingency: 250
  };

  const upfrontDefaults = budgetData?.upfrontRelocation || {
    flights: 700,
    visaAndApostilles: 400,
    temporaryStay1Month: 1800,
    depositRentMultiplier: 2.5,
    starterFurniture: 1200,
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

  // Sync state whenever country, city, or persona switches
  useEffect(() => {
    const currentCityData = budgetData?.[personaType] || {
      rent: 1400,
      groceries: 400,
      transport: 80,
      healthInsurance: 160,
      utilities: 180,
      childcare: personaType === 'family' ? 500 : 0,
      leisure: 350,
      contingency: 250
    };
    const currentUpfront = budgetData?.upfrontRelocation || {
      flights: 700,
      visaAndApostilles: 400,
      temporaryStay1Month: 1800,
      depositRentMultiplier: 2.5,
      starterFurniture: 1200,
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
  }, [userProfile.destinationCity, userProfile.destinationCountry, personaType, budgetData]);

  // Visa Process & Fees integration
  const countryVisas = COUNTRY_VISA_DETAILS[countryData.id] || COUNTRY_VISA_DETAILS.germany;
  const [selectedVisaId, setSelectedVisaId] = useState(countryVisas.primaryVisas[0]?.id || '');
  const activeVisa = countryVisas.primaryVisas.find(v => v.id === selectedVisaId) || countryVisas.primaryVisas[0];

  useEffect(() => {
    if (countryVisas.primaryVisas.length > 0) {
      setSelectedVisaId(countryVisas.primaryVisas[0].id);
    }
  }, [countryData.id]);

  // Handle applying calculated visa fee to upfront budget
  const handleApplyVisaFee = (feeAmount) => {
    setVisaFees(Math.round(feeAmount));
  };

  // Accurate Computed Totals
  const depositMultiplier = upfrontDefaults.depositRentMultiplier || 2.5;
  const securityDeposit = rent * depositMultiplier;
  const totalUpfrontCost = flights + visaFees + tempStay + securityDeposit + furniture;
  const totalMonthlyLiving = rent + groceries + transport + healthInsurance + utilities + (personaType === 'family' ? childcare : 0) + leisure + contingency;
  const recommendedRunway3Months = (totalMonthlyLiving * 3) + totalUpfrontCost;

  const currencySymbol = countryData?.symbol || '€';
  const currencyCode = countryData?.currency || 'EUR';

  // Helper for dynamic slider limits based on base numbers
  const getSliderLimits = (baseValue) => {
    const min = 0;
    const max = Math.max(Math.round(baseValue * 3), 1000);
    const step = max > 50000 ? 500 : max > 5000 ? 50 : max > 1000 ? 25 : 5;
    return { min, max, step };
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Persona Selector */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            Cost of Living, Sunk Costs & Visa Budgeting
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Budget Projections for {userProfile.destinationCity}, {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculated in local currency ({currencyCode}) with live synchronized sliders, direct numeric inputs, and visa process fees.
          </p>
        </div>

        <div className="flex items-center bg-slate-900/80 p-1 rounded-2xl border border-slate-700">
          <button
            onClick={() => setPersonaType('bachelor')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              personaType === 'bachelor'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bachelor / Solo
          </button>
          <button
            onClick={() => setPersonaType('family')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              personaType === 'family'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Family with Kids
          </button>
        </div>
      </div>

      {/* Hero Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Upfront */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30">
          <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold mb-1">
            <span>Initial Upfront Sunk Capital</span>
            <PiggyBank className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-black text-white tracking-tight">
            {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-2 space-y-0.5">
            <div>• Security Deposit ({depositMultiplier}x): <strong className="text-white">{currencySymbol}{Math.round(securityDeposit).toLocaleString()}</strong></div>
            <div>• Temp Stay + Flights + Setup: <strong className="text-white">{currencySymbol}{Math.round(tempStay + flights + furniture).toLocaleString()}</strong></div>
            <div>• Visa & Document Legalization: <strong className="text-white">{currencySymbol}{Math.round(visaFees).toLocaleString()}</strong></div>
          </div>
        </div>

        {/* Card 2: Monthly */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30">
          <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-1">
            <span>Estimated Monthly Recurring Burn</span>
            <Calculator className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400 tracking-tight">
            {currencySymbol}{Math.round(totalMonthlyLiving).toLocaleString()} <span className="text-xs text-slate-400 font-normal">/mo</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-2 space-y-0.5">
            <div>• Warm Rent & Utilities: <strong className="text-white">{currencySymbol}{Math.round(rent + utilities).toLocaleString()}</strong></div>
            <div>• Groceries, Transit, Health: <strong className="text-white">{currencySymbol}{Math.round(groceries + transport + healthInsurance).toLocaleString()}</strong></div>
            <div>• Leisure & Childcare Buffer: <strong className="text-white">{currencySymbol}{Math.round(leisure + contingency + (personaType === 'family' ? childcare : 0)).toLocaleString()}</strong></div>
          </div>
        </div>

        {/* Card 3: 3-Month Runway */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-500/30">
          <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-1">
            <span>Recommended Emergency Runway (3 Months)</span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-amber-300 tracking-tight">
            {currencySymbol}{Math.round(recommendedRunway3Months).toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Target liquid cash buffer = (3 × Monthly Burn of {currencySymbol}{Math.round(totalMonthlyLiving).toLocaleString()}) + Upfront Capital of {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}.
          </div>
        </div>
      </div>

      {/* Two Column Interactive Budget Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: Ongoing Monthly Living */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Home className="w-4 h-4 text-blue-400" />
              Monthly Ongoing Expenses ({currencyCode})
            </h3>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
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
                    <span className="font-medium">Monthly Rent (Warm / Base + Condomínio)</span>
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
                    <span>Benchmark: {currencySymbol}{cityDefaults.rent}</span>
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
                    <span className="font-medium">Groceries, Supermarket & Fresh Produce</span>
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
                    <span className="font-medium">Public Transit & Commuting Pass</span>
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
                    <span className="font-medium">Health Insurance (Monthly Plan / Copay)</span>
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

            {/* Childcare (if family) */}
            {personaType === 'family' && (() => {
              const { min, max, step } = getSliderLimits(cityDefaults.childcare || 1000);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">Childcare / Schooling / Kindergarten</span>
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
                    <span className="font-medium">Utilities (Electricity, WiFi, Mobile)</span>
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
                    <span className="font-medium">Dining Out, Leisure & Weekends</span>
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
                    <span className="font-medium">Monthly Contingency & Buffer</span>
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
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <PiggyBank className="w-4 h-4 text-emerald-400" />
              Upfront Relocation Capital ({currencyCode})
            </h3>
            <span className="text-xs text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
              Total: {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Security Deposit (Dynamic from Rent) */}
            <div className="p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">Apartment Rental Deposit ({depositMultiplier}x Monthly Rent)</div>
                <div className="text-[11px] text-slate-400">
                  Calculated automatically: {depositMultiplier} × {currencySymbol}{Math.round(rent).toLocaleString()}
                </div>
              </div>
              <div className="text-base font-black text-emerald-400">
                {currencySymbol}{Math.round(securityDeposit).toLocaleString()}
              </div>
            </div>

            {/* Temporary Stay */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.temporaryStay1Month);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">1st Month Temporary Stay (Airbnb / Furnished)</span>
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
                    <span className="font-medium">Flight Tickets & Excess Baggage</span>
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
                    <span className="font-medium">Visa Fees, Apostilles & Sworn Translations</span>
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
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Adjust manually or select your visa category below!</span>
                    <span className="text-indigo-400 font-semibold">{currencySymbol}{visaFees}</span>
                  </div>
                </div>
              );
            })()}

            {/* Starter Furniture & Setup */}
            {(() => {
              const { min, max, step } = getSliderLimits(upfrontDefaults.starterFurniture);
              return (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="font-medium">Initial Home Starter Setup & Furniture</span>
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

      {/* INTEGRATED VISA PROCESS & DETAILED FEES MODULE */}
      <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              Integrated Visa Process & Government Fees
            </div>
            <h3 className="text-lg font-bold text-white">
              Official Visa Application & Legalization Breakdown ({countryData.name})
            </h3>
            <p className="text-xs text-slate-400">
              Select your visa category to see itemized consular fees, police registrations, and step-by-step procedures.
            </p>
          </div>

          {/* Visa Selector Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedVisaId}
              onChange={(e) => setSelectedVisaId(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-purple-500"
            >
              {countryVisas.primaryVisas.map(v => (
                <option key={v.id} value={v.id}>{v.name} ({v.category})</option>
              ))}
            </select>

            <button
              onClick={() => handleApplyVisaFee(activeVisa.fees.total)}
              className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-md shadow-purple-600/20"
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
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-purple-300">
                  Itemized Fee Breakdown
                </span>
                <span className="text-xs font-extrabold text-white bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
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
                    <div key={feeKey} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">{label}</span>
                      <span className="font-mono font-bold text-white">{currencySymbol}{Math.round(amount).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-[11px] text-purple-300 flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-purple-400" />
                <span>Estimated processing time: <strong>{activeVisa.processingTime}</strong></span>
              </div>
            </div>

            {/* Eligibility & Requirements */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-emerald-300">
                Core Eligibility Requirements
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeVisa.eligibility.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Procedure */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-blue-300">
                Visa Application Steps
              </div>
              <div className="space-y-2.5 text-xs">
                {activeVisa.steps.map((st, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-bold text-slate-200">{st.step}</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">{st.desc}</div>
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
