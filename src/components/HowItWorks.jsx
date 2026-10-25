import React from 'react';
import { Info } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Measure Your Space',
      subtitle: 'Select your origin, target city, and travel party — bachelor, couple, or family with children.',
      actionHint: 'Route & Persona'
    },
    {
      num: '2',
      title: 'Pick System & Extras',
      subtitle: 'Choose official visa pathways, check IT salary percentiles, dietary availability, and local laws.',
      actionHint: 'Visa & Benchmarks'
    },
    {
      num: '3',
      title: 'Get Instant Estimate',
      subtitle: 'See an itemized breakdown of rent deposits, consular fees, and first-month reserves in your home currency.',
      actionHint: 'Dual-Currency Costs'
    },
    {
      num: '4',
      title: 'Plan With Confidence',
      subtitle: 'Use your ballpark figures to negotiate employer relocation packages, compare leases, and talk to landlords.',
      actionHint: '30-Day Checklist'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-stone-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2">
            Four simple steps to calculate your relocation outlay and prepare your legal landing.
          </p>
        </div>

        {/* 4 Cards Grid (Matching Image 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-stone-300 transition-all flex flex-col items-center text-center group"
            >
              {/* Terracotta Number Badge */}
              <div className="w-12 h-12 rounded-full bg-terracotta-500 text-white font-bold text-base flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                {step.num}
              </div>

              <h3 className="text-lg font-bold font-sans text-stone-900 mb-2.5">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Info Callout Banner (Matching Image 2) */}
        <div className="mt-10 p-5 rounded-2xl bg-terracotta-50/60 border border-terracotta-200/70 flex items-center gap-3.5 max-w-4xl mx-auto text-xs text-stone-700">
          <div className="w-7 h-7 rounded-full bg-terracotta-100 border border-terracotta-200 text-terracotta-600 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <p className="leading-relaxed">
            <strong className="text-stone-900 font-semibold">Reliable verified data:</strong> Our estimates are built from thousands of completed international expat relocations, updated monthly with current consular visa fees, rental market averages, and statutory IT salary thresholds.
          </p>
        </div>

      </div>
    </section>
  );
}
