import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Share2,
  Download,
  CalendarPlus,
  ShieldAlert,
  Building2,
  Users,
  Compass,
  Check,
  FileCheck2,
  CreditCard,
  Bot
} from 'lucide-react';
import { generateRelocationICS } from '../utils/calendarExporter';
import { copyScenarioLinkToClipboard } from '../utils/urlStateManager';

export default function CommandCenter({
  userProfile,
  countryData,
  budgetData,
  completedTasks,
  onToggleTask,
  onSelectTab,
  onOpenProfile,
  onExportPDF
}) {
  const [copiedLink, setCopiedLink] = useState(false);

  // Calculate days remaining
  let daysRemaining = 30;
  let departureStatusText = '30-Day Departure Countdown Mode';
  if (userProfile.departureDate) {
    const diff = new Date(userProfile.departureDate) - new Date();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days > 0) {
      daysRemaining = days;
      departureStatusText = `${days} Days Until Takeoff`;
    } else if (days === 0) {
      daysRemaining = 0;
      departureStatusText = 'Departing Today! Safe Travels ✈️';
    } else {
      daysRemaining = 0;
      departureStatusText = 'Post-Arrival Settlement Mode';
    }
  }

  // Calculate high-level stats
  const totalCompleted = Object.values(completedTasks).filter(Boolean).length;
  // Estimate baseline tasks ~ 45
  const estimatedTotal = 42;
  const readinessPercent = Math.min(100, Math.round((totalCompleted / estimatedTotal) * 100));

  // Dynamic next 3 immediate actions based on real expat priority hierarchy
  const actionCandidates = [
    {
      id: 'task_visa_biometrics',
      title: 'Schedule Visa Biometrics & Consular Submission',
      tab: 'visa',
      urgent: daysRemaining <= 45,
      desc: `Confirm official consulate or VFS appointment for ${countryData.name}. Verify apostilled certificates.`
    },
    {
      id: 'task_nre_nro_conversion',
      title: 'Initiate Pre-Departure NRE / NRO Bank Conversion',
      tab: 'tax_banking',
      urgent: daysRemaining <= 30,
      desc: 'Mandatory under FEMA / local regulations before losing home tax residency status.'
    },
    {
      id: 'task_temp_housing_anmeldung',
      title: 'Lock In "Registration-Eligible" Temporary Housing',
      tab: 'bureaucracy',
      urgent: daysRemaining <= 30,
      desc: 'Ensure host provides signed landlord confirmation (Wohnungsgeberbestätigung / lease) for municipal registration.'
    },
    {
      id: 'task_pediatric_vaccines',
      title: 'Translate Pediatric Immunization Records',
      tab: 'family_hub',
      urgent: userProfile.persona.includes('family'),
      desc: 'Translate vaccine booklet into target language for mandatory school / Kita enrollment.'
    },
    {
      id: 'task_pet_rnatt_titer',
      title: 'Book Pet ISO Microchip & Rabies Titer Draw',
      tab: 'pets',
      urgent: userProfile.hasPets,
      desc: 'Mandatory 90-day waiting period applies before international flight entry.'
    },
    {
      id: 'task_it_salary_counter',
      title: 'Verify IT Salary Offer Against Regional Percentiles',
      tab: 'compensation',
      urgent: true,
      desc: `Check if gross compensation package clears statutory Blue Card / work pass thresholds in ${userProfile.destinationCity}.`
    }
  ];

  // Pick top 3 uncompleted or highest priority
  const nextActions = actionCandidates
    .filter(a => !completedTasks[a.id])
    .slice(0, 3);

  const handleShareLink = async () => {
    const success = await copyScenarioLinkToClipboard(userProfile);
    if (success) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleCalendarExport = () => {
    generateRelocationICS({
      departureDate: userProfile.departureDate,
      userProfile,
      countryData
    });
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Master Mission Control Header Card */}
      <div className="relative bg-[#181325] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-500/20 border border-terracotta-400/40 text-terracotta-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Mission Control</span>
              </span>
              <span className="text-xs font-mono text-stone-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {userProfile.origin?.toUpperCase()} ➔ {userProfile.destinationCity?.toUpperCase()}, {countryData.name?.toUpperCase()} {countryData.flag}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{departureStatusText}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans tracking-tight text-white leading-tight">
              Relocation Command Center
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Unified real-time roadmap combining consular milestones, tax-residency alerts, housing dependencies, and your active relocation timeline.
            </p>

            {/* Quick Action Toolbar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={handleCalendarExport}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm"
                title="Download .ics file for Apple & Google Calendar"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Sync to Calendar (.ics)</span>
              </button>

              <button
                onClick={handleShareLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm"
                title="Copy shareable link with current configuration"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-terracotta-400" />}
                <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Share Scenario Link'}</span>
              </button>

              <button
                onClick={onExportPDF}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-stone-300" />
                <span>Export PDF Binder</span>
              </button>

              <button
                onClick={() => onSelectTab('copilot')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold transition-all shadow-sm"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Ask AI Copilot</span>
              </button>
            </div>
          </div>

          {/* Readiness Dial Card */}
          <div className="p-5 rounded-2xl bg-[#241c36] border border-white/10 flex flex-col justify-between min-w-[260px] lg:max-w-xs w-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                Relocation Readiness
              </span>
              <span className="text-xs font-mono font-bold text-terracotta-400">
                {readinessPercent}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-full transition-all duration-700"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-stone-400 text-[10px] block">Tasks Completed</span>
                <span className="font-bold text-white">{totalCompleted} / {estimatedTotal}</span>
              </div>
              <div>
                <span className="text-stone-400 text-[10px] block">Departure In</span>
                <span className="font-bold text-white">{daysRemaining} Days</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Critical Bottlenecks & Smart Advisory Alert */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="text-xs space-y-0.5">
            <div className="font-bold text-stone-900 text-sm">
              Critical Path Bottleneck Warning:
            </div>
            <p className="text-stone-700 leading-relaxed">
              Your flight departure is set for {userProfile.departureDate || 'within 30 days'}. Indian & foreign bank accounts must be converted to NRO/NRE status before establishing non-residency to avoid FEMA penalties.
            </p>
          </div>
        </div>
        <button
          onClick={() => onSelectTab('tax_banking')}
          className="shrink-0 px-3.5 py-1.5 rounded-xl bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-colors self-start sm:self-auto flex items-center gap-1"
        >
          <span>Tax & Banking Engine</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* 3. "Next 3 Immediate Actions" Priority Cards (User Spec) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold font-sans text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta-500" />
            <span>Top 3 Immediate Next Actions</span>
          </h2>
          <span className="text-xs font-mono text-stone-500">Curated specifically for your current relocation phase</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nextActions.map((action, idx) => (
            <div
              key={action.id}
              className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-terracotta-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-terracotta-50 text-terracotta-600 font-mono text-xs font-bold flex items-center justify-center border border-terracotta-200">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    High Priority
                  </span>
                </div>

                <h3 className="font-bold text-stone-900 text-sm group-hover:text-terracotta-600 transition-colors">
                  {action.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {action.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectTab(action.tab)}
                  className="text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1"
                >
                  <span>Open Module</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onToggleTask(action.id)}
                  className={`p-1.5 rounded-lg border transition-all ${
                    completedTasks[action.id]
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : 'bg-stone-50 text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 border-stone-200'
                  }`}
                  title="Mark as completed"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
