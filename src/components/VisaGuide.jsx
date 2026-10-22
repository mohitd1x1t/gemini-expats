import React, { useState, useEffect } from 'react';
import {
  FileCheck2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Award,
  Stamp,
  DollarSign
} from 'lucide-react';
import { COUNTRY_VISA_DETAILS } from '../data/visaData';

export default function VisaGuide({ countryData, userProfile }) {
  const countryVisas = COUNTRY_VISA_DETAILS[countryData.id] || COUNTRY_VISA_DETAILS.germany;
  const primaryVisas = countryVisas.primaryVisas || [];
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');

  const [selectedVisaId, setSelectedVisaId] = useState(() => {
    if (isFamily) {
      const fam = primaryVisas.find(v => v.category === 'Family' || v.id.includes('family') || v.id.includes('dep') || v.id.includes('xi'));
      if (fam) return fam.id;
    }
    return primaryVisas[0]?.id || '';
  });

  // Ensure active visa resets whenever destination country or persona changes
  useEffect(() => {
    if (isFamily) {
      const fam = primaryVisas.find(v => v.category === 'Family' || v.id.includes('family') || v.id.includes('dep') || v.id.includes('xi'));
      if (fam) {
        setSelectedVisaId(fam.id);
        return;
      }
    }
    setSelectedVisaId(primaryVisas[0]?.id || '');
  }, [countryData.id, userProfile?.persona]);

  const activeVisa = primaryVisas.find(v => v.id === selectedVisaId) || primaryVisas[0];
  const currencySymbol = countryData?.symbol || countryVisas.symbol || '€';
  const familyInfo = countryVisas.familyReunion;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <FileCheck2 className="w-3.5 h-3.5 text-stone-700" />
            <span>Immigration & Legal Entry Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Visa Pathways & Legal Entry for <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Official visa routes, legal document attestations, government fees, and post-arrival biometric registration.
          </p>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-full flex items-center gap-2 text-xs text-stone-700 self-start md:self-center">
          <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
          <span className="font-mono text-[11px]">Recommended Start: <strong>2–3 Months Ahead</strong></span>
        </div>
      </div>

      {/* Family Visa Dependent Rights Banner */}
      {isFamily && familyInfo && (
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-serif text-stone-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-stone-800" />
              <span>Family Reunion & Dependent Rights in {countryData.name}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-stone-700">
              Family Mode Active
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-stone-600 pt-1">
            <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1">
              <strong className="text-stone-900 block font-medium">Spouse Work Entitlement:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {familyInfo.spouseWork}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1">
              <strong className="text-stone-900 block font-medium">Vital Records Legalization:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {familyInfo.vitalRecords}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1">
              <strong className="text-stone-900 block font-medium">Housing & Salary Guidelines:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {familyInfo.housingOrSalary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Visa Category Selector Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-stone-600" />
            <span>Select Visa Pathway for {countryData.name}</span>
          </h3>
          <span className="text-xs font-mono text-stone-400">Click a pathway to inspect full procedural roadmap</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {primaryVisas.map(visa => {
            const isSelected = visa.id === activeVisa?.id;
            return (
              <button
                key={visa.id}
                onClick={() => setSelectedVisaId(visa.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400 hover:shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif text-base ${isSelected ? 'text-white' : 'text-stone-900'}`}>{visa.name}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isSelected ? 'bg-stone-800 text-stone-300 border-stone-700' : 'bg-stone-50 text-stone-600 border-stone-200'
                  }`}>
                    {visa.category}
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-mono mt-2 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Processing: {visa.processingTime}</span>
                </div>
                <div className={`text-xs font-mono mt-1 ${isSelected ? 'text-stone-200 font-medium' : 'text-stone-900 font-semibold'}`}>
                  Govt Fees: {currencySymbol}{Math.round(visa.fees.total).toLocaleString()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Visa In-Depth Blueprint */}
      {activeVisa && (
        <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                Detailed Visa Blueprint
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mt-1">
                {activeVisa.name}
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Validity: <strong className="text-stone-800">{activeVisa.validity}</strong> • Processing Timeline: <strong className="text-stone-800">{activeVisa.processingTime}</strong>
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-right self-start sm:self-auto">
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Total Legal & Visa Fees</div>
              <div className="text-xl font-serif font-medium text-stone-900 mt-0.5">
                {currencySymbol}{Math.round(activeVisa.fees.total).toLocaleString()}
              </div>
            </div>
          </div>

          {/* 2 Columns: Eligibility & Itemized Fees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Eligibility Requirements */}
            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
              <div className="font-serif text-stone-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-700" />
                <span>Eligibility Criteria & Thresholds</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                {activeVisa.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-900 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Itemized Fees */}
            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
              <div className="font-serif text-stone-900 text-sm flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-stone-700" />
                <span>Itemized Government & Legalization Fees</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {Object.entries(activeVisa.fees).map(([key, val]) => {
                  if (key === 'total') return null;
                  const label = key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase());
                  return (
                    <div key={key} className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/80">
                      <span className="text-stone-600">{label}</span>
                      <span className="font-mono font-medium text-stone-900">{currencySymbol}{Math.round(val).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step-by-Step Chronological Procedure */}
          <div className="space-y-3 pt-2">
            <h4 className="font-serif text-base text-stone-900 flex items-center gap-2">
              <Stamp className="w-4 h-4 text-stone-600" />
              <span>Chronological Step-by-Step Procedure for {activeVisa.name}</span>
            </h4>

            <div className="space-y-2.5">
              {activeVisa.steps.map((stepItem, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3.5 hover:border-stone-400 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                    {sIdx + 1}
                  </div>
                  <div className="space-y-0.5 text-xs flex-1">
                    <div className="font-serif text-stone-900 text-sm">{stepItem.step}</div>
                    <p className="text-stone-600 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mandatory Document Preparation Protocol */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <FileText className="w-4 h-4 text-stone-700" />
          <span>The Four Non-Negotiable Document Legalization Rules</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">1. Legalization / Apostille</div>
            <p className="text-stone-600 leading-relaxed">
              Standard notary stamps are rejected abroad. Vital records (marriage, birth, degrees) must carry the official <strong>Hague Apostille</strong> or consular MOFA embassy attestation for {countryData.name}.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">2. Sworn Court Translation</div>
            <p className="text-stone-600 leading-relaxed">
              Translations must be completed by an official sworn court translator (e.g. into {countryData.language}) recognized by consular authorities.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">3. Academic Degree Evaluation</div>
            <p className="text-stone-600 leading-relaxed">
              Credentials must meet local statutory standards (e.g., Anabin H+ in Germany, MOFA/Dataflow verification in UAE & Singapore, WES in Canada, ACS/VETASSESS in Australia).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">4. Police Clearance (PCC)</div>
            <p className="text-stone-600 leading-relaxed">
              Must be issued less than 90 days before visa lodgment. If you resided in multiple countries for 6+ months within the last 5 years, PCCs are required from each jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
