import React, { useState, useMemo, useEffect } from 'react';
import {
  TrendingUp,
  Award,
  ShieldCheck,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  Building2,
  CheckCircle2,
  Layers,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import {
  IT_ROLES,
  EXPERIENCE_LEVELS,
  calculateSalaryBenchmark,
  evaluateExpatOffer
} from '../data/salaryData';
import { CITY_BUDGET_BENCHMARKS, getCityBudgetData, calculateMonthlyBurn } from '../data/budgetDefaults';

export default function SalaryBenchmark({
  countryData,
  userProfile,
  onOpenBudgetTab
}) {
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');

  // Role and Seniority selectors
  const [selectedRoleId, setSelectedRoleId] = useState('backend_engineer');
  const [selectedExpId, setSelectedExpId] = useState('senior');

  // Calculate market benchmark
  const benchmark = useMemo(() => {
    return calculateSalaryBenchmark(
      selectedRoleId,
      selectedExpId,
      countryData.id,
      userProfile.destinationCity
    );
  }, [selectedRoleId, selectedExpId, countryData.id, userProfile.destinationCity]);

  // Offered salary input state
  const [offeredSalary, setOfferedSalary] = useState(() => benchmark.p50);

  // When destination country changes (different currency/scale), synchronize default
  const [currentCountryId, setCurrentCountryId] = useState(countryData.id);
  useEffect(() => {
    if (countryData.id !== currentCountryId) {
      setCurrentCountryId(countryData.id);
      setOfferedSalary(benchmark.p50);
    }
  }, [countryData.id, currentCountryId, benchmark.p50]);

  // Evaluate current offer
  const evaluation = useMemo(() => {
    return evaluateExpatOffer(offeredSalary, benchmark, userProfile.persona);
  }, [offeredSalary, benchmark, userProfile.persona]);

  // Accurate living costs pulled from budget database
  const cityBudget = getCityBudgetData(userProfile.destinationCity, countryData.id);
  const totalMonthlyExpenses = calculateMonthlyBurn(cityBudget, userProfile.persona);
  const monthlySavingsPotential = Math.max(0, evaluation.monthlyNet - totalMonthlyExpenses);

  const currencySymbol = benchmark.symbol;
  const sliderMin = Math.max(1000, Math.round(benchmark.p25 * 0.4));
  const sliderMax = Math.round(benchmark.p90 * 1.8);
  const sliderStep = benchmark.currency === 'JPY' ? 100000 : 1000;

  // Percentage position on market bar for visual indicator
  const clampedOffer = Math.max(sliderMin, Math.min(sliderMax, offeredSalary));
  const marketPositionPercent = Math.round(((clampedOffer - sliderMin) / (sliderMax - sliderMin)) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-stone-700" />
            <span>Compensation Intelligence · IT & Tech Sector</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Expat Salary Benchmark for <em className="italic font-serif">{userProfile.destinationCity}</em>, {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Compare your compensation offer against verified tech market percentiles, statutory work visa thresholds, and living cost coverage.
          </p>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-2xl flex items-center gap-2.5 text-xs text-stone-700 self-start md:self-center">
          <Building2 className="w-4 h-4 text-stone-500 shrink-0" />
          <span className="font-mono text-[11px]">Sector: <strong>Information Technology</strong></span>
        </div>
      </div>

      {/* Role & Seniority Selector Bar */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Role Dropdown */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 font-medium flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-stone-700" />
              <span>Job Designation & Tech Discipline</span>
            </label>
            <div className="relative">
              <select
                value={selectedRoleId}
                onChange={(e) => setSelectedRoleId(e.target.value)}
                className="w-full appearance-none bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-900 text-xs font-medium rounded-2xl pl-4 pr-9 py-2.5 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer transition-all"
              >
                {IT_ROLES.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.name} ({role.category})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-stone-500">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Seniority Selector Pills */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 font-medium flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-stone-700" />
              <span>Seniority & Years of Experience</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {EXPERIENCE_LEVELS.map(exp => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                    selectedExpId === exp.id
                      ? 'bg-terracotta-500 border-terracotta-500 text-white shadow-sm'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-terracotta-300 hover:text-stone-900'
                  }`}
                >
                  <span>{exp.label.split('/')[0]}</span>
                  <span className="text-[10px] font-mono opacity-60 ml-1">({exp.years})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Offered Salary Slider & Input */}
        <div className="pt-4 border-t border-stone-100 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="font-serif text-stone-900 text-base">Your Offered Annual Base Salary</div>
              <p className="text-xs text-stone-500">Gross annual base package in {benchmark.currency} ({currencySymbol})</p>
            </div>

            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-2xl px-4 py-2 self-start sm:self-auto">
              <span className="font-mono text-sm font-semibold text-stone-500">{currencySymbol}</span>
              <input
                type="number"
                value={offeredSalary}
                onChange={(e) => setOfferedSalary(Math.max(0, Number(e.target.value) || 0))}
                step={sliderStep}
                className="bg-transparent font-mono text-lg font-bold text-stone-900 focus:outline-none w-36"
              />
              <span className="text-[10px] font-mono uppercase text-stone-400">/ yr</span>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <input
              type="range"
              min={sliderMin}
              max={sliderMax}
              step={sliderStep}
              value={clampedOffer}
              onChange={(e) => setOfferedSalary(Number(e.target.value))}
              className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-400 gap-1">
              <span className="truncate">Min ({currencySymbol}{sliderMin.toLocaleString()})</span>
              <span className="truncate text-center">Median ({currencySymbol}{benchmark.p50.toLocaleString()})</span>
              <span className="truncate text-right">Max ({currencySymbol}{sliderMax.toLocaleString()})</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="text-[10px] font-mono uppercase text-stone-400">Quick Presets:</span>
            <button
              onClick={() => setOfferedSalary(benchmark.p25)}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors"
            >
              25th: {currencySymbol}{benchmark.p25.toLocaleString()}
            </button>
            <button
              onClick={() => setOfferedSalary(benchmark.p50)}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 font-bold transition-colors"
            >
              Median: {currencySymbol}{benchmark.p50.toLocaleString()}
            </button>
            <button
              onClick={() => setOfferedSalary(benchmark.p75)}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors"
            >
              75th: {currencySymbol}{benchmark.p75.toLocaleString()}
            </button>
            <button
              onClick={() => setOfferedSalary(benchmark.p90)}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors"
            >
              90th: {currencySymbol}{benchmark.p90.toLocaleString()}
            </button>
          </div>
        </div>
      </div>

      {/* Market Percentile Comparison Gauge & Verdict */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Market Benchmark Percentiles (2 Cols) */}
        <div className="lg:col-span-2 p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Regional Distribution</div>
              <h3 className="text-xl font-serif text-stone-900 mt-0.5">
                {benchmark.role.name} • {benchmark.exp.label}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Market Median</span>
              <div className="font-serif text-xl font-medium text-stone-900">
                {currencySymbol}{benchmark.p50.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Percentile Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className={`p-4 rounded-2xl border transition-all ${
              offeredSalary < benchmark.p50
                ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                : 'bg-stone-50 border-stone-200/80 text-stone-900'
            }`}>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${offeredSalary < benchmark.p50 ? 'text-stone-300' : 'text-stone-400'}`}>
                25th Percentile
              </div>
              <div className="font-serif text-base font-semibold mt-1">
                {currencySymbol}{benchmark.p25.toLocaleString()}
              </div>
              <div className={`text-[10px] mt-0.5 ${offeredSalary < benchmark.p50 ? 'text-stone-300' : 'text-stone-500'}`}>
                Entry / Below Avg
              </div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${
              offeredSalary >= benchmark.p50 && offeredSalary < benchmark.p75
                ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                : 'bg-stone-50 border-stone-200/80 text-stone-900'
            }`}>
              <div className={`text-[10px] font-mono uppercase tracking-wider font-bold ${offeredSalary >= benchmark.p50 && offeredSalary < benchmark.p75 ? 'text-stone-300' : 'text-stone-500'}`}>
                50th (Median)
              </div>
              <div className="font-serif text-base font-bold mt-1">
                {currencySymbol}{benchmark.p50.toLocaleString()}
              </div>
              <div className={`text-[10px] mt-0.5 ${offeredSalary >= benchmark.p50 && offeredSalary < benchmark.p75 ? 'text-stone-300' : 'text-stone-600'}`}>
                Standard Market
              </div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${
              offeredSalary >= benchmark.p75 && offeredSalary < benchmark.p90
                ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                : 'bg-stone-50 border-stone-200/80 text-stone-900'
            }`}>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${offeredSalary >= benchmark.p75 && offeredSalary < benchmark.p90 ? 'text-stone-300' : 'text-stone-400'}`}>
                75th Percentile
              </div>
              <div className="font-serif text-base font-semibold mt-1">
                {currencySymbol}{benchmark.p75.toLocaleString()}
              </div>
              <div className={`text-[10px] mt-0.5 ${offeredSalary >= benchmark.p75 && offeredSalary < benchmark.p90 ? 'text-stone-300' : 'text-stone-500'}`}>
                Top-Tier Tech
              </div>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${
              offeredSalary >= benchmark.p90
                ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                : 'bg-stone-50 border-stone-200/80 text-stone-900'
            }`}>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${offeredSalary >= benchmark.p90 ? 'text-stone-300' : 'text-stone-400'}`}>
                90th Percentile
              </div>
              <div className="font-serif text-base font-semibold mt-1">
                {currencySymbol}{benchmark.p90.toLocaleString()}
              </div>
              <div className={`text-[10px] mt-0.5 ${offeredSalary >= benchmark.p90 ? 'text-stone-300' : 'text-stone-500'}`}>
                Elite Multinationals
              </div>
            </div>
          </div>

          {/* Visa Compliance Banner */}
          <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
            evaluation.meetsVisa
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/80 border-rose-200 text-rose-950'
          }`}>
            <div className="w-8 h-8 rounded-full bg-white border border-current/20 flex items-center justify-center shrink-0 mt-0.5">
              {evaluation.meetsVisa ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-700" />
              )}
            </div>
            <div className="text-xs space-y-0.5">
              <div className="font-serif font-semibold text-sm">
                {evaluation.meetsVisa ? 'Work Visa Legal Threshold: Compliant' : 'Immigration Legal Warning: Salary Below Minimum Threshold'}
              </div>
              <p className="leading-relaxed opacity-90">
                Official statutory minimum for <strong>{benchmark.visaName}</strong> in {benchmark.countryName}: {currencySymbol}{benchmark.visaThreshold.toLocaleString()}/year.
                {evaluation.meetsVisa
                  ? ` Your offer of ${currencySymbol}${offeredSalary.toLocaleString()} safely exceeds the legal threshold required for foreign specialist work authorization.`
                  : ` Your offer of ${currencySymbol}${offeredSalary.toLocaleString()} is below the required legal salary threshold. The immigration authority may reject your work permit application on wage dumping grounds.`}
              </p>
            </div>
          </div>
        </div>

        {/* Verdict & Take-Home Summary Card (1 Col) */}
        <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Compensation Verdict</div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  evaluation.rating === 'exceptional' || evaluation.rating === 'strong'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : evaluation.rating === 'fair'
                    ? 'bg-stone-100 text-stone-800 border-stone-300'
                    : evaluation.rating === 'below_average'
                    ? 'bg-amber-50 text-amber-900 border-amber-200'
                    : 'bg-rose-50 text-rose-900 border-rose-200'
                }`}>
                  {evaluation.badgeLabel}
                </span>
                <span className="font-mono text-xs text-stone-500 font-semibold">
                  {evaluation.diffFromMedian >= 0 ? `+${evaluation.diffFromMedian}%` : `${evaluation.diffFromMedian}%`}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              {evaluation.narrative}
            </p>

            {/* Estimated Take-Home Breakdown */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-stone-500 font-mono text-[11px]">
                <span>Gross Monthly:</span>
                <span className="font-bold text-stone-900">{currencySymbol}{evaluation.monthlyGross.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-stone-500 font-mono text-[11px]">
                <span>Est. Tax & Social ({evaluation.taxRatePercentage}%):</span>
                <span className="text-stone-600">-{currencySymbol}{Math.round(evaluation.annualTax / 12).toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <span className="font-serif text-stone-900 font-medium text-sm">Est. Net Take-Home:</span>
                <span className="font-serif text-lg font-semibold text-stone-900">
                  {currencySymbol}{evaluation.monthlyNet.toLocaleString()}
                  <span className="text-[10px] font-mono text-stone-400 font-normal"> / mo</span>
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-stone-400 border-t border-stone-100 pt-3">
            Party Mode: <strong className="text-stone-700 capitalize">{userProfile.persona.replace('_', ' ')}</strong>
          </div>
        </div>
      </div>

      {/* Purchasing Power & Living Cost Coverage */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Purchasing Power Analysis</div>
            <h3 className="text-xl font-serif text-stone-900 mt-0.5">
              Cost of Living Coverage in {userProfile.destinationCity}
            </h3>
          </div>
          <button
            onClick={onOpenBudgetTab}
            className="flex items-center gap-1.5 text-xs font-mono text-stone-600 hover:text-stone-900 underline underline-offset-4 self-start sm:self-auto"
          >
            <span>View Complete Budget Ledger</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Estimated Monthly Rent</span>
            <div className="text-lg font-serif font-medium text-stone-900">
              {currencySymbol}{Math.round(estimatedRent).toLocaleString()}
            </div>
            <p className="text-stone-500 text-[11px]">
              {isFamily ? 'Average 2–3 BR family apartment' : 'Average 1 BR / studio apartment in central city'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Living Expenses & Transport</span>
            <div className="text-lg font-serif font-medium text-stone-900">
              {currencySymbol}{Math.round(estimatedLivingCosts).toLocaleString()}
            </div>
            <p className="text-stone-500 text-[11px]">
              Groceries, utilities advance, mobile/wifi, and municipal commuter pass
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900 text-white space-y-1">
            <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Monthly Discretionary Savings</span>
            <div className="text-2xl font-serif font-medium text-white">
              {currencySymbol}{monthlySavingsPotential.toLocaleString()}
            </div>
            <p className="text-stone-300 text-[11px]">
              Estimated disposable savings remaining after all monthly living costs
            </p>
          </div>
        </div>

        <p className="text-xs text-stone-500 italic leading-relaxed pt-1">
          Tax Note: {benchmark.country.taxEstimate.notes}
        </p>
      </div>

      {/* Expat Relocation Package Negotiation Checklist */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-stone-700" />
          <span>Expat Relocation Benefits & Negotiation Playbook ({benchmark.countryName})</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs text-stone-600">
          {benchmark.country.relocationPerks.map((perk, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
              <span className="font-mono text-stone-400 font-bold shrink-0 mt-0.5">0{idx + 1}</span>
              <span className="leading-relaxed font-medium text-stone-800">{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
