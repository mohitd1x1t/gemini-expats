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
      {/* Hero Relocation Blueprint Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 border border-slate-700/70 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-300">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>{daysRemainingText}</span>
              <span className="text-slate-500">•</span>
              <span>{userProfile.persona.replace('_', ' ').toUpperCase()}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Relocating from <span className="text-slate-300">{userProfile.origin}</span> to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                {userProfile.destinationCity}, {countryData?.name} {countryData?.flag}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Your comprehensive, personalized action hub. Covering mandatory city registration, rental scam protection, dietary labels, high-fine local laws, healthcare, and your step-by-step T-30 countdown.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={onOpenProfile}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-colors"
              >
                Change Destination / Settings
              </button>
              <button
                onClick={() => onSelectTab('countdown')}
                className="text-xs px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/30 transition-all flex items-center gap-1.5"
              >
                <span>Start T-30 Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics & Readiness Card */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 min-w-[280px]">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Readiness</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-white">{readinessPercent}%</div>
              <div className="text-[11px] text-slate-400 mt-1">
                {completionStats.completed} of {completionStats.total} actions done
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Emergency</span>
                <PhoneCall className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl font-black text-rose-400">
                {countryData?.emergencyNumbers?.police || '112'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Ambulance: {countryData?.emergencyNumbers?.ambulance || '112'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
              <div className="text-xs text-slate-400 mb-1">Est. Monthly Living</div>
              <div className="text-xl font-bold text-emerald-400">
                ~{countryData?.symbol}{monthlyCostEstimate.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Rent + food + transit ({userProfile.persona})
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
              <div className="text-xs text-slate-400 mb-1">Diet & Faith</div>
              <div className="text-base font-bold text-amber-300 capitalize truncate">
                {userProfile.dietary}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 capitalize">
                {userProfile.faith || 'Secular'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical First Alert Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3.5">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-amber-300">
            Top 3 Golden Rules for Moving to {countryData?.name}:
          </div>
          <div className="text-amber-200/90 leading-relaxed">
            <strong>1. Temporary Stay:</strong> Ensure your first apartment offers official city registration proof (e.g. <em>Wohnungsgeberbestätigung</em> / address proof) so you can get your tax ID on week 1.{' '}
            <strong>2. Scams:</strong> Never wire deposits before receiving the keys in person.{' '}
            <strong>3. Carry-on Docs:</strong> Never pack original degrees, marriage/birth certificates, or visas in checked luggage.
          </div>
        </div>
      </div>

      {/* 9 Core Relocation Pillars Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Core Relocation Modules & Guides
          </h2>
          <span className="text-xs text-slate-400">Click any card to explore details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => onSelectTab(m.id)}
                className="group relative p-5 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 transition-all cursor-pointer shadow-sm hover:shadow-indigo-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-xl border bg-gradient-to-br ${m.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50">
                    {m.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{m.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
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
