import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function TestimonialsAndFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      stars: 5,
      quote:
        '“We budgeted our Berlin relocation with ExpatCompass before accepting the job offer. The final visa costs and apartment deposit landed within 10% of the estimate — no surprises.”',
      initials: 'MR',
      name: 'Marcus Rivera',
      title: 'Senior Software Engineer, Bengaluru ➔ Berlin'
    },
    {
      stars: 5,
      quote:
        '“I run a distributed engineering team and recommend all relocating devs check their compensation package here first. The IT salary benchmark and Golden Visa portal links saved everyone weeks of guesswork.”',
      initials: 'JW',
      name: 'Jennifer Walsh',
      title: 'Engineering Director, London ➔ Dubai'
    },
    {
      stars: 5,
      quote:
        '“The dietary grocery store finder and consular document checklist were lifesavers. Having all visa fees displayed in our home currency (BRL) gave my family complete confidence.”',
      initials: 'DP',
      name: 'David Park',
      title: 'Lead DevOps Engineer, São Paulo ➔ Amsterdam'
    }
  ];

  const faqs = [
    {
      q: 'How accurate are the relocation cost estimates and currency conversions?',
      a: 'Estimates are calibrated using official government consular fee schedules, municipal deposit regulations (typically 2-3 months rent), and living cost indices updated monthly across all 10 destination hubs. The dual-currency converter calculates real-time parity in your origin currency (INR, BRL, USD, EUR, GBP, AED, etc.).'
    },
    {
      q: 'Does ExpatCompass provide official government portal links?',
      a: 'Yes. Every visa pathway across Germany, the UAE, Singapore, the UK, Netherlands, USA, Canada, Australia, Japan, and Brazil lists direct verified HTTPS links to the official government portals (such as UAE Pass, BundID, Singpass, IND Portal, CEAC DS-160, and GCKey).'
    },
    {
      q: 'How is the IT salary benchmark calculated?',
      a: 'Our salary engine incorporates verified compensation datasets for software engineers, tech leads, and managers across junior (1-3 yrs), mid (3-6 yrs), senior (6-10 yrs), and lead (10+ yrs) brackets. It flags whether your offered compensation meets statutory skilled visa thresholds (such as the EU Blue Card minimums or Singapore COMPASS requirements).'
    },
    {
      q: 'Is my personal relocation data kept private?',
      a: 'Completely private. ExpatCompass does not require creating an account or signing in. All checklist progress, custom budget parameters, and notes are stored strictly in your browser’s local storage on your own device.'
    },
    {
      q: 'Can I export my relocation plan as a PDF?',
      a: 'Yes. Click the "PDF" button in the navigation header or the download button below to export an itemized, beautifully styled relocation binder with all checklists, visa roadmaps, and emergency contact numbers.'
    }
  ];

  return (
    <div>
      {/* 1. What People Say Section (Deep Dark Background matching Image 3) */}
      <section className="py-20 bg-[#181325] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#241c36] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Star Rating (5 orange stars) */}
                  <div className="flex items-center gap-1 text-terracotta-400 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracotta-500 text-terracotta-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-terracotta-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-[11px] text-stone-400 font-mono">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Frequently Asked Questions Section (Matching bottom of Image 3) */}
      <section id="faq" className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-stone-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/90 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm hover:bg-stone-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
