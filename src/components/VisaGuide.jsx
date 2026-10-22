import React, { useState, useEffect } from 'react';
import {
  FileCheck2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Award,
  Stamp,
  DollarSign,
  ExternalLink,
  AlertTriangle,
  Sparkles,
  Layers,
  ArrowRight,
  Globe2,
  Camera,
  GraduationCap,
  Briefcase,
  KeyRound,
  Check
} from 'lucide-react';
import { COUNTRY_VISA_DETAILS } from '../data/visaData';
import {
  SUPPORTED_ORIGIN_CURRENCIES,
  detectOriginCurrency,
  convertCurrency,
  formatCurrencyAmount,
  getCurrencySymbol
} from '../utils/currencyConverter';

export default function VisaGuide({ countryData, userProfile }) {
  const countryVisas = COUNTRY_VISA_DETAILS[countryData.id] || COUNTRY_VISA_DETAILS.germany;
  const primaryVisas = countryVisas.primaryVisas || [];
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');

  // Origin currency state (automatically detected from userProfile.origin)
  const defaultOriginCode = detectOriginCurrency(userProfile?.origin);
  const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(defaultOriginCode);
  const [activeDocCategory, setActiveDocCategory] = useState('all'); // 'all', 'identity', 'credentials', 'employment', 'financial'

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

  // Update origin currency if user profile origin changes
  useEffect(() => {
    if (userProfile?.origin) {
      setSelectedOriginCurrency(detectOriginCurrency(userProfile.origin));
    }
  }, [userProfile?.origin]);

  const activeVisa = primaryVisas.find(v => v.id === selectedVisaId) || primaryVisas[0];
  const destCurrency = countryVisas.currency || countryData?.currency || 'EUR';
  const destSymbol = countryVisas.symbol || countryData?.symbol || '€';
  const familyInfo = countryVisas.familyReunion;

  // Convert visa total to source currency
  const totalDestFee = activeVisa?.fees?.total || 0;
  const totalSourceFee = convertCurrency(totalDestFee, destCurrency, selectedOriginCurrency);
  const sourceSymbol = getCurrencySymbol(selectedOriginCurrency);

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
            Official government portals, 6-stage procedural roadmap, document checklists, and fees in your home currency (<span className="font-mono text-stone-800 font-medium">{userProfile.origin || 'Source Country'}</span>).
          </p>
        </div>

        {/* Origin Currency Selector Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 self-start md:self-center">
          <div className="p-2.5 px-3.5 bg-stone-50 border border-stone-200 rounded-2xl flex items-center gap-2.5 text-xs text-stone-700">
            <Globe2 className="w-4 h-4 text-stone-500 shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] font-mono uppercase tracking-wider text-stone-400">View Fees In</span>
              <select
                value={selectedOriginCurrency}
                onChange={(e) => setSelectedOriginCurrency(e.target.value)}
                className="bg-transparent font-mono text-xs font-semibold text-stone-900 border-none p-0 focus:ring-0 cursor-pointer"
              >
                {SUPPORTED_ORIGIN_CURRENCIES.map(curr => (
                  <option key={curr.code} value={curr.code}>
                    {curr.code} ({curr.symbol}) — {curr.countryHint}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Family Visa Dependent Rights Banner */}
      {isFamily && familyInfo && (
        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-serif text-stone-900 text-base">
              <ShieldCheck className="w-4 h-4 text-stone-800" />
              <span>Family Reunion & Dependent Rights in {countryData.name}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-stone-700">
              Family Mode Active
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-stone-600 pt-1">
            <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">Spouse Work Entitlement:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {familyInfo.spouseWork}
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">Vital Records Legalization:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {familyInfo.vitalRecords}
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">Housing & Salary Minimums:</strong>
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
          <span className="text-xs font-mono text-stone-400">Click a pathway to inspect official portals & steps</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {primaryVisas.map(visa => {
            const isSelected = visa.id === activeVisa?.id;
            const convertedCardTotal = convertCurrency(visa.fees.total, destCurrency, selectedOriginCurrency);
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
                  <span className={`font-serif text-sm font-medium ${isSelected ? 'text-white' : 'text-stone-900'}`}>{visa.name}</span>
                  <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isSelected ? 'bg-stone-800 text-stone-300 border-stone-700' : 'bg-stone-50 text-stone-600 border-stone-200'
                  }`}>
                    {visa.category}
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-[11px] font-mono mt-2 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{visa.processingTime}</span>
                </div>
                {/* Dual Currency Tag */}
                <div className="mt-2.5 pt-2 border-t border-stone-100/10 flex items-baseline justify-between text-xs">
                  <span className={`font-mono font-medium ${isSelected ? 'text-stone-200' : 'text-stone-900 font-semibold'}`}>
                    {destSymbol}{Math.round(visa.fees.total).toLocaleString()}
                  </span>
                  <span className={`font-mono text-[10px] ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                    ≈ {sourceSymbol}{convertedCardTotal.toLocaleString()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Visa Blueprint */}
      {activeVisa && (
        <div className="space-y-6">
          {/* Main Blueprint Banner */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                  <span>Official Visa Pathway</span>
                  {activeVisa.fastTrackAvailable && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-sans normal-case text-[10px] font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Fast-Track Available</span>
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mt-1">
                  {activeVisa.name}
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-1">
                  Validity: <strong className="text-stone-800">{activeVisa.validity}</strong> • Processing Timeline: <strong className="text-stone-800">{activeVisa.processingTime}</strong>
                </p>
              </div>

              {/* Dual Currency Fee Callout */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-right self-start sm:self-auto space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Government & Legal Fees</div>
                <div className="text-2xl font-serif font-medium text-stone-900">
                  {destSymbol}{Math.round(totalDestFee).toLocaleString()}
                </div>
                <div className="text-xs font-mono text-stone-600 font-semibold bg-white px-2 py-0.5 rounded-lg border border-stone-200 inline-block">
                  ≈ {sourceSymbol}{totalSourceFee.toLocaleString()} ({selectedOriginCurrency})
                </div>
              </div>
            </div>

            {/* Official Portals Where Applicants Login */}
            {activeVisa.portals && activeVisa.portals.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-serif text-stone-900 text-base">
                  <KeyRound className="w-4 h-4 text-stone-700" />
                  <span>Official Government Portals & Login Websites</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeVisa.portals.map((portal, pIdx) => (
                    <a
                      key={pIdx}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-stone-50 hover:bg-stone-100/80 border border-stone-200 transition-all group flex flex-col justify-between space-y-2 text-left"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-stone-900 font-serif text-sm font-medium group-hover:text-stone-950">
                          <span>{portal.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 shrink-0 ml-1.5 transition-colors" />
                        </div>
                        <p className="text-[11px] text-stone-500 leading-relaxed">
                          {portal.purpose}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-mono text-stone-600">
                        <span className="truncate max-w-[170px] text-stone-400">{portal.url.replace(/^https?:\/\//, '')}</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700 font-medium shrink-0">
                          {portal.loginType}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 2 Columns: Eligibility & Itemized Fees in Dual Currency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
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

              {/* Itemized Fees with Conversion */}
              <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-serif text-stone-900 text-sm flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-stone-700" />
                    <span>Itemized Fees Breakdown</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                    {destCurrency} ➔ {selectedOriginCurrency}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  {Object.entries(activeVisa.fees).map(([key, val]) => {
                    if (key === 'total') return null;
                    const label = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase());
                    const convertedItemFee = convertCurrency(val, destCurrency, selectedOriginCurrency);
                    return (
                      <div key={key} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/80">
                        <span className="text-stone-600 text-[11px]">{label}</span>
                        <div className="text-right">
                          <span className="font-mono font-medium text-stone-900 mr-2">
                            {destSymbol}{Math.round(val).toLocaleString()}
                          </span>
                          <span className="font-mono text-[10px] text-stone-500">
                            ({sourceSymbol}{convertedItemFee.toLocaleString()})
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mandatory Documentation Dossier Checklist */}
            {activeVisa.documentation && (
              <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-serif text-stone-900 text-base">
                    <Layers className="w-4 h-4 text-stone-700" />
                    <span>Mandatory Document Dossier Checklist</span>
                  </div>
                  {/* Photo Specification Tag */}
                  {activeVisa.documentation.photoSpec && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-stone-600 text-[11px] font-mono">
                      <Camera className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span>Photo Spec: {activeVisa.documentation.photoSpec}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  {/* Identity Docs */}
                  {activeVisa.documentation.identity && (
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-stone-700 font-semibold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-stone-500" />
                        <span>1. Identity & Travel</span>
                      </div>
                      <ul className="space-y-1.5 text-stone-600">
                        {activeVisa.documentation.identity.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                            <span className="text-stone-400 font-mono">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Credentials & Qualifications */}
                  {activeVisa.documentation.credentials && (
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-stone-700 font-semibold flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
                        <span>2. Degrees & Certifications</span>
                      </div>
                      <ul className="space-y-1.5 text-stone-600">
                        {activeVisa.documentation.credentials.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                            <span className="text-stone-400 font-mono">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Employment & Financial */}
                  {(activeVisa.documentation.employment || activeVisa.documentation.financialAndHealth) && (
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-stone-700 font-semibold flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-stone-500" />
                        <span>3. Employment & Medical</span>
                      </div>
                      <ul className="space-y-1.5 text-stone-600">
                        {(activeVisa.documentation.employment || []).concat(activeVisa.documentation.financialAndHealth || []).map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                            <span className="text-stone-400 font-mono">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step-by-Step Chronological Procedure */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-base text-stone-900 flex items-center gap-2">
                  <Stamp className="w-4 h-4 text-stone-600" />
                  <span>Sequential 6-Stage Government Procedure for {activeVisa.name}</span>
                </h4>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                  From Registration to Biometric ID
                </span>
              </div>

              <div className="space-y-2.5">
                {activeVisa.steps.map((stepItem, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3.5 hover:border-stone-400 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5 shadow-sm">
                      {sIdx + 1}
                    </div>
                    <div className="space-y-0.5 text-xs flex-1">
                      <div className="font-serif text-stone-900 text-sm font-medium">{stepItem.step}</div>
                      <p className="text-stone-600 leading-relaxed text-[11px]">{stepItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Pitfalls & Rejection Safeguards */}
            {activeVisa.commonPitfalls && activeVisa.commonPitfalls.length > 0 && (
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-serif text-sm font-medium">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Common Pitfalls & How to Avoid Consular Delays</span>
                </div>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {activeVisa.commonPitfalls.map((pitfall, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold shrink-0">•</span>
                      <span className="leading-relaxed text-[11px]">{pitfall}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Standard notary stamps are rejected abroad. Vital records (marriage, birth, degrees) must carry the official <strong>Hague Apostille</strong> or consular MOFA embassy attestation for {countryData.name}.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">2. Sworn Court Translation</div>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Translations must be completed by an official sworn court translator (e.g. into {countryData.language}) recognized by consular authorities.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">3. Academic Degree Evaluation</div>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Credentials must meet local statutory standards (e.g., Anabin H+ in Germany, MOFA/Dataflow verification in UAE & Singapore, WES in Canada, ACS/VETASSESS in Australia).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-stone-500 font-semibold">4. Police Clearance (PCC)</div>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Must be issued less than 90 days before visa lodgment. If you resided in multiple countries for 6+ months within the last 5 years, PCCs are required from each jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
