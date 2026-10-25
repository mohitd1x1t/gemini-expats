import React, { useState, useMemo } from 'react';
import {
  Calendar,
  AlertTriangle,
  ShieldCheck,
  Building2,
  FileText,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Landmark,
  Scale,
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import {
  TAX_RESIDENCY_RULES,
  BILATERAL_AGREEMENTS,
  calculateIndianTaxResidency
} from '../data/taxResidencyData';

export default function TaxResidencyEngine({ userProfile, countryData, onUpdateDepartureDate }) {
  const [departureDate, setDepartureDate] = useState(userProfile.departureDate || '2026-09-15');
  const [indianIncomeOver15L, setIndianIncomeOver15L] = useState(false);
  const [selectedTab, setSelectedTab] = useState('residency_calculator'); // 'residency_calculator', 'predeparture_checklist', 'dtaa_totalization'

  // Calculate tax residency
  const residencyResult = useMemo(() => {
    return calculateIndianTaxResidency(departureDate, indianIncomeOver15L);
  }, [departureDate, indianIncomeOver15L]);

  const bilateralData = BILATERAL_AGREEMENTS[countryData.id] || BILATERAL_AGREEMENTS.germany;
  const preDepartureChecklist = TAX_RESIDENCY_RULES.india.preDepartureChecklist;

  const handleDateChange = (newDate) => {
    setDepartureDate(newDate);
    if (onUpdateDepartureDate) onUpdateDepartureDate(newDate);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Scale className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Cross-Border Tax & Split-Year Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            182-Day Tax Residency & DTAA Calculator
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Model your exact departure date to qualify for Non-Resident (NR) tax exemption, avoid dual-residency traps, and verify bilateral Social Security Totalization agreements.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <Landmark className="w-4 h-4 text-stone-500" />
          <span>Origin: <strong>{userProfile.origin || 'India'}</strong> ➔ <strong>{countryData.name}</strong></span>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl w-fit text-xs font-semibold">
        <button
          onClick={() => setSelectedTab('residency_calculator')}
          className={`px-4 py-2 rounded-xl transition-all ${
            selectedTab === 'residency_calculator'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          182-Day Residency Engine
        </button>
        <button
          onClick={() => setSelectedTab('predeparture_checklist')}
          className={`px-4 py-2 rounded-xl transition-all ${
            selectedTab === 'predeparture_checklist'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Pre-Departure Banking Checklist (FEMA)
        </button>
        <button
          onClick={() => setSelectedTab('dtaa_totalization')}
          className={`px-4 py-2 rounded-xl transition-all ${
            selectedTab === 'dtaa_totalization'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          DTAA Treaty & Totalization
        </button>
      </div>

      {/* Tab 1: 182-Day Residency Engine */}
      {selectedTab === 'residency_calculator' && (
        <div className="space-y-6">
          
          {/* Interactive Calculator Input Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  Your Target Flight Departure Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-mono font-semibold text-stone-900 focus:outline-none focus:ring-1 focus:ring-terracotta-400 cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1.5">
                  Indian fiscal year runs from <strong>April 1 to March 31</strong>. Leaving before ~Sept 28 keeps your Indian physical presence below 182 days.
                </p>
              </div>

              {/* High Earner 120-Day Toggle */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-900">
                    Indian Income &gt; ₹15 Lakhs?
                  </span>
                  <input
                    type="checkbox"
                    checked={indianIncomeOver15L}
                    onChange={(e) => setIndianIncomeOver15L(e.target.checked)}
                    className="w-4 h-4 rounded text-terracotta-500 focus:ring-terracotta-400 cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  If domestic Indian income (rental yields, capital gains, interest) exceeds ₹15 Lakhs in this financial year, the Finance Act reduces the threshold from 182 days down to <strong>120 days</strong>.
                </p>
              </div>

            </div>

            {/* Calculated Result Display */}
            {residencyResult && (
              <div className="pt-4 border-t border-stone-100 space-y-4">
                
                {/* Status Alert Banner */}
                <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  residencyResult.statusBadge === 'success'
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : residencyResult.statusBadge === 'warning'
                    ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                    : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}>
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider opacity-75">
                      Predicted Status for {residencyResult.fiscalYearLabel}:
                    </div>
                    <div className="text-base sm:text-lg font-bold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 shrink-0" />
                      <span>{residencyResult.statusText}</span>
                    </div>
                    <p className="text-xs leading-relaxed opacity-90 max-w-2xl">
                      {residencyResult.explanation}
                    </p>
                  </div>

                  <div className="p-3 bg-white/80 rounded-xl border border-black/5 font-mono text-center shrink-0">
                    <div className="text-[10px] uppercase text-stone-500">Days Spent in India</div>
                    <div className="text-2xl font-extrabold text-stone-900">{residencyResult.daysInIndia}</div>
                    <div className="text-[10px] text-stone-400">of 182 max limit</div>
                  </div>
                </div>

                {/* Progress bar towards 182 days */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>Physical Stay: {residencyResult.daysInIndia} Days</span>
                    <span>182-Day Statutory Threshold</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        residencyResult.daysInIndia < 182 ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.min(100, Math.round((residencyResult.daysInIndia / 182) * 100))}%` }}
                    />
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Statutory Safe Harbor Reference Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-terracotta-600 font-bold">
                <Landmark className="w-4 h-4" />
                <span>The September 28 Golden Rule</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                If you take off on or before <strong>September 28</strong> (or Sept 27 in leap years) for employment abroad and do not visit India again before March 31, your presence in India strictly cannot exceed 181 days. Your overseas salary is 100% tax-free in India from Day 1.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-terracotta-600 font-bold">
                <Scale className="w-4 h-4" />
                <span>Mid-Year Split-Year Protection</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                If you must depart after September 28, you trigger Resident status in India for that fiscal year. You must invoke <strong>DTAA Article 15 (Employment)</strong> and file <strong>Form 67</strong> to claim Foreign Tax Credit (FTC), proving you paid income tax in your destination country.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Pre-Departure Banking Checklist */}
      {selectedTab === 'predeparture_checklist' && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 text-rose-950 text-xs flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
            <p className="leading-relaxed">
              <strong>FEMA Legal Mandate:</strong> Under Foreign Exchange Management Act (FEMA Section 41), it is illegal for an Indian non-resident (NRI) to maintain ordinary resident savings or demat accounts. Violations carry penalties up to 3x the balance involved.
            </p>
          </div>

          <div className="space-y-3">
            {preDepartureChecklist.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200 self-start sm:self-auto">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.action}
                </p>

                {item.penalty && (
                  <div className="text-[11px] font-mono text-rose-700 bg-rose-50/60 p-2.5 rounded-xl border border-rose-100">
                    ⚠️ {item.penalty}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: DTAA Treaty & Totalization Agreements */}
      {selectedTab === 'dtaa_totalization' && (
        <div className="space-y-6">
          
          {/* DTAA Card */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-serif text-stone-900 text-lg">
                <Scale className="w-5 h-5 text-terracotta-500" />
                <span>Double Taxation Avoidance Agreement (DTAA)</span>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Treaty Active & Verified
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Bilateral tax treaty between <strong>{userProfile.origin || 'India'}</strong> and <strong>{countryData.name}</strong> ensures you do NOT pay income tax twice on the same salary.
            </p>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-2 font-mono text-stone-800">
              <div>
                <strong>Employment Income:</strong> {bilateralData.dtaaArticleEmployment || 'Taxed in destination country where duties are exercised.'}
              </div>
              {bilateralData.dtaaEliminationDoubleTax && (
                <div className="pt-2 border-t border-stone-200/60 text-stone-600">
                  <strong>Elimination Method:</strong> {bilateralData.dtaaEliminationDoubleTax}
                </div>
              )}
            </div>
          </div>

          {/* Social Security Totalization Agreement (SSA) Card */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-serif text-stone-900 text-lg">
                <Landmark className="w-5 h-5 text-terracotta-500" />
                <span>Bilateral Social Security Totalization Agreement</span>
              </div>
              <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                bilateralData.socialSecurityTotalization?.hasAgreement
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-stone-100 text-stone-600 border-stone-200'
              }`}>
                {bilateralData.socialSecurityTotalization?.hasAgreement ? 'Agreement Active' : 'No SSA Treaty'}
              </span>
            </div>

            <div className="text-xs text-stone-600 leading-relaxed space-y-3">
              <div className="font-semibold text-stone-900">
                {bilateralData.socialSecurityTotalization?.title}
              </div>
              <p>
                {bilateralData.socialSecurityTotalization?.details || bilateralData.socialSecurityTotalization?.certificateOfCoverage}
              </p>

              {bilateralData.socialSecurityTotalization?.pensionRefundRights && (
                <div className="p-4 bg-terracotta-50/60 rounded-2xl border border-terracotta-200/70 text-stone-800 font-sans">
                  <strong className="text-terracotta-800 block font-semibold mb-1">
                    💰 Pension Refund Rights Upon Departure:
                  </strong>
                  <p className="text-xs leading-relaxed">
                    {bilateralData.socialSecurityTotalization.pensionRefundRights}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
