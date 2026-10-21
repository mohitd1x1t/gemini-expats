import React from 'react';
import { Dog, ShieldCheck, AlertTriangle, Calendar, Heart, CheckCircle2, Plane, FileText } from 'lucide-react';

export default function PetRelocation({ countryData, userProfile }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Dog className="w-4 h-4" />
            Pet Immigration & Biosecurity Protocol
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Moving with Pets to {countryData.name} {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Microchip standards, rabies titer timeline, IATA airline crates, and government veterinary certificates.
          </p>
        </div>

        <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-2xl flex items-center gap-2 text-xs text-amber-200">
          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Timeline: <strong>Start 3 to 6 Months Before Move</strong></span>
        </div>
      </div>

      {/* 4 Critical Biosecurity Stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Stage 1 */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
            1
          </div>
          <div className="font-bold text-white text-sm">ISO 11784/11785 Microchip</div>
          <p className="text-slate-400 leading-relaxed">
            Must be a standard 15-digit non-encrypted microchip implanted <strong>BEFORE</strong> the latest rabies vaccination. Scanners at foreign borders cannot read non-ISO microchips.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
            2
          </div>
          <div className="font-bold text-white text-sm">Rabies Titer Test (RNATT)</div>
          <p className="text-slate-400 leading-relaxed">
            Blood drawn at least 30 days after rabies vaccination and tested at an EU/OIE-approved laboratory. Most countries enforce a <strong>3-month waiting period</strong> after blood draw before entry!
          </p>
        </div>

        {/* Stage 3 */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
            3
          </div>
          <div className="font-bold text-white text-sm">Government Vet Health Cert</div>
          <p className="text-slate-400 leading-relaxed">
            Issued by an authorized government veterinarian (e.g. USDA APHIS in US, CFIA in Canada, AQCS in India, Vigiagro in Brazil) strictly within <strong>10 days of departure</strong>.
          </p>
        </div>

        {/* Stage 4 */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
            4
          </div>
          <div className="font-bold text-white text-sm">IATA-Approved Travel Crate</div>
          <p className="text-slate-400 leading-relaxed">
            Must allow pet to stand up, turn around 360°, and lie down without touching the ceiling. Metal bolts only (no plastic clip-on sides) with external funnel water bowls.
          </p>
        </div>
      </div>

      {/* Country Specific Pet Laws */}
      <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Country-Specific Pet Regulations ({countryData.name})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <strong className="text-white block">Airline Cabin vs Cargo (Manifested):</strong>
            <p className="text-slate-400 leading-relaxed">
              Small pets under 8 kg (including soft carrier) can travel in-cabin on most European and Latin American airlines. The UK, Australia, and UAE by law do NOT permit pets in cabin; they must arrive strictly as manifested cargo through approved animal reception centers (e.g. Heathrow HARC).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <strong className="text-white block">Breed Specific Bans (BSL):</strong>
            <p className="text-slate-400 leading-relaxed">
              Germany, the UK, and Singapore ban the import of Pit Bull Terriers, American Staffordshire Terriers, Dogo Argentino, and Fila Brasileiro. Attempting to import these breeds results in immediate border seizure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
