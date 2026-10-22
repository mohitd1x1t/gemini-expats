import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Scale, PhoneCall, Info, Users2, ChevronDown, ChevronUp, Baby, CheckCircle2 } from 'lucide-react';
import { getCountryCulturalBundle } from '../data/countryCulturalData';

export default function CountryRules({ countryData, userProfile }) {
  const laws = countryData.strictRulesAndLaws || [];
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');
  const [showFamilyDetails, setShowFamilyDetails] = useState(isFamily);

  const culturalBundle = getCountryCulturalBundle(countryData.id);
  const familyRegulations = culturalBundle.familyRegulations || [];
  const culturalEtiquette = culturalBundle.culturalEtiquette || [];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Scale className="w-3.5 h-3.5 text-stone-700" />
            <span>Legal & Regulatory Safeguards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Local Rules, Fines & Compliance in <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Crucial municipal regulations, strict statutory laws, and cultural etiquette to ensure a smooth arrival.
          </p>
        </div>

        {/* Emergency numbers badge */}
        <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3 self-start md:self-auto">
          <div className="w-9 h-9 bg-white border border-stone-200 text-stone-800 rounded-full flex items-center justify-center shrink-0">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Emergency Police / Rescue</div>
            <div className="text-lg font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.police || '112'} <span className="text-xs font-mono font-normal text-stone-400">(Ambulance: {countryData.emergencyNumbers?.ambulance || '112'})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Family Laws & Child Regulations */}
      <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-serif text-stone-900 text-base">
            <ShieldAlert className="w-4 h-4 text-stone-700" />
            <span>Family & Child Welfare Regulations in {countryData.name}</span>
            {isFamily && (
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                Active Party: Family
              </span>
            )}
          </div>

          <button
            onClick={() => setShowFamilyDetails(!showFamilyDetails)}
            className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 font-mono transition-colors"
          >
            <span>{showFamilyDetails ? 'Collapse' : 'Expand Family Rules'}</span>
            {showFamilyDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {showFamilyDetails ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-stone-600 pt-1">
            {familyRegulations.length > 0 ? (
              familyRegulations.map((reg, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
                  <strong className="text-stone-900 block font-medium font-serif">{reg.title}</strong>
                  <p className="text-stone-500 text-[11px] leading-relaxed">
                    {reg.desc}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-4 bg-white rounded-2xl border border-stone-200 text-stone-500 text-xs">
                Check local municipal guidelines for family support, child immunizations, and school district enrollment.
              </div>
            )}
          </div>
        ) : (
          <p className="text-xs text-stone-500">
            Click to view child travel consent mandates, mandatory schooling attendance laws, and child allowance benefits in {countryData.name}.
          </p>
        )}
      </div>

      {/* Strict Laws Grid */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-stone-700" />
          <span>High-Risk Regulations & Expensive Fines</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {laws.map((law, idx) => {
            const isCritical = law.severity === 'critical';
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2 hover:border-stone-400 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-serif text-stone-900 text-base flex items-center gap-2">
                    {isCritical ? (
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 text-stone-500 shrink-0" />
                    )}
                    <span>{law.title}</span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider border ${
                    isCritical
                      ? 'bg-rose-50 text-rose-800 border-rose-200'
                      : 'bg-stone-50 text-stone-600 border-stone-200'
                  }`}>
                    {law.severity}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {law.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cultural Etiquette & Workplace Norms */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
          <Users2 className="w-4 h-4 text-stone-700" />
          <span>Everyday Etiquette & Workplace Norms in {countryData.name}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {culturalEtiquette.length > 0 ? (
            culturalEtiquette.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="font-mono uppercase text-[10px] tracking-wider text-stone-700 font-semibold">{item.title}</div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  {item.desc}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-stone-500 text-xs">
              Be mindful of local customs, professional punctuality, and cultural decorum.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
