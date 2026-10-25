import React from 'react';
import {
  Calendar,
  Luggage,
  Calculator,
  ShieldAlert,
  Home,
  UtensilsCrossed,
  HeartPulse,
  FileCheck2,
  FileText,
  Car,
  Dog,
  Bot,
  TrendingUp,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function DashboardOverview({
  userProfile,
  countryData,
  budgetData,
  onSelectTab,
  onOpenProfile,
  completionStats
}) {
  const readinessPercent = completionStats.total > 0
    ? Math.round((completionStats.completed / completionStats.total) * 100)
    : 0;

  let daysRemainingText = '1 Month Countdown Mode';
  if (userProfile.departureDate) {
    const diffTime = new Date(userProfile.departureDate) - new Date();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      daysRemainingText = `${diffDays} Days Until Departure`;
    } else if (diffDays === 0) {
      daysRemainingText = 'Departing Today!';
    } else {
      daysRemainingText = 'Relocated - Post-Arrival Mode';
    }
  }

  const personaKey = userProfile.persona.toLowerCase().includes('family') ? 'family' : 'bachelor';
  const monthlyCostEstimate = budgetData ? budgetData[personaKey]?.rent + budgetData[personaKey]?.groceries + budgetData[personaKey]?.transport : 1500;

  const modules = [
    {
      id: 'countdown',
      title: '30-Day Departure & Survival Timeline',
      desc: `Week-by-week departure checklist and arrival survival tasks for ${countryData?.name || 'your destination'} (registration, SIM, banking).`,
      icon: Calendar,
      badge: 'Time Critical'
    },
    {
      id: 'budget',
      title: 'Living Cost & Budget Calculator',
      desc: 'Calculate upfront sunk costs (flights, deposit, temporary stay) and monthly expenses in local currency.',
      icon: Calculator,
      badge: `${countryData?.currency || 'EUR'}`
    },
    {
      id: 'compensation',
      title: 'IT Salary & Market Benchmark',
      desc: 'Verify if your tech compensation package meets market percentiles, statutory work visa thresholds, and purchasing power.',
      icon: TrendingUp,
      badge: 'Compensation'
    },
    {
      id: 'visa',
      title: 'Visa Pathways & Document Dossiers',
      desc: `Official entry visas, legal document attestations, government fees in home currency, and biometric registration in ${countryData?.name || 'your destination'}.`,
      icon: FileCheck2,
      badge: 'Consular Portals'
    },
    {
      id: 'housing',
      title: 'House Hunting & Scam Defense',
      desc: `Top verified rental portals in ${countryData?.name || 'your destination'}, lease contracts, tenant dossier, and deposit safeguards.`,
      icon: Home,
      badge: 'Portals & Leases'
    },
    {
      id: 'rules',
      title: 'Local Rules, Strict Laws & Fines',
      desc: `Crucial statutory regulations, steep municipal fines, and everyday workplace norms in ${countryData?.name || 'your destination'}.`,
      icon: ShieldAlert,
      badge: 'Statutory'
    },
    {
      id: 'dietary',
      title: 'Dietary, Supermarkets & Faith',
      desc: 'Vegetarian, Vegan, Halal, Jain food cards in local language. Ethnic grocery store finder & places of worship.',
      icon: UtensilsCrossed,
      badge: `${userProfile.dietary.toUpperCase()}`
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Health Insurance',
      desc: `Insurance architecture, pediatric care, and finding English-speaking medical doctors in ${countryData?.name || 'your destination'}.`,
      icon: HeartPulse,
      badge: 'Mandatory'
    },
    {
      id: 'vault',
      title: 'Document Vault & Legalization Tracker',
      desc: 'Track physical originals, Hague apostilles, sworn court certified translations, and encrypted 300-DPI cloud backups.',
      icon: FileText,
      badge: 'Legalization'
    },
    {
      id: 'transport',
      title: 'Driving, IDP & Public Transit',
      desc: '6-month foreign license grace period, reciprocity conversion rules, winter tire laws, and monthly transit passes.',
      icon: Car,
      badge: 'Mobility'
    },
    {
      id: 'pets',
      title: 'Pet Relocation & Biosecurity',
      desc: 'ISO 11784/11785 microchip, 3-month rabies titer RNATT timeline, government vet certificates, and IATA airline crates.',
      icon: Dog,
      badge: 'Biosecurity'
    },
    {
      id: 'copilot',
      title: 'Gemini AI Relocation Copilot',
      desc: 'Ask any bespoke relocation question, explore child-friendly neighborhoods, or simulate consular visa interviews.',
      icon: Bot,
      badge: 'Gemini 3.8 Flash'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* SaaS Relocation Blueprint Banner */}
      <div className="relative bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              <span>Itinerary: {userProfile.origin?.toUpperCase()} ➔ {countryData?.name?.toUpperCase()} {countryData?.flag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-stone-900 leading-[1.15]">
              Relocation blueprint for <span className="text-terracotta-500">{userProfile.destinationCity}, {countryData?.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              Your personalized relocation suite. Curated with verified consular pathways, housing portal benchmarks, and interactive checklists.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectTab('countdown')}
                className="text-xs px-6 py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>Start 30-Day Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenProfile}
                className="text-xs px-5 py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold transition-all"
              >
                Modify Route & Persona
              </button>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="p-6 bg-[#faf9f6] border border-stone-200 rounded-2xl min-w-[280px] lg:max-w-sm w-full space-y-4 shadow-sm">
            <div className="border-b border-stone-200/80 pb-3">
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                Destination Profile
              </div>
              <div className="text-xl font-bold font-sans text-stone-900 flex items-center gap-2 mt-0.5">
                <span>{userProfile.destinationCity}, {countryData?.name}</span>
                <span>{countryData?.flag}</span>
              </div>
              <div className="text-xs font-mono text-stone-500 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                <span>{daysRemainingText}</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500 font-mono">Est. Monthly Living</span>
                <span className="font-mono font-bold text-stone-900">
                  ~{countryData?.symbol}{monthlyCostEstimate.toLocaleString()} {countryData?.currency}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500 font-mono">Checklist Progress</span>
                <span className="font-mono font-bold text-terracotta-600">
                  {readinessPercent}% ({completionStats.completed}/{completionStats.total})
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-stone-500 font-mono">Party & Diet</span>
                <span className="font-semibold text-stone-900 capitalize">
                  {userProfile.persona.replace('_', ' ')} · {userProfile.dietary}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Critical First Alert Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2.5">
        <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Three Essential Golden Rules for Relocating to {countryData?.name}:</span>
        </div>
        <div className="text-stone-600 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
            <strong className="text-stone-900 block font-semibold mb-1">1. Official Address (Anmeldung / BSN):</strong>
            Ensure your initial apartment allows municipal address registration to issue your local tax ID.
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
            <strong className="text-stone-900 block font-semibold mb-1">2. Rental Safeguards:</strong>
            Never wire security deposits to foreign bank accounts before viewing the apartment or signing a lease.
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
            <strong className="text-stone-900 block font-semibold mb-1">3. Original Certificates:</strong>
            Carry original apostilled marriage/birth certificates and university degrees in your carry-on luggage.
          </div>
        </div>
      </div>

      {/* Core Relocation Modules Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-stone-200/80 pb-3">
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-stone-900">
            Relocation Chapters & Tools
          </h3>
          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
            12 Modules · Click to launch tool
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={m.id}
                onClick={() => onSelectTab(m.id)}
                className="group relative p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-terracotta-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-stone-400 font-semibold">
                      {indexStr}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 group-hover:border-terracotta-200 group-hover:bg-terracotta-50 group-hover:text-terracotta-700 transition-colors">
                      {m.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-sans text-stone-900 group-hover:text-terracotta-600 transition-colors mb-2 flex items-center justify-between">
                    <span>{m.title}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                  </h4>

                  <p className="text-xs text-stone-500 leading-relaxed font-normal">
                    {m.desc}
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
