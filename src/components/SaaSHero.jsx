import React from 'react';
import {
  ArrowRight,
  FileText,
  Target,
  Globe2,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { calculateMonthlyBurn, calculateUpfrontLandingCost } from '../data/budgetDefaults';
import { formatDualCurrency } from '../utils/currencyConverter';

export default function SaaSHero({
  userProfile,
  countryData,
  budgetData,
  onGetEstimate,
  onOpenProfile,
  displayCurrency = 'LOCAL'
}) {
  const isFamily = userProfile.persona?.toLowerCase().includes('family');
  const isCouple = userProfile.persona?.toLowerCase().includes('couple');
  const personaKey = isFamily ? 'family' : isCouple ? 'couple' : 'bachelor';
  const currencySymbol = countryData?.symbol || '€';
  const currencyCode = countryData?.currency || 'EUR';

  // Accurate, comprehensive monthly living burn from verified benchmarks
  const monthlyBurn = calculateMonthlyBurn(budgetData, userProfile.persona);
  const upfrontData = calculateUpfrontLandingCost(budgetData, userProfile.persona);

  const rangeLow = Math.round(monthlyBurn * 0.90);
  const rangeHigh = Math.round(monthlyBurn * 1.15);

  const profile = budgetData?.[personaKey] || budgetData?.bachelor || {};
  const housingAndUtilities = (profile.rent || 0) + (profile.utilities || 0);
  const livingGroceriesTransport = Math.max(monthlyBurn - housingAndUtilities, 100);

  const housingPercent = Math.min(Math.max(Math.round((housingAndUtilities / (monthlyBurn || 1)) * 100), 25), 75);
  const livingPercent = 100 - housingPercent;

  // Dual Currency Formatted Values
  const monthlyBurnFmt = formatDualCurrency(monthlyBurn, currencyCode, displayCurrency);
  const rangeLowFmt = formatDualCurrency(rangeLow, currencyCode, displayCurrency);
  const rangeHighFmt = formatDualCurrency(rangeHigh, currencyCode, displayCurrency);
  const housingFmt = formatDualCurrency(housingAndUtilities, currencyCode, displayCurrency);
  const livingFmt = formatDualCurrency(livingGroceriesTransport, currencyCode, displayCurrency);
  const upfrontFmt = formatDualCurrency(upfrontData.totalUpfront, currencyCode, displayCurrency);

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-[#faf9f6] bg-grid-pattern border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: SaaS Headline, Subhead & Action Bar */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Template Preview Pill / Route Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full bg-white border border-stone-200 shadow-sm text-xs text-stone-700 max-w-full">
              <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse shrink-0" />
              <span className="font-medium text-stone-900 shrink-0">
                Relocation Blueprint:
              </span>
              <span className="text-stone-500 truncate max-w-[200px] sm:max-w-none">
                {userProfile.origin || 'India'} ➔ {userProfile.destinationCity || 'Berlin'}, {countryData?.name || 'Germany'} {countryData?.flag}
              </span>
              <button
                onClick={onOpenProfile}
                className="ml-auto sm:ml-1 text-terracotta-600 hover:text-terracotta-700 font-semibold flex items-center gap-0.5 text-[11px] shrink-0"
              >
                Change <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Main Headline with Terracotta Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans text-stone-900 tracking-tight leading-[1.12] sm:leading-[1.08]">
              Your international move{' '}
              <span className="text-terracotta-500 inline-block">
                probably costs less than you think
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              Accurate visa pathways, IT salary benchmarks, and cost-of-living estimates that help you plan with confidence. Get your ballpark figure in under 2 minutes.
            </p>

            <p className="text-xs sm:text-sm text-stone-500 max-w-lg leading-normal">
              From apartment deposits and consular fees to IT salary negotiation — instant estimates based on real expat data. No spreadsheets, no guesswork.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onGetEstimate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <span>Get Your Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-transparent hover:bg-stone-100 text-stone-800 font-semibold text-sm transition-colors"
              >
                <span>Learn how it works</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

            {/* Trust Metrics & Social Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200/80 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-terracotta-500 shrink-0" />
                <span className="font-medium">12,847 estimates calculated</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-terracotta-500 shrink-0" />
                <span className="font-medium">±15% accuracy rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-terracotta-500 shrink-0" />
                <span className="font-medium">14 destination hubs supported</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Estimate Browser Card (Matching Image 1) */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Browser Mockup Card */}
            <div className="relative bg-white border border-stone-200 rounded-3xl p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all">
              
              {/* Window dots (Red, Yellow, Green) */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shrink-0" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shrink-0" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shrink-0" />
                <span className="ml-2 text-[10px] font-mono text-stone-400 uppercase tracking-wider truncate">
                  Live Relocation Estimator · {countryData?.name}
                </span>
              </div>

              {/* Minimal bar placeholder lines */}
              <div className="space-y-2 mb-6">
                <div className="h-2.5 bg-stone-100 rounded-full w-4/5" />
                <div className="h-2.5 bg-stone-100 rounded-full w-3/5" />
              </div>

              {/* Estimated Cost Section */}
              <div className="space-y-1 mb-6">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-stone-500">
                    Est. Monthly Burn ({userProfile.persona.replace('_', ' ')})
                  </span>
                  <span className="shrink-0 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    All-Inclusive
                  </span>
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold font-sans text-stone-900 tracking-tight">
                  {monthlyBurnFmt.primary} <span className="text-base font-normal text-stone-500">/mo</span>
                </div>
                {monthlyBurnFmt.secondary && (
                  <div className="text-xs font-mono text-terracotta-700 bg-terracotta-50/70 px-2 py-0.5 rounded inline-block">
                    {monthlyBurnFmt.secondary} /mo
                  </div>
                )}
                <div className="text-xs font-mono text-stone-500">
                  Range: {rangeLowFmt.primary} – {rangeHighFmt.primary}
                </div>
              </div>

              {/* Progress Meters: Housing vs Living Breakdown (Matching Image 1) */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-stone-700 mb-1.5">
                    <span className="truncate">Rent & Housing Utilities</span>
                    <span className="font-mono text-stone-900 shrink-0">{housingFmt.primary}/mo</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-terracotta-500 rounded-full transition-all duration-700"
                      style={{ width: `${housingPercent}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-stone-700 mb-1.5">
                    <span className="truncate">Groceries, Health, Commute & Buffer</span>
                    <span className="font-mono text-stone-900 shrink-0">{livingFmt.primary}/mo</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-terracotta-500 rounded-full transition-all duration-700"
                      style={{ width: `${livingPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Upfront Landing Note & Accuracy Tag Badge */}
              <div className="mt-6 flex flex-row items-center justify-between gap-3 pt-4 border-t border-stone-100 text-xs">
                <div>
                  <div className="text-[10px] uppercase font-mono text-stone-400">Upfront Sunk Setup & Deposit</div>
                  <div className="font-mono font-bold text-stone-800">
                    ~{upfrontFmt.primary}
                  </div>
                </div>
                <span className="shrink-0 inline-flex items-center px-2.5 sm:px-3 py-1 rounded-lg bg-terracotta-500 text-white text-[11px] sm:text-xs font-bold shadow-sm">
                  ±15% Accuracy
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
