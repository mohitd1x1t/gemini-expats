import React from 'react';
import { X, ShieldAlert, HeartPulse, Flame, PhoneCall, Building2 } from 'lucide-react';

export default function EmergencySOSModal({ isOpen, onClose, countryData }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-stone-800" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">Emergency Dispatch</div>
              <h3 className="text-xl font-serif text-stone-900 flex items-center gap-2">
                <span>Emergency SOS Card</span>
                <span>{countryData.flag}</span>
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Emergency Numbers Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          <a
            href={`tel:${countryData.emergencyNumbers?.police || '112'}`}
            className="p-5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-center space-y-1.5 transition-all group"
          >
            <ShieldAlert className="w-5 h-5 text-stone-700 mx-auto" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Police</div>
            <div className="text-2xl font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.police || '112'}
            </div>
          </a>

          <a
            href={`tel:${countryData.emergencyNumbers?.ambulance || '112'}`}
            className="p-5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-center space-y-1.5 transition-all group"
          >
            <HeartPulse className="w-5 h-5 text-stone-700 mx-auto" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Ambulance / Medical</div>
            <div className="text-2xl font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </a>

          <a
            href={`tel:${countryData.emergencyNumbers?.fire || '112'}`}
            className="p-5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-center space-y-1.5 transition-all group"
          >
            <Flame className="w-5 h-5 text-stone-700 mx-auto" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Fire Brigade</div>
            <div className="text-2xl font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.fire || countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </a>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1.5">
            <PhoneCall className="w-5 h-5 text-stone-700 mx-auto" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Non-Emergency Advice</div>
            <div className="text-xl font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.medicalOnCall ||
               countryData.emergencyNumbers?.medicalNonEmergency ||
               countryData.emergencyNumbers?.healthAdvice ||
               (countryData.id === 'germany' ? '116 117' :
                countryData.id === 'uk' ? '111' :
                countryData.id === 'canada' ? '811' :
                countryData.id === 'uae' ? '800 342' :
                countryData.id === 'singapore' ? '1777' :
                countryData.id === 'australia' ? '1800 022 222' :
                countryData.id === 'usa' ? '311' :
                countryData.id === 'japan' ? '#7119' :
                countryData.id === 'netherlands' ? '0900-8844' :
                countryData.id === 'brazil' ? '136' :
                countryData.id === 'thailand' ? '1155' :
                countryData.id === 'mexico' ? '078' :
                countryData.id === 'indonesia' ? '110' :
                countryData.id === 'vietnam' ? '113' : 'Local Clinic')}
            </div>
          </div>
        </div>

        {/* Embassy Emergency Guidance */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
          <div className="font-serif text-stone-900 text-sm flex items-center gap-2">
            <Building2 className="w-4 h-4 text-stone-700" />
            <span>Consular Assistance & Lost Passports</span>
          </div>
          <p className="text-stone-600 leading-relaxed text-[11px]">
            If your passport is stolen or you require emergency repatriation, contact your home country’s Embassy or Consulate in {countryData.name}. File an immediate police report with local municipal police as formal proof.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full text-xs transition-colors"
        >
          Close Emergency SOS
        </button>
      </div>
    </div>
  );
}
