import React from 'react';
import { FileCheck2, Clock, ShieldCheck, AlertCircle, Award, CheckCircle2, FileText } from 'lucide-react';

export default function VisaGuide({ countryData, userProfile }) {
  const visaTypes = countryData.visaTypes || [];

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
            Visa Process & Document Legalization for {countryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Apostille verification, university degree recognition, biometrics, and typical processing timeframes.
          </p>
        </div>
      </div>

      {/* Available Visa Categories Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-400" />
          Primary Expat & Skilled Worker Visas in {countryData.name}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visaTypes.map((visa, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="font-bold text-white text-base">{visa.name}</div>
                <div className="flex items-center gap-1 text-[11px] text-purple-300 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 shrink-0">
                  <Clock className="w-3 h-3" />
                  <span>{visa.timeframe}</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {visa.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Golden Document Verification Steps */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-400" />
          Mandatory Document Preparation Checklist
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-emerald-400">1. Hague Apostille</div>
            <p className="text-slate-400 leading-relaxed">
              Marriage and birth certificates must be apostilled by the Ministry of Foreign Affairs (MEA/FCDO/State Dept) of the issuing country.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-indigo-400">2. Sworn Translation</div>
            <p className="text-slate-400 leading-relaxed">
              If documents are not in {countryData.language} or English, hire a sworn/certified court translator recognized by the embassy.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-amber-400">3. Degree Recognition</div>
            <p className="text-slate-400 leading-relaxed">
              For Europe: Verify your university and degree status on the official Anabin/ZAB database. For Canada: WES ECA report.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-purple-400">4. Police Clearance (PCC)</div>
            <p className="text-slate-400 leading-relaxed">
              Obtain clean criminal background checks from every country you lived in for 6+ months within the last 5-10 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
