import React, { useState } from 'react';
import { Calculator, DollarSign, PiggyBank, ShieldCheck, Home, ShoppingCart, Train, HeartPulse, Sparkles, AlertCircle } from 'lucide-react';

export default function BudgetCalculator({
  budgetData,
  countryData,
  userProfile
}) {
  const isDefaultFamily = userProfile.persona.toLowerCase().includes('family');
  const [personaType, setPersonaType] = useState(isDefaultFamily ? 'family' : 'bachelor');

  const cityDefaults = budgetData?.[personaType] || {
    rent: 1400,
    groceries: 400,
    transport: 80,
    healthInsurance: 160,
    utilities: 180,
    childcare: isDefaultFamily ? 500 : 0,
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

  // Editable state
  const [rent, setRent] = useState(cityDefaults.rent);
  const [groceries, setGroceries] = useState(cityDefaults.groceries);
  const [transport, setTransport] = useState(cityDefaults.transport);
  const [healthInsurance, setHealthInsurance] = useState(cityDefaults.healthInsurance);
  const [utilities, setUtilities] = useState(cityDefaults.utilities);
  const [childcare, setChildcare] = useState(cityDefaults.childcare || 0);
  const [leisure, setLeisure] = useState(cityDefaults.leisure);
  const [contingency, setContingency] = useState(cityDefaults.contingency);

  const [flights, setFlights] = useState(upfrontDefaults.flights);
  const [visaFees, setVisaFees] = useState(upfrontDefaults.visaAndApostilles);
  const [tempStay, setTempStay] = useState(upfrontDefaults.temporaryStay1Month);
  const [furniture, setFurniture] = useState(upfrontDefaults.starterFurniture);

  // Computed Totals
  const securityDeposit = rent * (upfrontDefaults.depositRentMultiplier || 2.5);
  const totalUpfrontCost = flights + visaFees + tempStay + securityDeposit + furniture;
  const totalMonthlyLiving = rent + groceries + transport + healthInsurance + utilities + (personaType === 'family' ? childcare : 0) + leisure + contingency;
  const recommendedRunway3Months = (totalMonthlyLiving * 3) + totalUpfrontCost;

  const currencySymbol = countryData?.symbol || '€';
  const currencyCode = countryData?.currency || 'EUR';

  const handlePersonaSwitch = (type) => {
    setPersonaType(type);
    const def = budgetData?.[type];
    if (def) {
      setRent(def.rent);
      setGroceries(def.groceries);
      setTransport(def.transport);
      setHealthInsurance(def.healthInsurance);
      setUtilities(def.utilities);
      setChildcare(def.childcare || 0);
      setLeisure(def.leisure);
      setContingency(def.contingency);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Persona Selector */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            Cost of Living & Relocation Calculator
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Budget Projections for {userProfile.destinationCity}, {countryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculated in local currency ({currencyCode}) for upfront sunk costs and monthly recurring burn.
          </p>
        </div>

        <div className="flex items-center bg-slate-900/80 p-1 rounded-2xl border border-slate-700">
          <button
            onClick={() => handlePersonaSwitch('bachelor')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              personaType === 'bachelor'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bachelor / Solo
          </button>
          <button
            onClick={() => handlePersonaSwitch('family')}
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
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30">
          <div className="text-xs text-indigo-300 font-semibold mb-1">Initial Upfront Sunk Capital</div>
          <div className="text-3xl font-black text-white">
            {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Includes flights, visa apostilles, 1-month temp stay, and {currencySymbol}{Math.round(securityDeposit).toLocaleString()} security deposit.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30">
          <div className="text-xs text-emerald-300 font-semibold mb-1">Estimated Monthly Burn</div>
          <div className="text-3xl font-black text-emerald-400">
            {currencySymbol}{Math.round(totalMonthlyLiving).toLocaleString()} <span className="text-xs text-slate-400 font-normal">/mo</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Warm rent, utilities, food, transit, health insurance & leisure for {personaType}.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-500/30">
          <div className="text-xs text-amber-300 font-semibold mb-1">Safe Emergency Runway (3 Months)</div>
          <div className="text-3xl font-black text-amber-300">
            {currencySymbol}{Math.round(recommendedRunway3Months).toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Recommended liquid savings in bank/forex cards to handle any transition delays.
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
            <span className="text-xs text-emerald-400 font-bold">
              {currencySymbol}{totalMonthlyLiving.toLocaleString()}/mo
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Monthly Rent (Warm / Inclusive)</span>
                <span className="font-bold text-white">{currencySymbol}{rent}</span>
              </div>
              <input
                type="range"
                min="500"
                max={personaType === 'family' ? 6000 : 3500}
                step="50"
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Groceries & Home Pantry</span>
                <span className="font-bold text-white">{currencySymbol}{groceries}</span>
              </div>
              <input
                type="range"
                min="150"
                max="2000"
                step="25"
                value={groceries}
                onChange={(e) => setGroceries(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Public Transit & Commuting</span>
                <span className="font-bold text-white">{currencySymbol}{transport}</span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={transport}
                onChange={(e) => setTransport(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Health Insurance (Employee Share)</span>
                <span className="font-bold text-white">{currencySymbol}{healthInsurance}</span>
              </div>
              <input
                type="range"
                min="0"
                max="800"
                step="20"
                value={healthInsurance}
                onChange={(e) => setHealthInsurance(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {personaType === 'family' && (
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Childcare / Kindergarten (Kita) / Schooling</span>
                  <span className="font-bold text-white">{currencySymbol}{childcare}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2500"
                  step="50"
                  value={childcare}
                  onChange={(e) => setChildcare(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Utilities (Electricity, High-speed Internet, Mobile)</span>
                <span className="font-bold text-white">{currencySymbol}{utilities}</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="10"
                value={utilities}
                onChange={(e) => setUtilities(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Dining, Leisure & Social Life</span>
                <span className="font-bold text-white">{currencySymbol}{leisure}</span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="25"
                value={leisure}
                onChange={(e) => setLeisure(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Column 2: Upfront One-Time Relocation Costs */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <PiggyBank className="w-4 h-4 text-emerald-400" />
              Upfront Relocation Capital ({currencyCode})
            </h3>
            <span className="text-xs text-indigo-400 font-bold">
              {currencySymbol}{Math.round(totalUpfrontCost).toLocaleString()}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/60 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">Apartment Rental Deposit (Kaution/Bond)</div>
                <div className="text-[11px] text-slate-400">
                  Legally capped at ~{upfrontDefaults.depositRentMultiplier}x monthly cold rent
                </div>
              </div>
              <div className="text-sm font-bold text-emerald-400">
                {currencySymbol}{Math.round(securityDeposit).toLocaleString()}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Temporary Furnished Stay (First 30 Days)</span>
                <span className="font-bold text-white">{currencySymbol}{tempStay}</span>
              </div>
              <input
                type="range"
                min="800"
                max="5000"
                step="50"
                value={tempStay}
                onChange={(e) => setTempStay(Number(e.target.value))}
                className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Flight Tickets & Excess Baggage</span>
                <span className="font-bold text-white">{currencySymbol}{flights}</span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="50"
                value={flights}
                onChange={(e) => setFlights(Number(e.target.value))}
                className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Visa Fees, Apostilles & Sworn Translations</span>
                <span className="font-bold text-white">{currencySymbol}{visaFees}</span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={visaFees}
                onChange={(e) => setVisaFees(Number(e.target.value))}
                className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Initial Home Setup & Starter Furniture</span>
                <span className="font-bold text-white">{currencySymbol}{furniture}</span>
              </div>
              <input
                type="range"
                min="200"
                max="4000"
                step="50"
                value={furniture}
                onChange={(e) => setFurniture(Number(e.target.value))}
                className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
