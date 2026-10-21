import React from 'react';
import { ShieldAlert, AlertTriangle, Scale, VolumeX, Wifi, PhoneCall, Info, Car, Users2 } from 'lucide-react';

export default function CountryRules({ countryData, userProfile }) {
  const laws = countryData.strictRulesAndLaws || [];
  const isFamily = userProfile?.persona?.toLowerCase().includes('family');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            Legal & Regulatory Safeguards
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Country Rules, Strict Laws & Fines in {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Crucial local regulations and unspoken social norms that trip up newly arriving expats.
          </p>
        </div>

        {/* Emergency numbers badge */}
        <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center gap-3">
          <div className="p-2 bg-rose-500/20 text-rose-400 rounded-xl">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="text-slate-400">Emergency Police / Rescue</div>
            <div className="text-lg font-black text-white">
              {countryData.emergencyNumbers?.police || '112'} <span className="text-xs font-normal text-slate-400">(Ambulance: {countryData.emergencyNumbers?.ambulance || '112'})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Family Laws & Child Regulations (Active when Family Mode is On!) */}
      {isFamily && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/40 space-y-3">
          <div className="flex items-center gap-2 font-bold text-indigo-300 text-sm">
            <ShieldAlert className="w-5 h-5 text-indigo-400" />
            Family & Child Welfare Regulations in {countryData.name}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">1. Compulsory Schooling (Schulpflicht):</strong>
              <p className="text-slate-400 leading-relaxed">
                School attendance is legally mandatory for children (ages 6–16). Homeschooling is illegal in Germany, and taking children out of school before term ends incurs airport police fines up to €1,000!
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">2. Child Car Seat Mandate:</strong>
              <p className="text-slate-400 leading-relaxed">
                By law, children under 12 or under 150 cm must ride in an approved child safety seat (ECE R129 / i-Size). Taxis may refuse to transport children without proper restraint seats.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">3. Child Benefits (Kindergeld):</strong>
              <p className="text-slate-400 leading-relaxed">
                All foreign tax-paying residents with valid residence permits qualify for monthly government child allowances (~€250/mo per child in Germany, Child Benefit in UK).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Strict Laws Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          High-Risk Regulations & Expensive Fines
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {laws.map((law, idx) => {
            const isCritical = law.severity === 'critical';
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  isCritical
                    ? 'bg-rose-950/15 border-rose-500/40 shadow-sm shadow-rose-950/30'
                    : 'bg-slate-800/40 border-slate-700/60'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    {isCritical ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 text-indigo-400 shrink-0" />
                    )}
                    <span>{law.title}</span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    isCritical
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {law.severity}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {law.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cultural Etiquette & Workplace Norms */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <Users2 className="w-4 h-4 text-cyan-400" />
          Everyday Etiquette & Professional Culture in {countryData.name}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-slate-200">Punctuality & Appointments</div>
            <p className="text-slate-400 leading-relaxed">
              Arriving 5-10 minutes early is standard. Missing an appointment without 24 hours prior cancellation can incur cancellation fees from doctors and private service providers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-slate-200">Workplace Directness</div>
            <p className="text-slate-400 leading-relaxed">
              Communication in business is direct, factual, and low-context. Constructive criticism is not a personal insult; work-life balance is rigorously respected outside working hours.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <div className="font-bold text-slate-200">Public Decorum & Noise</div>
            <p className="text-slate-400 leading-relaxed">
              Keep phone conversations discreet on trains and buses. Follow bike lane right-of-way rules religiously — pedestrians walking on bike paths cause severe friction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
