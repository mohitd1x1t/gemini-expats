import React from 'react';
import {
  ArrowRight,
  FileText,
  Target,
  Globe2,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function SaaSHero({
  userProfile,
  countryData,
  budgetData,
  onGetEstimate,
  onOpenProfile
}) {
  const personaKey = userProfile.persona?.toLowerCase().includes('family') ? 'family' : 'bachelor';
  const currencySymbol = countryData?.symbol || '€';
  const currencyCode = countryData?.currency || 'EUR';

  // Live estimated upfront relocation budget
  const baseRent = budgetData?.[personaKey]?.rent || (personaKey === 'family' ? 2400 : 1500);
  const deposit = baseRent * 2;
  const initialLiving = (budgetData?.[personaKey]?.groceries || 450) + (budgetData?.[personaKey]?.utilities || 250);
  const estimatedCost = baseRent + deposit + initialLiving + 500; // estimated total initial outlay

  const rangeLow = Math.round(estimatedCost * 0.88);
  const rangeHigh = Math.round(estimatedCost * 1.15);

  const housingPercent = Math.round(((baseRent + deposit) / estimatedCost) * 100);
  const visaLivingPercent = 100 - housingPercent;

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-[#faf9f6] bg-grid-pattern border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: SaaS Headline, Subhead & Action Bar */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Template Preview Pill / Route Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-xs text-stone-700">
              <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
              <span className="font-medium text-stone-900">
                Relocation Blueprint:
              </span>
              <span className="text-stone-500">
                {userProfile.origin || 'India'} ➔ {userProfile.destinationCity || 'Berlin'}, {countryData?.name || 'Germany'} {countryData?.flag}
              </span>
              <button
                onClick={onOpenProfile}
                className="ml-1 text-terracotta-600 hover:text-terracotta-700 font-semibold flex items-center gap-0.5 text-[11px]"
              >
                Change <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Main Headline with Terracotta Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-stone-900 tracking-tight leading-[1.08]">
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
                <span className="font-medium">10 destination hubs supported</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Estimate Browser Card (Matching Image 1) */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Browser Mockup Card */}
            <div className="relative bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all">
              
              {/* Window dots (Red, Yellow, Green) */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                <span className="ml-2 text-[10px] font-mono text-stone-400 uppercase tracking-wider">
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
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Estimated Outlay ({userProfile.persona.replace('_', ' ')})
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-sans text-stone-900 tracking-tight">
                  {currencySymbol}{estimatedCost.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Range: {currencySymbol}{rangeLow.toLocaleString()} – {currencySymbol}{rangeHigh.toLocaleString()} {currencyCode}
                </div>
              </div>

              {/* Progress Meters: Housing vs Visa/Living (Matching Image 1) */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1.5">
                    <span>Rent & Deposit (First 30 Days)</span>
                    <span className="font-mono text-stone-900">{currencySymbol}{(baseRent + deposit).toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-terracotta-500 rounded-full transition-all duration-700"
                      style={{ width: `${housingPercent}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1.5">
                    <span>Visa, Living & Buffer Funds</span>
                    <span className="font-mono text-stone-900">{currencySymbol}{(initialLiving + 500).toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-terracotta-500 rounded-full transition-all duration-700"
                      style={{ width: `${visaLivingPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Accuracy Tag Badge (Terracotta) */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Real-time market benchmark</span>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-terracotta-500 text-white text-xs font-bold shadow-sm">
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
