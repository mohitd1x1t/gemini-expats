import React from 'react';
import { X, PhoneCall, AlertTriangle, ShieldAlert, HeartPulse, Flame, Siren, Building2 } from 'lucide-react';

export default function EmergencySOSModal({ isOpen, onClose, countryData }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border-2 border-rose-500/60 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30">
              <Siren className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>Emergency SOS Card</span>
                <span>{countryData.flag}</span>
              </h3>
              <p className="text-xs text-rose-300">Quick emergency dial for {countryData.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Emergency Numbers Grid */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${countryData.emergencyNumbers?.police || '112'}`}
            className="p-4 rounded-2xl bg-rose-950/40 hover:bg-rose-950/70 border border-rose-500/40 text-center space-y-1 group transition-all"
          >
            <ShieldAlert className="w-5 h-5 text-rose-400 mx-auto" />
            <div className="text-xs text-slate-300 font-semibold">Police</div>
            <div className="text-2xl font-black text-rose-400 group-hover:scale-105 transition-transform">
              {countryData.emergencyNumbers?.police || '112'}
            </div>
          </a>

          <a
            href={`tel:${countryData.emergencyNumbers?.ambulance || '112'}`}
            className="p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/40 text-center space-y-1 group transition-all"
          >
            <HeartPulse className="w-5 h-5 text-emerald-400 mx-auto" />
            <div className="text-xs text-slate-300 font-semibold">Ambulance / Medical</div>
            <div className="text-2xl font-black text-emerald-400 group-hover:scale-105 transition-transform">
              {countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </a>

          <a
            href={`tel:${countryData.emergencyNumbers?.fire || '112'}`}
            className="p-4 rounded-2xl bg-amber-950/40 hover:bg-amber-950/70 border border-amber-500/40 text-center space-y-1 group transition-all"
          >
            <Flame className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs text-slate-300 font-semibold">Fire Department</div>
            <div className="text-2xl font-black text-amber-400 group-hover:scale-105 transition-transform">
              {countryData.emergencyNumbers?.fire || countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-center space-y-1">
            <PhoneCall className="w-5 h-5 text-indigo-400 mx-auto" />
            <div className="text-xs text-slate-300 font-semibold">Non-Emergency Medical</div>
            <div className="text-xl font-black text-indigo-300">
              {countryData.id === 'germany' ? '116 117' : countryData.id === 'uk' ? '111' : countryData.id === 'canada' ? '811' : 'Local Clinic'}
            </div>
          </div>
        </div>

        {/* Embassy Emergency Guidance */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
          <div className="font-bold text-white flex items-center gap-2">
            <Building2 className="w-4 h-4 text-purple-400" />
            Consular Assistance & Lost Passports
          </div>
          <p className="text-slate-300 leading-relaxed">
            If your passport is stolen or you require urgent repatriation, contact your home country’s Embassy or Consulate General in {countryData.name}. File an immediate police report (*Polizeibericht / Boletim de Ocorrência*) as proof.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors"
        >
          Close Emergency SOS
        </button>
      </div>
    </div>
  );
}
