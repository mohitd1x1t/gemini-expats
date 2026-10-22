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
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Clock,
  AlertTriangle
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

  // Calculate days remaining if departure date set
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
      title: '1-Month Countdown & First 30 Days',
      desc: 'Week-by-week departure tasks (T-30) and Day 1-30 arrival survival roadmap (Anmeldung, SIM, Bank).',
      icon: Calendar,
      color: 'from-amber-500/20 to-orange-500/20 text-orange-400 border-orange-500/30',
      badge: 'Time Critical'
    },
    {
      id: 'packing',
      title: 'Smart Packing Matrix',
      desc: 'Tailored for bachelor vs. family with kids/pets. Luggage weight optimizer, adapters, and banned medications.',
      icon: Luggage,
      color: 'from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30',
      badge: `${userProfile.persona.toUpperCase()}`
    },
    {
      id: 'budget',
      title: 'Relocation & Living Budget',
      desc: 'Calculate upfront sunk costs (flights, deposit, temporary stay) and monthly expenses in local currency.',
      icon: Calculator,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
      badge: `${countryData?.currency || 'EUR'}`
    },
    {
      id: 'compensation',
      title: 'IT Salary & Market Benchmark',
      desc: 'Verify if your tech compensation package meets market percentiles, statutory work visa thresholds, and purchasing power.',
      icon: TrendingUp,
      color: 'from-amber-500/20 to-stone-500/20 text-stone-700 border-stone-300',
      badge: 'Compensation'
    },
    {
      id: 'rules',
      title: 'Strict Local Laws & Fines',
      desc: 'Unspoken rules that get expats fined: quiet hours (Ruhezeit), torrenting penalties, recycling, TV licenses.',
      icon: ShieldAlert,
      color: 'from-red-500/20 to-rose-500/20 text-rose-400 border-rose-500/30',
      badge: 'High Importance'
    },
    {
      id: 'housing',
      title: 'House Hunting & Scam Defense',
      desc: 'Top verified portals (ImmoScout24, Rightmove, Funda), deposit rules, tenant dossier, and red flags.',
      icon: Home,
      color: 'from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30',
      badge: 'Portals & Leases'
    },
    {
      id: 'dietary',
      title: 'Dietary, Supermarkets & Faith',
      desc: 'Vegetarian, Vegan, Halal, Jain food cards in local language. Ethnic grocery store finder & places of worship.',
      icon: UtensilsCrossed,
      color: 'from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30',
      badge: `${userProfile.dietary.toUpperCase()}`
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Health Insurance',
      desc: 'Statutory vs Private insurance requirements, finding English-speaking Hausarzt/GP, and emergency steps.',
      icon: HeartPulse,
      color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
      badge: 'Mandatory'
    },
    {
      id: 'visa',
      title: 'Visa & Document Legalization',
      desc: 'EU Blue Card, Skilled Worker, Express Entry pathways, apostilles, sworn translations, and embassy prep.',
      icon: FileCheck2,
      color: 'from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30',
      badge: 'Entry Clearance'
    },
    {
      id: 'vault',
      title: 'Document Vault & Apostille Tracker',
      desc: 'Track physical originals, Hague apostilles, sworn court certified translations, and encrypted 300-DPI cloud backups.',
      icon: FileText,
      color: 'from-amber-500/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30',
      badge: 'Legalization'
    },
    {
      id: 'transport',
      title: 'Driving, IDP & Public Transit',
      desc: '6-month foreign license grace period, reciprocity conversion rules, winter tire laws, and monthly transit passes.',
      icon: Car,
      color: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
      badge: 'Mobility'
    },
    {
      id: 'pets',
      title: 'Pet Relocation & Biosecurity',
      desc: 'ISO 11784/11785 microchip, 3-month rabies titer RNATT timeline, government vet certificates, and IATA airline crates.',
      icon: Dog,
      color: 'from-orange-500/20 to-rose-500/20 text-orange-300 border-orange-500/30',
      badge: 'Biosecurity'
    },
    {
      id: 'copilot',
      title: 'Gemini AI Relocation Copilot',
      desc: 'Ask any bespoke relocation question, explore child-friendly neighborhoods, or simulate embassy interviews.',
      icon: Bot,
      color: 'from-blue-600/20 to-indigo-600/20 text-blue-300 border-blue-500/40',
      badge: 'Gemini 3.8 Flash'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Relocation Blueprint Banner — Minimalist Architectural Portfolio Style */}
      <div className="relative bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              <span>Relocation Protocol · {userProfile.origin?.toUpperCase()} → {countryData?.name?.toUpperCase()}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12]">
              Relocations composed with <span className="italic font-serif font-light text-stone-500">clarity</span>, intention, and calm.
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans max-w-xl">
              Your comprehensive, personalized action guide for settling in <strong className="font-medium text-stone-900">{userProfile.destinationCity}, {countryData?.name}</strong>. Curated with legal precision, neighborhood intelligence, and verified relocation checklists.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectTab('countdown')}
                className="text-xs px-6 py-2.5 rounded-full bg-stone-900 hover:bg-black text-white font-medium shadow-sm transition-all flex items-center gap-2 tracking-wide"
              >
                <span>Start T-30 Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenProfile}
                className="text-xs px-5 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-900 text-stone-800 font-medium transition-all"
              >
                Modify Route & Settings
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Framed Destination Card with Crop Marks */}
          <div className="relative p-6 sm:p-7 bg-[#faf9f5] border border-stone-200/90 rounded-2xl min-w-[300px] lg:max-w-sm w-full space-y-4 shadow-sm">
            {/* Architectural corner crop marks */}
            <div className="crop-bracket-tl" />
            <div className="crop-bracket-tr" />
            <div className="crop-bracket-bl" />
            <div className="crop-bracket-br" />

            <div className="border-b border-stone-200/80 pb-3">
              <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-stone-400">
                Destination Profile
              </div>
              <div className="font-serif text-xl font-normal text-stone-900 flex items-center gap-2 mt-0.5">
                <span>{userProfile.destinationCity}, {countryData?.name}</span>
                <span>{countryData?.flag}</span>
              </div>
              <div className="text-[11px] font-mono text-stone-500 mt-1 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-stone-400" />
                <span>{daysRemainingText}</span>
              </div>
            </div>

            {/* 4 Minimalist Indicators */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-stone-200/50">
                <span className="text-stone-500 font-mono text-[11px]">Est. Monthly Living</span>
                <span className="font-mono font-medium text-stone-900">
                  ~{countryData?.symbol}{monthlyCostEstimate.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-stone-200/50">
                <span className="text-stone-500 font-mono text-[11px]">Readiness Score</span>
                <span className="font-mono font-medium text-stone-900">
                  {readinessPercent}% ({completionStats.completed}/{completionStats.total})
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-stone-200/50">
                <span className="text-stone-500 font-mono text-[11px]">Emergency Direct</span>
                <span className="font-mono font-medium text-stone-900">
                  {countryData?.emergencyNumbers?.police || '112'} / {countryData?.emergencyNumbers?.ambulance || '112'}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-stone-500 font-mono text-[11px]">Party & Diet</span>
                <span className="font-medium text-stone-900 capitalize">
                  {userProfile.persona.replace('_', ' ')} · {userProfile.dietary}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical First Alert Box — Clean Minimalist Notice */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 text-stone-800 text-xs sm:text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-2">
        <div className="font-serif text-base font-normal text-stone-900 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
          <span>Three Essential Golden Rules for Relocating to {countryData?.name}:</span>
        </div>
        <div className="text-stone-600 leading-relaxed space-y-1 sm:space-y-0 sm:flex sm:items-center sm:gap-6 pt-1 text-xs">
          <div>
            <strong className="text-stone-900 font-medium">1. Official Address:</strong> Ensure initial stay provides registered proof of residence for tax ID issuance.
          </div>
          <div>
            <strong className="text-stone-900 font-medium">2. Rental Verification:</strong> Never transfer security deposits prior to in-person key exchange.
          </div>
          <div>
            <strong className="text-stone-900 font-medium">3. Original Certificates:</strong> Always carry apostilles, degrees, and visas in cabin luggage.
          </div>
        </div>
      </div>

      {/* Core Relocation Modules Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-stone-200/80 pb-3">
          <h2 className="font-serif text-2xl font-normal text-stone-900">
            Relocation Chapters & Protocols
          </h2>
          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
            13 Modules · Select to inspect details
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const indexStr = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={m.id}
                onClick={() => onSelectTab(m.id)}
                className="group relative p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-stone-900 transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-stone-400 font-medium">
                    {indexStr}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                    {m.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-stone-900 group-hover:text-stone-600 transition-colors mb-2 flex items-center justify-between">
                  <span>{m.title}</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
