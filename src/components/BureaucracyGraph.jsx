import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Unlock,
  Building,
  Key,
  CreditCard,
  FileText,
  Home
} from 'lucide-react';
import { BUREAUCRACY_DEPENDENCY_GRAPHS } from '../data/logisticsAndDependencyData';

export default function BureaucracyGraph({ countryData }) {
  const activeCountryKey = BUREAUCRACY_DEPENDENCY_GRAPHS[countryData.id] ? countryData.id : 'germany';
  const [selectedCountryKey, setSelectedCountryKey] = useState(activeCountryKey);

  const graphData = BUREAUCRACY_DEPENDENCY_GRAPHS[selectedCountryKey] || BUREAUCRACY_DEPENDENCY_GRAPHS.germany;

  const stepIcons = [Home, CreditCard, FileText, Building, Key];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Unlock className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Bureaucracy Dependency Mapping</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            The "Catch-22" Deadlock Breaker Flowchart
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            You need a bank account to rent an apartment, a signed lease to get a local tax ID, and a tax ID to open a bank account. Here is the exact critical path to break the loop.
          </p>
        </div>

        {/* Country Selector */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl text-xs font-semibold">
          {Object.keys(BUREAUCRACY_DEPENDENCY_GRAPHS).map((cKey) => (
            <button
              key={cKey}
              onClick={() => setSelectedCountryKey(cKey)}
              className={`px-3 py-1.5 rounded-xl capitalize transition-all ${
                selectedCountryKey === cKey
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cKey}
            </button>
          ))}
        </div>
      </div>

      {/* The Deadlock Trap Description Alert */}
      <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 text-rose-950 space-y-1.5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-rose-800">
          <ShieldAlert className="w-4 h-4" />
          <span>The Classical Bureaucratic Deadlock in {graphData.country}:</span>
        </div>
        <p className="text-xs text-rose-900 leading-relaxed font-normal">
          {graphData.deadlockProblem}
        </p>
      </div>

      {/* Sequential Critical Path Flowchart */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta-500" />
            <span>The 5-Step Critical Path Sequence</span>
          </h3>
          <span className="text-xs font-mono text-stone-400">Follow in strict sequential order</span>
        </div>

        <div className="space-y-3">
          {graphData.criticalPathSteps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.step}
                className="relative p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:border-terracotta-300 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-terracotta-50 border border-terracotta-200 text-terracotta-600 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    0{step.step}
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base font-bold text-stone-900 group-hover:text-terracotta-600 transition-colors flex items-center gap-2">
                      <span>{step.title}</span>
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                      {step.action}
                    </p>
                  </div>
                </div>

                {/* Deadlock Broken Pill */}
                <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 md:max-w-xs w-full shrink-0 text-xs text-emerald-950 space-y-1">
                  <div className="font-mono text-[10px] uppercase font-bold text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Deadlock Broken:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-emerald-900">
                    {step.deadlockBroken}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
