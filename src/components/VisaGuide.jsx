import React, { useState } from 'react';
import {
  FileCheck2,
  Clock,
  ShieldCheck,
  AlertCircle,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
  ChevronRight,
  Stamp,
  Globe2,
  DollarSign
} from 'lucide-react';
import { COUNTRY_VISA_DETAILS } from '../data/visaData';

export default function VisaGuide({ countryData, userProfile }) {
  const countryVisas = COUNTRY_VISA_DETAILS[countryData.id] || COUNTRY_VISA_DETAILS.germany;
  const primaryVisas = countryVisas.primaryVisas || [];
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');

  const [selectedVisaId, setSelectedVisaId] = useState(() => {
    if (isFamily) {
      const fam = primaryVisas.find(v => v.category === 'Family' || v.id.includes('family') || v.id.includes('xi'));
      if (fam) return fam.id;
    }
    return primaryVisas[0]?.id || '';
  });

  const activeVisa = primaryVisas.find(v => v.id === selectedVisaId) || primaryVisas[0];
  const currencySymbol = countryData?.symbol || countryVisas.symbol || '€';

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <FileCheck2 className="w-4 h-4" />
            Immigration & Legal Entry Pathways
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Complete Visa Process & Legal Roadmap for {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Official visa routes, Hague Apostille legalization, sworn translations, consular appointments, and post-arrival police registration.
          </p>
        </div>

        <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-2xl flex items-center gap-2.5 text-xs text-purple-200">
          <Clock className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Recommended Start Time: <strong>2–3 Months Prior to Move</strong></span>
        </div>
      </div>

      {/* Family Visa Dependent Rights Banner */}
      {isFamily && (
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-indigo-300 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Family Reunion & Dependent Spouse Rights in {countryData.name}
            </div>
            <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30 uppercase">
              Family Mode Active
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <strong className="text-white block">Spouse Unrestricted Work Rights:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Spouses of EU Blue Card, UK Skilled Worker, and Brazil VITEM holders receive immediate full-time work authorization without requiring a separate employer sponsorship.
              </p>
            </div>
            <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <strong className="text-white block">Marriage & Birth Apostilles:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Original marriage and birth certificates must have the Hague Apostille from your foreign ministry plus sworn translations into {countryData.language}.
              </p>
            </div>
            <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <strong className="text-white block">Living Space Verification:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Immigration authorities require proof of adequate residential living space (minimum 12m² per adult and 10m² per child under 6).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Visa Category Selector Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            Select Visa Pathway for {countryData.name}
          </h3>
          <span className="text-xs text-slate-400">Click a visa to inspect full step-by-step procedure</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {primaryVisas.map(visa => {
            const isSelected = visa.id === activeVisa?.id;
            return (
              <button
                key={visa.id}
                onClick={() => setSelectedVisaId(visa.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500 text-white shadow-lg shadow-purple-950/50 ring-1 ring-purple-500'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm text-white">{visa.name}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {visa.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Processing: {visa.processingTime}</span>
                </div>
                <div className="text-xs font-semibold text-emerald-400 mt-1">
                  Est. Government Fees: {currencySymbol}{Math.round(visa.fees.total).toLocaleString()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Visa In-Depth Blueprint */}
      {activeVisa && (
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Detailed Visa Blueprint
              </div>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {activeVisa.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Validity: <strong>{activeVisa.validity}</strong> • Processing Timeline: <strong>{activeVisa.processingTime}</strong>
              </p>
            </div>

            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-right">
              <div className="text-[11px] text-slate-400">Total Legal & Visa Fees</div>
              <div className="text-lg font-black text-emerald-400">
                {currencySymbol}{Math.round(activeVisa.fees.total).toLocaleString()}
              </div>
            </div>
          </div>

          {/* 3 Columns: Eligibility, Itemized Fees, Post-Arrival Mandate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eligibility Requirements */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Eligibility Criteria & Thresholds
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeVisa.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Itemized Fees */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-purple-400" />
                Itemized Government & Legalization Fees
              </div>
              <div className="space-y-2 text-xs">
                {Object.entries(activeVisa.fees).map(([key, val]) => {
                  if (key === 'total') return null;
                  const label = key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase());
                  return (
                    <div key={key} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">{label}</span>
                      <span className="font-mono font-bold text-white">{currencySymbol}{Math.round(val).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step-by-Step Chronological Procedure */}
          <div className="space-y-4 pt-2">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <Stamp className="w-4 h-4 text-blue-400" />
              Chronological Step-by-Step Visa Procedure
            </h4>

            <div className="space-y-3">
              {activeVisa.steps.map((stepItem, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-3.5 hover:border-slate-600 transition-colors"
                >
                  <div className="w-7 h-7 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {sIdx + 1}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-white text-sm">{stepItem.step}</div>
                    <p className="text-slate-300 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mandatory Document Preparation Protocol */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-400" />
          The 4 Non-Negotiable Document Legalization Rules
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-emerald-400">1. Hague Apostille</div>
            <p className="text-slate-400 leading-relaxed">
              Standard notary stamps are rejected internationally. Your marriage certificates, birth certificates, and degrees must carry the official <strong>Hague Apostille</strong> sticker from your home country’s Foreign Ministry (MEA / State Dept / FCDO).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-indigo-400">2. Sworn Court Translation</div>
            <p className="text-slate-400 leading-relaxed">
              Foreign language documents must be translated by a certified court translator (<em>tradutor juramentado</em> in Brazil, <em>vereidigter Übersetzer</em> in Germany). Free online translations are strictly invalid.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-amber-400">3. Degree Recognition</div>
            <p className="text-slate-400 leading-relaxed">
              For Germany: Confirm institution "H+" and degree match on Anabin. For Canada: WES ECA report. For Brazil: Diploma recognition via Carolina Bori platform if practicing licensed professions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-purple-400">4. Police Clearance (PCC)</div>
            <p className="text-slate-400 leading-relaxed">
              Must be issued less than 90 days before your visa submission. If you lived in multiple countries for 6+ months in the last 5 years, PCCs are required from each jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
