import React from 'react';
import { HeartPulse, ShieldCheck, Stethoscope, AlertTriangle, PhoneCall, Pill } from 'lucide-react';

const COUNTRY_HEALTHCARE_META = {
  germany: {
    dependentCover: 'Minor children and non-working spouses are automatically co-insured under your statutory public fund (TK, Barmer, etc.) at zero additional monthly charge (Familienversicherung).',
    pediatrician: 'Register children with a local pediatrician (Kinderarzt) for mandatory developmental screening examinations (U1 through U9) and school admission.',
    vaccinations: 'Certified immunization booklet (Impfpass) with mandatory proof of measles vaccination (Masernschutzgesetz) is legally required for Kita and school.',
    portalTip: 'Use Doctolib or Jameda to locate English-speaking doctors and book online.'
  },
  uae: {
    dependentCover: 'In Dubai and Abu Dhabi, health insurance is mandatory for all dependents. The primary sponsor must purchase a DHA/DOH-compliant private medical insurance policy for spouse and children.',
    pediatrician: 'Book appointments at dedicated pediatric departments in top hospital groups (Mediclinic, Aster, King’s College Hospital Dubai, Al Jalila Children’s, or Cleveland Clinic Abu Dhabi).',
    vaccinations: 'Submit attested child immunization records adhering to the UAE National Immunization Program (BCG, Hepatitis B, DTaP, MMR) for school enrollment.',
    portalTip: 'Use the Okadoc app, Dubai Health app, or book directly via hospital group portals (Mediclinic, Aster, NMC).'
  },
  uk: {
    dependentCover: 'Dependents on your Skilled Worker visa are eligible for full National Health Service (NHS) hospital and primary care through the prepaid Immigration Health Surcharge (IHS).',
    pediatrician: 'Primary child care is delivered by your local NHS GP surgery, supported by NHS Health Visitors for developmental milestone assessments.',
    vaccinations: 'Provide your child’s Red Book or official immunization record to your registered NHS GP practice for UK childhood schedule alignment.',
    portalTip: 'Use the official NHS App or Doctify to find vetted GPs and clinic ratings.'
  },
  brazil: {
    dependentCover: 'Constitutional free emergency and hospital care is provided by the SUS for everyone. However, expat families universally add dependents to private health plans (Amil, Bradesco Saúde, SulAmérica) for private hospitals.',
    pediatrician: 'Private insurance gives immediate access to top pediatric clinics and hospitals (Hospital Infantil Sabará, Albert Einstein, Sírio-Libanês in São Paulo).',
    vaccinations: 'Proof of vaccinations recorded in the child health booklet (Caderneta de Vacinação) is strictly required by law for Brazilian school enrollment.',
    portalTip: 'Use Doctoralia.com.br to filter doctors in your neighborhood by language (English) and insurance network.'
  },
  usa: {
    dependentCover: 'Employer plans allow adding spouse and children under family coverage, with monthly premiums deducted directly from pre-tax payroll salary.',
    pediatrician: 'Select an in-network board-certified pediatrician within your insurer’s PPO/HMO network to avoid out-of-network balance billing.',
    vaccinations: 'State public school districts mandate official pediatric immunization records (Form 3231 / state specific) signed by a physician.',
    portalTip: 'Use Zocdoc or your health plan member portal (Blue Cross, Aetna, Cigna, UnitedHealthcare) to find in-network doctors.'
  },
  canada: {
    dependentCover: 'Dependents of valid work permit holders qualify for provincial public healthcare (OHIP in Ontario, MSP in BC, RAMQ in Quebec). Maintain private expat travel insurance during any initial waiting periods.',
    pediatrician: 'Register children with a family physician or pediatric clinic for routine checkups and developmental milestones.',
    vaccinations: 'School boards require submitting childhood immunization records online to the local Public Health Unit (e.g. Toronto Public Health).',
    portalTip: 'Use Lumino Health or provincial health registries to find family doctors accepting new patients.'
  },
  netherlands: {
    dependentCover: 'Children under 18 are insured for free under a parent’s basic Dutch health insurance policy (basisverzekering) with no deductible (eigen risico) applied to children.',
    pediatrician: 'Primary pediatric care is provided by your family doctor (Huisarts) and community youth healthcare clinics (Consultatiebureau) for baby checkups.',
    vaccinations: 'The National Immunization Program (Rijksvaccinatieprogramma) provides free childhood vaccines coordinated through local GGD centers.',
    portalTip: 'Use ZorgkaartNederland.nl or contact your neighborhood Huisartsenpraktijk.'
  },
  singapore: {
    dependentCover: 'Expats rely on private employer group health insurance or international comprehensive family policies. Polyclinics provide primary care.',
    pediatrician: 'Consult private pediatric clinics in Mount Elizabeth, Thomson Medical, or Gleneagles, or polyclinics for everyday ailments.',
    vaccinations: 'Diphtheria and Measles vaccinations are compulsory by law under the Infectious Diseases Act for foreign children applying for student passes and DP.',
    portalTip: 'Use the HealthHub app or Doctor Anywhere for video consultations and clinic bookings.'
  },
  australia: {
    dependentCover: 'Temporary visa holders (Subclass 482) must maintain Overseas Visitor Health Cover (OVHC) for all family members. Permanent residents (Subclass 189/190) receive Medicare coverage.',
    pediatrician: 'General Practitioners (GPs) handle primary pediatric care and make formal referrals to private pediatric specialists when required.',
    vaccinations: 'Australia enforces the strict "No Jab, No Play" policy—up-to-date immunizations recorded on the Australian Immunisation Register (AIR) are mandatory for childcare subsidies and enrollment.',
    portalTip: 'Use HotDoc or HealthEngine to find local GPs offering online booking and bulk-billing.'
  },
  japan: {
    dependentCover: 'Dependents are covered under Employees\' Health Insurance (Shakai Hoken) at 30% copay, and local municipal wards provide Child Medical Subsidies covering almost 100% of child medical fees.',
    pediatrician: 'Local pediatric clinics (Shōnika) handle routine illnesses; ward health centers conduct mandatory infant checkups at 4 months, 1.5 years, and 3 years.',
    vaccinations: 'Municipal ward offices issue vaccination voucher coupons (Yobō Sesshuken) for free standard childhood immunizations.',
    portalTip: 'Use Tokyo Medical Information Service Himawari or Japan Healthcare Info (JHI) for English-speaking clinics.'
  }
};

export default function HealthcareGuide({ countryData, userProfile }) {
  const health = countryData.healthcare || {
    type: 'Universal / Dual System',
    details: 'Health insurance is legally mandatory for all residents.',
    generalPractitioner: 'Register with a local GP as soon as you have an address.',
    prescriptions: 'Prescriptions are filled at local pharmacies with standard copay.'
  };

  const meta = COUNTRY_HEALTHCARE_META[countryData.id] || COUNTRY_HEALTHCARE_META.germany;

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

        {health.facilities && (
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <strong className="text-stone-900 font-serif">Top Medical Centers:</strong>{' '}
            <span>{health.facilities}</span>
          </div>
        )}
      </div>

      {/* Dedicated Family Healthcare & Pediatric Care Card */}
      {userProfile.persona?.toLowerCase().includes('family') && (
        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 font-serif text-stone-900 text-base">
            <HeartPulse className="w-4 h-4 text-stone-700" />
            <span>Family Healthcare: Dependent Insurance & Pediatric Protocols in {countryData.name}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-stone-600">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">1. Dependent Coverage Architecture:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {meta.dependentCover}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">2. Pediatric Care & Clinics:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {meta.pediatrician}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
              <strong className="text-stone-900 block font-medium font-serif">3. School Vaccination Mandates:</strong>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                {meta.vaccinations}
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
            {meta.portalTip}
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
            In most national health systems, adult dental restorations, crowns, and optical glasses are either excluded or only minimally subsidized.
          </p>
          <div className="text-[11px] font-mono text-amber-900 pt-2 border-t border-stone-100">
            Complete extensive dental work in your home country prior to departure!
          </div>
        </div>
      </div>
    </div>
  );
}
