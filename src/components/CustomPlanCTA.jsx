import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Download, Bot, Sparkles } from 'lucide-react';

export default function CustomPlanCTA({
  userProfile,
  countryData,
  onExportPDF,
  onOpenProfile,
  onOpenCopilot
}) {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Senior Software Engineer',
    departureWindow: 'Within 30 Days'
  });

  return (
    <section className="py-16 sm:py-20 bg-[#faf9f6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-stone-900 tracking-tight">
              Ready for the next step?
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Your estimate is a great starting point. Export your personalized relocation binder as an itemized PDF or ask our AI Copilot your exact visa, schooling, and lease questions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 text-sm">Official Consular Portals & Document Dossiers:</span>
                  <p className="text-stone-500 text-xs">Direct verified links to government immigration services with 6-stage procedural steps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 text-sm">IT Salary & Market Standard Percentiles:</span>
                  <p className="text-stone-500 text-xs">Check whether your offered compensation matches the median and 75th percentiles for your experience level.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 text-sm">100% Private Local Browser Workspace:</span>
                  <p className="text-stone-500 text-xs">Zero signup walls or password requirements. All checklists save directly in your local browser.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onExportPDF}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Export Relocation PDF Binder</span>
              </button>

              <button
                onClick={onOpenCopilot}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-stone-200 hover:border-stone-400 text-stone-700 text-xs font-semibold shadow-sm transition-all"
              >
                <Bot className="w-4 h-4 text-terracotta-500" />
                <span>Ask AI Copilot</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dark Form Card (Matching Image 2) */}
          <div className="lg:col-span-6">
            <div className="bg-[#181325] text-white p-7 sm:p-9 rounded-3xl shadow-xl space-y-5 border border-white/10">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                  Get a detailed plan
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Share your relocation route and turn your estimate into a personalized checklist.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                    Your Relocation Route
                  </label>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white flex items-center justify-between">
                    <span>
                      {userProfile.origin || 'India'} ➔ {userProfile.destinationCity || 'Berlin'}, {countryData?.name || 'Germany'}
                    </span>
                    <button
                      onClick={onOpenProfile}
                      className="text-terracotta-400 hover:text-terracotta-300 text-[11px] font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Travel Party
                    </label>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white capitalize">
                      {userProfile.persona.replace('_', ' ')}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Dietary & Faith
                    </label>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white capitalize">
                      {userProfile.dietary} ({userProfile.faith || 'None'})
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                    Departure Horizon
                  </label>
                  <select
                    value={formData.departureWindow}
                    onChange={(e) => setFormData({ ...formData, departureWindow: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#241c36] border border-white/15 text-xs text-white focus:outline-none focus:border-terracotta-500"
                  >
                    <option value="Within 30 Days">Within 30 Days (Immediate Departure)</option>
                    <option value="1 to 3 Months">1 to 3 Months (Preparing Visa)</option>
                    <option value="3 to 6 Months">3 to 6 Months (Interviewing & Offers)</option>
                    <option value="Exploring">Just Exploring Relocation Options</option>
                  </select>
                </div>

                <button
                  onClick={onExportPDF}
                  className="w-full py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  <span>Download Custom Relocation Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-stone-400">
                  Instant generation • Free and no account needed
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
