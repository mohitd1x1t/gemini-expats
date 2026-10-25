import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Scale,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Building2,
  Plane,
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { CITY_BUDGET_BENCHMARKS, calculateMonthlyBurn } from '../data/budgetDefaults';

export default function OfferComparison({ userProfile, countryData }) {
  // Offer 1 (e.g. Current Destination - Berlin, Germany)
  const [offer1, setOffer1] = useState({
    title: 'Offer A: Berlin, Germany',
    countryId: 'germany',
    cityName: 'Berlin',
    currency: 'EUR',
    symbol: '€',
    grossSalary: 85000,
    taxRatePercent: 38, // Income tax + Solidarity
    socialSecurityPercent: 12, // Pension, Health, Unemployment, Care
    annualSchoolingCost: userProfile.persona.includes('family') ? 4000 : 0,
    annualFlightsHome: 1800
  });

  // Offer 2 (e.g. Alternative - Dubai, UAE)
  const [offer2, setOffer2] = useState({
    title: 'Offer B: Dubai, UAE',
    countryId: 'uae',
    cityName: 'Dubai',
    currency: 'AED',
    symbol: 'AED ',
    grossSalary: 360000,
    taxRatePercent: 0, // Zero personal income tax
    socialSecurityPercent: 0, // No GPSSA for expats
    annualSchoolingCost: userProfile.persona.includes('family') ? 35000 : 0,
    annualFlightsHome: 8000
  });

  // Calculate economics for Offer 1
  const econ1 = useMemo(() => {
    const gross = offer1.grossSalary;
    const taxes = Math.round(gross * (offer1.taxRatePercent / 100));
    const social = Math.round(gross * (offer1.socialSecurityPercent / 100));
    const netTakeHome = Math.max(0, gross - taxes - social);

    // Living burn from benchmark database
    const budgetData1 = CITY_BUDGET_BENCHMARKS.berlin;
    const monthlyBurn1 = calculateMonthlyBurn(budgetData1, userProfile.persona);
    const annualLivingCosts = monthlyBurn1 * 12;

    const totalOutflows = annualLivingCosts + offer1.annualSchoolingCost + offer1.annualFlightsHome;
    const netSavings = netTakeHome - totalOutflows;

    return {
      gross,
      taxes,
      social,
      netTakeHome,
      annualLivingCosts,
      totalOutflows,
      netSavings,
      savingsRatePercent: netTakeHome > 0 ? Math.round((netSavings / netTakeHome) * 100) : 0
    };
  }, [offer1, userProfile.persona]);

  // Calculate economics for Offer 2
  const econ2 = useMemo(() => {
    const gross = offer2.grossSalary;
    const taxes = Math.round(gross * (offer2.taxRatePercent / 100));
    const social = Math.round(gross * (offer2.socialSecurityPercent / 100));
    const netTakeHome = Math.max(0, gross - taxes - social);

    const budgetData2 = CITY_BUDGET_BENCHMARKS.dubai;
    const monthlyBurn2 = calculateMonthlyBurn(budgetData2, userProfile.persona);
    const annualLivingCosts = monthlyBurn2 * 12;

    const totalOutflows = annualLivingCosts + offer2.annualSchoolingCost + offer2.annualFlightsHome;
    const netSavings = netTakeHome - totalOutflows;

    return {
      gross,
      taxes,
      social,
      netTakeHome,
      annualLivingCosts,
      totalOutflows,
      netSavings,
      savingsRatePercent: netTakeHome > 0 ? Math.round((netSavings / netTakeHome) * 100) : 0
    };
  }, [offer2, userProfile.persona]);

  // Normalization to USD for true cross-corridor comparison (1 EUR ≈ 1.08 USD, 1 USD ≈ 3.67 AED)
  const eurToUsd = 1.08;
  const aedToUsd = 0.272;

  const savings1InUsd = Math.round(econ1.netSavings * eurToUsd);
  const savings2InUsd = Math.round(econ2.netSavings * aedToUsd);

  const winningOffer = savings1InUsd >= savings2InUsd ? offer1.title : offer2.title;
  const usdDelta = Math.abs(savings1InUsd - savings2InUsd);

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Scale className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Dual-Corridor Showdown Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Relocation Offer & Corridor Showdown
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Compare two competing international job offers. Factors progressive taxation, mandatory social security, private schooling, and rent to answer: <em>"Which package leaves me with more disposable savings?"</em>
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <span>Normalized in <strong>USD ($)</strong></span>
        </div>
      </div>

      {/* Outcome Winner Banner */}
      <div className="p-6 rounded-3xl bg-[#181325] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl border border-white/10">
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-terracotta-400 font-bold">
            Disposable Income Winner:
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-white">
            {winningOffer}
          </div>
          <p className="text-xs text-stone-300">
            Yields ~<strong>\${usdDelta.toLocaleString()} more</strong> in net annual liquid savings after all taxes, rent, schooling, and travel home.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono self-start sm:self-auto pt-2 sm:pt-0">
          <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-center">
            <span className="text-[10px] text-stone-400 block">Offer A Savings</span>
            <span className="font-bold text-white">\${savings1InUsd.toLocaleString()} / yr</span>
          </div>
          <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-center">
            <span className="text-[10px] text-stone-400 block">Offer B Savings</span>
            <span className="font-bold text-white">\${savings2InUsd.toLocaleString()} / yr</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Offer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Offer 1 Card */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-stone-400 block">Corridor 1</span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{offer1.title}</h3>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-800">
              {offer1.currency}
            </span>
          </div>

          {/* Interactive Gross Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-stone-500">Gross Annual Base Offer</label>
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 font-mono text-base font-bold text-stone-900">
              <span>{offer1.symbol}</span>
              <input
                type="number"
                value={offer1.grossSalary}
                onChange={(e) => setOffer1(prev => ({ ...prev, grossSalary: Number(e.target.value) || 0 }))}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="space-y-2 text-xs font-mono pt-2 border-t border-stone-100">
            <div className="flex justify-between text-stone-600">
              <span>Estimated Income Tax ({offer1.taxRatePercent}%)</span>
              <span className="text-rose-600 font-semibold">-{offer1.symbol}{econ1.taxes.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Social Security & Pension ({offer1.socialSecurityPercent}%)</span>
              <span className="text-rose-600 font-semibold">-{offer1.symbol}{econ1.social.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-900 font-bold pt-1 border-t border-stone-100">
              <span>Net Annual Take-Home Pay</span>
              <span>{offer1.symbol}{econ1.netTakeHome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-600 pt-1">
              <span>Annual Living & Rent Outflows</span>
              <span>-{offer1.symbol}{econ1.annualLivingCosts.toLocaleString()}</span>
            </div>
            {offer1.annualSchoolingCost > 0 && (
              <div className="flex justify-between text-stone-600">
                <span>Tuition / Schooling</span>
                <span>-{offer1.symbol}{offer1.annualSchoolingCost.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-stone-600">
              <span>Annual Flights Home</span>
              <span>-{offer1.symbol}{offer1.annualFlightsHome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-emerald-800 bg-emerald-50 p-2.5 rounded-xl font-bold border border-emerald-200 mt-2">
              <span>Net Annual Savings Potential</span>
              <span>{offer1.symbol}{econ1.netSavings.toLocaleString()} (~${savings1InUsd.toLocaleString()})</span>
            </div>
          </div>
        </div>

        {/* Offer 2 Card */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-stone-400 block">Corridor 2</span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{offer2.title}</h3>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-800">
              {offer2.currency}
            </span>
          </div>

          {/* Interactive Gross Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-stone-500">Gross Annual Base Offer</label>
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 font-mono text-base font-bold text-stone-900">
              <span>{offer2.symbol}</span>
              <input
                type="number"
                value={offer2.grossSalary}
                onChange={(e) => setOffer2(prev => ({ ...prev, grossSalary: Number(e.target.value) || 0 }))}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="space-y-2 text-xs font-mono pt-2 border-t border-stone-100">
            <div className="flex justify-between text-stone-600">
              <span>Estimated Income Tax (0%)</span>
              <span className="text-emerald-700 font-semibold">{offer2.symbol}0</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Social Security & Pension (0%)</span>
              <span className="text-emerald-700 font-semibold">{offer2.symbol}0</span>
            </div>
            <div className="flex justify-between text-stone-900 font-bold pt-1 border-t border-stone-100">
              <span>Net Annual Take-Home Pay</span>
              <span>{offer2.symbol}{econ2.netTakeHome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-600 pt-1">
              <span>Annual Living & Rent Outflows</span>
              <span>-{offer2.symbol}{econ2.annualLivingCosts.toLocaleString()}</span>
            </div>
            {offer2.annualSchoolingCost > 0 && (
              <div className="flex justify-between text-stone-600">
                <span>Tuition / Schooling</span>
                <span>-{offer2.symbol}{offer2.annualSchoolingCost.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-stone-600">
              <span>Annual Flights Home</span>
              <span>-{offer2.symbol}{offer2.annualFlightsHome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-emerald-800 bg-emerald-50 p-2.5 rounded-xl font-bold border border-emerald-200 mt-2">
              <span>Net Annual Savings Potential</span>
              <span>{offer2.symbol}{econ2.netSavings.toLocaleString()} (~${savings2InUsd.toLocaleString()})</span>
            </div>
          </div>
        </div>

      </div>

      {/* Uncertainty Notice */}
      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-stone-600 text-xs flex items-center gap-2.5">
        <AlertCircle className="w-4 h-4 text-stone-400 shrink-0" />
        <p className="leading-relaxed">
          <strong>Tax & Living Cost Realities:</strong> Tax calculations assume standard deductions and single/family filing status without bespoke capital allowances. Actual savings depend on discretionary lifestyles, inflation, and currency exchange volatility.
        </p>
      </div>

    </div>
  );
}
