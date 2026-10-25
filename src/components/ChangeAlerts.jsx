import React, { useState } from 'react';
import {
  Bell,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Info,
  Calendar,
  Building,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { REGULATORY_CHANGE_ALERTS } from '../data/regulatoryAlertsData';

export default function ChangeAlerts({ countryData }) {
  const [filterCountry, setFilterCountry] = useState('all');

  const filteredAlerts = filterCountry === 'all'
    ? REGULATORY_CHANGE_ALERTS
    : REGULATORY_CHANGE_ALERTS.filter(a => a.countryId === filterCountry);

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Bell className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Official Policy & Regulatory Change Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Country-Specific Regulatory & Consular Alerts
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Live feed tracking verified changes in immigration thresholds, visa fees, tax rulings, and municipal registration deadlines directly from government foreign missions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl text-xs font-semibold">
          <button
            onClick={() => setFilterCountry('all')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterCountry === 'all' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Updates
          </button>
          <button
            onClick={() => setFilterCountry(countryData.id)}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterCountry === countryData.id ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {countryData.name} Only
          </button>
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-terracotta-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-stone-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-terracotta-600 bg-terracotta-50 px-2.5 py-0.5 rounded-full border border-terracotta-200">
                    {alert.countryName}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Effective: {alert.effectiveDate}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 pt-1">
                  {alert.title}
                </h3>
              </div>

              <a
                href={alert.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold border border-stone-200 transition-colors shrink-0 self-start sm:self-auto"
              >
                <span>Official Source</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              {alert.summary}
            </p>

            {/* Before vs After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-stone-400 block font-bold">
                  Previous Official Rule:
                </span>
                <p className="text-stone-600 line-through text-[11px] leading-relaxed">
                  {alert.previousRule}
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-emerald-800 block font-bold">
                  Current Official Rule (Updated):
                </span>
                <p className="text-emerald-950 text-[11px] leading-relaxed font-medium">
                  {alert.newRule}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100 flex items-center justify-between">
              <span>Authority: <strong>{alert.officialAuthority}</strong></span>
              <span className="text-stone-400">Impact: {alert.whoIsAffected}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
