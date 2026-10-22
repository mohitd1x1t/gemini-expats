import React from 'react';
import { HeartPulse, ShieldCheck, Stethoscope, AlertTriangle, PhoneCall, Pill } from 'lucide-react';

export default function HealthcareGuide({ countryData, userProfile }) {
  const health = countryData.healthcare || {
    type: 'Universal / Dual System',
    details: 'Health insurance is legally mandatory for all residents.',
    generalPractitioner: 'Register with a local GP as soon as you have an address.',
    prescriptions: 'Prescriptions are filled at local pharmacies with standard copay.'
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <HeartPulse className="w-3.5 h-3.5 text-stone-700" />
            <span>Medical & Healthcare Navigation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Healthcare System & Medical Coverage in <em className="italic font-serif">{countryData.name}</em> {countryData.flag}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Mandatory health insurance protocols, family doctor (GP) registration, and emergency healthcare procedures.
          </p>
        </div>

        {/* Emergency quick dial */}
        <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3 self-start md:self-auto">
          <div className="w-9 h-9 bg-white border border-stone-200 text-stone-800 rounded-full flex items-center justify-center shrink-0">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Medical Ambulance</div>
            <div className="text-lg font-serif font-medium text-stone-900">
              {countryData.emergencyNumbers?.ambulance || '112'}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Insurance System Breakdown */}
      <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center gap-2 text-stone-900 font-serif text-lg">
          <ShieldCheck className="w-4 h-4 text-stone-700" />
          <span>System Architecture: {health.type}</span>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {health.details}
        </p>

        {health.englishFriendlyInsurers && (
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <strong className="text-stone-900 font-serif">English-Speaking Insurance Providers:</strong>{' '}
            <span>{health.englishFriendlyInsurers.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Dedicated Family Healthcare & Pediatric Care Card */}
      {userProfile.persona.toLowerCase().includes('family') && (
        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 font-serif text-stone-900 text-base">
            <HeartPulse className="w-4 h-4 text-stone-700" />
            <span>Family Healthcare: Statutory Dependent Co-Insurance & Pediatric Care</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-stone-600">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">1. Zero-Cost Dependent Cover:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                In most public systems (TK/Barmer in Germany, NHS in UK, SUS in Brazil), minor children and non-working spouses are automatically co-insured under the working parent's statutory policy at <strong>zero additional monthly charge</strong>.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">2. Dedicated Pediatrician (Kinderarzt):</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                Children must be registered with a local pediatrician for mandatory developmental milestone screenings (*U1 through U9* examinations in Germany) and school health admissions.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium">3. Mandatory School Vaccinations:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                Bring certified pediatric immunization records. Proof of measles vaccination (*Masernschutzgesetz*) is legally mandatory before any child can attend daycare (Kita) or school in Europe.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3 Pillars: General Practitioner, Prescriptions, Dental Warning */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-stone-700" />
            <span>General Practitioner (GP)</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {health.generalPractitioner || 'Register with a local family doctor in your neighborhood. Most medical specialists require a formal referral from your primary GP.'}
          </p>
          <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
            Tip: Use portals like Doctolib or Jameda to locate English-speaking practitioners.
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <Pill className="w-4 h-4 text-stone-700" />
            <span>Prescriptions & Pharmacies</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {health.prescriptions || 'Bring written letters from your home physician with active chemical compound names. Local pharmacies dispense medication with standard co-payments.'}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2">
          <div className="font-serif text-stone-900 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-800" />
            <span>Dental & Optical Advisory</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            In most national health systems (UK NHS, Germany, Canada), adult dental restorations, crowns, and optical glasses are either excluded or only minimally subsidized.
          </p>
          <div className="text-[11px] font-mono text-amber-900 pt-2 border-t border-stone-100">
            Complete extensive dental work in your home country prior to departure!
          </div>
        </div>
      </div>
    </div>
  );
}
