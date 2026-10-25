import React, { useState } from 'react';
import {
  Users,
  Baby,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Syringe,
  AlertTriangle,
  School,
  Sparkles,
  Heart,
  Calendar,
  DollarSign,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import {
  PEDIATRIC_VACCINE_SCHEDULES,
  SCHOOLING_TIERS_DATA,
  SPOUSAL_WORK_RIGHTS
} from '../data/familyAndPediatricData';

export default function FamilyWorkspace({ countryData, userProfile }) {
  const [activeTab, setActiveTab] = useState('vaccines'); // 'members', 'vaccines', 'schooling', 'spouse_rights'
  const [schoolingTier, setSchoolingTier] = useState('privateBilingual'); // 'publicLocal', 'privateBilingual', 'international'

  // Household members state
  const [members, setMembers] = useState([
    {
      id: 'primary',
      name: 'Primary Expat',
      role: 'Principal Applicant',
      passportExpiry: '2028-11-20',
      visaType: 'Work Visa / EU Blue Card / EP',
      status: 'Documents Complete'
    },
    {
      id: 'spouse',
      name: 'Accompanying Spouse',
      role: 'Dependent Partner',
      passportExpiry: '2029-04-15',
      visaType: 'Dependent Residence Permit',
      status: 'Apostilled Marriage Certificate Ready'
    },
    {
      id: 'child1',
      name: 'Child 1 (Age 4)',
      role: 'Dependent Child',
      passportExpiry: '2027-08-10',
      visaType: 'Family Reunion D-Visa',
      status: 'Vaccine Translation Pending'
    }
  ]);

  const schoolingInfo = SCHOOLING_TIERS_DATA[countryData.id] || SCHOOLING_TIERS_DATA.germany;
  const spousalRights = SPOUSAL_WORK_RIGHTS[countryData.id] || SPOUSAL_WORK_RIGHTS.germany;

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5">
            <Users className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Family, Spouse & Early-Childhood Atelier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight font-normal">
            Household Integration & Pediatric Compliance
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
            Multi-member document tracking, side-by-side pediatric vaccine translation, schooling and Kita tier fee modeling, and spousal career work authorizations.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-50 px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-mono text-stone-700 shrink-0">
          <Baby className="w-4 h-4 text-terracotta-500" />
          <span>Active Persona: <strong>{userProfile.persona.replace('_', ' ').toUpperCase()}</strong></span>
        </div>
      </div>

      {/* Module Sub-Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl w-fit text-xs font-semibold">
        <button
          onClick={() => setActiveTab('members')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'members'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Household Members Workspace
        </button>
        <button
          onClick={() => setActiveTab('vaccines')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'vaccines'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Pediatric Vaccine Translation
        </button>
        <button
          onClick={() => setActiveTab('schooling')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'schooling'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Schooling & Kita Tiers
        </button>
        <button
          onClick={() => setActiveTab('spouse_rights')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'spouse_rights'
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Spousal Career & Work Rights
        </button>
      </div>

      {/* Tab 1: Household Members Workspace */}
      {activeTab === 'members' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <span>Manage separate passport expirations, visa types, and consular checklists for each household member.</span>
            <span className="font-mono font-bold text-stone-900">{members.length} Registered Members</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {members.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-stone-900 text-base">{m.name}</div>
                  <span className="text-[10px] font-mono uppercase bg-terracotta-50 text-terracotta-700 px-2.5 py-0.5 rounded-full border border-terracotta-200">
                    {m.role}
                  </span>
                </div>

                <div className="text-xs text-stone-600 space-y-1.5 pt-2 border-t border-stone-100 font-mono text-[11px]">
                  <div>
                    <span className="text-stone-400">Passport Expiry:</span> {m.passportExpiry}
                  </div>
                  <div>
                    <span className="text-stone-400">Visa Pathway:</span> {m.visaType}
                  </div>
                  <div className="pt-1 text-emerald-700 font-semibold">
                    ✓ {m.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Pediatric Vaccine Translation & Compliance */}
      {activeTab === 'vaccines' && (
        <div className="space-y-6">
          
          {/* Legal Compliance Notice */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-700" />
            <p className="leading-relaxed">
              <strong>Mandatory School Compliance:</strong> In Germany (Masernschutzgesetz), the USA, and Brazil, schools and daycares legally require certified proof of pediatric vaccines. Ensure your child’s vaccination booklet (e.g. Indian IAP / UIP card) is officially translated or transcribed by a local pediatrician into the national yellow vaccination pass (Impfpass / Carteira de Vacinação).
            </p>
          </div>

          {/* Side-by-Side Vaccine Mapper */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
              <Syringe className="w-4 h-4 text-stone-600" />
              <span>Side-by-Side Vaccine Mapping: Origin vs. {countryData.name}</span>
            </h3>

            <div className="space-y-3">
              {PEDIATRIC_VACCINE_SCHEDULES.map((v) => (
                <div
                  key={v.scientificName}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div>
                      <div className="font-bold text-stone-900 text-sm">
                        {v.scientificName}
                      </div>
                      <div className="text-xs text-stone-500">
                        {v.diseasesCovered}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-lg border border-terracotta-200 self-start sm:self-auto">
                      Timing: {v.timing}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-stone-400 block mb-1">
                        Local Scientific & Brand Names ({countryData.name}):
                      </span>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 font-mono text-[11px] text-stone-800">
                        {v.localTerms[countryData.id] || v.localTerms.germany}
                        <div className="text-[10px] text-stone-400 mt-1">
                          Common Brands: {v.brandNames.join(', ')}
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-stone-400 block mb-1">
                        Daycare & School Mandate Status:
                      </span>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        {v.schoolMandatory[countryData.id] || v.schoolMandatory.germany}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tab 3: Schooling & Kita Tiers */}
      {activeTab === 'schooling' && (
        <div className="space-y-6">
          
          {/* Tier Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'publicLocal', title: '1. Public Local State School', desc: 'Tuition-free / subsidized local language immersion' },
              { id: 'privateBilingual', title: '2. Private Bilingual School', desc: '50% English / 50% Local language dual curriculum' },
              { id: 'international', title: '3. International IB / American', desc: '100% English instruction, seamless global mobility' }
            ].map(tier => (
              <button
                key={tier.id}
                onClick={() => setSchoolingTier(tier.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  schoolingTier === tier.id
                    ? 'bg-[#181325] text-white border-terracotta-500 shadow-md ring-1 ring-terracotta-500'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-terracotta-300'
                }`}
              >
                <div className={`font-bold text-sm ${schoolingTier === tier.id ? 'text-white' : 'text-stone-900'}`}>
                  {tier.title}
                </div>
                <p className={`text-[11px] mt-1 ${schoolingTier === tier.id ? 'text-stone-300' : 'text-stone-500'}`}>
                  {tier.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Active Schooling Tier Details */}
          {schoolingInfo[schoolingTier] && (
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                    Selected Schooling Model · {countryData.name}
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900 font-normal">
                    {schoolingInfo[schoolingTier].name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-mono font-bold text-stone-900">
                    {schoolingInfo[schoolingTier].monthlyTuition}
                  </div>
                  <div className="text-[11px] font-mono text-stone-400">
                    Upfront Capital Levy / Fee: {schoolingInfo[schoolingTier].upfrontFees}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-1">
                  <span className="font-bold text-emerald-950 font-serif">Key Advantages:</span>
                  <p className="text-emerald-900 leading-relaxed">
                    {schoolingInfo[schoolingTier].pros}
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 font-serif">Trade-offs & Constraints:</span>
                  <p className="text-stone-600 leading-relaxed">
                    {schoolingInfo[schoolingTier].cons}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab 4: Spousal Career & Work Rights */}
      {activeTab === 'spouse_rights' && spousalRights && (
        <div className="space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Dependent Work Authorization · {countryData.name}
                </span>
                <h3 className="font-serif text-xl text-stone-900 font-normal">
                  {spousalRights.dependentVisaType}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                {spousalRights.workRightStatus}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1.5">
                <strong className="text-stone-900 block font-serif">Remote Work for Overseas Employer:</strong>
                <p className="leading-relaxed text-stone-600">
                  {spousalRights.remoteWorkForOverseasEmployer}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1.5">
                <strong className="text-stone-900 block font-serif">Language Requirement for Visa:</strong>
                <p className="leading-relaxed text-stone-600">
                  {spousalRights.languageRequirement || 'Exempt for highly skilled / EU Blue Card spouses.'}
                </p>
              </div>
            </div>

            {spousalRights.integrationResources && (
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-900 font-serif block mb-2">
                  Curated Career & Language Integration Portals:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {spousalRights.integrationResources.map((res, i) => (
                    <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                      <div className="font-bold text-stone-900">{res.name}</div>
                      <p className="text-stone-500 text-[11px] mt-0.5">{res.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
