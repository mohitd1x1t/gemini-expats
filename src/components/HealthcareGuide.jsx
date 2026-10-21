import React from 'react';
import { HeartPulse, ShieldCheck, Stethoscope, AlertTriangle, PhoneCall, Pill, CheckCircle2 } from 'lucide-react';

export default function HealthcareGuide({ countryData, userProfile }) {
  const health = countryData.healthcare || {
    type: 'Universal / Dual System',
    details: 'Health insurance is legally mandatory for all residents.',
    generalPractitioner: 'Register with a local GP as soon as you have an address.',
    prescriptions: 'Prescriptions are filled at local pharmacies with standard copay.'
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <HeartPulse className="w-4 h-4" />
            Medical & Healthcare Navigation
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Healthcare System & Insurance in {countryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Mandatory health cover requirements, GP registration, and emergency medical protocols.
          </p>
        </div>

        {/* Emergency quick dial */}
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700 flex items-center gap-3">
          <div className="p-2 bg-rose-500/20 text-rose-400 rounded-xl">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="text-slate-400">Medical Emergency Ambulance</div>
            <div className="text-lg font-black text-white">
              {countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Insurance System Breakdown */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 border border-slate-700 space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
          <ShieldCheck className="w-5 h-5" />
          <span>System Structure: {health.type}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {health.details}
        </p>

        {health.englishFriendlyInsurers && (
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300">
            <strong className="text-white">Top English-Speaking Insurers for Expats:</strong>{' '}
            {health.englishFriendlyInsurers.join(', ')}
          </div>
        )}
      </div>

      {/* Dedicated Family Healthcare & Pediatric Care Card */}
      {userProfile.persona.toLowerCase().includes('family') && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/40 space-y-3">
          <div className="flex items-center gap-2 font-bold text-indigo-300 text-sm">
            <HeartPulse className="w-5 h-5 text-indigo-400" />
            Family Healthcare: Statutory Dependent Co-Insurance & Pediatric Care
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">1. Free Dependent Co-Insurance:</strong>
              <p className="text-slate-400 leading-relaxed">
                In most public systems (TK/Barmer in Germany, NHS in UK, SUS in Brazil), minor children and non-working spouses are automatically co-insured under the working parent's statutory plan at <strong>€0 / R$ 0 extra monthly cost</strong>!
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">2. Dedicated Pediatrician (Kinderarzt):</strong>
              <p className="text-slate-400 leading-relaxed">
                Children must be registered with a local pediatrician for mandatory developmental milestone screenings (e.g. *U1 through U9* checkups in Germany) and school health clearances.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
              <strong className="text-white block">3. Mandatory School Vaccinations:</strong>
              <p className="text-slate-400 leading-relaxed">
                Bring certified pediatric immunization records. Proof of measles vaccination (*Masernschutzgesetz*) is legally mandatory before any child can attend kindergarten (Kita) or school in Europe.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3 Pillars: General Practitioner, Prescriptions, Dental Warning */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="font-bold text-sm text-white flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            General Practitioner (GP)
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {health.generalPractitioner || 'Register with a local family doctor in your neighborhood. Most specialists require a formal referral from your GP.'}
          </p>
          <div className="text-[11px] text-emerald-400 pt-1">
            Tip: Search online platforms like Doctolib or Jameda to find English-speaking doctors.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="font-bold text-sm text-white flex items-center gap-2">
            <Pill className="w-4 h-4 text-cyan-400" />
            Prescriptions & Pharmacies
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {health.prescriptions || 'Bring written letters from your doctor back home with the active chemical substance names. Local pharmacies fill prescriptions with a standard copay.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="font-bold text-sm text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Dental & Optical Warning
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            In most national health systems (UK NHS, Germany, Canada), routine adult dental cleanings, root canals, and spectacles/contact lenses are either not covered or only partially subsidized.
          </p>
          <div className="text-[11px] text-amber-400 pt-1">
            Get full dental checkups done in your home country before departure!
          </div>
        </div>
      </div>
    </div>
  );
}
